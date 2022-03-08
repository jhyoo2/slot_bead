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
  Tween,
} from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";
import { CCUtils } from "../../Common/CCUtils";

@ccclass("RoomBlock")
export default class RoomBlock extends Component {
  assetManager: AssetManager = null;

  @property(Node)
  blockObject: Node = null;

  @property(Node)
  outerObject: Node = null;

  @property(Node)
  roomBlockArray: Node[] = [];

  @property(Node)
  roomLabelArray: Node[] = [];

  roomType: number = null;
  blockData = {
    placeable: false,
    occupied: false,
  };
  blockPosition = new Vec3(0, 0, 0);

  async onLoad() {
    this.assetManager = AssetManager.getInstance();
    this.outerObject.active = false;
    this.outerObject.getComponent(UIOpacityComponent).opacity = 0;
    this.deActivateBlock();
  }

  setRoomBlockType(roomType) {
    this.roomType = roomType;
    this.roomBlockArray[0].active = false;
    this.roomBlockArray[1].active = false;
    this.roomBlockArray[2].active = false;
    this.roomBlockArray[3].active = false;
    this.roomBlockArray[4].active = false;
    this.roomBlockArray[5].active = false;

    if (roomType !== 99) {
      this.blockData.placeable = true;
    }

    if (roomType === 0) {
      // default
      this.roomBlockArray[3].active = true;
      this.roomBlockArray[4].active = true;
      this.roomBlockArray[5].active = true;
    } else if (roomType === 1) {
      // only ground
      this.roomBlockArray[0].active = true;
    } else if (roomType === 2) {
      // only left
      this.roomBlockArray[1].active = true;
    } else if (roomType === 3) {
      // only right
      this.roomBlockArray[2].active = true;
    } else if (roomType === 4) {
      // only left & ground
      this.roomBlockArray[0].active = true;
      this.roomBlockArray[1].active = true;
    } else if (roomType === 5) {
      // only right & ground
      this.roomBlockArray[0].active = true;
      this.roomBlockArray[2].active = true;
    } else if (roomType === 6) {
      // only left & right & ground
      this.roomBlockArray[0].active = true;
      this.roomBlockArray[1].active = true;
      this.roomBlockArray[2].active = true;
    } else if (roomType === 7) {
      // only left & right
      this.roomBlockArray[1].active = true;
      this.roomBlockArray[2].active = true;
    }
  }
  activateBlock() {
    this.outerObject.getComponent(UIOpacityComponent).opacity = 255;
    this.outerObject.active = true;
    Tween.stopAllByTag(108, this.outerObject);
    tween(this.outerObject)
      .tag(108)
      .call(() => {
        CCUtils.fadeIn(this.outerObject, 0.2);
      })
      .delay(1.0)
      .call(() => {
        CCUtils.fadeOut(this.outerObject, 1);
      })
      .start();
  }
  deActivateBlock() {
    this.outerObject.active = true;
    Tween.stopAllByTag(108, this.outerObject);
    tween(this.outerObject)
      .call(() => {
        CCUtils.fadeOut(this.outerObject, 0.01);
      })
      .start();
  }
}
