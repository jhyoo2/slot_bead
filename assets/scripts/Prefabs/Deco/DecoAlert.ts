import { _decorator, Component, Node, Label, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("DecoAlert")
export default class DecoAlert extends Component {
  @property(Node)
  titleNode: Node | null = null;
  @property(Node)
  mainNode: Node | null = null;
  @property(Node)
  yesNode: Node | null = null;
  @property(Node)
  noNode: Node | null = null;
  @property(Node)
  editLabelNode: Node | null = null;

  yesEvent = null;
  noEvent = null;
  progress = false;

  async onLoad() {}
  setTitleLabel(string) {
    this.titleNode.getComponent(Label).string = string;
  }
  setMainLabel(string) {
    this.mainNode.getComponent(Label).string = string;
  }
  buttonActive(bool) {
    this.yesNode.active = bool;
    this.noNode.active = bool;
  }
  noButtonActive(bool) {
    if (bool) {
      this.noNode.setPosition(new Vec3(0, this.noNode.getPosition().y, 1));
    } else {
      this.noNode.setPosition(new Vec3(-130, this.noNode.getPosition().y, 1));
    }
    this.noNode.active = bool;
  }
  editNodeActive(bool) {
    this.editLabelNode.active = bool;
  }
  removeAlert() {
    this.node.parent.removeFromParent();
  }
  onYesButtonClicked() {
    if (this.yesEvent) {
      this.yesEvent();
    }
  }
  onNoButtonClicked() {
    if (this.noEvent) {
      this.noEvent();
    } else {
      this.removeAlert();
    }
  }
}
