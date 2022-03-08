System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, instantiate, Vec3, ImageAsset, Sprite, SpriteFrame, Texture2D, UITransform, Size, UIOpacityComponent, BaseScene, AssetManager, uuidv4, DecoMaster, DecoAlert, _dec, _class, _temp, _crd, ccclass, property, DecoToolScene;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseScene(extras) {
    _reporterNs.report("BaseScene", "../BaseObject/BaseScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomTemplate(extras) {
    _reporterNs.report("RoomTemplate", "../Prefabs/Room/RoomTemplate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuuidv(extras) {
    _reporterNs.report("uuidv4", "../Common/Module", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecoMaster(extras) {
    _reporterNs.report("DecoMaster", "../Prefabs/Deco/DecoMaster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFileMaster(extras) {
    _reporterNs.report("FileMaster", "../Prefabs/Deco/FileMaster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomBlock(extras) {
    _reporterNs.report("RoomBlock", "../Prefabs/Room/RoomBlock", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../Prefabs/Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFileObject(extras) {
    _reporterNs.report("FileObject", "../Prefabs/Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecoType(extras) {
    _reporterNs.report("DecoType", "../Prefabs/Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaceType(extras) {
    _reporterNs.report("PlaceType", "../Prefabs/Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnchorType(extras) {
    _reporterNs.report("AnchorType", "../Prefabs/Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecoAlert(extras) {
    _reporterNs.report("DecoAlert", "../Prefabs/Deco/DecoAlert", _context.meta, extras);
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

      ({
        ccclass,
        property
      } = _decorator);

      _export("DecoToolScene", DecoToolScene = (_dec = ccclass("DecoToolScene"), _dec(_class = (_temp = class DecoToolScene extends (_crd && BaseScene === void 0 ? (_reportPossibleCrUseOfBaseScene({
        error: Error()
      }), BaseScene) : BaseScene) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "roomNode", null);

          _defineProperty(this, "decoMaster", null);

          _defineProperty(this, "fileMaster", null);

          _defineProperty(this, "activeDeco", null);

          _defineProperty(this, "selectedDeco", null);

          _defineProperty(this, "decoDic", {});

          _defineProperty(this, "selectedIdx", 0);
        }

        async onLoad() {
          super.setWideResolution();
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          const assetResult = await this.assetManager.loadAssets();
          const roomNode = instantiate(this.assetManager.prefabDic["RoomTemplate"]); // roomNode.setPosition(new Vec3(0, 250, 0));

          roomNode.scale = new Vec3(1.5, 1.5, 1.5); // roomNode.scale = new Vec3(1.25, 1.25, 1.25);

          this.node.insertChild(roomNode, 10);
          this.roomNode = roomNode;
          const roomScript = this.roomNode.getComponent("RoomTemplate");
          roomScript.showBlock(false); // set deco master

          const decoMaster = instantiate(this.assetManager.prefabDic["DecoMaster"]);
          decoMaster.setPosition(new Vec3(this.winSize.width / 2 - 370, this.winSize.height / 2, 1));
          decoMaster.getComponent("DecoMaster").sceneScript = this;
          this.node.addChild(decoMaster);
          this.decoMaster = decoMaster; // set file master

          const fileMaster = instantiate(this.assetManager.prefabDic["FileMaster"]);
          fileMaster.setPosition(new Vec3(-this.winSize.width / 2 + 370, this.winSize.height / 2, 1));
          this.node.addChild(fileMaster);
          const fileScript = fileMaster.getComponent("FileMaster");
          fileScript.sceneScript = this;
          fileScript.decoDic = this.decoDic;
          this.fileMaster = fileMaster; // add touchEvent

          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, true);
        }

        showGrid(node) {
          const roomScript = this.roomNode.getComponent("RoomTemplate");
          roomScript.showBlock(node.isChecked);
        } /////// ////////////////////////////
        // (1) select deco


        addDecoData(decoObject, tag) {
          if (this.activeDeco) {
            this.activeDeco = null;
          } // add deco data


          const decoData = this.initDefaultDeco(decoObject);
          this.decoDic[decoData.decoId] = decoData;
          this.activeDeco = decoData;
          this.activeDeco.placeType = tag;
          const keys = Object.keys(this.decoDic);
          let zOrder = 0;

          for (var i in keys) {
            if (this.decoDic[keys[i]].placeType == tag) {
              zOrder++;
            }
          }

          this.activeDeco.label = "오브젝트" + String(keys.length);
          this.activeDeco.zOrder = zOrder; // add deco image

          const imgNode = this.getImgNode(decoObject.img);
          const imgSprite = imgNode.getComponent(Sprite);
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

          const labelArray = ["전체(0)", "바닥(0)", "왼쪽 벽(0)", "오른쪽 벽(0)"];
          const imgSize = imgNode.getComponent(UITransform).contentSize;

          if (tag == "01") {
            const xSize = Math.min(18, Math.ceil(imgSize.width / (140 / 3)));
            const ySize = Math.min(18, Math.ceil(imgSize.height / (40 / 3)));
            this.activeDeco.objectArray[0].objectSize = new Vec3(xSize, ySize, 0);
            this.activeDeco.decoPoint = new Vec3(9 - Math.floor(xSize / 2), 9 - Math.floor(ySize / 2), 0);
          } else if (tag == "02") {
            const ySize = Math.min(18, Math.ceil(imgSize.width / (70 / 3)));
            const zSize = Math.min(18, Math.ceil(imgSize.height / (85 / 3)));
            this.activeDeco.objectArray[0].objectSize = new Vec3(0, ySize, zSize);
            this.activeDeco.decoPoint = new Vec3(0, 9 - Math.floor(ySize / 2), 9 - Math.floor(zSize / 2));
          } else if (tag == "03") {
            const xSize = Math.min(18, Math.ceil(imgSize.width / (70 / 3)));
            const zSize = Math.min(18, Math.ceil(imgSize.height / (85 / 3)));
            this.activeDeco.objectArray[0].objectSize = new Vec3(xSize, 0, zSize);
            this.activeDeco.decoPoint = new Vec3(9 - Math.floor(xSize / 2), 17, 9 - Math.floor(zSize / 2));
          } // console.log(this.activeDeco.objectArray[0].objectSize);
          // console.log(this.activeDeco.decoPoint);


          if (decoData.placeType != "00") {
            imgNode.on(Node.EventType.TOUCH_START, event => {
              event.propagationStopped = true;
              this.onDecoSelected(decoData);
            }, this);
          }

          let nodeOrder = Object.keys(this.decoDic).length; // if (tag == "00") {
          //   nodeOrder = 99;
          // }

          this.roomNode.getComponent("RoomTemplate").addDecoNode(imgNode, nodeOrder, tag == "00");
          this.activeDeco.node = imgNode; // set deco position

          this.updateDecoPoint();
          this.placeDeco(this.activeDeco.node, this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize, this.activeDeco.anchorType); // reset deco & file master

          const decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          const fileMaster = this.fileMaster.getComponent("FileMaster");
          fileMaster.updateFileMaster();
          decoMaster.decoData = this.activeDeco;
        }

        getImgNode(imgResult) {
          const imgAsset = new ImageAsset(imgResult);
          const node = new Node();
          const sprite = node.addComponent(Sprite);
          const spriteFrame = new SpriteFrame();
          const tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex;
          sprite.spriteFrame = spriteFrame;
          const transform = node.getComponent(UITransform);
          transform.setContentSize(new Size(180, 180));
          const opacityNode = node.addComponent(UIOpacityComponent);
          opacityNode.opacity = 255;
          return node;
        }

        initDefaultDeco(decoObject) {
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
        }

        eraseDeco() {
          if (this.activeDeco) {
            if (this.activeDeco.node) {
              this.activeDeco.node.removeFromParent();
            }

            const decoId = this.activeDeco.decoId;
            delete this.decoDic[decoId];
            this.activeDeco = null;
          }

          const decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          const fileMaster = this.fileMaster.getComponent("FileMaster");
          fileMaster.updateFileMaster();
        }

        setDecoData(kind, obj) {
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
        }

        setObjectData(kind, obj) {
          // console.log(kind, obj);
          this.activeDeco.objectArray[this.activeDeco.selectedDeco][kind] = obj.tag;

          if (kind == "objectSize" || kind == "objectPoint") {
            this.placeDeco(this.activeDeco.node, this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize, this.activeDeco.anchorType);
          }
        }

        updateDecoPoint() {
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
        }

        getAnchorPoint(anchorType) {
          if (anchorType == "00") {
            return new Vec3(0.5, 0.5, 0.5);
          } else if (anchorType == "01") {
            return new Vec3(0.5, 0.5, 0.0);
          } else if (anchorType == "02") {
            return new Vec3(0, 0.5, 0.5);
          } else if (anchorType == "03") {
            return new Vec3(0.5, 1, 0.5);
          }
        }

        updateDecoPlace() {
          const point = this.activeDeco.decoPoint;
          const objectPoint = this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint;
          const size = this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize;
          const anchorType = this.activeDeco.anchorType;
          const anchor = this.getAnchorPoint(anchorType);
          const decoPoint = new Vec3(point.x + objectPoint.x + Math.max(1, size.x) / 2 + (anchor.x - 0.5), point.y + objectPoint.y + Math.max(1, size.y) / 2 + (anchor.y - 0.5), point.z + objectPoint.z + Math.max(1, size.z) / 2 + (anchor.z - 0.5)); // console.log(decoPoint);

          const roomScript = this.roomNode.getComponent("RoomTemplate");
          this.activeDeco.node.setPosition(roomScript.getBlockPosition(decoPoint.x, decoPoint.y, decoPoint.z));
        }

        placeDeco(node, point, objectPoint, size, anchorType) {
          const anchor = this.getAnchorPoint(anchorType);
          const decoPoint = new Vec3(point.x + objectPoint.x + Math.max(1, size.x) / 2 + (anchor.x - 0.5), point.y + objectPoint.y + Math.max(1, size.y) / 2 + (anchor.y - 0.5), point.z + objectPoint.z + Math.max(1, size.z) / 2 + (anchor.z - 0.5)); // console.log(decoPoint);

          const roomScript = this.roomNode.getComponent("RoomTemplate");
          node.setPosition(roomScript.getBlockPosition(decoPoint.x, decoPoint.y, decoPoint.z));
          this.showDecoBlock(point, size);
        }

        showDecoBlock(point, size) {
          const roomScript = this.roomNode.getComponent("RoomTemplate");
          roomScript.showDecoBlock(point, size);
        }

        checkDecoData() {
          console.log(this.activeDeco);
        } //////////////


        onFileSelected(fileData) {
          // reset deco & file master
          const decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          const fileMaster = this.fileMaster.getComponent("FileMaster");
          fileMaster.updateFileMaster(); // set decodata

          this.activeDeco = fileData;
          decoMaster.decoData = this.activeDeco;
          this.showDecoBlock(this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize);
        }

        onDecoSelected(decoData) {
          this.activeDeco = decoData;
          const decoMaster = this.decoMaster.getComponent("DecoMaster");
          decoMaster.resetDecoObject();
          decoMaster.decoData = this.activeDeco;
          this.showDecoBlock(this.activeDeco.decoPoint, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize);
          this.selectedDeco = decoData.node;
        }

        onTouchMove(event) {
          if (this.selectedDeco) {
            const location = event.touch.getUILocation();
            const placeType = this.activeDeco.placeType;
            const roomScript = this.roomNode.getComponent("RoomTemplate");
            const zeroPos = roomScript.getBlockPosition(0, 0, 0);
            const sizePos = roomScript.getBlockPosition(this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize.x, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize.y, this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize.z);
            const targetList = roomScript.getBlockTarget(placeType);
            let targetBlock = null;
            let baseDis = 150;

            for (var i in targetList) {
              const block = targetList[i];
              const distance = Math.sqrt(Math.pow(block.getWorldPosition().x - (location.x - (sizePos.x - zeroPos.x) / 2), 2) + Math.pow(block.getWorldPosition().y - (location.y - (sizePos.y - zeroPos.y) / 2), 2));

              if (distance < baseDis) {
                baseDis = distance;
                targetBlock = block;
              }
            }

            if (targetBlock) {
              const blockScript = targetBlock.getComponent("RoomBlock");
              this.activeDeco.decoPoint = blockScript.blockPosition;
              this.updateDecoPlace();
            } // this.selectedDeco.setWorldPosition(new Vec3(location.x, location.y, 1));

          }
        }

        onTouchEnd(event) {
          // console.log("touc end", event);
          if (!event.simulate && this.selectedDeco) {
            this.selectedDeco = null;
          }
        } //////////////


        setSelectedDeco(idx) {
          if (this.activeDeco) {
            this.activeDeco.selectedDeco = idx;

            if (this.activeDeco.objectArray[idx].spriteFrame) {
              this.activeDeco.node.getComponent(Sprite).spriteFrame = this.activeDeco.objectArray[idx].spriteFrame;
              this.updateDecoPlace();
            } else {
              this.activeDeco.node.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
            }
          }
        }

        replaceDeco(kind, point, obj) {
          if (this.activeDeco) {
            const imgPos = this.decoMaster.getComponent(_crd && DecoMaster === void 0 ? (_reportPossibleCrUseOfDecoMaster({
              error: Error()
            }), DecoMaster) : DecoMaster).imgNode.getWorldPosition();
            const imgDistance = Math.sqrt(Math.pow(imgPos.x - point.x, 2) + Math.pow(imgPos.y - point.y, 2));
            const shadowPos = this.decoMaster.getComponent(_crd && DecoMaster === void 0 ? (_reportPossibleCrUseOfDecoMaster({
              error: Error()
            }), DecoMaster) : DecoMaster).shadowNode.getWorldPosition();
            const shadowDistance = Math.sqrt(Math.pow(shadowPos.x - point.x, 2) + Math.pow(shadowPos.y - point.y, 2));

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
        }

        replaceObjImage(kind, imgObject) {
          const imgAsset = new ImageAsset(imgObject.img);
          const spriteFrame = new SpriteFrame();
          const tex = new Texture2D();
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
            const tag = this.activeDeco.placeType;

            if (tag == "01") {
              const xSize = Math.min(18, Math.ceil(spriteFrame.width / (140 / 3)));
              const ySize = Math.min(18, Math.ceil(spriteFrame.height / (40 / 3)));
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(xSize, ySize, 0);
            } else if (tag == "02") {
              const ySize = Math.min(18, Math.ceil(spriteFrame.width / (70 / 3)));
              const zSize = Math.min(18, Math.ceil(spriteFrame.height / (85 / 3)));
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(0, ySize, zSize);
            } else if (tag == "03") {
              const xSize = Math.min(18, Math.ceil(spriteFrame.width / (70 / 3)));
              const zSize = Math.min(18, Math.ceil(spriteFrame.height / (85 / 3)));
              this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = new Vec3(xSize, 0, zSize);
            }
          } else {
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectPoint = this.activeDeco.objectArray[0].objectPoint;
            this.activeDeco.objectArray[this.activeDeco.selectedDeco].objectSize = this.activeDeco.objectArray[0].objectSize;
          }

          this.updateDecoPlace();
        } //////////////


        async sendImage(fileName, img) {
          // (1) send images
          const r = await fetch("https://us-central1-slot-deco.cloudfunctions.net/uploadImage", {
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
          return JSON.parse(await r.text()); // console.log(result);
        }

        roomDecoSelected(node, idx) {
          this.selectedIdx = Number(idx);
          const decoKeys = Object.keys(this.decoDic);

          for (var i in decoKeys) {
            const key = decoKeys[i];
            const decoObject = this.decoDic[key];
            decoObject.selectedDeco = this.selectedIdx;
            decoObject.node.getComponent(Sprite).spriteFrame = decoObject.objectArray[this.selectedIdx].spriteFrame;
            this.placeDeco(decoObject.node, decoObject.decoPoint, decoObject.objectArray[decoObject.selectedDeco].objectPoint, decoObject.objectArray[decoObject.selectedDeco].objectSize, decoObject.anchorType);
          }
        } //////////


        resetRoomDeco() {
          const modalLayer = this.setModalColor();
          const alertPrefab = instantiate(this.assetManager.prefabDic["DecoAlert"]);
          modalLayer.addChild(alertPrefab);
          const alertScript = alertPrefab.getComponent(_crd && DecoAlert === void 0 ? (_reportPossibleCrUseOfDecoAlert({
            error: Error()
          }), DecoAlert) : DecoAlert);
          alertScript.setTitleLabel("방 초기화");
          alertScript.setMainLabel("모든 방의 데코레이션을 초기화하시겠습니까?");
          var self = this;

          alertScript.yesEvent = () => {
            const decoKeys = Object.keys(self.decoDic);

            for (var i in decoKeys) {
              const key = decoKeys[i];

              if (self.decoDic[key].node) {
                this.decoDic[key].node.removeFromParent();
              }

              delete self.decoDic[key];
            }

            this.eraseDeco();
            const fileMaster = this.fileMaster.getComponent("FileMaster");
            fileMaster.removeObjDic();
            alertScript.removeAlert();
          };
        }

        async saveRoomDeco() {
          const modalLayer = this.setModalColor();
          const alertPrefab = instantiate(this.assetManager.prefabDic["DecoAlert"]);
          modalLayer.addChild(alertPrefab);
          const alertScript = alertPrefab.getComponent(_crd && DecoAlert === void 0 ? (_reportPossibleCrUseOfDecoAlert({
            error: Error()
          }), DecoAlert) : DecoAlert);
          alertScript.setTitleLabel("데코레이션 저장");
          alertScript.setMainLabel("방의 데코레이션을 서버에 정하시겠습니까?");
          var self = this;

          alertScript.yesEvent = async () => {
            const objList = [];
            const decoList = [];
            const roomDic = {
              roomId: (_crd && uuidv4 === void 0 ? (_reportPossibleCrUseOfuuidv({
                error: Error()
              }), uuidv4) : uuidv4)(),
              docoList: []
            }; ////////////////////

            const decoKeys = Object.keys(self.decoDic);

            for (var i in decoKeys) {
              const decoKey = decoKeys[i];
              const decoObjList = [];

              for (var j in self.decoDic[decoKey].objectArray) {
                const obj = self.decoDic[decoKey].objectArray[j];

                if (obj.objectId == "empty") {
                  continue;
                }

                const copyObj = Object.assign({}, obj);
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
                const result = await self.sendImage(obj.objectId, obj.imgFile);

                if (result.result == "success") {
                  copyObj.imgURL = result.url;
                  objList.push(copyObj);
                  decoObjList.push(obj.objectId); // send obj data to server
                }
              }

              const copyDeco = Object.assign({}, self.decoDic[decoKey]);
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
            }

            console.log(objList);
            console.log(decoList);
            console.log(roomDic);
            console.log(this.decoDic); // send room data to server
          };
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DecoToolScene.js.map