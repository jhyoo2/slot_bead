import { _decorator, Component, instantiate } from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../DataManager/AssetManager";
import { DiceScene } from "../Scenes/DiceScene";
import DiceMaster from "./Dice/DiceMaster";

@ccclass("DiceManager")
export default class DiceManager extends Component {
  assetManager: AssetManager = null;
  eventTarget: DiceScene = null;
  diceObject = null;
  rolling = false;
  initDiceManager(diceData) {
    this.assetManager = AssetManager.getInstance();
    const diceObject = instantiate(this.assetManager.prefabDic["DiceMaster"]);
    diceObject.setPosition(0, 0, 0);
    const diceScript = diceObject.getComponent("DiceMaster") as DiceMaster;
    diceScript.diceManager = this;
    diceScript.initDiceMaster(diceData);
    this.diceObject = diceObject;
    return diceObject;
  }
  rollWithNetwork() {
    if (this.rolling) return;
    this.rolling = true;
    const diceScript = this.diceObject.getComponent("DiceMaster") as DiceMaster;
    diceScript.rollWithNetwork();
  }
  rollWithRandom() {
    if (this.rolling) return;
    this.rolling = true;
    const diceScript = this.diceObject.getComponent("DiceMaster") as DiceMaster;
    diceScript.rollWithRandom();
  }
  rollWithFixed(iconDatas) {
    if (this.rolling) return;
    this.rolling = true;
    const diceScript = this.diceObject.getComponent("DiceMaster") as DiceMaster;
    diceScript.rollWithFixed(iconDatas);
  }
  getDiceResult(diceResult) {
    this.rolling = false;
    if (this.eventTarget && this.eventTarget.showDiceResult) {
      this.eventTarget.showDiceResult(diceResult);
    }
    // // console.log(slotResult);
  }
  moveBlock(time, yPos) {
    const diceScript = this.diceObject.getComponent("DiceMaster") as DiceMaster;
    diceScript.moveBlock(time, yPos);
    diceScript.movePlayer(time);
  }
  getPlayerIdx() {
    const diceScript = this.diceObject.getComponent("DiceMaster") as DiceMaster;
    return diceScript.playerIdx;
  }
  getNextBlock() {
    const diceScript = this.diceObject.getComponent("DiceMaster") as DiceMaster;
    return diceScript.getNextBlock();
  }
}
