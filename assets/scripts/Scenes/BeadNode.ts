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
  tween,
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
  targetColor = 3;
  myIdx = 0;

  @property(Node)
  coverNode: Node | null = null;

  @property(SpriteFrame)
  beadFrame: SpriteFrame[] = [];

  @property(Node)
  shapeNode: Node | null = null;

  @property(SpriteFrame)
  shapeFrame: SpriteFrame[] = [];

  maxForce = 0;
  nodeShape = 0;
  maxVelocity = new Vec2(0, 0);

  async onLoad() {
    super.onLoad();
    const myColor = Math.floor(Math.random() * 5) + 1;
    this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
    this.myColor = myColor;
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
  }

  changeShape() {
    let myShape = Math.floor(Math.random() * 4);
    const bidRigid = this.node.getComponent(RigidBody2D);
    const myForce = Math.sqrt(
      Math.pow(bidRigid.linearVelocity.x, 2) +
        Math.pow(bidRigid.linearVelocity.y, 2)
    );
    let time = 1.0;
    if (myForce > 10) {
      time = 0.05;
    } else if (myForce > 5) {
      time = 0.1;
    } else if (myForce > 3) {
      time = 0.2;
    } else if (myForce > 1) {
      if (this.nodeShape == this.targetColor) {
        return;
      }
      time = 0.2;
      myShape = 3;
    } else if (this.beadStart) {
      if (this.nodeShape == this.targetColor) {
        return;
      }
      console.log("in");
      time = myForce / 2;
      myShape = 3;
    }

    const copyNode = new Node();
    const copySprite = copyNode.addComponent(Sprite);
    copyNode.setScale(new Vec3(2.5, 2.5, 2.5));
    copySprite.spriteFrame = this.shapeFrame[this.nodeShape];
    this.shapeNode.parent.addChild(copyNode);

    this.nodeShape = myShape;
    this.shapeNode.getComponent(Sprite).spriteFrame = this.shapeFrame[myShape];

    tween(copyNode)
      .by(time, { position: new Vec3(0, 150, 0) })
      .call(() => {
        copyNode.removeFromParent();
        copyNode.destroy();
      })
      .start();

    this.shapeNode.setPosition(new Vec3(0, -150, 0));

    tween(this.shapeNode)
      .by(time, { position: new Vec3(0, 150, 0) })
      .delay(time / 5)
      .call(() => {
        if (!this.beadStart && this.nodeShape == this.targetColor) {
          return;
        }
        this.changeShape();
      })
      .start();
  }

  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    if (otherCollider.node.getComponent(BeadNode)) {
      const myRigid = this.node.getComponent(RigidBody2D);
      myRigid.linearVelocity = new Vec2(
        Math.max(this.maxVelocity.x, myRigid.linearVelocity.x * 2.2),
        Math.max(this.maxVelocity.y, myRigid.linearVelocity.y * 2.2)
      );
    } else {
      if (this.beadStart) {
        const myColor = (this.myColor + 1) % 6;
        this.myColor = myColor;
        this.node.getComponent(Sprite).spriteFrame = this.beadFrame[myColor];
      }
    }
  }

  addRandomForce() {
    this.changeShape();
    this.beadStart = true;
    const bidRigid = this.node.getComponent(RigidBody2D);
    const myForce = new Vec2(
      -30000 + 60000 * Math.random(),
      90000 + 30000 * Math.random() + 10000 * this.myIdx
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
          preVelo.x * 0.9975 + 0.001 * this.myIdx,
          preVelo.y * 0.9975 + 0.001 * this.myIdx
        );
      } else if (myForce > 1) {
        if (this.nodeShape == this.targetColor) {
          bidRigid.linearVelocity = new Vec2(
            preVelo.x * 0.985 + 0.0005 * this.myIdx,
            preVelo.y * 0.985 + 0.0005 * this.myIdx
          );
        }
      } else {
        if (this.nodeShape == this.targetColor) {
          bidRigid.linearVelocity = new Vec2(
            preVelo.x * 0.95 + 0.001 * this.myIdx,
            preVelo.y * 0.95 + 0.001 * this.myIdx
          );
        }
      }
      if (myForce <= 3) {
        this.coverNode.getComponent(UIOpacityComponent).opacity =
          (myForce / 3) * 255;
      }
    }
    // console.log(myForce);
  }
}
