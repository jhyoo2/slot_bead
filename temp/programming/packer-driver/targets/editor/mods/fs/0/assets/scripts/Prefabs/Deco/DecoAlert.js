System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, DecoAlert;

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
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9f2aVkDktKW4dbXu4mxVYT", "DecoAlert", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DecoAlert = (_dec = ccclass("DecoAlert"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class DecoAlert extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "titleNode", _descriptor, this);

          _initializerDefineProperty(this, "mainNode", _descriptor2, this);

          _initializerDefineProperty(this, "yesNode", _descriptor3, this);

          _initializerDefineProperty(this, "noNode", _descriptor4, this);

          _initializerDefineProperty(this, "editLabelNode", _descriptor5, this);

          _defineProperty(this, "yesEvent", null);

          _defineProperty(this, "noEvent", null);

          _defineProperty(this, "progress", false);
        }

        async onLoad() {}

        setTitleLabel(string) {
          this.titleNode.getComponent(Label).string = string;
        }

        setMainLabel(string) {
          this.mainNode.getComponent(Label).string = string;
        }

        buttonActive(bool) {
          this.yesNode.active = bool;
          this.noNode.active = bool;
        }

        noButtonActive(bool) {
          if (bool) {
            this.noNode.setPosition(new Vec3(0, this.noNode.getPosition().y, 1));
          } else {
            this.noNode.setPosition(new Vec3(-130, this.noNode.getPosition().y, 1));
          }

          this.noNode.active = bool;
        }

        editNodeActive(bool) {
          this.editLabelNode.active = bool;
        }

        removeAlert() {
          this.node.parent.removeFromParent();
        }

        onYesButtonClicked() {
          if (this.yesEvent) {
            this.yesEvent();
          }
        }

        onNoButtonClicked() {
          if (this.noEvent) {
            this.noEvent();
          } else {
            this.removeAlert();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yesNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "noNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "editLabelNode", [_dec6], {
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
//# sourceMappingURL=DecoAlert.js.map