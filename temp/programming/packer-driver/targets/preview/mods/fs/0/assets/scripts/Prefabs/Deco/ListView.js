System.register(["cc"], function (_export, _context2) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, UITransform, Label, Size, Color, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ListView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      _cclegacy._RF.push({}, "21a772rH3hDZ5GhGGjDMtYc", "ListView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", ListView = (_dec = ccclass("ListView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListView, _Component);

        function ListView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "arrowNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "labelNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "contentNode", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "open", false);

          _defineProperty(_assertThisInitialized(_this), "selectedIdx", 0);

          _defineProperty(_assertThisInitialized(_this), "dataList", []);

          _defineProperty(_assertThisInitialized(_this), "callback", null);

          return _this;
        }

        var _proto = ListView.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.arrowNode.on(Node.EventType.TOUCH_START, this.setActive, this); // this.setDataList([]);

                  case 1:
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

        _proto.setDataList = function setDataList(dataList) {
          var _this2 = this;

          this.dataList = dataList;
          this.setLabelIdx(0);
          this.contentNode.removeAllChildren();
          this.contentNode.getComponent(UITransform).setContentSize(new Size(300, 80 * dataList.length));

          var _loop = function _loop() {
            var obj = _this2.dataList[i];
            var nodeIdx = Number(i);
            var node = new Node();
            node.addComponent(UITransform).setContentSize(new Size(300, 80));
            node.setPosition(0, -40 - 80 * Number(i));
            var label = node.addComponent(Label);
            label.fontSize = 40;
            label.color = new Color(0, 0, 0, 255);
            label.lineHeight = 40;
            label.string = obj.label;

            _this2.contentNode.addChild(node);

            node.on(Node.EventType.TOUCH_START, function () {
              _this2.setLabelIdx(nodeIdx);
            }, _this2);
          };

          for (var i in dataList) {
            _loop();
          }
        };

        _proto.setActive = function setActive() {
          if (this.open) {
            this.open = false;
            this.scrollNode.active = false;
          } else {
            this.open = true;
            this.scrollNode.active = true;
          }
        };

        _proto.setLabelIdx = function setLabelIdx(idx) {
          this.open = false;
          this.scrollNode.active = false;

          if (this.callback) {
            this.callback(this.dataList[idx]);
          }
        };

        _proto.setLabel = function setLabel(tag) {
          var idx = 0;

          for (var i in this.dataList) {
            var dataTag = this.dataList[i].tag;

            if (dataTag == tag) {
              idx = Number(i);
              break;
            }
          }

          this.selectedIdx = idx;
          this.labelNode.getComponent(Label).string = this.dataList[idx].label;
        };

        _proto.resetLabel = function resetLabel() {
          var idx = 0;
          this.selectedIdx = idx;
          this.labelNode.getComponent(Label).string = this.dataList[idx].label;
        };

        return ListView;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec3], {
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
//# sourceMappingURL=ListView.js.map