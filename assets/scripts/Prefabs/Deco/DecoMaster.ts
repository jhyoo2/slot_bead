import {
  _decorator,
  Component,
  Node,
  Slider,
  ToggleComponent,
  Vec3,
  Sprite,
  SpriteFrame,
  Texture2D,
  ImageAsset,
} from "cc";
import { RoomScene } from "../../Scenes/RoomScene";
import { Deco } from "../../Prefabs/Deco/DecoTypes";
import AssetManager from "../../DataManager/AssetManager";
import ListView from "./ListView";
import VectorList from "./VectorList";
const { ccclass, property } = _decorator;

@ccclass("DecoMaster")
export default class DecoMaster extends Component {
  assetManager: AssetManager = null;
  @property(Node)
  kindNode: Node | null = null;
  @property(Node)
  placeNode: Node | null = null;
  @property(Node)
  anchorNode: Node | null = null;
  @property(Node)
  pointNode: Node | null = null;
  @property(Node)
  opacityNode: Node | null = null;
  @property(Node)
  stackToggleNode: Node | null = null;
  @property(Node)
  stackSizeNode: Node | null = null;
  ////////////////
  @property(Node)
  objectIdxArray: Node[] = [];
  @property(Node)
  objectSizeNode: Node | null = null;
  @property(Node)
  objectPointNode: Node | null = null;
  @property(Node)
  imgNode: Node | null = null;
  @property(Node)
  shadowNode: Node | null = null;
  selectedIdx = -1;
  ////////////////
  sceneScript: RoomScene = null;
  decoData: Deco = null;
  async onLoad() {
    this.assetManager = AssetManager.getInstance();
    const kindScript = this.kindNode.getComponent("ListView") as ListView;
    // console.log(this.kindNode);
    kindScript.setDataList([
      { tag: "00", label: "미설정" },
      { tag: "01", label: "바닥타일" },
      { tag: "02", label: "벽지" },
      { tag: "03", label: "세입자" },
      { tag: "04", label: "테이블" },
      { tag: "05", label: "의자" },
      { tag: "06", label: "창문" },
      { tag: "07", label: "카펫" },
      { tag: "08", label: "소품" },
      { tag: "09", label: "벽장식" },
      { tag: "10", label: "기타가구" },
    ]);
    kindScript.callback = (idx) => {
      if (!this.decoData) {
        return false;
      }
      this.setDecoData("decoType", idx);
      return true;
    };
    const placeScript = this.placeNode.getComponent("ListView") as ListView;
    placeScript.setDataList([
      { tag: "00", label: "미설정" },
      { tag: "01", label: "바닥" },
      { tag: "02", label: "좌측 벽" },
      { tag: "03", label: "우측 벽" },
      { tag: "04", label: "양측 벽" },
    ]);
    placeScript.callback = (idx) => {
      this.setDecoData("placeType", idx);
    };
    const anchorScript = this.anchorNode.getComponent("ListView") as ListView;
    anchorScript.setDataList([
      { tag: "00", label: "중앙" },
      { tag: "01", label: "아래쪽" },
      { tag: "02", label: "왼쪽" },
      { tag: "03", label: "오른쪽" },
    ]);
    anchorScript.callback = (idx) => {
      this.setDecoData("anchorType", idx);
    };
    const pointScript = this.pointNode.getComponent("VectorList") as VectorList;
    pointScript.callback = (vec) => {
      this.setDecoData("decoPoint", vec);
    };
    const stackSizeScript = this.stackSizeNode.getComponent(
      "VectorList"
    ) as VectorList;
    stackSizeScript.callback = (vec) => {
      this.setDecoData("stackSize", vec);
    };
    /////////////////
    this.objectSizeNode.getComponent(VectorList).callback = (vec) => {
      this.setObjectData("objectSize", vec);
    };
    this.objectPointNode.getComponent(VectorList).callback = (vec) => {
      this.setObjectData("objectPoint", vec);
    };
    this.objectPointNode.getComponent(VectorList).minNum = -18;
  }

