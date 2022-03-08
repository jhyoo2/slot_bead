import {
  _decorator,
  Node,
  Vec3,
  ImageAsset,
  Sprite,
  SpriteFrame,
  Texture2D,
  UITransform,
  Size,
  Component,
  UIOpacityComponent,
  ScrollView,
  UITransformComponent,
  instantiate,
} from "cc";
import { RoomScene } from "../../Scenes/RoomScene";
import AssetManager from "../../DataManager/AssetManager";
import { Deco, FileObject } from "../../Prefabs/Deco/DecoTypes";
import { uuidv4 } from "../../Common/Module";
import FileTitle from "./FileTitle";
const { ccclass, property } = _decorator;

@ccclass("FileMaster")
export default class FileMaster extends Component {
  assetManager: AssetManager = null;
  sceneScript: RoomScene = null;
  decoDic: { [name: string]: Deco } = {};
  // (1) file load element
  inputBox = null;
  inputBoxId = "_filebox_container_";
  containerId = "_filebox_input_";

  // (2) object element
  @property(Node)
  contentNode: Node[] = [];
  objectDic: { [name: string]: FileObject } = {};

  // (3) touchEvent
  @property(Node)
  scrollNode: Node[] = [];
  activeObj = null;

  // (4) Load Deco
  @property(Node)
  decoContentNode: Node = null;
  @property(Node)
  fileTitles: Node[] = [];
  activeFileTitle = null;

  // (5) Make Tab Function
  selectedTab = 0;
  @property(Node)
  idxButton: Node[] = [];

