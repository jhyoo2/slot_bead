System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context5) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, instantiate, Vec3, ImageAsset, Sprite, SpriteFrame, Texture2D, UITransform, Size, UIOpacityComponent, BaseScene, AssetManager, uuidv4, DecoMaster, DecoAlert, _dec, _class, _temp, _crd, ccclass, property, DecoToolScene;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfRoomTemplate(extras) {
    _reporterNs.report("RoomTemplate", "../Prefabs/Room/RoomTemplate", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfuuidv(extras) {
    _reporterNs.report("uuidv4", "../Common/Module", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfDecoMaster(extras) {
    _reporterNs.report("DecoMaster", "../Prefabs/Deco/DecoMaster", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfFileMaster(extras) {
    _reporterNs.report("FileMaster", "../Prefabs/Deco/FileMaster", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfRoomBlock(extras) {
    _reporterNs.report("RoomBlock", "../Prefabs/Room/RoomBlock", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../Prefabs/Deco/DecoTypes", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfFileObject(extras) {
    _reporterNs.report("FileObject", "../Prefabs/Deco/DecoTypes", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfDecoType(extras) {
    _reporterNs.report("DecoType", "../Prefabs/Deco/DecoTypes", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfPlaceType(extras) {
    _reporterNs.report("PlaceType", "../Prefabs/Deco/DecoTypes", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfAnchorType(extras) {
    _reporterNs.report("AnchorType", "../Prefabs/Deco/DecoTypes", _context5.meta, extras);
  }

  function _reportPossibleCrUseOfDecoAlert(extras) {
    _reporterNs.report("DecoAlert", "../Prefabs/Deco/DecoAlert", _context5.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      ImageAsset = _cc.ImageAsset;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      UIOpacityComponent = _cc.UIOpacityComponent;
    }, function (_unresolved_2) {
      BaseScene = _unresolved_2.default;
    }, function (_unresolved_3) {
      AssetManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      uuidv4 = _unresolved_4.uuidv4;
    }, function (_unresolved_5) {
      DecoMaster = _unresolved_5.default;
    }, function (_unresolved_6) {
      DecoAlert = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48b5cEUab5Dmq26zP28c9ba", "DecoToolScene", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DecoToolScene", DecoToolScene = (_dec = ccclass("DecoToolScene"), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(DecoToolScene, _ref);

        function DecoToolScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "roomNode", null);

          _defineProperty(_assertThisInitialized(_this), "decoMaster", null);

          _defineProperty(_assertThisInitialized(_this), "fileMaster", null);

          _defineProperty(_assertThisInitialized(_this), "activeDeco", null);

          _defineProperty(_assertThisInitialized(_this), "selectedDeco", null);

          _defineProperty(_assertThisInitialized(_this), "decoDic", {});

          _defineProperty(_assertThisInitialized(_this), "selectedIdx", 0);

          return _this;
        }

        var _proto = DecoToolScene.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var assetResult, roomNode, roomScript, decoMaster, fileMaster, fileScript;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _ref.prototype.setWideResolution.call(this);

                    this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
                      error: Error()
                    }), AssetManager) : AssetManager).getInstance();
                    _context.next = 4;
                    return this.assetManager.loadAssets();

                  case 4:
                    assetResult = _context.sent;
                    roomNode = instantiate(this.assetManager.prefabDic["RoomTemplate"]); // roomNode.setPosition(new Vec3(0, 250, 0));

                    roomNode.scale = new Vec3(1.5, 1.5, 1.5); // roomNode.scale = new Vec3(1.25, 1.25, 1.25);

                    this.node.insertChild(roomNode, 10);
                    this.roomNode = roomNode;
                    roomScript = this.roomNode.getComponent("RoomTemplate");
                    roomScript.showBlock(false); // set deco master

                    decoMaster = instantiate(this.assetManager.prefabDic["DecoMaster"]);
                    decoMaster.setPosition(new Vec3(this.winSize.width / 2 - 370, this.winSize.height / 2, 1));
                    decoMaster.getComponent("DecoMaster").sceneScript = this;
                    this.node.addChild(decoMaster);
                    this.decoMaster = decoMaster; // set file master

                    fileMaster = instantiate(this.assetManager.prefabDic["FileMaster"]);
                    fileMaster.setPosition(new Vec3(-this.winSize.width / 2 + 370, this.winSize.height / 2, 1));
                    this.node.addChild(fileMaster);
                    fileScript = fileMaster.getComponent("FileMaster");
                    fileScript.sceneScript = this;
                    fileScript.decoDic = this.decoDic;
                    this.fileMaster = fileMaster; // add touchEvent

                    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
                    this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
                    this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, true);

                  case 26:
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

        _proto.showGrid = function showGrid(node) {
          var roomScript = this.roomNode.getComponent("RoomTemplate");
          roomScript.showBlock(node.isChecked);
        } /////// ////////////////////////////
        // (1) select deco
        ;

        _proto.addDecoData = function addDecoData(decoObject, tag) {
          var _this2 = this;

          if (this.activeDeco) {
            this.activeDeco = null;
          } // add deco data


          var decoData = this.initDefaultDeco(decoObject);
          this.decoDic[decoData.decoId] = decoData;
          this.activeDeco = decoData;
          this.activeDeco.placeType = tag;
          var keys = Object.keys(this.decoDic);
          var zOrder = 0;

          for (var i in keys) {
            if (this.decoDic[keys[i]].placeType == tag) {
              zOrder++;
            }
          }

          this.activeDeco.label = "오브젝트" + String(keys.length);
          this.activeDeco.zOrder = zOrder; // add deco image

          var imgNode = this.getImgNode(decoObject.img);
          var imgSprite = imgNode.getComponent(Sprite);
          imgSprite.sizeMode = Sprite.SizeMode.RAW;
          imgSprite.trim = true;
          this.activeDeco.objectArray.push({
            objectId: decoObject.id,
            objectIdx: 0,
            decoId: decoData.decoId,
            objectPoint: new Vec3(0, 0, 0),
            objectSize: new Vec3(1, 1, 1),
            objectPlace: new Vec3(0, 0, 0),
            imgURL: "",
            spriteFrame: imgSprite.spriteFrame,
            imgFile: decoObject.file,
            shadowFrame: "",
            shadowFile: "",
            buyType: "00",
            cashPrice: 0
          });

          for (var j = 0; j < 2; j++) {
            this.activeDeco.objectArray.push({
              objectId: "",
              objectIdx: Number(j) + 1,
              decoId: decoData.decoId,
              objectPoint: new Vec3(0, 0, 0),
              objectSize: new Vec3(1, 1, 1),
              objectPlace: new Vec3(0, 0, 0),
              imgURL: "",
              spriteFrame: "",
              imgFile: "",
              shadowFrame: "",
              shadowFile: "",
              buyType: "00",
              cashPrice: 0
            });
          }

          var labelArray = ["전체(0)", "바닥(0)", "왼쪽 벽(0)", "오른쪽 벽(0)"];
          var imgSize = imgNode.getComponent(UITransform).contentSize;

          if (tag == "01") {
            var xSize = Math.min(18, Math.ceil(imgSize.width / (140 / 3)));
            var ySize = Math.min(18, Math.ceil(imgSize.height / (40 / 3)));
            this.activeDeco.objectArray[0].objectSize = new Vec3(xSize, ySize, 0);
            this.activeDeco.decoPoint = new Vec3(9 - Math.floor(xSize / 2), 9 - Math.floor(ySize / 2), 0);
          } else if (tag == "02") {
            var _ySize = Math.min(18, Math.ceil(imgSize.width / (70 / 3)));

            var zSize = Math.min(18, Math.ceil(imgSize.height / (85 / 3)));
            this.activeDeco.objectArray[0].objectSize = new Vec3(0, _ySize, zSize);
            this.activeDeco.decoPoint = new Vec3(0, 9 - Math.floor(_ySize / 2), 9 - Math.floor(zSize / 2));
          } else if (tag == "03") {
            var _xSize = Math.min(18, Math.ceil(imgSize.width / (70 / 3)));

            var _zSize = Math.min(18, Math.ceil(imgSize.height / (85 / 3)));

            this.activeDeco.objectArray[0].objectSize = new Vec3(_xSize, 0, _zSize);
            this.activeDeco.decoPoint = new Vec3(9 - Math.floor(_xSize / 2), 17, 9 - Math.floor(_zSize / 2));
          } // console.log(this.activeDeco.objectArray[0].objectSize);
          // console.log(this.activeDeco.decoPoint);


          if (decoData.placeType != "00") {
            imgNode.on(Node.EventType.TOUCH_START, function (event) {
              event.propagationStopped = true;

              _this2.onDecoSelected(decoData);
            }, this);
          }

          var nodeOrder = Object.keys(this.decoDic).length; // if (tag == "00") {
          //   nodeOrder = 99;
          // }

          this.roomNode.getComponent("RoomTemplate").addDecoNode(imgNode, nodeOrder, tag == "00");
          this.activeDeco.node = imgNode; // set deco position

          this.updateDecoPoint();
          this.placeDeco(this.activeDeco.node, this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize, this.activeDeco.anchorType); // reset deco & file master

          var decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          var fileMaster = this.fileMaster.getComponent("FileMaster");
          fileMaster.updateFileMaster();
          decoMaster.decoData = this.activeDeco;
        };

        _proto.getImgNode = function getImgNode(imgResult) {
          var imgAsset = new ImageAsset(imgResult);
          var node = new Node();
          var sprite = node.addComponent(Sprite);
          var spriteFrame = new SpriteFrame();
          var tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex;
          sprite.spriteFrame = spriteFrame;
          var transform = node.getComponent(UITransform);
          transform.setContentSize(new Size(180, 180));
          var opacityNode = node.addComponent(UIOpacityComponent);
          opacityNode.opacity = 255;
          return node;
        };

        _proto.initDefaultDeco = function initDefaultDeco(decoObject) {
          return {
            decoId: (_crd && uuidv4 === void 0 ? (_reportPossibleCrUseOfuuidv({
              error: Error()
            }), uuidv4) : uuidv4)(),
            selectedDeco: 0,
            decoType: "00",
            placeType: "00",
            decoPoint: new Vec3(0, 0, 0),
            anchorType: "00",
            opacity: 1.0,
            stackable: false,
            stackSize: new Vec3(1, 1, 1),
            defaultObjectId: decoObject.id,
            objectArray: [],
            zOrder: 0,
            node: null,
            label: ""
          };
        };

        _proto.eraseDeco = function eraseDeco() {
          if (this.activeDeco) {
            if (this.activeDeco.node) {
              this.activeDeco.node.removeFromParent();
            }

            var decoId = this.activeDeco.decoId;
            delete this.decoDic[decoId];
            this.activeDeco = null;
          }

          var decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          var fileMaster = this.fileMaster.getComponent("FileMaster");
          fileMaster.updateFileMaster();
        };

        _proto.setDecoData = function setDecoData(kind, obj) {
          // console.log(kind, obj);
          this.activeDeco[kind] = obj.tag;

          if (kind == "opacity") {
            this.activeDeco.node.getComponent(UIOpacityComponent).opacity = obj.tag * 255;
            return;
          } // console.log(kind, obj);


          if (kind == "decoType" || kind == "placeType") {
            this.updateDecoPoint();
          }

          if (kind == "decoType" || kind == "placeType" || kind == "decoPoint" || kind == "anchorType") {
            this.placeDeco(this.activeDeco.node, this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize, this.activeDeco.anchorType);
          }
        };

        _proto.setObjectData = function setObjectData(kind, obj) {
          // console.log(kind, obj);
          this.activeDeco.objectArray[this.activeDeco.selectedDeco][kind] = obj.tag;

          if (kind == "objectSize" || kind == "objectPoint") {
            this.placeDeco(this.activeDeco.node, this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize, this.activeDeco.anchorType);
          }
        };

        _proto.updateDecoPoint = function updateDecoPoint() {
          // console.log(kind, obj);
          switch (this.activeDeco.decoType + this.activeDeco.placeType) {
            case "0101":
              this.activeDeco.decoPoint = new Vec3(0, 0, 0);
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(18, 18, 0);
              this.activeDeco.stackable = true;
              this.activeDeco.stackSize = new Vec3(18, 18, 0);
              this.activeDeco.anchorType = "01";
              break;

            case "0202":
              this.activeDeco.decoPoint = new Vec3(0, 0, 0);
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(0, 18, 18);
              this.activeDeco.stackable = true;
              this.activeDeco.stackSize = new Vec3(0, 18, 18);
              this.activeDeco.anchorType = "02";
              break;

            case "0203":
              this.activeDeco.decoPoint = new Vec3(0, 17, 0);
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(18, 0, 18);
              this.activeDeco.stackable = true;
              this.activeDeco.stackSize = new Vec3(18, 0, 18);
              this.activeDeco.anchorType = "03";
              break;

            default:
              this.activeDeco.anchorType = "00";

              if (this.activeDeco.placeType == "00") {
                this.activeDeco.decoPoint = new Vec3(8.5, 8.5, 8.5);
              }

          }
        };

        _proto.getAnchorPoint = function getAnchorPoint(anchorType) {
          if (anchorType == "00") {
            return new Vec3(0.5, 0.5, 0.5);
          } else if (anchorType == "01") {
            return new Vec3(0.5, 0.5, 0.0);
          } else if (anchorType == "02") {
            return new Vec3(0, 0.5, 0.5);
          } else if (anchorType == "03") {
            return new Vec3(0.5, 1, 0.5);
          }
        };

        _proto.updateDecoPlace = function updateDecoPlace() {
          var point = this.activeDeco.decoPoint;
          var objectPoint = this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint;
          var size = this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize;
          var anchorType = this.activeDeco.anchorType;
          var anchor = this.getAnchorPoint(anchorType);
          var decoPoint = new Vec3(point.x + objectPoint.x + Math.max(1, size.x) / 2 + (anchor.x - 0.5), point.y + objectPoint.y + Math.max(1, size.y) / 2 + (anchor.y - 0.5), point.z + objectPoint.z + Math.max(1, size.z) / 2 + (anchor.z - 0.5)); // console.log(decoPoint);

          var roomScript = this.roomNode.getComponent("RoomTemplate");
          this.activeDeco.node.setPosition(roomScript.getBlockPosition(decoPoint.x, decoPoint.y, decoPoint.z));
        };

        _proto.placeDeco = function placeDeco(node, point, objectPoint, size, anchorType) {
          var anchor = this.getAnchorPoint(anchorType);
          var decoPoint = new Vec3(point.x + objectPoint.x + Math.max(1, size.x) / 2 + (anchor.x - 0.5), point.y + objectPoint.y + Math.max(1, size.y) / 2 + (anchor.y - 0.5), point.z + objectPoint.z + Math.max(1, size.z) / 2 + (anchor.z - 0.5)); // console.log(decoPoint);

          var roomScript = this.roomNode.getComponent("RoomTemplate");
          node.setPosition(roomScript.getBlockPosition(decoPoint.x, decoPoint.y, decoPoint.z));
          this.showDecoBlock(point, size);
        };

        _proto.showDecoBlock = function showDecoBlock(point, size) {
          var roomScript = this.roomNode.getComponent("RoomTemplate");
          roomScript.showDecoBlock(point, size);
        };

        _proto.checkDecoData = function checkDecoData() {
          console.log(this.activeDeco);
        } //////////////
        ;

        _proto.onFileSelected = function onFileSelected(fileData) {
          // reset deco & file master
          var decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          var fileMaster = this.fileMaster.getComponent("FileMaster");
          fileMaster.updateFileMaster(); // set decodata

          this.activeDeco = fileData;
          decoMaster.decoData = this.activeDeco;
          this.showDecoBlock(this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize);
        };

        _proto.onDecoSelected = function onDecoSelected(decoData) {
          this.activeDeco = decoData;
          var decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          decoMaster.decoData = this.activeDeco;
          this.showDecoBlock(this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize);
          this.selectedDeco = decoData.node;
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (this.selectedDeco) {
            var location = event.touch.getUILocation();
            var placeType = this.activeDeco.placeType;
            var roomScript = this.roomNode.getComponent("RoomTemplate");
            var zeroPos = roomScript.getBlockPosition(0, 0, 0);
            var sizePos = roomScript.getBlockPosition(this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize.x, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize.y, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize.z);
            var targetList = roomScript.getBlockTarget(placeType);
            var targetBlock = null;
            var baseDis = 150;

            for (var i in targetList) {
              var block = targetList[i];
              var distance = Math.sqrt(Math.pow(block.getWorldPosition().x - (location.x - (sizePos.x - zeroPos.x) / 2), 2) + Math.pow(block.getWorldPosition().y - (location.y - (sizePos.y - zeroPos.y) / 2), 2));

              if (distance < baseDis) {
                baseDis = distance;
                targetBlock = block;
              }
            }

            if (targetBlock) {
              var blockScript = targetBlock.getComponent("RoomBlock");
              this.activeDeco.decoPoint = blockScript.blockPosition;
              this.updateDecoPlace();
            } // this.selectedDeco.setWorldPosition(new Vec3(location.x, location.y, 1));

          }
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          // console.log("touc end", event);
          if (!event.simulate && this.selectedDeco) {
            this.selectedDeco = null;
          }
        } //////////////
        ;

        _proto.setSelectedDeco = function setSelectedDeco(idx) {
          if (this.activeDeco) {
            this.activeDeco.selectedDeco = idx;

            if (this.activeDeco.objectArray[idx].spriteFrame) {
              this.activeDeco.node.getComponent(Sprite).spriteFrame = this.activeDeco.objectArray[idx].spriteFrame;
              this.updateDecoPlace();
            } else {
              this.activeDeco.node.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
            }
          }
        };

        _proto.replaceDeco = function replaceDeco(kind, point, obj) {
          if (this.activeDeco) {
            var imgPos = this.decoMaster.getComponent(_crd && DecoMaster === void 0 ? (_reportPossibleCrUseOfDecoMaster({
              error: Error()
            }), DecoMaster) : DecoMaster).imgNode.getWorldPosition();
            var imgDistance = Math.sqrt(Math.pow(imgPos.x - point.x, 2) + Math.pow(imgPos.y - point.y, 2));
            var shadowPos = this.decoMaster.getComponent(_crd && DecoMaster === void 0 ? (_reportPossibleCrUseOfDecoMaster({
              error: Error()
            }), DecoMaster) : DecoMaster).shadowNode.getWorldPosition();
            var shadowDistance = Math.sqrt(Math.pow(shadowPos.x - point.x, 2) + Math.pow(shadowPos.y - point.y, 2));

            if (kind == "touchEnd") {
              if (imgDistance <= 150) {
                this.replaceObjImage(0, obj);
                this.decoMaster.getComponent(_crd && DecoMaster === void 0 ? (_reportPossibleCrUseOfDecoMaster({
                  error: Error()
                }), DecoMaster) : DecoMaster).replaceImg(0, obj);
              } else if (shadowDistance <= 150) {
                this.replaceObjImage(1, obj);
                this.decoMaster.getComponent(_crd && DecoMaster === void 0 ? (_reportPossibleCrUseOfDecoMaster({
                  error: Error()
                }), DecoMaster) : DecoMaster).replaceImg(1, obj);
              }
            }
          }
        };

        _proto.replaceObjImage = function replaceObjImage(kind, imgObject) {
          var imgAsset = new ImageAsset(imgObject.img);
          var spriteFrame = new SpriteFrame();
          var tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex;

          if (this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectId == "") {
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectId = (_crd && uuidv4 === void 0 ? (_reportPossibleCrUseOfuuidv({
              error: Error()
            }), uuidv4) : uuidv4)();
          }

          if (kind == 1) {
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].shadowFile = imgObject.file;
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].shadowFrame = spriteFrame;
            return;
          }

          if (kind == 0) {
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].imgFile = imgObject.file;
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].spriteFrame = spriteFrame;
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].imgURL = "";
            this.activeDeco.node.getComponent(Sprite).spriteFrame = spriteFrame;
          }

          if (this.activeDeco.selectedDeco == 0) {
            var tag = this.activeDeco.placeType;

            if (tag == "01") {
              var xSize = Math.min(18, Math.ceil(spriteFrame.width / (140 / 3)));
              var ySize = Math.min(18, Math.ceil(spriteFrame.height / (40 / 3)));
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(xSize, ySize, 0);
            } else if (tag == "02") {
              var _ySize2 = Math.min(18, Math.ceil(spriteFrame.width / (70 / 3)));

              var zSize = Math.min(18, Math.ceil(spriteFrame.height / (85 / 3)));
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(0, _ySize2, zSize);
            } else if (tag == "03") {
              var _xSize2 = Math.min(18, Math.ceil(spriteFrame.width / (70 / 3)));

              var _zSize2 = Math.min(18, Math.ceil(spriteFrame.height / (85 / 3)));

              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(_xSize2, 0, _zSize2);
            }
          } else {
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint = this.activeDeco.objectArray[0].objectPoint;
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = this.activeDeco.objectArray[0].objectSize;
          }

          this.updateDecoPlace();
        } //////////////
        ;

        _proto.sendImage =
        /*#__PURE__*/
        function () {
          var _sendImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fileName, img) {
            var r;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return fetch("https://us-central1-slot-deco.cloudfunctions.net/uploadImage", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                      },
                      body: JSON.stringify({
                        image: String(img),
                        fileName: fileName
                      })
                    });

                  case 2:
                    r = _context2.sent;
                    _context2.t0 = JSON;
                    _context2.next = 6;
                    return r.text();

                  case 6:
                    _context2.t1 = _context2.sent;
                    return _context2.abrupt("return", _context2.t0.parse.call(_context2.t0, _context2.t1));

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function sendImage(_x, _x2) {
            return _sendImage.apply(this, arguments);
          }

          return sendImage;
        }();

        _proto.roomDecoSelected = function roomDecoSelected(node, idx) {
          this.selectedIdx = Number(idx);
          var decoKeys = Object.keys(this.decoDic);

          for (var i in decoKeys) {
            var key = decoKeys[i];
            var decoObject = this.decoDic[key];
            decoObject.selectedDeco = this.selectedIdx;
            decoObject.node.getComponent(Sprite).spriteFrame = decoObject.objectArray[this.selectedIdx].spriteFrame;
            this.placeDeco(decoObject.node, decoObject.decoPoint, decoObject.objectArray[decoObject.selectedDeco].objectPoint, decoObject.objectArray[decoObject.selectedDeco].objectSize, decoObject.anchorType);
          }
        } //////////
        ;

        _proto.resetRoomDeco = function resetRoomDeco() {
          var _this3 = this;

          var modalLayer = this.setModalColor();
          var alertPrefab = instantiate(this.assetManager.prefabDic["DecoAlert"]);
          modalLayer.addChild(alertPrefab);
          var alertScript = alertPrefab.getComponent(_crd && DecoAlert === void 0 ? (_reportPossibleCrUseOfDecoAlert({
            error: Error()
          }), DecoAlert) : DecoAlert);
          alertScript.setTitleLabel("방 초기화");
          alertScript.setMainLabel("모든 방의 데코레이션을 초기화하시겠습니까?");
          var self = this;

          alertScript.yesEvent = function () {
            var decoKeys = Object.keys(self.decoDic);

            for (var i in decoKeys) {
              var key = decoKeys[i];

              if (self.decoDic[key].node) {
                _this3.decoDic[key].node.removeFromParent();
              }

              delete self.decoDic[key];
            }

            _this3.eraseDeco();

            var fileMaster = _this3.fileMaster.getComponent("FileMaster");

            fileMaster.removeObjDic();
            alertScript.removeAlert();
          };
        };

        _proto.saveRoomDeco = /*#__PURE__*/function () {
          var _saveRoomDeco = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var modalLayer, alertPrefab, alertScript, self;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    modalLayer = this.setModalColor();
                    alertPrefab = instantiate(this.assetManager.prefabDic["DecoAlert"]);
                    modalLayer.addChild(alertPrefab);
                    alertScript = alertPrefab.getComponent(_crd && DecoAlert === void 0 ? (_reportPossibleCrUseOfDecoAlert({
                      error: Error()
                    }), DecoAlert) : DecoAlert);
                    alertScript.setTitleLabel("데코레이션 저장");
                    alertScript.setMainLabel("방의 데코레이션을 서버에 정하시겠습니까?");
                    self = this;
                    alertScript.yesEvent = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                      var objList, decoList, roomDic, decoKeys, i, decoKey, decoObjList, j, obj, copyObj, result, copyDeco;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              objList = [];
                              decoList = [];
                              roomDic = {
                                roomId: (_crd && uuidv4 === void 0 ? (_reportPossibleCrUseOfuuidv({
                                  error: Error()
                                }), uuidv4) : uuidv4)(),
                                docoList: []
                              }; ////////////////////

                              decoKeys = Object.keys(self.decoDic);
                              _context3.t0 = regeneratorRuntime.keys(decoKeys);

                            case 5:
                              if ((_context3.t1 = _context3.t0()).done) {
                                _context3.next = 40;
                                break;
                              }

                              i = _context3.t1.value;
                              decoKey = decoKeys[i];
                              decoObjList = [];
                              _context3.t2 = regeneratorRuntime.keys(self.decoDic[decoKey].objectArray);

                            case 10:
                              if ((_context3.t3 = _context3.t2()).done) {
                                _context3.next = 29;
                                break;
                              }

                              j = _context3.t3.value;
                              obj = self.decoDic[decoKey].objectArray[j];

                              if (!(obj.objectId == "empty")) {
                                _context3.next = 15;
                                break;
                              }

                              return _context3.abrupt("continue", 10);

                            case 15:
                              copyObj = Object.assign({}, obj);
                              delete copyObj["spriteFrame"];
                              delete copyObj["imgFile"];
                              delete copyObj["shadowFrame"];
                              delete copyObj["shadowFile"];
                              copyObj.objectPlace = {
                                x: obj.objectPlace.x,
                                y: obj.objectPlace.y,
                                z: obj.objectPlace.z
                              };
                              copyObj.objectPoint = {
                                x: obj.objectPoint.x,
                                y: obj.objectPoint.y,
                                z: obj.objectPoint.z
                              };
                              copyObj.objectSize = {
                                x: obj.objectSize.x,
                                y: obj.objectSize.y,
                                z: obj.objectSize.z
                              };
                              _context3.next = 25;
                              return self.sendImage(obj.objectId, obj.imgFile);

                            case 25:
                              result = _context3.sent;

                              if (result.result == "success") {
                                copyObj.imgURL = result.url;
                                objList.push(copyObj);
                                decoObjList.push(obj.objectId); // send obj data to server
                              }

                              _context3.next = 10;
                              break;

                            case 29:
                              copyDeco = Object.assign({}, self.decoDic[decoKey]);
                              delete copyDeco["node"];
                              delete copyDeco["label"];
                              delete copyDeco["objectArray"];
                              copyDeco.decoPoint = {
                                x: copyDeco.decoPoint.x,
                                y: copyDeco.decoPoint.y,
                                z: copyDeco.decoPoint.z
                              };
                              copyDeco.stackSize = {
                                x: copyDeco.stackSize.x,
                                y: copyDeco.stackSize.y,
                                z: copyDeco.stackSize.z
                              };
                              copyDeco.objectArray = decoObjList;
                              decoList.push(copyDeco);
                              roomDic.docoList.push(self.decoDic[decoKey].decoId); // send deco data to server

                              _context3.next = 5;
                              break;

                            case 40:
                              console.log(objList);
                              console.log(decoList);
                              console.log(roomDic);
                              console.log(_this4.decoDic); // send room data to server

                            case 44:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function saveRoomDeco() {
            return _saveRoomDeco.apply(this, arguments);
          }

          return saveRoomDeco;
        }();

        return DecoToolScene;
      }(_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DecoToolScene.js.map