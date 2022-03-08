import { _decorator, Component, Node, Graphics, color, UITransform } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ModalLayer")
export default class ModalLayer extends Component {
  getModalColor(winSize) {
    var myModal = this.getModalLayer(winSize);
    // /////////////////////////////////////////
    var colorNode = new Node("ColorLayer");
    colorNode.setPosition(-winSize.width / 2, -winSize.height / 2);
    var colorSprite = colorNode.addComponent(Graphics);
    colorSprite.fillColor = color(0, 0, 0, 100);
    colorSprite.rect(0, 0, winSize.width, winSize.height);
    colorSprite.fill();
    // /////////////////////////////////////////
    myModal.setSiblingIndex(1);
    myModal.addChild(colorNode);
    return myModal;
  }
  getModalBlack(winSize) {
    var myModal = this.getModalLayer(winSize);
    // /////////////////////////////////////////
    var colorNode = new Node("ColorLayer");
    colorNode.setPosition(-winSize.width / 2, -winSize.height / 2);
    var colorSprite = colorNode.addComponent(Graphics);
    colorSprite.fillColor = color(0, 0, 0, 255);
    var blackRate = 0;
    colorSprite.rect(0, 0, winSize.width, winSize.height);
    colorSprite.fill();
    // /////////////////////////////////////////
    myModal.setSiblingIndex(99);
    myModal.addChild(colorNode);
    return myModal;
  }
  getModalLayer(winSize) {
    // /////////////////////////////////////////
    var myModal = new Node("myModal");
    myModal.setPosition(0, 0);
    var modalTran = myModal.addComponent(UITransform);
    modalTran.setContentSize(winSize);
    // /////////////////////////////////////////////////////////
    myModal.on(Node.EventType.TOUCH_START, function (event) {}, this);
    return myModal;
  }
}
