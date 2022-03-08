System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, BaseScene, AssetManager, BaseRoom, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, DecoScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseRoom(extras) {
    _reporterNs.report("BaseRoom", "../Prefabs/Room/BaseRoom", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }, function (_unresolved_3) {
      AssetManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      BaseRoom = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83052Np60VNqagpTooZKDFC", "DecoScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DecoScene", DecoScene = (_dec = ccclass("DecoScene"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class DecoScene extends (_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _initializerDefineProperty(this, "baseRoomNode", _descriptor, this);
        }

        async onLoad() {
          super.onLoad();
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          const assetResult = await this.assetManager.loadAssets(); // console.log(this.assetManager);

          this.baseRoomNode.getComponent(_crd && BaseRoom === void 0 ? (_reportPossibleCrUseOfBaseRoom({
            error: Error()
          }), BaseRoom) : BaseRoom).setBaseRoom(1);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseRoomNode", [_dec2], {
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
//# sourceMappingURL=DecoScene.js.map