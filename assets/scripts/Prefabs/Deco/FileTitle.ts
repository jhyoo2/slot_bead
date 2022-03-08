import {
  _decorator,
  Component,
  Node,
  Label,
  Vec3,
  color,
  Sprite,
  UITransformComponent,
  Size,
  instantiate,
} from "cc";
import FileMaster from "./FileMaster";
import FileList from "./FileList";
import { Deco } from "../../Prefabs/Deco/DecoTypes";
import AssetManager from "../../DataManager/AssetManager";
const { ccclass, property } = _decorator;

@ccclass("FileTitle")
export default class FileTitle extends Component {
  assetManager: AssetManager = null;
  @property(Node)
  labelNode: Node | null = null;
  @property(Node)
  arrowNode: Node | null = null;
  @property(Node)
  scrollNode: Node | null = null;
  @property(Node)
  contentNode: Node | null = null;
  opened = false;
  tag = "00";
  fileDatas = [];
  fileMaster: FileMaster = null;

  async onLoad() {
    this.assetManager = AssetManager.getInstance();
    this.scrollNode
      .getComponent(UITransformComponent)
      .setContentSize(new Size(850, 10));
  }
  setLabel(string) {
    this.labelNode.getComponent(Label).string = string;
  }
  onArrowClicked() {
    this.opened = !this.opened;
    const scale = this.arrowNode.getScale();
    if (this.opened) {
      // open
      this.arrowNode.setScale(new Vec3(scale.x, -Math.abs(scale.y), scale.z));
      this.scrollNode.active = true;
    } else {
      // close
      this.arrowNode.setScale(new Vec3(scale.x, Math.abs(scale.y), scale.z));
      this.scrollNode.active = false;
    }
    this.fileMaster.updateFileMaster();
  }
  setActive(bool) {
    if (bool) {
      this.labelNode.getComponent(Label).color = color(255, 0, 0, 255);
      this.node.getComponent(Sprite).color = color(100, 100, 100, 255);
    } else {
      this.labelNode.getComponent(Label).color = color(0, 0, 0, 255);
      this.node.getComponent(Sprite).color = color(211, 211, 211, 255);
    }
  }
  getTitleSize() {
    if (this.opened) {
      return new Vec3(
        850,
        80 + Math.min(290, 10 + 80 * this.fileDatas.length),
        1
      );
    } else {
      return new Vec3(850, 80, 1);
    }
  }
  setFileData(fileDatas: Deco[]) {
    this.fileDatas = fileDatas;
    const length = fileDatas.length;
    this.scrollNode
      .getComponent(UITransformComponent)
      .setContentSize(new Size(850, Math.min(290, 10 + 80 * length)));
    this.contentNode.parent
      .getComponent(UITransformComponent)
      .setContentSize(new Size(850, Math.min(290, 10 + 80 * length)));
    this.contentNode
      .getComponent(UITransformComponent)
      .setContentSize(new Size(850, 90 + 80 * length));
    ///////////////////////////
    this.contentNode.removeAllChildren();
    for (var i = 0; i < length; i++) {
      const fileListNode = instantiate(this.assetManager.prefabDic["FileList"]);
      fileListNode.setPosition(new Vec3(0, -45 - 80 * i, 1));
      this.contentNode.addChild(fileListNode);
      const fileList = fileListNode.getComponent("FileList") as FileList;
      fileList.setLabel(fileDatas[i].label);
      fileList.fileData = fileDatas[i];
      fileList.fileTitle = this;
    }
  }
  onFileSelected(fileData) {
    if (this.fileMaster) {
      this.fileMaster.onFileSelected(fileData);
    }
  }
  onChangeOrder(fileData, kind) {
    if (this.fileMaster) {
      this.fileMaster.onChangeOrder(fileData, kind);
    }
  }
}
