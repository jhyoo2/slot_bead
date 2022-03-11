System.register("chunks:///_virtual/DiceMaster.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts', './DiceIcon.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, instantiate, Sprite, Vec3, tween, Label, Component, AssetManager, DiceIcon;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      tween = module.tween;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }, function (module) {
      DiceIcon = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "01948HttrFAEptrAQvL77n4", "DiceMaster", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DiceMaster = exports('default', (_dec = ccclass("DiceMaster"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceMaster, _Component);

        function DiceMaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backNode", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "diceManager", null);

          _defineProperty(_assertThisInitialized(_this), "diceData", void 0);

          _defineProperty(_assertThisInitialized(_this), "diceNumbers", {
            first: 0,
            second: 0
          });

          _defineProperty(_assertThisInitialized(_this), "iconArray", []);

          _defineProperty(_assertThisInitialized(_this), "player", null);

          _defineProperty(_assertThisInitialized(_this), "playerIdx", 0);

          return _this;
        }

        var _proto = DiceMaster.prototype;

        _proto.initDiceMaster = function initDiceMaster(diceData) {
          this.assetManager = AssetManager.getInstance();
          this.diceData = diceData;
          diceData.iconNum = 16;

          for (var i = -6; i < diceData.iconNum; i++) {
            var diceIdx = i + diceData.startIdx;
            var iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
            this.node.insertChild(iconObject, 0);
            iconObject.setPosition(this.getDicePlace(diceIdx));
            var iconScript = iconObject.getComponent("DiceIcon");
            iconScript.diceIdx = Number(diceIdx);
            var iconKind = Math.floor(Math.random() * 5) + 1;
            var backKind = Math.floor(Math.random() * 3) + 1;
            iconScript.initIcon(iconKind, backKind, this.diceData);
            iconScript.updateNumber(diceIdx);
            this.iconArray.push(iconObject);
          }

          var newPlayer = new Node();
          newPlayer.setPosition(this.iconArray[6].getPosition());
          var newSprite = newPlayer.addComponent(Sprite);
          newSprite.spriteFrame = this.assetManager.assetDic["Slot/pig"];
          this.node.insertChild(newPlayer, 30);
          this.player = newPlayer;
          this.playerIdx = diceData.startIdx;
        };

        _proto.getDicePlace = function getDicePlace(diceNum) {
          var railNum = diceNum >= 0 ? Math.floor(diceNum / 4) : Math.floor(Math.abs(diceNum + 1) / 4) + 1;

          if (railNum % 2 == 0) {
            var rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4; // console.log("1", diceNum, railNum, rowNum);

            return new Vec3(210 + this.diceData.blockSize.x * rowNum - 540, this.diceData.basePos.y + this.diceData.blockSize.y * (diceNum - this.diceData.startIdx), 0);
          } else {
            var _rowNum = diceNum >= 0 ? diceNum % 4 : (diceNum + 8) % 4; // console.log("2", diceNum, railNum, rowNum);


            return new Vec3(1080 - 210 - this.diceData.blockSize.x * _rowNum - 540, this.diceData.basePos.y + this.diceData.blockSize.y * (diceNum - this.diceData.startIdx), 0);
          }
        };

        _proto.addIcon = function addIcon() {
          var lastIcon = this.iconArray[this.iconArray.length - 1];
          var lastIconIdx = lastIcon.getComponent(DiceIcon).diceIdx;
          var lastPos = lastIcon.getPosition();
          var prePos = this.getDicePlace(lastIconIdx);
          var postPos = this.getDicePlace(lastIconIdx + 1);
          var iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
          this.node.insertChild(iconObject, 0);
          iconObject.setPosition(new Vec3(lastPos.x + (postPos.x - prePos.x), lastPos.y + (postPos.y - prePos.y), lastPos.z + (postPos.z - prePos.z)));
          var iconScript = iconObject.getComponent(DiceIcon);
          iconScript.diceIdx = lastIconIdx + 1;
          var iconKind = Math.floor(Math.random() * 5) + 1;
          var backKind = Math.floor(Math.random() * 3) + 1;
          iconScript.initIcon(iconKind, backKind, this.diceData);
          iconScript.updateNumber(iconScript.diceIdx);
          this.iconArray.push(iconObject);
        };

        _proto.movePlayer = function movePlayer(time) {
          this.playerIdx++;
          var postPos = this.getDicePlace(this.playerIdx);
          var playerPos = this.player.getPosition();
          tween(this.player).to(time, {
            position: new Vec3(postPos.x, playerPos.y, playerPos.z)
          }).start();
        };

        _proto.getNextBlock = function getNextBlock() {
          for (var i in this.iconArray) {
            var iconObject = this.iconArray[i];
            var iconScript = iconObject.getComponent(DiceIcon);

            if (iconScript.diceIdx == this.playerIdx + 1) {
              return iconObject;
            }
          }
        };

        _proto.sleep = function sleep(t) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, t);
          });
        };

        _proto.rollWithNetwork = /*#__PURE__*/function () {
          var _rollWithNetwork = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.sleep(1000);

                  case 2:
                    this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
                    this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;

                    if (this.diceData) {
                      this.diceManager.getDiceResult(this.diceNumbers);
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

        _proto.rollWithRandom = function rollWithRandom() {
          this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
          this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;
          var labelNode = new Node();
          labelNode.setPosition(540, 300, 0);
          this.node.insertChild(labelNode, 30);
          var label = labelNode.addComponent(Label);
          label.fontSize = 100;
          label.lineHeight = 100;
          label.string = this.diceNumbers.first + " | " + this.diceNumbers.second;
          tween(labelNode).to(0.5, {
            scale: new Vec3(1.5, 1.5, 1)
          }).to(0.5, {
            scale: new Vec3(1.0, 1.0, 1)
          }).call(function () {// this.movePlayer(1);
            // this.movePlayer(this.diceNumbers.first + this.diceNumbers.second);
          }).delay(2.0).call(function () {
            labelNode.removeFromParent();
          }).start();
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {};

        _proto.moveBlock = function moveBlock(time, yPos) {
          this.addIcon();

          for (var j in this.iconArray) {
            var iconObject = this.iconArray[j];

            if (iconObject.getPosition().y <= -500) {
              iconObject.removeFromParent();
              iconObject.destroy();
              this.iconArray.splice(Number(j), 1);
              continue;
            }

            tween(iconObject).by(time, {
              position: new Vec3(0, yPos, 0)
            }).start();
          }
        };

        return DiceMaster;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CCUtils.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, tween, Vec4, RenderComponent, Color;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      tween = module.tween;
      Vec4 = module.Vec4;
      RenderComponent = module.RenderComponent;
      Color = module.Color;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "0a6ee51RDlI4aW38cGIbaGh", "CCUtils", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CCUtils = exports('CCUtils', (_dec = ccclass("CCUtils"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function CCUtils() {}
        /**
         * 显隐状态切换
         * 替代cc.toggleVisibility
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.toggleVisibility(node);
         * CCUtils.toggleVisibility(node, 2);
         * ```
         */


        CCUtils.toggleVisibility = function toggleVisibility(target, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          var _renderComps = this._getAllRenderComponents(target);

          if (duration > 0) {
            this._tmpComponent.scheduleOnce(function () {
              for (var i = 0; i < _renderComps.length; i++) {
                var render = _renderComps[i];
                render.enabled = !render.enabled;
              }
            }, duration);
          } else {
            for (var i = 0; i < _renderComps.length; i++) {
              var render = _renderComps[i];
              render.enabled = !render.enabled;
            }
          }
        }
        /**
         * 立即显示
         * tween版本实现，替代cc.show
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.show(node);
         * CCUtils.show(node, 2);
         * ```
         */
        ;

        CCUtils.show = function show(target, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          if (duration > 0) {
            this._tmpComponent.scheduleOnce(function () {
              tween(target).show().start();
            }, duration);
          } else {
            tween(target).show().start();
          }
        }
        /**
         * 立即隐藏
         * tween版本实现，替代cc.hide
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.hide(node);
         * CCUtils.hide(node, 2);
         * ```
         */
        ;

        CCUtils.hide = function hide(target, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          if (duration > 0) {
            this._tmpComponent.scheduleOnce(function () {
              tween(target).hide().start();
            }, duration);
          } else {
            tween(target).hide().start();
          }
        }
        /**
         * 渐显效果
         * tween版本实现，替代cc.fadeIn
         * @param target target, 目标节点
         * @param duration duration, 渐显时间, 单位秒
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.fadeIn(node, 1);
         * ```
         */
        ;

        CCUtils.fadeIn = function fadeIn(target, duration) {
          var c = new Vec4();

          var renders = this._getAllRenderComponents(target);

          var _loop = function _loop(i) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            var tempColor = new Color();
            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 255), {
              onUpdate: function onUpdate() {
                tempColor.r = c.x;
                tempColor.b = c.y;
                tempColor.g = c.z;
                tempColor.a = c.w;

                if (renders[i] && renders[i].color) {
                  // console.log(renders[i]);
                  renders[i].color = tempColor;
                }
              }
            }).start();
          };

          for (var i = 0; i < renders.length; i++) {
            _loop(i);
          }
        }
        /**
         * 渐隐效果
         * tween版本实现，替代cc.fadeOut
         * @param target target, 目标节点
         * @param duration duration, 渐显时间, 单位秒
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.fadeIn(node, 1);
         * ```
         */
        ;

        CCUtils.fadeOut = function fadeOut(target, duration) {
          var c = new Vec4();

          var renders = this._getAllRenderComponents(target);

          var _loop2 = function _loop2(i) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            var tempColor = new Color();
            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 0), {
              onUpdate: function onUpdate() {
                tempColor.r = c.x;
                tempColor.b = c.y;
                tempColor.g = c.z;
                tempColor.a = c.w;

                if (renders[i] && renders[i].color) {
                  // console.log(renders[i]);
                  renders[i].color = tempColor;
                }
              }
            }).start();
          };

          for (var i = 0; i < renders.length; i++) {
            _loop2(i);
          }
        };

        CCUtils._getAllRenderComponents = function _getAllRenderComponents(target) {
          return target.getComponentsInChildren(RenderComponent);
        };

        return CCUtils;
      }(), _defineProperty(_class2, "_tmpComponent", new Component()), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FileMaster.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts', './Module.ts', './FileTitle.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, ImageAsset, SpriteFrame, Texture2D, instantiate, Sprite, UITransform, Size, Vec3, ScrollView, UITransformComponent, Component, AssetManager, uuidv4, FileTitle;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ImageAsset = module.ImageAsset;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Size = module.Size;
      Vec3 = module.Vec3;
      ScrollView = module.ScrollView;
      UITransformComponent = module.UITransformComponent;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }, function (module) {
      uuidv4 = module.uuidv4;
    }, function (module) {
      FileTitle = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "0d3ceekdw1Kt7l6Uql5VA8K", "FileMaster", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FileMaster = exports('default', (_dec = ccclass("FileMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
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
                    this.assetManager = AssetManager.getInstance();
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
                              object.id = uuidv4();
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
          object.id = uuidv4();
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
                fileTitleNode.getComponent(FileTitle).setActive(false);

                if (Math.abs(fileTitleNode.getWorldPosition().y - location.y) <= 75) {
                  this.activeFileTitle = fileTitleNode;
                }
              }

              if (this.activeFileTitle) {
                this.activeFileTitle.getComponent(FileTitle).setActive(true);
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
              var fileTitle = this.activeFileTitle.getComponent(FileTitle);
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
            var fileTitle = this.fileTitles[i].getComponent(FileTitle);
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
            var fileTitle = this.fileTitles[i].getComponent(FileTitle);
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, instantiate, Component, AssetManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "135eeISXWJJdYMkt5LriJX+", "DiceManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DiceManager = exports('default', (_dec = ccclass("DiceManager"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceManager, _Component);

        function DiceManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "eventTarget", null);

          _defineProperty(_assertThisInitialized(_this), "diceObject", null);

          _defineProperty(_assertThisInitialized(_this), "rolling", false);

          return _this;
        }

        var _proto = DiceManager.prototype;

        _proto.initDiceManager = function initDiceManager(diceData) {
          this.assetManager = AssetManager.getInstance();
          var diceObject = instantiate(this.assetManager.prefabDic["DiceMaster"]);
          diceObject.setPosition(0, 0, 0);
          var diceScript = diceObject.getComponent("DiceMaster");
          diceScript.diceManager = this;
          diceScript.initDiceMaster(diceData);
          this.diceObject = diceObject;
          return diceObject;
        };

        _proto.rollWithNetwork = function rollWithNetwork() {
          if (this.rolling) return;
          this.rolling = true;
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithNetwork();
        };

        _proto.rollWithRandom = function rollWithRandom() {
          if (this.rolling) return;
          this.rolling = true;
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithRandom();
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {
          if (this.rolling) return;
          this.rolling = true;
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.rollWithFixed(iconDatas);
        };

        _proto.getDiceResult = function getDiceResult(diceResult) {
          this.rolling = false;

          if (this.eventTarget && this.eventTarget.showDiceResult) {
            this.eventTarget.showDiceResult(diceResult);
          } // // console.log(slotResult);

        };

        _proto.moveBlock = function moveBlock(time, yPos) {
          var diceScript = this.diceObject.getComponent("DiceMaster");
          diceScript.moveBlock(time, yPos);
          diceScript.movePlayer(time);
        };

        _proto.getPlayerIdx = function getPlayerIdx() {
          var diceScript = this.diceObject.getComponent("DiceMaster");
          return diceScript.playerIdx;
        };

        _proto.getNextBlock = function getNextBlock() {
          var diceScript = this.diceObject.getComponent("DiceMaster");
          return diceScript.getNextBlock();
        };

        return DiceManager;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotIcon.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, UITransform, Sprite, Label, Component, AssetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "20e4a1bTsNGY70UUUM/a5LG", "SlotIcon", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SlotIcon = exports('default', (_dec = ccclass("SlotIcon"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotIcon, _Component);

        function SlotIcon() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "iconNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "numberNode", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "slotData", void 0);

          _defineProperty(_assertThisInitialized(_this), "iconData", {
            backKind: 0,
            iconKind: 0,
            rowIdx: 0
          });

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          return _this;
        }

        var _proto = SlotIcon.prototype;

        _proto.initIcon = function initIcon(iconIdx, backKind, slotData) {
          this.assetManager = AssetManager.getInstance();
          this.slotData = slotData;
          this.iconData.iconKind = iconIdx;
          this.iconData.backKind = backKind;
          this.backNode.getComponent(UITransform).setContentSize(slotData.iconSize);
          var iconSprite = this.iconNode.getComponent(Sprite);
          iconSprite.spriteFrame = this.assetManager.assetDic["Slot/candy_" + iconIdx + "_0"];
          var backSprite = this.backNode.getComponent(Sprite);
          backSprite.spriteFrame = this.assetManager.assetDic["Slot/back" + backKind];
          this.numberNode.getComponent(Label).string = String(this.iconData.rowIdx);
        };

        _proto.updateNumber = function updateNumber() {
          this.numberNode.getComponent(Label).string = String(this.iconData.rowIdx);
        };

        _proto.crushIcon = function crushIcon(time) {
          var sprite = this.iconNode.getComponent(Sprite);
          sprite.spriteFrame = this.assetManager.assetDic["Slot/candy_" + this.iconData.iconKind + "_1"]; //     tween(this.iconNode)
          //       .delay(time)
          //       .to(0.2, { scale: 3.0 })
          //       .delay(0.05)
          //       .to(0.1, { scale: 0 })
          //       .start();
        };

        return SlotIcon;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numberNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, UITransform, Size, Label, Component, Color;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Size = module.Size;
      Label = module.Label;
      Component = module.Component;
      Color = module.Color;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "21a772rH3hDZ5GhGGjDMtYc", "ListView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ListView = exports('default', (_dec = ccclass("ListView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListView, _Component);

        function ListView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "arrowNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "labelNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "contentNode", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "open", false);

          _defineProperty(_assertThisInitialized(_this), "selectedIdx", 0);

          _defineProperty(_assertThisInitialized(_this), "dataList", []);

          _defineProperty(_assertThisInitialized(_this), "callback", null);

          return _this;
        }

        var _proto = ListView.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.arrowNode.on(Node.EventType.TOUCH_START, this.setActive, this);
                  // this.setDataList([]);

                  case 1:
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

        _proto.setDataList = function setDataList(dataList) {
          var _this2 = this;

          this.dataList = dataList;
          this.setLabelIdx(0);
          this.contentNode.removeAllChildren();
          this.contentNode.getComponent(UITransform).setContentSize(new Size(300, 80 * dataList.length));

          var _loop = function _loop() {
            var obj = _this2.dataList[i];
            var nodeIdx = Number(i);
            var node = new Node();
            node.addComponent(UITransform).setContentSize(new Size(300, 80));
            node.setPosition(0, -40 - 80 * Number(i));
            var label = node.addComponent(Label);
            label.fontSize = 40;
            label.color = new Color(0, 0, 0, 255);
            label.lineHeight = 40;
            label.string = obj.label;

            _this2.contentNode.addChild(node);

            node.on(Node.EventType.TOUCH_START, function () {
              _this2.setLabelIdx(nodeIdx);
            }, _this2);
          };

          for (var i in dataList) {
            _loop();
          }
        };

        _proto.setActive = function setActive() {
          if (this.open) {
            this.open = false;
            this.scrollNode.active = false;
          } else {
            this.open = true;
            this.scrollNode.active = true;
          }
        };

        _proto.setLabelIdx = function setLabelIdx(idx) {
          this.open = false;
          this.scrollNode.active = false;

          if (this.callback) {
            this.callback(this.dataList[idx]);
          }
        };

        _proto.setLabel = function setLabel(tag) {
          var idx = 0;

          for (var i in this.dataList) {
            var dataTag = this.dataList[i].tag;

            if (dataTag == tag) {
              idx = Number(i);
              break;
            }
          }

          this.selectedIdx = idx;
          this.labelNode.getComponent(Label).string = this.dataList[idx].label;
        };

        _proto.resetLabel = function resetLabel() {
          var idx = 0;
          this.selectedIdx = idx;
          this.labelNode.getComponent(Label).string = this.dataList[idx].label;
        };

        return ListView;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Module.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, _createClass, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      exports('uuidv4', uuidv4);

      var _class, _class2, _temp, _class3, _temp2;

      cclegacy._RF.push({}, "2deebUWBqRKZpD01JrkIxxS", "Module", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c == "x" ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }

      var CM = exports('CM', ccclass(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CM, _Component);

        function CM() {
          return _Component.apply(this, arguments) || this;
        }

        return CM;
      }(Component), _defineProperty(_class2, "OpCode", {
        START: 1,
        UPDATE: 2,
        DONE: 3,
        MOVE: 4,
        REJECTED: 5,
        READY: 6,
        RUNNING: 7
      }), _defineProperty(_class2, "GameStatus", {
        WAITING: 0,
        START: 1,
        RUNNING: 2,
        DONE: 3
      }), _defineProperty(_class2, "GameType", {
        SOLO: 0,
        MULTI: 1
      }), _defineProperty(_class2, "EventType", {
        START: 0,
        CATCH_NODE: 1,
        MISSING: 2,
        MISS_TOUCH: 3
      }), _temp)) || _class);
      var CMObject = exports('CMObject', ccclass(_class3 = (_temp2 = /*#__PURE__*/function () {
        function CMObject(myValue) {
          _defineProperty(this, "_value", 0);

          _defineProperty(this, "_key", 0);

          _defineProperty(this, "_dataType", 0);

          this._value = 0;
          this._key = "";
          this._dataType = "number";

          if (myValue) {
            this.value = myValue;
          }
        }

        var _proto = CMObject.prototype;

        _proto.uuidv4 = function uuidv4() {
          return "xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == "x" ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        };

        _proto.decryptData = function decryptData(value, key, dataType) {
          return dataType == "number" ? this.xorConvert(value, key) * 1 : this.xorConvert(value, key);
        };

        _proto.xorConvert = function xorConvert(text, key) {
          // console.log(text+ '//' + key);
          text = text == undefined || text == null ? "" : text;
          return Array.prototype.slice.call(text).map(function (c, index) {
            return String.fromCharCode(c.charCodeAt(0) ^ key[index % key.length].charCodeAt(0));
          }).join("");
        };

        _proto.getObject = function getObject(myObject) {
          var resultObject = {};

          for (var key in myObject) {
            if (typeof myObject[key] == "object") {
              if (myObject[key].length != undefined && myObject[key].length >= 0) {
                resultObject[key] = [];

                for (var tey in myObject[key]) {
                  if (this.checkCMObject(myObject[key][tey])) {
                    resultObject[key].push(myObject[key][tey].value);
                  } else {
                    resultObject[key].push(this.getObject(myObject[key][tey]));
                  }
                }
              } else {
                if (this.checkCMObject(myObject[key])) {
                  resultObject[key] = myObject[key].value;
                } else {
                  resultObject[key] = this.getObject(myObject[key]);
                }
              }
            } else {
              resultObject[key] = myObject[key];
            }
          }

          return resultObject;
        };

        _proto.checkCMObject = function checkCMObject(myObject) {
          if (typeof myObject == "object" && myObject._key != undefined && myObject._value != undefined) {
            return true;
          } else {
            return false;
          }
        };

        _proto.getCMObject = function getCMObject(myObject) {
          var resultObject = {};

          for (var key in myObject) {
            if (typeof myObject[key] == "object") {
              if (myObject[key].length != undefined && myObject[key].length >= 0) {
                resultObject[key] = [];

                for (var tey in myObject[key]) {
                  if (typeof myObject[key][tey] == "object") {
                    resultObject[key].push(this.getCMObject(myObject[key][tey]));
                  } else {
                    resultObject[key].push(new CMObject(myObject[key][tey]));
                  }
                }
              } else {
                if (this.checkCMObject(myObject[key])) {
                  resultObject[key] = new CMObject(myObject[key].value);
                } else {
                  resultObject[key] = this.getCMObject(myObject[key]);
                }
              }
            } else {
              resultObject[key] = new CMObject(myObject[key]);
            }
          }

          return resultObject;
        };

        _createClass(CMObject, [{
          key: "value",
          get: function get() {
            // return this._value;
            if (this._dataType == "number") {
              return this.xorConvert(this._value, this._key) * 1;
            } else if (this._dataType == "object") {
              return JSON.parse(this.xorConvert(this._value, this._key));
            } else {
              return this.xorConvert(this._value, this._key);
            }
          },
          set: function set(myValue) {
            this._key = this.uuidv4();
            this._dataType = typeof myValue;

            if (this._dataType == "object") {
              myValue = JSON.stringify(myValue);
            }

            var inputValue = this._dataType != "String" ? String(myValue) : myValue;
            this._value = this.xorConvert(inputValue, this._key); // this._value = myValue;
          }
        }]);

        return CMObject;
      }(), _temp2)) || _class3);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FileList.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "30a70+WqNVObIHJ9CK5ifJX", "FileList", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FileList = exports('default', (_dec = ccclass("FileList"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FileList, _Component);

        function FileList() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "labelNode", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "fileData", null);

          _defineProperty(_assertThisInitialized(_this), "fileTitle", null);

          return _this;
        }

        var _proto = FileList.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onLoad() {
            return _onLoad.apply(this, arguments);
          }

          return onLoad;
        }();

        _proto.setLabel = function setLabel(string) {
          this.labelNode.getComponent(Label).string = string;
        };

        _proto.onArrowClicked = function onArrowClicked(node, kind) {
          if (this.fileTitle) {
            if (kind == "up") {
              this.fileTitle.onChangeOrder(this.fileData, kind);
            } else if (kind == "down") {
              this.fileTitle.onChangeOrder(this.fileData, kind);
            }
          }
        };

        _proto.onNodeClicked = function onNodeClicked(node) {
          if (this.fileTitle) {
            this.fileTitle.onFileSelected(this.fileData);
          }
        };

        return FileList;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomTemplate.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, instantiate, Vec3, Component, AssetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "38120FzTc1BuqTq/YzN9yzF", "RoomTemplate", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RoomTemplate = exports('default', (_dec = ccclass("RoomTemplate"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
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
                    this.assetManager = AssetManager.getInstance();
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
          var maxX = point.x + Math.max(1, size.x);
          var minY = point.y;
          var maxY = point.y + Math.max(1, size.y);
          var minZ = point.z;
          var maxZ = point.z + Math.max(1, size.z); // console.log(minX, maxX, minY, maxY, minZ, maxZ);

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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BeadNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseScene.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, SpriteFrame, Vec2, RigidBody2D, Sprite, Vec3, tween, UIOpacityComponent, Collider2D, Contact2DType, BaseScene;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Vec2 = module.Vec2;
      RigidBody2D = module.RigidBody2D;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      tween = module.tween;
      UIOpacityComponent = module.UIOpacityComponent;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
    }, function (module) {
      BaseScene = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "502d9sTB0dGyYmMuOjQI0D8", "BeadNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BeadNode = exports('BeadNode', (_dec = ccclass("BeadNode"), _dec2 = property(Node), _dec3 = property(SpriteFrame), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(BeadNode, _BaseScene);

        function BeadNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "beadStart", false);

          _defineProperty(_assertThisInitialized(_this), "myForce", 0);

          _defineProperty(_assertThisInitialized(_this), "myColor", 0);

          _defineProperty(_assertThisInitialized(_this), "targetColor", 3);

          _defineProperty(_assertThisInitialized(_this), "myIdx", 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "coverNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "beadFrame", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "shapeNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "shapeFrame", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "maxForce", 0);

          _defineProperty(_assertThisInitialized(_this), "nodeShape", 0);

          _defineProperty(_assertThisInitialized(_this), "maxVelocity", new Vec2(0, 0));

          return _this;
        }

        var _proto = BeadNode.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var myColor, collider;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseScene.prototype.onLoad.call(this);

                    myColor = Math.floor(Math.random() * 5) + 1;
                    this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
                    this.myColor = myColor;
                    collider = this.getComponent(Collider2D);

                    if (collider) {
                      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
                    }

                    this.changeShape();

                  case 7:
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

        _proto.changeShape = function changeShape() {
          var _this2 = this;

          var myShape = Math.floor(Math.random() * 4);
          var bidRigid = this.node.getComponent(RigidBody2D);
          var myForce = Math.sqrt(Math.pow(bidRigid.linearVelocity.x, 2) + Math.pow(bidRigid.linearVelocity.y, 2));
          var time = 1.0;

          if (myForce > 10) {
            time = 0.05;
          } else if (myForce > 5) {
            time = 0.1;
          } else if (myForce > 3) {
            time = 0.3;
          } else if (myForce > 1) {
            if (this.nodeShape == this.targetColor) {
              return;
            }

            time = 0.5;
            myShape = 3;
          } else {
            if (this.nodeShape == this.targetColor) {
              return;
            }

            time = 0.5;
            myShape = 3;
          }

          var copyNode = new Node();
          var copySprite = copyNode.addComponent(Sprite);
          copyNode.setScale(new Vec3(2.5, 2.5, 2.5));
          copySprite.spriteFrame = this.shapeFrame[this.nodeShape];
          this.shapeNode.parent.addChild(copyNode);
          this.nodeShape = myShape;
          this.shapeNode.getComponent(Sprite).spriteFrame = this.shapeFrame[myShape];
          tween(copyNode).by(time, {
            position: new Vec3(0, 150, 0)
          }).call(function () {
            copyNode.removeFromParent();
            copyNode.destroy();
          }).start();
          this.shapeNode.setPosition(new Vec3(0, -150, 0));
          tween(this.shapeNode).by(time, {
            position: new Vec3(0, 150, 0)
          }).delay(time / 5).call(function () {
            if (!_this2.beadStart && _this2.nodeShape == 3) {
              return;
            }

            _this2.changeShape();
          }).start();
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.getComponent(BeadNode)) {
            var myRigid = this.node.getComponent(RigidBody2D);
            myRigid.linearVelocity = new Vec2(Math.max(this.maxVelocity.x, myRigid.linearVelocity.x * 2.2), Math.max(this.maxVelocity.y, myRigid.linearVelocity.y * 2.2));
          } else {
            if (this.beadStart) {
              var myColor = (this.myColor + 1) % 6;
              this.myColor = myColor;
              this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
            }
          }
        };

        _proto.addRandomForce = function addRandomForce() {
          this.beadStart = true;
          var bidRigid = this.node.getComponent(RigidBody2D);
          var myForce = new Vec2(-30000 + 60000 * Math.random(), 90000 + 30000 * Math.random() + 10000 * this.myIdx);
          bidRigid.applyForce(myForce, new Vec2(myForce.x / 100, myForce.y / 100), true);
        };

        _proto.diminishVelocity = function diminishVelocity(rate) {
          var bidRigid = this.node.getComponent(RigidBody2D);
          bidRigid.linearVelocity = new Vec2(bidRigid.linearVelocity.x * rate, bidRigid.linearVelocity.y * rate);
          this.maxVelocity = new Vec2(this.maxVelocity.x * rate, this.maxVelocity.y * rate);
        };

        _proto.update = function update(dt) {
          if (!this.beadStart) {
            return;
          }

          var bidRigid = this.node.getComponent(RigidBody2D);
          var myForce = Math.sqrt(Math.pow(bidRigid.linearVelocity.x, 2) + Math.pow(bidRigid.linearVelocity.y, 2));

          if (this.maxForce < myForce) {
            this.maxForce = myForce;
            this.maxVelocity = new Vec2(bidRigid.linearVelocity.x, bidRigid.linearVelocity.y);
          }

          this.myForce += myForce;

          if (myForce > 0) {
            var preVelo = bidRigid.linearVelocity;

            if (myForce <= 0.1) {
              bidRigid.linearVelocity = new Vec2(0, 0);
              bidRigid.angularVelocity = 0;
              this.coverNode.getComponent(UIOpacityComponent).opacity = 0;
              this.beadStart = false;
            } else if (myForce > 10) {
              bidRigid.linearVelocity = new Vec2(preVelo.x * 0.9975 + 0.001 * this.myIdx, preVelo.y * 0.9975 + 0.001 * this.myIdx);
            } else if (myForce > 1) {
              if (this.nodeShape == this.targetColor) {
                bidRigid.linearVelocity = new Vec2(preVelo.x * 0.985 + 0.0005 * this.myIdx, preVelo.y * 0.985 + 0.0005 * this.myIdx);
              }
            } else {
              if (this.nodeShape == this.targetColor) {
                bidRigid.linearVelocity = new Vec2(preVelo.x * 0.95 + 0.001 * this.myIdx, preVelo.y * 0.95 + 0.001 * this.myIdx);
              }
            }

            if (myForce <= 3) {
              this.coverNode.getComponent(UIOpacityComponent).opacity = myForce / 3 * 255;
            }
          } // console.log(myForce);

        };

        return BeadNode;
      }(BaseScene), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coverNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "beadFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "shapeNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "shapeFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceIcon.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, UITransform, Sprite, Vec3, Label, Component, AssetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "53adcYh271EM5piBBOwLuGz", "DiceIcon", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DiceIcon = exports('default', (_dec = ccclass("DiceIcon"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceIcon, _Component);

        function DiceIcon() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "iconNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "numberNode", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "diceData", void 0);

          _defineProperty(_assertThisInitialized(_this), "diceIdx", 0);

          _defineProperty(_assertThisInitialized(_this), "iconData", {
            diceIdx: "0",
            backKind: 0,
            iconKind: 0
          });

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          return _this;
        }

        var _proto = DiceIcon.prototype;

        _proto.initIcon = function initIcon(iconIdx, backKind, slotData) {
          this.assetManager = AssetManager.getInstance();
          this.diceData = slotData;
          this.iconData.iconKind = iconIdx;
          this.iconData.backKind = backKind;
          this.backNode.getComponent(UITransform).setContentSize(slotData.iconSize);
          var iconSprite = this.iconNode.getComponent(Sprite);
          iconSprite.spriteFrame = this.assetManager.assetDic["DiceScene/Cube0" + iconIdx];
          iconSprite.sizeMode = Sprite.SizeMode.RAW;
          iconSprite.trim = true;
          this.iconNode.setScale(new Vec3(0.75, 0.75, 0.75));
          this.backNode.active = false;
          var backSprite = this.backNode.getComponent(Sprite);
          backSprite.spriteFrame = this.assetManager.assetDic["Slot/back" + backKind];
          this.numberNode.getComponent(Label).string = String(this.iconData.diceIdx);
        };

        _proto.changeIcon = function changeIcon(iconIdx) {
          var iconSprite = this.iconNode.getComponent(Sprite);
          iconSprite.spriteFrame = this.assetManager.assetDic["DiceScene/Cube0" + iconIdx];
        };

        _proto.updateNumber = function updateNumber(diceIdx) {
          if (String(diceIdx)) {
            this.iconData.diceIdx = String(diceIdx);
          }

          this.numberNode.getComponent(Label).string = String(this.iconData.diceIdx);
        };

        return DiceIcon;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numberNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModalLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Node, Graphics, color, UITransform, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Graphics = module.Graphics;
      color = module.color;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "59fb4ZGIDBCQrhWs4kyGyG8", "ModalLayer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ModalLayer = exports('default', (_dec = ccclass("ModalLayer"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModalLayer, _Component);

        function ModalLayer() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ModalLayer.prototype;

        _proto.getModalColor = function getModalColor(winSize) {
          var myModal = this.getModalLayer(winSize); // /////////////////////////////////////////

          var colorNode = new Node("ColorLayer");
          colorNode.setPosition(-winSize.width / 2, -winSize.height / 2);
          var colorSprite = colorNode.addComponent(Graphics);
          colorSprite.fillColor = color(0, 0, 0, 100);
          colorSprite.rect(0, 0, winSize.width, winSize.height);
          colorSprite.fill(); // /////////////////////////////////////////

          myModal.setSiblingIndex(1);
          myModal.addChild(colorNode);
          return myModal;
        };

        _proto.getModalBlack = function getModalBlack(winSize) {
          var myModal = this.getModalLayer(winSize); // /////////////////////////////////////////

          var colorNode = new Node("ColorLayer");
          colorNode.setPosition(-winSize.width / 2, -winSize.height / 2);
          var colorSprite = colorNode.addComponent(Graphics);
          colorSprite.fillColor = color(0, 0, 0, 255);
          colorSprite.rect(0, 0, winSize.width, winSize.height);
          colorSprite.fill(); // /////////////////////////////////////////

          myModal.setSiblingIndex(99);
          myModal.addChild(colorNode);
          return myModal;
        };

        _proto.getModalLayer = function getModalLayer(winSize) {
          // /////////////////////////////////////////
          var myModal = new Node("myModal");
          myModal.setPosition(0, 0);
          var modalTran = myModal.addComponent(UITransform);
          modalTran.setContentSize(winSize); // /////////////////////////////////////////////////////////

          myModal.on(Node.EventType.TOUCH_START, function (event) {}, this);
          return myModal;
        };

        return ModalLayer;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObstacleNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseScene.ts', './BeadNode.ts', './PinballScene.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Label, Vec3, tween, Collider2D, Contact2DType, BaseScene, BeadNode, PinballScene;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Vec3 = module.Vec3;
      tween = module.tween;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
    }, function (module) {
      BaseScene = module.default;
    }, function (module) {
      BeadNode = module.BeadNode;
    }, function (module) {
      PinballScene = module.PinballScene;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "5c786yKPDdASZeYdSPoPo2d", "ObstacleNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ObstacleNode = exports('ObstacleNode', (_dec = ccclass("ObstacleNode"), _dec2 = property(String), _dec3 = property(PinballScene), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(ObstacleNode, _BaseScene);

        function ObstacleNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "myTag", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pinballScene", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "row", 0);

          _defineProperty(_assertThisInitialized(_this), "column", 0);

          return _this;
        }

        var _proto = ObstacleNode.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var collider;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseScene.prototype.onLoad.call(this);

                    collider = this.getComponent(Collider2D);

                    if (collider) {
                      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
                      // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
                      // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
                    }

                  case 3:
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

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.getComponent(BeadNode)) {
            if (this.pinballScene) {
              this.pinballScene.addGold(Number(this.myTag) * 10);
            }

            var myNode = new Node();
            var myLabel = myNode.addComponent(Label);
            myLabel.string = "GOLD + " + Number(this.myTag) * 10;
            this.node.addChild(myNode);
            myNode.setPosition(new Vec3(0, 100, 0));
            tween(myNode).by(0.2, {
              position: new Vec3(0, 70, 0)
            }).delay(0.3).call(function () {
              myNode.removeFromParent();
              myNode.destroy();
            }).start();
          }
        };

        return ObstacleNode;
      }(BaseScene), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myTag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pinballScene", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssetManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, SpriteFrame, Prefab, Component, ImageAsset, Texture2D, resources;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Component = module.Component;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      resources = module.resources;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "612486b2mFMV7WApTT0CH6i", "AssetManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AssetManager = exports('default', (_dec = ccclass("AssetManager"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AssetManager, _Component);

        function AssetManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetDic", {});

          _defineProperty(_assertThisInitialized(_this), "atlasDic", {});

          _defineProperty(_assertThisInitialized(_this), "prefabDic", {});

          _defineProperty(_assertThisInitialized(_this), "spineDic", {});

          _defineProperty(_assertThisInitialized(_this), "musicDic", {});

          _defineProperty(_assertThisInitialized(_this), "textDic", {});

          _defineProperty(_assertThisInitialized(_this), "resourceCB", null);

          _defineProperty(_assertThisInitialized(_this), "assetArray", [{
            path: "Texture/Slot",
            type: SpriteFrame,
            dict: _this.assetDic
          }, {
            path: "Texture/RoomScene",
            type: SpriteFrame,
            dict: _this.assetDic
          }, {
            path: "Texture/DiceScene",
            type: SpriteFrame,
            dict: _this.assetDic
          }, {
            path: "Texture/Deco",
            type: SpriteFrame,
            dict: _this.assetDic
          }, {
            path: "Prefab",
            type: Prefab,
            dict: _this.prefabDic
          }]);

          return _this;
        }

        AssetManager.getInstance = function getInstance() {
          // ////////////////////////
          var myInstance = AssetManager.instance;

          if (!myInstance) {
            myInstance = new AssetManager();
            AssetManager.instance = myInstance;
          } // ////////////////////////


          return myInstance;
        };

        var _proto = AssetManager.prototype;

        _proto.loadFolder = /*#__PURE__*/function () {
          var _loadFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(folderName, type, dict, callback) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      resources.loadDir(folderName, type, function (err, assets) {
                        if (err) {
                          console.log(err);
                          reject(err);
                        } else {
                          //   if (folderName === "Prefab") {
                          //     console.log(assets);
                          //   }
                          for (var i in assets) {
                            var fileName = assets[i].name;

                            if (folderName === "Prefab") {
                              fileName = assets[i].data.name;
                            }

                            var myFile = folderName.split("/");

                            if (myFile.length >= 2) {
                              dict[myFile[1] + "/" + fileName] = assets[i];
                            } else {
                              dict[fileName] = assets[i];
                            }
                          }

                          resolve(callback(folderName));
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function loadFolder(_x, _x2, _x3, _x4) {
            return _loadFolder.apply(this, arguments);
          }

          return loadFolder;
        }();

        _proto.assetLoaded = function assetLoaded(idx, resouceLength) {
          // // console.log("path : ", path);
          if (this.resourceCB) {
            this.resourceCB(idx, resouceLength);
          }
        };

        _proto.loadAssets = /*#__PURE__*/function () {
          var _loadAssets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var self, resultArray, resultIdx;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    self = this;
                    resultArray = this.assetArray;
                    resultIdx = 0;
                    return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 3;
                                return _this2.loadFolder(resultArray[resultIdx].path, resultArray[resultIdx].type, resultArray[resultIdx].dict, function (folderName) {
                                  // // console.log(folderName);
                                  resultIdx++;
                                });

                              case 3:
                                if (resultIdx <= resultArray.length) {
                                  self.assetLoaded(resultIdx, resultArray.length);
                                } // // console.log(this);


                                if (!(resultIdx === resultArray.length)) {
                                  _context2.next = 7;
                                  break;
                                } //   console.log("resource load complete");


                                resolve("complete");
                                return _context2.abrupt("break", 9);

                              case 7:
                                _context2.next = 0;
                                break;

                              case 9:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x5, _x6) {
                        return _ref.apply(this, arguments);
                      };
                    }()));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function loadAssets() {
            return _loadAssets.apply(this, arguments);
          }

          return loadAssets;
        }();

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

        _proto.loadImgFromURL = function loadImgFromURL(url) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            var self = _this3;
            var xhr = new XMLHttpRequest();

            xhr.onload = function () {
              var reader = new FileReader();
              reader.onloadend = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var imgResult, imgAsset, spriteFrame, tex;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return self.readImgAsync(reader.result);

                      case 2:
                        imgResult = _context4.sent;
                        imgAsset = new ImageAsset(imgResult);
                        spriteFrame = new SpriteFrame();
                        tex = new Texture2D();
                        tex.image = imgAsset;
                        spriteFrame.texture = tex;
                        resolve({
                          spriteFrame: spriteFrame,
                          imgFile: imgResult,
                          readerResult: reader.result
                        });

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              reader.readAsDataURL(xhr.response);
            };

            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.send();
          });
        } // // update (dt) {},
        ;

        return AssetManager;
      }(Component), _defineProperty(_class2, "instance", null), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PinballScene.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseScene.ts', './BeadNode.ts', './TileNode.ts', './ObstacleNode.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Prefab, instantiate, UIOpacity, UITransform, Size, Vec3, RigidBody2D, Vec2, tween, PhysicsSystem2D, game, BaseScene, BeadNode, TileNode, ObstacleNode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Size = module.Size;
      Vec3 = module.Vec3;
      RigidBody2D = module.RigidBody2D;
      Vec2 = module.Vec2;
      tween = module.tween;
      PhysicsSystem2D = module.PhysicsSystem2D;
      game = module.game;
    }, function (module) {
      BaseScene = module.default;
    }, function (module) {
      BeadNode = module.BeadNode;
    }, function (module) {
      TileNode = module.TileNode;
    }, function (module) {
      ObstacleNode = module.ObstacleNode;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

      cclegacy._RF.push({}, "85701DkDxNAII63JRQZdAmM", "PinballScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PinballScene = exports('PinballScene', (_dec = ccclass("PinballScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(PinballScene, _BaseScene);

        function PinballScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "tileLayer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "nodeLayer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "beadPrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tilePrefab", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "beadArray", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "monsterArray", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "myForce", 0);

          _defineProperty(_assertThisInitialized(_this), "myTime", new Date());

          _defineProperty(_assertThisInitialized(_this), "roolStart", false);

          _defineProperty(_assertThisInitialized(_this), "realStart", false);

          _defineProperty(_assertThisInitialized(_this), "coinNum", 0);

          _defineProperty(_assertThisInitialized(_this), "tileArray", []);

          return _this;
        }

        var _proto = PinballScene.prototype; // -520

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _BaseScene.prototype.onLoad.call(this);

                    PhysicsSystem2D.instance.enable = true;
                    PhysicsSystem2D.instance.gravity = new Vec2(0, 0);
                    game.frameRate = 60.0;
                    game.setFrameRate(60.0); // PhysicsSystem2D.instance.gravity = new Vec2(0, -20 * PHYSICS_2D_PTM_RATIO);
                    // PhysicsSystem2D.instance.debugDrawFlags =
                    //   EPhysics2DDrawFlags.Aabb |
                    //   EPhysics2DDrawFlags.Pair |
                    //   EPhysics2DDrawFlags.CenterOfMass |
                    //   EPhysics2DDrawFlags.Joint |
                    //   EPhysics2DDrawFlags.Shape;
                    // this.assetManager = AssetManager.getInstance();
                    // const assetResult = await this.assetManager.loadAssets();
                    // this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, true);

                    this.makeTile();
                  // this.alocateMonster();

                  case 6:
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

        _proto.makeTile = function makeTile() {
          for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 8; j++) {
              var tileNode = instantiate(this.tilePrefab);
              tileNode.addComponent(UIOpacity).opacity = 50 + 100 * ((i + j) % 2);
              this.tileLayer.addChild(tileNode);
              tileNode.getComponent(UITransform).setContentSize(new Size(110, 114));
              tileNode.setPosition(new Vec3(-440 + 110 * 0.5 + 110 * j, -750 + 114 * 0.5 + 114 * i));
              this.tileArray.push(tileNode);
              var tileScript = tileNode.getComponent(TileNode);
              tileScript.row = i;
              tileScript.column = j;
              tileScript.occupied = false;
            }
          }
        };

        _proto.alocateMonster = function alocateMonster() {
          for (var i in this.monsterArray) {
            while (true) {
              var row = Math.floor(Math.random() * 6) + 5;
              var column = Math.floor(Math.random() * 8);
              var idx = row * 8 + column;
              var tileScript = this.tileArray[idx].getComponent(TileNode);

              if (tileScript.occupied) {
                continue;
              }

              tileScript.occupied = true;
              this.monsterArray[i].setPosition(this.tileArray[idx].getPosition());
              var monsterScript = this.monsterArray[i].getComponent(ObstacleNode);
              monsterScript.row = row;
              monsterScript.column = column;
              break;
            }
          }
        };

        _proto.rollButtonClicked = function rollButtonClicked() {
          console.log("roll", this.myForce);
          var gameStart = true;

          for (var i in this.beadArray) {
            if (this.beadArray[i].getComponent(BeadNode).beadStart) {
              gameStart = false;
            }
          }

          if (gameStart) {
            this.coinNum = 0;
            this.roolStart = true;
            this.myTime = new Date();

            if (this.beadArray.length > 0) {
              while (this.beadArray.length > 0) {
                var myBead = this.beadArray[0];
                myBead.removeFromParent();
                myBead.destroy();
                this.beadArray.splice(0, 1);
              }
            }

            var vecArray = [new Vec3(-122, -480, 0), new Vec3(0, -420, 0), new Vec3(122, -480, 0)];

            for (var _i = 0; _i < 3; _i++) {
              var beadNode = instantiate(this.beadPrefab);
              this.nodeLayer.addChild(beadNode);
              beadNode.setPosition(vecArray[_i]);
              this.beadArray.push(beadNode);
              beadNode.getComponent(BeadNode).addRandomForce();
              beadNode.getComponent(BeadNode).myIdx = Number(_i);
            }
          }
        };

        _proto.onTouchStart = function onTouchStart(event) {
          // console.log(event);
          for (var i in this.beadArray) {
            var myBead = this.beadArray[i];
            var bidRigid = myBead.getComponent(RigidBody2D);
            bidRigid.applyForce(new Vec2(50000 + 5000 * Number(i), 20000 + 500 * Number(i)), new Vec2(200, 20), true);
          } // bidRigid.applyForceToCenter(new Vec2(20000, 2000), true);

        };

        _proto.update = function update(dt) {
          var totalForce = 0;

          for (var i in this.beadArray) {
            var myBead = this.beadArray[i];
            var bidRigid = myBead.getComponent(RigidBody2D);
            var myForce = Math.sqrt(Math.pow(bidRigid.linearVelocity.x, 2) + Math.pow(bidRigid.linearVelocity.y, 2));
            totalForce += myForce;
          }

          this.myForce = totalForce;

          if (this.roolStart && totalForce > 0 && !this.realStart) {
            this.realStart = true;
          }

          if (this.realStart) {
            if (totalForce == 0) {
              this.roolStart = false;
              this.realStart = false; // this.moveMonster();

              console.log("gold : " + this.coinNum, "time : " + (new Date().getTime() - this.myTime.getTime()) / 1000);
            }
          }

          var timeDiff = (new Date().getTime() - this.myTime.getTime()) / 1000;

          if (timeDiff >= 3) {
            for (var i in this.beadArray) {
              var _myBead = this.beadArray[i];

              _myBead.getComponent(BeadNode).diminishVelocity(0.95);
            }
          } else if (timeDiff >= 2) {
            for (var i in this.beadArray) {
              var _myBead2 = this.beadArray[i];

              _myBead2.getComponent(BeadNode).diminishVelocity(0.975);
            }
          }
        };

        _proto.addGold = function addGold(gold) {
          this.coinNum += gold;
        };

        _proto.moveMonster = function moveMonster() {
          for (var i in this.monsterArray) {
            var monster = this.monsterArray[i];
            var monsterScript = this.monsterArray[i].getComponent(ObstacleNode);
            var tryTime = 0;

            while (tryTime < 100) {
              tryTime++;
              var direction = Math.floor(Math.random() * 4);
              var row = 0;
              var column = 0;

              switch (direction) {
                case 0:
                  row = -1;
                  break;

                case 1:
                  row = 1;
                  break;

                case 2:
                  column = -1;
                  break;

                case 3:
                  column = 1;
                  break;
              }

              row += monsterScript.row;

              if (row < 5 || row >= 11) {
                continue;
              }

              column += monsterScript.column;

              if (column < 0 || column >= 8) {
                continue;
              }

              var idx = row * 8 + column; // console.log(monsterScript.row, monsterScript.column, row, column, idx);

              var tileScript = this.tileArray[idx].getComponent(TileNode);

              if (tileScript.occupied) {
                continue;
              }

              this.tileArray[monsterScript.row * 8 + monsterScript.column].getComponent(TileNode).occupied = false;
              tileScript.occupied = true;
              monsterScript.row = row;
              monsterScript.column = column;
              tween(monster).to(0.2, {
                position: this.tileArray[idx].getPosition()
              }).start();
              tryTime = 0;
              break;
            }
          }
        };

        return PinballScene;
      }(BaseScene), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "beadPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tilePrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "beadArray", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "monsterArray", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FileTitle.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Label, Vec3, color, Sprite, UITransformComponent, Size, instantiate, Component, AssetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Vec3 = module.Vec3;
      color = module.color;
      Sprite = module.Sprite;
      UITransformComponent = module.UITransformComponent;
      Size = module.Size;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "867b2PaF1VLNJ2FGg0qLeXW", "FileTitle", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FileTitle = exports('default', (_dec = ccclass("FileTitle"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FileTitle, _Component);

        function FileTitle() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "labelNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "arrowNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "contentNode", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "opened", false);

          _defineProperty(_assertThisInitialized(_this), "tag", "00");

          _defineProperty(_assertThisInitialized(_this), "fileDatas", []);

          _defineProperty(_assertThisInitialized(_this), "fileMaster", null);

          return _this;
        }

        var _proto = FileTitle.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = AssetManager.getInstance();
                    this.scrollNode.getComponent(UITransformComponent).setContentSize(new Size(850, 10));

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

        _proto.setLabel = function setLabel(string) {
          this.labelNode.getComponent(Label).string = string;
        };

        _proto.onArrowClicked = function onArrowClicked() {
          this.opened = !this.opened;
          var scale = this.arrowNode.getScale();

          if (this.opened) {
            // open
            this.arrowNode.setScale(new Vec3(scale.x, -Math.abs(scale.y), scale.z));
            this.scrollNode.active = true;
          } else {
            // close
            this.arrowNode.setScale(new Vec3(scale.x, Math.abs(scale.y), scale.z));
            this.scrollNode.active = false;
          }

          this.fileMaster.updateFileMaster();
        };

        _proto.setActive = function setActive(bool) {
          if (bool) {
            this.labelNode.getComponent(Label).color = color(255, 0, 0, 255);
            this.node.getComponent(Sprite).color = color(100, 100, 100, 255);
          } else {
            this.labelNode.getComponent(Label).color = color(0, 0, 0, 255);
            this.node.getComponent(Sprite).color = color(211, 211, 211, 255);
          }
        };

        _proto.getTitleSize = function getTitleSize() {
          if (this.opened) {
            return new Vec3(850, 80 + Math.min(290, 10 + 80 * this.fileDatas.length), 1);
          } else {
            return new Vec3(850, 80, 1);
          }
        };

        _proto.setFileData = function setFileData(fileDatas) {
          this.fileDatas = fileDatas;
          var length = fileDatas.length;
          this.scrollNode.getComponent(UITransformComponent).setContentSize(new Size(850, Math.min(290, 10 + 80 * length)));
          this.contentNode.parent.getComponent(UITransformComponent).setContentSize(new Size(850, Math.min(290, 10 + 80 * length)));
          this.contentNode.getComponent(UITransformComponent).setContentSize(new Size(850, 90 + 80 * length)); ///////////////////////////

          this.contentNode.removeAllChildren();

          for (var i = 0; i < length; i++) {
            var fileListNode = instantiate(this.assetManager.prefabDic["FileList"]);
            fileListNode.setPosition(new Vec3(0, -45 - 80 * i, 1));
            this.contentNode.addChild(fileListNode);
            var fileList = fileListNode.getComponent("FileList");
            fileList.setLabel(fileDatas[i].label);
            fileList.fileData = fileDatas[i];
            fileList.fileTitle = this;
          }
        };

        _proto.onFileSelected = function onFileSelected(fileData) {
          if (this.fileMaster) {
            this.fileMaster.onFileSelected(fileData);
          }
        };

        _proto.onChangeOrder = function onChangeOrder(fileData, kind) {
          if (this.fileMaster) {
            this.fileMaster.onChangeOrder(fileData, kind);
          }
        };

        return FileTitle;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DecoTypes.ts", ['cc'], function () {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8a729K/Tt9HlKxso0AnZ482", "DecoTypes", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseRoom.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Sprite, Component, AssetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "91597kqBV9OF7SMLCfEKeNw", "BaseRoom", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseRoom = exports('default', (_dec = ccclass("BaseRoom"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseRoom, _Component);

        function BaseRoom() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "roomNode", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BaseRoom.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = AssetManager.getInstance();

                  case 1:
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

        _proto.setBaseRoom = function setBaseRoom(idx) {
          var baseSprite = this.roomNode.getComponent(Sprite);

          if (idx == 0) {
            baseSprite.spriteFrame = this.assetManager.assetDic["RoomScene/Bg002_1"];
          } else if (idx == 1) {
            baseSprite.spriteFrame = this.assetManager.assetDic["RoomScene/Bg002_2"];
          }
        };

        return BaseRoom;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VectorList.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Vec3, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "99778xv5npOGJCVHdvK6I55", "VectorList", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var VectorList = exports('default', (_dec = ccclass("VectorList"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VectorList, _Component);

        function VectorList() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "xLabelNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "yLabelNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "zLabelNode", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "vectorData", null);

          _defineProperty(_assertThisInitialized(_this), "callback", null);

          _defineProperty(_assertThisInitialized(_this), "minNum", 0);

          _defineProperty(_assertThisInitialized(_this), "maxNum", 18);

          return _this;
        }

        var _proto = VectorList.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onLoad() {
            return _onLoad.apply(this, arguments);
          }

          return onLoad;
        }();

        _proto.setLabel = function setLabel(vector) {
          this.vectorData = new Vec3(vector.x, vector.y, vector.z);
          this.xLabelNode.getComponent(Label).string = String(vector.x);
          this.yLabelNode.getComponent(Label).string = String(vector.y);
          this.zLabelNode.getComponent(Label).string = String(vector.z);
        };

        _proto.resetLabel = function resetLabel() {
          this.xLabelNode.getComponent(Label).string = "x";
          this.yLabelNode.getComponent(Label).string = "y";
          this.zLabelNode.getComponent(Label).string = "z";
        };

        _proto.upArrowClicked = function upArrowClicked(node, kind) {
          if (this.callback && this.vectorData) {
            if (kind == "x") {
              if (this.vectorData.x < this.maxNum) {
                this.vectorData.x++;
              }
            } else if (kind == "y") {
              if (this.vectorData.y < this.maxNum) {
                this.vectorData.y++;
              }
            } else if (kind == "z") {
              if (this.vectorData.z < this.maxNum) {
                this.vectorData.z++;
              }
            }

            this.callback({
              tag: this.vectorData
            });
          }
        };

        _proto.downArrowClicked = function downArrowClicked(node, kind) {
          if (this.callback && this.vectorData) {
            if (kind == "x") {
              if (this.vectorData.x > this.minNum) {
                this.vectorData.x--;
              }
            } else if (kind == "y") {
              if (this.vectorData.y > this.minNum) {
                this.vectorData.y--;
              }
            } else if (kind == "z") {
              if (this.vectorData.z > this.minNum) {
                this.vectorData.z--;
              }
            }

            this.callback({
              tag: this.vectorData
            });
          }
        };

        return VectorList;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xLabelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yLabelNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zLabelNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileRail.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "9df55opCsBGzrVmO/Kh41XA", "TileRail", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TileRail = exports('default', (_dec = ccclass("TileRail"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileRail, _Component);

        function TileRail() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "railNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objArray", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TileRail.prototype;

        _proto.setTileObj = function setTileObj(idx) {
          this.railNode.active = false;

          for (var i in this.objArray) {
            this.objArray[i].active = false;

            if (Number(i) == idx) {
              this.objArray[i].active = true;
            }
          }
        };

        return TileRail;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "railNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "objNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "objArray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DecoMaster.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts', './VectorList.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, ToggleComponent, Vec3, Slider, Sprite, ImageAsset, SpriteFrame, Texture2D, Component, AssetManager, VectorList;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ToggleComponent = module.ToggleComponent;
      Vec3 = module.Vec3;
      Slider = module.Slider;
      Sprite = module.Sprite;
      ImageAsset = module.ImageAsset;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }, function (module) {
      VectorList = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp;

      cclegacy._RF.push({}, "9ff0fEYJWJBWq9HTuPKqdt9", "DecoMaster", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DecoMaster = exports('default', (_dec = ccclass("DecoMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DecoMaster, _Component);

        function DecoMaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "kindNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "placeNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "anchorNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pointNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "opacityNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stackToggleNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stackSizeNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objectIdxArray", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objectSizeNode", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "objectPointNode", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "imgNode", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "shadowNode", _descriptor12, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "selectedIdx", -1);

          _defineProperty(_assertThisInitialized(_this), "sceneScript", null);

          _defineProperty(_assertThisInitialized(_this), "decoData", null);

          return _this;
        }

        var _proto = DecoMaster.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var kindScript, placeScript, anchorScript, pointScript, stackSizeScript;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = AssetManager.getInstance();
                    kindScript = this.kindNode.getComponent("ListView"); // console.log(this.kindNode);

                    kindScript.setDataList([{
                      tag: "00",
                      label: "미설정"
                    }, {
                      tag: "01",
                      label: "바닥타일"
                    }, {
                      tag: "02",
                      label: "벽지"
                    }, {
                      tag: "03",
                      label: "세입자"
                    }, {
                      tag: "04",
                      label: "테이블"
                    }, {
                      tag: "05",
                      label: "의자"
                    }, {
                      tag: "06",
                      label: "창문"
                    }, {
                      tag: "07",
                      label: "카펫"
                    }, {
                      tag: "08",
                      label: "소품"
                    }, {
                      tag: "09",
                      label: "벽장식"
                    }, {
                      tag: "10",
                      label: "기타가구"
                    }]);

                    kindScript.callback = function (idx) {
                      if (!_this2.decoData) {
                        return false;
                      }

                      _this2.setDecoData("decoType", idx);

                      return true;
                    };

                    placeScript = this.placeNode.getComponent("ListView");
                    placeScript.setDataList([{
                      tag: "00",
                      label: "미설정"
                    }, {
                      tag: "01",
                      label: "바닥"
                    }, {
                      tag: "02",
                      label: "좌측 벽"
                    }, {
                      tag: "03",
                      label: "우측 벽"
                    }, {
                      tag: "04",
                      label: "양측 벽"
                    }]);

                    placeScript.callback = function (idx) {
                      _this2.setDecoData("placeType", idx);
                    };

                    anchorScript = this.anchorNode.getComponent("ListView");
                    anchorScript.setDataList([{
                      tag: "00",
                      label: "중앙"
                    }, {
                      tag: "01",
                      label: "아래쪽"
                    }, {
                      tag: "02",
                      label: "왼쪽"
                    }, {
                      tag: "03",
                      label: "오른쪽"
                    }]);

                    anchorScript.callback = function (idx) {
                      _this2.setDecoData("anchorType", idx);
                    };

                    pointScript = this.pointNode.getComponent("VectorList");

                    pointScript.callback = function (vec) {
                      _this2.setDecoData("decoPoint", vec);
                    };

                    stackSizeScript = this.stackSizeNode.getComponent("VectorList");

                    stackSizeScript.callback = function (vec) {
                      _this2.setDecoData("stackSize", vec);
                    }; /////////////////


                    this.objectSizeNode.getComponent(VectorList).callback = function (vec) {
                      _this2.setObjectData("objectSize", vec);
                    };

                    this.objectPointNode.getComponent(VectorList).callback = function (vec) {
                      _this2.setObjectData("objectPoint", vec);
                    };

                    this.objectPointNode.getComponent(VectorList).minNum = -18;

                  case 17:
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

        _proto.update = function update(dt) {
          if (this.decoData) {
            var kindScript = this.kindNode.getComponent("ListView");
            kindScript.setLabel(this.decoData.decoType);
            var placeScript = this.placeNode.getComponent("ListView");
            placeScript.setLabel(this.decoData.placeType);
            var anchorScript = this.anchorNode.getComponent("ListView");
            anchorScript.setLabel(this.decoData.anchorType);
            var pointScript = this.pointNode.getComponent("VectorList");
            pointScript.setLabel(this.decoData.decoPoint);
            var stackableScript = this.stackToggleNode.getComponent(ToggleComponent);
            stackableScript.isChecked = this.decoData.stackable; // this.opacityNode.getComponent(Slider).progress = this.decoData.opacity;

            this.objectSizeNode.getComponent(VectorList).setLabel(this.decoData.objectArray[this.decoData.selectedDeco].objectSize);
            this.objectPointNode.getComponent(VectorList).setLabel(this.decoData.objectArray[this.decoData.selectedDeco].objectPoint); // this.objectPointNode.active = this.decoData.selectedDeco != 0;

            for (var i in this.objectIdxArray) {
              var buttonNode = this.objectIdxArray[i];

              if (Number(i) == this.decoData.selectedDeco) {
                buttonNode.setScale(new Vec3(1.0, 1.0, 1.0));
              } else {
                buttonNode.setScale(new Vec3(0.75, 0.75, 0.75));
              }
            }

            if (this.decoData.selectedDeco != this.selectedIdx) {
              this.selectedIdx = this.decoData.selectedDeco;
              this.updateObjectImg();
            }
          }
        };

        _proto.setDecoData = function setDecoData(kind, obj) {
          if (this.sceneScript && this.decoData) {
            this.sceneScript.setDecoData(kind, obj);
          }
        };

        _proto.setObjectData = function setObjectData(kind, obj) {
          // console.log(kind, obj);
          if (this.sceneScript && this.decoData) {
            this.sceneScript.setObjectData(kind, obj);
          }
        };

        _proto.resetDecoObject = function resetDecoObject() {
          this.selectedIdx = -1;
          this.decoData = null;
          var kindScript = this.kindNode.getComponent("ListView");
          kindScript.resetLabel();
          var placeScript = this.placeNode.getComponent("ListView");
          placeScript.resetLabel();
          var anchorScript = this.anchorNode.getComponent("ListView");
          anchorScript.resetLabel();
          var pointScript = this.pointNode.getComponent("VectorList");
          pointScript.resetLabel();
          this.opacityNode.getComponent(Slider).progress = 1.0; // console.log(this.decoData);

          this.objectSizeNode.getComponent(VectorList).resetLabel();
          this.objectPointNode.getComponent(VectorList).resetLabel();
        };

        _proto.eraseClicked = function eraseClicked() {
          if (this.sceneScript && this.decoData) {
            this.sceneScript.eraseDeco();
          }
        };

        _proto.sliderEvent = function sliderEvent(node, kind) {
          if (kind == "opacity") {
            this.setDecoData("opacity", {
              tag: this.opacityNode.getComponent(Slider).progress
            });
          }
        };

        _proto.toggleEvent = function toggleEvent(node, kind) {
          this.setDecoData("stackable", {
            tag: node.isChecked
          });
        };

        _proto.selectDecoIdx = function selectDecoIdx(node, idx) {
          if (this.decoData) {
            this.sceneScript.setSelectedDeco(Number(idx));
          }
        };

        _proto.updateObjectImg = function updateObjectImg() {
          if (!this.decoData) {
            this.imgNode.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
            return;
          }

          if (this.decoData.objectArray[this.selectedIdx].spriteFrame) {
            this.imgNode.getComponent(Sprite).spriteFrame = this.decoData.objectArray[this.selectedIdx].spriteFrame;
          } else {
            this.imgNode.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
          }

          if (this.decoData.objectArray[this.selectedIdx].shadowFrame) {
            this.shadowNode.getComponent(Sprite).spriteFrame = this.decoData.objectArray[this.selectedIdx].shadowFrame;
          } else {
            this.shadowNode.getComponent(Sprite).spriteFrame = this.assetManager.assetDic["Deco/default_sprite"];
          }
        };

        _proto.replaceImg = function replaceImg(kind, imgObject) {
          // console.log(kind, imgObject);
          var imgAsset = new ImageAsset(imgObject.img);
          var spriteFrame = new SpriteFrame();
          var tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex;

          if (kind == 0) {
            this.imgNode.getComponent(Sprite).spriteFrame = spriteFrame;
          } else if (kind == 1) {
            this.shadowNode.getComponent(Sprite).spriteFrame = spriteFrame;
          } // this.sceneScript.replaceObjImage(kind, imgObject);

        };

        return DecoMaster;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "kindNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "placeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "anchorNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "opacityNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "stackToggleNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stackSizeNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "objectIdxArray", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "objectSizeNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "objectPointNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "imgNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "shadowNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, instantiate, Component, AssetManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "a9df4z7w/pKdqiU+JMn5qvV", "SlotManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SlotManager = exports('default', (_dec = ccclass("SlotManager"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
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
          this.assetManager = AssetManager.getInstance();
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DecoAlert.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Label, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "a9f2aVkDktKW4dbXu4mxVYT", "DecoAlert", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DecoAlert = exports('default', (_dec = ccclass("DecoAlert"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DecoAlert, _Component);

        function DecoAlert() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "titleNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mainNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "yesNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "noNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "editLabelNode", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "yesEvent", null);

          _defineProperty(_assertThisInitialized(_this), "noEvent", null);

          _defineProperty(_assertThisInitialized(_this), "progress", false);

          return _this;
        }

        var _proto = DecoAlert.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onLoad() {
            return _onLoad.apply(this, arguments);
          }

          return onLoad;
        }();

        _proto.setTitleLabel = function setTitleLabel(string) {
          this.titleNode.getComponent(Label).string = string;
        };

        _proto.setMainLabel = function setMainLabel(string) {
          this.mainNode.getComponent(Label).string = string;
        };

        _proto.buttonActive = function buttonActive(bool) {
          this.yesNode.active = bool;
          this.noNode.active = bool;
        };

        _proto.noButtonActive = function noButtonActive(bool) {
          if (bool) {
            this.noNode.setPosition(new Vec3(0, this.noNode.getPosition().y, 1));
          } else {
            this.noNode.setPosition(new Vec3(-130, this.noNode.getPosition().y, 1));
          }

          this.noNode.active = bool;
        };

        _proto.editNodeActive = function editNodeActive(bool) {
          this.editLabelNode.active = bool;
        };

        _proto.removeAlert = function removeAlert() {
          this.node.parent.removeFromParent();
        };

        _proto.onYesButtonClicked = function onYesButtonClicked() {
          if (this.yesEvent) {
            this.yesEvent();
          }
        };

        _proto.onNoButtonClicked = function onNoButtonClicked() {
          if (this.noEvent) {
            this.noEvent();
          } else {
            this.removeAlert();
          }
        };

        return DecoAlert;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yesNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "noNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "editLabelNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotMaster.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, UITransform, size, instantiate, Component, AssetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      size = module.size;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "ab0ac+x/FpIm6Jn4/Yf2djp", "SlotMaster", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SlotMaster = exports('default', (_dec = ccclass("SlotMaster"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
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
          this.assetManager = AssetManager.getInstance();
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomBlock.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts', './CCUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, Vec3, UIOpacityComponent, Tween, tween, Component, AssetManager, CCUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      UIOpacityComponent = module.UIOpacityComponent;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }, function (module) {
      CCUtils = module.CCUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "ac1baV9SEdK7YRIAVDjLQ3E", "RoomBlock", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RoomBlock = exports('default', (_dec = ccclass("RoomBlock"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomBlock, _Component);

        function RoomBlock() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "blockObject", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "outerObject", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "roomBlockArray", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "roomLabelArray", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "roomType", null);

          _defineProperty(_assertThisInitialized(_this), "blockData", {
            placeable: false,
            occupied: false
          });

          _defineProperty(_assertThisInitialized(_this), "blockPosition", new Vec3(0, 0, 0));

          return _this;
        }

        var _proto = RoomBlock.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = AssetManager.getInstance();
                    this.outerObject.active = false;
                    this.outerObject.getComponent(UIOpacityComponent).opacity = 0;
                    this.deActivateBlock();

                  case 4:
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

        _proto.setRoomBlockType = function setRoomBlockType(roomType) {
          this.roomType = roomType;
          this.roomBlockArray[0].active = false;
          this.roomBlockArray[1].active = false;
          this.roomBlockArray[2].active = false;
          this.roomBlockArray[3].active = false;
          this.roomBlockArray[4].active = false;
          this.roomBlockArray[5].active = false;

          if (roomType !== 99) {
            this.blockData.placeable = true;
          }

          if (roomType === 0) {
            // default
            this.roomBlockArray[3].active = true;
            this.roomBlockArray[4].active = true;
            this.roomBlockArray[5].active = true;
          } else if (roomType === 1) {
            // only ground
            this.roomBlockArray[0].active = true;
          } else if (roomType === 2) {
            // only left
            this.roomBlockArray[1].active = true;
          } else if (roomType === 3) {
            // only right
            this.roomBlockArray[2].active = true;
          } else if (roomType === 4) {
            // only left & ground
            this.roomBlockArray[0].active = true;
            this.roomBlockArray[1].active = true;
          } else if (roomType === 5) {
            // only right & ground
            this.roomBlockArray[0].active = true;
            this.roomBlockArray[2].active = true;
          } else if (roomType === 6) {
            // only left & right & ground
            this.roomBlockArray[0].active = true;
            this.roomBlockArray[1].active = true;
            this.roomBlockArray[2].active = true;
          } else if (roomType === 7) {
            // only left & right
            this.roomBlockArray[1].active = true;
            this.roomBlockArray[2].active = true;
          }
        };

        _proto.activateBlock = function activateBlock() {
          var _this2 = this;

          this.outerObject.getComponent(UIOpacityComponent).opacity = 255;
          this.outerObject.active = true;
          Tween.stopAllByTag(108, this.outerObject);
          tween(this.outerObject).tag(108).call(function () {
            CCUtils.fadeIn(_this2.outerObject, 0.2);
          }).delay(1.0).call(function () {
            CCUtils.fadeOut(_this2.outerObject, 1);
          }).start();
        };

        _proto.deActivateBlock = function deActivateBlock() {
          var _this3 = this;

          this.outerObject.active = true;
          Tween.stopAllByTag(108, this.outerObject);
          tween(this.outerObject).call(function () {
            CCUtils.fadeOut(_this3.outerObject, 0.01);
          }).start();
        };

        return RoomBlock;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockObject", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "outerObject", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roomBlockArray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "roomLabelArray", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TileNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "b5cc3DlyG5I25dtR+FmKdRd", "TileNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = TileNode
       * DateTime = Tue Mar 08 2022 10:41:33 GMT+0900 (대한민국 표준시)
       * Author = apeshub
       * FileBasename = TileNode.ts
       * FileBasenameNoExtension = TileNode
       * URL = db://assets/scripts/Scenes/TileNode.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var TileNode = exports('TileNode', (_dec = ccclass("TileNode"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TileNode, _Component);

        function TileNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "row", 0);

          _defineProperty(_assertThisInitialized(_this), "column", 0);

          _defineProperty(_assertThisInitialized(_this), "occupied", false);

          return _this;
        }

        var _proto = TileNode.prototype;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return TileNode;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotLine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, UITransform, instantiate, v3, tween, Tween, Vec3, Component, AssetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "dc9efLZAf5DbZtQdjwlLlpo", "SlotLine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SlotLine = exports('default', (_dec = ccclass("SlotLine"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
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
          this.assetManager = AssetManager.getInstance();
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
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Helloworld.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "e1b90/rohdEk4SdmmEZANaD", "Helloworld", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Helloworld = exports('default', (_dec = ccclass('Helloworld'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Helloworld, _Component);

        function Helloworld() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "label", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "text", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Helloworld.prototype;

        _proto.start = function start() {
          // // init logic
          this.label.string = this.text;
        };

        return Helloworld;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "text", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'hello';
        }
      })), _class2)) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class Helloworld extends cc.Component {
      // 
      //     @property(cc.Label)
      //     label: cc.Label = null;
      // 
      //     @property
      //     text: string = 'hello';
      // 
      //     start () {
      //         // init logic
      //         this.label.string = this.text;
      //     }
      // }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseScene.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ModalLayer.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, macro, view, ResolutionPolicy, Component, ModalLayer;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      macro = module.macro;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      Component = module.Component;
    }, function (module) {
      ModalLayer = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "e53a9jH7wBE3p6QSVMBK2Qt", "BaseScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseScene = exports('default', (_dec = ccclass("BaseScene"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseScene, _Component);

        function BaseScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "blackLayer", null);

          _defineProperty(_assertThisInitialized(_this), "modalArray", []);

          _defineProperty(_assertThisInitialized(_this), "winSize", null);

          return _this;
        }

        var _proto = BaseScene.prototype;

        _proto.onLoad = function onLoad() {
          macro.ENABLE_MULTI_TOUCH = false;
          this.setResolution();
        };

        _proto.setWideResolution = function setWideResolution() {
          var winSize = view.getCanvasSize();
          view.setFrameSize(1920 * 0.75, 1080 * 0.75);
          view.setDesignResolutionSize(3240, 1920, ResolutionPolicy.FIXED_HEIGHT);
          view.resizeWithBrowserSize(true);
          this.winSize = view.getDesignResolutionSize(); // console.log("winsize : ", this.winSize);
        };

        _proto.setResolution = function setResolution() {
          var winSize = view.getCanvasSize();
          var heightSize = winSize.height * 1080 / winSize.width;
          view.setDesignResolutionSize(1080, heightSize, ResolutionPolicy.FIXED_WIDTH);
          view.resizeWithBrowserSize(true);
          this.winSize = view.getDesignResolutionSize(); // console.log("winsize : ", this.winSize);
        };

        _proto.removeNode = function removeNode(node) {
          node.removeFromParent(true);
          node.destroy();
        };

        _proto.getModalLayer = function getModalLayer() {
          return this.modalArray[this.modalArray.length - 1];
        };

        _proto.removeModal = function removeModal() {
          if (this.modalArray.length > 0) {
            var lastModal = this.modalArray[this.modalArray.length - 1];
            this.modalArray.splice(this.modalArray.length - 1, 1);
            lastModal.removeFromParent();
          }
        };

        _proto.setModalLayer = function setModalLayer() {
          // /////////////////////////////////
          var zOrder = 80 + this.modalArray.length;
          var newLayer = new ModalLayer().getModalLayer(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        };

        _proto.setModalColor = function setModalColor() {
          // /////////////////////////////////
          var zOrder = 80 + this.modalArray.length;
          var newLayer = new ModalLayer().getModalColor(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        };

        _proto.setModalBlack = function setModalBlack() {
          // /////////////////////////////////
          var zOrder = 90 + this.modalArray.length;
          var newLayer = new ModalLayer().getModalBlack(this.winSize);
          newLayer.setSiblingIndex(zOrder);
          this.node.addChild(newLayer);
          this.modalArray.push(newLayer); // /////////////////////////////////

          return newLayer;
        };

        return BaseScene;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ImageNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f0ea0+WL0lINrf0dgX2P6Gt", "ImageNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ImageNode = exports('default', (_dec = ccclass("ImageNode"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ImageNode, _Component);

        function ImageNode() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ImageNode.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onLoad() {
            return _onLoad.apply(this, arguments);
          }

          return onLoad;
        }();

        _proto.initWithURL = function initWithURL(url) {
          console.log(url);
        };

        return ImageNode;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AssetManager.ts', './DiceIcon.ts', './DiceMaster.ts', './CCUtils.ts', './Module.ts', './FileTitle.ts', './FileMaster.ts', './DiceManager.ts', './SlotIcon.ts', './ListView.ts', './FileList.ts', './RoomTemplate.ts', './ModalLayer.ts', './BaseScene.ts', './BeadNode.ts', './TileNode.ts', './PinballScene.ts', './ObstacleNode.ts', './DecoTypes.ts', './BaseRoom.ts', './VectorList.ts', './TileRail.ts', './DecoMaster.ts', './SlotManager.ts', './DecoAlert.ts', './SlotMaster.ts', './RoomBlock.ts', './SlotLine.ts', './Helloworld.ts', './ImageNode.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});