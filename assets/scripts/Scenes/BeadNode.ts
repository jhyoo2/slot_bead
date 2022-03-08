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
} from "cc";
const { ccclass, property } = _decorator;

import BaseScene from "../BaseObject/BaseScene";
import AssetManager from "../DataManager/AssetManager";
import BaseRoom from "../Prefabs/Room/BaseRoom";

@ccclass("BeadNode")
export class BeadNode extends BaseScene {
  beadStart = false;
  myForce = 0;
  myColor = 0;

  @property(Node)
  coverNode: Node | null = null;

  @property(SpriteFrame)
  beadFrame: SpriteFrame[] = [];

  maxForce = 0;
  maxVelocity = new Vec2(0, 0);

  async onLoad() {
    super.onLoad();
    const myColor = Math.floor(Math.random() * 5) + 1;
    this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
  }

  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    if (this.beadStart) {
      const myColor = Math.floor(Math.random() * 5) + 1;
      this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
    }
    if (otherCollider.node.getComponent(BeadNode)) {
      const myRigid = this.node.getComponent(RigidBody2D);
      myRigid.linearVelocity = new Vec2(
        Math.max(this.maxVelocity.x, myRigid.linearVelocity.x * 2.2),
        Math.max(this.maxVelocity.y, myRigid.linearVelocity.y * 2.2)
      );
    }
  }

  addRandomForce() {
    this.beadStart = true;
    const bidRigid = this.node.getComponent(RigidBody2D);
    const myForce = new Vec2(
      -40000 + 80000 * Math.random(),
      90000 + 30000 * Math.random()
    );
    bidRigid.applyForce(
      myForce,
      new Vec2(myForce.x / 100, myForce.y / 100),
      true
    );
  }

  diminishVelocity(rate) {
    const bidRigid = this.node.getComponent(RigidBody2D);
    bidRigid.linearVelocity = new Vec2(
      bidRigid.linearVelocity.x * rate,
      bidRigid.linearVelocity.y * rate
    );
    this.maxVelocity = new Vec2(
      this.maxVelocity.x * rate,
      this.maxVelocity.y * rate
    );
  }

  update(dt) {
    if (!this.beadStart) {
      return;
    }
    const bidRigid = this.node.getComponent(RigidBody2D);

    const myForce = Math.sqrt(
      Math.pow(bidRigid.linearVelocity.x, 2) +
        Math.pow(bidRigid.linearVelocity.y, 2)
    );
    if (this.maxForce < myForce) {
      this.maxForce = myForce;
      this.maxVelocity = new Vec2(
        bidRigid.linearVelocity.x,
        bidRigid.linearVelocity.y
      );
    }
    this.myForce += myForce;
    if (myForce > 0) {
      const preVelo = bidRigid.linearVelocity;
      if (myForce <= 0.1) {
        bidRigid.linearVelocity = new Vec2(0, 0);
        bidRigid.angularVelocity = 0;
        this.coverNode.getComponent(UIOpacityComponent).opacity = 0;
        this.beadStart = false;
      } else if (myForce > 10) {
        bidRigid.linearVelocity = new Vec2(
          preVelo.x * 0.9975,
          preVelo.y * 0.9975
        );
      } else if (myForce > 1) {
        bidRigid.linearVelocity = new Vec2(
          preVelo.x * 0.985,
          preVelo.y * 0.985
        );
      } else {
        bidRigid.linearVelocity = new Vec2(preVelo.x * 0.95, preVelo.y * 0.95);
      }
      if (myForce <= 3) {
        this.coverNode.getComponent(UIOpacityComponent).opacity =
          (myForce / 3) * 255;
      }
    }
    // console.log(myForce);
  }
}
