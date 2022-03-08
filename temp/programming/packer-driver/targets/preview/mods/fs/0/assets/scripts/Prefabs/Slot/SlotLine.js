System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, instantiate, v3, tween, Tween, Vec3, AssetManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, SlotLine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotIcon(extras) {
    _reporterNs.report("SlotIcon", "./SlotIcon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      tween = _cc.tween;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc9efLZAf5DbZtQdjwlLlpo", "SlotLine", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", SlotLine = (_dec = ccclass("SlotLine"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotLine, _Component);

        function SlotLine() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "contentLayer", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "lineIdx", void 0);

          _defineProperty(_assertThisInitialized(_this), "slotData", void 0);

          _defineProperty(_assertThisInitialized(_this), "iconArray", []);

          return _this;
        }

        var _proto = SlotLine.prototype;

        _proto.initSlotLine = function initSlotLine(lineIdx, slotData) {
          this.lineIdx = lineIdx;
          this.slotData = slotData;
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.contentLayer.getComponent(UITransform).setContentSize(slotData.railSize);
          var iconPrefab = this.assetManager.prefabDic["SlotIcon"];

          for (var i = 0; i < this.slotData.rowNum + 4; i++) {
            var iconObject = instantiate(iconPrefab);
            this.contentLayer.insertChild(iconObject, 10);
            iconObject.setPosition(this.getIconPosition(i)); // //   console.log(this.lineIdx, i, this.getLinePos(i).y);

            var iconScript = iconObject.getComponent("SlotIcon");
            iconScript.iconData.rowIdx = i - 2;
            var iconKind = Math.floor(Math.random() * 5) + 1;
            var backKind = Math.floor(Math.random() * 3) + 1;
            iconScript.initIcon(iconKind, backKind, this.slotData);
            this.iconArray.push(iconObject);
          }
        };

        _proto.getIconPosition = function getIconPosition(rowIdx) {
          return v3(0, -(this.slotData.rowNum + 4) / 2 * (this.slotData.iconSize.height + this.slotData.iconDiff) + (this.slotData.iconSize.height + this.slotData.iconDiff) * (rowIdx + 0.5));
        };

        _proto.slotStartInfinity = function slotStartInfinity(slotSpeed) {
          var self = this;
          tween(this.node).tag(108).repeatForever(tween().call(function () {
            self.lineMove(slotSpeed);
            self.addRandomIcon();
          }).delay(slotSpeed)).start();
        };

        _proto.stopSlot = function stopSlot(moveNum, time, callback, iconData) {
          // // console.log(this.lineIdx, iconData);
          Tween.stopAllByTag(108, this.node);
          this.slotStart(moveNum, time, callback, iconData);
        };

        _proto.slotStart = function slotStart(moveNum, time, callback, iconData) {
          var _this2 = this;

          var self = this;
          var spinTime = 0;
          tween(this.node).repeat(moveNum, tween().call(function () {
            spinTime++;
            self.lineMove(time / moveNum);

            if (spinTime == moveNum - 2) {
              if (iconData) {
                self.addIcon(iconData);
              } else {
                self.addRandomIcon();
              }
            } else {
              self.addRandomIcon();
            }
          }).delay(time / moveNum)).call(function () {
            callback(_this2.lineIdx, _this2.getIconKind());
          }).start();
        };

        _proto.lineMove = function lineMove(time) {
          var self = this;
          var eraseTarget = null;

          for (var j in this.iconArray) {
            var iconObject = this.iconArray[j];
            var iconScript = iconObject.getComponent("SlotIcon");
            iconScript.iconData.rowIdx--;
            iconScript.updateNumber();
            var myPos = this.getIconPosition(iconScript.iconData.rowIdx + 2); // //   console.log(this.lineIdx, j, iconScript.iconData.rowIdx, myPos.y);

            tween(iconObject).to(time, {
              position: new Vec3(0, myPos.y, 0)
            }).start();

            if (iconScript.iconData.rowIdx == -3) {
              // // console.log(iconObject);
              eraseTarget = iconObject;
            }
          }

          if (eraseTarget) {
            tween(eraseTarget).delay(time).call(function () {
              self.removeNode(eraseTarget);
            }).start();
            this.iconArray.splice(this.iconArray.indexOf(eraseTarget), 1);
          }
        };

        _proto.addRandomIcon = function addRandomIcon() {
          var iconPrefab = this.assetManager.prefabDic["SlotIcon"];
          var iconObject = instantiate(iconPrefab);
          this.contentLayer.insertChild(iconObject, 10);
          iconObject.setPosition(this.getIconPosition(4)); // //   console.log(this.lineIdx, i, this.getLinePos(i).y);

          var iconScript = iconObject.getComponent("SlotIcon");
          iconScript.iconData.rowIdx = 4 - 2;
          var iconKind = Math.floor(Math.random() * 5) + 1;
          var backKind = Math.floor(Math.random() * 3) + 1;
          iconScript.initIcon(iconKind, backKind, this.slotData);
          this.iconArray.push(iconObject);
        };

        _proto.addIcon = function addIcon(iconData) {
          var iconPrefab = this.assetManager.prefabDic["SlotIcon"];
          var iconObject = instantiate(iconPrefab);
          this.contentLayer.insertChild(iconObject, 10);
          iconObject.setPosition(this.getIconPosition(4)); // //   console.log(this.lineIdx, i, this.getLinePos(i).y);

          var iconScript = iconObject.getComponent("SlotIcon");
          iconScript.iconData.rowIdx = 4 - 2;
          iconScript.initIcon(iconData.iconKind, iconData.backKind, this.slotData);
          this.iconArray.push(iconObject);
        };

        _proto.getIconKind = function getIconKind() {
          var slotDataDic = {};

          for (var j in this.iconArray) {
            var iconObject = this.iconArray[j];
            var iconScript = iconObject.getComponent("SlotIcon");
            slotDataDic[iconScript.iconData.rowIdx] = iconScript.iconData;
          }

          return slotDataDic;
        };

        _proto.getIconObject = function getIconObject(rowIdx) {
          for (var j in this.iconArray) {
            var iconObject = this.iconArray[j];
            var iconScript = iconObject.getComponent("SlotIcon");

            if (iconScript.iconData.rowIdx === rowIdx) {
              return iconObject;
            }
          }

          return null;
        };

        _proto.removeNode = function removeNode(node) {
          node.removeFromParent(true);
        };

        return SlotLine;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentLayer", [_dec2], {
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
//# sourceMappingURL=SlotLine.js.map