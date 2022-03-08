import {
  _decorator,
  Component,
  Node,
  UITransform,
  Sprite,
  Label,
  tween,
} from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";

@ccclass("SlotIcon")
export default class SlotIcon extends Component {
  @property(Node)
  backNode: Node | null = null;
  @property(Node)
  iconNode: Node | null = null;
  @property(Node)
  numberNode: Node | null = null;
  slotData: any;
  iconData = {
    backKind: 0,
    iconKind: 0,
    rowIdx: 0,
  };
  assetManager: AssetManager = null;
  initIcon(iconIdx, backKind, slotData) {
    this.assetManager = AssetManager.getInstance();
    this.slotData = slotData;
    this.iconData.iconKind = iconIdx;
    this.iconData.backKind = backKind;
    this.backNode.getComponent(UITransform).setContentSize(slotData.iconSize);
    const iconSprite = this.iconNode.getComponent(Sprite);
    iconSprite.spriteFrame =
      this.assetManager.assetDic["Slot/candy_" + iconIdx + "_0"];
    const backSprite = this.backNode.getComponent(Sprite);
    backSprite.spriteFrame = this.assetManager.assetDic["Slot/back" + backKind];
    this.numberNode.getComponent(Label).string = String(this.iconData.rowIdx);
  }
  updateNumber() {
    this.numberNode.getComponent(Label).string = String(this.iconData.rowIdx);
  }
  crushIcon(time) {
    const sprite = this.iconNode.getComponent(Sprite);
    sprite.spriteFrame =
      this.assetManager.assetDic["Slot/candy_" + this.iconData.iconKind + "_1"];
    //     tween(this.iconNode)
    //       .delay(time)
    //       .to(0.2, { scale: 3.0 })
    //       .delay(0.05)
    //       .to(0.1, { scale: 0 })
    //       .start();
  }
}
