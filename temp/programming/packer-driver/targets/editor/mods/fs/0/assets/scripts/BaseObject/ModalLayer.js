System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Graphics, color, UITransform, _dec, _class, _crd, ccclass, property, ModalLayer;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Graphics = _cc.Graphics;
      color = _cc.color;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59fb4ZGIDBCQrhWs4kyGyG8", "ModalLayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ModalLayer = (_dec = ccclass("ModalLayer"), _dec(_class = class ModalLayer extends Component {
        getModalColor(winSize) {
          var myModal = this.getModalLayer(winSize); // /////////////////////////////////////////

          var colorNode = new Node("ColorLayer");
          colorNode.setPosition(-winSize.width / 2, -winSize.height / 2);
          var colorSprite = colorNode.addComponent(Graphics);
          colorSprite.fillColor = color(0, 0, 0, 100);
          colorSprite.rect(0, 0, winSize.width, winSize.height);
          colorSprite.fill(); // /////////////////////////////////////////

          myModal.setSiblingIndex(1);
          myModal.addChild(colorNode);
          return myModal;
        }

        getModalBlack(winSize) {
          var myModal = this.getModalLayer(winSize); // /////////////////////////////////////////

          var colorNode = new Node("ColorLayer");
          colorNode.setPosition(-winSize.width / 2, -winSize.height / 2);
          var colorSprite = colorNode.addComponent(Graphics);
          colorSprite.fillColor = color(0, 0, 0, 255);
          var blackRate = 0;
          colorSprite.rect(0, 0, winSize.width, winSize.height);
          colorSprite.fill(); // /////////////////////////////////////////

          myModal.setSiblingIndex(99);
          myModal.addChild(colorNode);
          return myModal;
        }

        getModalLayer(winSize) {
          // /////////////////////////////////////////
          var myModal = new Node("myModal");
          myModal.setPosition(0, 0);
          var modalTran = myModal.addComponent(UITransform);
          modalTran.setContentSize(winSize); // /////////////////////////////////////////////////////////

          myModal.on(Node.EventType.TOUCH_START, function (event) {}, this);
          return myModal;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ModalLayer.js.map