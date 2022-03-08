System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, Vec3, UIOpacityComponent, Tween, AssetManager, CCUtils, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, RoomBlock;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCUtils(extras) {
    _reporterNs.report("CCUtils", "../../Common/CCUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      UIOpacityComponent = _cc.UIOpacityComponent;
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      CCUtils = _unresolved_3.CCUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac1baV9SEdK7YRIAVDjLQ3E", "RoomBlock", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", RoomBlock = (_dec = ccclass("RoomBlock"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class RoomBlock extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _initializerDefineProperty(this, "blockObject", _descriptor, this);

          _initializerDefineProperty(this, "outerObject", _descriptor2, this);

          _initializerDefineProperty(this, "roomBlockArray", _descriptor3, this);

          _initializerDefineProperty(this, "roomLabelArray", _descriptor4, this);

          _defineProperty(this, "roomType", null);

          _defineProperty(this, "blockData", {
            placeable: false,
            occupied: false
          });

          _defineProperty(this, "blockPosition", new Vec3(0, 0, 0));
        }

        async onLoad() {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.outerObject.active = false;
          this.outerObject.getComponent(UIOpacityComponent).opacity = 0;
          this.deActivateBlock();
        }

        setRoomBlockType(roomType) {
          this.roomType = roomType;
          this.roomBlockArray[0].active = false;
          this.roomBlockArray[1].active = false;
          this.roomBlockArray[2].active = false;
          this.roomBlockArray[3].active = false;
          this.roomBlockArray[4].active = false;
          this.roomBlockArray[5].active = false;

          if (roomType !== 99) {
            this.blockData.placeable = true;
          }

          if (roomType === 0) {
            // default
            this.roomBlockArray[3].active = true;
            this.roomBlockArray[4].active = true;
            this.roomBlockArray[5].active = true;
          } else if (roomType === 1) {
            // only ground
            this.roomBlockArray[0].active = true;
          } else if (roomType === 2) {
            // only left
            this.roomBlockArray[1].active = true;
          } else if (roomType === 3) {
            // only right
            this.roomBlockArray[2].active = true;
          } else if (roomType === 4) {
            // only left & ground
            this.roomBlockArray[0].active = true;
            this.roomBlockArray[1].active = true;
          } else if (roomType === 5) {
            // only right & ground
            this.roomBlockArray[0].active = true;
            this.roomBlockArray[2].active = true;
          } else if (roomType === 6) {
            // only left & right & ground
            this.roomBlockArray[0].active = true;
            this.roomBlockArray[1].active = true;
            this.roomBlockArray[2].active = true;
          } else if (roomType === 7) {
            // only left & right
            this.roomBlockArray[1].active = true;
            this.roomBlockArray[2].active = true;
          }
        }

        activateBlock() {
          this.outerObject.getComponent(UIOpacityComponent).opacity = 255;
          this.outerObject.active = true;
          Tween.stopAllByTag(108, this.outerObject);
          tween(this.outerObject).tag(108).call(() => {
            (_crd && CCUtils === void 0 ? (_reportPossibleCrUseOfCCUtils({
              error: Error()
            }), CCUtils) : CCUtils).fadeIn(this.outerObject, 0.2);
          }).delay(1.0).call(() => {
            (_crd && CCUtils === void 0 ? (_reportPossibleCrUseOfCCUtils({
              error: Error()
            }), CCUtils) : CCUtils).fadeOut(this.outerObject, 1);
          }).start();
        }

        deActivateBlock() {
          this.outerObject.active = true;
          Tween.stopAllByTag(108, this.outerObject);
          tween(this.outerObject).call(() => {
            (_crd && CCUtils === void 0 ? (_reportPossibleCrUseOfCCUtils({
              error: Error()
            }), CCUtils) : CCUtils).fadeOut(this.outerObject, 0.01);
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockObject", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "outerObject", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roomBlockArray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "roomLabelArray", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoomBlock.js.map