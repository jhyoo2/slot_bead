System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Vec3, color, Sprite, UITransformComponent, Size, AssetManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, FileTitle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFileMaster(extras) {
    _reporterNs.report("FileMaster", "./FileMaster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../../Scenes/RoomScene", _context.meta, extras);
  }

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
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
      color = _cc.color;
      Sprite = _cc.Sprite;
      UITransformComponent = _cc.UITransformComponent;
      Size = _cc.Size;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30a70+WqNVObIHJ9CK5ifJX", "FileTitle-001", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FileTitle = (_dec = ccclass("FileTitle"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class FileTitle extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _initializerDefineProperty(this, "labelNode", _descriptor, this);

          _initializerDefineProperty(this, "arrowNode", _descriptor2, this);

          _initializerDefineProperty(this, "scrollNode", _descriptor3, this);

          _initializerDefineProperty(this, "contentNode", _descriptor4, this);

          _defineProperty(this, "opened", false);

          _defineProperty(this, "tag", "00");

          _defineProperty(this, "fileDatas", []);

          _defineProperty(this, "fileMaster", null);
        }

        async onLoad() {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.scrollNode.getComponent(UITransformComponent).setContentSize(new Size(850, 10));
        }

        setLabel(string) {
          this.labelNode.getComponent(Label).string = string;
        }

        onArrowClicked() {
          this.opened = !this.opened;
          const scale = this.arrowNode.getScale();

          if (this.opened) {
            // open
            this.arrowNode.setScale(new Vec3(scale.x, -Math.abs(scale.y), scale.z));
            this.scrollNode.active = true;
          } else {
            // close
            this.arrowNode.setScale(new Vec3(scale.x, Math.abs(scale.y), scale.z));
            this.scrollNode.active = false;
          }

          this.fileMaster.updateFileMaster();
        }

        setActive(bool) {
          if (bool) {
            this.labelNode.getComponent(Label).color = color(255, 0, 0, 255);
            this.node.getComponent(Sprite).color = color(100, 100, 100, 255);
          } else {
            this.labelNode.getComponent(Label).color = color(0, 0, 0, 255);
            this.node.getComponent(Sprite).color = color(211, 211, 211, 255);
          }
        }

        getTitleSize() {
          if (this.opened) {
            return new Vec3(850, 80 + Math.min(250, 10 + 80 * this.fileDatas.length), 1);
          } else {
            return new Vec3(850, 80, 1);
          }
        }

        setFileData(fileDatas) {
          this.fileDatas = fileDatas;
          const length = fileDatas.length;
          this.scrollNode.getComponent(UITransformComponent).setContentSize(new Size(850, Math.min(250, 10 + 80 * length))); // this.contentNode.parent
          //   .getComponent(UITransformComponent)
          //   .setContentSize(new Size(850, Math.min(250, 10 + 80 * length)));

          this.contentNode.getComponent(UITransformComponent).setContentSize(new Size(850, 90 + 80 * length)); ///////////////////////////

          this.contentNode.removeAllChildren();

          for (var i = 0; i < length; i++) {
            const node = new Node();
            const label = node.addComponent(Label);
            this.contentNode.addChild(node);
            node.setPosition(new Vec3(0, -40 - 80 * i, 1));
            label.string = fileDatas[i].id;
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
//# sourceMappingURL=FileTitle-001.js.map