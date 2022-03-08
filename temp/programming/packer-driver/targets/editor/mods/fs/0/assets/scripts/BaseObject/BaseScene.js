System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, view, ResolutionPolicy, macro, ModalLayer, _dec, _class, _temp, _crd, ccclass, property, BaseScene;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfModalLayer(extras) {
    _reporterNs.report("ModalLayer", "./ModalLayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      ModalLayer = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e53a9jH7wBE3p6QSVMBK2Qt", "BaseScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BaseScene = (_dec = ccclass("BaseScene"), _dec(_class = (_temp = class BaseScene extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "blackLayer", null);

          _defineProperty(this, "modalArray", []);

          _defineProperty(this, "winSize", null);
        }

        onLoad() {
          macro.ENABLE_MULTI_TOUCH = false;
          this.setResolution();
        }

        setWideResolution() {
          var winSize = view.getCanvasSize();
          view.setFrameSize(1920 * 0.75, 1080 * 0.75);
          view.setDesignResolutionSize(3240, 1920, ResolutionPolicy.FIXED_HEIGHT);
          view.resizeWithBrowserSize(true);
          this.winSize = view.getDesignResolutionSize(); // console.log("winsize : ", this.winSize);
        }

        setResolution() {
          var winSize = view.getCanvasSize();
          var heightSize = winSize.height * 1080 / winSize.width;
          view.setDesignResolutionSize(1080, heightSize, ResolutionPolicy.FIXED_WIDTH);
          view.resizeWithBrowserSize(true);
          this.winSize = view.getDesignResolutionSize(); // console.log("winsize : ", this.winSize);
        }

        removeNode(node) {
          node.removeFromParent(true);
          node.destroy();
        }

        getModalLayer() {
          return this.modalArray[this.modalArray.length - 1];
        }

        removeModal() {
          if (this.modalArray.length > 0) {
            const lastModal = this.modalArray[this.modalArray.length - 1];
            this.modalArray.splice(this.modalArray.length - 1, 1);
            lastModal.removeFromParent();
          }
        }

        setModalLayer() {
          // /////////////////////////////////
          var zOrder = 80 + this.modalArray.length;
          var newLayer = new (_crd && ModalLayer === void 0 ? (_reportPossibleCrUseOfModalLayer({
            error: Error()
          }), ModalLayer) : ModalLayer)().getModalLayer(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        }

        setModalColor() {
          // /////////////////////////////////
          var zOrder = 80 + this.modalArray.length;
          var newLayer = new (_crd && ModalLayer === void 0 ? (_reportPossibleCrUseOfModalLayer({
            error: Error()
          }), ModalLayer) : ModalLayer)().getModalColor(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        }

        setModalBlack() {
          // /////////////////////////////////
          var zOrder = 90 + this.modalArray.length;
          var newLayer = new (_crd && ModalLayer === void 0 ? (_reportPossibleCrUseOfModalLayer({
            error: Error()
          }), ModalLayer) : ModalLayer)().getModalBlack(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BaseScene.js.map