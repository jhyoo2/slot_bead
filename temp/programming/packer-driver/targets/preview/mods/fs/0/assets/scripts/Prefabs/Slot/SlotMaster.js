System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, size, UITransform, instantiate, AssetManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SlotMaster;

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

  function _reportPossibleCrUseOfSlotManager(extras) {
    _reporterNs.report("SlotManager", "../SlotManager", _context2.meta, extras);
  }

  function _reportPossibleCrUseOfSlotLine(extras) {
    _reporterNs.report("SlotLine", "./SlotLine", _context2.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      size = _cc.size;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab0ac+x/FpIm6Jn4/Yf2djp", "SlotMaster", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", SlotMaster = (_dec = ccclass("SlotMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMaster, _Component);

        function SlotMaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "maskNode", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "slotManager", null);

          _defineProperty(_assertThisInitialized(_this), "slotData", void 0);

          _defineProperty(_assertThisInitialized(_this), "slotLineArray", []);

          _defineProperty(_assertThisInitialized(_this), "slotResultDic", {});

          return _this;
        }

        var _proto = SlotMaster.prototype;

        _proto.initSlotMaster = function initSlotMaster(slotData) {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.slotData = slotData;
          this.backNode.getComponent(UITransform).setContentSize(slotData.slotSize);
          this.maskNode.getComponent(UITransform).setContentSize(slotData.slotSize);
          this.slotData.iconDiff = 20;
          this.slotData.iconSize = size(slotData.slotSize.width / slotData.columnNum - this.slotData.iconDiff, slotData.slotSize.height / (slotData.rowNum + 1) * 1.15 - this.slotData.iconDiff);
          this.slotData.railSize = size(this.slotData.iconSize.width + this.slotData.iconDiff, (this.slotData.iconSize.height + this.slotData.iconDiff) * (slotData.rowNum + 4)); // // init SlotLine

          for (var i = 0; i < slotData.columnNum; i++) {
            var slotLine = instantiate(this.assetManager.prefabDic["SlotLine"]);
            this.maskNode.insertChild(slotLine, 10);
            slotLine.setPosition(-slotData.slotSize.width / 2 + this.slotData.railSize.width * (i + 0.5), 0);
            var lineScript = slotLine.getComponent("SlotLine");
            lineScript.initSlotLine(i, this.slotData);
            this.slotLineArray.push(slotLine);
          }
        };

        _proto.rollWithNetwork = /*#__PURE__*/function () {
          var _rollWithNetwork = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var i, lineObject, lineScript, _lineObject, _lineScript;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.slotResultDic = {}; // // console.log("master in");

                    for (i in this.slotLineArray) {
                      lineObject = this.slotLineArray[i];
                      lineScript = lineObject.getComponent("SlotLine");
                      lineScript.slotStartInfinity(2 / 30);
                    }

                    _context.next = 4;
                    return this.sleep(1000);

                  case 4:
                    //     console.log("hello?");
                    for (i in this.slotLineArray) {
                      _lineObject = this.slotLineArray[i];
                      _lineScript = _lineObject.getComponent("SlotLine");

                      _lineScript.stopSlot(5 + 10 * Number(i), 0.5 + 0.5 * Number(i), this.getSlotResult.bind(this), {
                        iconKind: 2,
                        backKind: Number(i) + 1
                      });
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

        _proto.sleep = function sleep(t) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, t);
          });
        };

        _proto.rollWithRandom = function rollWithRandom() {
          this.slotResultDic = {};

          for (var i in this.slotLineArray) {
            var lineObject = this.slotLineArray[i];
            var lineScript = lineObject.getComponent("SlotLine");
            lineScript.slotStart(31, 2, this.getSlotResult.bind(this));
          }
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {
          this.slotResultDic = {};

          for (var i in this.slotLineArray) {
            var lineObject = this.slotLineArray[i];
            var lineScript = lineObject.getComponent("SlotLine");
            lineScript.slotStart(31 + 4 * Number(i), 1.0 + 0.5 * Number(i), this.getSlotResult.bind(this), iconDatas[i]);
          }
        };

        _proto.getSlotResult = function getSlotResult(lineIdx, result) {
          // // console.log(lineIdx, result);
          this.slotResultDic[lineIdx] = result;

          if (Object.keys(this.slotResultDic).length == this.slotData.columnNum) {
            this.slotManager.getSlotResult(this.slotResultDic);
          }
        };

        return SlotMaster;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec3], {
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
//# sourceMappingURL=SlotMaster.js.map