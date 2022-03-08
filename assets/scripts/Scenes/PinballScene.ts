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
  tween,
} from "cc";
const { ccclass, property } = _decorator;

import BaseScene from "../BaseObject/BaseScene";
import AssetManager from "../DataManager/AssetManager";
import BaseRoom from "../Prefabs/Room/BaseRoom";
import { BeadNode } from "./BeadNode";

@ccclass("PinballScene")
export class PinballScene extends BaseScene {
  assetManager: AssetManager = null;

  @property(Node)
  nodeLayer: Node | null = null;

  @property(Prefab)
  beadPrefab: Prefab | null = null;

  @property(Node)
  beadArray: Node[] = [];

  @property(Node)
  monsterArray: Node[] = [];

  myForce = 0;
  myTime: Date = new Date();
  roolStart = false;
  realStart = false;
  coinNum = 0;
  // -520

  async onLoad() {
    super.onLoad();
    PhysicsSystem2D.instance.enable = true;
    PhysicsSystem2D.instance.gravity = new Vec2(0, 0);
    // PhysicsSystem2D.instance.gravity = new Vec2(0, -20 * PHYSICS_2D_PTM_RATIO);
    // PhysicsSystem2D.instance.debugDrawFlags =
    //   EPhysics2DDrawFlags.Aabb |
    //   EPhysics2DDrawFlags.Pair |
    //   EPhysics2DDrawFlags.CenterOfMass |
    //   EPhysics2DDrawFlags.Joint |
    //   EPhysics2DDrawFlags.Shape;

    // this.assetManager = AssetManager.getInstance();
    // const assetResult = await this.assetManager.loadAssets();

    // this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, true);
  }
  rollButtonClicked() {
    //
    console.log("roll", this.myForce);
    if (this.myForce == 0) {
      this.coinNum = 0;
      this.roolStart = true;
      this.myTime = new Date();
      if (this.beadArray.length > 0) {
        while (this.beadArray.length > 0) {
          const myBead = this.beadArray[0];
          myBead.removeFromParent();
          myBead.destroy();
          this.beadArray.splice(0, 1);
        }
      }
      const vecArray = [
        new Vec3(-162, -520, 0),
        new Vec3(0, -420, 0),
        new Vec3(162, -520, 0),
      ];
      for (var i = 0; i < 3; i++) {
        const beadNode = instantiate(this.beadPrefab);
        this.nodeLayer.addChild(beadNode);
        beadNode.setPosition(vecArray[i]);
        this.beadArray.push(beadNode);
        beadNode.getComponent(BeadNode).addRandomForce();
      }
    }
  }

  onTouchStart(event) {
    // console.log(event);
    for (var i in this.beadArray) {
      const myBead = this.beadArray[i];
      const bidRigid = myBead.getComponent(RigidBody2D);
      bidRigid.applyForce(
        new Vec2(50000 + 5000 * Number(i), 20000 + 500 * Number(i)),
        new Vec2(200, 20),
        true
      );
    }
    // bidRigid.applyForceToCenter(new Vec2(20000, 2000), true);
  }
  update(dt) {
    let totalForce = 0;
    for (var i in this.beadArray) {
      const myBead = this.beadArray[i];
      const bidRigid = myBead.getComponent(RigidBody2D);
      const myForce = Math.sqrt(
        Math.pow(bidRigid.linearVelocity.x, 2) +
          Math.pow(bidRigid.linearVelocity.y, 2)
      );
      totalForce += myForce;
    }
    this.myForce = totalForce;
    if (this.roolStart && totalForce > 0 && !this.realStart) {
      this.realStart = true;
    }
    if (this.realStart) {
      if (totalForce == 0) {
        this.roolStart = false;
        this.realStart = false;
        this.moveMonster();
        console.log(
          "gold : " + this.coinNum,
          "time : " + (new Date().getTime() - this.myTime.getTime()) / 1000
        );
      }
      const timeDiff = (new Date().getTime() - this.myTime.getTime()) / 1000;
      if (timeDiff >= 3) {
        for (var i in this.beadArray) {
          const myBead = this.beadArray[i];
          myBead.getComponent(BeadNode).diminishVelocity(0.95);
        }
      } else if (timeDiff >= 2) {
        for (var i in this.beadArray) {
          const myBead = this.beadArray[i];
          myBead.getComponent(BeadNode).diminishVelocity(0.975);
        }
      }
    }
  }

  addGold(gold) {
    this.coinNum += gold;
  }

  moveMonster() {
    for (let i in this.monsterArray) {
      const monster = this.monsterArray[i];
      const direction = Math.floor(Math.random() * 4);
      switch (direction) {
        case 0:
          tween(monster)
            .by(0.2, { position: new Vec3(-100, 0, 0) })
            .start();
          break;
        case 1:
          tween(monster)
            .by(0.2, { position: new Vec3(100, 0, 0) })
            .start();
          break;
        case 2:
          tween(monster)
            .by(0.2, { position: new Vec3(0, -100, 0) })
            .start();
          break;
        case 3:
          tween(monster)
            .by(0.2, { position: new Vec3(0, 100, 0) })
            .start();
          break;
      }
    }
  }
}
