System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, Vec3, AssetManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, RoomTemplate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomBlock(extras) {
    _reporterNs.report("RoomBlock", "./RoomBlock", _context.meta, extras);
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

      _cclegacy._RF.push({}, "38120FzTc1BuqTq/YzN9yzF", "RoomTemplate", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", RoomTemplate = (_dec = ccclass("RoomTemplate"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class RoomTemplate extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _initializerDefineProperty(this, "roomNode", _descriptor, this);

          _initializerDefineProperty(this, "decoRoomNode", _descriptor2, this);

          _initializerDefineProperty(this, "gridRoomNode", _descriptor3, this);

          _defineProperty(this, "roomBlockArray", []);

          _defineProperty(this, "roomCount", 18);

          _defineProperty(this, "roomScale", 6 / this.roomCount);
        }

        async onLoad() {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.initRoomBlock();
        }

        initRoomBlock() {
          const roomBlockPrefab = this.assetManager.prefabDic["RoomBlock"];

          for (var z = 0; z < this.roomCount; z++) {
            for (var x = 0; x < this.roomCount; x++) {
              for (var y = 0; y < this.roomCount; y++) {
                // const roomIdx = i * 6 + j;
                const roomNode = instantiate(roomBlockPrefab);
                roomNode.setPosition(this.getBlockPosition(x, y, z));
                roomNode.setScale(new Vec3(this.roomScale, this.roomScale, this.roomScale)); // roomNode.getComponent(UIOpacity).opacity =
                //   100 + 155 * (((x % 2) + (y % 2) + (z % 2)) % 2);

                this.gridRoomNode.addChild(roomNode);
                const roomBlockScript = roomNode.getComponent("RoomBlock");
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
            const xIdx = Math.floor(Number(idx) / this.roomCount);
            const yIdx = Number(idx) % this.roomCount;
            const roomNode = this.roomBlockArray[idx];
            roomNode.setSiblingIndex(this.roomCount * xIdx + this.roomCount - yIdx + 2); // console.log(xIdx, yIdx, roomNode.getSiblingIndex());
          }
        }

        showBlock(bool) {
          for (var idx in this.roomBlockArray) {
            const roomBlock = this.roomBlockArray[idx];
            const blockScript = roomBlock.getComponent("RoomBlock");
            blockScript.blockObject.active = bool;
          }
        }

        getBlockPosition(x, y, z) {
          return new Vec3(-420 + 70 * this.roomScale * (x + y), -195 + 20 * this.roomScale * y - 20 * this.roomScale * x + 65 * this.roomScale * z, 0);
        }

        addDecoNode(node, order, bool) {
          // this.decoRoomNode.insertChild(node, order + 1);
          if (bool) {
            this.gridRoomNode.insertChild(node, 1);
          } else {
            this.decoRoomNode.insertChild(node, order + 1);
          }
        }

        showDecoBlock(point, size) {
          const minX = point.x;
          const maxX = point.x + Math.max(1, size.x);
          const minY = point.y;
          const maxY = point.y + Math.max(1, size.y);
          const minZ = point.z;
          const maxZ = point.z + Math.max(1, size.z); // console.log(minX, maxX, minY, maxY, minZ, maxZ);

          for (var i in this.roomBlockArray) {
            const blockScript = this.roomBlockArray[i].getComponent("RoomBlock");

            if (blockScript.blockPosition.x >= minX && blockScript.blockPosition.x < maxX && blockScript.blockPosition.y >= minY && blockScript.blockPosition.y < maxY && blockScript.blockPosition.z >= minZ && blockScript.blockPosition.z < maxZ) {
              blockScript.activateBlock();
            } else {
              blockScript.deActivateBlock();
            }
          }
        }

        getBlockTarget(placeType) {
          const targetBlock = [];

          if (placeType == "01") {
            for (var i in this.roomBlockArray) {
              const blockScript = this.roomBlockArray[i].getComponent("RoomBlock");

              if (blockScript.blockPosition.z == 0) {
                targetBlock.push(this.roomBlockArray[i]);
              }
            }
          } else if (placeType == "02") {
            for (var i in this.roomBlockArray) {
              const blockScript = this.roomBlockArray[i].getComponent("RoomBlock");

              if (blockScript.blockPosition.x == 0) {
                targetBlock.push(this.roomBlockArray[i]);
              }
            }
          } else if (placeType == "03") {
            for (var i in this.roomBlockArray) {
              const blockScript = this.roomBlockArray[i].getComponent("RoomBlock");

              if (blockScript.blockPosition.y == 17) {
                targetBlock.push(this.roomBlockArray[i]);
              }
            }
          }

          return targetBlock;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "decoRoomNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridRoomNode", [_dec4], {
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
//# sourceMappingURL=RoomTemplate.js.map