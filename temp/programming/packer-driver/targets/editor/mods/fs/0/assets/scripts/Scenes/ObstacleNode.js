System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Vec3, Collider2D, Contact2DType, Label, tween, BaseScene, PinballScene, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ObstacleNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPinballScene(extras) {
    _reporterNs.report("PinballScene", "./PinballScene", _context.meta, extras);
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
      PinballScene = _unresolved_3.PinballScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c786yKPDdASZeYdSPoPo2d", "ObstacleNode", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObstacleNode", ObstacleNode = (_dec = ccclass("ObstacleNode"), _dec2 = property(String), _dec3 = property(_crd && PinballScene === void 0 ? (_reportPossibleCrUseOfPinballScene({
        error: Error()
      }), PinballScene) : PinballScene), _dec(_class = (_class2 = (_temp = class ObstacleNode extends (_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "myTag", _descriptor, this);

          _initializerDefineProperty(this, "pinballScene", _descriptor2, this);
        }

        async onLoad() {
          super.onLoad();
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (this.pinballScene) {
            this.pinballScene.addGold(Number(this.myTag) * 10);
          } // will be called once when two colliders begin to contact
          // console.log("onBeginContact", otherCollider);


          const myNode = new Node();
          const myLabel = myNode.addComponent(Label);
          myLabel.string = "GOLD + " + Number(this.myTag) * 10;
          this.node.addChild(myNode);
          myNode.setPosition(new Vec3(0, 100, 0));
          tween(myNode).by(0.2, {
            position: new Vec3(0, 70, 0)
          }).delay(0.3).call(() => {
            myNode.removeFromParent();
            myNode.destroy();
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myTag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pinballScene", [_dec3], {
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
//# sourceMappingURL=ObstacleNode.js.map