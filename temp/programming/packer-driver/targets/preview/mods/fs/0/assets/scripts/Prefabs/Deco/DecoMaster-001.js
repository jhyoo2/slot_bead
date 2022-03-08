System.register(["__unresolved_0", "cc"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Slider, ToggleComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, DecoMaster;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoomScene(extras) {
    _reporterNs.report("RoomScene", "../../Scenes/RoomScene", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../../Scenes/RoomScene", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "./ListView", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfVectorList(extras) {
    _reporterNs.report("VectorList", "./VectorList", _context2.meta, extras);
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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", DecoMaster = (_dec = ccclass("DecoMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DecoMaster, _Component);

        function DecoMaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "kindNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "placeNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "anchorNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pointNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sizeNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "opacityNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stackToggleNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stackSizeNode", _descriptor8, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "sceneScript", null);

          _defineProperty(_assertThisInitialized(_this), "decoData", null);

          return _this;
        }

        var _proto = DecoMaster.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var kindScript, placeScript, anchorScript, pointScript, sizeScript, stackSizeScript;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    kindScript = this.kindNode.getComponent("ListView"); // console.log(this.kindNode);

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

                    kindScript.callback = function (idx) {
                      if (!_this2.decoData) {
                        return false;
                      }

                      _this2.setDecoData("decoType", idx);

                      return true;
                    };

                    placeScript = this.placeNode.getComponent("ListView");
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

                    placeScript.callback = function (idx) {
                      _this2.setDecoData("placeType", idx);
                    };

                    anchorScript = this.anchorNode.getComponent("ListView");
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

                    anchorScript.callback = function (idx) {
                      _this2.setDecoData("anchorType", idx);
                    };

                    pointScript = this.pointNode.getComponent("VectorList");

                    pointScript.callback = function (vec) {
                      _this2.setDecoData("decoPoint", vec);
                    };

                    sizeScript = this.sizeNode.getComponent("VectorList");

                    sizeScript.callback = function (vec) {
                      _this2.setDecoData("decoSize", vec);
                    };

                    stackSizeScript = this.stackSizeNode.getComponent("VectorList");

                    stackSizeScript.callback = function (vec) {
                      _this2.setDecoData("stackSize", vec);
                    };

                  case 15:
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

        _proto.update = function update(dt) {
          if (this.decoData) {
            var kindScript = this.kindNode.getComponent("ListView");
            kindScript.setLabel(this.decoData.decoType);
            var placeScript = this.placeNode.getComponent("ListView");
            placeScript.setLabel(this.decoData.placeType);
            var anchorScript = this.anchorNode.getComponent("ListView");
            anchorScript.setLabel(this.decoData.anchorType);
            var pointScript = this.pointNode.getComponent("VectorList");
            pointScript.setLabel(this.decoData.decoPoint);
            var sizeScript = this.sizeNode.getComponent("VectorList");
            sizeScript.setLabel(this.decoData.decoSize);
            var stackableScript = this.stackToggleNode.getComponent(ToggleComponent);
            stackableScript.isChecked = this.decoData.stackable;
          }
        };

        _proto.setDecoData = function setDecoData(kind, obj) {
          if (this.sceneScript && this.decoData) {
            this.sceneScript.setDecoData(kind, obj);
          }
        };

        _proto.resetDecoObject = function resetDecoObject() {
          this.decoData = null;
          var kindScript = this.kindNode.getComponent("ListView");
          kindScript.resetLabel();
          var placeScript = this.placeNode.getComponent("ListView");
          placeScript.resetLabel();
          var anchorScript = this.anchorNode.getComponent("ListView");
          anchorScript.resetLabel();
          var pointScript = this.pointNode.getComponent("VectorList");
          pointScript.resetLabel();
          var sizeScript = this.sizeNode.getComponent("VectorList");
          sizeScript.resetLabel();
          this.opacityNode.getComponent(Slider).progress = 1.0; // console.log(this.decoData);
        };

        _proto.eraseClicked = function eraseClicked() {
          if (this.sceneScript && this.decoData) {
            this.sceneScript.eraseDeco();
          }
        };

        _proto.sliderEvent = function sliderEvent(node, kind) {
          if (kind == "opacity") {
            this.setDecoData("opacity", {
              tag: this.opacityNode.getComponent(Slider).progress
            });
          }
        };

        _proto.toggleEvent = function toggleEvent(node, kind) {
          this.setDecoData("stackable", {
            tag: node.isChecked
          });
        };

        return DecoMaster;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "kindNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "placeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "anchorNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sizeNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "opacityNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stackToggleNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stackSizeNode", [_dec9], {
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
//# sourceMappingURL=DecoMaster-001.js.map