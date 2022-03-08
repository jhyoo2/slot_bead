import {
  _decorator,
  Component,
  Node,
  UITransform,
  Sprite,
  Label,
  tween,
  Size,
  Color,
  Vec3,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("VectorList")
export default class VectorList extends Component {
  @property(Node)
  xLabelNode: Node | null = null;
  @property(Node)
  yLabelNode: Node | null = null;
  @property(Node)
  zLabelNode: Node | null = null;
  vectorData = null;
  callback = null;
  minNum = 0;
  maxNum = 18;
  async onLoad() {
    // this.setDataList([]);
  }

  setLabel(vector) {
    this.vectorData = new Vec3(vector.x, vector.y, vector.z);
    this.xLabelNode.getComponent(Label).string = String(vector.x);
    this.yLabelNode.getComponent(Label).string = String(vector.y);
    this.zLabelNode.getComponent(Label).string = String(vector.z);
  }
  resetLabel() {
    this.xLabelNode.getComponent(Label).string = "x";
    this.yLabelNode.getComponent(Label).string = "y";
    this.zLabelNode.getComponent(Label).string = "z";
  }

  upArrowClicked(node, kind) {
    if (this.callback && this.vectorData) {
      if (kind == "x") {
        if (this.vectorData.x < this.maxNum) {
          this.vectorData.x++;
        }
      } else if (kind == "y") {
        if (this.vectorData.y < this.maxNum) {
          this.vectorData.y++;
        }
      } else if (kind == "z") {
        if (this.vectorData.z < this.maxNum) {
          this.vectorData.z++;
        }
      }
      this.callback({
        tag: this.vectorData,
      });
    }
  }
  downArrowClicked(node, kind) {
    if (this.callback && this.vectorData) {
      if (kind == "x") {
        if (this.vectorData.x > this.minNum) {
          this.vectorData.x--;
        }
      } else if (kind == "y") {
        if (this.vectorData.y > this.minNum) {
          this.vectorData.y--;
        }
      } else if (kind == "z") {
        if (this.vectorData.z > this.minNum) {
          this.vectorData.z--;
        }
      }
      this.callback({
        tag: this.vectorData,
      });
    }
  }
}
