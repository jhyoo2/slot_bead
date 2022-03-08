System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _class, _class2, _temp, _class3, _temp2, _crd, ccclass, property, CM, CMObject;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == "x" ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }

  _export("uuidv4", uuidv4);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2deebUWBqRKZpD01JrkIxxS", "Module", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CM", CM = ccclass(_class = (_temp = _class2 = class CM extends Component {}, _defineProperty(_class2, "OpCode", {
        START: 1,
        UPDATE: 2,
        DONE: 3,
        MOVE: 4,
        REJECTED: 5,
        READY: 6,
        RUNNING: 7
      }), _defineProperty(_class2, "GameStatus", {
        WAITING: 0,
        START: 1,
        RUNNING: 2,
        DONE: 3
      }), _defineProperty(_class2, "GameType", {
        SOLO: 0,
        MULTI: 1
      }), _defineProperty(_class2, "EventType", {
        START: 0,
        CATCH_NODE: 1,
        MISSING: 2,
        MISS_TOUCH: 3
      }), _temp)) || _class);

      _export("CMObject", CMObject = ccclass(_class3 = (_temp2 = class CMObject {
        constructor(myValue) {
          _defineProperty(this, "_value", 0);

          _defineProperty(this, "_key", 0);

          _defineProperty(this, "_dataType", 0);

          this._value = 0;
          this._key = "";
          this._dataType = "number";

          if (myValue) {
            this.value = myValue;
          }
        }

        get value() {
          // return this._value;
          if (this._dataType == "number") {
            return this.xorConvert(this._value, this._key) * 1;
          } else if (this._dataType == "object") {
            return JSON.parse(this.xorConvert(this._value, this._key));
          } else {
            return this.xorConvert(this._value, this._key);
          }
        }

        set value(myValue) {
          this._key = this.uuidv4();
          this._dataType = typeof myValue;

          if (this._dataType == "object") {
            myValue = JSON.stringify(myValue);
          }

          var inputValue = this._dataType != "String" ? String(myValue) : myValue;
          this._value = this.xorConvert(inputValue, this._key); // this._value = myValue;
        }

        uuidv4() {
          return "xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == "x" ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }

        decryptData(value, key, dataType) {
          return dataType == "number" ? this.xorConvert(value, key) * 1 : this.xorConvert(value, key);
        }

        xorConvert(text, key) {
          // console.log(text+ '//' + key);
          text = text == undefined || text == null ? "" : text;
          return Array.prototype.slice.call(text).map(function (c, index) {
            return String.fromCharCode(c.charCodeAt(0) ^ key[index % key.length].charCodeAt(0));
          }).join("");
        }

        getObject(myObject) {
          var resultObject = {};

          for (var key in myObject) {
            if (typeof myObject[key] == "object") {
              if (myObject[key].length != undefined && myObject[key].length >= 0) {
                resultObject[key] = [];

                for (var tey in myObject[key]) {
                  if (this.checkCMObject(myObject[key][tey])) {
                    resultObject[key].push(myObject[key][tey].value);
                  } else {
                    resultObject[key].push(this.getObject(myObject[key][tey]));
                  }
                }
              } else {
                if (this.checkCMObject(myObject[key])) {
                  resultObject[key] = myObject[key].value;
                } else {
                  resultObject[key] = this.getObject(myObject[key]);
                }
              }
            } else {
              resultObject[key] = myObject[key];
            }
          }

          return resultObject;
        }

        checkCMObject(myObject) {
          if (typeof myObject == "object" && myObject._key != undefined && myObject._value != undefined) {
            return true;
          } else {
            return false;
          }
        }

        getCMObject(myObject) {
          var resultObject = {};

          for (var key in myObject) {
            if (typeof myObject[key] == "object") {
              if (myObject[key].length != undefined && myObject[key].length >= 0) {
                resultObject[key] = [];

                for (var tey in myObject[key]) {
                  if (typeof myObject[key][tey] == "object") {
                    resultObject[key].push(this.getCMObject(myObject[key][tey]));
                  } else {
                    resultObject[key].push(new CMObject(myObject[key][tey]));
                  }
                }
              } else {
                if (this.checkCMObject(myObject[key])) {
                  resultObject[key] = new CMObject(myObject[key].value);
                } else {
                  resultObject[key] = this.getCMObject(myObject[key]);
                }
              }
            } else {
              resultObject[key] = new CMObject(myObject[key]);
            }
          }

          return resultObject;
        }

      }, _temp2)) || _class3);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Module.js.map