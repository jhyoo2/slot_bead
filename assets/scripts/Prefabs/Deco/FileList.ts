import { _decorator, Component, Node, Label } from "cc";
import { Deco } from "../../Prefabs/Deco/DecoTypes";
import FileTitle from "./FileTitle";
const { ccclass, property } = _decorator;

@ccclass("FileList")
export default class FileList extends Component {
  @property(Node)
  labelNode: Node | null = null;
  fileData: Deco = null;
  fileTitle: FileTitle = null;

  async onLoad() {}
  setLabel(string) {
    this.labelNode.getComponent(Label).string = string;
  }
  onArrowClicked(node, kind) {
    if (this.fileTitle) {
      if (kind == "up") {
        this.fileTitle.onChangeOrder(this.fileData, kind);
      } else if (kind == "down") {
        this.fileTitle.onChangeOrder(this.fileData, kind);
      }
    }
  }
  onNodeClicked(node) {
    if (this.fileTitle) {
      this.fileTitle.onFileSelected(this.fileData);
    }
  }
}
