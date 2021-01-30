/**
 * 选分弹窗
 * @type {number}
 */

if (selectModal) {
  let extraScoreStr = '';
  while (isNaN(parseInt(extraScoreStr))) {
    extraScoreStr = prompt('请输入分数加成数字', '1').trim();
  }
  extraScore = parseInt(extraScoreStr)
}


window.__require = function e(t, n, o) {
  function c(i, r) {
    if (!n[i]) {
      if (!t[i]) {
        var s = i.split("/");
        if (s = s[s.length - 1], !t[s]) {
          var l = "function" == typeof __require && __require;
          if (!r && l) return l(s, !0);
          if (a) return a(s, !0);
          throw new Error("Cannot find module '" + i + "'")
        }
      }
      var u = n[i] = {
        exports: {}
      };
      t[i][0].call(u.exports, function (e) {
        return c(t[i][1][e] || e)
      }, u, u.exports, e, t, n, o)
    }
    return n[i].exports
  }

  for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) c(o[i]);
  return c
}({
  AddScore: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "68076EFnW1JeZUzdnbOOKNr", "AddScore");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../Common/Utils"),
      i = cc._decorator,
      r = i.ccclass,
      s = i.property,
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.addSign = null, t.label = null, t
        }

        return o(t, e), t.prototype.SetScore = function (e) {
          this.label.string = e, this.scheduleOnce(function () {
            a.default.CenteredUi(0, this.addSign, this.label.node)
          }, 0)
        }, c([s(cc.Node)], t.prototype, "addSign", void 0), c([s(cc.Label)], t.prototype, "label", void 0), t = c([r], t)
      }(cc.Component);
    n.default = l, cc._RF.pop()
  }, {
    "../Common/Utils": "Utils"
  }],
  AdjusWithHeight: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "0fe07DOz8VMcYKlDM2VxHhQ", "AdjusWithHeight");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc.Enum({
        TOP: 0,
        BOTTOM: 1
      }),
      i = cc._decorator,
      r = i.ccclass,
      s = i.property,
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.type = a.TOP, t.offset = 0, t
        }

        return o(t, e), t.prototype.onLoad = function () {
          var e = 0;
          e = this.type == a.TOP ? cc.winSize.height / 2 : -cc.winSize.height / 2, this.node.y = e + this.offset
        }, c([s({
          type: cc.Enum(a),
          displayName: "AdjustType"
        })], t.prototype, "type", void 0), c([s], t.prototype, "offset", void 0), t = c([r], t)
      }(cc.Component);
    n.default = l, cc._RF.pop()
  }, {}],
  AniTools: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "f05dbksdAdHtpW4ZpV1zW/T", "AniTools");
    var o = {
      doLabStrAni: function (e, t, n) {
        e.node.stopAllActions(), e.string = "";
        var o = t.split(""),
          c = 0,
          a = n / o.length;
        e.node.runAction(cc.sequence(cc.callFunc(function () {
          e.string = e.string + o[c], c++
        }), cc.delayTime(a)).repeat(o.length))
      },
      gunNumLabAni: function (e, t) {
        var n = parseInt(e.string);
        if (t != n) {
          var o = 0,
            c = t - n >= 50 ? 50 : t - n;
          e.node.runAction(cc.sequence(cc.callFunc(function () {
            o >= c - 1 ? e.string = t : (n++, e.string = n), o++
          }), cc.delayTime(.02)).repeat(c))
        }
      },
      openUIAni: function (e, t, n, o) {
        e.opacity = 0, t.scale = 0, e.runAction(cc.fadeTo(n, 100)), t.runAction(cc.sequence(cc.scaleTo(n, 1).easing(cc.easeBackOut()), cc.callFunc(o)))
      },
      closeUIAni: function (e, t, n, o) {
        e.runAction(cc.fadeOut(n)), t.runAction(cc.sequence(cc.scaleTo(n, 0).easing(cc.easeBackIn()), cc.callFunc(o)))
      },
      fireColorArr: ["#F5CD4D", "#F77986", "#D0F057", "#7ACCE8", "#E365EE"],
      fireworksAni: function (e, t, n, o) {
        for (var c = 0; c < t; c++) {
          var a = ToolsJs.newSprite("fire" + this.returnRanNum(1, 4));
          a.scale = .3 + .5 * Math.random(), a.position = n, a.color = cc.color(this.fireColorArr[this.returnRanNum(0, this.fireColorArr.length - 1)]), e.addChild(a, 88);
          var i = this.returnRanNum(o - 15, o + 15),
            r = this.returnRanNum(300, 1e3);
          this.fireObjAni(a, i, r, 350, .005 * c)
        }
      },
      fireObjAni: function (e, t, n, o) {
        var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          a = .1 + .5 * Math.random();
        e.runAction(cc.rotateBy(a, this.returnRanNum(-360, 360)).repeatForever());
        var i = cc.misc.degreesToRadians(t),
          r = cc.v2(Math.cos(i) * n, Math.sin(i) * n),
          s = n / o;
        e.runAction(cc.sequence(cc.delayTime(c), cc.jumpBy(s, cc.v2(1.5 * r.x, 0), n, 1), cc.removeSelf(!0)))
      },
      bombObjAni: function (e, t, n, o, c, a) {
        t = t || this.returnRanNum(-180, 180);
        var i = cc.misc.degreesToRadians(t),
          r = cc.v2(Math.cos(i) * n, Math.sin(i) * n),
          s = n / o,
          l = c ? 0 : e.scale,
          u = a ? 0 : 255;
        e.runAction(cc.sequence(cc.spawn(cc.scaleTo(s + .1, l), cc.moveBy(s, r).easing(cc.easeQuadraticActionOut()), cc.fadeTo(s + .1, u)), cc.fadeOut(.1), cc.removeSelf(!0)))
      },
      playAni: function (e, t) {
        e.getComponent(cc.Animation).play(t)
      },
      stopAni: function (e, t) {
        e.getComponent(cc.Animation).stop(t)
      },
      addNodeAni: function (e, t, n, o, c, a, i) {
        for (var r = e.getComponent(cc.Animation), s = [], l = o; l <= c; l++) {
          var u = new cc.SpriteFrame(cc.url.raw("resources/" + t + l + ".png"));
          s.push(u)
        }
        var d = cc.AnimationClip.createWithSpriteFrames(s, 5);
        d.name = n, d.speed = i, d.wrapMode = a ? cc.WrapMode.Loop : cc.WrapMode.Normal, r.addClip(d)
      },
      returnRanNum: function (e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
      }
    };
    window.AniTools = o, cc._RF.pop()
  }, {}],
  AudioManager: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "3db2d9MuTtO8JRQKnPm9kfu", "AudioManager");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.audioClip = [], t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this
        }, t.prototype.Play = function (e, t, n) {
          cc.audioEngine.play(this.audioClip[e], t, n)
        }, t.prototype.StopAll = function () {
          cc.audioEngine.stopAllEffects()
        }, t.Instance = null, c([r({
          type: cc.AudioClip
        })], t.prototype, "audioClip", void 0), t = n = c([i], t)
      }(cc.Component);
    n.default = s, cc._RF.pop()
  }, {}],
  AutoDestroy: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "aa0f5e77Z9FXJ3DrgQcqASi", "AutoDestroy");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../Common/PoolManager"),
      i = cc._decorator,
      r = i.ccclass,
      s = i.property,
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.label = null, t.text = "hello", t.plane = null, t
        }

        return o(t, e), t.prototype.start = function () {
          this.plane = cc.find("Canvas/playerNode/plane")
        }, t.prototype.update = function (e) {
          if (this.plane.y - this.node.y >= this.node.height + cc.winSize.height / 2) {
            for (var t = 0; t < 3; t++) this.node.children[t].removeComponent(cc.BoxCollider);
            a.default.Despawn(this.node.name, this.node)
          }
        }, c([s(cc.Label)], t.prototype, "label", void 0), c([s], t.prototype, "text", void 0), t = c([r], t)
      }(cc.Component);
    n.default = l, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager"
  }],
  DataManager: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "fd2c5sUJdNElqycZdmzNC7g", "DataManager");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function () {
        return function () {
          this.isFirstPlay = !0, this.score = 0, this.highScore = 0, this.goldCount = 0, this.playLevel = 1, this.maxFruitId = 2, this.successful = !1, this.currentLevelInfo = null, this.playCount = 0, this.guideTime = 0
        }
      }(),
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.gameName = "DefaultName", t.playerData = null, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this, n.Instance.playerData = JSON.parse(cc.sys.localStorage.getItem(this.gameName + "playerData11")), null == this.playerData && (this.playerData = new s, this.playerData.isFirstPlay = !0, this.playerData.score = 0, this.playerData.highScore = 0, this.playerData.goldCount = 0, this.playerData.playCount = 0, n.Instance.Save())
        }, t.prototype.SetguideTime = function () {
          this.playerData.guideTime += 1, this.Save
        }, t.prototype.GetguideTime = function () {
          return this.playerData.guideTime
        }, t.prototype.SetLevel = function () {
          this.playerData.playLevel += 1, this.Save()
        }, t.prototype.GetLevel = function () {
          return this.playerData.playLevel
        }, t.prototype.GetCurrentLevelInfo = function () {
          return this.playerData.currentLevelInfo
        }, t.prototype.SetCurrentLevelInfo = function (e) {
          this.playerData.currentLevelInfo = e, this.Save()
        }, t.prototype.SetPlayerFirstPlay = function (e) {
          this.playerData.isFirstPlay = e, this.Save()
        }, t.prototype.GetFirstPlay = function () {
          return this.playerData.isFirstPlay
        }, t.prototype.SetPlayerGold = function (e) {
          this.playerData.goldCount = e, this.Save()
        }, t.prototype.GetPlayerGold = function () {
          return this.playerData.goldCount
        }, t.prototype.SetPlayerScore = function (e) {
          this.playerData.score = e, this.Save()
        }, t.prototype.GetPlayerScore = function () {
          return this.playerData.score
        }, t.prototype.SetPlayerHighScore = function (e) {
          this.playerData.highScore = e, this.Save()
        }, t.prototype.GetPlayerHighScore = function () {
          return this.playerData.highScore
        }, t.prototype.SetMaxFruitId = function (e) {
          this.playerData.maxFruitId = e, this.Save()
        }, t.prototype.getMaxFruitId = function () {
          return this.playerData.maxFruitId
        }, t.prototype.GetSuccessful = function () {
          return this.playerData.successful
        }, t.prototype.SetSuccessful = function (e) {
          this.playerData.successful = e, this.Save()
        }, t.prototype.GetPlayCount = function () {
          return this.playerData.playCount
        }, t.prototype.SetPlayCount = function () {
          this.playerData.playCount += 1, this.Save()
        }, t.prototype.ClearData = function () {
          this.playerData.playLevel = 1, this.Save()
        }, t.prototype.Load = function () {
          n.Instance.playerData = JSON.parse(cc.sys.localStorage.getItem(this.gameName + "playerData11"))
        }, t.prototype.Save = function () {
          cc.sys.localStorage.setItem(this.gameName + "playerData11", JSON.stringify(n.Instance.playerData))
        }, t.Instance = null, c([r], t.prototype, "gameName", void 0), t = n = c([i], t)
      }(cc.Component);
    n.default = l, cc._RF.pop()
  }, {}],
  DynamicLoad: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "c6f04DncqhJIoWmE4UojNVj", "DynamicLoad");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.adsbutton = [], t.adsbutton2 = [], t.caidia = [], t.fllows = [], t.fruit = [], t.guozhiZ = [], t.guozhiL = [], t.fruitL = [], t.TGColors = [], t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this
        }, t.prototype.start = function () {
          this.TGColors.push("f43df7", "ef4126", "6ff814", "32cdf9", "fff02c", "f43df7", "fb4626", "6ff814", "50f7f0", "fff02c")
        }, t.Instance = null, c([r(cc.SpriteFrame)], t.prototype, "adsbutton", void 0), c([r(cc.SpriteFrame)], t.prototype, "adsbutton2", void 0), c([r(cc.SpriteFrame)], t.prototype, "caidia", void 0), c([r(cc.SpriteFrame)], t.prototype, "fllows", void 0), c([r(cc.SpriteFrame)], t.prototype, "fruit", void 0), c([r(cc.SpriteFrame)], t.prototype, "guozhiZ", void 0), c([r(cc.SpriteFrame)], t.prototype, "guozhiL", void 0), c([r(cc.SpriteFrame)], t.prototype, "fruitL", void 0), t = n = c([i], t)
      }(cc.Component);
    n.default = s, cc._RF.pop()
  }, {}],
  EffectCenter: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "e94b9uwJsJB94QZmqCRpyTe", "EffectCenter");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../Common/Utils"),
      i = e("../Common/PoolManager"),
      r = e("../Common/SpriteManager"),
      s = e("../common/DynamicLoad"),
      l = e("./AudioManager"),
      u = cc._decorator,
      d = u.ccclass,
      p = u.property,
      f = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.bgEffect = null, t.downEffectPartiParent = null, t.upEffectPartiParent = null, t.uiEffectParent = null, t.cameraNode = null, t.fireLightNode = null, t.effectTxtParent = null, t.bgEffectParent = null, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this
        }, t.prototype.LightOEffect = function (e) {
          var t = i.default.Spawn("lightEffect", this.upEffectPartiParent);
          t.position = e, t.scale = .2, t.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.fadeOut(.3))), t.children[0].runAction(cc.spawn(cc.moveBy(.5, -65, 65), cc.fadeOut(.6))), t.children[1].runAction(cc.spawn(cc.moveBy(.5, 65, -65), cc.fadeOut(.6))), t.children[2].runAction(cc.spawn(cc.moveBy(.5, -65, -65), cc.fadeOut(.6))), t.children[3].runAction(cc.spawn(cc.moveBy(.5, 65, 65), cc.fadeOut(.6)))
        }, t.prototype.MilkEffect = function (e, t) {
          var n = i.default.Spawn("milk", this.downEffectPartiParent);
          n.color = (new cc.Color).fromHEX(s.default.Instance.TGColors[t % 10]), n.position = e, n.scale = .3, n.runAction(cc.sequence(cc.scaleTo(.3, 1), cc.fadeOut(.3)))
        }, t.prototype.FireLight = function () {
          this.fireLightNode.stopAllActions(), this.fireLightNode.opacity = 0, this.fireLightNode.runAction(cc.sequence(cc.fadeTo(.11, 180).easing(cc.easeCubicActionIn()), cc.fadeTo(.18, 0)))
        }, t.prototype.SendGoldCoin = function (e, t, n) {
          var o = Math.floor(a.default.Random(8, 12));
          o = e;
          for (var c = a.default.ConvertPosition(t, this.uiEffectParent), r = a.default.ConvertPosition(n, this.uiEffectParent).sub(cc.v2(0, 0)), s = 0; s < o; s++) {
            var l = i.default.Spawn("Diamond");
            l.parent = this.uiEffectParent, l.position = c, l.scale = .7;
            var u = c.add(cc.v2(a.default.Random(-60, 60), a.default.Random(-60, 60))),
              d = cc.jumpTo(.3, u, a.default.Random(30, 150), 1),
              p = cc.sequence(d, cc.moveBy(.06, cc.v2(0, 10)), cc.moveBy(.06, cc.v2(0, -10))),
              f = r.sub(c),
              h = (cc.v2(u), cc.v2(a.default.Random(-300, 300), f.y * a.default.Random(.2, .8)), cc.v2(r)),
              m = cc.moveTo(.3, h).easing(cc.easeBackIn());
            l.runAction(cc.sequence(p, cc.delayTime(.05), m, cc.callFunc(function (e) {
              i.default.Despawn("Diamond", e)
            }, this)))
          }
        }, t.prototype.SendGoldCoin2 = function (e, t) {
          for (var n = Math.floor(a.default.Random(5, 8)), o = a.default.ConvertPosition(e, this.uiEffectParent), c = a.default.ConvertPosition(t, this.uiEffectParent).sub(cc.v2(0, 0)), r = 0; r < n; r++) {
            var s = i.default.Spawn("DiamondIcon");
            s.parent = this.uiEffectParent, s.position = o;
            var l = .07 * r;
            s.runAction(cc.sequence(cc.delayTime(l), cc.moveTo(.7, c), cc.callFunc(function (e) {
              i.default.Despawn("DiamondIcon", e)
            }, this)))
          }
        }, t.prototype.ShakeCamera = function (e, t, n) {
          this.cameraNode.stopAllActions()
        }, t.prototype.AddScoreEffect = function (e, t) {
          var n = i.default.Spawn("AddScore");
          n.parent = this.upEffectPartiParent, n.getComponent("AddScore").SetScore(e), n.position = t, n.runAction(cc.fadeIn(.2)), n.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 40)), cc.delayTime(.7), cc.fadeOut(.3), cc.callFunc(function () {
            i.default.Despawn("AddScore", n)
          }, this)))
        }, t.prototype.BloodBoom = function (e, t, n) {
          for (var o = a.default.RandomInteger(t, n), c = 0; c < o; c++) {
            var r = cc.instantiate(i.default.GetPrefab("Star"));
            r.parent = this.downEffectPartiParent, r.position = e, r.scale = a.default.Random(.4, .8);
            var s = e.add(cc.v2(a.default.Random(-64, 64), a.default.Random(-30, -90))),
              l = a.default.Random(.5, .55),
              u = a.default.Random(20, 90);
            r.runAction(cc.sequence(cc.jumpTo(l, s, u, 1), cc.delayTime(1), cc.callFunc(function (e) {
              e.stopAllActions(), e.destroy()
            }, this))), r.runAction(cc.sequence(cc.delayTime(.5 * l), cc.fadeOut(.5 * l)))
          }
        }, t.prototype.StepCloud = function (e, t) {
          for (var n = a.default.RandomInteger(3, 6), o = 0; o < n; o++) {
            var c = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            c.node.parent = this.downEffectPartiParent, c.node.position = t.add(cc.v2(a.default.Random(-40, 40), a.default.Random(-15, 15))), c.Reset(), c.SetSprite(r.default.Instance.GetSpriteFrame("cloud"));
            var s = a.default.RandomInteger(0, 100) < 50 ? 1 : -1;
            c.node.scale = a.default.Random(.2 * s, .6 * s), c.node.opacity = a.default.Random(150, 180);
            var l = cc.v2(a.default.Random(-10, 10), a.default.Random(-10, 10));
            c.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeOut(.3))), c.node.runAction(cc.sequence(cc.moveBy(.5, l), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
        }, t.prototype.EnemyDeadEFF = function (e) {
          for (var t = a.default.RandomInteger(10, 15), n = 0; n < t; n++) {
            var o = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            o.node.parent = this.downEffectPartiParent, o.Reset(), o.node.position = e;
            var c = r.default.Instance.GetSpriteFrame("star");
            Math.floor(20 * a.default.Random(.3, 1.6));
            32, o.SetSprite(c, cc.v2(32, 32)), o.node.scale = a.default.Random(.5, 1.5);
            var s = cc.v2(0, 1);
            s.rotateSelf(a.default.AngleToRadian(360 * Math.random()));
            var l = a.default.Random(20, 85);
            o.node.position.add(s.mul(a.default.Random(0, 30)));
            var u = a.default.Random(.3, .36);
            o.node.runAction(cc.sequence(cc.delayTime(.2 * u), cc.scaleTo(.8 * u, a.default.Random(.1, .3)))), o.node.runAction(cc.sequence(cc.moveBy(u, s.mul(l)).easing(cc.easeCubicActionOut()), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
          var d = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
          d.node.parent = this.downEffectPartiParent, d.Reset(), d.node.position = e, d.SetSprite(r.default.Instance.GetSpriteFrame("whiteCircle"), cc.v2(150, 150)), d.node.opacity = 200, d.node.scale = 0, d.node.runAction(cc.scaleTo(.32, 1)), d.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeOut(.1), cc.callFunc(function (e) {
            i.default.Despawn("EffectSprite", e)
          }, this)))
        }, t.prototype.StarFishDead = function (e) {
          for (var t = a.default.RandomInteger(20, 26), n = 0; n < t; n++) {
            var o = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            o.node.parent = this.downEffectPartiParent, o.Reset(), o.node.position = e;
            var c = r.default.Instance.GetSpriteFrame("bubbleW");
            Math.floor(20 * a.default.Random(.3, 1.6));
            32, o.SetSprite(c, cc.v2(32, 32)), o.node.scale = a.default.Random(.3, 1.6);
            var s = cc.v2(0, 1);
            s.rotateSelf(a.default.AngleToRadian(360 * Math.random()));
            var l = a.default.Random(80, 120);
            o.node.position.add(s.mul(a.default.Random(0, 30)));
            var u = a.default.Random(.3, .36);
            o.node.runAction(cc.sequence(cc.delayTime(u * a.default.Random(.1, .3)), cc.scaleTo(.8 * u, a.default.Random(.1, .3)))), o.node.runAction(cc.sequence(cc.moveBy(u, s.mul(l)).easing(cc.easeCubicActionOut()), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
        }, t.prototype.PutEFF = function (e, t) {
          for (var n = a.default.RandomInteger(15, 20), o = 0; o < n; o++) {
            var c = i.default.Spawn("EffectSprite");
            c.parent = this.upEffectPartiParent;
            var s = c.getComponent("EffectSprite");
            s.Reset();
            var l = r.default.Instance.GetSpriteFrame("ball");
            s.SetSprite(l, cc.v2(18, 18)), c.setPosition(e.x + 80 * Math.random() - 40, e.y + 80 * Math.random() - 40), c.setScale(.5 * Math.random() + .5), c.opacity = 150 * Math.random() + 50, c.color = t;
            var u = 360 * Math.random() * Math.PI / 180,
              d = 46 + 46 * Math.random(),
              p = cc.v2(e.x + Math.sin(u) * d, e.y + Math.cos(u) * d);
            c.runAction(cc.sequence(cc.spawn(cc.moveTo(.8, p).easing(cc.easeCircleActionOut()), cc.scaleTo(.8 * a.default.Random(.5, 1), 0).easing(cc.easeCircleActionIn())), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
        }, t.prototype.LevelUpEff = function (e, t) {
          for (var n = a.default.RandomInteger(27, 36), o = 0; o < n; o++) {
            var c = i.default.Spawn("EffectSprite");
            c.parent = this.downEffectPartiParent;
            var s = c.getComponent("EffectSprite");
            s.Reset();
            var l = r.default.Instance.GetSpriteFrame("flower");
            s.SetSprite(l, cc.v2(32, 32)), c.setPosition(e.x + 90 * Math.random() - 45, e.y + 90 * Math.random() - 45), c.setScale(.55 * Math.random() + .7), c.opacity = 160 * Math.random() + 70;
            var u = 360 * Math.random() * Math.PI / 180,
              d = 60 + 80 * Math.random(),
              p = cc.v2(e.x + Math.sin(u) * d, e.y + Math.cos(u) * d);
            c.runAction(cc.sequence(cc.spawn(cc.moveTo(.8, p).easing(cc.easeCircleActionOut()), cc.scaleTo(.8 * a.default.Random(.5, 1), 0).easing(cc.easeCircleActionIn())), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
        }, t.prototype.PortDownEff = function (e) {
          for (var t = a.default.RandomInteger(12, 15), n = 0; n < t; n++) {
            var o = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            o.node.parent = this.downEffectPartiParent, o.Reset(), o.SetSprite(r.default.Instance.GetSpriteFrame("ball"), cc.v2(48, 48)), o.node.scale = a.default.Random(.6, 1), o.node.opacity = a.default.RandomInteger(120, 250), o.node.position = e.add(cc.v2(a.default.Random(-25, 25)));
            var c = cc.v2(0, a.default.Random(30, 80)).rotate(a.default.AngleToRadian(a.default.Random(0, 360))),
              s = cc.moveBy(.7, c),
              l = cc.scaleTo(.6, 0),
              u = cc.fadeOut(.5);
            o.node.runAction(cc.spawn(s, l)), o.node.runAction(cc.sequence(cc.delayTime(.2), u, cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
        }, t.prototype.ShootFlower = function () {
          l.default.Instance.Play(10, !1, 1);
          var e = [
            [360, -50],
            [-360, -50],
            [360, -120],
            [-360, -120]
          ];
          cc.log(1);
          for (var t = 0; t < e.length; t++) {
            if (e[t][0] >= 0) var n = 1;
            else n = -1;
            for (var o = 0; o < 40; o++) {
              var c = i.default.Spawn("star", this.upEffectPartiParent);
              c.position = cc.v2(e[t][0], e[t][1]), c.scale = a.default.Random(.7, 1), c.getComponent(cc.Sprite).spriteFrame = s.default.Instance.caidia[a.default.RandomInteger(0, 6)];
              var r = c.position,
                u = r.x + a.default.Random(.5 * -cc.winSize.width, .05 * -cc.winSize.width) * n,
                d = r.y + a.default.Random(100, 500),
                p = cc.v2(r.x + .8 * (u - r.x), r.y + .5 * (d - r.y) + 200);
              c.runAction(cc.sequence(cc.spawn(cc.bezierTo(1, [r, p, cc.v2(u, d)]).easing(cc.easeCircleActionOut()), cc.moveBy(2.8, 0, 1.2 * -cc.winSize.height * a.default.Random(.8, 1.2)).easing(cc.easeCubicActionIn()), cc.moveBy(2.8, a.default.Random(0, -300) * n, 0), cc.rotateBy(2, a.default.Random(360, 720) * (2 * Math.round(Math.random()) - 1)), cc.sequence(cc.moveBy(2 * (.1 * Math.random() + .3), (25 * Math.random() + 25) * (2 * Math.round(Math.random()) - 1), 0), cc.moveBy(2 * (.1 * Math.random() + .3), (25 * Math.random() + 25) * (2 * Math.round(Math.random()) - 1), 0), cc.moveBy(2 * (.1 * Math.random() + .3), (25 * Math.random() + 25) * (2 * Math.round(Math.random()) - 1), 0))), cc.callFunc(function (e, t) {
                i.default.Despawn("star", e)
              }, this, this)))
            }
          }
        }, t.prototype.HitWood = function (e) {
          for (var t = a.default.RandomInteger(20, 26), n = 0; n < t; n++) {
            var o = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            o.node.parent = this.downEffectPartiParent, o.Reset(), o.node.position = e;
            var c = r.default.Instance.GetSpriteFrame("ball1");
            Math.floor(20 * a.default.Random(.3, 1.6));
            28, o.SetSprite(c, cc.v2(28, 28)), o.node.scale = a.default.Random(.3, 1.6);
            var s = cc.v2(0, 1);
            s.rotateSelf(a.default.AngleToRadian(360 * Math.random()));
            var l = a.default.Random(80, 120);
            o.node.position.add(s.mul(a.default.Random(0, 30)));
            var u = a.default.Random(.3, .36);
            o.node.runAction(cc.sequence(cc.delayTime(u * a.default.Random(.1, .3)), cc.scaleTo(.8 * u, a.default.Random(.1, .3)))), o.node.runAction(cc.sequence(cc.moveBy(u, s.mul(l)).easing(cc.easeCubicActionOut()), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
        }, t.prototype.StarBoom = function (e) {
          for (var t = function (t) {
            var o = i.default.Spawn("lightEffect").getComponent("EffectSprite");
            o.node.parent = n.bgEffectParent, o.node.position = e, o.Reset(), o.SetSprite(r.default.Instance.GetSpriteFrame("star"), cc.v2(32, 32)), o.node.color = new cc.Color(254, 236, 180);
            var c = cc.v2(0, 100).rotate(a.default.AngleToRadian(30 * t));
            o.node.runAction(cc.sequence(cc.moveBy(.45, c), cc.callFunc(function () {
              i.default.Despawn("lightEffect", o.node)
            }, n))), o.node.runAction(cc.rotateBy(.45, 360)), o.node.runAction(cc.sequence(cc.delayTime(.225), cc.scaleTo(.225, .4)))
          }, n = this, o = 0; o < 12; o++) t(o)
        }, t.prototype.GhostBornEff = function (e) {
          for (var t = a.default.RandomInteger(100, 101), n = 0; n < t; n++) {
            var o = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            o.node.parent = this.downEffectPartiParent, o.Reset(), o.node.position = e, o.node.opacity = 0, o.node.color = new cc.Color(220, 220, 220);
            var c = r.default.Instance.GetSpriteFrame("cloud");
            Math.floor(20 * a.default.Random(.4, 1.6));
            80, o.SetSprite(c, cc.v2(80, 80)), o.node.scale = a.default.Random(.6, 1.3), o.node.angle = a.default.Random(0, 360);
            var s = cc.v2(0, 1);
            s.rotateSelf(a.default.AngleToRadian(360 * Math.random()));
            var l = a.default.Random(20, 280);
            o.node.position.add(s.mul(a.default.Random(0, 30)));
            var u = a.default.Random(1, 1.3),
              d = a.default.Random(.01, .012) * n;
            o.node.runAction(cc.sequence(cc.delayTime(d), cc.delayTime(.6 * u), cc.fadeOut(.4 * u))), o.node.opacity = 0, o.node.runAction(cc.sequence(cc.delayTime(d), cc.fadeTo(.1, a.default.Random(120, 240)))), o.node.runAction(cc.sequence(cc.delayTime(d), cc.moveBy(u, s.mul(l)).easing(cc.easeCubicActionOut()), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)));
            a.default.Random(0, 100)
          }
        }, t.prototype.LittleFly = function (e) {
          for (var t = a.default.RandomInteger(24, 33), n = 0; n < t; n++) {
            var o = cc.instantiate(i.default.GetPrefab("LittleFly"));
            o.parent = this.bgEffectParent, o.position = e;
            var c = o.getComponent("RandomFly");
            c.SetId(a.default.RandomInteger(1, 5)), c.fadeTicker = a.default.Random(2, 3.5), c.mosquitoSpeedLen = a.default.RandomInteger(6, 12), c.mosquitoSpeedMaxR = a.default.RandomInteger(6, 12), c.startFun()
          }
        }, t.prototype.JuiceBoom = function (e, t) {
          for (var n = 0; n < 6; n++) {
            var o = i.default.Spawn("JuiceParticle");
            o.parent = this.downEffectPartiParent, o.position = e.add(cc.v2(a.default.Random(-50, 50), 0)), o.scale = a.default.Random(.3, 1), o.color = t;
            var c = cc.v2(0, 1);
            c = c.rotate(a.default.AngleToRadian(a.default.Random(-60, 60)));
            var r = a.default.Random(60, 100),
              s = cc.moveBy(.3, c.mul(r));
            o.runAction(s), o.runAction(cc.sequence(cc.delayTime(.05), cc.scaleTo(.25, a.default.Random(.1, .2)))), o.runAction(cc.sequence(cc.delayTime(.2), cc.fadeOut(.1)))
          }
        }, t.prototype.createBlood = function (e) {
          for (var t = 0; t < 3; t++) {
            var n = i.default.Spawn("EffectSprite");
            n.parent = this.downEffectPartiParent;
            var o = n.getComponent("EffectSprite");
            o.Reset(), n.position = e, n.scale = 0, o.SetSprite(r.default.Instance.GetSpriteFrame("ball"), cc.v2(20, 20)), o.node.color = (new cc.Color).fromHEX("#AD0909"), n.setContentSize(a.default.RandomInteger(16, 18), a.default.RandomInteger(16, 18)), n.runAction(cc.sequence(cc.delayTime(.5 * t), cc.delayTime(.5), cc.scaleTo(.1, 0))), n.runAction(cc.sequence(cc.delayTime(.4 * t), cc.scaleTo(.3, 1), cc.moveBy(.6, cc.v2(0, -180)), cc.callFunc(function () {
            }, n)))
          }
        }, t.prototype.LightBoomAndMove = function (e, t) {
          for (var n = a.default.RandomInteger(32, 43), o = 0; o < n; o++) {
            var c = cc.instantiate(i.default.GetPrefab("Lightning"));
            c.parent = this.downEffectPartiParent, c.position = e, c.opacity = 0, c.setContentSize(120, 120), c.scale = a.default.Random(.3, 1.3);
            var r = cc.v2(0, 1);
            r.rotateSelf(a.default.AngleToRadian(360 * Math.random()));
            var s = a.default.Random(30, 120);
            c.position.add(r.mul(a.default.Random(0, 30)));
            var l = a.default.Random(.9, 1.2),
              u = a.default.Random(.05, .15);
            c.runAction(cc.sequence(cc.delayTime(u), cc.delayTime(l * a.default.Random(.1, .3)), cc.scaleTo(.8 * l, a.default.Random(.2, .3)))), c.opacity = 0, c.runAction(cc.sequence(cc.delayTime(u), cc.fadeTo(.08, a.default.Random(160, 240)))), c.runAction(cc.sequence(cc.delayTime(u), cc.moveBy(l, r.mul(s)).easing(cc.easeCubicActionOut()), cc.callFunc(function (e) {
              e.stopAllActions(), e.destroy()
            }, this)));
            var d = a.default.Random(0, 100) < 50 ? 1 : -1;
            c.runAction(cc.sequence(cc.delayTime(u), cc.rotateBy(l, a.default.Random(180, 200) * d)))
          }
        }, t.prototype.RecoveryPigment = function (e) {
          for (var t = a.default.RandomInteger(6, 7), n = 0; n < t; n++) {
            var o = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            o.node.parent = this.downEffectPartiParent, o.Reset(), o.node.opacity = 0;
            var c = r.default.Instance.GetSpriteFrame("skull");
            o.SetSprite(c, cc.v2(40, 40)), o.node.position = e.add(cc.v2(a.default.Random(-55, 55), a.default.Random(-15, 40)));
            var s = a.default.Random(.4, 1),
              l = a.default.Random(1, 1.2),
              u = a.default.Random(.07, .09) * n;
            o.node.runAction(cc.sequence(cc.delayTime(.75 * l), cc.fadeOut(.25 * l), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this))), o.node.runAction(cc.sequence(cc.delayTime(u), cc.spawn(cc.fadeIn(.15), cc.scaleTo(.15, s), cc.moveBy(l, cc.v2(0, 90 * l)))))
          }
        }, t.prototype.WinkJump = function (e) {
          for (var t = a.default.RandomInteger(16, 17), n = 0; n < t; n++) {
            var o = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            o.node.parent = this.upEffectPartiParent, o.Reset(), o.SetSprite(r.default.Instance.GetSpriteFrame("wink"), cc.v2(110, 110)), o.node.scale = a.default.Random(.3, 1.2), o.node.opacity = a.default.RandomInteger(170, 250), o.node.position = e.add(cc.v2(a.default.Random(-30, 30), a.default.Random(-30, 30)));
            var c = cc.v2(a.default.Random(-150, 150), a.default.Random(20, -60));
            c = cc.v2(o.node.position.add(c));
            var s = a.default.Random(1, 1.2),
              l = cc.jumpTo(s, c, a.default.Random(120, 120), 1),
              u = a.default.Random(0, 100) < 50 ? 1 : -1,
              d = cc.rotateBy(s, a.default.Random(200, 300) * u),
              p = cc.fadeOut(.2 * s);
            o.node.runAction(cc.spawn(l, d)), o.node.runAction(cc.sequence(cc.delayTime(.8 * s), p, cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)))
          }
        }, t.prototype.RightSelect = function (e, t) {
          for (var n = a.default.RandomInteger(20, 23), o = 0; o < n; o++) {
            var c = i.default.Spawn("EffectSprite").getComponent("EffectSprite");
            c.node.parent = this.downEffectPartiParent, c.Reset(), c.node.position = e, c.node.opacity = 0;
            var s = r.default.Instance.GetSpriteFrame("star");
            Math.floor(20 * a.default.Random(.4, 1.5));
            64, c.SetSprite(s, cc.v2(64, 64)), c.node.scale = a.default.Random(.3, 1.6);
            var l = cc.v2(0, 1);
            l.rotateSelf(a.default.AngleToRadian(360 * Math.random()));
            var u = a.default.Random(20, t);
            c.node.position.add(l.mul(a.default.Random(0, 30)));
            var d = a.default.Random(.9, 1.2),
              p = a.default.Random(.05, .3);
            p = a.default.Random(.005, .015) * o, c.node.runAction(cc.sequence(cc.delayTime(p), cc.delayTime(d * a.default.Random(.1, .3)), cc.scaleTo(.8 * d, a.default.Random(.2, .3)))), c.node.opacity = 0, c.node.runAction(cc.sequence(cc.delayTime(p), cc.fadeTo(.08, a.default.Random(160, 240)))), c.node.runAction(cc.sequence(cc.delayTime(p), cc.moveBy(d, l.mul(u)).easing(cc.easeCubicActionOut()), cc.callFunc(function (e) {
              i.default.Despawn("EffectSprite", e)
            }, this)));
            var f = a.default.Random(0, 100) < 50 ? 1 : -1;
            c.node.runAction(cc.sequence(cc.delayTime(p), cc.rotateBy(d, a.default.Random(220, 260) * f)))
          }
        }, t.prototype.ShowLandParti = function (e, t) {
          for (var n = t, o = [cc.v2(e.x - 8, e.y + 50), cc.v2(e.x + 8, e.y + 50)], c = 0; c < o.length; c++) {
            if (o[c].x < e.x) var r = -1;
            else r = 1;
            for (var s = 0; s < n; s++) {
              var l = i.default.Spawn("dieParticle");
              l.parent = this.upEffectPartiParent, l.stopAllActions(), l.opacity = 255, l.scale = a.default.Random(.5, 1);
              var u = o[c];
              l.setPosition(u);
              var d = cc.v2(a.default.RandomInteger(0, 80) * r, a.default.RandomInteger(0, 50)),
                p = a.default.RandomInteger(180, 360) * r,
                f = a.default.RandomInteger(20, 40);
              l.runAction(cc.sequence(cc.spawn(cc.sequence(cc.jumpBy(12 / f, d, f, 1), cc.moveBy(5 / f, cc.v2(0, 0))), cc.rotateTo(15 / f, p)), cc.callFunc(function (e) {
              }, this)))
            }
          }
        }, t.prototype.ShowLandParti1 = function (e, t) {
          for (var n = t, o = [cc.v2(e.x - 8, e.y), cc.v2(e.x + 8, e.y)], c = 0; c < o.length; c++) {
            if (o[c].x < e.x) var r = -1;
            else r = 1;
            for (var s = 0; s < n; s++) {
              var l = i.default.Spawn("youqi");
              l.parent = this.upEffectPartiParent, l.stopAllActions(), l.opacity = 255, l.scale = a.default.Random(.2, .5);
              var u = o[c];
              l.setPosition(u);
              var d = cc.v2(a.default.RandomInteger(0, 80) * r, a.default.RandomInteger(0, 50)),
                p = a.default.RandomInteger(180, 360) * r,
                f = a.default.RandomInteger(20, 40);
              l.runAction(cc.sequence(cc.spawn(cc.sequence(cc.jumpBy(12 / f, d, f, 1), cc.spawn(cc.moveBy(5 / f, cc.v2(0, -30)), cc.fadeOut(5 / f))), cc.rotateTo(15 / f, p)), cc.callFunc(function (e) {
                i.default.Despawn("youqi", e)
              }, this)))
            }
          }
        }, t.prototype.GhostTouchPlayer = function (e) {
          for (var t = [cc.v2(e.x - 40, e.y), cc.v2(e.x + 40, e.y)], n = 0; n < t.length; n++) {
            if (t[n].x < e.x) var o = -1;
            else o = 1;
            for (var c = 0; c < 15; c++) {
              var s = i.default.Spawn("EffectSprite");
              s.parent = this.upEffectPartiParent;
              var l = s.getComponent("EffectSprite");
              l.Reset();
              var u = cc.v2(18, 18);
              l.SetSprite(r.default.Instance.GetSpriteFrame("ball"), u), s.color = cc.color(120, 120, 120), s.stopAllActions(), s.opacity = 255, s.scale = a.default.Random(.6, 1);
              var d = t[n];
              s.setPosition(d);
              var p = cc.v2(a.default.RandomInteger(-5, 54) * o, a.default.RandomInteger(-20, 20)),
                f = a.default.RandomInteger(180, 360) * o,
                h = a.default.RandomInteger(15, 45);
              s.runAction(cc.sequence(cc.spawn(cc.sequence(cc.jumpBy(12 / h, p, h, 1), cc.spawn(cc.moveBy(5 / h, cc.v2(0, -30)), cc.fadeOut(5 / h))), cc.rotateTo(15 / h, f)), cc.callFunc(function (e) {
                i.default.Despawn("EffectSprite", e)
              }, this)))
            }
          }
        }, t.Instance = null, c([p(cc.Node)], t.prototype, "bgEffect", void 0), c([p(cc.Node)], t.prototype, "downEffectPartiParent", void 0), c([p(cc.Node)], t.prototype, "upEffectPartiParent", void 0), c([p(cc.Node)], t.prototype, "uiEffectParent", void 0), c([p(cc.Node)], t.prototype, "cameraNode", void 0), c([p(cc.Node)], t.prototype, "fireLightNode", void 0), c([p(cc.Node)], t.prototype, "effectTxtParent", void 0), c([p(cc.Node)], t.prototype, "bgEffectParent", void 0), t = n = c([d], t)
      }(cc.Component);
    n.default = f, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager",
    "../Common/SpriteManager": "SpriteManager",
    "../Common/Utils": "Utils",
    "../common/DynamicLoad": "DynamicLoad",
    "./AudioManager": "AudioManager"
  }],
  EffectSprite: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "44d58DM3EZDh45gxc2rlMFX", "EffectSprite");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("./PoolManager"),
      i = cc._decorator,
      r = i.ccclass,
      s = i.property,
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cameraUrl = "Canvas/mainCamera", t.startWork = !1, t.camera = null, t.stateCheck = !1, t
        }

        return o(t, e), t.prototype.onLoad = function () {
          this.camera = cc.find(this.cameraUrl)
        }, t.prototype.update = function (e) {
          this.stateCheck && null != this.camera && (!this.startWork && this.InScreen() && (this.startWork = !0), this.startWork && !this.InScreen() && a.default.Despawn("EffectSprite", this.node))
        }, t.prototype.Reset = function () {
          this.startWork = !1, this.stateCheck = !1, this.node.anchorX = .5, this.node.anchorY = .5, this.node.opacity = 255, this.node.angle = 0, this.node.scale = 1, this.node.color = cc.Color.WHITE, this.node.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED, this.node.stopAllActions(), this.unscheduleAllCallbacks()
        }, t.prototype.SetSprite = function (e, t) {
          void 0 === t && (t = null), this.node.getComponent(cc.Sprite).spriteFrame = e, null != t && this.node.setContentSize(t.x, t.y)
        }, t.prototype.SetTargetCamera = function (e) {
          this.camera = e
        }, t.prototype.SwitchStateCheck = function (e) {
          this.stateCheck = e
        }, t.prototype.InScreen = function () {
          var e = this.camera.x + cc.winSize.width / 2,
            t = this.camera.x - cc.winSize.width / 2,
            n = this.camera.y + cc.winSize.height / 2,
            o = this.camera.y - cc.winSize.height / 2;
          return this.node.x < e + this.node.width / 2 && this.node.x > t - this.node.width / 2 && this.node.y < n + this.node.height / 2 && this.node.y > o + this.node.height / 2
        }, c([s(cc.String)], t.prototype, "cameraUrl", void 0), t = c([r], t)
      }(cc.Component);
    n.default = l, cc._RF.pop()
  }, {
    "./PoolManager": "PoolManager"
  }],
  FailedUi: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "78235dKIMdFVqcEjSP7q4OM", "FailedUi");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("./GameManager"),
      i = e("../Common/Utils"),
      r = e("./MainGameUi"),
      s = e("../common/PlayerInfo"),
      l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.clickMask = null, t.failedUiBox = null, t.di = null, t.levelTxt = null, t.guan = null, t.continueTip = null, t.scoreLabel = null, t.highScoreNode = null, t.highScore = null, t.highScoreLabel = null, t.resultTxt = null, t.overTxt = null, t.moreGameBtn = null, t.reStartBtn = null, t.failedBoxPos = cc.v2(0, -500), t.standardScore = 0, t.canClick = !1, t.bgMask = null, t.bencichengji = null, t.bencichengjiarr = [], t.gengduoyouxi = null, t.gengduoyouxiarr = [], t.adsButton2 = null, t.bannerButton = null, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this, this.clickMask.setContentSize(cc.winSize.width, cc.winSize.height), this.bgMask.setContentSize(cc.winSize.width, cc.winSize.height), this.failedUiBox.y = cc.winSize.height / 2 + this.failedUiBox.height / 2
        }, t.prototype.start = function () {
          var e = i.default.returnCurrentLanType();
          1 != e && (this.bencichengji.getComponent(cc.Sprite).spriteFrame = this.bencichengjiarr[e - 1], this.gengduoyouxi.getComponent(cc.Sprite).spriteFrame = this.gengduoyouxiarr[e - 1]), this.continueTip.getComponent(cc.Label).string = 1 == e ? "\u70b9\u51fb\u7ee7\u7eed" : 2 == e ? "\u9ede\u64ca\u7e7c\u7e8c" : 4 == e ? "\ud074\ub9ad \ud558\uc5ec \uacc4\uc18d" : "Click Continue", this.reStartBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.55, 1), cc.delayTime(.5)))), cc.tween(this.moreGameBtn).to(.5, {
            scale: 1.1
          }).to(.5, {
            scale: 1
          }).union().repeatForever().start(), cc.tween(this.adsButton2).to(1, {
            scale: .8
          }).to(1, {
            scale: .9
          }).union().repeatForever().start()
        }, t.prototype.update = function (e) {
        }, t.prototype.adsButtonFunc2 = function () {
          if (adLink) {
            window.location.href = adLink
          }
        }, t.prototype.bannerButtonFunc = function () {
          if (adLink) {
            window.location.href = adLink
          }
        }, t.prototype.ShowFailedUi = function (e, t) {
          var n = this;
          this.scheduleOnce(function () {
            r.default.Instance.HideScorePanel(), n.levelTxt.string = r.default.Instance.level.toString(), n.scoreLabel.string = s.default.score.toString(), n.highScoreLabel.string = t, n.resultTxt.string = n.GetContentByScore(e), n.overTxt.string = "\u5f53\u524d\u5173\u5361\u5df2\u5b8c\u6210" + Math.floor(r.default.Instance.nowYQ / r.default.Instance.passlevelYQ * 100) + "%", n.canClick = !1, n.levelTxt.string = e, n.bgMask.runAction(cc.fadeTo(.36, 150)), n.scheduleOnce(function () {
              i.default.CenteredUi(10, this.di, this.levelTxt.node, this.guan), this.failedUiBox.y = cc.winSize.height / 2 + this.failedUiBox.height / 2, this.failedUiBox.runAction(cc.sequence(cc.moveTo(.36, this.failedBoxPos).easing(cc.easeBackOut()), cc.callFunc(function () {
                this.clickMask.on(cc.Node.EventType.TOUCH_START, this.OnClickCloseMask, this), this.moreGameBtn.on(cc.Node.EventType.TOUCH_START, this.OnClickMoreGame, this), this.continueTip.opacity = 0, this.continueTip.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.5), cc.delayTime(.5), cc.fadeOut(.5)))), this.canClick = !0
              }, this)))
            }, 0)
          }, .5)
        }, t.prototype.HideFailedUi = function () {
          this.canClick = !1;
          var e = cc.v2(0, cc.winSize.height / 2 + this.failedUiBox.height / 2);
          this.failedUiBox.runAction(cc.moveTo(.3, e).easing(cc.easeBackIn()))
        }, t.prototype.OnClickCloseMask = function () {
          this.canClick && 0 == cc.find("Canvas/uiEffectPanel").childrenCount && a.default.Instance.RestartGame()
        }, t.prototype.OnClickMoreGame = function () {
          this.canClick && (this.moreGameBtn.off(cc.Node.EventType.TOUCH_START, this.OnClickMoreGame, this), this.canClick = !1, this.moreGameBtn.runAction(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1))), this.scheduleOnce(function () {
            window.location.href = "http://m.wesane.com/"
          }, .15))
        }, t.prototype.GetContentByScore = function (e) {
          var t = Math.ceil(e / 1500 * 94);
          t > 94 && (t = 94);
          var n = 5 + t;
          return "\u51fb\u8d25\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6\uff01", ["\u51fb\u8d25\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6\uff01", "\u64ca\u6557\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6\uff01", "Beat " + n + " % of global players", "\uc804 \uc138\uacc4" + n + "% \uc758 \uc720 \uc800 \ub97c \uc774 \uacbc \uc2b5 \ub2c8 \ub2e4"][i.default.returnCurrentLanType() - 1]
        }, t.Instance = null, c([d(cc.Node)], t.prototype, "clickMask", void 0), c([d(cc.Node)], t.prototype, "failedUiBox", void 0), c([d(cc.Node)], t.prototype, "di", void 0), c([d(cc.Label)], t.prototype, "levelTxt", void 0), c([d(cc.Node)], t.prototype, "guan", void 0), c([d(cc.Node)], t.prototype, "continueTip", void 0), c([d(cc.Label)], t.prototype, "scoreLabel", void 0), c([d(cc.Node)], t.prototype, "highScoreNode", void 0), c([d(cc.Node)], t.prototype, "highScore", void 0), c([d(cc.Label)], t.prototype, "highScoreLabel", void 0), c([d(cc.Label)], t.prototype, "resultTxt", void 0), c([d(cc.Label)], t.prototype, "overTxt", void 0), c([d(cc.Node)], t.prototype, "moreGameBtn", void 0), c([d(cc.Node)], t.prototype, "reStartBtn", void 0), c([d(cc.Vec2)], t.prototype, "failedBoxPos", void 0), c([d], t.prototype, "standardScore", void 0), c([d(cc.Node)], t.prototype, "bgMask", void 0), c([d(cc.Node)], t.prototype, "bencichengji", void 0), c([d(cc.SpriteFrame)], t.prototype, "bencichengjiarr", void 0), c([d(cc.Node)], t.prototype, "gengduoyouxi", void 0), c([d(cc.SpriteFrame)], t.prototype, "gengduoyouxiarr", void 0), c([d(cc.Node)], t.prototype, "adsButton2", void 0), c([d(cc.Node)], t.prototype, "bannerButton", void 0), t = n = c([u], t)
      }(cc.Component);
    n.default = p, cc._RF.pop()
  }, {
    "../Common/Utils": "Utils",
    "../common/PlayerInfo": "PlayerInfo",
    "./GameManager": "GameManager",
    "./MainGameUi": "MainGameUi"
  }],
  GameConfig: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "f0663sWtfNKCKOL+Hvnt0cI", "GameConfig");
    var o = {
      GameClubButton: null,
      GameScene: null,
      launchScene: null,
      Bros: null,
      caS: null,
      MAIN_MENU_NUM: "Classic",
      gameScore: 0,
      standScore: 30,
      GAME_OVER_BOOL: !0,
      publicGameBool: !1,
      ranLinkData: null,
      recGameData: null,
      InfoData: null,
      endShow0: null,
      endShow1: null,
      endShow2: null,
      endShow3: null,
      infoGameName: null,
      showText: null,
      startText: null,
      moreGameText: null,
      playAgainText: null,
      playNum: 0,
      noTouchBool: !0,
      returnRanNum: function (e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
      }
    };
    t.exports = o, cc._RF.pop()
  }, {}],
  GameFunction: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "922f3dsGCZCHbXJvwDr0rdF", "GameFunction");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../common/PlayerInfo"),
      i = e("./MainGameUi"),
      r = e("../Common/PoolManager"),
      s = e("../Common/Utils"),
      l = e("./GameManager"),
      u = e("./AudioManager"),
      d = e("../common/DynamicLoad"),
      p = cc._decorator,
      f = p.ccclass,
      h = p.property,
      m = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.bgLayer = null, t.bgCamera = null, t.mainCamera = null, t.fruitNode = null, t.lineNode = null, t.bazieffect = null, t.downEffect = null, t.fruitPre = null, t.fruitS = [], t.step = 0, t.guideTime = 0, t.targetFruit = null, t.fruitHeigth = -1200, t.endOne = 0, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this, a.default.playerTouch = !0, a.default.score = 0, a.default.knifeStatic = "Idle", a.default.knifeLR = 1, a.default.GameUpdateCtrl = !0
        }, t.prototype.start = function () {
          a.default.playNum, a.default.bgNumber >= 3 && (a.default.bgNumber = 0), a.default.bgNumber++, a.default.playNum++, cc.tween(this.lineNode.children[0]).to(.3, {
            opacity: 255
          }).to(.3, {
            opacity: 0
          }).union().repeatForever().start(),
            this.lineNode.children[0].active = !1,
            this.fruitS = ["PuTaoS", "YingTaoS", "JuZiS", "NingMengS", "MiHouTaoS", "XiHongShiS", "TaoS", "BoLuoS", "YeZiS", "XiGuaS"],
            this.createOneFruit(firstFruit) // 第一个水果
        }, t.prototype.update = function (e) {
          a.default.GameUpdateCtrl, this.lineNode.children[0].y - n.Instance.fruitHeigth < 100 && this.lineNode.children[0].y - n.Instance.fruitHeigth >= 0 && (this.lineNode.children[0].active = !0), this.lineNode.children[0].y - n.Instance.fruitHeigth > 100 && (this.lineNode.children[0].active = !1)
        }, t.prototype.end = function () {
          var e = this;
          if (0 == this.endOne) {
            for (var t = 0, n = function (n) {
              setTimeout(function () {
                e.createFruitL(e.fruitNode.children[n].getComponent("fruitData").fruitNumber, e.fruitNode.children[n].position, e.fruitNode.children[n].width), a.default.score += e.fruitNode.children[n].getComponent("fruitData").fruitNumber + 1, i.default.Instance.SetScoreTween(a.default.score), e.fruitNode.children[n].active = !1
              }, 100 * ++t)
            }, o = this.fruitNode.children.length - 1; o >= 0; o--) n(o);
            this.lineNode.active = !0;
            for (var c = 1; c < this.lineNode.children.length; c++) this.lineNode.children[c].active = !1;
            a.default.GameUpdateCtrl = !1, this.scheduleOnce(function () {
              l.default.Instance.ToEnd()
            }, 4), this.endOne++
          }
        }, t.prototype.testEnd = function () {
          var e = this;
          if (this.lineNode.children[0].y - n.Instance.fruitHeigth < -20 && 0 == this.endOne) {
            for (var t = 0; t < this.fruitNode.children.length; t++) this.fruitNode.children[t].removeComponent(cc.PhysicsCircleCollider), this.fruitNode.children[t].removeComponent(cc.RigidBody);
            for (var o = function (t) {
              setTimeout(function () {
                e.createFruitL(e.fruitNode.children[t].getComponent("fruitData").fruitNumber, e.fruitNode.children[t].position, e.fruitNode.children[t].width), a.default.score += e.fruitNode.children[t].getComponent("fruitData").fruitNumber + 1, i.default.Instance.SetScoreTween(a.default.score), e.fruitNode.children[t].active = !1
              }, 100 * t)
            }, c = 0; c < this.fruitNode.children.length; c++) o(c);
            this.lineNode.active = !0;
            for (t = 1; t < this.lineNode.children.length; t++) this.lineNode.children[t].active = !1;
            a.default.GameUpdateCtrl = !1, this.scheduleOnce(function () {
              l.default.Instance.ToEnd()
            }, 4), this.endOne++
          }
        }, t.prototype.findHighestFruit = function () {
          for (var e = this.fruitNode.children[0].y, t = 1; t < this.fruitNode.children.length; t++) {
            var n = this.fruitNode.children[t].y + this.fruitNode.children[t].width / 2;
            e < n && (e = n)
          }
          return e
        },
          // 生成水果
          t.prototype.createOneFruit = function (e) {
            var t = this, n = cc.instantiate(this.fruitPre);
            n.parent = this.lineNode;
            n.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e];
            n.children[0].getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e];
            n.getComponent("fruitData").fruitNumber = e;
            n.position = this.lineNode.children[1].position;
            n.scale = 0;
            // 物理引擎
            n.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
            if (fruitSlowDown) {
              n.getComponent(cc.RigidBody).linearDamping = fruitSlowDown;
            }
            n.getComponent(cc.PhysicsCircleCollider).radius = 0;
            // 让说过更 Q 弹
            if (fruitQTan) {
              n.getComponent(cc.PhysicsCircleCollider).restitution = fruitQTan;
            }
            n.getComponent(cc.PhysicsCircleCollider).apply();
            cc.tween(n).to(.5, {scale: 1}, {
              easing: "backOut"
            }).call(function () {
              t.targetFruit = n
            }).start()
          }, t.prototype.createLevelUpFruit = function (e, t) {
          var o = cc.instantiate(this.fruitPre);
          o.parent = this.fruitNode, o.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e], o.children[0].getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruit[e], o.getComponent("fruitData").fruitNumber = e, o.position = t, o.scale = 0, o.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -100), o.getComponent(cc.PhysicsCircleCollider).radius = o.height / 2, o.getComponent(cc.PhysicsCircleCollider).apply(), cc.tween(o).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).call(function () {
            null != o.getComponent(cc.PhysicsCircleCollider) && (o.getComponent(cc.PhysicsCircleCollider).radius = o.height / 2, o.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic, o.getComponent(cc.PhysicsCircleCollider).apply())
          }).start(), n.Instance.fruitHeigth = n.Instance.findHighestFruit()
        }, t.prototype.createFruitSui = function (e, t) {
        }, t.prototype.createFruitL = function (e, t, n) {
          u.default.Instance.Play(3, !1, .5), u.default.Instance.Play(6, !1, .3);
          for (var o = 0; o < 10; o++) {
            var c = r.default.Spawn("juicePre", this.downEffect);
            c.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fruitL[e];
            var a = 359 * Math.random(),
              i = 30 * Math.random() + n / 2,
              l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
            c.scale = .5 * Math.random() + n / 100;
            var p = .5 * Math.random();
            c.position = t, c.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3), cc.rotateBy(p + .5, s.default.RandomInteger(-360, 360))), cc.fadeOut(.1), cc.callFunc(function () {
              h.active = !1
            }, this)))
          }
          for (var f = 0; f < 20; f++) {
            var h = r.default.Spawn("juicePre", this.downEffect);
            h.getComponent(cc.Sprite).spriteFrame = d.default.Instance.guozhiL[e], h.active = !0;
            a = 359 * Math.random(), i = 30 * Math.random() + n / 2, l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
            h.scale = .5 * Math.random() + n / 100;
            p = .5 * Math.random();
            h.position = t, h.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3)), cc.fadeOut(.1), cc.callFunc(function () {
              h.active = !1
            }, this)))
          }
          var m = r.default.Spawn("juicePre", this.downEffect);
          m.getComponent(cc.Sprite).spriteFrame = d.default.Instance.guozhiZ[e], m.position = t, m.scale = 0, m.angle = s.default.RandomInteger(0, 360), m.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, n / 150), cc.fadeOut(1)), cc.callFunc(function () {
            m.active = !1
          })))
        }, t.prototype.levelUpEffect = function () {
          for (var e = 0; e < 25; e++) {
            var t = r.default.Spawn("lightEffect", this.downEffect);
            t.scale = .3 * Math.random() + .2, t.opacity = 210;
            var n = 360 * Math.random() * Math.PI / 180,
              o = 20 * Math.random(),
              c = 35 + 60 * Math.random(),
              a = cc.v2(Math.sin(n) * (o + c), Math.cos(n) * (o + c));
            cc.tween(t).to(.8, {
              position: a,
              angle: s.default.getRandomNum(180, 360, !0),
              opacity: s.default.getRandomNum(.4, .8)
            }, {
              easing: "cubicOut"
            }).then(cc.removeSelf(!0))
          }
        }, t.prototype.conboHit = function (e) {
          var t = this;
          u.default.Instance.Play(5, !1, .5);
          var n = r.default.Spawn("addScore", this.bazieffect);
          n.position = cc.v2(0, -200), n.scale = .2, n.children[0].getComponent(cc.Label).string = e, n.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 1), cc.moveBy(.3, 0, 200), cc.rotateBy(.3, 720), cc.callFunc(function () {
            t.getScore(10 * e, cc.v2(0, -200), .8, .5)
          })), cc.fadeOut(.5))), this.levelUpEffect()
        }, t.prototype.getScore = function (e, t, n, o) {
          var c = r.default.Spawn("score", this.bazieffect);
          c.position = t, c.scale = .2, c.children[1].getComponent(cc.Label).string = e, c.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, n), cc.moveBy(.3, 0, 150), cc.rotateBy(.3, 720)), cc.fadeOut(o)))
        }, t.prototype.ribbonEffect = function (e) {
          u.default.Instance.Play(3, !1, 1);
          for (var t = s.default.getRandomNum(80, 100), n = 0; n < t; n++) {
            var o = r.default.Spawn("star", this.bazieffect);
            o.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fllows[s.default.getRandomNum(0, 5, !0)], o.position = e;
            e.x;
            o.setScale(s.default.getRandomNum(.7, 1));
            var c = 360 * Math.random() * Math.PI / 180,
              a = 360 * Math.random(),
              i = cc.v2(o.x + Math.sin(c) * a, o.y + Math.cos(c) * a + 150);
            cc.v2(i.x, i.y + 100);
            o.runAction(cc.sequence(cc.spawn(cc.moveTo(.255, i).easing(cc.easeCubicActionOut()), cc.scaleTo(.255, 1 * Math.random() + .5), cc.moveBy(4.25, cc.v2(0, .8 * -cc.winSize.height - Math.random() * cc.winSize.height)), cc.rotateBy(4.25, (1800 * Math.random() + 1200) * (Math.random() > .5 ? 1 : -1)), cc.sequence(cc.moveBy(.17 * (8 * Math.random() + 6), cc.v2((100 * Math.random() + 100) * (Math.random() > .5 ? -1 : 1), 0)), cc.moveBy(.17 * (8 * Math.random() + 6), cc.v2((100 * Math.random() + 100) * (Math.random() > .5 ? -1 : 1), 0)), cc.moveBy(.17 * (8 * Math.random() + 6), cc.v2((100 * Math.random() + 100) * (Math.random() > .5 ? -1 : 1), 0))), cc.sequence(cc.delayTime(.17 * s.default.getRandomNum(20, 24.5)), cc.fadeOut(.17))), cc.removeSelf(!0)))
          }
        }, t.prototype.ShowLandParti = function (e, t) {
          for (var n = t, o = [cc.v2(e.position.x - 8, e.position.y), cc.v2(e.position.x + 8, e.position.y)], c = 0; c < o.length; c++) {
            if (o[c].x < e.position.x) var a = -1;
            else a = 1;
            for (var i = function () {
              var t = r.default.Spawn("juicePre", e);
              t.setSiblingIndex(4), t.getComponent(cc.Sprite).spriteFrame = d.default.Instance.fllows[s.default.getRandomNum(0, 5, !0)], t.stopAllActions(), t.opacity = 255, t.scale = .3;
              var n = o[c];
              t.setPosition(n);
              var i = cc.v2(s.default.getRandomNum(0, 400, !0) * a, -s.default.getRandomNum(300, 500, !0)),
                u = s.default.getRandomNum(1440, 3600, !0) * a,
                p = s.default.getRandomNum(450, 600, !0);
              t.runAction(cc.sequence(cc.spawn(cc.sequence(cc.jumpBy(s.default.RandomInteger(1500, 1700) / p, i, p, 1), cc.spawn(cc.moveBy(50 / p, cc.v2(0, -30)), cc.fadeOut(50 / p))), cc.scaleTo(s.default.RandomInteger(1500, 1700) / p, s.default.getRandomNum(.4, .7, !1)), cc.rotateTo(s.default.RandomInteger(1500, 1700) / p, u / 2)), cc.callFunc(function () {
                r.default.Despawn("juicePre", t)
              }, l)))
            }, l = this, u = 0; u < n; u++) i()
          }
        }, t.Instance = null, c([h(cc.Node)], t.prototype, "bgLayer", void 0), c([h(cc.Node)], t.prototype, "bgCamera", void 0), c([h(cc.Node)], t.prototype, "mainCamera", void 0), c([h(cc.Node)], t.prototype, "fruitNode", void 0), c([h(cc.Node)], t.prototype, "lineNode", void 0), c([h(cc.Node)], t.prototype, "bazieffect", void 0), c([h(cc.Node)], t.prototype, "downEffect", void 0), c([h(cc.Prefab)], t.prototype, "fruitPre", void 0), t = n = c([f], t)
      }(cc.Component);
    n.default = m, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager",
    "../Common/Utils": "Utils",
    "../common/DynamicLoad": "DynamicLoad",
    "../common/PlayerInfo": "PlayerInfo",
    "./AudioManager": "AudioManager",
    "./GameManager": "GameManager",
    "./MainGameUi": "MainGameUi"
  }],
  GameManager: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "e5ba8qbQSBBz6Xl6OzdDwcL", "GameManager");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("./FailedUi"),
      i = e("./MainGameUi"),
      r = e("./DataManager"),
      s = e("../common/PlayerInfo"),
      l = cc._decorator,
      u = l.ccclass,
      d = (l.property, function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.isStart = !1, t.level = 0, t.score = 0, t.inGuide = !1, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this, cc.find("Canvas/bgLayer").setContentSize(cc.winSize.width, cc.winSize.height)
        }, t.prototype.start = function () {
          this.PhysicsSystemCtrl(!0, !1)
        }, t.prototype.update = function (e) {
        }, t.prototype.lateUpdate = function () {
          this.score = s.default.score
        }, t.prototype.SetScore = function (e) {
          this.score = e, i.default.Instance.SetScoreTween(this.score)
        }, t.prototype.GameOver = function () {
          var e = cc.find("Canvas").getComponent("MainGameJS"),
            t = r.default.Instance.GetPlayerHighScore();
          this.score > t && (t = this.score, r.default.Instance.SetPlayerHighScore(t)), e.SetScore(this.score), e.SetGameEndScore(), a.default.Instance.ShowFailedUi(s.default.score, t)
        }, t.prototype.RestartGame = function () {
          cc.find("Canvas").getComponent("MainGameJS").RestartGame()
        }, t.prototype.GetGameEndShowInfo = function () {
          return cc.find("Canvas").getComponent("MainGameJS").GetGameEndInfo()
        }, t.prototype.ToEnd = function () {
          cc.find("Canvas").getComponent("MainGameJS").gameEnd1()
        }, t.prototype.PhysicsSystemCtrl = function (e, t) {
          cc.director.getPhysicsManager().enabled = e, cc.director.getPhysicsManager().gravity = cc.v2(0, -300), t && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit), cc.director.getCollisionManager().enabled = e, cc.director.getCollisionManager().enabledDebugDraw = t
        }, t.Instance = null, t.isShowAd = !1, t = n = c([u], t)
      }(cc.Component));
    n.default = d, cc._RF.pop()
  }, {
    "../common/PlayerInfo": "PlayerInfo",
    "./DataManager": "DataManager",
    "./FailedUi": "FailedUi",
    "./MainGameUi": "MainGameUi"
  }],
  GameUiTools: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "b21e8tF461OFalpptyeuAE2", "GameUiTools");
    e("GameConfig");
    var o = {
      newSprite: function (e, t) {
        var n = new cc.Node;
        return t ? (e = e.split(".")[0], n.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(e)) : n.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/resources/" + e), n
      },
      setNodeSpriteFrame: function (e, t) {
        e.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(t)
      },
      setButtonClickEvents: function (e, t, n, o, c) {
        var a = new Array;
        void 0 == t.length ? a[0] = t : a = t;
        for (var i = 0; i < a.length; i++) {
          var r = new cc.Component.EventHandler;
          r.target = e.node, r.component = e.node.name, r.handler = n, void 0 == t.length ? r.customEventData = o : r.customEventData = i;
          var s = a[i].addComponent(cc.Button);
          s.clickEvents.push(r), (void 0 == c || c) && (s.transition = cc.Button.Transition.SCALE, s.duration = .1, s.zoomScale = 1.2)
        }
      },
      scheduleOnce: function (e, t, n) {
        e.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(t, e)))
      },
      loadingScene: function (e, t) {
        t ? cc.loader.loadRes("panel/LoadingLayer", function (t, n) {
          var o = cc.instantiate(n);
          cc.director.getScene().children[0].addChild(o), cc.director.preloadScene(e, function () {
            cc.director.loadScene(e)
          })
        }) : cc.director.preloadScene(e, function () {
          cc.director.loadScene(e)
        })
      },
      loadingLayer: function (e) {
        cc.loader.loadRes(e, function (e, t) {
          if (!e) {
            var n = cc.instantiate(t);
            cc.director.getScene().children[0].addChild(n, 100)
          }
        })
      }
    };
    t.exports = o, cc._RF.pop()
  }, {
    GameConfig: "GameConfig"
  }],
  HttpManagerJs: [function (e, t, n) {
    "use strict";
    var o;

    function c(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    cc._RF.push(t, "197e1hfNnxIcJx73V3VhUxY", "HttpManagerJs");
    var a = e("GameConfig"),
      i = (c(o = {
        URL: "http://www.wesane.com/h5service.php/Interface/services",
        cacheList: null,
        isBusy: null,
        req: null,
        perform: null,
        retGameId: 0
      }, "cacheList", []), c(o, "ctor", function () {
      }), c(o, "checkHave", function () {
        this.isBusy || this.sendOne()
      }), c(o, "httpInitUrl", function (e) {
        console.log("data", this.URL), this.retGameId = e
      }), c(o, "send", function (e, t, n, o) {
        this.cacheList.push({
          type: e,
          data: t,
          func: n,
          target: o
        }), this.isBusy || this.sendOne()
      }), c(o, "sendOne", function () {
        if (0 != this.cacheList.length) {
          this.isBusy = !0, this.perform = this.cacheList.shift(), this.req = cc.loader.getXMLHttpRequest(), this.req.onreadystatechange = this.onDataHandler.bind(this), this.req.onerror = this.onErrorHandler.bind(this), this.req.ontimeout = this.onTimeoutHandler.bind(this), this.req.timeout = 2e3, cc.log("pos", this.URL), this.req.open("POST", this.URL), this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
          var e = this.returnLanguage();
          console.log("gameIdid", this.retGameId);
          var t = this.retGameId,
            n = {
              type: this.perform.type,
              gid: t,
              mid: null,
              data: this.perform.data,
              languageType: e
            },
            o = "send=" + JSON.stringify(n);
          this.req.send(o)
        }
      }), c(o, "onDataHandler", function () {
        if (404 != this.req.status) {
          if (4 == this.req.readyState && this.req.status >= 200 && this.req.status <= 207 && this.req.responseText) {
            var e = JSON.parse(this.req.responseText);
            this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, e.error, e.data, e.commendGame, e.gameInfo) : this.perform.func(e)
          }
        } else {
          var t = a.launchScene,
            n = a.Bros;
          a.caS;
          cc.director.loadScene(t, null, function () {
            if (n) {
              "";
              var e = document.getElementById("GameDiv");
              e && (e.style.backgroundImage = "")
            }
            cc.loader.onProgress = null, console.log("Success to load scene: " + t)
          })
        }
      }), c(o, "returnLanguage", function () {
        return ("" + window.navigator.language).toLocaleLowerCase()
      }), c(o, "onErrorHandler", function () {
        cc.log("\u7f51\u7edc\u9519\u8bef"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
      }), c(o, "onTimeoutHandler", function () {
        cc.log("\u8bf7\u6c42\u8d85\u65f6"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
      }), c(o, "clearAll", function () {
        for (var e = this.cacheList.length, t = 0; t < e; t++) {
          var n = this.cacheList[t];
          n && (n.target ? n.func.call(n.target, -1) : n.func(-1))
        }
        this.cacheList.length = 0
      }), o);
    t.exports = i, cc._RF.pop()
  }, {
    GameConfig: "GameConfig"
  }],
  InputController: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "2fb79pURUZExoy/hAOtHdvz", "InputController");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("./GameFunction"),
      i = e("../common/PlayerInfo"),
      r = e("../Common/PoolManager"),
      s = e("../Common/Utils"),
      l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.Rocker = null, t.stick = null, t.Max_r = 100, t.RockerJS = null, t.speed = 400, t.Arrow = null, t.knife = null, t.startPoint = null, t.touchPoint = null, t.endPoint = null, t.ddir = cc.v2(0, 0), t.isCut = !1, t.comboTime = 0, t.comboInterval = .4, t.comboNumber = 0, t.comboMaxNum = 7, t.touchNum = 0, t.createFruitCount = 0, t.istest = !1, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this
        }, t.prototype.start = function () {
          this.openTouch(), this.RockerJS = this.Rocker.getComponent("Rocker")
        }, t.prototype.update = function (e) {
        }, t.prototype.openTouch = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
        }, t.prototype.onTouchStart = function (e) {
          if (i.default.playerTouch && null != a.default.Instance.targetFruit) {
            this.touchNum = 1;
            var t = this.node.convertToNodeSpaceAR(e.getLocation()).x,
              n = a.default.Instance.targetFruit.y;
            cc.tween(a.default.Instance.targetFruit).to(.1, {
              position: cc.v2(t, n)
            }).start()
          }
        }, t.prototype.onTouchMove = function (e) {
          i.default.playerTouch && null != a.default.Instance.targetFruit && (this.touchNum = 1, a.default.Instance.targetFruit.x = this.node.convertToNodeSpaceAR(e.getLocation()).x)
        }, t.prototype.onTouchEnd = function (e) {
          var t = this;
          i.default.playerTouch && null != a.default.Instance.targetFruit && 1 == this.touchNum && (this.touchNum = 0, a.default.Instance.targetFruit.getComponent(cc.PhysicsCircleCollider).radius = a.default.Instance.targetFruit.height / 2, a.default.Instance.targetFruit.getComponent(cc.PhysicsCircleCollider).apply(), a.default.Instance.targetFruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic, a.default.Instance.targetFruit.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -800), a.default.Instance.targetFruit = null,
            // 生成指定水果
            this.scheduleOnce(function () {
              i.default.GameUpdateCtrl && (0 == t.createFruitCount ? (a.default.Instance.createOneFruit(0),
                t.createFruitCount++) : 1 == t.createFruitCount ? (a.default.Instance.createOneFruit(0),
                t.createFruitCount++) : 2 == t.createFruitCount ? (a.default.Instance.createOneFruit(1),
                t.createFruitCount++) : 3 == t.createFruitCount ? (a.default.Instance.createOneFruit(2),
                t.createFruitCount++) : 4 == t.createFruitCount ? (a.default.Instance.createOneFruit(2),
                t.createFruitCount++) : 5 == t.createFruitCount ? (a.default.Instance.createOneFruit(3),
                t.createFruitCount++) : t.createFruitCount > 5 &&
                (a.default.Instance.createOneFruit(s.default.RandomInteger(0, 5)),
                  t.createFruitCount++))
            }, .5))
        }, t.prototype.closeTouch = function () {
          this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
        }, t.prototype.addScore = function () {
          var e = r.default.Spawn("addScore", cc.find("Canvas/downEffParent"));
          e.position = cc.v2(0, 200), e.scale = 0, e.opacity = 255, e.children[1].getComponent(cc.Label).string = this.comboNumber.toString(), e.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 1), cc.moveBy(.5, 0, 200)), cc.fadeOut(.5), cc.callFunc(function () {
            r.default.Despawn("addScore", e)
          })))
        }, t.Instance = null, c([d(cc.Node)], t.prototype, "Rocker", void 0), c([d(cc.Node)], t.prototype, "stick", void 0), c([d], t.prototype, "Max_r", void 0), c([d(cc.Node)], t.prototype, "Arrow", void 0), c([d(cc.Node)], t.prototype, "knife", void 0), t = n = c([u], t)
      }(cc.Component);
    n.default = p, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager",
    "../Common/Utils": "Utils",
    "../common/PlayerInfo": "PlayerInfo",
    "./GameFunction": "GameFunction"
  }],
  KnifeCollision: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "bf98eOWbcJGeLpI/I0HGW8j", "KnifeCollision");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../common/PlayerInfo"),
      i = e("./GameFunction"),
      r = e("../Common/PoolManager"),
      s = e("../Common/Utils"),
      l = e("./GameManager"),
      u = e("./InputController"),
      d = e("./MainGameUi"),
      p = e("./AudioManager"),
      f = cc._decorator,
      h = f.ccclass,
      m = f.property,
      g = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.starPre = null, t.Arrow = null, t.prefabStrArr = [], t
        }

        return o(t, e), t.prototype.start = function () {
        }, t.prototype.update = function (e) {
        }, t.prototype.onCollisionEnter = function (e, t) {
          if ("bazi" == e.node.group) {
            var n;
            if (a.default.tuoweiCtrl = !1, a.default.playerTouch = !0, e.node.stopAllActions(), t.node.children[2].getComponent(cc.ParticleSystem).stopSystem(), i.default.Instance.ribbonEffect(t.node.position, e.node, !0), e.node.removeComponent(cc.PolygonCollider), t.node.stopAllActions(), a.default.knifeLR = t.node.x > 0 ? 1 : -1, t.node.children[1].scaleX = -a.default.knifeLR, this.great(t.node, e.node), i.default.Instance.CameraAoto(), i.default.Instance.CreateBazi(a.default.knifeLR), -1 == a.default.knifeLR) (n = r.default.Spawn("arrowL", this.node.parent)).position = this.node.position, u.default.Instance.Arrow = n, n.active = !0, n.angle = -45, n.position = this.node.position, n.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.8, -50), cc.rotateBy(1.6, 100), cc.rotateBy(.8, -50)))), t.node.runAction(cc.sequence(cc.moveBy(.05, -20, 0), cc.moveBy(.05, 20, 0))), e.node.runAction(cc.sequence(cc.moveBy(.05, -20, 0), cc.moveBy(.05, 20, 0)));
            else (n = r.default.Spawn("arrowR", this.node.parent)).position = this.node.position, u.default.Instance.Arrow = n, n.active = !0, n.angle = 45, n.position = this.node.position, n.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.8, -50), cc.rotateBy(1.6, 100), cc.rotateBy(.8, -50)))), t.node.runAction(cc.sequence(cc.moveBy(.05, 20, 0), cc.moveBy(.05, -20, 0))), e.node.runAction(cc.sequence(cc.moveBy(.05, 20, 0), cc.moveBy(.05, -20, 0)));
            t.node.children[0].active = !1, t.node.children[1].active = !0
          } else if ("default" == e.node.group) {
            t.node.children[2].getComponent(cc.ParticleSystem).stopSystem(), e.node.removeComponent(cc.PolygonCollider), t.node.stopAllActions(), a.default.knifeLR = t.node.x > 0 ? 1 : -1, t.node.children[0].active = !1, t.node.children[1].active = !0;
            for (var o = 0; o < cc.find("Canvas/baziNode").children.length; o++) cc.find("Canvas/baziNode").children[o].stopAllActions();
            a.default.playerTouch = !1, l.default.Instance.ToEnd(), p.default.Instance.Play(0, !1, 1), p.default.Instance.Play(4, !1, 1)
          }
        }, t.prototype.onCollisionStay = function (e, t) {
        }, t.prototype.onCollisionExit = function (e, t) {
        }, t.prototype.great = function (e, t) {
          if (Math.abs(e.y - t.y) <= 15) {
            p.default.Instance.Play(1, !1, 1), a.default.tuoweiCtrl = !0, d.default.Instance.InjuredEffect();
            var n = r.default.Spawn("great", cc.find("Canvas/bazieffect"));
            e.x > 0 ? n.position = cc.v2(e.x - 40, e.y) : n.position = cc.v2(e.x + 40, e.y), n.runAction(cc.sequence(cc.spawn(cc.moveBy(.4, 0, 200), cc.rotateBy(.4, 360)), cc.scaleTo(.15, 1.1), cc.scaleTo(.15, 1), cc.fadeOut(.2))), a.default.score += 10, d.default.Instance.SetScoreTween(a.default.score)
          } else p.default.Instance.Play(0, !1, 1), a.default.score += 5, d.default.Instance.SetScoreTween(a.default.score)
        }, t.prototype.GhostBornEff = function (e, t) {
          for (var n = s.default.RandomInteger(24, 36), o = 0; o < n; o++) {
            var c = r.default.Spawn("star", cc.find("Canvas/downEffParent"));
            c.position = e, c.opacity = 0, c.scale = s.default.Random(.5, 1), c.angle = s.default.Random(0, 360);
            var a = cc.v2(0, 1);
            a.rotateSelf(s.default.AngleToRadian(360 * Math.random()));
            var i = s.default.Random(20, 150);
            c.position.add(a.mul(s.default.Random(0, 30)));
            var l = s.default.Random(.3, .5),
              u = s.default.Random(.01, .012);
            c.runAction(cc.sequence(cc.delayTime(u), cc.delayTime(.6 * l), cc.scaleTo(.4 * l, 0))), c.opacity = 0, c.runAction(cc.sequence(cc.delayTime(u), cc.fadeTo(.1, s.default.Random(120, 240)))), c.runAction(cc.sequence(cc.delayTime(u), cc.moveBy(l, a.mul(i)).easing(cc.easeCubicActionOut()), cc.callFunc(function (e) {
              r.default.Despawn("star", e)
            }, this)));
            s.default.Random(0, 100)
          }
        }, t.prototype.createLizi = function (e, t) {
          for (var n = 0; n < 10; n++) {
            var o = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
            o.scale = .1 * t, o.position = s.default.convetOtherNodeSpaceAR(e, cc.find("Canvas/upEffectParent")), 1 == t && (o.color = (new cc.Color).fromHEX("ffc049"));
            var c = new Array;
            c.push(-360, 360), o.runAction(cc.sequence(cc.spawn(cc.jumpBy(.5, s.default.RandomInteger(-100, 100), s.default.RandomInteger(-200, -100), s.default.RandomInteger(0, 50), 1), cc.rotateTo(.5, s.default.RandomIndexFromArr(c)), cc.fadeOut(.5)), cc.delayTime(.1)))
          }
        }, t.prototype.createWord = function (e) {
          var t = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
          t.position = s.default.convetOtherNodeSpaceAR(this.node, cc.find("Canvas/upEffectParent")), 2 == e ? (t.scale = .3, t.opacity = 200, t.runAction(cc.sequence(cc.spawn(cc.rotateBy(.2, 400), cc.moveBy(.2, 0, 100)), cc.scaleTo(.2, .5), cc.scaleTo(.2, .4), cc.fadeOut(.1)))) : (t.scale = .5, t.runAction(cc.sequence(cc.spawn(cc.rotateBy(.2, 400), cc.moveBy(.2, 0, 100)), cc.scaleTo(.2, .6), cc.scaleTo(.2, .5), cc.fadeOut(.1))))
        }, t.prototype.createSuipian = function () {
          var e = r.default.Spawn("suipian", this.node.parent);
          e.position = cc.v2(0, 0), e.scale = cc.find("Canvas/baziNodeU").children[0].children[0].scale
        }, t.prototype.createStar = function () {
          var e = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
          e.scale = s.default.Random(.1, 1);
          var t = this.node.x + this.node.width / 2,
            n = this.node.x - this.node.width / 2,
            o = this.node.y;
          e.position = cc.v2(s.default.RandomInteger(n, t), o), e.runAction(cc.fadeOut(2))
        }, t.prototype.planeBoomEffect = function () {
          r.default.Spawn("boom", cc.find("Canvas/upEffectParent")).position = s.default.convetOtherNodeSpaceAR(this.node, cc.find("Canvas/upEffectParent"))
        }, t.prototype.clockEoilffect = function (e, t) {
          for (var n = 0; n < 3; n++) setTimeout(function () {
            var t = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
            t.position = e.position, t.scale = .3, t.runAction(cc.sequence(cc.scaleTo(.5, 1.1), cc.fadeOut(.5)))
          }, 300 * n)
        }, t.prototype.addScoreEffect = function () {
          var e = r.default.Spawn("add1", cc.find("Canvas/mainGameUi"));
          e.position = cc.find("Canvas/mainGameUi").children[0].position.add(cc.v2(0, 50)), e.runAction(cc.spawn(cc.moveBy(.5, 0, 50), cc.fadeOut(.5)))
        }, c([m(cc.Prefab)], t.prototype, "starPre", void 0), c([m(cc.Node)], t.prototype, "Arrow", void 0), c([m(cc.Prefab)], t.prototype, "prefabStrArr", void 0), t = c([h], t)
      }(cc.Component);
    n.default = g, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager",
    "../Common/Utils": "Utils",
    "../common/PlayerInfo": "PlayerInfo",
    "./AudioManager": "AudioManager",
    "./GameFunction": "GameFunction",
    "./GameManager": "GameManager",
    "./InputController": "InputController",
    "./MainGameUi": "MainGameUi"
  }],
  LanguageSetJs: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "4754e8KuPZJCqklCNyKpG29", "LanguageSetJs");
    t.exports = {
      language_1: {
        game_name: "\u300c\u5c04\u82f9\u679c\u300d",
        game_name1: "\u5c04\u82f9\u679c",
        game_info: "\u628a\u63e1\u65f6\u673a\uff0c\u5c04\u4e2d\u82f9\u679c\u3002",
        txtStart: "\u5f00\u59cb",
        txtMore: "\u66f4\u591a\u6e38\u620f",
        txtAgain: "\u518d\u73a9\u4e00\u6b21",
        txtShare1: "\u5728\u6e38\u620f\u4e2d ",
        txtShare2: "\u5f97\u5206\u4e86\uff0c\u597d\u554a!\u4f60\u548c\u6211\u4e00\u8d77\u6765\u6bd4\u8d5b!",
        bgRgb: "#3698C5",
        gameT1: "\u5173\u6ce8\u6211\u4eec",
        gameT2: "\u7eb8\u724c\u63a5\u9f99",
        gameT3: "\u9526\u4e0a\u6dfb\u82b1",
        gameUrl1: "http://g.regogame.com/game/9/",
        gameUrl2: "http://g.regogame.com/game/3/",
        gameT11: "\u5173\u6ce8\u5fae\u4fe1",
        gameT12: "\u5173\u6ce8Kakao",
        gameT13: "\u5173\u6ce8Line",
        gameEndL: "\u6e38 \u620f \u7ed3 \u675f",
        gameEndL1: "\u7a0d \u5019 \u67e5 \u770b \u5206 \u6570"
      },
      language_2: {
        game_name: "\u300cShot Apples\u300d",
        game_name1: "Shot Apples",
        game_info: "Seize the opportunity and shoot the apple.",
        txtStart: "Start",
        txtMore: "More Game",
        txtAgain: "Play Again",
        txtShare1: "In Game ",
        txtShare2: " Let's play together!",
        bgRgb: "#3698C5",
        gameT1: "Follow Us",
        gameT2: "Thousand Flower",
        gameT3: "Eliminate Star",
        gameUrl1: "http://g.fromgame.com/game/53",
        gameUrl2: "http://g.fromgame.com/game/13",
        gameT11: "Focus WeChat",
        gameT12: "Focus Kakao",
        gameT13: "Focus Line",
        gameEndL: "Game OVer",
        gameEndL1: "View the score later"
      }
    }, cc._RF.pop()
  }, {}],
  LoadSceneJs: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "3ef908fwfNIwJsOjET8tCh2", "LoadSceneJs");
    var o = {
      goToCover: function (e, t, n, o, c) {
        var a = e;
        a = null == a || void 0 == a || e, console.log("LoadBoolBeforeLoadS", a), this.needShow = !1, a && a ? (this.needShow = !0, showMyAds()) : this.needShow = !1, this.needShow ? (void 0 == preloader && this.startGoToGame(n, o, c), resCompleteFlag = !0, adCompleteFlag && resCompleteFlag && this.startGoToGame(n, o, c)) : this.startGoToGame(n, o, c)
      },
      startGoToGame: function (e, t, n) {
        console.log("goToScene"), noAdGoToScene()
      }
    };
    t.exports = o, cc._RF.pop()
  }, {}],
  MainGameJS: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "0e7a8SkMLxEY7nCB1Bqi8WZ", "MainGameJS");
    var o = e("GameConfig"),
      c = e("GameUiTools"),
      a = e("MainManage");
    cc.Class({
      extends: cc.Component,
      properties: {
        gameEndLay: cc.Node,
        startBgNode: cc.Node,
        sceneScore: cc.Label,
        gameOverT1: cc.Label,
        gameOverT2: cc.Label,
        gameOverToEnd: cc.Node
      },
      onLoad: function () {
        cc.director.getCollisionManager().enabled = !0, cc.director.getPhysicsManager().enabled = !0, this.gameOveEndBool = !1, this.gameOverNum = 0, this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, o.playNum, o.playNum++, c.loadingLayer("panel/LinkIconSpr"), o.mainGameJs = this, o.publicGameBool || this.play()
      },
      play: function () {
        console.log(1);
        var e = this;
        adBreak({
          type: "next",
          name: "restart-game",
          beforeBreak: function () {
            e.enableButtons()
          },
          afterBreak: function () {
            e.enableButtons()
          }
        })
      },
      enableButtons: function () {
      },
      addTouchEvents: function () {
        var e = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
          if (o.GAME_OVER_BOOL && o.noTouchBool) return o.gameScore++, e.sceneScore.string = o.gameScore, console.log("ggoog", o.gameScore), o.gameScore >= 2 && (this.lastPos = t.getLocation(), e.gameEnd()), !0
        }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this)
      },
      on_touch_move: function () {
        console.log("touchMoved")
      },
      on_touch_end: function () {
        console.log("touchEnd")
      },
      gameEnd: function () {
        o.GAME_OVER_BOOL = !1, a.gameOverShowText(o.gameScore, 1), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.gameEnd1.bind(this))))
      },
      returnCurrentLanType: function () {
        var e = 1;
        switch (cc.sys.language) {
          case cc.sys.LANGUAGE_CHINESE:
            "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
            break;
          case cc.sys.LANGUAGE_KOREAN:
            e = 4;
            break;
          default:
            e = 3
        }
        return e
      },
      gameEnd1: function () {
        var e = this,
          t = this.returnCurrentLanType();
        1 == t ? (this.gameOverT1.string = "\u6e38 \u620f \u7ed3 \u675f", this.gameOverT2.string = "\u70b9 \u51fb \u67e5 \u770b \u5206 \u6570") : 2 == t ? (this.gameOverT1.string = "\u904a \u6232 \u7d50 \u675f", this.gameOverT2.string = "\u9ede \u64ca \u67e5 \u770b \u5206 \u6578") : 4 == t ? (this.gameOverT1.string = "\uac8c\uc784 \uc885\ub8cc", this.gameOverT2.string = "\ud074\ub9ad \ud558\uc5ec \uc810\uc218 \ubcf4\uae30") : (this.gameOverT1.string = "Game Over", this.gameOverT2.string = "Click to view the score"), this.gameOveEndBool = !0, this.gameOverT1.node.zIndex = 999, this.gameOverT2.node.zIndex = 999, this.gameOverToEnd.zIndex = 999, this.gameOverT1.node.opacity = 0, this.gameOverT1.node.y = 100, this.gameOverToEnd.y = 0, this.gameOverT1.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3))), this.gameOverToEnd.runAction(cc.sequence(cc.fadeTo(1, 100), cc.callFunc(function () {
          e.gameOverToEnd.getComponent(cc.Button).enabled = !0
        }))), this.gameOverT2.node.opacity = 0, this.gameOverT2.node.y = this.gameOverT1.node.y - 100, this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3))), this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(2), cc.scaleTo(.3, 1.2).easing(cc.easeSineInOut()), cc.scaleTo(.3, 1).easing(cc.easeSineInOut()))).repeatForever()
      },
      initEndLayer: function () {
        this.gameOverT1.node.active = !1, this.gameOverT2.node.active = !1, this.gameOverToEnd.active = !1, o.publicGameBool || adBreak({
          type: "next",
          name: "restart-game"
        }), a.gotoEndLayer1()
      },
      start: function () {
      },
      update: function (e) {
        this.gameOverGoToOVer()
      },
      gameOverGoToOVer: function () {
        this.gameOveEndBool && (this.gameOverNum++, this.gameOverNum >= 900 && (this.gameOverNum = 0, this.gameOveEndBool = !1))
      },
      SetScore: function (e) {
        o.gameScore = e
      },
      RestartGame: function () {
        o.GAME_OVER_BOOL = !0, o.gameScore = 0, o.publicGameBool || adBreak({
          type: "next",
          name: "restart-game"
        }), c.loadingScene("MainGameScene")
      },
      SetGameEndScore: function () {
        a.gameOverShowText(o.gameScore, 1)
      },
      GetGameEndInfo: function () {
        return a.endHttpShowInfo
      }
    }), cc._RF.pop()
  }, {
    GameConfig: "GameConfig",
    GameUiTools: "GameUiTools",
    MainManage: "MainManage"
  }],
  MainGameUi: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "47901xGYuJBULv7U12/mbpk", "MainGameUi");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../common/PlayerInfo"),
      i = e("./EffectCenter"),
      r = e("./AudioManager"),
      s = e("./DataManager"),
      l = e("../commonJs/GameConfig"),
      u = e("../common/DynamicLoad"),
      d = cc._decorator,
      p = d.ccclass,
      f = d.property,
      h = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.mainCamera = null, t.bgLayer = null, t.scoreLabel = null, t.scorePanel = null, t.guidePanel = null, t.injuredPanel = null, t.levelPanel = null, t.levelProgress = null, t.heartPanel = null, t.congratulation = null, t.adsButton = null, t.player = null, t.basicsScore = 300, t.currentScore = 0, t.targetScore = 0, t.scoreChangeValue = 0, t.isScoreChange = !1, t.lerpCtrl = !1, t.relerpCtrl = !1, t.level = 1, t.nowYQ = 0, t.passlevelYQ = 1, t.congratulationTime = 0, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this
        }, t.prototype.start = function () {
          var e = this;
          this.ShowScorePanel(), s.default.Instance.GetLevel() % 5 == 1 ? (this.passlevelYQ = .12, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 2 ? (this.passlevelYQ = .31, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 3 ? (this.passlevelYQ = .51, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 4 ? (this.passlevelYQ = .71, this.lerpCtrl = !0) : s.default.Instance.GetLevel() % 5 == 0 && (this.passlevelYQ = 1, this.lerpCtrl = !0), cc.tween(this.adsButton).call(function () {
            e.adsButton.children[0].getComponent(cc.Sprite).spriteFrame = u.default.Instance.adsbutton[0]
          }).delay(.5).call(function () {
            e.adsButton.children[0].getComponent(cc.Sprite).spriteFrame = u.default.Instance.adsbutton[1]
          }).delay(.5).union().repeatForever().start()
        }, t.prototype.update = function (e) {
          this.UpdateScoreLabel(e), this.lerpCtrl && this.lerpNumFunc(this.passlevelYQ), this.levelPanel.children[1].getComponent(cc.Label).string = s.default.Instance.GetLevel().toString()
        }, t.prototype.adsButtonFunc = function () {
          if (adLink) {
            window.location.href = adLink;
          }
        }, t.prototype.TestPasslevel = function () {
          var e = this;
          this.lerpCtrl = !0, this.nowYQ >= this.passlevelYQ && (this.levelPanel.children[2].runAction(cc.sequence(cc.delayTime(1.3), cc.callFunc(function () {
            e.relerpCtrl = !0, e.lerpCtrl = !1
          }), cc.callFunc(function () {
            e.level += 1, e.nowYQ = 0, e.passlevelYQ = 50 * e.level
          }))), r.default.Instance.Play(0, !1, 1), i.default.Instance.ShootFlower())
        }, t.prototype.showLevelProgressInfo = function () {
          this.levelPanel.children[1].children[0].getComponent(cc.Label).string = this.level.toString(), this.levelPanel.children[2].children[0].getComponent(cc.Label).string = (this.level + 1).toString(), this.levelPanel.children[1].runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1))), this.levelPanel.children[2].runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1))), this.levelPanel.children[0].children[0].getComponent(cc.Sprite).fillRange = 0, this.lerpCtrl = !1
        }, t.prototype.lerpNumFunc = function (e) {
          var t = this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange;
          e > t ? (this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange += .005, (t = this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange) >= e && (this.lerpCtrl = !1)) : (this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange -= .015, (t = this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange) == e && (this.lerpCtrl = !1))
        }, t.prototype.lerpNumFunc1 = function () {
          this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange -= .03, this.levelProgress.children[0].children[0].getComponent(cc.Sprite).fillRange <= 0 && (this.relerpCtrl = !1, this.showLevelProgressInfo())
        }, t.prototype.GuideArrawAction = function () {
          this.guidePanel.children[0].active = !0, this.guidePanel.children[0].runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.1), cc.moveTo(1, 240, 190), cc.moveTo(.5, 120, 70), cc.fadeOut(.5), cc.moveTo(.01, -240, 190))))
        }, t.prototype.closeGuide = function () {
          this.guidePanel.children[0].active = !1
        }, t.prototype.SetScoreTween = function (e) {
          this.targetScore != e && (this.targetScore = e, this.scoreChangeValue = Math.abs(this.targetScore - this.currentScore), this.isScoreChange = !0)
        }, t.prototype.UpdateScoreLabel = function (e) {
          if (this.isScoreChange) {
            this.currentScore += e * this.scoreChangeValue * 5, this.currentScore >= this.targetScore && (this.currentScore = this.targetScore, this.isScoreChange = !1);
            var t = Math.floor(this.currentScore);
            this.scoreLabel.string = t.toString()
          }
        }, t.prototype.SetScore = function (e) {
          var t = e.toString().length - 1;
          this.scoreLabel.node.children[1].x = 60 + 25 * t, e < 1e3 ? (this.scoreLabel.string = String(e), this.scorePanel.children[0].children[0].active = !1, this.scorePanel.children[0].children[1].active = !0) : (this.scoreLabel.string = String(e), this.scoreLabel.node.scale = .7, this.scorePanel.children[0].children[0].active = !1, this.scorePanel.children[0].children[1].active = !0), a.default.score = e
        }, t.prototype.InjuredEffect = function () {
          this.injuredPanel.active = !0, this.injuredPanel.runAction(cc.sequence(cc.fadeTo(.1, 150), cc.fadeTo(.1, 0)))
        }, t.prototype.HideScorePanel = function () {
          this.scorePanel.runAction(cc.moveBy(.5, 0, 250)), this.levelPanel.runAction(cc.moveBy(.5, 0, 250)), this.levelProgress.runAction(cc.moveBy(.5, 0, 250)), this.heartPanel.runAction(cc.moveBy(.5, 0, 250))
        }, t.prototype.ShowScorePanel = function () {
          var e = this.node.children[0].position;
          this.scorePanel.runAction(cc.moveTo(.5, cc.v2(this.scorePanel.x, e.y - 20)).easing(cc.easeBackOut())), this.levelPanel.runAction(cc.moveTo(.5, e).easing(cc.easeBackOut())), this.levelProgress.runAction(cc.moveTo(.5, cc.v2(-230, e.y - 50)).easing(cc.easeBackOut())), this.heartPanel.runAction(cc.moveTo(.5, cc.v2(270, e.y - 50)).easing(cc.easeBackOut()))
        }, t.prototype.showCongratulation = function () {
          var e = this;
          r.default.Instance.Play(1, !1, 1), a.default.GameUpdateCtrl = !1, this.congratulation.active = !0, this.player.getComponent(cc.PolygonCollider).enabled = !1, this.congratulation.children[1].children[2].getComponent(cc.Label).string = a.default.score.toString(), this.congratulation.children[1].runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.callFunc(function () {
            e.congratulation.children[2].active = !0
          })))
        }, t.prototype.closeCongratulation = function () {
          var e = this;
          this.congratulation.children[2].active = !1, this.congratulation.children[1].runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function () {
            e.congratulation.active = !1, a.default.GameUpdateCtrl = !0
          }))), l.publicGameBool || adBreak({
            type: "next",
            name: "restart-game"
          }), this.scheduleOnce(function () {
            e.player.getComponent(cc.PolygonCollider).enabled = !0
          }, 1)
        }, t.Instance = null, c([f(cc.Node)], t.prototype, "mainCamera", void 0), c([f(cc.Node)], t.prototype, "bgLayer", void 0), c([f(cc.Label)], t.prototype, "scoreLabel", void 0), c([f(cc.Node)], t.prototype, "scorePanel", void 0), c([f(cc.Node)], t.prototype, "guidePanel", void 0), c([f(cc.Node)], t.prototype, "injuredPanel", void 0), c([f(cc.Node)], t.prototype, "levelPanel", void 0), c([f(cc.Node)], t.prototype, "levelProgress", void 0), c([f(cc.Node)], t.prototype, "heartPanel", void 0), c([f(cc.Node)], t.prototype, "congratulation", void 0), c([f(cc.Node)], t.prototype, "adsButton", void 0), c([f(cc.Node)], t.prototype, "player", void 0), t = n = c([p], t)
      }(cc.Component);
    n.default = h, cc._RF.pop()
  }, {
    "../common/DynamicLoad": "DynamicLoad",
    "../common/PlayerInfo": "PlayerInfo",
    "../commonJs/GameConfig": "GameConfig",
    "./AudioManager": "AudioManager",
    "./DataManager": "DataManager",
    "./EffectCenter": "EffectCenter"
  }],
  MainManage: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "946adGkxvdBmZXnlD952XtK", "MainManage");
    var o = e("HttpManagerJs"),
      c = e("LanguageSetJs"),
      a = e("GameConfig"),
      i = e("LoadSceneJs"),
      r = (e("GameUiTools"), {
        gameHttpId: 0,
        subScoreHttp: null,
        gameNameText: null,
        gameInfoText: null,
        txtStartText: null,
        txtMoreText: null,
        txtAgainText: null,
        gameEndLText: null,
        gameEndL1Text: null,
        bgLayRgb: null,
        gameEndName1: null,
        gameEndName2: null,
        gameEndUrl1: null,
        gameEndUrl2: null,
        langugeType: 1,
        ranLinkData: null,
        adShowBefore: !1,
        adShowAfter: !0,
        endLayCol: null,
        moreBtnBgCol: null,
        moreBtnTextCol: null,
        recGameData: null,
        recGameUrl: null,
        recGameDelPau: null,
        recGameDelPer: null,
        recGameimg1: null,
        recGameimg2: null,
        recGamePos: null,
        InfoData: null,
        endShow0: null,
        endShow1: null,
        endShow2: null,
        endShow3: null,
        infoGameName: null,
        showText: null,
        startText: null,
        moreGameText: null,
        playAgainText: null,
        endHttpShowInfo: null,
        moreGameUrl: null,
        init: function (e, t, n) {
          if (!a.publicGameBool) {
            if (a.playNum >= 1) return;
            a.playNum++
          }
          a.launchScene = e, a.Bros = t, a.caS = n, this.curType = 1, this.getHttpGameId(), this.gamePV_load(), console.log("thisg", this.gameHttpId), o.httpInitUrl(this.gameHttpId);
          var c = this.initLanguage();
          this.gameNameText = c.game_name, this.gameInfoText = c.game_info, this.txtStartText = c.txtStart, this.txtMoreText = c.txtMore, this.txtAgainText = c.txtAgain, this.gameEndLText = c.gameEndL, this.gameEndL1Text = c.gameEndL1, this.bgLayRgb = c.bgRgb, this.gameEndName1 = c.gameT2, this.gameEndName2 = c.gameT3, this.gameEndUrl1 = c.gameUrl1, this.gameEndUrl2 = c.gameUrl2, this.langugeType = this.curType, i.goToCover(this.adShowBefore, this.adShowAfter, e, t, n)
        },
        getHttpGameId: function () {
          var e = window.location.href,
            t = e.substring(0, e.lastIndexOf("//") + 2),
            n = window.location.host,
            o = t + n + "/Service/Share/index";
          this.gameAllHttp = o, cc.log("gameAll", this.gameAllHttp), this.subScoreHttp = t + n + "/Service/Score/index", this.gamePvHttp = t + n + "/Service/GamePv/index";
          var c = document.URL,
            a = 0,
            i = c.substring(c.lastIndexOf("/game/") + 1, c.length).split("/");
          i.length >= 2 && (a = i[1]), this.gameHttpId = a, cc.log("gameId", a);
          e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3);
          this.moreGameUrl = "http://m.wesane.com/"
        },
        gameOverShowText: function (e, t) {
          this.ajaxLoad("http://www.wesane.com/admin.php/Gamescore/saveGamescore", "gameScore=" + e + "&gameId=" + this.gameHttpId + "&gameType=" + t, this.scoreResult)
        },
        gamePV_load: function () {
          this.ajaxLoad("http://www.wesane.com/admin.php/Activityshow/gamelogo", "gameID=" + this.gameHttpId, this.ajaxOnLogoResult)
        },
        ajaxOnLogoResult: function () {
        },
        ajaxLoad: function (e, t, n) {
          var o = cc.loader.getXMLHttpRequest();
          o.onreadystatechange = n, o.open("POST", e), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(t)
        },
        scoreResult: function (e) {
          if (null != e.currentTarget.response && "" != e.currentTarget.response) {
            var t = JSON.parse(e.currentTarget.response);
            cc.log("endshow", t.content), r.endHttpShowInfo = t.content
          }
        },
        initLanguage: function () {
          var e = null;
          return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? (this.curType = 1, e = c.language_1) : (cc.log("\u82f1\u6587"), this.curType = 2, e = c.language_2), e
        },
        getLinkGameReturn: function (e, t, n, o) {
          if (console.log("err0", e), console.log("err1", t), console.log("err2", n), console.log("err3", o), 0 == e) {
            this.ranLinkData = t, console.log("LoadMainGameScnee");
            var c = a.launchScene,
              r = a.Bros,
              s = a.caS;
            i.goToCover(this.adShowBefore, this.adShowAfter, c, r, s)
          }
        },
        ranRecGameData: function () {
          if (null != this.recGameData && "" != this.recGameData) {
            this.returnBool = !1;
            var e = this.recGameData.length,
              t = a.returnRanNum(1, e) - 1;
            cc.log("ranNNN", t), this.recGameUrl = this.recGameData[t].data_link, this.recGameDelPer = this.recGameData[t].delay_per, this.recGameDelPau = this.recGameData[t].delay_pau, this.recGameimg1 = this.recGameData[t].img_1, this.recGameimg2 = this.recGameData[t].img_2, this.recGamePos = this.recGameData[t].poistion
          }
        },
        ranLinkUrl: function () {
          if (null != this.ranLinkData && this.ranLinkData.gameList && null != this.ranLinkData.gameList) {
            var e = this.ranLinkData.gameList.length,
              t = a.returnRanNum(1, e) - 1;
            return cc.log("templ", t, this.ranLinkData.gameList), cc.log("url", this.ranLinkData.gameList[0].gameName, this.ranLinkData.gameList[0].gameUrl), t
          }
          return null
        },
        gotoEndLayer: function () {
          if (a.publicGameBool) this.showGameEndLayer();
          else {
            if (adEndComplete = !1, resEndComplete = !1, this.needShow = null, 1 == window.navigator.onLine) {
              var e = this.adShowAfter;
              console.log("ad", e), (e = null == e || void 0 == e || this.adShowAfter) ? (this.needShow = !0, console.log("showMyad"), showMyAds()) : this.needShow = !1
            } else console.log("showOver1"), this.showGameEndLayer(), this.needShow = null;
            console.log("showMyad2", this.needShow), null != this.needShow && (console.log("showMyad3"), this.needShow ? (console.log("pre", preloader), void 0 == preloader && this.showGameEndLayer(), resEndComplete = !0, adEndComplete && resEndComplete && (console.log("showOver1"), this.showGameEndLayer())) : (console.log("gam"), this.showGameEndLayer()))
          }
        },
        gotoEndLayer1: function () {
          a.publicGameBool, this.showGameEndLayer()
        },
        showAd: function () {
          showMyAds()
        },
        showGameEndLayer: function () {
          cc.find("Canvas/gameManager").getComponent("GameManager").GameOver()
        }
      });
    t.exports = r, cc._RF.pop()
  }, {
    GameConfig: "GameConfig",
    GameUiTools: "GameUiTools",
    HttpManagerJs: "HttpManagerJs",
    LanguageSetJs: "LanguageSetJs",
    LoadSceneJs: "LoadSceneJs"
  }],
  NewAttribute: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "62ee1m0pwFHWpkb09UZL+1E", "NewAttribute");
    var o = this && this.__decorate || function (e, t, n, o) {
      var c, a = arguments.length,
        i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
      else
        for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
      return a > 3 && i && Object.defineProperty(t, n, i), i
    };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var c = cc._decorator,
      a = c.ccclass,
      i = c.property,
      r = function () {
        function e() {
          this.nickName = "\u5927\u638c\u6559", this.qGroup = "704391772"
        }

        return o([i({
          displayName: "\u6635\u79f0"
        })], e.prototype, "nickName", void 0), o([i({
          displayName: "Q\u7fa4"
        })], e.prototype, "qGroup", void 0), e = o([a("Player")], e)
      }();
    n.default = r, cc._RF.pop()
  }, {}],
  PhysicsParticle: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "73fcd1QF4lBEY8WPMIj3xr6", "PhysicsParticle");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../Common/PoolManager"),
      i = cc._decorator,
      r = i.ccclass,
      s = i.property,
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.prefabName = "default", t.gravityScale = 0, t.dropTime = 0, t.deadTime = 0, t.dropTimeTicker = 0, t.isDead = !1, t.velocity = cc.v2(0, 0), t
        }

        return o(t, e), t.prototype.Reset = function () {
          this.node.stopAllActions(), this.node.scale = 1, this.velocity = cc.v2(0, 0), this.dropTimeTicker = 0, this.isDead = !1
        }, t.prototype.SetVelocity = function (e, t) {
          this.velocity = e, this.dropTime = t, this.dropTimeTicker = this.dropTime
        }, t.prototype.update = function (e) {
          this.node.x += this.velocity.x * e, this.node.y += this.velocity.y * e, this.velocity.y += this.gravityScale * e, this.isDead || (this.dropTimeTicker -= e, this.dropTimeTicker <= 0 && (this.isDead = !0, this.node.runAction(cc.sequence(cc.scaleTo(this.deadTime, 0), cc.callFunc(function (e) {
            a.default.Despawn(this.prefabName, e)
          }, this)))))
        }, c([s], t.prototype, "prefabName", void 0), c([s], t.prototype, "gravityScale", void 0), c([s], t.prototype, "dropTime", void 0), c([s], t.prototype, "deadTime", void 0), c([s(cc.Vec2)], t.prototype, "velocity", void 0), t = c([r], t)
      }(cc.Component);
    n.default = l, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager"
  }],
  PlayerInfo: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "ea489dPDU9OZYOr2dE1HqB7", "PlayerInfo"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function e() {
      }

      return e.playerTouch = !0, e.score = 0, e.knifeStatic = "Idle", e.knifeLR = 1, e.GameUpdateCtrl = !0, e.playNum = 0, e.tuoweiCtrl = !1, e.bgNumber = 0, e
    }();
    n.default = o, cc._RF.pop()
  }, {}],
  PoolManager: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "42678O0bOREZKAMjCljpxI3", "PoolManager");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.allPrefab = [], t.allPrefabMap = null, t.poolMap = null, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this, this.allPrefabMap = new Map, this.poolMap = new Map;
          for (var e = 0; e < this.allPrefab.length; e++) {
            this.allPrefabMap.set(this.allPrefab[e].name, this.allPrefab[e]), cc.log(this.allPrefab[e].name);
            var t = new cc.NodePool;
            this.poolMap.set(this.allPrefab[e].name, t)
          }
        }, t.Spawn = function (e, t) {
          if (void 0 === t && (t = null), !n.Instance.poolMap.has(e)) return cc.warn("no prefab named " + e), null;
          var o = n.Instance.poolMap.get(e);
          if (o.size() > 0) {
            var c = o.get();
            return null != t && (c.parent = t), c
          }
          var a = cc.instantiate(n.Instance.allPrefabMap.get(e));
          return null != t && (a.parent = t), a
        }, t.Despawn = function (e, t) {
          if (!n.Instance.poolMap.has(e)) return cc.log("\u56de\u6536\u5931\u8d25,\u8282\u70b9\u540d : " + e), null;
          n.Instance.poolMap.get(e).put(t)
        }, t.GetPrefab = function (e) {
          return n.Instance.allPrefabMap.has(e) ? n.Instance.allPrefabMap.get(e) : null
        }, t.Preload = function (e, t) {
          if (!n.Instance.poolMap.has(e)) return null;
          for (var o = n.Instance.poolMap.get(e), c = 0; c < t; c++) {
            var a = cc.instantiate(n.Instance.allPrefabMap.get(e));
            o.put(a)
          }
        }, t.Instance = null, c([r([cc.Prefab])], t.prototype, "allPrefab", void 0), t = n = c([i], t)
      }(cc.Component);
    n.default = s, cc._RF.pop()
  }, {}],
  RandomFly: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "a801awRcfxIuaFIGRbzJh/6", "RandomFly");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("./SpriteManager"),
      i = e("./Utils"),
      r = cc._decorator,
      s = r.ccclass,
      l = r.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.id = 1, t.wing_r = null, t.wing_l = null, t.body = null, t.isUser = !0, t.isUpdate = !0, t.turnNum = 0, t.mosquitoSpeedLen = 2, t.mosquitoSpeedMaxR = 4, t.mosquitoSpeedR = 0, t.mosquitoTargetR = 0, t.mosquitoTargetMaxR = 359, t.mosquitoAddR = !0, t.checkEdgeDelayCount = 0, t.newPos = cc.v2(0, 0), t.dir = cc.v2(0, 1), t.fadeTime = 0, t.fadeTicker = 1, t.isFade = !1, t.mapScale = 1, t.onEdgeFlag = !0, t.isTurn = !1, t
        }

        return o(t, e), t.prototype.onLoad = function () {
        }, t.prototype.SetId = function (e) {
          e < 1 && (e = 1), e > 4 && (e = 4);
          var t = a.default.Instance.GetSpriteFrame("littleWing" + e),
            n = a.default.Instance.GetSpriteFrame("littleBody" + e);
          this.wing_l.getComponent(cc.Sprite).spriteFrame = t, this.wing_r.getComponent(cc.Sprite).spriteFrame = t, this.body.getComponent(cc.Sprite).spriteFrame = n
        }, t.prototype.startFun = function () {
          this.wing_r.stopAllActions(), this.wing_l.stopAllActions(), this.wingAction(), this.isUser = !0, this.isUpdate = !0, this.turnNum = i.default.Random(10, 20), this.mosquitoSpeedR = 0, this.mosquitoTargetR = 0, this.mosquitoTargetMaxR = 359, this.mosquitoAddR = !0, this.mapScale = 1, this.onEdgeFlag = !0, this.isTurn = !0, this.setMosquitoSpeed()
        }, t.prototype.wingAction = function () {
          this.wing_r.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1).easing(cc.easeSineInOut()), cc.scaleTo(.2, .4, 1).easing(cc.easeSineInOut())))), this.wing_l.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, -1, 1).easing(cc.easeSineInOut()), cc.scaleTo(.2, -.4, 1).easing(cc.easeSineInOut()))))
        }, t.prototype.start = function () {
        }, t.prototype.setMosquitoSpeed = function () {
          this.node.angle >= 360 ? this.node.angle -= 360 : this.node.angle < 0 && (this.node.angle += 360), this.mosquitoSpeedR = Math.random() * this.mosquitoSpeedMaxR * 2 - this.mosquitoSpeedMaxR;
          var e = Math.random() * this.mosquitoTargetMaxR * (Math.abs(this.mosquitoSpeedR) / (this.mosquitoSpeedMaxR + .4 * this.mapScale));
          this.mosquitoSpeedR > 0 ? (this.mosquitoTargetR = this.node.angle + e, this.mosquitoAddR = !0) : (this.mosquitoTargetR = this.node.angle - e, this.mosquitoAddR = !1), this.checkEdgeDelayCount = 0, this.onEdgeFlag && Math.abs(this.mosquitoSpeedR) > 2 && (this.mosquitoSpeedR = this.mosquitoSpeedR / 3 * 2, this.mosquitoTargetR = this.mosquitoTargetR / 3 * 2), this.onEdgeFlag = !1, this.turnNum--, this.turnNum <= 0 && (this.isTurn = !1)
        }, t.prototype.updateMosquito = function () {
          var e = this.mosquitoSpeedLen,
            t = this.mosquitoSpeedR,
            n = this.mosquitoTargetR,
            o = this.node,
            c = this.getPointByCPAndAngleAndLen(o.getPosition(), o.angle + t, e);
          o.setPosition(c), o.angle += t, this.mosquitoAddR ? o.angle >= n && this.setMosquitoSpeed() : o.angle <= n && this.setMosquitoSpeed()
        }, t.prototype.setPos = function () {
          this.node.position.x < 0 ? this.newPos = cc.v2(-cc.winSize.width / 2 - 100, this.node.position.y) : this.newPos = cc.v2(cc.winSize.width / 2 + 100, this.node.position.y), this.isUser = !1
        }, t.prototype.setPos_1 = function () {
          this.isUpdate = !1, this.scheduleOnce(function () {
            this.isUpdate = !0, this.setPos()
          }, .5)
        }, t.prototype.update = function (e) {
          this.isUpdate && this.isUser && (this.updateMosquito(), this.checkOnEdge(!0)), this.isFade || (this.fadeTicker -= e, this.fadeTicker < 0 && (this.fadeTicker = 0, this.isFade = !0, this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function (e) {
          }, this)))))
        }, t.prototype.updateMove_1 = function (e) {
          this.dir = cc.v2(this.node.position).sub(this.newPos).normalize().neg();
          var t = 1 * (this.dir.x * this.mosquitoSpeedLen * 3),
            n = 1 * (this.dir.y * this.mosquitoSpeedLen * 3),
            o = this.node.x + t,
            c = this.node.y + n;
          this.node.x = o, this.node.y = c;
          var a = 180 * Math.atan2(this.dir.y, this.dir.x) / Math.PI;
          a = 360 - a + 90, this.node.angle = a
        }, t.prototype.updateMove = function (e) {
          this.dir = cc.v2(this.node.position).sub(this.newPos).normalize().neg();
          var t = 1 * (this.dir.x * this.mosquitoSpeedLen),
            n = 1 * (this.dir.y * this.mosquitoSpeedLen),
            o = this.node.x + t,
            c = this.node.y + n;
          this.node.x = o, this.node.y = c;
          var a = 180 * Math.atan2(this.dir.y, this.dir.x) / Math.PI;
          a = 360 - a + 90, this.node.angle = a
        }, t.prototype.setMosquitoBackSpeed = function () {
          this.isTurn = !1, this.scheduleOnce(function () {
            this.isTurn = !0, this.setMosquitoSpeed()
          }, 2)
        }, t.prototype.checkOnEdge = function (e) {
          this.node.x > cc.winSize.width / 2 + 100 ? e ? this.setMosquitoBackSpeed() : this.node.active = !1 : this.node.x < -cc.winSize.width / 2 - 100 ? e ? this.setMosquitoBackSpeed() : this.node.active = !1 : this.node.y > cc.winSize.height / 2 + 100 ? e ? this.setMosquitoBackSpeed() : this.node.active = !1 : this.node.y < -cc.winSize.height / 2 - 100 && (e ? this.setMosquitoBackSpeed() : this.node.active = !1)
        }, t.prototype.getAngle = function (e, t, n, o) {
          var c = Math.abs(e - n),
            a = Math.abs(t - o),
            i = a / Math.sqrt(Math.pow(c, 2) + Math.pow(a, 2)),
            r = Math.acos(i),
            s = 180 / (Math.PI / r);
          return t > o && (s = 180 - s), e > n && (s *= -1), s
        }, t.prototype.getPointByCPAndAngleAndLen = function (e, t, n) {
          var o = -t * Math.PI / 180,
            c = n * Math.cos(o),
            a = n * Math.sin(o);
          return cc.v2(e.x + a, e.y + c)
        }, c([l], t.prototype, "id", void 0), c([l(cc.Node)], t.prototype, "wing_r", void 0), c([l(cc.Node)], t.prototype, "wing_l", void 0), c([l(cc.Node)], t.prototype, "body", void 0), c([l], t.prototype, "mosquitoSpeedLen", void 0), c([l], t.prototype, "mosquitoSpeedMaxR", void 0), c([l], t.prototype, "fadeTime", void 0), t = c([s], t)
      }(cc.Component);
    n.default = u, cc._RF.pop()
  }, {
    "./SpriteManager": "SpriteManager",
    "./Utils": "Utils"
  }],
  RenderWater: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "ed67fc+jBJNaKKrcIP1lh6B", "RenderWater");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.waterCamera = null, t.waterConnect = null, t.waterParent = null, t.cup = null, t.prefab_water = null, t._water_pool = null, t._waterGenrateCount = 0, t
        }

        return o(t, e), t.prototype.start = function () {
        }, t.prototype.onLoad = function () {
          var e = new cc.RenderTexture;
          e.initWithSize(cc.winSize.width, cc.winSize.height);
          var t = new cc.SpriteFrame;
          t.setTexture(e), this.waterCamera.targetTexture = e, this.waterConnect.spriteFrame = t
        }, t.prototype.createWater = function () {
          this.resetWater();
          for (var e = 0; e < 50; e++) {
            var t = this._water_pool.shift();
            t || (t = cc.instantiate(this.prefab_water), this.waterParent.addChild(t)), t.active = !1, t.scale = .4, t.x = this.cup.x, t.y = this.cup.y + 10
          }
          this._waterGenrateCount = 0, this.schedule(this.scheduleWater, .05, this.waterParent.childrenCount - 1)
        }, t.prototype.scheduleWater = function () {
          this.waterParent.children[this._waterGenrateCount++].active = !0
        }, t.prototype.resetWater = function () {
          var e = this;
          this.unschedule(this.scheduleWater), this.waterParent.children.forEach(function (t) {
            t.active = !1, e._water_pool.push(t)
          })
        }, c([r(cc.Camera)], t.prototype, "waterCamera", void 0), c([r(cc.Sprite)], t.prototype, "waterConnect", void 0), c([r(cc.Node)], t.prototype, "waterParent", void 0), t = c([i], t)
      }(cc.Component);
    n.default = s, cc._RF.pop()
  }, {}],
  Rocker: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "8d9fdeeLCdEi5Zh0PNydB+G", "Rocker");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.stick = null, t.dir = null, t
        }

        return o(t, e), t.prototype.start = function () {
          this.stick.x = 0, this.stick.y = 0, this.dir = cc.v2(0, 0)
        }, c([r(cc.Node)], t.prototype, "stick", void 0), t = c([i], t)
      }(cc.Component);
    n.default = s, cc._RF.pop()
  }, {}],
  RotateAround: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "d0683O41+dL0LiH0SbEMp2i", "RotateAround");
    var o, c = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      a = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }),
      function (e) {
        e[e.PositiveX = 0] = "PositiveX", e[e.PositiveY = 1] = "PositiveY", e[e.NegativeX = 2] = "NegativeX", e[e.NegativeY = 3] = "NegativeY"
      }(o = n.Axis || (n.Axis = {}));
    var i = cc._decorator,
      r = i.ccclass,
      s = i.property,
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.targetPos = null, t.clockwise = !0, t.timePerRound = 5, t.faceToTarget = !1, t.faceAxis = o.NegativeY, t.autoStart = !1, t.angle = 0, t.radius = 0, t.isRotating = !1, t.ischangeFunc = !1, t
        }

        return c(t, e), t.prototype.start = function () {
          this.autoStart && this.run()
        }, t.prototype.update = function (e) {
          if (this.isRotating && this.targetPos) {
            var t = Math.PI / 180 * this.angle;
            if (this.node.x = this.targetPos.x + this.radius * Math.cos(t), this.node.y = this.targetPos.y + this.radius * Math.sin(t), this.faceToTarget) switch (this.faceAxis) {
              case o.PositiveX:
                this.node.angle = this.angle + 180;
                break;
              case o.PositiveY:
                this.node.angle = this.angle + 90;
                break;
              case o.NegativeX:
                this.node.angle = this.angle;
                break;
              case o.NegativeY:
                this.node.angle = this.angle - 90
            }
            var n = e * (360 / this.timePerRound);
            this.clockwise ? this.angle -= n : this.angle += n, this.angle >= 360 ? this.angle %= 360 : this.angle <= -360 && (this.angle %= -360)
          }
        }, t.prototype.run = function (e, t, n, o, c) {
          if (e && (this.targetPos = e), t && (this.clockwise = t), n && (this.timePerRound = n), o && (this.faceToTarget = o), c && (this.faceAxis = c), !this.targetPos) return cc.log("No target!");
          this.ischangeFunc ? this.node.y > 0 ? this.angle = this.getAngle(this.targetPos, this.node.getPosition()) + 90 : this.angle = this.getAngle(this.targetPos, this.node.getPosition()) - 90 : this.angle = this.getAngle(this.targetPos, this.node.getPosition()), this.radius = this.getDistance(this.targetPos, this.node.getPosition());
          var a = Math.PI / 180 * this.angle;
          this.node.x = this.targetPos.x + this.radius * Math.cos(a), this.node.y = this.targetPos.y + this.radius * Math.sin(a), this.isRotating = !0
        }, t.prototype.stop = function () {
          this.isRotating = !1
        }, t.prototype.getAngle = function (e, t) {
          return Math.atan2(e.y - t.y, t.x - e.x)
        }, t.prototype.getDistance = function (e, t) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }, a([s(cc.Vec2)], t.prototype, "targetPos", void 0), a([s({
          tooltip: !1
        })], t.prototype, "clockwise", void 0), a([s({
          tooltip: !1
        })], t.prototype, "timePerRound", void 0), a([s({
          tooltip: !1
        })], t.prototype, "faceToTarget", void 0), a([s({
          type: cc.Enum(o),
          tooltip: !1,
          visible: function () {
            return this.faceToTarget
          }
        })], t.prototype, "faceAxis", void 0), a([s({
          tooltip: "\u81ea\u52a8\u5f00\u59cb\u65cb\u8f6c"
        })], t.prototype, "autoStart", void 0), t = a([r], t)
      }(cc.Component);
    n.default = l, cc._RF.pop()
  }, {}],
  Shake: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "ae84f5GUmxA6pQM/u/0FkbQ", "Shake");
    var o = cc.ActionInterval.extend({
      targetNode: cc.Node,
      nodeInitialPos: null,
      nodeShakeStrengthX: 0,
      nodeShakeStrengthY: 0,
      xOffset: 0,
      yOffset: 0,
      duration: 0,
      getRandomStrength: function (e, t) {
        return Math.random() * (t - e + 1) + e
      },
      update: function (e) {
        var t = this.getRandomStrength(-this.nodeShakeStrengthX, this.nodeShakeStrengthX) * cc.director.getDeltaTime(),
          n = this.getRandomStrength(-this.nodeShakeStrengthY, this.nodeShakeStrengthY) * cc.director.getDeltaTime();
        this.xOffset += t, this.yOffset += n, this.target.setPosition(this.target.position.add(cc.v2(t, n)))
      },
      initWithDuration: function (e, t, n) {
        return !!cc.ActionInterval.prototype.initWithDuration.call(this, e) && (this.nodeShakeStrengthX = t, this.nodeShakeStrengthY = "undefined" == n ? t : n, !0)
      },
      startWithTarget: function (e) {
        cc.ActionInterval.prototype.startWithTarget.call(this, e), this.nodeInitialPos = e.getPosition(), this.target = e, this.xOffset = 0, this.yOffset = 0
      },
      stop: function () {
        this.target.setPosition(this.target.position.add(cc.v2(-this.xOffset, -this.yOffset)))
      }
    });
    cc.shake = function (e, t, n) {
      return new o(e, t, n)
    }, cc._RF.pop()
  }, {}],
  SpriteManager: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "4aec9V8qWdDa5TaF3chhmaO", "SpriteManager");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.atlas = [], t.allSpriteFrame = [], t.atlasMap = null, t.spriteFrameMap = null, t
        }

        var n;
        return o(t, e), n = t, t.prototype.onLoad = function () {
          null != n.Instance && n.Instance.destroy(), n.Instance = this, this.atlasMap = new Map;
          for (var e = 0; e < this.atlas.length; e++) {
            var t = this.atlas[e].name.split(".", 1);
            this.atlasMap.set(t[0], this.atlas[e])
          }
          this.spriteFrameMap = new Map;
          for (e = 0; e < this.allSpriteFrame.length; e++) {
            var o = this.allSpriteFrame[e].name.split(".", 1);
            this.spriteFrameMap.set(o[0], this.allSpriteFrame[e])
          }
        }, t.prototype.GetSpriteFrame = function (e) {
          return this.spriteFrameMap.has(e) ? this.spriteFrameMap.get(e) : null
        }, t.Instance = null, c([r(cc.SpriteAtlas)], t.prototype, "atlas", void 0), c([r(cc.SpriteFrame)], t.prototype, "allSpriteFrame", void 0), t = n = c([i], t)
      }(cc.Component);
    n.default = s, cc._RF.pop()
  }, {}],
  Stack: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "17b226CrNJGGYSBKYckUg+j", "Stack"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function e(e) {
        void 0 === e && (e = 10), this.elements = new Array(e), this._size = 0
      }

      return e.prototype.push = function (e) {
        var t = this.elements.length;
        if (this._size >= t) {
          var n = new Array(t);
          this.elements = this.elements.concat(n)
        }
        this.elements[this._size++] = e
      }, e.prototype.pop = function () {
        return this.elements[--this._size]
      }, e.prototype.peek = function () {
        return this.elements[this._size - 1]
      }, e.prototype.size = function () {
        return this._size
      }, e.prototype.empty = function () {
        return 0 === this._size
      }, e.prototype.clear = function (e) {
        void 0 === e && (e = 10), delete this.elements, this.elements = new Array(e), this._size = 0
      }, e
    }();
    n.Stack = o, cc._RF.pop()
  }, {}],
  Toast: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "4f5a7oIt7pFWaaZNA1+j7MV", "Toast"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function e() {
        this.toastNode = null, this.bgSprite = null, this.spriteFrame = null, this.textNode = null, this.textLabel = null, this.canvas = null, this.toastNode = new cc.Node, this.toastNode.active = !1, this.toastNode.zIndex = 1e4, this.canvas = cc.director.getScene().getComponentInChildren(cc.Canvas), this.canvas.node.addChild(this.toastNode), this.bgSprite = this.toastNode.addComponent(cc.Sprite), this.bgSprite.trim = !0, this.bgSprite.type = cc.Sprite.Type.SLICED;
        var e = this;
        cc.loader.loadRes("default_btn_pressed", function (t, n) {
          t ? cc.error(t) : (e.spriteFrame = new cc.SpriteFrame(n), e.bgSprite.spriteFrame = e.spriteFrame)
        });
        var t = this.toastNode.addComponent(cc.Widget);
        t.isAlignBottom = !0, t.isAbsoluteBottom = !1, t.bottom = .8, t.isAlignHorizontalCenter = !0, t.horizontalCenter = 0, t.alignMode = cc.Widget.AlignMode.ONCE;
        var n = this.toastNode.addComponent(cc.Layout);
        n.resizeMode = cc.Layout.ResizeMode.CONTAINER, n.padding = 5, this.textNode = new cc.Node, this.toastNode.addChild(this.textNode), this.textNode.position = cc.Vec2.ZERO, this.textLabel = this.textNode.addComponent(cc.Label), this.textLabel.fontSize = 50, this.textLabel.lineHeight = 50
      }

      return Object.defineProperty(e, "instance", {
        get: function () {
          return null == this._instance && (this._instance = new e), this._instance
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.showText = function (e, t) {
        var n = this;
        void 0 === t && (t = .5), e.length * this.textLabel.fontSize > .8 * this.canvas.node.width && (this.textLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT, this.textLabel.node.width = .8 * this.canvas.node.width), this.textLabel.string = e, this.toastNode.active = !0, this.toastNode.opacity = 200, this.toastNode.runAction(cc.sequence(cc.delayTime(t), cc.fadeOut(.2), cc.callFunc(function () {
          n.toastNode.active = !1
        }, this)))
      }, e._instance = null, e
    }();
    n.Toast = o, cc._RF.pop()
  }, {}],
  ToolsJs: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "ff72eImHHBFF7om5YuFkgbF", "ToolsJs");
    var o = {
      SpriteFrameJs: null,
      AudioArrJs: null,
      setStorage: function (e, t, n) {
        CC_WECHATGAME ? wx.setStorage({
          key: e,
          data: t
        }) : (n && (t = JSON.stringify(t)), cc.sys.localStorage.setItem(e, t))
      },
      getStorage: function (e, t) {
        if (CC_WECHATGAME) return wx.getStorageSync(e);
        var n = cc.sys.localStorage.getItem(e);
        return isNaN(n) || (n = parseInt(n)), "NaN" == n.toString() && (n = null), t && null != n && (n = JSON.parse(n)), n
      },
      logJsonObject: function (e) {
        console.log(JSON.stringify(e))
      },
      loadJson: function (e, t) {
      },
      writeJson: function (e, t) {
        if (cc.sys.isBrowser) {
          console.log("\u6d4f\u89c8\u5668");
          var n = new Blob([e], {
              type: "application/json"
            }),
            o = document.createElement("a");
          o.download = t, o.innerHTML = "Download File", null != window.webkitURL ? o.href = window.webkitURL.createObjectURL(n) : (o.href = window.URL.createObjectURL(n), o.onclick = destroyClickedElement, o.style.display = "none", document.body.appendChild(o)), o.click()
        }
      },
      addNoArr: function (e, t) {
        return e.indexOf(t) < 0 && (e.push(t), !0)
      },
      newSprite: function (e) {
        if (null != this.SpriteFrameJs.getSpriteFrame(e)) {
          var t = new cc.Node;
          return t.addComponent(cc.Sprite).spriteFrame = this.SpriteFrameJs.getSpriteFrame(e), t
        }
        return null
      },
      setTexture: function (e, t) {
        e.getComponent(cc.Sprite).spriteFrame = this.SpriteFrameJs.getSpriteFrame(t)
      },
      clonePrefabs: function (e, t, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          c = this.PrefabArrJs.getPrefabs(e);
        if (null != c) {
          var a = cc.instantiate(c);
          return null != t && t.addChild(a, o), null != n && (a.position = n), a
        }
        return console.log("\u514b\u9686\u9884\u5236\u4f53\u5931\u8d25:" + e), null
      },
      newLabel: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
          c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5,
          a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          i = new cc.Node;
        i.anchorX = o, i.anchorY = c;
        var r = i.addComponent(cc.Label);
        return r.string = e, r.fontSize = n, t.addChild(i, a), i
      },
      playAudio: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null != this.AudioArrJs ? this.AudioArrJs.playAudio(e, t, n) : cc.audioEngine.play(cc.url.raw("resources/music/" + e + ".mp3"), n, t)
      },
      stopAudio: function (e) {
        null != e && cc.audioEngine.stop(e)
      },
      newAduioSource: function (e) {
        var t = void 0;
        if (null != this.AudioArrJs) t = this.AudioArrJs.getAudioClip(e);
        else {
          if (null == e) return console.log("clip\u4e0d\u80fd\u4e3a\u7a7a\uff01"), null;
          t = e
        }
        var n = new cc.Node;
        return n.addComponent(cc.AudioSource).clip = t, n.getComponent(cc.AudioSource)
      },
      delayTimeCall: function (e, t, n, o) {
        e.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(t, o)))
      },
      getDistance: function (e, t) {
        return e.sub(t).mag()
      },
      getToNodePos: function (e, t) {
        var n = e.parent.convertToWorldSpaceAR(e.position);
        return t.convertToNodeSpaceAR(n)
      },
      getToWorldPosAR: function (e) {
        return e.parent.convertToWorldSpaceAR(e.position)
      },
      getToWorldPos: function (e) {
        return e.parent.convertToWorldSpace(e.position)
      },
      isBoxContainPos: function (e, t) {
        return e.getBoundingBox().contains(t)
      },
      isBoxContainWorldPos: function (e, t) {
        return e.getBoundingBoxToWorld().contains(t)
      },
      isRectInterRect: function (e, t) {
        return e.getBoundingBoxToWorld().intersects(t.getBoundingBoxToWorld())
      },
      returnRandom: function (e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
      },
      returnCurrentLanType: function () {
        var e = 1;
        switch (cc.sys.language) {
          case cc.sys.LANGUAGE_CHINESE:
            "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
            break;
          case cc.sys.LANGUAGE_KOREAN:
            e = 4;
            break;
          default:
            e = 3
        }
        return e
      }
    };
    t.exports = o, cc._RF.pop()
  }, {}],
  Utils: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "f3369tYECpPVJGWDo7sIHaO", "Utils"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function e() {
      }

      return e.getBezierPos = function (e, t) {
        var n = new Array,
          o = e.length;
        if (o < 2) return cc.log("\u63a7\u5236\u70b9\u6570\u4e0d\u80fd\u5c0f\u4e8e 2"), n;
        for (var c = this.getYangHuiTriangle(o), a = 0; a < t; a++) {
          for (var i = a / t, r = 0, s = 0, l = 0; l < o; l++) r += Math.pow(1 - i, o - l - 1) * e[l].x * Math.pow(i, l) * c[l], s += Math.pow(1 - i, o - l - 1) * e[l].y * Math.pow(i, l) * c[l];
          n[a] = new cc.Vec2(r, s)
        }
        return n
      }, e.getYangHuiTriangle = function (e) {
        var t = new Array;
        if (1 === e) t[0] = 1;
        else {
          t[0] = t[1] = 1;
          for (var n = 3; n <= e; n++) {
            for (var o = new Array, c = 0; c < n - 1; c++) o[c] = t[c];
            t[0] = t[n - 1] = 1;
            for (c = 0; c < n - 2; c++) t[c + 1] = o[c] + o[c + 1]
          }
        }
        return t
      }, e.ConvertPosition = function (e, t) {
        if (e.parent == t.parent) return e.position;
        var n = e.convertToWorldSpaceAR(cc.v2(0, 0));
        return t.convertToNodeSpaceAR(n)
      }, e.ConvertAngle = function (e, t) {
        for (var n = e.parent, o = e.angle; null != n;) o += n.angle, n = n.parent;
        for (var c = t.parent, a = t.angle; null != c;) a += c.angle, c = c.parent;
        return o - a
      }, e.ConvertAngleValue = function (e, t, n) {
        for (var o = e, c = t; null != o;) c += o.angle, o = o.parent;
        for (var a = n.parent, i = n.angle; null != a;) i += a.angle, a = a.parent;
        return c - i
      }, e.ConvertScale = function (e, t) {
        for (var n = e.parent, o = e.scaleX, c = e.scaleY; null != n;) o *= n.scaleX, c *= n.scaleY, n = n.parent;
        for (var a = t.parent, i = t.scaleX, r = t.scaleY; null != a;) i *= a.scaleX, r *= a.scaleY, a = a.parent;
        var s = o;
        0 != i && (s /= i);
        var l = c;
        return 0 != r && (l /= r), cc.v2(s, l)
      }, e.Random = function (e, t) {
        return Math.random() * (t - e) + e
      }, e.RandomInteger = function (e, t) {
        return Math.floor(Math.random() * (t - e) + e)
      }, e.AngleToRadian = function (e) {
        return e * Math.PI / 180
      }, e.CenteredUi = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var o = (t.length - 1) * e, c = 0; c < t.length; c++) {
          t[c].getComponent(cc.Label);
          o += t[c].width
        }
        var a = .5 * -o;
        for (c = 0; c < t.length; c++) 0 != c && (a += e), t[c].x = a + .5 * t[c].width, a += t[c].width
      }, e.CheckPolygonNodeCollision = function (t, n) {
        var o = t.getComponent(cc.PolygonCollider),
          c = n.getComponent(cc.PolygonCollider);
        if (null == o || null == c) return !1;
        for (var a = new Array, i = 0; i < o.points.length; i++) {
          var r = cc.v2(o.points[i].x, o.points[i].y);
          a.push(r)
        }
        var s = new Array;
        for (i = 0; i < c.points.length; i++) {
          r = cc.v2(c.points[i].x, c.points[i].y);
          s.push(r)
        }
        var l = t.convertToWorldSpaceAR(cc.v2(0, 0));
        l = cc.find("Canvas").convertToNodeSpaceAR(l), l = t.position;
        for (i = 0; i < a.length; i++) a[i].rotateSelf(e.AngleToRadian(t.angle)), a[i] = l.add(a[i]);
        var u = n.convertToWorldSpaceAR(cc.v2(0, 0));
        u = cc.find("Canvas").convertToNodeSpaceAR(u), u = n.position;
        for (i = 0; i < s.length; i++) s[i].rotateSelf(e.AngleToRadian(n.angle)), s[i] = u.add(s[i]);
        return cc.Intersection.polygonPolygon(a, s)
      }, e.getRandomNum = function (e, t, n) {
        return void 0 === n && (n = !1), n ? Math.floor(Math.random() * (t - e + 1) + e) : Math.random() * (t - e) + e
      }, e.RandomIndexFromArr = function (e) {
        for (var t = new Array, n = new Array, o = 0, c = 0; c < e.length; c++) e[c] > 0 && (t.push(e[c]), n.push(c), o += e[c]);
        var a = 100 / o;
        for (c = 0; c < t.length; c++) t[c] *= a, t[c] = Math.round(t[c]);
        var i = Math.floor(100 * Math.random()),
          r = -1;
        for (c = 0; c < t.length; c++) {
          for (var s = 0, l = c; l >= 0; l--) s += t[l];
          i >= s - t[c] && i < s && (r = c)
        }
        return -1 == r && (r = 0), n[r]
      }, e.ArrayHaveElement = function (e, t) {
        if (null == e || null == t) return !1;
        for (var n = !1, o = 0; o < e.length; o++)
          if (e[o] == t) {
            n = !0;
            break
          }
        return n
      }, e.DisruptionArray = function (t) {
        for (var n = 0; n < t.length; n++) {
          var o = e.RandomInteger(0, t.length),
            c = t[o];
          t[o] = t[n], t[n] = c
        }
        return t
      }, e.localConvertWorldPointAR = function (e) {
        return e ? e.convertToWorldSpaceAR(cc.v2(0, 0)) : null
      }, e.worldConvertLocalPointAR = function (e, t) {
        return e ? e.convertToNodeSpaceAR(t) : null
      }, e.convetOtherNodeSpaceAR = function (e, t) {
        if (!e || !t) return null;
        var n = this.localConvertWorldPointAR(e);
        return this.worldConvertLocalPointAR(t, n)
      }, e.returnCurrentLanType = function () {
        var e = 1;
        switch (cc.sys.language) {
          case cc.sys.LANGUAGE_CHINESE:
            "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
            break;
          case cc.sys.LANGUAGE_KOREAN:
            e = 4;
            break;
          default:
            e = 3
        }
        return e
      }, e.cbPosToWorldPos = function (e, t, n, o, c, a) {
        var i = n + (e.x - t.x / 2 + .5) * c,
          r = o + (e.y + .5) * a;
        return cc.v2(i, r)
      }, e.worldPosToCbPos = function (e, t, n, o, c, a) {
        var i = (e.x - n) / c - .5 + t / 2,
          r = (e.y - o) / a - .5;
        return i % 1 == 0 && r % 1 == 0 || (i = Math.round(i), r = Math.round(r)), cc.v2(i, r)
      }, e.judgeInArr = function (e, t) {
        for (var n = 0; n < t.length; n++)
          if (t[n] === e) return !0;
        return !1
      }, e.getAngle = function (e, t) {
        var n = t.x - e.x,
          o = t.y - e.y;
        return 360 * Math.atan(o / n) / (2 * Math.PI)
      }, e.judgeIntersect = function (e, t, n, o, c, a, i, r) {
        return Math.min(e, n) <= Math.max(c, i) && Math.min(a, r) <= Math.max(t, o) && Math.min(c, i) <= Math.max(e, n) && Math.min(t, o) <= Math.max(a, r) && (((c - e) * (o - t) - (n - e) * (a - t)) * ((i - e) * (o - t) - (n - e) * (r - t)) <= 1e-8 && ((e - c) * (r - a) - (i - c) * (t - a)) * ((n - c) * (r - a) - (i - c) * (o - a)) <= 1e-8)
      }, e.getNormalizeVector = function (e, t) {
        return t.sub(e).normalize()
      }, e.judgeItemOverlapping = function (e, t, n, o, c, a, i, r) {
        return !(e + n < c || c + i < e || t + o < a || a + r < t)
      }, e.getCircumferencePos = function (e, t, n) {
        var o = cc.v2(0, 0);
        return o.x = e.x + Math.sin(2 * Math.PI / 360 * n) * t, o.y = e.y + Math.cos(2 * Math.PI / 360 * n) * t, o
      }, e.upsetArr = function (e) {
        return e.sort(function (e, t) {
          return Math.random() > .5 ? -1 : 1
        })
      }, e.getAudio = function (e, t) {
        return cc.sys.os === cc.sys.OS_IOS ? e : t
      }, e.setLocalData = function (e, t) {
        cc.sys.localStorage.setItem(e, t)
      }, e.getLocalData = function (e) {
        return cc.sys.localStorage.getItem(e)
      }, e.getNodePos = function (e, t, n) {
        return n ? e.convertToNodeSpaceAR(t.convertToWorldSpaceAR(n)) : e.convertToNodeSpaceAR(t.convertToWorldSpaceAR())
      }, e.findAllItemIndex = function (e, t) {
        for (var n = 0, o = [], c = n; c < t.length; c++) t[c] == e && (n = c, o.push(c));
        return o
      }, e.judgeArrSame = function (e, t) {
        for (var n = 0; n < e.length; n++)
          for (var o = 0; o < t.length; o++)
            if (e[n] !== t[o]) return !1;
        return !0
      }, e.count = function (e, t) {
        return e.reduce(function (e, n) {
          return n === t ? e + 1 : e
        }, 0)
      }, e.pDistance = function (e, t) {
        return e.sub(t).mag()
      }, e.getAngleByVector = function (e) {
        return e.y < 0 ? 360 - cc.v2(1, 0).angle(e) / Math.PI * 180 : cc.v2(1, 0).angle(e) / Math.PI * 180
      }, e.getBoundingBoxToNode = function (e, t) {
        var n = t.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(-e.anchorX * e.width * (e.scaleX / Math.abs(e.scaleX)), -e.anchorY * e.height * (e.scaleY / Math.abs(e.scaleY)))));
        return cc.rect(n.x, n.y, e.width * Math.abs(e.scaleX), e.height * Math.abs(e.scaleY))
      }, e.degreesToVectors = function (e) {
        var t = cc.misc.degreesToRadians(e);
        return cc.v2(0, 1).rotate(-t)
      }, e.VectorsdegreesToVectors = function (e, t) {
        var n = cc.misc.degreesToRadians(t);
        return e.rotate(-n)
      }, e.vectorsToDegress = function (e) {
        if (Math.abs(e.x) + Math.abs(e.y) !== 0) {
          var t = cc.v2(0, 1),
            n = cc.v2(e).signAngle(t);
          return cc.misc.radiansToDegrees(n)
        }
        return 0
      }, e.judgeArrExist = function (e, t) {
        for (var n = 0; n < e.length; n++)
          if (e[n] === t) return !0;
        return !1
      }, e.deleteArrItem = function (e, t) {
        for (var n = 0; n < e.length; n++)
          if (e[n] === t) return void e.splice(n, 1)
      }, e.UpsetArr = function (e) {
        for (var t, n = e.length; n;) {
          var o = Math.floor(Math.random() * n--);
          t = [e[n], e[o]], e[o] = t[0], e[n] = t[1]
        }
        return e
      }, e.sortArr = function (e, t) {
        for (var n = 0; n < e.length - 1; n++)
          for (var o = 0; o < e.length - 1; o++) {
            switch (t) {
              case 0:
                var c = e[o] > e[o + 1];
                break;
              case 1:
                c = e[o].x > e[o + 1].x;
                break;
              case 2:
                c = e[o].y > e[o + 1].y
            }
            if (c) {
              var a = e[o];
              e[o] = e[o + 1], e[o + 1] = a
            }
          }
      }, e.getPointByCPAndAngleAndLen = function (e, t, n) {
        var o = t * Math.PI / 180,
          c = n * Math.cos(o),
          a = n * Math.sin(o);
        return cc.p(e.x + a, e.y + c)
      }, e.setSprite = function (e, t, n) {
        var o = e.getSpriteFrame(n);
        t.getComponent(cc.Sprite).spriteFrame = o
      }, e.logArr = function (e) {
        for (var t = "", n = 0; n < e.length; n++) t += e[n].x + ",", t += e[n].y + ",";
        cc.log(t)
      }, e.analysisArr = function (e) {
        for (var t = [], n = 0; n < e.length; n++)
          if (n % 2 == 0) {
            var o = cc.v2(e[n], e[n + 1]);
            t.push(o)
          }
        return t
      }, e.DetermineTheAngle = function (e, t) {
        var n = e.x - t.x,
          o = e.y - t.y,
          c = cc.v2(n, o);
        return Math.atan2(c.x, c.y) * (180 / Math.PI)
      }, e
    }();
    n.default = o, cc._RF.pop()
  }, {}],
  WallUpdate: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "9f05e4uSUJBf7dp3DMjGgbj", "WallUpdate");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      i = a.ccclass,
      r = a.property,
      s = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.mainCamera = null, t.leftUpWall = null, t.leftDownWall = null, t.rightUpWall = null, t.rightDownWall = null, t
        }

        return o(t, e), t.prototype.update = function (e) {
          if (this.leftUpWall.y - this.mainCamera.y > this.leftUpWall.height) {
            this.leftUpWall.y = this.leftDownWall.y - this.leftDownWall.height;
            var t = this.leftUpWall;
            this.leftUpWall = this.leftDownWall, this.leftDownWall = t
          }
          if (this.rightUpWall.y - this.mainCamera.y > this.rightUpWall.height) {
            this.rightUpWall.y = this.rightDownWall.y - this.rightDownWall.height;
            t = this.rightUpWall;
            this.rightUpWall = this.rightDownWall, this.rightDownWall = t
          }
        }, c([r(cc.Node)], t.prototype, "mainCamera", void 0), c([r(cc.Node)], t.prototype, "leftUpWall", void 0), c([r(cc.Node)], t.prototype, "leftDownWall", void 0), c([r(cc.Node)], t.prototype, "rightUpWall", void 0), c([r(cc.Node)], t.prototype, "rightDownWall", void 0), t = c([i], t)
      }(cc.Component);
    n.default = s, cc._RF.pop()
  }, {}],
  bfPrefabJs: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "813eeXgvcJG96hqXhg+nvJ0", "bfPrefabJs"), cc.Class({
      extends: cc.Component,
      properties: {
        wing_r: cc.Node,
        wing_l: cc.Node
      },
      onLoad: function () {
        this.wing_r = new cc.Node, this.wing_l = new cc.Node, this.startFun()
      },
      startFun: function () {
        this.wing_r.stopAllActions(), this.wing_l.stopAllActions(), this.wingAction(), this.isUser = !0, this.isUpdate = !0, this.turnNum = other.randomInt(10, 20), this.mosquitoSpeedLen = 2, this.mosquitoSpeedMaxR = 4, this.mosquitoSpeedR = 0, this.mosquitoTargetR = 0, this.mosquitoTargetMaxR = 359, this.mosquitoAddR = !0, this.mapScale = 1, this.onEdgeFlag = !0, this.isTurn = !1, this.scheduleOnce(function () {
          this.isTurn = !0, this.setMosquitoSpeed()
        }, 2)
      },
      wingAction: function () {
        this.wing_r.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1).easing(cc.easeSineInOut()), cc.scaleTo(.2, .4, 1).easing(cc.easeSineInOut())))), this.wing_l.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, -1, 1).easing(cc.easeSineInOut()), cc.scaleTo(.2, -.4, 1).easing(cc.easeSineInOut()))))
      },
      start: function () {
      },
      setMosquitoSpeed: function () {
        this.node.angle >= 360 ? this.node.angle -= 360 : this.node.angle < 0 && (this.node.angle += 360), this.mosquitoSpeedR = Math.random() * this.mosquitoSpeedMaxR * 2 - this.mosquitoSpeedMaxR;
        var e = Math.random() * this.mosquitoTargetMaxR * (Math.abs(this.mosquitoSpeedR) / (this.mosquitoSpeedMaxR + .4 * this.mapScale));
        this.mosquitoSpeedR > 0 ? (this.mosquitoTargetR = this.node.angle + e, this.mosquitoAddR = !0) : (this.mosquitoTargetR = this.node.angle - e, this.mosquitoAddR = !1), this.checkEdgeDelayCount = 0, this.onEdgeFlag && Math.abs(this.mosquitoSpeedR) > 2 && (this.mosquitoSpeedR = this.mosquitoSpeedR / 3 * 2, this.mosquitoTargetR = this.mosquitoTargetR / 3 * 2), this.onEdgeFlag = !1, this.turnNum--, this.turnNum <= 0 && (this.isTurn = !1)
      },
      updateMosquito: function () {
        var e = this.mosquitoSpeedLen,
          t = this.mosquitoSpeedR,
          n = this.mosquitoTargetR,
          c = this.node,
          a = o.getPointByCPAndAngleAndLen(c.getPosition(), c.angle + t, e);
        c.setPosition(a), c.angle += t, this.mosquitoAddR ? c.angle >= n && this.setMosquitoSpeed() : c.angle <= n && this.setMosquitoSpeed()
      },
      setPos: function () {
        this.node.position.x < 0 ? this.newPos = cc.v2(-GameData.gameWidth / 2 - 100, this.node.position.y) : this.newPos = cc.v2(GameData.gameWidth / 2 + 100, this.node.position.y), this.isUser = !1
      },
      setPos_1: function () {
        this.isUpdate = !1, this.scheduleOnce(function () {
          this.isUpdate = !0, this.setPos()
        }, .5)
      },
      update: function (e) {
        this.isUpdate && (this.isUser ? this.isTurn ? (this.updateMosquito(), this.checkOnEdge(!0)) : this.updateMove(e) : (this.updateMove_1(e), this.checkOnEdge(!1)))
      },
      updateMove_1: function (e) {
        this.dir = other.getNormalizeVector(this.node.getPosition(), this.newPos);
        var t = 1 * (this.dir.x * this.mosquitoSpeedLen * 3),
          n = 1 * (this.dir.y * this.mosquitoSpeedLen * 3),
          o = this.node.x + t,
          c = this.node.y + n;
        this.node.x = o, this.node.y = c;
        var a = 180 * Math.atan2(this.dir.y, this.dir.x) / Math.PI;
        a = 360 - a + 90, this.node.angle = a
      },
      updateMove: function (e) {
        this.dir = other.getNormalizeVector(this.node.getPosition(), cc.v2(0, 100));
        var t = 1 * (this.dir.x * this.mosquitoSpeedLen),
          n = 1 * (this.dir.y * this.mosquitoSpeedLen),
          o = this.node.x + t,
          c = this.node.y + n;
        this.node.x = o, this.node.y = c;
        var a = 180 * Math.atan2(this.dir.y, this.dir.x) / Math.PI;
        a = 360 - a + 90, this.node.angle = a
      },
      setMosquitoBackSpeed: function () {
        this.isTurn = !1, this.scheduleOnce(function () {
          this.isTurn = !0, this.setMosquitoSpeed()
        }, 2)
      },
      checkOnEdge: function (e) {
        this.node.x > GameData.gameWidth / 2 + 100 ? e ? this.setMosquitoBackSpeed() : this.node.active = !1 : this.node.x < -GameData.gameWidth / 2 - 100 ? e ? this.setMosquitoBackSpeed() : this.node.active = !1 : this.node.y > GameData.gameHeight / 2 + 100 ? e ? this.setMosquitoBackSpeed() : this.node.active = !1 : this.node.y < -GameData.gameHeight / 2 - 100 && (e ? this.setMosquitoBackSpeed() : this.node.active = !1)
      }
    });
    var o = {
      getAngle: function (e, t, n, o) {
        var c = Math.abs(e - n),
          a = Math.abs(t - o),
          i = a / Math.sqrt(Math.pow(c, 2) + Math.pow(a, 2)),
          r = Math.acos(i),
          s = 180 / (Math.PI / r);
        return t > o && (s = 180 - s), e > n && (s *= -1), s
      },
      getPointByCPAndAngleAndLen: function (e, t, n) {
        var o = t * Math.PI / 180,
          c = n * Math.cos(o),
          a = n * Math.sin(o);
        return cc.v2(e.x + a, e.y + c)
      }
    };
    cc._RF.pop()
  }, {}],
  fruitData: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "55375yB7OxHJ6SSoJ5ShoDj", "fruitData");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../common/PlayerInfo"),
      i = e("./GameFunction"),
      r = e("../Common/PoolManager"),
      s = e("../Common/Utils"),
      l = e("../common/DynamicLoad"),
      u = e("./MainGameUi"),
      d = e("./AudioManager"),
      p = cc._decorator,
      f = p.ccclass,
      h = p.property,
      m = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.levelNumber = 0, t.fruitNumber = 0, t.bianjieX = 0, t.pengzhuangCount = 0, t.notTargetTime = 0, t.returnNumber = !1, t.getNumberTime = 0, t.endCtrl = !1, t.endOne = 0, t.wallColl = 0, t.testEndDJS = 0, t
        }

        return o(t, e), t.prototype.onLoad = function () {
        }, t.prototype.start = function () {
          this.bianjieX = 360 - this.node.width / 2
        }, t.prototype.update = function (e) {
          var t = this;
          if (this.node.x < -this.bianjieX && (this.node.x = -this.bianjieX), this.node.x > this.bianjieX && (this.node.x = this.bianjieX), this.notTargetTime += e, this.returnNumber && (this.scheduleOnce(function () {
            t.getNumberTime = 0
          }, .25), this.returnNumber = !1),
          "fruitNode" == this.node.parent.name && (this.testEndDJS += e),
          this.node.y + this.node.width / 2 > cc.find("Canvas/lineNode")
            .children[0].y && 0 == this.pengzhuangCount
          && this.endCtrl
          && 0 == this.endOne
          && this.testEndDJS > 3
          && wuDi) { // 无敌模式
            a.default.GameUpdateCtrl = !1, a.default.playerTouch = !1;
            for (var n = 0; n < cc.find("Canvas/fruitNode").children.length; n++) cc.find("Canvas/fruitNode").children[n].removeComponent(cc.PhysicsCircleCollider), cc.find("Canvas/fruitNode").children[n].removeComponent(cc.RigidBody);
            this.node.color = cc.Color.RED, cc.tween(this.node).to(.3, {
              opacity: 0
            }).to(.3, {
              opacity: 255
            }).union().repeat(3).call(function () {
              i.default.Instance.end(), cc.find("Canvas/lineNode").children[0].active = !1
            }).start(), this.endOne++
          }
        }, t.prototype.setGridInfo = function () {
        }, t.prototype.getNumber = function () {
          var e = this.getNumberTime;
          return this.getNumberTime++, this.returnNumber = !0, e
        }, t.prototype.onBeginContact = function (e, t, n) {
          var o = this;
          if ("downwall" == n.node.group && (t.node.parent = cc.find("Canvas/fruitNode"), 0 == this.wallColl && (d.default.Instance.Play(5, !1, 1), this.wallColl++)), "fruit" == n.node.group) {
            if (this.endCtrl = !0, t.node.y < n.node.y) return;
            t.node.parent = cc.find("Canvas/fruitNode"), i.default.Instance.fruitHeigth = i.default.Instance.findHighestFruit(), null != t.node.getComponent(cc.RigidBody) && (t.node.getComponent(cc.RigidBody).angularVelocity = 0);
            var c = this.fruitNumber,
              r = n.node.getComponent("fruitData").fruitNumber;
            // 合成水果，水果下标 0-9 (0 为葡萄，9 为半个西瓜，有一些特殊逻辑)
            c == r && c < 9 && r < 9 ? (this.pengzhuangCount += 1,
              0 == t.node.getComponent("fruitData").getNumber() && (a.default.score += this.fruitNumber + (extraScore ? extraScore : 1), // 改分数
                u.default.Instance.SetScoreTween(a.default.score),
                n.node.getComponent(cc.PhysicsCircleCollider).radius = 0,
                n.node.getComponent(cc.PhysicsCircleCollider).apply(),
                this.node.getComponent(cc.PhysicsCircleCollider).radius = 0,
                this.node.getComponent(cc.PhysicsCircleCollider).apply(),
                cc.tween(t.node).to(.1, {
                  position: n.node.position
                }).call(function () {
                  i.default.Instance.createFruitSui(o.fruitNumber, n.node.position), i.default.Instance.createFruitL(o.fruitNumber, n.node.position, n.node.width), i.default.Instance.createLevelUpFruit(o.fruitNumber + 1, n.node.position), n.node.active = !1, t.node.active = !1, n.node.destroy(), t.node.destroy()
                }).start())) :
              c == r && 9 == c && 9 == r && // 边界逻辑
              (this.pengzhuangCount += 1,
              0 == t.node.getComponent("fruitData").getNumber() && (a.default.score += this.fruitNumber + 1,
                u.default.Instance.SetScoreTween(a.default.score),
                n.node.getComponent(cc.PhysicsCircleCollider).radius = 0,
                n.node.getComponent(cc.PhysicsCircleCollider).apply(),
                this.node.getComponent(cc.PhysicsCircleCollider).radius = 0,
                this.node.getComponent(cc.PhysicsCircleCollider).apply(),
                a.default.playerTouch = !1, cc.tween(t.node).to(.1, {
                position: n.node.position
              }).call(function () {
                i.default.Instance.createFruitSui(o.fruitNumber, n.node.position),
                  i.default.Instance.createFruitL(o.fruitNumber, n.node.position, n.node.width),
                  // +1 变 -1
                  i.default.Instance.createLevelUpFruit(o.fruitNumber + 1, n.node.position);
                var e = cc.find("Canvas/upEffectParent").getChildByName("daxigua");
                e.active = !0, e.opacity = 0, cc.tween(e).to(.5, {
                  opacity: 150
                }).start();
                var c = new cc.Node;
                c.addComponent(cc.Sprite).spriteFrame = l.default.Instance.fruit[10], c.parent = cc.find("Canvas/upEffectParent"), c.position = cc.v2(0, -500), c.scale = 0;
                var r = new cc.Node;
                r.addComponent(cc.Sprite).spriteFrame = l.default.Instance.caidia[6], r.scale = 3, r.parent = c, r.position = cc.v2(0), cc.tween(r).by(5, {
                  angle: 360
                }).repeatForever().start();
                var s = new cc.Node;
                s.addComponent(cc.Sprite).spriteFrame = l.default.Instance.fruit[10], s.parent = c, s.position = cc.v2(0), d.default.Instance.Play(4, !1, 1), i.default.Instance.ribbonEffect(cc.v2(0, 0)), c.runAction(cc.sequence(cc.spawn(cc.jumpBy(1, 0, 0, 300, 1), cc.scaleTo(1, 1)), cc.delayTime(1), cc.spawn(cc.moveTo(1, cc.v2(0, 500)), cc.scaleTo(1, 0)), cc.callFunc(function () {
                  a.default.score += 100, u.default.Instance.SetScoreTween(a.default.score), e.active = !1, a.default.playerTouch = !0, c.destroy()
                }))), n.node.active = !1, t.node.active = !1, n.node.destroy(), t.node.destroy()
              }).start()))
          }
        }, t.prototype.createBoom = function () {
          var e = r.default.Spawn("boom", cc.find("Canvas/upEffectParent"));
          e.position = this.node.position, e.runAction(cc.sequence(cc.delayTime(.5), cc.fadeOut(.5)))
        }, t.prototype.createStar = function () {
          var e = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
          e.scale = s.default.Random(.1, 1);
          var t = this.node.x + this.node.width / 2,
            n = this.node.x - this.node.width / 2,
            o = this.node.y;
          e.position = cc.v2(s.default.RandomInteger(n, t), o), e.runAction(cc.fadeOut(2))
        }, t.prototype.planeBoomEffect = function () {
          r.default.Spawn("boom", cc.find("Canvas/upEffectParent")).position = s.default.convetOtherNodeSpaceAR(this.node, cc.find("Canvas/upEffectParent"))
        }, t.prototype.clockEoilffect = function (e, t) {
          for (var n = 0; n < 3; n++) setTimeout(function () {
            var t = r.default.Spawn("star", cc.find("Canvas/upEffectParent"));
            t.position = e.position, t.scale = .3, t.runAction(cc.sequence(cc.scaleTo(.5, 1.1), cc.fadeOut(.5)))
          }, 300 * n)
        }, t.prototype.addScoreEffect = function () {
          var e = r.default.Spawn("add1", cc.find("Canvas/mainGameUi"));
          e.position = cc.find("Canvas/mainGameUi").children[0].position.add(cc.v2(0, 50)), e.runAction(cc.spawn(cc.moveBy(.5, 0, 50), cc.fadeOut(.5)))
        }, c([h()], t.prototype, "fruitNumber", void 0), t = c([f], t)
      }(cc.Component);
    n.default = m, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager",
    "../Common/Utils": "Utils",
    "../common/DynamicLoad": "DynamicLoad",
    "../common/PlayerInfo": "PlayerInfo",
    "./AudioManager": "AudioManager",
    "./GameFunction": "GameFunction",
    "./MainGameUi": "MainGameUi"
  }],
  gameOverJs: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "3621brbM61BsYFG7fM/74TL", "gameOverJs");
    var o = e("GameUiTools"),
      c = e("GameConfig"),
      a = e("MainManage");
    cc.Class({
      extends: cc.Component,
      properties: {
        bgLayer: cc.Node,
        scoreBg: cc.Node,
        overScoreT: cc.Label,
        overInfoT: cc.Label,
        moreBtn: cc.Button,
        leftBtn: cc.Button,
        rightBtn: cc.Button,
        midGameText: cc.Label,
        leftBtnText: cc.Label,
        rightBtnText: cc.Label,
        maxScoreText: cc.Label
      },
      onLoad: function () {
        this.bgLayer.color = cc.color("#68b951"), this.standardScore = c.standScore, this.game_max_score = 200, this.rigthBtnGameName = null, this.rightBtnGameUrl = null, this.UIPosChange(), this.addClickBtns();
        var e = "\u6700\u9ad8\u7eaa\u5f55:",
          t = this.returnCurrentLanType();
        e = 1 == t ? "\u6700\u9ad8\u7eaa\u5f55:" : 2 == t ? "\u6700\u9ad8\u7d00\u9304:" : 4 == t ? "\ucd5c\uace0 \uae30\ub85d:" : "Highest Record:";
        var n = c.gameScore,
          o = this.getHighScore();
        o ? o < c.gameScore && (this.setHisSocre(c.gameScore), o = c.gameScore) : (this.setHisSocre(c.gameScore), o = n), this.maxScoreText.string = e + o
      },
      returnCurrentLanType: function () {
        var e = 1;
        switch (cc.sys.language) {
          case cc.sys.LANGUAGE_CHINESE:
            "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
            break;
          case cc.sys.LANGUAGE_KOREAN:
            e = 4;
            break;
          default:
            e = 3
        }
        return e
      },
      setHisSocre: function (e) {
        cc.sys.localStorage.setItem("HigScore_JiaoTong", e)
      },
      getHighScore: function () {
        return cc.sys.localStorage.getItem("HigScore_JiaoTong")
      },
      UIPosChange: function () {
        this.overScoreT.string = c.gameScore, console.log("lang", a.langugeType);
        var e = null;
        e = 1 == a.langugeType ? this.getContentByScore(c.gameScore, a.gameNameText) : this.getContentByScore2(c.gameScore, a.gameNameText), console.log("nihao", a.endHttpShowInfo), null != a.endHttpShowInfo && "" != a.endHttpShowInfo && (cc.log("gototo"), e = a.endHttpShowInfo), this.overInfoT.string = e;
        var t = this.overInfoT.node.height;
        if (this.overInfoT.node.height = Math.ceil(e.length * this.overInfoT.fontSize / this.overInfoT.node.width) * t, document.title = e, console.log("gameOver txtMoreText", a.txtMoreText), this.midGameText.string = a.txtMoreText, this.leftBtnText.string = a.txtAgainText, this.tempArr = this.gameFocus(), null != a.ranLinkUrl()) {
          var n = a.ranLinkUrl(),
            o = a.ranLinkData.gameList[n].gameName;
          this.rigthBtnGameName = o, this.rightBtnGameUrl = a.ranLinkData.gameList[n].gameUrl
        }
        null != this.rigthBtnGameName && "" != this.rigthBtnGameName ? this.rightBtnText.string = this.rigthBtnGameName : this.rightBtnText.string = this.tempArr[0]
      },
      gameFocus: function () {
        var e = [],
          t = null,
          n = null;
        return Math.random() <= .5 ? (t = a.gameEndName1, n = a.gameEndUrl1) : (t = a.gameEndName2, n = a.gameEndUrl2), e.push(t), e.push(n), e
      },
      addClickBtns: function () {
        var e = this;
        e.moreBtn.node.on(cc.Node.EventType.TOUCH_START, function (e) {
        }), e.moreBtn.node.on(cc.Node.EventType.TOUCH_END, function (e) {
          console.log("MoreGame"), window.location.href = a.moreGameUrl
        }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function (e) {
        }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_END, function (e) {
          c.GAME_OVER_BOOL = !0, c.gameScore = 0, o.loadingScene("MainGameScene")
        }), e.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function (e) {
        }), e.rightBtn.node.on(cc.Node.EventType.TOUCH_END, function (t) {
          var n = null;
          n = null != e.rightBtnGameUrl && "" != e.rightBtnGameUrl ? e.rightBtnGameUrl : e.tempArr[1], window.location.href = n
        })
      },
      getContentByScore: function (e, t) {
        var n = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e861\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f971\u5206\uff01",
          o = parseInt(.3 * this.standardScore),
          c = parseInt(1.5 * this.standardScore),
          a = parseInt(2.5 * this.standardScore),
          i = parseInt(4 * this.standardScore);
        if (e > 0 && e <= o) n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01";
        else if (e > o && e <= this.standardScore) n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01";
        else if (e > this.standardScore && e <= c) {
          n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(12 * (e - this.standardScore) / (c - this.standardScore)) + 80) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01"
        } else if (e > c && e <= a) {
          n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(7 * (e - c) / (a - c)) + 92) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01"
        } else if (e > a && e <= i) n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01";
        else if (e > i && e < this.game_max_score) {
          n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - i) / (this.game_max_score - i))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01"
        } else e >= this.game_max_score && (n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01");
        return n
      },
      strlen: function (e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var o = e.charCodeAt(n);
          o >= 1 && o <= 126 || 65376 <= o && o <= 65439 ? t++ : t += 2
        }
        return t
      },
      getContentByScore2: function (e, t) {
        var n = "I'm awesome\uff0cin" + t + "get 0 score\uff0conly one person in the world has a 0\uff01",
          o = parseInt(.3 * this.standardScore),
          c = parseInt(1.5 * this.standardScore),
          a = parseInt(2.5 * this.standardScore),
          i = parseInt(4 * this.standardScore);
        if (e >= this.game_max_score) n = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!";
        else if (e > 0 && e <= o) n = "I got " + e + " points in the game, really great\uff01";
        else if (e > o && e <= this.standardScore) n = "I got " + e + " points in the game, really great\uff01";
        else if (e > this.standardScore && e <= c) {
          n = "I got in the game in " + e + " points, beating out " + (Math.floor(12 * (e - this.standardScore) / (c - this.standardScore)) + 80) + "% of global players\uff01"
        } else if (e > c && e <= a) {
          n = "I got in the game in " + e + " points, beating out " + (Math.floor(7 * (e - c) / (a - c)) + 92) + "% of global players\uff01"
        } else if (e > a && e <= i) n = "I got in the game in " + e + " points, beating out 99% of global players\uff01";
        else if (e > i && e < this.game_max_score) {
          n = "I got " + e + " points in the game, it said to be the world's only " + (20 - Math.ceil(17 * (e - i) / (this.game_max_score - i))) + " people to reach this level! Have you?"
        }
        return n
      },
      start: function () {
      }
    }), cc._RF.pop()
  }, {
    GameConfig: "GameConfig",
    GameUiTools: "GameUiTools",
    MainManage: "MainManage"
  }],
  linkHttpIconJs: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "95474fr0oNDP7SAidILF03q", "linkHttpIconJs");
    var o = e("MainManage"),
      c = e("GameConfig");
    cc.Class({
      extends: cc.Component,
      properties: {
        iconSpr: cc.Node,
        iconSpr1: cc.Node
      },
      onLoad: function () {
        if (this._imageArr = [], this.stopUpdateBool = !0, this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, null != o.recGameData && "" != o.recGameData && null != o.recGameimg1 && "" != o.recGameimg1) {
          var e = 50 - this.gameWidth / 2,
            t = this.gameHeight - 50 - this.gameHeight / 2;
          null != o.recGamePos && "" != o.recGamePos && (1 == o.recGamePos ? (e = 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 2 == o.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 3 == o.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2) : 4 == o.recGamePos && (e = 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2));
          var n = o.recGameimg1,
            c = o.recGameimg2,
            a = this.iconSpr,
            i = this.iconSpr1,
            r = this;
          cc.loader.load(n, function (n, o) {
            a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o), r.iconSpr.opacity = 0, r.iconSpr.x = e, r.iconSpr.y = t, r._imageArr.push(r.iconSpr)
          }), cc.loader.load(c, function (n, o) {
            i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o), r.iconSpr1.opacity = 0, r.iconSpr1.x = e, r.iconSpr1.y = t, r._imageArr.push(r.iconSpr1)
          })
        }
        this.addTouchEvents()
      },
      showLinkPic: function () {
        var e = 0,
          t = 0;
        e = null != o.recGameDelPau ? o.recGameDelPau : 6, cc.log("dMainManager.recGameDelPer", o.recGameDelPer), t = null != o.recGameDelPer ? o.recGameDelPer : .7, this._imageArr[0].opacity = 255, this._imageArr[0].runAction(cc.repeatForever(cc.sequence(cc.delayTime(e), cc.rotateBy(t, 0, 180), cc.callFunc(function () {
          this._imageArr[0].setRotation(0), this._imageArr[0].opacity = 0, this._imageArr[1].opacity = 255
        }, this), cc.delayTime(e), cc.callFunc(function () {
          this.flowerAction(this._imageArr[1], t)
        }, this), cc.delayTime(t), cc.callFunc(function () {
          this._imageArr[1].opacity = 0, this._imageArr[0].opacity = 255
        }, this))))
      },
      flowerAction: function (e, t) {
        e.runAction(cc.sequence(cc.rotateBy(t, 0, 180), cc.callFunc(function () {
          e.setRotation(0)
        })))
      },
      start: function () {
      },
      addTouchEvents: function () {
        var e = this,
          t = {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (t, n) {
              var a = t.getLocation();
              if (e._imageArr.length >= 2) {
                var i = Math.abs(a.x - e.gameWidth / 2 - e._imageArr[0].x),
                  r = Math.abs(a.y - e.gameHeight / 2 - e._imageArr[0].y);
                i <= 30 && r <= 30 && (c.noTouchBool = !1, null != o.recGameUrl && "" != o.recGameUrl && (e._imageArr[0].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1), cc.callFunc(function () {
                  window.location.href = o.recGameUrl
                }))), e._imageArr[1].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1)))), console.log("touchLinkHttp"))
              }
              return !0
            },
            onTouchMoved: function (e, t) {
            },
            onTouchEnded: function (e, t) {
            }
          };
        cc.EventTarget.call(t, e.node)
      },
      update: function (e) {
        this.stopUpdateBool && this._imageArr.length >= 2 && (this.stopUpdateBool = !1, this.showLinkPic())
      }
    }), cc._RF.pop()
  }, {
    GameConfig: "GameConfig",
    MainManage: "MainManage"
  }],
  peaCannonAI: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "f8545atw1JIMK0v/hcNWns0", "peaCannonAI");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../Common/Utils"),
      i = e("../common/PlayerInfo"),
      r = e("../Common/PoolManager"),
      s = e("./GameFunction"),
      l = e("./MainGameUi"),
      u = e("./AudioManager"),
      d = cc._decorator,
      p = d.ccclass,
      f = d.property,
      h = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.shellNode = null, t.player = null, t.shootInter = 2, t.shootTime = 0, t.cannonNumber = 0, t.peaSuiPre = null, t
        }

        return o(t, e), t.prototype.start = function () {
          this.shellNode = cc.find("Canvas/shellNode"), this.player = cc.find("Canvas/playerNode/player"), this.node.scale = .7
        }, t.prototype.update = function (e) {
          if (i.default.GameUpdateCtrl) {
            var t = this.player.position.sub(this.node.position).normalize(),
              n = a.default.vectorsToDegress(t);
            this.node.angle = -n, this.shootTime += e, this.shootTime >= this.shootInter && (this.shootShell(), this.shootTime = 0)
          }
        }, t.prototype.shootShell = function () {
          this.node.runAction(cc.sequence(cc.scaleTo(.1, .7, .5), cc.scaleTo(.1, .7, .7)));
          var e = r.default.Spawn("shell", this.shellNode);
          e.getComponent("shellData").shellLife = 2, e.position = this.node.position, e.opacity = 255, e.scale = .1, e.active = !0, u.default.Instance.Play(0, !1, 1);
          var t = this.player.position.sub(e.position).normalize();
          e.runAction(cc.scaleTo(.2, .5)), e.runAction(cc.sequence(cc.moveBy(10, 2e3 * t.x, 2e3 * t.y), cc.callFunc(function () {
            r.default.Despawn("shell", e)
          }))), e.runAction(cc.repeatForever(cc.rotateBy(3, 1080)))
        }, t.prototype.onCollisionEnter = function (e, t) {
          "shell" == e.node.group && 2 == e.node.getComponent("shellData").shellLife ? e.node.getComponent("shellData").shellLife -= 1 : "shell" == e.node.group && 1 == e.node.getComponent("shellData").shellLife && (u.default.Instance.Play(2, !1, 1), t.node.active = !1, s.default.Instance.cannonNodeArr[this.cannonNumber] = 0, this.createCannonSui(t.node), e.node.stopAllActions(), i.default.score += 10, l.default.Instance.SetScoreTween(i.default.score), r.default.Despawn("shell", e.node), r.default.Despawn("peaCannon", t.node))
        }, t.prototype.onCollisionStay = function (e, t) {
        }, t.prototype.onCollisionExit = function (e, t) {
        }, t.prototype.createCannonSui = function (e) {
          var t = cc.instantiate(this.peaSuiPre);
          t.parent = cc.find("Canvas/targetBoomNode"), t.position = e.position, t.scale = e.scale, t.angle = e.angle;
          for (var n = 0; n < t.children.length; n++) t.children[n].runAction(cc.sequence(cc.spawn(cc.moveBy(.25, a.default.RandomInteger(-70, 70), a.default.RandomInteger(-70, 70)), cc.rotateBy(.5, a.default.RandomInteger(-360, 360))), cc.fadeOut(1), cc.callFunc(function () {
            t.destroy()
          })))
        }, c([f(cc.Prefab)], t.prototype, "peaSuiPre", void 0), t = c([p], t)
      }(cc.Component);
    n.default = h, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager",
    "../Common/Utils": "Utils",
    "../common/PlayerInfo": "PlayerInfo",
    "./AudioManager": "AudioManager",
    "./GameFunction": "GameFunction",
    "./MainGameUi": "MainGameUi"
  }],
  resArr: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "8a68e/WQz1Feo++msjg6z8R", "resArr"), cc.Class({
      extends: cc.Component,
      properties: {
        SpriteFrameArr: [cc.SpriteFrame],
        PrefabArr: [cc.Prefab],
        audiosArr: {
          type: cc.AudioClip,
          default: []
        }
      },
      onLoad: function () {
        void 0 != ToolsJs && (ToolsJs.PrefabArrJs = this, ToolsJs.SpriteFrameJs = this, ToolsJs.AudioArrJs = this), this.addPrefabs(), this.addSpriteFrame(), this.audioClipDic = {};
        for (var e = 0; e < this.audiosArr.length; e++) {
          var t = this.audiosArr[e];
          this.audioClipDic[t.name] = t
        }
      },
      playAudio: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null != this.audioClipDic[e] ? cc.audioEngine.play(this.audioClipDic[e], n, t) : (console.log("\u6ca1\u6709\u627e\u5230\u97f3\u9891\uff1a" + e), null)
      },
      getAudioClip: function (e) {
        return null != this.audioClipDic[e] ? this.audioClipDic[e] : (console.log("\u6ca1\u6709\u627e\u5230\u97f3\u9891\uff1a" + e), null)
      },
      addSpriteFrame: function () {
        this.spriteArr = {};
        for (var e = 0; e < this.SpriteFrameArr.length; e++) {
          var t = this.SpriteFrameArr[e];
          null != t && (this.spriteArr[t.name] = t)
        }
      },
      getSpriteFrame: function (e) {
        return null != this.spriteArr[e] ? this.spriteArr[e] : (console.log("\u6ca1\u6709\u6dfb\u52a0\u56fe\u7247\uff1a" + e), null)
      },
      addPrefabs: function () {
        this.prefabsArr = {};
        for (var e = 0; e < this.PrefabArr.length; e++) {
          var t = this.PrefabArr[e];
          this.prefabsArr[t.name] = t
        }
      },
      getPrefabs: function (e) {
        return null != this.prefabsArr[e] ? this.prefabsArr[e] : (console.log("\u6ca1\u6709\u9884\u5236\u4f53\uff1a" + e), null)
      }
    }), cc._RF.pop()
  }, {}],
  startGameJs: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "startGameJs");
    var o = e("GameUiTools"),
      c = (e("HttpManagerJs"), e("MainManage")),
      a = (e("LoadSceneJs"), e("GameConfig"));
    cc.Class({
      extends: cc.Component,
      properties: {
        showInfoT: cc.Label,
        startT: cc.Label
      },
      onLoad: function () {
        a.publicGameBool && c.init(), this.showInfoT.string = c.gameInfoText, this.startT.string = c.txtStartText, this.node.on("touchend", function (e) {
          this.node.x = -2e3
        }, this)
      },
      addTouchEvents: function () {
        var e = {
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          onTouchBegan: function (e, t) {
            return o.loadingScene("MainGameScene"), !0
          },
          onTouchMoved: function (e, t) {
          },
          onTouchEnded: function (e, t) {
          }
        };
        cc.eventManager.addListener(e, this.node)
      },
      update: function (e) {
      }
    }), cc._RF.pop()
  }, {
    GameConfig: "GameConfig",
    GameUiTools: "GameUiTools",
    HttpManagerJs: "HttpManagerJs",
    LoadSceneJs: "LoadSceneJs",
    MainManage: "MainManage"
  }],
  startPanel: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "d42d3uJR2RCPLKQIl417E7S", "startPanel");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../Common/Utils"),
      i = e("../commonJs/GameConfig"),
      r = cc._decorator,
      s = r.ccclass,
      l = r.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.startPanel = null, t.titleSpr = null, t.startBtn = null, t.title = [], t
        }

        return o(t, e), t.prototype.onLoad = function () {
          this.startPanel.setContentSize(cc.winSize.width, cc.winSize.height), this.startPanel.children[0].setContentSize(cc.winSize.width, cc.winSize.height), this.startPanel.children[0].children[0].setContentSize(cc.winSize.width, cc.winSize.height)
        }, t.prototype.start = function () {
          this.startPanel.children[1].scaleX = 0, this.startPanel.children[1].runAction(cc.scaleTo(.5, .9).easing(cc.easeBackOut())), this.startPanel.children[2].runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, 1), cc.delayTime(.5)))), this.initTitle(), cc.director.preloadScene("MainGameScene")
        }, t.prototype.StartGame = function () {
          i.publicGameBool || adBreak({
            type: "next",
            name: "restart-game"
          }), this.startBtn.stopAllActions(), this.startBtn.runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1), cc.callFunc(function () {
            cc.director.loadScene("MainGameScene")
          })))
        }, t.prototype.initTitle = function () {
          var e = a.default.returnCurrentLanType();
          1 != e && (this.titleSpr.getComponent(cc.Sprite).spriteFrame = this.title[e - 1]), this.initTitleAni()
        }, t.prototype.initTitleAni = function () {
          for (var e = 0; e < this.titleSpr.children.length; e++) {
            var t = this.titleSpr.children[e],
              n = Math.random() >= .5 ? 8 : -8,
              o = .8 + .3 * Math.random();
            t.runAction(cc.sequence(cc.skewBy(o, n, 0), cc.skewBy(o, -n, 0), cc.skewBy(o, -n, 0), cc.skewBy(o, n, 0)).repeatForever())
          }
        }, c([l(cc.Node)], t.prototype, "startPanel", void 0), c([l(cc.Node)], t.prototype, "titleSpr", void 0), c([l(cc.Node)], t.prototype, "startBtn", void 0), c([l(cc.SpriteFrame)], t.prototype, "title", void 0), t = c([s], t)
      }(cc.Component);
    n.default = u, cc._RF.pop()
  }, {
    "../Common/Utils": "Utils",
    "../commonJs/GameConfig": "GameConfig"
  }],
  "use_v2.1.x_cc.Action": [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "ce2acozQx1Dq7kOhKg5RkBi", "use_v2.1.x_cc.Action"), cc.macro.ROTATE_ACTION_CCW = !0, cc._RF.pop()
  }, {}],
  wineObsmove: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "589ae7WabhNKbjjj1cMrAIM", "wineObsmove");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("./GameFunction"),
      i = cc._decorator,
      r = i.ccclass,
      s = (i.property, function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.isMove = !1, t
        }

        return o(t, e), t.prototype.onLoad = function () {
        }, t.prototype.update = function (e) {
          this.isMove && (this.node.x += a.default.Instance.lvdaiSpeed)
        }, t = c([r], t)
      }(cc.Component));
    n.default = s, cc._RF.pop()
  }, {
    "./GameFunction": "GameFunction"
  }],
  winerCollision: [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "3ea89nQCdpP9II/GHC3tXOf", "winerCollision");
    var o = this && this.__extends || function () {
        var e = function (t, n) {
          return (e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (e, t) {
              e.__proto__ = t
            } || function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
        };
        return function (t, n) {
          function o() {
            this.constructor = t
          }

          e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
      }(),
      c = this && this.__decorate || function (e, t, n, o) {
        var c, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o);
        else
          for (var r = e.length - 1; r >= 0; r--) (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(t, n, i) : c(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = e("../common/PlayerInfo"),
      i = e("../Common/PoolManager"),
      r = e("../Common/Utils"),
      s = e("./AudioManager"),
      l = e("./GameFunction"),
      u = e("./GameManager"),
      d = cc._decorator,
      p = d.ccclass,
      f = d.property,
      h = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.wineType = 0, t.isMove = !1, t.wineColorStr1 = [], t.wineColorStr2 = [], t
        }

        return o(t, e), t.prototype.onLoad = function () {
          this.wineColorStr1.push("eba51f", "eba51f", "eba51f", "eba51f", "87c5ff", "87c5ff", "87c5ff", "87c5ff", "87c5ff", "87c5ff"), this.wineColorStr2.push("fed74a", "fed74a", "fed74a", "fed74a", "b7fbff", "b7fbff", "b7fbff", "b7fbff", "b7fbff", "b7fbff")
        }, t.prototype.start = function () {
        }, t.prototype.update = function (e) {
          this.isMove && (this.node.x += l.default.Instance.lvdaiSpeed), this.node.x >= 500 && i.default.Despawn(this.node.name, this.node)
        }, t.prototype.onCollisionEnter = function (e, t) {
          "wine" == e.node.group && (this.createWineSa(t.node), this.createWineSuiPian(t.node), t.node.active = !1, a.default.playerTouch && (u.default.Instance.ToEnd(), a.default.playerTouch = !1))
        }, t.prototype.createWineSuiPian = function (e) {
          s.default.Instance.Play(0, !1, 1);
          var t = i.default.Spawn(e.name.concat("SP"), cc.find("Canvas/targetWineNodeQ"));
          t.position = e.position, t.angle = e.angle, t.scale = e.scale;
          for (var n = 0; n < t.children.length; n++) t.children[n].runAction(cc.spawn(cc.sequence(cc.jumpBy(1, r.default.RandomInteger(-500, 50), r.default.RandomInteger(-2e3, -1600), 500, 1), cc.fadeOut(.5)), cc.rotateBy(1, r.default.RandomInteger(-860, 860))))
        }, t.prototype.createWineSa = function (e) {
          for (var t = r.default.RandomInteger(35, 40), n = 0; n < t / 2; n++) {
            (o = i.default.Spawn("juicePre", cc.find("Canvas/upEffectParent"))).color = (new cc.Color).fromHEX(this.wineColorStr1[this.wineType - 1]), o.position = e.position, o.scale = .5, o.runAction(cc.spawn(cc.jumpBy(1, r.default.RandomInteger(-300, 50), r.default.RandomInteger(-400, -200), r.default.RandomInteger(100, 150), 1), cc.fadeOut(1)))
          }
          for (n = 0; n < t / 2; n++) {
            var o;
            (o = i.default.Spawn("juicePre", cc.find("Canvas/upEffectParent"))).color = (new cc.Color).fromHEX(this.wineColorStr2[this.wineType - 1]), o.position = e.position, o.scale = .5, o.runAction(cc.spawn(cc.jumpBy(1, r.default.RandomInteger(-300, 50), r.default.RandomInteger(-400, -200), r.default.RandomInteger(100, 150), 1), cc.fadeOut(1)))
          }
        }, c([f()], t.prototype, "wineType", void 0), t = c([p], t)
      }(cc.Component);
    n.default = h, cc._RF.pop()
  }, {
    "../Common/PoolManager": "PoolManager",
    "../Common/Utils": "Utils",
    "../common/PlayerInfo": "PlayerInfo",
    "./AudioManager": "AudioManager",
    "./GameFunction": "GameFunction",
    "./GameManager": "GameManager"
  }]
}, {}, ["HttpManagerJs", "LanguageSetJs", "LoadSceneJs", "AniTools", "MainGameJS", "ToolsJs", "resArr", "MainManage", "AddScore", "AdjusWithHeight", "AudioManager", "AutoDestroy", "DataManager", "EffectCenter", "FailedUi", "GameFunction", "GameManager", "InputController", "KnifeCollision", "MainGameUi", "NewAttribute", "PhysicsParticle", "Rocker", "RotateAround", "Stack", "WallUpdate", "fruitData", "peaCannonAI", "startPanel", "wineObsmove", "winerCollision", "GameConfig", "GameUiTools", "DynamicLoad", "EffectSprite", "PlayerInfo", "PoolManager", "RandomFly", "RenderWater", "Shake", "SpriteManager", "Toast", "Utils", "bfPrefabJs", "gameOverJs", "linkHttpIconJs", "startGameJs", "use_v2.1.x_cc.Action"]);
