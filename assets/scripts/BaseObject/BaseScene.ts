import {
  _decorator,
  Component,
  Node,
  Size,
  view,
  ResolutionPolicy,
  UITransform,
  macro,
} from "cc";
const { ccclass, property } = _decorator;

import ModalLayer from "./ModalLayer";

@ccclass("BaseScene")
export default class BaseScene extends Component {
  blackLayer: Node | null = null;
  modalArray: Node[] = [];
  winSize: Size | null = null;

  onLoad() {
    macro.ENABLE_MULTI_TOUCH = false;
    this.setResolution();
  }
  setWideResolution() {
    var winSize = view.getCanvasSize();
    view.setFrameSize(1920 * 0.75, 1080 * 0.75);
    view.setDesignResolutionSize(3240, 1920, ResolutionPolicy.FIXED_HEIGHT);
    view.resizeWithBrowserSize(true);
    this.winSize = view.getDesignResolutionSize();
    // console.log("winsize : ", this.winSize);
  }

  setResolution() {
    var winSize = view.getCanvasSize();
    var heightSize = (winSize.height * 1080) / winSize.width;
    view.setDesignResolutionSize(
      1080,
      heightSize,
      ResolutionPolicy.FIXED_WIDTH
    );

    view.resizeWithBrowserSize(true);
    this.winSize = view.getDesignResolutionSize();
    // console.log("winsize : ", this.winSize);
  }
  removeNode(node) {
    node.removeFromParent(true);
    node.destroy();
  }
  getModalLayer() {
    return this.modalArray[this.modalArray.length - 1];
  }
  removeModal() {
    if (this.modalArray.length > 0) {
      const lastModal = this.modalArray[this.modalArray.length - 1];
      this.modalArray.splice(this.modalArray.length - 1, 1);
      lastModal.removeFromParent();
    }
  }
  setModalLayer() {
    // /////////////////////////////////
    var zOrder = 80 + this.modalArray.length;
    var newLayer = new ModalLayer().getModalLayer(this.winSize);
    newLayer.setSiblingIndex(zOrder);
    this.node.addChild(newLayer);
    this.modalArray.push(newLayer);
    // /////////////////////////////////
    return newLayer;
  }
  setModalColor() {
    // /////////////////////////////////
    var zOrder = 80 + this.modalArray.length;
    var newLayer = new ModalLayer().getModalColor(this.winSize);
    newLayer.setSiblingIndex(zOrder);
    this.node.addChild(newLayer);
    this.modalArray.push(newLayer);
    // /////////////////////////////////
    return newLayer;
  }
  setModalBlack() {
    // /////////////////////////////////
    var zOrder = 90 + this.modalArray.length;
    var newLayer = new ModalLayer().getModalBlack(this.winSize);
    newLayer.setSiblingIndex(zOrder);
    this.node.addChild(newLayer);
    this.modalArray.push(newLayer);
    // /////////////////////////////////
    return newLayer;
  }
}
