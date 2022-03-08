System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Slider, ToggleComponent, Vec3, Sprite, SpriteFrame, Texture2D, ImageAsset, AssetManager, VectorList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, DecoMaster;

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
    _reporterNs.report("Deco", "../../Prefabs/Deco/DecoTypes", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context2.meta, extras);
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
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      ImageAsset = _cc.ImageAsset;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      VectorList = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ff0fEYJWJBWq9HTuPKqdt9", "DecoMaster", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", DecoMaster = (_dec = ccclass("DecoMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DecoMaster, _Component);

        function DecoMaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "kindNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "placeNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "anchorNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pointNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "opacityNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stackToggleNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stackSizeNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objectIdxArray", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objectSizeNode", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objectPointNode", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "imgNode", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "shadowNode", _descriptor12, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "selectedIdx", -1);

          _defineProperty(_assertThisInitialized(_this), "sceneScript", null);

          _defineProperty(_assertThisInitialized(_this), "decoData", null);

          return _this;
        }

        var _proto = DecoMaster.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var kindScript, placeScript, anchorScript, pointScript, stackSizeScript;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
                      error: Error()
                    }), AssetManager) : AssetManager).getInstance();
                    kindScript = this.kindNode.getComponent("ListView"); // console.log(this.kindNode);

                    kindScript.setDataList([{
                      tag: "00",
                      label: "미설정"
                    }, {
                      tag: "01",
                      label: "바닥타일"
                    }, {
                      tag: "02",
                      label: "벽지"
                    }, {
                      tag: "03",
                      label: "세입자"
                    }, {
                      tag: "04",
                      label: "테이블"
                    }, {
                      tag: "05",
                      label: "의자"
                    }, {
                      tag: "06",
                      label: "창문"
                    }, {
                      tag: "07",
                      label: "카펫"
                    }, {
                      tag: "08",
                      label: "소품"
                    }, {
                      tag: "09",
                      label: "벽장식"
                    }, {
                      tag: "10",
                      label: "기타가구"
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

                    stackSizeScript = this.stackSizeNode.getComponent("VectorList");

                    stackSizeScript.callback = function (vec) {
                      _this2.setDecoData("stackSize", vec);
                    }; /////////////////


                    this.objectSizeNode.getComponent(_crd && VectorList === void 0 ? (_reportPossibleCrUseOfVectorList({
                      error: Error()
                    }), VectorList) : VectorList).callback = function (vec) {
                      _this2.setObjectData("objectSize", vec);
                    };

                    this.objectPointNode.getComponent(_crd && VectorList === void 0 ? (_reportPossibleCrUseOfVectorList({
                      error: Error()
                    }), VectorList) : VectorList).callback = function (vec) {
                      _this2.setObjectData("objectPoint", vec);
                    };

                    this.objectPointNode.getComponent(_crd && VectorList === void 0 ? (_reportPossibleCrUseOfVectorList({
                      error: Error()
                    }), VectorList) : VectorList).minNum = -18;

                  case 17:
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
            var stackableScript = this.stackToggleNode.getComponent(ToggleComponent);
            stackableScript.isChecked = this.decoData.stackable; // this.opacityNode.getComponent(Slider).progress = this.decoData.opacity;

            this.objectSizeNode.getComponent(_crd && VectorList === void 0 ? (_reportPossibleCrUseOfVectorList({
              error: Error()
            }), VectorList) : VectorList).setLabel(this.decoData.objectArray[this.decoData.selectedDeco].objectSize);
            this.objectPointNode.getComponent(_crd && VectorList === void 0 ? (_reportPossibleCrUseOfVectorList({
              error: Error()
            }), VectorList) : VectorList).setLabel(this.decoData.objectArray[this.decoData.selectedDeco].objectPoint); // this.objectPointNode.active = this.decoData.selectedDeco != 0;

            for (var i in this.objectIdxArray) {
              var buttonNode = this.objectIdxArray[i];

              if (Number(i) == this.decoData.selectedDeco) {
                buttonNode.setScale(new Vec3(1.0, 1.0, 1.0));
              } else {
                buttonNode.setScale(new Vec3(0.75, 0.75, 0.75));
              }
            }

            if (this.decoData.selectedDeco != this.selectedIdx) {
              this.selectedIdx = this.decoData.selectedDeco;
              this.updateObjectImg();
            }
          }
        };

        _proto.setDecoData = function setDecoData(kind, obj) {
          if (this.sceneScript && this.decoData) {
            this.sceneScript.setDecoData(kind, obj);
          }
        };

        _proto.setObjectData = function setObjectData(kind, obj) {
          // console.log(kind, obj);
          if (this.sceneScript && this.decoData) {
            this.sceneScript.setObjectData(kind, obj);
          }
        };

        _proto.resetDecoObject = function resetDecoObject() {
          this.selectedIdx = -1;
          this.decoData = null;
          var kindScript = this.kindNode.getComponent("ListView");
          kindScript.resetLabel();
          var placeScript = this.placeNode.getComponent("ListView");
          placeScript.resetLabel();
          var anchorScript = this.anchorNode.getComponent("ListView");
          anchorScript.resetLabel();
          var pointScript = this.pointNode.getComponent("VectorList");
          pointScript.resetLabel();
          this.opacityNode.getComponent(Slider).progress = 1.0; // console.log(this.decoData);

          this.objectSizeNode.getComponent(_crd && VectorList === void 0 ? (_reportPossibleCrUseOfVectorList({
            error: Error()
          }), VectorList) : VectorList).resetLabel();
          this.objectPointNode.getComponent(_crd && VectorList === void 0 ? (_reportPossibleCrUseOfVectorList({
            error: Error()
          }), VectorList) : VectorList).resetLabel();
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

        _proto.selectDecoIdx = function selectDecoIdx(node, idx) {
          if (this.decoData) {
            this.sceneScript.setSelectedDeco(Number(idx));
          }
        };

        _proto.updateObjectImg = function updateObjectImg() {
          if (!this.decoData) {
            this.imgNode.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
            return;
          }

          if (this.decoData.objectArray[this.selectedIdx].spriteFrame) {
            this.imgNode.getComponent(Sprite).spriteFrame = this.decoData.objectArray[this.selectedIdx].spriteFrame;
          } else {
            this.imgNode.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
          }

          if (this.decoData.objectArray[this.selectedIdx].shadowFrame) {
            this.shadowNode.getComponent(Sprite).spriteFrame = this.decoData.objectArray[this.selectedIdx].shadowFrame;
          } else {
            this.shadowNode.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
          }
        };

        _proto.replaceImg = function replaceImg(kind, imgObject) {
          // console.log(kind, imgObject);
          var imgAsset = new ImageAsset(imgObject.img);
          var spriteFrame = new SpriteFrame();
          var tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex;

          if (kind == 0) {
            this.imgNode.getComponent(Sprite).spriteFrame = spriteFrame;
          } else if (kind == 1) {
            this.shadowNode.getComponent(Sprite).spriteFrame = spriteFrame;
          } // this.sceneScript.replaceObjImage(kind, imgObject);

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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "opacityNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "stackToggleNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stackSizeNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "objectIdxArray", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "objectSizeNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "objectPointNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "imgNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "shadowNode", [_dec13], {
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
//# sourceMappingURL=DecoMaster.js.map