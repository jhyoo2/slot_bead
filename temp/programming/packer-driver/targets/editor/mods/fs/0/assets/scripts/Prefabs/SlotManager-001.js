System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, AssetManager, _dec, _class, _temp, _crd, ccclass, property, SlotManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "135eeISXWJJdYMkt5LriJX+", "SlotManager-001", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SlotManager = (_dec = ccclass("SlotManager"), _dec(_class = (_temp = class SlotManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "eventTarget", null);

          _defineProperty(this, "slotObject", null);

          _defineProperty(this, "rolling", false);
        }

        initSlotManager(slotData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          const slotObject = instantiate(this.assetManager.prefabDic["SlotMaster"]);
          const slotScript = slotObject.getComponent("SlotMaster");
          slotScript.slotManager = this;
          slotScript.initSlotMaster(slotData);
          this.slotObject = slotObject; //     console.log(this.slotObject);

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
          this.rolling = false; // // console.log(slotResult);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SlotManager-001.js.map