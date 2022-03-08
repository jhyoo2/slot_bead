System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Vec3, ImageAsset, Sprite, SpriteFrame, Texture2D, UITransform, Size, Component, ScrollView, UITransformComponent, instantiate, AssetManager, uuidv4, FileTitle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, FileMaster;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoomScene(extras) {
    _reporterNs.report("RoomScene", "../../Scenes/RoomScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../../Prefabs/Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFileObject(extras) {
    _reporterNs.report("FileObject", "../../Prefabs/Deco/DecoTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuuidv(extras) {
    _reporterNs.report("uuidv4", "../../Common/Module", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFileTitle(extras) {
    _reporterNs.report("FileTitle", "./FileTitle", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      ImageAsset = _cc.ImageAsset;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Component = _cc.Component;
      ScrollView = _cc.ScrollView;
      UITransformComponent = _cc.UITransformComponent;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AssetManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      uuidv4 = _unresolved_3.uuidv4;
    }, function (_unresolved_4) {
      FileTitle = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d3ceekdw1Kt7l6Uql5VA8K", "FileMaster", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FileMaster = (_dec = ccclass("FileMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class FileMaster extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetManager", null);

          _defineProperty(this, "sceneScript", null);

          _defineProperty(this, "decoDic", {});

          _defineProperty(this, "inputBox", null);

          _defineProperty(this, "inputBoxId", "_filebox_container_");

          _defineProperty(this, "containerId", "_filebox_input_");

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _defineProperty(this, "objectDic", {});

          _initializerDefineProperty(this, "scrollNode", _descriptor2, this);

          _defineProperty(this, "activeObj", null);

          _initializerDefineProperty(this, "decoContentNode", _descriptor3, this);

          _initializerDefineProperty(this, "fileTitles", _descriptor4, this);

          _defineProperty(this, "activeFileTitle", null);

          _defineProperty(this, "selectedTab", 0);

          _initializerDefineProperty(this, "idxButton", _descriptor5, this);
        }

        async onLoad() {
          this.assetManager = (_crd && AssetManager === void 0 ? (_reportPossibleCrUseOfAssetManager({
            error: Error()
          }), AssetManager) : AssetManager).getInstance();
          this.initFileBox();
          this.initFileTitle();
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, true);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, true); // console.log(String("hello%d", 1));

          this.idxButton[0].setScale(new Vec3(1.0, 1.0, 1.0));
          this.idxButton[1].setScale(new Vec3(0.75, 0.75, 0.75));
          this.idxButton[2].setScale(new Vec3(0.75, 0.75, 0.75));
        } //file load function


        initFileBox() {
          if (!this.inputBox) {
            let container = document.getElementById(this.containerId);
            container = document.createElement("div");
            document.body.appendChild(container);
            container.id = this.containerId;
            container.style.setProperty("visibility", "hidden");
            let inputBox = document.createElement("input");
            inputBox.id = this.inputBoxId;
            inputBox.type = "file";
            inputBox.multiple = true;
            inputBox.onchange = this.readFile.bind(this);
            container.appendChild(inputBox);
            this.inputBox = inputBox;
          }
        }

        fileButtonClicked() {
          if (this.inputBox) {
            this.inputBox.click();
          }
        }

        async readFile(fileInput) {
          var uploadFiles = fileInput.target.files;

          for (var i = 0; i < uploadFiles.length; i++) {
            var file = uploadFiles[i];
            var readerResult = await this.readFileAsync(file);
            const mimeType = readerResult.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];

            if (mimeType.indexOf("image") < 0) {
              continue;
            }

            var imgFile = await this.readImgAsync(readerResult);
            const imgNode = this.getImgNode(imgFile); // save image
            // this.sendImage("concept", readerResult);
            //set ObjectData

            const object = {};
            object.id = (_crd && uuidv4 === void 0 ? (_reportPossibleCrUseOfuuidv({
              error: Error()
            }), uuidv4) : uuidv4)();
            object.mimeType = mimeType;
            object.file = readerResult;
            object.img = imgFile;
            object.node = imgNode;
            object.tabIdx = this.selectedTab;
            this.placeObject(imgNode, this.selectedTab);
            this.objectDic[object.id] = object;
            imgNode.on(Node.EventType.TOUCH_START, event => {
              this.setActiveObj(object, event);
            }, this, true);
          } // console.log(this.objectDic);

        }

        addImgObj(fileResult, tabIdx) {
          const imgNode = this.getImgNode(fileResult.imgFile);
          const object = {};
          object.id = (_crd && uuidv4 === void 0 ? (_reportPossibleCrUseOfuuidv({
            error: Error()
          }), uuidv4) : uuidv4)();
          object.mimeType = "png";
          object.file = fileResult.readerResult;
          object.img = fileResult.imgFile;
          object.node = imgNode;
          object.tabIdx = tabIdx;
          this.placeObject(imgNode, tabIdx);
          this.objectDic[object.id] = object;
          imgNode.on(Node.EventType.TOUCH_START, event => {
            this.setActiveObj(object, event);
          }, this, true);
        } // file load function


        getImgNode(imgResult) {
          // set sprite frame
          const imgAsset = new ImageAsset(imgResult);
          const spriteFrame = new SpriteFrame();
          const tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex; // set node

          const node = instantiate(this.assetManager.prefabDic["ImageNode"]);
          node.getComponent(Sprite).spriteFrame = spriteFrame;
          node.getComponent(UITransform).setContentSize(new Size(180, 180));
          return node;
        }

        readFileAsync(file) {
          return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
              resolve(reader.result);
            };

            reader.onerror = reject; // reader.readAsArrayBuffer(file);

            reader.readAsDataURL(file);
          });
        }

        readImgAsync(fileResult) {
          return new Promise((resolve, reject) => {
            var img = new Image();

            img.onload = () => {
              resolve(img);
            };

            img.onerror = reject;
            img.src = fileResult;
          });
        }

        placeObject(imgNode, tabIdx) {
          var objectLen = 0;
          const keys = Object.keys(this.objectDic);

          for (var i in keys) {
            const key = keys[i];

            if (this.objectDic[key].tabIdx == tabIdx) {
              objectLen++;
            }
          }

          const rowNum = objectLen % 4;
          const columnNum = Math.floor(objectLen / 4);
          imgNode.setPosition(new Vec3(100 + rowNum * 220, -100 - columnNum * 220, 0));
          this.contentNode[tabIdx].addChild(imgNode);
          this.contentNode[tabIdx].getComponent(UITransform).setContentSize(new Size(900, 400 + columnNum * 220)); // console.log(imgNode);
        } // touch function


        setActiveObj(obj, event) {
          this.activeObj = Object.assign({}, obj);
          const imgNode = this.getImgNode(obj.img);
          this.node.insertChild(imgNode, 99);
          this.activeObj.node = imgNode;
          const location = event.touch.getUILocation();
          this.activeObj.node.setWorldPosition(new Vec3(location.x, location.y, 1));
          this.scrollNode[this.selectedTab].getComponent(ScrollView).vertical = false;
        }

        onTouchStart(event) {
          if (this.activeObj) {
            const location = event.touch.getUILocation();
            this.activeObj.node.setWorldPosition(new Vec3(location.x, location.y, 1));
          }
        }

        onTouchMove(event) {
          if (this.activeObj) {
            const location = event.touch.getUILocation();
            this.activeObj.node.setWorldPosition(new Vec3(location.x, location.y, 1));

            if (location.x <= 900) {
              this.activeFileTitle = null;

              for (var i in this.fileTitles) {
                const fileTitleNode = this.fileTitles[i];
                fileTitleNode.getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
                  error: Error()
                }), FileTitle) : FileTitle).setActive(false);

                if (Math.abs(fileTitleNode.getWorldPosition().y - location.y) <= 75) {
                  this.activeFileTitle = fileTitleNode;
                }
              }

              if (this.activeFileTitle) {
                this.activeFileTitle.getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
                  error: Error()
                }), FileTitle) : FileTitle).setActive(true);
              }
            } else if (location.x >= 1800) {
              this.sceneScript.replaceDeco("touchMove", location);
            }
          }
        }

        onTouchEnd(event) {
          // console.log("touc end", event);
          if (!event.simulate && this.activeObj) {
            if (this.activeFileTitle) {
              const fileTitle = this.activeFileTitle.getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
                error: Error()
              }), FileTitle) : FileTitle);
              fileTitle.setActive(false);
              this.addDecoData(this.activeObj, fileTitle.tag);
              this.activeFileTitle = null;
            }

            if (this.activeObj.node) {
              this.activeObj.node.removeFromParent();
            } // send date to room scene


            const location = event.touch.getUILocation();

            if (location.x >= 1800) {
              this.sceneScript.replaceDeco("touchEnd", location, this.activeObj);
            }

            this.activeObj = null;
            this.scrollNode[this.selectedTab].getComponent(ScrollView).vertical = true;
          }
        } // update Deco Data


        initFileTitle() {
          const labelArray = ["전체(0)", "바닥(0)", "왼쪽 벽(0)", "오른쪽 벽(0)"];
          const tagArray = ["00", "01", "02", "03"];

          for (var i in this.fileTitles) {
            const fileTitle = this.fileTitles[i].getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
              error: Error()
            }), FileTitle) : FileTitle);
            fileTitle.setLabel(labelArray[i]);
            fileTitle.tag = tagArray[i];
            fileTitle.fileMaster = this;
          }
        }

        addDecoData(obj, tag) {
          if (this.sceneScript) {
            this.sceneScript.addDecoData(obj, tag);
          }
        }

        updateFileMaster() {
          // console.log("hi", this.decoDic);
          const keys = Object.keys(this.decoDic);
          const decoDatas = {};
          decoDatas["00"] = [];
          decoDatas["01"] = [];
          decoDatas["02"] = [];
          decoDatas["03"] = [];

          for (var i in keys) {
            const placeType = this.decoDic[keys[i]].placeType;
            decoDatas[placeType].push(this.decoDic[keys[i]]);
          } // console.log(decoDatas);


          const labelArray = ["전체(%d)", "바닥(%d)", "왼쪽 벽(%d)", "오른쪽 벽(%d)"];
          const tagArray = ["00", "01", "02", "03"];
          let yPosition = -100;
          const yDiff = 70;

          for (var i in this.fileTitles) {
            const fileTitle = this.fileTitles[i].getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
              error: Error()
            }), FileTitle) : FileTitle);
            const fileDatas = decoDatas[tagArray[i]];
            fileTitle.setLabel(labelArray[i].replace("%d", String(fileDatas.length)));
            fileDatas.sort((a, b) => a.zOrder > b.zOrder && 1 || -1);
            fileTitle.setFileData(fileDatas);
            this.fileTitles[i].setPosition(new Vec3(0, yPosition, 1));
            const titleSize = fileTitle.getTitleSize();
            yPosition = yPosition - yDiff - titleSize.y;
          }

          this.decoContentNode.getComponent(UITransformComponent).setContentSize(new Size(900, -yPosition));
        }

        onFileSelected(fileData) {
          if (this.sceneScript) {
            this.sceneScript.onFileSelected(fileData);
          }
        }

        onChangeOrder(fileData, kind) {
          const placeType = fileData.placeType;
          const zOrder = fileData.zOrder;
          let targetData = null;

          if (kind == "up") {
            const keys = Object.keys(this.decoDic);
            let targetOrder = 0;

            for (var i in keys) {
              if (placeType == this.decoDic[keys[i]].placeType) {
                if (this.decoDic[keys[i]].zOrder > targetOrder && this.decoDic[keys[i]].zOrder < zOrder) {
                  targetOrder = this.decoDic[keys[i]].zOrder;
                  targetData = this.decoDic[keys[i]];
                }
              }
            }
          } else if (kind == "down") {
            const keys = Object.keys(this.decoDic);
            let targetOrder = 100;

            for (var i in keys) {
              if (placeType == this.decoDic[keys[i]].placeType) {
                if (this.decoDic[keys[i]].zOrder < targetOrder && this.decoDic[keys[i]].zOrder > zOrder) {
                  targetOrder = this.decoDic[keys[i]].zOrder;
                  targetData = this.decoDic[keys[i]];
                }
              }
            }
          } //// chaget order


          if (targetData) {
            const targetOrder = targetData.zOrder;
            const targetSibling = targetData.node.getSiblingIndex();
            const fileSibling = fileData.node.getSiblingIndex();
            fileData.zOrder = targetOrder;
            targetData.zOrder = zOrder;
            fileData.node.setSiblingIndex(targetSibling);
            targetData.node.setSiblingIndex(fileSibling);
            this.updateFileMaster();
          }
        } /////////////


        selectedTabClicked(node, idx) {
          const tabIdx = Number(idx);
          this.selectedTab = tabIdx;

          for (var i in this.scrollNode) {
            this.scrollNode[i].active = false;
            this.idxButton[i].setScale(new Vec3(0.75, 0.75, 0.75));
          }

          this.scrollNode[idx].active = true;
          this.idxButton[idx].setScale(new Vec3(1.0, 1.0, 1.0));
        }

        removeObjDic() {
          const keys = Object.keys(this.objectDic);

          for (var i in keys) {
            const key = keys[i];
            const object = this.objectDic[key];

            if (object.node) {
              object.node.removeFromParent();
            }

            delete this.objectDic[key];
          }

          this.activeObj = null;
          this.selectedTab = 0;
        } //


        updateObjDic(objectDic) {
          const keys = Object.keys(objectDic);

          for (var i in keys) {
            const key = keys[i];
            const obj = objectDic[key];
            console.log(obj);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "decoContentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fileTitles", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "idxButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FileMaster.js.map