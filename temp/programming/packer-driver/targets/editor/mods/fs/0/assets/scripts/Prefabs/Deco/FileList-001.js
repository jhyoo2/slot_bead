System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, FileList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFileTitle(extras) {
    _reporterNs.report("FileTitle", "./FileTitle", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdf2deJgRBILon6ARrWi6CX", "FileList-001", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FileList = (_dec = ccclass("FileList"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class FileList extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelNode", _descriptor, this);

          _defineProperty(this, "fileData", null);

          _defineProperty(this, "fileTitle", null);
        }

        async onLoad() {}

        setLabel(string) {
          this.labelNode.getComponent(Label).string = string;
        }

        onArrowClicked(node, kind) {
          if (this.fileTitle) {
            if (kind == "up") {
              this.fileTitle.onChangeOrder(this.fileData, kind);
            } else if (kind == "down") {
              this.fileTitle.onChangeOrder(this.fileData, kind);
            }
          }
        }

        onNodeClicked(node) {
          if (this.fileTitle) {
            this.fileTitle.onFileSelected(this.fileData);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
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
//# sourceMappingURL=FileList-001.js.map