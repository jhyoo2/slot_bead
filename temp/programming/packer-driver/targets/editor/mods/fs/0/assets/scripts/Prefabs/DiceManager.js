System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, AssetManager, _dec, _class, _temp, _crd, ccclass, property, DiceManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiceScene(extras) {
    _reporterNs.report("DiceScene", "../Scenes/DiceScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiceMaster(extras) {
    _reporterNs.report("DiceMaster", "./Dice/DiceMaster", _context.meta, extras);
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

      _cclegacy._RF.push({}, "135eeISXWJJdYMkt5LriJX+", "DiceManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DiceManager = (_dec = ccclass("DiceManager"), _dec(_class = (_temp = class DiceManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "eventTarget", null);

          _defineProperty(this, "diceObject", null);

          _defineProperty(this, "rolling", false);
        }

        initDiceManager(diceData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          const diceObject = instantiate(this.assetManager.prefabDic["DiceMaster"]);
          diceObject.setPosition(0, 0, 0);
          const diceScript = diceObject.getComponent("DiceMaster");
          diceScript.diceManager = this;
          diceScript.initDiceMaster(diceData);
          this.diceObject = diceObject;
          return diceObject;
        }

        rollWithNetwork() {
          if (this.rolling) return;
          this.rolling = true;
          const diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithNetwork();
        }

        rollWithRandom() {
          if (this.rolling) return;
          this.rolling = true;
          const diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithRandom();
        }

        rollWithFixed(iconDatas) {
          if (this.rolling) return;
          this.rolling = true;
          const diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithFixed(iconDatas);
        }

        getDiceResult(diceResult) {
          this.rolling = false;

          if (this.eventTarget && this.eventTarget.showDiceResult) {
            this.eventTarget.showDiceResult(diceResult);
          } // // console.log(slotResult);

        }

        moveBlock(time, yPos) {
          const diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.moveBlock(time, yPos);
          diceScript.movePlayer(time);
        }

        getPlayerIdx() {
          const diceScript = this.diceObject.getComponent("DiceMaster");
          return diceScript.playerIdx;
        }

        getNextBlock() {
          const diceScript = this.diceObject.getComponent("DiceMaster");
          return diceScript.getNextBlock();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DiceManager.js.map