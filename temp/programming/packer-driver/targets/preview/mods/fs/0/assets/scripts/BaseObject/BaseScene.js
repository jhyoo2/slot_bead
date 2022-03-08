System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, view, ResolutionPolicy, macro, ModalLayer, _dec, _class, _temp, _crd, ccclass, property, BaseScene;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", BaseScene = (_dec = ccclass("BaseScene"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseScene, _Component);

        function BaseScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "blackLayer", null);

          _defineProperty(_assertThisInitialized(_this), "modalArray", []);

          _defineProperty(_assertThisInitialized(_this), "winSize", null);

          return _this;
        }

        var _proto = BaseScene.prototype;

        _proto.onLoad = function onLoad() {
          macro.ENABLE_MULTI_TOUCH = false;
          this.setResolution();
        };

        _proto.setWideResolution = function setWideResolution() {
          var winSize = view.getCanvasSize();
          view.setFrameSize(1920 * 0.75, 1080 * 0.75);
          view.setDesignResolutionSize(3240, 1920, ResolutionPolicy.FIXED_HEIGHT);
          view.resizeWithBrowserSize(true);
          this.winSize = view.getDesignResolutionSize(); // console.log("winsize : ", this.winSize);
        };

        _proto.setResolution = function setResolution() {
          var winSize = view.getCanvasSize();
          var heightSize = winSize.height * 1080 / winSize.width;
          view.setDesignResolutionSize(1080, heightSize, ResolutionPolicy.FIXED_WIDTH);
          view.resizeWithBrowserSize(true);
          this.winSize = view.getDesignResolutionSize(); // console.log("winsize : ", this.winSize);
        };

        _proto.removeNode = function removeNode(node) {
          node.removeFromParent(true);
          node.destroy();
        };

        _proto.getModalLayer = function getModalLayer() {
          return this.modalArray[this.modalArray.length - 1];
        };

        _proto.removeModal = function removeModal() {
          if (this.modalArray.length > 0) {
            var lastModal = this.modalArray[this.modalArray.length - 1];
            this.modalArray.splice(this.modalArray.length - 1, 1);
            lastModal.removeFromParent();
          }
        };

        _proto.setModalLayer = function setModalLayer() {
          // /////////////////////////////////
          var zOrder = 80 + this.modalArray.length;
          var newLayer = new (_crd && ModalLayer === void 0 ? (_reportPossibleCrUseOfModalLayer({
            error: Error()
          }), ModalLayer) : ModalLayer)().getModalLayer(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        };

        _proto.setModalColor = function setModalColor() {
          // /////////////////////////////////
          var zOrder = 80 + this.modalArray.length;
          var newLayer = new (_crd && ModalLayer === void 0 ? (_reportPossibleCrUseOfModalLayer({
            error: Error()
          }), ModalLayer) : ModalLayer)().getModalColor(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        };

        _proto.setModalBlack = function setModalBlack() {
          // /////////////////////////////////
          var zOrder = 90 + this.modalArray.length;
          var newLayer = new (_crd && ModalLayer === void 0 ? (_reportPossibleCrUseOfModalLayer({
            error: Error()
          }), ModalLayer) : ModalLayer)().getModalBlack(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        };

        return BaseScene;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BaseScene.js.map