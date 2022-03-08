System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, Sprite, Label, Vec3, AssetManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, DiceIcon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53adcYh271EM5piBBOwLuGz", "DiceIcon", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DiceIcon = (_dec = ccclass("DiceIcon"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class DiceIcon extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "backNode", _descriptor, this);

          _initializerDefineProperty(this, "iconNode", _descriptor2, this);

          _initializerDefineProperty(this, "numberNode", _descriptor3, this);

          _defineProperty(this, "diceData", void 0);

          _defineProperty(this, "diceIdx", 0);

          _defineProperty(this, "iconData", {
            diceIdx: "0",
            backKind: 0,
            iconKind: 0
          });

          _defineProperty(this, "assetManager", null);
        }

        initIcon(iconIdx, backKind, slotData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.diceData = slotData;
          this.iconData.iconKind = iconIdx;
          this.iconData.backKind = backKind;
          this.backNode.getComponent(UITransform).setContentSize(slotData.iconSize);
          const iconSprite = this.iconNode.getComponent(Sprite);
          iconSprite.spriteFrame = this.assetManager.assetDic["DiceScene/Cube0" + iconIdx];
          iconSprite.sizeMode = Sprite.SizeMode.RAW;
          iconSprite.trim = true;
          this.iconNode.setScale(new Vec3(0.75, 0.75, 0.75));
          this.backNode.active = false;
          const backSprite = this.backNode.getComponent(Sprite);
          backSprite.spriteFrame = this.assetManager.assetDic["Slot/back" + backKind];
          this.numberNode.getComponent(Label).string = String(this.iconData.diceIdx);
        }

        changeIcon(iconIdx) {
          const iconSprite = this.iconNode.getComponent(Sprite);
          iconSprite.spriteFrame = this.assetManager.assetDic["DiceScene/Cube0" + iconIdx];
        }

        updateNumber(diceIdx) {
          if (String(diceIdx)) {
            this.iconData.diceIdx = String(diceIdx);
          }

          this.numberNode.getComponent(Label).string = String(this.iconData.diceIdx);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numberNode", [_dec4], {
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
//# sourceMappingURL=DiceIcon.js.map