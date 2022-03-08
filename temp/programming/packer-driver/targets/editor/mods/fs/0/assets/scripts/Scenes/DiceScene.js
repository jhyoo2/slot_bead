System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, size, director, Vec3, Node, instantiate, Sprite, tween, Label, Color, BaseScene, AssetManager, DiceManager, TileRail, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, DiceScene;

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

  function _reportPossibleCrUseOfDiceManager(extras) {
    _reporterNs.report("DiceManager", "../Prefabs/DiceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileRail(extras) {
    _reporterNs.report("TileRail", "../Prefabs/DiceScene/TileRail", _context.meta, extras);
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

      ({
        ccclass,
        property
      } = _decorator);

      _export("DiceScene", DiceScene = (_dec = ccclass("DiceScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class DiceScene extends (_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "diceManager", null);

          _initializerDefineProperty(this, "mainCamera", _descriptor, this);

          _initializerDefineProperty(this, "bgLayer", _descriptor2, this);

          _defineProperty(this, "bgArray", []);

          _defineProperty(this, "bgTime", 0.0);

          _initializerDefineProperty(this, "tileLayer", _descriptor3, this);

          _defineProperty(this, "tileArray", []);

          _defineProperty(this, "tileIdx", 0);

          _initializerDefineProperty(this, "objectLayer", _descriptor4, this);

          _defineProperty(this, "objectArray", []);

          _initializerDefineProperty(this, "blockLayer", _descriptor5, this);

          _defineProperty(this, "basePos", new Vec3(0, 500, 0));

          _defineProperty(this, "blockSize", new Vec3((1080 - 420) / 4, 773 / 8, 0));

          _defineProperty(this, "startIdx", 4);
        }

        async onLoad() {
          super.onLoad();
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          const assetResult = await this.assetManager.loadAssets(); // console.log(this.assetManager);

          this.initDiceScene();
          const diceManager = new (_crd && DiceManager === void 0 ? (_reportPossibleCrUseOfDiceManager({
            error: Error()
          }), DiceManager) : DiceManager)();
          const slotObject = diceManager.initDiceManager({
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
        }

        initDiceScene() {
          this.initBg();
          this.initTile();
          this.setLayer();
        }

        setLayer() {
          this.bgLayer.setPosition(this.getLayerPos(this.startIdx));
          this.tileLayer.setPosition(this.getLayerPos(this.startIdx));
          this.blockLayer.setPosition(this.getLayerPos(this.startIdx));
          this.objectLayer.setPosition(this.getLayerPos(this.startIdx));
        }

        moveLayer(time) {
          const playerIdx = this.diceManager.getPlayerIdx() + 1;
          const layerPos = this.getLayerPos(playerIdx);
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
        }

        getLayerPos(playerIdx) {
          const railNum = Math.floor(playerIdx / 4);

          if (railNum % 2 == 0) {
            const rowNum = playerIdx % 4;
            return new Vec3(100 - 50 * rowNum, -this.winSize.height / 2, 0);
          } else {
            const rowNum = playerIdx % 4;
            return new Vec3(-100 + 50 * rowNum, -this.winSize.height / 2, 0);
          }
        }

        initBg() {
          const bgSpriteFrame = this.assetManager.assetDic["DiceScene/bg"];

          for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
              const bgNode = new Node();
              bgNode.setPosition(new Vec3(-512 * 1.5 + 512 * j, 512 * i, 1));
              const bgSprite = bgNode.addComponent(Sprite);
              bgSprite.spriteFrame = bgSpriteFrame;
              this.bgLayer.addChild(bgNode);
              this.bgArray.push(bgNode);
            }
          }
        }

        moveBg(time, yPos) {
          const minPos = this.bgArray[0].getPosition().y;

          if (minPos <= -512) {
            const bgSpriteFrame = this.assetManager.assetDic["DiceScene/bg"];
            const len = this.bgArray.length; // add four

            for (var i = 0; i < 4; i++) {
              const lastObj = this.bgArray[len - 1 - i];
              const lastPos = lastObj.getPosition();
              const bgNode = new Node();
              bgNode.setPosition(new Vec3(lastPos.x, lastPos.y + 512, lastPos.z));
              const bgSprite = bgNode.addComponent(Sprite);
              bgSprite.spriteFrame = bgSpriteFrame;
              this.bgLayer.addChild(bgNode);
              this.bgArray.push(bgNode);
            } // erase four


            for (var i = 0; i < 4; i++) {
              const beginNode = this.bgArray[0];
              beginNode.removeFromParent();
              beginNode.destroy();
              this.bgArray.splice(0, 1);
            }
          }

          for (var j in this.bgArray) {
            const bgNode = this.bgArray[j];
            tween(bgNode).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }
        }

        initTile() {
          const tilePrefab = this.assetManager.prefabDic["TileRail"];

          for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 2; j++) {
              const tileNode = instantiate(tilePrefab);
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
        }

        moveTile(time, yPos) {
          const minPos = this.tileArray[0].getPosition().y;

          if (minPos <= -1100) {
            // add one
            const tilePrefab = this.assetManager.prefabDic["TileRail"];
            const lastTile = this.tileArray[this.tileArray.length - 1];
            const lastPos = lastTile.getPosition();

            for (var j = 0; j < 2; j++) {
              const tileNode = instantiate(tilePrefab);
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


            const firstTile = this.tileArray[0];
            firstTile.removeFromParent();
            firstTile.destroy();
            this.tileArray.splice(0, 1);
            const firstObj = this.objectArray[0];
            firstObj.removeFromParent();
            firstObj.destroy();
            this.objectArray.splice(0, 1);
          }

          for (var t in this.tileArray) {
            const tileNode = this.tileArray[t];
            tween(tileNode).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }

          for (t in this.objectArray) {
            const objNode = this.objectArray[t];
            tween(objNode).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }
        }

        update(dt) {
          this.bgTime += dt;

          if (this.bgTime >= 1.0 && this.bgArray.length > 0) {
            this.bgTime = 0.0; // this.moveBg(0.25, -this.blockSize.y);
            // this.moveTile(0.25, -this.blockSize.y);
            // this.diceManager.moveBlock(0.25, -this.blockSize.y);
          }
        }

        buttonClicked(node, idx) {
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
        }

        showDiceResult(diceResult) {
          // console.log(diceResult);
          const labelNode = new Node();
          labelNode.setPosition(0, 400 - this.winSize.height / 2, 0);
          this.node.insertChild(labelNode, 50);
          const label = labelNode.addComponent(Label);
          label.color = new Color(0, 0, 0, 255);
          label.fontSize = 100;
          label.lineHeight = 100;
          label.string = diceResult.first + " | " + diceResult.second;
          tween(labelNode).to(0.5, {
            scale: new Vec3(1.5, 1.5, 1)
          }).to(0.25, {
            scale: new Vec3(1.0, 1.0, 1)
          }).call(() => {
            this.showDiceEvent(diceResult.first + diceResult.second);
          }).delay(1.0).call(() => {
            labelNode.removeFromParent();
            labelNode.destroy();
          }).start();
        }

        showDiceEvent(diceNum) {
          var self = this;
          const eventTween = tween(this.node);

          for (var i = 0; i < diceNum; i++) {
            // const eventTime = 0.1 + Math.random() * 0.1;
            const eventTime = 0.15 + 0.01 * i;
            eventTween.call(() => {
              self.moveStart(eventTime);
            }).delay(eventTime);
          }

          eventTween.start();
        }

        moveStart(time) {
          // console.log(time);
          const nextBlock = this.diceManager.getNextBlock();
          const yDiff = nextBlock.getPosition().y - this.basePos.y;
          this.moveBg(time, -yDiff);
          this.moveTile(time, -yDiff);
          this.moveLayer(time);
          this.diceManager.moveBlock(time, -yDiff);
        }

        gotoMain() {
          director.loadScene("MainScene");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tileLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objectLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "blockLayer", [_dec6], {
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
//# sourceMappingURL=DiceScene.js.map