System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Vec2, RigidBody2D, SpriteFrame, Sprite, UIOpacityComponent, Collider2D, Contact2DType, BaseScene, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BeadNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context.meta, extras);
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
      UIOpacityComponent = _cc.UIOpacityComponent;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "502d9sTB0dGyYmMuOjQI0D8", "BeadNode", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BeadNode", BeadNode = (_dec = ccclass("BeadNode"), _dec2 = property(Node), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class BeadNode extends (_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "beadStart", true);

          _defineProperty(this, "myForce", 0);

          _defineProperty(this, "myColor", 0);

          _initializerDefineProperty(this, "coverNode", _descriptor, this);

          _initializerDefineProperty(this, "beadFrame", _descriptor2, this);

          _defineProperty(this, "maxForce", 0);

          _defineProperty(this, "maxVelocity", new Vec2(0, 0));
        }

        async onLoad() {
          super.onLoad();
          const myColor = Math.floor(Math.random() * 5) + 1;
          this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (this.beadStart) {
            const myColor = Math.floor(Math.random() * 5) + 1;
            this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
          }

          if (otherCollider.node.getComponent(BeadNode)) {
            const myRigid = this.node.getComponent(RigidBody2D);
            myRigid.linearVelocity = new Vec2(Math.max(this.maxVelocity.x, myRigid.linearVelocity.x * 2.2), Math.max(this.maxVelocity.y, myRigid.linearVelocity.y * 2.2));
          }
        }

        addRandomForce() {
          const bidRigid = this.node.getComponent(RigidBody2D);
          const myForce = new Vec2(-40000 + 80000 * Math.random(), 90000 + 30000 * Math.random());
          bidRigid.applyForce(myForce, new Vec2(myForce.x / 100, myForce.y / 100), true);
        }

        diminishVelocity(rate) {
          const bidRigid = this.node.getComponent(RigidBody2D);
          bidRigid.linearVelocity = new Vec2(bidRigid.linearVelocity.x * rate, bidRigid.linearVelocity.y * rate);
          this.maxVelocity = new Vec2(this.maxVelocity.x * rate, this.maxVelocity.y * rate);
        }

        update(dt) {
          if (!this.beadStart) {
            return;
          }

          const bidRigid = this.node.getComponent(RigidBody2D);
          const myForce = Math.sqrt(Math.pow(bidRigid.linearVelocity.x, 2) + Math.pow(bidRigid.linearVelocity.y, 2));

          if (this.maxForce < myForce) {
            this.maxForce = myForce;
            this.maxVelocity = new Vec2(bidRigid.linearVelocity.x, bidRigid.linearVelocity.y);
          }

          this.myForce += myForce;

          if (myForce > 0) {
            const preVelo = bidRigid.linearVelocity;

            if (myForce <= 0.1) {
              bidRigid.linearVelocity = new Vec2(0, 0);
              bidRigid.angularVelocity = 0;
              this.coverNode.getComponent(UIOpacityComponent).opacity = 0;
              this.beadStart = false;
            } else if (myForce > 10) {
              bidRigid.linearVelocity = new Vec2(preVelo.x * 0.9975, preVelo.y * 0.9975);
            } else if (myForce > 1) {
              bidRigid.linearVelocity = new Vec2(preVelo.x * 0.985, preVelo.y * 0.985);
            } else {
              bidRigid.linearVelocity = new Vec2(preVelo.x * 0.95, preVelo.y * 0.95);
            }

            if (myForce <= 3) {
              this.coverNode.getComponent(UIOpacityComponent).opacity = myForce / 3 * 255;
            }
          } // console.log(myForce);

        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coverNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "beadFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BeadNode.js.map