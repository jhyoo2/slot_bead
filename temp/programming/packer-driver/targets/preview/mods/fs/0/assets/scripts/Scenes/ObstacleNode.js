System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Vec3, Collider2D, Contact2DType, Label, tween, BaseScene, BeadNode, PinballScene, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ObstacleNode;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfBeadNode(extras) {
    _reporterNs.report("BeadNode", "./BeadNode", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfPinballScene(extras) {
    _reporterNs.report("PinballScene", "./PinballScene", _context2.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Label = _cc.Label;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }, function (_unresolved_3) {
      BeadNode = _unresolved_3.BeadNode;
    }, function (_unresolved_4) {
      PinballScene = _unresolved_4.PinballScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c786yKPDdASZeYdSPoPo2d", "ObstacleNode", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ObstacleNode", ObstacleNode = (_dec = ccclass("ObstacleNode"), _dec2 = property(String), _dec3 = property(_crd && PinballScene === void 0 ? (_reportPossibleCrUseOfPinballScene({
        error: Error()
      }), PinballScene) : PinballScene), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(ObstacleNode, _ref);

        function ObstacleNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "myTag", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pinballScene", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "row", 0);

          _defineProperty(_assertThisInitialized(_this), "column", 0);

          return _this;
        }

        var _proto = ObstacleNode.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var collider;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _ref.prototype.onLoad.call(this);

                    collider = this.getComponent(Collider2D);

                    if (collider) {
                      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
                      // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
                      // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
                    }

                  case 3:
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

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.getComponent(_crd && BeadNode === void 0 ? (_reportPossibleCrUseOfBeadNode({
            error: Error()
          }), BeadNode) : BeadNode)) {
            if (this.pinballScene) {
              this.pinballScene.addGold(Number(this.myTag) * 10);
            }

            var myNode = new Node();
            var myLabel = myNode.addComponent(Label);
            myLabel.string = "GOLD + " + Number(this.myTag) * 10;
            this.node.addChild(myNode);
            myNode.setPosition(new Vec3(0, 100, 0));
            tween(myNode).by(0.2, {
              position: new Vec3(0, 70, 0)
            }).delay(0.3).call(function () {
              myNode.removeFromParent();
              myNode.destroy();
            }).start();
          }
        };

        return ObstacleNode;
      }(_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myTag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pinballScene", [_dec3], {
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
//# sourceMappingURL=ObstacleNode.js.map