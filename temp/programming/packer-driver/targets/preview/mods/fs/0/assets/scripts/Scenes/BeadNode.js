System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Vec2, RigidBody2D, SpriteFrame, Sprite, Collider2D, Contact2DType, BaseScene, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BeadNode;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      RigidBody2D = _cc.RigidBody2D;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "502d9sTB0dGyYmMuOjQI0D8", "BeadNode", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BeadNode", BeadNode = (_dec = ccclass("BeadNode"), _dec2 = property(Boolean), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(BeadNode, _ref);

        function BeadNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "beadStart", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "myForce", 0);

          _defineProperty(_assertThisInitialized(_this), "myColor", 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "coverNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "beadFrame", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "maxForce", 0);

          _defineProperty(_assertThisInitialized(_this), "maxVelocity", new Vec2(0, 0));

          return _this;
        }

        var _proto = BeadNode.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var myColor, collider;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _ref.prototype.onLoad.call(this);

                    myColor = Math.floor(Math.random() * 5) + 1;
                    this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
                    collider = this.getComponent(Collider2D);

                    if (collider) {
                      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
                    }

                  case 5:
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

        _proto.activateBead = function activateBead() {
          this.coverNode.active = true;
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (this.beadStart) {
            var myColor = Math.floor(Math.random() * 5) + 1;
            this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
          }

          if (otherCollider.node.getComponent(BeadNode)) {
            var myRigid = this.node.getComponent(RigidBody2D);
            myRigid.linearVelocity = new Vec2(Math.max(this.maxVelocity.x, myRigid.linearVelocity.x * 2.2), Math.max(this.maxVelocity.y, myRigid.linearVelocity.y * 2.2));
          }
        };

        _proto.addRandomForce = function addRandomForce() {
          this.beadStart = true;
          var bidRigid = this.node.getComponent(RigidBody2D);
          var myForce = new Vec2(-20000 + 40000 * Math.random(), 90000 + 30000 * Math.random());
          bidRigid.applyForce(myForce, new Vec2(myForce.x / 100, myForce.y / 100), true);
        };

        _proto.diminishVelocity = function diminishVelocity(rate) {
          var bidRigid = this.node.getComponent(RigidBody2D);
          bidRigid.linearVelocity = new Vec2(bidRigid.linearVelocity.x * rate, bidRigid.linearVelocity.y * rate);
          this.maxVelocity = new Vec2(this.maxVelocity.x * rate, this.maxVelocity.y * rate);
        };

        _proto.update = function update(dt) {
          if (!this.beadStart) {
            return;
          }

          var bidRigid = this.node.getComponent(RigidBody2D);
          var myForce = Math.sqrt(Math.pow(bidRigid.linearVelocity.x, 2) + Math.pow(bidRigid.linearVelocity.y, 2));

          if (this.maxForce < myForce) {
            this.maxForce = myForce;
            this.maxVelocity = new Vec2(bidRigid.linearVelocity.x, bidRigid.linearVelocity.y);
          }

          this.myForce += myForce;

          if (myForce > 0) {
            var preVelo = bidRigid.linearVelocity;

            if (myForce <= 0.1) {
              bidRigid.linearVelocity = new Vec2(0, 0);
              bidRigid.angularVelocity = 0; // this.coverNode.getComponent(UIOpacityComponent).opacity = 0;

              this.beadStart = false;
            } else if (myForce > 10) {
              bidRigid.linearVelocity = new Vec2(preVelo.x * 0.9975, preVelo.y * 0.9975);
            } else if (myForce > 1) {
              bidRigid.linearVelocity = new Vec2(preVelo.x * 0.985, preVelo.y * 0.985);
            } else {
              bidRigid.linearVelocity = new Vec2(preVelo.x * 0.95, preVelo.y * 0.95);
            }

            if (myForce <= 3) {// this.coverNode.getComponent(UIOpacityComponent).opacity =
              //   (myForce / 3) * 255;
            }
          } // console.log(myForce);

        };

        return BeadNode;
      }(_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "beadStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coverNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "beadFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BeadNode.js.map