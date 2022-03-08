System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, size, director, BaseScene, AssetManager, SlotManager, _dec, _class, _temp, _crd, ccclass, property, SlotScene;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotManager(extras) {
    _reporterNs.report("SlotManager", "../Prefabs/SlotManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      size = _cc.size;
      director = _cc.director;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }, function (_unresolved_3) {
      AssetManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      SlotManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c676fmhxXdA+KZLG18AgZGb", "SlotScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SlotScene = (_dec = ccclass("SlotScene"), _dec(_class = (_temp = class SlotScene extends (_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "slotManager", null);
        }

        async onLoad() {
          super.onLoad();
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          const assetResult = await this.assetManager.loadAssets(); // console.log(this.assetManager);

          const slotManager = new (_crd && SlotManager === void 0 ? (_reportPossibleCrUseOfSlotManager({
            error: Error()
          }), SlotManager) : SlotManager)();
          const slotObject = slotManager.initSlotManager({
            rowNum: 1,
            columnNum: 3,
            slotSize: size(700, 500)
          });
          this.slotManager = slotManager;
          this.node.insertChild(slotObject, 10);
        } // // update (dt) {}


        buttonClicked(node, idx) {
          // this.slotManager.rollWithNetwork();
          this.slotManager.rollWithRandom(); // this.slotManager.rollWithFixed([
          //   { iconKind: 2, backKind: 1 },
          //   { iconKind: 2, backKind: 2 },
          //   { iconKind: 2, backKind: 3 },
          // ]);
        }

        gotoMain() {
          director.loadScene("MainScene");
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SlotScene.js.map