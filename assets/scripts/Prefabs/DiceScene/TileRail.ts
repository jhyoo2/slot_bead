import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("TileRail")
export default class TileRail extends Component {
  @property(Node)
  railNode: Node | null = null;
  @property(Node)
  objNode: Node | null = null;
  @property(Node)
  objArray: Node[] = [];

  setTileObj(idx) {
    this.railNode.active = false;
    for (var i in this.objArray) {
      this.objArray[i].active = false;
      if (Number(i) == idx) {
        this.objArray[i].active = true;
      }
    }
  }
}
