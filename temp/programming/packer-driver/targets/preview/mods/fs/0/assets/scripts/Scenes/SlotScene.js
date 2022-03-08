System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, size, director, BaseScene, AssetManager, SlotManager, _dec, _class, _temp, _crd, ccclass, property, SlotScene;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfSlotManager(extras) {
    _reporterNs.report("SlotManager", "../Prefabs/SlotManager", _context2.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      size = _cc.size;
      director = _cc.director;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }, function (_unresolved_3) {
      AssetManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      SlotManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c676fmhxXdA+KZLG18AgZGb", "SlotScene", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", SlotScene = (_dec = ccclass("SlotScene"), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(SlotScene, _ref);

        function SlotScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "slotManager", null);

          return _this;
        }

        var _proto = SlotScene.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var assetResult, slotManager, slotObject;
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
                    slotManager = new (_crd && SlotManager === void 0 ? (_reportPossibleCrUseOfSlotManager({
                      error: Error()
                    }), SlotManager) : SlotManager)();
                    slotObject = slotManager.initSlotManager({
                      rowNum: 1,
                      columnNum: 3,
                      slotSize: size(700, 500)
                    });
                    this.slotManager = slotManager;
                    this.node.insertChild(slotObject, 10);

                  case 9:
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
        }() // // update (dt) {}
        ;

        _proto.buttonClicked = function buttonClicked(node, idx) {
          // this.slotManager.rollWithNetwork();
          this.slotManager.rollWithRandom(); // this.slotManager.rollWithFixed([
          //   { iconKind: 2, backKind: 1 },
          //   { iconKind: 2, backKind: 2 },
          //   { iconKind: 2, backKind: 3 },
          // ]);
        };

        _proto.gotoMain = function gotoMain() {
          director.loadScene("MainScene");
        };

        return SlotScene;
      }(_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SlotScene.js.map