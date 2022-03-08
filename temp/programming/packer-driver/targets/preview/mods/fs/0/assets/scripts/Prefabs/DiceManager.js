System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, AssetManager, _dec, _class, _temp, _crd, ccclass, property, DiceManager;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiceScene(extras) {
    _reporterNs.report("DiceScene", "../Scenes/DiceScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiceMaster(extras) {
    _reporterNs.report("DiceMaster", "./Dice/DiceMaster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "135eeISXWJJdYMkt5LriJX+", "DiceManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", DiceManager = (_dec = ccclass("DiceManager"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceManager, _Component);

        function DiceManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "eventTarget", null);

          _defineProperty(_assertThisInitialized(_this), "diceObject", null);

          _defineProperty(_assertThisInitialized(_this), "rolling", false);

          return _this;
        }

        var _proto = DiceManager.prototype;

        _proto.initDiceManager = function initDiceManager(diceData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          var diceObject = instantiate(this.assetManager.prefabDic["DiceMaster"]);
          diceObject.setPosition(0, 0, 0);
          var diceScript = diceObject.getComponent("DiceMaster");
          diceScript.diceManager = this;
          diceScript.initDiceMaster(diceData);
          this.diceObject = diceObject;
          return diceObject;
        };

        _proto.rollWithNetwork = function rollWithNetwork() {
          if (this.rolling) return;
          this.rolling = true;
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithNetwork();
        };

        _proto.rollWithRandom = function rollWithRandom() {
          if (this.rolling) return;
          this.rolling = true;
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithRandom();
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {
          if (this.rolling) return;
          this.rolling = true;
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithFixed(iconDatas);
        };

        _proto.getDiceResult = function getDiceResult(diceResult) {
          this.rolling = false;

          if (this.eventTarget && this.eventTarget.showDiceResult) {
            this.eventTarget.showDiceResult(diceResult);
          } // // console.log(slotResult);

        };

        _proto.moveBlock = function moveBlock(time, yPos) {
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.moveBlock(time, yPos);
          diceScript.movePlayer(time);
        };

        _proto.getPlayerIdx = function getPlayerIdx() {
          var diceScript = this.diceObject.getComponent("DiceMaster");
          return diceScript.playerIdx;
        };

        _proto.getNextBlock = function getNextBlock() {
          var diceScript = this.diceObject.getComponent("DiceMaster");
          return diceScript.getNextBlock();
        };

        return DiceManager;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DiceManager.js.map