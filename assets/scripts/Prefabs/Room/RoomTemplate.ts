import {
  _decorator,
  Component,
  Node,
  UITransform,
  Sprite,
  Label,
  tween,
  instantiate,
  Vec3,
  UIOpacity,
  UIOpacityComponent,
} from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";
import RoomBlock from "./RoomBlock";

@ccclass("RoomTemplate")
export default class RoomTemplate extends Component {
  assetManager: AssetManager = null;
  @property(Node)
  roomNode: Node = null;
  @property(Node)
  decoRoomNode: Node = null;
  @property(Node)
  gridRoomNode: Node = null;
  roomBlockArray: Node[] = [];
  roomCount = 18;
  roomScale = 6 / this.roomCount;
  async onLoad() {
    this.assetManager = AssetManager.getInstance();
    this.initRoomBlock();
  }
  initRoomBlock() {
    const roomBlockPrefab = this.assetManager.prefabDic["RoomBlock"];
    for (var z = 0; z < this.roomCount; z++) {
      for (var x = 0; x < this.roomCount; x++) {
        for (var y = 0; y < this.roomCount; y++) {
          // const roomIdx = i * 6 + j;
          const roomNode = instantiate(roomBlockPrefab) as Node;
          roomNode.setPosition(this.getBlockPosition(x, y, z));
          roomNode.setScale(
            new Vec3(this.roomScale, this.roomScale, this.roomScale)
          );
          // roomNode.getComponent(UIOpacity).opacity =
          //   100 + 155 * (((x % 2) + (y % 2) + (z % 2)) % 2);
          this.gridRoomNode.addChild(roomNode);
          const roomBlockScript = roomNode.getComponent(
            "RoomBlock"
          ) as RoomBlock;
          roomBlockScript.blockPosition = new Vec3(x, y, z);
          if (z == 0) {
            roomBlockScript.setRoomBlockType(1);
            if (x == 0 && y == this.roomCount - 1) {
              roomBlockScript.setRoomBlockType(6);
            } else if (x == 0) {
              roomBlockScript.setRoomBlockType(4);
            } else if (y == this.roomCount - 1) {
              roomBlockScript.setRoomBlockType(5);
            }
          } else {
            roomBlockScript.setRoomBlockType(99);
            if (x == 0 && y == this.roomCount - 1) {
              roomBlockScript.setRoomBlockType(7);
            } else if (x == 0) {
              roomBlockScript.setRoomBlockType(2);
            } else if (y == this.roomCount - 1) {
              roomBlockScript.setRoomBlockType(3);
            }
          }
          this.roomBlockArray.push(roomNode);
        }
      }
    }
    for (var idx in this.roomBlockArray) {
      const xIdx = Math.floor(Number(idx) / this.roomCount);
      const yIdx = Number(idx) % this.roomCount;
      const roomNode = this.roomBlockArray[idx];
      roomNode.setSiblingIndex(
        this.roomCount * xIdx + this.roomCount - yIdx + 2
      );
      // console.log(xIdx, yIdx, roomNode.getSiblingIndex());
    }
  }
  showBlock(bool) {
    for (var idx in this.roomBlockArray) {
      const roomBlock = this.roomBlockArray[idx];
      const blockScript = roomBlock.getComponent("RoomBlock") as RoomBlock;
      blockScript.blockObject.active = bool;
    }
  }
  getBlockPosition(x, y, z) {
    return new Vec3(
      -420 + 70 * this.roomScale * (x + y),
      -195 +
        20 * this.roomScale * y -
        20 * this.roomScale * x +
        65 * this.roomScale * z,
      0
    );
  }
  addDecoNode(node, order, bool) {
    // this.decoRoomNode.insertChild(node, order + 1);
    if (bool) {
      this.gridRoomNode.insertChild(node, 1);
    } else {
      this.decoRoomNode.insertChild(node, order + 1);
    }
  }
  showDecoBlock(point: Vec3, size: Vec3) {
    const minX = point.x;
    const maxX = point.x + Math.max(1, size.x);
    const minY = point.y;
    const maxY = point.y + Math.max(1, size.y);
    const minZ = point.z;
    const maxZ = point.z + Math.max(1, size.z);
    // console.log(minX, maxX, minY, maxY, minZ, maxZ);
    for (var i in this.roomBlockArray) {
      const blockScript = this.roomBlockArray[i].getComponent(
        "RoomBlock"
      ) as RoomBlock;
      if (
        blockScript.blockPosition.x >= minX &&
        blockScript.blockPosition.x < maxX &&
        blockScript.blockPosition.y >= minY &&
        blockScript.blockPosition.y < maxY &&
        blockScript.blockPosition.z >= minZ &&
        blockScript.blockPosition.z < maxZ
      ) {
        blockScript.activateBlock();
      } else {
        blockScript.deActivateBlock();
      }
    }
  }
  getBlockTarget(placeType) {
    const targetBlock = [];
    if (placeType == "01") {
      for (var i in this.roomBlockArray) {
        const blockScript = this.roomBlockArray[i].getComponent(
          "RoomBlock"
        ) as RoomBlock;
        if (blockScript.blockPosition.z == 0) {
          targetBlock.push(this.roomBlockArray[i]);
        }
      }
    } else if (placeType == "02") {
      for (var i in this.roomBlockArray) {
        const blockScript = this.roomBlockArray[i].getComponent(
          "RoomBlock"
        ) as RoomBlock;
        if (blockScript.blockPosition.x == 0) {
          targetBlock.push(this.roomBlockArray[i]);
        }
      }
    } else if (placeType == "03") {
      for (var i in this.roomBlockArray) {
        const blockScript = this.roomBlockArray[i].getComponent(
          "RoomBlock"
        ) as RoomBlock;
        if (blockScript.blockPosition.y == 17) {
          targetBlock.push(this.roomBlockArray[i]);
        }
      }
    }
    return targetBlock;
  }
}
