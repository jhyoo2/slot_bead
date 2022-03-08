import { _decorator, Component, Node, Label } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ImageNode")
export default class ImageNode extends Component {
  async onLoad() {}
  initWithURL(url) {
    console.log(url);
  }
}
