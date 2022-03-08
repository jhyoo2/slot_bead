System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, Vec3, Sprite, Label, tween, AssetManager, DiceIcon, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, DiceMaster;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfDiceManager(extras) {
    _reporterNs.report("DiceManager", "../DiceManager", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfDiceIcon(extras) {
    _reporterNs.report("DiceIcon", "./DiceIcon", _context2.meta, extras);
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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", DiceMaster = (_dec = ccclass("DiceMaster"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceMaster, _Component);

        function DiceMaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backNode", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "diceManager", null);

          _defineProperty(_assertThisInitialized(_this), "diceData", void 0);

          _defineProperty(_assertThisInitialized(_this), "diceNumbers", {
            first: 0,
            second: 0
          });

          _defineProperty(_assertThisInitialized(_this), "iconArray", []);

          _defineProperty(_assertThisInitialized(_this), "player", null);

          _defineProperty(_assertThisInitialized(_this), "playerIdx", 0);

          return _this;
        }

        var _proto = DiceMaster.prototype;

        _proto.initDiceMaster = function initDiceMaster(diceData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.diceData = diceData;
          diceData.iconNum = 16;

          for (var i = -6; i < diceData.iconNum; i++) {
            var diceIdx = i + diceData.startIdx;
            var iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
            this.node.insertChild(iconObject, 0);
            iconObject.setPosition(this.getDicePlace(diceIdx));
            var iconScript = iconObject.getComponent("DiceIcon");
            iconScript.diceIdx = Number(diceIdx);
            var iconKind = Math.floor(Math.random() * 5) + 1;
            var backKind = Math.floor(Math.random() * 3) + 1;
            iconScript.initIcon(iconKind, backKind, this.diceData);
            iconScript.updateNumber(diceIdx);
            this.iconArray.push(iconObject);
          }

          var newPlayer = new Node();
          newPlayer.setPosition(this.iconArray[6].getPosition());
          var newSprite = newPlayer.addComponent(Sprite);
          newSprite.spriteFrame = this.assetManager.assetDic["Slot/pig"];
          this.node.insertChild(newPlayer, 30);
          this.player = newPlayer;
          this.playerIdx = diceData.startIdx;
        };

        _proto.getDicePlace = function getDicePlace(diceNum) {
          var railNum = diceNum >= 0 ? Math.floor(diceNum / 4) : Math.floor(Math.abs(diceNum + 1) / 4) + 1;

          if (railNum % 2 == 0) {
            var rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4; // console.log("1", diceNum, railNum, rowNum);

            return new Vec3(210 + this.diceData.blockSize.x * rowNum - 540, this.diceData.basePos.y + this.diceData.blockSize.y * (diceNum - this.diceData.startIdx), 0);
          } else {
            var _rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4; // console.log("2", diceNum, railNum, rowNum);


            return new Vec3(1080 - 210 - this.diceData.blockSize.x * _rowNum - 540, this.diceData.basePos.y + this.diceData.blockSize.y * (diceNum - this.diceData.startIdx), 0);
          }
        };

        _proto.addIcon = function addIcon() {
          var lastIcon = this.iconArray[this.iconArray.length - 1];
          var lastIconIdx = lastIcon.getComponent(_crd && DiceIcon === void 0 ? (_reportPossibleCrUseOfDiceIcon({
            error: Error()
          }), DiceIcon) : DiceIcon).diceIdx;
          var lastPos = lastIcon.getPosition();
          var prePos = this.getDicePlace(lastIconIdx);
          var postPos = this.getDicePlace(lastIconIdx + 1);
          var iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
          this.node.insertChild(iconObject, 0);
          iconObject.setPosition(new Vec3(lastPos.x + (postPos.x - prePos.x), lastPos.y + (postPos.y - prePos.y), lastPos.z + (postPos.z - prePos.z)));
          var iconScript = iconObject.getComponent(_crd && DiceIcon === void 0 ? (_reportPossibleCrUseOfDiceIcon({
            error: Error()
          }), DiceIcon) : DiceIcon);
          iconScript.diceIdx = lastIconIdx + 1;
          var iconKind = Math.floor(Math.random() * 5) + 1;
          var backKind = Math.floor(Math.random() * 3) + 1;
          iconScript.initIcon(iconKind, backKind, this.diceData);
          iconScript.updateNumber(iconScript.diceIdx);
          this.iconArray.push(iconObject);
        };

        _proto.movePlayer = function movePlayer(time) {
          this.playerIdx++;
          var postPos = this.getDicePlace(this.playerIdx);
          var playerPos = this.player.getPosition();
          tween(this.player).to(time, {
            position: new Vec3(postPos.x, playerPos.y, playerPos.z)
          }).start();
        };

        _proto.getNextBlock = function getNextBlock() {
          for (var i in this.iconArray) {
            var iconObject = this.iconArray[i];
            var iconScript = iconObject.getComponent(_crd && DiceIcon === void 0 ? (_reportPossibleCrUseOfDiceIcon({
              error: Error()
            }), DiceIcon) : DiceIcon);

            if (iconScript.diceIdx == this.playerIdx + 1) {
              return iconObject;
            }
          }
        };

        _proto.sleep = function sleep(t) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, t);
          });
        };

        _proto.rollWithNetwork = /*#__PURE__*/function () {
          var _rollWithNetwork = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.sleep(1000);

                  case 2:
                    this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
                    this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;

                    if (this.diceData) {
                      this.diceManager.getDiceResult(this.diceNumbers);
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function rollWithNetwork() {
            return _rollWithNetwork.apply(this, arguments);
          }

          return rollWithNetwork;
        }();

        _proto.rollWithRandom = function rollWithRandom() {
          this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
          this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;
          var labelNode = new Node();
          labelNode.setPosition(540, 300, 0);
          this.node.insertChild(labelNode, 30);
          var label = labelNode.addComponent(Label);
          label.fontSize = 100;
          label.lineHeight = 100;
          label.string = this.diceNumbers.first + " | " + this.diceNumbers.second;
          tween(labelNode).to(0.5, {
            scale: new Vec3(1.5, 1.5, 1)
          }).to(0.5, {
            scale: new Vec3(1.0, 1.0, 1)
          }).call(function () {// this.movePlayer(1);
            // this.movePlayer(this.diceNumbers.first + this.diceNumbers.second);
          }).delay(2.0).call(function () {
            labelNode.removeFromParent();
          }).start();
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {};

        _proto.moveBlock = function moveBlock(time, yPos) {
          this.addIcon();

          for (var j in this.iconArray) {
            var iconObject = this.iconArray[j];

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
        };

        return DiceMaster;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
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
//# sourceMappingURL=DiceMaster.js.map