System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, Vec3, Sprite, Label, tween, AssetManager, DiceIcon, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, DiceMaster;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiceManager(extras) {
    _reporterNs.report("DiceManager", "../DiceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiceIcon(extras) {
    _reporterNs.report("DiceIcon", "./DiceIcon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      DiceIcon = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01948HttrFAEptrAQvL77n4", "DiceMaster", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DiceMaster = (_dec = ccclass("DiceMaster"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class DiceMaster extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "backNode", _descriptor, this);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "diceManager", null);

          _defineProperty(this, "diceData", void 0);

          _defineProperty(this, "diceNumbers", {
            first: 0,
            second: 0
          });

          _defineProperty(this, "iconArray", []);

          _defineProperty(this, "player", null);

          _defineProperty(this, "playerIdx", 0);
        }

        initDiceMaster(diceData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.diceData = diceData;
          diceData.iconNum = 16;

          for (var i = -6; i < diceData.iconNum; i++) {
            const diceIdx = i + diceData.startIdx;
            const iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
            this.node.insertChild(iconObject, 0);
            iconObject.setPosition(this.getDicePlace(diceIdx));
            const iconScript = iconObject.getComponent("DiceIcon");
            iconScript.diceIdx = Number(diceIdx);
            const iconKind = Math.floor(Math.random() * 5) + 1;
            const backKind = Math.floor(Math.random() * 3) + 1;
            iconScript.initIcon(iconKind, backKind, this.diceData);
            iconScript.updateNumber(diceIdx);
            this.iconArray.push(iconObject);
          }

          const newPlayer = new Node();
          newPlayer.setPosition(this.iconArray[6].getPosition());
          const newSprite = newPlayer.addComponent(Sprite);
          newSprite.spriteFrame = this.assetManager.assetDic["Slot/pig"];
          this.node.insertChild(newPlayer, 30);
          this.player = newPlayer;
          this.playerIdx = diceData.startIdx;
        }

        getDicePlace(diceNum) {
          const railNum = diceNum >= 0 ? Math.floor(diceNum / 4) : Math.floor(Math.abs(diceNum + 1) / 4) + 1;

          if (railNum % 2 == 0) {
            const rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4; // console.log("1", diceNum, railNum, rowNum);

            return new Vec3(210 + this.diceData.blockSize.x * rowNum - 540, this.diceData.basePos.y + this.diceData.blockSize.y * (diceNum - this.diceData.startIdx), 0);
          } else {
            const rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4; // console.log("2", diceNum, railNum, rowNum);

            return new Vec3(1080 - 210 - this.diceData.blockSize.x * rowNum - 540, this.diceData.basePos.y + this.diceData.blockSize.y * (diceNum - this.diceData.startIdx), 0);
          }
        }

        addIcon() {
          const lastIcon = this.iconArray[this.iconArray.length - 1];
          const lastIconIdx = lastIcon.getComponent(_crd && DiceIcon === void 0 ? (_reportPossibleCrUseOfDiceIcon({
            error: Error()
          }), DiceIcon) : DiceIcon).diceIdx;
          const lastPos = lastIcon.getPosition();
          const prePos = this.getDicePlace(lastIconIdx);
          const postPos = this.getDicePlace(lastIconIdx + 1);
          const iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
          this.node.insertChild(iconObject, 0);
          iconObject.setPosition(new Vec3(lastPos.x + (postPos.x - prePos.x), lastPos.y + (postPos.y - prePos.y), lastPos.z + (postPos.z - prePos.z)));
          const iconScript = iconObject.getComponent(_crd && DiceIcon === void 0 ? (_reportPossibleCrUseOfDiceIcon({
            error: Error()
          }), DiceIcon) : DiceIcon);
          iconScript.diceIdx = lastIconIdx + 1;
          const iconKind = Math.floor(Math.random() * 5) + 1;
          const backKind = Math.floor(Math.random() * 3) + 1;
          iconScript.initIcon(iconKind, backKind, this.diceData);
          iconScript.updateNumber(iconScript.diceIdx);
          this.iconArray.push(iconObject);
        }

        movePlayer(time) {
          this.playerIdx++;
          const postPos = this.getDicePlace(this.playerIdx);
          const playerPos = this.player.getPosition();
          tween(this.player).to(time, {
            position: new Vec3(postPos.x, playerPos.y, playerPos.z)
          }).start();
        }

        getNextBlock() {
          for (var i in this.iconArray) {
            const iconObject = this.iconArray[i];
            const iconScript = iconObject.getComponent(_crd && DiceIcon === void 0 ? (_reportPossibleCrUseOfDiceIcon({
              error: Error()
            }), DiceIcon) : DiceIcon);

            if (iconScript.diceIdx == this.playerIdx + 1) {
              return iconObject;
            }
          }
        }

        sleep(t) {
          return new Promise(resolve => setTimeout(resolve, t));
        }

        async rollWithNetwork() {
          await this.sleep(1000);
          this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
          this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;

          if (this.diceData) {
            this.diceManager.getDiceResult(this.diceNumbers);
          }
        }

        rollWithRandom() {
          this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
          this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;
          const labelNode = new Node();
          labelNode.setPosition(540, 300, 0);
          this.node.insertChild(labelNode, 30);
          const label = labelNode.addComponent(Label);
          label.fontSize = 100;
          label.lineHeight = 100;
          label.string = this.diceNumbers.first + " | " + this.diceNumbers.second;
          tween(labelNode).to(0.5, {
            scale: new Vec3(1.5, 1.5, 1)
          }).to(0.5, {
            scale: new Vec3(1.0, 1.0, 1)
          }).call(() => {// this.movePlayer(1);
            // this.movePlayer(this.diceNumbers.first + this.diceNumbers.second);
          }).delay(2.0).call(() => {
            labelNode.removeFromParent();
          }).start();
        }

        rollWithFixed(iconDatas) {}

        moveBlock(time, yPos) {
          this.addIcon();

          for (var j in this.iconArray) {
            const iconObject = this.iconArray[j];

            if (iconObject.getPosition().y <= -500) {
              iconObject.removeFromParent();
              iconObject.destroy();
              this.iconArray.splice(Number(j), 1);
              continue;
            }

            tween(iconObject).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
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
//# sourceMappingURL=DiceMaster.js.map