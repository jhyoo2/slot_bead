import {
  _decorator,
  Component,
  Node,
  size,
  UITransform,
  instantiate,
  Size,
} from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../../DataManager/AssetManager";
import SlotManager from "../SlotManager";
import SlotLine from "./SlotLine";

@ccclass("SlotMaster")
export default class SlotMaster extends Component {
  @property(Node)
  backNode: Node | null = null;
  @property(Node)
  maskNode: Node | null = null;
  assetManager: AssetManager = null;
  slotManager: SlotManager = null;
  slotData: {
    rowNum: number;
    columnNum: number;
    slotSize: Size;
    iconDiff: number;
    iconSize: Size;
    railSize: Size;
  };
  slotLineArray: Node[] = [];
  slotResultDic: Object = {};
  initSlotMaster(slotData) {
    this.assetManager = AssetManager.getInstance();
    this.slotData = slotData;
    this.backNode.getComponent(UITransform).setContentSize(slotData.slotSize);
    this.maskNode.getComponent(UITransform).setContentSize(slotData.slotSize);

    this.slotData.iconDiff = 20;
    this.slotData.iconSize = size(
      slotData.slotSize.width / slotData.columnNum - this.slotData.iconDiff,
      (slotData.slotSize.height / (slotData.rowNum + 1)) * 1.15 -
        this.slotData.iconDiff
    );
    this.slotData.railSize = size(
      this.slotData.iconSize.width + this.slotData.iconDiff,
      (this.slotData.iconSize.height + this.slotData.iconDiff) *
        (slotData.rowNum + 4)
    );

    // // init SlotLine
    for (var i = 0; i < slotData.columnNum; i++) {
      const slotLine = instantiate(this.assetManager.prefabDic["SlotLine"]);
      this.maskNode.insertChild(slotLine, 10);
      slotLine.setPosition(
        -slotData.slotSize.width / 2 + this.slotData.railSize.width * (i + 0.5),
        0
      );
      const lineScript: SlotLine = slotLine.getComponent("SlotLine");
      lineScript.initSlotLine(i, this.slotData);
      this.slotLineArray.push(slotLine);
    }
  }

  async rollWithNetwork() {
    this.slotResultDic = {};
    // // console.log("master in");
    for (var i in this.slotLineArray) {
      const lineObject = this.slotLineArray[i];
      const lineScript = lineObject.getComponent("SlotLine") as SlotLine;
      lineScript.slotStartInfinity(2 / 30);
    }
    await this.sleep(1000);
    //     console.log("hello?");
    for (var i in this.slotLineArray) {
      const lineObject = this.slotLineArray[i];
      const lineScript = lineObject.getComponent("SlotLine") as SlotLine;
      lineScript.stopSlot(
        5 + 10 * Number(i),
        0.5 + 0.5 * Number(i),
        this.getSlotResult.bind(this),
        { iconKind: 2, backKind: Number(i) + 1 }
      );
    }
  }

  sleep(t) {
    return new Promise((resolve) => setTimeout(resolve, t));
  }
  rollWithRandom() {
    this.slotResultDic = {};
    for (var i in this.slotLineArray) {
      const lineObject = this.slotLineArray[i];
      const lineScript = lineObject.getComponent("SlotLine") as SlotLine;
      lineScript.slotStart(31, 2, this.getSlotResult.bind(this));
    }
  }
  rollWithFixed(iconDatas) {
    this.slotResultDic = {};
    for (var i in this.slotLineArray) {
      const lineObject = this.slotLineArray[i];
      const lineScript = lineObject.getComponent("SlotLine") as SlotLine;
      lineScript.slotStart(
        31 + 4 * Number(i),
        1.0 + 0.5 * Number(i),
        this.getSlotResult.bind(this),
        iconDatas[i]
      );
    }
  }
  getSlotResult(lineIdx, result) {
    // // console.log(lineIdx, result);
    this.slotResultDic[lineIdx] = result;
    if (Object.keys(this.slotResultDic).length == this.slotData.columnNum) {
      this.slotManager.getSlotResult(this.slotResultDic);
    }
  }
}
