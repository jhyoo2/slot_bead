import { _decorator, Node, Event, Component } from "cc";
const { ccclass, property } = _decorator;

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

@ccclass
export class CM extends Component {
  public static OpCode = {
    START: 1,
    UPDATE: 2,
    DONE: 3,
    MOVE: 4,
    REJECTED: 5,
    READY: 6,
    RUNNING: 7,
  };

  public static GameStatus = {
    WAITING: 0,
    START: 1,
    RUNNING: 2,
    DONE: 3,
  };

  public static GameType = {
    SOLO: 0,
    MULTI: 1,
  };

  public static EventType = {
    START: 0,
    CATCH_NODE: 1,
    MISSING: 2,
    MISS_TOUCH: 3,
  };
}

@ccclass
export class CMObject {
  private _value: any = 0;
  private _key: any = 0;
  private _dataType: any = 0;

  constructor(myValue) {
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
    this._value = this.xorConvert(inputValue, this._key);
    // this._value = myValue;
  }
  uuidv4() {
    return "xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  decryptData(value, key, dataType) {
    return dataType == "number"
      ? this.xorConvert(value, key) * 1
      : this.xorConvert(value, key);
  }
  xorConvert(text, key) {
    // console.log(text+ '//' + key);
    text = text == undefined || text == null ? "" : text;
    return Array.prototype.slice
      .call(text)
      .map(function (c, index) {
        return String.fromCharCode(
          c.charCodeAt(0) ^ key[index % key.length].charCodeAt(0)
        );
      })
      .join("");
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
    if (
      typeof myObject == "object" &&
      myObject._key != undefined &&
      myObject._value != undefined
    ) {
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
}
