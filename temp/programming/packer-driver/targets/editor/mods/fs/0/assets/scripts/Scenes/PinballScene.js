System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, PhysicsSystem2D, Vec2, Vec3, RigidBody2D, Prefab, instantiate, tween, BaseScene, BeadNode, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, PinballScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeadNode(extras) {
    _reporterNs.report("BeadNode", "./BeadNode", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      RigidBody2D = _cc.RigidBody2D;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }, function (_unresolved_3) {
      BeadNode = _unresolved_3.BeadNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85701DkDxNAII63JRQZdAmM", "PinballScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PinballScene", PinballScene = (_dec = ccclass("PinballScene"), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class PinballScene extends (_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _initializerDefineProperty(this, "nodeLayer", _descriptor, this);

          _initializerDefineProperty(this, "beadPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "beadArray", _descriptor3, this);

          _initializerDefineProperty(this, "monsterArray", _descriptor4, this);

          _defineProperty(this, "myForce", 0);

          _defineProperty(this, "myTime", new Date());

          _defineProperty(this, "roolStart", false);

          _defineProperty(this, "realStart", false);

          _defineProperty(this, "coinNum", 0);
        }

        // -520
        async onLoad() {
          super.onLoad();
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.gravity = new Vec2(0, 0); // PhysicsSystem2D.instance.gravity = new Vec2(0, -20 * PHYSICS_2D_PTM_RATIO);
          // PhysicsSystem2D.instance.debugDrawFlags =
          //   EPhysics2DDrawFlags.Aabb |
          //   EPhysics2DDrawFlags.Pair |
          //   EPhysics2DDrawFlags.CenterOfMass |
          //   EPhysics2DDrawFlags.Joint |
          //   EPhysics2DDrawFlags.Shape;
          // this.assetManager = AssetManager.getInstance();
          // const assetResult = await this.assetManager.loadAssets();
          // this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        }

        rollButtonClicked() {
          //
          console.log("roll", this.myForce);

          if (this.myForce == 0) {
            this.coinNum = 0;
            this.roolStart = true;
            this.myTime = new Date();

            if (this.beadArray.length > 0) {
              while (this.beadArray.length > 0) {
                const myBead = this.beadArray[0];
                myBead.removeFromParent();
                myBead.destroy();
                this.beadArray.splice(0, 1);
              }
            }

            const vecArray = [new Vec3(-162, -520, 0), new Vec3(0, -420, 0), new Vec3(162, -520, 0)];

            for (var i = 0; i < 3; i++) {
              const beadNode = instantiate(this.beadPrefab);
              this.nodeLayer.addChild(beadNode);
              beadNode.setPosition(vecArray[i]);
              this.beadArray.push(beadNode);
              beadNode.getComponent(_crd && BeadNode === void 0 ? (_reportPossibleCrUseOfBeadNode({
                error: Error()
              }), BeadNode) : BeadNode).addRandomForce();
            }
          }
        }

        onTouchStart(event) {
          // console.log(event);
          for (var i in this.beadArray) {
            const myBead = this.beadArray[i];
            const bidRigid = myBead.getComponent(RigidBody2D);
            bidRigid.applyForce(new Vec2(50000 + 5000 * Number(i), 20000 + 500 * Number(i)), new Vec2(200, 20), true);
          } // bidRigid.applyForceToCenter(new Vec2(20000, 2000), true);

        }

        update(dt) {
          let totalForce = 0;

          for (var i in this.beadArray) {
            const myBead = this.beadArray[i];
            const bidRigid = myBead.getComponent(RigidBody2D);
            const myForce = Math.sqrt(Math.pow(bidRigid.linearVelocity.x, 2) + Math.pow(bidRigid.linearVelocity.y, 2));
            totalForce += myForce;
          }

          this.myForce = totalForce;

          if (this.roolStart && totalForce > 0 && !this.realStart) {
            this.realStart = true;
          }

          if (this.realStart) {
            if (totalForce == 0) {
              this.roolStart = false;
              this.realStart = false;
              this.moveMonster();
              console.log("gold : " + this.coinNum, "time : " + (new Date().getTime() - this.myTime.getTime()) / 1000);
            }

            const timeDiff = (new Date().getTime() - this.myTime.getTime()) / 1000;

            if (timeDiff >= 3) {
              for (var i in this.beadArray) {
                const myBead = this.beadArray[i];
                myBead.getComponent(_crd && BeadNode === void 0 ? (_reportPossibleCrUseOfBeadNode({
                  error: Error()
                }), BeadNode) : BeadNode).diminishVelocity(0.95);
              }
            } else if (timeDiff >= 2) {
              for (var i in this.beadArray) {
                const myBead = this.beadArray[i];
                myBead.getComponent(_crd && BeadNode === void 0 ? (_reportPossibleCrUseOfBeadNode({
                  error: Error()
                }), BeadNode) : BeadNode).diminishVelocity(0.975);
              }
            }
          }
        }

        addGold(gold) {
          this.coinNum += gold;
        }

        moveMonster() {
          for (let i in this.monsterArray) {
            const monster = this.monsterArray[i];
            const direction = Math.floor(Math.random() * 4);

            switch (direction) {
              case 0:
                tween(monster).by(0.2, {
                  position: new Vec3(-100, 0, 0)
                }).start();
                break;

              case 1:
                tween(monster).by(0.2, {
                  position: new Vec3(100, 0, 0)
                }).start();
                break;

              case 2:
                tween(monster).by(0.2, {
                  position: new Vec3(0, -100, 0)
                }).start();
                break;

              case 3:
                tween(monster).by(0.2, {
                  position: new Vec3(0, 100, 0)
                }).start();
                break;
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "beadPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "beadArray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "monsterArray", [_dec5], {
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
//# sourceMappingURL=PinballScene.js.map