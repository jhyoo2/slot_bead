import {
  _decorator,
  Component,
  Node,
  UITransform,
  Sprite,
  Label,
  tween,
  Vec3,
} from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";

@ccclass("DiceIcon")
export default class DiceIcon extends Component {
  @property(Node)
  backNode: Node | null = null;
  @property(Node)
  iconNode: Node | null = null;
  @property(Node)
  numberNode: Node | null = null;
  diceData: any;
  diceIdx = 0;
  iconData = {
    diceIdx: "0",
    backKind: 0,
    iconKind: 0,
  };
  assetManager: AssetManager = null;
  initIcon(iconIdx, backKind, slotData) {
    this.assetManager = AssetManager.getInstance();
    this.diceData = slotData;
    this.iconData.iconKind = iconIdx;
    this.iconData.backKind = backKind;
    this.backNode.getComponent(UITransform).setContentSize(slotData.iconSize);
    const iconSprite = this.iconNode.getComponent(Sprite);
    iconSprite.spriteFrame =
      this.assetManager.assetDic["DiceScene/Cube0" + iconIdx];
    iconSprite.sizeMode = Sprite.SizeMode.RAW;
    iconSprite.trim = true;
    this.iconNode.setScale(new Vec3(0.75, 0.75, 0.75));
    this.backNode.active = false;
    const backSprite = this.backNode.getComponent(Sprite);
    backSprite.spriteFrame = this.assetManager.assetDic["Slot/back" + backKind];
    this.numberNode.getComponent(Label).string = String(this.iconData.diceIdx);
  }
  changeIcon(iconIdx) {
    const iconSprite = this.iconNode.getComponent(Sprite);
    iconSprite.spriteFrame =
      this.assetManager.assetDic["DiceScene/Cube0" + iconIdx];
  }
  updateNumber(diceIdx?) {
    if (String(diceIdx)) {
      this.iconData.diceIdx = String(diceIdx);
    }
    this.numberNode.getComponent(Label).string = String(this.iconData.diceIdx);
  }
}
