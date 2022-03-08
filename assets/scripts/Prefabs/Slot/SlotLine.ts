import {
  _decorator,
  Component,
  Node,
  UITransform,
  instantiate,
  v3,
  tween,
  Tween,
  Vec3,
} from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";
import SlotIcon from "./SlotIcon";

@ccclass("SlotLine")
export default class SlotLine extends Component {
  @property(Node)
  contentLayer: Node | null = null;
  assetManager: AssetManager = null;
  lineIdx: number;
  slotData: any;
  iconArray: Node[] = [];
  initSlotLine(lineIdx, slotData) {
    this.lineIdx = lineIdx;
    this.slotData = slotData;
    this.assetManager = AssetManager.getInstance();
    this.contentLayer
      .getComponent(UITransform)
      .setContentSize(slotData.railSize);
    const iconPrefab = this.assetManager.prefabDic["SlotIcon"];
    for (var i = 0; i < this.slotData.rowNum + 4; i++) {
      const iconObject = instantiate(iconPrefab);
      this.contentLayer.insertChild(iconObject, 10);
      iconObject.setPosition(this.getIconPosition(i));
      // //   console.log(this.lineIdx, i, this.getLinePos(i).y);
      const iconScript: SlotIcon = iconObject.getComponent("SlotIcon");
      iconScript.iconData.rowIdx = i - 2;
      const iconKind = Math.floor(Math.random() * 5) + 1;
      const backKind = Math.floor(Math.random() * 3) + 1;
      iconScript.initIcon(iconKind, backKind, this.slotData);
      this.iconArray.push(iconObject);
    }
  }
  getIconPosition(rowIdx) {
    return v3(
      0,
      (-(this.slotData.rowNum + 4) / 2) *
        (this.slotData.iconSize.height + this.slotData.iconDiff) +
        (this.slotData.iconSize.height + this.slotData.iconDiff) *
          (rowIdx + 0.5)
    );
  }
  slotStartInfinity(slotSpeed) {
    var self = this;
    tween(this.node)
      .tag(108)
      .repeatForever(
        tween()
          .call(() => {
            self.lineMove(slotSpeed);
            self.addRandomIcon();
          })
          .delay(slotSpeed)
      )
      .start();
  }
  stopSlot(moveNum, time, callback, iconData?) {
    // // console.log(this.lineIdx, iconData);
    Tween.stopAllByTag(108, this.node);
    this.slotStart(moveNum, time, callback, iconData);
  }
  slotStart(moveNum, time, callback, iconData?) {
    var self = this;
    var spinTime = 0;
    tween(this.node)
      .repeat(
        moveNum,
        tween()
          .call(() => {
            spinTime++;
            self.lineMove(time / moveNum);
            if (spinTime == moveNum - 2) {
              if (iconData) {
                self.addIcon(iconData);
              } else {
                self.addRandomIcon();
              }
            } else {
              self.addRandomIcon();
            }
          })
          .delay(time / moveNum)
      )
      .call(() => {
        callback(this.lineIdx, this.getIconKind());
      })
      .start();
  }
  lineMove(time) {
    var self = this;
    var eraseTarget = null;
    for (var j in this.iconArray) {
      const iconObject = this.iconArray[j];
      const iconScript = iconObject.getComponent("SlotIcon") as SlotIcon;
      iconScript.iconData.rowIdx--;
      iconScript.updateNumber();
      const myPos = this.getIconPosition(iconScript.iconData.rowIdx + 2);
      // //   console.log(this.lineIdx, j, iconScript.iconData.rowIdx, myPos.y);
      tween(iconObject)
        .to(time, { position: new Vec3(0, myPos.y, 0) })
        .start();
      if (iconScript.iconData.rowIdx == -3) {
        // // console.log(iconObject);
        eraseTarget = iconObject;
      }
    }
    if (eraseTarget) {
      tween(eraseTarget)
        .delay(time)
        .call(() => {
          self.removeNode(eraseTarget);
        })
        .start();
      this.iconArray.splice(this.iconArray.indexOf(eraseTarget), 1);
    }
  }
  addRandomIcon() {
    const iconPrefab = this.assetManager.prefabDic["SlotIcon"];
    const iconObject = instantiate(iconPrefab);
    this.contentLayer.insertChild(iconObject, 10);
    iconObject.setPosition(this.getIconPosition(4));
    // //   console.log(this.lineIdx, i, this.getLinePos(i).y);
    const iconScript: SlotIcon = iconObject.getComponent("SlotIcon");
    iconScript.iconData.rowIdx = 4 - 2;
    const iconKind = Math.floor(Math.random() * 5) + 1;
    const backKind = Math.floor(Math.random() * 3) + 1;
    iconScript.initIcon(iconKind, backKind, this.slotData);
    this.iconArray.push(iconObject);
  }
  addIcon(iconData) {
    const iconPrefab = this.assetManager.prefabDic["SlotIcon"];
    const iconObject = instantiate(iconPrefab);
    this.contentLayer.insertChild(iconObject, 10);
    iconObject.setPosition(this.getIconPosition(4));
    // //   console.log(this.lineIdx, i, this.getLinePos(i).y);
    const iconScript: SlotIcon = iconObject.getComponent("SlotIcon");
    iconScript.iconData.rowIdx = 4 - 2;
    iconScript.initIcon(iconData.iconKind, iconData.backKind, this.slotData);
    this.iconArray.push(iconObject);
  }
  getIconKind() {
    const slotDataDic = {};
    for (var j in this.iconArray) {
      const iconObject = this.iconArray[j];
      const iconScript = iconObject.getComponent("SlotIcon") as SlotIcon;
      slotDataDic[iconScript.iconData.rowIdx] = iconScript.iconData;
    }
    return slotDataDic;
  }
  getIconObject(rowIdx) {
    for (var j in this.iconArray) {
      const iconObject = this.iconArray[j];
      const iconScript = iconObject.getComponent("SlotIcon") as SlotIcon;
      if (iconScript.iconData.rowIdx === rowIdx) {
        return iconObject;
      }
    }
    return null;
  }
  removeNode(node) {
    node.removeFromParent(true);
  }
}
