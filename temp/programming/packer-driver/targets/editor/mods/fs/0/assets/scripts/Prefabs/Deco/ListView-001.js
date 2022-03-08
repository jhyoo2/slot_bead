System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, UITransform, Label, Size, Color, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ListView;

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
      UITransform = _cc.UITransform;
      Label = _cc.Label;
      Size = _cc.Size;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99778xv5npOGJCVHdvK6I55", "ListView-001", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ListView = (_dec = ccclass("ListView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class ListView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrowNode", _descriptor, this);

          _initializerDefineProperty(this, "labelNode", _descriptor2, this);

          _initializerDefineProperty(this, "scrollNode", _descriptor3, this);

          _initializerDefineProperty(this, "contentNode", _descriptor4, this);

          _defineProperty(this, "open", false);

          _defineProperty(this, "selectedIdx", 0);

          _defineProperty(this, "dataList", []);

          _defineProperty(this, "callback", null);
        }

        async onLoad() {
          this.arrowNode.on(Node.EventType.TOUCH_START, this.setActive, this); // this.setDataList([]);
        }

        setDataList(dataList) {
          this.dataList = dataList;
          this.setLabelIdx(0);
          this.contentNode.removeAllChildren();
          this.contentNode.getComponent(UITransform).setContentSize(new Size(300, 80 * dataList.length));

          for (var i in dataList) {
            const obj = this.dataList[i];
            const nodeIdx = Number(i);
            const node = new Node();
            node.addComponent(UITransform).setContentSize(new Size(300, 80));
            node.setPosition(0, -40 - 80 * Number(i));
            const label = node.addComponent(Label);
            label.fontSize = 40;
            label.color = new Color(0, 0, 0, 255);
            label.lineHeight = 40;
            label.string = obj.label;
            this.contentNode.addChild(node);
            node.on(Node.EventType.TOUCH_START, () => {
              this.setLabelIdx(nodeIdx);
            }, this);
          }
        }

        setActive() {
          if (this.open) {
            this.open = false;
            this.scrollNode.active = false;
          } else {
            this.open = true;
            this.scrollNode.active = true;
          }
        }

        setLabelIdx(idx) {
          this.open = false;
          this.scrollNode.active = false;

          if (this.callback) {
            const result = this.callback(this.dataList[idx]);

            if (!result) {
              return;
            }
          }
        }

        setLabel(tag) {
          var idx = 0;

          for (var i in this.dataList) {
            const dataTag = this.dataList[i].tag;

            if (dataTag == tag) {
              idx = Number(i);
              break;
            }
          }

          this.selectedIdx = idx;
          this.labelNode.getComponent(Label).string = this.dataList[idx].label;
        }

        resetLabel() {
          const idx = 0;
          this.selectedIdx = idx;
          this.labelNode.getComponent(Label).string = this.dataList[idx].label;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec5], {
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
//# sourceMappingURL=ListView-001.js.map