System.register(["cc"], function (_export, _context2) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, VectorList;

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
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99778xv5npOGJCVHdvK6I55", "VectorList", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", VectorList = (_dec = ccclass("VectorList"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VectorList, _Component);

        function VectorList() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "xLabelNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "yLabelNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "zLabelNode", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "vectorData", null);

          _defineProperty(_assertThisInitialized(_this), "callback", null);

          _defineProperty(_assertThisInitialized(_this), "minNum", 0);

          _defineProperty(_assertThisInitialized(_this), "maxNum", 18);

          return _this;
        }

        var _proto = VectorList.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onLoad() {
            return _onLoad.apply(this, arguments);
          }

          return onLoad;
        }();

        _proto.setLabel = function setLabel(vector) {
          this.vectorData = new Vec3(vector.x, vector.y, vector.z);
          this.xLabelNode.getComponent(Label).string = String(vector.x);
          this.yLabelNode.getComponent(Label).string = String(vector.y);
          this.zLabelNode.getComponent(Label).string = String(vector.z);
        };

        _proto.resetLabel = function resetLabel() {
          this.xLabelNode.getComponent(Label).string = "x";
          this.yLabelNode.getComponent(Label).string = "y";
          this.zLabelNode.getComponent(Label).string = "z";
        };

        _proto.upArrowClicked = function upArrowClicked(node, kind) {
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
        };

        _proto.downArrowClicked = function downArrowClicked(node, kind) {
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
        };

        return VectorList;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xLabelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yLabelNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zLabelNode", [_dec4], {
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
//# sourceMappingURL=VectorList.js.map