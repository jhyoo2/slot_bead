import {
  _decorator,
  Component,
  SpriteAtlas,
  Prefab,
  SpriteFrame,
  JsonAsset,
  AudioClip,
  resources,
  assetManager,
  ImageAsset,
  Texture2D,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("AssetManager")
export default class AssetManager extends Component {
  static instance = null;
  assetDic = {};
  atlasDic = {};
  prefabDic = {};
  spineDic = {};
  musicDic = {};
  textDic = {};
  resourceCB = null;
  assetArray = [
    { path: "Texture/Slot", type: SpriteFrame, dict: this.assetDic },
    { path: "Texture/RoomScene", type: SpriteFrame, dict: this.assetDic },
    { path: "Texture/DiceScene", type: SpriteFrame, dict: this.assetDic },
    { path: "Texture/Deco", type: SpriteFrame, dict: this.assetDic },
    { path: "Prefab", type: Prefab, dict: this.prefabDic },
  ];
  public static getInstance() {
    // ////////////////////////
    var myInstance = AssetManager.instance;
    if (!myInstance) {
      myInstance = new AssetManager();
      AssetManager.instance = myInstance;
    }
    // ////////////////////////
    return myInstance;
  }
  async loadFolder(folderName, type, dict, callback) {
    return new Promise((resolve, reject) => {
      resources.loadDir(folderName, type, (err, assets: any) => {
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
        await this.loadFolder(
          resultArray[resultIdx].path,
          resultArray[resultIdx].type,
          resultArray[resultIdx].dict,
          (folderName) => {
            // // console.log(folderName);
            resultIdx++;
          }
        );
        if (resultIdx <= resultArray.length) {
          self.assetLoaded(resultIdx, resultArray.length);
        }
        // // console.log(this);
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
  loadImgFromURL(url: string) {
    return new Promise((resolve, reject) => {
      const self = this;
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        let reader = new FileReader();
        reader.onloadend = async () => {
          const imgResult = (await self.readImgAsync(reader.result)) as any;
          const imgAsset = new ImageAsset(imgResult);
          const spriteFrame = new SpriteFrame();
          const tex = new Texture2D();
          tex.image = imgAsset;
          spriteFrame.texture = tex;
          resolve({
            spriteFrame: spriteFrame,
            imgFile: imgResult,
            readerResult: reader.result,
          });
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.send();
    });
  }
  // // update (dt) {},
}
