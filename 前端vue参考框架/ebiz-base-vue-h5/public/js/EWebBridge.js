'use strict'
// Promise ES6 polyfill https://github.com/taylorhakes/promise-polyfill, 如果此polyfill依然无法满足需求，那么可以引入https://github.com/stefanpenner/es6-promise
!(function(e) {
  function n() {}
  function t(e, n) {
    return function() {
      e.apply(n, arguments)
    }
  }
  function o(e) {
    if ('object' != typeof this) throw new TypeError('Promises must be constructed via new')
    if ('function' != typeof e) throw new TypeError('not a function')
    ;(this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), s(e, this)
  }
  function i(e, n) {
    for (; 3 === e._state; ) e = e._value
    return 0 === e._state
      ? void e._deferreds.push(n)
      : ((e._handled = !0),
        void o._immediateFn(function() {
          var t = 1 === e._state ? n.onFulfilled : n.onRejected
          if (null === t) return void (1 === e._state ? r : u)(n.promise, e._value)
          var o
          try {
            o = t(e._value)
          } catch (i) {
            return void u(n.promise, i)
          }
          r(n.promise, o)
        }))
  }
  function r(e, n) {
    try {
      if (n === e) throw new TypeError('A promise cannot be resolved with itself.')
      if (n && ('object' == typeof n || 'function' == typeof n)) {
        var i = n.then
        if (n instanceof o) return (e._state = 3), (e._value = n), void f(e)
        if ('function' == typeof i) return void s(t(i, n), e)
      }
      ;(e._state = 1), (e._value = n), f(e)
    } catch (r) {
      u(e, r)
    }
  }
  function u(e, n) {
    ;(e._state = 2), (e._value = n), f(e)
  }
  function f(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      o._immediateFn(function() {
        e._handled || o._unhandledRejectionFn(e._value)
      })
    for (var n = 0, t = e._deferreds.length; n < t; n++) i(e, e._deferreds[n])
    e._deferreds = null
  }
  function c(e, n, t) {
    ;(this.onFulfilled = 'function' == typeof e ? e : null), (this.onRejected = 'function' == typeof n ? n : null), (this.promise = t)
  }
  function s(e, n) {
    var t = !1
    try {
      e(
        function(e) {
          t || ((t = !0), r(n, e))
        },
        function(e) {
          t || ((t = !0), u(n, e))
        }
      )
    } catch (o) {
      if (t) return
      ;(t = !0), u(n, o)
    }
  }
  var a = setTimeout
  ;(o.prototype['catch'] = function(e) {
    return this.then(null, e)
  }),
    (o.prototype.then = function(e, t) {
      var o = new this.constructor(n)
      return i(this, new c(e, t, o)), o
    }),
    (o.all = function(e) {
      var n = Array.prototype.slice.call(e)
      return new o(function(e, t) {
        function o(r, u) {
          try {
            if (u && ('object' == typeof u || 'function' == typeof u)) {
              var f = u.then
              if ('function' == typeof f)
                return void f.call(
                  u,
                  function(e) {
                    o(r, e)
                  },
                  t
                )
            }
            ;(n[r] = u), 0 === --i && e(n)
          } catch (c) {
            t(c)
          }
        }
        if (0 === n.length) return e([])
        for (var i = n.length, r = 0; r < n.length; r++) o(r, n[r])
      })
    }),
    (o.resolve = function(e) {
      return e && 'object' == typeof e && e.constructor === o
        ? e
        : new o(function(n) {
            n(e)
          })
    }),
    (o.reject = function(e) {
      return new o(function(n, t) {
        t(e)
      })
    }),
    (o.race = function(e) {
      return new o(function(n, t) {
        for (var o = 0, i = e.length; o < i; o++) e[o].then(n, t)
      })
    }),
    (o._immediateFn =
      ('function' == typeof setImmediate &&
        function(e) {
          setImmediate(e)
        }) ||
      function(e) {
        a(e, 0)
      }),
    (o._unhandledRejectionFn = function(e) {
      'undefined' != typeof console && console && console.warn('Possible Unhandled Promise Rejection:', e)
    }),
    (o._setImmediateFn = function(e) {
      o._immediateFn = e
    }),
    (o._setUnhandledRejectionFn = function(e) {
      o._unhandledRejectionFn = e
    }),
    'undefined' != typeof module && module.exports ? (module.exports = o) : e.Promise || (e.Promise = o)
})(this)

function appCallBack() {}

;(function(window) {
  if (window.EWebBridge) {
    return
  }

  // 初始化App桥接环境
  function setupWebViewJavascriptBridge(callback) {
    // Android 调用
    if (window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge)
    } else {
      document.addEventListener(
        'WebViewJavascriptBridgeReady',
        function() {
          callback(WebViewJavascriptBridge)
        },
        false
      )
    }

    // iOS使用
    if (navigator.userAgent.indexOf('iPhone') != -1) {
      /*
            // WebViewJavascriptBridge v5
            if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
            if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
            */

      // WebViewJavascriptBridge v6
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge)
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
      }
      window.WVJBCallbacks = [callback]
      var WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'
      WVJBIframe.src = 'https://__bridge_loaded__'
      document.documentElement.appendChild(WVJBIframe)
      setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)
    }
  }

  // App桥接调用初始化
  setupWebViewJavascriptBridge(function(bridge) {
    //桥接默认
    /*
        // Iphone/iOS WebViewJavascriptBridge v6 桥接上面没有注册init函数
        bridge.init(function(message, responseCallback) {
            console.log('JS got a message', message)
            var data = {
                'Javascript Responds': 'hello!'
            }
            console.log('JS responding with', data)
            responseCallback(data)
        })
        */

    bridge.registerHandler('appCallWebInJs', function(data, responseCallback) {
      try {
        data = JSON.parse(data)
        //业务逻辑放在这里;
        appCallBack(data, true)
        responseCallback('{"code": "0","message": "success"}')
      } catch (e) {
        appCallBack({}, false)
        responseCallback('{"code": "1","message": "App调用JS异常:"' + e + '"}')
      }
    })
  })

  // H5 & webapp 调用APP，并返回一个Promise对象
  function triggerCallHandler(method, params) {
    return new Promise(function(resolve) {
      WebViewJavascriptBridge.callHandler(method, params, function(response) {
        resolve(response)
      })
    })
  }

  // 初始化SDK
  var EWebBridge = (window.EWebBridge = {
    webCallAppInJs: function(method, params) {
      // params --> Mixed (json对象 {"a":"123","b":"200"} 或 null 或其他形式的参数，具体根据和app端的约定来)
      method = method || 'getUserToken'
      params = params || null
      return triggerCallHandler(method, params)
    }
  })
})(window)

//notation: js file can only use this kind of comments
//since comments will cause error when use in webview.loadurl,
//comments will be remove by java use regexp
