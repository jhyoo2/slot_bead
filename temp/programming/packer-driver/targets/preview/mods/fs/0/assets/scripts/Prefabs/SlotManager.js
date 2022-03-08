System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, AssetManager, _dec, _class, _temp, _crd, ccclass, property, SlotManager;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
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

      _cclegacy._RF.push({}, "a9df4z7w/pKdqiU+JMn5qvV", "SlotManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", SlotManager = (_dec = ccclass("SlotManager"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotManager, _Component);

        function SlotManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "eventTarget", null);

          _defineProperty(_assertThisInitialized(_this), "slotObject", null);

          _defineProperty(_assertThisInitialized(_this), "rolling", false);

          return _this;
        }

        var _proto = SlotManager.prototype;

        _proto.initSlotManager = function initSlotManager(slotData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          var slotObject = instantiate(this.assetManager.prefabDic["SlotMaster"]);
          var slotScript = slotObject.getComponent("SlotMaster");
          slotScript.slotManager = this;
          slotScript.initSlotMaster(slotData);
          this.slotObject = slotObject; //     console.log(this.slotObject);

          return slotObject;
        };

        _proto.rollWithNetwork = function rollWithNetwork() {
          if (this.rolling) return;
          this.rolling = true;
          var slotScript = this.slotObject.getComponent("SlotMaster");
          slotScript.rollWithNetwork();
        };

        _proto.rollWithRandom = function rollWithRandom() {
          if (this.rolling) return;
          this.rolling = true;
          var slotScript = this.slotObject.getComponent("SlotMaster");
          slotScript.rollWithRandom();
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {
          if (this.rolling) return;
          this.rolling = true;
          var slotScript = this.slotObject.getComponent("SlotMaster");
          slotScript.rollWithFixed(iconDatas);
        };

        _proto.getSlotResult = function getSlotResult(slotResult) {
          this.rolling = false; // // console.log(slotResult);
        };

        return SlotManager;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SlotManager.js.map