System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, size, director, Vec3, Node, instantiate, Sprite, tween, Label, Color, BaseScene, AssetManager, DiceManager, TileRail, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, DiceScene;

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

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfDiceManager(extras) {
    _reporterNs.report("DiceManager", "../Prefabs/DiceManager", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfTileRail(extras) {
    _reporterNs.report("TileRail", "../Prefabs/DiceScene/TileRail", _context2.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      size = _cc.size;
      director = _cc.director;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Label = _cc.Label;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }, function (_unresolved_3) {
      AssetManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      DiceManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      TileRail = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5aeb0kBwlZFNJJnAGB89LT3", "DiceScene", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DiceScene", DiceScene = (_dec = ccclass("DiceScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(DiceScene, _ref);

        function DiceScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "diceManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "mainCamera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bgLayer", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "bgArray", []);

          _defineProperty(_assertThisInitialized(_this), "bgTime", 0.0);

          _initializerDefineProperty(_assertThisInitialized(_this), "tileLayer", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "tileArray", []);

          _defineProperty(_assertThisInitialized(_this), "tileIdx", 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "objectLayer", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "objectArray", []);

          _initializerDefineProperty(_assertThisInitialized(_this), "blockLayer", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "basePos", new Vec3(0, 500, 0));

          _defineProperty(_assertThisInitialized(_this), "blockSize", new Vec3((1080 - 420) / 4, 773 / 8, 0));

          _defineProperty(_assertThisInitialized(_this), "startIdx", 4);

          return _this;
        }

        var _proto = DiceScene.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var assetResult, diceManager, slotObject;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _ref.prototype.onLoad.call(this);

                    this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
                      error: Error()
                    }), AssetManager) : AssetManager).getInstance();
                    _context.next = 4;
                    return this.assetManager.loadAssets();

                  case 4:
                    assetResult = _context.sent;
                    // console.log(this.assetManager);
                    this.initDiceScene();
                    diceManager = new (_crd && DiceManager === void 0 ? (_reportPossibleCrUseOfDiceManager({
                      error: Error()
                    }), DiceManager) : DiceManager)();
                    slotObject = diceManager.initDiceManager({
                      startIdx: this.startIdx,
                      basePos: this.basePos,
                      blockSize: this.blockSize,
                      radius: 450,
                      iconNum: 13,
                      iconSize: size(175, 175)
                    });
                    diceManager.eventTarget = this;
                    this.diceManager = diceManager;
                    this.blockLayer.insertChild(slotObject, 10);

                  case 11:
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

        _proto.initDiceScene = function initDiceScene() {
          this.initBg();
          this.initTile();
          this.setLayer();
        };

        _proto.setLayer = function setLayer() {
          this.bgLayer.setPosition(this.getLayerPos(this.startIdx));
          this.tileLayer.setPosition(this.getLayerPos(this.startIdx));
          this.blockLayer.setPosition(this.getLayerPos(this.startIdx));
          this.objectLayer.setPosition(this.getLayerPos(this.startIdx));
        };

        _proto.moveLayer = function moveLayer(time) {
          var playerIdx = this.diceManager.getPlayerIdx() + 1;
          var layerPos = this.getLayerPos(playerIdx);
          tween(this.bgLayer).to(time, {
            position: layerPos
          }).start();
          tween(this.tileLayer).to(time, {
            position: layerPos
          }).start();
          tween(this.blockLayer).to(time, {
            position: layerPos
          }).start();
          tween(this.objectLayer).to(time, {
            position: layerPos
          }).start();
        };

        _proto.getLayerPos = function getLayerPos(playerIdx) {
          var railNum = Math.floor(playerIdx / 4);

          if (railNum % 2 == 0) {
            var rowNum = playerIdx % 4;
            return new Vec3(100 - 50 * rowNum, -this.winSize.height / 2, 0);
          } else {
            var _rowNum = playerIdx % 4;

            return new Vec3(-100 + 50 * _rowNum, -this.winSize.height / 2, 0);
          }
        };

        _proto.initBg = function initBg() {
          var bgSpriteFrame = this.assetManager.assetDic["DiceScene/bg"];

          for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
              var bgNode = new Node();
              bgNode.setPosition(new Vec3(-512 * 1.5 + 512 * j, 512 * i, 1));
              var bgSprite = bgNode.addComponent(Sprite);
              bgSprite.spriteFrame = bgSpriteFrame;
              this.bgLayer.addChild(bgNode);
              this.bgArray.push(bgNode);
            }
          }
        };

        _proto.moveBg = function moveBg(time, yPos) {
          var minPos = this.bgArray[0].getPosition().y;

          if (minPos <= -512) {
            var bgSpriteFrame = this.assetManager.assetDic["DiceScene/bg"];
            var len = this.bgArray.length; // add four

            for (var i = 0; i < 4; i++) {
              var lastObj = this.bgArray[len - 1 - i];
              var lastPos = lastObj.getPosition();
              var bgNode = new Node();
              bgNode.setPosition(new Vec3(lastPos.x, lastPos.y + 512, lastPos.z));
              var bgSprite = bgNode.addComponent(Sprite);
              bgSprite.spriteFrame = bgSpriteFrame;
              this.bgLayer.addChild(bgNode);
              this.bgArray.push(bgNode);
            } // erase four


            for (var i = 0; i < 4; i++) {
              var beginNode = this.bgArray[0];
              beginNode.removeFromParent();
              beginNode.destroy();
              this.bgArray.splice(0, 1);
            }
          }

          for (var j in this.bgArray) {
            var _bgNode = this.bgArray[j];
            tween(_bgNode).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }
        };

        _proto.initTile = function initTile() {
          var tilePrefab = this.assetManager.prefabDic["TileRail"];

          for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 2; j++) {
              var tileNode = instantiate(tilePrefab);
              tileNode.setPosition(new Vec3(0, this.basePos.y - 773 + 773 * i - this.startIdx * this.blockSize.y, 1));

              if (j == 1) {
                this.objectLayer.insertChild(tileNode, 0);
                this.objectArray.push(tileNode);
                tileNode.getComponent(_crd && TileRail === void 0 ? (_reportPossibleCrUseOfTileRail({
                  error: Error()
                }), TileRail) : TileRail).setTileObj(this.tileIdx++ % 3 % 3);
              } else {
                this.tileLayer.insertChild(tileNode, 0);
                this.tileArray.push(tileNode);
              }
            }
          }
        };

        _proto.moveTile = function moveTile(time, yPos) {
          var minPos = this.tileArray[0].getPosition().y;

          if (minPos <= -1100) {
            // add one
            var tilePrefab = this.assetManager.prefabDic["TileRail"];
            var lastTile = this.tileArray[this.tileArray.length - 1];
            var lastPos = lastTile.getPosition();

            for (var j = 0; j < 2; j++) {
              var tileNode = instantiate(tilePrefab);
              tileNode.setPosition(new Vec3(lastPos.x, lastPos.y + 773, lastPos.z));

              if (j == 1) {
                this.objectLayer.insertChild(tileNode, 0);
                this.objectArray.push(tileNode);
                tileNode.getComponent(_crd && TileRail === void 0 ? (_reportPossibleCrUseOfTileRail({
                  error: Error()
                }), TileRail) : TileRail).setTileObj(this.tileIdx++ % 3 % 3);
              } else {
                this.tileLayer.insertChild(tileNode, 0);
                this.tileArray.push(tileNode);
              }
            } // erase one


            var firstTile = this.tileArray[0];
            firstTile.removeFromParent();
            firstTile.destroy();
            this.tileArray.splice(0, 1);
            var firstObj = this.objectArray[0];
            firstObj.removeFromParent();
            firstObj.destroy();
            this.objectArray.splice(0, 1);
          }

          for (var t in this.tileArray) {
            var _tileNode = this.tileArray[t];
            tween(_tileNode).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }

          for (t in this.objectArray) {
            var objNode = this.objectArray[t];
            tween(objNode).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }
        };

        _proto.update = function update(dt) {
          this.bgTime += dt;

          if (this.bgTime >= 1.0 && this.bgArray.length > 0) {
            this.bgTime = 0.0; // this.moveBg(0.25, -this.blockSize.y);
            // this.moveTile(0.25, -this.blockSize.y);
            // this.diceManager.moveBlock(0.25, -this.blockSize.y);
          }
        };

        _proto.buttonClicked = function buttonClicked(node, idx) {
          // this.diceManager.rollWithNetwork();
          // this.diceManager.rollWithRandom();
          // this.diceManager.rollWithFixed([
          //   { iconKind: 2, backKind: 1 },
          //   { iconKind: 2, backKind: 2 },
          //   { iconKind: 2, backKind: 3 },
          // ]);
          if (this.objectArray.length == 0 || this.diceManager.rolling) {
            return;
          }

          this.diceManager.rollWithNetwork();
        };

        _proto.showDiceResult = function showDiceResult(diceResult) {
          var _this2 = this;

          // console.log(diceResult);
          var labelNode = new Node();
          labelNode.setPosition(0, 400 - this.winSize.height / 2, 0);
          this.node.insertChild(labelNode, 50);
          var label = labelNode.addComponent(Label);
          label.color = new Color(0, 0, 0, 255);
          label.fontSize = 100;
          label.lineHeight = 100;
          label.string = diceResult.first + " | " + diceResult.second;
          tween(labelNode).to(0.5, {
            scale: new Vec3(1.5, 1.5, 1)
          }).to(0.25, {
            scale: new Vec3(1.0, 1.0, 1)
          }).call(function () {
            _this2.showDiceEvent(diceResult.first + diceResult.second);
          }).delay(1.0).call(function () {
            labelNode.removeFromParent();
            labelNode.destroy();
          }).start();
        };

        _proto.showDiceEvent = function showDiceEvent(diceNum) {
          var self = this;
          var eventTween = tween(this.node);

          var _loop = function _loop() {
            // const eventTime = 0.1 + Math.random() * 0.1;
            var eventTime = 0.15 + 0.01 * i;
            eventTween.call(function () {
              self.moveStart(eventTime);
            }).delay(eventTime);
          };

          for (var i = 0; i < diceNum; i++) {
            _loop();
          }

          eventTween.start();
        };

        _proto.moveStart = function moveStart(time) {
          // console.log(time);
          var nextBlock = this.diceManager.getNextBlock();
          var yDiff = nextBlock.getPosition().y - this.basePos.y;
          this.moveBg(time, -yDiff);
          this.moveTile(time, -yDiff);
          this.moveLayer(time);
          this.diceManager.moveBlock(time, -yDiff);
        };

        _proto.gotoMain = function gotoMain() {
          director.loadScene("MainScene");
        };

        return DiceScene;
      }(_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tileLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objectLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "blockLayer", [_dec6], {
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
//# sourceMappingURL=DiceScene.js.map