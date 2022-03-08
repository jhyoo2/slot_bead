import {
  _decorator,
  size,
  director,
  Node,
  PhysicsSystem2D,
  Vec2,
  PHYSICS_2D_PTM_RATIO,
  EPhysics2DDrawFlags,
  RigidBody,
  Vec3,
  RigidBody2D,
  Prefab,
  instantiate,
  SpriteFrame,
  Sprite,
  UIOpacityComponent,
  Collider2D,
  Contact2DType,
  IPhysics2DContact,
  Label,
  tween,
} from "cc";
const { ccclass, property } = _decorator;

import BaseScene from "../BaseObject/BaseScene";
import AssetManager from "../DataManager/AssetManager";
import BaseRoom from "../Prefabs/Room/BaseRoom";
import { PinballScene } from "./PinballScene";

@ccclass("ObstacleNode")
export class ObstacleNode extends BaseScene {
  @property(String)
  myTag = "";

  @property(PinballScene)
  pinballScene: PinballScene = null;

  async onLoad() {
    super.onLoad();

    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
      // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
      // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
      // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
    }
  }
  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    if (this.pinballScene) {
      this.pinballScene.addGold(Number(this.myTag) * 10);
    }
    // will be called once when two colliders begin to contact
    // console.log("onBeginContact", otherCollider);
    const myNode = new Node();
    const myLabel = myNode.addComponent(Label);
    myLabel.string = "GOLD + " + Number(this.myTag) * 10;
    this.node.addChild(myNode);
    myNode.setPosition(new Vec3(0, 100, 0));
    tween(myNode)
      .by(0.2, { position: new Vec3(0, 70, 0) })
      .delay(0.3)
      .call(() => {
        myNode.removeFromParent();
        myNode.destroy();
      })
      .start();
  }
}
