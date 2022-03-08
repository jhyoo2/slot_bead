import { _decorator, Component, Node, instantiate, Vec3, Sprite } from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";

@ccclass("BaseRoom")
export default class BaseRoom extends Component {
  assetManager: AssetManager = null;
  @property(Node)
  roomNode: Node = null;

  async onLoad() {
    this.assetManager = AssetManager.getInstance();
  }
  setBaseRoom(idx) {
    const baseSprite = this.roomNode.getComponent(Sprite);
    if (idx == 0) {
      baseSprite.spriteFrame = this.assetManager.assetDic["RoomScene/Bg002_1"];
    } else if (idx == 1) {
      baseSprite.spriteFrame = this.assetManager.assetDic["RoomScene/Bg002_2"];
    }
  }
}
