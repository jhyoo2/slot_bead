System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, SpriteFrame, resources, ImageAsset, Texture2D, _dec, _class, _class2, _temp, _crd, ccclass, property, AssetManager;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", AssetManager = (_dec = ccclass("AssetManager"), _dec(_class = (_temp = _class2 = class AssetManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "assetDic", {});

          _defineProperty(this, "atlasDic", {});

          _defineProperty(this, "prefabDic", {});

          _defineProperty(this, "spineDic", {});

          _defineProperty(this, "musicDic", {});

          _defineProperty(this, "textDic", {});

          _defineProperty(this, "resourceCB", null);

          _defineProperty(this, "assetArray", [{
            path: "Texture/Slot",
            type: SpriteFrame,
            dict: this.assetDic
          }, {
            path: "Texture/RoomScene",
            type: SpriteFrame,
            dict: this.assetDic
          }, {
            path: "Texture/DiceScene",
            type: SpriteFrame,
            dict: this.assetDic
          }, {
            path: "Texture/Deco",
            type: SpriteFrame,
            dict: this.assetDic
          }, {
            path: "Prefab",
            type: Prefab,
            dict: this.prefabDic
          }]);
        }

        static getInstance() {
          // ////////////////////////
          var myInstance = AssetManager.instance;

          if (!myInstance) {
            myInstance = new AssetManager();
            AssetManager.instance = myInstance;
          } // ////////////////////////


          return myInstance;
        }

        async loadFolder(folderName, type, dict, callback) {
          return new Promise((resolve, reject) => {
            resources.loadDir(folderName, type, (err, assets) => {
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
          });
        }

        assetLoaded(idx, resouceLength) {
          // // console.log("path : ", path);
          if (this.resourceCB) {
            this.resourceCB(idx, resouceLength);
          }
        }

        async loadAssets() {
          var self = this;
          var resultArray = this.assetArray;
          var resultIdx = 0;
          return new Promise(async (resolve, reject) => {
            while (1) {
              await this.loadFolder(resultArray[resultIdx].path, resultArray[resultIdx].type, resultArray[resultIdx].dict, folderName => {
                // // console.log(folderName);
                resultIdx++;
              });

              if (resultIdx <= resultArray.length) {
                self.assetLoaded(resultIdx, resultArray.length);
              } // // console.log(this);


              if (resultIdx === resultArray.length) {
                //   console.log("resource load complete");
                resolve("complete");
                break;
              }
            }
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

        loadImgFromURL(url) {
          return new Promise((resolve, reject) => {
            const self = this;
            let xhr = new XMLHttpRequest();

            xhr.onload = () => {
              let reader = new FileReader();

              reader.onloadend = async () => {
                const imgResult = await self.readImgAsync(reader.result);
                const imgAsset = new ImageAsset(imgResult);
                const spriteFrame = new SpriteFrame();
                const tex = new Texture2D();
                tex.image = imgAsset;
                spriteFrame.texture = tex;
                resolve({
                  spriteFrame: spriteFrame,
                  imgFile: imgResult,
                  readerResult: reader.result
                });
              };

              reader.readAsDataURL(xhr.response);
            };

            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.send();
          });
        } // // update (dt) {},


      }, _defineProperty(_class2, "instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AssetManager.js.map