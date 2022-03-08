System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context2) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, Vec3, AssetManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, RoomTemplate;

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

  function _reportPossibleCrUseOfRoomBlock(extras) {
    _reporterNs.report("RoomBlock", "./RoomBlock", _context2.meta, extras);
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
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91597kqBV9OF7SMLCfEKeNw", "RoomTemplate-001", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", RoomTemplate = (_dec = ccclass("RoomTemplate"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomTemplate, _Component);

        function RoomTemplate() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "roomNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "decoRoomNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gridRoomNode", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "roomBlockArray", []);

          _defineProperty(_assertThisInitialized(_this), "roomCount", 18);

          _defineProperty(_assertThisInitialized(_this), "roomScale", 6 / _this.roomCount);

          return _this;
        }

        var _proto = RoomTemplate.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
                      error: Error()
                    }), AssetManager) : AssetManager).getInstance();
                    this.initRoomBlock();

                  case 2:
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

        _proto.initRoomBlock = function initRoomBlock() {
          var roomBlockPrefab = this.assetManager.prefabDic["RoomBlock"];

          for (var z = 0; z < this.roomCount; z++) {
            for (var x = 0; x < this.roomCount; x++) {
              for (var y = 0; y < this.roomCount; y++) {
                // const roomIdx = i * 6 + j;
                var roomNode = instantiate(roomBlockPrefab);
                roomNode.setPosition(this.getBlockPosition(x, y, z));
                roomNode.setScale(new Vec3(this.roomScale, this.roomScale, this.roomScale)); // roomNode.getComponent(UIOpacity).opacity =
                //   100 + 155 * (((x % 2) + (y % 2) + (z % 2)) % 2);

                this.gridRoomNode.addChild(roomNode);
                var roomBlockScript = roomNode.getComponent("RoomBlock");
                roomBlockScript.blockPosition = new Vec3(x, y, z);

                if (z == 0) {
                  roomBlockScript.setRoomBlockType(1);

                  if (x == 0 && y == this.roomCount - 1) {
                    roomBlockScript.setRoomBlockType(6);
                  } else if (x == 0) {
                    roomBlockScript.setRoomBlockType(4);
                  } else if (y == this.roomCount - 1) {
                    roomBlockScript.setRoomBlockType(5);
                  }
                } else {
                  roomBlockScript.setRoomBlockType(99);

                  if (x == 0 && y == this.roomCount - 1) {
                    roomBlockScript.setRoomBlockType(7);
                  } else if (x == 0) {
                    roomBlockScript.setRoomBlockType(2);
                  } else if (y == this.roomCount - 1) {
                    roomBlockScript.setRoomBlockType(3);
                  }
                }

                this.roomBlockArray.push(roomNode);
              }
            }
          }

          for (var idx in this.roomBlockArray) {
            var xIdx = Math.floor(Number(idx) / this.roomCount);
            var yIdx = Number(idx) % this.roomCount;
            var _roomNode = this.roomBlockArray[idx];

            _roomNode.setSiblingIndex(this.roomCount * xIdx + this.roomCount - yIdx + 2); // console.log(xIdx, yIdx, roomNode.getSiblingIndex());

          }
        };

        _proto.showBlock = function showBlock(bool) {
          for (var idx in this.roomBlockArray) {
            var roomBlock = this.roomBlockArray[idx];
            var blockScript = roomBlock.getComponent("RoomBlock");
            blockScript.blockObject.active = bool;
          }
        };

        _proto.getBlockPosition = function getBlockPosition(x, y, z) {
          return new Vec3(-420 + 70 * this.roomScale * (x + y), -195 + 20 * this.roomScale * y - 20 * this.roomScale * x + 65 * this.roomScale * z, 0);
        };

        _proto.addDecoNode = function addDecoNode(node, order, bool) {
          // this.decoRoomNode.insertChild(node, order + 1);
          if (bool) {
            this.gridRoomNode.insertChild(node, 1);
          } else {
            this.decoRoomNode.insertChild(node, order + 1);
          }
        };

        _proto.showDecoBlock = function showDecoBlock(point, size) {
          var minX = point.x;
          var maxX = point.x + size.x;
          var minY = point.y;
          var maxY = point.y + size.y;
          var minZ = point.z;
          var maxZ = point.z + size.z; // console.log(minX, maxX, minY, maxY, minZ, maxZ);

          for (var i in this.roomBlockArray) {
            var blockScript = this.roomBlockArray[i].getComponent("RoomBlock");

            if (blockScript.blockPosition.x >= minX && blockScript.blockPosition.x < maxX && blockScript.blockPosition.y >= minY && blockScript.blockPosition.y < maxY && blockScript.blockPosition.z >= minZ && blockScript.blockPosition.z < maxZ) {
              blockScript.activateBlock();
            } else {
              blockScript.deActivateBlock();
            }
          }
        };

        _proto.getBlockTarget = function getBlockTarget(placeType) {
          var targetBlock = [];

          if (placeType == "01") {
            for (var i in this.roomBlockArray) {
              var blockScript = this.roomBlockArray[i].getComponent("RoomBlock");

              if (blockScript.blockPosition.z == 0) {
                targetBlock.push(this.roomBlockArray[i]);
              }
            }
          } else if (placeType == "02") {
            for (var i in this.roomBlockArray) {
              var _blockScript = this.roomBlockArray[i].getComponent("RoomBlock");

              if (_blockScript.blockPosition.x == 0) {
                targetBlock.push(this.roomBlockArray[i]);
              }
            }
          } else if (placeType == "03") {
            for (var i in this.roomBlockArray) {
              var _blockScript2 = this.roomBlockArray[i].getComponent("RoomBlock");

              if (_blockScript2.blockPosition.y == 17) {
                targetBlock.push(this.roomBlockArray[i]);
              }
            }
          }

          return targetBlock;
        };

        return RoomTemplate;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "decoRoomNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridRoomNode", [_dec4], {
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
//# sourceMappingURL=RoomTemplate-001.js.map