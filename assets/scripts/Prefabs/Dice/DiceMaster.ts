import {
  _decorator,
  Component,
  Node,
  size,
  UITransform,
  instantiate,
  Size,
  Vec3,
  Sprite,
  Label,
  tween,
  Tween,
} from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";
import DiceManager from "../DiceManager";
import DiceIcon from "./DiceIcon";

@ccclass("DiceMaster")
export default class DiceMaster extends Component {
  @property(Node)
  backNode: Node | null = null;
  assetManager: AssetManager = null;
  diceManager: DiceManager = null;
  diceData: {
    startIdx: number;
    basePos: Vec3;
    blockSize: Vec3;
    radius: number;
    iconNum: number;
    iconSize: Size;
  };
  diceNumbers = { first: 0, second: 0 };
  iconArray = [];
  player = null;
  playerIdx = 0;

  initDiceMaster(diceData) {
    this.assetManager = AssetManager.getInstance();
    this.diceData = diceData;
    diceData.iconNum = 16;
    for (var i = -6; i < diceData.iconNum; i++) {
      const diceIdx = i + diceData.startIdx;
      const iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
      this.node.insertChild(iconObject, 0);
      iconObject.setPosition(this.getDicePlace(diceIdx));
      const iconScript: DiceIcon = iconObject.getComponent("DiceIcon");
      iconScript.diceIdx = Number(diceIdx);
      const iconKind = Math.floor(Math.random() * 5) + 1;
      const backKind = Math.floor(Math.random() * 3) + 1;
      iconScript.initIcon(iconKind, backKind, this.diceData);
      iconScript.updateNumber(diceIdx);
      this.iconArray.push(iconObject);
    }
    const newPlayer = new Node();
    newPlayer.setPosition(this.iconArray[6].getPosition());
    const newSprite = newPlayer.addComponent(Sprite);
    newSprite.spriteFrame = this.assetManager.assetDic["Slot/pig"];
    this.node.insertChild(newPlayer, 30);
    this.player = newPlayer;
    this.playerIdx = diceData.startIdx;
  }
  getDicePlace(diceNum): Vec3 {
    const railNum =
      diceNum >= 0
        ? Math.floor(diceNum / 4)
        : Math.floor(Math.abs(diceNum + 1) / 4) + 1;
    if (railNum % 2 == 0) {
      const rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4;
      // console.log("1", diceNum, railNum, rowNum);
      return new Vec3(
        210 + this.diceData.blockSize.x * rowNum - 540,
        this.diceData.basePos.y +
          this.diceData.blockSize.y * (diceNum - this.diceData.startIdx),
        0
      );
    } else {
      const rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4;
      // console.log("2", diceNum, railNum, rowNum);
      return new Vec3(
        1080 - 210 - this.diceData.blockSize.x * rowNum - 540,
        this.diceData.basePos.y +
          this.diceData.blockSize.y * (diceNum - this.diceData.startIdx),
        0
      );
    }
  }
  addIcon() {
    const lastIcon = this.iconArray[this.iconArray.length - 1];
    const lastIconIdx = lastIcon.getComponent(DiceIcon).diceIdx;
    const lastPos = lastIcon.getPosition();
    const prePos = this.getDicePlace(lastIconIdx);
    const postPos = this.getDicePlace(lastIconIdx + 1);

    const iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
    this.node.insertChild(iconObject, 0);
    iconObject.setPosition(
      new Vec3(
        lastPos.x + (postPos.x - prePos.x),
        lastPos.y + (postPos.y - prePos.y),
        lastPos.z + (postPos.z - prePos.z)
      )
    );
    const iconScript: DiceIcon = iconObject.getComponent(DiceIcon);
    iconScript.diceIdx = lastIconIdx + 1;
    const iconKind = Math.floor(Math.random() * 5) + 1;
    const backKind = Math.floor(Math.random() * 3) + 1;
    iconScript.initIcon(iconKind, backKind, this.diceData);
    iconScript.updateNumber(iconScript.diceIdx);
    this.iconArray.push(iconObject);
  }
  movePlayer(time) {
    this.playerIdx++;
    const postPos = this.getDicePlace(this.playerIdx);
    const playerPos = this.player.getPosition();
    tween(this.player)
      .to(time, { position: new Vec3(postPos.x, playerPos.y, playerPos.z) })
      .start();
  }
  getNextBlock() {
    for (var i in this.iconArray) {
      const iconObject = this.iconArray[i];
      const iconScript: DiceIcon = iconObject.getComponent(DiceIcon);
      if (iconScript.diceIdx == this.playerIdx + 1) {
        return iconObject;
      }
    }
  }

  sleep(t) {
    return new Promise((resolve) => setTimeout(resolve, t));
  }
  async rollWithNetwork() {
    await this.sleep(1000);
    this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
    this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;
    if (this.diceData) {
      this.diceManager.getDiceResult(this.diceNumbers);
    }
  }

  rollWithRandom() {
    this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
    this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;
    const labelNode = new Node();
    labelNode.setPosition(540, 300, 0);
    this.node.insertChild(labelNode, 30);
    const label = labelNode.addComponent(Label);
    label.fontSize = 100;
    label.lineHeight = 100;
    label.string = this.diceNumbers.first + " | " + this.diceNumbers.second;
    tween(labelNode)
      .to(0.5, { scale: new Vec3(1.5, 1.5, 1) })
      .to(0.5, { scale: new Vec3(1.0, 1.0, 1) })
      .call(() => {
        // this.movePlayer(1);
        // this.movePlayer(this.diceNumbers.first + this.diceNumbers.second);
      })
      .delay(2.0)
      .call(() => {
        labelNode.removeFromParent();
      })
      .start();
  }
  rollWithFixed(iconDatas) {}

  moveBlock(time, yPos) {
    this.addIcon();
    for (var j in this.iconArray) {
      const iconObject = this.iconArray[j];
      if (iconObject.getPosition().y <= -500) {
        iconObject.removeFromParent();
        iconObject.destroy();
        this.iconArray.splice(Number(j), 1);
        continue;
      }
      tween(iconObject)
        .by(time, { position: new Vec3(0, yPos, 0) })
        .start();
    }
  }
}
