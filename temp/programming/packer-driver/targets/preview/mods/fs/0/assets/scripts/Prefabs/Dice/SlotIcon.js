System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, Sprite, Label, AssetManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, SlotIcon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53adcYh271EM5piBBOwLuGz", "SlotIcon", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", SlotIcon = (_dec = ccclass("SlotIcon"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotIcon, _Component);

        function SlotIcon() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "iconNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "numberNode", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "slotData", void 0);

          _defineProperty(_assertThisInitialized(_this), "iconData", {
            backKind: 0,
            iconKind: 0,
            rowIdx: 0
          });

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          return _this;
        }

        var _proto = SlotIcon.prototype;

        _proto.initIcon = function initIcon(iconIdx, backKind, slotData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.slotData = slotData;
          this.iconData.iconKind = iconIdx;
          this.iconData.backKind = backKind;
          this.backNode.getComponent(UITransform).setContentSize(slotData.iconSize);
          var iconSprite = this.iconNode.getComponent(Sprite);
          iconSprite.spriteFrame = this.assetManager.assetDic["Slot/candy_" + iconIdx + "_0"];
          var backSprite = this.backNode.getComponent(Sprite);
          backSprite.spriteFrame = this.assetManager.assetDic["Slot/back" + backKind];
          this.numberNode.getComponent(Label).string = String(this.iconData.rowIdx);
        };

        _proto.updateNumber = function updateNumber() {
          this.numberNode.getComponent(Label).string = String(this.iconData.rowIdx);
        };

        _proto.crushIcon = function crushIcon(time) {
          var sprite = this.iconNode.getComponent(Sprite);
          sprite.spriteFrame = this.assetManager.assetDic["Slot/candy_" + this.iconData.iconKind + "_1"]; //     tween(this.iconNode)
          //       .delay(time)
          //       .to(0.2, { scale: 3.0 })
          //       .delay(0.05)
          //       .to(0.1, { scale: 0 })
          //       .start();
        };

        return SlotIcon;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numberNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SlotIcon.js.map