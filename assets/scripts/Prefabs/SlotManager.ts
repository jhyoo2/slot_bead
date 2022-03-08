import { _decorator, Component, instantiate } from "cc";
const { ccclass, property } = _decorator;

import AssetManager from "../DataManager/AssetManager";

@ccclass("SlotManager")
export default class SlotManager extends Component {
  assetManager: AssetManager = null;
  eventTarget = null;
  slotObject = null;
  rolling = false;
  initSlotManager(slotData) {
    this.assetManager = AssetManager.getInstance();
    const slotObject = instantiate(this.assetManager.prefabDic["SlotMaster"]);
    const slotScript = slotObject.getComponent("SlotMaster");
    slotScript.slotManager = this;
    slotScript.initSlotMaster(slotData);
    this.slotObject = slotObject;
    //     console.log(this.slotObject);
    return slotObject;
  }
  rollWithNetwork() {
    if (this.rolling) return;
    this.rolling = true;
    const slotScript = this.slotObject.getComponent("SlotMaster");
    slotScript.rollWithNetwork();
  }
  rollWithRandom() {
    if (this.rolling) return;
    this.rolling = true;
    const slotScript = this.slotObject.getComponent("SlotMaster");
    slotScript.rollWithRandom();
  }
  rollWithFixed(iconDatas) {
    if (this.rolling) return;
    this.rolling = true;
    const slotScript = this.slotObject.getComponent("SlotMaster");
    slotScript.rollWithFixed(iconDatas);
  }
  getSlotResult(slotResult) {
    this.rolling = false;
    // // console.log(slotResult);
  }
}
