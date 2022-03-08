System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Vec3, color, Sprite, UITransformComponent, Size, AssetManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, FileTitle;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFileMaster(extras) {
    _reporterNs.report("FileMaster", "./FileMaster", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../../Scenes/RoomScene", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context2.meta, extras);
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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", FileTitle = (_dec = ccclass("FileTitle"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FileTitle, _Component);

        function FileTitle() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "labelNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "arrowNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "contentNode", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "opened", false);

          _defineProperty(_assertThisInitialized(_this), "tag", "00");

          _defineProperty(_assertThisInitialized(_this), "fileDatas", []);

          _defineProperty(_assertThisInitialized(_this), "fileMaster", null);

          return _this;
        }

        var _proto = FileTitle.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
                      error: Error()
                    }), AssetManager) : AssetManager).getInstance();
                    this.scrollNode.getComponent(UITransformComponent).setContentSize(new Size(850, 10));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onLoad() {
            return _onLoad.apply(this, arguments);
          }

          return onLoad;
        }();

        _proto.setLabel = function setLabel(string) {
          this.labelNode.getComponent(Label).string = string;
        };

        _proto.onArrowClicked = function onArrowClicked() {
          this.opened = !this.opened;
          var scale = this.arrowNode.getScale();

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
        };

        _proto.setActive = function setActive(bool) {
          if (bool) {
            this.labelNode.getComponent(Label).color = color(255, 0, 0, 255);
            this.node.getComponent(Sprite).color = color(100, 100, 100, 255);
          } else {
            this.labelNode.getComponent(Label).color = color(0, 0, 0, 255);
            this.node.getComponent(Sprite).color = color(211, 211, 211, 255);
          }
        };

        _proto.getTitleSize = function getTitleSize() {
          if (this.opened) {
            return new Vec3(850, 80 + Math.min(250, 10 + 80 * this.fileDatas.length), 1);
          } else {
            return new Vec3(850, 80, 1);
          }
        };

        _proto.setFileData = function setFileData(fileDatas) {
          this.fileDatas = fileDatas;
          var length = fileDatas.length;
          this.scrollNode.getComponent(UITransformComponent).setContentSize(new Size(850, Math.min(250, 10 + 80 * length))); // this.contentNode.parent
          //   .getComponent(UITransformComponent)
          //   .setContentSize(new Size(850, Math.min(250, 10 + 80 * length)));

          this.contentNode.getComponent(UITransformComponent).setContentSize(new Size(850, 90 + 80 * length)); ///////////////////////////

          this.contentNode.removeAllChildren();

          for (var i = 0; i < length; i++) {
            var node = new Node();
            var label = node.addComponent(Label);
            this.contentNode.addChild(node);
            node.setPosition(new Vec3(0, -40 - 80 * i, 1));
            label.string = fileDatas[i].id;
          }
        };

        return FileTitle;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FileTitle-001.js.map