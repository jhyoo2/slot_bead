System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, FileTitle;

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

      _cclegacy._RF.push({}, "867b2PaF1VLNJ2FGg0qLeXW", "DecoTitle", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FileTitle = (_dec = ccclass("FileTitle"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class FileTitle extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelNode", _descriptor, this);

          _initializerDefineProperty(this, "arrowNode", _descriptor2, this);

          _defineProperty(this, "opened", false);
        }

        setLabel(string) {
          this.labelNode.getComponent(Label).string = string;
        }

        onArrayClicked() {
          this.opened = !this.opened;
          const scale = this.arrowNode.getScale();

          if (this.opened) {
            // open
            this.arrowNode.setScale(new Vec3(scale.x, -Math.abs(scale.y), scale.z));
          } else {
            // close
            this.arrowNode.setScale(new Vec3(scale.x, Math.abs(scale.y), scale.z));
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec3], {
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
//# sourceMappingURL=DecoTitle.js.map