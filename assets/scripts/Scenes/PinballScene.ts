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
  SpriteAtlas,
  Sprite,
  SpriteFrame,
  UITransform,
  Size,
  UIOpacity,
  ObjectCurve,
  Label,
} from "cc";
const { ccclass, property } = _decorator;

import BaseScene from "../BaseObject/BaseScene";
import AssetManager from "../DataManager/AssetManager";
import BaseRoom from "../Prefabs/Room/BaseRoom";
import { BeadNode } from "./BeadNode";
import { ObstacleNode } from "./ObstacleNode";
import { TileNode } from "./TileNode";

@ccclass("PinballScene")
export class PinballScene extends BaseScene {
  assetManager: AssetManager = null;

  @property(Node)
  tileLayer: Node | null = null;

  @property(Node)
  nodeLayer: Node | null = null;

  @property(Prefab)
  beadPrefab: Prefab | null = null;

  @property(Prefab)
  tilePrefab: Prefab | null = null;

  @property(Node)
  beadArray: Node[] = [];

  @property(Node)
  monsterArray: Node[] = [];

  @property(Node)
  superBetButton: Node | null = null;

  myForce = 0;
  myTime: Date = new Date();
  roolStart = false;
  realStart = false;
  coinNum = 0;
  tileArray = [];
  // -520
  superBet = 5;

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
    this.makeTile();
    // this.alocateMonster();
  }
  makeTile() {
    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < 8; j++) {
        const tileNode = instantiate(this.tilePrefab);
        tileNode.addComponent(UIOpacity).opacity = 50 + 100 * ((i + j) % 2);
        this.tileLayer.addChild(tileNode);
        tileNode.getComponent(UITransform).setContentSize(new Size(110, 114));
        tileNode.setPosition(
          new Vec3(-440 + 110 * 0.5 + 110 * j, -750 + 114 * 0.5 + 114 * i)
        );
        this.tileArray.push(tileNode);

        const tileScript = tileNode.getComponent(TileNode);
        tileScript.row = i;
        tileScript.column = j;
        tileScript.occupied = false;
      }
    }
  }
  alocateMonster() {
    for (let i in this.monsterArray) {
      while (true) {
        const row = Math.floor(Math.random() * 5) + 3;
        const column = Math.floor(Math.random() * 8);
        const idx = row * 8 + column;
        const tileScript = this.tileArray[idx].getComponent(TileNode);
        if (tileScript.occupied) {
          continue;
        }
        tileScript.occupied = true;
        this.monsterArray[i].setPosition(this.tileArray[idx].getPosition());
        const monsterScript = this.monsterArray[i].getComponent(ObstacleNode);
        monsterScript.row = row;
        monsterScript.column = column;
        break;
      }
    }
  }

  rollButtonClicked() {
    console.log("roll", this.myForce);
    let gameStart = true;
    for (var i in this.beadArray) {
      if (this.beadArray[i].getComponent(BeadNode).beadStart) {
        gameStart = false;
      }
    }

    if (gameStart) {
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
      const myScale = 0.45 * Math.pow(0.95, 10 - 1);
      for (let i = 0; i < this.superBet; i++) {
        const beadNode = instantiate(this.beadPrefab);
        this.nodeLayer.addChild(beadNode);
        beadNode.setScale(new Vec3(myScale, myScale, myScale));
        beadNode.setPosition(new Vec3(-162 + Math.random() * 324, -620, 0));
        this.beadArray.push(beadNode);
        beadNode.getComponent(BeadNode).addRandomForce();
        beadNode.getComponent(BeadNode).activateBead();
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
      this.myTime = new Date();
    }

    let gameEnd = true;
    for (var i in this.beadArray) {
      if (this.beadArray[i].getComponent(BeadNode).beadStart) {
        gameEnd = false;
      }
    }

    if (gameEnd && this.roolStart) {
      this.roolStart = false;
      this.realStart = false;
      // this.moveMonster();
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

  addGold(gold) {
    this.coinNum += gold;
  }

  moveMonster() {
    for (let i in this.monsterArray) {
      const monster = this.monsterArray[i];
      const monsterScript = this.monsterArray[i].getComponent(ObstacleNode);
      let tryTime = 0;
      while (tryTime < 100) {
        tryTime++;
        const direction = Math.floor(Math.random() * 4);
        let row = 0;
        let column = 0;
        switch (direction) {
          case 0:
            row = -1;
            break;
          case 1:
            row = 1;
            break;
          case 2:
            column = -1;
            break;
          case 3:
            column = 1;
            break;
        }
        row += monsterScript.row;
        if (row < 3 || row >= 8) {
          continue;
        }
        column += monsterScript.column;
        if (column < 0 || column >= 8) {
          continue;
        }
        const idx = row * 8 + column;
        // console.log(monsterScript.row, monsterScript.column, row, column, idx);
        const tileScript = this.tileArray[idx].getComponent(TileNode);
        if (tileScript.occupied) {
          continue;
        }
        this.tileArray[
          monsterScript.row * 8 + monsterScript.column
        ].getComponent(TileNode).occupied = false;
        tileScript.occupied = true;
        monsterScript.row = row;
        monsterScript.column = column;
        tween(monster)
          .to(0.2, { position: this.tileArray[idx].getPosition() })
          .start();
        tryTime = 0;
        break;
      }
    }
  }
  superBetClicked() {
    switch (this.superBet) {
      case 1:
        this.superBet = 3;
        break;
      case 3:
        this.superBet = 5;
        break;
      case 5:
        this.superBet = 10;
        break;
      case 10:
        this.superBet = 1;
        break;
    }
    this.superBetButton.getChildByName("Label").getComponent(Label).string =
      String(this.superBet);
  }
}
