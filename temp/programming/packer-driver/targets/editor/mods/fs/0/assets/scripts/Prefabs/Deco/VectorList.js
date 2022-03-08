System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, VectorList;

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

      _cclegacy._RF.push({}, "99778xv5npOGJCVHdvK6I55", "VectorList", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", VectorList = (_dec = ccclass("VectorList"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class VectorList extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "xLabelNode", _descriptor, this);

          _initializerDefineProperty(this, "yLabelNode", _descriptor2, this);

          _initializerDefineProperty(this, "zLabelNode", _descriptor3, this);

          _defineProperty(this, "vectorData", null);

          _defineProperty(this, "callback", null);

          _defineProperty(this, "minNum", 0);

          _defineProperty(this, "maxNum", 18);
        }

        async onLoad() {// this.setDataList([]);
        }

        setLabel(vector) {
          this.vectorData = new Vec3(vector.x, vector.y, vector.z);
          this.xLabelNode.getComponent(Label).string = String(vector.x);
          this.yLabelNode.getComponent(Label).string = String(vector.y);
          this.zLabelNode.getComponent(Label).string = String(vector.z);
        }

        resetLabel() {
          this.xLabelNode.getComponent(Label).string = "x";
          this.yLabelNode.getComponent(Label).string = "y";
          this.zLabelNode.getComponent(Label).string = "z";
        }

        upArrowClicked(node, kind) {
          if (this.callback && this.vectorData) {
            if (kind == "x") {
              if (this.vectorData.x < this.maxNum) {
                this.vectorData.x++;
              }
            } else if (kind == "y") {
              if (this.vectorData.y < this.maxNum) {
                this.vectorData.y++;
              }
            } else if (kind == "z") {
              if (this.vectorData.z < this.maxNum) {
                this.vectorData.z++;
              }
            }

            this.callback({
              tag: this.vectorData
            });
          }
        }

        downArrowClicked(node, kind) {
          if (this.callback && this.vectorData) {
            if (kind == "x") {
              if (this.vectorData.x > this.minNum) {
                this.vectorData.x--;
              }
            } else if (kind == "y") {
              if (this.vectorData.y > this.minNum) {
                this.vectorData.y--;
              }
            } else if (kind == "z") {
              if (this.vectorData.z > this.minNum) {
                this.vectorData.z--;
              }
            }

            this.callback({
              tag: this.vectorData
            });
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xLabelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yLabelNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zLabelNode", [_dec4], {
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
//# sourceMappingURL=VectorList.js.map