  update(dt) {
    if (this.decoData) {
      const kindScript = this.kindNode.getComponent("ListView") as ListView;
      kindScript.setLabel(this.decoData.decoType);
      const placeScript = this.placeNode.getComponent("ListView") as ListView;
      placeScript.setLabel(this.decoData.placeType);
      const anchorScript = this.anchorNode.getComponent("ListView") as ListView;
      anchorScript.setLabel(this.decoData.anchorType);
      const pointScript = this.pointNode.getComponent("VectorList") as ListView;
      pointScript.setLabel(this.decoData.decoPoint);
      const stackableScript = this.stackToggleNode.getComponent(
        ToggleComponent
      ) as ToggleComponent;
      stackableScript.isChecked = this.decoData.stackable;
      // this.opacityNode.getComponent(Slider).progress = this.decoData.opacity;
      this.objectSizeNode
        .getComponent(VectorList)
        .setLabel(
          this.decoData.objectArray[this.decoData.selectedDeco].objectSize
        );
      this.objectPointNode
        .getComponent(VectorList)
        .setLabel(
          this.decoData.objectArray[this.decoData.selectedDeco].objectPoint
        );
      // this.objectPointNode.active = this.decoData.selectedDeco != 0;
      for (var i in this.objectIdxArray) {
        const buttonNode = this.objectIdxArray[i];
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
  }
  setDecoData(kind, obj) {
    if (this.sceneScript && this.decoData) {
      this.sceneScript.setDecoData(kind, obj);
    }
  }
  setObjectData(kind, obj) {
    // console.log(kind, obj);
    if (this.sceneScript && this.decoData) {
      this.sceneScript.setObjectData(kind, obj);
    }
  }
  resetDecoObject() {
    this.selectedIdx = -1;
    this.decoData = null;
    const kindScript = this.kindNode.getComponent("ListView") as ListView;
    kindScript.resetLabel();
    const placeScript = this.placeNode.getComponent("ListView") as ListView;
    placeScript.resetLabel();
    const anchorScript = this.anchorNode.getComponent("ListView") as ListView;
    anchorScript.resetLabel();
    const pointScript = this.pointNode.getComponent("VectorList") as VectorList;
    pointScript.resetLabel();
    this.opacityNode.getComponent(Slider).progress = 1.0;
    // console.log(this.decoData);
    this.objectSizeNode.getComponent(VectorList).resetLabel();
    this.objectPointNode.getComponent(VectorList).resetLabel();
  }
  eraseClicked() {
    if (this.sceneScript && this.decoData) {
      this.sceneScript.eraseDeco();
    }
  }
  sliderEvent(node, kind) {
    if (kind == "opacity") {
      this.setDecoData("opacity", {
        tag: this.opacityNode.getComponent(Slider).progress,
      });
    }
  }
  toggleEvent(node, kind) {
    this.setDecoData("stackable", { tag: node.isChecked });
  }
  selectDecoIdx(node, idx) {
    if (this.decoData) {
      this.sceneScript.setSelectedDeco(Number(idx));
    }
  }
  updateObjectImg() {
    if (!this.decoData) {
      this.imgNode.getComponent(Sprite).spriteFrame =
        this.assetManager.assetDic["Deco/default_sprite"];
      return;
    }
    if (this.decoData.objectArray[this.selectedIdx].spriteFrame) {
      this.imgNode.getComponent(Sprite).spriteFrame =
        this.decoData.objectArray[this.selectedIdx].spriteFrame;
    } else {
      this.imgNode.getComponent(Sprite).spriteFrame =
        this.assetManager.assetDic["Deco/default_sprite"];
    }
    if (this.decoData.objectArray[this.selectedIdx].shadowFrame) {
      this.shadowNode.getComponent(Sprite).spriteFrame =
        this.decoData.objectArray[this.selectedIdx].shadowFrame;
    } else {
      this.shadowNode.getComponent(Sprite).spriteFrame =
        this.assetManager.assetDic["Deco/default_sprite"];
    }
  }
  replaceImg(kind, imgObject) {
    // console.log(kind, imgObject);
    const imgAsset = new ImageAsset(imgObject.img);
    const spriteFrame = new SpriteFrame();
    const tex = new Texture2D();
    tex.image = imgAsset;
    spriteFrame.texture = tex;
    if (kind == 0) {
      this.imgNode.getComponent(Sprite).spriteFrame = spriteFrame;
    } else if (kind == 1) {
      this.shadowNode.getComponent(Sprite).spriteFrame = spriteFrame;
    }
    // this.sceneScript.replaceObjImage(kind, imgObject);
  }
}
