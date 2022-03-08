System.register(["cc"], function (_export, _context5) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, SpriteFrame, resources, ImageAsset, Texture2D, _dec, _class, _class2, _temp, _crd, ccclass, property, AssetManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      ImageAsset = _cc.ImageAsset;
      Texture2D = _cc.Texture2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "612486b2mFMV7WApTT0CH6i", "AssetManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", AssetManager = (_dec = ccclass("AssetManager"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
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
                                if (!1) {
                                  _context2.next = 9;
                                  break;
                                }

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
                                }

                                //   console.log("resource load complete");
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AssetManager.js.map