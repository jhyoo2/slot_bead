System.register("chunks:///_virtual/DiceMaster.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, Node, UITransform, instantiate, Sprite, Vec3, tween, Label, Component, AssetManager;

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
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      tween = module.tween;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AssetManager = module.default;
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

          _defineProperty(_assertThisInitialized(_this), "playerPos", 0);

          return _this;
        }

        var _proto = DiceMaster.prototype;

        _proto.initDiceMaster = function initDiceMaster(diceData) {
          this.assetManager = AssetManager.getInstance();
          this.diceData = diceData;
          this.backNode.getComponent(UITransform).setContentSize(diceData.diceSize);

          for (var i = 0; i < diceData.iconNum; i++) {
            var iconObject = instantiate(this.assetManager.prefabDic["DiceIcon"]);
            this.node.insertChild(iconObject, 10);
            iconObject.setPosition(this.getIconPlace(Math.PI * i * 2 / 13));
            var iconScript = iconObject.getComponent("DiceIcon");
            var iconKind = Math.floor(Math.random() * 5) + 1;
            var backKind = Math.floor(Math.random() * 3) + 1;
            iconScript.initIcon(iconKind, backKind, this.diceData);
            iconScript.updateNumber(i);
            this.iconArray.push(iconObject); // console.log(this.getIconPlace((Math.PI * i) / 13));
          }

          var newPlayer = new Node();
          newPlayer.setPosition(this.iconArray[0].getPosition());
          var newSprite = newPlayer.addComponent(Sprite);
          newSprite.spriteFrame = this.assetManager.assetDic["Slot/pig"];
          this.node.insertChild(newPlayer, 30);
          this.player = newPlayer;
        };

        _proto.getIconPlace = function getIconPlace(radian) {
          return new Vec3(this.diceData.radius * Math.sin(radian), this.diceData.radius * Math.cos(radian), 0);
        };

        _proto.movePlayer = function movePlayer(number) {
          var _this2 = this;

          this.playerPos = (this.playerPos + number) % 13;
          var iconArray = [];

          for (var i = 0; i < 13; i++) {
            for (var j in this.iconArray) {
              var iconObject = this.iconArray[j];
              var iconScript = iconObject.getComponent("DiceIcon");
              if (iconScript.iconData.diceIdx) if (String(i) == iconScript.iconData.diceIdx) {
                iconArray.push(iconObject); // console.log(i, iconScript.iconData.diceIdx, "in ");

                break;
              }
            }
          } // console.log(iconArray);


          var myTween = tween(this.player).delay(0.0);

          var _loop = function _loop() {
            var myIdx = i;
            var iconScript = iconArray[myIdx - 1].getComponent("DiceIcon"); // console.log(iconScript.iconData.diceIdx);

            myTween.to(0.25, {
              position: iconArray[i].getPosition()
            }).call(function () {
              var iconKind = Math.floor(Math.random() * 5) + 1;
              iconScript.changeIcon(iconKind);
            });
          };

          for (var i = 1; i <= number; i++) {
            _loop();
          }

          myTween.call(function () {
            for (var j in _this2.iconArray) {
              var _iconObject = _this2.iconArray[j];

              var _iconScript = _iconObject.getComponent("DiceIcon");

              var diceIdx = Number(_iconScript.iconData.diceIdx) - number;

              if (diceIdx < 0) {
                diceIdx += 13;
              } // console.log(number, iconScript.iconData.diceIdx, diceIdx);


              _iconScript.updateNumber(diceIdx);
            }

            _this2.diceManager.getDiceResult(number);
          });
          myTween.start();
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
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function rollWithNetwork() {
            return _rollWithNetwork.apply(this, arguments);
          }

          return rollWithNetwork;
        }();

        _proto.rollWithRandom = function rollWithRandom() {
          var _this3 = this;

          this.diceNumbers.first = Math.floor(Math.random() * 6) + 1;
          this.diceNumbers.second = Math.floor(Math.random() * 6) + 1;
          var labelNode = new Node();
          labelNode.setPosition(0, -700, 0);
          this.node.insertChild(labelNode, 30);
          var label = labelNode.addComponent(Label);
          label.fontSize = 100;
          label.lineHeight = 100;
          label.string = this.diceNumbers.first + " | " + this.diceNumbers.second;
          tween(labelNode).to(0.5, {
            scale: new Vec3(1.5, 1.5, 1)
          }).to(0.5, {
            scale: new Vec3(1.0, 1.0, 1)
          }).call(function () {
            // this.movePlayer(1);
            _this3.movePlayer(_this3.diceNumbers.first + _this3.diceNumbers.second);
          }).delay(2.0).call(function () {
            labelNode.removeFromParent();
          }).start();
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {};

        _proto.getSlotResult = function getSlotResult(lineIdx, result) {};

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
          diceObject.setPosition(0, 200, 0);
          var diceScript = diceObject.getComponent("DiceMaster");
          diceScript.diceManager = this;
          diceScript.initDiceMaster(diceData);
          this.diceObject = diceObject;
          return diceObject;
        };

        _proto.rollWithNetwork = function rollWithNetwork() {
          if (this.rolling) return;
          this.rolling = true;
          var slotScript = this.diceObject.getComponent("DiceMaster");
          slotScript.rollWithNetwork();
        };

        _proto.rollWithRandom = function rollWithRandom() {
          if (this.rolling) return;
          this.rolling = true;
          var slotScript = this.diceObject.getComponent("DiceMaster");
          slotScript.rollWithRandom();
        };

        _proto.rollWithFixed = function rollWithFixed(iconDatas) {
          if (this.rolling) return;
          this.rolling = true;
          var slotScript = this.diceObject.getComponent("DiceMaster");
          slotScript.rollWithFixed(iconDatas);
        };

        _proto.getDiceResult = function getDiceResult(diceResult) {
          this.rolling = false; // // console.log(slotResult);
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

System.register("chunks:///_virtual/DiceIcon.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts'], function (exports) {
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
          iconSprite.spriteFrame = this.assetManager.assetDic["Slot/candy_" + iconIdx + "_0"];
          var backSprite = this.backNode.getComponent(Sprite);
          backSprite.spriteFrame = this.assetManager.assetDic["Slot/back" + backKind];
          this.numberNode.getComponent(Label).string = String(this.iconData.diceIdx);
        };

        _proto.changeIcon = function changeIcon(iconIdx) {
          var iconSprite = this.iconNode.getComponent(Sprite);
          iconSprite.spriteFrame = this.assetManager.assetDic["Slot/candy_" + iconIdx + "_0"];
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

System.register("chunks:///_virtual/DiceScene.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts', './DiceManager.ts', './BaseScene.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, director, size, AssetManager, DiceManager, BaseScene;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      size = module.size;
    }, function (module) {
      AssetManager = module.default;
    }, function (module) {
      DiceManager = module.default;
    }, function (module) {
      BaseScene = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "5aeb0kBwlZFNJJnAGB89LT3", "DiceScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DiceScene = exports('default', (_dec = ccclass("DiceScene"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(DiceScene, _BaseScene);

        function DiceScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _defineProperty(_assertThisInitialized(_this), "diceManager", null);

          return _this;
        }

        var _proto = DiceScene.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var assetResult, diceManager, slotObject;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = AssetManager.getInstance();
                    _context.next = 3;
                    return this.assetManager.loadAssets();

                  case 3:
                    assetResult = _context.sent; // console.log(this.assetManager);

                    diceManager = new DiceManager();
                    slotObject = diceManager.initDiceManager({
                      diceSize: size(700, 700),
                      radius: 450,
                      iconNum: 13,
                      iconSize: size(175, 175)
                    });
                    this.diceManager = diceManager;
                    this.node.insertChild(slotObject, 10);

                  case 8:
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
          // this.diceManager.rollWithNetwork();
          this.diceManager.rollWithRandom(); // this.diceManager.rollWithFixed([
          //   { iconKind: 2, backKind: 1 },
          //   { iconKind: 2, backKind: 2 },
          //   { iconKind: 2, backKind: 3 },
          // ]);
        };

        _proto.gotoMain = function gotoMain() {
          director.loadScene("MainScene");
        };

        return DiceScene;
      }(BaseScene), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AssetManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, SpriteFrame, Prefab, Component, resources;

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
        }() // // update (dt) {},
        ;

        return AssetManager;
      }(Component), _defineProperty(_class2, "instance", null), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainScene.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts', './BaseScene.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _asyncToGenerator, cclegacy, _decorator, Node, director, AssetManager, BaseScene;

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
      director = module.director;
    }, function (module) {
      AssetManager = module.default;
    }, function (module) {
      BaseScene = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "a54ccUsCy5JF7nq5qnRP3yg", "MainScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainScene = exports('MainScene', (_dec = ccclass("MainScene"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(MainScene, _BaseScene);

        function MainScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "assetManager", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "slotButton", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "diceButton", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MainScene.prototype;

        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var assetResult;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.assetManager = AssetManager.getInstance();
                    _context.next = 3;
                    return this.assetManager.loadAssets();

                  case 3:
                    assetResult = _context.sent;
                    this.slotButton.active = true;
                    this.diceButton.active = true;

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

        _proto.slotClicked = function slotClicked() {
          director.loadScene("SlotScene");
        };

        _proto.diceClicked = function diceClicked() {
          director.loadScene("DiceScene");
        };

        return MainScene;
      }(BaseScene), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slotButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "diceButton", [_dec3], {
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

System.register("chunks:///_virtual/SlotScene.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AssetManager.ts', './BaseScene.ts', './SlotManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, director, size, AssetManager, BaseScene, SlotManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      size = module.size;
    }, function (module) {
      AssetManager = module.default;
    }, function (module) {
      BaseScene = module.default;
    }, function (module) {
      SlotManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "c676fmhxXdA+KZLG18AgZGb", "SlotScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SlotScene = exports('default', (_dec = ccclass("SlotScene"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseScene) {
        _inheritsLoose(SlotScene, _BaseScene);

        function SlotScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseScene.call.apply(_BaseScene, [this].concat(args)) || this;

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
                    this.assetManager = AssetManager.getInstance();
                    _context.next = 3;
                    return this.assetManager.loadAssets();

                  case 3:
                    assetResult = _context.sent; // console.log(this.assetManager);

                    slotManager = new SlotManager();
                    slotObject = slotManager.initSlotManager({
                      rowNum: 1,
                      columnNum: 3,
                      slotSize: size(700, 500)
                    });
                    this.slotManager = slotManager;
                    this.node.insertChild(slotObject, 10);

                  case 8:
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
      }(BaseScene), _temp)) || _class));

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

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, view, ResolutionPolicy, Component, ModalLayer;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
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
          this.setResolution();
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

System.register("chunks:///_virtual/main", ['./AssetManager.ts', './DiceMaster.ts', './DiceManager.ts', './SlotIcon.ts', './DiceIcon.ts', './ModalLayer.ts', './BaseScene.ts', './DiceScene.ts', './MainScene.ts', './SlotManager.ts', './SlotMaster.ts', './SlotScene.ts', './SlotLine.ts', './Helloworld.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
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