(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./node_modules/webcomponents.js/webcomponents-lite.min.js');

require('./node_modules/proxy-oo-polyfill/proxy-oo-polyfill.js');

require('./node_modules/promise-polyfill/promise.js');

var _razilocomponent = require('razilocomponent');

var _razilocomponent2 = _interopRequireDefault(_razilocomponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// razilo modules are all ES6 modules so make them available on global window
window.RaziloComponent = _razilocomponent2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTFiOTc2ZmYuanMiXSwibmFtZXMiOlsiUmF6aWxvQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLEFBQU8sQUFBUDs7QUFDQSxBQUFPLEFBQVA7O0FBQ0EsQUFBTyxBQUFQOztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUE7QUFDQSxPQUFPLEFBQVAsQUFBeUIsQUFBekIiLCJmaWxlIjoiZmFrZV9lMWI5NzZmZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9ub2RlX21vZHVsZXMvd2ViY29tcG9uZW50cy5qcy93ZWJjb21wb25lbnRzLWxpdGUubWluLmpzJztcbmltcG9ydCAnLi9ub2RlX21vZHVsZXMvcHJveHktb28tcG9seWZpbGwvcHJveHktb28tcG9seWZpbGwuanMnO1xuaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9wcm9taXNlLXBvbHlmaWxsL3Byb21pc2UuanMnO1xuaW1wb3J0IFJhemlsb0NvbXBvbmVudCBmcm9tICdyYXppbG9jb21wb25lbnQnO1xuXG4vLyByYXppbG8gbW9kdWxlcyBhcmUgYWxsIEVTNiBtb2R1bGVzIHNvIG1ha2UgdGhlbSBhdmFpbGFibGUgb24gZ2xvYmFsIHdpbmRvd1xud2luZG93LlJhemlsb0NvbXBvbmVudCA9IFJhemlsb0NvbXBvbmVudDtcbiJdfQ==
},{"./node_modules/promise-polyfill/promise.js":2,"./node_modules/proxy-oo-polyfill/proxy-oo-polyfill.js":3,"./node_modules/webcomponents.js/webcomponents-lite.min.js":60,"razilocomponent":58}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}

  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }
})(undefined);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2UuanMiXSwibmFtZXMiOlsicm9vdCIsInNldFRpbWVvdXRGdW5jIiwic2V0VGltZW91dCIsIm5vb3AiLCJiaW5kIiwiZm4iLCJ0aGlzQXJnIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJQcm9taXNlIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJ1bmRlZmluZWQiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwicHVzaCIsIl9pbW1lZGlhdGVGbiIsImNiIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicmVzb2x2ZSIsInJlamVjdCIsInByb21pc2UiLCJyZXQiLCJlIiwibmV3VmFsdWUiLCJ0aGVuIiwiZmluYWxlIiwibGVuZ3RoIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwiaSIsImxlbiIsIkhhbmRsZXIiLCJkb25lIiwidmFsdWUiLCJyZWFzb24iLCJleCIsInByb3RvdHlwZSIsInByb20iLCJjb25zdHJ1Y3RvciIsImFsbCIsImFyciIsImFyZ3MiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsInJlbWFpbmluZyIsInJlcyIsInZhbCIsInJhY2UiLCJ2YWx1ZXMiLCJzZXRJbW1lZGlhdGUiLCJlcnIiLCJjb25zb2xlIiwid2FybiIsIl9zZXRJbW1lZGlhdGVGbiIsIl9zZXRVbmhhbmRsZWRSZWplY3Rpb25GbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxDQUFDLFVBQVVBLElBQVYsRUFBZ0I7O0FBRWY7QUFDQTtBQUNBLE1BQUlDLGlCQUFpQkMsVUFBckI7O0FBRUEsV0FBU0MsSUFBVCxHQUFnQixDQUFFOztBQUVsQjtBQUNBLFdBQVNDLElBQVQsQ0FBY0MsRUFBZCxFQUFrQkMsT0FBbEIsRUFBMkI7QUFDekIsV0FBTyxZQUFZO0FBQ2pCRCxTQUFHRSxLQUFILENBQVNELE9BQVQsRUFBa0JFLFNBQWxCO0FBQ0QsS0FGRDtBQUdE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Z0M3QixFQUFoQztBQUNELEdBRkQ7O0FBSUEsTUFBSSxPQUFPeUQsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT0MsT0FBNUMsRUFBcUQ7QUFDbkRELFdBQU9DLE9BQVAsR0FBaUJ0RCxPQUFqQjtBQUNELEdBRkQsTUFFTyxJQUFJLENBQUNULEtBQUtTLE9BQVYsRUFBbUI7QUFDeEJULFNBQUtTLE9BQUwsR0FBZUEsT0FBZjtBQUNEO0FBRUYsQ0F4T0QiLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAocm9vdCkge1xuXG4gIC8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4gIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuICB2YXIgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0O1xuXG4gIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICBcbiAgLy8gUG9seWZpbGwgZm9yIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4gIGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gUHJvbWlzZShmbikge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgICB0aGlzLl9zdGF0ZSA9IDA7XG4gICAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gICAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICAgIHdoaWxlIChzZWxmLl9zdGF0ZSA9PT0gMykge1xuICAgICAgc2VsZiA9IHNlbGYuX3ZhbHVlO1xuICAgIH1cbiAgICBpZiAoc2VsZi5fc3RhdGUgPT09IDApIHtcbiAgICAgIHNlbGYuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2VsZi5faGFuZGxlZCA9IHRydWU7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgICAgKHNlbGYuX3N0YXRlID09PSAxID8gcmVzb2x2ZSA6IHJlamVjdCkoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fdmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcmV0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICAgIGlmIChuZXdWYWx1ZSAmJiAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHNlbGYuX3N0YXRlID0gMztcbiAgICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIGZpbmFsZShzZWxmKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5fc3RhdGUgPSAxO1xuICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGZpbmFsZShzZWxmKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3Qoc2VsZiwgZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gICAgc2VsZi5fc3RhdGUgPSAyO1xuICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmluYWxlKHNlbGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluYWxlKHNlbGYpIHtcbiAgICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghc2VsZi5faGFuZGxlZCkge1xuICAgICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaGFuZGxlKHNlbGYsIHNlbGYuX2RlZmVycmVkc1tpXSk7XG4gICAgfVxuICAgIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gICAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAgICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gICAqXG4gICAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAgICovXG4gIGZ1bmN0aW9uIGRvUmVzb2x2ZShmbiwgc2VsZikge1xuICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGZuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgZG9uZSA9IHRydWU7XG4gICAgICByZWplY3Qoc2VsZiwgZXgpO1xuICAgIH1cbiAgfVxuXG4gIFByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICB9O1xuXG4gIFByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICB2YXIgcHJvbSA9IG5ldyAodGhpcy5jb25zdHJ1Y3Rvcikobm9vcCk7XG5cbiAgICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcbiAgICByZXR1cm4gcHJvbTtcbiAgfTtcblxuICBQcm9taXNlLmFsbCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFhcnIgfHwgdHlwZW9mIGFyci5sZW5ndGggPT09ICd1bmRlZmluZWQnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5Jyk7XG4gICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblxuICAgICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWwsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmdzW2ldID0gdmFsO1xuICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWplY3QodmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIFByb21pc2UucmFjZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YWx1ZXNbaV0udGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuICBQcm9taXNlLl9pbW1lZGlhdGVGbiA9ICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmIGZ1bmN0aW9uIChmbikgeyBzZXRJbW1lZGlhdGUoZm4pOyB9KSB8fFxuICAgIGZ1bmN0aW9uIChmbikge1xuICAgICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICAgIH07XG5cbiAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4gPSBmdW5jdGlvbiBfdW5oYW5kbGVkUmVqZWN0aW9uRm4oZXJyKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW1tZWRpYXRlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgY2FsbGJhY2tzXG4gICAqIEBwYXJhbSBmbiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIFByb21pc2UuX3NldEltbWVkaWF0ZUZuID0gZnVuY3Rpb24gX3NldEltbWVkaWF0ZUZuKGZuKSB7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4gPSBmbjtcbiAgfTtcblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIG9uIHVuaGFuZGxlZCByZWplY3Rpb25cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiB1bmhhbmRsZWQgcmVqZWN0aW9uXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBQcm9taXNlLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF9zZXRVbmhhbmRsZWRSZWplY3Rpb25Gbihmbikge1xuICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZm47XG4gIH07XG4gIFxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4gIH0gZWxzZSBpZiAoIXJvb3QuUHJvbWlzZSkge1xuICAgIHJvb3QuUHJvbWlzZSA9IFByb21pc2U7XG4gIH1cblxufSkodGhpcyk7XG4iXX0=
},{}],3:[function(require,module,exports){
/**
 * Proxy has been patched with support for Object.observe, which is now obsovare. This is done to allow OO to exist if native proxy does not.
 * The reason for this is due to limitations with proxy polyfill when it comes to arrays as it makes them immutable.
 * If Proxy.oo exists, you should switch to Proxy.oo when wanting to observe nested objects with arrays and still want to call a callback if the
 * array is used with push, splice, etc. Otherewise if Proxy.oo not present (we are native) and can use native engine to without issue
 */

/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (scope) {
    if (scope['Proxy']) return;

    var lastRevokeFn = null;

    /**
     * @param {*} o
     * @return {boolean} whether this is probably a (non-null) Object
     */
    function isObject(o) {
        return o ? (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == 'object' || typeof o == 'function' : false;
    }

    /**
     * @constructor
     * @param {!Object} target
     * @param {{apply, construct, get, set}} handler
     */
    scope.Proxy = function (target, handler) {
        if (!isObject(target) || !isObject(handler)) {
            throw new TypeError('Cannot create proxy with a non-object as target or handler');
        }

        // Construct revoke function, and set lastRevokeFn so that Proxy.revocable can steal it.
        // The caller might get the wrong revoke function if a user replaces or wraps scope.Proxy
        // to call itself, but that seems unlikely especially when using the polyfill.
        var throwRevoked = function throwRevoked() {};
        lastRevokeFn = function lastRevokeFn() {
            throwRevoked = function throwRevoked(trap) {
                throw new TypeError('Cannot perform ' + trap + ' on a proxy that has been revoked');
            };
        };

        // Fail on unsupported traps: Chrome doesn't do this, but ensure that users of the polyfill
        // are a bit more careful. Copy the internal parts of handler to prevent user changes.
        var unsafeHandler = handler;
        handler = { 'get': null, 'set': null, 'apply': null, 'construct': null };
        for (var k in unsafeHandler) {
            if (!(k in handler)) {
                throw new TypeError('Proxy polyfill does not support trap ' + k);
            }
            handler[k] = unsafeHandler[k];
        }
        if (typeof unsafeHandler == 'function') {
            // Allow handler to be a function (which has an 'apply' method). This matches what is
            // probably a bug in native versions. It treats the apply call as a trap to be configured.
            handler.apply = unsafeHandler.apply.bind(unsafeHandler);
        }

        // Define proxy as this, or a Function (if either it's callable, or apply is set).
        // TODO(samthor): Closure compiler doesn't know about 'construct', attempts to rename it.
        var proxy = this;
        var isMethod = false;
        var targetIsFunction = typeof target == 'function';
        if (handler.apply || handler['construct'] || targetIsFunction) {
            proxy = function Proxy() {
                var usingNew = this && this.constructor === proxy;
                throwRevoked(usingNew ? 'construct' : 'apply');

                if (usingNew && handler['construct']) {
                    return handler['construct'].call(this, target, arguments);
                } else if (!usingNew && handler.apply) {
                    return handler.apply(target, this, arguments);
                } else if (targetIsFunction) {
                    // since the target was a function, fallback to calling it directly.
                    if (usingNew) {
                        // inspired by answers to https://stackoverflow.com/q/1606797
                        var all = Array.prototype.slice.call(arguments);
                        all.unshift(target); // pass class as first arg to constructor, although irrelevant
                        // nb. cast to convince Closure compiler that this is a constructor
                        var f = /** @type {!Function} */target.bind.apply(target, all);
                        return new f();
                    }
                    return target.apply(this, arguments);
                }
                throw new TypeError(usingNew ? 'not a constructor' : 'not a function');
            };
            isMethod = true;
        }

        // Create default getters/setters. Create different code paths as handler.get/handler.set can't
        // change after creation.
        var getter = handler.get ? function (prop) {
            throwRevoked('get');
            return handler.get(this, prop, proxy);
        } : function (prop) {
            throwRevoked('get');
            return this[prop];
        };
        var setter = handler.set ? function (prop, value) {
            throwRevoked('set');
            var status = handler.set(this, prop, value, proxy);
            if (!status) {
                // TODO(samthor): If the calling code is in strict mode, throw TypeError.
                // It's (sometimes) possible to work this out, if this code isn't strict- try to load the
                // callee, and if it's available, that code is non-strict. However, this isn't exhaustive.
            }
        } : function (prop, value) {
            throwRevoked('set');
            this[prop] = value;
        };

        // Clone direct properties (i.e., not part of a prototype).
        var propertyNames = Object.getOwnPropertyNames(target);
        var propertyMap = {};
        propertyNames.forEach(function (prop) {
            if (isMethod && prop in proxy) {
                return; // ignore properties already here, e.g. 'bind', 'prototype' etc
            }
            var real = Object.getOwnPropertyDescriptor(target, prop);
            var desc = {
                enumerable: !!real.enumerable,
                get: getter.bind(target, prop),
                set: setter.bind(target, prop)
            };
            Object.defineProperty(proxy, prop, desc);
            propertyMap[prop] = true;
        });

        // Set the prototype, or clone all prototype methods (always required if a getter is provided).
        // TODO(samthor): We don't allow prototype methods to be set. It's (even more) awkward.
        // An alternative here would be to _just_ clone methods to keep behavior consistent.
        var prototypeOk = true;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(proxy, Object.getPrototypeOf(target));
        } else if (proxy.__proto__) {
            proxy.__proto__ = target.__proto__;
        } else {
            prototypeOk = false;
        }
        if (handler.get || !prototypeOk) {
            for (var k in target) {
                if (propertyMap[k]) {
                    continue;
                }
                Object.defineProperty(proxy, k, { get: getter.bind(target, k) });
            }
        }

        // The Proxy polyfill cannot handle adding new properties. Seal the target and proxy.
        Object.seal(target);
        Object.seal(proxy);

        return proxy; // nb. if isMethod is true, proxy != this
    };

    scope.Proxy.revocable = function (target, handler) {
        var p = new scope.Proxy(target, handler);
        return { 'proxy': p, 'revoke': lastRevokeFn };
    };

    scope.Proxy['revocable'] = scope.Proxy.revocable;
    scope.Proxy['oo'] = {};
    scope['Proxy'] = scope.Proxy;
})(window);

/*!
 * Object.observe polyfill - v0.2.4
 * by Massimo Artizzu (MaxArt2501)
 *
 * https://github.com/MaxArt2501/object-observe
 *
 * Licensed under the MIT License
 * See LICENSE for details
 */

// Some type definitions
/**
 * This represents the data relative to an observed object
 * @typedef  {Object}                     ObjectData
 * @property {Map<Handler, HandlerData>}  handlers
 * @property {String[]}                   properties
 * @property {*[]}                        values
 * @property {Descriptor[]}               descriptors
 * @property {Notifier}                   notifier
 * @property {Boolean}                    frozen
 * @property {Boolean}                    extensible
 * @property {Object}                     proto
 */
/**
 * Function definition of a handler
 * @callback Handler
 * @param {ChangeRecord[]}                changes
*/
/**
 * This represents the data relative to an observed object and one of its
 * handlers
 * @typedef  {Object}                     HandlerData
 * @property {Map<Object, ObservedData>}  observed
 * @property {ChangeRecord[]}             changeRecords
 */
/**
 * @typedef  {Object}                     ObservedData
 * @property {String[]}                   acceptList
 * @property {ObjectData}                 data
*/
/**
 * Type definition for a change. Any other property can be added using
 * the notify() or performChange() methods of the notifier.
 * @typedef  {Object}                     ChangeRecord
 * @property {String}                     type
 * @property {Object}                     object
 * @property {String}                     [name]
 * @property {*}                          [oldValue]
 * @property {Number}                     [index]
 */
/**
 * Type definition for a notifier (what Object.getNotifier returns)
 * @typedef  {Object}                     Notifier
 * @property {Function}                   notify
 * @property {Function}                   performChange
 */
/**
 * Function called with Notifier.performChange. It may optionally return a
 * ChangeRecord that gets automatically notified, but `type` and `object`
 * properties are overridden.
 * @callback Performer
 * @returns {ChangeRecord|undefined}
 */
(function (P, O, A, root, _undefined) {
    // did we polyfill?
    if (!P.oo) return;

    /**
     * Relates observed objects and their data
     * @type {Map<Object, ObjectData}
     */
    var observed,

    /**
     * List of handlers and their data
     * @type {Map<Handler, Map<Object, HandlerData>>}
     */
    handlers,
        defaultAcceptList = ["add", "update", "delete", "reconfigure", "setPrototype", "preventExtensions"];

    // Functions for internal usage

    /**
     * Checks if the argument is an Array object. Polyfills Array.isArray.
     * @function isArray
     * @param {?*} object
     * @returns {Boolean}
     */
    var isArray = A.isArray || function (toString) {
        return function (object) {
            return toString.call(object) === "[object Array]";
        };
    }(O.prototype.toString),


    /**
     * Returns the index of an item in a collection, or -1 if not found.
     * Uses the generic Array.indexOf or Array.prototype.indexOf if available.
     * @function inArray
     * @param {Array} array
     * @param {*} pivot           Item to look for
     * @param {Number} [start=0]  Index to start from
     * @returns {Number}
     */
    inArray = A.prototype.indexOf ? A.indexOf || function (array, pivot, start) {
        return A.prototype.indexOf.call(array, pivot, start);
    } : function (array, pivot, start) {
        for (var i = start || 0; i < array.length; i++) {
            if (array[i] === pivot) return i;
        }return -1;
    },


    /**
     * Returns an instance of Map, or a Map-like object is Map is not
     * supported or doesn't support forEach()
     * @function createMap
     * @returns {Map}
     */
    createMap = root.Map === _undefined || !Map.prototype.forEach ? function () {
        // Lightweight shim of Map. Lacks clear(), entries(), keys() and
        // values() (the last 3 not supported by IE11, so can't use them),
        // it doesn't handle the constructor's argument (like IE11) and of
        // course it doesn't support for...of.
        // Chrome 31-35 and Firefox 13-24 have a basic support of Map, but
        // they lack forEach(), so their native implementation is bad for
        // this polyfill. (Chrome 36+ supports Object.observe.)
        var keys = [],
            values = [];

        return {
            size: 0,
            has: function has(key) {
                return inArray(keys, key) > -1;
            },
            get: function get(key) {
                return values[inArray(keys, key)];
            },
            set: function set(key, value) {
                var i = inArray(keys, key);
                if (i === -1) {
                    keys.push(key);
                    values.push(value);
                    this.size++;
                } else values[i] = value;
            },
            "delete": function _delete(key) {
                var i = inArray(keys, key);
                if (i > -1) {
                    keys.splice(i, 1);
                    values.splice(i, 1);
                    this.size--;
                }
            },
            forEach: function forEach(callback /*, thisObj*/) {
                for (var i = 0; i < keys.length; i++) {
                    callback.call(arguments[1], values[i], keys[i], this);
                }
            }
        };
    } : function () {
        return new Map();
    },


    /**
     * Simple shim for Object.getOwnPropertyNames when is not available
     * Misses checks on object, don't use as a replacement of Object.keys/getOwnPropertyNames
     * @function getProps
     * @param {Object} object
     * @returns {String[]}
     */
    getProps = O.getOwnPropertyNames ? function () {
        var func = O.getOwnPropertyNames;
        try {
            arguments.callee;
        } catch (e) {
            // Strict mode is supported

            // In strict mode, we can't access to "arguments", "caller" and
            // "callee" properties of functions. Object.getOwnPropertyNames
            // returns [ "prototype", "length", "name" ] in Firefox; it returns
            // "caller" and "arguments" too in Chrome and in Internet
            // Explorer, so those values must be filtered.
            var avoid = (func(inArray).join(" ") + " ").replace(/prototype |length |name /g, "").slice(0, -1).split(" ");
            if (avoid.length) func = function func(object) {
                var props = O.getOwnPropertyNames(object);
                if (typeof object === "function") for (var i = 0, j; i < avoid.length;) {
                    if ((j = inArray(props, avoid[i++])) > -1) props.splice(j, 1);
                }return props;
            };
        }
        return func;
    }() : function (object) {
        // Poor-mouth version with for...in (IE8-)
        var props = [],
            prop,
            hop;
        if ("hasOwnProperty" in object) {
            for (prop in object) {
                if (object.hasOwnProperty(prop)) props.push(prop);
            }
        } else {
            hop = O.hasOwnProperty;
            for (prop in object) {
                if (hop.call(object, prop)) props.push(prop);
            }
        }

        // Inserting a common non-enumerable property of arrays
        if (isArray(object)) props.push("length");

        return props;
    },


    /**
     * Return the prototype of the object... if defined.
     * @function getPrototype
     * @param {Object} object
     * @returns {Object}
     */
    getPrototype = O.getPrototypeOf,


    /**
     * Return the descriptor of the object... if defined.
     * IE8 supports a (useless) Object.getOwnPropertyDescriptor for DOM
     * nodes only, so defineProperties is checked instead.
     * @function getDescriptor
     * @param {Object} object
     * @param {String} property
     * @returns {Descriptor}
     */
    getDescriptor = O.defineProperties && O.getOwnPropertyDescriptor,


    /**
     * Sets up the next check and delivering iteration, using
     * requestAnimationFrame or a (close) polyfill.
     * @function nextFrame
     * @param {function} func
     * @returns {number}
     */
    nextFrame = root.requestAnimationFrame || root.webkitRequestAnimationFrame || function () {
        var initial = +new Date(),
            last = initial;
        return function (func) {
            return setTimeout(function () {
                func((last = +new Date()) - initial);
            }, 17);
        };
    }(),


    /**
     * Sets up the observation of an object
     * @function doObserve
     * @param {Object} object
     * @param {Handler} handler
     * @param {String[]} [acceptList]
     */
    doObserve = function doObserve(object, handler, acceptList) {
        var data = observed.get(object);

        if (data) {
            performPropertyChecks(data, object);
            setHandler(object, data, handler, acceptList);
        } else {
            data = createObjectData(object);
            setHandler(object, data, handler, acceptList);

            if (observed.size === 1)
                // Let the observation begin!
                nextFrame(runGlobalLoop);
        }
    },


    /**
     * Creates the initial data for an observed object
     * @function createObjectData
     * @param {Object} object
     */
    createObjectData = function createObjectData(object, data) {
        var props = getProps(object),
            values = [],
            descs,
            i = 0,
            data = {
            handlers: createMap(),
            frozen: O.isFrozen ? O.isFrozen(object) : false,
            extensible: O.isExtensible ? O.isExtensible(object) : true,
            proto: getPrototype && getPrototype(object),
            properties: props,
            values: values,
            notifier: retrieveNotifier(object, data)
        };

        if (getDescriptor) {
            descs = data.descriptors = [];
            while (i < props.length) {
                descs[i] = getDescriptor(object, props[i]);
                values[i] = object[props[i++]];
            }
        } else while (i < props.length) {
            values[i] = object[props[i++]];
        }observed.set(object, data);

        return data;
    },


    /**
     * Performs basic property value change checks on an observed object
     * @function performPropertyChecks
     * @param {ObjectData} data
     * @param {Object} object
     * @param {String} [except]  Doesn't deliver the changes to the
     *                           handlers that accept this type
     */
    performPropertyChecks = function () {
        var updateCheck = getDescriptor ? function (object, data, idx, except, descr) {
            var key = data.properties[idx],
                value = object[key],
                ovalue = data.values[idx],
                odesc = data.descriptors[idx];

            if ("value" in descr && (ovalue === value ? ovalue === 0 && 1 / ovalue !== 1 / value : ovalue === ovalue || value === value)) {
                addChangeRecord(object, data, {
                    name: key,
                    type: "update",
                    object: object,
                    oldValue: ovalue
                }, except);
                data.values[idx] = value;
            }
            if (odesc.configurable && (!descr.configurable || descr.writable !== odesc.writable || descr.enumerable !== odesc.enumerable || descr.get !== odesc.get || descr.set !== odesc.set)) {
                addChangeRecord(object, data, {
                    name: key,
                    type: "reconfigure",
                    object: object,
                    oldValue: ovalue
                }, except);
                data.descriptors[idx] = descr;
            }
        } : function (object, data, idx, except) {
            var key = data.properties[idx],
                value = object[key],
                ovalue = data.values[idx];

            if (ovalue === value ? ovalue === 0 && 1 / ovalue !== 1 / value : ovalue === ovalue || value === value) {
                addChangeRecord(object, data, {
                    name: key,
                    type: "update",
                    object: object,
                    oldValue: ovalue
                }, except);
                data.values[idx] = value;
            }
        };

        // Checks if some property has been deleted
        var deletionCheck = getDescriptor ? function (object, props, proplen, data, except) {
            var i = props.length,
                descr;
            while (proplen && i--) {
                if (props[i] !== null) {
                    descr = getDescriptor(object, props[i]);
                    proplen--;

                    // If there's no descriptor, the property has really
                    // been deleted; otherwise, it's been reconfigured so
                    // that's not enumerable anymore
                    if (descr) updateCheck(object, data, i, except, descr);else {
                        addChangeRecord(object, data, {
                            name: props[i],
                            type: "delete",
                            object: object,
                            oldValue: data.values[i]
                        }, except);
                        data.properties.splice(i, 1);
                        data.values.splice(i, 1);
                        data.descriptors.splice(i, 1);
                    }
                }
            }
        } : function (object, props, proplen, data, except) {
            var i = props.length;
            while (proplen && i--) {
                if (props[i] !== null) {
                    addChangeRecord(object, data, {
                        name: props[i],
                        type: "delete",
                        object: object,
                        oldValue: data.values[i]
                    }, except);
                    data.properties.splice(i, 1);
                    data.values.splice(i, 1);
                    proplen--;
                }
            }
        };

        return function (data, object, except) {
            if (!data.handlers.size || data.frozen) return;

            var props,
                proplen,
                keys,
                values = data.values,
                descs = data.descriptors,
                i = 0,
                idx,
                key,
                value,
                proto,
                descr;

            // If the object isn't extensible, we don't need to check for new
            // or deleted properties
            if (data.extensible) {

                props = data.properties.slice();
                proplen = props.length;
                keys = getProps(object);

                if (descs) {
                    while (i < keys.length) {
                        key = keys[i++];
                        idx = inArray(props, key);
                        descr = getDescriptor(object, key);

                        if (idx === -1) {
                            addChangeRecord(object, data, {
                                name: key,
                                type: "add",
                                object: object
                            }, except);
                            data.properties.push(key);
                            values.push(object[key]);
                            descs.push(descr);
                        } else {
                            props[idx] = null;
                            proplen--;
                            updateCheck(object, data, idx, except, descr);
                        }
                    }
                    deletionCheck(object, props, proplen, data, except);

                    if (!O.isExtensible(object)) {
                        data.extensible = false;
                        addChangeRecord(object, data, {
                            type: "preventExtensions",
                            object: object
                        }, except);

                        data.frozen = O.isFrozen(object);
                    }
                } else {
                    while (i < keys.length) {
                        key = keys[i++];
                        idx = inArray(props, key);
                        value = object[key];

                        if (idx === -1) {
                            addChangeRecord(object, data, {
                                name: key,
                                type: "add",
                                object: object
                            }, except);
                            data.properties.push(key);
                            values.push(value);
                        } else {
                            props[idx] = null;
                            proplen--;
                            updateCheck(object, data, idx, except);
                        }
                    }
                    deletionCheck(object, props, proplen, data, except);
                }
            } else if (!data.frozen) {

                // If the object is not extensible, but not frozen, we just have
                // to check for value changes
                for (; i < props.length; i++) {
                    key = props[i];
                    updateCheck(object, data, i, except, getDescriptor(object, key));
                }

                if (O.isFrozen(object)) data.frozen = true;
            }

            if (getPrototype) {
                proto = getPrototype(object);
                if (proto !== data.proto) {
                    addChangeRecord(object, data, {
                        type: "setPrototype",
                        name: "__proto__",
                        object: object,
                        oldValue: data.proto
                    });
                    data.proto = proto;
                }
            }
        };
    }(),


    /**
     * Sets up the main loop for object observation and change notification
     * It stops if no object is observed.
     * @function runGlobalLoop
     */
    runGlobalLoop = function runGlobalLoop() {
        if (observed.size) {
            observed.forEach(performPropertyChecks);
            handlers.forEach(deliverHandlerRecords);
            nextFrame(runGlobalLoop);
        }
    },


    /**
     * Deliver the change records relative to a certain handler, and resets
     * the record list.
     * @param {HandlerData} hdata
     * @param {Handler} handler
     */
    deliverHandlerRecords = function deliverHandlerRecords(hdata, handler) {
        var records = hdata.changeRecords;
        if (records.length) {
            hdata.changeRecords = [];
            handler(records);
        }
    },


    /**
     * Returns the notifier for an object - whether it's observed or not
     * @function retrieveNotifier
     * @param {Object} object
     * @param {ObjectData} [data]
     * @returns {Notifier}
     */
    retrieveNotifier = function retrieveNotifier(object, data) {
        if (arguments.length < 2) data = observed.get(object);

        /** @type {Notifier} */
        return data && data.notifier || {
            /**
             * @method notify
             * @see http://arv.github.io/ecmascript-object-observe/#notifierprototype._notify
             * @memberof Notifier
             * @param {ChangeRecord} changeRecord
             */
            notify: function notify(changeRecord) {
                changeRecord.type; // Just to check the property is there...

                // If there's no data, the object has been unobserved
                var data = observed.get(object);
                if (data) {
                    var recordCopy = { object: object },
                        prop;
                    for (prop in changeRecord) {
                        if (prop !== "object") recordCopy[prop] = changeRecord[prop];
                    }addChangeRecord(object, data, recordCopy);
                }
            },

            /**
             * @method performChange
             * @see http://arv.github.io/ecmascript-object-observe/#notifierprototype_.performchange
             * @memberof Notifier
             * @param {String} changeType
             * @param {Performer} func     The task performer
             * @param {*} [thisObj]        Used to set `this` when calling func
             */
            performChange: function performChange(changeType, func /*, thisObj*/) {
                if (typeof changeType !== "string") throw new TypeError("Invalid non-string changeType");

                if (typeof func !== "function") throw new TypeError("Cannot perform non-function");

                // If there's no data, the object has been unobserved
                var data = observed.get(object),
                    prop,
                    changeRecord,
                    thisObj = arguments[2],
                    result = thisObj === _undefined ? func() : func.call(thisObj);

                data && performPropertyChecks(data, object, changeType);

                // If there's no data, the object has been unobserved
                if (data && result && (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === "object") {
                    changeRecord = { object: object, type: changeType };
                    for (prop in result) {
                        if (prop !== "object" && prop !== "type") changeRecord[prop] = result[prop];
                    }addChangeRecord(object, data, changeRecord);
                }
            }
        };
    },


    /**
     * Register (or redefines) an handler in the collection for a given
     * object and a given type accept list.
     * @function setHandler
     * @param {Object} object
     * @param {ObjectData} data
     * @param {Handler} handler
     * @param {String[]} acceptList
     */
    setHandler = function setHandler(object, data, handler, acceptList) {
        var hdata = handlers.get(handler);
        if (!hdata) handlers.set(handler, hdata = {
            observed: createMap(),
            changeRecords: []
        });
        hdata.observed.set(object, {
            acceptList: acceptList.slice(),
            data: data
        });
        data.handlers.set(handler, hdata);
    },


    /**
     * Adds a change record in a given ObjectData
     * @function addChangeRecord
     * @param {Object} object
     * @param {ObjectData} data
     * @param {ChangeRecord} changeRecord
     * @param {String} [except]
     */
    addChangeRecord = function addChangeRecord(object, data, changeRecord, except) {
        data.handlers.forEach(function (hdata) {
            var acceptList = hdata.observed.get(object).acceptList;
            // If except is defined, Notifier.performChange has been
            // called, with except as the type.
            // All the handlers that accepts that type are skipped.
            if ((typeof except !== "string" || inArray(acceptList, except) === -1) && inArray(acceptList, changeRecord.type) > -1) hdata.changeRecords.push(changeRecord);
        });
    };

    observed = createMap();
    handlers = createMap();

    /**
     * @function Object.observe
     * @see http://arv.github.io/ecmascript-object-observe/#Object.observe
     * @param {Object} object
     * @param {Handler} handler
     * @param {String[]} [acceptList]
     * @throws {TypeError}
     * @returns {Object}               The observed object
     */
    P.oo.observe = function observe(object, handler, acceptList) {
        if (!object || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== "object" && typeof object !== "function") throw new TypeError("Object.observe cannot observe non-object");

        if (typeof handler !== "function") throw new TypeError("Object.observe cannot deliver to non-function");

        if (O.isFrozen && O.isFrozen(handler)) throw new TypeError("Object.observe cannot deliver to a frozen function object");

        if (acceptList === _undefined) acceptList = defaultAcceptList;else if (!acceptList || (typeof acceptList === 'undefined' ? 'undefined' : _typeof(acceptList)) !== "object") throw new TypeError("Third argument to Object.observe must be an array of strings.");

        doObserve(object, handler, acceptList);

        return object;
    };

    /**
     * @function Object.unobserve
     * @see http://arv.github.io/ecmascript-object-observe/#Object.unobserve
     * @param {Object} object
     * @param {Handler} handler
     * @throws {TypeError}
     * @returns {Object}         The given object
     */
    P.oo.unobserve = function unobserve(object, handler) {
        if (object === null || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== "object" && typeof object !== "function") throw new TypeError("Object.unobserve cannot unobserve non-object");

        if (typeof handler !== "function") throw new TypeError("Object.unobserve cannot deliver to non-function");

        var hdata = handlers.get(handler),
            odata;

        if (hdata && (odata = hdata.observed.get(object))) {
            hdata.observed.forEach(function (odata, object) {
                performPropertyChecks(odata.data, object);
            });
            nextFrame(function () {
                deliverHandlerRecords(hdata, handler);
            });

            // In Firefox 13-18, size is a function, but createMap should fall
            // back to the shim for those versions
            if (hdata.observed.size === 1 && hdata.observed.has(object)) handlers["delete"](handler);else hdata.observed["delete"](object);

            if (odata.data.handlers.size === 1) observed["delete"](object);else odata.data.handlers["delete"](handler);
        }

        return object;
    };

    /**
     * @function Object.getNotifier
     * @see http://arv.github.io/ecmascript-object-observe/#GetNotifier
     * @param {Object} object
     * @throws {TypeError}
     * @returns {Notifier}
     */
    P.oo.getNotifier = function getNotifier(object) {
        if (object === null || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== "object" && typeof object !== "function") throw new TypeError("Object.getNotifier cannot getNotifier non-object");

        if (O.isFrozen && O.isFrozen(object)) return null;

        return retrieveNotifier(object);
    };

    /**
     * @function Object.deliverChangeRecords
     * @see http://arv.github.io/ecmascript-object-observe/#Object.deliverChangeRecords
     * @see http://arv.github.io/ecmascript-object-observe/#DeliverChangeRecords
     * @param {Handler} handler
     * @throws {TypeError}
     */
    P.oo.deliverChangeRecords = function deliverChangeRecords(handler) {
        if (typeof handler !== "function") throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");

        var hdata = handlers.get(handler);
        if (hdata) {
            hdata.observed.forEach(function (odata, object) {
                performPropertyChecks(odata.data, object);
            });
            deliverHandlerRecords(hdata, handler);
        }
    };
})(Proxy, Object, Array, undefined);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3h5LW9vLXBvbHlmaWxsLmpzIl0sIm5hbWVzIjpbInNjb3BlIiwibGFzdFJldm9rZUZuIiwiaXNPYmplY3QiLCJvIiwiUHJveHkiLCJ0YXJnZXQiLCJoYW5kbGVyIiwiVHlwZUVycm9yIiwidGhyb3dSZXZva2VkIiwidHJhcCIsInVuc2FmZUhhbmRsZXIiLCJrIiwiYXBwbHkiLCJiaW5kIiwicHJveHkiLCJpc01ldGhvZCIsInRhcmdldElzRnVuY3Rpb24iLCJ1c2luZ05ldyIsImNvbnN0cnVjdG9yIiwiY2FsbCIsImFyZ3VtZW50cyIsImFsbCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJ1bnNoaWZ0IiwiZiIsImdldHRlciIsImdldCIsInByb3AiLCJzZXR0ZXIiLCJzZXQiLCJ2YWx1ZSIsInN0YXR1cyIsInByb3BlcnR5TmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcGVydHlNYXAiLCJmb3JFYWNoIiwicmVhbCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImRlc2MiLCJlbnVtZXJhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b3R5cGVPayIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJzZWFsIiwicmV2b2NhYmxlIiwicCIsIndpbmRvdyIsIlAiLCJPIiwiQSIsInJvb3QiLCJfdW5kZWZpbmVkIiwib28iLCJvYnNlcnZlZCIsImhhbmRsZXJzIiwiZGVmYXVsdEFjY2VwdExpc3QiLCJpc0FycmF5IiwidG9TdHJpbmciLCJvYmplY3QiLCJpbkFycmF5IiwiaW5kZXhPZiIsImFycmF5IiwicGl2b3QiLCJzdGFydCIsImkiLCJsZW5ndGgiLCJjcmVhdGVNYXAiLCJNYXAiLCJrZXlzIiwidmFsdWVzIiwic2l6ZSIsImhhcyIsImtleSIsInB1c2giLCJzcGxpY2UiLCJjYWxsYmFjayIsImdldFByb3BzIiwiZnVuYyIsImNhbGxlZSIsImUiLCJhdm9pZCIsImpvaW4iLCJyZXBsYWNlIiwic3BsaXQiLCJwcm9wcyIsImoiLCJob3AiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3RvdHlwZSIsImdldERlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0aWVzIiwibmV4dEZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5pdGlhbCIsIkRhdGUiLCJsYXN0Iiwic2V0VGltZW91dCIsImRvT2JzZXJ2ZSIsImFjY2VwdExpc3QiLCJkYXRhIiwicGVyZm9ybVByb3BlcnR5Q2hlY2tzIiwic2V0SGFuZGxlciIsImNyZWF0ZU9iamVjdERhdGEiLCJydW5HbG9iYWxMb29wIiwiZGVzY3MiLCJmcm96ZW4iLCJpc0Zyb3plbiIsImV4dGVuc2libGUiLCJpc0V4dGVuc2libGUiLCJwcm90byIsInByb3BlcnRpZXMiLCJub3RpZmllciIsInJldHJpZXZlTm90aWZpZXIiLCJkZXNjcmlwdG9ycyIsInVwZGF0ZUNoZWNrIiwiaWR4IiwiZXhjZXB0IiwiZGVzY3IiLCJvdmFsdWUiLCJvZGVzYyIsImFkZENoYW5nZVJlY29yZCIsIm5hbWUiLCJ0eXBlIiwib2xkVmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlbGV0aW9uQ2hlY2siLCJwcm9wbGVuIiwiZGVsaXZlckhhbmRsZXJSZWNvcmRzIiwiaGRhdGEiLCJyZWNvcmRzIiwiY2hhbmdlUmVjb3JkcyIsIm5vdGlmeSIsImNoYW5nZVJlY29yZCIsInJlY29yZENvcHkiLCJwZXJmb3JtQ2hhbmdlIiwiY2hhbmdlVHlwZSIsInRoaXNPYmoiLCJyZXN1bHQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwib2RhdGEiLCJnZXROb3RpZmllciIsImRlbGl2ZXJDaGFuZ2VSZWNvcmRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7O0FBR0EsQ0FBQyxVQUFTQSxLQUFULEVBQWdCO0FBQ2YsUUFBSUEsTUFBTSxPQUFOLENBQUosRUFB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biAqIFByb3h5IGhhcyBiZWVuIHBhdGNoZWQgd2l0aCBzdXBwb3J0IGZvciBPYmplY3Qub2JzZXJ2ZSwgd2hpY2ggaXMgbm93IG9ic292YXJlLiBUaGlzIGlzIGRvbmUgdG8gYWxsb3cgT08gdG8gZXhpc3QgaWYgbmF0aXZlIHByb3h5IGRvZXMgbm90LlxuICogVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyBkdWUgdG8gbGltaXRhdGlvbnMgd2l0aCBwcm94eSBwb2x5ZmlsbCB3aGVuIGl0IGNvbWVzIHRvIGFycmF5cyBhcyBpdCBtYWtlcyB0aGVtIGltbXV0YWJsZS5cbiAqIElmIFByb3h5Lm9vIGV4aXN0cywgeW91IHNob3VsZCBzd2l0Y2ggdG8gUHJveHkub28gd2hlbiB3YW50aW5nIHRvIG9ic2VydmUgbmVzdGVkIG9iamVjdHMgd2l0aCBhcnJheXMgYW5kIHN0aWxsIHdhbnQgdG8gY2FsbCBhIGNhbGxiYWNrIGlmIHRoZVxuICogYXJyYXkgaXMgdXNlZCB3aXRoIHB1c2gsIHNwbGljZSwgZXRjLiBPdGhlcmV3aXNlIGlmIFByb3h5Lm9vIG5vdCBwcmVzZW50ICh3ZSBhcmUgbmF0aXZlKSBhbmQgY2FuIHVzZSBuYXRpdmUgZW5naW5lIHRvIHdpdGhvdXQgaXNzdWVcbiAqL1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlXG4gKiBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuICogdGhlIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbihmdW5jdGlvbihzY29wZSkge1xuICBpZiAoc2NvcGVbJ1Byb3h5J10pIHJldHVybjtcblxuICB2YXIgbGFzdFJldm9rZUZuID0gbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIHsqfSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBpcyBwcm9iYWJseSBhIChub24tbnVsbCkgT2JqZWN0XG4gICAqL1xuICBmdW5jdGlvbiBpc09iamVjdChvKSB7XG4gICAgcmV0dXJuIG8gPyAodHlwZW9mIG8gPT0gJ29iamVjdCcgfHwgdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJykgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHshT2JqZWN0fSB0YXJnZXRcbiAgICogQHBhcmFtIHt7YXBwbHksIGNvbnN0cnVjdCwgZ2V0LCBzZXR9fSBoYW5kbGVyXG4gICAqL1xuICBzY29wZS5Qcm94eSA9IGZ1bmN0aW9uKHRhcmdldCwgaGFuZGxlcikge1xuICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSB8fCAhaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgcHJveHkgd2l0aCBhIG5vbi1vYmplY3QgYXMgdGFyZ2V0IG9yIGhhbmRsZXInKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgcmV2b2tlIGZ1bmN0aW9uLCBhbmQgc2V0IGxhc3RSZXZva2VGbiBzbyB0aGF0IFByb3h5LnJldm9jYWJsZSBjYW4gc3RlYWwgaXQuXG4gICAgLy8gVGhlIGNhbGxlciBtaWdodCBnZXQgdGhlIHdyb25nIHJldm9rZSBmdW5jdGlvbiBpZiBhIHVzZXIgcmVwbGFjZXMgb3Igd3JhcHMgc2NvcGUuUHJveHlcbiAgICAvLyB0byBjYWxsIGl0c2VsZiwgYnV0IHRoYXQgc2VlbXMgdW5saWtlbHkgZXNwZWNpYWxseSB3aGVuIHVzaW5nIHRoZSBwb2x5ZmlsbC5cbiAgICB2YXIgdGhyb3dSZXZva2VkID0gZnVuY3Rpb24oKSB7fTtcbiAgICBsYXN0UmV2b2tlRm4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93UmV2b2tlZCA9IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IHBlcmZvcm0gJyArIHRyYXAgKyAnIG9uIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkJyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBGYWlsIG9uIHVuc3VwcG9ydGVkIHRyYXBzOiBDaHJvbWUgZG9lc24ndCBkbyB0aGlzLCBidXQgZW5zdXJlIHRoYXQgdXNlcnMgb2YgdGhlIHBvbHlmaWxsXG4gICAgLy8gYXJlIGEgYml0IG1vcmUgY2FyZWZ1bC4gQ29weSB0aGUgaW50ZXJuYWwgcGFydHMgb2YgaGFuZGxlciB0byBwcmV2ZW50IHVzZXIgY2hhbmdlcy5cbiAgICB2YXIgdW5zYWZlSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IHsnZ2V0JzogbnVsbCwgJ3NldCc6IG51bGwsICdhcHBseSc6IG51bGwsICdjb25zdHJ1Y3QnOiBudWxsfTtcbiAgICBmb3IgKHZhciBrIGluIHVuc2FmZUhhbmRsZXIpIHtcbiAgICAgIGlmICghKGsgaW4gaGFuZGxlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJveHkgcG9seWZpbGwgZG9lcyBub3Qgc3VwcG9ydCB0cmFwICcgKyBrKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXJba10gPSB1bnNhZmVIYW5kbGVyW2tdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHVuc2FmZUhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWxsb3cgaGFuZGxlciB0byBiZSBhIGZ1bmN0aW9uICh3aGljaCBoYXMgYW4gJ2FwcGx5JyBtZXRob2QpLiBUaGlzIG1hdGNoZXMgd2hhdCBpc1xuICAgICAgLy8gcHJvYmFibHkgYSBidWcgaW4gbmF0aXZlIHZlcnNpb25zLiBJdCB0cmVhdHMgdGhlIGFwcGx5IGNhbGwgYXMgYSB0cmFwIHRvIGJlIGNvbmZpZ3VyZWQuXG4gICAgICBoYW5kbGVyLmFwcGx5ID0gdW5zYWZlSGFuZGxlci5hcHBseS5iaW5kKHVuc2FmZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSBwcm94eSBhcyB0aGlzLCBvciBhIEZ1bmN0aW9uIChpZiBlaXRoZXIgaXQncyBjYWxsYWJsZSwgb3IgYXBwbHkgaXMgc2V0KS5cbiAgICAvLyBUT0RPKHNhbXRob3IpOiBDbG9zdXJlIGNvbXBpbGVyIGRvZXNuJ3Qga25vdyBhYm91dCAnY29uc3RydWN0JywgYXR0ZW1wdHMgdG8gcmVuYW1lIGl0LlxuICAgIHZhciBwcm94eSA9IHRoaXM7XG4gICAgdmFyIGlzTWV0aG9kID0gZmFsc2U7XG4gICAgdmFyIHRhcmdldElzRnVuY3Rpb24gPSB0eXBlb2YgdGFyZ2V0ID09ICdmdW5jdGlvbic7XG4gICAgaWYgKGhhbmRsZXIuYXBwbHkgfHwgaGFuZGxlclsnY29uc3RydWN0J10gfHwgdGFyZ2V0SXNGdW5jdGlvbikge1xuICAgICAgcHJveHkgPSBmdW5jdGlvbiBQcm94eSgpIHtcbiAgICAgICAgdmFyIHVzaW5nTmV3ID0gKHRoaXMgJiYgdGhpcy5jb25zdHJ1Y3RvciA9PT0gcHJveHkpO1xuICAgICAgICB0aHJvd1Jldm9rZWQodXNpbmdOZXcgPyAnY29uc3RydWN0JyA6ICdhcHBseScpO1xuXG4gICAgICAgIGlmICh1c2luZ05ldyAmJiBoYW5kbGVyWydjb25zdHJ1Y3QnXSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVyWydjb25zdHJ1Y3QnXS5jYWxsKHRoaXMsIHRhcmdldCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIGlmICghdXNpbmdOZXcgJiYgaGFuZGxlci5hcHBseSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVyLmFwcGx5KHRhcmdldCwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRJc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgLy8gc2luY2UgdGhlIHRhcmdldCB3YXMgYSBmdW5jdGlvbiwgZmFsbGJhY2sgdG8gY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICBpZiAodXNpbmdOZXcpIHtcbiAgICAgICAgICAgIC8vIGluc3BpcmVkIGJ5IGFuc3dlcnMgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzE2MDY3OTdcbiAgICAgICAgICAgIHZhciBhbGwgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgYWxsLnVuc2hpZnQodGFyZ2V0KTsgIC8vIHBhc3MgY2xhc3MgYXMgZmlyc3QgYXJnIHRvIGNvbnN0cnVjdG9yLCBhbHRob3VnaCBpcnJlbGV2YW50XG4gICAgICAgICAgICAvLyBuYi4gY2FzdCB0byBjb252aW5jZSBDbG9zdXJlIGNvbXBpbGVyIHRoYXQgdGhpcyBpcyBhIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB2YXIgZiA9IC8qKiBAdHlwZSB7IUZ1bmN0aW9ufSAqLyAodGFyZ2V0LmJpbmQuYXBwbHkodGFyZ2V0LCBhbGwpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcih1c2luZ05ldyA/ICdub3QgYSBjb25zdHJ1Y3RvcicgOiAnbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgIH07XG4gICAgICBpc01ldGhvZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGRlZmF1bHQgZ2V0dGVycy9zZXR0ZXJzLiBDcmVhdGUgZGlmZmVyZW50IGNvZGUgcGF0aHMgYXMgaGFuZGxlci5nZXQvaGFuZGxlci5zZXQgY2FuJ3RcbiAgICAvLyBjaGFuZ2UgYWZ0ZXIgY3JlYXRpb24uXG4gICAgdmFyIGdldHRlciA9IGhhbmRsZXIuZ2V0ID8gZnVuY3Rpb24ocHJvcCkge1xuICAgICAgdGhyb3dSZXZva2VkKCdnZXQnKTtcbiAgICAgIHJldHVybiBoYW5kbGVyLmdldCh0aGlzLCBwcm9wLCBwcm94eSk7XG4gICAgfSA6IGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIHRocm93UmV2b2tlZCgnZ2V0Jyk7XG4gICAgICByZXR1cm4gdGhpc1twcm9wXTtcbiAgICB9O1xuICAgIHZhciBzZXR0ZXIgPSBoYW5kbGVyLnNldCA/IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgICB0aHJvd1Jldm9rZWQoJ3NldCcpO1xuICAgICAgdmFyIHN0YXR1cyA9IGhhbmRsZXIuc2V0KHRoaXMsIHByb3AsIHZhbHVlLCBwcm94eSk7XG4gICAgICBpZiAoIXN0YXR1cykge1xuICAgICAgICAvLyBUT0RPKHNhbXRob3IpOiBJZiB0aGUgY2FsbGluZyBjb2RlIGlzIGluIHN0cmljdCBtb2RlLCB0aHJvdyBUeXBlRXJyb3IuXG4gICAgICAgIC8vIEl0J3MgKHNvbWV0aW1lcykgcG9zc2libGUgdG8gd29yayB0aGlzIG91dCwgaWYgdGhpcyBjb2RlIGlzbid0IHN0cmljdC0gdHJ5IHRvIGxvYWQgdGhlXG4gICAgICAgIC8vIGNhbGxlZSwgYW5kIGlmIGl0J3MgYXZhaWxhYmxlLCB0aGF0IGNvZGUgaXMgbm9uLXN0cmljdC4gSG93ZXZlciwgdGhpcyBpc24ndCBleGhhdXN0aXZlLlxuICAgICAgfVxuICAgIH0gOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgdGhyb3dSZXZva2VkKCdzZXQnKTtcbiAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gQ2xvbmUgZGlyZWN0IHByb3BlcnRpZXMgKGkuZS4sIG5vdCBwYXJ0IG9mIGEgcHJvdG90eXBlKS5cbiAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gICAgdmFyIHByb3BlcnR5TWFwID0ge307XG4gICAgcHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIGlmIChpc01ldGhvZCAmJiBwcm9wIGluIHByb3h5KSB7XG4gICAgICAgIHJldHVybjsgIC8vIGlnbm9yZSBwcm9wZXJ0aWVzIGFscmVhZHkgaGVyZSwgZS5nLiAnYmluZCcsICdwcm90b3R5cGUnIGV0Y1xuICAgICAgfVxuICAgICAgdmFyIHJlYWwgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk7XG4gICAgICB2YXIgZGVzYyA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogISFyZWFsLmVudW1lcmFibGUsXG4gICAgICAgIGdldDogZ2V0dGVyLmJpbmQodGFyZ2V0LCBwcm9wKSxcbiAgICAgICAgc2V0OiBzZXR0ZXIuYmluZCh0YXJnZXQsIHByb3ApLFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgcHJvcCwgZGVzYyk7XG4gICAgICBwcm9wZXJ0eU1hcFtwcm9wXSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgdGhlIHByb3RvdHlwZSwgb3IgY2xvbmUgYWxsIHByb3RvdHlwZSBtZXRob2RzIChhbHdheXMgcmVxdWlyZWQgaWYgYSBnZXR0ZXIgaXMgcHJvdmlkZWQpLlxuICAgIC8vIFRPRE8oc2FtdGhvcik6IFdlIGRvbid0IGFsbG93IHByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHNldC4gSXQncyAoZXZlbiBtb3JlKSBhd2t3YXJkLlxuICAgIC8vIEFuIGFsdGVybmF0aXZlIGhlcmUgd291bGQgYmUgdG8gX2p1c3RfIGNsb25lIG1ldGhvZHMgdG8ga2VlcCBiZWhhdmlvciBjb25zaXN0ZW50LlxuICAgIHZhciBwcm90b3R5cGVPayA9IHRydWU7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3h5LCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSk7XG4gICAgfSBlbHNlIGlmIChwcm94eS5fX3Byb3RvX18pIHtcbiAgICAgIHByb3h5Ll9fcHJvdG9fXyA9IHRhcmdldC5fX3Byb3RvX187XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3RvdHlwZU9rID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChoYW5kbGVyLmdldCB8fCAhcHJvdG90eXBlT2spIHtcbiAgICAgIGZvciAodmFyIGsgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eU1hcFtrXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgaywge2dldDogZ2V0dGVyLmJpbmQodGFyZ2V0LCBrKX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBQcm94eSBwb2x5ZmlsbCBjYW5ub3QgaGFuZGxlIGFkZGluZyBuZXcgcHJvcGVydGllcy4gU2VhbCB0aGUgdGFyZ2V0IGFuZCBwcm94eS5cbiAgICBPYmplY3Quc2VhbCh0YXJnZXQpO1xuICAgIE9iamVjdC5zZWFsKHByb3h5KTtcblxuICAgIHJldHVybiBwcm94eTsgIC8vIG5iLiBpZiBpc01ldGhvZCBpcyB0cnVlLCBwcm94eSAhPSB0aGlzXG4gIH07XG5cbiAgc2NvcGUuUHJveHkucmV2b2NhYmxlID0gZnVuY3Rpb24odGFyZ2V0LCBoYW5kbGVyKSB7XG4gICAgdmFyIHAgPSBuZXcgc2NvcGUuUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbiAgICByZXR1cm4geydwcm94eSc6IHAsICdyZXZva2UnOiBsYXN0UmV2b2tlRm59O1xuICB9O1xuXG4gIHNjb3BlLlByb3h5WydyZXZvY2FibGUnXSA9IHNjb3BlLlByb3h5LnJldm9jYWJsZTtcbiAgc2NvcGUuUHJveHlbJ29vJ10gPSB7fTtcbiAgc2NvcGVbJ1Byb3h5J10gPSBzY29wZS5Qcm94eTtcbn0pKHdpbmRvdyk7XG5cbi8qIVxuICogT2JqZWN0Lm9ic2VydmUgcG9seWZpbGwgLSB2MC4yLjRcbiAqIGJ5IE1hc3NpbW8gQXJ0aXp6dSAoTWF4QXJ0MjUwMSlcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTWF4QXJ0MjUwMS9vYmplY3Qtb2JzZXJ2ZVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogU2VlIExJQ0VOU0UgZm9yIGRldGFpbHNcbiAqL1xuXG4vLyBTb21lIHR5cGUgZGVmaW5pdGlvbnNcbi8qKlxuICogVGhpcyByZXByZXNlbnRzIHRoZSBkYXRhIHJlbGF0aXZlIHRvIGFuIG9ic2VydmVkIG9iamVjdFxuICogQHR5cGVkZWYgIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgT2JqZWN0RGF0YVxuICogQHByb3BlcnR5IHtNYXA8SGFuZGxlciwgSGFuZGxlckRhdGE+fSAgaGFuZGxlcnNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nW119ICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNcbiAqIEBwcm9wZXJ0eSB7KltdfSAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xuICogQHByb3BlcnR5IHtEZXNjcmlwdG9yW119ICAgICAgICAgICAgICAgZGVzY3JpcHRvcnNcbiAqIEBwcm9wZXJ0eSB7Tm90aWZpZXJ9ICAgICAgICAgICAgICAgICAgIG5vdGlmaWVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICBmcm96ZW5cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gICAgICAgICAgICAgICAgICAgIGV4dGVuc2libGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgIHByb3RvXG4gKi9cbi8qKlxuICogRnVuY3Rpb24gZGVmaW5pdGlvbiBvZiBhIGhhbmRsZXJcbiAqIEBjYWxsYmFjayBIYW5kbGVyXG4gKiBAcGFyYW0ge0NoYW5nZVJlY29yZFtdfSAgICAgICAgICAgICAgICBjaGFuZ2VzXG4qL1xuLyoqXG4gKiBUaGlzIHJlcHJlc2VudHMgdGhlIGRhdGEgcmVsYXRpdmUgdG8gYW4gb2JzZXJ2ZWQgb2JqZWN0IGFuZCBvbmUgb2YgaXRzXG4gKiBoYW5kbGVyc1xuICogQHR5cGVkZWYgIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgSGFuZGxlckRhdGFcbiAqIEBwcm9wZXJ0eSB7TWFwPE9iamVjdCwgT2JzZXJ2ZWREYXRhPn0gIG9ic2VydmVkXG4gKiBAcHJvcGVydHkge0NoYW5nZVJlY29yZFtdfSAgICAgICAgICAgICBjaGFuZ2VSZWNvcmRzXG4gKi9cbi8qKlxuICogQHR5cGVkZWYgIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgT2JzZXJ2ZWREYXRhXG4gKiBAcHJvcGVydHkge1N0cmluZ1tdfSAgICAgICAgICAgICAgICAgICBhY2NlcHRMaXN0XG4gKiBAcHJvcGVydHkge09iamVjdERhdGF9ICAgICAgICAgICAgICAgICBkYXRhXG4qL1xuLyoqXG4gKiBUeXBlIGRlZmluaXRpb24gZm9yIGEgY2hhbmdlLiBBbnkgb3RoZXIgcHJvcGVydHkgY2FuIGJlIGFkZGVkIHVzaW5nXG4gKiB0aGUgbm90aWZ5KCkgb3IgcGVyZm9ybUNoYW5nZSgpIG1ldGhvZHMgb2YgdGhlIG5vdGlmaWVyLlxuICogQHR5cGVkZWYgIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlUmVjb3JkXG4gKiBAcHJvcGVydHkge1N0cmluZ30gICAgICAgICAgICAgICAgICAgICB0eXBlXG4gKiBAcHJvcGVydHkge09iamVjdH0gICAgICAgICAgICAgICAgICAgICBvYmplY3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgIFtuYW1lXVxuICogQHByb3BlcnR5IHsqfSAgICAgICAgICAgICAgICAgICAgICAgICAgW29sZFZhbHVlXVxuICogQHByb3BlcnR5IHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgW2luZGV4XVxuICovXG4vKipcbiAqIFR5cGUgZGVmaW5pdGlvbiBmb3IgYSBub3RpZmllciAod2hhdCBPYmplY3QuZ2V0Tm90aWZpZXIgcmV0dXJucylcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgIE5vdGlmaWVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgICBub3RpZnlcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259ICAgICAgICAgICAgICAgICAgIHBlcmZvcm1DaGFuZ2VcbiAqL1xuLyoqXG4gKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCBOb3RpZmllci5wZXJmb3JtQ2hhbmdlLiBJdCBtYXkgb3B0aW9uYWxseSByZXR1cm4gYVxuICogQ2hhbmdlUmVjb3JkIHRoYXQgZ2V0cyBhdXRvbWF0aWNhbGx5IG5vdGlmaWVkLCBidXQgYHR5cGVgIGFuZCBgb2JqZWN0YFxuICogcHJvcGVydGllcyBhcmUgb3ZlcnJpZGRlbi5cbiAqIEBjYWxsYmFjayBQZXJmb3JtZXJcbiAqIEByZXR1cm5zIHtDaGFuZ2VSZWNvcmR8dW5kZWZpbmVkfVxuICovXG4oZnVuY3Rpb24oUCwgTywgQSwgcm9vdCwgX3VuZGVmaW5lZCkge1xuXHQvLyBkaWQgd2UgcG9seWZpbGw/XG5cdGlmICghUC5vbykgcmV0dXJuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGVzIG9ic2VydmVkIG9iamVjdHMgYW5kIHRoZWlyIGRhdGFcbiAgICAgICAgICogQHR5cGUge01hcDxPYmplY3QsIE9iamVjdERhdGF9XG4gICAgICAgICAqL1xuICAgIHZhciBvYnNlcnZlZCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3Qgb2YgaGFuZGxlcnMgYW5kIHRoZWlyIGRhdGFcbiAgICAgICAgICogQHR5cGUge01hcDxIYW5kbGVyLCBNYXA8T2JqZWN0LCBIYW5kbGVyRGF0YT4+fVxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlcnMsXG5cbiAgICAgICAgZGVmYXVsdEFjY2VwdExpc3QgPSBbIFwiYWRkXCIsIFwidXBkYXRlXCIsIFwiZGVsZXRlXCIsIFwicmVjb25maWd1cmVcIiwgXCJzZXRQcm90b3R5cGVcIiwgXCJwcmV2ZW50RXh0ZW5zaW9uc1wiIF07XG5cbiAgICAvLyBGdW5jdGlvbnMgZm9yIGludGVybmFsIHVzYWdlXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgYXJndW1lbnQgaXMgYW4gQXJyYXkgb2JqZWN0LiBQb2x5ZmlsbHMgQXJyYXkuaXNBcnJheS5cbiAgICAgICAgICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAgICAgICAgICogQHBhcmFtIHs/Kn0gb2JqZWN0XG4gICAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICB2YXIgaXNBcnJheSA9IEEuaXNBcnJheSB8fCAoZnVuY3Rpb24odG9TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiB0b1N0cmluZy5jYWxsKG9iamVjdCkgPT09IFwiW29iamVjdCBBcnJheV1cIjsgfTtcbiAgICAgICAgfSkoTy5wcm90b3R5cGUudG9TdHJpbmcpLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiBhbiBpdGVtIGluIGEgY29sbGVjdGlvbiwgb3IgLTEgaWYgbm90IGZvdW5kLlxuICAgICAgICAgKiBVc2VzIHRoZSBnZW5lcmljIEFycmF5LmluZGV4T2Ygb3IgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgaWYgYXZhaWxhYmxlLlxuICAgICAgICAgKiBAZnVuY3Rpb24gaW5BcnJheVxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgICAgICAgKiBAcGFyYW0geyp9IHBpdm90ICAgICAgICAgICBJdGVtIHRvIGxvb2sgZm9yXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gIEluZGV4IHRvIHN0YXJ0IGZyb21cbiAgICAgICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGluQXJyYXkgPSBBLnByb3RvdHlwZS5pbmRleE9mID8gQS5pbmRleE9mIHx8IGZ1bmN0aW9uKGFycmF5LCBwaXZvdCwgc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBBLnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIHBpdm90LCBzdGFydCk7XG4gICAgICAgIH0gOiBmdW5jdGlvbihhcnJheSwgcGl2b3QsIHN0YXJ0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQgfHwgMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gcGl2b3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIE1hcCwgb3IgYSBNYXAtbGlrZSBvYmplY3QgaXMgTWFwIGlzIG5vdFxuICAgICAgICAgKiBzdXBwb3J0ZWQgb3IgZG9lc24ndCBzdXBwb3J0IGZvckVhY2goKVxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlTWFwXG4gICAgICAgICAqIEByZXR1cm5zIHtNYXB9XG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVNYXAgPSByb290Lk1hcCA9PT0gX3VuZGVmaW5lZCB8fCAhTWFwLnByb3RvdHlwZS5mb3JFYWNoID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBMaWdodHdlaWdodCBzaGltIG9mIE1hcC4gTGFja3MgY2xlYXIoKSwgZW50cmllcygpLCBrZXlzKCkgYW5kXG4gICAgICAgICAgICAvLyB2YWx1ZXMoKSAodGhlIGxhc3QgMyBub3Qgc3VwcG9ydGVkIGJ5IElFMTEsIHNvIGNhbid0IHVzZSB0aGVtKSxcbiAgICAgICAgICAgIC8vIGl0IGRvZXNuJ3QgaGFuZGxlIHRoZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50IChsaWtlIElFMTEpIGFuZCBvZlxuICAgICAgICAgICAgLy8gY291cnNlIGl0IGRvZXNuJ3Qgc3VwcG9ydCBmb3IuLi5vZi5cbiAgICAgICAgICAgIC8vIENocm9tZSAzMS0zNSBhbmQgRmlyZWZveCAxMy0yNCBoYXZlIGEgYmFzaWMgc3VwcG9ydCBvZiBNYXAsIGJ1dFxuICAgICAgICAgICAgLy8gdGhleSBsYWNrIGZvckVhY2goKSwgc28gdGhlaXIgbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIGJhZCBmb3JcbiAgICAgICAgICAgIC8vIHRoaXMgcG9seWZpbGwuIChDaHJvbWUgMzYrIHN1cHBvcnRzIE9iamVjdC5vYnNlcnZlLilcbiAgICAgICAgICAgIHZhciBrZXlzID0gW10sIHZhbHVlcyA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNpemU6IDAsXG4gICAgICAgICAgICAgICAgaGFzOiBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIGluQXJyYXkoa2V5cywga2V5KSA+IC0xOyB9LFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZXNbaW5BcnJheShrZXlzLCBrZXkpXTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBpbkFycmF5KGtleXMsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWxldGVcIjogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gaW5BcnJheShrZXlzLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZm9yRWFjaDogZnVuY3Rpb24oY2FsbGJhY2svKiwgdGhpc09iaiovKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoYXJndW1lbnRzWzFdLCB2YWx1ZXNbaV0sIGtleXNbaV0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gOiBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBNYXAoKTsgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2ltcGxlIHNoaW0gZm9yIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdoZW4gaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgKiBNaXNzZXMgY2hlY2tzIG9uIG9iamVjdCwgZG9uJ3QgdXNlIGFzIGEgcmVwbGFjZW1lbnQgb2YgT2JqZWN0LmtleXMvZ2V0T3duUHJvcGVydHlOYW1lc1xuICAgICAgICAgKiBAZnVuY3Rpb24gZ2V0UHJvcHNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nW119XG4gICAgICAgICAqL1xuICAgICAgICBnZXRQcm9wcyA9IE8uZ2V0T3duUHJvcGVydHlOYW1lcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBmdW5jID0gTy5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhcmd1bWVudHMuY2FsbGVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0cmljdCBtb2RlIGlzIHN1cHBvcnRlZFxuXG4gICAgICAgICAgICAgICAgLy8gSW4gc3RyaWN0IG1vZGUsIHdlIGNhbid0IGFjY2VzcyB0byBcImFyZ3VtZW50c1wiLCBcImNhbGxlclwiIGFuZFxuICAgICAgICAgICAgICAgIC8vIFwiY2FsbGVlXCIgcHJvcGVydGllcyBvZiBmdW5jdGlvbnMuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyBbIFwicHJvdG90eXBlXCIsIFwibGVuZ3RoXCIsIFwibmFtZVwiIF0gaW4gRmlyZWZveDsgaXQgcmV0dXJuc1xuICAgICAgICAgICAgICAgIC8vIFwiY2FsbGVyXCIgYW5kIFwiYXJndW1lbnRzXCIgdG9vIGluIENocm9tZSBhbmQgaW4gSW50ZXJuZXRcbiAgICAgICAgICAgICAgICAvLyBFeHBsb3Jlciwgc28gdGhvc2UgdmFsdWVzIG11c3QgYmUgZmlsdGVyZWQuXG4gICAgICAgICAgICAgICAgdmFyIGF2b2lkID0gKGZ1bmMoaW5BcnJheSkuam9pbihcIiBcIikgKyBcIiBcIikucmVwbGFjZSgvcHJvdG90eXBlIHxsZW5ndGggfG5hbWUgL2csIFwiXCIpLnNsaWNlKDAsIC0xKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgaWYgKGF2b2lkLmxlbmd0aCkgZnVuYyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBPLmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqOyBpIDwgYXZvaWQubGVuZ3RoOylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGogPSBpbkFycmF5KHByb3BzLCBhdm9pZFtpKytdKSkgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3BsaWNlKGosIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH0pKCkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgICAgIC8vIFBvb3ItbW91dGggdmVyc2lvbiB3aXRoIGZvci4uLmluIChJRTgtKVxuICAgICAgICAgICAgdmFyIHByb3BzID0gW10sIHByb3AsIGhvcDtcbiAgICAgICAgICAgIGlmIChcImhhc093blByb3BlcnR5XCIgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChwcm9wIGluIG9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvcCA9IE8uaGFzT3duUHJvcGVydHk7XG4gICAgICAgICAgICAgICAgZm9yIChwcm9wIGluIG9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvcC5jYWxsKG9iamVjdCwgcHJvcCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbnNlcnRpbmcgYSBjb21tb24gbm9uLWVudW1lcmFibGUgcHJvcGVydHkgb2YgYXJyYXlzXG4gICAgICAgICAgICBpZiAoaXNBcnJheShvYmplY3QpKVxuICAgICAgICAgICAgICAgIHByb3BzLnB1c2goXCJsZW5ndGhcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHRoZSBwcm90b3R5cGUgb2YgdGhlIG9iamVjdC4uLiBpZiBkZWZpbmVkLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZ2V0UHJvdG90eXBlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIGdldFByb3RvdHlwZSA9IE8uZ2V0UHJvdG90eXBlT2YsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgZGVzY3JpcHRvciBvZiB0aGUgb2JqZWN0Li4uIGlmIGRlZmluZWQuXG4gICAgICAgICAqIElFOCBzdXBwb3J0cyBhICh1c2VsZXNzKSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIGZvciBET01cbiAgICAgICAgICogbm9kZXMgb25seSwgc28gZGVmaW5lUHJvcGVydGllcyBpcyBjaGVja2VkIGluc3RlYWQuXG4gICAgICAgICAqIEBmdW5jdGlvbiBnZXREZXNjcmlwdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAgICAgICAqIEByZXR1cm5zIHtEZXNjcmlwdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RGVzY3JpcHRvciA9IE8uZGVmaW5lUHJvcGVydGllcyAmJiBPLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB1cCB0aGUgbmV4dCBjaGVjayBhbmQgZGVsaXZlcmluZyBpdGVyYXRpb24sIHVzaW5nXG4gICAgICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvciBhIChjbG9zZSkgcG9seWZpbGwuXG4gICAgICAgICAqIEBmdW5jdGlvbiBuZXh0RnJhbWVcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICAgICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbmV4dEZyYW1lID0gcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcm9vdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGluaXRpYWwgPSArbmV3IERhdGUsXG4gICAgICAgICAgICAgICAgbGFzdCA9IGluaXRpYWw7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZnVuYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jKChsYXN0ID0gK25ldyBEYXRlKSAtIGluaXRpYWwpO1xuICAgICAgICAgICAgICAgIH0sIDE3KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdXAgdGhlIG9ic2VydmF0aW9uIG9mIGFuIG9iamVjdFxuICAgICAgICAgKiBAZnVuY3Rpb24gZG9PYnNlcnZlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHtIYW5kbGVyfSBoYW5kbGVyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nW119IFthY2NlcHRMaXN0XVxuICAgICAgICAgKi9cbiAgICAgICAgZG9PYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LCBoYW5kbGVyLCBhY2NlcHRMaXN0KSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IG9ic2VydmVkLmdldChvYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1Qcm9wZXJ0eUNoZWNrcyhkYXRhLCBvYmplY3QpO1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZXIob2JqZWN0LCBkYXRhLCBoYW5kbGVyLCBhY2NlcHRMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGNyZWF0ZU9iamVjdERhdGEob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGVyKG9iamVjdCwgZGF0YSwgaGFuZGxlciwgYWNjZXB0TGlzdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2ZWQuc2l6ZSA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgLy8gTGV0IHRoZSBvYnNlcnZhdGlvbiBiZWdpbiFcbiAgICAgICAgICAgICAgICAgICAgbmV4dEZyYW1lKHJ1bkdsb2JhbExvb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIHRoZSBpbml0aWFsIGRhdGEgZm9yIGFuIG9ic2VydmVkIG9iamVjdFxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlT2JqZWN0RGF0YVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVPYmplY3REYXRhID0gZnVuY3Rpb24ob2JqZWN0LCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBnZXRQcm9wcyhvYmplY3QpLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IFtdLCBkZXNjcywgaSA9IDAsXG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnM6IGNyZWF0ZU1hcCgpLFxuICAgICAgICAgICAgICAgICAgICBmcm96ZW46IE8uaXNGcm96ZW4gPyBPLmlzRnJvemVuKG9iamVjdCkgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaWJsZTogTy5pc0V4dGVuc2libGUgPyBPLmlzRXh0ZW5zaWJsZShvYmplY3QpIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG86IGdldFByb3RvdHlwZSAmJiBnZXRQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBub3RpZmllcjogcmV0cmlldmVOb3RpZmllcihvYmplY3QsIGRhdGEpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGdldERlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgICAgICBkZXNjcyA9IGRhdGEuZGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHByb3BzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjc1tpXSA9IGdldERlc2NyaXB0b3Iob2JqZWN0LCBwcm9wc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IG9iamVjdFtwcm9wc1tpKytdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Ugd2hpbGUgKGkgPCBwcm9wcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gb2JqZWN0W3Byb3BzW2krK11dO1xuXG4gICAgICAgICAgICBvYnNlcnZlZC5zZXQob2JqZWN0LCBkYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBlcmZvcm1zIGJhc2ljIHByb3BlcnR5IHZhbHVlIGNoYW5nZSBjaGVja3Mgb24gYW4gb2JzZXJ2ZWQgb2JqZWN0XG4gICAgICAgICAqIEBmdW5jdGlvbiBwZXJmb3JtUHJvcGVydHlDaGVja3NcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3REYXRhfSBkYXRhXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IFtleGNlcHRdICBEb2Vzbid0IGRlbGl2ZXIgdGhlIGNoYW5nZXMgdG8gdGhlXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMgdGhhdCBhY2NlcHQgdGhpcyB0eXBlXG4gICAgICAgICAqL1xuICAgICAgICBwZXJmb3JtUHJvcGVydHlDaGVja3MgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlQ2hlY2sgPSBnZXREZXNjcmlwdG9yID8gZnVuY3Rpb24ob2JqZWN0LCBkYXRhLCBpZHgsIGV4Y2VwdCwgZGVzY3IpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZGF0YS5wcm9wZXJ0aWVzW2lkeF0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgICAgICAgICAgICAgIG92YWx1ZSA9IGRhdGEudmFsdWVzW2lkeF0sXG4gICAgICAgICAgICAgICAgICAgIG9kZXNjID0gZGF0YS5kZXNjcmlwdG9yc1tpZHhdO1xuXG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjciAmJiAob3ZhbHVlID09PSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBvdmFsdWUgPT09IDAgJiYgMS9vdmFsdWUgIT09IDEvdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogb3ZhbHVlID09PSBvdmFsdWUgfHwgdmFsdWUgPT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDaGFuZ2VSZWNvcmQob2JqZWN0LCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0sIGV4Y2VwdCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWVzW2lkeF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9kZXNjLmNvbmZpZ3VyYWJsZSAmJiAoIWRlc2NyLmNvbmZpZ3VyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgZGVzY3Iud3JpdGFibGUgIT09IG9kZXNjLndyaXRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBkZXNjci5lbnVtZXJhYmxlICE9PSBvZGVzYy5lbnVtZXJhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBkZXNjci5nZXQgIT09IG9kZXNjLmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgZGVzY3Iuc2V0ICE9PSBvZGVzYy5zZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZENoYW5nZVJlY29yZChvYmplY3QsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVjb25maWd1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG92YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9LCBleGNlcHQpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmRlc2NyaXB0b3JzW2lkeF0gPSBkZXNjcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24ob2JqZWN0LCBkYXRhLCBpZHgsIGV4Y2VwdCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBkYXRhLnByb3BlcnRpZXNbaWR4XSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgb3ZhbHVlID0gZGF0YS52YWx1ZXNbaWR4XTtcblxuICAgICAgICAgICAgICAgIGlmIChvdmFsdWUgPT09IHZhbHVlID8gb3ZhbHVlID09PSAwICYmIDEvb3ZhbHVlICE9PSAxL3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG92YWx1ZSA9PT0gb3ZhbHVlIHx8IHZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDaGFuZ2VSZWNvcmQob2JqZWN0LCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0sIGV4Y2VwdCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWVzW2lkeF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBDaGVja3MgaWYgc29tZSBwcm9wZXJ0eSBoYXMgYmVlbiBkZWxldGVkXG4gICAgICAgICAgICB2YXIgZGVsZXRpb25DaGVjayA9IGdldERlc2NyaXB0b3IgPyBmdW5jdGlvbihvYmplY3QsIHByb3BzLCBwcm9wbGVuLCBkYXRhLCBleGNlcHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHByb3BzLmxlbmd0aCwgZGVzY3I7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHByb3BsZW4gJiYgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3IgPSBnZXREZXNjcmlwdG9yKG9iamVjdCwgcHJvcHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGxlbi0tO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGRlc2NyaXB0b3IsIHRoZSBwcm9wZXJ0eSBoYXMgcmVhbGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWVuIGRlbGV0ZWQ7IG90aGVyd2lzZSwgaXQncyBiZWVuIHJlY29uZmlndXJlZCBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCdzIG5vdCBlbnVtZXJhYmxlIGFueW1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcikgdXBkYXRlQ2hlY2sob2JqZWN0LCBkYXRhLCBpLCBleGNlcHQsIGRlc2NyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoYW5nZVJlY29yZChvYmplY3QsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvcHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogZGF0YS52YWx1ZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBleGNlcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHJvcGVydGllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGVzY3JpcHRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKG9iamVjdCwgcHJvcHMsIHByb3BsZW4sIGRhdGEsIGV4Y2VwdCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gcHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHdoaWxlIChwcm9wbGVuICYmIGktLSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGFuZ2VSZWNvcmQob2JqZWN0LCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvcHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogZGF0YS52YWx1ZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGV4Y2VwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnByb3BlcnRpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGxlbi0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgb2JqZWN0LCBleGNlcHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaGFuZGxlcnMuc2l6ZSB8fCBkYXRhLmZyb3plbikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb3BzLCBwcm9wbGVuLCBrZXlzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBkYXRhLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3MgPSBkYXRhLmRlc2NyaXB0b3JzLFxuICAgICAgICAgICAgICAgICAgICBpID0gMCwgaWR4LFxuICAgICAgICAgICAgICAgICAgICBrZXksIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcm90bywgZGVzY3I7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzbid0IGV4dGVuc2libGUsIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgZm9yIG5ld1xuICAgICAgICAgICAgICAgIC8vIG9yIGRlbGV0ZWQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmV4dGVuc2libGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IGRhdGEucHJvcGVydGllcy5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wbGVuID0gcHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBrZXlzID0gZ2V0UHJvcHMob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzW2krK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gaW5BcnJheShwcm9wcywga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjciA9IGdldERlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hhbmdlUmVjb3JkKG9iamVjdCwgZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGV4Y2VwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHJvcGVydGllcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3MucHVzaChkZXNjcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbaWR4XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BsZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2hlY2sob2JqZWN0LCBkYXRhLCBpZHgsIGV4Y2VwdCwgZGVzY3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW9uQ2hlY2sob2JqZWN0LCBwcm9wcywgcHJvcGxlbiwgZGF0YSwgZXhjZXB0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFPLmlzRXh0ZW5zaWJsZShvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5leHRlbnNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hhbmdlUmVjb3JkKG9iamVjdCwgZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByZXZlbnRFeHRlbnNpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXhjZXB0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZnJvemVuID0gTy5pc0Zyb3plbihvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggPSBpbkFycmF5KHByb3BzLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGFuZ2VSZWNvcmQob2JqZWN0LCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXhjZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW2lkeF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wbGVuLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNoZWNrKG9iamVjdCwgZGF0YSwgaWR4LCBleGNlcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW9uQ2hlY2sob2JqZWN0LCBwcm9wcywgcHJvcGxlbiwgZGF0YSwgZXhjZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZGF0YS5mcm96ZW4pIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG5vdCBleHRlbnNpYmxlLCBidXQgbm90IGZyb3plbiwgd2UganVzdCBoYXZlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGNoZWNrIGZvciB2YWx1ZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2hlY2sob2JqZWN0LCBkYXRhLCBpLCBleGNlcHQsIGdldERlc2NyaXB0b3Iob2JqZWN0LCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChPLmlzRnJvemVuKG9iamVjdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZyb3plbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGdldFByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm90byA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG8gIT09IGRhdGEucHJvdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoYW5nZVJlY29yZChvYmplY3QsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFByb3RvdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiX19wcm90b19fXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IGRhdGEucHJvdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wcm90byA9IHByb3RvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB1cCB0aGUgbWFpbiBsb29wIGZvciBvYmplY3Qgb2JzZXJ2YXRpb24gYW5kIGNoYW5nZSBub3RpZmljYXRpb25cbiAgICAgICAgICogSXQgc3RvcHMgaWYgbm8gb2JqZWN0IGlzIG9ic2VydmVkLlxuICAgICAgICAgKiBAZnVuY3Rpb24gcnVuR2xvYmFsTG9vcFxuICAgICAgICAgKi9cbiAgICAgICAgcnVuR2xvYmFsTG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKG9ic2VydmVkLnNpemUpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlZC5mb3JFYWNoKHBlcmZvcm1Qcm9wZXJ0eUNoZWNrcyk7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChkZWxpdmVySGFuZGxlclJlY29yZHMpO1xuICAgICAgICAgICAgICAgIG5leHRGcmFtZShydW5HbG9iYWxMb29wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsaXZlciB0aGUgY2hhbmdlIHJlY29yZHMgcmVsYXRpdmUgdG8gYSBjZXJ0YWluIGhhbmRsZXIsIGFuZCByZXNldHNcbiAgICAgICAgICogdGhlIHJlY29yZCBsaXN0LlxuICAgICAgICAgKiBAcGFyYW0ge0hhbmRsZXJEYXRhfSBoZGF0YVxuICAgICAgICAgKiBAcGFyYW0ge0hhbmRsZXJ9IGhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIGRlbGl2ZXJIYW5kbGVyUmVjb3JkcyA9IGZ1bmN0aW9uKGhkYXRhLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgcmVjb3JkcyA9IGhkYXRhLmNoYW5nZVJlY29yZHM7XG4gICAgICAgICAgICBpZiAocmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoZGF0YS5jaGFuZ2VSZWNvcmRzID0gW107XG4gICAgICAgICAgICAgICAgaGFuZGxlcihyZWNvcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbm90aWZpZXIgZm9yIGFuIG9iamVjdCAtIHdoZXRoZXIgaXQncyBvYnNlcnZlZCBvciBub3RcbiAgICAgICAgICogQGZ1bmN0aW9uIHJldHJpZXZlTm90aWZpZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdERhdGF9IFtkYXRhXVxuICAgICAgICAgKiBAcmV0dXJucyB7Tm90aWZpZXJ9XG4gICAgICAgICAqL1xuICAgICAgICByZXRyaWV2ZU5vdGlmaWVyID0gZnVuY3Rpb24ob2JqZWN0LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgZGF0YSA9IG9ic2VydmVkLmdldChvYmplY3QpO1xuXG4gICAgICAgICAgICAvKiogQHR5cGUge05vdGlmaWVyfSAqL1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEgJiYgZGF0YS5ub3RpZmllciB8fCB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQG1ldGhvZCBub3RpZnlcbiAgICAgICAgICAgICAgICAgKiBAc2VlIGh0dHA6Ly9hcnYuZ2l0aHViLmlvL2VjbWFzY3JpcHQtb2JqZWN0LW9ic2VydmUvI25vdGlmaWVycHJvdG90eXBlLl9ub3RpZnlcbiAgICAgICAgICAgICAgICAgKiBAbWVtYmVyb2YgTm90aWZpZXJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge0NoYW5nZVJlY29yZH0gY2hhbmdlUmVjb3JkXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgbm90aWZ5OiBmdW5jdGlvbihjaGFuZ2VSZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUmVjb3JkLnR5cGU7IC8vIEp1c3QgdG8gY2hlY2sgdGhlIHByb3BlcnR5IGlzIHRoZXJlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyBkYXRhLCB0aGUgb2JqZWN0IGhhcyBiZWVuIHVub2JzZXJ2ZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBvYnNlcnZlZC5nZXQob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmRDb3B5ID0geyBvYmplY3Q6IG9iamVjdCB9LCBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wIGluIGNoYW5nZVJlY29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkQ29weVtwcm9wXSA9IGNoYW5nZVJlY29yZFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoYW5nZVJlY29yZChvYmplY3QsIGRhdGEsIHJlY29yZENvcHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEBtZXRob2QgcGVyZm9ybUNoYW5nZVxuICAgICAgICAgICAgICAgICAqIEBzZWUgaHR0cDovL2Fydi5naXRodWIuaW8vZWNtYXNjcmlwdC1vYmplY3Qtb2JzZXJ2ZS8jbm90aWZpZXJwcm90b3R5cGVfLnBlcmZvcm1jaGFuZ2VcbiAgICAgICAgICAgICAgICAgKiBAbWVtYmVyb2YgTm90aWZpZXJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2hhbmdlVHlwZVxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7UGVyZm9ybWVyfSBmdW5jICAgICBUaGUgdGFzayBwZXJmb3JtZXJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0geyp9IFt0aGlzT2JqXSAgICAgICAgVXNlZCB0byBzZXQgYHRoaXNgIHdoZW4gY2FsbGluZyBmdW5jXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgcGVyZm9ybUNoYW5nZTogZnVuY3Rpb24oY2hhbmdlVHlwZSwgZnVuYy8qLCB0aGlzT2JqKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGFuZ2VUeXBlICE9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgbm9uLXN0cmluZyBjaGFuZ2VUeXBlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwZXJmb3JtIG5vbi1mdW5jdGlvblwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGRhdGEsIHRoZSBvYmplY3QgaGFzIGJlZW4gdW5vYnNlcnZlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IG9ic2VydmVkLmdldChvYmplY3QpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcCwgY2hhbmdlUmVjb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc09iaiA9IGFyZ3VtZW50c1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXNPYmogPT09IF91bmRlZmluZWQgPyBmdW5jKCkgOiBmdW5jLmNhbGwodGhpc09iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBwZXJmb3JtUHJvcGVydHlDaGVja3MoZGF0YSwgb2JqZWN0LCBjaGFuZ2VUeXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGRhdGEsIHRoZSBvYmplY3QgaGFzIGJlZW4gdW5vYnNlcnZlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiByZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUmVjb3JkID0geyBvYmplY3Q6IG9iamVjdCwgdHlwZTogY2hhbmdlVHlwZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wIGluIHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCAhPT0gXCJvYmplY3RcIiAmJiBwcm9wICE9PSBcInR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUmVjb3JkW3Byb3BdID0gcmVzdWx0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hhbmdlUmVjb3JkKG9iamVjdCwgZGF0YSwgY2hhbmdlUmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIChvciByZWRlZmluZXMpIGFuIGhhbmRsZXIgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIGEgZ2l2ZW5cbiAgICAgICAgICogb2JqZWN0IGFuZCBhIGdpdmVuIHR5cGUgYWNjZXB0IGxpc3QuXG4gICAgICAgICAqIEBmdW5jdGlvbiBzZXRIYW5kbGVyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3REYXRhfSBkYXRhXG4gICAgICAgICAqIEBwYXJhbSB7SGFuZGxlcn0gaGFuZGxlclxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBhY2NlcHRMaXN0XG4gICAgICAgICAqL1xuICAgICAgICBzZXRIYW5kbGVyID0gZnVuY3Rpb24ob2JqZWN0LCBkYXRhLCBoYW5kbGVyLCBhY2NlcHRMaXN0KSB7XG4gICAgICAgICAgICB2YXIgaGRhdGEgPSBoYW5kbGVycy5nZXQoaGFuZGxlcik7XG4gICAgICAgICAgICBpZiAoIWhkYXRhKVxuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNldChoYW5kbGVyLCBoZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZWQ6IGNyZWF0ZU1hcCgpLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWNvcmRzOiBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGRhdGEub2JzZXJ2ZWQuc2V0KG9iamVjdCwge1xuICAgICAgICAgICAgICAgIGFjY2VwdExpc3Q6IGFjY2VwdExpc3Quc2xpY2UoKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlcnMuc2V0KGhhbmRsZXIsIGhkYXRhKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGNoYW5nZSByZWNvcmQgaW4gYSBnaXZlbiBPYmplY3REYXRhXG4gICAgICAgICAqIEBmdW5jdGlvbiBhZGRDaGFuZ2VSZWNvcmRcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdERhdGF9IGRhdGFcbiAgICAgICAgICogQHBhcmFtIHtDaGFuZ2VSZWNvcmR9IGNoYW5nZVJlY29yZFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V4Y2VwdF1cbiAgICAgICAgICovXG4gICAgICAgIGFkZENoYW5nZVJlY29yZCA9IGZ1bmN0aW9uKG9iamVjdCwgZGF0YSwgY2hhbmdlUmVjb3JkLCBleGNlcHQpIHtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBhY2NlcHRMaXN0ID0gaGRhdGEub2JzZXJ2ZWQuZ2V0KG9iamVjdCkuYWNjZXB0TGlzdDtcbiAgICAgICAgICAgICAgICAvLyBJZiBleGNlcHQgaXMgZGVmaW5lZCwgTm90aWZpZXIucGVyZm9ybUNoYW5nZSBoYXMgYmVlblxuICAgICAgICAgICAgICAgIC8vIGNhbGxlZCwgd2l0aCBleGNlcHQgYXMgdGhlIHR5cGUuXG4gICAgICAgICAgICAgICAgLy8gQWxsIHRoZSBoYW5kbGVycyB0aGF0IGFjY2VwdHMgdGhhdCB0eXBlIGFyZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGV4Y2VwdCAhPT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgaW5BcnJheShhY2NlcHRMaXN0LCBleGNlcHQpID09PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGluQXJyYXkoYWNjZXB0TGlzdCwgY2hhbmdlUmVjb3JkLnR5cGUpID4gLTEpXG4gICAgICAgICAgICAgICAgICAgIGhkYXRhLmNoYW5nZVJlY29yZHMucHVzaChjaGFuZ2VSZWNvcmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICBvYnNlcnZlZCA9IGNyZWF0ZU1hcCgpO1xuICAgIGhhbmRsZXJzID0gY3JlYXRlTWFwKCk7XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gT2JqZWN0Lm9ic2VydmVcbiAgICAgKiBAc2VlIGh0dHA6Ly9hcnYuZ2l0aHViLmlvL2VjbWFzY3JpcHQtb2JqZWN0LW9ic2VydmUvI09iamVjdC5vYnNlcnZlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7SGFuZGxlcn0gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IFthY2NlcHRMaXN0XVxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSAgICAgICAgICAgICAgIFRoZSBvYnNlcnZlZCBvYmplY3RcbiAgICAgKi9cbiAgICBQLm9vLm9ic2VydmUgPSBmdW5jdGlvbiBvYnNlcnZlKG9iamVjdCwgaGFuZGxlciwgYWNjZXB0TGlzdCkge1xuICAgICAgICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmplY3QgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qub2JzZXJ2ZSBjYW5ub3Qgb2JzZXJ2ZSBub24tb2JqZWN0XCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5vYnNlcnZlIGNhbm5vdCBkZWxpdmVyIHRvIG5vbi1mdW5jdGlvblwiKTtcblxuICAgICAgICBpZiAoTy5pc0Zyb3plbiAmJiBPLmlzRnJvemVuKGhhbmRsZXIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5vYnNlcnZlIGNhbm5vdCBkZWxpdmVyIHRvIGEgZnJvemVuIGZ1bmN0aW9uIG9iamVjdFwiKTtcblxuICAgICAgICBpZiAoYWNjZXB0TGlzdCA9PT0gX3VuZGVmaW5lZClcbiAgICAgICAgICAgIGFjY2VwdExpc3QgPSBkZWZhdWx0QWNjZXB0TGlzdDtcbiAgICAgICAgZWxzZSBpZiAoIWFjY2VwdExpc3QgfHwgdHlwZW9mIGFjY2VwdExpc3QgIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhpcmQgYXJndW1lbnQgdG8gT2JqZWN0Lm9ic2VydmUgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzLlwiKTtcblxuICAgICAgICBkb09ic2VydmUob2JqZWN0LCBoYW5kbGVyLCBhY2NlcHRMaXN0KTtcblxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gT2JqZWN0LnVub2JzZXJ2ZVxuICAgICAqIEBzZWUgaHR0cDovL2Fydi5naXRodWIuaW8vZWNtYXNjcmlwdC1vYmplY3Qtb2JzZXJ2ZS8jT2JqZWN0LnVub2JzZXJ2ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge0hhbmRsZXJ9IGhhbmRsZXJcbiAgICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gICAgICogQHJldHVybnMge09iamVjdH0gICAgICAgICBUaGUgZ2l2ZW4gb2JqZWN0XG4gICAgICovXG4gICAgUC5vby51bm9ic2VydmUgPSBmdW5jdGlvbiB1bm9ic2VydmUob2JqZWN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgdHlwZW9mIG9iamVjdCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqZWN0ICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LnVub2JzZXJ2ZSBjYW5ub3QgdW5vYnNlcnZlIG5vbi1vYmplY3RcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LnVub2JzZXJ2ZSBjYW5ub3QgZGVsaXZlciB0byBub24tZnVuY3Rpb25cIik7XG5cbiAgICAgICAgdmFyIGhkYXRhID0gaGFuZGxlcnMuZ2V0KGhhbmRsZXIpLCBvZGF0YTtcblxuICAgICAgICBpZiAoaGRhdGEgJiYgKG9kYXRhID0gaGRhdGEub2JzZXJ2ZWQuZ2V0KG9iamVjdCkpKSB7XG4gICAgICAgICAgICBoZGF0YS5vYnNlcnZlZC5mb3JFYWNoKGZ1bmN0aW9uKG9kYXRhLCBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtUHJvcGVydHlDaGVja3Mob2RhdGEuZGF0YSwgb2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV4dEZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJIYW5kbGVyUmVjb3JkcyhoZGF0YSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSW4gRmlyZWZveCAxMy0xOCwgc2l6ZSBpcyBhIGZ1bmN0aW9uLCBidXQgY3JlYXRlTWFwIHNob3VsZCBmYWxsXG4gICAgICAgICAgICAvLyBiYWNrIHRvIHRoZSBzaGltIGZvciB0aG9zZSB2ZXJzaW9uc1xuICAgICAgICAgICAgaWYgKGhkYXRhLm9ic2VydmVkLnNpemUgPT09IDEgJiYgaGRhdGEub2JzZXJ2ZWQuaGFzKG9iamVjdCkpXG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbXCJkZWxldGVcIl0oaGFuZGxlcik7XG4gICAgICAgICAgICBlbHNlIGhkYXRhLm9ic2VydmVkW1wiZGVsZXRlXCJdKG9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChvZGF0YS5kYXRhLmhhbmRsZXJzLnNpemUgPT09IDEpXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZWRbXCJkZWxldGVcIl0ob2JqZWN0KTtcbiAgICAgICAgICAgIGVsc2Ugb2RhdGEuZGF0YS5oYW5kbGVyc1tcImRlbGV0ZVwiXShoYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBPYmplY3QuZ2V0Tm90aWZpZXJcbiAgICAgKiBAc2VlIGh0dHA6Ly9hcnYuZ2l0aHViLmlvL2VjbWFzY3JpcHQtb2JqZWN0LW9ic2VydmUvI0dldE5vdGlmaWVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAgICAgKiBAcmV0dXJucyB7Tm90aWZpZXJ9XG4gICAgICovXG4gICAgUC5vby5nZXROb3RpZmllciA9IGZ1bmN0aW9uIGdldE5vdGlmaWVyKG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iamVjdCAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5nZXROb3RpZmllciBjYW5ub3QgZ2V0Tm90aWZpZXIgbm9uLW9iamVjdFwiKTtcblxuICAgICAgICBpZiAoTy5pc0Zyb3plbiAmJiBPLmlzRnJvemVuKG9iamVjdCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiByZXRyaWV2ZU5vdGlmaWVyKG9iamVjdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiBPYmplY3QuZGVsaXZlckNoYW5nZVJlY29yZHNcbiAgICAgKiBAc2VlIGh0dHA6Ly9hcnYuZ2l0aHViLmlvL2VjbWFzY3JpcHQtb2JqZWN0LW9ic2VydmUvI09iamVjdC5kZWxpdmVyQ2hhbmdlUmVjb3Jkc1xuICAgICAqIEBzZWUgaHR0cDovL2Fydi5naXRodWIuaW8vZWNtYXNjcmlwdC1vYmplY3Qtb2JzZXJ2ZS8jRGVsaXZlckNoYW5nZVJlY29yZHNcbiAgICAgKiBAcGFyYW0ge0hhbmRsZXJ9IGhhbmRsZXJcbiAgICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gICAgICovXG4gICAgUC5vby5kZWxpdmVyQ2hhbmdlUmVjb3JkcyA9IGZ1bmN0aW9uIGRlbGl2ZXJDaGFuZ2VSZWNvcmRzKGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmRlbGl2ZXJDaGFuZ2VSZWNvcmRzIGNhbm5vdCBkZWxpdmVyIHRvIG5vbi1mdW5jdGlvblwiKTtcblxuICAgICAgICB2YXIgaGRhdGEgPSBoYW5kbGVycy5nZXQoaGFuZGxlcik7XG4gICAgICAgIGlmIChoZGF0YSkge1xuICAgICAgICAgICAgaGRhdGEub2JzZXJ2ZWQuZm9yRWFjaChmdW5jdGlvbihvZGF0YSwgb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybVByb3BlcnR5Q2hlY2tzKG9kYXRhLmRhdGEsIG9iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGl2ZXJIYW5kbGVyUmVjb3JkcyhoZGF0YSwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KShQcm94eSwgT2JqZWN0LCBBcnJheSwgdGhpcyk7XG4iXX0=
},{}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindIdenticalAlterer = exports.RaziloBindEqualAlterer = exports.RaziloBindTrimAlterer = exports.RaziloBindSuffixAlterer = exports.RaziloBindPrefixAlterer = exports.RaziloBindNotAlterer = exports.RaziloBindJsonAlterer = exports.RaziloBindJoinAlterer = exports.RaziloBindDateAlterer = exports.RaziloBindAlterer = undefined;

var _alterer = require('./src/alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

var _dateAlterer = require('./src/date.alterer.js');

var _dateAlterer2 = _interopRequireDefault(_dateAlterer);

var _joinAlterer = require('./src/join.alterer.js');

var _joinAlterer2 = _interopRequireDefault(_joinAlterer);

var _jsonAlterer = require('./src/json.alterer.js');

var _jsonAlterer2 = _interopRequireDefault(_jsonAlterer);

var _notAlterer = require('./src/not.alterer.js');

var _notAlterer2 = _interopRequireDefault(_notAlterer);

var _prefixAlterer = require('./src/prefix.alterer.js');

var _prefixAlterer2 = _interopRequireDefault(_prefixAlterer);

var _suffixAlterer = require('./src/suffix.alterer.js');

var _suffixAlterer2 = _interopRequireDefault(_suffixAlterer);

var _trimAlterer = require('./src/trim.alterer.js');

var _trimAlterer2 = _interopRequireDefault(_trimAlterer);

var _equalAlterer = require('./src/equal.alterer.js');

var _equalAlterer2 = _interopRequireDefault(_equalAlterer);

var _identicalAlterer = require('./src/identical.alterer.js');

var _identicalAlterer2 = _interopRequireDefault(_identicalAlterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindAlterer = _alterer2.default;
exports.RaziloBindDateAlterer = _dateAlterer2.default;
exports.RaziloBindJoinAlterer = _joinAlterer2.default;
exports.RaziloBindJsonAlterer = _jsonAlterer2.default;
exports.RaziloBindNotAlterer = _notAlterer2.default;
exports.RaziloBindPrefixAlterer = _prefixAlterer2.default;
exports.RaziloBindSuffixAlterer = _suffixAlterer2.default;
exports.RaziloBindTrimAlterer = _trimAlterer2.default;
exports.RaziloBindEqualAlterer = _equalAlterer2.default;
exports.RaziloBindIdenticalAlterer = _identicalAlterer2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJhemlsb0JpbmRBbHRlcmVyIiwiUmF6aWxvQmluZERhdGVBbHRlcmVyIiwiUmF6aWxvQmluZEpvaW5BbHRlcmVyIiwiUmF6aWxvQmluZEpzb25BbHRlcmVyIiwiUmF6aWxvQmluZE5vdEFsdGVyZXIiLCJSYXppbG9CaW5kUHJlZml4QWx0ZXJlciIsIlJhemlsb0JpbmRTdWZmaXhBbHRlcmVyIiwiUmF6aWxvQmluZFRyaW1BbHRlcmVyIiwiUmF6aWxvQmluZEVxdWFsQWx0ZXJlciIsIlJhemlsb0JpbmRJZGVudGljYWxBbHRlcmVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHWUEsaUI7UUFDSUMscUI7UUFDQUMscUI7UUFDQUMscUI7UUFDREMsb0I7UUFDR0MsdUI7UUFDQUMsdUI7UUFDRkMscUI7UUFDQ0Msc0I7UUFDSUMsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWx0ZXJlciBmcm9tICcuL3NyYy9hbHRlcmVyLmpzJ1xuaW1wb3J0IERhdGVBbHRlcmVyIGZyb20gJy4vc3JjL2RhdGUuYWx0ZXJlci5qcydcbmltcG9ydCBKb2luQWx0ZXJlciBmcm9tICcuL3NyYy9qb2luLmFsdGVyZXIuanMnXG5pbXBvcnQgSnNvbkFsdGVyZXIgZnJvbSAnLi9zcmMvanNvbi5hbHRlcmVyLmpzJ1xuaW1wb3J0IE5vdEFsdGVyZXIgZnJvbSAnLi9zcmMvbm90LmFsdGVyZXIuanMnXG5pbXBvcnQgUHJlZml4QWx0ZXJlciBmcm9tICcuL3NyYy9wcmVmaXguYWx0ZXJlci5qcydcbmltcG9ydCBTdWZmaXhBbHRlcmVyIGZyb20gJy4vc3JjL3N1ZmZpeC5hbHRlcmVyLmpzJ1xuaW1wb3J0IFRyaW1BbHRlcmVyIGZyb20gJy4vc3JjL3RyaW0uYWx0ZXJlci5qcydcbmltcG9ydCBFcXVhbEFsdGVyZXIgZnJvbSAnLi9zcmMvZXF1YWwuYWx0ZXJlci5qcydcbmltcG9ydCBJZGVudGljYWxBbHRlcmVyIGZyb20gJy4vc3JjL2lkZW50aWNhbC5hbHRlcmVyLmpzJ1xuXG5leHBvcnQge1xuXHRBbHRlcmVyIGFzIFJhemlsb0JpbmRBbHRlcmVyLFxuXHREYXRlQWx0ZXJlciBhcyBSYXppbG9CaW5kRGF0ZUFsdGVyZXIsXG5cdEpvaW5BbHRlcmVyIGFzIFJhemlsb0JpbmRKb2luQWx0ZXJlcixcblx0SnNvbkFsdGVyZXIgYXMgUmF6aWxvQmluZEpzb25BbHRlcmVyLFxuXHROb3RBbHRlcmVyIGFzIFJhemlsb0JpbmROb3RBbHRlcmVyLFxuXHRQcmVmaXhBbHRlcmVyIGFzIFJhemlsb0JpbmRQcmVmaXhBbHRlcmVyLFxuXHRTdWZmaXhBbHRlcmVyIGFzIFJhemlsb0JpbmRTdWZmaXhBbHRlcmVyLFxuXHRUcmltQWx0ZXJlciBhcyBSYXppbG9CaW5kVHJpbUFsdGVyZXIsXG5cdEVxdWFsQWx0ZXJlciBhcyBSYXppbG9CaW5kRXF1YWxBbHRlcmVyLFxuXHRJZGVudGljYWxBbHRlcmVyIGFzIFJhemlsb0JpbmRJZGVudGljYWxBbHRlcmVyXG59XG4iXX0=
},{"./src/alterer.js":5,"./src/date.alterer.js":6,"./src/equal.alterer.js":7,"./src/identical.alterer.js":8,"./src/join.alterer.js":9,"./src/json.alterer.js":10,"./src/not.alterer.js":11,"./src/prefix.alterer.js":12,"./src/suffix.alterer.js":13,"./src/trim.alterer.js":14}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Alterer
 * Generic alterer methods used accross all alterers
 */
var Alterer = function () {
	function Alterer() {
		_classCallCheck(this, Alterer);

		this.name = undefined;
		this.accepts = [];
	}

	Alterer.prototype.detect = function detect(name, resolved) {
		if (name !== this.name) return false;
		if (this.accepts.length !== 0 && this.accepts.indexOf(typeof resolved === "undefined" ? "undefined" : _typeof(resolved)) < 0) return false;
		return true;
	};

	return Alterer;
}();

exports.default = Alterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdGVyZXIuanMiXSwibmFtZXMiOlsiQWx0ZXJlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJhY2NlcHRzIiwiZGV0ZWN0IiwicmVzb2x2ZWQiLCJsZW5ndGgiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBSXFCQSxPO0FBQ3BCLG9CQUFjO0FBQUE7O0FBQ2IsT0FBS0MsSUFBTCxHQUFZQyxTQUFaO0FBQ0EsT0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQTs7bUJBRURDLE0sbUJBQU9ILEksRUFBTUksUSxFQUFVO0FBQ3RCLE1BQUlKLFNBQVMsS0FBS0EsSUFBbEIsRUFBd0IsT0FBTyxLQUFQO0FBQ3hCLE1BQUksS0FBS0UsT0FBTCxDQUFhRyxNQUFiLEtBQXdCLENBQXhCLElBQTZCLEtBQUtILE9BQUwsQ0FBYUksT0FBYixRQUE0QkYsUUFBNUIseUNBQTRCQSxRQUE1QixLQUF3QyxDQUF6RSxFQUE0RSxPQUFPLEtBQVA7QUFDNUUsU0FBTyxJQUFQO0FBQ0EsRTs7Ozs7a0JBVm1CTCxPIiwiZmlsZSI6ImFsdGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFsdGVyZXJcbiAqIEdlbmVyaWMgYWx0ZXJlciBtZXRob2RzIHVzZWQgYWNjcm9zcyBhbGwgYWx0ZXJlcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWx0ZXJlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmFjY2VwdHMgPSBbXTtcblx0fVxuXG5cdGRldGVjdChuYW1lLCByZXNvbHZlZCkge1xuXHRcdGlmIChuYW1lICE9PSB0aGlzLm5hbWUpXHRyZXR1cm4gZmFsc2U7XG5cdFx0aWYgKHRoaXMuYWNjZXB0cy5sZW5ndGggIT09IDAgJiYgdGhpcy5hY2NlcHRzLmluZGV4T2YodHlwZW9mIHJlc29sdmVkKSA8IDApIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuIl19
},{}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

var _razilobindCore = require('razilobind-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Date Alterer
 * Alters various data to a date string in (options) format
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var DateAlterer = function (_Alterer) {
	_inherits(DateAlterer, _Alterer);

	function DateAlterer() {
		_classCallCheck(this, DateAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'date';
		_this.accepts = ['string', 'number', 'object', 'symbol'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	DateAlterer.prototype.alter = function alter(resolved, options) {
		var dateObj = void 0;

		if ((typeof resolved === 'undefined' ? 'undefined' : _typeof(resolved)) === 'symbol') dateObj = new Date(Date.parse(String(Symbol(resolved))));else if (!isNaN(resolved) && resolved !== null) dateObj = new Date(resolved);else if (typeof resolved === 'string' && resolved.length > 0) dateObj = new Date(Date.parse(resolved));else if (resolved instanceof Date) dateObj = resolved;else return '';

		return _razilobindCore.RaziloBindDateFormat.dateFormat(dateObj, options);
	};

	return DateAlterer;
}(_alterer2.default);

exports.default = DateAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuYWx0ZXJlci5qcyJdLCJuYW1lcyI6WyJEYXRlQWx0ZXJlciIsIm5hbWUiLCJhY2NlcHRzIiwiYWx0ZXIiLCJyZXNvbHZlZCIsIm9wdGlvbnMiLCJkYXRlT2JqIiwiRGF0ZSIsInBhcnNlIiwiU3RyaW5nIiwiU3ltYm9sIiwiaXNOYU4iLCJsZW5ndGgiLCJkYXRlRm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQkEsVzs7O0FBQ3BCLHdCQUFjO0FBQUE7O0FBQUEsK0NBQ2IsbUJBRGE7O0FBRWIsUUFBS0MsSUFBTCxHQUFZLE1BQVo7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQixFQUErQixRQUEvQixDQUFmO0FBSGE7QUFJYjs7QUFFRDs7Ozs7Ozs7O3VCQU9BQyxLLGtCQUFNQyxRLEVBQVVDLE8sRUFBUztBQUN4QixNQUFJQyxnQkFBSjs7QUFFQSxNQUFJLFFBQU9GLFFBQVAseUNBQU9BLFFBQVAsT0FBb0IsUUFBeEIsRUFBa0NFLFVBQVUsSUFBSUMsSUFBSixDQUFTQSxLQUFLQyxLQUFMLENBQVdDLE9BQU9DLE9BQU9OLFFBQVAsQ0FBUCxDQUFYLENBQVQsQ0FBVixDQUFsQyxLQUNLLElBQUksQ0FBQ08sTUFBTVAsUUFBTixDQUFELElBQW9CQSxhQUFhLElBQXJDLEVBQTJDRSxVQUFVLElBQUlDLElBQUosQ0FBU0gsUUFBVCxDQUFWLENBQTNDLEtBQ0EsSUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXBCLElBQWdDQSxTQUFTUSxNQUFULEdBQWtCLENBQXRELEVBQXlETixVQUFVLElBQUlDLElBQUosQ0FBU0EsS0FBS0MsS0FBTCxDQUFXSixRQUFYLENBQVQsQ0FBVixDQUF6RCxLQUNBLElBQUlBLG9CQUFvQkcsSUFBeEIsRUFBOEJELFVBQVVGLFFBQVYsQ0FBOUIsS0FDQSxPQUFPLEVBQVA7O0FBRUwsU0FBTyxxQ0FBcUJTLFVBQXJCLENBQWdDUCxPQUFoQyxFQUF5Q0QsT0FBekMsQ0FBUDtBQUNBLEU7Ozs7O2tCQXhCbUJMLFciLCJmaWxlIjoiZGF0ZS5hbHRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFsdGVyZXIgZnJvbSAnLi9hbHRlcmVyLmpzJ1xuaW1wb3J0IHtSYXppbG9CaW5kRGF0ZUZvcm1hdH0gZnJvbSAncmF6aWxvYmluZC1jb3JlJ1xuXG4vKipcbiAqIERhdGUgQWx0ZXJlclxuICogQWx0ZXJzIHZhcmlvdXMgZGF0YSB0byBhIGRhdGUgc3RyaW5nIGluIChvcHRpb25zKSBmb3JtYXRcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG5hbWUsIGFjY2VwdHMsIG9wdGlvbnNcbiAqIG1ldGhvZDogZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUFsdGVyZXIgZXh0ZW5kcyBBbHRlcmVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSAnZGF0ZSc7XG5cdFx0dGhpcy5hY2NlcHRzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ29iamVjdCcsICdzeW1ib2wnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBhbHRlcigpXG5cdCAqIENoYW5nZXMgcmVzb2x2ZWQgZGF0YSBiYXNlZCBvbiBvcHRpb25zXG5cdCAqIEBwYXJhbSBtaXhlZCByZXNvbHZlZCBUaGUgZGF0YSB0byBjaGFuZ2Vcblx0ICogQHBhcmFtIG1peGVkIG9wdGlvbnMgQW55IG9wdGlvbnMgc2VudCBpbiB3aXRoIHRoZSBhbHRlcmVyXG5cdCAqIEByZXR1cm4gbWl4ZWQgQ2hhbmdlZCByZXNvbHZlZCBkYXRhXG5cdCAqL1xuXHRhbHRlcihyZXNvbHZlZCwgb3B0aW9ucykge1xuXHRcdGxldCBkYXRlT2JqO1xuXG5cdFx0aWYgKHR5cGVvZiByZXNvbHZlZCA9PT0gJ3N5bWJvbCcpIGRhdGVPYmogPSBuZXcgRGF0ZShEYXRlLnBhcnNlKFN0cmluZyhTeW1ib2wocmVzb2x2ZWQpKSkpO1xuXHRcdGVsc2UgaWYgKCFpc05hTihyZXNvbHZlZCkgJiYgcmVzb2x2ZWQgIT09IG51bGwpIGRhdGVPYmogPSBuZXcgRGF0ZShyZXNvbHZlZCk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIHJlc29sdmVkID09PSAnc3RyaW5nJyAmJiByZXNvbHZlZC5sZW5ndGggPiAwKSBkYXRlT2JqID0gbmV3IERhdGUoRGF0ZS5wYXJzZShyZXNvbHZlZCkpO1xuXHRcdGVsc2UgaWYgKHJlc29sdmVkIGluc3RhbmNlb2YgRGF0ZSkgZGF0ZU9iaiA9IHJlc29sdmVkO1xuXHRcdGVsc2UgcmV0dXJuICcnO1xuXG5cdFx0cmV0dXJuIFJhemlsb0JpbmREYXRlRm9ybWF0LmRhdGVGb3JtYXQoZGF0ZU9iaiwgb3B0aW9ucyk7XG5cdH1cbn1cbiJdfQ==
},{"./alterer.js":5,"razilobind-core":41}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Equal Alterer
 * Alters any data to its boolean opposite
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var EqualAlterer = function (_Alterer) {
	_inherits(EqualAlterer, _Alterer);

	function EqualAlterer() {
		_classCallCheck(this, EqualAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'equal';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	EqualAlterer.prototype.alter = function alter(resolved, options) {
		return resolved == options;
	};

	return EqualAlterer;
}(_alterer2.default);

exports.default = EqualAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWFsLmFsdGVyZXIuanMiXSwibmFtZXMiOlsiRXF1YWxBbHRlcmVyIiwibmFtZSIsImFjY2VwdHMiLCJhbHRlciIsInJlc29sdmVkIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxZOzs7QUFDcEIseUJBQWM7QUFBQTs7QUFBQSwrQ0FDYixtQkFEYTs7QUFFYixRQUFLQyxJQUFMLEdBQVksT0FBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxFQUFmO0FBSGE7QUFJYjs7QUFFRDs7Ozs7Ozs7O3dCQU9BQyxLLGtCQUFNQyxRLEVBQVVDLE8sRUFBUztBQUN4QixTQUFPRCxZQUFZQyxPQUFuQjtBQUNBLEU7Ozs7O2tCQWhCbUJMLFkiLCJmaWxlIjoiZXF1YWwuYWx0ZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbHRlcmVyIGZyb20gJy4vYWx0ZXJlci5qcydcblxuLyoqXG4gKiBFcXVhbCBBbHRlcmVyXG4gKiBBbHRlcnMgYW55IGRhdGEgdG8gaXRzIGJvb2xlYW4gb3Bwb3NpdGVcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG5hbWUsIGFjY2VwdHMsIG9wdGlvbnNcbiAqIG1ldGhvZDogZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxBbHRlcmVyIGV4dGVuZHMgQWx0ZXJlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gJ2VxdWFsJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBhbHRlcigpXG5cdCAqIENoYW5nZXMgcmVzb2x2ZWQgZGF0YSBiYXNlZCBvbiBvcHRpb25zXG5cdCAqIEBwYXJhbSBtaXhlZCByZXNvbHZlZCBUaGUgZGF0YSB0byBjaGFuZ2Vcblx0ICogQHBhcmFtIG1peGVkIG9wdGlvbnMgQW55IG9wdGlvbnMgc2VudCBpbiB3aXRoIHRoZSBhbHRlcmVyXG5cdCAqIEByZXR1cm4gbWl4ZWQgQ2hhbmdlZCByZXNvbHZlZCBkYXRhXG5cdCAqL1xuXHRhbHRlcihyZXNvbHZlZCwgb3B0aW9ucykge1xuXHRcdHJldHVybiByZXNvbHZlZCA9PSBvcHRpb25zO1xuXHR9XG59XG4iXX0=
},{"./alterer.js":5}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Identical Alterer
 * Alters any data to its boolean opposite
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var IdenticalAlterer = function (_Alterer) {
	_inherits(IdenticalAlterer, _Alterer);

	function IdenticalAlterer() {
		_classCallCheck(this, IdenticalAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'identical';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	IdenticalAlterer.prototype.alter = function alter(resolved, options) {
		return resolved === options;
	};

	return IdenticalAlterer;
}(_alterer2.default);

exports.default = IdenticalAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkZW50aWNhbC5hbHRlcmVyLmpzIl0sIm5hbWVzIjpbIklkZW50aWNhbEFsdGVyZXIiLCJuYW1lIiwiYWNjZXB0cyIsImFsdGVyIiwicmVzb2x2ZWQiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGdCOzs7QUFDcEIsNkJBQWM7QUFBQTs7QUFBQSwrQ0FDYixtQkFEYTs7QUFFYixRQUFLQyxJQUFMLEdBQVksV0FBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxFQUFmO0FBSGE7QUFJYjs7QUFFRDs7Ozs7Ozs7OzRCQU9BQyxLLGtCQUFNQyxRLEVBQVVDLE8sRUFBUztBQUN4QixTQUFPRCxhQUFhQyxPQUFwQjtBQUNBLEU7Ozs7O2tCQWhCbUJMLGdCIiwiZmlsZSI6ImlkZW50aWNhbC5hbHRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFsdGVyZXIgZnJvbSAnLi9hbHRlcmVyLmpzJ1xuXG4vKipcbiAqIElkZW50aWNhbCBBbHRlcmVyXG4gKiBBbHRlcnMgYW55IGRhdGEgdG8gaXRzIGJvb2xlYW4gb3Bwb3NpdGVcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG5hbWUsIGFjY2VwdHMsIG9wdGlvbnNcbiAqIG1ldGhvZDogZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpY2FsQWx0ZXJlciBleHRlbmRzIEFsdGVyZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9ICdpZGVudGljYWwnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIGFsdGVyKClcblx0ICogQ2hhbmdlcyByZXNvbHZlZCBkYXRhIGJhc2VkIG9uIG9wdGlvbnNcblx0ICogQHBhcmFtIG1peGVkIHJlc29sdmVkIFRoZSBkYXRhIHRvIGNoYW5nZVxuXHQgKiBAcGFyYW0gbWl4ZWQgb3B0aW9ucyBBbnkgb3B0aW9ucyBzZW50IGluIHdpdGggdGhlIGFsdGVyZXJcblx0ICogQHJldHVybiBtaXhlZCBDaGFuZ2VkIHJlc29sdmVkIGRhdGFcblx0ICovXG5cdGFsdGVyKHJlc29sdmVkLCBvcHRpb25zKSB7XG5cdFx0cmV0dXJuIHJlc29sdmVkID09PSBvcHRpb25zO1xuXHR9XG59XG4iXX0=
},{"./alterer.js":5}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Join Alterer
 * Joins the values of object or array as a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var JoinAlterer = function (_Alterer) {
	_inherits(JoinAlterer, _Alterer);

	function JoinAlterer() {
		_classCallCheck(this, JoinAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'join';
		_this.accepts = ['object'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	JoinAlterer.prototype.alter = function alter(resolved, options) {
		var result = '';
		for (var key in resolved) {
			result = result + String(resolved[key]);
		}return result;
	};

	return JoinAlterer;
}(_alterer2.default);

exports.default = JoinAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4uYWx0ZXJlci5qcyJdLCJuYW1lcyI6WyJKb2luQWx0ZXJlciIsIm5hbWUiLCJhY2NlcHRzIiwiYWx0ZXIiLCJyZXNvbHZlZCIsIm9wdGlvbnMiLCJyZXN1bHQiLCJrZXkiLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQkEsVzs7O0FBQ3BCLHdCQUFjO0FBQUE7O0FBQUEsK0NBQ2IsbUJBRGE7O0FBRWIsUUFBS0MsSUFBTCxHQUFZLE1BQVo7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxRQUFELENBQWY7QUFIYTtBQUliOztBQUVEOzs7Ozs7Ozs7dUJBT0FDLEssa0JBQU1DLFEsRUFBVUMsTyxFQUFTO0FBQ3hCLE1BQUlDLFNBQVMsRUFBYjtBQUNBLE9BQUssSUFBSUMsR0FBVCxJQUFnQkgsUUFBaEI7QUFBMEJFLFlBQVNBLFNBQVNFLE9BQU9KLFNBQVNHLEdBQVQsQ0FBUCxDQUFsQjtBQUExQixHQUNBLE9BQU9ELE1BQVA7QUFDQSxFOzs7OztrQkFsQm1CTixXIiwiZmlsZSI6ImpvaW4uYWx0ZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbHRlcmVyIGZyb20gJy4vYWx0ZXJlci5qcydcblxuLyoqXG4gKiBKb2luIEFsdGVyZXJcbiAqIEpvaW5zIHRoZSB2YWx1ZXMgb2Ygb2JqZWN0IG9yIGFycmF5IGFzIGEgc3RyaW5nXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBuYW1lLCBhY2NlcHRzLCBvcHRpb25zXG4gKiBtZXRob2Q6IGRldGVjdChuYW1lLCByZXNvbHZlZCkgeyByZXR1cm4gYm9vbCB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvaW5BbHRlcmVyIGV4dGVuZHMgQWx0ZXJlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gJ2pvaW4nO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsnb2JqZWN0J107XG5cdH1cblxuXHQvKipcblx0ICogYWx0ZXIoKVxuXHQgKiBDaGFuZ2VzIHJlc29sdmVkIGRhdGEgYmFzZWQgb24gb3B0aW9uc1xuXHQgKiBAcGFyYW0gbWl4ZWQgcmVzb2x2ZWQgVGhlIGRhdGEgdG8gY2hhbmdlXG5cdCAqIEBwYXJhbSBtaXhlZCBvcHRpb25zIEFueSBvcHRpb25zIHNlbnQgaW4gd2l0aCB0aGUgYWx0ZXJlclxuXHQgKiBAcmV0dXJuIG1peGVkIENoYW5nZWQgcmVzb2x2ZWQgZGF0YVxuXHQgKi9cblx0YWx0ZXIocmVzb2x2ZWQsIG9wdGlvbnMpIHtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0Zm9yIChsZXQga2V5IGluIHJlc29sdmVkKSByZXN1bHQgPSByZXN1bHQgKyBTdHJpbmcocmVzb2x2ZWRba2V5XSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuIl19
},{"./alterer.js":5}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * JSON Alterer
 * Alters any type of data to a JSON string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var JsonAlterer = function (_Alterer) {
	_inherits(JsonAlterer, _Alterer);

	function JsonAlterer() {
		_classCallCheck(this, JsonAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'json';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	JsonAlterer.prototype.alter = function alter(resolved, options) {
		return JSON.stringify(resolved);
	};

	return JsonAlterer;
}(_alterer2.default);

exports.default = JsonAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uYWx0ZXJlci5qcyJdLCJuYW1lcyI6WyJKc29uQWx0ZXJlciIsIm5hbWUiLCJhY2NlcHRzIiwiYWx0ZXIiLCJyZXNvbHZlZCIsIm9wdGlvbnMiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLFc7OztBQUNwQix3QkFBYztBQUFBOztBQUFBLCtDQUNiLG1CQURhOztBQUViLFFBQUtDLElBQUwsR0FBWSxNQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFIYTtBQUliOztBQUVEOzs7Ozs7Ozs7dUJBT0FDLEssa0JBQU1DLFEsRUFBVUMsTyxFQUFTO0FBQ3hCLFNBQU9DLEtBQUtDLFNBQUwsQ0FBZUgsUUFBZixDQUFQO0FBQ0EsRTs7Ozs7a0JBaEJtQkosVyIsImZpbGUiOiJqc29uLmFsdGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWx0ZXJlciBmcm9tICcuL2FsdGVyZXIuanMnXG5cbi8qKlxuICogSlNPTiBBbHRlcmVyXG4gKiBBbHRlcnMgYW55IHR5cGUgb2YgZGF0YSB0byBhIEpTT04gc3RyaW5nXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBuYW1lLCBhY2NlcHRzLCBvcHRpb25zXG4gKiBtZXRob2Q6IGRldGVjdChuYW1lLCByZXNvbHZlZCkgeyByZXR1cm4gYm9vbCB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25BbHRlcmVyIGV4dGVuZHMgQWx0ZXJlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gJ2pzb24nO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIGFsdGVyKClcblx0ICogQ2hhbmdlcyByZXNvbHZlZCBkYXRhIGJhc2VkIG9uIG9wdGlvbnNcblx0ICogQHBhcmFtIG1peGVkIHJlc29sdmVkIFRoZSBkYXRhIHRvIGNoYW5nZVxuXHQgKiBAcGFyYW0gbWl4ZWQgb3B0aW9ucyBBbnkgb3B0aW9ucyBzZW50IGluIHdpdGggdGhlIGFsdGVyZXJcblx0ICogQHJldHVybiBtaXhlZCBDaGFuZ2VkIHJlc29sdmVkIGRhdGFcblx0ICovXG5cdGFsdGVyKHJlc29sdmVkLCBvcHRpb25zKSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc29sdmVkKTtcblx0fVxufVxuIl19
},{"./alterer.js":5}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Not Alterer
 * Alters any data to its boolean opposite
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var NotAlterer = function (_Alterer) {
	_inherits(NotAlterer, _Alterer);

	function NotAlterer() {
		_classCallCheck(this, NotAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'not';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	NotAlterer.prototype.alter = function alter(resolved, options) {
		return !resolved;
	};

	return NotAlterer;
}(_alterer2.default);

exports.default = NotAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC5hbHRlcmVyLmpzIl0sIm5hbWVzIjpbIk5vdEFsdGVyZXIiLCJuYW1lIiwiYWNjZXB0cyIsImFsdGVyIiwicmVzb2x2ZWQiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLFU7OztBQUNwQix1QkFBYztBQUFBOztBQUFBLCtDQUNiLG1CQURhOztBQUViLFFBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFIYTtBQUliOztBQUVEOzs7Ozs7Ozs7c0JBT0FDLEssa0JBQU1DLFEsRUFBVUMsTyxFQUFTO0FBQ3hCLFNBQU8sQ0FBQ0QsUUFBUjtBQUNBLEU7Ozs7O2tCQWhCbUJKLFUiLCJmaWxlIjoibm90LmFsdGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWx0ZXJlciBmcm9tICcuL2FsdGVyZXIuanMnXG5cbi8qKlxuICogTm90IEFsdGVyZXJcbiAqIEFsdGVycyBhbnkgZGF0YSB0byBpdHMgYm9vbGVhbiBvcHBvc2l0ZVxuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogbmFtZSwgYWNjZXB0cywgb3B0aW9uc1xuICogbWV0aG9kOiBkZXRlY3QobmFtZSwgcmVzb2x2ZWQpIHsgcmV0dXJuIGJvb2wgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RBbHRlcmVyIGV4dGVuZHMgQWx0ZXJlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gJ25vdCc7XG5cdFx0dGhpcy5hY2NlcHRzID0gW107XG5cdH1cblxuXHQvKipcblx0ICogYWx0ZXIoKVxuXHQgKiBDaGFuZ2VzIHJlc29sdmVkIGRhdGEgYmFzZWQgb24gb3B0aW9uc1xuXHQgKiBAcGFyYW0gbWl4ZWQgcmVzb2x2ZWQgVGhlIGRhdGEgdG8gY2hhbmdlXG5cdCAqIEBwYXJhbSBtaXhlZCBvcHRpb25zIEFueSBvcHRpb25zIHNlbnQgaW4gd2l0aCB0aGUgYWx0ZXJlclxuXHQgKiBAcmV0dXJuIG1peGVkIENoYW5nZWQgcmVzb2x2ZWQgZGF0YVxuXHQgKi9cblx0YWx0ZXIocmVzb2x2ZWQsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gIXJlc29sdmVkO1xuXHR9XG59XG4iXX0=
},{"./alterer.js":5}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Prefix Alterer
 * Adds anything to start of a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var PrefixAlterer = function (_Alterer) {
	_inherits(PrefixAlterer, _Alterer);

	function PrefixAlterer() {
		_classCallCheck(this, PrefixAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'prefix';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	PrefixAlterer.prototype.alter = function alter(resolved, options) {
		return String(options) + resolved;
	};

	return PrefixAlterer;
}(_alterer2.default);

exports.default = PrefixAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZpeC5hbHRlcmVyLmpzIl0sIm5hbWVzIjpbIlByZWZpeEFsdGVyZXIiLCJuYW1lIiwiYWNjZXB0cyIsImFsdGVyIiwicmVzb2x2ZWQiLCJvcHRpb25zIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGE7OztBQUNwQiwwQkFBYztBQUFBOztBQUFBLCtDQUNiLG1CQURhOztBQUViLFFBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsUUFBRCxDQUFmO0FBSGE7QUFJYjs7QUFFRDs7Ozs7Ozs7O3lCQU9BQyxLLGtCQUFNQyxRLEVBQVVDLE8sRUFBUztBQUN4QixTQUFPQyxPQUFPRCxPQUFQLElBQWtCRCxRQUF6QjtBQUNBLEU7Ozs7O2tCQWhCbUJKLGEiLCJmaWxlIjoicHJlZml4LmFsdGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWx0ZXJlciBmcm9tICcuL2FsdGVyZXIuanMnXG5cbi8qKlxuICogUHJlZml4IEFsdGVyZXJcbiAqIEFkZHMgYW55dGhpbmcgdG8gc3RhcnQgb2YgYSBzdHJpbmdcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG5hbWUsIGFjY2VwdHMsIG9wdGlvbnNcbiAqIG1ldGhvZDogZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZml4QWx0ZXJlciBleHRlbmRzIEFsdGVyZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9ICdwcmVmaXgnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsnc3RyaW5nJ107XG5cdH1cblxuXHQvKipcblx0ICogYWx0ZXIoKVxuXHQgKiBDaGFuZ2VzIHJlc29sdmVkIGRhdGEgYmFzZWQgb24gb3B0aW9uc1xuXHQgKiBAcGFyYW0gbWl4ZWQgcmVzb2x2ZWQgVGhlIGRhdGEgdG8gY2hhbmdlXG5cdCAqIEBwYXJhbSBtaXhlZCBvcHRpb25zIEFueSBvcHRpb25zIHNlbnQgaW4gd2l0aCB0aGUgYWx0ZXJlclxuXHQgKiBAcmV0dXJuIG1peGVkIENoYW5nZWQgcmVzb2x2ZWQgZGF0YVxuXHQgKi9cblx0YWx0ZXIocmVzb2x2ZWQsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gU3RyaW5nKG9wdGlvbnMpICsgcmVzb2x2ZWQ7XG5cdH1cbn1cbiJdfQ==
},{"./alterer.js":5}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Suffix Alterer
 * Adds anything to end of a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var SuffixAlterer = function (_Alterer) {
	_inherits(SuffixAlterer, _Alterer);

	function SuffixAlterer() {
		_classCallCheck(this, SuffixAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'suffix';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	SuffixAlterer.prototype.alter = function alter(resolved, options) {
		return resolved + String(options);
	};

	return SuffixAlterer;
}(_alterer2.default);

exports.default = SuffixAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1ZmZpeC5hbHRlcmVyLmpzIl0sIm5hbWVzIjpbIlN1ZmZpeEFsdGVyZXIiLCJuYW1lIiwiYWNjZXB0cyIsImFsdGVyIiwicmVzb2x2ZWQiLCJvcHRpb25zIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGE7OztBQUNwQiwwQkFBYztBQUFBOztBQUFBLCtDQUNiLG1CQURhOztBQUViLFFBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsUUFBRCxDQUFmO0FBSGE7QUFJYjs7QUFFRDs7Ozs7Ozs7O3lCQU9BQyxLLGtCQUFNQyxRLEVBQVVDLE8sRUFBUztBQUN4QixTQUFPRCxXQUFXRSxPQUFPRCxPQUFQLENBQWxCO0FBQ0EsRTs7Ozs7a0JBaEJtQkwsYSIsImZpbGUiOiJzdWZmaXguYWx0ZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbHRlcmVyIGZyb20gJy4vYWx0ZXJlci5qcydcblxuLyoqXG4gKiBTdWZmaXggQWx0ZXJlclxuICogQWRkcyBhbnl0aGluZyB0byBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG5hbWUsIGFjY2VwdHMsIG9wdGlvbnNcbiAqIG1ldGhvZDogZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VmZml4QWx0ZXJlciBleHRlbmRzIEFsdGVyZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9ICdzdWZmaXgnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsnc3RyaW5nJ107XG5cdH1cblxuXHQvKipcblx0ICogYWx0ZXIoKVxuXHQgKiBDaGFuZ2VzIHJlc29sdmVkIGRhdGEgYmFzZWQgb24gb3B0aW9uc1xuXHQgKiBAcGFyYW0gbWl4ZWQgcmVzb2x2ZWQgVGhlIGRhdGEgdG8gY2hhbmdlXG5cdCAqIEBwYXJhbSBtaXhlZCBvcHRpb25zIEFueSBvcHRpb25zIHNlbnQgaW4gd2l0aCB0aGUgYWx0ZXJlclxuXHQgKiBAcmV0dXJuIG1peGVkIENoYW5nZWQgcmVzb2x2ZWQgZGF0YVxuXHQgKi9cblx0YWx0ZXIocmVzb2x2ZWQsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gcmVzb2x2ZWQgKyBTdHJpbmcob3B0aW9ucyk7XG5cdH1cbn1cbiJdfQ==
},{"./alterer.js":5}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Trim Alterer
 * Alters string data by triming it of whitespace
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var TrimAlterer = function (_Alterer) {
	_inherits(TrimAlterer, _Alterer);

	function TrimAlterer() {
		_classCallCheck(this, TrimAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'trim';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	TrimAlterer.prototype.alter = function alter(resolved, options) {
		return resolved.trim();
	};

	return TrimAlterer;
}(_alterer2.default);

exports.default = TrimAlterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaW0uYWx0ZXJlci5qcyJdLCJuYW1lcyI6WyJUcmltQWx0ZXJlciIsIm5hbWUiLCJhY2NlcHRzIiwiYWx0ZXIiLCJyZXNvbHZlZCIsIm9wdGlvbnMiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLFc7OztBQUNwQix3QkFBYztBQUFBOztBQUFBLCtDQUNiLG1CQURhOztBQUViLFFBQUtDLElBQUwsR0FBWSxNQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsUUFBRCxDQUFmO0FBSGE7QUFJYjs7QUFFRDs7Ozs7Ozs7O3VCQU9BQyxLLGtCQUFNQyxRLEVBQVVDLE8sRUFBUztBQUN4QixTQUFPRCxTQUFTRSxJQUFULEVBQVA7QUFDQSxFOzs7OztrQkFoQm1CTixXIiwiZmlsZSI6InRyaW0uYWx0ZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbHRlcmVyIGZyb20gJy4vYWx0ZXJlci5qcydcblxuLyoqXG4gKiBUcmltIEFsdGVyZXJcbiAqIEFsdGVycyBzdHJpbmcgZGF0YSBieSB0cmltaW5nIGl0IG9mIHdoaXRlc3BhY2VcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG5hbWUsIGFjY2VwdHMsIG9wdGlvbnNcbiAqIG1ldGhvZDogZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpbUFsdGVyZXIgZXh0ZW5kcyBBbHRlcmVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSAndHJpbSc7XG5cdFx0dGhpcy5hY2NlcHRzID0gWydzdHJpbmcnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBhbHRlcigpXG5cdCAqIENoYW5nZXMgcmVzb2x2ZWQgZGF0YSBiYXNlZCBvbiBvcHRpb25zXG5cdCAqIEBwYXJhbSBtaXhlZCByZXNvbHZlZCBUaGUgZGF0YSB0byBjaGFuZ2Vcblx0ICogQHBhcmFtIG1peGVkIG9wdGlvbnMgQW55IG9wdGlvbnMgc2VudCBpbiB3aXRoIHRoZSBhbHRlcmVyXG5cdCAqIEByZXR1cm4gbWl4ZWQgQ2hhbmdlZCByZXNvbHZlZCBkYXRhXG5cdCAqL1xuXHRhbHRlcihyZXNvbHZlZCwgb3B0aW9ucykge1xuXHRcdHJldHVybiByZXNvbHZlZC50cmltKCk7XG5cdH1cbn1cbiJdfQ==
},{"./alterer.js":5}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindModelBinder = exports.RaziloBindInitBinder = exports.RaziloBindChangeBinder = exports.RaziloBindHoverBinder = exports.RaziloBindInputBinder = exports.RaziloBindClickBinder = exports.RaziloBindEventBinder = exports.RaziloBindCheckedBinder = exports.RaziloBindValueBinder = exports.RaziloBindElseBinder = exports.RaziloBindIfBinder = exports.RaziloBindSelectedBinder = exports.RaziloBindRequiredBinder = exports.RaziloBindDisabledBinder = exports.RaziloBindHrefBinder = exports.RaziloBindSrcBinder = exports.RaziloBindAttributesBinder = exports.RaziloBindClassBinder = exports.RaziloBindStyleBinder = exports.RaziloBindHideBinder = exports.RaziloBindShowBinder = exports.RaziloBindHtmlBinder = exports.RaziloBindTextBinder = exports.RaziloBindForBinder = exports.RaziloBindBinder = undefined;

var _binder = require('./src/binder.js');

var _binder2 = _interopRequireDefault(_binder);

var _forBinder = require('./src/for.binder.js');

var _forBinder2 = _interopRequireDefault(_forBinder);

var _textBinder = require('./src/text.binder.js');

var _textBinder2 = _interopRequireDefault(_textBinder);

var _htmlBinder = require('./src/html.binder.js');

var _htmlBinder2 = _interopRequireDefault(_htmlBinder);

var _showBinder = require('./src/show.binder.js');

var _showBinder2 = _interopRequireDefault(_showBinder);

var _hideBinder = require('./src/hide.binder.js');

var _hideBinder2 = _interopRequireDefault(_hideBinder);

var _styleBinder = require('./src/style.binder.js');

var _styleBinder2 = _interopRequireDefault(_styleBinder);

var _classBinder = require('./src/class.binder.js');

var _classBinder2 = _interopRequireDefault(_classBinder);

var _attributesBinder = require('./src/attributes.binder.js');

var _attributesBinder2 = _interopRequireDefault(_attributesBinder);

var _srcBinder = require('./src/src.binder.js');

var _srcBinder2 = _interopRequireDefault(_srcBinder);

var _hrefBinder = require('./src/href.binder.js');

var _hrefBinder2 = _interopRequireDefault(_hrefBinder);

var _disabledBinder = require('./src/disabled.binder.js');

var _disabledBinder2 = _interopRequireDefault(_disabledBinder);

var _requiredBinder = require('./src/required.binder.js');

var _requiredBinder2 = _interopRequireDefault(_requiredBinder);

var _selectedBinder = require('./src/selected.binder.js');

var _selectedBinder2 = _interopRequireDefault(_selectedBinder);

var _ifBinder = require('./src/if.binder.js');

var _ifBinder2 = _interopRequireDefault(_ifBinder);

var _elseBinder = require('./src/else.binder.js');

var _elseBinder2 = _interopRequireDefault(_elseBinder);

var _valueBinder = require('./src/value.binder.js');

var _valueBinder2 = _interopRequireDefault(_valueBinder);

var _checkedBinder = require('./src/checked.binder.js');

var _checkedBinder2 = _interopRequireDefault(_checkedBinder);

var _eventBinder = require('./src/event.binder.js');

var _eventBinder2 = _interopRequireDefault(_eventBinder);

var _clickBinder = require('./src/click.binder.js');

var _clickBinder2 = _interopRequireDefault(_clickBinder);

var _inputBinder = require('./src/input.binder.js');

var _inputBinder2 = _interopRequireDefault(_inputBinder);

var _hoverBinder = require('./src/hover.binder.js');

var _hoverBinder2 = _interopRequireDefault(_hoverBinder);

var _changeBinder = require('./src/change.binder.js');

var _changeBinder2 = _interopRequireDefault(_changeBinder);

var _initBinder = require('./src/init.binder.js');

var _initBinder2 = _interopRequireDefault(_initBinder);

var _modelBinder = require('./src/model.binder.js');

var _modelBinder2 = _interopRequireDefault(_modelBinder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindBinder = _binder2.default;
exports.RaziloBindForBinder = _forBinder2.default;
exports.RaziloBindTextBinder = _textBinder2.default;
exports.RaziloBindHtmlBinder = _htmlBinder2.default;
exports.RaziloBindShowBinder = _showBinder2.default;
exports.RaziloBindHideBinder = _hideBinder2.default;
exports.RaziloBindStyleBinder = _styleBinder2.default;
exports.RaziloBindClassBinder = _classBinder2.default;
exports.RaziloBindAttributesBinder = _attributesBinder2.default;
exports.RaziloBindSrcBinder = _srcBinder2.default;
exports.RaziloBindHrefBinder = _hrefBinder2.default;
exports.RaziloBindDisabledBinder = _disabledBinder2.default;
exports.RaziloBindRequiredBinder = _requiredBinder2.default;
exports.RaziloBindSelectedBinder = _selectedBinder2.default;
exports.RaziloBindIfBinder = _ifBinder2.default;
exports.RaziloBindElseBinder = _elseBinder2.default;
exports.RaziloBindValueBinder = _valueBinder2.default;
exports.RaziloBindCheckedBinder = _checkedBinder2.default;
exports.RaziloBindEventBinder = _eventBinder2.default;
exports.RaziloBindClickBinder = _clickBinder2.default;
exports.RaziloBindInputBinder = _inputBinder2.default;
exports.RaziloBindHoverBinder = _hoverBinder2.default;
exports.RaziloBindChangeBinder = _changeBinder2.default;
exports.RaziloBindInitBinder = _initBinder2.default;
exports.RaziloBindModelBinder = _modelBinder2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJhemlsb0JpbmRCaW5kZXIiLCJSYXppbG9CaW5kRm9yQmluZGVyIiwiUmF6aWxvQmluZFRleHRCaW5kZXIiLCJSYXppbG9CaW5kSHRtbEJpbmRlciIsIlJhemlsb0JpbmRTaG93QmluZGVyIiwiUmF6aWxvQmluZEhpZGVCaW5kZXIiLCJSYXppbG9CaW5kU3R5bGVCaW5kZXIiLCJSYXppbG9CaW5kQ2xhc3NCaW5kZXIiLCJSYXppbG9CaW5kQXR0cmlidXRlc0JpbmRlciIsIlJhemlsb0JpbmRTcmNCaW5kZXIiLCJSYXppbG9CaW5kSHJlZkJpbmRlciIsIlJhemlsb0JpbmREaXNhYmxlZEJpbmRlciIsIlJhemlsb0JpbmRSZXF1aXJlZEJpbmRlciIsIlJhemlsb0JpbmRTZWxlY3RlZEJpbmRlciIsIlJhemlsb0JpbmRJZkJpbmRlciIsIlJhemlsb0JpbmRFbHNlQmluZGVyIiwiUmF6aWxvQmluZFZhbHVlQmluZGVyIiwiUmF6aWxvQmluZENoZWNrZWRCaW5kZXIiLCJSYXppbG9CaW5kRXZlbnRCaW5kZXIiLCJSYXppbG9CaW5kQ2xpY2tCaW5kZXIiLCJSYXppbG9CaW5kSW5wdXRCaW5kZXIiLCJSYXppbG9CaW5kSG92ZXJCaW5kZXIiLCJSYXppbG9CaW5kQ2hhbmdlQmluZGVyIiwiUmF6aWxvQmluZEluaXRCaW5kZXIiLCJSYXppbG9CaW5kTW9kZWxCaW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUdXQSxnQjtRQUNHQyxtQjtRQUNDQyxvQjtRQUNBQyxvQjtRQUNBQyxvQjtRQUNBQyxvQjtRQUNDQyxxQjtRQUNBQyxxQjtRQUNLQywwQjtRQUNQQyxtQjtRQUNDQyxvQjtRQUNJQyx3QjtRQUNBQyx3QjtRQUNBQyx3QjtRQUNOQyxrQjtRQUNFQyxvQjtRQUNDQyxxQjtRQUNFQyx1QjtRQUNGQyxxQjtRQUNBQyxxQjtRQUNBQyxxQjtRQUNBQyxxQjtRQUNDQyxzQjtRQUNGQyxvQjtRQUNDQyxxQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaW5kZXIgZnJvbSAnLi9zcmMvYmluZGVyLmpzJ1xuaW1wb3J0IEZvckJpbmRlciBmcm9tICcuL3NyYy9mb3IuYmluZGVyLmpzJ1xuaW1wb3J0IFRleHRCaW5kZXIgZnJvbSAnLi9zcmMvdGV4dC5iaW5kZXIuanMnXG5pbXBvcnQgSHRtbEJpbmRlciBmcm9tICcuL3NyYy9odG1sLmJpbmRlci5qcydcbmltcG9ydCBTaG93QmluZGVyIGZyb20gJy4vc3JjL3Nob3cuYmluZGVyLmpzJ1xuaW1wb3J0IEhpZGVCaW5kZXIgZnJvbSAnLi9zcmMvaGlkZS5iaW5kZXIuanMnXG5pbXBvcnQgU3R5bGVCaW5kZXIgZnJvbSAnLi9zcmMvc3R5bGUuYmluZGVyLmpzJ1xuaW1wb3J0IENsYXNzQmluZGVyIGZyb20gJy4vc3JjL2NsYXNzLmJpbmRlci5qcydcbmltcG9ydCBBdHRyaWJ1dGVzQmluZGVyIGZyb20gJy4vc3JjL2F0dHJpYnV0ZXMuYmluZGVyLmpzJ1xuaW1wb3J0IFNyY0JpbmRlciBmcm9tICcuL3NyYy9zcmMuYmluZGVyLmpzJ1xuaW1wb3J0IEhyZWZCaW5kZXIgZnJvbSAnLi9zcmMvaHJlZi5iaW5kZXIuanMnXG5pbXBvcnQgRGlzYWJsZWRCaW5kZXIgZnJvbSAnLi9zcmMvZGlzYWJsZWQuYmluZGVyLmpzJ1xuaW1wb3J0IFJlcXVpcmVkQmluZGVyIGZyb20gJy4vc3JjL3JlcXVpcmVkLmJpbmRlci5qcydcbmltcG9ydCBTZWxlY3RlZEJpbmRlciBmcm9tICcuL3NyYy9zZWxlY3RlZC5iaW5kZXIuanMnXG5pbXBvcnQgSWZCaW5kZXIgZnJvbSAnLi9zcmMvaWYuYmluZGVyLmpzJ1xuaW1wb3J0IEVsc2VCaW5kZXIgZnJvbSAnLi9zcmMvZWxzZS5iaW5kZXIuanMnXG5pbXBvcnQgVmFsdWVCaW5kZXIgZnJvbSAnLi9zcmMvdmFsdWUuYmluZGVyLmpzJ1xuaW1wb3J0IENoZWNrZWRCaW5kZXIgZnJvbSAnLi9zcmMvY2hlY2tlZC5iaW5kZXIuanMnXG5pbXBvcnQgRXZlbnRCaW5kZXIgZnJvbSAnLi9zcmMvZXZlbnQuYmluZGVyLmpzJ1xuaW1wb3J0IENsaWNrQmluZGVyIGZyb20gJy4vc3JjL2NsaWNrLmJpbmRlci5qcydcbmltcG9ydCBJbnB1dEJpbmRlciBmcm9tICcuL3NyYy9pbnB1dC5iaW5kZXIuanMnXG5pbXBvcnQgSG92ZXJCaW5kZXIgZnJvbSAnLi9zcmMvaG92ZXIuYmluZGVyLmpzJ1xuaW1wb3J0IENoYW5nZUJpbmRlciBmcm9tICcuL3NyYy9jaGFuZ2UuYmluZGVyLmpzJ1xuaW1wb3J0IEluaXRCaW5kZXIgZnJvbSAnLi9zcmMvaW5pdC5iaW5kZXIuanMnXG5pbXBvcnQgTW9kZWxCaW5kZXIgZnJvbSAnLi9zcmMvbW9kZWwuYmluZGVyLmpzJ1xuXG5leHBvcnQge1xuXHRCaW5kZXIgYXMgUmF6aWxvQmluZEJpbmRlcixcblx0Rm9yQmluZGVyIGFzIFJhemlsb0JpbmRGb3JCaW5kZXIsXG5cdFRleHRCaW5kZXIgYXMgUmF6aWxvQmluZFRleHRCaW5kZXIsXG5cdEh0bWxCaW5kZXIgYXMgUmF6aWxvQmluZEh0bWxCaW5kZXIsXG5cdFNob3dCaW5kZXIgYXMgUmF6aWxvQmluZFNob3dCaW5kZXIsXG5cdEhpZGVCaW5kZXIgYXMgUmF6aWxvQmluZEhpZGVCaW5kZXIsXG5cdFN0eWxlQmluZGVyIGFzIFJhemlsb0JpbmRTdHlsZUJpbmRlcixcblx0Q2xhc3NCaW5kZXIgYXMgUmF6aWxvQmluZENsYXNzQmluZGVyLFxuXHRBdHRyaWJ1dGVzQmluZGVyIGFzIFJhemlsb0JpbmRBdHRyaWJ1dGVzQmluZGVyLFxuXHRTcmNCaW5kZXIgYXMgUmF6aWxvQmluZFNyY0JpbmRlcixcblx0SHJlZkJpbmRlciBhcyBSYXppbG9CaW5kSHJlZkJpbmRlcixcblx0RGlzYWJsZWRCaW5kZXIgYXMgUmF6aWxvQmluZERpc2FibGVkQmluZGVyLFxuXHRSZXF1aXJlZEJpbmRlciBhcyBSYXppbG9CaW5kUmVxdWlyZWRCaW5kZXIsXG5cdFNlbGVjdGVkQmluZGVyIGFzIFJhemlsb0JpbmRTZWxlY3RlZEJpbmRlcixcblx0SWZCaW5kZXIgYXMgUmF6aWxvQmluZElmQmluZGVyLFxuXHRFbHNlQmluZGVyIGFzIFJhemlsb0JpbmRFbHNlQmluZGVyLFxuXHRWYWx1ZUJpbmRlciBhcyBSYXppbG9CaW5kVmFsdWVCaW5kZXIsXG5cdENoZWNrZWRCaW5kZXIgYXMgUmF6aWxvQmluZENoZWNrZWRCaW5kZXIsXG5cdEV2ZW50QmluZGVyIGFzIFJhemlsb0JpbmRFdmVudEJpbmRlcixcblx0Q2xpY2tCaW5kZXIgYXMgUmF6aWxvQmluZENsaWNrQmluZGVyLFxuXHRJbnB1dEJpbmRlciBhcyBSYXppbG9CaW5kSW5wdXRCaW5kZXIsXG5cdEhvdmVyQmluZGVyIGFzIFJhemlsb0JpbmRIb3ZlckJpbmRlcixcblx0Q2hhbmdlQmluZGVyIGFzIFJhemlsb0JpbmRDaGFuZ2VCaW5kZXIsXG5cdEluaXRCaW5kZXIgYXMgUmF6aWxvQmluZEluaXRCaW5kZXIsXG5cdE1vZGVsQmluZGVyIGFzIFJhemlsb0JpbmRNb2RlbEJpbmRlclxufVxuIl19
},{"./src/attributes.binder.js":16,"./src/binder.js":17,"./src/change.binder.js":18,"./src/checked.binder.js":19,"./src/class.binder.js":20,"./src/click.binder.js":21,"./src/disabled.binder.js":22,"./src/else.binder.js":23,"./src/event.binder.js":24,"./src/for.binder.js":25,"./src/hide.binder.js":26,"./src/hover.binder.js":27,"./src/href.binder.js":28,"./src/html.binder.js":29,"./src/if.binder.js":30,"./src/init.binder.js":31,"./src/input.binder.js":32,"./src/model.binder.js":33,"./src/required.binder.js":34,"./src/selected.binder.js":35,"./src/show.binder.js":36,"./src/src.binder.js":37,"./src/style.binder.js":38,"./src/text.binder.js":39,"./src/value.binder.js":40}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Attributes Binder
 * Alters elements attributes based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var AttributesBinder = function (_Binder) {
	_inherits(AttributesBinder, _Binder);

	function AttributesBinder(options, traverser) {
		_classCallCheck(this, AttributesBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'attributes';
		_this.accepts = ['property', 'phantom', 'object', 'array', 'string', 'method'];
		_this.attributes = {};
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	AttributesBinder.prototype.bind = function bind() {
		// add new and update existing attributes
		var attributes = {};
		var atts = typeof this.resolver.resolved === 'string' ? [this.resolver.resolved.trim()] : this.resolver.resolved;
		for (var a in atts) {
			var attr = isNaN(a) ? a.trim() : atts[a].trim();
			var val = isNaN(a) ? atts[a] : true;
			attributes[attr] = val;

			if (typeof val === 'boolean') {
				if (!!val) this.node.setAttribute(attr, '');else this.node.removeAttribute(attr, '');
			} else this.node.setAttribute(attr, val);
		}

		// remove any attributes that have gone
		for (var b in this.attributes) {
			if (!!attributes[b]) continue;
			this.node.removeAttribute(b);
		}

		// update cache
		this.attributes = attributes;
	};

	return AttributesBinder;
}(_binder2.default);

exports.default = AttributesBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMuYmluZGVyLmpzIl0sIm5hbWVzIjpbIkF0dHJpYnV0ZXNCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJhdHRyaWJ1dGVzIiwiYmluZCIsImF0dHMiLCJyZXNvbHZlciIsInJlc29sdmVkIiwidHJpbSIsImEiLCJhdHRyIiwiaXNOYU4iLCJ2YWwiLCJub2RlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLGdCOzs7QUFDcEIsMkJBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksWUFBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFFBQXhCLEVBQWtDLE9BQWxDLEVBQTJDLFFBQTNDLEVBQXFELFFBQXJELENBQWY7QUFDQSxRQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBTitCO0FBTy9COztBQUVEOzs7Ozs7OzRCQUtBQyxJLG1CQUFPO0FBQ047QUFDQSxNQUFJRCxhQUFhLEVBQWpCO0FBQ0EsTUFBSUUsT0FBTyxPQUFPLEtBQUtDLFFBQUwsQ0FBY0MsUUFBckIsS0FBa0MsUUFBbEMsR0FBNkMsQ0FBQyxLQUFLRCxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLElBQXZCLEVBQUQsQ0FBN0MsR0FBK0UsS0FBS0YsUUFBTCxDQUFjQyxRQUF4RztBQUNBLE9BQUssSUFBSUUsQ0FBVCxJQUFjSixJQUFkLEVBQ0E7QUFDQyxPQUFJSyxPQUFPQyxNQUFNRixDQUFOLElBQVdBLEVBQUVELElBQUYsRUFBWCxHQUFzQkgsS0FBS0ksQ0FBTCxFQUFRRCxJQUFSLEVBQWpDO0FBQ0EsT0FBSUksTUFBTUQsTUFBTUYsQ0FBTixJQUFXSixLQUFLSSxDQUFMLENBQVgsR0FBcUIsSUFBL0I7QUFDQU4sY0FBV08sSUFBWCxJQUFtQkUsR0FBbkI7O0FBRUEsT0FBSSxPQUFPQSxHQUFQLEtBQWUsU0FBbkIsRUFBOEI7QUFDN0IsUUFBSSxDQUFDLENBQUNBLEdBQU4sRUFBVyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJKLElBQXZCLEVBQTZCLEVBQTdCLEVBQVgsS0FDSyxLQUFLRyxJQUFMLENBQVVFLGVBQVYsQ0FBMEJMLElBQTFCLEVBQWdDLEVBQWhDO0FBQ0wsSUFIRCxNQUlLLEtBQUtHLElBQUwsQ0FBVUMsWUFBVixDQUF1QkosSUFBdkIsRUFBNkJFLEdBQTdCO0FBQ0w7O0FBRUQ7QUFDQSxPQUFLLElBQUlJLENBQVQsSUFBYyxLQUFLYixVQUFuQixFQUErQjtBQUM5QixPQUFJLENBQUMsQ0FBQ0EsV0FBV2EsQ0FBWCxDQUFOLEVBQXFCO0FBQ3JCLFFBQUtILElBQUwsQ0FBVUUsZUFBVixDQUEwQkMsQ0FBMUI7QUFDQTs7QUFFRDtBQUNBLE9BQUtiLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsRTs7Ozs7a0JBeENtQkwsZ0IiLCJmaWxlIjoiYXR0cmlidXRlcy5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIEF0dHJpYnV0ZXMgQmluZGVyXG4gKiBBbHRlcnMgZWxlbWVudHMgYXR0cmlidXRlcyBiYXNlZCBvbiByZXNvbHZlZCBkYXRhIGNvbnRlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlc0JpbmRlciBleHRlbmRzIEJpbmRlciB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHRyYXZlcnNlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnRyYXZlcnNlciA9IHRyYXZlcnNlcjtcblx0XHR0aGlzLm5hbWUgPSAnYXR0cmlidXRlcyc7XG5cdFx0dGhpcy5hY2NlcHRzID0gWydwcm9wZXJ0eScsICdwaGFudG9tJywgJ29iamVjdCcsICdhcnJheScsICdzdHJpbmcnLCAnbWV0aG9kJ107XG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogYmluZCgpXG5cdCAqIEJpbmQgdGhlIHJlc29sdmVkIGRhdGEgYnkgYXBwbHlpbmcgc3R5bGVzIHRvIG5vZGVcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQoKSB7XG5cdFx0Ly8gYWRkIG5ldyBhbmQgdXBkYXRlIGV4aXN0aW5nIGF0dHJpYnV0ZXNcblx0XHR2YXIgYXR0cmlidXRlcyA9IHt9O1xuXHRcdHZhciBhdHRzID0gdHlwZW9mIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQgPT09ICdzdHJpbmcnID8gW3RoaXMucmVzb2x2ZXIucmVzb2x2ZWQudHJpbSgpXSA6IHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQ7XG5cdFx0Zm9yICh2YXIgYSBpbiBhdHRzKVxuXHRcdHtcblx0XHRcdGxldCBhdHRyID0gaXNOYU4oYSkgPyBhLnRyaW0oKSA6IGF0dHNbYV0udHJpbSgpO1xuXHRcdFx0bGV0IHZhbCA9IGlzTmFOKGEpID8gYXR0c1thXSA6IHRydWU7XG5cdFx0XHRhdHRyaWJ1dGVzW2F0dHJdID0gdmFsO1xuXG5cdFx0XHRpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGlmICghIXZhbCkgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZShhdHRyLCAnJyk7XG5cdFx0XHRcdGVsc2UgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgYW55IGF0dHJpYnV0ZXMgdGhhdCBoYXZlIGdvbmVcblx0XHRmb3IgKHZhciBiIGluIHRoaXMuYXR0cmlidXRlcykge1xuXHRcdFx0aWYgKCEhYXR0cmlidXRlc1tiXSkgY29udGludWU7XG5cdFx0XHR0aGlzLm5vZGUucmVtb3ZlQXR0cmlidXRlKGIpO1xuXHRcdH1cblxuXHRcdC8vIHVwZGF0ZSBjYWNoZVxuXHRcdHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdH1cbn1cbiJdfQ==
},{"./binder.js":17}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _razilobindCore = require('razilobind-core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Binder
 * Generic binder methods used accross all binders
 */
var Binder = function () {
	function Binder() {
		_classCallCheck(this, Binder);

		this.id = Math.random().toString(36).slice(2) + Date.now(); // create unique id for binder
		this.options = undefined;
		this.traverser = undefined;
		this.name = undefined;
		this.observables = [];
		this.accepts = [];
	}

	Binder.prototype.setup = function setup(options, traverser) {
		this.options = options;
		this.traverser = traverser;
	};

	/**
  * detect()
  * Basic detection of an element by its attribute, setting resolvable
  * @param html-node node The node to detect any bindables on
  * @return bool True on bindable, false on fail
  */


	Binder.prototype.detect = function detect(node) {
		// allow element nodes only
		if (node.nodeType !== 1) return false;

		this.resolvable = node.hasAttribute(this.options.prefix + 'bind-' + this.name) ? node.getAttribute(this.options.prefix + 'bind-' + this.name) : undefined;
		this.configurable = node.hasAttribute(this.options.prefix + 'config-' + this.name) ? node.getAttribute(this.options.prefix + 'config-' + this.name) : undefined;
		this.alterable = node.hasAttribute(this.options.prefix + 'alter-' + this.name) ? node.getAttribute(this.options.prefix + 'alter-' + this.name) : undefined;

		if (!this.resolvable) return false;

		this.node = node;
		return true;
	};

	/**
  * build()
  * Build a bindable object and try to resolve data, if resolved creates initial bind too
  * @param object model The model to attempt to build the binder against
  * @return Binder The binder of specific type
  */


	Binder.prototype.build = function build(model) {
		// set bindable data
		this.priority = 1;
		this.resolver = _razilobindCore.RaziloBindCoreDetector.resolver(this.resolvable, this.node);
		this.alterer = _razilobindCore.RaziloBindCoreDetector.resolver(this.alterable, this.node);
		this.config = _razilobindCore.RaziloBindCoreDetector.resolver(this.configurable, this.node);
		this.model = model;

		// resolve data to actuals and observables if of correct type or no types set
		if (this.resolver && (this.accepts.length === 0 || this.accepts.indexOf(this.resolver.name) >= 0)) this.update();

		// collate binders
		if (this.resolver.observers) for (var i = 0; i < this.resolver.observers.length; i++) {
			if (this.observables.indexOf(this.resolver.observers[i]) < 0) this.observables.push(this.resolver.observers[i]);
		}if (this.alterer.observers) for (var _i = 0; _i < this.alterer.observers.length; _i++) {
			if (this.observables.indexOf(this.alterer.observers[_i]) < 0) this.observables.push(this.alterer.observers[_i]);
		}if (this.config.observers) for (var _i2 = 0; _i2 < this.config.observers.length; _i2++) {
			if (this.observables.indexOf(this.config.observers[_i2]) < 0) this.observables.push(this.config.observers[_i2]);
		}return this;
	};

	/**
  * update()
  * updates observers (as they can change if using properties as keys) and issue bind in child
  * @param object oldValue The old value once object change detect
  * @param string path The path that was affected (or the key if adding or removing a value to/from an object)
  * @param string action The action to perform, 'update', 'array-add', 'array-remove', 'object-add', 'object-remove'
  * @param object key The key name if an object value is added or removed
  */


	Binder.prototype.update = function update(oldValue, path, action, key) {
		// resolve data, bind to element from child class
		this.resolver.resolve(this.model, this.delayMethod === true ? true : false);
		var newValue = this.resolver.resolved;

		if (this.config) this.config.resolve(this.model);
		if (this.alterer) {
			this.alterer.resolve(this.model);
			this.resolver.resolved = _razilobindCore.RaziloBindCoreDetector.alterers(this.alterer.resolved, this.resolver.resolved);
		}

		this.bind(oldValue, path, action, key);

		if (!newValue) return;

		// garbage collection on observables map which is only thing holding ref to binder (so binder will be released naturally)
		if (action === 'object-remove') delete this.traverser.observables[path + '.' + key];else if (action === 'array-remove') for (var i = newValue.length - 1; i < oldValue; i++) {
			delete this.traverser.observables[path + '.' + i];
		}
	};

	return Binder;
}();

exports.default = Binder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRlci5qcyJdLCJuYW1lcyI6WyJCaW5kZXIiLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiRGF0ZSIsIm5vdyIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwib2JzZXJ2YWJsZXMiLCJhY2NlcHRzIiwic2V0dXAiLCJkZXRlY3QiLCJub2RlIiwibm9kZVR5cGUiLCJyZXNvbHZhYmxlIiwiaGFzQXR0cmlidXRlIiwicHJlZml4IiwiZ2V0QXR0cmlidXRlIiwiY29uZmlndXJhYmxlIiwiYWx0ZXJhYmxlIiwiYnVpbGQiLCJtb2RlbCIsInByaW9yaXR5IiwicmVzb2x2ZXIiLCJhbHRlcmVyIiwiY29uZmlnIiwibGVuZ3RoIiwiaW5kZXhPZiIsInVwZGF0ZSIsIm9ic2VydmVycyIsImkiLCJwdXNoIiwib2xkVmFsdWUiLCJwYXRoIiwiYWN0aW9uIiwia2V5IiwicmVzb2x2ZSIsImRlbGF5TWV0aG9kIiwibmV3VmFsdWUiLCJyZXNvbHZlZCIsImFsdGVyZXJzIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBRUE7Ozs7SUFJcUJBLE07QUFDcEIsbUJBQWM7QUFBQTs7QUFDYixPQUFLQyxFQUFMLEdBQVVDLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsS0FBM0IsQ0FBaUMsQ0FBakMsSUFBc0NDLEtBQUtDLEdBQUwsRUFBaEQsQ0FEYSxDQUMrQztBQUM1RCxPQUFLQyxPQUFMLEdBQWVDLFNBQWY7QUFDQSxPQUFLQyxTQUFMLEdBQWlCRCxTQUFqQjtBQUNBLE9BQUtFLElBQUwsR0FBWUYsU0FBWjtBQUNBLE9BQUtHLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxPQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBOztrQkFFREMsSyxrQkFBTU4sTyxFQUFTRSxTLEVBQVc7QUFDekIsT0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0UsU0FBTCxHQUFpQkEsU0FBakI7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RUFBa0NDLEdBQWxDOztBQUVBLE1BQUksQ0FBQ0csUUFBTCxFQUFlOztBQUVmO0FBQ0EsTUFBSUosV0FBVyxlQUFmLEVBQWdDLE9BQU8sS0FBSzVCLFNBQUwsQ0FBZUUsV0FBZixDQUEyQnlCLE9BQU8sR0FBUCxHQUFhRSxHQUF4QyxDQUFQLENBQWhDLEtBQ0ssSUFBSUQsV0FBVyxjQUFmLEVBQStCLEtBQUssSUFBSUosSUFBSVEsU0FBU1osTUFBVCxHQUFpQixDQUE5QixFQUFpQ0ksSUFBSUUsUUFBckMsRUFBK0NGLEdBQS9DO0FBQW9ELFVBQU8sS0FBS3hCLFNBQUwsQ0FBZUUsV0FBZixDQUEyQnlCLE9BQU8sR0FBUCxHQUFhSCxDQUF4QyxDQUFQO0FBQXBEO0FBQ3BDLEU7Ozs7O2tCQXZGbUJsQyxNIiwiZmlsZSI6ImJpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmF6aWxvQmluZENvcmVEZXRlY3Rvcn0gZnJvbSAncmF6aWxvYmluZC1jb3JlJ1xuXG4vKipcbiAqIEJpbmRlclxuICogR2VuZXJpYyBiaW5kZXIgbWV0aG9kcyB1c2VkIGFjY3Jvc3MgYWxsIGJpbmRlcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpICsgRGF0ZS5ub3coKTsgLy8gY3JlYXRlIHVuaXF1ZSBpZCBmb3IgYmluZGVyXG5cdFx0dGhpcy5vcHRpb25zID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLm9ic2VydmFibGVzID0gW107XG5cdFx0dGhpcy5hY2NlcHRzID0gW107XG5cdH1cblxuXHRzZXR1cChvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHR9XG5cblx0LyoqXG5cdCAqIGRldGVjdCgpXG5cdCAqIEJhc2ljIGRldGVjdGlvbiBvZiBhbiBlbGVtZW50IGJ5IGl0cyBhdHRyaWJ1dGUsIHNldHRpbmcgcmVzb2x2YWJsZVxuXHQgKiBAcGFyYW0gaHRtbC1ub2RlIG5vZGUgVGhlIG5vZGUgdG8gZGV0ZWN0IGFueSBiaW5kYWJsZXMgb25cblx0ICogQHJldHVybiBib29sIFRydWUgb24gYmluZGFibGUsIGZhbHNlIG9uIGZhaWxcblx0ICovXG5cdGRldGVjdChub2RlKSB7XG5cdFx0Ly8gYWxsb3cgZWxlbWVudCBub2RlcyBvbmx5XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMucmVzb2x2YWJsZSA9IG5vZGUuaGFzQXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnYmluZC0nICsgdGhpcy5uYW1lKSA/IG5vZGUuZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnYmluZC0nICsgdGhpcy5uYW1lKSA6IHVuZGVmaW5lZDtcblx0XHR0aGlzLmNvbmZpZ3VyYWJsZSA9IG5vZGUuaGFzQXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnY29uZmlnLScgKyB0aGlzLm5hbWUpID8gbm9kZS5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdjb25maWctJyArIHRoaXMubmFtZSkgOiB1bmRlZmluZWQ7XG5cdFx0dGhpcy5hbHRlcmFibGUgPSBub2RlLmhhc0F0dHJpYnV0ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsgJ2FsdGVyLScgKyB0aGlzLm5hbWUpID8gbm9kZS5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdhbHRlci0nICsgdGhpcy5uYW1lKSA6IHVuZGVmaW5lZDtcblxuXHRcdGlmICghdGhpcy5yZXNvbHZhYmxlKSByZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIGJ1aWxkKClcblx0ICogQnVpbGQgYSBiaW5kYWJsZSBvYmplY3QgYW5kIHRyeSB0byByZXNvbHZlIGRhdGEsIGlmIHJlc29sdmVkIGNyZWF0ZXMgaW5pdGlhbCBiaW5kIHRvb1xuXHQgKiBAcGFyYW0gb2JqZWN0IG1vZGVsIFRoZSBtb2RlbCB0byBhdHRlbXB0IHRvIGJ1aWxkIHRoZSBiaW5kZXIgYWdhaW5zdFxuXHQgKiBAcmV0dXJuIEJpbmRlciBUaGUgYmluZGVyIG9mIHNwZWNpZmljIHR5cGVcblx0ICovXG5cdGJ1aWxkKG1vZGVsKSB7XG5cdFx0Ly8gc2V0IGJpbmRhYmxlIGRhdGFcblx0XHR0aGlzLnByaW9yaXR5ID0gMTtcblx0XHR0aGlzLnJlc29sdmVyID0gUmF6aWxvQmluZENvcmVEZXRlY3Rvci5yZXNvbHZlcih0aGlzLnJlc29sdmFibGUsIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5hbHRlcmVyID0gUmF6aWxvQmluZENvcmVEZXRlY3Rvci5yZXNvbHZlcih0aGlzLmFsdGVyYWJsZSwgdGhpcy5ub2RlKTtcblx0XHR0aGlzLmNvbmZpZyA9IFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IucmVzb2x2ZXIodGhpcy5jb25maWd1cmFibGUsIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsO1xuXG5cdFx0Ly8gcmVzb2x2ZSBkYXRhIHRvIGFjdHVhbHMgYW5kIG9ic2VydmFibGVzIGlmIG9mIGNvcnJlY3QgdHlwZSBvciBubyB0eXBlcyBzZXRcblx0XHRpZiAodGhpcy5yZXNvbHZlciAmJiAodGhpcy5hY2NlcHRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmFjY2VwdHMuaW5kZXhPZih0aGlzLnJlc29sdmVyLm5hbWUpID49IDApKSB0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0Ly8gY29sbGF0ZSBiaW5kZXJzXG5cdCAgICBpZiAodGhpcy5yZXNvbHZlci5vYnNlcnZlcnMpIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXNvbHZlci5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIGlmICh0aGlzLm9ic2VydmFibGVzLmluZGV4T2YodGhpcy5yZXNvbHZlci5vYnNlcnZlcnNbaV0pIDwgMCkgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKHRoaXMucmVzb2x2ZXIub2JzZXJ2ZXJzW2ldKTtcblx0ICAgIGlmICh0aGlzLmFsdGVyZXIub2JzZXJ2ZXJzKSBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWx0ZXJlci5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIGlmICh0aGlzLm9ic2VydmFibGVzLmluZGV4T2YodGhpcy5hbHRlcmVyLm9ic2VydmVyc1tpXSkgPCAwKSB0aGlzLm9ic2VydmFibGVzLnB1c2godGhpcy5hbHRlcmVyLm9ic2VydmVyc1tpXSk7XG5cdCAgICBpZiAodGhpcy5jb25maWcub2JzZXJ2ZXJzKSBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLm9ic2VydmVycy5sZW5ndGg7IGkrKykgaWYgKHRoaXMub2JzZXJ2YWJsZXMuaW5kZXhPZih0aGlzLmNvbmZpZy5vYnNlcnZlcnNbaV0pIDwgMCkgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKHRoaXMuY29uZmlnLm9ic2VydmVyc1tpXSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiB1cGRhdGUoKVxuXHQgKiB1cGRhdGVzIG9ic2VydmVycyAoYXMgdGhleSBjYW4gY2hhbmdlIGlmIHVzaW5nIHByb3BlcnRpZXMgYXMga2V5cykgYW5kIGlzc3VlIGJpbmQgaW4gY2hpbGRcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9uY2Ugb2JqZWN0IGNoYW5nZSBkZXRlY3Rcblx0ICogQHBhcmFtIHN0cmluZyBwYXRoIFRoZSBwYXRoIHRoYXQgd2FzIGFmZmVjdGVkIChvciB0aGUga2V5IGlmIGFkZGluZyBvciByZW1vdmluZyBhIHZhbHVlIHRvL2Zyb20gYW4gb2JqZWN0KVxuXHQgKiBAcGFyYW0gc3RyaW5nIGFjdGlvbiBUaGUgYWN0aW9uIHRvIHBlcmZvcm0sICd1cGRhdGUnLCAnYXJyYXktYWRkJywgJ2FycmF5LXJlbW92ZScsICdvYmplY3QtYWRkJywgJ29iamVjdC1yZW1vdmUnXG5cdCAqIEBwYXJhbSBvYmplY3Qga2V5IFRoZSBrZXkgbmFtZSBpZiBhbiBvYmplY3QgdmFsdWUgaXMgYWRkZWQgb3IgcmVtb3ZlZFxuXHQgKi9cblx0dXBkYXRlKG9sZFZhbHVlLCBwYXRoLCBhY3Rpb24sIGtleSkge1xuXHRcdC8vIHJlc29sdmUgZGF0YSwgYmluZCB0byBlbGVtZW50IGZyb20gY2hpbGQgY2xhc3Ncblx0XHR0aGlzLnJlc29sdmVyLnJlc29sdmUodGhpcy5tb2RlbCwgdGhpcy5kZWxheU1ldGhvZCA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSk7XG5cdFx0dmFyIG5ld1ZhbHVlID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlZDtcblxuXHRcdGlmICh0aGlzLmNvbmZpZykgdGhpcy5jb25maWcucmVzb2x2ZSh0aGlzLm1vZGVsKTtcblx0XHRpZiAodGhpcy5hbHRlcmVyKVxuXHRcdHtcblx0XHRcdHRoaXMuYWx0ZXJlci5yZXNvbHZlKHRoaXMubW9kZWwpO1xuXHRcdFx0dGhpcy5yZXNvbHZlci5yZXNvbHZlZCA9IFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IuYWx0ZXJlcnModGhpcy5hbHRlcmVyLnJlc29sdmVkLCB0aGlzLnJlc29sdmVyLnJlc29sdmVkKTtcblx0XHR9XG5cblx0XHR0aGlzLmJpbmQob2xkVmFsdWUsIHBhdGgsIGFjdGlvbiwga2V5KTtcblxuXHRcdGlmICghbmV3VmFsdWUpIHJldHVybjtcblxuXHRcdC8vIGdhcmJhZ2UgY29sbGVjdGlvbiBvbiBvYnNlcnZhYmxlcyBtYXAgd2hpY2ggaXMgb25seSB0aGluZyBob2xkaW5nIHJlZiB0byBiaW5kZXIgKHNvIGJpbmRlciB3aWxsIGJlIHJlbGVhc2VkIG5hdHVyYWxseSlcblx0XHRpZiAoYWN0aW9uID09PSAnb2JqZWN0LXJlbW92ZScpIGRlbGV0ZSB0aGlzLnRyYXZlcnNlci5vYnNlcnZhYmxlc1twYXRoICsgJy4nICsga2V5XTtcblx0XHRlbHNlIGlmIChhY3Rpb24gPT09ICdhcnJheS1yZW1vdmUnKVx0Zm9yICh2YXIgaSA9IG5ld1ZhbHVlLmxlbmd0aCAtMTsgaSA8IG9sZFZhbHVlOyBpKyspIGRlbGV0ZSB0aGlzLnRyYXZlcnNlci5vYnNlcnZhYmxlc1twYXRoICsgJy4nICsgaV07XG5cdH1cbn1cbiJdfQ==
},{"razilobind-core":41}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Change Binder
 * Bind methods to element events
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ChangeBinder = function (_Binder) {
	_inherits(ChangeBinder, _Binder);

	function ChangeBinder(options, traverser) {
		_classCallCheck(this, ChangeBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'change';
		_this.delayMethod = true;
		_this.accepts = ['method'];
		_this.event;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ChangeBinder.prototype.bind = function bind(object) {
		if (typeof this.resolver.resolved.method !== 'function') return;

		if (!this.event) {
			this.event = 'change';
			this.node.addEventListener('change', this.listener.bind(this), false);
		}
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	ChangeBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		var values = [event].concat(this.resolver.resolved.values);
		this.resolver.resolved.method.apply(this.model, values);
	};

	return ChangeBinder;
}(_binder2.default);

exports.default = ChangeBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS5iaW5kZXIuanMiXSwibmFtZXMiOlsiQ2hhbmdlQmluZGVyIiwib3B0aW9ucyIsInRyYXZlcnNlciIsIm5hbWUiLCJkZWxheU1ldGhvZCIsImFjY2VwdHMiLCJldmVudCIsImJpbmQiLCJvYmplY3QiLCJyZXNvbHZlciIsInJlc29sdmVkIiwibWV0aG9kIiwibm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlcyIsImNvbmNhdCIsImFwcGx5IiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV3FCQSxZOzs7QUFDcEIsdUJBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksUUFBWjtBQUNBLFFBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxRQUFELENBQWY7QUFDQSxRQUFLQyxLQUFMO0FBUCtCO0FBUS9COztBQUVEOzs7Ozs7O3dCQUtBQyxJLGlCQUFLQyxNLEVBQVE7QUFDWixNQUFJLE9BQU8sS0FBS0MsUUFBTCxDQUFjQyxRQUFkLENBQXVCQyxNQUE5QixLQUF5QyxVQUE3QyxFQUF5RDs7QUFFekQsTUFBSSxDQUFDLEtBQUtMLEtBQVYsRUFBaUI7QUFDaEIsUUFBS0EsS0FBTCxHQUFhLFFBQWI7QUFDQSxRQUFLTSxJQUFMLENBQVVDLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtDLFFBQUwsQ0FBY1AsSUFBZCxDQUFtQixJQUFuQixDQUFyQyxFQUErRCxLQUEvRDtBQUNBO0FBQ0QsRTs7QUFFRDs7Ozs7Ozt3QkFLQU8sUSxxQkFBU1IsSyxFQUFPO0FBQ2ZBLFFBQU1TLGVBQU47QUFDQSxNQUFJQyxTQUFTLENBQUNWLEtBQUQsRUFBUVcsTUFBUixDQUFlLEtBQUtSLFFBQUwsQ0FBY0MsUUFBZCxDQUF1Qk0sTUFBdEMsQ0FBYjtBQUNBLE9BQUtQLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkMsTUFBdkIsQ0FBOEJPLEtBQTlCLENBQW9DLEtBQUtDLEtBQXpDLEVBQWdESCxNQUFoRDtBQUNBLEU7Ozs7O2tCQWxDbUJoQixZIiwiZmlsZSI6ImNoYW5nZS5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIENoYW5nZSBCaW5kZXJcbiAqIEJpbmQgbWV0aG9kcyB0byBlbGVtZW50IGV2ZW50c1xuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUJpbmRlciBleHRlbmRzIEJpbmRlciB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHRyYXZlcnNlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnRyYXZlcnNlciA9IHRyYXZlcnNlcjtcblx0XHR0aGlzLm5hbWUgPSAnY2hhbmdlJztcblx0XHR0aGlzLmRlbGF5TWV0aG9kID0gdHJ1ZTtcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ21ldGhvZCddO1xuXHRcdHRoaXMuZXZlbnQ7XG5cdH1cblxuXHQvKipcblx0ICogYmluZCgpXG5cdCAqIEJpbmQgdGhlIHJlc29sdmVkIGRhdGEgYnkgYXBwbHlpbmcgc3R5bGVzIHRvIG5vZGVcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQob2JqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJlc29sdmVyLnJlc29sdmVkLm1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG5cdFx0aWYgKCF0aGlzLmV2ZW50KSB7XG5cdFx0XHR0aGlzLmV2ZW50ID0gJ2NoYW5nZSc7XG5cdFx0XHR0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5saXN0ZW5lci5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIGxpc3RlbmVyKClcblx0ICogQ2F0Y2ggZXZlbnRzIG9uIG5vZGVzIGFuZCBydW4gZnVuY3Rpb25zIHNldC5cblx0ICogQHBhcmFtIGV2ZW50IGV2ZW50IFRoZSBldmVudCB0aGF0IHRyaWdnZXJzIHRoZSB1cGRhdGVcblx0ICovXG5cdGxpc3RlbmVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0bGV0IHZhbHVlcyA9IFtldmVudF0uY29uY2F0KHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQudmFsdWVzKTtcblx0XHR0aGlzLnJlc29sdmVyLnJlc29sdmVkLm1ldGhvZC5hcHBseSh0aGlzLm1vZGVsLCB2YWx1ZXMpO1xuXHR9XG59XG4iXX0=
},{"./binder.js":17}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checked Binder
 * Binds resolved data to value attribute of elements such as input, textarea, select etc...
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var CheckedBinder = function (_Binder) {
	_inherits(CheckedBinder, _Binder);

	function CheckedBinder(options, traverser) {
		_classCallCheck(this, CheckedBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'checked';
		_this.accepts = ['property', 'phantom', 'method'];
		_this.event;
		_this.type;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	CheckedBinder.prototype.bind = function bind(oldValue, path) {
		// catch duplicate fires from ui
		if (this.node.value === this.resolver.resolved) return;

		// set value
		this.type = this.node.getAttribute('type');
		this.setValue();

		// should we watch for changes?
		if (!!this.event || this.resolver.observers.length < 1) return;

		// add event listener to node
		this.event = 'change';
		this.node.addEventListener(this.event, this.listener.bind(this), false);
	};

	/**
  * listener()
  * Update model when an element interaction updates its value
  * @param event event The event that triggers the update
  */


	CheckedBinder.prototype.listener = function listener(event) {
		event.stopPropagation();

		// last observer is the full observed path to resolver (others before can make up sub properties)
		var path = this.resolver.observers[this.resolver.observers.length - 1].split('.');
		var end = path.pop();

		// get parent object/array
		var model = this.model;
		for (var i = 0; i < path.length; i++) {
			model = model[path[i]];
		} // change model
		if (this.node.hasAttribute('type') && this.type == 'radio') model[end] = this.node.value;else model[end] = !!this.node.checked ? true : false;
	};

	/**
  * setValue()
  * Set a node value and attribute to ensure changes can be picked up by attribute watchers
  */


	CheckedBinder.prototype.setValue = function setValue() {
		if (this.node.hasAttribute('type') && this.type == 'radio') {
			// radio
			this.node.checked = this.node.value == this.resolver.resolved ? true : false;
			if (this.node.value == this.resolver.resolved) this.node.setAttribute('checked', '');else this.node.removeAttribute('checked');
		} else {
			// checkbox and others...
			this.node.checked = !!this.resolver.resolved ? true : false;
			if (!!this.resolver.resolved) this.node.setAttribute('checked', '');else this.node.removeAttribute('checked');
		}
	};

	return CheckedBinder;
}(_binder2.default);

exports.default = CheckedBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrZWQuYmluZGVyLmpzIl0sIm5hbWVzIjpbIkNoZWNrZWRCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJldmVudCIsInR5cGUiLCJiaW5kIiwib2xkVmFsdWUiLCJwYXRoIiwibm9kZSIsInZhbHVlIiwicmVzb2x2ZXIiLCJyZXNvbHZlZCIsImdldEF0dHJpYnV0ZSIsInNldFZhbHVlIiwib2JzZXJ2ZXJzIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwic3BsaXQiLCJlbmQiLCJwb3AiLCJtb2RlbCIsImkiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztJQVdxQkEsYTs7O0FBQ3BCLHdCQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLFNBQVo7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixRQUF4QixDQUFmO0FBQ0EsUUFBS0MsS0FBTDtBQUNBLFFBQUtDLElBQUw7QUFQK0I7QUFRL0I7O0FBRUQ7Ozs7Ozs7eUJBS0FDLEksaUJBQUtDLFEsRUFBVUMsSSxFQUFNO0FBQ3BCO0FBQ0EsTUFBSSxLQUFLQyxJQUFMLENBQVVDLEtBQVYsS0FBb0IsS0FBS0MsUUFBTCxDQUFjQyxRQUF0QyxFQUFnRDs7QUFFaEQ7QUFDQSxPQUFLUCxJQUFMLEdBQVksS0FBS0ksSUFBTCxDQUFVSSxZQUFWLENBQXVCLE1BQXZCLENBQVo7QUFDQSxPQUFLQyxRQUFMOztBQUVBO0FBQ0EsTUFBSSxDQUFDLENBQUMsS0FBS1YsS0FBUCxJQUFnQixLQUFLTyxRQUFMLENBQWNJLFNBQWQsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQXJELEVBQXdEOztBQUV4RDtBQUNBLE9BQUtaLEtBQUwsR0FBYSxRQUFiO0FBQ0EsT0FBS0ssSUFBTCxDQUFVUSxnQkFBVixDQUEyQixLQUFLYixLQUFoQyxFQUF1QyxLQUFLYyxRQUFMLENBQWNaLElBQWQsQ0FBbUIsSUFBbkIsQ0FBdkMsRUFBaUUsS0FBakU7QUFDQSxFOztBQUVEOzs7Ozs7O3lCQUtBWSxRLHFCQUFTZCxLLEVBQU87QUFDZkEsUUFBTWUsZUFBTjs7QUFFQTtBQUNBLE1BQUlYLE9BQU8sS0FBS0csUUFBTCxDQUFjSSxTQUFkLENBQXdCLEtBQUtKLFFBQUwsQ0FBY0ksU0FBZCxDQUF3QkMsTUFBeEIsR0FBZ0MsQ0FBeEQsRUFBMkRJLEtBQTNELENBQWlFLEdBQWpFLENBQVg7QUFDQSxNQUFJQyxNQUFNYixLQUFLYyxHQUFMLEVBQVY7O0FBRUE7QUFDQSxNQUFJQyxRQUFRLEtBQUtBLEtBQWpCO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUloQixLQUFLUSxNQUF6QixFQUFpQ1EsR0FBakM7QUFBc0NELFdBQVFBLE1BQU1mLEtBQUtnQixDQUFMLENBQU4sQ0FBUjtBQUF0QyxHQVRlLENBV2Y7QUFDQSxNQUFJLEtBQUtmLElBQUwsQ0FBVWdCLFlBQVYsQ0FBdUIsTUFBdkIsS0FBa0MsS0FBS3BCLElBQUwsSUFBYSxPQUFuRCxFQUE0RGtCLE1BQU1GLEdBQU4sSUFBYSxLQUFLWixJQUFMLENBQVVDLEtBQXZCLENBQTVELEtBQ0thLE1BQU1GLEdBQU4sSUFBYSxDQUFDLENBQUMsS0FBS1osSUFBTCxDQUFVaUIsT0FBWixHQUFzQixJQUF0QixHQUE2QixLQUExQztBQUNMLEU7O0FBRUQ7Ozs7Ozt5QkFJQVosUSx1QkFBVztBQUNWLE1BQUksS0FBS0wsSUFBTCxDQUFVZ0IsWUFBVixDQUF1QixNQUF2QixLQUFrQyxLQUFLcEIsSUFBTCxJQUFhLE9BQW5ELEVBQ0E7QUFDQztBQUNBLFFBQUtJLElBQUwsQ0FBVWlCLE9BQVYsR0FBb0IsS0FBS2pCLElBQUwsQ0FBVUMsS0FBVixJQUFtQixLQUFLQyxRQUFMLENBQWNDLFFBQWpDLEdBQTRDLElBQTVDLEdBQW1ELEtBQXZFO0FBQ0EsT0FBSSxLQUFLSCxJQUFMLENBQVVDLEtBQVYsSUFBbUIsS0FBS0MsUUFBTCxDQUFjQyxRQUFyQyxFQUErQyxLQUFLSCxJQUFMLENBQVVrQixZQUFWLENBQXVCLFNBQXZCLEVBQWtDLEVBQWxDLEVBQS9DLEtBQ0ssS0FBS2xCLElBQUwsQ0FBVW1CLGVBQVYsQ0FBMEIsU0FBMUI7QUFDTCxHQU5ELE1BUUE7QUFDQztBQUNBLFFBQUtuQixJQUFMLENBQVVpQixPQUFWLEdBQW9CLENBQUMsQ0FBQyxLQUFLZixRQUFMLENBQWNDLFFBQWhCLEdBQTJCLElBQTNCLEdBQWtDLEtBQXREO0FBQ0EsT0FBSSxDQUFDLENBQUMsS0FBS0QsUUFBTCxDQUFjQyxRQUFwQixFQUE4QixLQUFLSCxJQUFMLENBQVVrQixZQUFWLENBQXVCLFNBQXZCLEVBQWtDLEVBQWxDLEVBQTlCLEtBQ0ssS0FBS2xCLElBQUwsQ0FBVW1CLGVBQVYsQ0FBMEIsU0FBMUI7QUFDTDtBQUNELEU7Ozs7O2tCQXhFbUI3QixhIiwiZmlsZSI6ImNoZWNrZWQuYmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbmRlciBmcm9tICcuL2JpbmRlci5qcydcblxuLyoqXG4gKiBDaGVja2VkIEJpbmRlclxuICogQmluZHMgcmVzb2x2ZWQgZGF0YSB0byB2YWx1ZSBhdHRyaWJ1dGUgb2YgZWxlbWVudHMgc3VjaCBhcyBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCBldGMuLi5cbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG9wdGlvbnMsIG5vZGUsIHJlc29sdmFibGUsIG1vZGVsLCBhY2NlcHRzXG4gKiBtZXRob2Q6IGRldGVjdChub2RlKSB7IHJldHVybiBib29sIH1cbiAqIG1ldGhvZDogYnVpbGQobW9kZWwpIHsgcmV0dXJuIGJpbmRlciB9XG4gKiBtZXRob2Q6IHVwZGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHsgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2VkQmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICdjaGVja2VkJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnbWV0aG9kJ107XG5cdFx0dGhpcy5ldmVudDtcblx0XHR0aGlzLnR5cGU7XG5cdH1cblxuXHQvKipcblx0ICogYmluZCgpXG5cdCAqIEJpbmQgdGhlIHJlc29sdmVkIGRhdGEgdG8gdGhlIG5vZGUgcmVwbGFjaW5nIGNvbnRlbnRzXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSBvZiB0aGUgb2JzZXJ2ZWQgb2JqZWN0XG5cdCAqL1xuXHRiaW5kKG9sZFZhbHVlLCBwYXRoKSB7XG5cdFx0Ly8gY2F0Y2ggZHVwbGljYXRlIGZpcmVzIGZyb20gdWlcblx0XHRpZiAodGhpcy5ub2RlLnZhbHVlID09PSB0aGlzLnJlc29sdmVyLnJlc29sdmVkKSByZXR1cm47XG5cblx0XHQvLyBzZXQgdmFsdWVcblx0XHR0aGlzLnR5cGUgPSB0aGlzLm5vZGUuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXG5cdFx0Ly8gc2hvdWxkIHdlIHdhdGNoIGZvciBjaGFuZ2VzP1xuXHRcdGlmICghIXRoaXMuZXZlbnQgfHwgdGhpcy5yZXNvbHZlci5vYnNlcnZlcnMubGVuZ3RoIDwgMSkgcmV0dXJuO1xuXG5cdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIG5vZGVcblx0XHR0aGlzLmV2ZW50ID0gJ2NoYW5nZSc7XG5cdFx0dGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lci5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cdH1cblxuXHQvKipcblx0ICogbGlzdGVuZXIoKVxuXHQgKiBVcGRhdGUgbW9kZWwgd2hlbiBhbiBlbGVtZW50IGludGVyYWN0aW9uIHVwZGF0ZXMgaXRzIHZhbHVlXG5cdCAqIEBwYXJhbSBldmVudCBldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VycyB0aGUgdXBkYXRlXG5cdCAqL1xuXHRsaXN0ZW5lcihldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFxuXHRcdC8vIGxhc3Qgb2JzZXJ2ZXIgaXMgdGhlIGZ1bGwgb2JzZXJ2ZWQgcGF0aCB0byByZXNvbHZlciAob3RoZXJzIGJlZm9yZSBjYW4gbWFrZSB1cCBzdWIgcHJvcGVydGllcylcblx0XHR2YXIgcGF0aCA9IHRoaXMucmVzb2x2ZXIub2JzZXJ2ZXJzW3RoaXMucmVzb2x2ZXIub2JzZXJ2ZXJzLmxlbmd0aCAtMV0uc3BsaXQoJy4nKTtcblx0XHRsZXQgZW5kID0gcGF0aC5wb3AoKTtcblxuXHRcdC8vIGdldCBwYXJlbnQgb2JqZWN0L2FycmF5XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5tb2RlbDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIG1vZGVsID0gbW9kZWxbcGF0aFtpXV07XG5cblx0XHQvLyBjaGFuZ2UgbW9kZWxcblx0XHRpZiAodGhpcy5ub2RlLmhhc0F0dHJpYnV0ZSgndHlwZScpICYmIHRoaXMudHlwZSA9PSAncmFkaW8nKSBtb2RlbFtlbmRdID0gdGhpcy5ub2RlLnZhbHVlO1xuXHRcdGVsc2UgbW9kZWxbZW5kXSA9ICEhdGhpcy5ub2RlLmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogc2V0VmFsdWUoKVxuXHQgKiBTZXQgYSBub2RlIHZhbHVlIGFuZCBhdHRyaWJ1dGUgdG8gZW5zdXJlIGNoYW5nZXMgY2FuIGJlIHBpY2tlZCB1cCBieSBhdHRyaWJ1dGUgd2F0Y2hlcnNcblx0ICovXG5cdHNldFZhbHVlKCkge1xuXHRcdGlmICh0aGlzLm5vZGUuaGFzQXR0cmlidXRlKCd0eXBlJykgJiYgdGhpcy50eXBlID09ICdyYWRpbycpXG5cdFx0e1xuXHRcdFx0Ly8gcmFkaW9cblx0XHRcdHRoaXMubm9kZS5jaGVja2VkID0gdGhpcy5ub2RlLnZhbHVlID09IHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRpZiAodGhpcy5ub2RlLnZhbHVlID09IHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG5cdFx0XHRlbHNlIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdC8vIGNoZWNrYm94IGFuZCBvdGhlcnMuLi5cblx0XHRcdHRoaXMubm9kZS5jaGVja2VkID0gISF0aGlzLnJlc29sdmVyLnJlc29sdmVkID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0aWYgKCEhdGhpcy5yZXNvbHZlci5yZXNvbHZlZCkgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcblx0XHRcdGVsc2UgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuXHRcdH1cblx0fVxufVxuIl19
},{"./binder.js":17}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ClassBinder = function (_Binder) {
	_inherits(ClassBinder, _Binder);

	function ClassBinder(options, traverser) {
		_classCallCheck(this, ClassBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'class';
		_this.accepts = ['property', 'phantom', 'object', 'array', 'string', 'method'];
		_this.classnames = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ClassBinder.prototype.bind = function bind() {
		var classnames = [];

		// add new classes if not already added
		var names = typeof this.resolver.resolved === 'string' ? [this.resolver.resolved.trim()] : this.resolver.resolved;
		for (var a in names) {
			var classname = isNaN(a) ? a.trim() : names[a].trim();
			if (typeof a === 'string' && !names[a]) continue; // skip falsy objects
			classnames.push(classname); // add already present to stack
			if (new RegExp('([^a-z0-9_-]{1}|^)' + classname + '([^a-z0-9_-]{1}|$)').test(this.node.className)) continue; // skip already present

			this.node.className += ' ' + classname + ' ';
			classnames.push(classname);
		}

		// remove any that where there previosly but now not in stack
		if (this.classnames.length > 0) {
			// remove any classes not in
			for (var i = 0; i < this.classnames.length; i++) {
				if (classnames.indexOf(this.classnames[i]) >= 0) continue;
				this.node.className = this.node.className.replace(new RegExp('([^a-z0-9_-]{1}|^)' + this.classnames[i] + '([^a-z0-9_-]{1}|$)', 'g'), ' ');
			}
		}

		// update node and cache stack
		this.node.className = this.node.className.replace(/\s{1}\s{1}/g, ' ');
		this.classnames = classnames;
	};

	return ClassBinder;
}(_binder2.default);

exports.default = ClassBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJDbGFzc0JpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsImNsYXNzbmFtZXMiLCJiaW5kIiwibmFtZXMiLCJyZXNvbHZlciIsInJlc29sdmVkIiwidHJpbSIsImEiLCJjbGFzc25hbWUiLCJpc05hTiIsInB1c2giLCJSZWdFeHAiLCJ0ZXN0Iiwibm9kZSIsImNsYXNzTmFtZSIsImxlbmd0aCIsImkiLCJpbmRleE9mIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLFc7OztBQUNwQixzQkFBWUMsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSwrQ0FDL0Isa0JBRCtCOztBQUUvQixRQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtDLElBQUwsR0FBWSxPQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsUUFBeEIsRUFBa0MsT0FBbEMsRUFBMkMsUUFBM0MsRUFBcUQsUUFBckQsQ0FBZjtBQUNBLFFBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFOK0I7QUFPL0I7O0FBRUQ7Ozs7Ozs7dUJBS0FDLEksbUJBQU87QUFDTixNQUFJRCxhQUFhLEVBQWpCOztBQUVBO0FBQ0EsTUFBSUUsUUFBUSxPQUFPLEtBQUtDLFFBQUwsQ0FBY0MsUUFBckIsS0FBa0MsUUFBbEMsR0FBNkMsQ0FBQyxLQUFLRCxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLElBQXZCLEVBQUQsQ0FBN0MsR0FBK0UsS0FBS0YsUUFBTCxDQUFjQyxRQUF6RztBQUNBLE9BQUssSUFBSUUsQ0FBVCxJQUFjSixLQUFkLEVBQ0E7QUFDQyxPQUFJSyxZQUFZQyxNQUFNRixDQUFOLElBQVdBLEVBQUVELElBQUYsRUFBWCxHQUFzQkgsTUFBTUksQ0FBTixFQUFTRCxJQUFULEVBQXRDO0FBQ0EsT0FBSSxPQUFPQyxDQUFQLEtBQWEsUUFBYixJQUF5QixDQUFDSixNQUFNSSxDQUFOLENBQTlCLEVBQXdDLFNBRnpDLENBRW1EO0FBQ2xETixjQUFXUyxJQUFYLENBQWdCRixTQUFoQixFQUhELENBRzZCO0FBQzVCLE9BQUksSUFBSUcsTUFBSixDQUFXLHVCQUF1QkgsU0FBdkIsR0FBbUMsb0JBQTlDLEVBQW9FSSxJQUFwRSxDQUF5RSxLQUFLQyxJQUFMLENBQVVDLFNBQW5GLENBQUosRUFBbUcsU0FKcEcsQ0FJOEc7O0FBRTdHLFFBQUtELElBQUwsQ0FBVUMsU0FBVixJQUF1QixNQUFNTixTQUFOLEdBQWtCLEdBQXpDO0FBQ0FQLGNBQVdTLElBQVgsQ0FBZ0JGLFNBQWhCO0FBQ0E7O0FBRUQ7QUFDQSxNQUFJLEtBQUtQLFVBQUwsQ0FBZ0JjLE1BQWhCLEdBQXlCLENBQTdCLEVBQ0E7QUFDQztBQUNBLFFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtmLFVBQUwsQ0FBZ0JjLE1BQXBDLEVBQTRDQyxHQUE1QyxFQUNBO0FBQ0MsUUFBSWYsV0FBV2dCLE9BQVgsQ0FBbUIsS0FBS2hCLFVBQUwsQ0FBZ0JlLENBQWhCLENBQW5CLEtBQTBDLENBQTlDLEVBQWlEO0FBQ2pELFNBQUtILElBQUwsQ0FBVUMsU0FBVixHQUFzQixLQUFLRCxJQUFMLENBQVVDLFNBQVYsQ0FBb0JJLE9BQXBCLENBQTRCLElBQUlQLE1BQUosQ0FBVyx1QkFBdUIsS0FBS1YsVUFBTCxDQUFnQmUsQ0FBaEIsQ0FBdkIsR0FBNEMsb0JBQXZELEVBQTZFLEdBQTdFLENBQTVCLEVBQStHLEdBQS9HLENBQXRCO0FBRUE7QUFDRDs7QUFFRDtBQUNBLE9BQUtILElBQUwsQ0FBVUMsU0FBVixHQUFzQixLQUFLRCxJQUFMLENBQVVDLFNBQVYsQ0FBb0JJLE9BQXBCLENBQTRCLGFBQTVCLEVBQTJDLEdBQTNDLENBQXRCO0FBQ0EsT0FBS2pCLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsRTs7Ozs7a0JBOUNtQkwsVyIsImZpbGUiOiJjbGFzcy5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIENsYXNzIEJpbmRlclxuICogQWx0ZXJzIGVsZW1lbnRzIHN0eWxlIGJhc2VkIG9uIHJlc29sdmVkIGRhdGEgY29udGVudHNcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG9wdGlvbnMsIG5vZGUsIHJlc29sdmFibGUsIG1vZGVsLCBhY2NlcHRzXG4gKiBtZXRob2Q6IGRldGVjdChub2RlKSB7IHJldHVybiBib29sIH1cbiAqIG1ldGhvZDogYnVpbGQobW9kZWwpIHsgcmV0dXJuIGJpbmRlciB9XG4gKiBtZXRob2Q6IHVwZGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHsgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc0JpbmRlciBleHRlbmRzIEJpbmRlciB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHRyYXZlcnNlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnRyYXZlcnNlciA9IHRyYXZlcnNlcjtcblx0XHR0aGlzLm5hbWUgPSAnY2xhc3MnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsncHJvcGVydHknLCAncGhhbnRvbScsICdvYmplY3QnLCAnYXJyYXknLCAnc3RyaW5nJywgJ21ldGhvZCddO1xuXHRcdHRoaXMuY2xhc3NuYW1lcyA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIGJpbmQoKVxuXHQgKiBCaW5kIHRoZSByZXNvbHZlZCBkYXRhIGJ5IGFwcGx5aW5nIHN0eWxlcyB0byBub2RlXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSBvZiB0aGUgb2JzZXJ2ZWQgb2JqZWN0XG5cdCAqL1xuXHRiaW5kKCkge1xuXHRcdHZhciBjbGFzc25hbWVzID0gW107XG5cblx0XHQvLyBhZGQgbmV3IGNsYXNzZXMgaWYgbm90IGFscmVhZHkgYWRkZWRcblx0XHR2YXIgbmFtZXMgPSB0eXBlb2YgdGhpcy5yZXNvbHZlci5yZXNvbHZlZCA9PT0gJ3N0cmluZycgPyBbdGhpcy5yZXNvbHZlci5yZXNvbHZlZC50cmltKCldIDogdGhpcy5yZXNvbHZlci5yZXNvbHZlZDtcblx0XHRmb3IgKHZhciBhIGluIG5hbWVzKVxuXHRcdHtcblx0XHRcdHZhciBjbGFzc25hbWUgPSBpc05hTihhKSA/IGEudHJpbSgpIDogbmFtZXNbYV0udHJpbSgpO1xuXHRcdFx0aWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJyAmJiAhbmFtZXNbYV0pIGNvbnRpbnVlOyAvLyBza2lwIGZhbHN5IG9iamVjdHNcblx0XHRcdGNsYXNzbmFtZXMucHVzaChjbGFzc25hbWUpOyAvLyBhZGQgYWxyZWFkeSBwcmVzZW50IHRvIHN0YWNrXG5cdFx0XHRpZiAobmV3IFJlZ0V4cCgnKFteYS16MC05Xy1dezF9fF4pJyArIGNsYXNzbmFtZSArICcoW15hLXowLTlfLV17MX18JCknKS50ZXN0KHRoaXMubm9kZS5jbGFzc05hbWUpKSBjb250aW51ZTsgLy8gc2tpcCBhbHJlYWR5IHByZXNlbnRcblxuXHRcdFx0dGhpcy5ub2RlLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc25hbWUgKyAnICc7XG5cdFx0XHRjbGFzc25hbWVzLnB1c2goY2xhc3NuYW1lKTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgYW55IHRoYXQgd2hlcmUgdGhlcmUgcHJldmlvc2x5IGJ1dCBub3cgbm90IGluIHN0YWNrXG5cdFx0aWYgKHRoaXMuY2xhc3NuYW1lcy5sZW5ndGggPiAwKVxuXHRcdHtcblx0XHRcdC8vIHJlbW92ZSBhbnkgY2xhc3NlcyBub3QgaW5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jbGFzc25hbWVzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoY2xhc3NuYW1lcy5pbmRleE9mKHRoaXMuY2xhc3NuYW1lc1tpXSkgPj0gMCkgY29udGludWU7XG5cdFx0XHRcdHRoaXMubm9kZS5jbGFzc05hbWUgPSB0aGlzLm5vZGUuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKFteYS16MC05Xy1dezF9fF4pJyArIHRoaXMuY2xhc3NuYW1lc1tpXSArICcoW15hLXowLTlfLV17MX18JCknLCAnZycpLCAnICcpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gdXBkYXRlIG5vZGUgYW5kIGNhY2hlIHN0YWNrXG5cdFx0dGhpcy5ub2RlLmNsYXNzTmFtZSA9IHRoaXMubm9kZS5jbGFzc05hbWUucmVwbGFjZSgvXFxzezF9XFxzezF9L2csICcgJyk7XG5cdFx0dGhpcy5jbGFzc25hbWVzID0gY2xhc3NuYW1lcztcblx0fVxufVxuIl19
},{"./binder.js":17}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Click Binder
 * Bind methods to element events
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ClickBinder = function (_Binder) {
	_inherits(ClickBinder, _Binder);

	function ClickBinder(options, traverser) {
		_classCallCheck(this, ClickBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'click';
		_this.delayMethod = true;
		_this.accepts = ['method'];
		_this.event;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ClickBinder.prototype.bind = function bind(object) {
		if (typeof this.resolver.resolved.method !== 'function') return;

		if (!this.event) {
			this.event = 'click';
			this.node.addEventListener('click', this.listener.bind(this), false);
		}
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	ClickBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		var values = [event].concat(this.resolver.resolved.values);
		this.resolver.resolved.method.apply(this.model, values);
	};

	return ClickBinder;
}(_binder2.default);

exports.default = ClickBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWNrLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJDbGlja0JpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiZGVsYXlNZXRob2QiLCJhY2NlcHRzIiwiZXZlbnQiLCJiaW5kIiwib2JqZWN0IiwicmVzb2x2ZXIiLCJyZXNvbHZlZCIsIm1ldGhvZCIsIm5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWx1ZXMiLCJjb25jYXQiLCJhcHBseSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztJQVdxQkEsVzs7O0FBQ3BCLHNCQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLE9BQVo7QUFDQSxRQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsUUFBRCxDQUFmO0FBQ0EsUUFBS0MsS0FBTDtBQVArQjtBQVEvQjs7QUFFRDs7Ozs7Ozt1QkFLQUMsSSxpQkFBS0MsTSxFQUFRO0FBQ1osTUFBSSxPQUFPLEtBQUtDLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkMsTUFBOUIsS0FBeUMsVUFBN0MsRUFBeUQ7O0FBRXpELE1BQUksQ0FBQyxLQUFLTCxLQUFWLEVBQWlCO0FBQ2hCLFFBQUtBLEtBQUwsR0FBYSxPQUFiO0FBQ0EsUUFBS00sSUFBTCxDQUFVQyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxLQUFLQyxRQUFMLENBQWNQLElBQWQsQ0FBbUIsSUFBbkIsQ0FBcEMsRUFBOEQsS0FBOUQ7QUFDQTtBQUNELEU7O0FBRUQ7Ozs7Ozs7dUJBS0FPLFEscUJBQVNSLEssRUFBTztBQUNmQSxRQUFNUyxlQUFOO0FBQ0EsTUFBSUMsU0FBUyxDQUFDVixLQUFELEVBQVFXLE1BQVIsQ0FBZSxLQUFLUixRQUFMLENBQWNDLFFBQWQsQ0FBdUJNLE1BQXRDLENBQWI7QUFDQSxPQUFLUCxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLE1BQXZCLENBQThCTyxLQUE5QixDQUFvQyxLQUFLQyxLQUF6QyxFQUFnREgsTUFBaEQ7QUFDQSxFOzs7OztrQkFsQ21CaEIsVyIsImZpbGUiOiJjbGljay5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIENsaWNrIEJpbmRlclxuICogQmluZCBtZXRob2RzIHRvIGVsZW1lbnQgZXZlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpY2tCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2NsaWNrJztcblx0XHR0aGlzLmRlbGF5TWV0aG9kID0gdHJ1ZTtcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ21ldGhvZCddO1xuXHRcdHRoaXMuZXZlbnQ7XG5cdH1cblxuXHQvKipcblx0ICogYmluZCgpXG5cdCAqIEJpbmQgdGhlIHJlc29sdmVkIGRhdGEgYnkgYXBwbHlpbmcgc3R5bGVzIHRvIG5vZGVcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQob2JqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJlc29sdmVyLnJlc29sdmVkLm1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG5cdFx0aWYgKCF0aGlzLmV2ZW50KSB7XG5cdFx0XHR0aGlzLmV2ZW50ID0gJ2NsaWNrJztcblx0XHRcdHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubGlzdGVuZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBsaXN0ZW5lcigpXG5cdCAqIENhdGNoIGV2ZW50cyBvbiBub2RlcyBhbmQgcnVuIGZ1bmN0aW9ucyBzZXQuXG5cdCAqIEBwYXJhbSBldmVudCBldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VycyB0aGUgdXBkYXRlXG5cdCAqL1xuXHRsaXN0ZW5lcihldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGxldCB2YWx1ZXMgPSBbZXZlbnRdLmNvbmNhdCh0aGlzLnJlc29sdmVyLnJlc29sdmVkLnZhbHVlcyk7XG5cdFx0dGhpcy5yZXNvbHZlci5yZXNvbHZlZC5tZXRob2QuYXBwbHkodGhpcy5tb2RlbCwgdmFsdWVzKTtcblx0fVxufVxuIl19
},{"./binder.js":17}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Disabled Binder
 * Alters disabled attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var DisabledBinder = function (_Binder) {
	_inherits(DisabledBinder, _Binder);

	function DisabledBinder(options, traverser) {
		_classCallCheck(this, DisabledBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'disabled';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	DisabledBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.setAttribute('disabled', '');else this.node.removeAttribute('disabled');
	};

	return DisabledBinder;
}(_binder2.default);

exports.default = DisabledBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2FibGVkLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJEaXNhYmxlZEJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsImJpbmQiLCJyZXNvbHZlciIsInJlc29sdmVkIiwibm9kZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLGM7OztBQUNwQix5QkFBWUMsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSwrQ0FDL0Isa0JBRCtCOztBQUUvQixRQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtDLElBQUwsR0FBWSxVQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsUUFBeEIsRUFBa0MsUUFBbEMsRUFBNEMsUUFBNUMsQ0FBZjtBQUwrQjtBQU0vQjs7QUFFRDs7Ozs7OzswQkFLQUMsSSxtQkFBTztBQUNOLE1BQUksQ0FBQyxDQUFDLEtBQUtDLFFBQUwsQ0FBY0MsUUFBcEIsRUFBOEIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCLFVBQXZCLEVBQW1DLEVBQW5DLEVBQTlCLEtBQ0ssS0FBS0QsSUFBTCxDQUFVRSxlQUFWLENBQTBCLFVBQTFCO0FBQ0wsRTs7Ozs7a0JBakJtQlYsYyIsImZpbGUiOiJkaXNhYmxlZC5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIERpc2FibGVkIEJpbmRlclxuICogQWx0ZXJzIGRpc2FibGVkIGF0dHJpYnV0ZSBiYXNlZCBvbiByZXNvbHZlZCBkYXRhIGNvbnRlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYWJsZWRCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2Rpc2FibGVkJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnb2JqZWN0JywgJ3N0cmluZycsICdtZXRob2QnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZCgpIHtcblx0XHRpZiAoISF0aGlzLnJlc29sdmVyLnJlc29sdmVkKSB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHRlbHNlIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdH1cbn1cbiJdfQ==
},{"./binder.js":17}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Else Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ElseBinder = function (_Binder) {
	_inherits(ElseBinder, _Binder);

	function ElseBinder(options, traverser) {
		_classCallCheck(this, ElseBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'else';
		_this.accepts = ['property', 'phantom', 'boolean', 'method'];
		_this.placeholder = null;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ElseBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) {
			// insert placeholder
			this.placeholder = document.createComment('razilobind:else');
			this.node.parentNode.insertBefore(this.placeholder, this.node);
			this.node.parentNode.removeChild(this.node);
		} else if (this.placeholder) {
			this.placeholder.parentNode.insertBefore(this.node, this.placeholder);
			this.placeholder.parentNode.removeChild(this.placeholder);
			this.placeholder = null;
		}
	};

	return ElseBinder;
}(_binder2.default);

exports.default = ElseBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsc2UuYmluZGVyLmpzIl0sIm5hbWVzIjpbIkVsc2VCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJwbGFjZWhvbGRlciIsImJpbmQiLCJyZXNvbHZlciIsInJlc29sdmVkIiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50Iiwibm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLFU7OztBQUNwQixxQkFBWUMsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSwrQ0FDL0Isa0JBRCtCOztBQUUvQixRQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtDLElBQUwsR0FBWSxNQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsU0FBeEIsRUFBbUMsUUFBbkMsQ0FBZjtBQUNBLFFBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFOK0I7QUFPL0I7O0FBRUQ7Ozs7Ozs7c0JBS0FDLEksbUJBQU87QUFDTixNQUFJLENBQUMsQ0FBQyxLQUFLQyxRQUFMLENBQWNDLFFBQXBCLEVBQ0E7QUFDQztBQUNBLFFBQUtILFdBQUwsR0FBbUJJLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQW5CO0FBQ0EsUUFBS0MsSUFBTCxDQUFVQyxVQUFWLENBQXFCQyxZQUFyQixDQUFrQyxLQUFLUixXQUF2QyxFQUFvRCxLQUFLTSxJQUF6RDtBQUNBLFFBQUtBLElBQUwsQ0FBVUMsVUFBVixDQUFxQkUsV0FBckIsQ0FBaUMsS0FBS0gsSUFBdEM7QUFDQSxHQU5ELE1BT0ssSUFBSSxLQUFLTixXQUFULEVBQ0w7QUFDQyxRQUFLQSxXQUFMLENBQWlCTyxVQUFqQixDQUE0QkMsWUFBNUIsQ0FBeUMsS0FBS0YsSUFBOUMsRUFBb0QsS0FBS04sV0FBekQ7QUFDQSxRQUFLQSxXQUFMLENBQWlCTyxVQUFqQixDQUE0QkUsV0FBNUIsQ0FBd0MsS0FBS1QsV0FBN0M7QUFDQSxRQUFLQSxXQUFMLEdBQW1CLElBQW5CO0FBQ0E7QUFDRCxFOzs7OztrQkE3Qm1CTCxVIiwiZmlsZSI6ImVsc2UuYmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbmRlciBmcm9tICcuL2JpbmRlci5qcydcblxuLyoqXG4gKiBFbHNlIEJpbmRlclxuICogQWx0ZXJzIGVsZW1lbnRzIHN0eWxlIGJhc2VkIG9uIHJlc29sdmVkIGRhdGEgY29udGVudHNcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG9wdGlvbnMsIG5vZGUsIHJlc29sdmFibGUsIG1vZGVsLCBhY2NlcHRzXG4gKiBtZXRob2Q6IGRldGVjdChub2RlKSB7IHJldHVybiBib29sIH1cbiAqIG1ldGhvZDogYnVpbGQobW9kZWwpIHsgcmV0dXJuIGJpbmRlciB9XG4gKiBtZXRob2Q6IHVwZGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHsgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbHNlQmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICdlbHNlJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnYm9vbGVhbicsICdtZXRob2QnXTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZCgpIHtcblx0XHRpZiAoISF0aGlzLnJlc29sdmVyLnJlc29sdmVkKVxuXHRcdHtcblx0XHRcdC8vIGluc2VydCBwbGFjZWhvbGRlclxuXHRcdFx0dGhpcy5wbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3Jhemlsb2JpbmQ6ZWxzZScpO1xuXHRcdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMucGxhY2Vob2xkZXIsIHRoaXMubm9kZSk7XG5cdFx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLnBsYWNlaG9sZGVyKVxuXHRcdHtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5ub2RlLCB0aGlzLnBsYWNlaG9sZGVyKTtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyKTtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdH1cblx0fVxufVxuIl19
},{"./binder.js":17}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Event Binder
 * Bind methods to element events
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var EventBinder = function (_Binder) {
	_inherits(EventBinder, _Binder);

	function EventBinder(options, traverser) {
		_classCallCheck(this, EventBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'event';
		_this.delayMethod = true;
		_this.accepts = ['object'];
		_this.events = {};
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	EventBinder.prototype.bind = function bind(object) {
		// remove old events
		for (var name in this.events) {
			if (this.resolver.resolved[name]) continue;
			this.node.removeEventListener(name, this.listener, false);
			delete this.events[name];
		}

		// add new events
		for (var _name in this.resolver.resolved) {
			if (!this.events[_name]) {
				if (typeof this.resolver.resolved[_name].method !== 'function') continue;
				this.node.addEventListener(_name, this.listener.bind(this), false);
			}
			this.events[_name] = this.resolver.resolved[_name];
		}
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	EventBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		var values = [event].concat(this.events[event.type].values);
		this.events[event.type].method.apply(this.model, values);
	};

	return EventBinder;
}(_binder2.default);

exports.default = EventBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmJpbmRlci5qcyJdLCJuYW1lcyI6WyJFdmVudEJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiZGVsYXlNZXRob2QiLCJhY2NlcHRzIiwiZXZlbnRzIiwiYmluZCIsIm9iamVjdCIsInJlc29sdmVyIiwicmVzb2x2ZWQiLCJub2RlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwibWV0aG9kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWVzIiwiY29uY2F0IiwidHlwZSIsImFwcGx5IiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV3FCQSxXOzs7QUFDcEIsc0JBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksT0FBWjtBQUNBLFFBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxRQUFELENBQWY7QUFDQSxRQUFLQyxNQUFMLEdBQWMsRUFBZDtBQVArQjtBQVEvQjs7QUFFRDs7Ozs7Ozt1QkFLQUMsSSxpQkFBS0MsTSxFQUFRO0FBQ1o7QUFDQSxPQUFLLElBQUlMLElBQVQsSUFBaUIsS0FBS0csTUFBdEIsRUFBOEI7QUFDN0IsT0FBSSxLQUFLRyxRQUFMLENBQWNDLFFBQWQsQ0FBdUJQLElBQXZCLENBQUosRUFBa0M7QUFDbEMsUUFBS1EsSUFBTCxDQUFVQyxtQkFBVixDQUE4QlQsSUFBOUIsRUFBb0MsS0FBS1UsUUFBekMsRUFBbUQsS0FBbkQ7QUFDQSxVQUFPLEtBQUtQLE1BQUwsQ0FBWUgsSUFBWixDQUFQO0FBQ0E7O0FBRUQ7QUFDQSxPQUFLLElBQUlBLEtBQVQsSUFBaUIsS0FBS00sUUFBTCxDQUFjQyxRQUEvQixFQUNBO0FBQ0MsT0FBSSxDQUFDLEtBQUtKLE1BQUwsQ0FBWUgsS0FBWixDQUFMLEVBQ0E7QUFDQyxRQUFJLE9BQU8sS0FBS00sUUFBTCxDQUFjQyxRQUFkLENBQXVCUCxLQUF2QixFQUE2QlcsTUFBcEMsS0FBK0MsVUFBbkQsRUFBK0Q7QUFDL0QsU0FBS0gsSUFBTCxDQUFVSSxnQkFBVixDQUEyQlosS0FBM0IsRUFBaUMsS0FBS1UsUUFBTCxDQUFjTixJQUFkLENBQW1CLElBQW5CLENBQWpDLEVBQTJELEtBQTNEO0FBQ0E7QUFDRCxRQUFLRCxNQUFMLENBQVlILEtBQVosSUFBb0IsS0FBS00sUUFBTCxDQUFjQyxRQUFkLENBQXVCUCxLQUF2QixDQUFwQjtBQUNBO0FBQ0QsRTs7QUFFRDs7Ozs7Ozt1QkFLQVUsUSxxQkFBU0csSyxFQUFPO0FBQ2ZBLFFBQU1DLGVBQU47QUFDQSxNQUFJQyxTQUFTLENBQUNGLEtBQUQsRUFBUUcsTUFBUixDQUFlLEtBQUtiLE1BQUwsQ0FBWVUsTUFBTUksSUFBbEIsRUFBd0JGLE1BQXZDLENBQWI7QUFDQSxPQUFLWixNQUFMLENBQVlVLE1BQU1JLElBQWxCLEVBQXdCTixNQUF4QixDQUErQk8sS0FBL0IsQ0FBcUMsS0FBS0MsS0FBMUMsRUFBaURKLE1BQWpEO0FBQ0EsRTs7Ozs7a0JBN0NtQmxCLFciLCJmaWxlIjoiZXZlbnQuYmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbmRlciBmcm9tICcuL2JpbmRlci5qcydcblxuLyoqXG4gKiBFdmVudCBCaW5kZXJcbiAqIEJpbmQgbWV0aG9kcyB0byBlbGVtZW50IGV2ZW50c1xuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICdldmVudCc7XG5cdFx0dGhpcy5kZWxheU1ldGhvZCA9IHRydWU7XG5cdFx0dGhpcy5hY2NlcHRzID0gWydvYmplY3QnXTtcblx0XHR0aGlzLmV2ZW50cyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIGJpbmQoKVxuXHQgKiBCaW5kIHRoZSByZXNvbHZlZCBkYXRhIGJ5IGFwcGx5aW5nIHN0eWxlcyB0byBub2RlXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSBvZiB0aGUgb2JzZXJ2ZWQgb2JqZWN0XG5cdCAqL1xuXHRiaW5kKG9iamVjdCkge1xuXHRcdC8vIHJlbW92ZSBvbGQgZXZlbnRzXG5cdFx0Zm9yIChsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cykge1xuXHRcdFx0aWYgKHRoaXMucmVzb2x2ZXIucmVzb2x2ZWRbbmFtZV0pIGNvbnRpbnVlO1xuXHRcdFx0dGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgdGhpcy5saXN0ZW5lciwgZmFsc2UpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuZXZlbnRzW25hbWVdO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuZXcgZXZlbnRzXG5cdFx0Zm9yIChsZXQgbmFtZSBpbiB0aGlzLnJlc29sdmVyLnJlc29sdmVkKVxuXHRcdHtcblx0XHRcdGlmICghdGhpcy5ldmVudHNbbmFtZV0pXG5cdFx0XHR7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5yZXNvbHZlci5yZXNvbHZlZFtuYW1lXS5tZXRob2QgIT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xuXHRcdFx0XHR0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGlzLmxpc3RlbmVyLmJpbmQodGhpcyksIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZXZlbnRzW25hbWVdID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlZFtuYW1lXTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogbGlzdGVuZXIoKVxuXHQgKiBDYXRjaCBldmVudHMgb24gbm9kZXMgYW5kIHJ1biBmdW5jdGlvbnMgc2V0LlxuXHQgKiBAcGFyYW0gZXZlbnQgZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcnMgdGhlIHVwZGF0ZVxuXHQgKi9cblx0bGlzdGVuZXIoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRsZXQgdmFsdWVzID0gW2V2ZW50XS5jb25jYXQodGhpcy5ldmVudHNbZXZlbnQudHlwZV0udmFsdWVzKTtcblx0XHR0aGlzLmV2ZW50c1tldmVudC50eXBlXS5tZXRob2QuYXBwbHkodGhpcy5tb2RlbCwgdmFsdWVzKTtcblx0fVxufVxuIl19
},{"./binder.js":17}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _razilobindCore = require('razilobind-core');

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * For Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, config, model, accepts
 */
var ForBinder = function (_Binder) {
	_inherits(ForBinder, _Binder);

	function ForBinder(options, traverser) {
		_classCallCheck(this, ForBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'for';
		_this.accepts = ['property', 'phantom', 'method', 'array', 'object'];
		_this.placeholder = {};
		_this.children = [];
		return _this;
	}

	/**
  * OVERRIDE:detect()
  * Basic detection of an element by its attribute, setting resolvable
  * @param html-node node The node to detect any bindables on
  * @return bool True on bindable, false on fail
  */


	ForBinder.prototype.detect = function detect(node) {
		// allow element nodes only
		if (node.nodeType !== 1) return false;

		this.resolvable = node.hasAttribute(this.options.prefix + 'bind-' + this.name) ? node.getAttribute(this.options.prefix + 'bind-' + this.name) : undefined;
		this.configurable = node.hasAttribute(this.options.prefix + 'config-' + this.name) ? node.getAttribute(this.options.prefix + 'config-' + this.name) : undefined;
		this.alterable = node.hasAttribute(this.options.prefix + 'alter-' + this.name) ? node.getAttribute(this.options.prefix + 'alter-' + this.name) : undefined;
		this.orderable = node.hasAttribute(this.options.prefix + 'order-' + this.name) ? node.getAttribute(this.options.prefix + 'order-' + this.name) : undefined;
		this.filterable = node.hasAttribute(this.options.prefix + 'filter-' + this.name) ? node.getAttribute(this.options.prefix + 'filter-' + this.name) : undefined;
		this.limitable = node.hasAttribute(this.options.prefix + 'limit-' + this.name) ? node.getAttribute(this.options.prefix + 'limit-' + this.name) : undefined;
		this.offsetable = node.hasAttribute(this.options.prefix + 'offset-' + this.name) ? node.getAttribute(this.options.prefix + 'offset-' + this.name) : undefined;

		if (!this.resolvable) return false;

		this.node = node;
		return true;
	};

	/**
  * OVERRIDE:build()
  * Build a bindable object and try to resolve data, if resolved creates initial bind too
  * @param object model The model to attempt to build the binder against
  * @return Binder The binder of specific type
  */


	ForBinder.prototype.build = function build(model) {
		// set bindable data
		this.priority = 1;
		this.resolver = _razilobindCore.RaziloBindCoreDetector.resolver(this.resolvable, this.node);
		this.alterer = _razilobindCore.RaziloBindCoreDetector.resolver(this.alterable, this.node);
		this.config = _razilobindCore.RaziloBindCoreDetector.resolver(this.configurable, this.node);
		this.order = _razilobindCore.RaziloBindCoreDetector.resolver(this.orderable, this.node);
		this.filter = _razilobindCore.RaziloBindCoreDetector.resolver(this.filterable, this.node);
		this.limit = _razilobindCore.RaziloBindCoreDetector.resolver(this.limitable, this.node);
		this.offset = _razilobindCore.RaziloBindCoreDetector.resolver(this.offsetable, this.node);
		this.model = model;

		// resolve data to actuals and observables if of correct type or no types set
		if (this.resolver && (this.accepts.length === 0 || this.accepts.indexOf(this.resolver.name) >= 0)) this.update();

		// collate binders
		if (this.resolver.observers) for (var i = 0; i < this.resolver.observers.length; i++) {
			if (this.observables.indexOf(this.resolver.observers[i]) < 0) this.observables.push(this.resolver.observers[i]);
		}if (this.alterer.observers) for (var _i = 0; _i < this.alterer.observers.length; _i++) {
			if (this.observables.indexOf(this.alterer.observers[_i]) < 0) this.observables.push(this.alterer.observers[_i]);
		}if (this.config.observers) for (var _i2 = 0; _i2 < this.config.observers.length; _i2++) {
			if (this.observables.indexOf(this.config.observers[_i2]) < 0) this.observables.push(this.config.observers[_i2]);
		}if (this.order.observers) for (var _i3 = 0; _i3 < this.order.observers.length; _i3++) {
			if (this.observables.indexOf(this.order.observers[_i3]) < 0) this.observables.push(this.order.observers[_i3]);
		}if (this.filter.observers) for (var _i4 = 0; _i4 < this.filter.observers.length; _i4++) {
			if (this.observables.indexOf(this.filter.observers[_i4]) < 0) this.observables.push(this.filter.observers[_i4]);
		}if (this.limit.observers) for (var _i5 = 0; _i5 < this.limit.observers.length; _i5++) {
			if (this.observables.indexOf(this.limit.observers[_i5]) < 0) this.observables.push(this.limit.observers[_i5]);
		}if (this.offset.observers) for (var _i6 = 0; _i6 < this.offset.observers.length; _i6++) {
			if (this.observables.indexOf(this.offset.observers[_i6]) < 0) this.observables.push(this.offset.observers[_i6]);
		}return this;
	};

	/**
  * OVERRIDE:update()
  * updates observers (as they can change if using properties as keys) and issue bind in child
  * @param object oldValue The old value once object change detect
  * @param string path The path that was affected (or the key if adding or removing a value to/from an object)
  * @param string action The action to perform, 'update', 'array-add', 'array-remove', 'object-add', 'object-remove'
  * @param object key The key name if an object value is added or removed
  */


	ForBinder.prototype.update = function update(oldValue, path, action, key) {
		// resolve data, bind to element from child class
		this.resolver.resolve(this.model);
		var newValue = this.resolver.resolved;

		if (this.config) this.config.resolve(this.model);
		if (this.order) this.order.resolve(this.model);
		if (this.filter) this.filter.resolve(this.model);
		if (this.limit) this.limit.resolve(this.model);
		if (this.offset) this.offset.resolve(this.model);
		if (this.alterer) {
			// alter resolved value
			this.alterer.resolve(this.model);
			this.resolver.resolved = _razilobindCore.RaziloBindCoreDetector.alterers(this.alterer.resolved, this.resolver.resolved);
		}

		this.bind(oldValue, path, action, key);

		// garbage collection on observables map which is only thing holding ref to binder (so binder will be released naturally)
		if (action === 'object-remove') delete this.traverser.observables[path + '.' + key];else if (action === 'array-remove') for (var i = newValue.length - 1; i < oldValue; i++) {
			delete this.traverser.observables[path + '.' + i];
		}
	};

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ForBinder.prototype.bind = function bind(oldValue, path, action, objectKey) {
		if (_typeof(this.resolver.resolved) !== 'object') return; // do not re-draw for non objects
		if (action == 'update' && typeof oldValue !== 'undefined' && (typeof oldValue === 'undefined' ? 'undefined' : _typeof(oldValue)) !== 'object') return; // do not re-draw on litaral changes (as they do not affect loop)

		// grab any config data
		var phantomKey = this.config && this.config.resolved.key ? this.config.resolved.key.indexOf('$') !== 0 ? '$' + this.config.resolved.key : this.config.resolved.key : '$key';
		var phantomValue = this.config && this.config.resolved.value ? this.config.resolved.value.indexOf('$') !== 0 ? '$' + this.config.resolved.value : this.config.resolved.value : '$value';
		var order = this.order && this.order.resolved ? this.order.resolved : undefined;
		var filter = this.filter && this.filter.resolved ? this.filter.resolved : undefined;

		// add placeholder and remove element from dom
		if (!this.placeholder.start) {
			this.placeholder.end = document.createComment('razilobind:for:end');
			if (this.node.nextSibling === null) this.node.parentNode.appendChild(this.placeholder.end);else this.node.parentNode.insertBefore(this.placeholder.end, this.node.nextSibling);

			this.placeholder.start = document.createComment('razilobind:for:start');
			this.placeholder.end.parentNode.insertBefore(this.placeholder.start, this.placeholder.end);

			this.node.parentNode.removeChild(this.node);
		}

		// order and/or filter the resolved data, dont allow over length of data
		var orderedFiltered = this.orderFilter(this.resolver.resolved, order, filter);

		if (this.offset || this.limit) {
			var offset = this.offset && this.offset.resolved ? parseInt(this.offset.resolved) : 0;
			var limit = this.limit && this.limit.resolved ? parseInt(this.limit.resolved) : 0;

			var nOffset = offset < 1 ? 0 : offset - 1;
			var nLimit = nOffset + limit < 1 ? 0 : (nOffset > 0 ? nOffset - 1 : nOffset) + limit;

			orderedFiltered.resolved = orderedFiltered.resolved.splice(nOffset, nLimit);
			if (orderedFiltered.map) orderedFiltered.map = orderedFiltered.map.splice(nOffset, nLimit);
		}

		var newChildren = [];
		var c = 0;
		for (var key in orderedFiltered.resolved) {
			var newNode = this.node.cloneNode(true);
			newNode.removeAttribute(this.options.prefix + 'bind-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'config-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'alter-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'order-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'filter-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'limit-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'offset-' + this.name);
			newNode.phantom = {
				'iterationKey': orderedFiltered.map ? orderedFiltered.map[key] : key,
				'initialValue': orderedFiltered.resolved[key],
				'observers': this.resolver.observers,
				'keyName': phantomKey,
				'valueName': phantomValue
			};

			newChildren.push(newNode);
		}

		// no children, clear it all out
		if (newChildren.length < 1) {
			for (var _i7 = 0; _i7 < this.children.length; _i7++) {
				this.children[_i7].parentNode.removeChild(this.children[_i7]);
			}this.children = [];
		}

		if (this.children.length > 0) {
			// update children, lets only alter them if they change
			for (var i = 0; i < newChildren.length; i++) {
				// same, skip
				if (this.children[i] && JSON.stringify(this.children[i].phantom) == JSON.stringify(newChildren[i].phantom)) continue;

				if (!!this.children[i] && !!this.children[i].parentNode) {
					this.children[i].parentNode.insertBefore(newChildren[i], this.children[i]);
					this.children[i].parentNode.removeChild(this.children[i]);
				} else this.placeholder.end.parentNode.insertBefore(newChildren[i], this.placeholder.end);

				this.children.splice(i, 1, newChildren[i]);
				if (path) this.traverser.traverse(newChildren[i], this.model);
			}

			// clear up any extras
			for (var i = 0; i < this.children.length; i++) {
				if (i < newChildren.length) continue;

				if (this.children[i] && this.children[i].parentNode) {
					this.children[i].parentNode.removeChild(this.children[i]);
				}
			}

			// clear up cache (do this seperately or splice screws up)
			for (var i = 0; i < this.children.length; i++) {
				if (i < newChildren.length) continue;
				this.children.splice(i, 1);
			}
		} else {
			// new children, just add them as normal
			this.children = newChildren;
			for (var i = 0; i < this.children.length; i++) {
				this.placeholder.end.parentNode.insertBefore(this.children[i], this.placeholder.end);
				if (path) this.traverser.traverse(this.children[i], this.model);
			}
		}
	};

	// order data


	ForBinder.prototype.orderFilter = function orderFilter(resolved, orderBy, filterBy) {
		if (!resolved || !orderBy && !filterBy) return { map: undefined, resolved: resolved };

		var isArray = Array.isArray(resolved);
		var newOrder = [];
		var map = [];

		resolvedloop: for (var key in resolved) {
			// filter out any data before ordering
			if (filterBy) {
				for (var name in filterBy) {
					if (typeof filterBy[name] === 'string' && new RegExp("^" + filterBy[name].split('*').join('.*') + "$").test(resolved[key][name])) continue resolvedloop;else if (Array.isArray(filterBy[name]) && new RegExp("^" + filterBy[name].join('').split('*').join('.*') + "$").test(resolved[key][name])) continue resolvedloop;
				}
			}

			// if first bit of data or no order defined, push data
			if (map.length < 1 || !orderBy) {
				map.push(key);
				newOrder.push(resolved[key]);
				continue;
			}

			// get position for order
			orderloop: for (var i = 0; i < newOrder.length; i++) {
				for (var _name in orderBy) {
					if (orderBy[_name] == 'asc' && resolved[key][_name] > newOrder[i][_name]) continue orderloop;
					if (resolved[key][_name] == newOrder[i][_name]) continue;
					if (orderBy[_name] == 'desc' && resolved[key][_name] < newOrder[i][_name]) continue orderloop;
				}
				break;
			}

			// splice data into new stack
			map.splice(i, 0, key);
			newOrder.splice(i, 0, resolved[key]);
		}

		return { map: map, resolved: newOrder };
	};

	return ForBinder;
}(_binder2.default);

exports.default = ForBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvci5iaW5kZXIuanMiXSwibmFtZXMiOlsiRm9yQmluZGVyIiwib3B0aW9ucyIsInRyYXZlcnNlciIsIm5hbWUiLCJhY2NlcHRzIiwicGxhY2Vob2xkZXIiLCJjaGlsZHJlbiIsImRldGVjdCIsIm5vZGUiLCJub2RlVHlwZSIsInJlc29sdmFibGUiLCJoYXNBdHRyaWJ1dGUiLCJwcmVmaXgiLCJnZXRBdHRyaWJ1dGUiLCJ1bmRlZmluZWQiLCJjb25maWd1cmFibGUiLCJhbHRlcmFibGUiLCJvcmRlcmFibGUiLCJmaWx0ZXJhYmxlIiwibGltaXRhYmxlIiwib2Zmc2V0YWJsZSIsImJ1aWxkIiwibW9kZWwiLCJwcmlvcml0eSIsInJlc29sdmVyIiwiYWx0ZXJlciIsImNvbmZpZyIsIm9yZGVyIiwiZmlsdGVyIiwibGltaXQiLCJvZmZzZXQiLCJsZW5ndGgiLCJpbmRleE9mIiwidXBkYXRlIiwib2JzZXJ2ZXJzIiwiaSIsIm9ic2VydmFibGVzIiwicHVzaCIsIm9sZFZhbHVlIiwicGF0aCIsImFjdGlvbiIsImtleSIsInJlc29sdmUiLCJuZXdWYWx1ZSIsInJlc29sdmVkIiwiYWx0ZXJlcnMiLCJiaW5kIiwib2JqZWN0S2V5IiwicGhhbnRvbUtleSIsInBoYW50b21WYWx1ZSIsInZhbHVlIiwic3RhcnQiLCJlbmQiLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCJuZXh0U2libGluZyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwib3JkZXJlZEZpbHRlcmVkIiwib3JkZXJGaWx0ZXIiLCJwYXJzZUludCIsIm5PZmZzZXQiLCJuTGltaXQiLCJzcGxpY2UiLCJtYXAiLCJuZXdDaGlsZHJlbiIsImMiLCJuZXdOb2RlIiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwicGhhbnRvbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmF2ZXJzZSIsIm9yZGVyQnkiLCJmaWx0ZXJCeSIsImlzQXJyYXkiLCJBcnJheSIsIm5ld09yZGVyIiwicmVzb2x2ZWRsb29wIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwidGVzdCIsIm9yZGVybG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkEsUzs7O0FBQ3BCLG9CQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixRQUF4QixFQUFrQyxPQUFsQyxFQUEyQyxRQUEzQyxDQUFmO0FBQ0EsUUFBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFQK0I7QUFRL0I7O0FBRUQ7Ozs7Ozs7O3FCQU1BQyxNLG1CQUFPQyxJLEVBQU07QUFDWjtBQUNBLE1BQUlBLEtBQUtDLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUIsT0FBTyxLQUFQOztBQUV6QixPQUFLQyxVQUFMLEdBQWtCRixLQUFLRyxZQUFMLENBQWtCLEtBQUtWLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixPQUF0QixHQUFnQyxLQUFLVCxJQUF2RCxJQUErREssS0FBS0ssWUFBTCxDQUFrQixLQUFLWixPQUFMLENBQWFXLE1BQWIsR0FBc0IsT0FBdEIsR0FBZ0MsS0FBS1QsSUFBdkQsQ0FBL0QsR0FBOEhXLFNBQWhKO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQlAsS0FBS0csWUFBTCxDQUFrQixLQUFLVixPQUFMLENBQWFXLE1BQWIsR0FBc0IsU0FBdEIsR0FBa0MsS0FBS1QsSUFBekQsSUFBaUVLLEtBQUtLLFlBQUwsQ0FBa0IsS0FBS1osT0FBTCxDQUFhVyxNQUFiLEdBQXNCLFNBQXRCLEdBQWtDLEtBQUtULElBQXpELENBQWpFLEdBQWtJVyxTQUF0SjtBQUNBLE9BQUtFLFNBQUwsR0FBaUJSLEtBQUtHLFlBQUwsQ0FBa0IsS0FBS1YsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEtBQUtULElBQXhELElBQWdFSyxLQUFLSyxZQUFMLENBQWtCLEtBQUtaLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixRQUF0QixHQUFpQyxLQUFLVCxJQUF4RCxDQUFoRSxHQUFnSVcsU0FBako7QUFDQSxPQUFLRyxTQUFMLEdBQWlCVCxLQUFLRyxZQUFMLENBQWtCLEtBQUtWLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixRQUF0QixHQUFpQyxLQUFLVCxJQUF4RCxJQUFnRUssS0FBS0ssWUFBTCxDQUFrQixLQUFLWixPQUFMLENBQWFXLE1BQWIsR0FBc0IsUUFBdEIsR0FBaUMsS0FBS1QsSUFBeEQsQ0FBaEUsR0FBZ0lXLFNBQWpKO0FBQ0EsT0FBS0ksVUFBTCxHQUFrQlYsS0FBS0csWUFBTCxDQUFrQixLQUFLVixPQUFMLENBQWFXLE1BQWIsR0FBc0IsU0FBdEIsR0FBa0MsS0FBS1QsSUFBekQsSUFBaUVLLEtBQUtLLFlBQUwsQ0FBa0IsS0FBS1osT0FBTCxDQUFhVyxNQUFiLEdBQXNCLFNBQXRCLEdBQWtDLEtBQUtULElBQXpELENBQWpFLEdBQWtJVyxTQUFwSjtBQUNBLE9BQUtLLFNBQUwsR0FBaUJYLEtBQUtHLFlBQUwsQ0FBa0IsS0FBS1YsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEtBQUtULElBQXhELElBQWdFSyxLQUFLSyxZQUFMLENBQWtCLEtBQUtaLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixRQUF0QixHQUFpQyxLQUFLVCxJQUF4RCxDQUFoRSxHQUFnSVcsU0FBako7QUFDQSxPQUFLTSxVQUFMLEdBQWtCWixLQUFLRyxZQUFMLENBQWtCLEtBQUtWLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixTQUF0QixHQUFrQyxLQUFLVCxJQUF6RCxJQUFpRUssS0FBS0ssWUFBTCxDQUFrQixLQUFLWixPQUFMLENBQWFXLE1BQWIsR0FBc0IsU0FBdEIsR0FBa0MsS0FBS1QsSUFBekQsQ0FBakUsR0FBa0lXLFNBQXBKOztBQUVBLE1BQUksQ0FBQyxLQUFLSixVQUFWLEVBQXNCLE9BQU8sS0FBUDs7QUFFdEIsT0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRTs7QUFFRDs7Ozs7Ozs7cUJBTUFhLEssa0JBQU1DLEssRUFBTztBQUNaO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsdUNBQXVCQSxRQUF2QixDQUFnQyxLQUFLZCxVQUFyQyxFQUFpRCxLQUFLRixJQUF0RCxDQUFoQjtBQUNBLE9BQUtpQixPQUFMLEdBQWUsdUNBQXVCRCxRQUF2QixDQUFnQyxLQUFLUixTQUFyQyxFQUFnRCxLQUFLUixJQUFyRCxDQUFmO0FBQ0EsT0FBS2tCLE1BQUwsR0FBYyx1Q0FBdUJGLFFBQXZCLENBQWdDLEtBQUtULFlBQXJDLEVBQW1ELEtBQUtQLElBQXhELENBQWQ7QUFDQSxPQUFLbUIsS0FBTCxHQUFhLHVDQUF1QkgsUUFBdkIsQ0FBZ0MsS0FBS1AsU0FBckMsRUFBZ0QsS0FBS1QsSUFBckQsQ0FBYjtBQUNBLE9BQUtvQixNQUFMLEdBQWMsdUNBQXVCSixRQUF2QixDQUFnQyxLQUFLTixVQUFyQyxFQUFpRCxLQUFLVixJQUF0RCxDQUFkO0FBQ0EsT0FBS3FCLEtBQUwsR0FBYSx1Q0FBdUJMLFFBQXZCLENBQWdDLEtBQUtMLFNBQXJDLEVBQWdELEtBQUtYLElBQXJELENBQWI7QUFDQSxPQUFLc0IsTUFBTCxHQUFjLHVDQUF1Qk4sUUFBdkIsQ0FBZ0MsS0FBS0osVUFBckMsRUFBaUQsS0FBS1osSUFBdEQsQ0FBZDtBQUNBLE9BQUtjLEtBQUwsR0FBYUEsS0FBYjs7QUFFQTtBQUNBLE1BQUksS0FBS0UsUUFBTCxLQUFrQixLQUFLcEIsT0FBTCxDQUFhMkIsTUFBYixLQUF3QixDQUF4QixJQUE2QixLQUFLM0IsT0FBTCxDQUFhNEIsT0FBYixDQUFxQixLQUFLUixRQUFMLENBQWNyQixJQUFuQyxLQUE0QyxDQUEzRixDQUFKLEVBQW1HLEtBQUs4QixNQUFMOztBQUVuRztBQUNBLE1BQUksS0FBS1QsUUFBTCxDQUFjVSxTQUFsQixFQUE2QixLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLWCxRQUFMLENBQWNVLFNBQWQsQ0FBd0JILE1BQTVDLEVBQW9ESSxHQUFwRDtBQUF5RCxPQUFJLEtBQUtDLFdBQUwsQ0FBaUJKLE9BQWpCLENBQXlCLEtBQUtSLFFBQUwsQ0FBY1UsU0FBZCxDQUF3QkMsQ0FBeEIsQ0FBekIsSUFBdUQsQ0FBM0QsRUFBOEQsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsS0FBS2IsUUFBTCxDQUFjVSxTQUFkLENBQXdCQyxDQUF4QixDQUF0QjtBQUF2SCxHQUM3QixJQUFJLEtBQUtWLE9BQUwsQ0FBYVMsU0FBakIsRUFBNEIsS0FBSyxJQUFJQyxLQUFJLENBQWIsRUFBZ0JBLEtBQUksS0FBS1YsT0FBTCxDQUFhUyxTQUFiLENBQXVCSCxNQUEzQyxFQUFtREksSUFBbkQ7QUFBd0QsT0FBSSxLQUFLQyxXQUFMLENBQWlCSixPQUFqQixDQUF5QixLQUFLUCxPQUFMLENBQWFTLFNBQWIsQ0FBdUJDLEVBQXZCLENBQXpCLElBQXNELENBQTFELEVBQTZELEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLEtBQUtaLE9BQUwsQ0FBYVMsU0FBYixDQUF1QkMsRUFBdkIsQ0FBdEI7QUFBckgsR0FDNUIsSUFBSSxLQUFLVCxNQUFMLENBQVlRLFNBQWhCLEVBQTJCLEtBQUssSUFBSUMsTUFBSSxDQUFiLEVBQWdCQSxNQUFJLEtBQUtULE1BQUwsQ0FBWVEsU0FBWixDQUFzQkgsTUFBMUMsRUFBa0RJLEtBQWxEO0FBQXVELE9BQUksS0FBS0MsV0FBTCxDQUFpQkosT0FBakIsQ0FBeUIsS0FBS04sTUFBTCxDQUFZUSxTQUFaLENBQXNCQyxHQUF0QixDQUF6QixJQUFxRCxDQUF6RCxFQUE0RCxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixLQUFLWCxNQUFMLENBQVlRLFNBQVosQ0FBc0JDLEdBQXRCLENBQXRCO0FBQW5ILEdBQzNCLElBQUksS0FBS1IsS0FBTCxDQUFXTyxTQUFmLEVBQTBCLEtBQUssSUFBSUMsTUFBSSxDQUFiLEVBQWdCQSxNQUFJLEtBQUtSLEtBQUwsQ0FBV08sU0FBWCxDQUFxQkgsTUFBekMsRUFBaURJLEtBQWpEO0FBQXNELE9BQUksS0FBS0MsV0FBTCxDQUFpQkosT0FBakIsQ0FBeUIsS0FBS0wsS0FBTCxDQUFXTyxTQUFYLENBQXFCQyxHQUFyQixDQUF6QixJQUFvRCxDQUF4RCxFQUEyRCxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixLQUFLVixLQUFMLENBQVdPLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXRCO0FBQWpILEdBQzFCLElBQUksS0FBS1AsTUFBTCxDQUFZTSxTQUFoQixFQUEyQixLQUFLLElBQUlDLE1BQUksQ0FBYixFQUFnQkEsTUFBSSxLQUFLUCxNQUFMLENBQVlNLFNBQVosQ0FBc0JILE1BQTFDLEVBQWtESSxLQUFsRDtBQUF1RCxPQUFJLEtBQUtDLFdBQUwsQ0FBaUJKLE9BQWpCLENBQXlCLEtBQUtKLE1BQUwsQ0FBWU0sU0FBWixDQUFzQkMsR0FBdEIsQ0FBekIsSUFBcUQsQ0FBekQsRUFBNEQsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsS0FBS1QsTUFBTCxDQUFZTSxTQUFaLENBQXNCQyxHQUF0QixDQUF0QjtBQUFuSCxHQUMzQixJQUFJLEtBQUtOLEtBQUwsQ0FBV0ssU0FBZixFQUEwQixLQUFLLElBQUlDLE1BQUksQ0FBYixFQUFnQkEsTUFBSSxLQUFLTixLQUFMLENBQVdLLFNBQVgsQ0FBcUJILE1BQXpDLEVBQWlESSxLQUFqRDtBQUFzRCxPQUFJLEtBQUtDLFdBQUwsQ0FBaUJKLE9BQWpCLENBQXlCLEtBQUtILEtBQUwsQ0FBV0ssU0FBWCxDQUFxQkMsR0FBckIsQ0FBekIsSUFBb0QsQ0FBeEQsRUFBMkQsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsS0FBS1IsS0FBTCxDQUFXSyxTQUFYLENBQXFCQyxHQUFyQixDQUF0QjtBQUFqSCxHQUMxQixJQUFJLEtBQUtMLE1BQUwsQ0FBWUksU0FBaEIsRUFBMkIsS0FBSyxJQUFJQyxNQUFJLENBQWIsRUFBZ0JBLE1BQUksS0FBS0wsTUFBTCxDQUFZSSxTQUFaLENBQXNCSCxNQUExQyxFQUFrREksS0FBbEQ7QUFBdUQsT0FBSSxLQUFLQyxXQUFMLENBQWlCSixPQUFqQixDQUF5QixLQUFLRixNQUFMLENBQVlJLFNBQVosQ0FBc0JDLEdBQXRCLENBQXpCLElBQXFELENBQXpELEVBQTRELEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLEtBQUtQLE1BQUwsQ0FBWUksU0FBWixDQUFzQkMsR0FBdEIsQ0FBdEI7QUFBbkgsR0FFM0IsT0FBTyxJQUFQO0FBQ0EsRTs7QUFFRDs7Ozs7Ozs7OztxQkFRQUYsTSxtQkFBT0ssUSxFQUFVQyxJLEVBQU1DLE0sRUFBUUMsRyxFQUFLO0FBQ25DO0FBQ0EsT0FBS2pCLFFBQUwsQ0FBY2tCLE9BQWQsQ0FBc0IsS0FBS3BCLEtBQTNCO0FBQ0EsTUFBSXFCLFdBQVcsS0FBS25CLFFBQUwsQ0FBY29CLFFBQTdCOztBQUVBLE1BQUksS0FBS2xCLE1BQVQsRUFBaUIsS0FBS0EsTUFBTCxDQUFZZ0IsT0FBWixDQUFvQixLQUFLcEIsS0FBekI7QUFDakIsTUFBSSxLQUFLSyxLQUFULEVBQWdCLEtBQUtBLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQixLQUFLcEIsS0FBeEI7QUFDaEIsTUFBSSxLQUFLTSxNQUFULEVBQWlCLEtBQUtBLE1BQUwsQ0FBWWMsT0FBWixDQUFvQixLQUFLcEIsS0FBekI7QUFDakIsTUFBSSxLQUFLTyxLQUFULEVBQWdCLEtBQUtBLEtBQUwsQ0FBV2EsT0FBWCxDQUFtQixLQUFLcEIsS0FBeEI7QUFDaEIsTUFBSSxLQUFLUSxNQUFULEVBQWlCLEtBQUtBLE1BQUwsQ0FBWVksT0FBWixDQUFvQixLQUFLcEIsS0FBekI7QUFDakIsTUFBSSxLQUFLRyxPQUFULEVBQ0E7QUFDQztBQUNBLFFBQUtBLE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUIsS0FBS3BCLEtBQTFCO0FBQ0EsUUFBS0UsUUFBTCxDQUFjb0IsUUFBZCxHQUF5Qix1Q0FBdUJDLFFBQXZCLENBQWdDLEtBQUtwQixPQUFMLENBQWFtQixRQUE3QyxFQUF1RCxLQUFLcEIsUUFBTCxDQUFjb0IsUUFBckUsQ0FBekI7QUFDQTs7QUFFRCxPQUFLRSxJQUFMLENBQVVSLFFBQVYsRUFBb0JDLElBQXBCLEVBQTBCQyxNQUExQixFQUFrQ0MsR0FBbEM7O0FBRUE7QUFDQSxNQUFJRCxXQUFXLGVBQWYsRUFBZ0MsT0FBTyxLQUFLdEMsU0FBTCxDQUFla0MsV0FBZixDQUEyQkcsT0FBTyxHQUFQLEdBQWFFLEdBQXhDLENBQVAsQ0FBaEMsS0FDSyxJQUFJRCxXQUFXLGNBQWYsRUFBK0IsS0FBSyxJQUFJTCxJQUFJUSxTQUFTWixNQUFULEdBQWlCLENBQTlCLEVBQWlDSSxJQUFJRyxRQUFyQyxFQUErQ0gsR0FBL0M7QUFBb0QsVUFBTyxLQUFLakMsU0FBTCxDQUFla0MsV0FBZixDQUEyQkcsT0FBTyxHQUFQLEdBQWFKLENBQXhDLENBQVA7QUFBcEQ7QUFDcEMsRTs7QUFFRDs7Ozs7OztxQkFLQVcsSSxpQkFBS1IsUSxFQUFVQyxJLEVBQU1DLE0sRUFBUU8sUyxFQUFXO0FBQ3ZDLE1BQUksUUFBTyxLQUFLdkIsUUFBTCxDQUFjb0IsUUFBckIsTUFBa0MsUUFBdEMsRUFBZ0QsT0FEVCxDQUNpQjtBQUN4RCxNQUFJSixVQUFVLFFBQVYsSUFBc0IsT0FBT0YsUUFBUCxLQUFvQixXQUExQyxJQUF5RCxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQWpGLEVBQTJGLE9BRnBELENBRTREOztBQUVuRztBQUNBLE1BQUlVLGFBQWEsS0FBS3RCLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlrQixRQUFaLENBQXFCSCxHQUFwQyxHQUEyQyxLQUFLZixNQUFMLENBQVlrQixRQUFaLENBQXFCSCxHQUFyQixDQUF5QlQsT0FBekIsQ0FBaUMsR0FBakMsTUFBMEMsQ0FBMUMsR0FBOEMsTUFBTSxLQUFLTixNQUFMLENBQVlrQixRQUFaLENBQXFCSCxHQUF6RSxHQUErRSxLQUFLZixNQUFMLENBQVlrQixRQUFaLENBQXFCSCxHQUEvSSxHQUFzSixNQUF2SztBQUNBLE1BQUlRLGVBQWUsS0FBS3ZCLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlrQixRQUFaLENBQXFCTSxLQUFwQyxHQUE2QyxLQUFLeEIsTUFBTCxDQUFZa0IsUUFBWixDQUFxQk0sS0FBckIsQ0FBMkJsQixPQUEzQixDQUFtQyxHQUFuQyxNQUE0QyxDQUE1QyxHQUFnRCxNQUFNLEtBQUtOLE1BQUwsQ0FBWWtCLFFBQVosQ0FBcUJNLEtBQTNFLEdBQW1GLEtBQUt4QixNQUFMLENBQVlrQixRQUFaLENBQXFCTSxLQUFySixHQUE4SixRQUFqTDtBQUNBLE1BQUl2QixRQUFRLEtBQUtBLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdpQixRQUF6QixHQUFvQyxLQUFLakIsS0FBTCxDQUFXaUIsUUFBL0MsR0FBMEQ5QixTQUF0RTtBQUNBLE1BQUljLFNBQVMsS0FBS0EsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWWdCLFFBQTNCLEdBQXNDLEtBQUtoQixNQUFMLENBQVlnQixRQUFsRCxHQUE2RDlCLFNBQTFFOztBQUVBO0FBQ0EsTUFBSSxDQUFDLEtBQUtULFdBQUwsQ0FBaUI4QyxLQUF0QixFQUNBO0FBQ0MsUUFBSzlDLFdBQUwsQ0FBaUIrQyxHQUFqQixHQUF1QkMsU0FBU0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7QUFDQSxPQUFJLEtBQUs5QyxJQUFMLENBQVUrQyxXQUFWLEtBQTBCLElBQTlCLEVBQW9DLEtBQUsvQyxJQUFMLENBQVVnRCxVQUFWLENBQXFCQyxXQUFyQixDQUFpQyxLQUFLcEQsV0FBTCxDQUFpQitDLEdBQWxELEVBQXBDLEtBQ0ssS0FBSzVDLElBQUwsQ0FBVWdELFVBQVYsQ0FBcUJFLFlBQXJCLENBQWtDLEtBQUtyRCxXQUFMLENBQWlCK0MsR0FBbkQsRUFBd0QsS0FBSzVDLElBQUwsQ0FBVStDLFdBQWxFOztBQUVMLFFBQUtsRCxXQUFMLENBQWlCOEMsS0FBakIsR0FBeUJFLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQXpCO0FBQ0EsUUFBS2pELFdBQUwsQ0FBaUIrQyxHQUFqQixDQUFxQkksVUFBckIsQ0FBZ0NFLFlBQWhDLENBQTZDLEtBQUtyRCxXQUFMLENBQWlCOEMsS0FBOUQsRUFBcUUsS0FBSzlDLFdBQUwsQ0FBaUIrQyxHQUF0Rjs7QUFFQSxRQUFLNUMsSUFBTCxDQUFVZ0QsVUFBVixDQUFxQkcsV0FBckIsQ0FBaUMsS0FBS25ELElBQXRDO0FBQ0E7O0FBRUQ7QUFDQSxNQUFJb0Qsa0JBQWtCLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS3JDLFFBQUwsQ0FBY29CLFFBQS9CLEVBQXlDakIsS0FBekMsRUFBZ0RDLE1BQWhELENBQXRCOztBQUVBLE1BQUksS0FBS0UsTUFBTCxJQUFlLEtBQUtELEtBQXhCLEVBQ0E7QUFDQyxPQUFJQyxTQUFTLEtBQUtBLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVljLFFBQTNCLEdBQXNDa0IsU0FBUyxLQUFLaEMsTUFBTCxDQUFZYyxRQUFyQixDQUF0QyxHQUF1RSxDQUFwRjtBQUNBLE9BQUlmLFFBQVEsS0FBS0EsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV2UsUUFBekIsR0FBb0NrQixTQUFTLEtBQUtqQyxLQUFMLENBQVdlLFFBQXBCLENBQXBDLEdBQW9FLENBQWhGOztBQUVBLE9BQUltQixVQUFVakMsU0FBUyxDQUFULEdBQWEsQ0FBYixHQUFpQkEsU0FBUSxDQUF2QztBQUNBLE9BQUlrQyxTQUFTRCxVQUFVbEMsS0FBVixHQUFrQixDQUFsQixHQUFzQixDQUF0QixHQUEwQixDQUFDa0MsVUFBVSxDQUFWLEdBQWNBLFVBQVUsQ0FBeEIsR0FBNEJBLE9BQTdCLElBQXdDbEMsS0FBL0U7O0FBRUErQixtQkFBZ0JoQixRQUFoQixHQUEyQmdCLGdCQUFnQmhCLFFBQWhCLENBQXlCcUIsTUFBekIsQ0FBZ0NGLE9BQWhDLEVBQXlDQyxNQUF6QyxDQUEzQjtBQUNBLE9BQUlKLGdCQUFnQk0sR0FBcEIsRUFBeUJOLGdCQUFnQk0sR0FBaEIsR0FBc0JOLGdCQUFnQk0sR0FBaEIsQ0FBb0JELE1BQXBCLENBQTJCRixPQUEzQixFQUFvQ0MsTUFBcEMsQ0FBdEI7QUFDekI7O0FBRUQsTUFBSUcsY0FBYyxFQUFsQjtBQUNBLE1BQUlDLElBQUksQ0FBUjtBQUNBLE9BQUssSUFBSTNCLEdBQVQsSUFBZ0JtQixnQkFBZ0JoQixRQUFoQyxFQUNBO0FBQ0MsT0FBSXlCLFVBQVUsS0FBSzdELElBQUwsQ0FBVThELFNBQVYsQ0FBb0IsSUFBcEIsQ0FBZDtBQUNBRCxXQUFRRSxlQUFSLENBQXdCLEtBQUt0RSxPQUFMLENBQWFXLE1BQWIsR0FBc0IsT0FBdEIsR0FBZ0MsS0FBS1QsSUFBN0Q7QUFDQWtFLFdBQVFFLGVBQVIsQ0FBd0IsS0FBS3RFLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixTQUF0QixHQUFrQyxLQUFLVCxJQUEvRDtBQUNBa0UsV0FBUUUsZUFBUixDQUF3QixLQUFLdEUsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEtBQUtULElBQTlEO0FBQ0FrRSxXQUFRRSxlQUFSLENBQXdCLEtBQUt0RSxPQUFMLENBQWFXLE1BQWIsR0FBc0IsUUFBdEIsR0FBaUMsS0FBS1QsSUFBOUQ7QUFDQWtFLFdBQVFFLGVBQVIsQ0FBd0IsS0FBS3RFLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixTQUF0QixHQUFrQyxLQUFLVCxJQUEvRDtBQUNBa0UsV0FBUUUsZUFBUixDQUF3QixLQUFLdEUsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEtBQUtULElBQTlEO0FBQ0FrRSxXQUFRRSxlQUFSLENBQXdCLEtBQUt0RSxPQUFMLENBQWFXLE1BQWIsR0FBc0IsU0FBdEIsR0FBa0MsS0FBS1QsSUFBL0Q7QUFDQWtFLFdBQVFHLE9BQVIsR0FBa0I7QUFDakIsb0JBQWdCWixnQkFBZ0JNLEdBQWhCLEdBQXNCTixnQkFBZ0JNLEdBQWhCLENBQW9CekIsR0FBcEIsQ0FBdEIsR0FBaURBLEdBRGhEO0FBRWpCLG9CQUFnQm1CLGdCQUFnQmhCLFFBQWhCLENBQXlCSCxHQUF6QixDQUZDO0FBR2pCLGlCQUFhLEtBQUtqQixRQUFMLENBQWNVLFNBSFY7QUFJakIsZUFBV2MsVUFKTTtBQUtqQixpQkFBYUM7QUFMSSxJQUFsQjs7QUFRQWtCLGVBQVk5QixJQUFaLENBQWlCZ0MsT0FBakI7QUFDQTs7QUFFRDtBQUNBLE1BQUlGLFlBQVlwQyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQzNCLFFBQUssSUFBSUksTUFBSSxDQUFiLEVBQWdCQSxNQUFJLEtBQUs3QixRQUFMLENBQWN5QixNQUFsQyxFQUEwQ0ksS0FBMUM7QUFBK0MsU0FBSzdCLFFBQUwsQ0FBYzZCLEdBQWQsRUFBaUJxQixVQUFqQixDQUE0QkcsV0FBNUIsQ0FBd0MsS0FBS3JELFFBQUwsQ0FBYzZCLEdBQWQsQ0FBeEM7QUFBL0MsSUFDQSxLQUFLN0IsUUFBTCxHQUFnQixFQUFoQjtBQUNBOztBQUVELE1BQUksS0FBS0EsUUFBTCxDQUFjeUIsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM3QjtBQUNBLFFBQUssSUFBSUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ0MsWUFBWXBDLE1BQWhDLEVBQXdDSSxHQUF4QyxFQUNBO0FBQ0M7QUFDQSxRQUFJLEtBQUs3QixRQUFMLENBQWM2QixDQUFkLEtBQW9Cc0MsS0FBS0MsU0FBTCxDQUFlLEtBQUtwRSxRQUFMLENBQWM2QixDQUFkLEVBQWlCcUMsT0FBaEMsS0FBNENDLEtBQUtDLFNBQUwsQ0FBZVAsWUFBWWhDLENBQVosRUFBZXFDLE9BQTlCLENBQXBFLEVBQTRHOztBQUU1RyxRQUFJLENBQUMsQ0FBQyxLQUFLbEUsUUFBTCxDQUFjNkIsQ0FBZCxDQUFGLElBQXNCLENBQUMsQ0FBQyxLQUFLN0IsUUFBTCxDQUFjNkIsQ0FBZCxFQUFpQnFCLFVBQTdDLEVBQXlEO0FBQ3hELFVBQUtsRCxRQUFMLENBQWM2QixDQUFkLEVBQWlCcUIsVUFBakIsQ0FBNEJFLFlBQTVCLENBQXlDUyxZQUFZaEMsQ0FBWixDQUF6QyxFQUF5RCxLQUFLN0IsUUFBTCxDQUFjNkIsQ0FBZCxDQUF6RDtBQUNBLFVBQUs3QixRQUFMLENBQWM2QixDQUFkLEVBQWlCcUIsVUFBakIsQ0FBNEJHLFdBQTVCLENBQXdDLEtBQUtyRCxRQUFMLENBQWM2QixDQUFkLENBQXhDO0FBQ0EsS0FIRCxNQUdPLEtBQUs5QixXQUFMLENBQWlCK0MsR0FBakIsQ0FBcUJJLFVBQXJCLENBQWdDRSxZQUFoQyxDQUE2Q1MsWUFBWWhDLENBQVosQ0FBN0MsRUFBNkQsS0FBSzlCLFdBQUwsQ0FBaUIrQyxHQUE5RTs7QUFFUCxTQUFLOUMsUUFBTCxDQUFjMkQsTUFBZCxDQUFxQjlCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCZ0MsWUFBWWhDLENBQVosQ0FBM0I7QUFDQSxRQUFJSSxJQUFKLEVBQVUsS0FBS3JDLFNBQUwsQ0FBZXlFLFFBQWYsQ0FBd0JSLFlBQVloQyxDQUFaLENBQXhCLEVBQXdDLEtBQUtiLEtBQTdDO0FBQ1Y7O0FBRUQ7QUFDQSxRQUFLLElBQUlhLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLN0IsUUFBTCxDQUFjeUIsTUFBbEMsRUFBMENJLEdBQTFDLEVBQStDO0FBQzlDLFFBQUlBLElBQUlnQyxZQUFZcEMsTUFBcEIsRUFBNEI7O0FBRTVCLFFBQUksS0FBS3pCLFFBQUwsQ0FBYzZCLENBQWQsS0FBb0IsS0FBSzdCLFFBQUwsQ0FBYzZCLENBQWQsRUFBaUJxQixVQUF6QyxFQUFxRDtBQUNwRCxVQUFLbEQsUUFBTCxDQUFjNkIsQ0FBZCxFQUFpQnFCLFVBQWpCLENBQTRCRyxXQUE1QixDQUF3QyxLQUFLckQsUUFBTCxDQUFjNkIsQ0FBZCxDQUF4QztBQUNBO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFLLElBQUlBLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLN0IsUUFBTCxDQUFjeUIsTUFBbEMsRUFBMENJLEdBQTFDLEVBQStDO0FBQzlDLFFBQUlBLElBQUlnQyxZQUFZcEMsTUFBcEIsRUFBNEI7QUFDNUIsU0FBS3pCLFFBQUwsQ0FBYzJELE1BQWQsQ0FBcUI5QixDQUFyQixFQUF3QixDQUF4QjtBQUNBO0FBQ0QsR0E5QkQsTUE4Qk87QUFDTjtBQUNBLFFBQUs3QixRQUFMLEdBQWdCNkQsV0FBaEI7QUFDQSxRQUFLLElBQUloQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzdCLFFBQUwsQ0FBY3lCLE1BQWxDLEVBQTBDSSxHQUExQyxFQUNBO0FBQ0MsU0FBSzlCLFdBQUwsQ0FBaUIrQyxHQUFqQixDQUFxQkksVUFBckIsQ0FBZ0NFLFlBQWhDLENBQTZDLEtBQUtwRCxRQUFMLENBQWM2QixDQUFkLENBQTdDLEVBQStELEtBQUs5QixXQUFMLENBQWlCK0MsR0FBaEY7QUFDQSxRQUFJYixJQUFKLEVBQVUsS0FBS3JDLFNBQUwsQ0FBZXlFLFFBQWYsQ0FBd0IsS0FBS3JFLFFBQUwsQ0FBYzZCLENBQWQsQ0FBeEIsRUFBMEMsS0FBS2IsS0FBL0M7QUFDVjtBQUNEO0FBQ0QsRTs7QUFFRDs7O3FCQUNBdUMsVyx3QkFBWWpCLFEsRUFBVWdDLE8sRUFBU0MsUSxFQUFVO0FBQ3hDLE1BQUksQ0FBQ2pDLFFBQUQsSUFBYyxDQUFDZ0MsT0FBRCxJQUFZLENBQUNDLFFBQS9CLEVBQTBDLE9BQU8sRUFBQ1gsS0FBS3BELFNBQU4sRUFBaUI4QixVQUFVQSxRQUEzQixFQUFQOztBQUUxQyxNQUFJa0MsVUFBVUMsTUFBTUQsT0FBTixDQUFjbEMsUUFBZCxDQUFkO0FBQ0EsTUFBSW9DLFdBQVcsRUFBZjtBQUNBLE1BQUlkLE1BQU0sRUFBVjs7QUFFQWUsZ0JBQ0EsS0FBSyxJQUFJeEMsR0FBVCxJQUFnQkcsUUFBaEIsRUFBMEI7QUFDekI7QUFDQSxPQUFJaUMsUUFBSixFQUNBO0FBQ0MsU0FBSyxJQUFJMUUsSUFBVCxJQUFpQjBFLFFBQWpCLEVBQ0E7QUFDQyxTQUFJLE9BQU9BLFNBQVMxRSxJQUFULENBQVAsS0FBMEIsUUFBMUIsSUFBc0MsSUFBSStFLE1BQUosQ0FBVyxNQUFNTCxTQUFTMUUsSUFBVCxFQUFlZ0YsS0FBZixDQUFxQixHQUFyQixFQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBTixHQUE2QyxHQUF4RCxFQUE2REMsSUFBN0QsQ0FBa0V6QyxTQUFTSCxHQUFULEVBQWN0QyxJQUFkLENBQWxFLENBQTFDLEVBQWtJLFNBQVM4RSxZQUFULENBQWxJLEtBQ0ssSUFBSUYsTUFBTUQsT0FBTixDQUFjRCxTQUFTMUUsSUFBVCxDQUFkLEtBQWlDLElBQUkrRSxNQUFKLENBQVcsTUFBTUwsU0FBUzFFLElBQVQsRUFBZWlGLElBQWYsQ0FBb0IsRUFBcEIsRUFBd0JELEtBQXhCLENBQThCLEdBQTlCLEVBQW1DQyxJQUFuQyxDQUF3QyxJQUF4QyxDQUFOLEdBQXNELEdBQWpFLEVBQXNFQyxJQUF0RSxDQUEyRXpDLFNBQVNILEdBQVQsRUFBY3RDLElBQWQsQ0FBM0UsQ0FBckMsRUFBc0ksU0FBUzhFLFlBQVQ7QUFDM0k7QUFDRDs7QUFFRDtBQUNBLE9BQUlmLElBQUluQyxNQUFKLEdBQWEsQ0FBYixJQUFrQixDQUFDNkMsT0FBdkIsRUFBZ0M7QUFDL0JWLFFBQUk3QixJQUFKLENBQVNJLEdBQVQ7QUFDQXVDLGFBQVMzQyxJQUFULENBQWNPLFNBQVNILEdBQVQsQ0FBZDtBQUNBO0FBQ0E7O0FBRUQ7QUFDQTZDLGNBQ0EsS0FBSyxJQUFJbkQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNkMsU0FBU2pELE1BQTdCLEVBQXFDSSxHQUFyQyxFQUEwQztBQUN6QyxTQUFLLElBQUloQyxLQUFULElBQWlCeUUsT0FBakIsRUFBMEI7QUFDekIsU0FBSUEsUUFBUXpFLEtBQVIsS0FBaUIsS0FBakIsSUFBMEJ5QyxTQUFTSCxHQUFULEVBQWN0QyxLQUFkLElBQXNCNkUsU0FBUzdDLENBQVQsRUFBWWhDLEtBQVosQ0FBcEQsRUFBdUUsU0FBU21GLFNBQVQ7QUFDdkUsU0FBSTFDLFNBQVNILEdBQVQsRUFBY3RDLEtBQWQsS0FBdUI2RSxTQUFTN0MsQ0FBVCxFQUFZaEMsS0FBWixDQUEzQixFQUE4QztBQUM5QyxTQUFJeUUsUUFBUXpFLEtBQVIsS0FBaUIsTUFBakIsSUFBMkJ5QyxTQUFTSCxHQUFULEVBQWN0QyxLQUFkLElBQXNCNkUsU0FBUzdDLENBQVQsRUFBWWhDLEtBQVosQ0FBckQsRUFBd0UsU0FBU21GLFNBQVQ7QUFDeEU7QUFDRDtBQUNBOztBQUVEO0FBQ0FwQixPQUFJRCxNQUFKLENBQVc5QixDQUFYLEVBQWMsQ0FBZCxFQUFpQk0sR0FBakI7QUFDQXVDLFlBQVNmLE1BQVQsQ0FBZ0I5QixDQUFoQixFQUFtQixDQUFuQixFQUFzQlMsU0FBU0gsR0FBVCxDQUF0QjtBQUNBOztBQUVELFNBQU8sRUFBQ3lCLEtBQUtBLEdBQU4sRUFBV3RCLFVBQVVvQyxRQUFyQixFQUFQO0FBQ0EsRTs7Ozs7a0JBalFtQmhGLFMiLCJmaWxlIjoiZm9yLmJpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmF6aWxvQmluZENvcmVEZXRlY3Rvcn0gZnJvbSAncmF6aWxvYmluZC1jb3JlJ1xuXG5pbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIEZvciBCaW5kZXJcbiAqIEFsdGVycyBlbGVtZW50cyBzdHlsZSBiYXNlZCBvbiByZXNvbHZlZCBkYXRhIGNvbnRlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBjb25maWcsIG1vZGVsLCBhY2NlcHRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvckJpbmRlciBleHRlbmRzIEJpbmRlciB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHRyYXZlcnNlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnRyYXZlcnNlciA9IHRyYXZlcnNlcjtcblx0XHR0aGlzLm5hbWUgPSAnZm9yJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnbWV0aG9kJywgJ2FycmF5JywgJ29iamVjdCddO1xuXHRcdHRoaXMucGxhY2Vob2xkZXIgPSB7fTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHQvKipcblx0ICogT1ZFUlJJREU6ZGV0ZWN0KClcblx0ICogQmFzaWMgZGV0ZWN0aW9uIG9mIGFuIGVsZW1lbnQgYnkgaXRzIGF0dHJpYnV0ZSwgc2V0dGluZyByZXNvbHZhYmxlXG5cdCAqIEBwYXJhbSBodG1sLW5vZGUgbm9kZSBUaGUgbm9kZSB0byBkZXRlY3QgYW55IGJpbmRhYmxlcyBvblxuXHQgKiBAcmV0dXJuIGJvb2wgVHJ1ZSBvbiBiaW5kYWJsZSwgZmFsc2Ugb24gZmFpbFxuXHQgKi9cblx0ZGV0ZWN0KG5vZGUpIHtcblx0XHQvLyBhbGxvdyBlbGVtZW50IG5vZGVzIG9ubHlcblx0XHRpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy5yZXNvbHZhYmxlID0gbm9kZS5oYXNBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdiaW5kLScgKyB0aGlzLm5hbWUpID8gbm9kZS5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdiaW5kLScgKyB0aGlzLm5hbWUpIDogdW5kZWZpbmVkO1xuXHRcdHRoaXMuY29uZmlndXJhYmxlID0gbm9kZS5oYXNBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdjb25maWctJyArIHRoaXMubmFtZSkgPyBub2RlLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsgJ2NvbmZpZy0nICsgdGhpcy5uYW1lKSA6IHVuZGVmaW5lZDtcblx0XHR0aGlzLmFsdGVyYWJsZSA9IG5vZGUuaGFzQXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnYWx0ZXItJyArIHRoaXMubmFtZSkgPyBub2RlLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsgJ2FsdGVyLScgKyB0aGlzLm5hbWUpIDogdW5kZWZpbmVkO1xuXHRcdHRoaXMub3JkZXJhYmxlID0gbm9kZS5oYXNBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdvcmRlci0nICsgdGhpcy5uYW1lKSA/IG5vZGUuZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnb3JkZXItJyArIHRoaXMubmFtZSkgOiB1bmRlZmluZWQ7XG5cdFx0dGhpcy5maWx0ZXJhYmxlID0gbm9kZS5oYXNBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdmaWx0ZXItJyArIHRoaXMubmFtZSkgPyBub2RlLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsgJ2ZpbHRlci0nICsgdGhpcy5uYW1lKSA6IHVuZGVmaW5lZDtcblx0XHR0aGlzLmxpbWl0YWJsZSA9IG5vZGUuaGFzQXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnbGltaXQtJyArIHRoaXMubmFtZSkgPyBub2RlLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsgJ2xpbWl0LScgKyB0aGlzLm5hbWUpIDogdW5kZWZpbmVkO1xuXHRcdHRoaXMub2Zmc2V0YWJsZSA9IG5vZGUuaGFzQXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnb2Zmc2V0LScgKyB0aGlzLm5hbWUpID8gbm9kZS5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdvZmZzZXQtJyArIHRoaXMubmFtZSkgOiB1bmRlZmluZWQ7XG5cblx0XHRpZiAoIXRoaXMucmVzb2x2YWJsZSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPVkVSUklERTpidWlsZCgpXG5cdCAqIEJ1aWxkIGEgYmluZGFibGUgb2JqZWN0IGFuZCB0cnkgdG8gcmVzb2x2ZSBkYXRhLCBpZiByZXNvbHZlZCBjcmVhdGVzIGluaXRpYWwgYmluZCB0b29cblx0ICogQHBhcmFtIG9iamVjdCBtb2RlbCBUaGUgbW9kZWwgdG8gYXR0ZW1wdCB0byBidWlsZCB0aGUgYmluZGVyIGFnYWluc3Rcblx0ICogQHJldHVybiBCaW5kZXIgVGhlIGJpbmRlciBvZiBzcGVjaWZpYyB0eXBlXG5cdCAqL1xuXHRidWlsZChtb2RlbCkge1xuXHRcdC8vIHNldCBiaW5kYWJsZSBkYXRhXG5cdFx0dGhpcy5wcmlvcml0eSA9IDE7XG5cdFx0dGhpcy5yZXNvbHZlciA9IFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IucmVzb2x2ZXIodGhpcy5yZXNvbHZhYmxlLCB0aGlzLm5vZGUpO1xuXHRcdHRoaXMuYWx0ZXJlciA9IFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IucmVzb2x2ZXIodGhpcy5hbHRlcmFibGUsIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5jb25maWcgPSBSYXppbG9CaW5kQ29yZURldGVjdG9yLnJlc29sdmVyKHRoaXMuY29uZmlndXJhYmxlLCB0aGlzLm5vZGUpO1xuXHRcdHRoaXMub3JkZXIgPSBSYXppbG9CaW5kQ29yZURldGVjdG9yLnJlc29sdmVyKHRoaXMub3JkZXJhYmxlLCB0aGlzLm5vZGUpO1xuXHRcdHRoaXMuZmlsdGVyID0gUmF6aWxvQmluZENvcmVEZXRlY3Rvci5yZXNvbHZlcih0aGlzLmZpbHRlcmFibGUsIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5saW1pdCA9IFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IucmVzb2x2ZXIodGhpcy5saW1pdGFibGUsIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5vZmZzZXQgPSBSYXppbG9CaW5kQ29yZURldGVjdG9yLnJlc29sdmVyKHRoaXMub2Zmc2V0YWJsZSwgdGhpcy5ub2RlKTtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWw7XG5cblx0XHQvLyByZXNvbHZlIGRhdGEgdG8gYWN0dWFscyBhbmQgb2JzZXJ2YWJsZXMgaWYgb2YgY29ycmVjdCB0eXBlIG9yIG5vIHR5cGVzIHNldFxuXHRcdGlmICh0aGlzLnJlc29sdmVyICYmICh0aGlzLmFjY2VwdHMubGVuZ3RoID09PSAwIHx8IHRoaXMuYWNjZXB0cy5pbmRleE9mKHRoaXMucmVzb2x2ZXIubmFtZSkgPj0gMCkpIHRoaXMudXBkYXRlKCk7XG5cblx0XHQvLyBjb2xsYXRlIGJpbmRlcnNcblx0XHRpZiAodGhpcy5yZXNvbHZlci5vYnNlcnZlcnMpIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXNvbHZlci5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIGlmICh0aGlzLm9ic2VydmFibGVzLmluZGV4T2YodGhpcy5yZXNvbHZlci5vYnNlcnZlcnNbaV0pIDwgMCkgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKHRoaXMucmVzb2x2ZXIub2JzZXJ2ZXJzW2ldKTtcblx0XHRpZiAodGhpcy5hbHRlcmVyLm9ic2VydmVycykgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsdGVyZXIub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSBpZiAodGhpcy5vYnNlcnZhYmxlcy5pbmRleE9mKHRoaXMuYWx0ZXJlci5vYnNlcnZlcnNbaV0pIDwgMCkgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKHRoaXMuYWx0ZXJlci5vYnNlcnZlcnNbaV0pO1xuXHRcdGlmICh0aGlzLmNvbmZpZy5vYnNlcnZlcnMpIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSBpZiAodGhpcy5vYnNlcnZhYmxlcy5pbmRleE9mKHRoaXMuY29uZmlnLm9ic2VydmVyc1tpXSkgPCAwKSB0aGlzLm9ic2VydmFibGVzLnB1c2godGhpcy5jb25maWcub2JzZXJ2ZXJzW2ldKTtcblx0XHRpZiAodGhpcy5vcmRlci5vYnNlcnZlcnMpIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcmRlci5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIGlmICh0aGlzLm9ic2VydmFibGVzLmluZGV4T2YodGhpcy5vcmRlci5vYnNlcnZlcnNbaV0pIDwgMCkgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKHRoaXMub3JkZXIub2JzZXJ2ZXJzW2ldKTtcblx0XHRpZiAodGhpcy5maWx0ZXIub2JzZXJ2ZXJzKSBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmlsdGVyLm9ic2VydmVycy5sZW5ndGg7IGkrKykgaWYgKHRoaXMub2JzZXJ2YWJsZXMuaW5kZXhPZih0aGlzLmZpbHRlci5vYnNlcnZlcnNbaV0pIDwgMCkgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKHRoaXMuZmlsdGVyLm9ic2VydmVyc1tpXSk7XG5cdFx0aWYgKHRoaXMubGltaXQub2JzZXJ2ZXJzKSBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGltaXQub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSBpZiAodGhpcy5vYnNlcnZhYmxlcy5pbmRleE9mKHRoaXMubGltaXQub2JzZXJ2ZXJzW2ldKSA8IDApIHRoaXMub2JzZXJ2YWJsZXMucHVzaCh0aGlzLmxpbWl0Lm9ic2VydmVyc1tpXSk7XG5cdFx0aWYgKHRoaXMub2Zmc2V0Lm9ic2VydmVycykgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9mZnNldC5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIGlmICh0aGlzLm9ic2VydmFibGVzLmluZGV4T2YodGhpcy5vZmZzZXQub2JzZXJ2ZXJzW2ldKSA8IDApIHRoaXMub2JzZXJ2YWJsZXMucHVzaCh0aGlzLm9mZnNldC5vYnNlcnZlcnNbaV0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogT1ZFUlJJREU6dXBkYXRlKClcblx0ICogdXBkYXRlcyBvYnNlcnZlcnMgKGFzIHRoZXkgY2FuIGNoYW5nZSBpZiB1c2luZyBwcm9wZXJ0aWVzIGFzIGtleXMpIGFuZCBpc3N1ZSBiaW5kIGluIGNoaWxkXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSBvbmNlIG9iamVjdCBjaGFuZ2UgZGV0ZWN0XG5cdCAqIEBwYXJhbSBzdHJpbmcgcGF0aCBUaGUgcGF0aCB0aGF0IHdhcyBhZmZlY3RlZCAob3IgdGhlIGtleSBpZiBhZGRpbmcgb3IgcmVtb3ZpbmcgYSB2YWx1ZSB0by9mcm9tIGFuIG9iamVjdClcblx0ICogQHBhcmFtIHN0cmluZyBhY3Rpb24gVGhlIGFjdGlvbiB0byBwZXJmb3JtLCAndXBkYXRlJywgJ2FycmF5LWFkZCcsICdhcnJheS1yZW1vdmUnLCAnb2JqZWN0LWFkZCcsICdvYmplY3QtcmVtb3ZlJ1xuXHQgKiBAcGFyYW0gb2JqZWN0IGtleSBUaGUga2V5IG5hbWUgaWYgYW4gb2JqZWN0IHZhbHVlIGlzIGFkZGVkIG9yIHJlbW92ZWRcblx0ICovXG5cdHVwZGF0ZShvbGRWYWx1ZSwgcGF0aCwgYWN0aW9uLCBrZXkpIHtcblx0XHQvLyByZXNvbHZlIGRhdGEsIGJpbmQgdG8gZWxlbWVudCBmcm9tIGNoaWxkIGNsYXNzXG5cdFx0dGhpcy5yZXNvbHZlci5yZXNvbHZlKHRoaXMubW9kZWwpO1xuXHRcdHZhciBuZXdWYWx1ZSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQ7XG5cblx0XHRpZiAodGhpcy5jb25maWcpIHRoaXMuY29uZmlnLnJlc29sdmUodGhpcy5tb2RlbCk7XG5cdFx0aWYgKHRoaXMub3JkZXIpIHRoaXMub3JkZXIucmVzb2x2ZSh0aGlzLm1vZGVsKTtcblx0XHRpZiAodGhpcy5maWx0ZXIpIHRoaXMuZmlsdGVyLnJlc29sdmUodGhpcy5tb2RlbCk7XG5cdFx0aWYgKHRoaXMubGltaXQpIHRoaXMubGltaXQucmVzb2x2ZSh0aGlzLm1vZGVsKTtcblx0XHRpZiAodGhpcy5vZmZzZXQpIHRoaXMub2Zmc2V0LnJlc29sdmUodGhpcy5tb2RlbCk7XG5cdFx0aWYgKHRoaXMuYWx0ZXJlcilcblx0XHR7XG5cdFx0XHQvLyBhbHRlciByZXNvbHZlZCB2YWx1ZVxuXHRcdFx0dGhpcy5hbHRlcmVyLnJlc29sdmUodGhpcy5tb2RlbCk7XG5cdFx0XHR0aGlzLnJlc29sdmVyLnJlc29sdmVkID0gUmF6aWxvQmluZENvcmVEZXRlY3Rvci5hbHRlcmVycyh0aGlzLmFsdGVyZXIucmVzb2x2ZWQsIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpO1xuXHRcdH1cblxuXHRcdHRoaXMuYmluZChvbGRWYWx1ZSwgcGF0aCwgYWN0aW9uLCBrZXkpO1xuXG5cdFx0Ly8gZ2FyYmFnZSBjb2xsZWN0aW9uIG9uIG9ic2VydmFibGVzIG1hcCB3aGljaCBpcyBvbmx5IHRoaW5nIGhvbGRpbmcgcmVmIHRvIGJpbmRlciAoc28gYmluZGVyIHdpbGwgYmUgcmVsZWFzZWQgbmF0dXJhbGx5KVxuXHRcdGlmIChhY3Rpb24gPT09ICdvYmplY3QtcmVtb3ZlJykgZGVsZXRlIHRoaXMudHJhdmVyc2VyLm9ic2VydmFibGVzW3BhdGggKyAnLicgKyBrZXldO1xuXHRcdGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2FycmF5LXJlbW92ZScpXHRmb3IgKHZhciBpID0gbmV3VmFsdWUubGVuZ3RoIC0xOyBpIDwgb2xkVmFsdWU7IGkrKykgZGVsZXRlIHRoaXMudHJhdmVyc2VyLm9ic2VydmFibGVzW3BhdGggKyAnLicgKyBpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZChvbGRWYWx1ZSwgcGF0aCwgYWN0aW9uLCBvYmplY3RLZXkpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQgIT09ICdvYmplY3QnKSByZXR1cm47IC8vIGRvIG5vdCByZS1kcmF3IGZvciBub24gb2JqZWN0c1xuXHRcdGlmIChhY3Rpb24gPT0gJ3VwZGF0ZScgJiYgdHlwZW9mIG9sZFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb2xkVmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm47IC8vIGRvIG5vdCByZS1kcmF3IG9uIGxpdGFyYWwgY2hhbmdlcyAoYXMgdGhleSBkbyBub3QgYWZmZWN0IGxvb3ApXG5cblx0XHQvLyBncmFiIGFueSBjb25maWcgZGF0YVxuXHRcdHZhciBwaGFudG9tS2V5ID0gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucmVzb2x2ZWQua2V5ID8gKHRoaXMuY29uZmlnLnJlc29sdmVkLmtleS5pbmRleE9mKCckJykgIT09IDAgPyAnJCcgKyB0aGlzLmNvbmZpZy5yZXNvbHZlZC5rZXkgOiB0aGlzLmNvbmZpZy5yZXNvbHZlZC5rZXkpIDogJyRrZXknO1xuXHRcdHZhciBwaGFudG9tVmFsdWUgPSB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5yZXNvbHZlZC52YWx1ZSA/ICh0aGlzLmNvbmZpZy5yZXNvbHZlZC52YWx1ZS5pbmRleE9mKCckJykgIT09IDAgPyAnJCcgKyB0aGlzLmNvbmZpZy5yZXNvbHZlZC52YWx1ZSA6IHRoaXMuY29uZmlnLnJlc29sdmVkLnZhbHVlKSA6ICckdmFsdWUnO1xuXHRcdHZhciBvcmRlciA9IHRoaXMub3JkZXIgJiYgdGhpcy5vcmRlci5yZXNvbHZlZCA/IHRoaXMub3JkZXIucmVzb2x2ZWQgOiB1bmRlZmluZWQ7XG5cdFx0dmFyIGZpbHRlciA9IHRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLnJlc29sdmVkID8gdGhpcy5maWx0ZXIucmVzb2x2ZWQgOiB1bmRlZmluZWQ7XG5cblx0XHQvLyBhZGQgcGxhY2Vob2xkZXIgYW5kIHJlbW92ZSBlbGVtZW50IGZyb20gZG9tXG5cdFx0aWYgKCF0aGlzLnBsYWNlaG9sZGVyLnN0YXJ0KVxuXHRcdHtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIuZW5kID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncmF6aWxvYmluZDpmb3I6ZW5kJyk7XG5cdFx0XHRpZiAodGhpcy5ub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB0aGlzLm5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlaG9sZGVyLmVuZCk7XG5cdFx0XHRlbHNlIHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnBsYWNlaG9sZGVyLmVuZCwgdGhpcy5ub2RlLm5leHRTaWJsaW5nKTtcblxuXHRcdFx0dGhpcy5wbGFjZWhvbGRlci5zdGFydCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3Jhemlsb2JpbmQ6Zm9yOnN0YXJ0Jyk7XG5cdFx0XHR0aGlzLnBsYWNlaG9sZGVyLmVuZC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnBsYWNlaG9sZGVyLnN0YXJ0LCB0aGlzLnBsYWNlaG9sZGVyLmVuZCk7XG5cblx0XHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0fVxuXG5cdFx0Ly8gb3JkZXIgYW5kL29yIGZpbHRlciB0aGUgcmVzb2x2ZWQgZGF0YSwgZG9udCBhbGxvdyBvdmVyIGxlbmd0aCBvZiBkYXRhXG5cdFx0dmFyIG9yZGVyZWRGaWx0ZXJlZCA9IHRoaXMub3JkZXJGaWx0ZXIodGhpcy5yZXNvbHZlci5yZXNvbHZlZCwgb3JkZXIsIGZpbHRlcik7XG5cblx0XHRpZiAodGhpcy5vZmZzZXQgfHwgdGhpcy5saW1pdClcblx0XHR7XG5cdFx0XHRsZXQgb2Zmc2V0ID0gdGhpcy5vZmZzZXQgJiYgdGhpcy5vZmZzZXQucmVzb2x2ZWQgPyBwYXJzZUludCh0aGlzLm9mZnNldC5yZXNvbHZlZCkgOiAwO1xuXHRcdFx0bGV0IGxpbWl0ID0gdGhpcy5saW1pdCAmJiB0aGlzLmxpbWl0LnJlc29sdmVkID8gcGFyc2VJbnQodGhpcy5saW1pdC5yZXNvbHZlZCkgOiAwO1xuXG5cdFx0XHRsZXQgbk9mZnNldCA9IG9mZnNldCA8IDEgPyAwIDogb2Zmc2V0IC0xO1xuXHRcdFx0bGV0IG5MaW1pdCA9IG5PZmZzZXQgKyBsaW1pdCA8IDEgPyAwIDogKG5PZmZzZXQgPiAwID8gbk9mZnNldCAtIDEgOiBuT2Zmc2V0KSArIGxpbWl0O1xuXG5cdFx0XHRvcmRlcmVkRmlsdGVyZWQucmVzb2x2ZWQgPSBvcmRlcmVkRmlsdGVyZWQucmVzb2x2ZWQuc3BsaWNlKG5PZmZzZXQsIG5MaW1pdCk7XG5cdFx0XHRpZiAob3JkZXJlZEZpbHRlcmVkLm1hcCkgb3JkZXJlZEZpbHRlcmVkLm1hcCA9IG9yZGVyZWRGaWx0ZXJlZC5tYXAuc3BsaWNlKG5PZmZzZXQsIG5MaW1pdCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0NoaWxkcmVuID0gW107XG5cdFx0dmFyIGMgPSAwO1xuXHRcdGZvciAodmFyIGtleSBpbiBvcmRlcmVkRmlsdGVyZWQucmVzb2x2ZWQpXG5cdFx0e1xuXHRcdFx0bGV0IG5ld05vZGUgPSB0aGlzLm5vZGUuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0bmV3Tm9kZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdiaW5kLScgKyB0aGlzLm5hbWUpO1xuXHRcdFx0bmV3Tm9kZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdjb25maWctJyArIHRoaXMubmFtZSk7XG5cdFx0XHRuZXdOb2RlLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsgJ2FsdGVyLScgKyB0aGlzLm5hbWUpO1xuXHRcdFx0bmV3Tm9kZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdvcmRlci0nICsgdGhpcy5uYW1lKTtcblx0XHRcdG5ld05vZGUucmVtb3ZlQXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnZmlsdGVyLScgKyB0aGlzLm5hbWUpO1xuXHRcdFx0bmV3Tm9kZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5vcHRpb25zLnByZWZpeCArICdsaW1pdC0nICsgdGhpcy5uYW1lKTtcblx0XHRcdG5ld05vZGUucmVtb3ZlQXR0cmlidXRlKHRoaXMub3B0aW9ucy5wcmVmaXggKyAnb2Zmc2V0LScgKyB0aGlzLm5hbWUpO1xuXHRcdFx0bmV3Tm9kZS5waGFudG9tID0ge1xuXHRcdFx0XHQnaXRlcmF0aW9uS2V5Jzogb3JkZXJlZEZpbHRlcmVkLm1hcCA/IG9yZGVyZWRGaWx0ZXJlZC5tYXBba2V5XSA6IGtleSxcblx0XHRcdFx0J2luaXRpYWxWYWx1ZSc6IG9yZGVyZWRGaWx0ZXJlZC5yZXNvbHZlZFtrZXldLFxuXHRcdFx0XHQnb2JzZXJ2ZXJzJzogdGhpcy5yZXNvbHZlci5vYnNlcnZlcnMsXG5cdFx0XHRcdCdrZXlOYW1lJzogcGhhbnRvbUtleSxcblx0XHRcdFx0J3ZhbHVlTmFtZSc6IHBoYW50b21WYWx1ZVxuXHRcdFx0fTtcblxuXHRcdFx0bmV3Q2hpbGRyZW4ucHVzaChuZXdOb2RlKTtcblx0XHR9XG5cblx0XHQvLyBubyBjaGlsZHJlbiwgY2xlYXIgaXQgYWxsIG91dFxuXHRcdGlmIChuZXdDaGlsZHJlbi5sZW5ndGggPCAxKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHRoaXMuY2hpbGRyZW5baV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuW2ldKTtcblx0XHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyB1cGRhdGUgY2hpbGRyZW4sIGxldHMgb25seSBhbHRlciB0aGVtIGlmIHRoZXkgY2hhbmdlXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5ld0NoaWxkcmVuLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBzYW1lLCBza2lwXG5cdFx0XHRcdGlmICh0aGlzLmNoaWxkcmVuW2ldICYmIEpTT04uc3RyaW5naWZ5KHRoaXMuY2hpbGRyZW5baV0ucGhhbnRvbSkgPT0gSlNPTi5zdHJpbmdpZnkobmV3Q2hpbGRyZW5baV0ucGhhbnRvbSkpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdGlmICghIXRoaXMuY2hpbGRyZW5baV0gJiYgISF0aGlzLmNoaWxkcmVuW2ldLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkcmVuW2ldLCB0aGlzLmNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlbltpXSk7XG5cdFx0XHRcdH0gZWxzZSB0aGlzLnBsYWNlaG9sZGVyLmVuZC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdDaGlsZHJlbltpXSwgdGhpcy5wbGFjZWhvbGRlci5lbmQpO1xuXG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEsIG5ld0NoaWxkcmVuW2ldKTtcblx0XHRcdFx0aWYgKHBhdGgpIHRoaXMudHJhdmVyc2VyLnRyYXZlcnNlKG5ld0NoaWxkcmVuW2ldLCB0aGlzLm1vZGVsKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2xlYXIgdXAgYW55IGV4dHJhc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChpIDwgbmV3Q2hpbGRyZW4ubGVuZ3RoKSBjb250aW51ZTtcblxuXHRcdFx0XHRpZiAodGhpcy5jaGlsZHJlbltpXSAmJiB0aGlzLmNoaWxkcmVuW2ldLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlbltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gY2xlYXIgdXAgY2FjaGUgKGRvIHRoaXMgc2VwZXJhdGVseSBvciBzcGxpY2Ugc2NyZXdzIHVwKVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChpIDwgbmV3Q2hpbGRyZW4ubGVuZ3RoKSBjb250aW51ZTtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIG5ldyBjaGlsZHJlbiwganVzdCBhZGQgdGhlbSBhcyBub3JtYWxcblx0XHRcdHRoaXMuY2hpbGRyZW4gPSBuZXdDaGlsZHJlbjtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wbGFjZWhvbGRlci5lbmQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jaGlsZHJlbltpXSwgdGhpcy5wbGFjZWhvbGRlci5lbmQpO1xuXHRcdFx0XHRpZiAocGF0aCkgdGhpcy50cmF2ZXJzZXIudHJhdmVyc2UodGhpcy5jaGlsZHJlbltpXSwgdGhpcy5tb2RlbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gb3JkZXIgZGF0YVxuXHRvcmRlckZpbHRlcihyZXNvbHZlZCwgb3JkZXJCeSwgZmlsdGVyQnkpIHtcblx0XHRpZiAoIXJlc29sdmVkIHx8ICghb3JkZXJCeSAmJiAhZmlsdGVyQnkpKSByZXR1cm4ge21hcDogdW5kZWZpbmVkLCByZXNvbHZlZDogcmVzb2x2ZWR9O1xuXG5cdFx0dmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHJlc29sdmVkKTtcblx0XHR2YXIgbmV3T3JkZXIgPSBbXTtcblx0XHR2YXIgbWFwID0gW107XG5cblx0XHRyZXNvbHZlZGxvb3A6XG5cdFx0Zm9yICh2YXIga2V5IGluIHJlc29sdmVkKSB7XG5cdFx0XHQvLyBmaWx0ZXIgb3V0IGFueSBkYXRhIGJlZm9yZSBvcmRlcmluZ1xuXHRcdFx0aWYgKGZpbHRlckJ5KVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKGxldCBuYW1lIGluIGZpbHRlckJ5KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBmaWx0ZXJCeVtuYW1lXSA9PT0gJ3N0cmluZycgJiYgbmV3IFJlZ0V4cChcIl5cIiArIGZpbHRlckJ5W25hbWVdLnNwbGl0KCcqJykuam9pbignLionKSArIFwiJFwiKS50ZXN0KHJlc29sdmVkW2tleV1bbmFtZV0pKSBjb250aW51ZSByZXNvbHZlZGxvb3A7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJCeVtuYW1lXSkgJiYgbmV3IFJlZ0V4cChcIl5cIiArIGZpbHRlckJ5W25hbWVdLmpvaW4oJycpLnNwbGl0KCcqJykuam9pbignLionKSArIFwiJFwiKS50ZXN0KHJlc29sdmVkW2tleV1bbmFtZV0pKSBjb250aW51ZSByZXNvbHZlZGxvb3A7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gaWYgZmlyc3QgYml0IG9mIGRhdGEgb3Igbm8gb3JkZXIgZGVmaW5lZCwgcHVzaCBkYXRhXG5cdFx0XHRpZiAobWFwLmxlbmd0aCA8IDEgfHwgIW9yZGVyQnkpIHtcblx0XHRcdFx0bWFwLnB1c2goa2V5KTtcblx0XHRcdFx0bmV3T3JkZXIucHVzaChyZXNvbHZlZFtrZXldKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGdldCBwb3NpdGlvbiBmb3Igb3JkZXJcblx0XHRcdG9yZGVybG9vcDpcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbmV3T3JkZXIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Zm9yIChsZXQgbmFtZSBpbiBvcmRlckJ5KSB7XG5cdFx0XHRcdFx0aWYgKG9yZGVyQnlbbmFtZV0gPT0gJ2FzYycgJiYgcmVzb2x2ZWRba2V5XVtuYW1lXSA+IG5ld09yZGVyW2ldW25hbWVdKSBjb250aW51ZSBvcmRlcmxvb3A7XG5cdFx0XHRcdFx0aWYgKHJlc29sdmVkW2tleV1bbmFtZV0gPT0gbmV3T3JkZXJbaV1bbmFtZV0pIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmIChvcmRlckJ5W25hbWVdID09ICdkZXNjJyAmJiByZXNvbHZlZFtrZXldW25hbWVdIDwgbmV3T3JkZXJbaV1bbmFtZV0pIGNvbnRpbnVlIG9yZGVybG9vcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Ly8gc3BsaWNlIGRhdGEgaW50byBuZXcgc3RhY2tcblx0XHRcdG1hcC5zcGxpY2UoaSwgMCwga2V5KTtcblx0XHRcdG5ld09yZGVyLnNwbGljZShpLCAwLCByZXNvbHZlZFtrZXldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge21hcDogbWFwLCByZXNvbHZlZDogbmV3T3JkZXJ9O1xuXHR9XG59XG4iXX0=
},{"./binder.js":17,"razilobind-core":41}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Hide Binder
 * Hides element if data resolved to true
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var HideBinder = function (_Binder) {
	_inherits(HideBinder, _Binder);

	function HideBinder(options, traverser) {
		_classCallCheck(this, HideBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'hide';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by showing or hiding node
  * @param object oldValue The old value of the observed object
  */


	HideBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.style.display = 'none';else this.node.style.display = '';
	};

	return HideBinder;
}(_binder2.default);

exports.default = HideBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZGUuYmluZGVyLmpzIl0sIm5hbWVzIjpbIkhpZGVCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJiaW5kIiwicmVzb2x2ZXIiLCJyZXNvbHZlZCIsIm5vZGUiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV3FCQSxVOzs7QUFDcEIscUJBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksTUFBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxFQUFmO0FBTCtCO0FBTS9COztBQUVEOzs7Ozs7O3NCQUtBQyxJLG1CQUFPO0FBQ04sTUFBSSxDQUFDLENBQUMsS0FBS0MsUUFBTCxDQUFjQyxRQUFwQixFQUE4QixLQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE1BQTFCLENBQTlCLEtBQ0ssS0FBS0YsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixFQUExQjtBQUNMLEU7Ozs7O2tCQWpCbUJWLFUiLCJmaWxlIjoiaGlkZS5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIEhpZGUgQmluZGVyXG4gKiBIaWRlcyBlbGVtZW50IGlmIGRhdGEgcmVzb2x2ZWQgdG8gdHJ1ZVxuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpZGVCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2hpZGUnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIGJpbmQoKVxuXHQgKiBCaW5kIHRoZSByZXNvbHZlZCBkYXRhIGJ5IHNob3dpbmcgb3IgaGlkaW5nIG5vZGVcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQoKSB7XG5cdFx0aWYgKCEhdGhpcy5yZXNvbHZlci5yZXNvbHZlZCkgdGhpcy5ub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZWxzZSB0aGlzLm5vZGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHR9XG59XG4iXX0=
},{"./binder.js":17}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Hover Binder
 * Bind methods to element events
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var HoverBinder = function (_Binder) {
	_inherits(HoverBinder, _Binder);

	function HoverBinder(options, traverser) {
		_classCallCheck(this, HoverBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'hover';
		_this.delayMethod = true;
		_this.accepts = ['method'];
		_this.event;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	HoverBinder.prototype.bind = function bind(object) {
		if (typeof this.resolver.resolved.method !== 'function') return;

		if (!this.event) {
			this.event = 'HoverBinder';
			this.node.addEventListener('mouseover', this.listener.bind(this), false);
		}
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	HoverBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		var values = [event].concat(this.resolver.resolved.values);
		this.resolver.resolved.method.apply(this.model, values);
	};

	return HoverBinder;
}(_binder2.default);

exports.default = HoverBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdmVyLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJIb3ZlckJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiZGVsYXlNZXRob2QiLCJhY2NlcHRzIiwiZXZlbnQiLCJiaW5kIiwib2JqZWN0IiwicmVzb2x2ZXIiLCJyZXNvbHZlZCIsIm1ldGhvZCIsIm5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWx1ZXMiLCJjb25jYXQiLCJhcHBseSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztJQVdxQkEsVzs7O0FBQ3BCLHNCQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLE9BQVo7QUFDQSxRQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsUUFBRCxDQUFmO0FBQ0EsUUFBS0MsS0FBTDtBQVArQjtBQVEvQjs7QUFFRDs7Ozs7Ozt1QkFLQUMsSSxpQkFBS0MsTSxFQUFRO0FBQ1osTUFBSSxPQUFPLEtBQUtDLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkMsTUFBOUIsS0FBeUMsVUFBN0MsRUFBeUQ7O0FBRXpELE1BQUksQ0FBQyxLQUFLTCxLQUFWLEVBQWlCO0FBQ2hCLFFBQUtBLEtBQUwsR0FBYSxhQUFiO0FBQ0EsUUFBS00sSUFBTCxDQUFVQyxnQkFBVixDQUEyQixXQUEzQixFQUF3QyxLQUFLQyxRQUFMLENBQWNQLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeEMsRUFBa0UsS0FBbEU7QUFDQTtBQUNELEU7O0FBRUQ7Ozs7Ozs7dUJBS0FPLFEscUJBQVNSLEssRUFBTztBQUNmQSxRQUFNUyxlQUFOO0FBQ0EsTUFBSUMsU0FBUyxDQUFDVixLQUFELEVBQVFXLE1BQVIsQ0FBZSxLQUFLUixRQUFMLENBQWNDLFFBQWQsQ0FBdUJNLE1BQXRDLENBQWI7QUFDQSxPQUFLUCxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLE1BQXZCLENBQThCTyxLQUE5QixDQUFvQyxLQUFLQyxLQUF6QyxFQUFnREgsTUFBaEQ7QUFDQSxFOzs7OztrQkFsQ21CaEIsVyIsImZpbGUiOiJob3Zlci5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIEhvdmVyIEJpbmRlclxuICogQmluZCBtZXRob2RzIHRvIGVsZW1lbnQgZXZlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2hvdmVyJztcblx0XHR0aGlzLmRlbGF5TWV0aG9kID0gdHJ1ZTtcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ21ldGhvZCddO1xuXHRcdHRoaXMuZXZlbnQ7XG5cdH1cblxuXHQvKipcblx0ICogYmluZCgpXG5cdCAqIEJpbmQgdGhlIHJlc29sdmVkIGRhdGEgYnkgYXBwbHlpbmcgc3R5bGVzIHRvIG5vZGVcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQob2JqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJlc29sdmVyLnJlc29sdmVkLm1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG5cdFx0aWYgKCF0aGlzLmV2ZW50KSB7XG5cdFx0XHR0aGlzLmV2ZW50ID0gJ0hvdmVyQmluZGVyJztcblx0XHRcdHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLmxpc3RlbmVyLmJpbmQodGhpcyksIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogbGlzdGVuZXIoKVxuXHQgKiBDYXRjaCBldmVudHMgb24gbm9kZXMgYW5kIHJ1biBmdW5jdGlvbnMgc2V0LlxuXHQgKiBAcGFyYW0gZXZlbnQgZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcnMgdGhlIHVwZGF0ZVxuXHQgKi9cblx0bGlzdGVuZXIoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRsZXQgdmFsdWVzID0gW2V2ZW50XS5jb25jYXQodGhpcy5yZXNvbHZlci5yZXNvbHZlZC52YWx1ZXMpO1xuXHRcdHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQubWV0aG9kLmFwcGx5KHRoaXMubW9kZWwsIHZhbHVlcyk7XG5cdH1cbn1cbiJdfQ==
},{"./binder.js":17}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Href Binder
 * Alters href attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var HrefBinder = function (_Binder) {
	_inherits(HrefBinder, _Binder);

	function HrefBinder(options, traverser) {
		_classCallCheck(this, HrefBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'href';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	HrefBinder.prototype.bind = function bind() {
		// this.resolver.resolved
		if (typeof this.resolver.resolved !== 'string' || this.resolver.resolved.length < 1) this.node.removeAttribute('href');else this.node.setAttribute('href', this.resolver.resolved);
	};

	return HrefBinder;
}(_binder2.default);

exports.default = HrefBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhyZWYuYmluZGVyLmpzIl0sIm5hbWVzIjpbIkhyZWZCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJiaW5kIiwicmVzb2x2ZXIiLCJyZXNvbHZlZCIsImxlbmd0aCIsIm5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV3FCQSxVOzs7QUFDcEIscUJBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksTUFBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFFBQXhCLEVBQWtDLFFBQWxDLEVBQTRDLFFBQTVDLENBQWY7QUFMK0I7QUFNL0I7O0FBRUQ7Ozs7Ozs7c0JBS0FDLEksbUJBQU87QUFDTjtBQUNBLE1BQUksT0FBTyxLQUFLQyxRQUFMLENBQWNDLFFBQXJCLEtBQWtDLFFBQWxDLElBQThDLEtBQUtELFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkMsTUFBdkIsR0FBZ0MsQ0FBbEYsRUFBcUYsS0FBS0MsSUFBTCxDQUFVQyxlQUFWLENBQTBCLE1BQTFCLEVBQXJGLEtBQ0ssS0FBS0QsSUFBTCxDQUFVRSxZQUFWLENBQXVCLE1BQXZCLEVBQStCLEtBQUtMLFFBQUwsQ0FBY0MsUUFBN0M7QUFDTCxFOzs7OztrQkFsQm1CUCxVIiwiZmlsZSI6ImhyZWYuYmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbmRlciBmcm9tICcuL2JpbmRlci5qcydcblxuLyoqXG4gKiBIcmVmIEJpbmRlclxuICogQWx0ZXJzIGhyZWYgYXR0cmlidXRlIGJhc2VkIG9uIHJlc29sdmVkIGRhdGEgY29udGVudHNcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG9wdGlvbnMsIG5vZGUsIHJlc29sdmFibGUsIG1vZGVsLCBhY2NlcHRzXG4gKiBtZXRob2Q6IGRldGVjdChub2RlKSB7IHJldHVybiBib29sIH1cbiAqIG1ldGhvZDogYnVpbGQobW9kZWwpIHsgcmV0dXJuIGJpbmRlciB9XG4gKiBtZXRob2Q6IHVwZGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHsgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIcmVmQmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICdocmVmJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnb2JqZWN0JywgJ3N0cmluZycsICdtZXRob2QnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZCgpIHtcblx0XHQvLyB0aGlzLnJlc29sdmVyLnJlc29sdmVkXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJlc29sdmVyLnJlc29sdmVkICE9PSAnc3RyaW5nJyB8fCB0aGlzLnJlc29sdmVyLnJlc29sdmVkLmxlbmd0aCA8IDEpIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHRlbHNlIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLnJlc29sdmVyLnJlc29sdmVkKTtcblx0fVxufVxuIl19
},{"./binder.js":17}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HTML Binder
 * Binds resolved data to element contents (innerHTML)
 * !!! USE WITH CAUTION ONLY BIND TRUSTED HTML !!!
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var HtmlBinder = function (_Binder) {
	_inherits(HtmlBinder, _Binder);

	function HtmlBinder(options, traverser) {
		_classCallCheck(this, HtmlBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'html';
		_this.accepts = ['string', 'property', 'phantom', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	HtmlBinder.prototype.bind = function bind() {
		this.node.innerHTML = this.resolver.resolved;
	};

	return HtmlBinder;
}(_binder2.default);

exports.default = HtmlBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWwuYmluZGVyLmpzIl0sIm5hbWVzIjpbIkh0bWxCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJiaW5kIiwibm9kZSIsImlubmVySFRNTCIsInJlc29sdmVyIiwicmVzb2x2ZWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQVlxQkEsVTs7O0FBQ3BCLHFCQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLE1BQVo7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixTQUF2QixFQUFrQyxRQUFsQyxDQUFmO0FBTCtCO0FBTS9COztBQUVEOzs7Ozs7O3NCQUtBQyxJLG1CQUFPO0FBQ04sT0FBS0MsSUFBTCxDQUFVQyxTQUFWLEdBQXNCLEtBQUtDLFFBQUwsQ0FBY0MsUUFBcEM7QUFDQSxFOzs7OztrQkFoQm1CVCxVIiwiZmlsZSI6Imh0bWwuYmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbmRlciBmcm9tICcuL2JpbmRlci5qcydcblxuLyoqXG4gKiBIVE1MIEJpbmRlclxuICogQmluZHMgcmVzb2x2ZWQgZGF0YSB0byBlbGVtZW50IGNvbnRlbnRzIChpbm5lckhUTUwpXG4gKiAhISEgVVNFIFdJVEggQ0FVVElPTiBPTkxZIEJJTkQgVFJVU1RFRCBIVE1MICEhIVxuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2h0bWwnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsnc3RyaW5nJywgJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnbWV0aG9kJ107XG5cdH1cblxuXHQvKipcblx0ICogYmluZCgpXG5cdCAqIEJpbmQgdGhlIHJlc29sdmVkIGRhdGEgdG8gdGhlIG5vZGUgcmVwbGFjaW5nIGNvbnRlbnRzXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSBvZiB0aGUgb2JzZXJ2ZWQgb2JqZWN0XG5cdCAqL1xuXHRiaW5kKCkge1xuXHRcdHRoaXMubm9kZS5pbm5lckhUTUwgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVkO1xuXHR9XG59XG4iXX0=
},{"./binder.js":17}],30:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var IfBinder = function (_Binder) {
	_inherits(IfBinder, _Binder);

	function IfBinder(options, traverser) {
		_classCallCheck(this, IfBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'if';
		_this.accepts = ['property', 'phantom', 'boolean', 'method'];
		_this.placeholder = null;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	IfBinder.prototype.bind = function bind() {
		if (!this.resolver.resolved) {
			// insert placeholder
			this.placeholder = document.createComment('razilobind:if');
			this.node.parentNode.insertBefore(this.placeholder, this.node);
			this.node.parentNode.removeChild(this.node);
		} else if (this.placeholder) {
			this.placeholder.parentNode.insertBefore(this.node, this.placeholder);
			this.placeholder.parentNode.removeChild(this.placeholder);
			this.placeholder = null;
		}
	};

	return IfBinder;
}(_binder2.default);

exports.default = IfBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJJZkJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsInBsYWNlaG9sZGVyIiwiYmluZCIsInJlc29sdmVyIiwicmVzb2x2ZWQiLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCJub2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztJQVdxQkEsUTs7O0FBQ3BCLG1CQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixTQUF4QixFQUFtQyxRQUFuQyxDQUFmO0FBQ0EsUUFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQU4rQjtBQU8vQjs7QUFFRDs7Ozs7OztvQkFLQUMsSSxtQkFBTztBQUNOLE1BQUksQ0FBQyxLQUFLQyxRQUFMLENBQWNDLFFBQW5CLEVBQ0E7QUFDQztBQUNBLFFBQUtILFdBQUwsR0FBbUJJLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxRQUFLQyxJQUFMLENBQVVDLFVBQVYsQ0FBcUJDLFlBQXJCLENBQWtDLEtBQUtSLFdBQXZDLEVBQW9ELEtBQUtNLElBQXpEO0FBQ0EsUUFBS0EsSUFBTCxDQUFVQyxVQUFWLENBQXFCRSxXQUFyQixDQUFpQyxLQUFLSCxJQUF0QztBQUNBLEdBTkQsTUFPSyxJQUFJLEtBQUtOLFdBQVQsRUFDTDtBQUNDLFFBQUtBLFdBQUwsQ0FBaUJPLFVBQWpCLENBQTRCQyxZQUE1QixDQUF5QyxLQUFLRixJQUE5QyxFQUFvRCxLQUFLTixXQUF6RDtBQUNBLFFBQUtBLFdBQUwsQ0FBaUJPLFVBQWpCLENBQTRCRSxXQUE1QixDQUF3QyxLQUFLVCxXQUE3QztBQUNBLFFBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQTtBQUNELEU7Ozs7O2tCQTdCbUJMLFEiLCJmaWxlIjoiaWYuYmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbmRlciBmcm9tICcuL2JpbmRlci5qcydcblxuLyoqXG4gKiBJZiBCaW5kZXJcbiAqIEFsdGVycyBlbGVtZW50cyBzdHlsZSBiYXNlZCBvbiByZXNvbHZlZCBkYXRhIGNvbnRlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2lmJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnYm9vbGVhbicsICdtZXRob2QnXTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZCgpIHtcblx0XHRpZiAoIXRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpXG5cdFx0e1xuXHRcdFx0Ly8gaW5zZXJ0IHBsYWNlaG9sZGVyXG5cdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncmF6aWxvYmluZDppZicpO1xuXHRcdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMucGxhY2Vob2xkZXIsIHRoaXMubm9kZSk7XG5cdFx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLnBsYWNlaG9sZGVyKVxuXHRcdHtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5ub2RlLCB0aGlzLnBsYWNlaG9sZGVyKTtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyKTtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdH1cblx0fVxufVxuIl19
},{"./binder.js":17}],31:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Init Binder
 * Bind a method to initialization of element. A starting method good for things like collecting
 * data on start of your app, or preloading method.
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var InitBinder = function (_Binder) {
	_inherits(InitBinder, _Binder);

	function InitBinder(options, traverser) {
		_classCallCheck(this, InitBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'init';
		_this.delayMethod = true;
		_this.accepts = ['method'];
		_this.event;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	InitBinder.prototype.bind = function bind(object) {
		if (typeof this.resolver.resolved.method !== 'function') return;

		if (!this.event) {
			this.event = 'DOMContentLoaded';
			this.node.addEventListener('DOMContentLoaded', this.listener.bind(this), false);
		}
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	InitBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		var values = [event].concat(this.resolver.resolved.values);
		this.resolver.resolved.method.apply(this.model, values);
	};

	return InitBinder;
}(_binder2.default);

exports.default = InitBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuYmluZGVyLmpzIl0sIm5hbWVzIjpbIkluaXRCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImRlbGF5TWV0aG9kIiwiYWNjZXB0cyIsImV2ZW50IiwiYmluZCIsIm9iamVjdCIsInJlc29sdmVyIiwicmVzb2x2ZWQiLCJtZXRob2QiLCJub2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWVzIiwiY29uY2F0IiwiYXBwbHkiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBWXFCQSxVOzs7QUFDcEIscUJBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksTUFBWjtBQUNBLFFBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxRQUFELENBQWY7QUFDQSxRQUFLQyxLQUFMO0FBUCtCO0FBUS9COztBQUVEOzs7Ozs7O3NCQUtBQyxJLGlCQUFLQyxNLEVBQVE7QUFDWixNQUFJLE9BQU8sS0FBS0MsUUFBTCxDQUFjQyxRQUFkLENBQXVCQyxNQUE5QixLQUF5QyxVQUE3QyxFQUF5RDs7QUFFekQsTUFBSSxDQUFDLEtBQUtMLEtBQVYsRUFBaUI7QUFDaEIsUUFBS0EsS0FBTCxHQUFhLGtCQUFiO0FBQ0EsUUFBS00sSUFBTCxDQUFVQyxnQkFBVixDQUEyQixrQkFBM0IsRUFBK0MsS0FBS0MsUUFBTCxDQUFjUCxJQUFkLENBQW1CLElBQW5CLENBQS9DLEVBQXlFLEtBQXpFO0FBQ0E7QUFDRCxFOztBQUVEOzs7Ozs7O3NCQUtBTyxRLHFCQUFTUixLLEVBQU87QUFDZkEsUUFBTVMsZUFBTjtBQUNBLE1BQUlDLFNBQVMsQ0FBQ1YsS0FBRCxFQUFRVyxNQUFSLENBQWUsS0FBS1IsUUFBTCxDQUFjQyxRQUFkLENBQXVCTSxNQUF0QyxDQUFiO0FBQ0EsT0FBS1AsUUFBTCxDQUFjQyxRQUFkLENBQXVCQyxNQUF2QixDQUE4Qk8sS0FBOUIsQ0FBb0MsS0FBS0MsS0FBekMsRUFBZ0RILE1BQWhEO0FBQ0EsRTs7Ozs7a0JBbENtQmhCLFUiLCJmaWxlIjoiaW5pdC5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIEluaXQgQmluZGVyXG4gKiBCaW5kIGEgbWV0aG9kIHRvIGluaXRpYWxpemF0aW9uIG9mIGVsZW1lbnQuIEEgc3RhcnRpbmcgbWV0aG9kIGdvb2QgZm9yIHRoaW5ncyBsaWtlIGNvbGxlY3RpbmdcbiAqIGRhdGEgb24gc3RhcnQgb2YgeW91ciBhcHAsIG9yIHByZWxvYWRpbmcgbWV0aG9kLlxuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2luaXQnO1xuXHRcdHRoaXMuZGVsYXlNZXRob2QgPSB0cnVlO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsnbWV0aG9kJ107XG5cdFx0dGhpcy5ldmVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZChvYmplY3QpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQubWV0aG9kICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cblx0XHRpZiAoIXRoaXMuZXZlbnQpIHtcblx0XHRcdHRoaXMuZXZlbnQgPSAnRE9NQ29udGVudExvYWRlZCc7XG5cdFx0XHR0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMubGlzdGVuZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBsaXN0ZW5lcigpXG5cdCAqIENhdGNoIGV2ZW50cyBvbiBub2RlcyBhbmQgcnVuIGZ1bmN0aW9ucyBzZXQuXG5cdCAqIEBwYXJhbSBldmVudCBldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VycyB0aGUgdXBkYXRlXG5cdCAqL1xuXHRsaXN0ZW5lcihldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGxldCB2YWx1ZXMgPSBbZXZlbnRdLmNvbmNhdCh0aGlzLnJlc29sdmVyLnJlc29sdmVkLnZhbHVlcyk7XG5cdFx0dGhpcy5yZXNvbHZlci5yZXNvbHZlZC5tZXRob2QuYXBwbHkodGhpcy5tb2RlbCwgdmFsdWVzKTtcblx0fVxufVxuIl19
},{"./binder.js":17}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Input Binder
 * Bind methods to element events
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var InputBinder = function (_Binder) {
	_inherits(InputBinder, _Binder);

	function InputBinder(options, traverser) {
		_classCallCheck(this, InputBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'input';
		_this.delayMethod = true;
		_this.accepts = ['method'];
		_this.event;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	InputBinder.prototype.bind = function bind(object) {
		if (typeof this.resolver.resolved.method !== 'function') return;

		if (!this.event) {
			this.event = 'input';
			this.node.addEventListener('input', this.listener.bind(this), false);
		}
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	InputBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		var values = [event].concat(this.resolver.resolved.values);
		this.resolver.resolved.method.apply(this.model, values);
	};

	return InputBinder;
}(_binder2.default);

exports.default = InputBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmJpbmRlci5qcyJdLCJuYW1lcyI6WyJJbnB1dEJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiZGVsYXlNZXRob2QiLCJhY2NlcHRzIiwiZXZlbnQiLCJiaW5kIiwib2JqZWN0IiwicmVzb2x2ZXIiLCJyZXNvbHZlZCIsIm1ldGhvZCIsIm5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWx1ZXMiLCJjb25jYXQiLCJhcHBseSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztJQVdxQkEsVzs7O0FBQ3BCLHNCQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLE9BQVo7QUFDQSxRQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsUUFBRCxDQUFmO0FBQ0EsUUFBS0MsS0FBTDtBQVArQjtBQVEvQjs7QUFFRDs7Ozs7Ozt1QkFLQUMsSSxpQkFBS0MsTSxFQUFRO0FBQ1osTUFBSSxPQUFPLEtBQUtDLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkMsTUFBOUIsS0FBeUMsVUFBN0MsRUFBeUQ7O0FBRXpELE1BQUksQ0FBQyxLQUFLTCxLQUFWLEVBQWlCO0FBQ2hCLFFBQUtBLEtBQUwsR0FBYSxPQUFiO0FBQ0EsUUFBS00sSUFBTCxDQUFVQyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxLQUFLQyxRQUFMLENBQWNQLElBQWQsQ0FBbUIsSUFBbkIsQ0FBcEMsRUFBOEQsS0FBOUQ7QUFDQTtBQUNELEU7O0FBRUQ7Ozs7Ozs7dUJBS0FPLFEscUJBQVNSLEssRUFBTztBQUNmQSxRQUFNUyxlQUFOO0FBQ0EsTUFBSUMsU0FBUyxDQUFDVixLQUFELEVBQVFXLE1BQVIsQ0FBZSxLQUFLUixRQUFMLENBQWNDLFFBQWQsQ0FBdUJNLE1BQXRDLENBQWI7QUFDQSxPQUFLUCxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLE1BQXZCLENBQThCTyxLQUE5QixDQUFvQyxLQUFLQyxLQUF6QyxFQUFnREgsTUFBaEQ7QUFDQSxFOzs7OztrQkFsQ21CaEIsVyIsImZpbGUiOiJpbnB1dC5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIElucHV0IEJpbmRlclxuICogQmluZCBtZXRob2RzIHRvIGVsZW1lbnQgZXZlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ2lucHV0Jztcblx0XHR0aGlzLmRlbGF5TWV0aG9kID0gdHJ1ZTtcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ21ldGhvZCddO1xuXHRcdHRoaXMuZXZlbnQ7XG5cdH1cblxuXHQvKipcblx0ICogYmluZCgpXG5cdCAqIEJpbmQgdGhlIHJlc29sdmVkIGRhdGEgYnkgYXBwbHlpbmcgc3R5bGVzIHRvIG5vZGVcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQob2JqZWN0KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJlc29sdmVyLnJlc29sdmVkLm1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG5cdFx0aWYgKCF0aGlzLmV2ZW50KSB7XG5cdFx0XHR0aGlzLmV2ZW50ID0gJ2lucHV0Jztcblx0XHRcdHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMubGlzdGVuZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBsaXN0ZW5lcigpXG5cdCAqIENhdGNoIGV2ZW50cyBvbiBub2RlcyBhbmQgcnVuIGZ1bmN0aW9ucyBzZXQuXG5cdCAqIEBwYXJhbSBldmVudCBldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VycyB0aGUgdXBkYXRlXG5cdCAqL1xuXHRsaXN0ZW5lcihldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGxldCB2YWx1ZXMgPSBbZXZlbnRdLmNvbmNhdCh0aGlzLnJlc29sdmVyLnJlc29sdmVkLnZhbHVlcyk7XG5cdFx0dGhpcy5yZXNvbHZlci5yZXNvbHZlZC5tZXRob2QuYXBwbHkodGhpcy5tb2RlbCwgdmFsdWVzKTtcblx0fVxufVxuIl19
},{"./binder.js":17}],33:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Model Binder
 * Binds resolved data to model attribute of elements and model property of elements, if object, attribute will switch to changing description
 * to allow attribute change to be picked up by custom elements. Used primary to put data into a custom element
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ModelBinder = function (_Binder) {
	_inherits(ModelBinder, _Binder);

	function ModelBinder(options, traverser) {
		_classCallCheck(this, ModelBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'model';
		_this.accepts = ['property', 'phantom', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	ModelBinder.prototype.bind = function bind(oldValue, path) {
		// set value
		this.node.model = this.resolver.resolved;
		this.node.setAttribute('model', _typeof(this.resolver.resolved) === 'object' ? '[object]@' + new Date().getTime() : this.resolver.resolved);
	};

	return ModelBinder;
}(_binder2.default);

exports.default = ModelBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJNb2RlbEJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsImJpbmQiLCJvbGRWYWx1ZSIsInBhdGgiLCJub2RlIiwibW9kZWwiLCJyZXNvbHZlciIsInJlc29sdmVkIiwic2V0QXR0cmlidXRlIiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBWXFCQSxXOzs7QUFDcEIsc0JBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksT0FBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFFBQXhCLENBQWY7QUFMK0I7QUFNL0I7O0FBRUQ7Ozs7Ozs7dUJBS0FDLEksaUJBQUtDLFEsRUFBVUMsSSxFQUFNO0FBQ3BCO0FBQ0EsT0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtDLFFBQUwsQ0FBY0MsUUFBaEM7QUFDQSxPQUFLSCxJQUFMLENBQVVJLFlBQVYsQ0FBdUIsT0FBdkIsRUFBZ0MsUUFBTyxLQUFLRixRQUFMLENBQWNDLFFBQXJCLE1BQWtDLFFBQWxDLEdBQTZDLGNBQWMsSUFBSUUsSUFBSixHQUFXQyxPQUFYLEVBQTNELEdBQWtGLEtBQUtKLFFBQUwsQ0FBY0MsUUFBaEk7QUFDQSxFOzs7OztrQkFsQm1CWCxXIiwiZmlsZSI6Im1vZGVsLmJpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaW5kZXIgZnJvbSAnLi9iaW5kZXIuanMnXG5cbi8qKlxuICogTW9kZWwgQmluZGVyXG4gKiBCaW5kcyByZXNvbHZlZCBkYXRhIHRvIG1vZGVsIGF0dHJpYnV0ZSBvZiBlbGVtZW50cyBhbmQgbW9kZWwgcHJvcGVydHkgb2YgZWxlbWVudHMsIGlmIG9iamVjdCwgYXR0cmlidXRlIHdpbGwgc3dpdGNoIHRvIGNoYW5naW5nIGRlc2NyaXB0aW9uXG4gKiB0byBhbGxvdyBhdHRyaWJ1dGUgY2hhbmdlIHRvIGJlIHBpY2tlZCB1cCBieSBjdXN0b20gZWxlbWVudHMuIFVzZWQgcHJpbWFyeSB0byBwdXQgZGF0YSBpbnRvIGEgY3VzdG9tIGVsZW1lbnRcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG9wdGlvbnMsIG5vZGUsIHJlc29sdmFibGUsIG1vZGVsLCBhY2NlcHRzXG4gKiBtZXRob2Q6IGRldGVjdChub2RlKSB7IHJldHVybiBib29sIH1cbiAqIG1ldGhvZDogYnVpbGQobW9kZWwpIHsgcmV0dXJuIGJpbmRlciB9XG4gKiBtZXRob2Q6IHVwZGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHsgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbEJpbmRlciBleHRlbmRzIEJpbmRlciB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHRyYXZlcnNlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnRyYXZlcnNlciA9IHRyYXZlcnNlcjtcblx0XHR0aGlzLm5hbWUgPSAnbW9kZWwnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsncHJvcGVydHknLCAncGhhbnRvbScsICdtZXRob2QnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSB0byB0aGUgbm9kZSByZXBsYWNpbmcgY29udGVudHNcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQob2xkVmFsdWUsIHBhdGgpIHtcblx0XHQvLyBzZXQgdmFsdWVcblx0XHR0aGlzLm5vZGUubW9kZWwgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVkO1xuXHRcdHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ21vZGVsJywgdHlwZW9mIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQgPT09ICdvYmplY3QnID8gJ1tvYmplY3RdQCcgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpO1xuXHR9XG59XG4iXX0=
},{"./binder.js":17}],34:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Required Binder
 * Alters required attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var RequiredBinder = function (_Binder) {
	_inherits(RequiredBinder, _Binder);

	function RequiredBinder(options, traverser) {
		_classCallCheck(this, RequiredBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'required';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	RequiredBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.setAttribute('required', '');else this.node.removeAttribute('required');
	};

	return RequiredBinder;
}(_binder2.default);

exports.default = RequiredBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpcmVkLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJSZXF1aXJlZEJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsImJpbmQiLCJyZXNvbHZlciIsInJlc29sdmVkIiwibm9kZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLGM7OztBQUNwQix5QkFBWUMsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSwrQ0FDL0Isa0JBRCtCOztBQUUvQixRQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtDLElBQUwsR0FBWSxVQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsUUFBeEIsRUFBa0MsUUFBbEMsRUFBNEMsUUFBNUMsQ0FBZjtBQUwrQjtBQU0vQjs7QUFFRDs7Ozs7OzswQkFLQUMsSSxtQkFBTztBQUNOLE1BQUksQ0FBQyxDQUFDLEtBQUtDLFFBQUwsQ0FBY0MsUUFBcEIsRUFBOEIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCLFVBQXZCLEVBQW1DLEVBQW5DLEVBQTlCLEtBQ0ssS0FBS0QsSUFBTCxDQUFVRSxlQUFWLENBQTBCLFVBQTFCO0FBQ0wsRTs7Ozs7a0JBakJtQlYsYyIsImZpbGUiOiJyZXF1aXJlZC5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIFJlcXVpcmVkIEJpbmRlclxuICogQWx0ZXJzIHJlcXVpcmVkIGF0dHJpYnV0ZSBiYXNlZCBvbiByZXNvbHZlZCBkYXRhIGNvbnRlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ3JlcXVpcmVkJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnb2JqZWN0JywgJ3N0cmluZycsICdtZXRob2QnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZCgpIHtcblx0XHRpZiAoISF0aGlzLnJlc29sdmVyLnJlc29sdmVkKSB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblx0XHRlbHNlIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG5cdH1cbn1cbiJdfQ==
},{"./binder.js":17}],35:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Selected Binder
 * Alters selected attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var SelectedBinder = function (_Binder) {
	_inherits(SelectedBinder, _Binder);

	function SelectedBinder(options, traverser) {
		_classCallCheck(this, SelectedBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'selected';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	SelectedBinder.prototype.bind = function bind() {
		if (typeof this.resolver.resolved === 'string' && this.resolver.resolved.length > 0) this.node.setAttribute('selected', this.resolver.resolved);else if (_typeof(this.resolver.resolved) === 'object' && this.resolver.resolved != null) {
			this.node.setAttribute('selected', '[object]@' + new Date().getTime());
			this.node.selected = this.resolver.resolved;
		} else if (!!this.resolver.resolved) this.node.setAttribute('selected', '');else this.node.removeAttribute('selected');
	};

	return SelectedBinder;
}(_binder2.default);

exports.default = SelectedBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGVkLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJTZWxlY3RlZEJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsImJpbmQiLCJyZXNvbHZlciIsInJlc29sdmVkIiwibGVuZ3RoIiwibm9kZSIsInNldEF0dHJpYnV0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2VsZWN0ZWQiLCJyZW1vdmVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLGM7OztBQUNwQix5QkFBWUMsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSwrQ0FDL0Isa0JBRCtCOztBQUUvQixRQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtDLElBQUwsR0FBWSxVQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsUUFBeEIsRUFBa0MsUUFBbEMsRUFBNEMsUUFBNUMsQ0FBZjtBQUwrQjtBQU0vQjs7QUFFRDs7Ozs7OzswQkFLQUMsSSxtQkFBTztBQUNOLE1BQUksT0FBTyxLQUFLQyxRQUFMLENBQWNDLFFBQXJCLEtBQWtDLFFBQWxDLElBQThDLEtBQUtELFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkMsTUFBdkIsR0FBZ0MsQ0FBbEYsRUFBcUYsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCLFVBQXZCLEVBQW1DLEtBQUtKLFFBQUwsQ0FBY0MsUUFBakQsRUFBckYsS0FDSyxJQUFJLFFBQU8sS0FBS0QsUUFBTCxDQUFjQyxRQUFyQixNQUFrQyxRQUFsQyxJQUE4QyxLQUFLRCxRQUFMLENBQWNDLFFBQWQsSUFBMEIsSUFBNUUsRUFDTDtBQUNDLFFBQUtFLElBQUwsQ0FBVUMsWUFBVixDQUF1QixVQUF2QixFQUFtQyxjQUFjLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFqRDtBQUNBLFFBQUtILElBQUwsQ0FBVUksUUFBVixHQUFxQixLQUFLUCxRQUFMLENBQWNDLFFBQW5DO0FBQ0EsR0FKSSxNQUtBLElBQUksQ0FBQyxDQUFDLEtBQUtELFFBQUwsQ0FBY0MsUUFBcEIsRUFBOEIsS0FBS0UsSUFBTCxDQUFVQyxZQUFWLENBQXVCLFVBQXZCLEVBQW1DLEVBQW5DLEVBQTlCLEtBQ0EsS0FBS0QsSUFBTCxDQUFVSyxlQUFWLENBQTBCLFVBQTFCO0FBQ0wsRTs7Ozs7a0JBdkJtQmQsYyIsImZpbGUiOiJzZWxlY3RlZC5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIFNlbGVjdGVkIEJpbmRlclxuICogQWx0ZXJzIHNlbGVjdGVkIGF0dHJpYnV0ZSBiYXNlZCBvbiByZXNvbHZlZCBkYXRhIGNvbnRlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0ZWRCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ3NlbGVjdGVkJztcblx0XHR0aGlzLmFjY2VwdHMgPSBbJ3Byb3BlcnR5JywgJ3BoYW50b20nLCAnb2JqZWN0JywgJ3N0cmluZycsICdtZXRob2QnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZCgpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQgPT09ICdzdHJpbmcnICYmIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQubGVuZ3RoID4gMCkgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0aGlzLnJlc29sdmVyLnJlc29sdmVkKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy5yZXNvbHZlci5yZXNvbHZlZCA9PT0gJ29iamVjdCcgJiYgdGhpcy5yZXNvbHZlci5yZXNvbHZlZCAhPSBudWxsKVxuXHRcdHtcblx0XHRcdHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ1tvYmplY3RdQCcgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG5cdFx0XHR0aGlzLm5vZGUuc2VsZWN0ZWQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVkO1xuXHRcdH1cblx0XHRlbHNlIGlmICghIXRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuXHRcdGVsc2UgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcblx0fVxufVxuIl19
},{"./binder.js":17}],36:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Show Binder
 * Shows element if data resolved to true
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ShowBinder = function (_Binder) {
	_inherits(ShowBinder, _Binder);

	function ShowBinder(options, traverser) {
		_classCallCheck(this, ShowBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'show';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by showing hiding the node
  * @param object oldValue The old value of the observed object
  */


	ShowBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.style.display = '';else this.node.style.display = 'none';
	};

	return ShowBinder;
}(_binder2.default);

exports.default = ShowBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cuYmluZGVyLmpzIl0sIm5hbWVzIjpbIlNob3dCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJiaW5kIiwicmVzb2x2ZXIiLCJyZXNvbHZlZCIsIm5vZGUiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV3FCQSxVOzs7QUFDcEIscUJBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksTUFBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxFQUFmO0FBTCtCO0FBTS9COztBQUVEOzs7Ozs7O3NCQUtBQyxJLG1CQUFPO0FBQ04sTUFBSSxDQUFDLENBQUMsS0FBS0MsUUFBTCxDQUFjQyxRQUFwQixFQUE4QixLQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLEVBQTFCLENBQTlCLEtBQ0ssS0FBS0YsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixNQUExQjtBQUNMLEU7Ozs7O2tCQWpCbUJWLFUiLCJmaWxlIjoic2hvdy5iaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmluZGVyIGZyb20gJy4vYmluZGVyLmpzJ1xuXG4vKipcbiAqIFNob3cgQmluZGVyXG4gKiBTaG93cyBlbGVtZW50IGlmIGRhdGEgcmVzb2x2ZWQgdG8gdHJ1ZVxuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dCaW5kZXIgZXh0ZW5kcyBCaW5kZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy50cmF2ZXJzZXIgPSB0cmF2ZXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gJ3Nob3cnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIGJpbmQoKVxuXHQgKiBCaW5kIHRoZSByZXNvbHZlZCBkYXRhIGJ5IHNob3dpbmcgaGlkaW5nIHRoZSBub2RlXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSBvZiB0aGUgb2JzZXJ2ZWQgb2JqZWN0XG5cdCAqL1xuXHRiaW5kKCkge1xuXHRcdGlmICghIXRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpIHRoaXMubm9kZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0ZWxzZSB0aGlzLm5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxufVxuIl19
},{"./binder.js":17}],37:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Src Binder
 * Alters src attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var SrcBinder = function (_Binder) {
	_inherits(SrcBinder, _Binder);

	function SrcBinder(options, traverser) {
		_classCallCheck(this, SrcBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'src';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	SrcBinder.prototype.bind = function bind() {
		// this.resolver.resolved
		if (typeof this.resolver.resolved !== 'string' || this.resolver.resolved.length < 1) this.node.removeAttribute('src');else this.node.setAttribute('src', this.resolver.resolved);
	};

	return SrcBinder;
}(_binder2.default);

exports.default = SrcBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy5iaW5kZXIuanMiXSwibmFtZXMiOlsiU3JjQmluZGVyIiwib3B0aW9ucyIsInRyYXZlcnNlciIsIm5hbWUiLCJhY2NlcHRzIiwiYmluZCIsInJlc29sdmVyIiwicmVzb2x2ZWQiLCJsZW5ndGgiLCJub2RlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztJQVdxQkEsUzs7O0FBQ3BCLG9CQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUFBLCtDQUMvQixrQkFEK0I7O0FBRS9CLFFBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxRQUFLQyxPQUFMLEdBQWUsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixRQUF4QixFQUFrQyxRQUFsQyxFQUE0QyxRQUE1QyxDQUFmO0FBTCtCO0FBTS9COztBQUVEOzs7Ozs7O3FCQUtBQyxJLG1CQUFPO0FBQ047QUFDQSxNQUFJLE9BQU8sS0FBS0MsUUFBTCxDQUFjQyxRQUFyQixLQUFrQyxRQUFsQyxJQUE4QyxLQUFLRCxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLE1BQXZCLEdBQWdDLENBQWxGLEVBQXFGLEtBQUtDLElBQUwsQ0FBVUMsZUFBVixDQUEwQixLQUExQixFQUFyRixLQUNLLEtBQUtELElBQUwsQ0FBVUUsWUFBVixDQUF1QixLQUF2QixFQUE4QixLQUFLTCxRQUFMLENBQWNDLFFBQTVDO0FBQ0wsRTs7Ozs7a0JBbEJtQlAsUyIsImZpbGUiOiJzcmMuYmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbmRlciBmcm9tICcuL2JpbmRlci5qcydcblxuLyoqXG4gKiBTcmMgQmluZGVyXG4gKiBBbHRlcnMgc3JjIGF0dHJpYnV0ZSBiYXNlZCBvbiByZXNvbHZlZCBkYXRhIGNvbnRlbnRzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0aWVzOiBvcHRpb25zLCBub2RlLCByZXNvbHZhYmxlLCBtb2RlbCwgYWNjZXB0c1xuICogbWV0aG9kOiBkZXRlY3Qobm9kZSkgeyByZXR1cm4gYm9vbCB9XG4gKiBtZXRob2Q6IGJ1aWxkKG1vZGVsKSB7IHJldHVybiBiaW5kZXIgfVxuICogbWV0aG9kOiB1cGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7IH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3JjQmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICdzcmMnO1xuXHRcdHRoaXMuYWNjZXB0cyA9IFsncHJvcGVydHknLCAncGhhbnRvbScsICdvYmplY3QnLCAnc3RyaW5nJywgJ21ldGhvZCddO1xuXHR9XG5cblx0LyoqXG5cdCAqIGJpbmQoKVxuXHQgKiBCaW5kIHRoZSByZXNvbHZlZCBkYXRhIGJ5IGFwcGx5aW5nIHN0eWxlcyB0byBub2RlXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSBvZiB0aGUgb2JzZXJ2ZWQgb2JqZWN0XG5cdCAqL1xuXHRiaW5kKCkge1xuXHRcdC8vIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWRcblx0XHRpZiAodHlwZW9mIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQgIT09ICdzdHJpbmcnIHx8IHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQubGVuZ3RoIDwgMSkgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG5cdFx0ZWxzZSB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLnJlc29sdmVyLnJlc29sdmVkKTtcblx0fVxufVxuIl19
},{"./binder.js":17}],38:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Style Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var StyleBinder = function (_Binder) {
	_inherits(StyleBinder, _Binder);

	function StyleBinder(options, traverser) {
		_classCallCheck(this, StyleBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'style';
		_this.accepts = ['property', 'phantom', 'object', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	StyleBinder.prototype.bind = function bind(oldValue) {
		if (_typeof(this.resolver.resolved) !== 'object') return;

		// set new values
		for (var key in this.resolver.resolved) {
			if (typeof key !== 'string' || typeof this.resolver.resolved[key] !== 'string') continue;
			this.node.style[key] = this.resolver.resolved[key];
		}

		// remove any old values not set by new ones
		for (var key2 in oldValue) {
			if (typeof this.resolver.resolved[key2] !== 'undefined') continue;
			this.node.style[key2] = '';
		}
	};

	return StyleBinder;
}(_binder2.default);

exports.default = StyleBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJTdHlsZUJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsImJpbmQiLCJvbGRWYWx1ZSIsInJlc29sdmVyIiwicmVzb2x2ZWQiLCJrZXkiLCJub2RlIiwic3R5bGUiLCJrZXkyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV3FCQSxXOzs7QUFDcEIsc0JBQVlDLE9BQVosRUFBcUJDLFNBQXJCLEVBQWdDO0FBQUE7O0FBQUEsK0NBQy9CLGtCQUQrQjs7QUFFL0IsUUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFLQyxJQUFMLEdBQVksT0FBWjtBQUNBLFFBQUtDLE9BQUwsR0FBZSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFFBQXhCLEVBQWtDLFFBQWxDLENBQWY7QUFMK0I7QUFNL0I7O0FBRUQ7Ozs7Ozs7dUJBS0FDLEksaUJBQUtDLFEsRUFBVTtBQUNkLE1BQUksUUFBTyxLQUFLQyxRQUFMLENBQWNDLFFBQXJCLE1BQWtDLFFBQXRDLEVBQWdEOztBQUVoRDtBQUNBLE9BQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLRixRQUFMLENBQWNDLFFBQTlCLEVBQ0E7QUFDQyxPQUFJLE9BQU9DLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU8sS0FBS0YsUUFBTCxDQUFjQyxRQUFkLENBQXVCQyxHQUF2QixDQUFQLEtBQXVDLFFBQXRFLEVBQWdGO0FBQ2hGLFFBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkYsR0FBaEIsSUFBdUIsS0FBS0YsUUFBTCxDQUFjQyxRQUFkLENBQXVCQyxHQUF2QixDQUF2QjtBQUNBOztBQUVEO0FBQ0EsT0FBSyxJQUFJRyxJQUFULElBQWlCTixRQUFqQixFQUNBO0FBQ0MsT0FBSSxPQUFPLEtBQUtDLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkksSUFBdkIsQ0FBUCxLQUF3QyxXQUE1QyxFQUF5RDtBQUN6RCxRQUFLRixJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLElBQXdCLEVBQXhCO0FBQ0E7QUFDRCxFOzs7OztrQkE5Qm1CWixXIiwiZmlsZSI6InN0eWxlLmJpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaW5kZXIgZnJvbSAnLi9iaW5kZXIuanMnXG5cbi8qKlxuICogU3R5bGUgQmluZGVyXG4gKiBBbHRlcnMgZWxlbWVudHMgc3R5bGUgYmFzZWQgb24gcmVzb2x2ZWQgZGF0YSBjb250ZW50c1xuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlQmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICdzdHlsZSc7XG5cdFx0dGhpcy5hY2NlcHRzID0gWydwcm9wZXJ0eScsICdwaGFudG9tJywgJ29iamVjdCcsICdtZXRob2QnXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSBieSBhcHBseWluZyBzdHlsZXMgdG8gbm9kZVxuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZChvbGRWYWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5yZXNvbHZlci5yZXNvbHZlZCAhPT0gJ29iamVjdCcpIHJldHVybjtcblxuXHRcdC8vIHNldCBuZXcgdmFsdWVzXG5cdFx0Zm9yICh2YXIga2V5IGluIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0aGlzLnJlc29sdmVyLnJlc29sdmVkW2tleV0gIT09ICdzdHJpbmcnKSBjb250aW51ZTtcblx0XHRcdHRoaXMubm9kZS5zdHlsZVtrZXldID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlZFtrZXldO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBhbnkgb2xkIHZhbHVlcyBub3Qgc2V0IGJ5IG5ldyBvbmVzXG5cdFx0Zm9yICh2YXIga2V5MiBpbiBvbGRWYWx1ZSlcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucmVzb2x2ZXIucmVzb2x2ZWRba2V5Ml0gIT09ICd1bmRlZmluZWQnKSBjb250aW51ZTtcblx0XHRcdHRoaXMubm9kZS5zdHlsZVtrZXkyXSA9ICcnO1xuXHRcdH1cblx0fVxufVxuIl19
},{"./binder.js":17}],39:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Text Binder
 * Binds resolved data to element contents via HTML innerText
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var TextBinder = function (_Binder) {
	_inherits(TextBinder, _Binder);

	function TextBinder(options, traverser) {
		_classCallCheck(this, TextBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'text';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	TextBinder.prototype.bind = function bind(oldValue, path) {
		this.node.innerText = String(_typeof(this.resolver.resolved) === 'symbol' ? Symbol(this.resolver.resolved) : this.resolver.resolved);
	};

	return TextBinder;
}(_binder2.default);

exports.default = TextBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuYmluZGVyLmpzIl0sIm5hbWVzIjpbIlRleHRCaW5kZXIiLCJvcHRpb25zIiwidHJhdmVyc2VyIiwibmFtZSIsImFjY2VwdHMiLCJiaW5kIiwib2xkVmFsdWUiLCJwYXRoIiwibm9kZSIsImlubmVyVGV4dCIsIlN0cmluZyIsInJlc29sdmVyIiwicmVzb2x2ZWQiLCJTeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLFU7OztBQUNwQixxQkFBWUMsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSwrQ0FDL0Isa0JBRCtCOztBQUUvQixRQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtDLElBQUwsR0FBWSxNQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFMK0I7QUFNL0I7O0FBRUQ7Ozs7Ozs7c0JBS0FDLEksaUJBQUtDLFEsRUFBVUMsSSxFQUFNO0FBQ3BCLE9BQUtDLElBQUwsQ0FBVUMsU0FBVixHQUFzQkMsT0FBTyxRQUFPLEtBQUtDLFFBQUwsQ0FBY0MsUUFBckIsTUFBa0MsUUFBbEMsR0FBNkNDLE9BQU8sS0FBS0YsUUFBTCxDQUFjQyxRQUFyQixDQUE3QyxHQUE4RSxLQUFLRCxRQUFMLENBQWNDLFFBQW5HLENBQXRCO0FBQ0EsRTs7Ozs7a0JBaEJtQlosVSIsImZpbGUiOiJ0ZXh0LmJpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaW5kZXIgZnJvbSAnLi9iaW5kZXIuanMnXG5cbi8qKlxuICogVGV4dCBCaW5kZXJcbiAqIEJpbmRzIHJlc29sdmVkIGRhdGEgdG8gZWxlbWVudCBjb250ZW50cyB2aWEgSFRNTCBpbm5lclRleHRcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG9wdGlvbnMsIG5vZGUsIHJlc29sdmFibGUsIG1vZGVsLCBhY2NlcHRzXG4gKiBtZXRob2Q6IGRldGVjdChub2RlKSB7IHJldHVybiBib29sIH1cbiAqIG1ldGhvZDogYnVpbGQobW9kZWwpIHsgcmV0dXJuIGJpbmRlciB9XG4gKiBtZXRob2Q6IHVwZGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHsgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICd0ZXh0Jztcblx0XHR0aGlzLmFjY2VwdHMgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBiaW5kKClcblx0ICogQmluZCB0aGUgcmVzb2x2ZWQgZGF0YSB0byB0aGUgbm9kZSByZXBsYWNpbmcgY29udGVudHNcblx0ICogQHBhcmFtIG9iamVjdCBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBvYmplY3Rcblx0ICovXG5cdGJpbmQob2xkVmFsdWUsIHBhdGgpIHtcblx0XHR0aGlzLm5vZGUuaW5uZXJUZXh0ID0gU3RyaW5nKHR5cGVvZiB0aGlzLnJlc29sdmVyLnJlc29sdmVkID09PSAnc3ltYm9sJyA/IFN5bWJvbCh0aGlzLnJlc29sdmVyLnJlc29sdmVkKSA6IHRoaXMucmVzb2x2ZXIucmVzb2x2ZWQpO1xuXHR9XG59XG4iXX0=
},{"./binder.js":17}],40:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Value Binder
 * Binds resolved data to value attribute of elements such as input, textarea, select etc...
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ValueBinder = function (_Binder) {
	_inherits(ValueBinder, _Binder);

	function ValueBinder(options, traverser) {
		_classCallCheck(this, ValueBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'value';
		_this.accepts = ['property', 'phantom', 'method'];
		_this.event;
		_this.tag;
		_this.type;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	ValueBinder.prototype.bind = function bind(oldValue, path) {
		// set value
		this.tag = this.node.tagName.toLowerCase();
		this.type = this.node.getAttribute('type');
		if (this.type != 'file') {
			if (this.tag === 'select') setTimeout(this.setValue.bind(this), 10);else this.setValue();
		}

		// should we watch for changes?
		if (!!this.event || this.resolver.observers.length < 1 || this.tag === 'option' || this.type == 'radio') return;

		// add event listener to node
		this.event = this.eventType();
		this.node.addEventListener(this.event, this.listener.bind(this), false);
	};

	/**
  * listener()
  * Update model when an element interaction updates its value
  * @param event event The event that triggers the update
  */


	ValueBinder.prototype.listener = function listener(event) {
		event.stopPropagation();

		// last observer is the full observed path to resolver (others before can make up sub properties)
		var path = this.resolver.observers[this.resolver.observers.length - 1].split('.');
		var end = path.pop();

		// get parent object/array
		var model = this.model;
		for (var i = 0; i < path.length; i++) {
			model = model[path[i]];
		} // change model
		if (this.tag === 'select' && this.node.hasAttribute('multiple')) {
			var selected = [];
			var opts = this.node.querySelectorAll('option');
			for (var i = 0; i < opts.length; i++) {
				if (!!opts[i].selected) selected.push(opts[i].value);
			}model[end] = selected;
		} else {
			model[end] = this.node.value;
			this.node.setAttribute('value', _typeof(this.node.value) === 'object' ? '[object]@' + new Date().getTime() : this.node.value);
		}
	};

	/**
  * setValue()
  * Set a node value and attribute to ensure changes can be picked up by attribute watchers
  */


	ValueBinder.prototype.setValue = function setValue() {
		if (this.tag === 'select' && this.node.hasAttribute('multiple') && Array.isArray(this.resolver.resolved)) {
			var opts = this.node.querySelectorAll('option');
			for (var i = 0; i < opts.length; i++) {
				// do not indexOf to stop issues with mixed var type
				for (var ii = 0; ii < this.resolver.resolved.length; ii++) {
					if (opts[i].value == this.resolver.resolved[ii]) opts[i].selected = true;
				}
			}
		} else {
			this.node.setAttribute('value', _typeof(this.resolver.resolved) === 'object' ? '[object]@' + new Date().getTime() : this.resolver.resolved);
			this.node.value = this.resolver.resolved;
		}
	};

	/**
  * eventType()
  * Get the type of event we want to listen on
  */


	ValueBinder.prototype.eventType = function eventType() {
		var name = 'change';
		if (this.tag === 'input') name = 'input';

		return name;
	};

	return ValueBinder;
}(_binder2.default);

exports.default = ValueBinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLmJpbmRlci5qcyJdLCJuYW1lcyI6WyJWYWx1ZUJpbmRlciIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJuYW1lIiwiYWNjZXB0cyIsImV2ZW50IiwidGFnIiwidHlwZSIsImJpbmQiLCJvbGRWYWx1ZSIsInBhdGgiLCJub2RlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInNldFZhbHVlIiwicmVzb2x2ZXIiLCJvYnNlcnZlcnMiLCJsZW5ndGgiLCJldmVudFR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJzcGxpdCIsImVuZCIsInBvcCIsIm1vZGVsIiwiaSIsImhhc0F0dHJpYnV0ZSIsInNlbGVjdGVkIiwib3B0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJEYXRlIiwiZ2V0VGltZSIsIkFycmF5IiwiaXNBcnJheSIsInJlc29sdmVkIiwiaWkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXcUJBLFc7OztBQUNwQixzQkFBWUMsT0FBWixFQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFBQSwrQ0FDL0Isa0JBRCtCOztBQUUvQixRQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtDLElBQUwsR0FBWSxPQUFaO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsUUFBeEIsQ0FBZjtBQUNBLFFBQUtDLEtBQUw7QUFDQSxRQUFLQyxHQUFMO0FBQ0EsUUFBS0MsSUFBTDtBQVIrQjtBQVMvQjs7QUFFRDs7Ozs7Ozt1QkFLQUMsSSxpQkFBS0MsUSxFQUFVQyxJLEVBQU07QUFDcEI7QUFDQSxPQUFLSixHQUFMLEdBQVcsS0FBS0ssSUFBTCxDQUFVQyxPQUFWLENBQWtC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U0FBSyxJQUFJYSxLQUFLLENBQWQsRUFBaUJBLEtBQUssS0FBS3hCLFFBQUwsQ0FBY3VCLFFBQWQsQ0FBdUJyQixNQUE3QyxFQUFxRHNCLElBQXJEO0FBQTJELFNBQUlWLEtBQUtILENBQUwsRUFBUU0sS0FBUixJQUFpQixLQUFLakIsUUFBTCxDQUFjdUIsUUFBZCxDQUF1QkMsRUFBdkIsQ0FBckIsRUFBaURWLEtBQUtILENBQUwsRUFBUUUsUUFBUixHQUFtQixJQUFuQjtBQUE1RztBQUNBO0FBQ0QsR0FQRCxNQVNBO0FBQ0MsUUFBS25CLElBQUwsQ0FBVXdCLFlBQVYsQ0FBdUIsT0FBdkIsRUFBZ0MsUUFBTyxLQUFLbEIsUUFBTCxDQUFjdUIsUUFBckIsTUFBa0MsUUFBbEMsR0FBNkMsY0FBYyxJQUFJSixJQUFKLEdBQVdDLE9BQVgsRUFBM0QsR0FBa0YsS0FBS3BCLFFBQUwsQ0FBY3VCLFFBQWhJO0FBQ0EsUUFBSzdCLElBQUwsQ0FBVXVCLEtBQVYsR0FBa0IsS0FBS2pCLFFBQUwsQ0FBY3VCLFFBQWhDO0FBQ0E7QUFDRCxFOztBQUVEOzs7Ozs7dUJBSUFwQixTLHdCQUFZO0FBQ1gsTUFBSWpCLE9BQU8sUUFBWDtBQUNBLE1BQUksS0FBS0csR0FBTCxLQUFhLE9BQWpCLEVBQTBCSCxPQUFPLE9BQVA7O0FBRTFCLFNBQU9BLElBQVA7QUFDQSxFOzs7OztrQkEvRm1CSCxXIiwiZmlsZSI6InZhbHVlLmJpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaW5kZXIgZnJvbSAnLi9iaW5kZXIuanMnXG5cbi8qKlxuICogVmFsdWUgQmluZGVyXG4gKiBCaW5kcyByZXNvbHZlZCBkYXRhIHRvIHZhbHVlIGF0dHJpYnV0ZSBvZiBlbGVtZW50cyBzdWNoIGFzIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IGV0Yy4uLlxuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydGllczogb3B0aW9ucywgbm9kZSwgcmVzb2x2YWJsZSwgbW9kZWwsIGFjY2VwdHNcbiAqIG1ldGhvZDogZGV0ZWN0KG5vZGUpIHsgcmV0dXJuIGJvb2wgfVxuICogbWV0aG9kOiBidWlsZChtb2RlbCkgeyByZXR1cm4gYmluZGVyIH1cbiAqIG1ldGhvZDogdXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgeyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbHVlQmluZGVyIGV4dGVuZHMgQmluZGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgdHJhdmVyc2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudHJhdmVyc2VyID0gdHJhdmVyc2VyO1xuXHRcdHRoaXMubmFtZSA9ICd2YWx1ZSc7XG5cdFx0dGhpcy5hY2NlcHRzID0gWydwcm9wZXJ0eScsICdwaGFudG9tJywgJ21ldGhvZCddO1xuXHRcdHRoaXMuZXZlbnQ7XG5cdFx0dGhpcy50YWc7XG5cdFx0dGhpcy50eXBlO1xuXHR9XG5cblx0LyoqXG5cdCAqIGJpbmQoKVxuXHQgKiBCaW5kIHRoZSByZXNvbHZlZCBkYXRhIHRvIHRoZSBub2RlIHJlcGxhY2luZyBjb250ZW50c1xuXHQgKiBAcGFyYW0gb2JqZWN0IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhlIG9ic2VydmVkIG9iamVjdFxuXHQgKi9cblx0YmluZChvbGRWYWx1ZSwgcGF0aCkge1xuXHRcdC8vIHNldCB2YWx1ZVxuXHRcdHRoaXMudGFnID0gdGhpcy5ub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHR0aGlzLnR5cGUgPSB0aGlzLm5vZGUuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG5cdFx0aWYgKHRoaXMudHlwZSAhPSAnZmlsZScpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMudGFnID09PSAnc2VsZWN0Jykgc2V0VGltZW91dCh0aGlzLnNldFZhbHVlLmJpbmQodGhpcyksIDEwKTtcblx0XHRcdGVsc2UgdGhpcy5zZXRWYWx1ZSgpO1xuXHRcdH1cblxuXHRcdC8vIHNob3VsZCB3ZSB3YXRjaCBmb3IgY2hhbmdlcz9cblx0XHRpZiAoISF0aGlzLmV2ZW50IHx8IHRoaXMucmVzb2x2ZXIub2JzZXJ2ZXJzLmxlbmd0aCA8IDEgfHwgdGhpcy50YWcgPT09ICdvcHRpb24nIHx8IHRoaXMudHlwZSA9PSAncmFkaW8nKSByZXR1cm47XG5cblx0XHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gbm9kZVxuXHRcdHRoaXMuZXZlbnQgPSB0aGlzLmV2ZW50VHlwZSgpO1xuXHRcdHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnQsIHRoaXMubGlzdGVuZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxpc3RlbmVyKClcblx0ICogVXBkYXRlIG1vZGVsIHdoZW4gYW4gZWxlbWVudCBpbnRlcmFjdGlvbiB1cGRhdGVzIGl0cyB2YWx1ZVxuXHQgKiBAcGFyYW0gZXZlbnQgZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcnMgdGhlIHVwZGF0ZVxuXHQgKi9cblx0bGlzdGVuZXIoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIGxhc3Qgb2JzZXJ2ZXIgaXMgdGhlIGZ1bGwgb2JzZXJ2ZWQgcGF0aCB0byByZXNvbHZlciAob3RoZXJzIGJlZm9yZSBjYW4gbWFrZSB1cCBzdWIgcHJvcGVydGllcylcblx0XHR2YXIgcGF0aCA9IHRoaXMucmVzb2x2ZXIub2JzZXJ2ZXJzW3RoaXMucmVzb2x2ZXIub2JzZXJ2ZXJzLmxlbmd0aCAtMV0uc3BsaXQoJy4nKTtcblx0XHRsZXQgZW5kID0gcGF0aC5wb3AoKTtcblxuXHRcdC8vIGdldCBwYXJlbnQgb2JqZWN0L2FycmF5XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5tb2RlbDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIG1vZGVsID0gbW9kZWxbcGF0aFtpXV07XG5cblx0XHQvLyBjaGFuZ2UgbW9kZWxcblx0XHRpZiAodGhpcy50YWcgPT09ICdzZWxlY3QnICYmIHRoaXMubm9kZS5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpXG5cdFx0e1xuXHRcdFx0dmFyIHNlbGVjdGVkID0gW107XG5cdFx0XHR2YXIgb3B0cyA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0cy5sZW5ndGg7IGkrKykgaWYgKCEhb3B0c1tpXS5zZWxlY3RlZCkgc2VsZWN0ZWQucHVzaChvcHRzW2ldLnZhbHVlKTtcblx0XHRcdG1vZGVsW2VuZF0gPSBzZWxlY3RlZDtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdG1vZGVsW2VuZF0gPSB0aGlzLm5vZGUudmFsdWU7XG5cdFx0XHR0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHR5cGVvZiB0aGlzLm5vZGUudmFsdWUgPT09ICdvYmplY3QnID8gJ1tvYmplY3RdQCcgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IHRoaXMubm9kZS52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIHNldFZhbHVlKClcblx0ICogU2V0IGEgbm9kZSB2YWx1ZSBhbmQgYXR0cmlidXRlIHRvIGVuc3VyZSBjaGFuZ2VzIGNhbiBiZSBwaWNrZWQgdXAgYnkgYXR0cmlidXRlIHdhdGNoZXJzXG5cdCAqL1xuXHRzZXRWYWx1ZSgpIHtcblx0XHRpZiAodGhpcy50YWcgPT09ICdzZWxlY3QnICYmIHRoaXMubm9kZS5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnJlc29sdmVyLnJlc29sdmVkKSlcblx0XHR7XG5cdFx0XHR2YXIgb3B0cyA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvLyBkbyBub3QgaW5kZXhPZiB0byBzdG9wIGlzc3VlcyB3aXRoIG1peGVkIHZhciB0eXBlXG5cdFx0XHRcdGZvciAodmFyIGlpID0gMDsgaWkgPCB0aGlzLnJlc29sdmVyLnJlc29sdmVkLmxlbmd0aDsgaWkrKykgaWYgKG9wdHNbaV0udmFsdWUgPT0gdGhpcy5yZXNvbHZlci5yZXNvbHZlZFtpaV0pIG9wdHNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0eXBlb2YgdGhpcy5yZXNvbHZlci5yZXNvbHZlZCA9PT0gJ29iamVjdCcgPyAnW29iamVjdF1AJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDogdGhpcy5yZXNvbHZlci5yZXNvbHZlZCk7XG5cdFx0XHR0aGlzLm5vZGUudmFsdWUgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVkO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBldmVudFR5cGUoKVxuXHQgKiBHZXQgdGhlIHR5cGUgb2YgZXZlbnQgd2Ugd2FudCB0byBsaXN0ZW4gb25cblx0ICovXG5cdGV2ZW50VHlwZSgpIHtcblx0XHRsZXQgbmFtZSA9ICdjaGFuZ2UnO1xuXHRcdGlmICh0aGlzLnRhZyA9PT0gJ2lucHV0JykgbmFtZSA9ICdpbnB1dCc7XG5cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxufVxuIl19
},{"./binder.js":17}],41:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindDateFormat = exports.RaziloBindCoreObserver = exports.RaziloBindCoreTraverser = exports.RaziloBindCoreDetector = exports.RaziloBindCore = undefined;

var _core = require('./src/core.js');

var _core2 = _interopRequireDefault(_core);

var _detector = require('./src/detector.js');

var _detector2 = _interopRequireDefault(_detector);

var _traverser = require('./src/traverser.js');

var _traverser2 = _interopRequireDefault(_traverser);

var _observer = require('./src/observer.js');

var _observer2 = _interopRequireDefault(_observer);

var _dateFormat = require('./src/date-format.js');

var _dateFormat2 = _interopRequireDefault(_dateFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindCore = _core2.default;
exports.RaziloBindCoreDetector = _detector2.default;
exports.RaziloBindCoreTraverser = _traverser2.default;
exports.RaziloBindCoreObserver = _observer2.default;
exports.RaziloBindDateFormat = _dateFormat2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJhemlsb0JpbmRDb3JlIiwiUmF6aWxvQmluZENvcmVEZXRlY3RvciIsIlJhemlsb0JpbmRDb3JlVHJhdmVyc2VyIiwiUmF6aWxvQmluZENvcmVPYnNlcnZlciIsIlJhemlsb0JpbmREYXRlRm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUdTQSxjO1FBQ0lDLHNCO1FBQ0NDLHVCO1FBQ0RDLHNCO1FBQ0VDLG9CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcmUgZnJvbSAnLi9zcmMvY29yZS5qcydcbmltcG9ydCBEZXRlY3RvciBmcm9tICcuL3NyYy9kZXRlY3Rvci5qcydcbmltcG9ydCBUcmF2ZXJzZXIgZnJvbSAnLi9zcmMvdHJhdmVyc2VyLmpzJ1xuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4vc3JjL29ic2VydmVyLmpzJ1xuaW1wb3J0IERhdGVGb3JtYXQgZnJvbSAnLi9zcmMvZGF0ZS1mb3JtYXQuanMnXG5cbmV4cG9ydCB7XG5cdENvcmUgYXMgUmF6aWxvQmluZENvcmUsXG5cdERldGVjdG9yIGFzIFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IsXG5cdFRyYXZlcnNlciBhcyBSYXppbG9CaW5kQ29yZVRyYXZlcnNlcixcblx0T2JzZXJ2ZXIgYXMgUmF6aWxvQmluZENvcmVPYnNlcnZlcixcblx0RGF0ZUZvcm1hdCBhcyBSYXppbG9CaW5kRGF0ZUZvcm1hdFxufVxuIl19
},{"./src/core.js":42,"./src/date-format.js":43,"./src/detector.js":44,"./src/observer.js":45,"./src/traverser.js":46}],42:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _traverser = require('./traverser.js');

var _traverser2 = _interopRequireDefault(_traverser);

var _observer = require('./observer.js');

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RaziloBind Binding Library
 * Offers View-Model binding between js object and html view
 */
var Core = function () {
	function Core(options) {
		_classCallCheck(this, Core);

		// set up
		this.options = typeof options !== 'undefined' ? options : {};
		this.options.prefix = typeof this.options.prefix !== 'undefined' ? this.options.prefix + '-' : '';
	}

	Core.prototype.bind = function bind(element, object) {
		element = typeof element === 'string' ? document.querySelector(element) : element;
		if (!element) throw "Element not found, cannot bind to non-element";

		// set basics
		element.razilobind = this;
		this.model = _observer2.default.object(object, this.update.bind(this), true);
		this.element = element;

		// iterate over nodes
		this.traverser = new _traverser2.default(this.options);
		this.traverser.traverse(this.element, this.model, true);
	};

	Core.prototype.update = function update(path, oldV, newV) {
		var action = 'update';
		var pathParts = path.split('.');
		var pathEnd = pathParts[pathParts.length - 1];

		// sort out arrys and objects
		if (pathEnd === 'length') {
			// convert .lengths to parent updates
			action = oldV > newV ? 'array-remove' : 'array-add';
			path = path.substring(0, path.length - pathEnd.length - 1);
		} else if (typeof oldV === 'undefined' || typeof newV === 'undefined') {
			var model = this.model;
			for (var i = 0; i < pathParts.length - 1; i++) {
				model = model[pathParts[i]];
			} // if parent is object, also fire parent update and allow original to continue
			if (typeof model.length === 'undefined') {
				var xPath = path.substring(0, path.length - pathEnd.length - 1);
				var xAction = typeof oldV === 'undefined' ? 'object-add' : 'object-remove';
				this.cascade(oldV, xPath, xAction, pathEnd);
			}
		}

		this.cascade(oldV, path, action);
	};

	Core.prototype.cascade = function cascade(oldV, path, action, pathEnd) {
		// ensure we cascade any changes back down the tree for objects and arrays
		while (path.length > 0) {
			if (typeof this.traverser.observables[path] !== 'undefined') for (var key in this.traverser.observables[path]) {
				this.traverser.observables[path][key].update(oldV, path, action, pathEnd);
			}path = path.substring(0, path.lastIndexOf("."));
		}
	};

	return Core;
}();

exports.default = Core;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUuanMiXSwibmFtZXMiOlsiQ29yZSIsIm9wdGlvbnMiLCJwcmVmaXgiLCJiaW5kIiwiZWxlbWVudCIsIm9iamVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJhemlsb2JpbmQiLCJtb2RlbCIsInVwZGF0ZSIsInRyYXZlcnNlciIsInRyYXZlcnNlIiwicGF0aCIsIm9sZFYiLCJuZXdWIiwiYWN0aW9uIiwicGF0aFBhcnRzIiwic3BsaXQiLCJwYXRoRW5kIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiaSIsInhQYXRoIiwieEFjdGlvbiIsImNhc2NhZGUiLCJvYnNlcnZhYmxlcyIsImtleSIsImxhc3RJbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7OztJQUlxQkEsSTtBQUNqQixlQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ3ZCO0FBQ0EsT0FBS0EsT0FBTCxHQUFlLE9BQU9BLE9BQVAsS0FBbUIsV0FBbkIsR0FBaUNBLE9BQWpDLEdBQTJDLEVBQTFEO0FBQ00sT0FBS0EsT0FBTCxDQUFhQyxNQUFiLEdBQXNCLE9BQU8sS0FBS0QsT0FBTCxDQUFhQyxNQUFwQixLQUErQixXQUEvQixHQUE2QyxLQUFLRCxPQUFMLENBQWFDLE1BQWIsR0FBc0IsR0FBbkUsR0FBeUUsRUFBL0Y7QUFDTjs7Z0JBRURDLEksaUJBQUtDLE8sRUFBU0MsTSxFQUFRO0FBQ3JCRCxZQUFVLE9BQU9BLE9BQVAsS0FBbUIsUUFBbkIsR0FBOEJFLFNBQVNDLGFBQVQsQ0FBdUJILE9BQXZCLENBQTlCLEdBQWdFQSxPQUExRTtBQUNBLE1BQUksQ0FBQ0EsT0FBTCxFQUFjLE1BQU0sK0NBQU47O0FBRWQ7QUFDQUEsVUFBUUksVUFBUixHQUFxQixJQUFyQjtBQUNNLE9BQUtDLEtBQUwsR0FBYSxtQkFBU0osTUFBVCxDQUFnQkEsTUFBaEIsRUFBd0IsS0FBS0ssTUFBTCxDQUFZUCxJQUFaLENBQWlCLElBQWpCLENBQXhCLEVBQWdELElBQWhELENBQWI7QUFDQSxPQUFLQyxPQUFMLEdBQWVBLE9BQWY7O0FBRU47QUFDQSxPQUFLTyxTQUFMLEdBQWlCLHdCQUFjLEtBQUtWLE9BQW5CLENBQWpCO0FBQ0EsT0FBS1UsU0FBTCxDQUFlQyxRQUFmLENBQXdCLEtBQUtSLE9BQTdCLEVBQXNDLEtBQUtLLEtBQTNDLEVBQWtELElBQWxEO0FBQ0EsRTs7Z0JBRUVDLE0sbUJBQU9HLEksRUFBTUMsSSxFQUFNQyxJLEVBQU07QUFDM0IsTUFBSUMsU0FBUyxRQUFiO0FBQ0EsTUFBSUMsWUFBWUosS0FBS0ssS0FBTCxDQUFXLEdBQVgsQ0FBaEI7QUFDQSxNQUFJQyxVQUFVRixVQUFVQSxVQUFVRyxNQUFWLEdBQWtCLENBQTVCLENBQWQ7O0FBRUE7QUFDQSxNQUFJRCxZQUFZLFFBQWhCLEVBQ0E7QUFDQztBQUNBSCxZQUFTRixPQUFPQyxJQUFQLEdBQWMsY0FBZCxHQUErQixXQUF4QztBQUNBRixVQUFPQSxLQUFLUSxTQUFMLENBQWUsQ0FBZixFQUFrQlIsS0FBS08sTUFBTCxHQUFjRCxRQUFRQyxNQUF0QixHQUE4QixDQUFoRCxDQUFQO0FBQ0EsR0FMRCxNQU1LLElBQUksT0FBT04sSUFBUCxLQUFnQixXQUFoQixJQUErQixPQUFPQyxJQUFQLEtBQWdCLFdBQW5ELEVBQ0w7QUFDQyxPQUFJTixRQUFRLEtBQUtBLEtBQWpCO0FBQ0EsUUFBSyxJQUFJYSxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLFVBQVVHLE1BQVYsR0FBbUIsQ0FBdkMsRUFBMENFLEdBQTFDO0FBQStDYixZQUFRQSxNQUFNUSxVQUFVSyxDQUFWLENBQU4sQ0FBUjtBQUEvQyxJQUZELENBSUM7QUFDQSxPQUFJLE9BQU9iLE1BQU1XLE1BQWIsS0FBd0IsV0FBNUIsRUFDQTtBQUNDLFFBQUlHLFFBQVFWLEtBQUtRLFNBQUwsQ0FBZSxDQUFmLEVBQWtCUixLQUFLTyxNQUFMLEdBQWNELFFBQVFDLE1BQXRCLEdBQThCLENBQWhELENBQVo7QUFDQSxRQUFJSSxVQUFVLE9BQU9WLElBQVAsS0FBZ0IsV0FBaEIsR0FBOEIsWUFBOUIsR0FBNkMsZUFBM0Q7QUFDQSxTQUFLVyxPQUFMLENBQWFYLElBQWIsRUFBbUJTLEtBQW5CLEVBQTBCQyxPQUExQixFQUFtQ0wsT0FBbkM7QUFDQTtBQUNEOztBQUVELE9BQUtNLE9BQUwsQ0FBYVgsSUFBYixFQUFtQkQsSUFBbkIsRUFBeUJHLE1BQXpCO0FBQ0EsRTs7Z0JBRUVTLE8sb0JBQVFYLEksRUFBTUQsSSxFQUFNRyxNLEVBQVFHLE8sRUFBUztBQUNqQztBQUNBLFNBQU9OLEtBQUtPLE1BQUwsR0FBYyxDQUFyQixFQUF3QjtBQUNwQixPQUFJLE9BQU8sS0FBS1QsU0FBTCxDQUFlZSxXQUFmLENBQTJCYixJQUEzQixDQUFQLEtBQTRDLFdBQWhELEVBQTZELEtBQUssSUFBSWMsR0FBVCxJQUFnQixLQUFLaEIsU0FBTCxDQUFlZSxXQUFmLENBQTJCYixJQUEzQixDQUFoQjtBQUFrRCxTQUFLRixTQUFMLENBQWVlLFdBQWYsQ0FBMkJiLElBQTNCLEVBQWlDYyxHQUFqQyxFQUFzQ2pCLE1BQXRDLENBQTZDSSxJQUE3QyxFQUFtREQsSUFBbkQsRUFBeURHLE1BQXpELEVBQWlFRyxPQUFqRTtBQUFsRCxJQUM3RE4sT0FBT0EsS0FBS1EsU0FBTCxDQUFlLENBQWYsRUFBa0JSLEtBQUtlLFdBQUwsQ0FBaUIsR0FBakIsQ0FBbEIsQ0FBUDtBQUNIO0FBQ0osRTs7Ozs7a0JBeERnQjVCLEkiLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmF2ZXJzZXIgZnJvbSAnLi90cmF2ZXJzZXIuanMnXG5pbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnLi9vYnNlcnZlci5qcydcblxuLyoqXG4gKiBSYXppbG9CaW5kIEJpbmRpbmcgTGlicmFyeVxuICogT2ZmZXJzIFZpZXctTW9kZWwgYmluZGluZyBiZXR3ZWVuIGpzIG9iamVjdCBhbmQgaHRtbCB2aWV3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHQvLyBzZXQgdXBcblx0XHR0aGlzLm9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zIDoge307XG4gICAgICAgIHRoaXMub3B0aW9ucy5wcmVmaXggPSB0eXBlb2YgdGhpcy5vcHRpb25zLnByZWZpeCAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm9wdGlvbnMucHJlZml4ICsgJy0nIDogJyc7XG5cdH1cblxuXHRiaW5kKGVsZW1lbnQsIG9iamVjdCkge1xuXHRcdGVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblx0XHRpZiAoIWVsZW1lbnQpIHRocm93IFwiRWxlbWVudCBub3QgZm91bmQsIGNhbm5vdCBiaW5kIHRvIG5vbi1lbGVtZW50XCI7XG5cblx0XHQvLyBzZXQgYmFzaWNzXG5cdFx0ZWxlbWVudC5yYXppbG9iaW5kID0gdGhpcztcbiAgICAgICAgdGhpcy5tb2RlbCA9IE9ic2VydmVyLm9iamVjdChvYmplY3QsIHRoaXMudXBkYXRlLmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIG5vZGVzXG5cdFx0dGhpcy50cmF2ZXJzZXIgPSBuZXcgVHJhdmVyc2VyKHRoaXMub3B0aW9ucyk7XG5cdFx0dGhpcy50cmF2ZXJzZXIudHJhdmVyc2UodGhpcy5lbGVtZW50LCB0aGlzLm1vZGVsLCB0cnVlKTtcblx0fVxuXG4gICAgdXBkYXRlKHBhdGgsIG9sZFYsIG5ld1YpIHtcblx0XHRsZXQgYWN0aW9uID0gJ3VwZGF0ZSc7XG5cdFx0bGV0IHBhdGhQYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcblx0XHRsZXQgcGF0aEVuZCA9IHBhdGhQYXJ0c1twYXRoUGFydHMubGVuZ3RoIC0xXTtcblxuXHRcdC8vIHNvcnQgb3V0IGFycnlzIGFuZCBvYmplY3RzXG5cdFx0aWYgKHBhdGhFbmQgPT09ICdsZW5ndGgnKVxuXHRcdHtcblx0XHRcdC8vIGNvbnZlcnQgLmxlbmd0aHMgdG8gcGFyZW50IHVwZGF0ZXNcblx0XHRcdGFjdGlvbiA9IG9sZFYgPiBuZXdWID8gJ2FycmF5LXJlbW92ZScgOiAnYXJyYXktYWRkJztcblx0XHRcdHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBwYXRoLmxlbmd0aCAtIHBhdGhFbmQubGVuZ3RoIC0xKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodHlwZW9mIG9sZFYgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBuZXdWID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoUGFydHMubGVuZ3RoIC0gMTsgaSsrKSBtb2RlbCA9IG1vZGVsW3BhdGhQYXJ0c1tpXV07XG5cblx0XHRcdC8vIGlmIHBhcmVudCBpcyBvYmplY3QsIGFsc28gZmlyZSBwYXJlbnQgdXBkYXRlIGFuZCBhbGxvdyBvcmlnaW5hbCB0byBjb250aW51ZVxuXHRcdFx0aWYgKHR5cGVvZiBtb2RlbC5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgeFBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBwYXRoLmxlbmd0aCAtIHBhdGhFbmQubGVuZ3RoIC0xKTtcblx0XHRcdFx0bGV0IHhBY3Rpb24gPSB0eXBlb2Ygb2xkViA9PT0gJ3VuZGVmaW5lZCcgPyAnb2JqZWN0LWFkZCcgOiAnb2JqZWN0LXJlbW92ZSc7XG5cdFx0XHRcdHRoaXMuY2FzY2FkZShvbGRWLCB4UGF0aCwgeEFjdGlvbiwgcGF0aEVuZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5jYXNjYWRlKG9sZFYsIHBhdGgsIGFjdGlvbik7XG5cdH1cblxuICAgIGNhc2NhZGUob2xkViwgcGF0aCwgYWN0aW9uLCBwYXRoRW5kKSB7XG4gICAgICAgIC8vIGVuc3VyZSB3ZSBjYXNjYWRlIGFueSBjaGFuZ2VzIGJhY2sgZG93biB0aGUgdHJlZSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzXG4gICAgICAgIHdoaWxlIChwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50cmF2ZXJzZXIub2JzZXJ2YWJsZXNbcGF0aF0gIT09ICd1bmRlZmluZWQnKSBmb3IgKGxldCBrZXkgaW4gdGhpcy50cmF2ZXJzZXIub2JzZXJ2YWJsZXNbcGF0aF0pIHRoaXMudHJhdmVyc2VyLm9ic2VydmFibGVzW3BhdGhdW2tleV0udXBkYXRlKG9sZFYsIHBhdGgsIGFjdGlvbiwgcGF0aEVuZCk7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
},{"./observer.js":45,"./traverser.js":46}],43:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Date Alterer
 * Alters various data to a date string in (options) format
 *
 * Inspired by dateFormat https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js by Steven Levithan <stevenlevithan.com>
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 *
 * PORTED FROM: dateFormat https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var DateFormat = function () {
	function DateFormat() {
		_classCallCheck(this, DateFormat);
	}

	DateFormat.dateFormat = function dateFormat(date, mask, utc, gmt) {
		var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
		var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
		var timezoneClip = /[^-+\dA-Z]/g;

		var masks = {
			'default': 'ddd mmm dd yyyy HH:MM:ss',
			'shortDate': 'm/d/yy',
			'mediumDate': 'mmm d, yyyy',
			'longDate': 'mmmm d, yyyy',
			'fullDate': 'dddd, mmmm d, yyyy',
			'shortTime': 'h:MM TT',
			'mediumTime': 'h:MM:ss TT',
			'longTime': 'h:MM:ss TT Z',
			'isoDate': 'yyyy-mm-dd',
			'isoTime': 'HH:MM:ss',
			'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
			'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
			'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
		};

		var i18n = {
			dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		};

		mask = String(masks[mask] || mask || masks['default']);

		// Allow setting the utc/gmt argument via the mask
		var maskSlice = mask.slice(0, 4);
		if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
			mask = mask.slice(4);
			utc = true;
			if (maskSlice === 'GMT:') gmt = true;
		}

		var _ = utc ? 'getUTC' : 'get';
		var d = date[_ + 'Date']();
		var D = date[_ + 'Day']();
		var m = date[_ + 'Month']();
		var y = date[_ + 'FullYear']();
		var H = date[_ + 'Hours']();
		var M = date[_ + 'Minutes']();
		var s = date[_ + 'Seconds']();
		var L = date[_ + 'Milliseconds']();
		var o = utc ? 0 : date.getTimezoneOffset();
		var W = DateFormat.getWeek(date);
		var N = DateFormat.getDayOfWeek(date);
		var flags = {
			d: d,
			dd: DateFormat.pad(d),
			ddd: i18n.dayNames[D],
			dddd: i18n.dayNames[D + 7],
			m: m + 1,
			mm: DateFormat.pad(m + 1),
			mmm: i18n.monthNames[m],
			mmmm: i18n.monthNames[m + 12],
			yy: String(y).slice(2),
			yyyy: y,
			h: H % 12 || 12,
			hh: DateFormat.pad(H % 12 || 12),
			H: H,
			HH: DateFormat.pad(H),
			M: M,
			MM: DateFormat.pad(M),
			s: s,
			ss: DateFormat.pad(s),
			l: DateFormat.pad(L, 3),
			L: DateFormat.pad(Math.round(L / 10)),
			t: H < 12 ? 'a' : 'p',
			tt: H < 12 ? 'am' : 'pm',
			T: H < 12 ? 'A' : 'P',
			TT: H < 12 ? 'AM' : 'PM',
			Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
			o: (o > 0 ? '-' : '+') + DateFormat.pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
			S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
			W: W,
			N: N
		};

		return mask.replace(token, function (match) {
			if (match in flags) return flags[match];
			return match.slice(1, match.length - 1);
		});
	};

	/**
  * Get the ISO 8601 week number
  * Based on comments from
  * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
  *
  * @param  {Object} `date`
  * @return {Number}
  */


	DateFormat.getWeek = function getWeek(date) {
		// Remove time components of date
		var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

		// Change date to Thursday same week
		targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);

		// Take January 4th as it is always in week 1 (see ISO 8601)
		var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

		// Change date to Thursday same week
		firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);

		// Check if daylight-saving-time-switch occured and correct for it
		var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
		targetThursday.setHours(targetThursday.getHours() - ds);

		// Number of weeks between target Thursday and first Thursday
		var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
		return 1 + Math.floor(weekDiff);
	};

	/**
  * Get ISO-8601 numeric representation of the day of the week
  * 1 (for Monday) through 7 (for Sunday)
  *
  * @param  {Object} `date`
  * @return {Number}
  */


	DateFormat.getDayOfWeek = function getDayOfWeek(date) {
		var dow = date.getDay();
		if (dow === 0) dow = 7;
		return dow;
	};

	DateFormat.pad = function pad(val, len) {
		val = String(val);
		len = len || 2;
		while (val.length < len) {
			val = '0' + val;
		}return val;
	};

	return DateFormat;
}();

exports.default = DateFormat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtZm9ybWF0LmpzIl0sIm5hbWVzIjpbIkRhdGVGb3JtYXQiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsIm1hc2siLCJ1dGMiLCJnbXQiLCJ0b2tlbiIsInRpbWV6b25lIiwidGltZXpvbmVDbGlwIiwibWFza3MiLCJpMThuIiwiZGF5TmFtZXMiLCJtb250aE5hbWVzIiwiU3RyaW5nIiwibWFza1NsaWNlIiwic2xpY2UiLCJfIiwiZCIsIkQiLCJtIiwieSIsIkgiLCJNIiwicyIsIkwiLCJvIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJXIiwiZ2V0V2VlayIsIk4iLCJnZXREYXlPZldlZWsiLCJmbGFncyIsImRkIiwicGFkIiwiZGRkIiwiZGRkZCIsIm1tIiwibW1tIiwibW1tbSIsInl5IiwieXl5eSIsImgiLCJoaCIsIkhIIiwiTU0iLCJzcyIsImwiLCJNYXRoIiwicm91bmQiLCJ0IiwidHQiLCJUIiwiVFQiLCJaIiwibWF0Y2giLCJwb3AiLCJyZXBsYWNlIiwiZmxvb3IiLCJhYnMiLCJTIiwibGVuZ3RoIiwidGFyZ2V0VGh1cnNkYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJzZXREYXRlIiwiZ2V0RGF5IiwiZmlyc3RUaHVyc2RheSIsImRzIiwic2V0SG91cnMiLCJnZXRIb3VycyIsIndlZWtEaWZmIiwiZG93IiwidmFsIiwibGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0JxQkEsVTs7Ozs7WUFDYkMsVSx1QkFBV0MsSSxFQUFNQyxJLEVBQU1DLEcsRUFBS0MsRyxFQUFLO0FBQ3ZDLE1BQUlDLFFBQVEsa0VBQVo7QUFDQSxNQUFJQyxXQUFXLHNJQUFmO0FBQ0EsTUFBSUMsZUFBZSxhQUFuQjs7QUFFQSxNQUFJQyxRQUFRO0FBQ1gsY0FBeUIsMEJBRGQ7QUFFWCxnQkFBeUIsUUFGZDtBQUdYLGlCQUF5QixhQUhkO0FBSVgsZUFBeUIsY0FKZDtBQUtYLGVBQXlCLG9CQUxk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Y0FBY0gsT0FBZCxLQUEyQixDQUFDRyxjQUFjRCxNQUFkLEtBQXlCLENBQTFCLElBQStCLENBQTFELEdBQStELENBQXJGOztBQUVBO0FBQ0EsTUFBSUUsS0FBS1IsZUFBZW5DLGlCQUFmLEtBQXFDMEMsY0FBYzFDLGlCQUFkLEVBQTlDO0FBQ0FtQyxpQkFBZVMsUUFBZixDQUF3QlQsZUFBZVUsUUFBZixLQUE0QkYsRUFBcEQ7O0FBRUE7QUFDQSxNQUFJRyxXQUFXLENBQUNYLGlCQUFpQk8sYUFBbEIsS0FBb0MsV0FBUyxDQUE3QyxDQUFmO0FBQ0EsU0FBTyxJQUFJckIsS0FBS1UsS0FBTCxDQUFXZSxRQUFYLENBQVg7QUFDRCxFOztBQUVEOzs7Ozs7Ozs7WUFPTzFDLFkseUJBQWE1QixJLEVBQU07QUFDekIsTUFBSXVFLE1BQU12RSxLQUFLaUUsTUFBTCxFQUFWO0FBQ0EsTUFBSU0sUUFBUSxDQUFaLEVBQWVBLE1BQU0sQ0FBTjtBQUNmLFNBQU9BLEdBQVA7QUFDQSxFOztZQUVNeEMsRyxnQkFBSXlDLEcsRUFBS0MsRyxFQUFLO0FBQ3BCRCxRQUFNN0QsT0FBTzZELEdBQVAsQ0FBTjtBQUNBQyxRQUFNQSxPQUFPLENBQWI7QUFDQSxTQUFPRCxJQUFJZCxNQUFKLEdBQWFlLEdBQXBCO0FBQXlCRCxTQUFNLE1BQU1BLEdBQVo7QUFBekIsR0FDRSxPQUFPQSxHQUFQO0FBQ0YsRTs7Ozs7a0JBdkltQjFFLFUiLCJmaWxlIjoiZGF0ZS1mb3JtYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERhdGUgQWx0ZXJlclxuICogQWx0ZXJzIHZhcmlvdXMgZGF0YSB0byBhIGRhdGUgc3RyaW5nIGluIChvcHRpb25zKSBmb3JtYXRcbiAqXG4gKiBJbnNwaXJlZCBieSBkYXRlRm9ybWF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mZWxpeGdlL25vZGUtZGF0ZWZvcm1hdC9ibG9iL21hc3Rlci9saWIvZGF0ZWZvcm1hdC5qcyBieSBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT5cbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnRpZXM6IG5hbWUsIGFjY2VwdHMsIG9wdGlvbnNcbiAqIG1ldGhvZDogZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSB7IHJldHVybiBib29sIH1cbiAqXG4gKiBQT1JURUQgRlJPTTogZGF0ZUZvcm1hdCBodHRwczovL2dpdGh1Yi5jb20vZmVsaXhnZS9ub2RlLWRhdGVmb3JtYXQvYmxvYi9tYXN0ZXIvbGliL2RhdGVmb3JtYXQuanNcbiAqIERhdGUgRm9ybWF0IDEuMi4zXG4gKiAoYykgMjAwNy0yMDA5IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxuICogTUlUIGxpY2Vuc2VcbiAqXG4gKiBJbmNsdWRlcyBlbmhhbmNlbWVudHMgYnkgU2NvdHQgVHJlbmRhIDxzY290dC50cmVuZGEubmV0PlxuICogYW5kIEtyaXMgS293YWwgPGNpeGFyLmNvbS9+a3Jpcy5rb3dhbC8+XG4gKlxuICogQWNjZXB0cyBhIGRhdGUsIGEgbWFzaywgb3IgYSBkYXRlIGFuZCBhIG1hc2suXG4gKiBSZXR1cm5zIGEgZm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZGF0ZSBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBkYXRlL3RpbWUuXG4gKiBUaGUgbWFzayBkZWZhdWx0cyB0byBkYXRlRm9ybWF0Lm1hc2tzLmRlZmF1bHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVGb3JtYXQge1xuXHRzdGF0aWMgZGF0ZUZvcm1hdChkYXRlLCBtYXNrLCB1dGMsIGdtdCkge1xuXHRcdHZhciB0b2tlbiA9IC9kezEsNH18bXsxLDR9fHl5KD86eXkpP3woW0hoTXNUdF0pXFwxP3xbTGxvU1pXTl18J1teJ10qJ3wnW14nXSonL2c7XG5cdFx0dmFyIHRpbWV6b25lID0gL1xcYig/OltQTUNFQV1bU0RQXVR8KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWV8KD86R01UfFVUQykoPzpbLStdXFxkezR9KT8pXFxiL2c7XG5cdFx0dmFyIHRpbWV6b25lQ2xpcCA9IC9bXi0rXFxkQS1aXS9nO1xuXG5cdFx0dmFyIG1hc2tzID0ge1xuXHRcdFx0J2RlZmF1bHQnOiAgICAgICAgICAgICAgICdkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3MnLFxuXHRcdFx0J3Nob3J0RGF0ZSc6ICAgICAgICAgICAgICdtL2QveXknLFxuXHRcdFx0J21lZGl1bURhdGUnOiAgICAgICAgICAgICdtbW0gZCwgeXl5eScsXG5cdFx0XHQnbG9uZ0RhdGUnOiAgICAgICAgICAgICAgJ21tbW0gZCwgeXl5eScsXG5cdFx0XHQnZnVsbERhdGUnOiAgICAgICAgICAgICAgJ2RkZGQsIG1tbW0gZCwgeXl5eScsXG5cdFx0XHQnc2hvcnRUaW1lJzogICAgICAgICAgICAgJ2g6TU0gVFQnLFxuXHRcdFx0J21lZGl1bVRpbWUnOiAgICAgICAgICAgICdoOk1NOnNzIFRUJyxcblx0XHRcdCdsb25nVGltZSc6ICAgICAgICAgICAgICAnaDpNTTpzcyBUVCBaJyxcblx0XHRcdCdpc29EYXRlJzogICAgICAgICAgICAgICAneXl5eS1tbS1kZCcsXG5cdFx0XHQnaXNvVGltZSc6ICAgICAgICAgICAgICAgJ0hIOk1NOnNzJyxcblx0XHRcdCdpc29EYXRlVGltZSc6ICAgICAgICAgICAneXl5eS1tbS1kZFxcJ1RcXCdISDpNTTpzc28nLFxuXHRcdFx0J2lzb1V0Y0RhdGVUaW1lJzogICAgICAgICdVVEM6eXl5eS1tbS1kZFxcJ1RcXCdISDpNTTpzc1xcJ1pcXCcnLFxuXHRcdFx0J2V4cGlyZXNIZWFkZXJGb3JtYXQnOiAgICdkZGQsIGRkIG1tbSB5eXl5IEhIOk1NOnNzIFonXG5cdFx0fTtcblxuXHRcdHZhciBpMThuID0ge1xuXHRcdFx0ZGF5TmFtZXM6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JywgJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG5cdFx0XHRtb250aE5hbWVzOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJywgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxuXHRcdH07XG5cbiAgICAgICAgbWFzayA9IFN0cmluZyhtYXNrc1ttYXNrXSB8fCBtYXNrIHx8IG1hc2tzWydkZWZhdWx0J10pO1xuXG4gICAgICAgIC8vIEFsbG93IHNldHRpbmcgdGhlIHV0Yy9nbXQgYXJndW1lbnQgdmlhIHRoZSBtYXNrXG4gICAgICAgIHZhciBtYXNrU2xpY2UgPSBtYXNrLnNsaWNlKDAsIDQpO1xuICAgICAgICBpZiAobWFza1NsaWNlID09PSAnVVRDOicgfHwgbWFza1NsaWNlID09PSAnR01UOicpIHtcbiAgICAgICAgXHRtYXNrID0gbWFzay5zbGljZSg0KTtcbiAgICAgICAgXHR1dGMgPSB0cnVlO1xuICAgICAgICBcdGlmIChtYXNrU2xpY2UgPT09ICdHTVQ6JykgZ210ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfID0gdXRjID8gJ2dldFVUQycgOiAnZ2V0JztcbiAgICAgICAgdmFyIGQgPSBkYXRlW18gKyAnRGF0ZSddKCk7XG4gICAgICAgIHZhciBEID0gZGF0ZVtfICsgJ0RheSddKCk7XG4gICAgICAgIHZhciBtID0gZGF0ZVtfICsgJ01vbnRoJ10oKTtcbiAgICAgICAgdmFyIHkgPSBkYXRlW18gKyAnRnVsbFllYXInXSgpO1xuICAgICAgICB2YXIgSCA9IGRhdGVbXyArICdIb3VycyddKCk7XG4gICAgICAgIHZhciBNID0gZGF0ZVtfICsgJ01pbnV0ZXMnXSgpO1xuICAgICAgICB2YXIgcyA9IGRhdGVbXyArICdTZWNvbmRzJ10oKTtcbiAgICAgICAgdmFyIEwgPSBkYXRlW18gKyAnTWlsbGlzZWNvbmRzJ10oKTtcbiAgICAgICAgdmFyIG8gPSB1dGMgPyAwIDogZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICB2YXIgVyA9IERhdGVGb3JtYXQuZ2V0V2VlayhkYXRlKTtcbiAgICAgICAgdmFyIE4gPSBEYXRlRm9ybWF0LmdldERheU9mV2VlayhkYXRlKTtcbiAgICAgICAgdmFyIGZsYWdzID0ge1xuXHRcdFx0ZDogICAgZCxcblx0XHRcdGRkOiAgIERhdGVGb3JtYXQucGFkKGQpLFxuXHRcdFx0ZGRkOiAgaTE4bi5kYXlOYW1lc1tEXSxcblx0XHRcdGRkZGQ6IGkxOG4uZGF5TmFtZXNbRCArIDddLFxuXHRcdFx0bTogICAgbSArIDEsXG5cdFx0XHRtbTogICBEYXRlRm9ybWF0LnBhZChtICsgMSksXG5cdFx0XHRtbW06ICBpMThuLm1vbnRoTmFtZXNbbV0sXG5cdFx0XHRtbW1tOiBpMThuLm1vbnRoTmFtZXNbbSArIDEyXSxcblx0XHRcdHl5OiAgIFN0cmluZyh5KS5zbGljZSgyKSxcblx0XHRcdHl5eXk6IHksXG5cdFx0XHRoOiAgICBIICUgMTIgfHwgMTIsXG5cdFx0XHRoaDogICBEYXRlRm9ybWF0LnBhZChIICUgMTIgfHwgMTIpLFxuXHRcdFx0SDogICAgSCxcblx0XHRcdEhIOiAgIERhdGVGb3JtYXQucGFkKEgpLFxuXHRcdFx0TTogICAgTSxcblx0XHRcdE1NOiAgIERhdGVGb3JtYXQucGFkKE0pLFxuXHRcdFx0czogICAgcyxcblx0XHRcdHNzOiAgIERhdGVGb3JtYXQucGFkKHMpLFxuXHRcdFx0bDogICAgRGF0ZUZvcm1hdC5wYWQoTCwgMyksXG5cdFx0XHRMOiAgICBEYXRlRm9ybWF0LnBhZChNYXRoLnJvdW5kKEwgLyAxMCkpLFxuXHRcdFx0dDogICAgSCA8IDEyID8gJ2EnICA6ICdwJyxcblx0XHRcdHR0OiAgIEggPCAxMiA/ICdhbScgOiAncG0nLFxuXHRcdFx0VDogICAgSCA8IDEyID8gJ0EnICA6ICdQJyxcblx0XHRcdFRUOiAgIEggPCAxMiA/ICdBTScgOiAnUE0nLFxuXHRcdFx0WjogICAgZ210ID8gJ0dNVCcgOiB1dGMgPyAnVVRDJyA6IChTdHJpbmcoZGF0ZSkubWF0Y2godGltZXpvbmUpIHx8IFsnJ10pLnBvcCgpLnJlcGxhY2UodGltZXpvbmVDbGlwLCAnJyksXG5cdFx0XHRvOiAgICAobyA+IDAgPyAnLScgOiAnKycpICsgRGF0ZUZvcm1hdC5wYWQoTWF0aC5mbG9vcihNYXRoLmFicyhvKSAvIDYwKSAqIDEwMCArIE1hdGguYWJzKG8pICUgNjAsIDQpLFxuXHRcdFx0UzogICAgWyd0aCcsICdzdCcsICduZCcsICdyZCddW2QgJSAxMCA+IDMgPyAwIDogKGQgJSAxMDAgLSBkICUgMTAgIT0gMTApICogZCAlIDEwXSxcblx0XHRcdFc6ICAgIFcsXG5cdFx0XHROOiAgICBOXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIFx0aWYgKG1hdGNoIGluIGZsYWdzKSByZXR1cm4gZmxhZ3NbbWF0Y2hdO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnNsaWNlKDEsIG1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgSVNPIDg2MDEgd2VlayBudW1iZXJcblx0ICogQmFzZWQgb24gY29tbWVudHMgZnJvbVxuXHQgKiBodHRwOi8vdGVjaGJsb2cucHJvY3VyaW9zLm5sL2svbjYxOC9uZXdzL3ZpZXcvMzM3OTYvMTQ4NjMvQ2FsY3VsYXRlLUlTTy04NjAxLXdlZWstYW5kLXllYXItaW4tamF2YXNjcmlwdC5odG1sXG5cdCAqXG5cdCAqIEBwYXJhbSAge09iamVjdH0gYGRhdGVgXG5cdCAqIEByZXR1cm4ge051bWJlcn1cblx0ICovXG5cdHN0YXRpYyBnZXRXZWVrKGRhdGUpIHtcblx0ICAvLyBSZW1vdmUgdGltZSBjb21wb25lbnRzIG9mIGRhdGVcblx0ICB2YXIgdGFyZ2V0VGh1cnNkYXkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuXG5cdCAgLy8gQ2hhbmdlIGRhdGUgdG8gVGh1cnNkYXkgc2FtZSB3ZWVrXG5cdCAgdGFyZ2V0VGh1cnNkYXkuc2V0RGF0ZSh0YXJnZXRUaHVyc2RheS5nZXREYXRlKCkgLSAoKHRhcmdldFRodXJzZGF5LmdldERheSgpICsgNikgJSA3KSArIDMpO1xuXG5cdCAgLy8gVGFrZSBKYW51YXJ5IDR0aCBhcyBpdCBpcyBhbHdheXMgaW4gd2VlayAxIChzZWUgSVNPIDg2MDEpXG5cdCAgdmFyIGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZSh0YXJnZXRUaHVyc2RheS5nZXRGdWxsWWVhcigpLCAwLCA0KTtcblxuXHQgIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuXHQgIGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdFRodXJzZGF5LmdldERhdGUoKSAtICgoZmlyc3RUaHVyc2RheS5nZXREYXkoKSArIDYpICUgNykgKyAzKTtcblxuXHQgIC8vIENoZWNrIGlmIGRheWxpZ2h0LXNhdmluZy10aW1lLXN3aXRjaCBvY2N1cmVkIGFuZCBjb3JyZWN0IGZvciBpdFxuXHQgIHZhciBkcyA9IHRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCkgLSBmaXJzdFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cdCAgdGFyZ2V0VGh1cnNkYXkuc2V0SG91cnModGFyZ2V0VGh1cnNkYXkuZ2V0SG91cnMoKSAtIGRzKTtcblxuXHQgIC8vIE51bWJlciBvZiB3ZWVrcyBiZXR3ZWVuIHRhcmdldCBUaHVyc2RheSBhbmQgZmlyc3QgVGh1cnNkYXlcblx0ICB2YXIgd2Vla0RpZmYgPSAodGFyZ2V0VGh1cnNkYXkgLSBmaXJzdFRodXJzZGF5KSAvICg4NjQwMDAwMCo3KTtcblx0ICByZXR1cm4gMSArIE1hdGguZmxvb3Iod2Vla0RpZmYpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBJU08tODYwMSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXkgb2YgdGhlIHdlZWtcblx0ICogMSAoZm9yIE1vbmRheSkgdGhyb3VnaCA3IChmb3IgU3VuZGF5KVxuXHQgKlxuXHQgKiBAcGFyYW0gIHtPYmplY3R9IGBkYXRlYFxuXHQgKiBAcmV0dXJuIHtOdW1iZXJ9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0RGF5T2ZXZWVrKGRhdGUpIHtcblx0XHR2YXIgZG93ID0gZGF0ZS5nZXREYXkoKTtcblx0XHRpZiAoZG93ID09PSAwKSBkb3cgPSA3O1xuXHRcdHJldHVybiBkb3c7XG5cdH1cblxuXHRzdGF0aWMgcGFkKHZhbCwgbGVuKSB7XG5cdFx0dmFsID0gU3RyaW5nKHZhbCk7XG5cdFx0bGVuID0gbGVuIHx8IDI7XG5cdFx0d2hpbGUgKHZhbC5sZW5ndGggPCBsZW4pIHZhbCA9ICcwJyArIHZhbDtcbiAgXHRcdHJldHVybiB2YWw7XG5cdH1cbn1cbiJdfQ==
},{}],44:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Detector = function () {
	function Detector() {
		_classCallCheck(this, Detector);
	}

	/**
  * Choose binders for the data found when iterating over element bindables
  * Some binders will not allow other binders to be found, such as any binder that
  * creates it own insance e.g. for loops, as they are generated on the fly.
  * return array of binders
  */
	Detector.binders = function binders(node, model, options, traverser) {
		if (!Detector.defaultBinders || _typeof(Detector.defaultBinders) !== 'object') return;

		var binders = [];
		for (var name in Detector.defaultBinders) {
			var binder = new Detector.defaultBinders[name](options, traverser);
			if (binder.detect(node)) binders.push(binder.build(model));
		}

		if (Detector.customBinders && _typeof(Detector.customBinders) === 'object') {
			for (var _name in Detector.customBinders) {
				var _binder = new Detector.customBinders[_name](options, traverser);
				if (_binder.detect(node)) binders.push(_binder.build(model));
			}
		}

		return binders;
	};

	/**
  * Run alterers found in resolved alterable data
  * return resolved The altered resolved data
  */


	Detector.alterers = function alterers(_alterers, resolved) {
		if (typeof _alterers === 'undefined') return false;
		if ((typeof _alterers === 'undefined' ? 'undefined' : _typeof(_alterers)) !== 'object') _alterers = [_alterers];

		for (var key in _alterers) {
			var name = isNaN(key) ? key : _alterers[key];
			var options = isNaN(key) ? _alterers[key] : undefined;

			if (!Detector.defaultAlterers || _typeof(Detector.defaultAlterers) !== 'object') continue;

			for (var _key in Detector.defaultAlterers) {
				var alterer = new Detector.defaultAlterers[_key]();
				if (alterer.detect(name, resolved)) resolved = alterer.alter(resolved, options);
			}

			if (Detector.customAlterers && _typeof(Detector.customAlterers) === 'object') {
				for (var _name2 in Detector.customAlterers) {
					var _alterer = new Detector.customAlterers[_name2]();
					if (_alterer.detect(_name2, resolved)) resolved = _alterer.alter(resolved, options);
				}
			}
		}

		return resolved;
	};

	/**
  * Choose a single resolver for data found when iterating over elements. Can be used for any element attribute data
  * return Resolver resolver or bool false on fail
  */


	Detector.resolver = function resolver(data, node) {
		if (typeof data === 'undefined' || data.length < 1) return false;
		if (!Detector.defaultResolvers || _typeof(Detector.defaultResolvers) !== 'object') return false;

		for (var name in Detector.defaultResolvers) {
			var resolver = new Detector.defaultResolvers[name](node);
			if (resolver.detect(data)) return resolver;
		}

		if (Detector.customResolvers && _typeof(Detector.customResolvers) === 'object') {
			for (var _name3 in Detector.customResolvers) {
				var _resolver = new Detector.customResolvers[_name3](node);
				if (_resolver.detect(data)) return _resolver;
			}
		}

		// failed to resolve
		return false;
	};

	return Detector;
}();

exports.default = Detector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGVjdG9yLmpzIl0sIm5hbWVzIjpbIkRldGVjdG9yIiwiYmluZGVycyIsIm5vZGUiLCJtb2RlbCIsIm9wdGlvbnMiLCJ0cmF2ZXJzZXIiLCJkZWZhdWx0QmluZGVycyIsIm5hbWUiLCJiaW5kZXIiLCJkZXRlY3QiLCJwdXNoIiwiYnVpbGQiLCJjdXN0b21CaW5kZXJzIiwiYWx0ZXJlcnMiLCJyZXNvbHZlZCIsImtleSIsImlzTmFOIiwidW5kZWZpbmVkIiwiZGVmYXVsdEFsdGVyZXJzIiwiYWx0ZXJlciIsImFsdGVyIiwiY3VzdG9tQWx0ZXJlcnMiLCJyZXNvbHZlciIsImRhdGEiLCJsZW5ndGgiLCJkZWZhdWx0UmVzb2x2ZXJzIiwiY3VzdG9tUmVzb2x2ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFxQkEsUTs7Ozs7QUFDcEI7Ozs7OztVQU1PQyxPLG9CQUFRQyxJLEVBQU1DLEssRUFBT0MsTyxFQUFTQyxTLEVBQVc7QUFDL0MsTUFBSSxDQUFDTCxTQUFTTSxjQUFWLElBQTRCLFFBQU9OLFNBQVNNLGNBQWhCLE1BQW1DLFFBQW5FLEVBQTZFOztBQUU3RSxNQUFJTCxVQUFVLEVBQWQ7QUFDQSxPQUFLLElBQUlNLElBQVQsSUFBaUJQLFNBQVNNLGNBQTFCLEVBQTBDO0FBQ3pDLE9BQUlFLFNBQVMsSUFBSVIsU0FBU00sY0FBVCxDQUF3QkMsSUFBeEIsQ0FBSixDQUFrQ0gsT0FBbEMsRUFBMkNDLFNBQTNDLENBQWI7QUFDQSxPQUFJRyxPQUFPQyxNQUFQLENBQWNQLElBQWQsQ0FBSixFQUF5QkQsUUFBUVMsSUFBUixDQUFhRixPQUFPRyxLQUFQLENBQWFSLEtBQWIsQ0FBYjtBQUN6Qjs7QUFFRCxNQUFJSCxTQUFTWSxhQUFULElBQTBCLFFBQU9aLFNBQVNZLGFBQWhCLE1BQWtDLFFBQWhFLEVBQ0E7QUFDQyxRQUFLLElBQUlMLEtBQVQsSUFBaUJQLFNBQVNZLGFBQTFCLEVBQXlDO0FBQ3hDLFFBQUlKLFVBQVMsSUFBSVIsU0FBU1ksYUFBVCxDQUF1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dEIsUSIsImZpbGUiOiJkZXRlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGVjdG9yIHtcblx0LyoqXG5cdCAqIENob29zZSBiaW5kZXJzIGZvciB0aGUgZGF0YSBmb3VuZCB3aGVuIGl0ZXJhdGluZyBvdmVyIGVsZW1lbnQgYmluZGFibGVzXG5cdCAqIFNvbWUgYmluZGVycyB3aWxsIG5vdCBhbGxvdyBvdGhlciBiaW5kZXJzIHRvIGJlIGZvdW5kLCBzdWNoIGFzIGFueSBiaW5kZXIgdGhhdFxuXHQgKiBjcmVhdGVzIGl0IG93biBpbnNhbmNlIGUuZy4gZm9yIGxvb3BzLCBhcyB0aGV5IGFyZSBnZW5lcmF0ZWQgb24gdGhlIGZseS5cblx0ICogcmV0dXJuIGFycmF5IG9mIGJpbmRlcnNcblx0ICovXG5cdHN0YXRpYyBiaW5kZXJzKG5vZGUsIG1vZGVsLCBvcHRpb25zLCB0cmF2ZXJzZXIpIHtcblx0XHRpZiAoIURldGVjdG9yLmRlZmF1bHRCaW5kZXJzIHx8IHR5cGVvZiBEZXRlY3Rvci5kZWZhdWx0QmluZGVycyAhPT0gJ29iamVjdCcpIHJldHVybjtcblxuXHRcdGxldCBiaW5kZXJzID0gW107XG5cdFx0Zm9yIChsZXQgbmFtZSBpbiBEZXRlY3Rvci5kZWZhdWx0QmluZGVycykge1xuXHRcdFx0bGV0IGJpbmRlciA9IG5ldyBEZXRlY3Rvci5kZWZhdWx0QmluZGVyc1tuYW1lXShvcHRpb25zLCB0cmF2ZXJzZXIpO1xuXHRcdFx0aWYgKGJpbmRlci5kZXRlY3Qobm9kZSkpIGJpbmRlcnMucHVzaChiaW5kZXIuYnVpbGQobW9kZWwpKTtcblx0XHR9XG5cblx0XHRpZiAoRGV0ZWN0b3IuY3VzdG9tQmluZGVycyAmJiB0eXBlb2YgRGV0ZWN0b3IuY3VzdG9tQmluZGVycyA9PT0gJ29iamVjdCcpXG5cdFx0e1xuXHRcdFx0Zm9yIChsZXQgbmFtZSBpbiBEZXRlY3Rvci5jdXN0b21CaW5kZXJzKSB7XG5cdFx0XHRcdGxldCBiaW5kZXIgPSBuZXcgRGV0ZWN0b3IuY3VzdG9tQmluZGVyc1tuYW1lXShvcHRpb25zLCB0cmF2ZXJzZXIpO1xuXHRcdFx0XHRpZiAoYmluZGVyLmRldGVjdChub2RlKSkgYmluZGVycy5wdXNoKGJpbmRlci5idWlsZChtb2RlbCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBiaW5kZXJzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJ1biBhbHRlcmVycyBmb3VuZCBpbiByZXNvbHZlZCBhbHRlcmFibGUgZGF0YVxuXHQgKiByZXR1cm4gcmVzb2x2ZWQgVGhlIGFsdGVyZWQgcmVzb2x2ZWQgZGF0YVxuXHQgKi9cblx0c3RhdGljIGFsdGVyZXJzKGFsdGVyZXJzLCByZXNvbHZlZCkge1xuXHRcdGlmICh0eXBlb2YgYWx0ZXJlcnMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKHR5cGVvZiBhbHRlcmVycyAhPT0gJ29iamVjdCcpIGFsdGVyZXJzID0gW2FsdGVyZXJzXTtcblxuXHRcdGZvciAobGV0IGtleSBpbiBhbHRlcmVycylcblx0XHR7XG5cdFx0XHRsZXQgbmFtZSA9IGlzTmFOKGtleSkgPyBrZXkgOiBhbHRlcmVyc1trZXldO1xuXHRcdFx0bGV0IG9wdGlvbnMgPSBpc05hTihrZXkpID8gYWx0ZXJlcnNba2V5XSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKCFEZXRlY3Rvci5kZWZhdWx0QWx0ZXJlcnMgfHwgdHlwZW9mIERldGVjdG9yLmRlZmF1bHRBbHRlcmVycyAhPT0gJ29iamVjdCcpIGNvbnRpbnVlO1xuXG5cdFx0XHRmb3IgKGxldCBrZXkgaW4gRGV0ZWN0b3IuZGVmYXVsdEFsdGVyZXJzKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgYWx0ZXJlciA9IG5ldyBEZXRlY3Rvci5kZWZhdWx0QWx0ZXJlcnNba2V5XSgpO1xuXHRcdFx0XHRpZiAoYWx0ZXJlci5kZXRlY3QobmFtZSwgcmVzb2x2ZWQpKSByZXNvbHZlZCA9IGFsdGVyZXIuYWx0ZXIocmVzb2x2ZWQsIG9wdGlvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRGV0ZWN0b3IuY3VzdG9tQWx0ZXJlcnMgJiYgdHlwZW9mIERldGVjdG9yLmN1c3RvbUFsdGVyZXJzID09PSAnb2JqZWN0Jylcblx0XHRcdHtcblx0XHRcdFx0Zm9yIChsZXQgbmFtZSBpbiBEZXRlY3Rvci5jdXN0b21BbHRlcmVycylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBhbHRlcmVyID0gbmV3IERldGVjdG9yLmN1c3RvbUFsdGVyZXJzW25hbWVdKCk7XG5cdFx0XHRcdFx0aWYgKGFsdGVyZXIuZGV0ZWN0KG5hbWUsIHJlc29sdmVkKSkgcmVzb2x2ZWQgPSBhbHRlcmVyLmFsdGVyKHJlc29sdmVkLCBvcHRpb25zKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXNvbHZlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaG9vc2UgYSBzaW5nbGUgcmVzb2x2ZXIgZm9yIGRhdGEgZm91bmQgd2hlbiBpdGVyYXRpbmcgb3ZlciBlbGVtZW50cy4gQ2FuIGJlIHVzZWQgZm9yIGFueSBlbGVtZW50IGF0dHJpYnV0ZSBkYXRhXG5cdCAqIHJldHVybiBSZXNvbHZlciByZXNvbHZlciBvciBib29sIGZhbHNlIG9uIGZhaWxcblx0ICovXG5cdHN0YXRpYyByZXNvbHZlcihkYXRhLCBub2RlKSB7XG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyB8fCBkYXRhLmxlbmd0aCA8IDEpIHJldHVybiBmYWxzZTtcblx0XHRpZiAoIURldGVjdG9yLmRlZmF1bHRSZXNvbHZlcnMgfHwgdHlwZW9mIERldGVjdG9yLmRlZmF1bHRSZXNvbHZlcnMgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cblx0XHRmb3IgKGxldCBuYW1lIGluIERldGVjdG9yLmRlZmF1bHRSZXNvbHZlcnMpIHtcblx0XHRcdGxldCByZXNvbHZlciA9IG5ldyBEZXRlY3Rvci5kZWZhdWx0UmVzb2x2ZXJzW25hbWVdKG5vZGUpO1xuXHRcdFx0aWYgKHJlc29sdmVyLmRldGVjdChkYXRhKSkgcmV0dXJuIHJlc29sdmVyO1xuXHRcdH1cblxuXHRcdGlmIChEZXRlY3Rvci5jdXN0b21SZXNvbHZlcnMgJiYgdHlwZW9mIERldGVjdG9yLmN1c3RvbVJlc29sdmVycyA9PT0gJ29iamVjdCcpXG5cdFx0e1xuXHRcdFx0Zm9yIChsZXQgbmFtZSBpbiBEZXRlY3Rvci5jdXN0b21SZXNvbHZlcnMpIHtcblx0XHRcdFx0bGV0IHJlc29sdmVyID0gbmV3IERldGVjdG9yLmN1c3RvbVJlc29sdmVyc1tuYW1lXShub2RlKTtcblx0XHRcdFx0aWYgKHJlc29sdmVyLmRldGVjdChkYXRhKSkgcmV0dXJuIHJlc29sdmVyO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGZhaWxlZCB0byByZXNvbHZlXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG4iXX0=
},{}],45:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
	function Observer() {
		_classCallCheck(this, Observer);
	}

	/**
  * object()
  * Observe an object, applying a callback if changed
  * This method uses native Proxy available for clean observing, returning proxied object
     *
  * NOTE:
  * If native proxy not available, proxy will be polyfilled and fallback to object observe polyfill for observing
  * and proxy polyfill for those who  want to use it (caveat, proxy polyfill does not allow mutating of arrays) To change a polyfilled proxy
  * you will have to replace whole array. This is why we fall back to OO polyfill for observing but allow you to still use Proxy polyfill
  * if you want to for your app with this caveat.
  *
  * DEPS:
  * This class relies on the smiffy6969/proxy-oo-polyfill (npm install proxy-oo-polyfill) for hybrid proxy with oo observing.
  *
  * @param obj Object The model to proxy
  * @param fn Function The calback function to run on change
  * @param deep Boolean Should we go deep or just proxy/observe root level
  * @param prefix String Used to set prefix of path in object (should be blank when called)
  * @return Object The proxied object
  */
	Observer.object = function object(obj, fn, deep, prefix) {
		if (!Proxy.oo) return Observer.proxy(obj, fn, deep, prefix);
		Observer.oo(obj, fn, deep, prefix);
		return obj;
	};

	/**
  * proxy()
  *
  * Use native proxy to extend object model, allowing us to observe changes and instigate callback on changes
  * @param obj Object The model to proxy
  * @param fn Function The calback function to run on change
  * @param deep Boolean Should we go deep or just proxy/observe root level
  * @param prefix String Used to set prefix of path in object (should be blank when called)
  * @return Object The proxied object
  */


	Observer.proxy = function proxy(obj, fn, deep, prefix) {
		prefix = typeof prefix === 'undefined' ? '' : prefix;
		return new Proxy(obj, {
			set: function set(target, prop, value) {
				var old = target[prop];
				target[prop] = value;
				fn.call(this, prefix + prop, old, value);
				return true;
			},
			get: function get(target, prop) {
				return !deep || target[prop] == null || _typeof(target[prop]) !== 'object' || target[prop] instanceof Date ? target[prop] : Observer.proxy(target[prop], fn, deep, prefix + prop + '.');
			}
		});
	};

	/**
  * oo()
  *
  * Fallback observing method to allow us to watch changes on object without native proxy
  * @param obj Object The model to proxy
  * @param fn Function The calback function to run on change
  * @param deep Boolean Should we go deep or just proxy/observe root level
  * @param prefix String Used to set prefix of path in object (should be blank when called)
  */


	Observer.oo = function oo(obj, fn, deep, prefix) {
		prefix = typeof prefix === 'undefined' ? '' : prefix;
		Proxy.oo.observe(obj, function (changes) {
			for (var i = 0; i < changes.length; i++) {
				fn(prefix + changes[i].name, obj[changes[i].name], changes[i].oldValue, changes[i].type);
				if (changes[i].type == 'add' && !!deep && obj[changes[i].name] && _typeof(obj[changes[i].name]) === 'object') Observer.oo(obj[changes[i].name], fn, deep, prefix + changes[i].name + '.');
			}
		});
		for (var name in obj) {
			if (!!deep && obj[name] && _typeof(obj[name]) === 'object') Observer.oo(obj[name], fn, deep, prefix + name + '.');
		}
	};

	return Observer;
}();

exports.default = Observer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmVyLmpzIl0sIm5hbWVzIjpbIk9ic2VydmVyIiwib2JqZWN0Iiwib2JqIiwiZm4iLCJkZWVwIiwicHJlZml4IiwiUHJveHkiLCJvbyIsInByb3h5Iiwic2V0IiwidGFyZ2V0IiwicHJvcCIsInZhbHVlIiwib2xkIiwiY2FsbCIsImdldCIsIkRhdGUiLCJvYnNlcnZlIiwiY2hhbmdlcyIsImkiLCJsZW5ndGgiLCJuYW1lIiwib2xkVmFsdWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFxQkEsUTs7Ozs7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBb0JPQyxNLG1CQUFPQyxHLEVBQUtDLEUsRUFBSUMsSSxFQUFNQyxNLEVBQVE7QUFDcEMsTUFBSSxDQUFDQyxNQUFNQyxFQUFYLEVBQWUsT0FBT1AsU0FBU1EsS0FBVCxDQUFlTixHQUFmLEVBQW9CQyxFQUFwQixFQUF3QkMsSUFBeEIsRUFBOEJDLE1BQTlCLENBQVA7QUFDZkwsV0FBU08sRUFBVCxDQUFZTCxHQUFaLEVBQWlCQyxFQUFqQixFQUFxQkMsSUFBckIsRUFBMkJDLE1BQTNCO0FBQ0EsU0FBT0gsR0FBUDtBQUNBLEU7O0FBRUQ7Ozs7Ozs7Ozs7OztVQVVPTSxLLGtCQUFNTixHLEVBQUtDLEUsRUFBSUMsSSxFQUFNQyxNLEVBQVE7QUFDbkNBLFdBQVMsT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUFnQyxFQUFoQyxHQUFxQ0EsTUFBOUM7QUFDQSxTQUFPLElBQUlDLEtBQUosQ0FBVUosR0FBVixFQUFlO0FBQ3JCTyxRQUFLLGFBQVNDLE1BQVQsRUFBaUJDLElBQWpCLEVBQXVCQyxLQUF2QixFQUE4QjtBQUNsQyxRQUFJQyxNQUFNSCxPQUFPQyxJQUFQLENBQVY7QUFDQUQsV0FBT0MsSUFBUCxJQUFlQyxLQUFmO0FBQ0FULE9BQUdXLElBQUgsQ0FBUSxJQUFSLEVBQWNULFNBQVNNLElBQXZCLEVBQTZCRSxHQUE3QixFQUFrQ0QsS0FBbEM7QUFDQSxXQUFPLElBQVA7QUFDQSxJQU5vQjtBQU9yQkcsUUFBSyxhQUFTTCxNQUFULEVBQWlCQyxJQUFqQixFQUF1QjtBQUMzQixXQUFPLENBQUNQLElBQUQsSUFBU00sT0FBT0MsSUFBUCxLQUFnQixJQUF6QixJQUFpQyxRQUFPRCxPQUFPQyxJQUFQLENBQVAsTUFBd0IsUUFBekQsSUFBcUVELE9BQU9DLElBQVAsYUFBd0JLLElBQTdGLEdBQW9HTixPQUFPQyxJQUFQLENBQXBHLEdBQW1IWCxTQUFTUSxLQUFULENBQWVFLE9BQU9DLElBQVAsQ0FBZixFQUE2QlIsRUFBN0IsRUFBaUNDLElBQWpDLEVBQXVDQyxTQUFTTSxJQUFULEdBQWdCLEdBQXZELENBQTFIO0FBQ0E7QUFUb0IsR0FBZixDQUFQO0FBV0EsRTs7QUFFRDs7Ozs7Ozs7Ozs7VUFTT0osRSxlQUFHTCxHLEVBQUtDLEUsRUFBSUMsSSxFQUFNQyxNLEVBQVE7QUFDaENBLFdBQVMsT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUFnQyxFQUFoQyxHQUFxQ0EsTUFBOUM7QUFDQUMsUUFBTUMsRUFBTixDQUFTVSxPQUFULENBQWlCZixHQUFqQixFQUFzQixVQUFTZ0IsT0FBVCxFQUFrQjtBQUN2QyxRQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsUUFBUUUsTUFBNUIsRUFBb0NELEdBQXBDLEVBQ0E7QUFDQ2hCLE9BQUdFLFNBQVNhLFFBQVFDLENBQVIsRUFBV0UsSUFBdkIsRUFBNkJuQixJQUFJZ0IsUUFBUUMsQ0FBUixFQUFXRSxJQUFmLENBQTdCLEVBQW1ESCxRQUFRQyxDQUFSLEVBQVdHLFFBQTlELEVBQXdFSixRQUFRQyxDQUFSLEVBQVdJLElBQW5GO0FBQ0EsUUFBSUwsUUFBUUMsQ0FBUixFQUFXSSxJQUFYLElBQW1CLEtBQW5CLElBQTRCLENBQUMsQ0FBQ25CLElBQTlCLElBQXNDRixJQUFJZ0IsUUFBUUMsQ0FBUixFQUFXRSxJQUFmLENBQXRDLElBQThELFFBQU9uQixJQUFJZ0IsUUFBUUMsQ0FBUixFQUFXRSxJQUFmLENBQVAsTUFBZ0MsUUFBbEcsRUFBNEdyQixTQUFTTyxFQUFULENBQVlMLElBQUlnQixRQUFRQyxDQUFSLEVBQVdFLElBQWYsQ0FBWixFQUFrQ2xCLEVBQWxDLEVBQXNDQyxJQUF0QyxFQUE0Q0MsU0FBU2EsUUFBUUMsQ0FBUixFQUFXRSxJQUFwQixHQUEyQixHQUF2RTtBQUM1RztBQUNELEdBTkQ7QUFPQSxPQUFLLElBQUlBLElBQVQsSUFBaUJuQixHQUFqQjtBQUFzQixPQUFJLENBQUMsQ0FBQ0UsSUFBRixJQUFVRixJQUFJbUIsSUFBSixDQUFWLElBQXVCLFFBQU9uQixJQUFJbUIsSUFBSixDQUFQLE1BQXFCLFFBQWhELEVBQTBEckIsU0FBU08sRUFBVCxDQUFZTCxJQUFJbUIsSUFBSixDQUFaLEVBQXVCbEIsRUFBdkIsRUFBMkJDLElBQTNCLEVBQWlDQyxTQUFTZ0IsSUFBVCxHQUFnQixHQUFqRDtBQUFoRjtBQUNBLEU7Ozs7O2tCQXZFbUJyQixRIiwiZmlsZSI6Im9ic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2ZXIge1xuXHQvKipcblx0ICogb2JqZWN0KClcblx0ICogT2JzZXJ2ZSBhbiBvYmplY3QsIGFwcGx5aW5nIGEgY2FsbGJhY2sgaWYgY2hhbmdlZFxuXHQgKiBUaGlzIG1ldGhvZCB1c2VzIG5hdGl2ZSBQcm94eSBhdmFpbGFibGUgZm9yIGNsZWFuIG9ic2VydmluZywgcmV0dXJuaW5nIHByb3hpZWQgb2JqZWN0XG4gICAgICpcblx0ICogTk9URTpcblx0ICogSWYgbmF0aXZlIHByb3h5IG5vdCBhdmFpbGFibGUsIHByb3h5IHdpbGwgYmUgcG9seWZpbGxlZCBhbmQgZmFsbGJhY2sgdG8gb2JqZWN0IG9ic2VydmUgcG9seWZpbGwgZm9yIG9ic2VydmluZ1xuXHQgKiBhbmQgcHJveHkgcG9seWZpbGwgZm9yIHRob3NlIHdobyAgd2FudCB0byB1c2UgaXQgKGNhdmVhdCwgcHJveHkgcG9seWZpbGwgZG9lcyBub3QgYWxsb3cgbXV0YXRpbmcgb2YgYXJyYXlzKSBUbyBjaGFuZ2UgYSBwb2x5ZmlsbGVkIHByb3h5XG5cdCAqIHlvdSB3aWxsIGhhdmUgdG8gcmVwbGFjZSB3aG9sZSBhcnJheS4gVGhpcyBpcyB3aHkgd2UgZmFsbCBiYWNrIHRvIE9PIHBvbHlmaWxsIGZvciBvYnNlcnZpbmcgYnV0IGFsbG93IHlvdSB0byBzdGlsbCB1c2UgUHJveHkgcG9seWZpbGxcblx0ICogaWYgeW91IHdhbnQgdG8gZm9yIHlvdXIgYXBwIHdpdGggdGhpcyBjYXZlYXQuXG5cdCAqXG5cdCAqIERFUFM6XG5cdCAqIFRoaXMgY2xhc3MgcmVsaWVzIG9uIHRoZSBzbWlmZnk2OTY5L3Byb3h5LW9vLXBvbHlmaWxsIChucG0gaW5zdGFsbCBwcm94eS1vby1wb2x5ZmlsbCkgZm9yIGh5YnJpZCBwcm94eSB3aXRoIG9vIG9ic2VydmluZy5cblx0ICpcblx0ICogQHBhcmFtIG9iaiBPYmplY3QgVGhlIG1vZGVsIHRvIHByb3h5XG5cdCAqIEBwYXJhbSBmbiBGdW5jdGlvbiBUaGUgY2FsYmFjayBmdW5jdGlvbiB0byBydW4gb24gY2hhbmdlXG5cdCAqIEBwYXJhbSBkZWVwIEJvb2xlYW4gU2hvdWxkIHdlIGdvIGRlZXAgb3IganVzdCBwcm94eS9vYnNlcnZlIHJvb3QgbGV2ZWxcblx0ICogQHBhcmFtIHByZWZpeCBTdHJpbmcgVXNlZCB0byBzZXQgcHJlZml4IG9mIHBhdGggaW4gb2JqZWN0IChzaG91bGQgYmUgYmxhbmsgd2hlbiBjYWxsZWQpXG5cdCAqIEByZXR1cm4gT2JqZWN0IFRoZSBwcm94aWVkIG9iamVjdFxuXHQgKi9cblx0c3RhdGljIG9iamVjdChvYmosIGZuLCBkZWVwLCBwcmVmaXgpIHtcblx0XHRpZiAoIVByb3h5Lm9vKSByZXR1cm4gT2JzZXJ2ZXIucHJveHkob2JqLCBmbiwgZGVlcCwgcHJlZml4KTtcblx0XHRPYnNlcnZlci5vbyhvYmosIGZuLCBkZWVwLCBwcmVmaXgpO1xuXHRcdHJldHVybiBvYmo7XG5cdH1cblxuXHQvKipcblx0ICogcHJveHkoKVxuXHQgKlxuXHQgKiBVc2UgbmF0aXZlIHByb3h5IHRvIGV4dGVuZCBvYmplY3QgbW9kZWwsIGFsbG93aW5nIHVzIHRvIG9ic2VydmUgY2hhbmdlcyBhbmQgaW5zdGlnYXRlIGNhbGxiYWNrIG9uIGNoYW5nZXNcblx0ICogQHBhcmFtIG9iaiBPYmplY3QgVGhlIG1vZGVsIHRvIHByb3h5XG5cdCAqIEBwYXJhbSBmbiBGdW5jdGlvbiBUaGUgY2FsYmFjayBmdW5jdGlvbiB0byBydW4gb24gY2hhbmdlXG5cdCAqIEBwYXJhbSBkZWVwIEJvb2xlYW4gU2hvdWxkIHdlIGdvIGRlZXAgb3IganVzdCBwcm94eS9vYnNlcnZlIHJvb3QgbGV2ZWxcblx0ICogQHBhcmFtIHByZWZpeCBTdHJpbmcgVXNlZCB0byBzZXQgcHJlZml4IG9mIHBhdGggaW4gb2JqZWN0IChzaG91bGQgYmUgYmxhbmsgd2hlbiBjYWxsZWQpXG5cdCAqIEByZXR1cm4gT2JqZWN0IFRoZSBwcm94aWVkIG9iamVjdFxuXHQgKi9cblx0c3RhdGljIHByb3h5KG9iaiwgZm4sIGRlZXAsIHByZWZpeCkge1xuXHRcdHByZWZpeCA9IHR5cGVvZiBwcmVmaXggPT09ICd1bmRlZmluZWQnID8gJycgOiBwcmVmaXg7XG5cdFx0cmV0dXJuIG5ldyBQcm94eShvYmosIHtcblx0XHRcdHNldDogZnVuY3Rpb24odGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuXHRcdFx0XHRsZXQgb2xkID0gdGFyZ2V0W3Byb3BdO1xuXHRcdFx0XHR0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcblx0XHRcdFx0Zm4uY2FsbCh0aGlzLCBwcmVmaXggKyBwcm9wLCBvbGQsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbih0YXJnZXQsIHByb3ApIHtcblx0XHRcdFx0cmV0dXJuICFkZWVwIHx8IHRhcmdldFtwcm9wXSA9PSBudWxsIHx8IHR5cGVvZiB0YXJnZXRbcHJvcF0gIT09ICdvYmplY3QnIHx8IHRhcmdldFtwcm9wXSBpbnN0YW5jZW9mIERhdGUgPyB0YXJnZXRbcHJvcF0gOiBPYnNlcnZlci5wcm94eSh0YXJnZXRbcHJvcF0sIGZuLCBkZWVwLCBwcmVmaXggKyBwcm9wICsgJy4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBvbygpXG5cdCAqXG5cdCAqIEZhbGxiYWNrIG9ic2VydmluZyBtZXRob2QgdG8gYWxsb3cgdXMgdG8gd2F0Y2ggY2hhbmdlcyBvbiBvYmplY3Qgd2l0aG91dCBuYXRpdmUgcHJveHlcblx0ICogQHBhcmFtIG9iaiBPYmplY3QgVGhlIG1vZGVsIHRvIHByb3h5XG5cdCAqIEBwYXJhbSBmbiBGdW5jdGlvbiBUaGUgY2FsYmFjayBmdW5jdGlvbiB0byBydW4gb24gY2hhbmdlXG5cdCAqIEBwYXJhbSBkZWVwIEJvb2xlYW4gU2hvdWxkIHdlIGdvIGRlZXAgb3IganVzdCBwcm94eS9vYnNlcnZlIHJvb3QgbGV2ZWxcblx0ICogQHBhcmFtIHByZWZpeCBTdHJpbmcgVXNlZCB0byBzZXQgcHJlZml4IG9mIHBhdGggaW4gb2JqZWN0IChzaG91bGQgYmUgYmxhbmsgd2hlbiBjYWxsZWQpXG5cdCAqL1xuXHRzdGF0aWMgb28ob2JqLCBmbiwgZGVlcCwgcHJlZml4KSB7XG5cdFx0cHJlZml4ID0gdHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IHByZWZpeDtcblx0XHRQcm94eS5vby5vYnNlcnZlKG9iaiwgZnVuY3Rpb24oY2hhbmdlcykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRmbihwcmVmaXggKyBjaGFuZ2VzW2ldLm5hbWUsIG9ialtjaGFuZ2VzW2ldLm5hbWVdLCBjaGFuZ2VzW2ldLm9sZFZhbHVlLCBjaGFuZ2VzW2ldLnR5cGUpO1xuXHRcdFx0XHRpZiAoY2hhbmdlc1tpXS50eXBlID09ICdhZGQnICYmICEhZGVlcCAmJiBvYmpbY2hhbmdlc1tpXS5uYW1lXSAmJiB0eXBlb2Ygb2JqW2NoYW5nZXNbaV0ubmFtZV0gPT09ICdvYmplY3QnKSBPYnNlcnZlci5vbyhvYmpbY2hhbmdlc1tpXS5uYW1lXSwgZm4sIGRlZXAsIHByZWZpeCArIGNoYW5nZXNbaV0ubmFtZSArICcuJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmopIGlmICghIWRlZXAgJiYgb2JqW25hbWVdICYmIHR5cGVvZiBvYmpbbmFtZV0gPT09ICdvYmplY3QnKSBPYnNlcnZlci5vbyhvYmpbbmFtZV0sIGZuLCBkZWVwLCBwcmVmaXggKyBuYW1lICsgJy4nKTtcblx0fVxufVxuIl19
},{}],46:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _detector = require('./detector.js');

var _detector2 = _interopRequireDefault(_detector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Traverser = function () {
    function Traverser(options) {
        _classCallCheck(this, Traverser);

        this.options = options;
        this.observables = {};
    }

    Traverser.prototype.traverse = function traverse(element, model, initial) {
        // check for binders and build observables map
        var binders = this.options.noParentBind && initial ? [] : _detector2.default.binders(element, model, this.options, this);

        // compile binders into a watch list (one binder instance only per element)
        if (binders.length > 0) {
            for (var i = 0; i < binders.length; i++) {
                if (binders[i].observables.length > 0) {
                    for (var ii = 0; ii < binders[i].observables.length; ii++) {
                        var path = binders[i].observables[ii];
                        if (typeof this.observables[path] === 'undefined') this.observables[path] = {};
                        this.observables[path][binders[i].id] = binders[i];
                    }
                }
            }
        }

        this.goDeep(element, model);
    };

    Traverser.prototype.goDeep = function goDeep(element, model) {
        // go deep! <o_0> Make sure we do not do this for loops (bind-for) as they will traverse
        // themselves to stop stale binding bug on placeholder instead of parent looped results
        if (element.childNodes && !element.hasAttribute('bind-for')) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].nodeType !== 1) continue;
                this.traverse(element.childNodes[i], model);
            }
        }
    };

    return Traverser;
}();

exports.default = Traverser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlcnNlci5qcyJdLCJuYW1lcyI6WyJUcmF2ZXJzZXIiLCJvcHRpb25zIiwib2JzZXJ2YWJsZXMiLCJ0cmF2ZXJzZSIsImVsZW1lbnQiLCJtb2RlbCIsImluaXRpYWwiLCJiaW5kZXJzIiwibm9QYXJlbnRCaW5kIiwibGVuZ3RoIiwiaSIsImlpIiwicGF0aCIsImlkIiwiZ29EZWVwIiwiY2hpbGROb2RlcyIsImhhc0F0dHJpYnV0ZSIsIm5vZGVUeXBlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxTO0FBQ2pCLHVCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ3ZCLGFBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGFBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDRzs7d0JBRUpDLFEscUJBQVNDLE8sRUFBU0MsSyxFQUFPQyxPLEVBQVM7QUFDakM7QUFDTSxZQUFJQyxVQUFVLEtBQUtOLE9BQUwsQ0FBYU8sWUFBYixJQUE2QkYsT0FBN0IsR0FBdUMsRUFBdkMsR0FBNEMsbUJBQVNDLE9BQVQsQ0FBaUJILE9BQWpCLEVBQTBCQyxLQUExQixFQUFpQyxLQUFLSixPQUF0QyxFQUErQyxJQUEvQyxDQUExRDs7QUFFTjtBQUNNLFlBQUlNLFFBQVFFLE1BQVIsR0FBaUIsQ0FBckIsRUFDQTtBQUNJLGlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsUUFBUUUsTUFBNUIsRUFBb0NDLEdBQXBDLEVBQXlDO0FBQ3JDLG9CQUFJSCxRQUFRRyxDQUFSLEVBQVdSLFdBQVgsQ0FBdUJPLE1BQXZCLEdBQWdDLENBQXBDLEVBQ0E7QUFDSSx5QkFBSyxJQUFJRSxLQUFLLENBQWQsRUFBaUJBLEtBQUtKLFFBQVFHLENBQVIsRUFBV1IsV0FBWCxDQUF1Qk8sTUFBN0MsRUFBcURFLElBQXJELEVBQ0E7QUFDSSw0QkFBSUMsT0FBT0wsUUFBUUcsQ0FBUixFQUFXUixXQUFYLENBQXVCUyxFQUF2QixDQUFYO0FBQ0EsNEJBQUksT0FBTyxLQUFLVCxXQUFMLENBQWlCVSxJQUFqQixDQUFQLEtBQWtDLFdBQXRDLEVBQW1ELEtBQUtWLFdBQUwsQ0FBaUJVLElBQWpCLElBQXlCLEVBQXpCO0FBQ25ELDZCQUFLVixXQUFMLENBQWlCVSxJQUFqQixFQUF1QkwsUUFBUUcsQ0FBUixFQUFXRyxFQUFsQyxJQUF3Q04sUUFBUUcsQ0FBUixDQUF4QztBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUVELGFBQUtJLE1BQUwsQ0FBWVYsT0FBWixFQUFxQkMsS0FBckI7QUFDTixLOzt3QkFFRVMsTSxtQkFBT1YsTyxFQUFTQyxLLEVBQU87QUFDbkI7QUFDQTtBQUNOLFlBQUlELFFBQVFXLFVBQVIsSUFBc0IsQ0FBQ1gsUUFBUVksWUFBUixDQUFxQixVQUFyQixDQUEzQixFQUE2RDtBQUM1RCxpQkFBSyxJQUFJTixJQUFJLENBQWIsRUFBZ0JBLElBQUtOLFFBQVFXLFVBQVIsQ0FBbUJOLE1BQXhDLEVBQWdEQyxHQUFoRCxFQUNBO0FBQ0Msb0JBQUlOLFFBQVFXLFVBQVIsQ0FBbUJMLENBQW5CLEVBQXNCTyxRQUF0QixLQUFtQyxDQUF2QyxFQUEwQztBQUMxQyxxQkFBS2QsUUFBTCxDQUFjQyxRQUFRVyxVQUFSLENBQW1CTCxDQUFuQixDQUFkLEVBQXFDTCxLQUFyQztBQUNBO0FBQ0Q7QUFDRSxLOzs7OztrQkF2Q2dCTCxTIiwiZmlsZSI6InRyYXZlcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZXRlY3RvciBmcm9tICcuL2RldGVjdG9yLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMub2JzZXJ2YWJsZXMgPSB7fTtcbiAgICB9XG5cblx0dHJhdmVyc2UoZWxlbWVudCwgbW9kZWwsIGluaXRpYWwpIHtcblx0XHQvLyBjaGVjayBmb3IgYmluZGVycyBhbmQgYnVpbGQgb2JzZXJ2YWJsZXMgbWFwXG4gICAgICAgIGxldCBiaW5kZXJzID0gdGhpcy5vcHRpb25zLm5vUGFyZW50QmluZCAmJiBpbml0aWFsID8gW10gOiBEZXRlY3Rvci5iaW5kZXJzKGVsZW1lbnQsIG1vZGVsLCB0aGlzLm9wdGlvbnMsIHRoaXMpO1xuXG5cdFx0Ly8gY29tcGlsZSBiaW5kZXJzIGludG8gYSB3YXRjaCBsaXN0IChvbmUgYmluZGVyIGluc3RhbmNlIG9ubHkgcGVyIGVsZW1lbnQpXG4gICAgICAgIGlmIChiaW5kZXJzLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChiaW5kZXJzW2ldLm9ic2VydmFibGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYmluZGVyc1tpXS5vYnNlcnZhYmxlcy5sZW5ndGg7IGlpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoID0gYmluZGVyc1tpXS5vYnNlcnZhYmxlc1tpaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub2JzZXJ2YWJsZXNbcGF0aF0gPT09ICd1bmRlZmluZWQnKSB0aGlzLm9ic2VydmFibGVzW3BhdGhdID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzW3BhdGhdW2JpbmRlcnNbaV0uaWRdID0gYmluZGVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ29EZWVwKGVsZW1lbnQsIG1vZGVsKTtcblx0fVxuXG4gICAgZ29EZWVwKGVsZW1lbnQsIG1vZGVsKSB7XG4gICAgICAgIC8vIGdvIGRlZXAhIDxvXzA+IE1ha2Ugc3VyZSB3ZSBkbyBub3QgZG8gdGhpcyBmb3IgbG9vcHMgKGJpbmQtZm9yKSBhcyB0aGV5IHdpbGwgdHJhdmVyc2VcbiAgICAgICAgLy8gdGhlbXNlbHZlcyB0byBzdG9wIHN0YWxlIGJpbmRpbmcgYnVnIG9uIHBsYWNlaG9sZGVyIGluc3RlYWQgb2YgcGFyZW50IGxvb3BlZCByZXN1bHRzXG5cdFx0aWYgKGVsZW1lbnQuY2hpbGROb2RlcyAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2JpbmQtZm9yJykpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgIGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0aWYgKGVsZW1lbnQuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSAhPT0gMSkgY29udGludWU7XG5cdFx0XHRcdHRoaXMudHJhdmVyc2UoZWxlbWVudC5jaGlsZE5vZGVzW2ldLCBtb2RlbCk7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbn1cbiJdfQ==
},{"./detector.js":44}],47:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindStringResolver = exports.RaziloBindPropertyResolver = exports.RaziloBindPhantomResolver = exports.RaziloBindObjectResolver = exports.RaziloBindNumberResolver = exports.RaziloBindMethodResolver = exports.RaziloBindBooleanResolver = exports.RaziloBindArrayResolver = exports.RaziloBindResolver = undefined;

var _resolver = require('./src/resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _arrayResolver = require('./src/array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

var _booleanResolver = require('./src/boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _methodResolver = require('./src/method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _numberResolver = require('./src/number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _objectResolver = require('./src/object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

var _phantomResolver = require('./src/phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _propertyResolver = require('./src/property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _stringResolver = require('./src/string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindResolver = _resolver2.default;
exports.RaziloBindArrayResolver = _arrayResolver2.default;
exports.RaziloBindBooleanResolver = _booleanResolver2.default;
exports.RaziloBindMethodResolver = _methodResolver2.default;
exports.RaziloBindNumberResolver = _numberResolver2.default;
exports.RaziloBindObjectResolver = _objectResolver2.default;
exports.RaziloBindPhantomResolver = _phantomResolver2.default;
exports.RaziloBindPropertyResolver = _propertyResolver2.default;
exports.RaziloBindStringResolver = _stringResolver2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJhemlsb0JpbmRSZXNvbHZlciIsIlJhemlsb0JpbmRBcnJheVJlc29sdmVyIiwiUmF6aWxvQmluZEJvb2xlYW5SZXNvbHZlciIsIlJhemlsb0JpbmRNZXRob2RSZXNvbHZlciIsIlJhemlsb0JpbmROdW1iZXJSZXNvbHZlciIsIlJhemlsb0JpbmRPYmplY3RSZXNvbHZlciIsIlJhemlsb0JpbmRQaGFudG9tUmVzb2x2ZXIiLCJSYXppbG9CaW5kUHJvcGVydHlSZXNvbHZlciIsIlJhemlsb0JpbmRTdHJpbmdSZXNvbHZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUdhQSxrQjtRQUNLQyx1QjtRQUNFQyx5QjtRQUNEQyx3QjtRQUNBQyx3QjtRQUNBQyx3QjtRQUNDQyx5QjtRQUNDQywwQjtRQUNGQyx3QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvbHZlciBmcm9tICcuL3NyYy9yZXNvbHZlci5qcydcbmltcG9ydCBBcnJheVJlc29sdmVyIGZyb20gJy4vc3JjL2FycmF5LnJlc29sdmVyLmpzJ1xuaW1wb3J0IEJvb2xlYW5SZXNvbHZlciBmcm9tICcuL3NyYy9ib29sZWFuLnJlc29sdmVyLmpzJ1xuaW1wb3J0IE1ldGhvZFJlc29sdmVyIGZyb20gJy4vc3JjL21ldGhvZC5yZXNvbHZlci5qcydcbmltcG9ydCBOdW1iZXJSZXNvbHZlciBmcm9tICcuL3NyYy9udW1iZXIucmVzb2x2ZXIuanMnXG5pbXBvcnQgT2JqZWN0UmVzb2x2ZXIgZnJvbSAnLi9zcmMvb2JqZWN0LnJlc29sdmVyLmpzJ1xuaW1wb3J0IFBoYW50b21SZXNvbHZlciBmcm9tICcuL3NyYy9waGFudG9tLnJlc29sdmVyLmpzJ1xuaW1wb3J0IFByb3BlcnR5UmVzb2x2ZXIgZnJvbSAnLi9zcmMvcHJvcGVydHkucmVzb2x2ZXIuanMnXG5pbXBvcnQgU3RyaW5nUmVzb2x2ZXIgZnJvbSAnLi9zcmMvc3RyaW5nLnJlc29sdmVyLmpzJ1xuXG5leHBvcnQge1xuXHRSZXNvbHZlciBhcyBSYXppbG9CaW5kUmVzb2x2ZXIsXG5cdEFycmF5UmVzb2x2ZXIgYXMgUmF6aWxvQmluZEFycmF5UmVzb2x2ZXIsXG5cdEJvb2xlYW5SZXNvbHZlciBhcyBSYXppbG9CaW5kQm9vbGVhblJlc29sdmVyLFxuXHRNZXRob2RSZXNvbHZlciBhcyBSYXppbG9CaW5kTWV0aG9kUmVzb2x2ZXIsXG5cdE51bWJlclJlc29sdmVyIGFzIFJhemlsb0JpbmROdW1iZXJSZXNvbHZlcixcblx0T2JqZWN0UmVzb2x2ZXIgYXMgUmF6aWxvQmluZE9iamVjdFJlc29sdmVyLFxuXHRQaGFudG9tUmVzb2x2ZXIgYXMgUmF6aWxvQmluZFBoYW50b21SZXNvbHZlcixcblx0UHJvcGVydHlSZXNvbHZlciBhcyBSYXppbG9CaW5kUHJvcGVydHlSZXNvbHZlcixcblx0U3RyaW5nUmVzb2x2ZXIgYXMgUmF6aWxvQmluZFN0cmluZ1Jlc29sdmVyXG59XG4iXX0=
},{"./src/array.resolver.js":48,"./src/boolean.resolver.js":49,"./src/method.resolver.js":50,"./src/number.resolver.js":51,"./src/object.resolver.js":52,"./src/phantom.resolver.js":53,"./src/property.resolver.js":54,"./src/resolver.js":55,"./src/string.resolver.js":56}],48:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _methodResolver = require('./method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _objectResolver = require('./object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Array Resolver
 * Resolves data as array with literals or model properties
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var ArrayResolver = function (_Resolver) {
	_inherits(ArrayResolver, _Resolver);

	function ArrayResolver(node) {
		_classCallCheck(this, ArrayResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'array';
		_this.regex = ArrayResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	ArrayResolver.prototype.resolve = function resolve(object) {
		var res = ArrayResolver.toArray(this.data, object, this.node);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	ArrayResolver.regex = function regex() {
		return (/^\[{1}\s?(([0-9]+|\'{1}[^\']+\'{1}|[a-zA-Z_]+|[\$a-zA-Z_]{1}[^,]+[a-zA-Z_\]]{1}|\[{1}.*\]{1}|\{{1}.*\}{1}|[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1})\s?,?\s?)*\s?\]{1}$/
		);
	};

	/**
  * static toArray()
  * turns a data and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve on the object
  * @param object object The object to resolve the data on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	ArrayResolver.toArray = function toArray(data, object, node) {
		// split by comma but be carefull not to break nested data
		data = data.trim();
		var parts = data.substring(1, data.length - 1).split(',');
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
			var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

			if (sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
		}

		// work through seperated data resolving or pushing for further analysis
		var observers = [];
		var result = [];
		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();
			if (_booleanResolver2.default.regex().test(values[ii])) result.push(_booleanResolver2.default.toBoolean(values[ii]).resolved);else if (_stringResolver2.default.regex().test(values[ii])) result.push(_stringResolver2.default.toString(values[ii]).resolved);else if (_numberResolver2.default.regex().test(values[ii])) result.push(_numberResolver2.default.toNumber(values[ii]).resolved);else if (_propertyResolver2.default.regex().test(values[ii])) {
				var propRes = _propertyResolver2.default.toProperty(values[ii], object, node);
				if (typeof propRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to property';
				result.push(propRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, propRes.observers);
			} else if (_phantomResolver2.default.regex().test(values[ii])) {
				var phRes = _phantomResolver2.default.toProperty(values[ii], object, node);
				if (typeof phRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to phantom';
				result.push(phRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, phRes.observers);
			} else if (_methodResolver2.default.regex().test(values[ii])) {
				var methRes = _methodResolver2.default.toMethod(values[ii], object, node);
				if (typeof methRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to method';
				result.push(methRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, methRes.observers);
			} else if (ArrayResolver.regex().test(values[ii])) {
				var arrRes = ArrayResolver.toArray(values[ii], object, node);
				if (typeof arrRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to array';
				result.push(arrRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, arrRes.observers);
			} else if (_objectResolver2.default.regex().test(values[ii])) {
				var objRes = _objectResolver2.default.toObject(values[ii], object, node);
				if (typeof objRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to object';
				result.push(objRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, objRes.observers);
			}
		}

		return { resolved: result, observers: observers };
	};

	return ArrayResolver;
}(_resolver2.default);

exports.default = ArrayResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LnJlc29sdmVyLmpzIl0sIm5hbWVzIjpbIkFycmF5UmVzb2x2ZXIiLCJub2RlIiwibmFtZSIsInJlZ2V4IiwicmVzb2x2ZSIsIm9iamVjdCIsInJlcyIsInRvQXJyYXkiLCJkYXRhIiwicmVzb2x2ZWQiLCJvYnNlcnZlcnMiLCJ0cmltIiwicGFydHMiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzcGxpdCIsInZhbHVlcyIsImkiLCJzYiIsIm1hdGNoIiwibWIiLCJyZXN1bHQiLCJpaSIsInRlc3QiLCJwdXNoIiwidG9Cb29sZWFuIiwidG9TdHJpbmciLCJ0b051bWJlciIsInByb3BSZXMiLCJ0b1Byb3BlcnR5IiwibWVyZ2VPYnNlcnZlcnMiLCJwaFJlcyIsIm1ldGhSZXMiLCJ0b01ldGhvZCIsImFyclJlcyIsIm9ialJlcyIsInRvT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQkEsYTs7O0FBQ3BCLHdCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0NBQ2pCLG9CQURpQjs7QUFFakIsUUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLE9BQVo7QUFDQSxRQUFLQyxLQUFMLEdBQWFILGNBQWNHLEtBQWQsRUFBYjtBQUppQjtBQUtqQjs7QUFFRDs7Ozs7O3lCQUlBQyxPLG9CQUFRQyxNLEVBQVE7QUFDZixNQUFJQyxNQUFNTixjQUFjTyxPQUFkLENBQXNCLEtBQUtDLElBQTNCLEVBQWlDSCxNQUFqQyxFQUF5QyxLQUFLSixJQUE5QyxDQUFWO0FBQ0EsT0FBS1EsUUFBTCxHQUFnQkgsSUFBSUcsUUFBcEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCSixJQUFJSSxTQUFyQjtBQUNBLEU7O0FBRUQ7Ozs7Ozs7ZUFLT1AsSyxvQkFBUTtBQUNkLFNBQU87QUFBUDtBQUNBLEU7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QUE5QixHQUEyQyxZQUFqRDtBQUNuQ0QsV0FBT0csSUFBUCxDQUFZVSxPQUFPekIsUUFBbkI7QUFDQUMsZ0JBQVksbUJBQVNvQixjQUFULENBQXdCcEIsU0FBeEIsRUFBbUN3QixPQUFPeEIsU0FBMUMsQ0FBWjtBQUNBLElBTkksTUFPQSxJQUFJLHlCQUFlUCxLQUFmLEdBQXVCb0IsSUFBdkIsQ0FBNEJQLE9BQU9NLEVBQVAsQ0FBNUIsQ0FBSixFQUNMO0FBQ0MsUUFBSWEsU0FBUyx5QkFBZUMsUUFBZixDQUF3QnBCLE9BQU9NLEVBQVAsQ0FBeEIsRUFBb0NqQixNQUFwQyxFQUE0Q0osSUFBNUMsQ0FBYjtBQUNBLFFBQUksT0FBT2tDLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUMsTUFBTSw4QkFBOEJuQixPQUFPTSxFQUFQLENBQTlCLEdBQTJDLGFBQWpEO0FBQ25DRCxXQUFPRyxJQUFQLENBQVlXLE9BQU8xQixRQUFuQjtBQUNBQyxnQkFBWSxtQkFBU29CLGNBQVQsQ0FBd0JwQixTQUF4QixFQUFtQ3lCLE9BQU96QixTQUExQyxDQUFaO0FBQ0E7QUFDRDs7QUFFRCxTQUFPLEVBQUNELFVBQVVZLE1BQVgsRUFBbUJYLFdBQVdBLFNBQTlCLEVBQVA7QUFDQSxFOzs7OztrQkE5Rm1CVixhIiwiZmlsZSI6ImFycmF5LnJlc29sdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXIuanMnXG5pbXBvcnQgU3RyaW5nUmVzb2x2ZXIgZnJvbSAnLi9zdHJpbmcucmVzb2x2ZXIuanMnXG5pbXBvcnQgTnVtYmVyUmVzb2x2ZXIgZnJvbSAnLi9udW1iZXIucmVzb2x2ZXIuanMnXG5pbXBvcnQgQm9vbGVhblJlc29sdmVyIGZyb20gJy4vYm9vbGVhbi5yZXNvbHZlci5qcydcbmltcG9ydCBQcm9wZXJ0eVJlc29sdmVyIGZyb20gJy4vcHJvcGVydHkucmVzb2x2ZXIuanMnXG5pbXBvcnQgUGhhbnRvbVJlc29sdmVyIGZyb20gJy4vcGhhbnRvbS5yZXNvbHZlci5qcydcbmltcG9ydCBNZXRob2RSZXNvbHZlciBmcm9tICcuL21ldGhvZC5yZXNvbHZlci5qcydcbmltcG9ydCBPYmplY3RSZXNvbHZlciBmcm9tICcuL29iamVjdC5yZXNvbHZlci5qcydcblxuLyoqXG4gKiBBcnJheSBSZXNvbHZlclxuICogUmVzb2x2ZXMgZGF0YSBhcyBhcnJheSB3aXRoIGxpdGVyYWxzIG9yIG1vZGVsIHByb3BlcnRpZXNcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnR5OiBkYXRhXG4gKiBtZXRob2Q6IGRldGVjdChkYXRhKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlSZXNvbHZlciBleHRlbmRzIFJlc29sdmVyIHtcblx0Y29uc3RydWN0b3Iobm9kZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSAnYXJyYXknO1xuXHRcdHRoaXMucmVnZXggPSBBcnJheVJlc29sdmVyLnJlZ2V4KCk7XG5cdH1cblxuXHQvKipcblx0ICogcmVzb2x2ZSgpXG5cdCAqIFJlc29sdmUgZGF0YSB0byBhIHN0cmluZywgc2V0IGFueSBvYnNlcnZhYmxlcyBvbiBkYXRhXG5cdCAqL1xuXHRyZXNvbHZlKG9iamVjdCkge1xuXHRcdHZhciByZXMgPSBBcnJheVJlc29sdmVyLnRvQXJyYXkodGhpcy5kYXRhLCBvYmplY3QsIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5yZXNvbHZlZCA9IHJlcy5yZXNvbHZlZDtcblx0XHR0aGlzLm9ic2VydmVycyA9IHJlcy5vYnNlcnZlcnM7XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHJlZ2V4KClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEByZXR1cm4gb2JqZWN0IHJlZ2V4IFRoZSByZWdleCB1c2VkIHRvIHZhbGlkYXRlIGlmIG9mIHR5cGUgb3Igbm90XG5cdCAqL1xuXHRzdGF0aWMgcmVnZXgoKSB7XG5cdFx0cmV0dXJuIC9eXFxbezF9XFxzPygoWzAtOV0rfFxcJ3sxfVteXFwnXStcXCd7MX18W2EtekEtWl9dK3xbXFwkYS16QS1aX117MX1bXixdK1thLXpBLVpfXFxdXXsxfXxcXFt7MX0uKlxcXXsxfXxcXHt7MX0uKlxcfXsxfXxbYS16QS1aXXsxfVthLXpBLVowLTlfXSsoKFxcLlthLXpBLVpdezF9W2EtekEtWjAtOV9dKyl8KFxcWyhbMC05XSt8W2EtekEtWl9dezF9W2EtekEtWjAtOV8uXFxbXFwnXFxdXSspXFxdKXwoXFxbXFwnW15cXFtcXF1cXCddK1xcJ1xcXSkpKlxcKHsxfVteXFwoXFwpXSpcXCl7MX0pXFxzPyw/XFxzPykqXFxzP1xcXXsxfSQvO1xuXHR9XG5cblx0LyoqXG5cdCAqIHN0YXRpYyB0b0FycmF5KClcblx0ICogdHVybnMgYSBkYXRhIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGF0YSBUaGUgZGF0YSB0byByZXNvbHZlIG9uIHRoZSBvYmplY3Rcblx0ICogQHBhcmFtIG9iamVjdCBvYmplY3QgVGhlIG9iamVjdCB0byByZXNvbHZlIHRoZSBkYXRhIG9uXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b0FycmF5KGRhdGEsIG9iamVjdCwgbm9kZSkge1xuXHRcdC8vIHNwbGl0IGJ5IGNvbW1hIGJ1dCBiZSBjYXJlZnVsbCBub3QgdG8gYnJlYWsgbmVzdGVkIGRhdGFcblx0XHRkYXRhID0gZGF0YS50cmltKCk7XG5cdFx0dmFyIHBhcnRzID0gZGF0YS5zdWJzdHJpbmcoMSwgZGF0YS5sZW5ndGggLTEpLnNwbGl0KCcsJyk7XG5cdFx0dmFyIHZhbHVlcyA9IFtwYXJ0c1swXV07XG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHR2YXIgc2IgPSAodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxbL2cpIHx8IFtdKS5sZW5ndGggPT0gKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xcXS9nKSB8fCBbXSkubGVuZ3RoO1xuXHRcdFx0dmFyIG1iID0gKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xcey9nKSB8fCBbXSkubGVuZ3RoID09ICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXH0vZykgfHwgW10pLmxlbmd0aDtcblxuXHRcdFx0aWYgKHNiICYmIG1iKSB2YWx1ZXNbdmFsdWVzLmxlbmd0aF0gPSBwYXJ0c1tpXTtcblx0XHRcdGVsc2UgdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSArPSAnLCcgKyBwYXJ0c1tpXTtcblx0XHR9XG5cblx0XHQvLyB3b3JrIHRocm91Z2ggc2VwZXJhdGVkIGRhdGEgcmVzb2x2aW5nIG9yIHB1c2hpbmcgZm9yIGZ1cnRoZXIgYW5hbHlzaXNcblx0XHR2YXIgb2JzZXJ2ZXJzID0gW107XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdGZvciAodmFyIGlpID0gMDsgaWkgPCB2YWx1ZXMubGVuZ3RoOyBpaSsrKSB7XG5cdFx0XHR2YWx1ZXNbaWldID0gdmFsdWVzW2lpXS50cmltKCk7XG5cdFx0XHRpZiAoQm9vbGVhblJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSkgcmVzdWx0LnB1c2goQm9vbGVhblJlc29sdmVyLnRvQm9vbGVhbih2YWx1ZXNbaWldKS5yZXNvbHZlZCk7XG5cdFx0XHRlbHNlIGlmIChTdHJpbmdSZXNvbHZlci5yZWdleCgpLnRlc3QodmFsdWVzW2lpXSkpIHJlc3VsdC5wdXNoKFN0cmluZ1Jlc29sdmVyLnRvU3RyaW5nKHZhbHVlc1tpaV0pLnJlc29sdmVkKTtcblx0XHRcdGVsc2UgaWYgKE51bWJlclJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSkgcmVzdWx0LnB1c2goTnVtYmVyUmVzb2x2ZXIudG9OdW1iZXIodmFsdWVzW2lpXSkucmVzb2x2ZWQpO1xuXHRcdFx0ZWxzZSBpZiAoUHJvcGVydHlSZXNvbHZlci5yZWdleCgpLnRlc3QodmFsdWVzW2lpXSkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBwcm9wUmVzID0gUHJvcGVydHlSZXNvbHZlci50b1Byb3BlcnR5KHZhbHVlc1tpaV0sIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcHJvcFJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2YWx1ZXNbaWldICsgJ1wiIHRvIHByb3BlcnR5Jztcblx0XHRcdFx0cmVzdWx0LnB1c2gocHJvcFJlcy5yZXNvbHZlZCk7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcHJvcFJlcy5vYnNlcnZlcnMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoUGhhbnRvbVJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIHBoUmVzID0gUGhhbnRvbVJlc29sdmVyLnRvUHJvcGVydHkodmFsdWVzW2lpXSwgb2JqZWN0LCBub2RlKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBwaFJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2YWx1ZXNbaWldICsgJ1wiIHRvIHBoYW50b20nO1xuXHRcdFx0XHRyZXN1bHQucHVzaChwaFJlcy5yZXNvbHZlZCk7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcGhSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKE1ldGhvZFJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG1ldGhSZXMgPSBNZXRob2RSZXNvbHZlci50b01ldGhvZCh2YWx1ZXNbaWldLCBvYmplY3QsIG5vZGUpO1xuXHRcdFx0XHRpZiAodHlwZW9mIG1ldGhSZXMgPT09ICd1bmRlZmluZWQnKSB0aHJvdyAnQ291bGQgbm90IHJlc29sdmUgZGF0YTogXCInICsgdmFsdWVzW2lpXSArICdcIiB0byBtZXRob2QnO1xuXHRcdFx0XHRyZXN1bHQucHVzaChtZXRoUmVzLnJlc29sdmVkKTtcblx0XHRcdFx0b2JzZXJ2ZXJzID0gUmVzb2x2ZXIubWVyZ2VPYnNlcnZlcnMob2JzZXJ2ZXJzLCBtZXRoUmVzLm9ic2VydmVycyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChBcnJheVJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIGFyclJlcyA9IEFycmF5UmVzb2x2ZXIudG9BcnJheSh2YWx1ZXNbaWldLCBvYmplY3QsIG5vZGUpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGFyclJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2YWx1ZXNbaWldICsgJ1wiIHRvIGFycmF5Jztcblx0XHRcdFx0cmVzdWx0LnB1c2goYXJyUmVzLnJlc29sdmVkKTtcblx0XHRcdFx0b2JzZXJ2ZXJzID0gUmVzb2x2ZXIubWVyZ2VPYnNlcnZlcnMob2JzZXJ2ZXJzLCBhcnJSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKE9iamVjdFJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG9ialJlcyA9IE9iamVjdFJlc29sdmVyLnRvT2JqZWN0KHZhbHVlc1tpaV0sIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdGlmICh0eXBlb2Ygb2JqUmVzID09PSAndW5kZWZpbmVkJykgdGhyb3cgJ0NvdWxkIG5vdCByZXNvbHZlIGRhdGE6IFwiJyArIHZhbHVlc1tpaV0gKyAnXCIgdG8gb2JqZWN0Jztcblx0XHRcdFx0cmVzdWx0LnB1c2gob2JqUmVzLnJlc29sdmVkKTtcblx0XHRcdFx0b2JzZXJ2ZXJzID0gUmVzb2x2ZXIubWVyZ2VPYnNlcnZlcnMob2JzZXJ2ZXJzLCBvYmpSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge3Jlc29sdmVkOiByZXN1bHQsIG9ic2VydmVyczogb2JzZXJ2ZXJzfTtcblx0fVxufVxuIl19
},{"./boolean.resolver.js":49,"./method.resolver.js":50,"./number.resolver.js":51,"./object.resolver.js":52,"./phantom.resolver.js":53,"./property.resolver.js":54,"./resolver.js":55,"./string.resolver.js":56}],49:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Boolean Resolver
 * Resolves data as boolean true or false
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var BooleanResolver = function (_Resolver) {
	_inherits(BooleanResolver, _Resolver);

	function BooleanResolver(node) {
		_classCallCheck(this, BooleanResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'boolean';
		_this.regex = BooleanResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a boolean true or false, set any observables on data
  */


	BooleanResolver.prototype.resolve = function resolve(object) {
		var res = BooleanResolver.toBoolean(this.data);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	BooleanResolver.regex = function regex() {
		return (/^true|false$/
		);
	};

	/**
  * static toBoolean()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve to a string
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	BooleanResolver.toBoolean = function toBoolean(data) {
		return { resolved: data == 'true' ? true : false, observers: [] };
	};

	return BooleanResolver;
}(_resolver2.default);

exports.default = BooleanResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2xlYW4ucmVzb2x2ZXIuanMiXSwibmFtZXMiOlsiQm9vbGVhblJlc29sdmVyIiwibm9kZSIsIm5hbWUiLCJyZWdleCIsInJlc29sdmUiLCJvYmplY3QiLCJyZXMiLCJ0b0Jvb2xlYW4iLCJkYXRhIiwicmVzb2x2ZWQiLCJvYnNlcnZlcnMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQkEsZTs7O0FBQ3BCLDBCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0NBQ2pCLG9CQURpQjs7QUFFakIsUUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLFNBQVo7QUFDQSxRQUFLQyxLQUFMLEdBQWFILGdCQUFnQkcsS0FBaEIsRUFBYjtBQUppQjtBQUtqQjs7QUFFRDs7Ozs7OzJCQUlBQyxPLG9CQUFRQyxNLEVBQVE7QUFDZixNQUFJQyxNQUFNTixnQkFBZ0JPLFNBQWhCLENBQTBCLEtBQUtDLElBQS9CLENBQVY7QUFDQSxPQUFLQyxRQUFMLEdBQWdCSCxJQUFJRyxRQUFwQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUJKLElBQUlJLFNBQXJCO0FBQ0EsRTs7QUFFRDs7Ozs7OztpQkFLT1AsSyxvQkFBUTtBQUNkLFNBQU87QUFBUDtBQUNBLEU7O0FBRUQ7Ozs7Ozs7O2lCQU1PSSxTLHNCQUFVQyxJLEVBQU07QUFDdEIsU0FBTyxFQUFDQyxVQUFVRCxRQUFRLE1BQVIsR0FBaUIsSUFBakIsR0FBd0IsS0FBbkMsRUFBMENFLFdBQVcsRUFBckQsRUFBUDtBQUNBLEU7Ozs7O2tCQW5DbUJWLGUiLCJmaWxlIjoiYm9vbGVhbi5yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyLmpzJ1xuXG4vKipcbiAqIEJvb2xlYW4gUmVzb2x2ZXJcbiAqIFJlc29sdmVzIGRhdGEgYXMgYm9vbGVhbiB0cnVlIG9yIGZhbHNlXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0eTogZGF0YVxuICogbWV0aG9kOiBkZXRlY3QoZGF0YSkgeyByZXR1cm4gYm9vbCB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2xlYW5SZXNvbHZlciBleHRlbmRzIFJlc29sdmVyIHtcblx0Y29uc3RydWN0b3Iobm9kZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSAnYm9vbGVhbic7XG5cdFx0dGhpcy5yZWdleCA9IEJvb2xlYW5SZXNvbHZlci5yZWdleCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJlc29sdmUoKVxuXHQgKiBSZXNvbHZlIGRhdGEgdG8gYSBib29sZWFuIHRydWUgb3IgZmFsc2UsIHNldCBhbnkgb2JzZXJ2YWJsZXMgb24gZGF0YVxuXHQgKi9cblx0cmVzb2x2ZShvYmplY3QpIHtcblx0XHR2YXIgcmVzID0gQm9vbGVhblJlc29sdmVyLnRvQm9vbGVhbih0aGlzLmRhdGEpO1xuXHRcdHRoaXMucmVzb2x2ZWQgPSByZXMucmVzb2x2ZWQ7XG5cdFx0dGhpcy5vYnNlcnZlcnMgPSByZXMub2JzZXJ2ZXJzO1xuXHR9XG5cblx0LyoqXG5cdCAqIHN0YXRpYyByZWdleCgpXG5cdCAqIHR1cm5zIGEgcGF0aCBhbmQgb2JqZWN0IHRvIGEgcHJvcGVydHkgdmFsdWUsIHJldHVybmluZyBsaXN0IG9mIG9ic2VydmVycyBvbiBhbnkgZm91bmQgcHJvcGVydGllc1xuXHQgKiBAcmV0dXJuIG9iamVjdCByZWdleCBUaGUgcmVnZXggdXNlZCB0byB2YWxpZGF0ZSBpZiBvZiB0eXBlIG9yIG5vdFxuXHQgKi9cblx0c3RhdGljIHJlZ2V4KCkge1xuXHRcdHJldHVybiAvXnRydWV8ZmFsc2UkLztcblx0fVxuXG5cdC8qKlxuXHQgKiBzdGF0aWMgdG9Cb29sZWFuKClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGF0YSBUaGUgZGF0YSB0byByZXNvbHZlIHRvIGEgc3RyaW5nXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b0Jvb2xlYW4oZGF0YSkge1xuXHRcdHJldHVybiB7cmVzb2x2ZWQ6IGRhdGEgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlLCBvYnNlcnZlcnM6IFtdfTtcblx0fVxufVxuIl19
},{"./resolver.js":55}],50:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _arrayResolver = require('./array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

var _objectResolver = require('./object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Method Resolver
 * Resolves data to model method
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var MethodResolver = function (_Resolver) {
	_inherits(MethodResolver, _Resolver);

	function MethodResolver(node) {
		_classCallCheck(this, MethodResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'method';
		_this.regex = MethodResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	MethodResolver.prototype.resolve = function resolve(object, delay) {
		var res = MethodResolver.toMethod(this.data, object, this.node, delay);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * Used to validate if data is a method call or not
  * @return object regex The regex used to validate if of type or not
  */


	MethodResolver.regex = function regex() {
		return (/^[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1}$/
		);
	};

	/**
  * static toMethod()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve on the object
  * @param object object The object to resolve the path on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	MethodResolver.toMethod = function toMethod(data, object, node, delay) {
		// get the bit before (
		data = data.trim();
		var key = data.substring(0, data.indexOf('('));

		// get the bit between ()
		var val = data.substring(data.indexOf('(') + 1, data.length - 1);

		// resolve method name
		if (!_propertyResolver2.default.regex().test(key)) return undefined;
		var resolver = _propertyResolver2.default.toProperty(key, object, node);
		var method = resolver.resolved;
		var observers = resolver.observers;
		if (typeof method !== 'function') return undefined;

		// split data by , but do not split objects or arrays
		var parts = val.split(',');
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
			var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

			if (sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
		}

		// resolve each split data
		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();

			// resolve value
			if (_booleanResolver2.default.regex().test(values[ii])) values[ii] = _booleanResolver2.default.toBoolean(values[ii]).resolved;else if (_stringResolver2.default.regex().test(values[ii])) values[ii] = _stringResolver2.default.toString(values[ii]).resolved;else if (_numberResolver2.default.regex().test(values[ii])) values[ii] = _numberResolver2.default.toNumber(values[ii]).resolved;else if (_propertyResolver2.default.regex().test(values[ii])) {
				var propValRes = _propertyResolver2.default.toProperty(values[ii], object, node);
				values[ii] = propValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, propValRes.observers);
			} else if (_phantomResolver2.default.regex().test(values[ii])) {
				var phValRes = _phantomResolver2.default.toProperty(values[ii], object, node);
				values[ii] = phValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, phValRes.observers);
			} else if (_arrayResolver2.default.regex().test(values[ii])) {
				var arrValRes = _arrayResolver2.default.toArray(values[ii], object, node);
				values[ii] = arrValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, arrValRes.observers);
			} else if (_objectResolver2.default.regex().test(values[ii])) {
				var objValRes = _objectResolver2.default.toObject(values[ii], object, node);
				values[ii] = objValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, objValRes.observers);
			} else values[ii] = undefined;
		}

		// for event binders... return method instead of running it
		return { resolved: !!delay ? { method: method, values: values } : method.apply(object, values), observers: observers };
	};

	return MethodResolver;
}(_resolver2.default);

exports.default = MethodResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZC5yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJNZXRob2RSZXNvbHZlciIsIm5vZGUiLCJuYW1lIiwicmVnZXgiLCJyZXNvbHZlIiwib2JqZWN0IiwiZGVsYXkiLCJyZXMiLCJ0b01ldGhvZCIsImRhdGEiLCJyZXNvbHZlZCIsIm9ic2VydmVycyIsInRyaW0iLCJrZXkiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwidmFsIiwibGVuZ3RoIiwidGVzdCIsInVuZGVmaW5lZCIsInJlc29sdmVyIiwidG9Qcm9wZXJ0eSIsIm1ldGhvZCIsInBhcnRzIiwic3BsaXQiLCJ2YWx1ZXMiLCJpIiwic2IiLCJtYXRjaCIsIm1iIiwiaWkiLCJ0b0Jvb2xlYW4iLCJ0b1N0cmluZyIsInRvTnVtYmVyIiwicHJvcFZhbFJlcyIsIm1lcmdlT2JzZXJ2ZXJzIiwicGhWYWxSZXMiLCJhcnJWYWxSZXMiLCJ0b0FycmF5Iiwib2JqVmFsUmVzIiwidG9PYmplY3QiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGM7OztBQUNwQix5QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBLCtDQUNqQixvQkFEaUI7O0FBRWpCLFFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFFBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsUUFBS0MsS0FBTCxHQUFhSCxlQUFlRyxLQUFmLEVBQWI7QUFKaUI7QUFLakI7O0FBRUQ7Ozs7Ozs7MEJBS0FDLE8sb0JBQVFDLE0sRUFBUUMsSyxFQUFPO0FBQ3RCLE1BQUlDLE1BQU1QLGVBQWVRLFFBQWYsQ0FBd0IsS0FBS0MsSUFBN0IsRUFBbUNKLE1BQW5DLEVBQTJDLEtBQUtKLElBQWhELEVBQXNESyxLQUF0RCxDQUFWO0FBQ0EsT0FBS0ksUUFBTCxHQUFnQkgsSUFBSUcsUUFBcEI7QUFDQSxPQUFL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QWVSLEtBQWYsR0FBdUJlLElBQXZCLENBQTRCTyxPQUFPSyxFQUFQLENBQTVCLENBQUosRUFDTDtBQUNDLFFBQUlTLFlBQVkseUJBQWVDLFFBQWYsQ0FBd0JmLE9BQU9LLEVBQVAsQ0FBeEIsRUFBb0N6QixNQUFwQyxFQUE0Q0osSUFBNUMsQ0FBaEI7QUFDQXdCLFdBQU9LLEVBQVAsSUFBYVMsVUFBVTdCLFFBQXZCO0FBQ0FDLGdCQUFZLG1CQUFTd0IsY0FBVCxDQUF3QnhCLFNBQXhCLEVBQW1DNEIsVUFBVTVCLFNBQTdDLENBQVo7QUFDQSxJQUxJLE1BTUFjLE9BQU9LLEVBQVAsSUFBYVgsU0FBYjtBQUNMOztBQUVEO0FBQ0EsU0FBTyxFQUFDVCxVQUFVLENBQUMsQ0FBQ0osS0FBRixHQUFVLEVBQUNnQixRQUFRQSxNQUFULEVBQWlCRyxRQUFRQSxNQUF6QixFQUFWLEdBQTZDSCxPQUFPbUIsS0FBUCxDQUFhcEMsTUFBYixFQUFxQm9CLE1BQXJCLENBQXhELEVBQXNGZCxXQUFXQSxTQUFqRyxFQUFQO0FBQ0EsRTs7Ozs7a0JBckdtQlgsYyIsImZpbGUiOiJtZXRob2QucmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlci5qcydcbmltcG9ydCBTdHJpbmdSZXNvbHZlciBmcm9tICcuL3N0cmluZy5yZXNvbHZlci5qcydcbmltcG9ydCBOdW1iZXJSZXNvbHZlciBmcm9tICcuL251bWJlci5yZXNvbHZlci5qcydcbmltcG9ydCBCb29sZWFuUmVzb2x2ZXIgZnJvbSAnLi9ib29sZWFuLnJlc29sdmVyLmpzJ1xuaW1wb3J0IFByb3BlcnR5UmVzb2x2ZXIgZnJvbSAnLi9wcm9wZXJ0eS5yZXNvbHZlci5qcydcbmltcG9ydCBQaGFudG9tUmVzb2x2ZXIgZnJvbSAnLi9waGFudG9tLnJlc29sdmVyLmpzJ1xuaW1wb3J0IEFycmF5UmVzb2x2ZXIgZnJvbSAnLi9hcnJheS5yZXNvbHZlci5qcydcbmltcG9ydCBPYmplY3RSZXNvbHZlciBmcm9tICcuL29iamVjdC5yZXNvbHZlci5qcydcblxuLyoqXG4gKiBNZXRob2QgUmVzb2x2ZXJcbiAqIFJlc29sdmVzIGRhdGEgdG8gbW9kZWwgbWV0aG9kXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0eTogZGF0YVxuICogbWV0aG9kOiBkZXRlY3QoZGF0YSkgeyByZXR1cm4gYm9vbCB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGhvZFJlc29sdmVyIGV4dGVuZHMgUmVzb2x2ZXIge1xuXHRjb25zdHJ1Y3Rvcihub2RlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9ICdtZXRob2QnO1xuXHRcdHRoaXMucmVnZXggPSBNZXRob2RSZXNvbHZlci5yZWdleCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJlc29sdmUoKVxuXHQgKiBSZXNvbHZlIGRhdGEgdG8gYSBwcm9wZXJ0eSwgc2V0IGFueSBvYnNlcnZhYmxlcyBvbiBkYXRhXG5cdCAqIEBwYXJhbSBvYmplY3Qgb2JqZWN0IFRoZSBvYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZXNvbHZlIGRhdGEgdG9cblx0ICovXG5cdHJlc29sdmUob2JqZWN0LCBkZWxheSkge1xuXHRcdHZhciByZXMgPSBNZXRob2RSZXNvbHZlci50b01ldGhvZCh0aGlzLmRhdGEsIG9iamVjdCwgdGhpcy5ub2RlLCBkZWxheSk7XG5cdFx0dGhpcy5yZXNvbHZlZCA9IHJlcy5yZXNvbHZlZDtcblx0XHR0aGlzLm9ic2VydmVycyA9IHJlcy5vYnNlcnZlcnM7XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHJlZ2V4KClcblx0ICogVXNlZCB0byB2YWxpZGF0ZSBpZiBkYXRhIGlzIGEgbWV0aG9kIGNhbGwgb3Igbm90XG5cdCAqIEByZXR1cm4gb2JqZWN0IHJlZ2V4IFRoZSByZWdleCB1c2VkIHRvIHZhbGlkYXRlIGlmIG9mIHR5cGUgb3Igbm90XG5cdCAqL1xuXHRzdGF0aWMgcmVnZXgoKSB7XG5cdFx0cmV0dXJuIC9eW2EtekEtWl17MX1bYS16QS1aMC05X10rKChcXC5bYS16QS1aXXsxfVthLXpBLVowLTlfXSspfChcXFsoWzAtOV0rfFthLXpBLVpfXXsxfVthLXpBLVowLTlfLlxcW1xcJ1xcXV0rKVxcXSl8KFxcW1xcJ1teXFxbXFxdXFwnXStcXCdcXF0pKSpcXCh7MX1bXlxcKFxcKV0qXFwpezF9JC87XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHRvTWV0aG9kKClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGF0YSBUaGUgZGF0YSB0byByZXNvbHZlIG9uIHRoZSBvYmplY3Rcblx0ICogQHBhcmFtIG9iamVjdCBvYmplY3QgVGhlIG9iamVjdCB0byByZXNvbHZlIHRoZSBwYXRoIG9uXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b01ldGhvZChkYXRhLCBvYmplY3QsIG5vZGUsIGRlbGF5KSB7XG5cdFx0Ly8gZ2V0IHRoZSBiaXQgYmVmb3JlIChcblx0XHRkYXRhID0gZGF0YS50cmltKCk7XG5cdFx0dmFyIGtleSA9IGRhdGEuc3Vic3RyaW5nKDAsIGRhdGEuaW5kZXhPZignKCcpKTtcblxuXHRcdC8vIGdldCB0aGUgYml0IGJldHdlZW4gKClcblx0XHR2YXIgdmFsID0gZGF0YS5zdWJzdHJpbmcoZGF0YS5pbmRleE9mKCcoJykgKzEsIGRhdGEubGVuZ3RoIC0xKTtcblxuXG5cdFx0Ly8gcmVzb2x2ZSBtZXRob2QgbmFtZVxuXHRcdGlmICghUHJvcGVydHlSZXNvbHZlci5yZWdleCgpLnRlc3Qoa2V5KSkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHR2YXIgcmVzb2x2ZXIgPSBQcm9wZXJ0eVJlc29sdmVyLnRvUHJvcGVydHkoa2V5LCBvYmplY3QsIG5vZGUpO1xuXHRcdHZhciBtZXRob2QgPSByZXNvbHZlci5yZXNvbHZlZDtcblx0XHR2YXIgb2JzZXJ2ZXJzID0gcmVzb2x2ZXIub2JzZXJ2ZXJzO1xuXHRcdGlmICh0eXBlb2YgbWV0aG9kICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gc3BsaXQgZGF0YSBieSAsIGJ1dCBkbyBub3Qgc3BsaXQgb2JqZWN0cyBvciBhcnJheXNcblx0XHR2YXIgcGFydHMgPSB2YWwuc3BsaXQoJywnKTtcblx0XHR2YXIgdmFsdWVzID0gW3BhcnRzWzBdXTtcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdHZhciBzYiA9ICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXFsvZykgfHwgW10pLmxlbmd0aCA9PSAodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxdL2cpIHx8IFtdKS5sZW5ndGg7XG5cdFx0XHR2YXIgbWIgPSAodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5tYXRjaCgvXFx7L2cpIHx8IFtdKS5sZW5ndGggPT0gKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xcfS9nKSB8fCBbXSkubGVuZ3RoO1xuXG5cdFx0XHRpZiAoc2IgJiYgbWIpIHZhbHVlc1t2YWx1ZXMubGVuZ3RoXSA9IHBhcnRzW2ldO1xuXHRcdFx0ZWxzZSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdICs9ICcsJyArIHBhcnRzW2ldO1xuXHRcdH1cblxuXHRcdC8vIHJlc29sdmUgZWFjaCBzcGxpdCBkYXRhXG5cdFx0Zm9yICh2YXIgaWkgPSAwOyBpaSA8IHZhbHVlcy5sZW5ndGg7IGlpKyspXG5cdFx0e1xuXHRcdFx0dmFsdWVzW2lpXSA9IHZhbHVlc1tpaV0udHJpbSgpO1xuXG5cdFx0XHQvLyByZXNvbHZlIHZhbHVlXG5cdFx0XHRpZiAoQm9vbGVhblJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSkgdmFsdWVzW2lpXSA9IEJvb2xlYW5SZXNvbHZlci50b0Jvb2xlYW4odmFsdWVzW2lpXSkucmVzb2x2ZWQ7XG5cdFx0XHRlbHNlIGlmIChTdHJpbmdSZXNvbHZlci5yZWdleCgpLnRlc3QodmFsdWVzW2lpXSkpIHZhbHVlc1tpaV0gPSBTdHJpbmdSZXNvbHZlci50b1N0cmluZyh2YWx1ZXNbaWldKS5yZXNvbHZlZDtcblx0XHRcdGVsc2UgaWYgKE51bWJlclJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSkgdmFsdWVzW2lpXSA9IE51bWJlclJlc29sdmVyLnRvTnVtYmVyKHZhbHVlc1tpaV0pLnJlc29sdmVkO1xuXHRcdFx0ZWxzZSBpZiAoUHJvcGVydHlSZXNvbHZlci5yZWdleCgpLnRlc3QodmFsdWVzW2lpXSkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBwcm9wVmFsUmVzID0gUHJvcGVydHlSZXNvbHZlci50b1Byb3BlcnR5KHZhbHVlc1tpaV0sIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdHZhbHVlc1tpaV0gPSBwcm9wVmFsUmVzLnJlc29sdmVkO1xuXHRcdFx0XHRvYnNlcnZlcnMgPSBSZXNvbHZlci5tZXJnZU9ic2VydmVycyhvYnNlcnZlcnMsIHByb3BWYWxSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKFBoYW50b21SZXNvbHZlci5yZWdleCgpLnRlc3QodmFsdWVzW2lpXSkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBwaFZhbFJlcyA9IFBoYW50b21SZXNvbHZlci50b1Byb3BlcnR5KHZhbHVlc1tpaV0sIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdHZhbHVlc1tpaV0gPSBwaFZhbFJlcy5yZXNvbHZlZDtcblx0XHRcdFx0b2JzZXJ2ZXJzID0gUmVzb2x2ZXIubWVyZ2VPYnNlcnZlcnMob2JzZXJ2ZXJzLCBwaFZhbFJlcy5vYnNlcnZlcnMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoQXJyYXlSZXNvbHZlci5yZWdleCgpLnRlc3QodmFsdWVzW2lpXSkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBhcnJWYWxSZXMgPSBBcnJheVJlc29sdmVyLnRvQXJyYXkodmFsdWVzW2lpXSwgb2JqZWN0LCBub2RlKTtcblx0XHRcdFx0dmFsdWVzW2lpXSA9IGFyclZhbFJlcy5yZXNvbHZlZDtcblx0XHRcdFx0b2JzZXJ2ZXJzID0gUmVzb2x2ZXIubWVyZ2VPYnNlcnZlcnMob2JzZXJ2ZXJzLCBhcnJWYWxSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKE9iamVjdFJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG9ialZhbFJlcyA9IE9iamVjdFJlc29sdmVyLnRvT2JqZWN0KHZhbHVlc1tpaV0sIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdHZhbHVlc1tpaV0gPSBvYmpWYWxSZXMucmVzb2x2ZWQ7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgb2JqVmFsUmVzLm9ic2VydmVycyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHZhbHVlc1tpaV0gPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gZm9yIGV2ZW50IGJpbmRlcnMuLi4gcmV0dXJuIG1ldGhvZCBpbnN0ZWFkIG9mIHJ1bm5pbmcgaXRcblx0XHRyZXR1cm4ge3Jlc29sdmVkOiAhIWRlbGF5ID8ge21ldGhvZDogbWV0aG9kLCB2YWx1ZXM6IHZhbHVlc30gOiBtZXRob2QuYXBwbHkob2JqZWN0LCB2YWx1ZXMpLCBvYnNlcnZlcnM6IG9ic2VydmVyc307XG5cdH1cbn1cbiJdfQ==
},{"./array.resolver.js":48,"./boolean.resolver.js":49,"./number.resolver.js":51,"./object.resolver.js":52,"./phantom.resolver.js":53,"./property.resolver.js":54,"./resolver.js":55,"./string.resolver.js":56}],51:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Number Resolver
 * Resolves data as number
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var NumberResolver = function (_Resolver) {
	_inherits(NumberResolver, _Resolver);

	function NumberResolver(node) {
		_classCallCheck(this, NumberResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'number';
		_this.regex = NumberResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a number, set any observables on data
  */


	NumberResolver.prototype.resolve = function resolve(object) {
		var res = NumberResolver.toNumber(this.data);
		this.resolved = res.resolved;
		this.observers = res.obeservers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	NumberResolver.regex = function regex() {
		return (/^[0-9]+(\.[0-9]+)?$/
		);
	};

	/**
  * static toNumber()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve to a string
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	NumberResolver.toNumber = function toNumber(data) {
		return { resolved: data, observers: [] };
	};

	return NumberResolver;
}(_resolver2.default);

exports.default = NumberResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci5yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJOdW1iZXJSZXNvbHZlciIsIm5vZGUiLCJuYW1lIiwicmVnZXgiLCJyZXNvbHZlIiwib2JqZWN0IiwicmVzIiwidG9OdW1iZXIiLCJkYXRhIiwicmVzb2x2ZWQiLCJvYnNlcnZlcnMiLCJvYmVzZXJ2ZXJzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGM7OztBQUNwQix5QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBLCtDQUNqQixvQkFEaUI7O0FBRWpCLFFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFFBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsUUFBS0MsS0FBTCxHQUFhSCxlQUFlRyxLQUFmLEVBQWI7QUFKaUI7QUFLakI7O0FBRUQ7Ozs7OzswQkFJQUMsTyxvQkFBUUMsTSxFQUFRO0FBQ2YsTUFBSUMsTUFBTU4sZUFBZU8sUUFBZixDQUF3QixLQUFLQyxJQUE3QixDQUFWO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQkgsSUFBSUcsUUFBcEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCSixJQUFJSyxVQUFyQjtBQUNBLEU7O0FBRUQ7Ozs7Ozs7Z0JBS09SLEssb0JBQVE7QUFDZCxTQUFPO0FBQVA7QUFDQSxFOztBQUVEOzs7Ozs7OztnQkFNT0ksUSxxQkFBU0MsSSxFQUFNO0FBQ3JCLFNBQU8sRUFBQ0MsVUFBVUQsSUFBWCxFQUFpQkUsV0FBVyxFQUE1QixFQUFQO0FBQ0EsRTs7Ozs7a0JBbkNtQlYsYyIsImZpbGUiOiJudW1iZXIucmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlci5qcydcblxuLyoqXG4gKiBOdW1iZXIgUmVzb2x2ZXJcbiAqIFJlc29sdmVzIGRhdGEgYXMgbnVtYmVyXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0eTogZGF0YVxuICogbWV0aG9kOiBkZXRlY3QoZGF0YSkgeyByZXR1cm4gYm9vbCB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclJlc29sdmVyIGV4dGVuZHMgUmVzb2x2ZXIge1xuXHRjb25zdHJ1Y3Rvcihub2RlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9ICdudW1iZXInO1xuXHRcdHRoaXMucmVnZXggPSBOdW1iZXJSZXNvbHZlci5yZWdleCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJlc29sdmUoKVxuXHQgKiBSZXNvbHZlIGRhdGEgdG8gYSBudW1iZXIsIHNldCBhbnkgb2JzZXJ2YWJsZXMgb24gZGF0YVxuXHQgKi9cblx0cmVzb2x2ZShvYmplY3QpIHtcblx0XHR2YXIgcmVzID0gTnVtYmVyUmVzb2x2ZXIudG9OdW1iZXIodGhpcy5kYXRhKTtcblx0XHR0aGlzLnJlc29sdmVkID0gcmVzLnJlc29sdmVkO1xuXHRcdHRoaXMub2JzZXJ2ZXJzID0gcmVzLm9iZXNlcnZlcnM7XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHJlZ2V4KClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEByZXR1cm4gb2JqZWN0IHJlZ2V4IFRoZSByZWdleCB1c2VkIHRvIHZhbGlkYXRlIGlmIG9mIHR5cGUgb3Igbm90XG5cdCAqL1xuXHRzdGF0aWMgcmVnZXgoKSB7XG5cdFx0cmV0dXJuIC9eWzAtOV0rKFxcLlswLTldKyk/JC87XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHRvTnVtYmVyKClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGF0YSBUaGUgZGF0YSB0byByZXNvbHZlIHRvIGEgc3RyaW5nXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b051bWJlcihkYXRhKSB7XG5cdFx0cmV0dXJuIHtyZXNvbHZlZDogZGF0YSwgb2JzZXJ2ZXJzOiBbXX07XG5cdH1cbn1cbiJdfQ==
},{"./resolver.js":55}],52:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _methodResolver = require('./method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _arrayResolver = require('./array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Object Resolver
 * Resolves data as object with literals or model properties
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var ObjectResolver = function (_Resolver) {
	_inherits(ObjectResolver, _Resolver);

	function ObjectResolver(node) {
		_classCallCheck(this, ObjectResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'object';
		_this.regex = ObjectResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	ObjectResolver.prototype.resolve = function resolve(object, delay) {
		var res = ObjectResolver.toObject(this.data, object, this.node, delay);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	ObjectResolver.regex = function regex() {
		return (/^\{{1}\s?((\'{1}[^\']+\'{1}|[a-zA-Z_]+|[a-zA-Z_]{1}[^,]+[a-zA-Z_\]]{1}|)\s?:{1}\s?([0-9]+|\'{1}[^\']+\'{1}|[a-zA-Z_]+|[a-zA-Z_\$]{1}[^,]+[a-zA-Z0-9_\]]{1}|\[{1}.*\]{1}|\{{1}.*\}{1}|[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1})\s?,?\s?)*\s?\}{1}$/
		);
	};

	/**
  * static toObject()
  * turns a data and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve on the object
  * @param object object The object to resolve the data on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	ObjectResolver.toObject = function toObject(data, object, node, delay) {
		// split by comma but be carefull not to break nested data
		data = data.trim();
		var parts = data.substring(1, data.length - 1).split(',');
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var rb = (values[values.length - 1].match(/\(/g) || []).length == (values[values.length - 1].match(/\)/g) || []).length;
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
			var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

			if (rb && sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
		}

		// work through seperated data resolving or pushing for further analysis
		var observers = [];
		var result = [];

		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();

			// split by ':' preserving data in second part
			var vKey = values[ii].substring(0, values[ii].indexOf(':')).trim();
			var vVal = values[ii].substring(values[ii].indexOf(':') + 1, values[ii].length).trim();

			// resolve key
			if (_stringResolver2.default.regex().test(vKey)) vKey = _stringResolver2.default.toString(vKey).resolved;else if (_propertyResolver2.default.regex().test(vKey)) {
				var propKeyRes = _propertyResolver2.default.toProperty(vKey, object, node);
				if (typeof propKeyRes === 'undefined') throw 'Could not resolve data: "' + vKey + '" to property';
				vKey = propKeyRes;
				observers = _resolver2.default.mergeObservers(observers, propKeyRes.observers);
			} else if (_phantomResolver2.default.regex().test(vKey)) {
				var phKeyRes = _phantomResolver2.default.toProperty(vKey, object, node);
				if (typeof phKeyRes === 'undefined') throw 'Could not resolve data: "' + vKey + '" to phantom';
				vKey = phKeyRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, phKeyRes.observers);
			} else vKey = 'undefined';

			// resolve value
			if (_booleanResolver2.default.regex().test(vVal)) vVal = _booleanResolver2.default.toBoolean(vVal).resolved;else if (_stringResolver2.default.regex().test(vVal)) vVal = _stringResolver2.default.toString(vVal).resolved;else if (_numberResolver2.default.regex().test(vVal)) vVal = _numberResolver2.default.toNumber(vVal).resolved;else if (_propertyResolver2.default.regex().test(vVal)) {
				var propValRes = _propertyResolver2.default.toProperty(vVal, object, node);
				if (typeof propValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to property';
				vVal = propValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, propValRes.observers);
			} else if (_phantomResolver2.default.regex().test(vVal)) {
				var phValRes = _phantomResolver2.default.toProperty(vVal, object, node);
				if (typeof phValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to phantom';
				vVal = phValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, phValRes.observers);
			} else if (_methodResolver2.default.regex().test(vVal)) {
				var methValRes = _methodResolver2.default.toMethod(vVal, object, node, delay);
				if (typeof methValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to method';
				vVal = methValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, methValRes.observers);
			} else if (_arrayResolver2.default.regex().test(vVal)) {
				var arrValRes = _arrayResolver2.default.toArray(vVal, object, node);
				if (typeof arrValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to array';
				vVal = arrValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, arrValRes.observers);
			} else if (ObjectResolver.regex().test(vVal)) {
				var objValRes = ObjectResolver.toObject(vVal, object, node);
				if (typeof objValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to object';
				vVal = objValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, objValRes.observers);
			} else vVal = undefined;

			result[vKey] = vVal;
		}

		return { resolved: result, observers: observers };
	};

	return ObjectResolver;
}(_resolver2.default);

exports.default = ObjectResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamVjdC5yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJPYmplY3RSZXNvbHZlciIsIm5vZGUiLCJuYW1lIiwicmVnZXgiLCJyZXNvbHZlIiwib2JqZWN0IiwiZGVsYXkiLCJyZXMiLCJ0b09iamVjdCIsImRhdGEiLCJyZXNvbHZlZCIsIm9ic2VydmVycyIsInRyaW0iLCJwYXJ0cyIsInN1YnN0cmluZyIsImxlbmd0aCIsInNwbGl0IiwidmFsdWVzIiwiaSIsInJiIiwibWF0Y2giLCJzYiIsIm1iIiwicmVzdWx0IiwiaWkiLCJ2S2V5IiwiaW5kZXhPZiIsInZWYWwiLCJ0ZXN0IiwidG9TdHJpbmciLCJwcm9wS2V5UmVzIiwidG9Qcm9wZXJ0eSIsIm1lcmdlT2JzZXJ2ZXJzIiwicGhLZXlSZXMiLCJ0b0Jvb2xlYW4iLCJ0b051bWJlciIsInByb3BWYWxSZXMiLCJwaFZhbFJlcyIsIm1ldGhWYWxSZXMiLCJ0b01ldGhvZCIsImFyclZhbFJlcyIsInRvQXJyYXkiLCJvYmpWYWxSZXMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxjOzs7QUFDcEIseUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQSwrQ0FDakIsb0JBRGlCOztBQUVqQixRQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxRQUFLQyxJQUFMLEdBQVksUUFBWjtBQUNBLFFBQUtDLEtBQUwsR0FBYUgsZUFBZUcsS0FBZixFQUFiO0FBSmlCO0FBS2pCOztBQUVEOzs7Ozs7MEJBSUFDLE8sb0JBQVFDLE0sRUFBUUMsSyxFQUFPO0FBQ3RCLE1BQUlDLE1BQU1QLGVBQWVRLFFBQWYsQ0FBd0IsS0FBS0MsSUFBN0IsRUFBbUNKLE1BQW5DLEVBQTJDLEtBQUtKLElBQWhELEVBQXNESyxLQUF0RCxDQUFWO0FBQ0EsT0FBS0ksUUFBTCxHQUFnQkgsSUFBSUcsUUFBcEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCSixJQUFJSSxTQUFyQjtBQUNBLEU7O0FBRUQ7Ozs7Ozs7Z0JBS09SLEssb0JBQVE7QUFDZCxTQUFPO0FBQVA7QUFDQSxFOztBQUVEOzs7Ozs7Ozs7Z0JBT09LLFEscUJBQVNDLEksRUFBTUosTSxFQUFRSixJLEVBQU1LLEssRUFBTztBQUMxQztBQUNBRyxTQUFPQSxLQUFLRyxJQUFMLEVBQVA7QUFDQSxNQUFJQyxRQUFRSixLQUFLSyxTQUFMLENBQWUsQ0FBZixFQUFrQkwsS0FBS00sTUFBTCxHQUFhLENBQS9CLEVBQWtDQyxLQUFsQyxDQUF3QyxHQUF4QyxDQUFaO0FBQ0EsTUFBSUMsU0FBUyxDQUFDSixNQUFNLENBQU4sQ0FBRCxDQUFiO0FBQ0EsT0FBSyxJQUFJSyxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLE1BQU1FLE1BQTFCLEVBQWtDRyxHQUFsQyxFQUNBO0FBQ0MsT0FBSUMsS0FBSyxDQUFDRixPQUFPQSxPQUFPRixNQUFQLEdBQWdCLENBQXZCLEVBQTBCSyxLQUExQixDQUFnQyxLQUFoQyxLQUEwQyxFQUEzQyxFQUErQ0wsTUFBL0MsSUFBeUQsQ0FBQ0UsT0FBT0EsT0FBT0YsTUFBUCxHQUFnQixDQUF2QixFQUEwQkssS0FBMUIsQ0FBZ0MsS0FBaEMsS0FBMEMsRUFBM0MsRUFBK0NMLE1BQWpIO0FBQ0EsT0FBSU0sS0FBSyxDQUFDSixPQUFPQSxPQUFPRixNQUFQLEdBQWdCLENBQXZCLEVBQTBCSyxLQUExQixDQUFnQyxLQUFoQyxLQUEwQyxFQUEzQyxFQUErQ0wsTUFBL0MsSUFBeUQsQ0FBQ0UsT0FBT0EsT0FBT0YsTUFBUCxHQUFnQixDQUF2QixFQUEwQkssS0FBMUIsQ0FBZ0MsS0FBaEMsS0FBMEMsRUFBM0MsRUFBK0NMLE1BQWpIO0FBQ0EsT0FBSU8sS0FBSyxDQUFDTCxPQUFPQSxPQUFPRixNQUFQLEdBQWdCLENBQXZCLEVBQTBCSyxLQUExQixDQUFnQyxLQUFoQyxLQUEwQyxFQUEzQyxFQUErQ0wsTUFBL0MsSUFBeUQsQ0FBQ0UsT0FBT0EsT0FBT0YsTUFBUCxHQUFnQixDQUF2QixFQUEwQkssS0FBMUIsQ0FBZ0MsS0FBaEMsS0FBMEMsRUFBM0MsRUFBK0NMLE1BQWpIOztBQUVBLE9BQUlJLE1BQU1FLEVBQU4sSUFBWUMsRUFBaEIsRUFBb0JMLE9BQU9BLE9BQU9GLE1BQWQsSUFBd0JGLE1BQU1LLENBQU4sQ0FBeEIsQ0FBcEIsS0FDS0QsT0FBT0EsT0FBT0YsTUFBUCxHQUFnQixDQUF2QixLQUE2QixNQUFNRixNQUFNSyxDQUFOLENBQW5DO0FBQ0w7O0FBRUQ7QUFDQSxNQUFJUCxZQUFZLEVBQWhCO0FBQ0EsTUFBSVksU0FBUyxFQUFiOztBQUVBLE9BQUssSUFBSUMsS0FBSyxDQUFkLEVBQWlCQSxLQUFLUCxPQUFPRixNQUE3QixFQUFxQ1MsSUFBckMsRUFDQTtBQUNDUCxVQUFPTyxFQUFQLElBQWFQLE9BQU9PLEVBQVAsRUFBV1osSUFBWCxFQUFiOztBQUVBO0FBQ0EsT0FBSWEsT0FBT1IsT0FBT08sRUFBUCxFQUFXVixTQUFYLENBQXFCLENBQXJCLEVBQXdCRyxPQUFPTyxFQUFQLEVBQVdFLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBeEIsRUFBaURkLElBQWpELEVBQVg7QUFDQSxPQUFJZSxPQUFPVixPQUFPTyxFQUFQLEVBQVdWLFNBQVgsQ0FBcUJHLE9BQU9PLEVBQVAsRUFBV0UsT0FBWCxDQUFtQixHQUFuQixJQUF5QixDQUE5QyxFQUFpRFQsT0FBT08sRUFBUCxFQUFXVCxNQUE1RCxFQUFvRUgsSUFBcEUsRUFBWDs7QUFFQTtBQUNBLE9BQUkseUJBQWVULEtBQWYsR0FBdUJ5QixJQUF2QixDQUE0QkgsSUFBNUIsQ0FBSixFQUF1Q0EsT0FBTyx5QkFBZUksUUFBZixDQUF3QkosSUFBeEIsRUFBOEJmLFFBQXJDLENBQXZDLEtBQ0ssSUFBSSwyQkFBaUJQLEtBQWpCLEdBQXlCeUIsSUFBekIsQ0FBOEJILElBQTlCLENBQUosRUFDTDtBQUNDLFFBQUlLLGFBQWEsMkJBQWlCQyxVQUFqQixDQUE0Qk4sSUFBNUIsRUFBa0NwQixNQUFsQyxFQUEwQ0osSUFBMUMsQ0FBakI7QUFDQSxRQUFJLE9BQU82QixVQUFQLEtBQXNCLFdBQTFCLEVBQXVDLE1BQU0sOEJBQThCTCxJQUE5QixHQUFxQyxlQUEzQztBQUN2Q0EsV0FBT0ssVUFBUDtBQUNBbkIsZ0JBQVksbUJBQVNxQixjQUFULENBQXdCckIsU0FBeEIsRUFBbUNtQixXQUFXbkIsU0FBOUMsQ0FBWjtBQUNBLElBTkksTUFPQSxJQUFJLDBCQUFnQlIsS0FBaEIsR0FBd0J5QixJQUF4QixDQUE2QkgsSUFBN0IsQ0FBSixFQUNMO0FBQ0MsUUFBSVEsV0FBVywwQkFBZ0JGLFVBQWhCLENBQTJCTixJQUEzQixFQUFpQ3BCLE1BQWpDLEVBQXlDSixJQUF6QyxDQUFmO0FBQ0EsUUFBSSxPQUFPZ0MsUUFBUCxLQUFvQixXQUF4QixFQUFxQyxNQUFNLDhCQUE4QlIsSUFBOUIsR0FBcUMsY0FBM0M7QUFDckNBLFdBQU9RLFNBQVN2QixRQUFoQjtBQUNBQyxnQkFBWSxtQkFBU3FCLGNBQVQsQ0FBd0JyQixTQUF4QixFQUFtQ3NCLFNBQVN0QixTQUE1QyxDQUFaO0FBQ0EsSUFOSSxNQU9BYyxPQUFPLFdBQVA7O0FBRUw7QUFDQSxPQUFJLDBCQUFnQnRCLEtBQWhCLEdBQXdCeUIsSUFBeEIsQ0FBNkJELElBQTdCLENBQUosRUFBd0NBLE9BQU8sMEJBQWdCTyxTQUFoQixDQUEwQlAsSUFBMUIsRUFBZ0NqQixRQUF2QyxDQUF4QyxLQUNLLElBQUkseUJBQWVQLEtBQWYsR0FBdUJ5QixJQUF2QixDQUE0QkQsSUFBNUIsQ0FBSixFQUF1Q0EsT0FBTyx5QkFBZUUsUUFBZixDQUF3QkYsSUFBeEIsRUFBOEJqQixRQUFyQyxDQUF2QyxLQUNBLElBQUkseUJBQWVQLEtBQWYsR0FBdUJ5QixJQUF2QixDQUE0QkQsSUFBNUIsQ0FBSixFQUF1Q0EsT0FBTyx5QkFBZVEsUUFBZixDQUF3QlIsSUFBeEIsRUFBOEJqQixRQUFyQyxDQUF2QyxLQUNBLElBQUksMkJBQWlCUCxLQUFqQixHQUF5QnlCLElBQXpCLENBQThCRCxJQUE5QixDQUFKLEVBQ0w7QUFDQyxRQUFJUyxhQUFhLDJCQUFpQkwsVUFBakIsQ0FBNEJKLElBQTVCLEVBQWtDdEIsTUFBbEMsRUFBMENKLElBQTFDLENBQWpCO0FBQ0EsUUFBSSxPQUFPbUMsVUFBUCxLQUFzQixXQUExQixFQUF1QyxNQUFNLDhCQUE4QlQsSUFBOUIsR0FBcUMsZUFBM0M7QUFDdkNBLFdBQU9TLFdBQVcxQixRQUFsQjtBQUNBQyxnQkFBWSxtQkFBU3FCLGNBQVQsQ0FBd0JyQixTQUF4QixFQUFtQ3lCLFdBQVd6QixTQUE5QyxDQUFaO0FBQ0EsSUFOSSxNQU9BLElBQUksMEJBQWdCUixLQUFoQixHQUF3QnlCLElBQXhCLENBQTZCRCxJQUE3QixDQUFKLEVBQ0w7QUFDQyxRQUFJVSxXQUFXLDBCQUFnQk4sVUFBaEIsQ0FBMkJKLElBQTNCLEVBQWlDdEIsTUFBakMsRUFBeUNKLElBQXpDLENBQWY7QUFDQSxRQUFJLE9BQU9vQyxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDLE1BQU0sOEJBQThCVixJQUE5QixHQUFxQyxjQUEzQztBQUNyQ0EsV0FBT1UsU0FBUzNCLFFBQWhCO0FBQ0FDLGdCQUFZLG1CQUFTcUIsY0FBVCxDQUF3QnJCLFNBQXhCLEVBQW1DMEIsU0FBUzFCLFNBQTVDLENBQVo7QUFDQSxJQU5JLE1BT0EsSUFBSSx5QkFBZVIsS0FBZixHQUF1QnlCLElBQXZCLENBQTRCRCxJQUE1QixDQUFKLEVBQ0w7QUFDQyxRQUFJVyxhQUFhLHlCQUFlQyxRQUFmLENBQXdCWixJQUF4QixFQUE4QnRCLE1BQTlCLEVBQXNDSixJQUF0QyxFQUE0Q0ssS0FBNUMsQ0FBakI7QUFDQSxRQUFJLE9BQU9nQyxVQUFQLEtBQXNCLFdBQTFCLEVBQXVDLE1BQU0sOEJBQThCWCxJQUE5QixHQUFxQyxhQUEzQztBQUN2Q0EsV0FBT1csV0FBVzVCLFFBQWxCO0FBQ0FDLGdCQUFZLG1CQUFTcUIsY0FBVCxDQUF3QnJCLFNBQXhCLEVBQW1DMkIsV0FBVzNCLFNBQTlDLENBQVo7QUFDQSxJQU5JLE1BT0EsSUFBSSx3QkFBY1IsS0FBZCxHQUFzQnlCLElBQXRCLENBQTJCRCxJQUEzQixDQUFKLEVBQ0w7QUFDQyxRQUFJYSxZQUFZLHdCQUFjQyxPQUFkLENBQXNCZCxJQUF0QixFQUE0QnRCLE1BQTVCLEVBQW9DSixJQUFwQyxDQUFoQjtBQUNBLFFBQUksT0FBT3VDLFNBQVAsS0FBcUIsV0FBekIsRUFBc0MsTUFBTSw4QkFBOEJiLElBQTlCLEdBQXFDLFlBQTNDO0FBQ3RDQSxXQUFPYSxVQUFVOUIsUUFBakI7QUFDQUMsZ0JBQVksbUJBQVNxQixjQUFULENBQXdCckIsU0FBeEIsRUFBbUM2QixVQUFVN0IsU0FBN0MsQ0FBWjtBQUNBLElBTkksTUFPQSxJQUFJWCxlQUFlRyxLQUFmLEdBQXVCeUIsSUFBdkIsQ0FBNEJELElBQTVCLENBQUosRUFDTDtBQUNDLFFBQUllLFlBQVkxQyxlQUFlUSxRQUFmLENBQXdCbUIsSUFBeEIsRUFBOEJ0QixNQUE5QixFQUFzQ0osSUFBdEMsQ0FBaEI7QUFDQSxRQUFJLE9BQU95QyxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDLE1BQU0sOEJBQThCZixJQUE5QixHQUFxQyxhQUEzQztBQUN0Q0EsV0FBT2UsVUFBVWhDLFFBQWpCO0FBQ0FDLGdCQUFZLG1CQUFTcUIsY0FBVCxDQUF3QnJCLFNBQXhCLEVBQW1DK0IsVUFBVS9CLFNBQTdDLENBQVo7QUFDQSxJQU5JLE1BT0FnQixPQUFPZ0IsU0FBUDs7QUFFTHBCLFVBQU9FLElBQVAsSUFBZUUsSUFBZjtBQUNBOztBQUVELFNBQU8sRUFBQ2pCLFVBQVVhLE1BQVgsRUFBbUJaLFdBQVdBLFNBQTlCLEVBQVA7QUFDQSxFOzs7OztrQkE1SG1CWCxjIiwiZmlsZSI6Im9iamVjdC5yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyLmpzJ1xuaW1wb3J0IFN0cmluZ1Jlc29sdmVyIGZyb20gJy4vc3RyaW5nLnJlc29sdmVyLmpzJ1xuaW1wb3J0IE51bWJlclJlc29sdmVyIGZyb20gJy4vbnVtYmVyLnJlc29sdmVyLmpzJ1xuaW1wb3J0IEJvb2xlYW5SZXNvbHZlciBmcm9tICcuL2Jvb2xlYW4ucmVzb2x2ZXIuanMnXG5pbXBvcnQgUHJvcGVydHlSZXNvbHZlciBmcm9tICcuL3Byb3BlcnR5LnJlc29sdmVyLmpzJ1xuaW1wb3J0IFBoYW50b21SZXNvbHZlciBmcm9tICcuL3BoYW50b20ucmVzb2x2ZXIuanMnXG5pbXBvcnQgTWV0aG9kUmVzb2x2ZXIgZnJvbSAnLi9tZXRob2QucmVzb2x2ZXIuanMnXG5pbXBvcnQgQXJyYXlSZXNvbHZlciBmcm9tICcuL2FycmF5LnJlc29sdmVyLmpzJ1xuXG4vKipcbiAqIE9iamVjdCBSZXNvbHZlclxuICogUmVzb2x2ZXMgZGF0YSBhcyBvYmplY3Qgd2l0aCBsaXRlcmFscyBvciBtb2RlbCBwcm9wZXJ0aWVzXG4gKlxuICogSW5oZXJpdHNcbiAqXG4gKiBwcm9wZXJ0eTogZGF0YVxuICogbWV0aG9kOiBkZXRlY3QoZGF0YSkgeyByZXR1cm4gYm9vbCB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVzb2x2ZXIge1xuXHRjb25zdHJ1Y3Rvcihub2RlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9ICdvYmplY3QnO1xuXHRcdHRoaXMucmVnZXggPSBPYmplY3RSZXNvbHZlci5yZWdleCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJlc29sdmUoKVxuXHQgKiBSZXNvbHZlIGRhdGEgdG8gYSBzdHJpbmcsIHNldCBhbnkgb2JzZXJ2YWJsZXMgb24gZGF0YVxuXHQgKi9cblx0cmVzb2x2ZShvYmplY3QsIGRlbGF5KSB7XG5cdFx0dmFyIHJlcyA9IE9iamVjdFJlc29sdmVyLnRvT2JqZWN0KHRoaXMuZGF0YSwgb2JqZWN0LCB0aGlzLm5vZGUsIGRlbGF5KTtcblx0XHR0aGlzLnJlc29sdmVkID0gcmVzLnJlc29sdmVkO1xuXHRcdHRoaXMub2JzZXJ2ZXJzID0gcmVzLm9ic2VydmVycztcblx0fVxuXG5cdC8qKlxuXHQgKiBzdGF0aWMgcmVnZXgoKVxuXHQgKiB0dXJucyBhIHBhdGggYW5kIG9iamVjdCB0byBhIHByb3BlcnR5IHZhbHVlLCByZXR1cm5pbmcgbGlzdCBvZiBvYnNlcnZlcnMgb24gYW55IGZvdW5kIHByb3BlcnRpZXNcblx0ICogQHJldHVybiBvYmplY3QgcmVnZXggVGhlIHJlZ2V4IHVzZWQgdG8gdmFsaWRhdGUgaWYgb2YgdHlwZSBvciBub3Rcblx0ICovXG5cdHN0YXRpYyByZWdleCgpIHtcblx0XHRyZXR1cm4gL15cXHt7MX1cXHM/KChcXCd7MX1bXlxcJ10rXFwnezF9fFthLXpBLVpfXSt8W2EtekEtWl9dezF9W14sXStbYS16QS1aX1xcXV17MX18KVxccz86ezF9XFxzPyhbMC05XSt8XFwnezF9W15cXCddK1xcJ3sxfXxbYS16QS1aX10rfFthLXpBLVpfXFwkXXsxfVteLF0rW2EtekEtWjAtOV9cXF1dezF9fFxcW3sxfS4qXFxdezF9fFxce3sxfS4qXFx9ezF9fFthLXpBLVpdezF9W2EtekEtWjAtOV9dKygoXFwuW2EtekEtWl17MX1bYS16QS1aMC05X10rKXwoXFxbKFswLTldK3xbYS16QS1aX117MX1bYS16QS1aMC05Xy5cXFtcXCdcXF1dKylcXF0pfChcXFtcXCdbXlxcW1xcXVxcJ10rXFwnXFxdKSkqXFwoezF9W15cXChcXCldKlxcKXsxfSlcXHM/LD9cXHM/KSpcXHM/XFx9ezF9JC87XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHRvT2JqZWN0KClcblx0ICogdHVybnMgYSBkYXRhIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGF0YSBUaGUgZGF0YSB0byByZXNvbHZlIG9uIHRoZSBvYmplY3Rcblx0ICogQHBhcmFtIG9iamVjdCBvYmplY3QgVGhlIG9iamVjdCB0byByZXNvbHZlIHRoZSBkYXRhIG9uXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b09iamVjdChkYXRhLCBvYmplY3QsIG5vZGUsIGRlbGF5KSB7XG5cdFx0Ly8gc3BsaXQgYnkgY29tbWEgYnV0IGJlIGNhcmVmdWxsIG5vdCB0byBicmVhayBuZXN0ZWQgZGF0YVxuXHRcdGRhdGEgPSBkYXRhLnRyaW0oKTtcblx0XHR2YXIgcGFydHMgPSBkYXRhLnN1YnN0cmluZygxLCBkYXRhLmxlbmd0aCAtMSkuc3BsaXQoJywnKTtcblx0XHR2YXIgdmFsdWVzID0gW3BhcnRzWzBdXTtcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdHZhciByYiA9ICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXCgvZykgfHwgW10pLmxlbmd0aCA9PSAodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5tYXRjaCgvXFwpL2cpIHx8IFtdKS5sZW5ndGg7XG5cdFx0XHR2YXIgc2IgPSAodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxbL2cpIHx8IFtdKS5sZW5ndGggPT0gKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xcXS9nKSB8fCBbXSkubGVuZ3RoO1xuXHRcdFx0dmFyIG1iID0gKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xcey9nKSB8fCBbXSkubGVuZ3RoID09ICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXH0vZykgfHwgW10pLmxlbmd0aDtcblxuXHRcdFx0aWYgKHJiICYmIHNiICYmIG1iKSB2YWx1ZXNbdmFsdWVzLmxlbmd0aF0gPSBwYXJ0c1tpXTtcblx0XHRcdGVsc2UgdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSArPSAnLCcgKyBwYXJ0c1tpXTtcblx0XHR9XG5cblx0XHQvLyB3b3JrIHRocm91Z2ggc2VwZXJhdGVkIGRhdGEgcmVzb2x2aW5nIG9yIHB1c2hpbmcgZm9yIGZ1cnRoZXIgYW5hbHlzaXNcblx0XHR2YXIgb2JzZXJ2ZXJzID0gW107XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaWkgPSAwOyBpaSA8IHZhbHVlcy5sZW5ndGg7IGlpKyspXG5cdFx0e1xuXHRcdFx0dmFsdWVzW2lpXSA9IHZhbHVlc1tpaV0udHJpbSgpO1xuXG5cdFx0XHQvLyBzcGxpdCBieSAnOicgcHJlc2VydmluZyBkYXRhIGluIHNlY29uZCBwYXJ0XG5cdFx0XHR2YXIgdktleSA9IHZhbHVlc1tpaV0uc3Vic3RyaW5nKDAsIHZhbHVlc1tpaV0uaW5kZXhPZignOicpKS50cmltKCk7XG5cdFx0XHR2YXIgdlZhbCA9IHZhbHVlc1tpaV0uc3Vic3RyaW5nKHZhbHVlc1tpaV0uaW5kZXhPZignOicpICsxLCB2YWx1ZXNbaWldLmxlbmd0aCkudHJpbSgpO1xuXG5cdFx0XHQvLyByZXNvbHZlIGtleVxuXHRcdFx0aWYgKFN0cmluZ1Jlc29sdmVyLnJlZ2V4KCkudGVzdCh2S2V5KSkgdktleSA9IFN0cmluZ1Jlc29sdmVyLnRvU3RyaW5nKHZLZXkpLnJlc29sdmVkO1xuXHRcdFx0ZWxzZSBpZiAoUHJvcGVydHlSZXNvbHZlci5yZWdleCgpLnRlc3QodktleSkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBwcm9wS2V5UmVzID0gUHJvcGVydHlSZXNvbHZlci50b1Byb3BlcnR5KHZLZXksIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcHJvcEtleVJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2S2V5ICsgJ1wiIHRvIHByb3BlcnR5Jztcblx0XHRcdFx0dktleSA9IHByb3BLZXlSZXM7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcHJvcEtleVJlcy5vYnNlcnZlcnMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoUGhhbnRvbVJlc29sdmVyLnJlZ2V4KCkudGVzdCh2S2V5KSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIHBoS2V5UmVzID0gUGhhbnRvbVJlc29sdmVyLnRvUHJvcGVydHkodktleSwgb2JqZWN0LCBub2RlKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBwaEtleVJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2S2V5ICsgJ1wiIHRvIHBoYW50b20nO1xuXHRcdFx0XHR2S2V5ID0gcGhLZXlSZXMucmVzb2x2ZWQ7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcGhLZXlSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgdktleSA9ICd1bmRlZmluZWQnO1xuXG5cdFx0XHQvLyByZXNvbHZlIHZhbHVlXG5cdFx0XHRpZiAoQm9vbGVhblJlc29sdmVyLnJlZ2V4KCkudGVzdCh2VmFsKSkgdlZhbCA9IEJvb2xlYW5SZXNvbHZlci50b0Jvb2xlYW4odlZhbCkucmVzb2x2ZWQ7XG5cdFx0XHRlbHNlIGlmIChTdHJpbmdSZXNvbHZlci5yZWdleCgpLnRlc3QodlZhbCkpIHZWYWwgPSBTdHJpbmdSZXNvbHZlci50b1N0cmluZyh2VmFsKS5yZXNvbHZlZDtcblx0XHRcdGVsc2UgaWYgKE51bWJlclJlc29sdmVyLnJlZ2V4KCkudGVzdCh2VmFsKSkgdlZhbCA9IE51bWJlclJlc29sdmVyLnRvTnVtYmVyKHZWYWwpLnJlc29sdmVkO1xuXHRcdFx0ZWxzZSBpZiAoUHJvcGVydHlSZXNvbHZlci5yZWdleCgpLnRlc3QodlZhbCkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBwcm9wVmFsUmVzID0gUHJvcGVydHlSZXNvbHZlci50b1Byb3BlcnR5KHZWYWwsIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcHJvcFZhbFJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2VmFsICsgJ1wiIHRvIHByb3BlcnR5Jztcblx0XHRcdFx0dlZhbCA9IHByb3BWYWxSZXMucmVzb2x2ZWQ7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcHJvcFZhbFJlcy5vYnNlcnZlcnMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoUGhhbnRvbVJlc29sdmVyLnJlZ2V4KCkudGVzdCh2VmFsKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIHBoVmFsUmVzID0gUGhhbnRvbVJlc29sdmVyLnRvUHJvcGVydHkodlZhbCwgb2JqZWN0LCBub2RlKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBwaFZhbFJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2VmFsICsgJ1wiIHRvIHBoYW50b20nO1xuXHRcdFx0XHR2VmFsID0gcGhWYWxSZXMucmVzb2x2ZWQ7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcGhWYWxSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKE1ldGhvZFJlc29sdmVyLnJlZ2V4KCkudGVzdCh2VmFsKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG1ldGhWYWxSZXMgPSBNZXRob2RSZXNvbHZlci50b01ldGhvZCh2VmFsLCBvYmplY3QsIG5vZGUsIGRlbGF5KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZXRoVmFsUmVzID09PSAndW5kZWZpbmVkJykgdGhyb3cgJ0NvdWxkIG5vdCByZXNvbHZlIGRhdGE6IFwiJyArIHZWYWwgKyAnXCIgdG8gbWV0aG9kJztcblx0XHRcdFx0dlZhbCA9IG1ldGhWYWxSZXMucmVzb2x2ZWQ7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgbWV0aFZhbFJlcy5vYnNlcnZlcnMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoQXJyYXlSZXNvbHZlci5yZWdleCgpLnRlc3QodlZhbCkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBhcnJWYWxSZXMgPSBBcnJheVJlc29sdmVyLnRvQXJyYXkodlZhbCwgb2JqZWN0LCBub2RlKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBhcnJWYWxSZXMgPT09ICd1bmRlZmluZWQnKSB0aHJvdyAnQ291bGQgbm90IHJlc29sdmUgZGF0YTogXCInICsgdlZhbCArICdcIiB0byBhcnJheSc7XG5cdFx0XHRcdHZWYWwgPSBhcnJWYWxSZXMucmVzb2x2ZWQ7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgYXJyVmFsUmVzLm9ic2VydmVycyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChPYmplY3RSZXNvbHZlci5yZWdleCgpLnRlc3QodlZhbCkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBvYmpWYWxSZXMgPSBPYmplY3RSZXNvbHZlci50b09iamVjdCh2VmFsLCBvYmplY3QsIG5vZGUpO1xuXHRcdFx0XHRpZiAodHlwZW9mIG9ialZhbFJlcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93ICdDb3VsZCBub3QgcmVzb2x2ZSBkYXRhOiBcIicgKyB2VmFsICsgJ1wiIHRvIG9iamVjdCc7XG5cdFx0XHRcdHZWYWwgPSBvYmpWYWxSZXMucmVzb2x2ZWQ7XG5cdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgb2JqVmFsUmVzLm9ic2VydmVycyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHZWYWwgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHJlc3VsdFt2S2V5XSA9IHZWYWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtyZXNvbHZlZDogcmVzdWx0LCBvYnNlcnZlcnM6IG9ic2VydmVyc307XG5cdH1cbn1cbiJdfQ==
},{"./array.resolver.js":48,"./boolean.resolver.js":49,"./method.resolver.js":50,"./number.resolver.js":51,"./phantom.resolver.js":53,"./property.resolver.js":54,"./resolver.js":55,"./string.resolver.js":56}],53:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Phantom Property Resolver
 * Resolves phantom property to real property based on parent iteration.
 * Phantom properties proceed with a $ and must resolve to an itterable instance
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var PhantomResolver = function (_Resolver) {
	_inherits(PhantomResolver, _Resolver);

	function PhantomResolver(node) {
		_classCallCheck(this, PhantomResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'phantom';
		_this.regex = PhantomResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	PhantomResolver.prototype.resolve = function resolve(object) {
		var res = PhantomResolver.toProperty(this.data, object, this.node);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * regex used to test resolvable data on
  * @return object regex The regex used to validate if of type or not
  */


	PhantomResolver.regex = function regex() {
		return (/^\${1}[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|\$?[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*$/
		);
	};

	/**
  * static toProperty()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string path The path to resolve on the object
  * @param object object The object to resolve the path on
  * @param HTMLElement node The node that the property is being generated for (allows look back for phantom)
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	PhantomResolver.toProperty = function toProperty(data, object, node) {
		data = data.trim();
		var dataPhantom = data.split(/\.|\[/).shift();
		var dataPath = data.substring(dataPhantom.length, data.length);

		var result = { resolved: undefined, observers: [] };
		if (!node || !node.parentNode) return result;

		// find closest phantom up nodes
		var sniffed = node;
		while (sniffed && sniffed.tagName !== 'BODY') {
			if (sniffed && sniffed.phantom && (sniffed.phantom.keyName == dataPhantom || sniffed.phantom.valueName == dataPhantom)) break;
			sniffed = sniffed.parentNode;
		}
		if (!sniffed || !sniffed.phantom) return result;

		// now we can analyse it and turn it into the actual object path if needed
		if (dataPhantom == sniffed.phantom.keyName) {
			result.resolved = sniffed.phantom.iterationKey;
		} else if (dataPhantom == sniffed.phantom.valueName) {
			var cache = -1;
			var name = '';
			for (var key in sniffed.phantom.observers) {
				var c = sniffed.phantom.observers[key].match(/\./g) ? sniffed.phantom.observers[key].match(/\./g).length : 0;
				name = c > cache ? sniffed.phantom.observers[key] : name;
				cache = c > cache ? c : cache;
				result.observers.push(sniffed.phantom.observers[key]);
			}
			result.observers.push(name + '.' + sniffed.phantom.iterationKey);

			// get actual from initial phantom value
			var propRes = _propertyResolver2.default.toProperty(name + '.' + sniffed.phantom.iterationKey, object, node);
			result.resolved = typeof propRes.resolved !== 'undefined' ? propRes.resolved : undefined;

			// now resolve property
			if (propRes.observers.length > 0) for (var key2 in propRes.observers) {
				if (result.observers.indexOf(propRes.observers[key2]) < 0) result.observers.push(propRes.observers[key2]);
			}if (dataPath.length > 0) result = _propertyResolver2.default.toProperty(name + '.' + sniffed.phantom.iterationKey + dataPath, object, node);
		}

		return result;
	};

	return PhantomResolver;
}(_resolver2.default);

exports.default = PhantomResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoYW50b20ucmVzb2x2ZXIuanMiXSwibmFtZXMiOlsiUGhhbnRvbVJlc29sdmVyIiwibm9kZSIsIm5hbWUiLCJyZWdleCIsInJlc29sdmUiLCJvYmplY3QiLCJyZXMiLCJ0b1Byb3BlcnR5IiwiZGF0YSIsInJlc29sdmVkIiwib2JzZXJ2ZXJzIiwidHJpbSIsImRhdGFQaGFudG9tIiwic3BsaXQiLCJzaGlmdCIsImRhdGFQYXRoIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwicmVzdWx0IiwidW5kZWZpbmVkIiwicGFyZW50Tm9kZSIsInNuaWZmZWQiLCJ0YWdOYW1lIiwicGhhbnRvbSIsImtleU5hbWUiLCJ2YWx1ZU5hbWUiLCJpdGVyYXRpb25LZXkiLCJjYWNoZSIsImtleSIsImMiLCJtYXRjaCIsInB1c2giLCJwcm9wUmVzIiwia2V5MiIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQVVxQkEsZTs7O0FBQ3BCLDBCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0NBQ2pCLG9CQURpQjs7QUFFakIsUUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLFNBQVo7QUFDQSxRQUFLQyxLQUFMLEdBQWFILGdCQUFnQkcsS0FBaEIsRUFBYjtBQUppQjtBQUtqQjs7QUFFRDs7Ozs7OzsyQkFLQUMsTyxvQkFBUUMsTSxFQUFRO0FBQ2YsTUFBSUMsTUFBTU4sZ0JBQWdCTyxVQUFoQixDQUEyQixLQUFLQyxJQUFoQyxFQUFzQ0gsTUFBdEMsRUFBOEMsS0FBS0osSUFBbkQsQ0FBVjtBQUNBLE9BQUtRLFFBQUwsR0FBZ0JILElBQUlHLFFBQXBCO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQkosSUFBSUksU0FBckI7QUFDQSxFOztBQUVEOzs7Ozs7O2lCQUtPUCxLLG9CQUFRO0FBQ2QsU0FBTztBQUFQO0FBQ0EsRTs7QUFFRDs7Ozs7Ozs7OztpQkFRT0ksVSx1QkFBV0MsSSxFQUFN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RixJQUNsQyxJQUFJbEIsU0FBU0UsTUFBVCxHQUFrQixDQUF0QixFQUF5QkMsU0FBUywyQkFBaUJYLFVBQWpCLENBQTRCTCxPQUFPLEdBQVAsR0FBYW1CLFFBQVFFLE9BQVIsQ0FBZ0JHLFlBQTdCLEdBQTRDWCxRQUF4RSxFQUFrRlYsTUFBbEYsRUFBMEZKLElBQTFGLENBQVQ7QUFDNUI7O0FBRUQsU0FBT2lCLE1BQVA7QUFDSCxFOzs7OztrQkE5RW1CbEIsZSIsImZpbGUiOiJwaGFudG9tLnJlc29sdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXIuanMnXG5pbXBvcnQgUHJvcGVydHlSZXNvbHZlciBmcm9tICcuL3Byb3BlcnR5LnJlc29sdmVyLmpzJ1xuXG4vKipcbiAqIFBoYW50b20gUHJvcGVydHkgUmVzb2x2ZXJcbiAqIFJlc29sdmVzIHBoYW50b20gcHJvcGVydHkgdG8gcmVhbCBwcm9wZXJ0eSBiYXNlZCBvbiBwYXJlbnQgaXRlcmF0aW9uLlxuICogUGhhbnRvbSBwcm9wZXJ0aWVzIHByb2NlZWQgd2l0aCBhICQgYW5kIG11c3QgcmVzb2x2ZSB0byBhbiBpdHRlcmFibGUgaW5zdGFuY2VcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnR5OiBkYXRhXG4gKiBtZXRob2Q6IGRldGVjdChkYXRhKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhhbnRvbVJlc29sdmVyIGV4dGVuZHMgUmVzb2x2ZXIge1xuXHRjb25zdHJ1Y3Rvcihub2RlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9ICdwaGFudG9tJztcblx0XHR0aGlzLnJlZ2V4ID0gUGhhbnRvbVJlc29sdmVyLnJlZ2V4KCk7XG5cdH1cblxuXHQvKipcblx0ICogcmVzb2x2ZSgpXG5cdCAqIFJlc29sdmUgZGF0YSB0byBhIHByb3BlcnR5LCBzZXQgYW55IG9ic2VydmFibGVzIG9uIGRhdGFcblx0ICogQHBhcmFtIG9iamVjdCBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHlvdSB3YW50IHRvIHJlc29sdmUgZGF0YSB0b1xuXHQgKi9cblx0cmVzb2x2ZShvYmplY3QpIHtcblx0XHR2YXIgcmVzID0gUGhhbnRvbVJlc29sdmVyLnRvUHJvcGVydHkodGhpcy5kYXRhLCBvYmplY3QsIHRoaXMubm9kZSk7XG5cdFx0dGhpcy5yZXNvbHZlZCA9IHJlcy5yZXNvbHZlZDtcblx0XHR0aGlzLm9ic2VydmVycyA9IHJlcy5vYnNlcnZlcnM7XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHJlZ2V4KClcblx0ICogcmVnZXggdXNlZCB0byB0ZXN0IHJlc29sdmFibGUgZGF0YSBvblxuXHQgKiBAcmV0dXJuIG9iamVjdCByZWdleCBUaGUgcmVnZXggdXNlZCB0byB2YWxpZGF0ZSBpZiBvZiB0eXBlIG9yIG5vdFxuXHQgKi9cblx0c3RhdGljIHJlZ2V4KCkge1xuXHRcdHJldHVybiAvXlxcJHsxfVthLXpBLVpdezF9W2EtekEtWjAtOV9dKygoXFwuW2EtekEtWl17MX1bYS16QS1aMC05X10rKXwoXFxbKFswLTldK3xcXCQ/W2EtekEtWl9dezF9W2EtekEtWjAtOV8uXFxbXFwnXFxdXSspXFxdKXwoXFxbXFwnW15cXFtcXF1cXCddK1xcJ1xcXSkpKiQvO1xuXHR9XG5cblx0LyoqXG5cdCAqIHN0YXRpYyB0b1Byb3BlcnR5KClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgcGF0aCBUaGUgcGF0aCB0byByZXNvbHZlIG9uIHRoZSBvYmplY3Rcblx0ICogQHBhcmFtIG9iamVjdCBvYmplY3QgVGhlIG9iamVjdCB0byByZXNvbHZlIHRoZSBwYXRoIG9uXG5cdCAqIEBwYXJhbSBIVE1MRWxlbWVudCBub2RlIFRoZSBub2RlIHRoYXQgdGhlIHByb3BlcnR5IGlzIGJlaW5nIGdlbmVyYXRlZCBmb3IgKGFsbG93cyBsb29rIGJhY2sgZm9yIHBoYW50b20pXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b1Byb3BlcnR5KGRhdGEsIG9iamVjdCwgbm9kZSkge1xuXHQgICAgZGF0YSA9IGRhdGEudHJpbSgpO1xuXHRcdGxldCBkYXRhUGhhbnRvbSA9IGRhdGEuc3BsaXQoL1xcLnxcXFsvKS5zaGlmdCgpO1xuXHRcdGxldCBkYXRhUGF0aCA9IGRhdGEuc3Vic3RyaW5nKGRhdGFQaGFudG9tLmxlbmd0aCwgZGF0YS5sZW5ndGgpO1xuXG5cdCAgICB2YXIgcmVzdWx0ID0ge3Jlc29sdmVkOiB1bmRlZmluZWQsIG9ic2VydmVyczogW119O1xuXHQgICAgaWYgKCFub2RlIHx8ICFub2RlLnBhcmVudE5vZGUpIHJldHVybiByZXN1bHQ7XG5cblx0ICAgIC8vIGZpbmQgY2xvc2VzdCBwaGFudG9tIHVwIG5vZGVzXG5cdCAgICB2YXIgc25pZmZlZCA9IG5vZGU7XG5cdCAgICB3aGlsZSAoc25pZmZlZCAmJiBzbmlmZmVkLnRhZ05hbWUgIT09ICdCT0RZJylcblx0ICAgIHtcblx0ICAgIFx0aWYgKHNuaWZmZWQgJiYgc25pZmZlZC5waGFudG9tICYmIChzbmlmZmVkLnBoYW50b20ua2V5TmFtZSA9PSBkYXRhUGhhbnRvbSB8fCBzbmlmZmVkLnBoYW50b20udmFsdWVOYW1lID09IGRhdGFQaGFudG9tKSkgYnJlYWs7XG5cdCAgICAgICAgc25pZmZlZCA9IHNuaWZmZWQucGFyZW50Tm9kZTtcblx0ICAgIH1cblx0ICAgIGlmICghc25pZmZlZCB8fCAhc25pZmZlZC5waGFudG9tKSByZXR1cm4gcmVzdWx0O1xuXG5cdCAgICAvLyBub3cgd2UgY2FuIGFuYWx5c2UgaXQgYW5kIHR1cm4gaXQgaW50byB0aGUgYWN0dWFsIG9iamVjdCBwYXRoIGlmIG5lZWRlZFxuXHQgICAgaWYgKGRhdGFQaGFudG9tID09IHNuaWZmZWQucGhhbnRvbS5rZXlOYW1lKSB7XG5cdCAgICBcdHJlc3VsdC5yZXNvbHZlZCA9IHNuaWZmZWQucGhhbnRvbS5pdGVyYXRpb25LZXk7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChkYXRhUGhhbnRvbSA9PSBzbmlmZmVkLnBoYW50b20udmFsdWVOYW1lKSB7XG5cdCAgICAgICAgbGV0IGNhY2hlID0gLTE7XG5cdCAgICAgICAgbGV0IG5hbWUgPSAnJztcblx0ICAgICAgICBmb3IgKHZhciBrZXkgaW4gc25pZmZlZC5waGFudG9tLm9ic2VydmVycykge1xuXHQgICAgICAgICAgICBsZXQgYyA9IHNuaWZmZWQucGhhbnRvbS5vYnNlcnZlcnNba2V5XS5tYXRjaCgvXFwuL2cpID8gc25pZmZlZC5waGFudG9tLm9ic2VydmVyc1trZXldLm1hdGNoKC9cXC4vZykubGVuZ3RoIDogMDtcblx0ICAgICAgICAgICAgbmFtZSA9IGMgPiBjYWNoZSA/IHNuaWZmZWQucGhhbnRvbS5vYnNlcnZlcnNba2V5XSA6IG5hbWU7XG5cdCAgICAgICAgICAgIGNhY2hlID0gYyA+IGNhY2hlID8gYyA6IGNhY2hlO1xuXHQgICAgICAgICAgICByZXN1bHQub2JzZXJ2ZXJzLnB1c2goc25pZmZlZC5waGFudG9tLm9ic2VydmVyc1trZXldKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmVzdWx0Lm9ic2VydmVycy5wdXNoKG5hbWUgKyAnLicgKyBzbmlmZmVkLnBoYW50b20uaXRlcmF0aW9uS2V5KTtcblxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBmcm9tIGluaXRpYWwgcGhhbnRvbSB2YWx1ZVxuXHQgICAgICAgIHZhciBwcm9wUmVzID0gUHJvcGVydHlSZXNvbHZlci50b1Byb3BlcnR5KG5hbWUgKyAnLicgKyBzbmlmZmVkLnBoYW50b20uaXRlcmF0aW9uS2V5LCBvYmplY3QsIG5vZGUpO1xuXHQgICAgICAgIHJlc3VsdC5yZXNvbHZlZCA9IHR5cGVvZiBwcm9wUmVzLnJlc29sdmVkICE9PSAndW5kZWZpbmVkJyA/IHByb3BSZXMucmVzb2x2ZWQgOiB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIG5vdyByZXNvbHZlIHByb3BlcnR5XG5cdCAgICAgICAgaWYgKHByb3BSZXMub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIGZvciAodmFyIGtleTIgaW4gcHJvcFJlcy5vYnNlcnZlcnMpIGlmIChyZXN1bHQub2JzZXJ2ZXJzLmluZGV4T2YocHJvcFJlcy5vYnNlcnZlcnNba2V5Ml0pIDwgMCkgcmVzdWx0Lm9ic2VydmVycy5wdXNoKHByb3BSZXMub2JzZXJ2ZXJzW2tleTJdKTtcblx0ICAgICAgICBpZiAoZGF0YVBhdGgubGVuZ3RoID4gMCkgcmVzdWx0ID0gUHJvcGVydHlSZXNvbHZlci50b1Byb3BlcnR5KG5hbWUgKyAnLicgKyBzbmlmZmVkLnBoYW50b20uaXRlcmF0aW9uS2V5ICsgZGF0YVBhdGgsIG9iamVjdCwgbm9kZSk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdH1cbn1cbiJdfQ==
},{"./property.resolver.js":54,"./resolver.js":55}],54:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Property Resolver
 * Resolves data to object, sets observers on any paths found
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var PropertyResolver = function (_Resolver) {
	_inherits(PropertyResolver, _Resolver);

	function PropertyResolver(node) {
		_classCallCheck(this, PropertyResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'property';
		_this.regex = PropertyResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	PropertyResolver.prototype.resolve = function resolve(object) {
		var res = PropertyResolver.toProperty(this.data, object, this.node);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	PropertyResolver.regex = function regex() {
		return (/^[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|\$?[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*$/
		);
	};

	/**
  * static toProperty()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string path The path to resolve on the object
  * @param object object The object to resolve the path on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	PropertyResolver.toProperty = function toProperty(data, object, node) {
		// split by dot or open square bracket but be carefull not to break nested data
		data = data.trim();
		var parts = data.replace(/\[/g, '.[').split(/\./);
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;

			if (sb) values[values.length] = parts[i];else {
				values[values.length - 1] += '.' + parts[i];
				values[values.length - 1] = values[values.length - 1].replace(/\.\[/g, '[');
			}
		}

		// work through seperated data resolving or pushing for further analysis
		var observable = '';
		var observers = [];
		var result = object;
		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();

			if (values[ii].indexOf("[") == 0) {
				if (/^\[\s*[0-9]+\s*\]$/.test(values[ii])) {
					// index
					var key = parseInt(values[ii].replace(/\[|\]/g, '').trim());
					result = !result ? undefined : result[key];
					observable += '.' + key;
				} else if (/^\[\s*\'(.*)\'\s*\]$/.test(values[ii])) {
					// key
					var _key = values[ii].replace(/\'|\[|\]/g, '').trim();
					result = !result ? undefined : result[_key];
					observable += '.' + _key;
				} else if (_phantomResolver2.default.regex().test(values[ii].substring(1, values[ii].length - 1))) {
					var phRes = _phantomResolver2.default.toProperty(values[ii].substring(1, values[ii].length - 1), object, node);
					result = phRes.resolved ? result[phRes.resolved] : undefined;
					observable += '.' + phRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, phRes.observers);
				} else {
					var propRes = PropertyResolver.toProperty(values[ii].substring(1, values[ii].length - 1), object, node);
					result = propRes.resolved && result ? result[propRes.resolved] : undefined;
					observable += '.' + propRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, propRes.observers);
				}
			} else {
				result = result ? result[values[ii]] : undefined; // removing array items
				observable += '.' + values[ii];
			}

			// compact observable path to any other observables found
			if (observable) observers.push(observable.charAt(0) === '.' ? observable.substring(1, observable.length) : observable);
		}

		return { resolved: result, observers: observers };
	};

	return PropertyResolver;
}(_resolver2.default);

exports.default = PropertyResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LnJlc29sdmVyLmpzIl0sIm5hbWVzIjpbIlByb3BlcnR5UmVzb2x2ZXIiLCJub2RlIiwibmFtZSIsInJlZ2V4IiwicmVzb2x2ZSIsIm9iamVjdCIsInJlcyIsInRvUHJvcGVydHkiLCJkYXRhIiwicmVzb2x2ZWQiLCJvYnNlcnZlcnMiLCJ0cmltIiwicGFydHMiLCJyZXBsYWNlIiwic3BsaXQiLCJ2YWx1ZXMiLCJpIiwibGVuZ3RoIiwic2IiLCJtYXRjaCIsIm9ic2VydmFibGUiLCJyZXN1bHQiLCJpaSIsImluZGV4T2YiLCJ0ZXN0Iiwia2V5IiwicGFyc2VJbnQiLCJ1bmRlZmluZWQiLCJzdWJzdHJpbmciLCJwaFJlcyIsIm1lcmdlT2JzZXJ2ZXJzIiwicHJvcFJlcyIsInB1c2giLCJjaGFyQXQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxnQjs7O0FBQ3BCLDJCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0NBQ2pCLG9CQURpQjs7QUFFakIsUUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsUUFBS0MsSUFBTCxHQUFZLFVBQVo7QUFDQSxRQUFLQyxLQUFMLEdBQWFILGlCQUFpQkcsS0FBakIsRUFBYjtBQUppQjtBQUtqQjs7QUFFRDs7Ozs7Ozs0QkFLQUMsTyxvQkFBUUMsTSxFQUFRO0FBQ2YsTUFBSUMsTUFBTU4saUJBQWlCTyxVQUFqQixDQUE0QixLQUFLQyxJQUFqQyxFQUF1Q0gsTUFBdkMsRUFBK0MsS0FBS0osSUFBcEQsQ0FBVjtBQUNBLE9BQUtRLFFBQUwsR0FBZ0JILElBQUlHLFFBQXBCO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQkosSUFBSUksU0FBckI7QUFDQSxFOztBQUVEOzs7Ozs7O2tCQUtPUCxLLG9CQUFRO0FBQ2QsU0FBTztBQUFQO0FBQ0EsRTs7QUFFRDs7Ozs7Ozs7O2tCQU9PSSxVLHVCQUFXQyxJLEVBQU1ILE0sRUFBUUosSSxFQUFNO0FBQ3JDO0FB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QyxpQkFBWSxtQkFBU29CLGNBQVQsQ0FBd0JwQixTQUF4QixFQUFtQ21CLE1BQU1uQixTQUF6QyxDQUFaO0FBQ0EsS0FOSSxNQVFMO0FBQ0MsU0FBSXFCLFVBQVUvQixpQkFBaUJPLFVBQWpCLENBQTRCUSxPQUFPTyxFQUFQLEVBQVdNLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0JiLE9BQU9PLEVBQVAsRUFBV0wsTUFBWCxHQUFtQixDQUEzQyxDQUE1QixFQUEyRVosTUFBM0UsRUFBbUZKLElBQW5GLENBQWQ7QUFDQW9CLGNBQVNVLFFBQVF0QixRQUFSLElBQW9CWSxNQUFwQixHQUE2QkEsT0FBT1UsUUFBUXRCLFFBQWYsQ0FBN0IsR0FBd0RrQixTQUFqRTtBQUNBUCxtQkFBYyxNQUFNVyxRQUFRdEIsUUFBNUI7QUFDQUMsaUJBQVksbUJBQVNvQixjQUFULENBQXdCcEIsU0FBeEIsRUFBbUNxQixRQUFRckIsU0FBM0MsQ0FBWjtBQUNBO0FBQ0QsSUE5QkQsTUFnQ0E7QUFDQ1csYUFBU0EsU0FBU0EsT0FBT04sT0FBT08sRUFBUCxDQUFQLENBQVQsR0FBOEJLLFNBQXZDLENBREQsQ0FDbUQ7QUFDbERQLGtCQUFjLE1BQU1MLE9BQU9PLEVBQVAsQ0FBcEI7QUFDQTs7QUFFRDtBQUNBLE9BQUlGLFVBQUosRUFBZ0JWLFVBQVVzQixJQUFWLENBQWVaLFdBQVdhLE1BQVgsQ0FBa0IsQ0FBbEIsTUFBeUIsR0FBekIsR0FBK0JiLFdBQVdRLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0JSLFdBQVdILE1BQW5DLENBQS9CLEdBQTRFRyxVQUEzRjtBQUNoQjs7QUFFRCxTQUFPLEVBQUNYLFVBQVVZLE1BQVgsRUFBbUJYLFdBQVdBLFNBQTlCLEVBQVA7QUFDQSxFOzs7OztrQkF0R21CVixnQiIsImZpbGUiOiJwcm9wZXJ0eS5yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyLmpzJ1xuaW1wb3J0IFBoYW50b21SZXNvbHZlciBmcm9tICcuL3BoYW50b20ucmVzb2x2ZXIuanMnXG5cbi8qKlxuICogUHJvcGVydHkgUmVzb2x2ZXJcbiAqIFJlc29sdmVzIGRhdGEgdG8gb2JqZWN0LCBzZXRzIG9ic2VydmVycyBvbiBhbnkgcGF0aHMgZm91bmRcbiAqXG4gKiBJbmhlcml0c1xuICpcbiAqIHByb3BlcnR5OiBkYXRhXG4gKiBtZXRob2Q6IGRldGVjdChkYXRhKSB7IHJldHVybiBib29sIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlSZXNvbHZlciBleHRlbmRzIFJlc29sdmVyIHtcblx0Y29uc3RydWN0b3Iobm9kZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSAncHJvcGVydHknO1xuXHRcdHRoaXMucmVnZXggPSBQcm9wZXJ0eVJlc29sdmVyLnJlZ2V4KCk7XG5cdH1cblxuXHQvKipcblx0ICogcmVzb2x2ZSgpXG5cdCAqIFJlc29sdmUgZGF0YSB0byBhIHByb3BlcnR5LCBzZXQgYW55IG9ic2VydmFibGVzIG9uIGRhdGFcblx0ICogQHBhcmFtIG9iamVjdCBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHlvdSB3YW50IHRvIHJlc29sdmUgZGF0YSB0b1xuXHQgKi9cblx0cmVzb2x2ZShvYmplY3QpIHtcblx0XHR2YXIgcmVzID0gUHJvcGVydHlSZXNvbHZlci50b1Byb3BlcnR5KHRoaXMuZGF0YSwgb2JqZWN0LCB0aGlzLm5vZGUpO1xuXHRcdHRoaXMucmVzb2x2ZWQgPSByZXMucmVzb2x2ZWQ7XG5cdFx0dGhpcy5vYnNlcnZlcnMgPSByZXMub2JzZXJ2ZXJzO1xuXHR9XG5cblx0LyoqXG5cdCAqIHN0YXRpYyByZWdleCgpXG5cdCAqIHR1cm5zIGEgcGF0aCBhbmQgb2JqZWN0IHRvIGEgcHJvcGVydHkgdmFsdWUsIHJldHVybmluZyBsaXN0IG9mIG9ic2VydmVycyBvbiBhbnkgZm91bmQgcHJvcGVydGllc1xuXHQgKiBAcmV0dXJuIG9iamVjdCByZWdleCBUaGUgcmVnZXggdXNlZCB0byB2YWxpZGF0ZSBpZiBvZiB0eXBlIG9yIG5vdFxuXHQgKi9cblx0c3RhdGljIHJlZ2V4KCkge1xuXHRcdHJldHVybiAvXlthLXpBLVpdezF9W2EtekEtWjAtOV9dKygoXFwuW2EtekEtWl17MX1bYS16QS1aMC05X10rKXwoXFxbKFswLTldK3xcXCQ/W2EtekEtWl9dezF9W2EtekEtWjAtOV8uXFxbXFwnXFxdXSspXFxdKXwoXFxbXFwnW15cXFtcXF1cXCddK1xcJ1xcXSkpKiQvO1xuXHR9XG5cblx0LyoqXG5cdCAqIHN0YXRpYyB0b1Byb3BlcnR5KClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgcGF0aCBUaGUgcGF0aCB0byByZXNvbHZlIG9uIHRoZSBvYmplY3Rcblx0ICogQHBhcmFtIG9iamVjdCBvYmplY3QgVGhlIG9iamVjdCB0byByZXNvbHZlIHRoZSBwYXRoIG9uXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b1Byb3BlcnR5KGRhdGEsIG9iamVjdCwgbm9kZSkge1xuXHRcdC8vIHNwbGl0IGJ5IGRvdCBvciBvcGVuIHNxdWFyZSBicmFja2V0IGJ1dCBiZSBjYXJlZnVsbCBub3QgdG8gYnJlYWsgbmVzdGVkIGRhdGFcblx0XHRkYXRhID0gZGF0YS50cmltKCk7XG5cdFx0dmFyIHBhcnRzID0gZGF0YS5yZXBsYWNlKC9cXFsvZywgJy5bJykuc3BsaXQoL1xcLi8pO1xuXHRcdHZhciB2YWx1ZXMgPSBbcGFydHNbMF1dO1xuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0dmFyIHNiID0gKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xcWy9nKSB8fCBbXSkubGVuZ3RoID09ICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXF0vZykgfHwgW10pLmxlbmd0aDtcblxuXHRcdFx0aWYgKHNiKSB2YWx1ZXNbdmFsdWVzLmxlbmd0aF0gPSBwYXJ0c1tpXTtcblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0dmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSArPSAnLicgKyBwYXJ0c1tpXTtcblx0XHRcdFx0dmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0ucmVwbGFjZSgvXFwuXFxbL2csICdbJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gd29yayB0aHJvdWdoIHNlcGVyYXRlZCBkYXRhIHJlc29sdmluZyBvciBwdXNoaW5nIGZvciBmdXJ0aGVyIGFuYWx5c2lzXG5cdFx0dmFyIG9ic2VydmFibGUgPSAnJztcblx0XHR2YXIgb2JzZXJ2ZXJzID0gW107XG5cdFx0dmFyIHJlc3VsdCA9IG9iamVjdDtcblx0XHRmb3IgKHZhciBpaSA9IDA7IGlpIDwgdmFsdWVzLmxlbmd0aDsgaWkrKylcblx0XHR7XG5cdFx0XHR2YWx1ZXNbaWldID0gdmFsdWVzW2lpXS50cmltKCk7XG5cblx0XHRcdGlmICh2YWx1ZXNbaWldLmluZGV4T2YoXCJbXCIpID09IDApXG5cdFx0XHR7XG5cdFx0XHRcdGlmICgvXlxcW1xccypbMC05XStcXHMqXFxdJC8udGVzdCh2YWx1ZXNbaWldKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIGluZGV4XG5cdFx0XHRcdFx0bGV0IGtleSA9IHBhcnNlSW50KHZhbHVlc1tpaV0ucmVwbGFjZSgvXFxbfFxcXS9nLCAnJykudHJpbSgpKTtcblx0XHRcdFx0XHRyZXN1bHQgPSAhcmVzdWx0ID8gdW5kZWZpbmVkIDogcmVzdWx0W2tleV07XG5cdFx0XHRcdFx0b2JzZXJ2YWJsZSArPSAnLicgKyBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoL15cXFtcXHMqXFwnKC4qKVxcJ1xccypcXF0kLy50ZXN0KHZhbHVlc1tpaV0pKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8ga2V5XG5cdFx0XHRcdFx0bGV0IGtleSA9IHZhbHVlc1tpaV0ucmVwbGFjZSgvXFwnfFxcW3xcXF0vZywgJycpLnRyaW0oKTtcblx0XHRcdFx0XHRyZXN1bHQgPSAhcmVzdWx0ID8gdW5kZWZpbmVkIDogcmVzdWx0W2tleV07XG5cdFx0XHRcdFx0b2JzZXJ2YWJsZSArPSAnLicgKyBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoUGhhbnRvbVJlc29sdmVyLnJlZ2V4KCkudGVzdCh2YWx1ZXNbaWldLnN1YnN0cmluZygxLCB2YWx1ZXNbaWldLmxlbmd0aCAtMSkpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHBoUmVzID0gUGhhbnRvbVJlc29sdmVyLnRvUHJvcGVydHkodmFsdWVzW2lpXS5zdWJzdHJpbmcoMSwgdmFsdWVzW2lpXS5sZW5ndGggLTEpLCBvYmplY3QsIG5vZGUpO1xuXHRcdFx0XHRcdHJlc3VsdCA9IHBoUmVzLnJlc29sdmVkID8gcmVzdWx0W3BoUmVzLnJlc29sdmVkXSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRvYnNlcnZhYmxlICs9ICcuJyArIHBoUmVzLnJlc29sdmVkO1xuXHRcdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcGhSZXMub2JzZXJ2ZXJzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcHJvcFJlcyA9IFByb3BlcnR5UmVzb2x2ZXIudG9Qcm9wZXJ0eSh2YWx1ZXNbaWldLnN1YnN0cmluZygxLCB2YWx1ZXNbaWldLmxlbmd0aCAtMSksIG9iamVjdCwgbm9kZSk7XG5cdFx0XHRcdFx0cmVzdWx0ID0gcHJvcFJlcy5yZXNvbHZlZCAmJiByZXN1bHQgPyByZXN1bHRbcHJvcFJlcy5yZXNvbHZlZF0gOiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0b2JzZXJ2YWJsZSArPSAnLicgKyBwcm9wUmVzLnJlc29sdmVkO1xuXHRcdFx0XHRcdG9ic2VydmVycyA9IFJlc29sdmVyLm1lcmdlT2JzZXJ2ZXJzKG9ic2VydmVycywgcHJvcFJlcy5vYnNlcnZlcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCA/IHJlc3VsdFt2YWx1ZXNbaWldXSA6IHVuZGVmaW5lZDsgLy8gcmVtb3ZpbmcgYXJyYXkgaXRlbXNcblx0XHRcdFx0b2JzZXJ2YWJsZSArPSAnLicgKyB2YWx1ZXNbaWldO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb21wYWN0IG9ic2VydmFibGUgcGF0aCB0byBhbnkgb3RoZXIgb2JzZXJ2YWJsZXMgZm91bmRcblx0XHRcdGlmIChvYnNlcnZhYmxlKVx0b2JzZXJ2ZXJzLnB1c2gob2JzZXJ2YWJsZS5jaGFyQXQoMCkgPT09ICcuJyA/IG9ic2VydmFibGUuc3Vic3RyaW5nKDEsIG9ic2VydmFibGUubGVuZ3RoKSA6IG9ic2VydmFibGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7cmVzb2x2ZWQ6IHJlc3VsdCwgb2JzZXJ2ZXJzOiBvYnNlcnZlcnN9O1xuXHR9XG59XG4iXX0=
},{"./phantom.resolver.js":53,"./resolver.js":55}],55:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Resolver
 * Generic resolver methods used accross all resolvers
 */
var Resolver = function () {
	function Resolver() {
		_classCallCheck(this, Resolver);

		this.node = undefined;
		this.name = undefined;
		this.regex = undefined;
	}

	/**
  * detect()
  * is data resolvable to resolver
  * @param string data The data string to try and resolve to type
  * @return bool True on resolvable, false on fail.
  */


	Resolver.prototype.detect = function detect(data) {
		this.data = data;
		return this.regex.test(this.data);
	};

	// join two observer arrays togethor without duplicating


	Resolver.mergeObservers = function mergeObservers(obsA, obsB) {
		for (var i = 0; i < obsB.length; i++) {
			if (obsA.indexOf(obsB[i]) < 0) obsA.push(obsB[i]);
		}

		return obsA;
	};

	return Resolver;
}();

exports.default = Resolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc29sdmVyLmpzIl0sIm5hbWVzIjpbIlJlc29sdmVyIiwibm9kZSIsInVuZGVmaW5lZCIsIm5hbWUiLCJyZWdleCIsImRldGVjdCIsImRhdGEiLCJ0ZXN0IiwibWVyZ2VPYnNlcnZlcnMiLCJvYnNBIiwib2JzQiIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7SUFJcUJBLFE7QUFDcEIscUJBQWM7QUFBQTs7QUFDYixPQUFLQyxJQUFMLEdBQVlDLFNBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlELFNBQVo7QUFDQSxPQUFLRSxLQUFMLEdBQWFGLFNBQWI7QUFDQTs7QUFFRDs7Ozs7Ozs7b0JBTUFHLE0sbUJBQU9DLEksRUFBTTtBQUNaLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQU8sS0FBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCLEtBQUtELElBQXJCLENBQVA7QUFDQSxFOztBQUVEOzs7VUFDT0UsYywyQkFBZUMsSSxFQUFNQyxJLEVBQU07QUFDakMsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELEtBQUtFLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNyQyxPQUFJRixLQUFLSSxPQUFMLENBQWFILEtBQUtDLENBQUwsQ0FBYixJQUF3QixDQUE1QixFQUErQkYsS0FBS0ssSUFBTCxDQUFVSixLQUFLQyxDQUFMLENBQVY7QUFDL0I7O0FBRUQsU0FBT0YsSUFBUDtBQUNBLEU7Ozs7O2tCQXpCbUJULFEiLCJmaWxlIjoicmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlc29sdmVyXG4gKiBHZW5lcmljIHJlc29sdmVyIG1ldGhvZHMgdXNlZCBhY2Nyb3NzIGFsbCByZXNvbHZlcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm5vZGUgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMucmVnZXggPSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKipcblx0ICogZGV0ZWN0KClcblx0ICogaXMgZGF0YSByZXNvbHZhYmxlIHRvIHJlc29sdmVyXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGF0YSBUaGUgZGF0YSBzdHJpbmcgdG8gdHJ5IGFuZCByZXNvbHZlIHRvIHR5cGVcblx0ICogQHJldHVybiBib29sIFRydWUgb24gcmVzb2x2YWJsZSwgZmFsc2Ugb24gZmFpbC5cblx0ICovXG5cdGRldGVjdChkYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHRyZXR1cm4gdGhpcy5yZWdleC50ZXN0KHRoaXMuZGF0YSk7XG5cdH1cblxuXHQvLyBqb2luIHR3byBvYnNlcnZlciBhcnJheXMgdG9nZXRob3Igd2l0aG91dCBkdXBsaWNhdGluZ1xuXHRzdGF0aWMgbWVyZ2VPYnNlcnZlcnMob2JzQSwgb2JzQikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JzQi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKG9ic0EuaW5kZXhPZihvYnNCW2ldKSA8IDApIG9ic0EucHVzaChvYnNCW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JzQTtcblx0fVxufVxuIl19
},{}],56:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * String Resolver
 * Resolves data as string literal
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var StringResolver = function (_Resolver) {
	_inherits(StringResolver, _Resolver);

	function StringResolver(node) {
		_classCallCheck(this, StringResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'string';
		_this.regex = StringResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	StringResolver.prototype.resolve = function resolve(object) {
		var res = StringResolver.toString(this.data);
		this.resolved = res.resolved;
		this.observers = res.obeservers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	StringResolver.regex = function regex() {
		return (/^\'.*\'$/
		);
	};

	/**
  * static toString()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve to a string
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	StringResolver.toString = function toString(data) {
		return { resolved: data.substring(1, data.length - 1), observers: [] };
	};

	return StringResolver;
}(_resolver2.default);

exports.default = StringResolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy5yZXNvbHZlci5qcyJdLCJuYW1lcyI6WyJTdHJpbmdSZXNvbHZlciIsIm5vZGUiLCJuYW1lIiwicmVnZXgiLCJyZXNvbHZlIiwib2JqZWN0IiwicmVzIiwidG9TdHJpbmciLCJkYXRhIiwicmVzb2x2ZWQiLCJvYnNlcnZlcnMiLCJvYmVzZXJ2ZXJzIiwic3Vic3RyaW5nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGM7OztBQUNwQix5QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBLCtDQUNqQixvQkFEaUI7O0FBRWpCLFFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFFBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsUUFBS0MsS0FBTCxHQUFhSCxlQUFlRyxLQUFmLEVBQWI7QUFKaUI7QUFLakI7O0FBRUQ7Ozs7OzswQkFJQUMsTyxvQkFBUUMsTSxFQUFRO0FBQ2YsTUFBSUMsTUFBTU4sZUFBZU8sUUFBZixDQUF3QixLQUFLQyxJQUE3QixDQUFWO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQkgsSUFBSUcsUUFBcEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCSixJQUFJSyxVQUFyQjtBQUNBLEU7O0FBRUQ7Ozs7Ozs7Z0JBS09SLEssb0JBQVE7QUFDZCxTQUFPO0FBQVA7QUFDQSxFOztBQUVEOzs7Ozs7OztnQkFNT0ksUSxxQkFBU0MsSSxFQUFNO0FBQ3JCLFNBQU8sRUFBQ0MsVUFBVUQsS0FBS0ksU0FBTCxDQUFlLENBQWYsRUFBa0JKLEtBQUtLLE1BQUwsR0FBYSxDQUEvQixDQUFYLEVBQThDSCxXQUFXLEVBQXpELEVBQVA7QUFDQSxFOzs7OztrQkFuQ21CVixjIiwiZmlsZSI6InN0cmluZy5yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyLmpzJ1xuXG4vKipcbiAqIFN0cmluZyBSZXNvbHZlclxuICogUmVzb2x2ZXMgZGF0YSBhcyBzdHJpbmcgbGl0ZXJhbFxuICpcbiAqIEluaGVyaXRzXG4gKlxuICogcHJvcGVydHk6IGRhdGFcbiAqIG1ldGhvZDogZGV0ZWN0KGRhdGEpIHsgcmV0dXJuIGJvb2wgfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdSZXNvbHZlciBleHRlbmRzIFJlc29sdmVyIHtcblx0Y29uc3RydWN0b3Iobm9kZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSAnc3RyaW5nJztcblx0XHR0aGlzLnJlZ2V4ID0gU3RyaW5nUmVzb2x2ZXIucmVnZXgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXNvbHZlKClcblx0ICogUmVzb2x2ZSBkYXRhIHRvIGEgc3RyaW5nLCBzZXQgYW55IG9ic2VydmFibGVzIG9uIGRhdGFcblx0ICovXG5cdHJlc29sdmUob2JqZWN0KSB7XG5cdFx0dmFyIHJlcyA9IFN0cmluZ1Jlc29sdmVyLnRvU3RyaW5nKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5yZXNvbHZlZCA9IHJlcy5yZXNvbHZlZDtcblx0XHR0aGlzLm9ic2VydmVycyA9IHJlcy5vYmVzZXJ2ZXJzO1xuXHR9XG5cblx0LyoqXG5cdCAqIHN0YXRpYyByZWdleCgpXG5cdCAqIHR1cm5zIGEgcGF0aCBhbmQgb2JqZWN0IHRvIGEgcHJvcGVydHkgdmFsdWUsIHJldHVybmluZyBsaXN0IG9mIG9ic2VydmVycyBvbiBhbnkgZm91bmQgcHJvcGVydGllc1xuXHQgKiBAcmV0dXJuIG9iamVjdCByZWdleCBUaGUgcmVnZXggdXNlZCB0byB2YWxpZGF0ZSBpZiBvZiB0eXBlIG9yIG5vdFxuXHQgKi9cblx0c3RhdGljIHJlZ2V4KCkge1xuXHRcdHJldHVybiAvXlxcJy4qXFwnJC87XG5cdH1cblxuXHQvKipcblx0ICogc3RhdGljIHRvU3RyaW5nKClcblx0ICogdHVybnMgYSBwYXRoIGFuZCBvYmplY3QgdG8gYSBwcm9wZXJ0eSB2YWx1ZSwgcmV0dXJuaW5nIGxpc3Qgb2Ygb2JzZXJ2ZXJzIG9uIGFueSBmb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGF0YSBUaGUgZGF0YSB0byByZXNvbHZlIHRvIGEgc3RyaW5nXG5cdCAqIEByZXR1cm4gb2JqZWN0IHtyZXNvbHZlZDogLi4uLCBvYnNlcnZlcnM6Li4ufSBUaGUgcmVzb2x2ZWQgZGF0YSBhbmQgYW55IG9ic2VydmVycyBuZWVkZWQgdG8gdHJhY2sgZnV0dXJlIGNoYW5nZXNcblx0ICovXG5cdHN0YXRpYyB0b1N0cmluZyhkYXRhKSB7XG5cdFx0cmV0dXJuIHtyZXNvbHZlZDogZGF0YS5zdWJzdHJpbmcoMSwgZGF0YS5sZW5ndGggLTEpLCBvYnNlcnZlcnM6IFtdfTtcblx0fVxufVxuIl19
},{"./resolver.js":55}],57:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _razilobindCore = require('razilobind-core');

var _razilobindAlterer = require('razilobind-alterer');

var _razilobindBinder = require('razilobind-binder');

var _razilobindResolver = require('razilobind-resolver');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RaziloBind Binding Library
 * Packages up the module with extension support if running as complete standalone binder to allow direct injected alterers, binders and resolvers
 * Offers View-Model binding between js object and html view
 */
var RaziloBind = function (_RaziloBindCore) {
	_inherits(RaziloBind, _RaziloBindCore);

	function RaziloBind(options) {
		_classCallCheck(this, RaziloBind);

		// Inject default alterers
		var _this = _possibleConstructorReturn(this, _RaziloBindCore.call(this, options));

		_razilobindCore.RaziloBindCoreDetector.defaultAlterers = {
			TrimAlterer: _razilobindAlterer.RaziloBindTrimAlterer,
			JsonAlterer: _razilobindAlterer.RaziloBindJsonAlterer,
			NotAlterer: _razilobindAlterer.RaziloBindNotAlterer,
			PrefixAlterer: _razilobindAlterer.RaziloBindPrefixAlterer,
			SuffixAlterer: _razilobindAlterer.RaziloBindSuffixAlterer,
			DateAlterer: _razilobindAlterer.RaziloBindDateAlterer,
			JoinAlterer: _razilobindAlterer.RaziloBindJoinAlterer,
			EqualAlterer: _razilobindAlterer.RaziloBindEqualAlterer,
			IdenticalAlterer: _razilobindAlterer.RaziloBindIdenticalAlterer
		};

		// Inject default binders
		_razilobindCore.RaziloBindCoreDetector.defaultBinders = {
			ForBinder: _razilobindBinder.RaziloBindForBinder,
			TextBinder: _razilobindBinder.RaziloBindTextBinder,
			HtmlBinder: _razilobindBinder.RaziloBindHtmlBinder,
			ShowBinder: _razilobindBinder.RaziloBindShowBinder,
			HideBinder: _razilobindBinder.RaziloBindHideBinder,
			StyleBinder: _razilobindBinder.RaziloBindStyleBinder,
			ClassBinder: _razilobindBinder.RaziloBindClassBinder,
			AttributesBinder: _razilobindBinder.RaziloBindAttributesBinder,
			SrcBinder: _razilobindBinder.RaziloBindSrcBinder,
			HrefBinder: _razilobindBinder.RaziloBindHrefBinder,
			DisabledBinder: _razilobindBinder.RaziloBindDisabledBinder,
			RequiredBinder: _razilobindBinder.RaziloBindRequiredBinder,
			SelectedBinder: _razilobindBinder.RaziloBindSelectedBinder,
			IfBinder: _razilobindBinder.RaziloBindIfBinder,
			ElseBinder: _razilobindBinder.RaziloBindElseBinder,
			ValueBinder: _razilobindBinder.RaziloBindValueBinder,
			CheckedBinder: _razilobindBinder.RaziloBindCheckedBinder,
			EventBinder: _razilobindBinder.RaziloBindEventBinder,
			ClickBinder: _razilobindBinder.RaziloBindClickBinder,
			InputBinder: _razilobindBinder.RaziloBindInputBinder,
			HoverBinder: _razilobindBinder.RaziloBindHoverBinder,
			ChangeBinder: _razilobindBinder.RaziloBindChangeBinder,
			InitBinder: _razilobindBinder.RaziloBindInitBinder,
			ModelBinder: _razilobindBinder.RaziloBindModelBinder
		};

		// Inject default resolvers
		_razilobindCore.RaziloBindCoreDetector.defaultResolvers = {
			BooleanResolver: _razilobindResolver.RaziloBindBooleanResolver,
			PropertyResolver: _razilobindResolver.RaziloBindPropertyResolver,
			MethodResolver: _razilobindResolver.RaziloBindMethodResolver,
			StringResolver: _razilobindResolver.RaziloBindStringResolver,
			NumberResolver: _razilobindResolver.RaziloBindNumberResolver,
			ObjectResolver: _razilobindResolver.RaziloBindObjectResolver,
			ArrayResolver: _razilobindResolver.RaziloBindArrayResolver,
			PhantomResolver: _razilobindResolver.RaziloBindPhantomResolver
		};
		return _this;
	}

	/**
  * addAlterers()
  * Add custom alterers
  *
  * @param array alterers An array of custom alterers to inject into Detector
  */


	RaziloBind.prototype.addAlterers = function addAlterers(alterers) {
		if (!alterers || (typeof alterers === 'undefined' ? 'undefined' : _typeof(alterers)) !== 'object') return;
		_razilobindCore.RaziloBindCoreDetector.customAlterers = alterers;
	};

	/**
  * addBinder()
  * Add custom binders
  *
  * @param array binders An array of custom binders to inject into Detector
  */


	RaziloBind.prototype.addBinders = function addBinders(binders) {
		if (!binders || (typeof binders === 'undefined' ? 'undefined' : _typeof(binders)) !== 'object') return;
		_razilobindCore.RaziloBindCoreDetector.customBinders = binders;
	};

	/**
  * addResolvers()
  * Add custom resolvers
  *
  * @param array resolvers An array of custom resolvers to inject into Detector
  */


	RaziloBind.prototype.addResolvers = function addResolvers(resolvers) {
		if (!resolvers || (typeof resolvers === 'undefined' ? 'undefined' : _typeof(resolvers)) !== 'object') return;
		_razilobindCore.RaziloBindCoreDetector.customResolvers = resolvers;
	};

	return RaziloBind;
}(_razilobindCore.RaziloBindCore);

exports.default = RaziloBind;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJhemlsb0JpbmQiLCJvcHRpb25zIiwiZGVmYXVsdEFsdGVyZXJzIiwiVHJpbUFsdGVyZXIiLCJKc29uQWx0ZXJlciIsIk5vdEFsdGVyZXIiLCJQcmVmaXhBbHRlcmVyIiwiU3VmZml4QWx0ZXJlciIsIkRhdGVBbHRlcmVyIiwiSm9pbkFsdGVyZXIiLCJFcXVhbEFsdGVyZXIiLCJJZGVudGljYWxBbHRlcmVyIiwiZGVmYXVsdEJpbmRlcnMiLCJGb3JCaW5kZXIiLCJUZXh0QmluZGVyIiwiSHRtbEJpbmRlciIsIlNob3dCaW5kZXIiLCJIaWRlQmluZGVyIiwiU3R5bGVCaW5kZXIiLCJDbGFzc0JpbmRlciIsIkF0dHJpYnV0ZXNCaW5kZXIiLCJTcmNCaW5kZXIiLCJIcmVmQmluZGVyIiwiRGlzYWJsZWRCaW5kZXIiLCJSZXF1aXJlZEJpbmRlciIsIlNlbGVjdGVkQmluZGVyIiwiSWZCaW5kZXIiLCJFbHNlQmluZGVyIiwiVmFsdWVCaW5kZXIiLCJDaGVja2VkQmluZGVyIiwiRXZlbnRCaW5kZXIiLCJDbGlja0JpbmRlciIsIklucHV0QmluZGVyIiwiSG92ZXJCaW5kZXIiLCJDaGFuZ2VCaW5kZXIiLCJJbml0QmluZGVyIiwiTW9kZWxCaW5kZXIiLCJkZWZhdWx0UmVzb2x2ZXJzIiwiQm9vbGVhblJlc29sdmVyIiwiUHJvcGVydHlSZXNvbHZlciIsIk1ldGhvZFJlc29sdmVyIiwiU3RyaW5nUmVzb2x2ZXIiLCJOdW1iZXJSZXNvbHZlciIsIk9iamVjdFJlc29sdmVyIiwiQXJyYXlSZXNvbHZlciIsIlBoYW50b21SZXNvbHZlciIsImFkZEFsdGVyZXJzIiwiYWx0ZXJlcnMiLCJjdXN0b21BbHRlcmVycyIsImFkZEJpbmRlcnMiLCJiaW5kZXJzIiwiY3VzdG9tQmluZGVycyIsImFkZFJlc29sdmVycyIsInJlc29sdmVycyIsImN1c3RvbVJlc29sdmVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBS0E7O0FBWUE7O0FBMkJBOzs7Ozs7OztBQVdBOzs7OztJQUtxQkEsVTs7O0FBQ2pCLHFCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBR3ZCO0FBSHVCLCtDQUN2QiwyQkFBTUEsT0FBTixDQUR1Qjs7QUFJdkIseUNBQXVCQyxlQUF2QixHQUF5QztBQUN4Q0Msd0RBRHdDO0FBRXhDQyx3REFGd0M7QUFHeENDLHNEQUh3QztBQUl4Q0MsNERBSndDO0FBS3hDQyw0REFMd0M7QUFNeENDLHdEQU53QztBQU94Q0Msd0RBUHdDO0FBUXhDQywwREFSd0M7QUFTeENDO0FBVHdDLEdBQXpDOztBQVlBO0FBQ0EseUNBQXVCQyxjQUF2QixHQUF3QztBQUN2Q0MsbURBRHVDO0FBRXZDQyxxREFGdUM7QUFHdkNDLHFEQUh1QztBQUl2Q0MscURBSnVDO0FBS3ZDQyxxREFMdUM7QUFNdkNDLHVEQU51QztBQU92Q0MsdURBUHVDO0FBUXZDQyxpRUFSdUM7QUFTdkNDLG1EQVR1QztBQVV2Q0MscURBVnVDO0FBV3ZDQyw2REFYdUM7QUFZdkNDLDZEQVp1QztBQWF2Q0MsNkRBYnVDO0FBY3ZDQyxpREFkdUM7QUFldkNDLHFEQWZ1QztBQWdCdkNDLHVEQWhCdUM7QUFpQnZDQywyREFqQnVDO0FBa0J2Q0MsdURBbEJ1QztBQW1CdkNDLHVEQW5CdUM7QUFvQnZDQyx1REFwQnVDO0FBcUJ2Q0MsdURBckJ1QztBQXNCdkNDLHlEQXRCdUM7QUF1QnZDQyxxREF2QnVDO0FBd0J2Q0M7QUF4QnVDLEdBQXhDOztBQTJCQTtBQUNBLHlDQUF1QkMsZ0JBQXZCLEdBQTBDO0FBQ3pDQyxpRUFEeUM7QUFFekNDLG1FQUZ5QztBQUd6Q0MsK0RBSHlDO0FBSXpDQywrREFKeUM7QUFLekNDLCtEQUx5QztBQU16Q0MsK0RBTnlDO0FBT3pDQyw2REFQeUM7QUFRekNDO0FBUnlDLEdBQTFDO0FBN0N1QjtBQXVEdkI7O0FBRUQ7Ozs7Ozs7O3NCQU1BQyxXLHdCQUFZQyxRLEVBQVU7QUFDckIsTUFBSSxDQUFDQSxRQUFELElBQWEsUUFBT0EsUUFBUCx5Q0FBT0EsUUFBUCxPQUFvQixRQUFyQyxFQUErQztBQUMvQyx5Q0FBdUJDLGNBQXZCLEdBQXdDRCxRQUF4QztBQUNBLEU7O0FBRUQ7Ozs7Ozs7O3NCQU1BRSxVLHVCQUFXQyxPLEVBQVM7QUFDbkIsTUFBSSxDQUFDQSxPQUFELElBQVksUUFBT0EsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQyxFQUE2QztBQUM3Qyx5Q0FBdUJDLGFBQXZCLEdBQXVDRCxPQUF2QztBQUNBLEU7O0FBRUQ7Ozs7Ozs7O3NCQU1BRSxZLHlCQUFhQyxTLEVBQVc7QUFDdkIsTUFBSSxDQUFDQSxTQUFELElBQWMsUUFBT0EsU0FBUCx5Q0FBT0EsU0FBUCxPQUFxQixRQUF2QyxFQUFpRDtBQUNqRCx5Q0FBdUJDLGVBQXZCLEdBQXlDRCxTQUF6QztBQUNBLEU7Ozs7O2tCQXpGbUJyRCxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0UmF6aWxvQmluZENvcmUsXG5cdFJhemlsb0JpbmRDb3JlRGV0ZWN0b3Jcbn0gZnJvbSAncmF6aWxvYmluZC1jb3JlJ1xuXG5pbXBvcnQge1xuXHRSYXppbG9CaW5kVHJpbUFsdGVyZXIsXG5cdFJhemlsb0JpbmRKc29uQWx0ZXJlcixcblx0UmF6aWxvQmluZE5vdEFsdGVyZXIsXG5cdFJhemlsb0JpbmRQcmVmaXhBbHRlcmVyLFxuXHRSYXppbG9CaW5kU3VmZml4QWx0ZXJlcixcblx0UmF6aWxvQmluZERhdGVBbHRlcmVyLFxuXHRSYXppbG9CaW5kSm9pbkFsdGVyZXIsXG5cdFJhemlsb0JpbmRFcXVhbEFsdGVyZXIsXG5cdFJhemlsb0JpbmRJZGVudGljYWxBbHRlcmVyXG59IGZyb20gJ3Jhemlsb2JpbmQtYWx0ZXJlcidcblxuaW1wb3J0IHtcblx0UmF6aWxvQmluZEZvckJpbmRlcixcblx0UmF6aWxvQmluZFRleHRCaW5kZXIsXG5cdFJhemlsb0JpbmRIdG1sQmluZGVyLFxuXHRSYXppbG9CaW5kU2hvd0JpbmRlcixcblx0UmF6aWxvQmluZEhpZGVCaW5kZXIsXG5cdFJhemlsb0JpbmRTdHlsZUJpbmRlcixcblx0UmF6aWxvQmluZENsYXNzQmluZGVyLFxuXHRSYXppbG9CaW5kQXR0cmlidXRlc0JpbmRlcixcblx0UmF6aWxvQmluZFNyY0JpbmRlcixcblx0UmF6aWxvQmluZEhyZWZCaW5kZXIsXG5cdFJhemlsb0JpbmREaXNhYmxlZEJpbmRlcixcblx0UmF6aWxvQmluZFJlcXVpcmVkQmluZGVyLFxuXHRSYXppbG9CaW5kU2VsZWN0ZWRCaW5kZXIsXG5cdFJhemlsb0JpbmRJZkJpbmRlcixcblx0UmF6aWxvQmluZEVsc2VCaW5kZXIsXG5cdFJhemlsb0JpbmRWYWx1ZUJpbmRlcixcblx0UmF6aWxvQmluZENoZWNrZWRCaW5kZXIsXG5cdFJhemlsb0JpbmRFdmVudEJpbmRlcixcblx0UmF6aWxvQmluZENsaWNrQmluZGVyLFxuXHRSYXppbG9CaW5kSW5wdXRCaW5kZXIsXG5cdFJhemlsb0JpbmRIb3ZlckJpbmRlcixcblx0UmF6aWxvQmluZENoYW5nZUJpbmRlcixcblx0UmF6aWxvQmluZEluaXRCaW5kZXIsXG5cdFJhemlsb0JpbmRNb2RlbEJpbmRlclxufSBmcm9tICdyYXppbG9iaW5kLWJpbmRlcidcblxuaW1wb3J0IHtcblx0UmF6aWxvQmluZEJvb2xlYW5SZXNvbHZlcixcblx0UmF6aWxvQmluZFByb3BlcnR5UmVzb2x2ZXIsXG5cdFJhemlsb0JpbmRNZXRob2RSZXNvbHZlcixcblx0UmF6aWxvQmluZFN0cmluZ1Jlc29sdmVyLFxuXHRSYXppbG9CaW5kTnVtYmVyUmVzb2x2ZXIsXG5cdFJhemlsb0JpbmRPYmplY3RSZXNvbHZlcixcblx0UmF6aWxvQmluZEFycmF5UmVzb2x2ZXIsXG5cdFJhemlsb0JpbmRQaGFudG9tUmVzb2x2ZXJcbn0gZnJvbSAncmF6aWxvYmluZC1yZXNvbHZlcidcblxuLyoqXG4gKiBSYXppbG9CaW5kIEJpbmRpbmcgTGlicmFyeVxuICogUGFja2FnZXMgdXAgdGhlIG1vZHVsZSB3aXRoIGV4dGVuc2lvbiBzdXBwb3J0IGlmIHJ1bm5pbmcgYXMgY29tcGxldGUgc3RhbmRhbG9uZSBiaW5kZXIgdG8gYWxsb3cgZGlyZWN0IGluamVjdGVkIGFsdGVyZXJzLCBiaW5kZXJzIGFuZCByZXNvbHZlcnNcbiAqIE9mZmVycyBWaWV3LU1vZGVsIGJpbmRpbmcgYmV0d2VlbiBqcyBvYmplY3QgYW5kIGh0bWwgdmlld1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXppbG9CaW5kIGV4dGVuZHMgUmF6aWxvQmluZENvcmUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRzdXBlcihvcHRpb25zKTtcblxuXHRcdC8vIEluamVjdCBkZWZhdWx0IGFsdGVyZXJzXG5cdFx0UmF6aWxvQmluZENvcmVEZXRlY3Rvci5kZWZhdWx0QWx0ZXJlcnMgPSB7XG5cdFx0XHRUcmltQWx0ZXJlcjogUmF6aWxvQmluZFRyaW1BbHRlcmVyLFxuXHRcdFx0SnNvbkFsdGVyZXI6IFJhemlsb0JpbmRKc29uQWx0ZXJlcixcblx0XHRcdE5vdEFsdGVyZXI6IFJhemlsb0JpbmROb3RBbHRlcmVyLFxuXHRcdFx0UHJlZml4QWx0ZXJlcjogUmF6aWxvQmluZFByZWZpeEFsdGVyZXIsXG5cdFx0XHRTdWZmaXhBbHRlcmVyOiBSYXppbG9CaW5kU3VmZml4QWx0ZXJlcixcblx0XHRcdERhdGVBbHRlcmVyOiBSYXppbG9CaW5kRGF0ZUFsdGVyZXIsXG5cdFx0XHRKb2luQWx0ZXJlcjogUmF6aWxvQmluZEpvaW5BbHRlcmVyLFxuXHRcdFx0RXF1YWxBbHRlcmVyOiBSYXppbG9CaW5kRXF1YWxBbHRlcmVyLFxuXHRcdFx0SWRlbnRpY2FsQWx0ZXJlcjogUmF6aWxvQmluZElkZW50aWNhbEFsdGVyZXJcblx0XHR9O1xuXG5cdFx0Ly8gSW5qZWN0IGRlZmF1bHQgYmluZGVyc1xuXHRcdFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IuZGVmYXVsdEJpbmRlcnMgPSB7XG5cdFx0XHRGb3JCaW5kZXI6IFJhemlsb0JpbmRGb3JCaW5kZXIsXG5cdFx0XHRUZXh0QmluZGVyOiBSYXppbG9CaW5kVGV4dEJpbmRlcixcblx0XHRcdEh0bWxCaW5kZXI6IFJhemlsb0JpbmRIdG1sQmluZGVyLFxuXHRcdFx0U2hvd0JpbmRlcjogUmF6aWxvQmluZFNob3dCaW5kZXIsXG5cdFx0XHRIaWRlQmluZGVyOiBSYXppbG9CaW5kSGlkZUJpbmRlcixcblx0XHRcdFN0eWxlQmluZGVyOiBSYXppbG9CaW5kU3R5bGVCaW5kZXIsXG5cdFx0XHRDbGFzc0JpbmRlcjogUmF6aWxvQmluZENsYXNzQmluZGVyLFxuXHRcdFx0QXR0cmlidXRlc0JpbmRlcjogUmF6aWxvQmluZEF0dHJpYnV0ZXNCaW5kZXIsXG5cdFx0XHRTcmNCaW5kZXI6IFJhemlsb0JpbmRTcmNCaW5kZXIsXG5cdFx0XHRIcmVmQmluZGVyOiBSYXppbG9CaW5kSHJlZkJpbmRlcixcblx0XHRcdERpc2FibGVkQmluZGVyOiBSYXppbG9CaW5kRGlzYWJsZWRCaW5kZXIsXG5cdFx0XHRSZXF1aXJlZEJpbmRlcjogUmF6aWxvQmluZFJlcXVpcmVkQmluZGVyLFxuXHRcdFx0U2VsZWN0ZWRCaW5kZXI6IFJhemlsb0JpbmRTZWxlY3RlZEJpbmRlcixcblx0XHRcdElmQmluZGVyOiBSYXppbG9CaW5kSWZCaW5kZXIsXG5cdFx0XHRFbHNlQmluZGVyOiBSYXppbG9CaW5kRWxzZUJpbmRlcixcblx0XHRcdFZhbHVlQmluZGVyOiBSYXppbG9CaW5kVmFsdWVCaW5kZXIsXG5cdFx0XHRDaGVja2VkQmluZGVyOiBSYXppbG9CaW5kQ2hlY2tlZEJpbmRlcixcblx0XHRcdEV2ZW50QmluZGVyOiBSYXppbG9CaW5kRXZlbnRCaW5kZXIsXG5cdFx0XHRDbGlja0JpbmRlcjogUmF6aWxvQmluZENsaWNrQmluZGVyLFxuXHRcdFx0SW5wdXRCaW5kZXI6IFJhemlsb0JpbmRJbnB1dEJpbmRlcixcblx0XHRcdEhvdmVyQmluZGVyOiBSYXppbG9CaW5kSG92ZXJCaW5kZXIsXG5cdFx0XHRDaGFuZ2VCaW5kZXI6IFJhemlsb0JpbmRDaGFuZ2VCaW5kZXIsXG5cdFx0XHRJbml0QmluZGVyOiBSYXppbG9CaW5kSW5pdEJpbmRlcixcblx0XHRcdE1vZGVsQmluZGVyOiBSYXppbG9CaW5kTW9kZWxCaW5kZXJcblx0XHR9O1xuXG5cdFx0Ly8gSW5qZWN0IGRlZmF1bHQgcmVzb2x2ZXJzXG5cdFx0UmF6aWxvQmluZENvcmVEZXRlY3Rvci5kZWZhdWx0UmVzb2x2ZXJzID0ge1xuXHRcdFx0Qm9vbGVhblJlc29sdmVyOiBSYXppbG9CaW5kQm9vbGVhblJlc29sdmVyLFxuXHRcdFx0UHJvcGVydHlSZXNvbHZlcjogUmF6aWxvQmluZFByb3BlcnR5UmVzb2x2ZXIsXG5cdFx0XHRNZXRob2RSZXNvbHZlcjogUmF6aWxvQmluZE1ldGhvZFJlc29sdmVyLFxuXHRcdFx0U3RyaW5nUmVzb2x2ZXI6IFJhemlsb0JpbmRTdHJpbmdSZXNvbHZlcixcblx0XHRcdE51bWJlclJlc29sdmVyOiBSYXppbG9CaW5kTnVtYmVyUmVzb2x2ZXIsXG5cdFx0XHRPYmplY3RSZXNvbHZlcjogUmF6aWxvQmluZE9iamVjdFJlc29sdmVyLFxuXHRcdFx0QXJyYXlSZXNvbHZlcjogUmF6aWxvQmluZEFycmF5UmVzb2x2ZXIsXG5cdFx0XHRQaGFudG9tUmVzb2x2ZXI6IFJhemlsb0JpbmRQaGFudG9tUmVzb2x2ZXJcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIGFkZEFsdGVyZXJzKClcblx0ICogQWRkIGN1c3RvbSBhbHRlcmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gYXJyYXkgYWx0ZXJlcnMgQW4gYXJyYXkgb2YgY3VzdG9tIGFsdGVyZXJzIHRvIGluamVjdCBpbnRvIERldGVjdG9yXG5cdCAqL1xuXHRhZGRBbHRlcmVycyhhbHRlcmVycykge1xuXHRcdGlmICghYWx0ZXJlcnMgfHwgdHlwZW9mIGFsdGVyZXJzICE9PSAnb2JqZWN0JykgcmV0dXJuO1xuXHRcdFJhemlsb0JpbmRDb3JlRGV0ZWN0b3IuY3VzdG9tQWx0ZXJlcnMgPSBhbHRlcmVycztcblx0fVxuXG5cdC8qKlxuXHQgKiBhZGRCaW5kZXIoKVxuXHQgKiBBZGQgY3VzdG9tIGJpbmRlcnNcblx0ICpcblx0ICogQHBhcmFtIGFycmF5IGJpbmRlcnMgQW4gYXJyYXkgb2YgY3VzdG9tIGJpbmRlcnMgdG8gaW5qZWN0IGludG8gRGV0ZWN0b3Jcblx0ICovXG5cdGFkZEJpbmRlcnMoYmluZGVycykge1xuXHRcdGlmICghYmluZGVycyB8fCB0eXBlb2YgYmluZGVycyAhPT0gJ29iamVjdCcpIHJldHVybjtcblx0XHRSYXppbG9CaW5kQ29yZURldGVjdG9yLmN1c3RvbUJpbmRlcnMgPSBiaW5kZXJzO1xuXHR9XG5cblx0LyoqXG5cdCAqIGFkZFJlc29sdmVycygpXG5cdCAqIEFkZCBjdXN0b20gcmVzb2x2ZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBhcnJheSByZXNvbHZlcnMgQW4gYXJyYXkgb2YgY3VzdG9tIHJlc29sdmVycyB0byBpbmplY3QgaW50byBEZXRlY3RvclxuXHQgKi9cblx0YWRkUmVzb2x2ZXJzKHJlc29sdmVycykge1xuXHRcdGlmICghcmVzb2x2ZXJzIHx8IHR5cGVvZiByZXNvbHZlcnMgIT09ICdvYmplY3QnKSByZXR1cm47XG5cdFx0UmF6aWxvQmluZENvcmVEZXRlY3Rvci5jdXN0b21SZXNvbHZlcnMgPSByZXNvbHZlcnM7XG5cdH1cbn1cbiJdfQ==
},{"razilobind-alterer":4,"razilobind-binder":15,"razilobind-core":41,"razilobind-resolver":47}],58:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _core = require('./src/core.js');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RaziloComponent = function () {
	function RaziloComponent(name, extbp, bp) {
		_classCallCheck(this, RaziloComponent);

		var isString = typeof extbp === 'string';
		this.register(name, isString ? extbp : null, isString ? bp : extbp, document._currentScript.ownerDocument);
	}

	/**
  * Register New Component
  */


	RaziloComponent.prototype.register = function register(name, ext, bp, component) {
		for (var key in bp) {
			this[key] = bp[key];
		}return _core2.default.registerElement(this, name, ext, component);
	};

	/**
  * Fires an event off from the components element
  * @param string name The name of the event
  * @param mixed detail [optional] Any optional details you wish to send
  */
	// fireEvent(name, detail) return function )

	/**
  * Get the current working root element (the host) (generated on bind to preserve element)
  */
	// getHost() { returns host }

	/**
  * Clone object without reference
  */
	// cloneObject() { returns host }

	/**
  * Custom element created, but not currently on dom
  */
	// OPTIONAL created() { }

	/**
  * Custom element attached to dom
  */
	// OPTIONAL attached() { }

	/**
  * Custom element detached from dom
  */
	// OPTIONAL detached() { }

	/**
  * Custom element atttibute has changed somehow
  * @param string name The name of the attribute added, removed or changed
  * @param string oldVal The old value of the attribute.
  * @param string newVal The new value of the attribute.
  */
	// OPTIONAL attributeChanged(name, oldVal, newVal) { }


	return RaziloComponent;
}();

exports.default = RaziloComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJhemlsb0NvbXBvbmVudCIsIm5hbWUiLCJleHRicCIsImJwIiwiaXNTdHJpbmciLCJyZWdpc3RlciIsImRvY3VtZW50IiwiX2N1cnJlbnRTY3JpcHQiLCJvd25lckRvY3VtZW50IiwiZXh0IiwiY29tcG9uZW50Iiwia2V5IiwicmVnaXN0ZXJFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxlO0FBQ3BCLDBCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsRUFBekIsRUFBNkI7QUFBQTs7QUFDNUIsTUFBSUMsV0FBVyxPQUFPRixLQUFQLEtBQWlCLFFBQWhDO0FBQ0EsT0FBS0csUUFBTCxDQUFjSixJQUFkLEVBQW9CRyxXQUFXRixLQUFYLEdBQW1CLElBQXZDLEVBQTZDRSxXQUFXRCxFQUFYLEdBQWdCRCxLQUE3RCxFQUFvRUksU0FBU0MsY0FBVCxDQUF3QkMsYUFBNUY7QUFDQTs7QUFFRDs7Ozs7MkJBR0FILFEscUJBQVNKLEksRUFBTVEsRyxFQUFLTixFLEVBQUlPLFMsRUFBVztBQUNsQyxPQUFLLElBQUlDLEdBQVQsSUFBZ0JSLEVBQWhCO0FBQW9CLFFBQUtRLEdBQUwsSUFBWVIsR0FBR1EsR0FBSCxDQUFaO0FBQXBCLEdBQ0EsT0FBTyxlQUFLQyxlQUFMLENBQXFCLElBQXJCLEVBQTJCWCxJQUEzQixFQUFpQ1EsR0FBakMsRUFBc0NDLFNBQXRDLENBQVA7QUFDQSxFOztBQUVEOzs7OztBQUtBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7Ozs7OztBQU1BOzs7Ozs7a0JBcERvQlYsZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JlIGZyb20gJy4vc3JjL2NvcmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhemlsb0NvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGV4dGJwLCBicCkge1xuXHRcdGxldCBpc1N0cmluZyA9IHR5cGVvZiBleHRicCA9PT0gJ3N0cmluZyc7XG5cdFx0dGhpcy5yZWdpc3RlcihuYW1lLCBpc1N0cmluZyA/IGV4dGJwIDogbnVsbCwgaXNTdHJpbmcgPyBicCA6IGV4dGJwLCBkb2N1bWVudC5fY3VycmVudFNjcmlwdC5vd25lckRvY3VtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBOZXcgQ29tcG9uZW50XG5cdCAqL1xuXHRyZWdpc3RlcihuYW1lLCBleHQsIGJwLCBjb21wb25lbnQpIHtcblx0XHRmb3IgKGxldCBrZXkgaW4gYnApIHRoaXNba2V5XSA9IGJwW2tleV07XG5cdFx0cmV0dXJuIENvcmUucmVnaXN0ZXJFbGVtZW50KHRoaXMsIG5hbWUsIGV4dCwgY29tcG9uZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaXJlcyBhbiBldmVudCBvZmYgZnJvbSB0aGUgY29tcG9uZW50cyBlbGVtZW50XG5cdCAqIEBwYXJhbSBzdHJpbmcgbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0ICogQHBhcmFtIG1peGVkIGRldGFpbCBbb3B0aW9uYWxdIEFueSBvcHRpb25hbCBkZXRhaWxzIHlvdSB3aXNoIHRvIHNlbmRcblx0ICovXG5cdC8vIGZpcmVFdmVudChuYW1lLCBkZXRhaWwpIHJldHVybiBmdW5jdGlvbiApXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudCB3b3JraW5nIHJvb3QgZWxlbWVudCAodGhlIGhvc3QpIChnZW5lcmF0ZWQgb24gYmluZCB0byBwcmVzZXJ2ZSBlbGVtZW50KVxuXHQgKi9cblx0Ly8gZ2V0SG9zdCgpIHsgcmV0dXJucyBob3N0IH1cblxuXHQvKipcblx0ICogQ2xvbmUgb2JqZWN0IHdpdGhvdXQgcmVmZXJlbmNlXG5cdCAqL1xuXHQvLyBjbG9uZU9iamVjdCgpIHsgcmV0dXJucyBob3N0IH1cblxuXHQvKipcblx0ICogQ3VzdG9tIGVsZW1lbnQgY3JlYXRlZCwgYnV0IG5vdCBjdXJyZW50bHkgb24gZG9tXG5cdCAqL1xuXHQvLyBPUFRJT05BTCBjcmVhdGVkKCkgeyB9XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBlbGVtZW50IGF0dGFjaGVkIHRvIGRvbVxuXHQgKi9cblx0Ly8gT1BUSU9OQUwgYXR0YWNoZWQoKSB7IH1cblxuXHQvKipcblx0ICogQ3VzdG9tIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSBkb21cblx0ICovXG5cdC8vIE9QVElPTkFMIGRldGFjaGVkKCkgeyB9XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBlbGVtZW50IGF0dHRpYnV0ZSBoYXMgY2hhbmdlZCBzb21laG93XG5cdCAqIEBwYXJhbSBzdHJpbmcgbmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIGFkZGVkLCByZW1vdmVkIG9yIGNoYW5nZWRcblx0ICogQHBhcmFtIHN0cmluZyBvbGRWYWwgVGhlIG9sZCB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLlxuXHQgKiBAcGFyYW0gc3RyaW5nIG5ld1ZhbCBUaGUgbmV3IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG5cdCAqL1xuXHQvLyBPUFRJT05BTCBhdHRyaWJ1dGVDaGFuZ2VkKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7IH1cbn1cbiJdfQ==
},{"./src/core.js":59}],59:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _razilobind = require('razilobind');

var _razilobind2 = _interopRequireDefault(_razilobind);

var _razilobindCore = require('razilobind-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RaziloComponent Web Component Builder Library
 * Offers simple cross browser web components to be written in ES6
 */
var Core = function () {
	function Core() {
		_classCallCheck(this, Core);
	}

	/**
  * [public] - Register a new custom element, creating a naff working scope for the interface
  * @param object blueprint The custom element blueprint to create the custom element from
  */
	Core.registerElement = function registerElement(bp, name, ext, component) {
		if (!name) throw 'Cannot register custom element without a custom element name via register(name, extends) or new CustomElement({name: ..., extends: ...})';

		// create proto
		var proto = Object.create(HTMLElement.prototype);

		// forward callbacks, all these happen as a per instance of component basis, outside of these things are per component registration
		proto.createdCallback = function () {
			Core.createTemplate(this, name, Core.cloneObject(bp), component); // create only
			this.razilobind.model.getHost = Core.getThis.bind(this); // get the element scope
			this.razilobind.model.cloneObject = Core.cloneObject; // get the element scope
			this.razilobind.model.fireEvent = Core.fire.bind(this); // setup fireEvent on host
			this.razilobind.model.dateFormat = _razilobindCore.RaziloBindDateFormat.dateFormat; // setup fireEvent on host
			if (typeof this.razilobind.model.created === 'function') this.razilobind.model.created.call(this.razilobind.model);
		};

		proto.attachedCallback = function () {
			Core.applyTemplate(this); // apply once all have been created, IMPORTANT!
			if (typeof this.razilobind.model.attached === 'function') this.razilobind.model.attached.call(this.razilobind.model);
		};

		proto.detachedCallback = function () {
			if (typeof this.razilobind.model.detached === 'function') this.razilobind.model.detached.call(this.razilobind.model);
		};

		proto.attributeChangedCallback = function (att, oldVal, newVal) {
			if (typeof this.razilobind.model.attributeChanged === 'function') this.razilobind.model.attributeChanged.call(this.razilobind.model, att, oldVal, newVal);
			Core.fire('attributechanged', { attribute: att, oldVal: oldVal, newVal: newVal }, this);
		};

		// register custom element
		var protoWrap = { prototype: proto };
		if (!!ext) protoWrap.extends = ext;
		try {
			document.registerElement(name, protoWrap);
		} catch (e) {}
	};

	Core.getThis = function getThis() {
		return this;
	};

	/**
  * [public] - Fires an event off, from the provided element, or from scope if element not set
  * @param HTML obejct element The element to fire from
  * @param string name The name of the event
  * @param mixed detail [optional] Any optional details you wish to send
  */


	Core.fire = function fire(name, detail, element) {
		element = typeof element === 'undefined' ? this : element.host ? element.host : element;

		var event;
		try {
			event = !detail ? new Event(name) : new CustomEvent(name, { 'detail': detail });
		} catch (e) {
			// allback to create event old fashioned way
			event = document.createEvent('customEvent');
			if (detail) event.detail = detail;
			event.initEvent(name, true, true);
		}

		try {
			element.dispatchEvent(event);
		} catch (e) {
			console.log('MAX CALL STACK ERROR', e);
			console.log(element, event);
		}
	};

	/**
  * [public] - Clone an objects properties and methods
  * @param object The object to clone
  * @return object The cloned object (not a reference to an object)
  */


	Core.cloneObject = function cloneObject(obj) {
		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== "object" || obj === null) return obj;

		var clone;

		if (obj instanceof Date) {
			clone = new Date();
			clone.setTime(obj.getTime());
			return clone;
		}

		if (obj instanceof Array) {
			clone = [];
			for (var i = 0, len = obj.length; i < len; i++) {
				clone[i] = Core.cloneObject(obj[i]);
			}return clone;
		}

		// Handle Object
		if (obj instanceof Object) {
			clone = {};
			for (var att in obj) {
				if (obj.hasOwnProperty(att)) clone[att] = Core.cloneObject(obj[att]);
			}return clone;
		}

		throw new Error("Unable to clone object " + obj + ",  this object type is not supported in component blueprints.");
	};

	/**
  * [private] - Apply a template to a fragment and apply binding to the framnet component, store this against the host element
  * This will allow us to bind away without the worry of where scope lies, as all component binding happens in isolation.
  * once all binding complete, we can move content around into it's correct place.
  * @param html object host The custom element to apply the template to
  * @param object model The model data to apply to the host
  * @param object component The web component template to use as the template for building the html element
  */


	Core.createTemplate = function createTemplate(host, name, model, component) {
		if (!host) throw 'Host custom element not specified, please add custom element reference or lookup';

		var template = component.querySelector('template#' + name);
		if (!template) return host.razilobind = { model: model };

		// bind to component fragment then move into host html after all binds complete
		var rb = new _razilobind2.default({ noParentBind: true });
		host.componentFragment = document.createDocumentFragment();
		host.componentFragment.appendChild(document.createElement('COMPONENT'));
		host.componentFragment.firstChild.innerHTML = template.innerHTML;
		rb.bind(host.componentFragment.firstChild, model);

		// move bind data from componentFragment to host ready for applying template, leave this until all binds completed (stops duplicate bindings)
		host.razilobind = host.componentFragment.firstChild.razilobind;
		delete host.componentFragment.firstChild.razilobind;
	};

	/**
  * [private] - Apply built component to the host element. Takes a fragment component and merges it into the host html, mixing any content from the host into the component fragment first.
  * @param mixed host The custom element to apply the template to, usually 'this' but can be selector string
  */


	Core.applyTemplate = function applyTemplate(host) {
		if (!host.componentFragment) return;

		// do we need to apply any host content?... pull into fragment
		var matches = host.componentFragment.firstChild.querySelectorAll('content');
		if (matches.length > 0) {
			for (var i = 0; i < matches.length; i++) {
				if (matches[i].hasAttribute('select')) {
					// substitute fragment content placeholders with selected host content
					var name = matches[i].getAttribute('select');
					var found = host.querySelector(name);
					if (found) matches[i].parentNode.replaceChild(found, matches[i]);
				} else {
					// move all host content to fragment placeholder and remove placeholder
					while (host.firstChild) {
						matches[i].parentNode.appendChild(host.firstChild);
					}matches[i].parentNode.removeChild(matches[i]);
				}
			}
		}

		// transfer over the fragment to the host and remove
		host.innerHTML = '';
		while (host.componentFragment.firstChild.firstChild) {
			host.appendChild(host.componentFragment.firstChild.firstChild);
		}delete host.componentFragment;
	};

	return Core;
}();

exports.default = Core;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUuanMiXSwibmFtZXMiOlsiQ29yZSIsInJlZ2lzdGVyRWxlbWVudCIsImJwIiwibmFtZSIsImV4dCIsImNvbXBvbmVudCIsInByb3RvIiwiT2JqZWN0IiwiY3JlYXRlIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJjcmVhdGVkQ2FsbGJhY2siLCJjcmVhdGVUZW1wbGF0ZSIsImNsb25lT2JqZWN0IiwicmF6aWxvYmluZCIsIm1vZGVsIiwiZ2V0SG9zdCIsImdldFRoaXMiLCJiaW5kIiwiZmlyZUV2ZW50IiwiZmlyZSIsImRhdGVGb3JtYXQiLCJjcmVhdGVkIiwiY2FsbCIsImF0dGFjaGVkQ2FsbGJhY2siLCJhcHBseVRlbXBsYXRlIiwiYXR0YWNoZWQiLCJkZXRhY2hlZENhbGxiYWNrIiwiZGV0YWNoZWQiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJhdHQiLCJvbGRWYWwiLCJuZXdWYWwiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwiYXR0cmlidXRlIiwicHJvdG9XcmFwIiwiZXh0ZW5kcyIsImRvY3VtZW50IiwiZSIsImRldGFpbCIsImVsZW1lbnQiLCJob3N0IiwiZXZlbnQiLCJFdmVudCIsIkN1c3RvbUV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY29uc29sZSIsImxvZyIsIm9iaiIsImNsb25lIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiQXJyYXkiLCJpIiwibGVuIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsInRlbXBsYXRlIiwicXVlcnlTZWxlY3RvciIsInJiIiwibm9QYXJlbnRCaW5kIiwiY29tcG9uZW50RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RDaGlsZCIsImlubmVySFRNTCIsIm1hdGNoZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmli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QUFXSixRQUFRZixDQUFSLEVBQVdvQixVQUFYLENBQXNCQyxZQUF0QixDQUFtQ0YsS0FBbkMsRUFBMENKLFFBQVFmLENBQVIsQ0FBMUM7QUFDWCxLQUxELE1BS087QUFDTjtBQUNBLFlBQU1mLEtBQUs0QixVQUFYO0FBQXVCRSxjQUFRZixDQUFSLEVBQVdvQixVQUFYLENBQXNCVCxXQUF0QixDQUFrQzFCLEtBQUs0QixVQUF2QztBQUF2QixNQUNBRSxRQUFRZixDQUFSLEVBQVdvQixVQUFYLENBQXNCRSxXQUF0QixDQUFrQ1AsUUFBUWYsQ0FBUixDQUFsQztBQUNBO0FBQ0Q7QUFDRDs7QUFFRDtBQUNBZixPQUFLNkIsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQU83QixLQUFLd0IsaUJBQUwsQ0FBdUJJLFVBQXZCLENBQWtDQSxVQUF6QztBQUFxRDVCLFFBQUswQixXQUFMLENBQWlCMUIsS0FBS3dCLGlCQUFMLENBQXVCSSxVQUF2QixDQUFrQ0EsVUFBbkQ7QUFBckQsR0FDQSxPQUFPNUIsS0FBS3dCLGlCQUFaO0FBQ0EsRTs7Ozs7a0JBL0ttQmpFLEkiLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYXppbG9CaW5kIGZyb20gJ3Jhemlsb2JpbmQnXG5pbXBvcnQge1Jhemlsb0JpbmREYXRlRm9ybWF0fSBmcm9tICdyYXppbG9iaW5kLWNvcmUnXG5cbi8qKlxuICogUmF6aWxvQ29tcG9uZW50IFdlYiBDb21wb25lbnQgQnVpbGRlciBMaWJyYXJ5XG4gKiBPZmZlcnMgc2ltcGxlIGNyb3NzIGJyb3dzZXIgd2ViIGNvbXBvbmVudHMgdG8gYmUgd3JpdHRlbiBpbiBFUzZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XG5cdC8qKlxuXHQgKiBbcHVibGljXSAtIFJlZ2lzdGVyIGEgbmV3IGN1c3RvbSBlbGVtZW50LCBjcmVhdGluZyBhIG5hZmYgd29ya2luZyBzY29wZSBmb3IgdGhlIGludGVyZmFjZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGJsdWVwcmludCBUaGUgY3VzdG9tIGVsZW1lbnQgYmx1ZXByaW50IHRvIGNyZWF0ZSB0aGUgY3VzdG9tIGVsZW1lbnQgZnJvbVxuXHQgKi9cblx0c3RhdGljIHJlZ2lzdGVyRWxlbWVudChicCwgbmFtZSwgZXh0LCBjb21wb25lbnQpXG5cdHtcblx0XHRpZiAoIW5hbWUpIHRocm93ICdDYW5ub3QgcmVnaXN0ZXIgY3VzdG9tIGVsZW1lbnQgd2l0aG91dCBhIGN1c3RvbSBlbGVtZW50IG5hbWUgdmlhIHJlZ2lzdGVyKG5hbWUsIGV4dGVuZHMpIG9yIG5ldyBDdXN0b21FbGVtZW50KHtuYW1lOiAuLi4sIGV4dGVuZHM6IC4uLn0pJztcblxuXHRcdC8vIGNyZWF0ZSBwcm90b1xuXHRcdHZhciBwcm90byA9IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuXHRcdC8vIGZvcndhcmQgY2FsbGJhY2tzLCBhbGwgdGhlc2UgaGFwcGVuIGFzIGEgcGVyIGluc3RhbmNlIG9mIGNvbXBvbmVudCBiYXNpcywgb3V0c2lkZSBvZiB0aGVzZSB0aGluZ3MgYXJlIHBlciBjb21wb25lbnQgcmVnaXN0cmF0aW9uXG5cdFx0cHJvdG8uY3JlYXRlZENhbGxiYWNrID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdENvcmUuY3JlYXRlVGVtcGxhdGUodGhpcywgbmFtZSwgQ29yZS5jbG9uZU9iamVjdChicCksIGNvbXBvbmVudCk7IC8vIGNyZWF0ZSBvbmx5XG5cdFx0XHR0aGlzLnJhemlsb2JpbmQubW9kZWwuZ2V0SG9zdCA9IENvcmUuZ2V0VGhpcy5iaW5kKHRoaXMpOyAvLyBnZXQgdGhlIGVsZW1lbnQgc2NvcGVcblx0XHRcdHRoaXMucmF6aWxvYmluZC5tb2RlbC5jbG9uZU9iamVjdCA9IENvcmUuY2xvbmVPYmplY3Q7IC8vIGdldCB0aGUgZWxlbWVudCBzY29wZVxuXHRcdFx0dGhpcy5yYXppbG9iaW5kLm1vZGVsLmZpcmVFdmVudCA9IENvcmUuZmlyZS5iaW5kKHRoaXMpOyAvLyBzZXR1cCBmaXJlRXZlbnQgb24gaG9zdFxuXHRcdFx0dGhpcy5yYXppbG9iaW5kLm1vZGVsLmRhdGVGb3JtYXQgPSBSYXppbG9CaW5kRGF0ZUZvcm1hdC5kYXRlRm9ybWF0OyAvLyBzZXR1cCBmaXJlRXZlbnQgb24gaG9zdFxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnJhemlsb2JpbmQubW9kZWwuY3JlYXRlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5yYXppbG9iaW5kLm1vZGVsLmNyZWF0ZWQuY2FsbCh0aGlzLnJhemlsb2JpbmQubW9kZWwpO1xuXHRcdH07XG5cblx0XHRwcm90by5hdHRhY2hlZENhbGxiYWNrID0gZnVuY3Rpb24oKVxuXHRcdHtcbiBcdFx0XHRDb3JlLmFwcGx5VGVtcGxhdGUodGhpcyk7IC8vIGFwcGx5IG9uY2UgYWxsIGhhdmUgYmVlbiBjcmVhdGVkLCBJTVBPUlRBTlQhXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucmF6aWxvYmluZC5tb2RlbC5hdHRhY2hlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5yYXppbG9iaW5kLm1vZGVsLmF0dGFjaGVkLmNhbGwodGhpcy5yYXppbG9iaW5kLm1vZGVsKTtcblx0XHR9O1xuXG5cdFx0cHJvdG8uZGV0YWNoZWRDYWxsYmFjayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucmF6aWxvYmluZC5tb2RlbC5kZXRhY2hlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5yYXppbG9iaW5kLm1vZGVsLmRldGFjaGVkLmNhbGwodGhpcy5yYXppbG9iaW5kLm1vZGVsKTtcblx0XHR9O1xuXG5cdFx0cHJvdG8uYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oYXR0LCBvbGRWYWwsIG5ld1ZhbClcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucmF6aWxvYmluZC5tb2RlbC5hdHRyaWJ1dGVDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSAgdGhpcy5yYXppbG9iaW5kLm1vZGVsLmF0dHJpYnV0ZUNoYW5nZWQuY2FsbCh0aGlzLnJhemlsb2JpbmQubW9kZWwsIGF0dCwgb2xkVmFsLCBuZXdWYWwpO1xuXHRcdFx0Q29yZS5maXJlKCdhdHRyaWJ1dGVjaGFuZ2VkJywge2F0dHJpYnV0ZTogYXR0LCBvbGRWYWw6IG9sZFZhbCwgbmV3VmFsOiBuZXdWYWx9LCB0aGlzKTtcblx0XHR9O1xuXG5cdFx0Ly8gcmVnaXN0ZXIgY3VzdG9tIGVsZW1lbnRcblx0XHR2YXIgcHJvdG9XcmFwID0ge3Byb3RvdHlwZTogcHJvdG99O1xuXHRcdGlmICghIWV4dCkgcHJvdG9XcmFwLmV4dGVuZHMgPSBleHQ7XG5cdFx0dHJ5IHsgZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KG5hbWUsIHByb3RvV3JhcCk7IH0gY2F0Y2goZSkgeyB9XG5cdH1cblxuXHRzdGF0aWMgZ2V0VGhpcygpXG5cdHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBbcHVibGljXSAtIEZpcmVzIGFuIGV2ZW50IG9mZiwgZnJvbSB0aGUgcHJvdmlkZWQgZWxlbWVudCwgb3IgZnJvbSBzY29wZSBpZiBlbGVtZW50IG5vdCBzZXRcblx0ICogQHBhcmFtIEhUTUwgb2JlamN0IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gZmlyZSBmcm9tXG5cdCAqIEBwYXJhbSBzdHJpbmcgbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0ICogQHBhcmFtIG1peGVkIGRldGFpbCBbb3B0aW9uYWxdIEFueSBvcHRpb25hbCBkZXRhaWxzIHlvdSB3aXNoIHRvIHNlbmRcblx0ICovXG5cdHN0YXRpYyBmaXJlKG5hbWUsIGRldGFpbCwgZWxlbWVudClcblx0e1xuXHRcdGVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzIDogKGVsZW1lbnQuaG9zdCA/IGVsZW1lbnQuaG9zdCA6IGVsZW1lbnQpO1xuXG5cdFx0dmFyIGV2ZW50O1xuXHRcdHRyeSB7IGV2ZW50ID0gIWRldGFpbCA/IG5ldyBFdmVudChuYW1lKSA6IG5ldyBDdXN0b21FdmVudChuYW1lLCB7ICdkZXRhaWwnOiBkZXRhaWwgfSk7IH1cblx0XHRjYXRjaChlKVxuXHRcdHtcblx0XHRcdC8vIGFsbGJhY2sgdG8gY3JlYXRlIGV2ZW50IG9sZCBmYXNoaW9uZWQgd2F5XG5cdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdjdXN0b21FdmVudCcpO1xuXHRcdFx0aWYgKGRldGFpbCkgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuXHRcdFx0ZXZlbnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuXHRcdH1cblxuXHRcdHRyeVxuXHRcdHtcblx0XHRcdGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHRcdGNhdGNoKGUpXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5sb2coJ01BWCBDQUxMIFNUQUNLIEVSUk9SJywgZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhlbGVtZW50LCBldmVudCk7XG5cdFx0fVxuXHR9XG5cbiAgICAvKipcbiAgICAgKiBbcHVibGljXSAtIENsb25lIGFuIG9iamVjdHMgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZVxuICAgICAqIEByZXR1cm4gb2JqZWN0IFRoZSBjbG9uZWQgb2JqZWN0IChub3QgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0KVxuICAgICAqL1xuICAgIHN0YXRpYyBjbG9uZU9iamVjdChvYmopXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpIHJldHVybiBvYmo7XG5cbiAgICAgICAgdmFyIGNsb25lO1xuXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjbG9uZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjbG9uZS5zZXRUaW1lKG9iai5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICB7XG4gICAgICAgICAgICBjbG9uZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG9iai5sZW5ndGg7IGkgPCBsZW47IGkrKykgY2xvbmVbaV0gPSBDb3JlLmNsb25lT2JqZWN0KG9ialtpXSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgT2JqZWN0XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsb25lID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBhdHQgaW4gb2JqKSBpZiAob2JqLmhhc093blByb3BlcnR5KGF0dCkpIGNsb25lW2F0dF0gPSBDb3JlLmNsb25lT2JqZWN0KG9ialthdHRdKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjbG9uZSBvYmplY3QgXCIgKyBvYmogKyBcIiwgIHRoaXMgb2JqZWN0IHR5cGUgaXMgbm90IHN1cHBvcnRlZCBpbiBjb21wb25lbnQgYmx1ZXByaW50cy5cIik7XG4gICAgfVxuXG5cdC8qKlxuXHQgKiBbcHJpdmF0ZV0gLSBBcHBseSBhIHRlbXBsYXRlIHRvIGEgZnJhZ21lbnQgYW5kIGFwcGx5IGJpbmRpbmcgdG8gdGhlIGZyYW1uZXQgY29tcG9uZW50LCBzdG9yZSB0aGlzIGFnYWluc3QgdGhlIGhvc3QgZWxlbWVudFxuXHQgKiBUaGlzIHdpbGwgYWxsb3cgdXMgdG8gYmluZCBhd2F5IHdpdGhvdXQgdGhlIHdvcnJ5IG9mIHdoZXJlIHNjb3BlIGxpZXMsIGFzIGFsbCBjb21wb25lbnQgYmluZGluZyBoYXBwZW5zIGluIGlzb2xhdGlvbi5cblx0ICogb25jZSBhbGwgYmluZGluZyBjb21wbGV0ZSwgd2UgY2FuIG1vdmUgY29udGVudCBhcm91bmQgaW50byBpdCdzIGNvcnJlY3QgcGxhY2UuXG5cdCAqIEBwYXJhbSBodG1sIG9iamVjdCBob3N0IFRoZSBjdXN0b20gZWxlbWVudCB0byBhcHBseSB0aGUgdGVtcGxhdGUgdG9cblx0ICogQHBhcmFtIG9iamVjdCBtb2RlbCBUaGUgbW9kZWwgZGF0YSB0byBhcHBseSB0byB0aGUgaG9zdFxuXHQgKiBAcGFyYW0gb2JqZWN0IGNvbXBvbmVudCBUaGUgd2ViIGNvbXBvbmVudCB0ZW1wbGF0ZSB0byB1c2UgYXMgdGhlIHRlbXBsYXRlIGZvciBidWlsZGluZyB0aGUgaHRtbCBlbGVtZW50XG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlVGVtcGxhdGUoaG9zdCwgbmFtZSwgbW9kZWwsIGNvbXBvbmVudClcblx0e1xuXHRcdGlmICghaG9zdCkgdGhyb3cgJ0hvc3QgY3VzdG9tIGVsZW1lbnQgbm90IHNwZWNpZmllZCwgcGxlYXNlIGFkZCBjdXN0b20gZWxlbWVudCByZWZlcmVuY2Ugb3IgbG9va3VwJztcblxuXHRcdHZhciB0ZW1wbGF0ZSA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZSMnICsgbmFtZSk7XG5cdFx0aWYgKCF0ZW1wbGF0ZSkgcmV0dXJuIGhvc3QucmF6aWxvYmluZCA9IHttb2RlbDogbW9kZWx9O1xuXG5cdFx0Ly8gYmluZCB0byBjb21wb25lbnQgZnJhZ21lbnQgdGhlbiBtb3ZlIGludG8gaG9zdCBodG1sIGFmdGVyIGFsbCBiaW5kcyBjb21wbGV0ZVxuXHRcdHZhciByYiA9IG5ldyBSYXppbG9CaW5kKHtub1BhcmVudEJpbmQ6IHRydWV9KTtcblx0XHRob3N0LmNvbXBvbmVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGhvc3QuY29tcG9uZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQ09NUE9ORU5UJykpO1xuXHRcdGhvc3QuY29tcG9uZW50RnJhZ21lbnQuZmlyc3RDaGlsZC5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG5cdFx0cmIuYmluZChob3N0LmNvbXBvbmVudEZyYWdtZW50LmZpcnN0Q2hpbGQsIG1vZGVsKTtcblxuXHRcdC8vIG1vdmUgYmluZCBkYXRhIGZyb20gY29tcG9uZW50RnJhZ21lbnQgdG8gaG9zdCByZWFkeSBmb3IgYXBwbHlpbmcgdGVtcGxhdGUsIGxlYXZlIHRoaXMgdW50aWwgYWxsIGJpbmRzIGNvbXBsZXRlZCAoc3RvcHMgZHVwbGljYXRlIGJpbmRpbmdzKVxuXHRcdGhvc3QucmF6aWxvYmluZCA9IGhvc3QuY29tcG9uZW50RnJhZ21lbnQuZmlyc3RDaGlsZC5yYXppbG9iaW5kO1xuXHRcdGRlbGV0ZSBob3N0LmNvbXBvbmVudEZyYWdtZW50LmZpcnN0Q2hpbGQucmF6aWxvYmluZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBbcHJpdmF0ZV0gLSBBcHBseSBidWlsdCBjb21wb25lbnQgdG8gdGhlIGhvc3QgZWxlbWVudC4gVGFrZXMgYSBmcmFnbWVudCBjb21wb25lbnQgYW5kIG1lcmdlcyBpdCBpbnRvIHRoZSBob3N0IGh0bWwsIG1peGluZyBhbnkgY29udGVudCBmcm9tIHRoZSBob3N0IGludG8gdGhlIGNvbXBvbmVudCBmcmFnbWVudCBmaXJzdC5cblx0ICogQHBhcmFtIG1peGVkIGhvc3QgVGhlIGN1c3RvbSBlbGVtZW50IHRvIGFwcGx5IHRoZSB0ZW1wbGF0ZSB0bywgdXN1YWxseSAndGhpcycgYnV0IGNhbiBiZSBzZWxlY3RvciBzdHJpbmdcblx0ICovXG5cdHN0YXRpYyBhcHBseVRlbXBsYXRlKGhvc3QpXG5cdHtcblx0XHRpZiAoIWhvc3QuY29tcG9uZW50RnJhZ21lbnQpIHJldHVybjtcblxuXHRcdC8vIGRvIHdlIG5lZWQgdG8gYXBwbHkgYW55IGhvc3QgY29udGVudD8uLi4gcHVsbCBpbnRvIGZyYWdtZW50XG5cdFx0dmFyIG1hdGNoZXMgPSBob3N0LmNvbXBvbmVudEZyYWdtZW50LmZpcnN0Q2hpbGQucXVlcnlTZWxlY3RvckFsbCgnY29udGVudCcpO1xuXHRcdGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0aWYgKG1hdGNoZXNbaV0uaGFzQXR0cmlidXRlKCdzZWxlY3QnKSkge1xuXHRcdFx0XHRcdC8vIHN1YnN0aXR1dGUgZnJhZ21lbnQgY29udGVudCBwbGFjZWhvbGRlcnMgd2l0aCBzZWxlY3RlZCBob3N0IGNvbnRlbnRcblx0XHRcdFx0XHR2YXIgbmFtZSA9IG1hdGNoZXNbaV0uZ2V0QXR0cmlidXRlKCdzZWxlY3QnKTtcblx0XHRcdFx0XHR2YXIgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3IobmFtZSk7XG5cdFx0XHRcdFx0aWYgKGZvdW5kKSBtYXRjaGVzW2ldLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGZvdW5kLCBtYXRjaGVzW2ldKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBtb3ZlIGFsbCBob3N0IGNvbnRlbnQgdG8gZnJhZ21lbnQgcGxhY2Vob2xkZXIgYW5kIHJlbW92ZSBwbGFjZWhvbGRlclxuXHRcdFx0XHRcdHdoaWxlKGhvc3QuZmlyc3RDaGlsZCkgbWF0Y2hlc1tpXS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhvc3QuZmlyc3RDaGlsZCk7XG5cdFx0XHRcdFx0bWF0Y2hlc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1hdGNoZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gdHJhbnNmZXIgb3ZlciB0aGUgZnJhZ21lbnQgdG8gdGhlIGhvc3QgYW5kIHJlbW92ZVxuXHRcdGhvc3QuaW5uZXJIVE1MID0gJyc7XG5cdFx0d2hpbGUgKGhvc3QuY29tcG9uZW50RnJhZ21lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkKSBob3N0LmFwcGVuZENoaWxkKGhvc3QuY29tcG9uZW50RnJhZ21lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkKTtcblx0XHRkZWxldGUgaG9zdC5jb21wb25lbnRGcmFnbWVudDtcblx0fVxufVxuIl19
},{"razilobind":57,"razilobind-core":41}],60:[function(require,module,exports){
'use strict';

/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.24
!function () {
  window.WebComponents = window.WebComponents || { flags: {} };var e = "webcomponents-lite.js",
      t = document.querySelector('script[src*="' + e + '"]'),
      n = {};if (!n.noOpts) {
    if (location.search.slice(1).split("&").forEach(function (e) {
      var t,
          o = e.split("=");o[0] && (t = o[0].match(/wc-(.+)/)) && (n[t[1]] = o[1] || !0);
    }), t) for (var o, r = 0; o = t.attributes[r]; r++) {
      "src" !== o.name && (n[o.name] = o.value || !0);
    }if (n.log && n.log.split) {
      var i = n.log.split(",");n.log = {}, i.forEach(function (e) {
        n.log[e] = !0;
      });
    } else n.log = {};
  }n.register && (window.CustomElements = window.CustomElements || { flags: {} }, window.CustomElements.flags.register = n.register), WebComponents.flags = n;
}(), function (e) {
  "use strict";
  function t(e) {
    return void 0 !== h[e];
  }function n() {
    s.call(this), this._isInvalid = !0;
  }function o(e) {
    return "" == e && n.call(this), e.toLowerCase();
  }function r(e) {
    var t = e.charCodeAt(0);return t > 32 && t < 127 && [34, 35, 60, 62, 63, 96].indexOf(t) == -1 ? e : encodeURIComponent(e);
  }function i(e) {
    var t = e.charCodeAt(0);return t > 32 && t < 127 && [34, 35, 60, 62, 96].indexOf(t) == -1 ? e : encodeURIComponent(e);
  }function a(e, a, s) {
    function c(e) {
      g.push(e);
    }var d = a || "scheme start",
        l = 0,
        u = "",
        w = !1,
        _ = !1,
        g = [];e: for (; (e[l - 1] != p || 0 == l) && !this._isInvalid;) {
      var b = e[l];switch (d) {case "scheme start":
          if (!b || !m.test(b)) {
            if (a) {
              c("Invalid scheme.");break e;
            }u = "", d = "no scheme";continue;
          }u += b.toLowerCase(), d = "scheme";break;case "scheme":
          if (b && v.test(b)) u += b.toLowerCase();else {
            if (":" != b) {
              if (a) {
                if (p == b) break e;c("Code point not allowed in scheme: " + b);break e;
              }u = "", l = 0, d = "no scheme";continue;
            }if (this._scheme = u, u = "", a) break e;t(this._scheme) && (this._isRelative = !0), d = "file" == this._scheme ? "relative" : this._isRelative && s && s._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data";
          }break;case "scheme data":
          "?" == b ? (this._query = "?", d = "query") : "#" == b ? (this._fragment = "#", d = "fragment") : p != b && "\t" != b && "\n" != b && "\r" != b && (this._schemeData += r(b));break;case "no scheme":
          if (s && t(s._scheme)) {
            d = "relative";continue;
          }c("Missing scheme."), n.call(this);break;case "relative or authority":
          if ("/" != b || "/" != e[l + 1]) {
            c("Expected /, got: " + b), d = "relative";continue;
          }d = "authority ignore slashes";break;case "relative":
          if (this._isRelative = !0, "file" != this._scheme && (this._scheme = s._scheme), p == b) {
            this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._username = s._username, this._password = s._password;break e;
          }if ("/" == b || "\\" == b) "\\" == b && c("\\ is an invalid code point."), d = "relative slash";else if ("?" == b) this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = "?", this._username = s._username, this._password = s._password, d = "query";else {
            if ("#" != b) {
              var y = e[l + 1],
                  E = e[l + 2];("file" != this._scheme || !m.test(b) || ":" != y && "|" != y || p != E && "/" != E && "\\" != E && "?" != E && "#" != E) && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password, this._path = s._path.slice(), this._path.pop()), d = "relative path";continue;
            }this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._fragment = "#", this._username = s._username, this._password = s._password, d = "fragment";
          }break;case "relative slash":
          if ("/" != b && "\\" != b) {
            "file" != this._scheme && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password), d = "relative path";continue;
          }"\\" == b && c("\\ is an invalid code point."), d = "file" == this._scheme ? "file host" : "authority ignore slashes";break;case "authority first slash":
          if ("/" != b) {
            c("Expected '/', got: " + b), d = "authority ignore slashes";continue;
          }d = "authority second slash";break;case "authority second slash":
          if (d = "authority ignore slashes", "/" != b) {
            c("Expected '/', got: " + b);continue;
          }break;case "authority ignore slashes":
          if ("/" != b && "\\" != b) {
            d = "authority";continue;
          }c("Expected authority, got: " + b);break;case "authority":
          if ("@" == b) {
            w && (c("@ already seen."), u += "%40"), w = !0;for (var L = 0; L < u.length; L++) {
              var N = u[L];if ("\t" != N && "\n" != N && "\r" != N) {
                if (":" != N || null !== this._password) {
                  var M = r(N);null !== this._password ? this._password += M : this._username += M;
                } else this._password = "";
              } else c("Invalid whitespace in authority.");
            }u = "";
          } else {
            if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
              l -= u.length, u = "", d = "host";continue;
            }u += b;
          }break;case "file host":
          if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
            2 != u.length || !m.test(u[0]) || ":" != u[1] && "|" != u[1] ? 0 == u.length ? d = "relative path start" : (this._host = o.call(this, u), u = "", d = "relative path start") : d = "relative path";continue;
          }"\t" == b || "\n" == b || "\r" == b ? c("Invalid whitespace in file host.") : u += b;break;case "host":case "hostname":
          if (":" != b || _) {
            if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
              if (this._host = o.call(this, u), u = "", d = "relative path start", a) break e;continue;
            }"\t" != b && "\n" != b && "\r" != b ? ("[" == b ? _ = !0 : "]" == b && (_ = !1), u += b) : c("Invalid code point in host/hostname: " + b);
          } else if (this._host = o.call(this, u), u = "", d = "port", "hostname" == a) break e;break;case "port":
          if (/[0-9]/.test(b)) u += b;else {
            if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b || a) {
              if ("" != u) {
                var T = parseInt(u, 10);T != h[this._scheme] && (this._port = T + ""), u = "";
              }if (a) break e;d = "relative path start";continue;
            }"\t" == b || "\n" == b || "\r" == b ? c("Invalid code point in port: " + b) : n.call(this);
          }break;case "relative path start":
          if ("\\" == b && c("'\\' not allowed in path."), d = "relative path", "/" != b && "\\" != b) continue;break;case "relative path":
          if (p != b && "/" != b && "\\" != b && (a || "?" != b && "#" != b)) "\t" != b && "\n" != b && "\r" != b && (u += r(b));else {
            "\\" == b && c("\\ not allowed in relative path.");var O;(O = f[u.toLowerCase()]) && (u = O), ".." == u ? (this._path.pop(), "/" != b && "\\" != b && this._path.push("")) : "." == u && "/" != b && "\\" != b ? this._path.push("") : "." != u && ("file" == this._scheme && 0 == this._path.length && 2 == u.length && m.test(u[0]) && "|" == u[1] && (u = u[0] + ":"), this._path.push(u)), u = "", "?" == b ? (this._query = "?", d = "query") : "#" == b && (this._fragment = "#", d = "fragment");
          }break;case "query":
          a || "#" != b ? p != b && "\t" != b && "\n" != b && "\r" != b && (this._query += i(b)) : (this._fragment = "#", d = "fragment");break;case "fragment":
          p != b && "\t" != b && "\n" != b && "\r" != b && (this._fragment += b);}l++;
    }
  }function s() {
    this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1;
  }function c(e, t) {
    void 0 === t || t instanceof c || (t = new c(String(t))), this._url = e, s.call(this);var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");a.call(this, n, null, t);
  }var d = !1;if (!e.forceJURL) try {
    var l = new URL("b", "http://a");l.pathname = "c%20d", d = "http://a/c%20d" === l.href;
  } catch (u) {}if (!d) {
    var h = Object.create(null);h.ftp = 21, h.file = 0, h.gopher = 70, h.http = 80, h.https = 443, h.ws = 80, h.wss = 443;var f = Object.create(null);f["%2e"] = ".", f[".%2e"] = "..", f["%2e."] = "..", f["%2e%2e"] = "..";var p = void 0,
        m = /[a-zA-Z]/,
        v = /[a-zA-Z0-9\+\-\.]/;c.prototype = { toString: function toString() {
        return this.href;
      }, get href() {
        if (this._isInvalid) return this._url;var e = "";return "" == this._username && null == this._password || (e = this._username + (null != this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment;
      }, set href(e) {
        s.call(this), a.call(this, e);
      }, get protocol() {
        return this._scheme + ":";
      }, set protocol(e) {
        this._isInvalid || a.call(this, e + ":", "scheme start");
      }, get host() {
        return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
      }, set host(e) {
        !this._isInvalid && this._isRelative && a.call(this, e, "host");
      }, get hostname() {
        return this._host;
      }, set hostname(e) {
        !this._isInvalid && this._isRelative && a.call(this, e, "hostname");
      }, get port() {
        return this._port;
      }, set port(e) {
        !this._isInvalid && this._isRelative && a.call(this, e, "port");
      }, get pathname() {
        return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
      }, set pathname(e) {
        !this._isInvalid && this._isRelative && (this._path = [], a.call(this, e, "relative path start"));
      }, get search() {
        return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
      }, set search(e) {
        !this._isInvalid && this._isRelative && (this._query = "?", "?" == e[0] && (e = e.slice(1)), a.call(this, e, "query"));
      }, get hash() {
        return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
      }, set hash(e) {
        this._isInvalid || (this._fragment = "#", "#" == e[0] && (e = e.slice(1)), a.call(this, e, "fragment"));
      }, get origin() {
        var e;if (this._isInvalid || !this._scheme) return "";switch (this._scheme) {case "data":case "file":case "javascript":case "mailto":
            return "null";}return e = this.host, e ? this._scheme + "://" + e : "";
      } };var w = e.URL;w && (c.createObjectURL = function (e) {
      return w.createObjectURL.apply(w, arguments);
    }, c.revokeObjectURL = function (e) {
      w.revokeObjectURL(e);
    }), e.URL = c;
  }
}(self), "undefined" == typeof WeakMap && !function () {
  var e = Object.defineProperty,
      t = Date.now() % 1e9,
      n = function n() {
    this.name = "__st" + (1e9 * Math.random() >>> 0) + (t++ + "__");
  };n.prototype = { set: function set(t, n) {
      var o = t[this.name];return o && o[0] === t ? o[1] = n : e(t, this.name, { value: [t, n], writable: !0 }), this;
    }, get: function get(e) {
      var t;return (t = e[this.name]) && t[0] === e ? t[1] : void 0;
    }, "delete": function _delete(e) {
      var t = e[this.name];return !(!t || t[0] !== e) && (t[0] = t[1] = void 0, !0);
    }, has: function has(e) {
      var t = e[this.name];return !!t && t[0] === e;
    } }, window.WeakMap = n;
}(), function (e) {
  function t(e) {
    b.push(e), g || (g = !0, m(o));
  }function n(e) {
    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(e) || e;
  }function o() {
    g = !1;var e = b;b = [], e.sort(function (e, t) {
      return e.uid_ - t.uid_;
    });var t = !1;e.forEach(function (e) {
      var n = e.takeRecords();r(e), n.length && (e.callback_(n, e), t = !0);
    }), t && o();
  }function r(e) {
    e.nodes_.forEach(function (t) {
      var n = v.get(t);n && n.forEach(function (t) {
        t.observer === e && t.removeTransientObservers();
      });
    });
  }function i(e, t) {
    for (var n = e; n; n = n.parentNode) {
      var o = v.get(n);if (o) for (var r = 0; r < o.length; r++) {
        var i = o[r],
            a = i.options;if (n === e || a.subtree) {
          var s = t(a);s && i.enqueue(s);
        }
      }
    }
  }function a(e) {
    this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++y;
  }function s(e, t) {
    this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
  }function c(e) {
    var t = new s(e.type, e.target);return t.addedNodes = e.addedNodes.slice(), t.removedNodes = e.removedNodes.slice(), t.previousSibling = e.previousSibling, t.nextSibling = e.nextSibling, t.attributeName = e.attributeName, t.attributeNamespace = e.attributeNamespace, t.oldValue = e.oldValue, t;
  }function d(e, t) {
    return E = new s(e, t);
  }function l(e) {
    return L ? L : (L = c(E), L.oldValue = e, L);
  }function u() {
    E = L = void 0;
  }function h(e) {
    return e === L || e === E;
  }function f(e, t) {
    return e === t ? e : L && h(e) ? L : null;
  }function p(e, t, n) {
    this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = [];
  }if (!e.JsMutationObserver) {
    var m,
        v = new WeakMap();if (/Trident|Edge/.test(navigator.userAgent)) m = setTimeout;else if (window.setImmediate) m = window.setImmediate;else {
      var w = [],
          _ = String(Math.random());window.addEventListener("message", function (e) {
        if (e.data === _) {
          var t = w;w = [], t.forEach(function (e) {
            e();
          });
        }
      }), m = function m(e) {
        w.push(e), window.postMessage(_, "*");
      };
    }var g = !1,
        b = [],
        y = 0;a.prototype = { observe: function observe(e, t) {
        if (e = n(e), !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError();var o = v.get(e);o || v.set(e, o = []);for (var r, i = 0; i < o.length; i++) {
          if (o[i].observer === this) {
            r = o[i], r.removeListeners(), r.options = t;break;
          }
        }r || (r = new p(this, e, t), o.push(r), this.nodes_.push(e)), r.addListeners();
      }, disconnect: function disconnect() {
        this.nodes_.forEach(function (e) {
          for (var t = v.get(e), n = 0; n < t.length; n++) {
            var o = t[n];if (o.observer === this) {
              o.removeListeners(), t.splice(n, 1);break;
            }
          }
        }, this), this.records_ = [];
      }, takeRecords: function takeRecords() {
        var e = this.records_;return this.records_ = [], e;
      } };var E, L;p.prototype = { enqueue: function enqueue(e) {
        var n = this.observer.records_,
            o = n.length;if (n.length > 0) {
          var r = n[o - 1],
              i = f(r, e);if (i) return void (n[o - 1] = i);
        } else t(this.observer);n[o] = e;
      }, addListeners: function addListeners() {
        this.addListeners_(this.target);
      }, addListeners_: function addListeners_(e) {
        var t = this.options;t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0);
      }, removeListeners: function removeListeners() {
        this.removeListeners_(this.target);
      }, removeListeners_: function removeListeners_(e) {
        var t = this.options;t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0);
      }, addTransientObserver: function addTransientObserver(e) {
        if (e !== this.target) {
          this.addListeners_(e), this.transientObservedNodes.push(e);var t = v.get(e);t || v.set(e, t = []), t.push(this);
        }
      }, removeTransientObservers: function removeTransientObservers() {
        var e = this.transientObservedNodes;this.transientObservedNodes = [], e.forEach(function (e) {
          this.removeListeners_(e);for (var t = v.get(e), n = 0; n < t.length; n++) {
            if (t[n] === this) {
              t.splice(n, 1);break;
            }
          }
        }, this);
      }, handleEvent: function handleEvent(e) {
        switch (e.stopImmediatePropagation(), e.type) {case "DOMAttrModified":
            var t = e.attrName,
                n = e.relatedNode.namespaceURI,
                o = e.target,
                r = new d("attributes", o);r.attributeName = t, r.attributeNamespace = n;var a = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;i(o, function (e) {
              if (e.attributes && (!e.attributeFilter || !e.attributeFilter.length || e.attributeFilter.indexOf(t) !== -1 || e.attributeFilter.indexOf(n) !== -1)) return e.attributeOldValue ? l(a) : r;
            });break;case "DOMCharacterDataModified":
            var o = e.target,
                r = d("characterData", o),
                a = e.prevValue;i(o, function (e) {
              if (e.characterData) return e.characterDataOldValue ? l(a) : r;
            });break;case "DOMNodeRemoved":
            this.addTransientObserver(e.target);case "DOMNodeInserted":
            var s,
                c,
                h = e.target;"DOMNodeInserted" === e.type ? (s = [h], c = []) : (s = [], c = [h]);var f = h.previousSibling,
                p = h.nextSibling,
                r = d("childList", e.target.parentNode);r.addedNodes = s, r.removedNodes = c, r.previousSibling = f, r.nextSibling = p, i(e.relatedNode, function (e) {
              if (e.childList) return r;
            });}u();
      } }, e.JsMutationObserver = a, e.MutationObserver || (e.MutationObserver = a, a._isPolyfilled = !0);
  }
}(self), function () {
  function e(e) {
    switch (e) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case " ":
        return "&nbsp;";}
  }function t(t) {
    return t.replace(u, e);
  }var n = "undefined" == typeof HTMLTemplateElement;/Trident/.test(navigator.userAgent) && !function () {
    var e = document.importNode;document.importNode = function () {
      var t = e.apply(document, arguments);if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var n = document.createDocumentFragment();return n.appendChild(t), n;
      }return t;
    };
  }();var o = function () {
    if (!n) {
      var e = document.createElement("template"),
          t = document.createElement("template");t.content.appendChild(document.createElement("div")), e.content.appendChild(t);var o = e.cloneNode(!0);return 0 === o.content.childNodes.length || 0 === o.content.firstChild.content.childNodes.length;
    }
  }(),
      r = "template",
      i = function i() {};if (n) {
    var a = document.implementation.createHTMLDocument("template"),
        s = !0,
        c = document.createElement("style");c.textContent = r + "{display:none;}";var d = document.head;d.insertBefore(c, d.firstElementChild), i.prototype = Object.create(HTMLElement.prototype), i.decorate = function (e) {
      if (!e.content) {
        e.content = a.createDocumentFragment();for (var n; n = e.firstChild;) {
          e.content.appendChild(n);
        }if (e.cloneNode = function (e) {
          return i.cloneNode(this, e);
        }, s) try {
          Object.defineProperty(e, "innerHTML", { get: function get() {
              for (var e = "", n = this.content.firstChild; n; n = n.nextSibling) {
                e += n.outerHTML || t(n.data);
              }return e;
            }, set: function set(e) {
              for (a.body.innerHTML = e, i.bootstrap(a); this.content.firstChild;) {
                this.content.removeChild(this.content.firstChild);
              }for (; a.body.firstChild;) {
                this.content.appendChild(a.body.firstChild);
              }
            }, configurable: !0 });
        } catch (o) {
          s = !1;
        }i.bootstrap(e.content);
      }
    }, i.bootstrap = function (e) {
      for (var t, n = e.querySelectorAll(r), o = 0, a = n.length; o < a && (t = n[o]); o++) {
        i.decorate(t);
      }
    }, document.addEventListener("DOMContentLoaded", function () {
      i.bootstrap(document);
    });var l = document.createElement;document.createElement = function () {
      "use strict";
      var e = l.apply(document, arguments);return "template" === e.localName && i.decorate(e), e;
    };var u = /[&\u00A0<>]/g;
  }if (n || o) {
    var h = Node.prototype.cloneNode;i.cloneNode = function (e, t) {
      var n = h.call(e, !1);return this.decorate && this.decorate(n), t && (n.content.appendChild(h.call(e.content, !0)), this.fixClonedDom(n.content, e.content)), n;
    }, i.fixClonedDom = function (e, t) {
      if (t.querySelectorAll) for (var n, o, i = t.querySelectorAll(r), a = e.querySelectorAll(r), s = 0, c = a.length; s < c; s++) {
        o = i[s], n = a[s], this.decorate && this.decorate(o), n.parentNode.replaceChild(o.cloneNode(!0), n);
      }
    };var f = document.importNode;Node.prototype.cloneNode = function (e) {
      var t = h.call(this, e);return e && i.fixClonedDom(t, this), t;
    }, document.importNode = function (e, t) {
      if (e.localName === r) return i.cloneNode(e, t);var n = f.call(document, e, t);return t && i.fixClonedDom(n, e), n;
    }, o && (HTMLTemplateElement.prototype.cloneNode = function (e) {
      return i.cloneNode(this, e);
    });
  }n && (window.HTMLTemplateElement = i);
}(), function (e) {
  "use strict";
  if (!window.performance || !window.performance.now) {
    var t = Date.now();window.performance = { now: function now() {
        return Date.now() - t;
      } };
  }window.requestAnimationFrame || (window.requestAnimationFrame = function () {
    var e = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;return e ? function (t) {
      return e(function () {
        t(performance.now());
      });
    } : function (e) {
      return window.setTimeout(e, 1e3 / 60);
    };
  }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function () {
    return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (e) {
      clearTimeout(e);
    };
  }());var n = function () {
    var e = document.createEvent("Event");return e.initEvent("foo", !0, !0), e.preventDefault(), e.defaultPrevented;
  }();if (!n) {
    var o = Event.prototype.preventDefault;Event.prototype.preventDefault = function () {
      this.cancelable && (o.call(this), Object.defineProperty(this, "defaultPrevented", { get: function get() {
          return !0;
        }, configurable: !0 }));
    };
  }var r = /Trident/.test(navigator.userAgent);if ((!window.CustomEvent || r && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (e, t) {
    t = t || {};var n = document.createEvent("CustomEvent");return n.initCustomEvent(e, Boolean(t.bubbles), Boolean(t.cancelable), t.detail), n;
  }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || r && "function" != typeof window.Event) {
    var i = window.Event;window.Event = function (e, t) {
      t = t || {};var n = document.createEvent("Event");return n.initEvent(e, Boolean(t.bubbles), Boolean(t.cancelable)), n;
    }, window.Event.prototype = i.prototype;
  }
}(window.WebComponents), window.HTMLImports = window.HTMLImports || { flags: {} }, function (e) {
  function t(e, t) {
    t = t || p, o(function () {
      i(e, t);
    }, t);
  }function n(e) {
    return "complete" === e.readyState || e.readyState === w;
  }function o(e, t) {
    if (n(t)) e && e();else {
      var r = function r() {
        "complete" !== t.readyState && t.readyState !== w || (t.removeEventListener(_, r), o(e, t));
      };t.addEventListener(_, r);
    }
  }function r(e) {
    e.target.__loaded = !0;
  }function i(e, t) {
    function n() {
      c == d && e && e({ allImports: s, loadedImports: l, errorImports: u });
    }function o(e) {
      r(e), l.push(this), c++, n();
    }function i(e) {
      u.push(this), c++, n();
    }var s = t.querySelectorAll("link[rel=import]"),
        c = 0,
        d = s.length,
        l = [],
        u = [];if (d) for (var h, f = 0; f < d && (h = s[f]); f++) {
      a(h) ? (l.push(this), c++, n()) : (h.addEventListener("load", o), h.addEventListener("error", i));
    } else n();
  }function a(e) {
    return u ? e.__loaded || e["import"] && "loading" !== e["import"].readyState : e.__importParsed;
  }function s(e) {
    for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
      c(t) && d(t);
    }
  }function c(e) {
    return "link" === e.localName && "import" === e.rel;
  }function d(e) {
    var t = e["import"];t ? r({ target: e }) : (e.addEventListener("load", r), e.addEventListener("error", r));
  }var l = "import",
      u = Boolean(l in document.createElement("link")),
      h = Boolean(window.ShadowDOMPolyfill),
      f = function f(e) {
    return h ? window.ShadowDOMPolyfill.wrapIfNeeded(e) : e;
  },
      p = f(document),
      m = { get: function get() {
      var e = window.HTMLImports.currentScript || document.currentScript || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);return f(e);
    }, configurable: !0 };Object.defineProperty(document, "_currentScript", m), Object.defineProperty(p, "_currentScript", m);var v = /Trident/.test(navigator.userAgent),
      w = v ? "complete" : "interactive",
      _ = "readystatechange";u && (new MutationObserver(function (e) {
    for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
      t.addedNodes && s(t.addedNodes);
    }
  }).observe(document.head, { childList: !0 }), function () {
    if ("loading" === document.readyState) for (var e, t = document.querySelectorAll("link[rel=import]"), n = 0, o = t.length; n < o && (e = t[n]); n++) {
      d(e);
    }
  }()), t(function (e) {
    window.HTMLImports.ready = !0, window.HTMLImports.readyTime = new Date().getTime();var t = p.createEvent("CustomEvent");t.initCustomEvent("HTMLImportsLoaded", !0, !0, e), p.dispatchEvent(t);
  }), e.IMPORT_LINK_TYPE = l, e.useNative = u, e.rootDocument = p, e.whenReady = t, e.isIE = v;
}(window.HTMLImports), function (e) {
  var t = [],
      n = function n(e) {
    t.push(e);
  },
      o = function o() {
    t.forEach(function (t) {
      t(e);
    });
  };e.addModule = n, e.initializeModules = o;
}(window.HTMLImports), window.HTMLImports.addModule(function (e) {
  var t = /(url\()([^)]*)(\))/g,
      n = /(@import[\s]+(?!url\())([^;]*)(;)/g,
      o = { resolveUrlsInStyle: function resolveUrlsInStyle(e, t) {
      var n = e.ownerDocument,
          o = n.createElement("a");return e.textContent = this.resolveUrlsInCssText(e.textContent, t, o), e;
    }, resolveUrlsInCssText: function resolveUrlsInCssText(e, o, r) {
      var i = this.replaceUrls(e, r, o, t);return i = this.replaceUrls(i, r, o, n);
    }, replaceUrls: function replaceUrls(e, t, n, o) {
      return e.replace(o, function (e, o, r, i) {
        var a = r.replace(/["']/g, "");return n && (a = new URL(a, n).href), t.href = a, a = t.href, o + "'" + a + "'" + i;
      });
    } };e.path = o;
}), window.HTMLImports.addModule(function (e) {
  var t = { async: !0, ok: function ok(e) {
      return e.status >= 200 && e.status < 300 || 304 === e.status || 0 === e.status;
    }, load: function load(n, o, r) {
      var i = new XMLHttpRequest();return (e.flags.debug || e.flags.bust) && (n += "?" + Math.random()), i.open("GET", n, t.async), i.addEventListener("readystatechange", function (e) {
        if (4 === i.readyState) {
          var n = null;try {
            var a = i.getResponseHeader("Location");a && (n = "/" === a.substr(0, 1) ? location.origin + a : a);
          } catch (e) {
            console.error(e.message);
          }o.call(r, !t.ok(i) && i, i.response || i.responseText, n);
        }
      }), i.send(), i;
    }, loadDocument: function loadDocument(e, t, n) {
      this.load(e, t, n).responseType = "document";
    } };e.xhr = t;
}), window.HTMLImports.addModule(function (e) {
  var t = e.xhr,
      n = e.flags,
      o = function o(e, t) {
    this.cache = {}, this.onload = e, this.oncomplete = t, this.inflight = 0, this.pending = {};
  };o.prototype = { addNodes: function addNodes(e) {
      this.inflight += e.length;for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
        this.require(t);
      }this.checkDone();
    }, addNode: function addNode(e) {
      this.inflight++, this.require(e), this.checkDone();
    }, require: function require(e) {
      var t = e.src || e.href;e.__nodeUrl = t, this.dedupe(t, e) || this.fetch(t, e);
    }, dedupe: function dedupe(e, t) {
      if (this.pending[e]) return this.pending[e].push(t), !0;return this.cache[e] ? (this.onload(e, t, this.cache[e]), this.tail(), !0) : (this.pending[e] = [t], !1);
    }, fetch: function fetch(e, o) {
      if (n.load && console.log("fetch", e, o), e) {
        if (e.match(/^data:/)) {
          var r = e.split(","),
              i = r[0],
              a = r[1];a = i.indexOf(";base64") > -1 ? atob(a) : decodeURIComponent(a), setTimeout(function () {
            this.receive(e, o, null, a);
          }.bind(this), 0);
        } else {
          var s = function (t, n, r) {
            this.receive(e, o, t, n, r);
          }.bind(this);t.load(e, s);
        }
      } else setTimeout(function () {
        this.receive(e, o, { error: "href must be specified" }, null);
      }.bind(this), 0);
    }, receive: function receive(e, t, n, o, r) {
      this.cache[e] = o;for (var i, a = this.pending[e], s = 0, c = a.length; s < c && (i = a[s]); s++) {
        this.onload(e, i, o, n, r), this.tail();
      }this.pending[e] = null;
    }, tail: function tail() {
      --this.inflight, this.checkDone();
    }, checkDone: function checkDone() {
      this.inflight || this.oncomplete();
    } }, e.Loader = o;
}), window.HTMLImports.addModule(function (e) {
  var t = function t(e) {
    this.addCallback = e, this.mo = new MutationObserver(this.handler.bind(this));
  };t.prototype = { handler: function handler(e) {
      for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
        "childList" === t.type && t.addedNodes.length && this.addedNodes(t.addedNodes);
      }
    }, addedNodes: function addedNodes(e) {
      this.addCallback && this.addCallback(e);for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
        t.children && t.children.length && this.addedNodes(t.children);
      }
    }, observe: function observe(e) {
      this.mo.observe(e, { childList: !0, subtree: !0 });
    } }, e.Observer = t;
}), window.HTMLImports.addModule(function (e) {
  function t(e) {
    return "link" === e.localName && e.rel === l;
  }function n(e) {
    var t = o(e);return "data:text/javascript;charset=utf-8," + encodeURIComponent(t);
  }function o(e) {
    return e.textContent + r(e);
  }function r(e) {
    var t = e.ownerDocument;t.__importedScripts = t.__importedScripts || 0;var n = e.ownerDocument.baseURI,
        o = t.__importedScripts ? "-" + t.__importedScripts : "";return t.__importedScripts++, "\n//# sourceURL=" + n + o + ".js\n";
  }function i(e) {
    var t = e.ownerDocument.createElement("style");return t.textContent = e.textContent, a.resolveUrlsInStyle(t), t;
  }var a = e.path,
      s = e.rootDocument,
      c = e.flags,
      d = e.isIE,
      l = e.IMPORT_LINK_TYPE,
      u = "link[rel=" + l + "]",
      h = { documentSelectors: u, importsSelectors: [u, "link[rel=stylesheet]:not([type])", "style:not([type])", "script:not([type])", 'script[type="application/javascript"]', 'script[type="text/javascript"]'].join(","), map: { link: "parseLink", script: "parseScript", style: "parseStyle" }, dynamicElements: [], parseNext: function parseNext() {
      var e = this.nextToParse();e && this.parse(e);
    }, parse: function parse(e) {
      if (this.isParsed(e)) return void (c.parse && console.log("[%s] is already parsed", e.localName));var t = this[this.map[e.localName]];t && (this.markParsing(e), t.call(this, e));
    }, parseDynamic: function parseDynamic(e, t) {
      this.dynamicElements.push(e), t || this.parseNext();
    }, markParsing: function markParsing(e) {
      c.parse && console.log("parsing", e), this.parsingElement = e;
    }, markParsingComplete: function markParsingComplete(e) {
      e.__importParsed = !0, this.markDynamicParsingComplete(e), e.__importElement && (e.__importElement.__importParsed = !0, this.markDynamicParsingComplete(e.__importElement)), this.parsingElement = null, c.parse && console.log("completed", e);
    }, markDynamicParsingComplete: function markDynamicParsingComplete(e) {
      var t = this.dynamicElements.indexOf(e);t >= 0 && this.dynamicElements.splice(t, 1);
    }, parseImport: function parseImport(e) {
      if (e["import"] = e.__doc, window.HTMLImports.__importsParsingHook && window.HTMLImports.__importsParsingHook(e), e["import"] && (e["import"].__importParsed = !0), this.markParsingComplete(e), e.__resource && !e.__error ? e.dispatchEvent(new CustomEvent("load", { bubbles: !1 })) : e.dispatchEvent(new CustomEvent("error", { bubbles: !1 })), e.__pending) for (var t; e.__pending.length;) {
        t = e.__pending.shift(), t && t({ target: e });
      }this.parseNext();
    }, parseLink: function parseLink(e) {
      t(e) ? this.parseImport(e) : (e.href = e.href, this.parseGeneric(e));
    }, parseStyle: function parseStyle(e) {
      var t = e;e = i(e), t.__appliedElement = e, e.__importElement = t, this.parseGeneric(e);
    }, parseGeneric: function parseGeneric(e) {
      this.trackElement(e), this.addElementToDocument(e);
    }, rootImportForElement: function rootImportForElement(e) {
      for (var t = e; t.ownerDocument.__importLink;) {
        t = t.ownerDocument.__importLink;
      }return t;
    }, addElementToDocument: function addElementToDocument(e) {
      var t = this.rootImportForElement(e.__importElement || e);t.parentNode.insertBefore(e, t);
    }, trackElement: function trackElement(e, t) {
      var n = this,
          o = function o(r) {
        e.removeEventListener("load", o), e.removeEventListener("error", o), t && t(r), n.markParsingComplete(e), n.parseNext();
      };if (e.addEventListener("load", o), e.addEventListener("error", o), d && "style" === e.localName) {
        var r = !1;if (e.textContent.indexOf("@import") == -1) r = !0;else if (e.sheet) {
          r = !0;for (var i, a = e.sheet.cssRules, s = a ? a.length : 0, c = 0; c < s && (i = a[c]); c++) {
            i.type === CSSRule.IMPORT_RULE && (r = r && Boolean(i.styleSheet));
          }
        }r && setTimeout(function () {
          e.dispatchEvent(new CustomEvent("load", { bubbles: !1 }));
        });
      }
    }, parseScript: function parseScript(t) {
      var o = document.createElement("script");o.__importElement = t, o.src = t.src ? t.src : n(t), e.currentScript = t, this.trackElement(o, function (t) {
        o.parentNode && o.parentNode.removeChild(o), e.currentScript = null;
      }), this.addElementToDocument(o);
    }, nextToParse: function nextToParse() {
      return this._mayParse = [], !this.parsingElement && (this.nextToParseInDoc(s) || this.nextToParseDynamic());
    }, nextToParseInDoc: function nextToParseInDoc(e, n) {
      if (e && this._mayParse.indexOf(e) < 0) {
        this._mayParse.push(e);for (var o, r = e.querySelectorAll(this.parseSelectorsForNode(e)), i = 0, a = r.length; i < a && (o = r[i]); i++) {
          if (!this.isParsed(o)) return this.hasResource(o) ? t(o) ? this.nextToParseInDoc(o.__doc, o) : o : void 0;
        }
      }return n;
    }, nextToParseDynamic: function nextToParseDynamic() {
      return this.dynamicElements[0];
    }, parseSelectorsForNode: function parseSelectorsForNode(e) {
      var t = e.ownerDocument || e;return t === s ? this.documentSelectors : this.importsSelectors;
    }, isParsed: function isParsed(e) {
      return e.__importParsed;
    }, needsDynamicParsing: function needsDynamicParsing(e) {
      return this.dynamicElements.indexOf(e) >= 0;
    }, hasResource: function hasResource(e) {
      return !t(e) || void 0 !== e.__doc;
    } };e.parser = h, e.IMPORT_SELECTOR = u;
}), window.HTMLImports.addModule(function (e) {
  function t(e) {
    return n(e, a);
  }function n(e, t) {
    return "link" === e.localName && e.getAttribute("rel") === t;
  }function o(e) {
    return !!Object.getOwnPropertyDescriptor(e, "baseURI");
  }function r(e, t) {
    var n = document.implementation.createHTMLDocument(a);n._URL = t;var r = n.createElement("base");r.setAttribute("href", t), n.baseURI || o(n) || Object.defineProperty(n, "baseURI", { value: t });var i = n.createElement("meta");return i.setAttribute("charset", "utf-8"), n.head.appendChild(i), n.head.appendChild(r), n.body.innerHTML = e, window.HTMLTemplateElement && HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(n), n;
  }var i = e.flags,
      a = e.IMPORT_LINK_TYPE,
      s = e.IMPORT_SELECTOR,
      c = e.rootDocument,
      d = e.Loader,
      l = e.Observer,
      u = e.parser,
      h = { documents: {}, documentPreloadSelectors: s, importsPreloadSelectors: [s].join(","), loadNode: function loadNode(e) {
      f.addNode(e);
    }, loadSubtree: function loadSubtree(e) {
      var t = this.marshalNodes(e);f.addNodes(t);
    }, marshalNodes: function marshalNodes(e) {
      return e.querySelectorAll(this.loadSelectorsForNode(e));
    }, loadSelectorsForNode: function loadSelectorsForNode(e) {
      var t = e.ownerDocument || e;return t === c ? this.documentPreloadSelectors : this.importsPreloadSelectors;
    }, loaded: function loaded(e, n, o, a, s) {
      if (i.load && console.log("loaded", e, n), n.__resource = o, n.__error = a, t(n)) {
        var c = this.documents[e];void 0 === c && (c = a ? null : r(o, s || e), c && (c.__importLink = n, this.bootDocument(c)), this.documents[e] = c), n.__doc = c;
      }u.parseNext();
    }, bootDocument: function bootDocument(e) {
      this.loadSubtree(e), this.observer.observe(e), u.parseNext();
    }, loadedAll: function loadedAll() {
      u.parseNext();
    } },
      f = new d(h.loaded.bind(h), h.loadedAll.bind(h));if (h.observer = new l(), !document.baseURI) {
    var p = { get: function get() {
        var e = document.querySelector("base");return e ? e.href : window.location.href;
      }, configurable: !0 };Object.defineProperty(document, "baseURI", p), Object.defineProperty(c, "baseURI", p);
  }e.importer = h, e.importLoader = f;
}), window.HTMLImports.addModule(function (e) {
  var t = e.parser,
      n = e.importer,
      o = { added: function added(e) {
      for (var o, r, i, a, s = 0, c = e.length; s < c && (a = e[s]); s++) {
        o || (o = a.ownerDocument, r = t.isParsed(o)), i = this.shouldLoadNode(a), i && n.loadNode(a), this.shouldParseNode(a) && r && t.parseDynamic(a, i);
      }
    }, shouldLoadNode: function shouldLoadNode(e) {
      return 1 === e.nodeType && r.call(e, n.loadSelectorsForNode(e));
    }, shouldParseNode: function shouldParseNode(e) {
      return 1 === e.nodeType && r.call(e, t.parseSelectorsForNode(e));
    } };n.observer.addCallback = o.added.bind(o);var r = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
}), function (e) {
  function t() {
    window.HTMLImports.importer.bootDocument(o);
  }var n = e.initializeModules;e.isIE;if (!e.useNative) {
    n();var o = e.rootDocument;"complete" === document.readyState || "interactive" === document.readyState && !window.attachEvent ? t() : document.addEventListener("DOMContentLoaded", t);
  }
}(window.HTMLImports), window.CustomElements = window.CustomElements || { flags: {} }, function (e) {
  var t = e.flags,
      n = [],
      o = function o(e) {
    n.push(e);
  },
      r = function r() {
    n.forEach(function (t) {
      t(e);
    });
  };e.addModule = o, e.initializeModules = r, e.hasNative = Boolean(document.registerElement), e.isIE = /Trident/.test(navigator.userAgent), e.useNative = !t.register && e.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
}(window.CustomElements), window.CustomElements.addModule(function (e) {
  function t(e, t) {
    n(e, function (e) {
      return !!t(e) || void o(e, t);
    }), o(e, t);
  }function n(e, t, o) {
    var r = e.firstElementChild;if (!r) for (r = e.firstChild; r && r.nodeType !== Node.ELEMENT_NODE;) {
      r = r.nextSibling;
    }for (; r;) {
      t(r, o) !== !0 && n(r, t, o), r = r.nextElementSibling;
    }return null;
  }function o(e, n) {
    for (var o = e.shadowRoot; o;) {
      t(o, n), o = o.olderShadowRoot;
    }
  }function r(e, t) {
    i(e, t, []);
  }function i(e, t, n) {
    if (e = window.wrap(e), !(n.indexOf(e) >= 0)) {
      n.push(e);for (var o, r = e.querySelectorAll("link[rel=" + a + "]"), s = 0, c = r.length; s < c && (o = r[s]); s++) {
        o["import"] && i(o["import"], t, n);
      }t(e);
    }
  }var a = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";e.forDocumentTree = r, e.forSubtree = t;
}), window.CustomElements.addModule(function (e) {
  function t(e, t) {
    return n(e, t) || o(e, t);
  }function n(t, n) {
    return !!e.upgrade(t, n) || void (n && a(t));
  }function o(e, t) {
    g(e, function (e) {
      if (n(e, t)) return !0;
    });
  }function r(e) {
    L.push(e), E || (E = !0, setTimeout(i));
  }function i() {
    E = !1;for (var e, t = L, n = 0, o = t.length; n < o && (e = t[n]); n++) {
      e();
    }L = [];
  }function a(e) {
    y ? r(function () {
      s(e);
    }) : s(e);
  }function s(e) {
    e.__upgraded__ && !e.__attached && (e.__attached = !0, e.attachedCallback && e.attachedCallback());
  }function c(e) {
    d(e), g(e, function (e) {
      d(e);
    });
  }function d(e) {
    y ? r(function () {
      l(e);
    }) : l(e);
  }function l(e) {
    e.__upgraded__ && e.__attached && (e.__attached = !1, e.detachedCallback && e.detachedCallback());
  }function u(e) {
    for (var t = e, n = window.wrap(document); t;) {
      if (t == n) return !0;t = t.parentNode || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host;
    }
  }function h(e) {
    if (e.shadowRoot && !e.shadowRoot.__watched) {
      _.dom && console.log("watching shadow-root for: ", e.localName);for (var t = e.shadowRoot; t;) {
        m(t), t = t.olderShadowRoot;
      }
    }
  }function f(e, n) {
    if (_.dom) {
      var o = n[0];if (o && "childList" === o.type && o.addedNodes && o.addedNodes) {
        for (var r = o.addedNodes[0]; r && r !== document && !r.host;) {
          r = r.parentNode;
        }var i = r && (r.URL || r._URL || r.host && r.host.localName) || "";i = i.split("/?").shift().split("/").pop();
      }console.group("mutations (%d) [%s]", n.length, i || "");
    }var a = u(e);n.forEach(function (e) {
      "childList" === e.type && (N(e.addedNodes, function (e) {
        e.localName && t(e, a);
      }), N(e.removedNodes, function (e) {
        e.localName && c(e);
      }));
    }), _.dom && console.groupEnd();
  }function p(e) {
    for (e = window.wrap(e), e || (e = window.wrap(document)); e.parentNode;) {
      e = e.parentNode;
    }var t = e.__observer;t && (f(e, t.takeRecords()), i());
  }function m(e) {
    if (!e.__observer) {
      var t = new MutationObserver(f.bind(this, e));t.observe(e, { childList: !0, subtree: !0 }), e.__observer = t;
    }
  }function v(e) {
    e = window.wrap(e), _.dom && console.group("upgradeDocument: ", e.baseURI.split("/").pop());var n = e === window.wrap(document);t(e, n), m(e), _.dom && console.groupEnd();
  }function w(e) {
    b(e, v);
  }var _ = e.flags,
      g = e.forSubtree,
      b = e.forDocumentTree,
      y = window.MutationObserver._isPolyfilled && _["throttle-attached"];e.hasPolyfillMutations = y, e.hasThrottledAttached = y;var E = !1,
      L = [],
      N = Array.prototype.forEach.call.bind(Array.prototype.forEach),
      M = Element.prototype.createShadowRoot;M && (Element.prototype.createShadowRoot = function () {
    var e = M.call(this);return window.CustomElements.watchShadow(this), e;
  }), e.watchShadow = h, e.upgradeDocumentTree = w, e.upgradeDocument = v, e.upgradeSubtree = o, e.upgradeAll = t, e.attached = a, e.takeRecords = p;
}), window.CustomElements.addModule(function (e) {
  function t(t, o) {
    if ("template" === t.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(t), !t.__upgraded__ && t.nodeType === Node.ELEMENT_NODE) {
      var r = t.getAttribute("is"),
          i = e.getRegisteredDefinition(t.localName) || e.getRegisteredDefinition(r);if (i && (r && i.tag == t.localName || !r && !i["extends"])) return n(t, i, o);
    }
  }function n(t, n, r) {
    return a.upgrade && console.group("upgrade:", t.localName), n.is && t.setAttribute("is", n.is), o(t, n), t.__upgraded__ = !0, i(t), r && e.attached(t), e.upgradeSubtree(t, r), a.upgrade && console.groupEnd(), t;
  }function o(e, t) {
    Object.__proto__ ? e.__proto__ = t.prototype : (r(e, t.prototype, t["native"]), e.__proto__ = t.prototype);
  }function r(e, t, n) {
    for (var o = {}, r = t; r !== n && r !== HTMLElement.prototype;) {
      for (var i, a = Object.getOwnPropertyNames(r), s = 0; i = a[s]; s++) {
        o[i] || (Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i)), o[i] = 1);
      }r = Object.getPrototypeOf(r);
    }
  }function i(e) {
    e.createdCallback && e.createdCallback();
  }var a = e.flags;e.upgrade = t, e.upgradeWithDefinition = n, e.implementPrototype = o;
}), window.CustomElements.addModule(function (e) {
  function t(t, o) {
    var c = o || {};if (!t) throw new Error("document.registerElement: first argument `name` must not be empty");if (t.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(t) + "'.");if (r(t)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(t) + "'. The type name is invalid.");if (d(t)) throw new Error("DuplicateDefinitionError: a type with name '" + String(t) + "' is already registered");return c.prototype || (c.prototype = Object.create(HTMLElement.prototype)), c.__name = t.toLowerCase(), c["extends"] && (c["extends"] = c["extends"].toLowerCase()), c.lifecycle = c.lifecycle || {}, c.ancestry = i(c["extends"]), a(c), s(c), n(c.prototype), l(c.__name, c), c.ctor = u(c), c.ctor.prototype = c.prototype, c.prototype.constructor = c.ctor, e.ready && v(document), c.ctor;
  }function n(e) {
    if (!e.setAttribute._polyfilled) {
      var t = e.setAttribute;e.setAttribute = function (e, n) {
        o.call(this, e, n, t);
      };var n = e.removeAttribute;e.removeAttribute = function (e) {
        o.call(this, e, null, n);
      }, e.setAttribute._polyfilled = !0;
    }
  }function o(e, t, n) {
    e = e.toLowerCase();var o = this.getAttribute(e);n.apply(this, arguments);var r = this.getAttribute(e);this.attributeChangedCallback && r !== o && this.attributeChangedCallback(e, o, r);
  }function r(e) {
    for (var t = 0; t < y.length; t++) {
      if (e === y[t]) return !0;
    }
  }function i(e) {
    var t = d(e);return t ? i(t["extends"]).concat([t]) : [];
  }function a(e) {
    for (var t, n = e["extends"], o = 0; t = e.ancestry[o]; o++) {
      n = t.is && t.tag;
    }e.tag = n || e.__name, n && (e.is = e.__name);
  }function s(e) {
    if (!Object.__proto__) {
      var t = HTMLElement.prototype;if (e.is) {
        var n = document.createElement(e.tag);t = Object.getPrototypeOf(n);
      }for (var o, r = e.prototype, i = !1; r;) {
        r == t && (i = !0), o = Object.getPrototypeOf(r), o && (r.__proto__ = o), r = o;
      }i || console.warn(e.tag + " prototype not found in prototype chain for " + e.is), e["native"] = t;
    }
  }function c(e) {
    return _(N(e.tag), e);
  }function d(e) {
    if (e) return E[e.toLowerCase()];
  }function l(e, t) {
    E[e] = t;
  }function u(e) {
    return function () {
      return c(e);
    };
  }function h(e, t, n) {
    return e === L ? f(t, n) : M(e, t);
  }function f(e, t) {
    e && (e = e.toLowerCase()), t && (t = t.toLowerCase());var n = d(t || e);if (n) {
      if (e == n.tag && t == n.is) return new n.ctor();if (!t && !n.is) return new n.ctor();
    }var o;return t ? (o = f(e), o.setAttribute("is", t), o) : (o = N(e), e.indexOf("-") >= 0 && g(o, HTMLElement), o);
  }function p(e, t) {
    var n = e[t];e[t] = function () {
      var e = n.apply(this, arguments);return w(e), e;
    };
  }var m,
      v = (e.isIE, e.upgradeDocumentTree),
      w = e.upgradeAll,
      _ = e.upgradeWithDefinition,
      g = e.implementPrototype,
      b = e.useNative,
      y = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
      E = {},
      L = "http://www.w3.org/1999/xhtml",
      N = document.createElement.bind(document),
      M = document.createElementNS.bind(document);m = Object.__proto__ || b ? function (e, t) {
    return e instanceof t;
  } : function (e, t) {
    if (e instanceof t) return !0;for (var n = e; n;) {
      if (n === t.prototype) return !0;n = n.__proto__;
    }return !1;
  }, p(Node.prototype, "cloneNode"), p(document, "importNode"), document.registerElement = t, document.createElement = f, document.createElementNS = h, e.registry = E, e["instanceof"] = m, e.reservedTagList = y, e.getRegisteredDefinition = d, document.register = document.registerElement;
}), function (e) {
  function t() {
    i(window.wrap(document)), window.CustomElements.ready = !0;var e = window.requestAnimationFrame || function (e) {
      setTimeout(e, 16);
    };e(function () {
      setTimeout(function () {
        window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: !0 }));
      });
    });
  }var n = e.useNative,
      o = e.initializeModules;e.isIE;if (n) {
    var r = function r() {};e.watchShadow = r, e.upgrade = r, e.upgradeAll = r, e.upgradeDocumentTree = r, e.upgradeSubtree = r, e.takeRecords = r, e["instanceof"] = function (e, t) {
      return e instanceof t;
    };
  } else o();var i = e.upgradeDocumentTree,
      a = e.upgradeDocument;if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function (e) {
    return e;
  }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function (e) {
    e["import"] && a(wrap(e["import"]));
  }), "complete" === document.readyState || e.flags.eager) t();else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
    var s = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";window.addEventListener(s, t);
  } else t();
}(window.CustomElements), function (e) {
  var t = document.createElement("style");t.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var n = document.querySelector("head");n.insertBefore(t, n.firstChild);
}(window.WebComponents);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmNvbXBvbmVudHMtbGl0ZS5taW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiV2ViQ29tcG9uZW50cyIsImZsYWdzIiwiZSIsInQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuIiwibm9PcHRzIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInNwbGl0IiwiZm9yRWFjaCIsIm8iLCJtYXRjaCIsInIiLCJhdHRyaWJ1dGVzIiwibmFtZSIsInZhbHVlIiwibG9nIiwiaSIsInJlZ2lzdGVyIiwiQ3VzdG9tRWxlbWVudHMiLCJoIiwicyIsImNhbGwiLCJfaXNJbnZhbGlkIiwidG9Mb3dlckNhc2UiLCJjaGFyQ29kZUF0IiwiaW5kZXhPZiIsImVuY29kZVVSSUNvbXBvbmVudCIsImEiLCJjIiwiZyIsInB1c2giLCJkIiwibCIsInUiLCJ3IiwiXyIsInAiLCJiIiwibSIsInRlc3QiLCJ2IiwiX3NjaGVtZSIsIl9pc1JlbGF0aXZlIiwiX3F1ZXJ5IiwiX2ZyYWdtZW50IiwiX3NjaGVtZURhdGEiLCJfaG9zdCIsIl9wb3J0IiwiX3BhdGgiLCJfdXNlcm5hbWUiLCJfcGFzc3dvcmQiLCJ5IiwiRSIsInBvcCIsIkwiLCJsZW5ndGgiLCJOIiwiTSIsIlQiLCJwYXJzZUludCIsIk8iLCJmIiwiU3RyaW5nIiwiX3VybCIsInJlcGxhY2UiLCJmb3JjZUpVUkwiLCJVUkwiLCJwYXRobmFtZSIsImhyZWYiLCJPYmplY3QiLCJjcmVhdGUiLCJmdHAiLCJmaWxlIiwiZ29waGVyIiwiaHR0cCIsImh0dHBzIiwid3MiLCJ3c3MiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsInByb3RvY29sIiwiaG9zdCIsImhvc3RuYW1lIiwicG9ydCIsImpvaW4iLCJoYXNoIiwib3JpZ2luIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZXZva2VPYmplY3RVUkwiLCJzZWxmIiwiV2Vha01hcCIsImRlZmluZVByb3BlcnR5IiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJyYW5kb20iLCJzZXQiLCJ3cml0YWJsZSIsImdldCIsImhhcyIsIlNoYWRvd0RPTVBvbHlmaWxsIiwid3JhcElmTmVlZGVkIiwic29ydCIsInVpZF8iLCJ0YWtlUmVjb3JkcyIsImNhbGxiYWNrXyIsIm5vZGVzXyIsIm9ic2VydmVyIiwicmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzIiwicGFyZW50Tm9kZSIsIm9wdGlvbnMiLCJzdWJ0cmVlIiwiZW5xdWV1ZSIsInJlY29yZHNfIiwidHlwZSIsInRhcmdldCIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVOYW1lc3BhY2UiLCJvbGRWYWx1ZSIsInRyYW5zaWVudE9ic2VydmVkTm9kZXMiLCJKc011dGF0aW9uT2JzZXJ2ZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzZXRUaW1lb3V0Iiwic2V0SW1tZWRpYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJwb3N0TWVzc2FnZSIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJjaGFyYWN0ZXJEYXRhT2xkVmFsdWUiLCJTeW50YXhFcnJvciIsInJlbW92ZUxpc3RlbmVycyIsImFkZExpc3RlbmVycyIsImRpc2Nvbm5lY3QiLCJzcGxpY2UiLCJhZGRMaXN0ZW5lcnNfIiwicmVtb3ZlTGlzdGVuZXJzXyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRUcmFuc2llbnRPYnNlcnZlciIsImhhbmRsZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYXR0ck5hbWUiLCJyZWxhdGVkTm9kZSIsIm5hbWVzcGFjZVVSSSIsImF0dHJDaGFuZ2UiLCJNdXRhdGlvbkV2ZW50IiwiQURESVRJT04iLCJwcmV2VmFsdWUiLCJNdXRhdGlvbk9ic2VydmVyIiwiX2lzUG9seWZpbGxlZCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbXBvcnROb2RlIiwibm9kZVR5cGUiLCJOb2RlIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2hpbGROb2RlcyIsImZpcnN0Q2hpbGQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsInRleHRDb250ZW50IiwiaGVhZCIsImluc2VydEJlZm9yZSIsImZpcnN0RWxlbWVudENoaWxkIiwiSFRNTEVsZW1lbnQiLCJkZWNvcmF0ZSIsIm91dGVySFRNTCIsImJvZHkiLCJpbm5lckhUTUwiLCJib290c3RyYXAiLCJyZW1vdmVDaGlsZCIsImNvbmZpZ3VyYWJsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2NhbE5hbWUiLCJmaXhDbG9uZWREb20iLCJyZXBsYWNlQ2hpbGQiLCJwZXJmb3JtYW5jZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkZWZhdWx0UHJldmVudGVkIiwiRXZlbnQiLCJjYW5jZWxhYmxlIiwiQ3VzdG9tRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJCb29sZWFuIiwiYnViYmxlcyIsImRldGFpbCIsIkhUTUxJbXBvcnRzIiwicmVhZHlTdGF0ZSIsIl9fbG9hZGVkIiwiYWxsSW1wb3J0cyIsImxvYWRlZEltcG9ydHMiLCJlcnJvckltcG9ydHMiLCJfX2ltcG9ydFBhcnNlZCIsInJlbCIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwicmVhZHkiLCJyZWFkeVRpbWUiLCJnZXRUaW1lIiwiZGlzcGF0Y2hFdmVudCIsIklNUE9SVF9MSU5LX1RZUEUiLCJ1c2VOYXRpdmUiLCJyb290RG9jdW1lbnQiLCJ3aGVuUmVhZHkiLCJpc0lFIiwiYWRkTW9kdWxlIiwiaW5pdGlhbGl6ZU1vZHVsZXMiLCJyZXNvbHZlVXJsc0luU3R5bGUiLCJvd25lckRvY3VtZW50IiwicmVzb2x2ZVVybHNJbkNzc1RleHQiLCJyZXBsYWNlVXJscyIsInBhdGgiLCJhc3luYyIsIm9rIiwic3RhdHVzIiwibG9hZCIsIlhNTEh0dHBSZXF1ZXN0IiwiZGVidWciLCJidXN0Iiwib3BlbiIsImdldFJlc3BvbnNlSGVhZGVyIiwic3Vic3RyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsInJlc3BvbnNlIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsImxvYWREb2N1bWVudCIsInJlc3BvbnNlVHlwZSIsInhociIsImNhY2hlIiwib25sb2FkIiwib25jb21wbGV0ZSIsImluZmxpZ2h0IiwicGVuZGluZyIsImFkZE5vZGVzIiwicmVxdWlyZSIsImNoZWNrRG9uZSIsImFkZE5vZGUiLCJzcmMiLCJfX25vZGVVcmwiLCJkZWR1cGUiLCJmZXRjaCIsInRhaWwiLCJhdG9iIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVjZWl2ZSIsImJpbmQiLCJMb2FkZXIiLCJhZGRDYWxsYmFjayIsIm1vIiwiaGFuZGxlciIsImNoaWxkcmVuIiwiT2JzZXJ2ZXIiLCJfX2ltcG9ydGVkU2NyaXB0cyIsImJhc2VVUkkiLCJkb2N1bWVudFNlbGVjdG9ycyIsImltcG9ydHNTZWxlY3RvcnMiLCJtYXAiLCJsaW5rIiwic2NyaXB0Iiwic3R5bGUiLCJkeW5hbWljRWxlbWVudHMiLCJwYXJzZU5leHQiLCJuZXh0VG9QYXJzZSIsInBhcnNlIiwiaXNQYXJzZWQiLCJtYXJrUGFyc2luZyIsInBhcnNlRHluYW1pYyIsInBhcnNpbmdFbGVtZW50IiwibWFya1BhcnNpbmdDb21wbGV0ZSIsIm1hcmtEeW5hbWljUGFyc2luZ0NvbXBsZXRlIiwiX19pbXBvcnRFbGVtZW50IiwicGFyc2VJbXBvcnQiLCJfX2RvYyIsIl9faW1wb3J0c1BhcnNpbmdIb29rIiwiX19yZXNvdXJjZSIsIl9fZXJyb3IiLCJfX3BlbmRpbmciLCJzaGlmdCIsInBhcnNlTGluayIsInBhcnNlR2VuZXJpYyIsInBhcnNlU3R5bGUiLCJfX2FwcGxpZWRFbGVtZW50IiwidHJhY2tFbGVtZW50IiwiYWRkRWxlbWVudFRvRG9jdW1lbnQiLCJyb290SW1wb3J0Rm9yRWxlbWVudCIsIl9faW1wb3J0TGluayIsInNoZWV0IiwiY3NzUnVsZXMiLCJDU1NSdWxlIiwiSU1QT1JUX1JVTEUiLCJzdHlsZVNoZWV0IiwicGFyc2VTY3JpcHQiLCJfbWF5UGFyc2UiLCJuZXh0VG9QYXJzZUluRG9jIiwibmV4dFRvUGFyc2VEeW5hbWljIiwicGFyc2VTZWxlY3RvcnNGb3JOb2RlIiwiaGFzUmVzb3VyY2UiLCJuZWVkc0R5bmFtaWNQYXJzaW5nIiwicGFyc2VyIiwiSU1QT1JUX1NFTEVDVE9SIiwiZ2V0QXR0cmlidXRlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX1VSTCIsInNldEF0dHJpYnV0ZSIsImRvY3VtZW50cyIsImRvY3VtZW50UHJlbG9hZFNlbGVjdG9ycyIsImltcG9ydHNQcmVsb2FkU2VsZWN0b3JzIiwibG9hZE5vZGUiLCJsb2FkU3VidHJlZSIsIm1hcnNoYWxOb2RlcyIsImxvYWRTZWxlY3RvcnNGb3JOb2RlIiwibG9hZGVkIiwiYm9vdERvY3VtZW50IiwibG9hZGVkQWxsIiwiaW1wb3J0ZXIiLCJpbXBvcnRMb2FkZXIiLCJhZGRlZCIsInNob3VsZExvYWROb2RlIiwic2hvdWxkUGFyc2VOb2RlIiwibWF0Y2hlcyIsIm1hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiYXR0YWNoRXZlbnQiLCJoYXNOYXRpdmUiLCJyZWdpc3RlckVsZW1lbnQiLCJFTEVNRU5UX05PREUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzaGFkb3dSb290Iiwib2xkZXJTaGFkb3dSb290Iiwid3JhcCIsImZvckRvY3VtZW50VHJlZSIsImZvclN1YnRyZWUiLCJ1cGdyYWRlIiwiX191cGdyYWRlZF9fIiwiX19hdHRhY2hlZCIsImF0dGFjaGVkQ2FsbGJhY2siLCJkZXRhY2hlZENhbGxiYWNrIiwiX193YXRjaGVkIiwiZG9tIiwiZ3JvdXAiLCJncm91cEVuZCIsIl9fb2JzZXJ2ZXIiLCJoYXNQb2x5ZmlsbE11dGF0aW9ucyIsImhhc1Rocm90dGxlZEF0dGFjaGVkIiwiQXJyYXkiLCJFbGVtZW50IiwiY3JlYXRlU2hhZG93Um9vdCIsIndhdGNoU2hhZG93IiwidXBncmFkZURvY3VtZW50VHJlZSIsInVwZ3JhZGVEb2N1bWVudCIsInVwZ3JhZGVTdWJ0cmVlIiwidXBncmFkZUFsbCIsImF0dGFjaGVkIiwiZ2V0UmVnaXN0ZXJlZERlZmluaXRpb24iLCJ0YWciLCJpcyIsIl9fcHJvdG9fXyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRQcm90b3R5cGVPZiIsImNyZWF0ZWRDYWxsYmFjayIsInVwZ3JhZGVXaXRoRGVmaW5pdGlvbiIsImltcGxlbWVudFByb3RvdHlwZSIsIkVycm9yIiwiX19uYW1lIiwibGlmZWN5Y2xlIiwiYW5jZXN0cnkiLCJjdG9yIiwiY29uc3RydWN0b3IiLCJfcG9seWZpbGxlZCIsInJlbW92ZUF0dHJpYnV0ZSIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsImNvbmNhdCIsIndhcm4iLCJjcmVhdGVFbGVtZW50TlMiLCJyZWdpc3RyeSIsInJlc2VydmVkVGFnTGlzdCIsImVsYXBzZWQiLCJ1bndyYXAiLCJ1bndyYXBJZk5lZWRlZCIsImVhZ2VyIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBLENBQUMsWUFBVTtBQUFDQSxTQUFPQyxhQUFQLEdBQXFCRCxPQUFPQyxhQUFQLElBQXNCLEVBQUNDLE9BQU0sRUFBUCxFQUEzQyxDQUFzRCxJ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QixHQUFuTyxNQUF3T0E7QUFBSSxDQUFweEMsQ0FBcXhDSixPQUFPdUIsY0FBNXhDLENBRHZ1TSxFQUNtaFAsVUFBU3BCLENBQVQsRUFBVztBQUFDLE1BQUlDLElBQUVDLFNBQVN1SyxhQUFULENBQXVCLE9BQXZCLENBQU4sQ0FBc0N4SyxFQUFFK0ssV0FBRixHQUFjLHNJQUFkLENBQXFKLElBQUk1SyxJQUFFRixTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQU4sQ0FBcUNDLEVBQUU4SyxZQUFGLENBQWVqTCxDQUFmLEVBQWlCRyxFQUFFeUssVUFBbkI7QUFBK0IsQ0FBM1EsQ0FBNFFoTCxPQUFPQyxhQUFuUixDQURuaFAiLCJmaWxlIjoid2ViY29tcG9uZW50cy1saXRlLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLy8gQHZlcnNpb24gMC43LjI0XG4hZnVuY3Rpb24oKXt3aW5kb3cuV2ViQ29tcG9uZW50cz13aW5kb3cuV2ViQ29tcG9uZW50c3x8e2ZsYWdzOnt9fTt2YXIgZT1cIndlYmNvbXBvbmVudHMtbGl0ZS5qc1wiLHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCInK2UrJ1wiXScpLG49e307aWYoIW4ubm9PcHRzKXtpZihsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkuc3BsaXQoXCImXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbz1lLnNwbGl0KFwiPVwiKTtvWzBdJiYodD1vWzBdLm1hdGNoKC93Yy0oLispLykpJiYoblt0WzFdXT1vWzFdfHwhMCl9KSx0KWZvcih2YXIgbyxyPTA7bz10LmF0dHJpYnV0ZXNbcl07cisrKVwic3JjXCIhPT1vLm5hbWUmJihuW28ubmFtZV09by52YWx1ZXx8ITApO2lmKG4ubG9nJiZuLmxvZy5zcGxpdCl7dmFyIGk9bi5sb2cuc3BsaXQoXCIsXCIpO24ubG9nPXt9LGkuZm9yRWFjaChmdW5jdGlvbihlKXtuLmxvZ1tlXT0hMH0pfWVsc2Ugbi5sb2c9e319bi5yZWdpc3RlciYmKHdpbmRvdy5DdXN0b21FbGVtZW50cz13aW5kb3cuQ3VzdG9tRWxlbWVudHN8fHtmbGFnczp7fX0sd2luZG93LkN1c3RvbUVsZW1lbnRzLmZsYWdzLnJlZ2lzdGVyPW4ucmVnaXN0ZXIpLFdlYkNvbXBvbmVudHMuZmxhZ3M9bn0oKSxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUpe3JldHVybiB2b2lkIDAhPT1oW2VdfWZ1bmN0aW9uIG4oKXtzLmNhbGwodGhpcyksdGhpcy5faXNJbnZhbGlkPSEwfWZ1bmN0aW9uIG8oZSl7cmV0dXJuXCJcIj09ZSYmbi5jYWxsKHRoaXMpLGUudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiByKGUpe3ZhciB0PWUuY2hhckNvZGVBdCgwKTtyZXR1cm4gdD4zMiYmdDwxMjcmJlszNCwzNSw2MCw2Miw2Myw5Nl0uaW5kZXhPZih0KT09LTE/ZTplbmNvZGVVUklDb21wb25lbnQoZSl9ZnVuY3Rpb24gaShlKXt2YXIgdD1lLmNoYXJDb2RlQXQoMCk7cmV0dXJuIHQ+MzImJnQ8MTI3JiZbMzQsMzUsNjAsNjIsOTZdLmluZGV4T2YodCk9PS0xP2U6ZW5jb2RlVVJJQ29tcG9uZW50KGUpfWZ1bmN0aW9uIGEoZSxhLHMpe2Z1bmN0aW9uIGMoZSl7Zy5wdXNoKGUpfXZhciBkPWF8fFwic2NoZW1lIHN0YXJ0XCIsbD0wLHU9XCJcIix3PSExLF89ITEsZz1bXTtlOmZvcig7KGVbbC0xXSE9cHx8MD09bCkmJiF0aGlzLl9pc0ludmFsaWQ7KXt2YXIgYj1lW2xdO3N3aXRjaChkKXtjYXNlXCJzY2hlbWUgc3RhcnRcIjppZighYnx8IW0udGVzdChiKSl7aWYoYSl7YyhcIkludmFsaWQgc2NoZW1lLlwiKTticmVhayBlfXU9XCJcIixkPVwibm8gc2NoZW1lXCI7Y29udGludWV9dSs9Yi50b0xvd2VyQ2FzZSgpLGQ9XCJzY2hlbWVcIjticmVhaztjYXNlXCJzY2hlbWVcIjppZihiJiZ2LnRlc3QoYikpdSs9Yi50b0xvd2VyQ2FzZSgpO2Vsc2V7aWYoXCI6XCIhPWIpe2lmKGEpe2lmKHA9PWIpYnJlYWsgZTtjKFwiQ29kZSBwb2ludCBub3QgYWxsb3dlZCBpbiBzY2hlbWU6IFwiK2IpO2JyZWFrIGV9dT1cIlwiLGw9MCxkPVwibm8gc2NoZW1lXCI7Y29udGludWV9aWYodGhpcy5fc2NoZW1lPXUsdT1cIlwiLGEpYnJlYWsgZTt0KHRoaXMuX3NjaGVtZSkmJih0aGlzLl9pc1JlbGF0aXZlPSEwKSxkPVwiZmlsZVwiPT10aGlzLl9zY2hlbWU/XCJyZWxhdGl2ZVwiOnRoaXMuX2lzUmVsYXRpdmUmJnMmJnMuX3NjaGVtZT09dGhpcy5fc2NoZW1lP1wicmVsYXRpdmUgb3IgYXV0aG9yaXR5XCI6dGhpcy5faXNSZWxhdGl2ZT9cImF1dGhvcml0eSBmaXJzdCBzbGFzaFwiOlwic2NoZW1lIGRhdGFcIn1icmVhaztjYXNlXCJzY2hlbWUgZGF0YVwiOlwiP1wiPT1iPyh0aGlzLl9xdWVyeT1cIj9cIixkPVwicXVlcnlcIik6XCIjXCI9PWI/KHRoaXMuX2ZyYWdtZW50PVwiI1wiLGQ9XCJmcmFnbWVudFwiKTpwIT1iJiZcIlxcdFwiIT1iJiZcIlxcblwiIT1iJiZcIlxcclwiIT1iJiYodGhpcy5fc2NoZW1lRGF0YSs9cihiKSk7YnJlYWs7Y2FzZVwibm8gc2NoZW1lXCI6aWYocyYmdChzLl9zY2hlbWUpKXtkPVwicmVsYXRpdmVcIjtjb250aW51ZX1jKFwiTWlzc2luZyBzY2hlbWUuXCIpLG4uY2FsbCh0aGlzKTticmVhaztjYXNlXCJyZWxhdGl2ZSBvciBhdXRob3JpdHlcIjppZihcIi9cIiE9Ynx8XCIvXCIhPWVbbCsxXSl7YyhcIkV4cGVjdGVkIC8sIGdvdDogXCIrYiksZD1cInJlbGF0aXZlXCI7Y29udGludWV9ZD1cImF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO2JyZWFrO2Nhc2VcInJlbGF0aXZlXCI6aWYodGhpcy5faXNSZWxhdGl2ZT0hMCxcImZpbGVcIiE9dGhpcy5fc2NoZW1lJiYodGhpcy5fc2NoZW1lPXMuX3NjaGVtZSkscD09Yil7dGhpcy5faG9zdD1zLl9ob3N0LHRoaXMuX3BvcnQ9cy5fcG9ydCx0aGlzLl9wYXRoPXMuX3BhdGguc2xpY2UoKSx0aGlzLl9xdWVyeT1zLl9xdWVyeSx0aGlzLl91c2VybmFtZT1zLl91c2VybmFtZSx0aGlzLl9wYXNzd29yZD1zLl9wYXNzd29yZDticmVhayBlfWlmKFwiL1wiPT1ifHxcIlxcXFxcIj09YilcIlxcXFxcIj09YiYmYyhcIlxcXFwgaXMgYW4gaW52YWxpZCBjb2RlIHBvaW50LlwiKSxkPVwicmVsYXRpdmUgc2xhc2hcIjtlbHNlIGlmKFwiP1wiPT1iKXRoaXMuX2hvc3Q9cy5faG9zdCx0aGlzLl9wb3J0PXMuX3BvcnQsdGhpcy5fcGF0aD1zLl9wYXRoLnNsaWNlKCksdGhpcy5fcXVlcnk9XCI/XCIsdGhpcy5fdXNlcm5hbWU9cy5fdXNlcm5hbWUsdGhpcy5fcGFzc3dvcmQ9cy5fcGFzc3dvcmQsZD1cInF1ZXJ5XCI7ZWxzZXtpZihcIiNcIiE9Yil7dmFyIHk9ZVtsKzFdLEU9ZVtsKzJdOyhcImZpbGVcIiE9dGhpcy5fc2NoZW1lfHwhbS50ZXN0KGIpfHxcIjpcIiE9eSYmXCJ8XCIhPXl8fHAhPUUmJlwiL1wiIT1FJiZcIlxcXFxcIiE9RSYmXCI/XCIhPUUmJlwiI1wiIT1FKSYmKHRoaXMuX2hvc3Q9cy5faG9zdCx0aGlzLl9wb3J0PXMuX3BvcnQsdGhpcy5fdXNlcm5hbWU9cy5fdXNlcm5hbWUsdGhpcy5fcGFzc3dvcmQ9cy5fcGFzc3dvcmQsdGhpcy5fcGF0aD1zLl9wYXRoLnNsaWNlKCksdGhpcy5fcGF0aC5wb3AoKSksZD1cInJlbGF0aXZlIHBhdGhcIjtjb250aW51ZX10aGlzLl9ob3N0PXMuX2hvc3QsdGhpcy5fcG9ydD1zLl9wb3J0LHRoaXMuX3BhdGg9cy5fcGF0aC5zbGljZSgpLHRoaXMuX3F1ZXJ5PXMuX3F1ZXJ5LHRoaXMuX2ZyYWdtZW50PVwiI1wiLHRoaXMuX3VzZXJuYW1lPXMuX3VzZXJuYW1lLHRoaXMuX3Bhc3N3b3JkPXMuX3Bhc3N3b3JkLGQ9XCJmcmFnbWVudFwifWJyZWFrO2Nhc2VcInJlbGF0aXZlIHNsYXNoXCI6aWYoXCIvXCIhPWImJlwiXFxcXFwiIT1iKXtcImZpbGVcIiE9dGhpcy5fc2NoZW1lJiYodGhpcy5faG9zdD1zLl9ob3N0LHRoaXMuX3BvcnQ9cy5fcG9ydCx0aGlzLl91c2VybmFtZT1zLl91c2VybmFtZSx0aGlzLl9wYXNzd29yZD1zLl9wYXNzd29yZCksZD1cInJlbGF0aXZlIHBhdGhcIjtjb250aW51ZX1cIlxcXFxcIj09YiYmYyhcIlxcXFwgaXMgYW4gaW52YWxpZCBjb2RlIHBvaW50LlwiKSxkPVwiZmlsZVwiPT10aGlzLl9zY2hlbWU/XCJmaWxlIGhvc3RcIjpcImF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO2JyZWFrO2Nhc2VcImF1dGhvcml0eSBmaXJzdCBzbGFzaFwiOmlmKFwiL1wiIT1iKXtjKFwiRXhwZWN0ZWQgJy8nLCBnb3Q6IFwiK2IpLGQ9XCJhdXRob3JpdHkgaWdub3JlIHNsYXNoZXNcIjtjb250aW51ZX1kPVwiYXV0aG9yaXR5IHNlY29uZCBzbGFzaFwiO2JyZWFrO2Nhc2VcImF1dGhvcml0eSBzZWNvbmQgc2xhc2hcIjppZihkPVwiYXV0aG9yaXR5IGlnbm9yZSBzbGFzaGVzXCIsXCIvXCIhPWIpe2MoXCJFeHBlY3RlZCAnLycsIGdvdDogXCIrYik7Y29udGludWV9YnJlYWs7Y2FzZVwiYXV0aG9yaXR5IGlnbm9yZSBzbGFzaGVzXCI6aWYoXCIvXCIhPWImJlwiXFxcXFwiIT1iKXtkPVwiYXV0aG9yaXR5XCI7Y29udGludWV9YyhcIkV4cGVjdGVkIGF1dGhvcml0eSwgZ290OiBcIitiKTticmVhaztjYXNlXCJhdXRob3JpdHlcIjppZihcIkBcIj09Yil7dyYmKGMoXCJAIGFscmVhZHkgc2Vlbi5cIiksdSs9XCIlNDBcIiksdz0hMDtmb3IodmFyIEw9MDtMPHUubGVuZ3RoO0wrKyl7dmFyIE49dVtMXTtpZihcIlxcdFwiIT1OJiZcIlxcblwiIT1OJiZcIlxcclwiIT1OKWlmKFwiOlwiIT1OfHxudWxsIT09dGhpcy5fcGFzc3dvcmQpe3ZhciBNPXIoTik7bnVsbCE9PXRoaXMuX3Bhc3N3b3JkP3RoaXMuX3Bhc3N3b3JkKz1NOnRoaXMuX3VzZXJuYW1lKz1NfWVsc2UgdGhpcy5fcGFzc3dvcmQ9XCJcIjtlbHNlIGMoXCJJbnZhbGlkIHdoaXRlc3BhY2UgaW4gYXV0aG9yaXR5LlwiKX11PVwiXCJ9ZWxzZXtpZihwPT1ifHxcIi9cIj09Ynx8XCJcXFxcXCI9PWJ8fFwiP1wiPT1ifHxcIiNcIj09Yil7bC09dS5sZW5ndGgsdT1cIlwiLGQ9XCJob3N0XCI7Y29udGludWV9dSs9Yn1icmVhaztjYXNlXCJmaWxlIGhvc3RcIjppZihwPT1ifHxcIi9cIj09Ynx8XCJcXFxcXCI9PWJ8fFwiP1wiPT1ifHxcIiNcIj09Yil7MiE9dS5sZW5ndGh8fCFtLnRlc3QodVswXSl8fFwiOlwiIT11WzFdJiZcInxcIiE9dVsxXT8wPT11Lmxlbmd0aD9kPVwicmVsYXRpdmUgcGF0aCBzdGFydFwiOih0aGlzLl9ob3N0PW8uY2FsbCh0aGlzLHUpLHU9XCJcIixkPVwicmVsYXRpdmUgcGF0aCBzdGFydFwiKTpkPVwicmVsYXRpdmUgcGF0aFwiO2NvbnRpbnVlfVwiXFx0XCI9PWJ8fFwiXFxuXCI9PWJ8fFwiXFxyXCI9PWI/YyhcIkludmFsaWQgd2hpdGVzcGFjZSBpbiBmaWxlIGhvc3QuXCIpOnUrPWI7YnJlYWs7Y2FzZVwiaG9zdFwiOmNhc2VcImhvc3RuYW1lXCI6aWYoXCI6XCIhPWJ8fF8pe2lmKHA9PWJ8fFwiL1wiPT1ifHxcIlxcXFxcIj09Ynx8XCI/XCI9PWJ8fFwiI1wiPT1iKXtpZih0aGlzLl9ob3N0PW8uY2FsbCh0aGlzLHUpLHU9XCJcIixkPVwicmVsYXRpdmUgcGF0aCBzdGFydFwiLGEpYnJlYWsgZTtjb250aW51ZX1cIlxcdFwiIT1iJiZcIlxcblwiIT1iJiZcIlxcclwiIT1iPyhcIltcIj09Yj9fPSEwOlwiXVwiPT1iJiYoXz0hMSksdSs9Yik6YyhcIkludmFsaWQgY29kZSBwb2ludCBpbiBob3N0L2hvc3RuYW1lOiBcIitiKX1lbHNlIGlmKHRoaXMuX2hvc3Q9by5jYWxsKHRoaXMsdSksdT1cIlwiLGQ9XCJwb3J0XCIsXCJob3N0bmFtZVwiPT1hKWJyZWFrIGU7YnJlYWs7Y2FzZVwicG9ydFwiOmlmKC9bMC05XS8udGVzdChiKSl1Kz1iO2Vsc2V7aWYocD09Ynx8XCIvXCI9PWJ8fFwiXFxcXFwiPT1ifHxcIj9cIj09Ynx8XCIjXCI9PWJ8fGEpe2lmKFwiXCIhPXUpe3ZhciBUPXBhcnNlSW50KHUsMTApO1QhPWhbdGhpcy5fc2NoZW1lXSYmKHRoaXMuX3BvcnQ9VCtcIlwiKSx1PVwiXCJ9aWYoYSlicmVhayBlO2Q9XCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCI7Y29udGludWV9XCJcXHRcIj09Ynx8XCJcXG5cIj09Ynx8XCJcXHJcIj09Yj9jKFwiSW52YWxpZCBjb2RlIHBvaW50IGluIHBvcnQ6IFwiK2IpOm4uY2FsbCh0aGlzKX1icmVhaztjYXNlXCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCI6aWYoXCJcXFxcXCI9PWImJmMoXCInXFxcXCcgbm90IGFsbG93ZWQgaW4gcGF0aC5cIiksZD1cInJlbGF0aXZlIHBhdGhcIixcIi9cIiE9YiYmXCJcXFxcXCIhPWIpY29udGludWU7YnJlYWs7Y2FzZVwicmVsYXRpdmUgcGF0aFwiOmlmKHAhPWImJlwiL1wiIT1iJiZcIlxcXFxcIiE9YiYmKGF8fFwiP1wiIT1iJiZcIiNcIiE9YikpXCJcXHRcIiE9YiYmXCJcXG5cIiE9YiYmXCJcXHJcIiE9YiYmKHUrPXIoYikpO2Vsc2V7XCJcXFxcXCI9PWImJmMoXCJcXFxcIG5vdCBhbGxvd2VkIGluIHJlbGF0aXZlIHBhdGguXCIpO3ZhciBPOyhPPWZbdS50b0xvd2VyQ2FzZSgpXSkmJih1PU8pLFwiLi5cIj09dT8odGhpcy5fcGF0aC5wb3AoKSxcIi9cIiE9YiYmXCJcXFxcXCIhPWImJnRoaXMuX3BhdGgucHVzaChcIlwiKSk6XCIuXCI9PXUmJlwiL1wiIT1iJiZcIlxcXFxcIiE9Yj90aGlzLl9wYXRoLnB1c2goXCJcIik6XCIuXCIhPXUmJihcImZpbGVcIj09dGhpcy5fc2NoZW1lJiYwPT10aGlzLl9wYXRoLmxlbmd0aCYmMj09dS5sZW5ndGgmJm0udGVzdCh1WzBdKSYmXCJ8XCI9PXVbMV0mJih1PXVbMF0rXCI6XCIpLHRoaXMuX3BhdGgucHVzaCh1KSksdT1cIlwiLFwiP1wiPT1iPyh0aGlzLl9xdWVyeT1cIj9cIixkPVwicXVlcnlcIik6XCIjXCI9PWImJih0aGlzLl9mcmFnbWVudD1cIiNcIixkPVwiZnJhZ21lbnRcIil9YnJlYWs7Y2FzZVwicXVlcnlcIjphfHxcIiNcIiE9Yj9wIT1iJiZcIlxcdFwiIT1iJiZcIlxcblwiIT1iJiZcIlxcclwiIT1iJiYodGhpcy5fcXVlcnkrPWkoYikpOih0aGlzLl9mcmFnbWVudD1cIiNcIixkPVwiZnJhZ21lbnRcIik7YnJlYWs7Y2FzZVwiZnJhZ21lbnRcIjpwIT1iJiZcIlxcdFwiIT1iJiZcIlxcblwiIT1iJiZcIlxcclwiIT1iJiYodGhpcy5fZnJhZ21lbnQrPWIpfWwrK319ZnVuY3Rpb24gcygpe3RoaXMuX3NjaGVtZT1cIlwiLHRoaXMuX3NjaGVtZURhdGE9XCJcIix0aGlzLl91c2VybmFtZT1cIlwiLHRoaXMuX3Bhc3N3b3JkPW51bGwsdGhpcy5faG9zdD1cIlwiLHRoaXMuX3BvcnQ9XCJcIix0aGlzLl9wYXRoPVtdLHRoaXMuX3F1ZXJ5PVwiXCIsdGhpcy5fZnJhZ21lbnQ9XCJcIix0aGlzLl9pc0ludmFsaWQ9ITEsdGhpcy5faXNSZWxhdGl2ZT0hMX1mdW5jdGlvbiBjKGUsdCl7dm9pZCAwPT09dHx8dCBpbnN0YW5jZW9mIGN8fCh0PW5ldyBjKFN0cmluZyh0KSkpLHRoaXMuX3VybD1lLHMuY2FsbCh0aGlzKTt2YXIgbj1lLnJlcGxhY2UoL15bIFxcdFxcclxcblxcZl0rfFsgXFx0XFxyXFxuXFxmXSskL2csXCJcIik7YS5jYWxsKHRoaXMsbixudWxsLHQpfXZhciBkPSExO2lmKCFlLmZvcmNlSlVSTCl0cnl7dmFyIGw9bmV3IFVSTChcImJcIixcImh0dHA6Ly9hXCIpO2wucGF0aG5hbWU9XCJjJTIwZFwiLGQ9XCJodHRwOi8vYS9jJTIwZFwiPT09bC5ocmVmfWNhdGNoKHUpe31pZighZCl7dmFyIGg9T2JqZWN0LmNyZWF0ZShudWxsKTtoLmZ0cD0yMSxoLmZpbGU9MCxoLmdvcGhlcj03MCxoLmh0dHA9ODAsaC5odHRwcz00NDMsaC53cz04MCxoLndzcz00NDM7dmFyIGY9T2JqZWN0LmNyZWF0ZShudWxsKTtmW1wiJTJlXCJdPVwiLlwiLGZbXCIuJTJlXCJdPVwiLi5cIixmW1wiJTJlLlwiXT1cIi4uXCIsZltcIiUyZSUyZVwiXT1cIi4uXCI7dmFyIHA9dm9pZCAwLG09L1thLXpBLVpdLyx2PS9bYS16QS1aMC05XFwrXFwtXFwuXS87Yy5wcm90b3R5cGU9e3RvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaHJlZn0sZ2V0IGhyZWYoKXtpZih0aGlzLl9pc0ludmFsaWQpcmV0dXJuIHRoaXMuX3VybDt2YXIgZT1cIlwiO3JldHVyblwiXCI9PXRoaXMuX3VzZXJuYW1lJiZudWxsPT10aGlzLl9wYXNzd29yZHx8KGU9dGhpcy5fdXNlcm5hbWUrKG51bGwhPXRoaXMuX3Bhc3N3b3JkP1wiOlwiK3RoaXMuX3Bhc3N3b3JkOlwiXCIpK1wiQFwiKSx0aGlzLnByb3RvY29sKyh0aGlzLl9pc1JlbGF0aXZlP1wiLy9cIitlK3RoaXMuaG9zdDpcIlwiKSt0aGlzLnBhdGhuYW1lK3RoaXMuX3F1ZXJ5K3RoaXMuX2ZyYWdtZW50fSxzZXQgaHJlZihlKXtzLmNhbGwodGhpcyksYS5jYWxsKHRoaXMsZSl9LGdldCBwcm90b2NvbCgpe3JldHVybiB0aGlzLl9zY2hlbWUrXCI6XCJ9LHNldCBwcm90b2NvbChlKXt0aGlzLl9pc0ludmFsaWR8fGEuY2FsbCh0aGlzLGUrXCI6XCIsXCJzY2hlbWUgc3RhcnRcIil9LGdldCBob3N0KCl7cmV0dXJuIHRoaXMuX2lzSW52YWxpZD9cIlwiOnRoaXMuX3BvcnQ/dGhpcy5faG9zdCtcIjpcIit0aGlzLl9wb3J0OnRoaXMuX2hvc3R9LHNldCBob3N0KGUpeyF0aGlzLl9pc0ludmFsaWQmJnRoaXMuX2lzUmVsYXRpdmUmJmEuY2FsbCh0aGlzLGUsXCJob3N0XCIpfSxnZXQgaG9zdG5hbWUoKXtyZXR1cm4gdGhpcy5faG9zdH0sc2V0IGhvc3RuYW1lKGUpeyF0aGlzLl9pc0ludmFsaWQmJnRoaXMuX2lzUmVsYXRpdmUmJmEuY2FsbCh0aGlzLGUsXCJob3N0bmFtZVwiKX0sZ2V0IHBvcnQoKXtyZXR1cm4gdGhpcy5fcG9ydH0sc2V0IHBvcnQoZSl7IXRoaXMuX2lzSW52YWxpZCYmdGhpcy5faXNSZWxhdGl2ZSYmYS5jYWxsKHRoaXMsZSxcInBvcnRcIil9LGdldCBwYXRobmFtZSgpe3JldHVybiB0aGlzLl9pc0ludmFsaWQ/XCJcIjp0aGlzLl9pc1JlbGF0aXZlP1wiL1wiK3RoaXMuX3BhdGguam9pbihcIi9cIik6dGhpcy5fc2NoZW1lRGF0YX0sc2V0IHBhdGhuYW1lKGUpeyF0aGlzLl9pc0ludmFsaWQmJnRoaXMuX2lzUmVsYXRpdmUmJih0aGlzLl9wYXRoPVtdLGEuY2FsbCh0aGlzLGUsXCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCIpKX0sZ2V0IHNlYXJjaCgpe3JldHVybiB0aGlzLl9pc0ludmFsaWR8fCF0aGlzLl9xdWVyeXx8XCI/XCI9PXRoaXMuX3F1ZXJ5P1wiXCI6dGhpcy5fcXVlcnl9LHNldCBzZWFyY2goZSl7IXRoaXMuX2lzSW52YWxpZCYmdGhpcy5faXNSZWxhdGl2ZSYmKHRoaXMuX3F1ZXJ5PVwiP1wiLFwiP1wiPT1lWzBdJiYoZT1lLnNsaWNlKDEpKSxhLmNhbGwodGhpcyxlLFwicXVlcnlcIikpfSxnZXQgaGFzaCgpe3JldHVybiB0aGlzLl9pc0ludmFsaWR8fCF0aGlzLl9mcmFnbWVudHx8XCIjXCI9PXRoaXMuX2ZyYWdtZW50P1wiXCI6dGhpcy5fZnJhZ21lbnR9LHNldCBoYXNoKGUpe3RoaXMuX2lzSW52YWxpZHx8KHRoaXMuX2ZyYWdtZW50PVwiI1wiLFwiI1wiPT1lWzBdJiYoZT1lLnNsaWNlKDEpKSxhLmNhbGwodGhpcyxlLFwiZnJhZ21lbnRcIikpfSxnZXQgb3JpZ2luKCl7dmFyIGU7aWYodGhpcy5faXNJbnZhbGlkfHwhdGhpcy5fc2NoZW1lKXJldHVyblwiXCI7c3dpdGNoKHRoaXMuX3NjaGVtZSl7Y2FzZVwiZGF0YVwiOmNhc2VcImZpbGVcIjpjYXNlXCJqYXZhc2NyaXB0XCI6Y2FzZVwibWFpbHRvXCI6cmV0dXJuXCJudWxsXCJ9cmV0dXJuIGU9dGhpcy5ob3N0LGU/dGhpcy5fc2NoZW1lK1wiOi8vXCIrZTpcIlwifX07dmFyIHc9ZS5VUkw7dyYmKGMuY3JlYXRlT2JqZWN0VVJMPWZ1bmN0aW9uKGUpe3JldHVybiB3LmNyZWF0ZU9iamVjdFVSTC5hcHBseSh3LGFyZ3VtZW50cyl9LGMucmV2b2tlT2JqZWN0VVJMPWZ1bmN0aW9uKGUpe3cucmV2b2tlT2JqZWN0VVJMKGUpfSksZS5VUkw9Y319KHNlbGYpLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXZWFrTWFwJiYhZnVuY3Rpb24oKXt2YXIgZT1PYmplY3QuZGVmaW5lUHJvcGVydHksdD1EYXRlLm5vdygpJTFlOSxuPWZ1bmN0aW9uKCl7dGhpcy5uYW1lPVwiX19zdFwiKygxZTkqTWF0aC5yYW5kb20oKT4+PjApKyh0KysgK1wiX19cIil9O24ucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24odCxuKXt2YXIgbz10W3RoaXMubmFtZV07cmV0dXJuIG8mJm9bMF09PT10P29bMV09bjplKHQsdGhpcy5uYW1lLHt2YWx1ZTpbdCxuXSx3cml0YWJsZTohMH0pLHRoaXN9LGdldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4odD1lW3RoaXMubmFtZV0pJiZ0WzBdPT09ZT90WzFdOnZvaWQgMH0sXCJkZWxldGVcIjpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMubmFtZV07cmV0dXJuISghdHx8dFswXSE9PWUpJiYodFswXT10WzFdPXZvaWQgMCwhMCl9LGhhczpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMubmFtZV07cmV0dXJuISF0JiZ0WzBdPT09ZX19LHdpbmRvdy5XZWFrTWFwPW59KCksZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtiLnB1c2goZSksZ3x8KGc9ITAsbShvKSl9ZnVuY3Rpb24gbihlKXtyZXR1cm4gd2luZG93LlNoYWRvd0RPTVBvbHlmaWxsJiZ3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwud3JhcElmTmVlZGVkKGUpfHxlfWZ1bmN0aW9uIG8oKXtnPSExO3ZhciBlPWI7Yj1bXSxlLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS51aWRfLXQudWlkX30pO3ZhciB0PSExO2UuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbj1lLnRha2VSZWNvcmRzKCk7cihlKSxuLmxlbmd0aCYmKGUuY2FsbGJhY2tfKG4sZSksdD0hMCl9KSx0JiZvKCl9ZnVuY3Rpb24gcihlKXtlLm5vZGVzXy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBuPXYuZ2V0KHQpO24mJm4uZm9yRWFjaChmdW5jdGlvbih0KXt0Lm9ic2VydmVyPT09ZSYmdC5yZW1vdmVUcmFuc2llbnRPYnNlcnZlcnMoKX0pfSl9ZnVuY3Rpb24gaShlLHQpe2Zvcih2YXIgbj1lO247bj1uLnBhcmVudE5vZGUpe3ZhciBvPXYuZ2V0KG4pO2lmKG8pZm9yKHZhciByPTA7cjxvLmxlbmd0aDtyKyspe3ZhciBpPW9bcl0sYT1pLm9wdGlvbnM7aWYobj09PWV8fGEuc3VidHJlZSl7dmFyIHM9dChhKTtzJiZpLmVucXVldWUocyl9fX19ZnVuY3Rpb24gYShlKXt0aGlzLmNhbGxiYWNrXz1lLHRoaXMubm9kZXNfPVtdLHRoaXMucmVjb3Jkc189W10sdGhpcy51aWRfPSsreX1mdW5jdGlvbiBzKGUsdCl7dGhpcy50eXBlPWUsdGhpcy50YXJnZXQ9dCx0aGlzLmFkZGVkTm9kZXM9W10sdGhpcy5yZW1vdmVkTm9kZXM9W10sdGhpcy5wcmV2aW91c1NpYmxpbmc9bnVsbCx0aGlzLm5leHRTaWJsaW5nPW51bGwsdGhpcy5hdHRyaWJ1dGVOYW1lPW51bGwsdGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9bnVsbCx0aGlzLm9sZFZhbHVlPW51bGx9ZnVuY3Rpb24gYyhlKXt2YXIgdD1uZXcgcyhlLnR5cGUsZS50YXJnZXQpO3JldHVybiB0LmFkZGVkTm9kZXM9ZS5hZGRlZE5vZGVzLnNsaWNlKCksdC5yZW1vdmVkTm9kZXM9ZS5yZW1vdmVkTm9kZXMuc2xpY2UoKSx0LnByZXZpb3VzU2libGluZz1lLnByZXZpb3VzU2libGluZyx0Lm5leHRTaWJsaW5nPWUubmV4dFNpYmxpbmcsdC5hdHRyaWJ1dGVOYW1lPWUuYXR0cmlidXRlTmFtZSx0LmF0dHJpYnV0ZU5hbWVzcGFjZT1lLmF0dHJpYnV0ZU5hbWVzcGFjZSx0Lm9sZFZhbHVlPWUub2xkVmFsdWUsdH1mdW5jdGlvbiBkKGUsdCl7cmV0dXJuIEU9bmV3IHMoZSx0KX1mdW5jdGlvbiBsKGUpe3JldHVybiBMP0w6KEw9YyhFKSxMLm9sZFZhbHVlPWUsTCl9ZnVuY3Rpb24gdSgpe0U9TD12b2lkIDB9ZnVuY3Rpb24gaChlKXtyZXR1cm4gZT09PUx8fGU9PT1FfWZ1bmN0aW9uIGYoZSx0KXtyZXR1cm4gZT09PXQ/ZTpMJiZoKGUpP0w6bnVsbH1mdW5jdGlvbiBwKGUsdCxuKXt0aGlzLm9ic2VydmVyPWUsdGhpcy50YXJnZXQ9dCx0aGlzLm9wdGlvbnM9bix0aGlzLnRyYW5zaWVudE9ic2VydmVkTm9kZXM9W119aWYoIWUuSnNNdXRhdGlvbk9ic2VydmVyKXt2YXIgbSx2PW5ldyBXZWFrTWFwO2lmKC9UcmlkZW50fEVkZ2UvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpbT1zZXRUaW1lb3V0O2Vsc2UgaWYod2luZG93LnNldEltbWVkaWF0ZSltPXdpbmRvdy5zZXRJbW1lZGlhdGU7ZWxzZXt2YXIgdz1bXSxfPVN0cmluZyhNYXRoLnJhbmRvbSgpKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKXtpZihlLmRhdGE9PT1fKXt2YXIgdD13O3c9W10sdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UoKX0pfX0pLG09ZnVuY3Rpb24oZSl7dy5wdXNoKGUpLHdpbmRvdy5wb3N0TWVzc2FnZShfLFwiKlwiKX19dmFyIGc9ITEsYj1bXSx5PTA7YS5wcm90b3R5cGU9e29ic2VydmU6ZnVuY3Rpb24oZSx0KXtpZihlPW4oZSksIXQuY2hpbGRMaXN0JiYhdC5hdHRyaWJ1dGVzJiYhdC5jaGFyYWN0ZXJEYXRhfHx0LmF0dHJpYnV0ZU9sZFZhbHVlJiYhdC5hdHRyaWJ1dGVzfHx0LmF0dHJpYnV0ZUZpbHRlciYmdC5hdHRyaWJ1dGVGaWx0ZXIubGVuZ3RoJiYhdC5hdHRyaWJ1dGVzfHx0LmNoYXJhY3RlckRhdGFPbGRWYWx1ZSYmIXQuY2hhcmFjdGVyRGF0YSl0aHJvdyBuZXcgU3ludGF4RXJyb3I7dmFyIG89di5nZXQoZSk7b3x8di5zZXQoZSxvPVtdKTtmb3IodmFyIHIsaT0wO2k8by5sZW5ndGg7aSsrKWlmKG9baV0ub2JzZXJ2ZXI9PT10aGlzKXtyPW9baV0sci5yZW1vdmVMaXN0ZW5lcnMoKSxyLm9wdGlvbnM9dDticmVha31yfHwocj1uZXcgcCh0aGlzLGUsdCksby5wdXNoKHIpLHRoaXMubm9kZXNfLnB1c2goZSkpLHIuYWRkTGlzdGVuZXJzKCl9LGRpc2Nvbm5lY3Q6ZnVuY3Rpb24oKXt0aGlzLm5vZGVzXy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD12LmdldChlKSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07aWYoby5vYnNlcnZlcj09PXRoaXMpe28ucmVtb3ZlTGlzdGVuZXJzKCksdC5zcGxpY2UobiwxKTticmVha319fSx0aGlzKSx0aGlzLnJlY29yZHNfPVtdfSx0YWtlUmVjb3JkczpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVjb3Jkc187cmV0dXJuIHRoaXMucmVjb3Jkc189W10sZX19O3ZhciBFLEw7cC5wcm90b3R5cGU9e2VucXVldWU6ZnVuY3Rpb24oZSl7dmFyIG49dGhpcy5vYnNlcnZlci5yZWNvcmRzXyxvPW4ubGVuZ3RoO2lmKG4ubGVuZ3RoPjApe3ZhciByPW5bby0xXSxpPWYocixlKTtpZihpKXJldHVybiB2b2lkKG5bby0xXT1pKX1lbHNlIHQodGhpcy5vYnNlcnZlcik7bltvXT1lfSxhZGRMaXN0ZW5lcnM6ZnVuY3Rpb24oKXt0aGlzLmFkZExpc3RlbmVyc18odGhpcy50YXJnZXQpfSxhZGRMaXN0ZW5lcnNfOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMub3B0aW9uczt0LmF0dHJpYnV0ZXMmJmUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUF0dHJNb2RpZmllZFwiLHRoaXMsITApLHQuY2hhcmFjdGVyRGF0YSYmZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkXCIsdGhpcywhMCksdC5jaGlsZExpc3QmJmUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLHRoaXMsITApLCh0LmNoaWxkTGlzdHx8dC5zdWJ0cmVlKSYmZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NTm9kZVJlbW92ZWRcIix0aGlzLCEwKX0scmVtb3ZlTGlzdGVuZXJzOmZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVMaXN0ZW5lcnNfKHRoaXMudGFyZ2V0KX0scmVtb3ZlTGlzdGVuZXJzXzpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnM7dC5hdHRyaWJ1dGVzJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01BdHRyTW9kaWZpZWRcIix0aGlzLCEwKSx0LmNoYXJhY3RlckRhdGEmJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNoYXJhY3RlckRhdGFNb2RpZmllZFwiLHRoaXMsITApLHQuY2hpbGRMaXN0JiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIix0aGlzLCEwKSwodC5jaGlsZExpc3R8fHQuc3VidHJlZSkmJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVSZW1vdmVkXCIsdGhpcywhMCl9LGFkZFRyYW5zaWVudE9ic2VydmVyOmZ1bmN0aW9uKGUpe2lmKGUhPT10aGlzLnRhcmdldCl7dGhpcy5hZGRMaXN0ZW5lcnNfKGUpLHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2Rlcy5wdXNoKGUpO3ZhciB0PXYuZ2V0KGUpO3R8fHYuc2V0KGUsdD1bXSksdC5wdXNoKHRoaXMpfX0scmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50cmFuc2llbnRPYnNlcnZlZE5vZGVzO3RoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2Rlcz1bXSxlLmZvckVhY2goZnVuY3Rpb24oZSl7dGhpcy5yZW1vdmVMaXN0ZW5lcnNfKGUpO2Zvcih2YXIgdD12LmdldChlKSxuPTA7bjx0Lmxlbmd0aDtuKyspaWYodFtuXT09PXRoaXMpe3Quc3BsaWNlKG4sMSk7YnJlYWt9fSx0aGlzKX0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24oZSl7c3dpdGNoKGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS50eXBlKXtjYXNlXCJET01BdHRyTW9kaWZpZWRcIjp2YXIgdD1lLmF0dHJOYW1lLG49ZS5yZWxhdGVkTm9kZS5uYW1lc3BhY2VVUkksbz1lLnRhcmdldCxyPW5ldyBkKFwiYXR0cmlidXRlc1wiLG8pO3IuYXR0cmlidXRlTmFtZT10LHIuYXR0cmlidXRlTmFtZXNwYWNlPW47dmFyIGE9ZS5hdHRyQ2hhbmdlPT09TXV0YXRpb25FdmVudC5BRERJVElPTj9udWxsOmUucHJldlZhbHVlO2kobyxmdW5jdGlvbihlKXtpZihlLmF0dHJpYnV0ZXMmJighZS5hdHRyaWJ1dGVGaWx0ZXJ8fCFlLmF0dHJpYnV0ZUZpbHRlci5sZW5ndGh8fGUuYXR0cmlidXRlRmlsdGVyLmluZGV4T2YodCkhPT0tMXx8ZS5hdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihuKSE9PS0xKSlyZXR1cm4gZS5hdHRyaWJ1dGVPbGRWYWx1ZT9sKGEpOnJ9KTticmVhaztjYXNlXCJET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWRcIjp2YXIgbz1lLnRhcmdldCxyPWQoXCJjaGFyYWN0ZXJEYXRhXCIsbyksYT1lLnByZXZWYWx1ZTtpKG8sZnVuY3Rpb24oZSl7aWYoZS5jaGFyYWN0ZXJEYXRhKXJldHVybiBlLmNoYXJhY3RlckRhdGFPbGRWYWx1ZT9sKGEpOnJ9KTticmVhaztjYXNlXCJET01Ob2RlUmVtb3ZlZFwiOnRoaXMuYWRkVHJhbnNpZW50T2JzZXJ2ZXIoZS50YXJnZXQpO2Nhc2VcIkRPTU5vZGVJbnNlcnRlZFwiOnZhciBzLGMsaD1lLnRhcmdldDtcIkRPTU5vZGVJbnNlcnRlZFwiPT09ZS50eXBlPyhzPVtoXSxjPVtdKToocz1bXSxjPVtoXSk7dmFyIGY9aC5wcmV2aW91c1NpYmxpbmcscD1oLm5leHRTaWJsaW5nLHI9ZChcImNoaWxkTGlzdFwiLGUudGFyZ2V0LnBhcmVudE5vZGUpO3IuYWRkZWROb2Rlcz1zLHIucmVtb3ZlZE5vZGVzPWMsci5wcmV2aW91c1NpYmxpbmc9ZixyLm5leHRTaWJsaW5nPXAsaShlLnJlbGF0ZWROb2RlLGZ1bmN0aW9uKGUpe2lmKGUuY2hpbGRMaXN0KXJldHVybiByfSl9dSgpfX0sZS5Kc011dGF0aW9uT2JzZXJ2ZXI9YSxlLk11dGF0aW9uT2JzZXJ2ZXJ8fChlLk11dGF0aW9uT2JzZXJ2ZXI9YSxhLl9pc1BvbHlmaWxsZWQ9ITApfX0oc2VsZiksZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3N3aXRjaChlKXtjYXNlXCImXCI6cmV0dXJuXCImYW1wO1wiO2Nhc2VcIjxcIjpyZXR1cm5cIiZsdDtcIjtjYXNlXCI+XCI6cmV0dXJuXCImZ3Q7XCI7Y2FzZVwiwqBcIjpyZXR1cm5cIiZuYnNwO1wifX1mdW5jdGlvbiB0KHQpe3JldHVybiB0LnJlcGxhY2UodSxlKX12YXIgbj1cInVuZGVmaW5lZFwiPT10eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudDsvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuaW1wb3J0Tm9kZTtkb2N1bWVudC5pbXBvcnROb2RlPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5hcHBseShkb2N1bWVudCxhcmd1bWVudHMpO2lmKHQubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm4gbi5hcHBlbmRDaGlsZCh0KSxufXJldHVybiB0fX0oKTt2YXIgbz1mdW5jdGlvbigpe2lmKCFuKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7dC5jb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGUuY29udGVudC5hcHBlbmRDaGlsZCh0KTt2YXIgbz1lLmNsb25lTm9kZSghMCk7cmV0dXJuIDA9PT1vLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGh8fDA9PT1vLmNvbnRlbnQuZmlyc3RDaGlsZC5jb250ZW50LmNoaWxkTm9kZXMubGVuZ3RofX0oKSxyPVwidGVtcGxhdGVcIixpPWZ1bmN0aW9uKCl7fTtpZihuKXt2YXIgYT1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJ0ZW1wbGF0ZVwiKSxzPSEwLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2MudGV4dENvbnRlbnQ9citcIntkaXNwbGF5Om5vbmU7fVwiO3ZhciBkPWRvY3VtZW50LmhlYWQ7ZC5pbnNlcnRCZWZvcmUoYyxkLmZpcnN0RWxlbWVudENoaWxkKSxpLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSksaS5kZWNvcmF0ZT1mdW5jdGlvbihlKXtpZighZS5jb250ZW50KXtlLmNvbnRlbnQ9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Zm9yKHZhciBuO249ZS5maXJzdENoaWxkOyllLmNvbnRlbnQuYXBwZW5kQ2hpbGQobik7aWYoZS5jbG9uZU5vZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGkuY2xvbmVOb2RlKHRoaXMsZSl9LHMpdHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiaW5uZXJIVE1MXCIse2dldDpmdW5jdGlvbigpe2Zvcih2YXIgZT1cIlwiLG49dGhpcy5jb250ZW50LmZpcnN0Q2hpbGQ7bjtuPW4ubmV4dFNpYmxpbmcpZSs9bi5vdXRlckhUTUx8fHQobi5kYXRhKTtyZXR1cm4gZX0sc2V0OmZ1bmN0aW9uKGUpe2ZvcihhLmJvZHkuaW5uZXJIVE1MPWUsaS5ib290c3RyYXAoYSk7dGhpcy5jb250ZW50LmZpcnN0Q2hpbGQ7KXRoaXMuY29udGVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7Zm9yKDthLmJvZHkuZmlyc3RDaGlsZDspdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGEuYm9keS5maXJzdENoaWxkKX0sY29uZmlndXJhYmxlOiEwfSl9Y2F0Y2gobyl7cz0hMX1pLmJvb3RzdHJhcChlLmNvbnRlbnQpfX0saS5ib290c3RyYXA9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49ZS5xdWVyeVNlbGVjdG9yQWxsKHIpLG89MCxhPW4ubGVuZ3RoO288YSYmKHQ9bltvXSk7bysrKWkuZGVjb3JhdGUodCl9LGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtpLmJvb3RzdHJhcChkb2N1bWVudCl9KTt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50O2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1sLmFwcGx5KGRvY3VtZW50LGFyZ3VtZW50cyk7cmV0dXJuXCJ0ZW1wbGF0ZVwiPT09ZS5sb2NhbE5hbWUmJmkuZGVjb3JhdGUoZSksZX07dmFyIHU9L1smXFx1MDBBMDw+XS9nfWlmKG58fG8pe3ZhciBoPU5vZGUucHJvdG90eXBlLmNsb25lTm9kZTtpLmNsb25lTm9kZT1mdW5jdGlvbihlLHQpe3ZhciBuPWguY2FsbChlLCExKTtyZXR1cm4gdGhpcy5kZWNvcmF0ZSYmdGhpcy5kZWNvcmF0ZShuKSx0JiYobi5jb250ZW50LmFwcGVuZENoaWxkKGguY2FsbChlLmNvbnRlbnQsITApKSx0aGlzLmZpeENsb25lZERvbShuLmNvbnRlbnQsZS5jb250ZW50KSksbn0saS5maXhDbG9uZWREb209ZnVuY3Rpb24oZSx0KXtpZih0LnF1ZXJ5U2VsZWN0b3JBbGwpZm9yKHZhciBuLG8saT10LnF1ZXJ5U2VsZWN0b3JBbGwociksYT1lLnF1ZXJ5U2VsZWN0b3JBbGwocikscz0wLGM9YS5sZW5ndGg7czxjO3MrKylvPWlbc10sbj1hW3NdLHRoaXMuZGVjb3JhdGUmJnRoaXMuZGVjb3JhdGUobyksbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvLmNsb25lTm9kZSghMCksbil9O3ZhciBmPWRvY3VtZW50LmltcG9ydE5vZGU7Tm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlPWZ1bmN0aW9uKGUpe3ZhciB0PWguY2FsbCh0aGlzLGUpO3JldHVybiBlJiZpLmZpeENsb25lZERvbSh0LHRoaXMpLHR9LGRvY3VtZW50LmltcG9ydE5vZGU9ZnVuY3Rpb24oZSx0KXtpZihlLmxvY2FsTmFtZT09PXIpcmV0dXJuIGkuY2xvbmVOb2RlKGUsdCk7dmFyIG49Zi5jYWxsKGRvY3VtZW50LGUsdCk7cmV0dXJuIHQmJmkuZml4Q2xvbmVkRG9tKG4sZSksbn0sbyYmKEhUTUxUZW1wbGF0ZUVsZW1lbnQucHJvdG90eXBlLmNsb25lTm9kZT1mdW5jdGlvbihlKXtyZXR1cm4gaS5jbG9uZU5vZGUodGhpcyxlKX0pfW4mJih3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudD1pKX0oKSxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtpZighd2luZG93LnBlcmZvcm1hbmNlfHwhd2luZG93LnBlcmZvcm1hbmNlLm5vdyl7dmFyIHQ9RGF0ZS5ub3coKTt3aW5kb3cucGVyZm9ybWFuY2U9e25vdzpmdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpLXR9fX13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbigpe3ZhciBlPXdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7cmV0dXJuIGU/ZnVuY3Rpb24odCl7cmV0dXJuIGUoZnVuY3Rpb24oKXt0KHBlcmZvcm1hbmNlLm5vdygpKX0pfTpmdW5jdGlvbihlKXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZSwxZTMvNjApfX0oKSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZSl9fSgpKTt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7cmV0dXJuIGUuaW5pdEV2ZW50KFwiZm9vXCIsITAsITApLGUucHJldmVudERlZmF1bHQoKSxlLmRlZmF1bHRQcmV2ZW50ZWR9KCk7aWYoIW4pe3ZhciBvPUV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdDtFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt0aGlzLmNhbmNlbGFibGUmJihvLmNhbGwodGhpcyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJkZWZhdWx0UHJldmVudGVkXCIse2dldDpmdW5jdGlvbigpe3JldHVybiEwfSxjb25maWd1cmFibGU6ITB9KSl9fXZhciByPS9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKCghd2luZG93LkN1c3RvbUV2ZW50fHxyJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpJiYod2luZG93LkN1c3RvbUV2ZW50PWZ1bmN0aW9uKGUsdCl7dD10fHx7fTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudChlLEJvb2xlYW4odC5idWJibGVzKSxCb29sZWFuKHQuY2FuY2VsYWJsZSksdC5kZXRhaWwpLG59LHdpbmRvdy5DdXN0b21FdmVudC5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSksIXdpbmRvdy5FdmVudHx8ciYmXCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LkV2ZW50KXt2YXIgaT13aW5kb3cuRXZlbnQ7d2luZG93LkV2ZW50PWZ1bmN0aW9uKGUsdCl7dD10fHx7fTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO3JldHVybiBuLmluaXRFdmVudChlLEJvb2xlYW4odC5idWJibGVzKSxCb29sZWFuKHQuY2FuY2VsYWJsZSkpLG59LHdpbmRvdy5FdmVudC5wcm90b3R5cGU9aS5wcm90b3R5cGV9fSh3aW5kb3cuV2ViQ29tcG9uZW50cyksd2luZG93LkhUTUxJbXBvcnRzPXdpbmRvdy5IVE1MSW1wb3J0c3x8e2ZsYWdzOnt9fSxmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUsdCl7dD10fHxwLG8oZnVuY3Rpb24oKXtpKGUsdCl9LHQpfWZ1bmN0aW9uIG4oZSl7cmV0dXJuXCJjb21wbGV0ZVwiPT09ZS5yZWFkeVN0YXRlfHxlLnJlYWR5U3RhdGU9PT13fWZ1bmN0aW9uIG8oZSx0KXtpZihuKHQpKWUmJmUoKTtlbHNle3ZhciByPWZ1bmN0aW9uKCl7XCJjb21wbGV0ZVwiIT09dC5yZWFkeVN0YXRlJiZ0LnJlYWR5U3RhdGUhPT13fHwodC5yZW1vdmVFdmVudExpc3RlbmVyKF8sciksbyhlLHQpKX07dC5hZGRFdmVudExpc3RlbmVyKF8scil9fWZ1bmN0aW9uIHIoZSl7ZS50YXJnZXQuX19sb2FkZWQ9ITB9ZnVuY3Rpb24gaShlLHQpe2Z1bmN0aW9uIG4oKXtjPT1kJiZlJiZlKHthbGxJbXBvcnRzOnMsbG9hZGVkSW1wb3J0czpsLGVycm9ySW1wb3J0czp1fSl9ZnVuY3Rpb24gbyhlKXtyKGUpLGwucHVzaCh0aGlzKSxjKyssbigpfWZ1bmN0aW9uIGkoZSl7dS5wdXNoKHRoaXMpLGMrKyxuKCl9dmFyIHM9dC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKSxjPTAsZD1zLmxlbmd0aCxsPVtdLHU9W107aWYoZClmb3IodmFyIGgsZj0wO2Y8ZCYmKGg9c1tmXSk7ZisrKWEoaCk/KGwucHVzaCh0aGlzKSxjKyssbigpKTooaC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG8pLGguYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsaSkpO2Vsc2UgbigpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIHU/ZS5fX2xvYWRlZHx8ZVtcImltcG9ydFwiXSYmXCJsb2FkaW5nXCIhPT1lW1wiaW1wb3J0XCJdLnJlYWR5U3RhdGU6ZS5fX2ltcG9ydFBhcnNlZH1mdW5jdGlvbiBzKGUpe2Zvcih2YXIgdCxuPTAsbz1lLmxlbmd0aDtuPG8mJih0PWVbbl0pO24rKyljKHQpJiZkKHQpfWZ1bmN0aW9uIGMoZSl7cmV0dXJuXCJsaW5rXCI9PT1lLmxvY2FsTmFtZSYmXCJpbXBvcnRcIj09PWUucmVsfWZ1bmN0aW9uIGQoZSl7dmFyIHQ9ZVtcImltcG9ydFwiXTt0P3Ioe3RhcmdldDplfSk6KGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixyKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHIpKX12YXIgbD1cImltcG9ydFwiLHU9Qm9vbGVhbihsIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpKSxoPUJvb2xlYW4od2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSxmPWZ1bmN0aW9uKGUpe3JldHVybiBoP3dpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbC53cmFwSWZOZWVkZWQoZSk6ZX0scD1mKGRvY3VtZW50KSxtPXtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT13aW5kb3cuSFRNTEltcG9ydHMuY3VycmVudFNjcmlwdHx8ZG9jdW1lbnQuY3VycmVudFNjcmlwdHx8KFwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/ZG9jdW1lbnQuc2NyaXB0c1tkb2N1bWVudC5zY3JpcHRzLmxlbmd0aC0xXTpudWxsKTtyZXR1cm4gZihlKX0sY29uZmlndXJhYmxlOiEwfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQsXCJfY3VycmVudFNjcmlwdFwiLG0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLFwiX2N1cnJlbnRTY3JpcHRcIixtKTt2YXIgdj0vVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx3PXY/XCJjb21wbGV0ZVwiOlwiaW50ZXJhY3RpdmVcIixfPVwicmVhZHlzdGF0ZWNoYW5nZVwiO3UmJihuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihlKXtmb3IodmFyIHQsbj0wLG89ZS5sZW5ndGg7bjxvJiYodD1lW25dKTtuKyspdC5hZGRlZE5vZGVzJiZzKHQuYWRkZWROb2Rlcyl9KS5vYnNlcnZlKGRvY3VtZW50LmhlYWQse2NoaWxkTGlzdDohMH0pLGZ1bmN0aW9uKCl7aWYoXCJsb2FkaW5nXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlKWZvcih2YXIgZSx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpLG49MCxvPXQubGVuZ3RoO248byYmKGU9dFtuXSk7bisrKWQoZSl9KCkpLHQoZnVuY3Rpb24oZSl7d2luZG93LkhUTUxJbXBvcnRzLnJlYWR5PSEwLHdpbmRvdy5IVE1MSW1wb3J0cy5yZWFkeVRpbWU9KG5ldyBEYXRlKS5nZXRUaW1lKCk7dmFyIHQ9cC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3QuaW5pdEN1c3RvbUV2ZW50KFwiSFRNTEltcG9ydHNMb2FkZWRcIiwhMCwhMCxlKSxwLmRpc3BhdGNoRXZlbnQodCl9KSxlLklNUE9SVF9MSU5LX1RZUEU9bCxlLnVzZU5hdGl2ZT11LGUucm9vdERvY3VtZW50PXAsZS53aGVuUmVhZHk9dCxlLmlzSUU9dn0od2luZG93LkhUTUxJbXBvcnRzKSxmdW5jdGlvbihlKXt2YXIgdD1bXSxuPWZ1bmN0aW9uKGUpe3QucHVzaChlKX0sbz1mdW5jdGlvbigpe3QuZm9yRWFjaChmdW5jdGlvbih0KXt0KGUpfSl9O2UuYWRkTW9kdWxlPW4sZS5pbml0aWFsaXplTW9kdWxlcz1vfSh3aW5kb3cuSFRNTEltcG9ydHMpLHdpbmRvdy5IVE1MSW1wb3J0cy5hZGRNb2R1bGUoZnVuY3Rpb24oZSl7dmFyIHQ9Lyh1cmxcXCgpKFteKV0qKShcXCkpL2csbj0vKEBpbXBvcnRbXFxzXSsoPyF1cmxcXCgpKShbXjtdKikoOykvZyxvPXtyZXNvbHZlVXJsc0luU3R5bGU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLm93bmVyRG9jdW1lbnQsbz1uLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3JldHVybiBlLnRleHRDb250ZW50PXRoaXMucmVzb2x2ZVVybHNJbkNzc1RleHQoZS50ZXh0Q29udGVudCx0LG8pLGV9LHJlc29sdmVVcmxzSW5Dc3NUZXh0OmZ1bmN0aW9uKGUsbyxyKXt2YXIgaT10aGlzLnJlcGxhY2VVcmxzKGUscixvLHQpO3JldHVybiBpPXRoaXMucmVwbGFjZVVybHMoaSxyLG8sbil9LHJlcGxhY2VVcmxzOmZ1bmN0aW9uKGUsdCxuLG8pe3JldHVybiBlLnJlcGxhY2UobyxmdW5jdGlvbihlLG8scixpKXt2YXIgYT1yLnJlcGxhY2UoL1tcIiddL2csXCJcIik7cmV0dXJuIG4mJihhPW5ldyBVUkwoYSxuKS5ocmVmKSx0LmhyZWY9YSxhPXQuaHJlZixvK1wiJ1wiK2ErXCInXCIraX0pfX07ZS5wYXRoPW99KSx3aW5kb3cuSFRNTEltcG9ydHMuYWRkTW9kdWxlKGZ1bmN0aW9uKGUpe3ZhciB0PXthc3luYzohMCxvazpmdW5jdGlvbihlKXtyZXR1cm4gZS5zdGF0dXM+PTIwMCYmZS5zdGF0dXM8MzAwfHwzMDQ9PT1lLnN0YXR1c3x8MD09PWUuc3RhdHVzfSxsb2FkOmZ1bmN0aW9uKG4sbyxyKXt2YXIgaT1uZXcgWE1MSHR0cFJlcXVlc3Q7cmV0dXJuKGUuZmxhZ3MuZGVidWd8fGUuZmxhZ3MuYnVzdCkmJihuKz1cIj9cIitNYXRoLnJhbmRvbSgpKSxpLm9wZW4oXCJHRVRcIixuLHQuYXN5bmMpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbihlKXtpZig0PT09aS5yZWFkeVN0YXRlKXt2YXIgbj1udWxsO3RyeXt2YXIgYT1pLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIik7YSYmKG49XCIvXCI9PT1hLnN1YnN0cigwLDEpP2xvY2F0aW9uLm9yaWdpbithOmEpfWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKX1vLmNhbGwociwhdC5vayhpKSYmaSxpLnJlc3BvbnNlfHxpLnJlc3BvbnNlVGV4dCxuKX19KSxpLnNlbmQoKSxpfSxsb2FkRG9jdW1lbnQ6ZnVuY3Rpb24oZSx0LG4pe3RoaXMubG9hZChlLHQsbikucmVzcG9uc2VUeXBlPVwiZG9jdW1lbnRcIn19O2UueGhyPXR9KSx3aW5kb3cuSFRNTEltcG9ydHMuYWRkTW9kdWxlKGZ1bmN0aW9uKGUpe3ZhciB0PWUueGhyLG49ZS5mbGFncyxvPWZ1bmN0aW9uKGUsdCl7dGhpcy5jYWNoZT17fSx0aGlzLm9ubG9hZD1lLHRoaXMub25jb21wbGV0ZT10LHRoaXMuaW5mbGlnaHQ9MCx0aGlzLnBlbmRpbmc9e319O28ucHJvdG90eXBlPXthZGROb2RlczpmdW5jdGlvbihlKXt0aGlzLmluZmxpZ2h0Kz1lLmxlbmd0aDtmb3IodmFyIHQsbj0wLG89ZS5sZW5ndGg7bjxvJiYodD1lW25dKTtuKyspdGhpcy5yZXF1aXJlKHQpO3RoaXMuY2hlY2tEb25lKCl9LGFkZE5vZGU6ZnVuY3Rpb24oZSl7dGhpcy5pbmZsaWdodCsrLHRoaXMucmVxdWlyZShlKSx0aGlzLmNoZWNrRG9uZSgpfSxyZXF1aXJlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuc3JjfHxlLmhyZWY7ZS5fX25vZGVVcmw9dCx0aGlzLmRlZHVwZSh0LGUpfHx0aGlzLmZldGNoKHQsZSl9LGRlZHVwZTpmdW5jdGlvbihlLHQpe2lmKHRoaXMucGVuZGluZ1tlXSlyZXR1cm4gdGhpcy5wZW5kaW5nW2VdLnB1c2godCksITA7cmV0dXJuIHRoaXMuY2FjaGVbZV0/KHRoaXMub25sb2FkKGUsdCx0aGlzLmNhY2hlW2VdKSx0aGlzLnRhaWwoKSwhMCk6KHRoaXMucGVuZGluZ1tlXT1bdF0sITEpfSxmZXRjaDpmdW5jdGlvbihlLG8pe2lmKG4ubG9hZCYmY29uc29sZS5sb2coXCJmZXRjaFwiLGUsbyksZSlpZihlLm1hdGNoKC9eZGF0YTovKSl7dmFyIHI9ZS5zcGxpdChcIixcIiksaT1yWzBdLGE9clsxXTthPWkuaW5kZXhPZihcIjtiYXNlNjRcIik+LTE/YXRvYihhKTpkZWNvZGVVUklDb21wb25lbnQoYSksc2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMucmVjZWl2ZShlLG8sbnVsbCxhKX0uYmluZCh0aGlzKSwwKX1lbHNle3ZhciBzPWZ1bmN0aW9uKHQsbixyKXt0aGlzLnJlY2VpdmUoZSxvLHQsbixyKX0uYmluZCh0aGlzKTt0LmxvYWQoZSxzKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLnJlY2VpdmUoZSxvLHtlcnJvcjpcImhyZWYgbXVzdCBiZSBzcGVjaWZpZWRcIn0sbnVsbCl9LmJpbmQodGhpcyksMCl9LHJlY2VpdmU6ZnVuY3Rpb24oZSx0LG4sbyxyKXt0aGlzLmNhY2hlW2VdPW87Zm9yKHZhciBpLGE9dGhpcy5wZW5kaW5nW2VdLHM9MCxjPWEubGVuZ3RoO3M8YyYmKGk9YVtzXSk7cysrKXRoaXMub25sb2FkKGUsaSxvLG4sciksdGhpcy50YWlsKCk7dGhpcy5wZW5kaW5nW2VdPW51bGx9LHRhaWw6ZnVuY3Rpb24oKXstLXRoaXMuaW5mbGlnaHQsdGhpcy5jaGVja0RvbmUoKX0sY2hlY2tEb25lOmZ1bmN0aW9uKCl7dGhpcy5pbmZsaWdodHx8dGhpcy5vbmNvbXBsZXRlKCl9fSxlLkxvYWRlcj1vfSksd2luZG93LkhUTUxJbXBvcnRzLmFkZE1vZHVsZShmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlKXt0aGlzLmFkZENhbGxiYWNrPWUsdGhpcy5tbz1uZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmhhbmRsZXIuYmluZCh0aGlzKSl9O3QucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPTAsbz1lLmxlbmd0aDtuPG8mJih0PWVbbl0pO24rKylcImNoaWxkTGlzdFwiPT09dC50eXBlJiZ0LmFkZGVkTm9kZXMubGVuZ3RoJiZ0aGlzLmFkZGVkTm9kZXModC5hZGRlZE5vZGVzKX0sYWRkZWROb2RlczpmdW5jdGlvbihlKXt0aGlzLmFkZENhbGxiYWNrJiZ0aGlzLmFkZENhbGxiYWNrKGUpO2Zvcih2YXIgdCxuPTAsbz1lLmxlbmd0aDtuPG8mJih0PWVbbl0pO24rKyl0LmNoaWxkcmVuJiZ0LmNoaWxkcmVuLmxlbmd0aCYmdGhpcy5hZGRlZE5vZGVzKHQuY2hpbGRyZW4pfSxvYnNlcnZlOmZ1bmN0aW9uKGUpe3RoaXMubW8ub2JzZXJ2ZShlLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfX0sZS5PYnNlcnZlcj10fSksd2luZG93LkhUTUxJbXBvcnRzLmFkZE1vZHVsZShmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3JldHVyblwibGlua1wiPT09ZS5sb2NhbE5hbWUmJmUucmVsPT09bH1mdW5jdGlvbiBuKGUpe3ZhciB0PW8oZSk7cmV0dXJuXCJkYXRhOnRleHQvamF2YXNjcmlwdDtjaGFyc2V0PXV0Zi04LFwiK2VuY29kZVVSSUNvbXBvbmVudCh0KX1mdW5jdGlvbiBvKGUpe3JldHVybiBlLnRleHRDb250ZW50K3IoZSl9ZnVuY3Rpb24gcihlKXt2YXIgdD1lLm93bmVyRG9jdW1lbnQ7dC5fX2ltcG9ydGVkU2NyaXB0cz10Ll9faW1wb3J0ZWRTY3JpcHRzfHwwO3ZhciBuPWUub3duZXJEb2N1bWVudC5iYXNlVVJJLG89dC5fX2ltcG9ydGVkU2NyaXB0cz9cIi1cIit0Ll9faW1wb3J0ZWRTY3JpcHRzOlwiXCI7cmV0dXJuIHQuX19pbXBvcnRlZFNjcmlwdHMrKyxcIlxcbi8vIyBzb3VyY2VVUkw9XCIrbitvK1wiLmpzXFxuXCJ9ZnVuY3Rpb24gaShlKXt2YXIgdD1lLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB0LnRleHRDb250ZW50PWUudGV4dENvbnRlbnQsYS5yZXNvbHZlVXJsc0luU3R5bGUodCksdH12YXIgYT1lLnBhdGgscz1lLnJvb3REb2N1bWVudCxjPWUuZmxhZ3MsZD1lLmlzSUUsbD1lLklNUE9SVF9MSU5LX1RZUEUsdT1cImxpbmtbcmVsPVwiK2wrXCJdXCIsaD17ZG9jdW1lbnRTZWxlY3RvcnM6dSxpbXBvcnRzU2VsZWN0b3JzOlt1LFwibGlua1tyZWw9c3R5bGVzaGVldF06bm90KFt0eXBlXSlcIixcInN0eWxlOm5vdChbdHlwZV0pXCIsXCJzY3JpcHQ6bm90KFt0eXBlXSlcIiwnc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdJywnc2NyaXB0W3R5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIl0nXS5qb2luKFwiLFwiKSxtYXA6e2xpbms6XCJwYXJzZUxpbmtcIixzY3JpcHQ6XCJwYXJzZVNjcmlwdFwiLHN0eWxlOlwicGFyc2VTdHlsZVwifSxkeW5hbWljRWxlbWVudHM6W10scGFyc2VOZXh0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5uZXh0VG9QYXJzZSgpO2UmJnRoaXMucGFyc2UoZSl9LHBhcnNlOmZ1bmN0aW9uKGUpe2lmKHRoaXMuaXNQYXJzZWQoZSkpcmV0dXJuIHZvaWQoYy5wYXJzZSYmY29uc29sZS5sb2coXCJbJXNdIGlzIGFscmVhZHkgcGFyc2VkXCIsZS5sb2NhbE5hbWUpKTt2YXIgdD10aGlzW3RoaXMubWFwW2UubG9jYWxOYW1lXV07dCYmKHRoaXMubWFya1BhcnNpbmcoZSksdC5jYWxsKHRoaXMsZSkpfSxwYXJzZUR5bmFtaWM6ZnVuY3Rpb24oZSx0KXt0aGlzLmR5bmFtaWNFbGVtZW50cy5wdXNoKGUpLHR8fHRoaXMucGFyc2VOZXh0KCl9LG1hcmtQYXJzaW5nOmZ1bmN0aW9uKGUpe2MucGFyc2UmJmNvbnNvbGUubG9nKFwicGFyc2luZ1wiLGUpLHRoaXMucGFyc2luZ0VsZW1lbnQ9ZX0sbWFya1BhcnNpbmdDb21wbGV0ZTpmdW5jdGlvbihlKXtlLl9faW1wb3J0UGFyc2VkPSEwLHRoaXMubWFya0R5bmFtaWNQYXJzaW5nQ29tcGxldGUoZSksZS5fX2ltcG9ydEVsZW1lbnQmJihlLl9faW1wb3J0RWxlbWVudC5fX2ltcG9ydFBhcnNlZD0hMCx0aGlzLm1hcmtEeW5hbWljUGFyc2luZ0NvbXBsZXRlKGUuX19pbXBvcnRFbGVtZW50KSksdGhpcy5wYXJzaW5nRWxlbWVudD1udWxsLGMucGFyc2UmJmNvbnNvbGUubG9nKFwiY29tcGxldGVkXCIsZSl9LG1hcmtEeW5hbWljUGFyc2luZ0NvbXBsZXRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZHluYW1pY0VsZW1lbnRzLmluZGV4T2YoZSk7dD49MCYmdGhpcy5keW5hbWljRWxlbWVudHMuc3BsaWNlKHQsMSl9LHBhcnNlSW1wb3J0OmZ1bmN0aW9uKGUpe2lmKGVbXCJpbXBvcnRcIl09ZS5fX2RvYyx3aW5kb3cuSFRNTEltcG9ydHMuX19pbXBvcnRzUGFyc2luZ0hvb2smJndpbmRvdy5IVE1MSW1wb3J0cy5fX2ltcG9ydHNQYXJzaW5nSG9vayhlKSxlW1wiaW1wb3J0XCJdJiYoZVtcImltcG9ydFwiXS5fX2ltcG9ydFBhcnNlZD0hMCksdGhpcy5tYXJrUGFyc2luZ0NvbXBsZXRlKGUpLGUuX19yZXNvdXJjZSYmIWUuX19lcnJvcj9lLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibG9hZFwiLHtidWJibGVzOiExfSkpOmUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJlcnJvclwiLHtidWJibGVzOiExfSkpLGUuX19wZW5kaW5nKWZvcih2YXIgdDtlLl9fcGVuZGluZy5sZW5ndGg7KXQ9ZS5fX3BlbmRpbmcuc2hpZnQoKSx0JiZ0KHt0YXJnZXQ6ZX0pO3RoaXMucGFyc2VOZXh0KCl9LHBhcnNlTGluazpmdW5jdGlvbihlKXt0KGUpP3RoaXMucGFyc2VJbXBvcnQoZSk6KGUuaHJlZj1lLmhyZWYsdGhpcy5wYXJzZUdlbmVyaWMoZSkpfSxwYXJzZVN0eWxlOmZ1bmN0aW9uKGUpe3ZhciB0PWU7ZT1pKGUpLHQuX19hcHBsaWVkRWxlbWVudD1lLGUuX19pbXBvcnRFbGVtZW50PXQsdGhpcy5wYXJzZUdlbmVyaWMoZSl9LHBhcnNlR2VuZXJpYzpmdW5jdGlvbihlKXt0aGlzLnRyYWNrRWxlbWVudChlKSx0aGlzLmFkZEVsZW1lbnRUb0RvY3VtZW50KGUpfSxyb290SW1wb3J0Rm9yRWxlbWVudDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZTt0Lm93bmVyRG9jdW1lbnQuX19pbXBvcnRMaW5rOyl0PXQub3duZXJEb2N1bWVudC5fX2ltcG9ydExpbms7cmV0dXJuIHR9LGFkZEVsZW1lbnRUb0RvY3VtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucm9vdEltcG9ydEZvckVsZW1lbnQoZS5fX2ltcG9ydEVsZW1lbnR8fGUpO3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0KX0sdHJhY2tFbGVtZW50OmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxvPWZ1bmN0aW9uKHIpe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixvKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG8pLHQmJnQociksbi5tYXJrUGFyc2luZ0NvbXBsZXRlKGUpLG4ucGFyc2VOZXh0KCl9O2lmKGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixvKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG8pLGQmJlwic3R5bGVcIj09PWUubG9jYWxOYW1lKXt2YXIgcj0hMTtpZihlLnRleHRDb250ZW50LmluZGV4T2YoXCJAaW1wb3J0XCIpPT0tMSlyPSEwO2Vsc2UgaWYoZS5zaGVldCl7cj0hMDtmb3IodmFyIGksYT1lLnNoZWV0LmNzc1J1bGVzLHM9YT9hLmxlbmd0aDowLGM9MDtjPHMmJihpPWFbY10pO2MrKylpLnR5cGU9PT1DU1NSdWxlLklNUE9SVF9SVUxFJiYocj1yJiZCb29sZWFuKGkuc3R5bGVTaGVldCkpfXImJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibG9hZFwiLHtidWJibGVzOiExfSkpfSl9fSxwYXJzZVNjcmlwdDpmdW5jdGlvbih0KXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO28uX19pbXBvcnRFbGVtZW50PXQsby5zcmM9dC5zcmM/dC5zcmM6bih0KSxlLmN1cnJlbnRTY3JpcHQ9dCx0aGlzLnRyYWNrRWxlbWVudChvLGZ1bmN0aW9uKHQpe28ucGFyZW50Tm9kZSYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLGUuY3VycmVudFNjcmlwdD1udWxsfSksdGhpcy5hZGRFbGVtZW50VG9Eb2N1bWVudChvKX0sbmV4dFRvUGFyc2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWF5UGFyc2U9W10sIXRoaXMucGFyc2luZ0VsZW1lbnQmJih0aGlzLm5leHRUb1BhcnNlSW5Eb2Mocyl8fHRoaXMubmV4dFRvUGFyc2VEeW5hbWljKCkpfSxuZXh0VG9QYXJzZUluRG9jOmZ1bmN0aW9uKGUsbil7aWYoZSYmdGhpcy5fbWF5UGFyc2UuaW5kZXhPZihlKTwwKXt0aGlzLl9tYXlQYXJzZS5wdXNoKGUpO2Zvcih2YXIgbyxyPWUucXVlcnlTZWxlY3RvckFsbCh0aGlzLnBhcnNlU2VsZWN0b3JzRm9yTm9kZShlKSksaT0wLGE9ci5sZW5ndGg7aTxhJiYobz1yW2ldKTtpKyspaWYoIXRoaXMuaXNQYXJzZWQobykpcmV0dXJuIHRoaXMuaGFzUmVzb3VyY2Uobyk/dChvKT90aGlzLm5leHRUb1BhcnNlSW5Eb2Moby5fX2RvYyxvKTpvOnZvaWQgMH1yZXR1cm4gbn0sbmV4dFRvUGFyc2VEeW5hbWljOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZHluYW1pY0VsZW1lbnRzWzBdfSxwYXJzZVNlbGVjdG9yc0Zvck5vZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50fHxlO3JldHVybiB0PT09cz90aGlzLmRvY3VtZW50U2VsZWN0b3JzOnRoaXMuaW1wb3J0c1NlbGVjdG9yc30saXNQYXJzZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuX19pbXBvcnRQYXJzZWR9LG5lZWRzRHluYW1pY1BhcnNpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZHluYW1pY0VsZW1lbnRzLmluZGV4T2YoZSk+PTB9LGhhc1Jlc291cmNlOmZ1bmN0aW9uKGUpe3JldHVybiF0KGUpfHx2b2lkIDAhPT1lLl9fZG9jfX07ZS5wYXJzZXI9aCxlLklNUE9SVF9TRUxFQ1RPUj11fSksd2luZG93LkhUTUxJbXBvcnRzLmFkZE1vZHVsZShmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3JldHVybiBuKGUsYSl9ZnVuY3Rpb24gbihlLHQpe3JldHVyblwibGlua1wiPT09ZS5sb2NhbE5hbWUmJmUuZ2V0QXR0cmlidXRlKFwicmVsXCIpPT09dH1mdW5jdGlvbiBvKGUpe3JldHVybiEhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLFwiYmFzZVVSSVwiKX1mdW5jdGlvbiByKGUsdCl7dmFyIG49ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KGEpO24uX1VSTD10O3ZhciByPW4uY3JlYXRlRWxlbWVudChcImJhc2VcIik7ci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsdCksbi5iYXNlVVJJfHxvKG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImJhc2VVUklcIix7dmFsdWU6dH0pO3ZhciBpPW4uY3JlYXRlRWxlbWVudChcIm1ldGFcIik7cmV0dXJuIGkuc2V0QXR0cmlidXRlKFwiY2hhcnNldFwiLFwidXRmLThcIiksbi5oZWFkLmFwcGVuZENoaWxkKGkpLG4uaGVhZC5hcHBlbmRDaGlsZChyKSxuLmJvZHkuaW5uZXJIVE1MPWUsd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQmJkhUTUxUZW1wbGF0ZUVsZW1lbnQuYm9vdHN0cmFwJiZIVE1MVGVtcGxhdGVFbGVtZW50LmJvb3RzdHJhcChuKSxufXZhciBpPWUuZmxhZ3MsYT1lLklNUE9SVF9MSU5LX1RZUEUscz1lLklNUE9SVF9TRUxFQ1RPUixjPWUucm9vdERvY3VtZW50LGQ9ZS5Mb2FkZXIsbD1lLk9ic2VydmVyLHU9ZS5wYXJzZXIsaD17ZG9jdW1lbnRzOnt9LGRvY3VtZW50UHJlbG9hZFNlbGVjdG9yczpzLGltcG9ydHNQcmVsb2FkU2VsZWN0b3JzOltzXS5qb2luKFwiLFwiKSxsb2FkTm9kZTpmdW5jdGlvbihlKXtmLmFkZE5vZGUoZSl9LGxvYWRTdWJ0cmVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubWFyc2hhbE5vZGVzKGUpO2YuYWRkTm9kZXModCl9LG1hcnNoYWxOb2RlczpmdW5jdGlvbihlKXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubG9hZFNlbGVjdG9yc0Zvck5vZGUoZSkpfSxsb2FkU2VsZWN0b3JzRm9yTm9kZTpmdW5jdGlvbihlKXt2YXIgdD1lLm93bmVyRG9jdW1lbnR8fGU7cmV0dXJuIHQ9PT1jP3RoaXMuZG9jdW1lbnRQcmVsb2FkU2VsZWN0b3JzOnRoaXMuaW1wb3J0c1ByZWxvYWRTZWxlY3RvcnN9LGxvYWRlZDpmdW5jdGlvbihlLG4sbyxhLHMpe2lmKGkubG9hZCYmY29uc29sZS5sb2coXCJsb2FkZWRcIixlLG4pLG4uX19yZXNvdXJjZT1vLG4uX19lcnJvcj1hLHQobikpe3ZhciBjPXRoaXMuZG9jdW1lbnRzW2VdO3ZvaWQgMD09PWMmJihjPWE/bnVsbDpyKG8sc3x8ZSksYyYmKGMuX19pbXBvcnRMaW5rPW4sdGhpcy5ib290RG9jdW1lbnQoYykpLHRoaXMuZG9jdW1lbnRzW2VdPWMpLG4uX19kb2M9Y311LnBhcnNlTmV4dCgpfSxib290RG9jdW1lbnQ6ZnVuY3Rpb24oZSl7dGhpcy5sb2FkU3VidHJlZShlKSx0aGlzLm9ic2VydmVyLm9ic2VydmUoZSksdS5wYXJzZU5leHQoKX0sbG9hZGVkQWxsOmZ1bmN0aW9uKCl7dS5wYXJzZU5leHQoKX19LGY9bmV3IGQoaC5sb2FkZWQuYmluZChoKSxoLmxvYWRlZEFsbC5iaW5kKGgpKTtpZihoLm9ic2VydmVyPW5ldyBsLCFkb2N1bWVudC5iYXNlVVJJKXt2YXIgcD17Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIik7cmV0dXJuIGU/ZS5ocmVmOndpbmRvdy5sb2NhdGlvbi5ocmVmfSxjb25maWd1cmFibGU6ITB9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCxcImJhc2VVUklcIixwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYyxcImJhc2VVUklcIixwKX1lLmltcG9ydGVyPWgsZS5pbXBvcnRMb2FkZXI9Zn0pLHdpbmRvdy5IVE1MSW1wb3J0cy5hZGRNb2R1bGUoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJzZXIsbj1lLmltcG9ydGVyLG89e2FkZGVkOmZ1bmN0aW9uKGUpe2Zvcih2YXIgbyxyLGksYSxzPTAsYz1lLmxlbmd0aDtzPGMmJihhPWVbc10pO3MrKylvfHwobz1hLm93bmVyRG9jdW1lbnQscj10LmlzUGFyc2VkKG8pKSxpPXRoaXMuc2hvdWxkTG9hZE5vZGUoYSksaSYmbi5sb2FkTm9kZShhKSx0aGlzLnNob3VsZFBhcnNlTm9kZShhKSYmciYmdC5wYXJzZUR5bmFtaWMoYSxpKX0sc2hvdWxkTG9hZE5vZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlJiZyLmNhbGwoZSxuLmxvYWRTZWxlY3RvcnNGb3JOb2RlKGUpKX0sc2hvdWxkUGFyc2VOb2RlOmZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZSYmci5jYWxsKGUsdC5wYXJzZVNlbGVjdG9yc0Zvck5vZGUoZSkpfX07bi5vYnNlcnZlci5hZGRDYWxsYmFjaz1vLmFkZGVkLmJpbmQobyk7dmFyIHI9SFRNTEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN8fEhUTUxFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3J8fEhUTUxFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fEhUTUxFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3J8fEhUTUxFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcn0pLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXt3aW5kb3cuSFRNTEltcG9ydHMuaW1wb3J0ZXIuYm9vdERvY3VtZW50KG8pfXZhciBuPWUuaW5pdGlhbGl6ZU1vZHVsZXM7ZS5pc0lFO2lmKCFlLnVzZU5hdGl2ZSl7bigpO3ZhciBvPWUucm9vdERvY3VtZW50O1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiaW50ZXJhY3RpdmVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJiF3aW5kb3cuYXR0YWNoRXZlbnQ/dCgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsdCl9fSh3aW5kb3cuSFRNTEltcG9ydHMpLHdpbmRvdy5DdXN0b21FbGVtZW50cz13aW5kb3cuQ3VzdG9tRWxlbWVudHN8fHtmbGFnczp7fX0sZnVuY3Rpb24oZSl7dmFyIHQ9ZS5mbGFncyxuPVtdLG89ZnVuY3Rpb24oZSl7bi5wdXNoKGUpfSxyPWZ1bmN0aW9uKCl7bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QoZSl9KX07ZS5hZGRNb2R1bGU9byxlLmluaXRpYWxpemVNb2R1bGVzPXIsZS5oYXNOYXRpdmU9Qm9vbGVhbihkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQpLGUuaXNJRT0vVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxlLnVzZU5hdGl2ZT0hdC5yZWdpc3RlciYmZS5oYXNOYXRpdmUmJiF3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwmJighd2luZG93LkhUTUxJbXBvcnRzfHx3aW5kb3cuSFRNTEltcG9ydHMudXNlTmF0aXZlKX0od2luZG93LkN1c3RvbUVsZW1lbnRzKSx3aW5kb3cuQ3VzdG9tRWxlbWVudHMuYWRkTW9kdWxlKGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSx0KXtuKGUsZnVuY3Rpb24oZSl7cmV0dXJuISF0KGUpfHx2b2lkIG8oZSx0KX0pLG8oZSx0KX1mdW5jdGlvbiBuKGUsdCxvKXt2YXIgcj1lLmZpcnN0RWxlbWVudENoaWxkO2lmKCFyKWZvcihyPWUuZmlyc3RDaGlsZDtyJiZyLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KXI9ci5uZXh0U2libGluZztmb3IoO3I7KXQocixvKSE9PSEwJiZuKHIsdCxvKSxyPXIubmV4dEVsZW1lbnRTaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIG8oZSxuKXtmb3IodmFyIG89ZS5zaGFkb3dSb290O287KXQobyxuKSxvPW8ub2xkZXJTaGFkb3dSb290fWZ1bmN0aW9uIHIoZSx0KXtpKGUsdCxbXSl9ZnVuY3Rpb24gaShlLHQsbil7aWYoZT13aW5kb3cud3JhcChlKSwhKG4uaW5kZXhPZihlKT49MCkpe24ucHVzaChlKTtmb3IodmFyIG8scj1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1cIithK1wiXVwiKSxzPTAsYz1yLmxlbmd0aDtzPGMmJihvPXJbc10pO3MrKylvW1wiaW1wb3J0XCJdJiZpKG9bXCJpbXBvcnRcIl0sdCxuKTt0KGUpfX12YXIgYT13aW5kb3cuSFRNTEltcG9ydHM/d2luZG93LkhUTUxJbXBvcnRzLklNUE9SVF9MSU5LX1RZUEU6XCJub25lXCI7ZS5mb3JEb2N1bWVudFRyZWU9cixlLmZvclN1YnRyZWU9dH0pLHdpbmRvdy5DdXN0b21FbGVtZW50cy5hZGRNb2R1bGUoZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlLHQpe3JldHVybiBuKGUsdCl8fG8oZSx0KX1mdW5jdGlvbiBuKHQsbil7cmV0dXJuISFlLnVwZ3JhZGUodCxuKXx8dm9pZChuJiZhKHQpKX1mdW5jdGlvbiBvKGUsdCl7ZyhlLGZ1bmN0aW9uKGUpe2lmKG4oZSx0KSlyZXR1cm4hMH0pfWZ1bmN0aW9uIHIoZSl7TC5wdXNoKGUpLEV8fChFPSEwLHNldFRpbWVvdXQoaSkpfWZ1bmN0aW9uIGkoKXtFPSExO2Zvcih2YXIgZSx0PUwsbj0wLG89dC5sZW5ndGg7bjxvJiYoZT10W25dKTtuKyspZSgpO0w9W119ZnVuY3Rpb24gYShlKXt5P3IoZnVuY3Rpb24oKXtzKGUpO1xufSk6cyhlKX1mdW5jdGlvbiBzKGUpe2UuX191cGdyYWRlZF9fJiYhZS5fX2F0dGFjaGVkJiYoZS5fX2F0dGFjaGVkPSEwLGUuYXR0YWNoZWRDYWxsYmFjayYmZS5hdHRhY2hlZENhbGxiYWNrKCkpfWZ1bmN0aW9uIGMoZSl7ZChlKSxnKGUsZnVuY3Rpb24oZSl7ZChlKX0pfWZ1bmN0aW9uIGQoZSl7eT9yKGZ1bmN0aW9uKCl7bChlKX0pOmwoZSl9ZnVuY3Rpb24gbChlKXtlLl9fdXBncmFkZWRfXyYmZS5fX2F0dGFjaGVkJiYoZS5fX2F0dGFjaGVkPSExLGUuZGV0YWNoZWRDYWxsYmFjayYmZS5kZXRhY2hlZENhbGxiYWNrKCkpfWZ1bmN0aW9uIHUoZSl7Zm9yKHZhciB0PWUsbj13aW5kb3cud3JhcChkb2N1bWVudCk7dDspe2lmKHQ9PW4pcmV0dXJuITA7dD10LnBhcmVudE5vZGV8fHQubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJnQuaG9zdH19ZnVuY3Rpb24gaChlKXtpZihlLnNoYWRvd1Jvb3QmJiFlLnNoYWRvd1Jvb3QuX193YXRjaGVkKXtfLmRvbSYmY29uc29sZS5sb2coXCJ3YXRjaGluZyBzaGFkb3ctcm9vdCBmb3I6IFwiLGUubG9jYWxOYW1lKTtmb3IodmFyIHQ9ZS5zaGFkb3dSb290O3Q7KW0odCksdD10Lm9sZGVyU2hhZG93Um9vdH19ZnVuY3Rpb24gZihlLG4pe2lmKF8uZG9tKXt2YXIgbz1uWzBdO2lmKG8mJlwiY2hpbGRMaXN0XCI9PT1vLnR5cGUmJm8uYWRkZWROb2RlcyYmby5hZGRlZE5vZGVzKXtmb3IodmFyIHI9by5hZGRlZE5vZGVzWzBdO3ImJnIhPT1kb2N1bWVudCYmIXIuaG9zdDspcj1yLnBhcmVudE5vZGU7dmFyIGk9ciYmKHIuVVJMfHxyLl9VUkx8fHIuaG9zdCYmci5ob3N0LmxvY2FsTmFtZSl8fFwiXCI7aT1pLnNwbGl0KFwiLz9cIikuc2hpZnQoKS5zcGxpdChcIi9cIikucG9wKCl9Y29uc29sZS5ncm91cChcIm11dGF0aW9ucyAoJWQpIFslc11cIixuLmxlbmd0aCxpfHxcIlwiKX12YXIgYT11KGUpO24uZm9yRWFjaChmdW5jdGlvbihlKXtcImNoaWxkTGlzdFwiPT09ZS50eXBlJiYoTihlLmFkZGVkTm9kZXMsZnVuY3Rpb24oZSl7ZS5sb2NhbE5hbWUmJnQoZSxhKX0pLE4oZS5yZW1vdmVkTm9kZXMsZnVuY3Rpb24oZSl7ZS5sb2NhbE5hbWUmJmMoZSl9KSl9KSxfLmRvbSYmY29uc29sZS5ncm91cEVuZCgpfWZ1bmN0aW9uIHAoZSl7Zm9yKGU9d2luZG93LndyYXAoZSksZXx8KGU9d2luZG93LndyYXAoZG9jdW1lbnQpKTtlLnBhcmVudE5vZGU7KWU9ZS5wYXJlbnROb2RlO3ZhciB0PWUuX19vYnNlcnZlcjt0JiYoZihlLHQudGFrZVJlY29yZHMoKSksaSgpKX1mdW5jdGlvbiBtKGUpe2lmKCFlLl9fb2JzZXJ2ZXIpe3ZhciB0PW5ldyBNdXRhdGlvbk9ic2VydmVyKGYuYmluZCh0aGlzLGUpKTt0Lm9ic2VydmUoZSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSxlLl9fb2JzZXJ2ZXI9dH19ZnVuY3Rpb24gdihlKXtlPXdpbmRvdy53cmFwKGUpLF8uZG9tJiZjb25zb2xlLmdyb3VwKFwidXBncmFkZURvY3VtZW50OiBcIixlLmJhc2VVUkkuc3BsaXQoXCIvXCIpLnBvcCgpKTt2YXIgbj1lPT09d2luZG93LndyYXAoZG9jdW1lbnQpO3QoZSxuKSxtKGUpLF8uZG9tJiZjb25zb2xlLmdyb3VwRW5kKCl9ZnVuY3Rpb24gdyhlKXtiKGUsdil9dmFyIF89ZS5mbGFncyxnPWUuZm9yU3VidHJlZSxiPWUuZm9yRG9jdW1lbnRUcmVlLHk9d2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIuX2lzUG9seWZpbGxlZCYmX1tcInRocm90dGxlLWF0dGFjaGVkXCJdO2UuaGFzUG9seWZpbGxNdXRhdGlvbnM9eSxlLmhhc1Rocm90dGxlZEF0dGFjaGVkPXk7dmFyIEU9ITEsTD1bXSxOPUFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwuYmluZChBcnJheS5wcm90b3R5cGUuZm9yRWFjaCksTT1FbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290O00mJihFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290PWZ1bmN0aW9uKCl7dmFyIGU9TS5jYWxsKHRoaXMpO3JldHVybiB3aW5kb3cuQ3VzdG9tRWxlbWVudHMud2F0Y2hTaGFkb3codGhpcyksZX0pLGUud2F0Y2hTaGFkb3c9aCxlLnVwZ3JhZGVEb2N1bWVudFRyZWU9dyxlLnVwZ3JhZGVEb2N1bWVudD12LGUudXBncmFkZVN1YnRyZWU9byxlLnVwZ3JhZGVBbGw9dCxlLmF0dGFjaGVkPWEsZS50YWtlUmVjb3Jkcz1wfSksd2luZG93LkN1c3RvbUVsZW1lbnRzLmFkZE1vZHVsZShmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQsbyl7aWYoXCJ0ZW1wbGF0ZVwiPT09dC5sb2NhbE5hbWUmJndpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50JiZIVE1MVGVtcGxhdGVFbGVtZW50LmRlY29yYXRlJiZIVE1MVGVtcGxhdGVFbGVtZW50LmRlY29yYXRlKHQpLCF0Ll9fdXBncmFkZWRfXyYmdC5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgcj10LmdldEF0dHJpYnV0ZShcImlzXCIpLGk9ZS5nZXRSZWdpc3RlcmVkRGVmaW5pdGlvbih0LmxvY2FsTmFtZSl8fGUuZ2V0UmVnaXN0ZXJlZERlZmluaXRpb24ocik7aWYoaSYmKHImJmkudGFnPT10LmxvY2FsTmFtZXx8IXImJiFpW1wiZXh0ZW5kc1wiXSkpcmV0dXJuIG4odCxpLG8pfX1mdW5jdGlvbiBuKHQsbixyKXtyZXR1cm4gYS51cGdyYWRlJiZjb25zb2xlLmdyb3VwKFwidXBncmFkZTpcIix0LmxvY2FsTmFtZSksbi5pcyYmdC5zZXRBdHRyaWJ1dGUoXCJpc1wiLG4uaXMpLG8odCxuKSx0Ll9fdXBncmFkZWRfXz0hMCxpKHQpLHImJmUuYXR0YWNoZWQodCksZS51cGdyYWRlU3VidHJlZSh0LHIpLGEudXBncmFkZSYmY29uc29sZS5ncm91cEVuZCgpLHR9ZnVuY3Rpb24gbyhlLHQpe09iamVjdC5fX3Byb3RvX18/ZS5fX3Byb3RvX189dC5wcm90b3R5cGU6KHIoZSx0LnByb3RvdHlwZSx0W1wibmF0aXZlXCJdKSxlLl9fcHJvdG9fXz10LnByb3RvdHlwZSl9ZnVuY3Rpb24gcihlLHQsbil7Zm9yKHZhciBvPXt9LHI9dDtyIT09biYmciE9PUhUTUxFbGVtZW50LnByb3RvdHlwZTspe2Zvcih2YXIgaSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHIpLHM9MDtpPWFbc107cysrKW9baV18fChPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixpKSksb1tpXT0xKTtyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKX19ZnVuY3Rpb24gaShlKXtlLmNyZWF0ZWRDYWxsYmFjayYmZS5jcmVhdGVkQ2FsbGJhY2soKX12YXIgYT1lLmZsYWdzO2UudXBncmFkZT10LGUudXBncmFkZVdpdGhEZWZpbml0aW9uPW4sZS5pbXBsZW1lbnRQcm90b3R5cGU9b30pLHdpbmRvdy5DdXN0b21FbGVtZW50cy5hZGRNb2R1bGUoZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0LG8pe3ZhciBjPW98fHt9O2lmKCF0KXRocm93IG5ldyBFcnJvcihcImRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudDogZmlyc3QgYXJndW1lbnQgYG5hbWVgIG11c3Qgbm90IGJlIGVtcHR5XCIpO2lmKHQuaW5kZXhPZihcIi1cIik8MCl0aHJvdyBuZXcgRXJyb3IoXCJkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ6IGZpcnN0IGFyZ3VtZW50ICgnbmFtZScpIG11c3QgY29udGFpbiBhIGRhc2ggKCctJykuIEFyZ3VtZW50IHByb3ZpZGVkIHdhcyAnXCIrU3RyaW5nKHQpK1wiJy5cIik7aWYocih0KSl0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAncmVnaXN0ZXJFbGVtZW50JyBvbiAnRG9jdW1lbnQnOiBSZWdpc3RyYXRpb24gZmFpbGVkIGZvciB0eXBlICdcIitTdHJpbmcodCkrXCInLiBUaGUgdHlwZSBuYW1lIGlzIGludmFsaWQuXCIpO2lmKGQodCkpdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlRGVmaW5pdGlvbkVycm9yOiBhIHR5cGUgd2l0aCBuYW1lICdcIitTdHJpbmcodCkrXCInIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtyZXR1cm4gYy5wcm90b3R5cGV8fChjLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSkpLGMuX19uYW1lPXQudG9Mb3dlckNhc2UoKSxjW1wiZXh0ZW5kc1wiXSYmKGNbXCJleHRlbmRzXCJdPWNbXCJleHRlbmRzXCJdLnRvTG93ZXJDYXNlKCkpLGMubGlmZWN5Y2xlPWMubGlmZWN5Y2xlfHx7fSxjLmFuY2VzdHJ5PWkoY1tcImV4dGVuZHNcIl0pLGEoYykscyhjKSxuKGMucHJvdG90eXBlKSxsKGMuX19uYW1lLGMpLGMuY3Rvcj11KGMpLGMuY3Rvci5wcm90b3R5cGU9Yy5wcm90b3R5cGUsYy5wcm90b3R5cGUuY29uc3RydWN0b3I9Yy5jdG9yLGUucmVhZHkmJnYoZG9jdW1lbnQpLGMuY3Rvcn1mdW5jdGlvbiBuKGUpe2lmKCFlLnNldEF0dHJpYnV0ZS5fcG9seWZpbGxlZCl7dmFyIHQ9ZS5zZXRBdHRyaWJ1dGU7ZS5zZXRBdHRyaWJ1dGU9ZnVuY3Rpb24oZSxuKXtvLmNhbGwodGhpcyxlLG4sdCl9O3ZhciBuPWUucmVtb3ZlQXR0cmlidXRlO2UucmVtb3ZlQXR0cmlidXRlPWZ1bmN0aW9uKGUpe28uY2FsbCh0aGlzLGUsbnVsbCxuKX0sZS5zZXRBdHRyaWJ1dGUuX3BvbHlmaWxsZWQ9ITB9fWZ1bmN0aW9uIG8oZSx0LG4pe2U9ZS50b0xvd2VyQ2FzZSgpO3ZhciBvPXRoaXMuZ2V0QXR0cmlidXRlKGUpO24uYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciByPXRoaXMuZ2V0QXR0cmlidXRlKGUpO3RoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJiZyIT09byYmdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxvLHIpfWZ1bmN0aW9uIHIoZSl7Zm9yKHZhciB0PTA7dDx5Lmxlbmd0aDt0KyspaWYoZT09PXlbdF0pcmV0dXJuITB9ZnVuY3Rpb24gaShlKXt2YXIgdD1kKGUpO3JldHVybiB0P2kodFtcImV4dGVuZHNcIl0pLmNvbmNhdChbdF0pOltdfWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0LG49ZVtcImV4dGVuZHNcIl0sbz0wO3Q9ZS5hbmNlc3RyeVtvXTtvKyspbj10LmlzJiZ0LnRhZztlLnRhZz1ufHxlLl9fbmFtZSxuJiYoZS5pcz1lLl9fbmFtZSl9ZnVuY3Rpb24gcyhlKXtpZighT2JqZWN0Ll9fcHJvdG9fXyl7dmFyIHQ9SFRNTEVsZW1lbnQucHJvdG90eXBlO2lmKGUuaXMpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZS50YWcpO3Q9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pfWZvcih2YXIgbyxyPWUucHJvdG90eXBlLGk9ITE7cjspcj09dCYmKGk9ITApLG89T2JqZWN0LmdldFByb3RvdHlwZU9mKHIpLG8mJihyLl9fcHJvdG9fXz1vKSxyPW87aXx8Y29uc29sZS53YXJuKGUudGFnK1wiIHByb3RvdHlwZSBub3QgZm91bmQgaW4gcHJvdG90eXBlIGNoYWluIGZvciBcIitlLmlzKSxlW1wibmF0aXZlXCJdPXR9fWZ1bmN0aW9uIGMoZSl7cmV0dXJuIF8oTihlLnRhZyksZSl9ZnVuY3Rpb24gZChlKXtpZihlKXJldHVybiBFW2UudG9Mb3dlckNhc2UoKV19ZnVuY3Rpb24gbChlLHQpe0VbZV09dH1mdW5jdGlvbiB1KGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBjKGUpfX1mdW5jdGlvbiBoKGUsdCxuKXtyZXR1cm4gZT09PUw/Zih0LG4pOk0oZSx0KX1mdW5jdGlvbiBmKGUsdCl7ZSYmKGU9ZS50b0xvd2VyQ2FzZSgpKSx0JiYodD10LnRvTG93ZXJDYXNlKCkpO3ZhciBuPWQodHx8ZSk7aWYobil7aWYoZT09bi50YWcmJnQ9PW4uaXMpcmV0dXJuIG5ldyBuLmN0b3I7aWYoIXQmJiFuLmlzKXJldHVybiBuZXcgbi5jdG9yfXZhciBvO3JldHVybiB0PyhvPWYoZSksby5zZXRBdHRyaWJ1dGUoXCJpc1wiLHQpLG8pOihvPU4oZSksZS5pbmRleE9mKFwiLVwiKT49MCYmZyhvLEhUTUxFbGVtZW50KSxvKX1mdW5jdGlvbiBwKGUsdCl7dmFyIG49ZVt0XTtlW3RdPWZ1bmN0aW9uKCl7dmFyIGU9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHcoZSksZX19dmFyIG0sdj0oZS5pc0lFLGUudXBncmFkZURvY3VtZW50VHJlZSksdz1lLnVwZ3JhZGVBbGwsXz1lLnVwZ3JhZGVXaXRoRGVmaW5pdGlvbixnPWUuaW1wbGVtZW50UHJvdG90eXBlLGI9ZS51c2VOYXRpdmUseT1bXCJhbm5vdGF0aW9uLXhtbFwiLFwiY29sb3ItcHJvZmlsZVwiLFwiZm9udC1mYWNlXCIsXCJmb250LWZhY2Utc3JjXCIsXCJmb250LWZhY2UtdXJpXCIsXCJmb250LWZhY2UtZm9ybWF0XCIsXCJmb250LWZhY2UtbmFtZVwiLFwibWlzc2luZy1nbHlwaFwiXSxFPXt9LEw9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsTj1kb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpLE09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TLmJpbmQoZG9jdW1lbnQpO209T2JqZWN0Ll9fcHJvdG9fX3x8Yj9mdW5jdGlvbihlLHQpe3JldHVybiBlIGluc3RhbmNlb2YgdH06ZnVuY3Rpb24oZSx0KXtpZihlIGluc3RhbmNlb2YgdClyZXR1cm4hMDtmb3IodmFyIG49ZTtuOyl7aWYobj09PXQucHJvdG90eXBlKXJldHVybiEwO249bi5fX3Byb3RvX199cmV0dXJuITF9LHAoTm9kZS5wcm90b3R5cGUsXCJjbG9uZU5vZGVcIikscChkb2N1bWVudCxcImltcG9ydE5vZGVcIiksZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50PXQsZG9jdW1lbnQuY3JlYXRlRWxlbWVudD1mLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUz1oLGUucmVnaXN0cnk9RSxlW1wiaW5zdGFuY2VvZlwiXT1tLGUucmVzZXJ2ZWRUYWdMaXN0PXksZS5nZXRSZWdpc3RlcmVkRGVmaW5pdGlvbj1kLGRvY3VtZW50LnJlZ2lzdGVyPWRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudH0pLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtpKHdpbmRvdy53cmFwKGRvY3VtZW50KSksd2luZG93LkN1c3RvbUVsZW1lbnRzLnJlYWR5PSEwO3ZhciBlPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZSwxNil9O2UoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7d2luZG93LkN1c3RvbUVsZW1lbnRzLnJlYWR5VGltZT1EYXRlLm5vdygpLHdpbmRvdy5IVE1MSW1wb3J0cyYmKHdpbmRvdy5DdXN0b21FbGVtZW50cy5lbGFwc2VkPXdpbmRvdy5DdXN0b21FbGVtZW50cy5yZWFkeVRpbWUtd2luZG93LkhUTUxJbXBvcnRzLnJlYWR5VGltZSksZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJXZWJDb21wb25lbnRzUmVhZHlcIix7YnViYmxlczohMH0pKX0pfSl9dmFyIG49ZS51c2VOYXRpdmUsbz1lLmluaXRpYWxpemVNb2R1bGVzO2UuaXNJRTtpZihuKXt2YXIgcj1mdW5jdGlvbigpe307ZS53YXRjaFNoYWRvdz1yLGUudXBncmFkZT1yLGUudXBncmFkZUFsbD1yLGUudXBncmFkZURvY3VtZW50VHJlZT1yLGUudXBncmFkZVN1YnRyZWU9cixlLnRha2VSZWNvcmRzPXIsZVtcImluc3RhbmNlb2ZcIl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSBpbnN0YW5jZW9mIHR9fWVsc2UgbygpO3ZhciBpPWUudXBncmFkZURvY3VtZW50VHJlZSxhPWUudXBncmFkZURvY3VtZW50O2lmKHdpbmRvdy53cmFwfHwod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsPyh3aW5kb3cud3JhcD13aW5kb3cuU2hhZG93RE9NUG9seWZpbGwud3JhcElmTmVlZGVkLHdpbmRvdy51bndyYXA9d2luZG93LlNoYWRvd0RPTVBvbHlmaWxsLnVud3JhcElmTmVlZGVkKTp3aW5kb3cud3JhcD13aW5kb3cudW53cmFwPWZ1bmN0aW9uKGUpe3JldHVybiBlfSksd2luZG93LkhUTUxJbXBvcnRzJiYod2luZG93LkhUTUxJbXBvcnRzLl9faW1wb3J0c1BhcnNpbmdIb29rPWZ1bmN0aW9uKGUpe2VbXCJpbXBvcnRcIl0mJmEod3JhcChlW1wiaW1wb3J0XCJdKSl9KSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlfHxlLmZsYWdzLmVhZ2VyKXQoKTtlbHNlIGlmKFwiaW50ZXJhY3RpdmVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGV8fHdpbmRvdy5hdHRhY2hFdmVudHx8d2luZG93LkhUTUxJbXBvcnRzJiYhd2luZG93LkhUTUxJbXBvcnRzLnJlYWR5KXt2YXIgcz13aW5kb3cuSFRNTEltcG9ydHMmJiF3aW5kb3cuSFRNTEltcG9ydHMucmVhZHk/XCJIVE1MSW1wb3J0c0xvYWRlZFwiOlwiRE9NQ29udGVudExvYWRlZFwiO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKHMsdCl9ZWxzZSB0KCl9KHdpbmRvdy5DdXN0b21FbGVtZW50cyksZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3QudGV4dENvbnRlbnQ9XCJib2R5IHt0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMC4yczsgfSBcXG5ib2R5W3VucmVzb2x2ZWRdIHtvcGFjaXR5OiAwOyBkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9zaXRpb246IHJlbGF0aXZlOyB9IFxcblwiO3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO24uaW5zZXJ0QmVmb3JlKHQsbi5maXJzdENoaWxkKX0od2luZG93LldlYkNvbXBvbmVudHMpOyJdfQ==
},{}]},{},[1])