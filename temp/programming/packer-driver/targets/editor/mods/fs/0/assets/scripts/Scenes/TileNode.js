System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, TileNode;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5cc3DlyG5I25dtR+FmKdRd", "TileNode", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TileNode
       * DateTime = Tue Mar 08 2022 10:41:33 GMT+0900 (대한민국 표준시)
       * Author = apeshub
       * FileBasename = TileNode.ts
       * FileBasenameNoExtension = TileNode
       * URL = db://assets/scripts/Scenes/TileNode.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("TileNode", TileNode = (_dec = ccclass("TileNode"), _dec(_class = (_temp = class TileNode extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "row", 0);

          _defineProperty(this, "column", 0);

          _defineProperty(this, "occupied", false);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileNode.js.map