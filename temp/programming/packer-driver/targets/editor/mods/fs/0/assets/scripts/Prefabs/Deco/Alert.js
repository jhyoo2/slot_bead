System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, DecoAlert;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdf2deJgRBILon6ARrWi6CX", "Alert", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DecoAlert = (_dec = ccclass("DecoAlert"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class DecoAlert extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "TitleNode", _descriptor, this);

          _initializerDefineProperty(this, "MainNode", _descriptor2, this);

          _defineProperty(this, "yesEvent", null);

          _defineProperty(this, "noEvent", null);
        }

        async onLoad() {}

        setTitleLabel(string) {
          this.TitleNode.getComponent(Label).string = string;
        }

        setMainLabel(string) {
          this.MainNode.getComponent(Label).string = string;
        }

        onYesButtonClicked() {
          if (this.yesEvent) {
            this.yesEvent();
          }
        }

        onNoButtonClicked() {
          if (this.noEvent) {
            this.noEvent();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "TitleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MainNode", [_dec3], {
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
//# sourceMappingURL=Alert.js.map