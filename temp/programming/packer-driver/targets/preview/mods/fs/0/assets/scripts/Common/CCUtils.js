System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, tween, Vec4, Color, RenderComponent, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, CCUtils;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      Vec4 = _cc.Vec4;
      Color = _cc.Color;
      RenderComponent = _cc.RenderComponent;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a6ee51RDlI4aW38cGIbaGh", "CCUtils", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CCUtils", CCUtils = (_dec = ccclass("CCUtils"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function CCUtils() {}

        /**
         * 显隐状态切换
         * 替代cc.toggleVisibility
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.toggleVisibility(node);
         * CCUtils.toggleVisibility(node, 2);
         * ```
         */
        CCUtils.toggleVisibility = function toggleVisibility(target, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          var _renderComps = this._getAllRenderComponents(target);

          if (duration > 0) {
            this._tmpComponent.scheduleOnce(function () {
              for (var i = 0; i < _renderComps.length; i++) {
                var render = _renderComps[i];
                render.enabled = !render.enabled;
              }
            }, duration);
          } else {
            for (var i = 0; i < _renderComps.length; i++) {
              var render = _renderComps[i];
              render.enabled = !render.enabled;
            }
          }
        }
        /**
         * 立即显示
         * tween版本实现，替代cc.show
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.show(node);
         * CCUtils.show(node, 2);
         * ```
         */
        ;

        CCUtils.show = function show(target, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          if (duration > 0) {
            this._tmpComponent.scheduleOnce(function () {
              tween(target).show().start();
            }, duration);
          } else {
            tween(target).show().start();
          }
        }
        /**
         * 立即隐藏
         * tween版本实现，替代cc.hide
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.hide(node);
         * CCUtils.hide(node, 2);
         * ```
         */
        ;

        CCUtils.hide = function hide(target, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          if (duration > 0) {
            this._tmpComponent.scheduleOnce(function () {
              tween(target).hide().start();
            }, duration);
          } else {
            tween(target).hide().start();
          }
        }
        /**
         * 渐显效果
         * tween版本实现，替代cc.fadeIn
         * @param target target, 目标节点
         * @param duration duration, 渐显时间, 单位秒
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.fadeIn(node, 1);
         * ```
         */
        ;

        CCUtils.fadeIn = function fadeIn(target, duration) {
          var c = new Vec4();

          var renders = this._getAllRenderComponents(target);

          var _loop = function _loop(i) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            var tempColor = new Color();
            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 255), {
              onUpdate: function onUpdate() {
                tempColor.r = c.x;
                tempColor.b = c.y;
                tempColor.g = c.z;
                tempColor.a = c.w;

                if (renders[i] && renders[i].color) {
                  // console.log(renders[i]);
                  renders[i].color = tempColor;
                }
              }
            }).start();
          };

          for (var i = 0; i < renders.length; i++) {
            _loop(i);
          }
        }
        /**
         * 渐隐效果
         * tween版本实现，替代cc.fadeOut
         * @param target target, 目标节点
         * @param duration duration, 渐显时间, 单位秒
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.fadeIn(node, 1);
         * ```
         */
        ;

        CCUtils.fadeOut = function fadeOut(target, duration) {
          var c = new Vec4();

          var renders = this._getAllRenderComponents(target);

          var _loop2 = function _loop2(i) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            var tempColor = new Color();
            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 0), {
              onUpdate: function onUpdate() {
                tempColor.r = c.x;
                tempColor.b = c.y;
                tempColor.g = c.z;
                tempColor.a = c.w;

                if (renders[i] && renders[i].color) {
                  // console.log(renders[i]);
                  renders[i].color = tempColor;
                }
              }
            }).start();
          };

          for (var i = 0; i < renders.length; i++) {
            _loop2(i);
          }
        };

        CCUtils._getAllRenderComponents = function _getAllRenderComponents(target) {
          return target.getComponentsInChildren(RenderComponent);
        };

        return CCUtils;
      }(), _defineProperty(_class2, "_tmpComponent", new Component()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CCUtils.js.map