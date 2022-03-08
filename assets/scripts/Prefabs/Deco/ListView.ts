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
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("ListView")
export default class ListView extends Component {
  @property(Node)
  arrowNode: Node | null = null;
  @property(Node)
  labelNode: Node | null = null;
  @property(Node)
  scrollNode: Node | null = null;
  @property(Node)
  contentNode: Node | null = null;
  open = false;
  selectedIdx = 0;
  dataList = [];
  callback = null;
  async onLoad() {
    this.arrowNode.on(Node.EventType.TOUCH_START, this.setActive, this);
    // this.setDataList([]);
  }
  setDataList(dataList) {
    this.dataList = dataList;
    this.setLabelIdx(0);
    this.contentNode.removeAllChildren();
    this.contentNode
      .getComponent(UITransform)
      .setContentSize(new Size(300, 80 * dataList.length));
    for (var i in dataList) {
      const obj = this.dataList[i];
      const nodeIdx = Number(i);
      const node = new Node();
      node.addComponent(UITransform).setContentSize(new Size(300, 80));
      node.setPosition(0, -40 - 80 * Number(i));
      const label = node.addComponent(Label);
      label.fontSize = 40;
      label.color = new Color(0, 0, 0, 255);
      label.lineHeight = 40;
      label.string = obj.label;
      this.contentNode.addChild(node);
      node.on(
        Node.EventType.TOUCH_START,
        () => {
          this.setLabelIdx(nodeIdx);
        },
        this
      );
    }
  }
  setActive() {
    if (this.open) {
      this.open = false;
      this.scrollNode.active = false;
    } else {
      this.open = true;
      this.scrollNode.active = true;
    }
  }
  setLabelIdx(idx) {
    this.open = false;
    this.scrollNode.active = false;
    if (this.callback) {
      this.callback(this.dataList[idx]);
    }
  }
  setLabel(tag) {
    var idx = 0;
    for (var i in this.dataList) {
      const dataTag = this.dataList[i].tag;
      if (dataTag == tag) {
        idx = Number(i);
        break;
      }
    }
    this.selectedIdx = idx;
    this.labelNode.getComponent(Label).string = this.dataList[idx].label;
  }
  resetLabel() {
    const idx = 0;
    this.selectedIdx = idx;
    this.labelNode.getComponent(Label).string = this.dataList[idx].label;
  }
}
