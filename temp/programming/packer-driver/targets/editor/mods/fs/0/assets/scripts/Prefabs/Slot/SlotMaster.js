System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, size, UITransform, instantiate, AssetManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SlotMaster;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotManager(extras) {
    _reporterNs.report("SlotManager", "../SlotManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotLine(extras) {
    _reporterNs.report("SlotLine", "./SlotLine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      size = _cc.size;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab0ac+x/FpIm6Jn4/Yf2djp", "SlotMaster", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SlotMaster = (_dec = ccclass("SlotMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class SlotMaster extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "backNode", _descriptor, this);

          _initializerDefineProperty(this, "maskNode", _descriptor2, this);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "slotManager", null);

          _defineProperty(this, "slotData", void 0);

          _defineProperty(this, "slotLineArray", []);

          _defineProperty(this, "slotResultDic", {});
        }

        initSlotMaster(slotData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.slotData = slotData;
          this.backNode.getComponent(UITransform).setContentSize(slotData.slotSize);
          this.maskNode.getComponent(UITransform).setContentSize(slotData.slotSize);
          this.slotData.iconDiff = 20;
          this.slotData.iconSize = size(slotData.slotSize.width / slotData.columnNum - this.slotData.iconDiff, slotData.slotSize.height / (slotData.rowNum + 1) * 1.15 - this.slotData.iconDiff);
          this.slotData.railSize = size(this.slotData.iconSize.width + this.slotData.iconDiff, (this.slotData.iconSize.height + this.slotData.iconDiff) * (slotData.rowNum + 4)); // // init SlotLine

          for (var i = 0; i < slotData.columnNum; i++) {
            const slotLine = instantiate(this.assetManager.prefabDic["SlotLine"]);
            this.maskNode.insertChild(slotLine, 10);
            slotLine.setPosition(-slotData.slotSize.width / 2 + this.slotData.railSize.width * (i + 0.5), 0);
            const lineScript = slotLine.getComponent("SlotLine");
            lineScript.initSlotLine(i, this.slotData);
            this.slotLineArray.push(slotLine);
          }
        }

        async rollWithNetwork() {
          this.slotResultDic = {}; // // console.log("master in");

          for (var i in this.slotLineArray) {
            const lineObject = this.slotLineArray[i];
            const lineScript = lineObject.getComponent("SlotLine");
            lineScript.slotStartInfinity(2 / 30);
          }

          await this.sleep(1000); //     console.log("hello?");

          for (var i in this.slotLineArray) {
            const lineObject = this.slotLineArray[i];
            const lineScript = lineObject.getComponent("SlotLine");
            lineScript.stopSlot(5 + 10 * Number(i), 0.5 + 0.5 * Number(i), this.getSlotResult.bind(this), {
              iconKind: 2,
              backKind: Number(i) + 1
            });
          }
        }

        sleep(t) {
          return new Promise(resolve => setTimeout(resolve, t));
        }

        rollWithRandom() {
          this.slotResultDic = {};

          for (var i in this.slotLineArray) {
            const lineObject = this.slotLineArray[i];
            const lineScript = lineObject.getComponent("SlotLine");
            lineScript.slotStart(31, 2, this.getSlotResult.bind(this));
          }
        }

        rollWithFixed(iconDatas) {
          this.slotResultDic = {};

          for (var i in this.slotLineArray) {
            const lineObject = this.slotLineArray[i];
            const lineScript = lineObject.getComponent("SlotLine");
            lineScript.slotStart(31 + 4 * Number(i), 1.0 + 0.5 * Number(i), this.getSlotResult.bind(this), iconDatas[i]);
          }
        }

        getSlotResult(lineIdx, result) {
          // // console.log(lineIdx, result);
          this.slotResultDic[lineIdx] = result;

          if (Object.keys(this.slotResultDic).length == this.slotData.columnNum) {
            this.slotManager.getSlotResult(this.slotResultDic);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SlotMaster.js.map