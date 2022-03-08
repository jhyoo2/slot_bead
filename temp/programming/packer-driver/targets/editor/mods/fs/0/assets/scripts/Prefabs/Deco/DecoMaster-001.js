System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Slider, ToggleComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, DecoMaster;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoomScene(extras) {
    _reporterNs.report("RoomScene", "../../Scenes/RoomScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../../Scenes/RoomScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "./ListView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVectorList(extras) {
    _reporterNs.report("VectorList", "./VectorList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Slider = _cc.Slider;
      ToggleComponent = _cc.ToggleComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "867b2PaF1VLNJ2FGg0qLeXW", "DecoMaster-001", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DecoMaster = (_dec = ccclass("DecoMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = class DecoMaster extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "kindNode", _descriptor, this);

          _initializerDefineProperty(this, "placeNode", _descriptor2, this);

          _initializerDefineProperty(this, "anchorNode", _descriptor3, this);

          _initializerDefineProperty(this, "pointNode", _descriptor4, this);

          _initializerDefineProperty(this, "sizeNode", _descriptor5, this);

          _initializerDefineProperty(this, "opacityNode", _descriptor6, this);

          _initializerDefineProperty(this, "stackToggleNode", _descriptor7, this);

          _initializerDefineProperty(this, "stackSizeNode", _descriptor8, this);

          _defineProperty(this, "sceneScript", null);

          _defineProperty(this, "decoData", null);
        }

        async onLoad() {
          const kindScript = this.kindNode.getComponent("ListView"); // console.log(this.kindNode);

          kindScript.setDataList([{
            tag: "00",
            label: "미설정"
          }, {
            tag: "01",
            label: "바닥"
          }, {
            tag: "02",
            label: "벽지"
          }, {
            tag: "03",
            label: "세입자"
          }, {
            tag: "04",
            label: "가구"
          }, {
            tag: "05",
            label: "가전"
          }, {
            tag: "06",
            label: "기타"
          }]);

          kindScript.callback = idx => {
            if (!this.decoData) {
              return false;
            }

            this.setDecoData("decoType", idx);
            return true;
          };

          const placeScript = this.placeNode.getComponent("ListView");
          placeScript.setDataList([{
            tag: "00",
            label: "미설정"
          }, {
            tag: "01",
            label: "바닥"
          }, {
            tag: "02",
            label: "좌측 벽"
          }, {
            tag: "03",
            label: "우측 벽"
          }, {
            tag: "04",
            label: "양측 벽"
          }]);

          placeScript.callback = idx => {
            this.setDecoData("placeType", idx);
          };

          const anchorScript = this.anchorNode.getComponent("ListView");
          anchorScript.setDataList([{
            tag: "00",
            label: "중앙"
          }, {
            tag: "01",
            label: "아래쪽"
          }, {
            tag: "02",
            label: "왼쪽"
          }, {
            tag: "03",
            label: "오른쪽"
          }]);

          anchorScript.callback = idx => {
            this.setDecoData("anchorType", idx);
          };

          const pointScript = this.pointNode.getComponent("VectorList");

          pointScript.callback = vec => {
            this.setDecoData("decoPoint", vec);
          };

          const sizeScript = this.sizeNode.getComponent("VectorList");

          sizeScript.callback = vec => {
            this.setDecoData("decoSize", vec);
          };

          const stackSizeScript = this.stackSizeNode.getComponent("VectorList");

          stackSizeScript.callback = vec => {
            this.setDecoData("stackSize", vec);
          };
        }

        update(dt) {
          if (this.decoData) {
            const kindScript = this.kindNode.getComponent("ListView");
            kindScript.setLabel(this.decoData.decoType);
            const placeScript = this.placeNode.getComponent("ListView");
            placeScript.setLabel(this.decoData.placeType);
            const anchorScript = this.anchorNode.getComponent("ListView");
            anchorScript.setLabel(this.decoData.anchorType);
            const pointScript = this.pointNode.getComponent("VectorList");
            pointScript.setLabel(this.decoData.decoPoint);
            const sizeScript = this.sizeNode.getComponent("VectorList");
            sizeScript.setLabel(this.decoData.decoSize);
            const stackableScript = this.stackToggleNode.getComponent(ToggleComponent);
            stackableScript.isChecked = this.decoData.stackable;
          }
        }

        setDecoData(kind, obj) {
          if (this.sceneScript && this.decoData) {
            this.sceneScript.setDecoData(kind, obj);
          }
        }

        resetDecoObject() {
          this.decoData = null;
          const kindScript = this.kindNode.getComponent("ListView");
          kindScript.resetLabel();
          const placeScript = this.placeNode.getComponent("ListView");
          placeScript.resetLabel();
          const anchorScript = this.anchorNode.getComponent("ListView");
          anchorScript.resetLabel();
          const pointScript = this.pointNode.getComponent("VectorList");
          pointScript.resetLabel();
          const sizeScript = this.sizeNode.getComponent("VectorList");
          sizeScript.resetLabel();
          this.opacityNode.getComponent(Slider).progress = 1.0; // console.log(this.decoData);
        }

        eraseClicked() {
          if (this.sceneScript && this.decoData) {
            this.sceneScript.eraseDeco();
          }
        }

        sliderEvent(node, kind) {
          if (kind == "opacity") {
            this.setDecoData("opacity", {
              tag: this.opacityNode.getComponent(Slider).progress
            });
          }
        }

        toggleEvent(node, kind) {
          this.setDecoData("stackable", {
            tag: node.isChecked
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "kindNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "placeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "anchorNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sizeNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "opacityNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stackToggleNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stackSizeNode", [_dec9], {
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
//# sourceMappingURL=DecoMaster-001.js.map