  async onLoad() {
    this.assetManager = AssetManager.getInstance();
    this.initFileBox();
    this.initFileTitle();
    this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, true);
    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
    this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, true);
    // console.log(String("hello%d", 1));

    this.idxButton[0].setScale(new Vec3(1.0, 1.0, 1.0));
    this.idxButton[1].setScale(new Vec3(0.75, 0.75, 0.75));
    this.idxButton[2].setScale(new Vec3(0.75, 0.75, 0.75));
  }

  //file load function
  initFileBox() {
    if (!this.inputBox) {
      let container = document.getElementById(this.containerId);
      container = document.createElement("div");
      document.body.appendChild(container);
      container.id = this.containerId;
      container.style.setProperty("visibility", "hidden");
      let inputBox = document.createElement("input") as HTMLInputElement;
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
      var readerResult = (await this.readFileAsync(file)) as string;
      const mimeType = readerResult.match(
        /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/
      )[1];
      if (mimeType.indexOf("image") < 0) {
        continue;
      }
      var imgFile = (await this.readImgAsync(readerResult)) as any;
      const imgNode = this.getImgNode(imgFile);
      // save image
      // this.sendImage("concept", readerResult);

      //set ObjectData
      const object: FileObject = {} as FileObject;
      object.id = uuidv4();
      object.mimeType = mimeType;
      object.file = readerResult;
      object.img = imgFile;
      object.node = imgNode;
      object.tabIdx = this.selectedTab;
      this.placeObject(imgNode, this.selectedTab);
      this.objectDic[object.id] = object;
      imgNode.on(
        Node.EventType.TOUCH_START,
        (event) => {
          this.setActiveObj(object, event);
        },
        this,
        true
      );
    }
    // console.log(this.objectDic);
  }
  addImgObj(fileResult, tabIdx) {
    const imgNode = this.getImgNode(fileResult.imgFile);
    const object: FileObject = {} as FileObject;
    object.id = uuidv4();
    object.mimeType = "png";
    object.file = fileResult.readerResult;
    object.img = fileResult.imgFile;
    object.node = imgNode;
    object.tabIdx = tabIdx;
    this.placeObject(imgNode, tabIdx);
    this.objectDic[object.id] = object;
    imgNode.on(
      Node.EventType.TOUCH_START,
      (event) => {
        this.setActiveObj(object, event);
      },
      this,
      true
    );
  }

  // file load function
  getImgNode(imgResult) {
    // set sprite frame
    const imgAsset = new ImageAsset(imgResult);
    const spriteFrame = new SpriteFrame();
    const tex = new Texture2D();
    tex.image = imgAsset;
    spriteFrame.texture = tex;

    // set node
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
      reader.onerror = reject;
      // reader.readAsArrayBuffer(file);
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
    imgNode.setPosition(
      new Vec3(100 + rowNum * 220, -100 - columnNum * 220, 0)
    );
    this.contentNode[tabIdx].addChild(imgNode);
    this.contentNode[tabIdx]
      .getComponent(UITransform)
      .setContentSize(new Size(900, 400 + columnNum * 220));
    // console.log(imgNode);
  }

  // touch function
  setActiveObj(obj: FileObject, event) {
    this.activeObj = Object.assign({}, obj);
    const imgNode = this.getImgNode(obj.img);
    this.node.insertChild(imgNode, 99);
    this.activeObj.node = imgNode;
    const location = event.touch.getUILocation();
    this.activeObj.node.setWorldPosition(new Vec3(location.x, location.y, 1));
    (
      this.scrollNode[this.selectedTab].getComponent(ScrollView) as ScrollView
    ).vertical = false;
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
          (fileTitleNode.getComponent(FileTitle) as FileTitle).setActive(false);
          if (Math.abs(fileTitleNode.getWorldPosition().y - location.y) <= 75) {
            this.activeFileTitle = fileTitleNode;
          }
        }
        if (this.activeFileTitle) {
          (this.activeFileTitle.getComponent(FileTitle) as FileTitle).setActive(
            true
          );
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
        const fileTitle = this.activeFileTitle.getComponent(
          FileTitle
        ) as FileTitle;
        fileTitle.setActive(false);
        this.addDecoData(this.activeObj, fileTitle.tag);
        this.activeFileTitle = null;
      }
      if (this.activeObj.node) {
        this.activeObj.node.removeFromParent();
      }
      // send date to room scene
      const location = event.touch.getUILocation();
      if (location.x >= 1800) {
        this.sceneScript.replaceDeco("touchEnd", location, this.activeObj);
      }
      this.activeObj = null;
      (
        this.scrollNode[this.selectedTab].getComponent(ScrollView) as ScrollView
      ).vertical = true;
    }
  }
  // update Deco Data
  initFileTitle() {
    const labelArray = ["전체(0)", "바닥(0)", "왼쪽 벽(0)", "오른쪽 벽(0)"];
    const tagArray = ["00", "01", "02", "03"];
    for (var i in this.fileTitles) {
      const fileTitle = this.fileTitles[i].getComponent(FileTitle) as FileTitle;
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
    }
    // console.log(decoDatas);
    const labelArray = ["전체(%d)", "바닥(%d)", "왼쪽 벽(%d)", "오른쪽 벽(%d)"];
    const tagArray = ["00", "01", "02", "03"];
    let yPosition = -100;
    const yDiff = 70;
    for (var i in this.fileTitles) {
      const fileTitle = this.fileTitles[i].getComponent(FileTitle) as FileTitle;
      const fileDatas = decoDatas[tagArray[i]];
      fileTitle.setLabel(labelArray[i].replace("%d", String(fileDatas.length)));

      fileDatas.sort((a, b) => (a.zOrder > b.zOrder && 1) || -1);
      fileTitle.setFileData(fileDatas);

      this.fileTitles[i].setPosition(new Vec3(0, yPosition, 1));
      const titleSize = fileTitle.getTitleSize();
      yPosition = yPosition - yDiff - titleSize.y;
    }
    this.decoContentNode
      .getComponent(UITransformComponent)
      .setContentSize(new Size(900, -yPosition));
  }
  onFileSelected(fileData) {
    if (this.sceneScript) {
      this.sceneScript.onFileSelected(fileData);
    }
  }
  onChangeOrder(fileData: Deco, kind) {
    const placeType = fileData.placeType;
    const zOrder = fileData.zOrder;
    let targetData: Deco | null = null;
    if (kind == "up") {
      const keys = Object.keys(this.decoDic);
      let targetOrder = 0;
      for (var i in keys) {
        if (placeType == this.decoDic[keys[i]].placeType) {
          if (
            this.decoDic[keys[i]].zOrder > targetOrder &&
            this.decoDic[keys[i]].zOrder < zOrder
          ) {
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
          if (
            this.decoDic[keys[i]].zOrder < targetOrder &&
            this.decoDic[keys[i]].zOrder > zOrder
          ) {
            targetOrder = this.decoDic[keys[i]].zOrder;
            targetData = this.decoDic[keys[i]];
          }
        }
      }
    }
    //// chaget order
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
  }
  /////////////
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
  }
  //
  updateObjDic(objectDic) {
    const keys = Object.keys(objectDic);
    for (var i in keys) {
      const key = keys[i];
      const obj = objectDic[key];
      console.log(obj);
    }
  }
}
