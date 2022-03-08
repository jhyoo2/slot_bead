System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, ImageNode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0ea0+WL0lINrf0dgX2P6Gt", "ImageNode", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ImageNode = (_dec = ccclass("ImageNode"), _dec(_class = class ImageNode extends Component {
        async onLoad() {}

        initWithURL(url) {
          console.log(url);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ImageNode.js.map