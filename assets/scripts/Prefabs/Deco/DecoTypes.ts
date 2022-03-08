import { _decorator, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

export type DecoType =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10";

export type PlaceType = "00" | "01" | "02" | "03" | "04" | "05" | "06";
export type AnchorType = "00" | "01" | "02" | "03";
export type BuyType = "00" | "01";

export type DecoObj = {
  objectId: string;
  objectIdx: number;
  decoId: string;
  objectPoint: Vec3 | { x: number; y: number; z: number };
  objectSize: Vec3 | { x: number; y: number; z: number };
  objectPlace: Vec3 | { x: number; y: number; z: number };
  imgURL: string;
  buyType: BuyType;
  cashPrice: number;
  spriteFrame?: any;
  imgFile?: string;
  shadowFrame?: any;
  shadowFile?: string;
};

export type Deco = {
  decoId: string;
  selectedDeco: number;
  decoType: DecoType;
  placeType: PlaceType;
  decoPoint: Vec3 | { x: number; y: number; z: number };
  anchorType: AnchorType;
  // decoSize: Vec3;
  opacity: number;
  stackable: boolean;
  stackSize: Vec3 | { x: number; y: number; z: number };
  defaultObjectId: string;
  objectArray: DecoObj[];
  zOrder: number;
  node?: Node;
  label?: string;
};

export type FileObject = {
  id: string;
  mimeType: string;
  file: string;
  img: string;
  node: Node;
  tabIdx?: number;
};
