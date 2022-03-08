System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context4) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Vec3, ImageAsset, Sprite, SpriteFrame, Texture2D, UITransform, Size, Component, ScrollView, UITransformComponent, instantiate, AssetManager, uuidv4, FileTitle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, FileMaster;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoomScene(extras) {
    _reporterNs.report("RoomScene", "../../Scenes/RoomScene", _context4.meta, extras);
  }

  function _reportPossibleCrUseOfAssetManager(extras) {
    _reporterNs.report("AssetManager", "../../DataManager/AssetManager", _context4.meta, extras);
  }

  function _reportPossibleCrUseOfDeco(extras) {
    _reporterNs.report("Deco", "../../Prefabs/Deco/DecoTypes", _context4.meta, extras);
  }

  function _reportPossibleCrUseOfFileObject(extras) {
    _reporterNs.report("FileObject", "../../Prefabs/Deco/DecoTypes", _context4.meta, extras);
  }

  function _reportPossibleCrUseOfuuidv(extras) {
    _reporterNs.report("uuidv4", "../../Common/Module", _context4.meta, extras);
  }

  function _reportPossibleCrUseOfFileTitle(extras) {
    _reporterNs.report("FileTitle", "./FileTitle", _context4.meta, extras);
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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", FileMaster = (_dec = ccclass("FileMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FileMaster, _Component);

        function FileMaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "sceneScript", null);

          _defineProperty(_assertThisInitialized(_this), "decoDic", {});

          _defineProperty(_assertThisInitialized(_this), "inputBox", null);

          _defineProperty(_assertThisInitialized(_this), "inputBoxId", "_filebox_container_");

          _defineProperty(_assertThisInitialized(_this), "containerId", "_filebox_input_");

          _initializerDefineProperty(_assertThisInitialized(_this), "contentNode", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "objectDic", {});

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollNode", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "activeObj", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "decoContentNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "fileTitles", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "activeFileTitle", null);

          _defineProperty(_assertThisInitialized(_this), "selectedTab", 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "idxButton", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = FileMaster.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
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

                  case 10:
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
        }() //file load function
        ;

        _proto.initFileBox = function initFileBox() {
          if (!this.inputBox) {
            var container = document.getElementById(this.containerId);
            container = document.createElement("div");
            document.body.appendChild(container);
            container.id = this.containerId;
            container.style.setProperty("visibility", "hidden");
            var inputBox = document.createElement("input");
            inputBox.id = this.inputBoxId;
            inputBox.type = "file";
            inputBox.multiple = true;
            inputBox.onchange = this.readFile.bind(this);
            container.appendChild(inputBox);
            this.inputBox = inputBox;
          }
        };

        _proto.fileButtonClicked = function fileButtonClicked() {
          if (this.inputBox) {
            this.inputBox.click();
          }
        };

        _proto.readFile = /*#__PURE__*/function () {
          var _readFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fileInput) {
            var _this2 = this;

            var uploadFiles, _loop, i, file, readerResult, imgFile, _ret;

            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    uploadFiles = fileInput.target.files;
                    _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                      var mimeType, imgNode, object;
                      return regeneratorRuntime.wrap(function _loop$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              file = uploadFiles[i];
                              _context2.next = 3;
                              return _this2.readFileAsync(file);

                            case 3:
                              readerResult = _context2.sent;
                              mimeType = readerResult.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];

                              if (!(mimeType.indexOf("image") < 0)) {
                                _context2.next = 7;
                                break;
                              }

                              return _context2.abrupt("return", "continue");

                            case 7:
                              _context2.next = 9;
                              return _this2.readImgAsync(readerResult);

                            case 9:
                              imgFile = _context2.sent;
                              imgNode = _this2.getImgNode(imgFile); // save image
                              // this.sendImage("concept", readerResult);
                              //set ObjectData

                              object = {};
                              object.id = (_crd && uuidv4 === void 0 ? (_reportPossibleCrUseOfuuidv({
                                error: Error()
                              }), uuidv4) : uuidv4)();
                              object.mimeType = mimeType;
                              object.file = readerResult;
                              object.img = imgFile;
                              object.node = imgNode;
                              object.tabIdx = _this2.selectedTab;

                              _this2.placeObject(imgNode, _this2.selectedTab);

                              _this2.objectDic[object.id] = object;
                              imgNode.on(Node.EventType.TOUCH_START, function (event) {
                                _this2.setActiveObj(object, event);
                              }, _this2, true);

                            case 21:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _loop);
                    });
                    i = 0;

                  case 3:
                    if (!(i < uploadFiles.length)) {
                      _context3.next = 11;
                      break;
                    }

                    return _context3.delegateYield(_loop(), "t0", 5);

                  case 5:
                    _ret = _context3.t0;

                    if (!(_ret === "continue")) {
                      _context3.next = 8;
                      break;
                    }

                    return _context3.abrupt("continue", 8);

                  case 8:
                    i++;
                    _context3.next = 3;
                    break;

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2);
          }));

          function readFile(_x) {
            return _readFile.apply(this, arguments);
          }

          return readFile;
        }();

        _proto.addImgObj = function addImgObj(fileResult, tabIdx) {
          var _this3 = this;

          var imgNode = this.getImgNode(fileResult.imgFile);
          var object = {};
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
          imgNode.on(Node.EventType.TOUCH_START, function (event) {
            _this3.setActiveObj(object, event);
          }, this, true);
        } // file load function
        ;

        _proto.getImgNode = function getImgNode(imgResult) {
          // set sprite frame
          var imgAsset = new ImageAsset(imgResult);
          var spriteFrame = new SpriteFrame();
          var tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex; // set node

          var node = instantiate(this.assetManager.prefabDic["ImageNode"]);
          node.getComponent(Sprite).spriteFrame = spriteFrame;
          node.getComponent(UITransform).setContentSize(new Size(180, 180));
          return node;
        };

        _proto.readFileAsync = function readFileAsync(file) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.onerror = reject; // reader.readAsArrayBuffer(file);

            reader.readAsDataURL(file);
          });
        };

        _proto.readImgAsync = function readImgAsync(fileResult) {
          return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onload = function () {
              resolve(img);
            };

            img.onerror = reject;
            img.src = fileResult;
          });
        };

        _proto.placeObject = function placeObject(imgNode, tabIdx) {
          var objectLen = 0;
          var keys = Object.keys(this.objectDic);

          for (var i in keys) {
            var key = keys[i];

            if (this.objectDic[key].tabIdx == tabIdx) {
              objectLen++;
            }
          }

          var rowNum = objectLen % 4;
          var columnNum = Math.floor(objectLen / 4);
          imgNode.setPosition(new Vec3(100 + rowNum * 220, -100 - columnNum * 220, 0));
          this.contentNode[tabIdx].addChild(imgNode);
          this.contentNode[tabIdx].getComponent(UITransform).setContentSize(new Size(900, 400 + columnNum * 220)); // console.log(imgNode);
        } // touch function
        ;

        _proto.setActiveObj = function setActiveObj(obj, event) {
          this.activeObj = Object.assign({}, obj);
          var imgNode = this.getImgNode(obj.img);
          this.node.insertChild(imgNode, 99);
          this.activeObj.node = imgNode;
          var location = event.touch.getUILocation();
          this.activeObj.node.setWorldPosition(new Vec3(location.x, location.y, 1));
          this.scrollNode[this.selectedTab].getComponent(ScrollView).vertical = false;
        };

        _proto.onTouchStart = function onTouchStart(event) {
          if (this.activeObj) {
            var location = event.touch.getUILocation();
            this.activeObj.node.setWorldPosition(new Vec3(location.x, location.y, 1));
          }
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (this.activeObj) {
            var location = event.touch.getUILocation();
            this.activeObj.node.setWorldPosition(new Vec3(location.x, location.y, 1));

            if (location.x <= 900) {
              this.activeFileTitle = null;

              for (var i in this.fileTitles) {
                var fileTitleNode = this.fileTitles[i];
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
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          // console.log("touc end", event);
          if (!event.simulate && this.activeObj) {
            if (this.activeFileTitle) {
              var fileTitle = this.activeFileTitle.getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
                error: Error()
              }), FileTitle) : FileTitle);
              fileTitle.setActive(false);
              this.addDecoData(this.activeObj, fileTitle.tag);
              this.activeFileTitle = null;
            }

            if (this.activeObj.node) {
              this.activeObj.node.removeFromParent();
            } // send date to room scene


            var location = event.touch.getUILocation();

            if (location.x >= 1800) {
              this.sceneScript.replaceDeco("touchEnd", location, this.activeObj);
            }

            this.activeObj = null;
            this.scrollNode[this.selectedTab].getComponent(ScrollView).vertical = true;
          }
        } // update Deco Data
        ;

        _proto.initFileTitle = function initFileTitle() {
          var labelArray = ["전체(0)", "바닥(0)", "왼쪽 벽(0)", "오른쪽 벽(0)"];
          var tagArray = ["00", "01", "02", "03"];

          for (var i in this.fileTitles) {
            var fileTitle = this.fileTitles[i].getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
              error: Error()
            }), FileTitle) : FileTitle);
            fileTitle.setLabel(labelArray[i]);
            fileTitle.tag = tagArray[i];
            fileTitle.fileMaster = this;
          }
        };

        _proto.addDecoData = function addDecoData(obj, tag) {
          if (this.sceneScript) {
            this.sceneScript.addDecoData(obj, tag);
          }
        };

        _proto.updateFileMaster = function updateFileMaster() {
          // console.log("hi", this.decoDic);
          var keys = Object.keys(this.decoDic);
          var decoDatas = {};
          decoDatas["00"] = [];
          decoDatas["01"] = [];
          decoDatas["02"] = [];
          decoDatas["03"] = [];

          for (var i in keys) {
            var placeType = this.decoDic[keys[i]].placeType;
            decoDatas[placeType].push(this.decoDic[keys[i]]);
          } // console.log(decoDatas);


          var labelArray = ["전체(%d)", "바닥(%d)", "왼쪽 벽(%d)", "오른쪽 벽(%d)"];
          var tagArray = ["00", "01", "02", "03"];
          var yPosition = -100;
          var yDiff = 70;

          for (var i in this.fileTitles) {
            var fileTitle = this.fileTitles[i].getComponent(_crd && FileTitle === void 0 ? (_reportPossibleCrUseOfFileTitle({
              error: Error()
            }), FileTitle) : FileTitle);
            var fileDatas = decoDatas[tagArray[i]];
            fileTitle.setLabel(labelArray[i].replace("%d", String(fileDatas.length)));
            fileDatas.sort(function (a, b) {
              return a.zOrder > b.zOrder && 1 || -1;
            });
            fileTitle.setFileData(fileDatas);
            this.fileTitles[i].setPosition(new Vec3(0, yPosition, 1));
            var titleSize = fileTitle.getTitleSize();
            yPosition = yPosition - yDiff - titleSize.y;
          }

          this.decoContentNode.getComponent(UITransformComponent).setContentSize(new Size(900, -yPosition));
        };

        _proto.onFileSelected = function onFileSelected(fileData) {
          if (this.sceneScript) {
            this.sceneScript.onFileSelected(fileData);
          }
        };

        _proto.onChangeOrder = function onChangeOrder(fileData, kind) {
          var placeType = fileData.placeType;
          var zOrder = fileData.zOrder;
          var targetData = null;

          if (kind == "up") {
            var keys = Object.keys(this.decoDic);
            var targetOrder = 0;

            for (var i in keys) {
              if (placeType == this.decoDic[keys[i]].placeType) {
                if (this.decoDic[keys[i]].zOrder > targetOrder && this.decoDic[keys[i]].zOrder < zOrder) {
                  targetOrder = this.decoDic[keys[i]].zOrder;
                  targetData = this.decoDic[keys[i]];
                }
              }
            }
          } else if (kind == "down") {
            var _keys = Object.keys(this.decoDic);

            var _targetOrder = 100;

            for (var i in _keys) {
              if (placeType == this.decoDic[_keys[i]].placeType) {
                if (this.decoDic[_keys[i]].zOrder < _targetOrder && this.decoDic[_keys[i]].zOrder > zOrder) {
                  _targetOrder = this.decoDic[_keys[i]].zOrder;
                  targetData = this.decoDic[_keys[i]];
                }
              }
            }
          } //// chaget order


          if (targetData) {
            var _targetOrder2 = targetData.zOrder;
            var targetSibling = targetData.node.getSiblingIndex();
            var fileSibling = fileData.node.getSiblingIndex();
            fileData.zOrder = _targetOrder2;
            targetData.zOrder = zOrder;
            fileData.node.setSiblingIndex(targetSibling);
            targetData.node.setSiblingIndex(fileSibling);
            this.updateFileMaster();
          }
        } /////////////
        ;

        _proto.selectedTabClicked = function selectedTabClicked(node, idx) {
          var tabIdx = Number(idx);
          this.selectedTab = tabIdx;

          for (var i in this.scrollNode) {
            this.scrollNode[i].active = false;
            this.idxButton[i].setScale(new Vec3(0.75, 0.75, 0.75));
          }

          this.scrollNode[idx].active = true;
          this.idxButton[idx].setScale(new Vec3(1.0, 1.0, 1.0));
        };

        _proto.removeObjDic = function removeObjDic() {
          var keys = Object.keys(this.objectDic);

          for (var i in keys) {
            var key = keys[i];
            var object = this.objectDic[key];

            if (object.node) {
              object.node.removeFromParent();
            }

            delete this.objectDic[key];
          }

          this.activeObj = null;
          this.selectedTab = 0;
        } //
        ;

        _proto.updateObjDic = function updateObjDic(objectDic) {
          var keys = Object.keys(objectDic);

          for (var i in keys) {
            var key = keys[i];
            var obj = objectDic[key];
            console.log(obj);
          }
        };

        return FileMaster;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "decoContentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fileTitles", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "idxButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FileMaster.js.map