(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n\t\t\t\t#app-root .modal .inputs { padding: 0 20px; }\n            </style>\n\n\t\t\t<div id="app-root">\n\t\t\t\t', '\t\n\t\t\t\t\n\t\t\t\t<paper-toast id="toast" color$="{{toastColor}}"></paper-toast>\n\n\t\t\t\t<paper-dialog id="loginModal" class="modal">\n\t\t\t\t\t<h2>Razilo Login</h2>\n\t\t\t\t\t<div class="inputs">\n\t\t\t\t\t\t<paper-input id="loginUsername" label="Email" type="text" on-keyup="doLogin"></paper-input>\n\t\t\t\t\t\t<paper-input id="loginPassword" label="Password" type="password" on-keyup="doLogin"></paper-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="buttons">\n\t\t\t\t\t\t<paper-button dialog-dismiss>Cancel</paper-button>\n\t\t\t\t\t\t<paper-button dialog-confirm autofocus on-click="doLogin" color="green">Log In</paper-button>\n\t\t\t\t\t</div>\n\t\t\t\t</paper-dialog>\n\t\t\t</div>\n        '], ['\n            <style>\n\t\t\t\t#app-root .modal .inputs { padding: 0 20px; }\n            </style>\n\n\t\t\t<div id="app-root">\n\t\t\t\t', '\t\n\t\t\t\t\n\t\t\t\t<paper-toast id="toast" color$="{{toastColor}}"></paper-toast>\n\n\t\t\t\t<paper-dialog id="loginModal" class="modal">\n\t\t\t\t\t<h2>Razilo Login</h2>\n\t\t\t\t\t<div class="inputs">\n\t\t\t\t\t\t<paper-input id="loginUsername" label="Email" type="text" on-keyup="doLogin"></paper-input>\n\t\t\t\t\t\t<paper-input id="loginPassword" label="Password" type="password" on-keyup="doLogin"></paper-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="buttons">\n\t\t\t\t\t\t<paper-button dialog-dismiss>Cancel</paper-button>\n\t\t\t\t\t\t<paper-button dialog-confirm autofocus on-click="doLogin" color="green">Log In</paper-button>\n\t\t\t\t\t</div>\n\t\t\t\t</paper-dialog>\n\t\t\t</div>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\t<razilo-panel user="{{user}}" on-action="doAction"></razilo-panel>\n\t\t\t\t\t<razilo-dashboard current-page="{{currentPage}}"></razilo-dashboard>\n\t\t\t\t\t<razilo-profile-edit user="{{user}}"></razilo-profile-edit>\n\t\t\t\t\t<razilo-page-add></razilo-page-add>\n\t\t\t\t\t<razilo-page-copy current-page="{{currentPage}}"></razilo-page-copy>\n\t\t\t\t'], ['\n\t\t\t\t\t<razilo-panel user="{{user}}" on-action="doAction"></razilo-panel>\n\t\t\t\t\t<razilo-dashboard current-page="{{currentPage}}"></razilo-dashboard>\n\t\t\t\t\t<razilo-profile-edit user="{{user}}"></razilo-profile-edit>\n\t\t\t\t\t<razilo-page-add></razilo-page-add>\n\t\t\t\t\t<razilo-page-copy current-page="{{currentPage}}"></razilo-page-copy>\n\t\t\t\t']);

var _index = require('../../node_modules/custom-web-component/index.js');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
var AppRoot = function (_CustomHTMLElement) {
	_inherits(AppRoot, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppRoot() {
		_classCallCheck(this, AppRoot);

		var _this = _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).call(this));

		console.log('Powered by CWC');

		// <razilo-request id="request" base-url="razorcms.docker.localhost/api"></razilo-request>
		// <razilo-store id="store"></razilo-store>
		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppRoot, [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.user ? (0, _index.html)(_templateObject2) : '');
		}
	}]);

	return AppRoot;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-root', AppRoot);

},{"../../node_modules/custom-web-component/index.js":3}],2:[function(require,module,exports){
'use strict';

require('./node_modules/reflect-constructor/reflect-constructor.js');

require('./cwc/app/app-root.js');

},{"./cwc/app/app-root.js":1,"./node_modules/reflect-constructor/reflect-constructor.js":17}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.html = exports.CustomHTMLElement = undefined;

var _CustomHTMLElement = require('./src/CustomHTMLElement.js');

var _CustomHTMLElement2 = _interopRequireDefault(_CustomHTMLElement);

var _litHtml = require('../lit-html/lit-html.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CustomHTMLElement = _CustomHTMLElement2.default;
exports.html = _litHtml.html;

},{"../lit-html/lit-html.js":16,"./src/CustomHTMLElement.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CustomWebComponent = require('./CustomWebComponent.js');

var _CustomWebComponent2 = _interopRequireDefault(_CustomWebComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

/**
 * CustomHTMLElement
 * A sample extension to the basic HTML Element class, providing templating for web components through the lit-html library
 * Build on Web Standards, polyfilled for legacy browsers, using a simple clean lite HTML template rendering called lit-html
 * Extend this class to create a simple HTML Custome Element
 */
var CustomHTMLElement = function (_CustomElement2) {
	_inherits(CustomHTMLElement, _CustomElement2);

	/**
 * constructor()
 * Create a simple HTML element and observe changes to properties
 */
	function CustomHTMLElement() {
		_classCallCheck(this, CustomHTMLElement);

		var _this = _possibleConstructorReturn(this, (CustomHTMLElement.__proto__ || Object.getPrototypeOf(CustomHTMLElement)).call(this));

		_this.updateTimeout;
		_CustomWebComponent2.default.bindProperties.call(_this);
		return _this;
	}

	/**
  * default methods inherited from Custom Web Component
  * connectedCallback(), disconnectedCallback(), attributeChangedCallback(), updateTemplate()...
  * Bootstrap static methods for default custom web functionality
  */


	_createClass(CustomHTMLElement, [{
		key: 'connectedCallback',
		value: function connectedCallback() {
			_CustomWebComponent2.default.connectedCallback.call(this);
		}
	}, {
		key: 'disconnectedCallback',
		value: function disconnectedCallback() {
			_CustomWebComponent2.default.disconnectedCallback.call(this);
		}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(property, oldValue, newValue) {
			_CustomWebComponent2.default.attributeChangedCallback.call(this, property, oldValue, newValue);
		}
	}, {
		key: 'updateTemplate',
		value: function updateTemplate() {
			var _this2 = this;

			// debounce updates
			clearTimeout(this.updateTimeout);
			this.updateTimeout = setTimeout(function () {
				return _CustomWebComponent2.default.updateTemplate.call(_this2);
			}, 1);
		}
	}]);

	return CustomHTMLElement;
}(_CustomElement);

exports.default = CustomHTMLElement;

},{"./CustomWebComponent.js":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _litHtml = require('../../lit-html/lit-html.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * CustomHTMLElement
 * A sample extension to the basic HTML Element class, providing templating for web components through the lit-html library
 * Build on Web Standards, polyfilled for legacy browsers, using a simple clean lite HTML template rendering called lit-html
 * Extend this class to create a simple HTML Custome Element
 */
var CustomWebComponent = function () {
	function CustomWebComponent() {
		_classCallCheck(this, CustomWebComponent);
	}

	_createClass(CustomWebComponent, null, [{
		key: 'connectedCallback',

		/**
   * connectedCallback()
   * Catch the standard connected callback, rendering the template on instantiation
   * follows up by bubbling the callback up to connected() on child
   */
		value: function connectedCallback() {
			if (!this.isConnected) return;
			if (typeof this.connected === 'function') this.connected.call(this);
			if (typeof this.updateTemplate === 'function') CustomWebComponent.updateTemplate.call(this);
		}

		/**
   * disconnectedCallback()
   * Catch the standard disconnected callback
   * follows up by bubbling the callback up to disconnected() on child
   */

	}, {
		key: 'disconnectedCallback',
		value: function disconnectedCallback() {
			if (this.isConnected) return;
			if (typeof this.disconnected === 'function') this.disconnected.call(this);
		}

		/**
   * attributeChangedCallback()
   * Catch the standard attributeChanged callback
   * follows up by bubbling the callback up to attributeChanged() on child for attributes subscribed too
   */

	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attribute, oldValue, newValue) {
			if (typeof this.attributeChanged === 'function') this.attributeChanged.call(this, attribute, oldValue, newValue);
		}

		/**
   * __bindProperties()
   * Internal method to bind properties and create a propertyChanged callback, also exposing an event of the same name
   * use this callback or watch the event to be notified of property changes that are subscribed too
   */

	}, {
		key: 'bindProperties',
		value: function bindProperties() {
			var _this = this;

			if (!this.constructor.observedProperties || !this.constructor.observedProperties.length) return;

			this.__properties = {};

			var _loop = function _loop(idx) {
				Object.defineProperty(_this, _this.constructor.observedProperties[idx], {
					get: function get() {
						return this.__properties[this.constructor.observedProperties[idx]];
					},
					set: function set(value) {
						var oldValue = this.__properties[this.constructor.observedProperties[idx]];
						this.__properties[this.constructor.observedProperties[idx]] = value;
						if (typeof this.propertyChanged === 'function') this.propertyChanged.call(this, this.constructor.observedProperties[idx], oldValue, value);
						this.dispatchEvent(new CustomEvent('propertychanged', { 'detail': { 'property': this.constructor.observedProperties[idx], 'oldValue': oldValue, 'newValue': value } }));
					}
				});
			};

			for (var idx in this.constructor.observedProperties) {
				_loop(idx);
			}
		}

		/**
   * updateTemplate()
   * Inform the template of changes to properties by telling it to update
   * uses lit-html to actively render a DOM template and only change stuff that needs changing!
   */

	}, {
		key: 'updateTemplate',
		value: function updateTemplate() {
			if (!this.isConnected) return;
			(0, _litHtml.render)(this.template(), this.shadowRoot ? this.shadowRoot : this.attachShadow({ mode: 'open' }));

			this.dom = this.shadowRoot ? this.shadowRoot.getElementById(this.tagName.toLowerCase()) : this.getElementById(this.tagName.toLowerCase());

			if (typeof this.templateUpdated === 'function') this.templateUpdated.call(this);
			this.dispatchEvent(new CustomEvent('templateupdated'));
		}
	}]);

	return CustomWebComponent;
}();

exports.default = CustomWebComponent;

},{"../../lit-html/lit-html.js":16}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of authors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _parts = require('./parts.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates Parts when a template is instantiated.
 */
var DefaultTemplateProcessor = exports.DefaultTemplateProcessor = function () {
    function DefaultTemplateProcessor() {
        _classCallCheck(this, DefaultTemplateProcessor);
    }

    _createClass(DefaultTemplateProcessor, [{
        key: 'handleAttributeExpressions',

        /**
         * Create parts for an attribute-position binding, given the event, attribute
         * name, and string literals.
         *
         * @param element The element containing the binding
         * @param name  The attribute name
         * @param strings The string literals. There are always at least two strings,
         *   event for fully-controlled bindings with a single expression.
         */
        value: function handleAttributeExpressions(element, name, strings, options) {
            var prefix = name[0];
            if (prefix === '.') {
                var _comitter = new _parts.PropertyCommitter(element, name.slice(1), strings);
                return _comitter.parts;
            }
            if (prefix === '@') {
                return [new _parts.EventPart(element, name.slice(1), options.eventContext)];
            }
            if (prefix === '?') {
                return [new _parts.BooleanAttributePart(element, name.slice(1), strings)];
            }
            var comitter = new _parts.AttributeCommitter(element, name, strings);
            return comitter.parts;
        }
        /**
         * Create parts for a text-position binding.
         * @param templateFactory
         */

    }, {
        key: 'handleTextExpression',
        value: function handleTextExpression(options) {
            return new _parts.NodePart(options);
        }
    }]);

    return DefaultTemplateProcessor;
}();

var defaultTemplateProcessor = exports.defaultTemplateProcessor = new DefaultTemplateProcessor();


},{"./parts.js":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
var directive = exports.directive = function directive(f) {
  return function () {
    var d = f.apply(undefined, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = exports.isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};


},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var isCEPolyfill = exports.isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
var reparentNodes = exports.reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var node = start;
    while (node !== end) {
        var n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
var removeNodes = exports.removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var node = startNode;
    while (node !== endNode) {
        var n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};


},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = exports.noChange = {};


},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventPart = exports.PropertyPart = exports.PropertyCommitter = exports.BooleanAttributePart = exports.NodePart = exports.AttributePart = exports.AttributeCommitter = exports.isPrimitive = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @license
                                                                                                                                                                                                                                                                               * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                               * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                               * The complete set of authors may be found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                               * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                               * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                               * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                               * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                               */


var _directive = require('./directive.js');

var _dom = require('./dom.js');

var _part = require('./part.js');

var _templateInstance = require('./template-instance.js');

var _templateResult = require('./template-result.js');

var _template = require('./template.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isPrimitive = exports.isPrimitive = function isPrimitive(value) {
    return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */

var AttributeCommitter = exports.AttributeCommitter = function () {
    function AttributeCommitter(element, name, strings) {
        _classCallCheck(this, AttributeCommitter);

        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (var i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */


    _createClass(AttributeCommitter, [{
        key: '_createPart',
        value: function _createPart() {
            return new AttributePart(this);
        }
    }, {
        key: '_getValue',
        value: function _getValue() {
            var strings = this.strings;
            var l = strings.length - 1;
            var text = '';
            for (var i = 0; i < l; i++) {
                text += strings[i];
                var part = this.parts[i];
                if (part !== undefined) {
                    var v = part.value;
                    if (v != null && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var t = _step.value;

                                text += typeof t === 'string' ? t : String(t);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    } else {
                        text += typeof v === 'string' ? v : String(v);
                    }
                }
            }
            text += strings[l];
            return text;
        }
    }, {
        key: 'commit',
        value: function commit() {
            if (this.dirty) {
                this.dirty = false;
                this.element.setAttribute(this.name, this._getValue());
            }
        }
    }]);

    return AttributeCommitter;
}();

var AttributePart = exports.AttributePart = function () {
    function AttributePart(comitter) {
        _classCallCheck(this, AttributePart);

        this.value = undefined;
        this.committer = comitter;
    }

    _createClass(AttributePart, [{
        key: 'setValue',
        value: function setValue(value) {
            if (value !== _part.noChange && (!isPrimitive(value) || value !== this.value)) {
                this.value = value;
                // If the value is a not a directive, dirty the committer so that it'll
                // call setAttribute. If the value is a directive, it'll dirty the
                // committer if it calls setValue().
                if (!(0, _directive.isDirective)(value)) {
                    this.committer.dirty = true;
                }
            }
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this.value)) {
                var directive = this.value;
                this.value = _part.noChange;
                directive(this);
            }
            if (this.value === _part.noChange) {
                return;
            }
            this.committer.commit();
        }
    }]);

    return AttributePart;
}();

var NodePart = exports.NodePart = function () {
    function NodePart(options) {
        _classCallCheck(this, NodePart);

        this.value = undefined;
        this._pendingValue = undefined;
        this.options = options;
    }
    /**
     * Inserts this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    _createClass(NodePart, [{
        key: 'appendInto',
        value: function appendInto(container) {
            this.startNode = container.appendChild((0, _template.createMarker)());
            this.endNode = container.appendChild((0, _template.createMarker)());
        }
        /**
         * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
         * its next sibling must be static, unchanging nodes such as those that appear
         * in a literal section of a template.
         *
         * This part must be empty, as its contents are not automatically moved.
         */

    }, {
        key: 'insertAfterNode',
        value: function insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
        }
        /**
         * Appends this part into a parent part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */

    }, {
        key: 'appendIntoPart',
        value: function appendIntoPart(part) {
            part._insert(this.startNode = (0, _template.createMarker)());
            part._insert(this.endNode = (0, _template.createMarker)());
        }
        /**
         * Appends this part after `ref`
         *
         * This part must be empty, as its contents are not automatically moved.
         */

    }, {
        key: 'insertAfterPart',
        value: function insertAfterPart(ref) {
            ref._insert(this.startNode = (0, _template.createMarker)());
            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this._pendingValue = value;
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this._pendingValue)) {
                var directive = this._pendingValue;
                this._pendingValue = _part.noChange;
                directive(this);
            }
            var value = this._pendingValue;
            if (value === _part.noChange) {
                return;
            }
            if (isPrimitive(value)) {
                if (value !== this.value) {
                    this._commitText(value);
                }
            } else if (value instanceof _templateResult.TemplateResult) {
                this._commitTemplateResult(value);
            } else if (value instanceof Node) {
                this._commitNode(value);
            } else if (Array.isArray(value) || value[Symbol.iterator]) {
                this._commitIterable(value);
            } else {
                // Fallback, will render the string representation
                this._commitText(value);
            }
        }
    }, {
        key: '_insert',
        value: function _insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
    }, {
        key: '_commitNode',
        value: function _commitNode(value) {
            if (this.value === value) {
                return;
            }
            this.clear();
            this._insert(value);
            this.value = value;
        }
    }, {
        key: '_commitText',
        value: function _commitText(value) {
            var node = this.startNode.nextSibling;
            value = value == null ? '' : value;
            if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if this.value is primitive?
                node.textContent = value;
            } else {
                this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
            }
            this.value = value;
        }
    }, {
        key: '_commitTemplateResult',
        value: function _commitTemplateResult(value) {
            var template = this.options.templateFactory(value);
            if (this.value && this.value.template === template) {
                this.value.update(value.values);
            } else {
                // Make sure we propagate the template processor from the TemplateResult
                // so that we use its syntax extension, etc. The template factory comes
                // from the render function options so that it can control template
                // caching and preprocessing.
                var instance = new _templateInstance.TemplateInstance(template, value.processor, this.options);
                var fragment = instance._clone();
                instance.update(value.values);
                this._commitNode(fragment);
                this.value = instance;
            }
        }
    }, {
        key: '_commitIterable',
        value: function _commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _value is an array, then the previous render was of an
            // iterable and _value will contain the NodeParts from the previous
            // render. If _value is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this.value)) {
                this.value = [];
                this.clear();
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            var itemParts = this.value;
            var partIndex = 0;
            var itemPart = void 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    // Try to reuse an existing part
                    itemPart = itemParts[partIndex];
                    // If no existing part, create a new one
                    if (itemPart === undefined) {
                        itemPart = new NodePart(this.options);
                        itemParts.push(itemPart);
                        if (partIndex === 0) {
                            itemPart.appendIntoPart(this);
                        } else {
                            itemPart.insertAfterPart(itemParts[partIndex - 1]);
                        }
                    }
                    itemPart.setValue(item);
                    itemPart.commit();
                    partIndex++;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (partIndex < itemParts.length) {
                // Truncate the parts array so _value reflects the current state
                itemParts.length = partIndex;
                this.clear(itemPart && itemPart.endNode);
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

            (0, _dom.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
        }
    }]);

    return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */


var BooleanAttributePart = exports.BooleanAttributePart = function () {
    function BooleanAttributePart(element, name, strings) {
        _classCallCheck(this, BooleanAttributePart);

        this.value = undefined;
        this._pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }

    _createClass(BooleanAttributePart, [{
        key: 'setValue',
        value: function setValue(value) {
            this._pendingValue = value;
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this._pendingValue)) {
                var directive = this._pendingValue;
                this._pendingValue = _part.noChange;
                directive(this);
            }
            if (this._pendingValue === _part.noChange) {
                return;
            }
            var value = !!this._pendingValue;
            if (this.value !== value) {
                if (value) {
                    this.element.setAttribute(this.name, '');
                } else {
                    this.element.removeAttribute(this.name);
                }
            }
            this.value = value;
            this._pendingValue = _part.noChange;
        }
    }]);

    return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */


var PropertyCommitter = exports.PropertyCommitter = function (_AttributeCommitter) {
    _inherits(PropertyCommitter, _AttributeCommitter);

    function PropertyCommitter(element, name, strings) {
        _classCallCheck(this, PropertyCommitter);

        var _this = _possibleConstructorReturn(this, (PropertyCommitter.__proto__ || Object.getPrototypeOf(PropertyCommitter)).call(this, element, name, strings));

        _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
        return _this;
    }

    _createClass(PropertyCommitter, [{
        key: '_createPart',
        value: function _createPart() {
            return new PropertyPart(this);
        }
    }, {
        key: '_getValue',
        value: function _getValue() {
            if (this.single) {
                return this.parts[0].value;
            }
            return _get(PropertyCommitter.prototype.__proto__ || Object.getPrototypeOf(PropertyCommitter.prototype), '_getValue', this).call(this);
        }
    }, {
        key: 'commit',
        value: function commit() {
            if (this.dirty) {
                this.dirty = false;
                this.element[this.name] = this._getValue();
            }
        }
    }]);

    return PropertyCommitter;
}(AttributeCommitter);

var PropertyPart = exports.PropertyPart = function (_AttributePart) {
    _inherits(PropertyPart, _AttributePart);

    function PropertyPart() {
        _classCallCheck(this, PropertyPart);

        return _possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
    }

    return PropertyPart;
}(AttributePart);
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.


var eventOptionsSupported = false;
try {
    var options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
} catch (_e) {}

var EventPart = exports.EventPart = function () {
    function EventPart(element, eventName, eventContext) {
        var _this3 = this;

        _classCallCheck(this, EventPart);

        this.value = undefined;
        this._pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this._boundHandleEvent = function (e) {
            return _this3.handleEvent(e);
        };
    }

    _createClass(EventPart, [{
        key: 'setValue',
        value: function setValue(value) {
            this._pendingValue = value;
        }
    }, {
        key: 'commit',
        value: function commit() {
            while ((0, _directive.isDirective)(this._pendingValue)) {
                var directive = this._pendingValue;
                this._pendingValue = _part.noChange;
                directive(this);
            }
            if (this._pendingValue === _part.noChange) {
                return;
            }
            var newListener = this._pendingValue;
            var oldListener = this.value;
            var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
            var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
            if (shouldRemoveListener) {
                this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
            }
            if (shouldAddListener) {
                this._options = getOptions(newListener);
                this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
            }
            this.value = newListener;
            this._pendingValue = _part.noChange;
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(event) {
            if (typeof this.value === 'function') {
                this.value.call(this.eventContext || this.element, event);
            } else {
                this.value.handleEvent(event);
            }
        }
    }]);

    return EventPart;
}();
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.


var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? { capture: o.capture, passive: o.passive, once: o.once } : o.capture);
};


},{"./directive.js":7,"./dom.js":8,"./part.js":9,"./template-instance.js":13,"./template-result.js":14,"./template.js":15}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.parts = undefined;

var _dom = require('./dom.js');

var _parts = require('./parts.js');

var _templateFactory = require('./template-factory.js');

var parts = exports.parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var render = exports.render = function render(result, container, options) {
  var part = parts.get(container);
  if (part === undefined) {
    (0, _dom.removeNodes)(container, container.firstChild);
    parts.set(container, part = new _parts.NodePart(Object.assign({ templateFactory: _templateFactory.templateFactory }, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};


},{"./dom.js":8,"./parts.js":10,"./template-factory.js":12}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.templateCaches = undefined;
exports.templateFactory = templateFactory;

var _template = require('./template.js');

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    var template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    var key = result.strings.join(_template.marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template.Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
} /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
var templateCaches = exports.templateCaches = new Map();


},{"./template.js":15}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateInstance = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of authors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dom = require('./dom.js');

var _template = require('./template.js');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
var TemplateInstance = exports.TemplateInstance = function () {
    function TemplateInstance(template, processor, options) {
        _classCallCheck(this, TemplateInstance);

        this._parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }

    _createClass(TemplateInstance, [{
        key: 'update',
        value: function update(values) {
            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var part = _step.value;

                    if (part !== undefined) {
                        part.setValue(values[i]);
                    }
                    i++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _part = _step2.value;

                    if (_part !== undefined) {
                        _part.commit();
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: '_clone',
        value: function _clone() {
            var _this = this;

            // When using the Custom Elements polyfill, clone the node, rather than
            // importing it, to keep the fragment in the template's document. This
            // leaves the fragment inert so custom elements won't upgrade and
            // potentially modify their contents by creating a polyfilled ShadowRoot
            // while we traverse the tree.
            var fragment = _dom.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
            var parts = this.template.parts;
            var partIndex = 0;
            var nodeIndex = 0;
            var _prepareInstance = function _prepareInstance(fragment) {
                // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                // null
                var walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
                var node = walker.nextNode();
                // Loop through all the nodes and parts of a template
                while (partIndex < parts.length && node !== null) {
                    var part = parts[partIndex];
                    // Consecutive Parts may have the same node index, in the case of
                    // multiple bound attributes on an element. So each iteration we either
                    // increment the nodeIndex, if we aren't on a node with a part, or the
                    // partIndex if we are. By not incrementing the nodeIndex when we find a
                    // part, we allow for the next part to be associated with the current
                    // node if neccessasry.
                    if (!(0, _template.isTemplatePartActive)(part)) {
                        _this._parts.push(undefined);
                        partIndex++;
                    } else if (nodeIndex === part.index) {
                        if (part.type === 'node') {
                            var _part2 = _this.processor.handleTextExpression(_this.options);
                            _part2.insertAfterNode(node);
                            _this._parts.push(_part2);
                        } else {
                            var _parts;

                            (_parts = _this._parts).push.apply(_parts, _toConsumableArray(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
                        }
                        partIndex++;
                    } else {
                        nodeIndex++;
                        if (node.nodeName === 'TEMPLATE') {
                            _prepareInstance(node.content);
                        }
                        node = walker.nextNode();
                    }
                }
            };
            _prepareInstance(fragment);
            if (_dom.isCEPolyfill) {
                document.adoptNode(fragment);
                customElements.upgrade(fragment);
            }
            return fragment;
        }
    }]);

    return TemplateInstance;
}();


},{"./dom.js":8,"./template.js":15}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SVGTemplateResult = exports.TemplateResult = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of authors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The complete set of contributors may be found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * subject to an additional IP rights grant found at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dom = require('./dom.js');

var _template = require('./template.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
var TemplateResult = exports.TemplateResult = function () {
    function TemplateResult(strings, values, type, processor) {
        _classCallCheck(this, TemplateResult);

        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */


    _createClass(TemplateResult, [{
        key: 'getHTML',
        value: function getHTML() {
            var endIndex = this.strings.length - 1;
            var html = '';
            for (var i = 0; i < endIndex; i++) {
                var s = this.strings[i];
                // This replace() call does two things:
                // 1) Appends a suffix to all bound attribute names to opt out of special
                // attribute value parsing that IE11 and Edge do, like for style and
                // many SVG attributes. The Template class also appends the same suffix
                // when looking up attributes to creat Parts.
                // 2) Adds an unquoted-attribute-safe marker for the first expression in
                // an attribute. Subsequent attribute expressions will use node markers,
                // and this is safe since attributes with multiple expressions are
                // guaranteed to be quoted.
                var addedMarker = false;
                html += s.replace(_template.lastAttributeNameRegex, function (_match, whitespace, name, value) {
                    addedMarker = true;
                    return whitespace + name + _template.boundAttributeSuffix + value + _template.marker;
                });
                if (!addedMarker) {
                    html += _template.nodeMarker;
                }
            }
            return html + this.strings[endIndex];
        }
    }, {
        key: 'getTemplateElement',
        value: function getTemplateElement() {
            var template = document.createElement('template');
            template.innerHTML = this.getHTML();
            return template;
        }
    }]);

    return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */


var SVGTemplateResult = exports.SVGTemplateResult = function (_TemplateResult) {
    _inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
        _classCallCheck(this, SVGTemplateResult);

        return _possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
    }

    _createClass(SVGTemplateResult, [{
        key: 'getHTML',
        value: function getHTML() {
            return '<svg>' + _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getHTML', this).call(this) + '</svg>';
        }
    }, {
        key: 'getTemplateElement',
        value: function getTemplateElement() {
            var template = _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getTemplateElement', this).call(this);
            var content = template.content;
            var svgElement = content.firstChild;
            content.removeChild(svgElement);
            (0, _dom.reparentNodes)(content, svgElement.firstChild);
            return template;
        }
    }]);

    return SVGTemplateResult;
}(TemplateResult);


},{"./dom.js":8,"./template.js":15}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = exports.marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
var nodeMarker = exports.nodeMarker = '<!--' + marker + '-->';
var markerRegex = exports.markerRegex = new RegExp(marker + '|' + nodeMarker);
/**
 * Suffix appended to all bound attribute names.
 */
var boundAttributeSuffix = exports.boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

var Template = exports.Template = function Template(result, element) {
    var _this = this;

    _classCallCheck(this, Template);

    this.parts = [];
    this.element = element;
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = [];
    var _prepareTemplate = function _prepareTemplate(template) {
        var content = template.content;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                            NodeFilter.SHOW_TEXT */, null, false);
        // The actual previous node, accounting for removals: if a node is removed
        // it will never be the previousNode.
        var previousNode = void 0;
        // Used to set previousNode at the top of the loop.
        var currentNode = void 0;
        while (walker.nextNode()) {
            index++;
            previousNode = currentNode;
            var node = currentNode = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        var attributes = node.attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondance between part index and attribute index.
                        var count = 0;
                        for (var i = 0; i < attributes.length; i++) {
                            if (attributes[i].value.indexOf(marker) >= 0) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            var stringForPart = result.strings[partIndex];
                            // Find the attribute name
                            var name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            var attributeValue = node.getAttribute(attributeLookupName);
                            var strings = attributeValue.split(markerRegex);
                            _this.parts.push({ type: 'attribute', index: index, name: name, strings: strings });
                            node.removeAttribute(attributeLookupName);
                            partIndex += strings.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        _prepareTemplate(node);
                    }
                } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    var nodeValue = node.nodeValue;
                    if (nodeValue.indexOf(marker) < 0) {
                        continue;
                    }
                    var parent = node.parentNode;
                    var _strings = nodeValue.split(markerRegex);
                    var lastIndex = _strings.length - 1;
                    // We have a part for each match found
                    partIndex += lastIndex;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (var _i = 0; _i < lastIndex; _i++) {
                        parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);
                        _this.parts.push({ type: 'node', index: index++ });
                    }
                    parent.insertBefore(_strings[lastIndex] === '' ? createMarker() : document.createTextNode(_strings[lastIndex]), node);
                    nodesToRemove.push(node);
                } else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.nodeValue === marker) {
                        var _parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * previousSibling is being removed (thus it's not the
                        //    `previousNode`)
                        //  * previousSibling is not a Text node
                        //
                        // TODO(justinfagnani): We should be able to use the previousNode
                        // here as the marker node and reduce the number of extra nodes we
                        // add to a template. See
                        // https://github.com/PolymerLabs/lit-html/issues/147
                        var previousSibling = node.previousSibling;
                        if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
                            _parent.insertBefore(createMarker(), node);
                        } else {
                            index--;
                        }
                        _this.parts.push({ type: 'node', index: index++ });
                        nodesToRemove.push(node);
                        // If we don't have a nextSibling add a marker node.
                        // We don't have to check if the next node is going to be removed,
                        // because that node will induce a new marker if so.
                        if (node.nextSibling === null) {
                            _parent.insertBefore(createMarker(), node);
                        } else {
                            index--;
                        }
                        currentNode = previousNode;
                        partIndex++;
                    } else {
                        var _i2 = -1;
                        while ((_i2 = node.nodeValue.indexOf(marker, _i2 + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            _this.parts.push({ type: 'node', index: -1 });
                        }
                    }
                }
        }
    };
    _prepareTemplate(element);
    // Remove text binding nodes after the walk to not disturb the TreeWalker
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            n.parentNode.removeChild(n);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var isTemplatePartActive = exports.isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
};
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
var createMarker = exports.createMarker = function createMarker() {
    return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
var lastAttributeNameRegex = exports.lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;


},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = exports.html = exports.Template = exports.isTemplatePartActive = exports.createMarker = exports.TemplateResult = exports.SVGTemplateResult = exports.TemplateInstance = exports.templateFactory = exports.templateCaches = exports.render = exports.parts = exports.PropertyPart = exports.PropertyCommitter = exports.NodePart = exports.isPrimitive = exports.EventPart = exports.BooleanAttributePart = exports.AttributePart = exports.AttributeCommitter = exports.noChange = exports.reparentNodes = exports.removeNodes = exports.isDirective = exports.directive = exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = undefined;

var _defaultTemplateProcessor = require('./lib/default-template-processor.js');

Object.defineProperty(exports, 'DefaultTemplateProcessor', {
  enumerable: true,
  get: function get() {
    return _defaultTemplateProcessor.DefaultTemplateProcessor;
  }
});
Object.defineProperty(exports, 'defaultTemplateProcessor', {
  enumerable: true,
  get: function get() {
    return _defaultTemplateProcessor.defaultTemplateProcessor;
  }
});

var _directive = require('./lib/directive.js');

Object.defineProperty(exports, 'directive', {
  enumerable: true,
  get: function get() {
    return _directive.directive;
  }
});
Object.defineProperty(exports, 'isDirective', {
  enumerable: true,
  get: function get() {
    return _directive.isDirective;
  }
});

var _dom = require('./lib/dom.js');

Object.defineProperty(exports, 'removeNodes', {
  enumerable: true,
  get: function get() {
    return _dom.removeNodes;
  }
});
Object.defineProperty(exports, 'reparentNodes', {
  enumerable: true,
  get: function get() {
    return _dom.reparentNodes;
  }
});

var _part = require('./lib/part.js');

Object.defineProperty(exports, 'noChange', {
  enumerable: true,
  get: function get() {
    return _part.noChange;
  }
});

var _parts = require('./lib/parts.js');

Object.defineProperty(exports, 'AttributeCommitter', {
  enumerable: true,
  get: function get() {
    return _parts.AttributeCommitter;
  }
});
Object.defineProperty(exports, 'AttributePart', {
  enumerable: true,
  get: function get() {
    return _parts.AttributePart;
  }
});
Object.defineProperty(exports, 'BooleanAttributePart', {
  enumerable: true,
  get: function get() {
    return _parts.BooleanAttributePart;
  }
});
Object.defineProperty(exports, 'EventPart', {
  enumerable: true,
  get: function get() {
    return _parts.EventPart;
  }
});
Object.defineProperty(exports, 'isPrimitive', {
  enumerable: true,
  get: function get() {
    return _parts.isPrimitive;
  }
});
Object.defineProperty(exports, 'NodePart', {
  enumerable: true,
  get: function get() {
    return _parts.NodePart;
  }
});
Object.defineProperty(exports, 'PropertyCommitter', {
  enumerable: true,
  get: function get() {
    return _parts.PropertyCommitter;
  }
});
Object.defineProperty(exports, 'PropertyPart', {
  enumerable: true,
  get: function get() {
    return _parts.PropertyPart;
  }
});

var _render = require('./lib/render.js');

Object.defineProperty(exports, 'parts', {
  enumerable: true,
  get: function get() {
    return _render.parts;
  }
});
Object.defineProperty(exports, 'render', {
  enumerable: true,
  get: function get() {
    return _render.render;
  }
});

var _templateFactory = require('./lib/template-factory.js');

Object.defineProperty(exports, 'templateCaches', {
  enumerable: true,
  get: function get() {
    return _templateFactory.templateCaches;
  }
});
Object.defineProperty(exports, 'templateFactory', {
  enumerable: true,
  get: function get() {
    return _templateFactory.templateFactory;
  }
});

var _templateInstance = require('./lib/template-instance.js');

Object.defineProperty(exports, 'TemplateInstance', {
  enumerable: true,
  get: function get() {
    return _templateInstance.TemplateInstance;
  }
});

var _templateResult = require('./lib/template-result.js');

Object.defineProperty(exports, 'SVGTemplateResult', {
  enumerable: true,
  get: function get() {
    return _templateResult.SVGTemplateResult;
  }
});
Object.defineProperty(exports, 'TemplateResult', {
  enumerable: true,
  get: function get() {
    return _templateResult.TemplateResult;
  }
});

var _template = require('./lib/template.js');

Object.defineProperty(exports, 'createMarker', {
  enumerable: true,
  get: function get() {
    return _template.createMarker;
  }
});
Object.defineProperty(exports, 'isTemplatePartActive', {
  enumerable: true,
  get: function get() {
    return _template.isTemplatePartActive;
  }
});
Object.defineProperty(exports, 'Template', {
  enumerable: true,
  get: function get() {
    return _template.Template;
  }
});

/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
var html = exports.html = function html(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _templateResult.TemplateResult(strings, values, 'html', _defaultTemplateProcessor.defaultTemplateProcessor);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
var svg = exports.svg = function svg(strings) {
  for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _templateResult.SVGTemplateResult(strings, values, 'svg', _defaultTemplateProcessor.defaultTemplateProcessor);
};


},{"./lib/default-template-processor.js":6,"./lib/directive.js":7,"./lib/dom.js":8,"./lib/part.js":9,"./lib/parts.js":10,"./lib/render.js":11,"./lib/template-factory.js":12,"./lib/template-instance.js":13,"./lib/template-result.js":14,"./lib/template.js":15}],17:[function(require,module,exports){
"use strict";

// Reflect.constructor polyfill for IE11 support of standard web components
(function () {
    'use strict';

    if (!!window.Reflect) return;

    window.Reflect = {
        construct: function construct(target, args, newTarget) {
            var handler = new WeakMap().get(target);
            if (handler !== undefined) return handler.construct(handler.target, args, newTarget);

            if (typeof target !== "function") throw new TypeError("target must be a function: " + target);

            if (newTarget === undefined || newTarget === target) return new (Function.prototype.bind.apply(target, [null].concat(args)))();else {
                if (typeof newTarget !== "function") throw new TypeError("new target must be a function: " + target);

                var proto = newTarget.prototype;
                var instance = Object(proto) === proto ? Object.create(proto) : {};
                var result = Function.prototype.apply.call(target, instance, args);

                return Object(result) === result ? result : instance;
            }
        }
    };
})();

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY3djL2FwcC9hcHAtcm9vdC5qcyIsInB1YmxpYy9pbmRleC5tanMiLCJwdWJsaWMvbm9kZV9tb2R1bGVzL2N1c3RvbS13ZWItY29tcG9uZW50L2luZGV4LmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9jdXN0b20td2ViLWNvbXBvbmVudC9zcmMvQ3VzdG9tSFRNTEVsZW1lbnQuanMiLCJwdWJsaWMvbm9kZV9tb2R1bGVzL2N1c3RvbS13ZWItY29tcG9uZW50L3NyYy9DdXN0b21XZWJDb21wb25lbnQuanMiLCJwdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RpcmVjdGl2ZS5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RvbS5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnQuanMiLCJwdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9wYXJ0cy5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3JlbmRlci5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJwdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLXJlc3VsdC5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saXQtaHRtbC5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvcmVmbGVjdC1jb25zdHJ1Y3Rvci9yZWZsZWN0LWNvbnN0cnVj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NUIsR0FBcUMsUUFBNUM7QUFDSDtBQUNKO0FBakJZLEtBQWpCO0FBbUJILENBeEJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQsIGh0bWwgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvY3VzdG9tLXdlYi1jb21wb25lbnQvaW5kZXguanMnO1xuXG4vKipcbiAqIEBwdWJsaWMgQG5hbWUgQXBwTWFpblxuICogQGV4dGVuZHMgQ3VzdG9tSFRNTEVsZW1lbnRcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWNhdGlvbiBXZWIgQ29tcG9uZW50LCBtYWluIGFwcGxpY2F0aW9uIGdhdGV3YXksIHRoZSByb290IHdlYiBjb21wb25lbnQgdGhhdCBzdGFydHMgdGhlIGFwcGxpY2F0aW9uXG4gKiBAYXV0aG9yIFBhdWwgU21pdGggPHBhdWwuc21pdGhAdWxzbWl0aC5uZXQ+XG4gKiBAY29weXJpZ2h0IDIwMTkgUGF1bCBTbWl0aCAodWxzbWl0aC5uZXQpXG4gKi9cbmNsYXNzIEFwcFJvb3QgZXh0ZW5kcyBDdXN0b21IVE1MRWxlbWVudCB7XG5cblx0LyoqXG4gICAgICogQHB1YmxpYyBAY29uc3RydWN0b3IgQG5hbWUgY29uc3RydWN0b3Jcblx0ICogQGRlc2NyaXB0aW9uIFByb2Nlc3MgY2FsbGVkIGZ1bmN0aW9uIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyBpbnN0YW50aWF0ZWQgKGJ1dCBub3QgcmVhZHkgb3IgaW4gRE9NLCBtdXN0IGNhbGwgc3VwZXIoKSBmaXJzdClcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc29sZS5sb2coJ1Bvd2VyZWQgYnkgQ1dDJyk7XG5cblx0XHQvLyA8cmF6aWxvLXJlcXVlc3QgaWQ9XCJyZXF1ZXN0XCIgYmFzZS11cmw9XCJyYXpvcmNtcy5kb2NrZXIubG9jYWxob3N0L2FwaVwiPjwvcmF6aWxvLXJlcXVlc3Q+XG5cdFx0Ly8gPHJhemlsby1zdG9yZSBpZD1cInN0b3JlXCI+PC9yYXppbG8tc3RvcmU+XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpYyBAbmFtZSB0ZW1wbGF0ZVxuXHQgKiBAZGVzY3JpcHRpb24gVGVtcGxhdGUgZnVuY3Rpb24gdG8gcmV0dXJuIHdlYiBjb21wb25lbnQgVUlcblx0ICogQHJldHVybiB7U3RyaW5nfSBIVE1MIHRlbXBsYXRlIGJsb2NrXG5cdCAqL1xuICAgIHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICAgICAgICA8c3R5bGU+XG5cdFx0XHRcdCNhcHAtcm9vdCAubW9kYWwgLmlucHV0cyB7IHBhZGRpbmc6IDAgMjBweDsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXHRcdFx0PGRpdiBpZD1cImFwcC1yb290XCI+XG5cdFx0XHRcdCR7dGhpcy51c2VyID8gaHRtbGBcblx0XHRcdFx0XHQ8cmF6aWxvLXBhbmVsIHVzZXI9XCJ7e3VzZXJ9fVwiIG9uLWFjdGlvbj1cImRvQWN0aW9uXCI+PC9yYXppbG8tcGFuZWw+XG5cdFx0XHRcdFx0PHJhemlsby1kYXNoYm9hcmQgY3VycmVudC1wYWdlPVwie3tjdXJyZW50UGFnZX19XCI+PC9yYXppbG8tZGFzaGJvYXJkPlxuXHRcdFx0XHRcdDxyYXppbG8tcHJvZmlsZS1lZGl0IHVzZXI9XCJ7e3VzZXJ9fVwiPjwvcmF6aWxvLXByb2ZpbGUtZWRpdD5cblx0XHRcdFx0XHQ8cmF6aWxvLXBhZ2UtYWRkPjwvcmF6aWxvLXBhZ2UtYWRkPlxuXHRcdFx0XHRcdDxyYXppbG8tcGFnZS1jb3B5IGN1cnJlbnQtcGFnZT1cInt7Y3VycmVudFBhZ2V9fVwiPjwvcmF6aWxvLXBhZ2UtY29weT5cblx0XHRcdFx0YCA6ICcnfVx0XG5cdFx0XHRcdFxuXHRcdFx0XHQ8cGFwZXItdG9hc3QgaWQ9XCJ0b2FzdFwiIGNvbG9yJD1cInt7dG9hc3RDb2xvcn19XCI+PC9wYXBlci10b2FzdD5cblxuXHRcdFx0XHQ8cGFwZXItZGlhbG9nIGlkPVwibG9naW5Nb2RhbFwiIGNsYXNzPVwibW9kYWxcIj5cblx0XHRcdFx0XHQ8aDI+UmF6aWxvIExvZ2luPC9oMj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXRzXCI+XG5cdFx0XHRcdFx0XHQ8cGFwZXItaW5wdXQgaWQ9XCJsb2dpblVzZXJuYW1lXCIgbGFiZWw9XCJFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgb24ta2V5dXA9XCJkb0xvZ2luXCI+PC9wYXBlci1pbnB1dD5cblx0XHRcdFx0XHRcdDxwYXBlci1pbnB1dCBpZD1cImxvZ2luUGFzc3dvcmRcIiBsYWJlbD1cIlBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgb24ta2V5dXA9XCJkb0xvZ2luXCI+PC9wYXBlci1pbnB1dD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHRcdFx0PHBhcGVyLWJ1dHRvbiBkaWFsb2ctZGlzbWlzcz5DYW5jZWw8L3BhcGVyLWJ1dHRvbj5cblx0XHRcdFx0XHRcdDxwYXBlci1idXR0b24gZGlhbG9nLWNvbmZpcm0gYXV0b2ZvY3VzIG9uLWNsaWNrPVwiZG9Mb2dpblwiIGNvbG9yPVwiZ3JlZW5cIj5Mb2cgSW48L3BhcGVyLWJ1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9wYXBlci1kaWFsb2c+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgICAgYDtcblx0fVxufVxuXG4vLyBib290c3RyYXAgdGhlIGNsYXNzIGFzIGEgbmV3IHdlYiBjb21wb25lbnRcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXJvb3QnLCBBcHBSb290KTsiLCJpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL3JlZmxlY3QtY29uc3RydWN0b3IvcmVmbGVjdC1jb25zdHJ1Y3Rvci5qcyc7XG5pbXBvcnQgJy4vY3djL2FwcC9hcHAtcm9vdC5qcyc7XG5cbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJyk7IiwiaW1wb3J0IEN1c3RvbUhUTUxFbGVtZW50IGZyb20gJy4vc3JjL0N1c3RvbUhUTUxFbGVtZW50LmpzJ1xuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vbGl0LWh0bWwvbGl0LWh0bWwuanMnO1xuXG5leHBvcnQge1xuICAgIEN1c3RvbUhUTUxFbGVtZW50IGFzIEN1c3RvbUhUTUxFbGVtZW50LFxuICAgIGh0bWwgYXMgaHRtbFxufSIsImltcG9ydCBDdXN0b21XZWJDb21wb25lbnQgZnJvbSAnLi9DdXN0b21XZWJDb21wb25lbnQuanMnO1xuXG4vKipcbiAqIEN1c3RvbUhUTUxFbGVtZW50XG4gKiBBIHNhbXBsZSBleHRlbnNpb24gdG8gdGhlIGJhc2ljIEhUTUwgRWxlbWVudCBjbGFzcywgcHJvdmlkaW5nIHRlbXBsYXRpbmcgZm9yIHdlYiBjb21wb25lbnRzIHRocm91Z2ggdGhlIGxpdC1odG1sIGxpYnJhcnlcbiAqIEJ1aWxkIG9uIFdlYiBTdGFuZGFyZHMsIHBvbHlmaWxsZWQgZm9yIGxlZ2FjeSBicm93c2VycywgdXNpbmcgYSBzaW1wbGUgY2xlYW4gbGl0ZSBIVE1MIHRlbXBsYXRlIHJlbmRlcmluZyBjYWxsZWQgbGl0LWh0bWxcbiAqIEV4dGVuZCB0aGlzIGNsYXNzIHRvIGNyZWF0ZSBhIHNpbXBsZSBIVE1MIEN1c3RvbWUgRWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21IVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAvKipcblx0ICogY29uc3RydWN0b3IoKVxuXHQgKiBDcmVhdGUgYSBzaW1wbGUgSFRNTCBlbGVtZW50IGFuZCBvYnNlcnZlIGNoYW5nZXMgdG8gcHJvcGVydGllc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnVwZGF0ZVRpbWVvdXQ7XG5cdFx0Q3VzdG9tV2ViQ29tcG9uZW50LmJpbmRQcm9wZXJ0aWVzLmNhbGwodGhpcyk7XG5cdH1cblxuXHQvKipcblx0ICogZGVmYXVsdCBtZXRob2RzIGluaGVyaXRlZCBmcm9tIEN1c3RvbSBXZWIgQ29tcG9uZW50XG5cdCAqIGNvbm5lY3RlZENhbGxiYWNrKCksIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCksIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpLCB1cGRhdGVUZW1wbGF0ZSgpLi4uXG5cdCAqIEJvb3RzdHJhcCBzdGF0aWMgbWV0aG9kcyBmb3IgZGVmYXVsdCBjdXN0b20gd2ViIGZ1bmN0aW9uYWxpdHlcblx0ICovXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkgeyBDdXN0b21XZWJDb21wb25lbnQuY29ubmVjdGVkQ2FsbGJhY2suY2FsbCh0aGlzKSB9XG5cdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyBDdXN0b21XZWJDb21wb25lbnQuZGlzY29ubmVjdGVkQ2FsbGJhY2suY2FsbCh0aGlzKSB9XG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhwcm9wZXJ0eSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7IEN1c3RvbVdlYkNvbXBvbmVudC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbCh0aGlzLCBwcm9wZXJ0eSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB9XG5cdHVwZGF0ZVRlbXBsYXRlKCkge1xuXHRcdC8vIGRlYm91bmNlIHVwZGF0ZXNcblx0XHRjbGVhclRpbWVvdXQodGhpcy51cGRhdGVUaW1lb3V0KTtcblx0XHR0aGlzLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IEN1c3RvbVdlYkNvbXBvbmVudC51cGRhdGVUZW1wbGF0ZS5jYWxsKHRoaXMpLCAxKTtcblx0fVxufSIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uLy4uL2xpdC1odG1sL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBDdXN0b21IVE1MRWxlbWVudFxuICogQSBzYW1wbGUgZXh0ZW5zaW9uIHRvIHRoZSBiYXNpYyBIVE1MIEVsZW1lbnQgY2xhc3MsIHByb3ZpZGluZyB0ZW1wbGF0aW5nIGZvciB3ZWIgY29tcG9uZW50cyB0aHJvdWdoIHRoZSBsaXQtaHRtbCBsaWJyYXJ5XG4gKiBCdWlsZCBvbiBXZWIgU3RhbmRhcmRzLCBwb2x5ZmlsbGVkIGZvciBsZWdhY3kgYnJvd3NlcnMsIHVzaW5nIGEgc2ltcGxlIGNsZWFuIGxpdGUgSFRNTCB0ZW1wbGF0ZSByZW5kZXJpbmcgY2FsbGVkIGxpdC1odG1sXG4gKiBFeHRlbmQgdGhpcyBjbGFzcyB0byBjcmVhdGUgYSBzaW1wbGUgSFRNTCBDdXN0b21lIEVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tV2ViQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqIGNvbm5lY3RlZENhbGxiYWNrKClcblx0ICogQ2F0Y2ggdGhlIHN0YW5kYXJkIGNvbm5lY3RlZCBjYWxsYmFjaywgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZSBvbiBpbnN0YW50aWF0aW9uXG5cdCAqIGZvbGxvd3MgdXAgYnkgYnViYmxpbmcgdGhlIGNhbGxiYWNrIHVwIHRvIGNvbm5lY3RlZCgpIG9uIGNoaWxkXG5cdCAqL1xuXHRzdGF0aWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm47XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmNvbm5lY3RlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5jb25uZWN0ZWQuY2FsbCh0aGlzKTtcblx0XHRpZiAodHlwZW9mIHRoaXMudXBkYXRlVGVtcGxhdGUgPT09ICdmdW5jdGlvbicpIEN1c3RvbVdlYkNvbXBvbmVudC51cGRhdGVUZW1wbGF0ZS5jYWxsKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIGRpc2Nvbm5lY3RlZENhbGxiYWNrKClcblx0ICogQ2F0Y2ggdGhlIHN0YW5kYXJkIGRpc2Nvbm5lY3RlZCBjYWxsYmFja1xuXHQgKiBmb2xsb3dzIHVwIGJ5IGJ1YmJsaW5nIHRoZSBjYWxsYmFjayB1cCB0byBkaXNjb25uZWN0ZWQoKSBvbiBjaGlsZFxuXHQgKi9cblx0c3RhdGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdGlmICh0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm47XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRpc2Nvbm5lY3RlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5kaXNjb25uZWN0ZWQuY2FsbCh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKVxuXHQgKiBDYXRjaCB0aGUgc3RhbmRhcmQgYXR0cmlidXRlQ2hhbmdlZCBjYWxsYmFja1xuXHQgKiBmb2xsb3dzIHVwIGJ5IGJ1YmJsaW5nIHRoZSBjYWxsYmFjayB1cCB0byBhdHRyaWJ1dGVDaGFuZ2VkKCkgb24gY2hpbGQgZm9yIGF0dHJpYnV0ZXMgc3Vic2NyaWJlZCB0b29cblx0ICovXG5cdHN0YXRpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMuYXR0cmlidXRlQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkLmNhbGwodGhpcywgYXR0cmlidXRlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIF9fYmluZFByb3BlcnRpZXMoKVxuXHQgKiBJbnRlcm5hbCBtZXRob2QgdG8gYmluZCBwcm9wZXJ0aWVzIGFuZCBjcmVhdGUgYSBwcm9wZXJ0eUNoYW5nZWQgY2FsbGJhY2ssIGFsc28gZXhwb3NpbmcgYW4gZXZlbnQgb2YgdGhlIHNhbWUgbmFtZVxuXHQgKiB1c2UgdGhpcyBjYWxsYmFjayBvciB3YXRjaCB0aGUgZXZlbnQgdG8gYmUgbm90aWZpZWQgb2YgcHJvcGVydHkgY2hhbmdlcyB0aGF0IGFyZSBzdWJzY3JpYmVkIHRvb1xuXHQgKi9cblx0c3RhdGljIGJpbmRQcm9wZXJ0aWVzKCkge1xuXHRcdGlmICghdGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZFByb3BlcnRpZXMgfHwgIXRoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzLmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5fX3Byb3BlcnRpZXMgPSB7fTtcblxuXHRcdGZvciAoY29uc3QgaWR4IGluIHRoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZFByb3BlcnRpZXNbaWR4XSwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX19wcm9wZXJ0aWVzW3RoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzW2lkeF1dOyB9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdGxldCBvbGRWYWx1ZSA9IHRoaXMuX19wcm9wZXJ0aWVzW3RoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzW2lkeF1dO1xuXHRcdFx0XHRcdHRoaXMuX19wcm9wZXJ0aWVzW3RoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzW2lkeF1dID0gdmFsdWU7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BlcnR5Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5wcm9wZXJ0eUNoYW5nZWQuY2FsbCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLm9ic2VydmVkUHJvcGVydGllc1tpZHhdLCBvbGRWYWx1ZSwgdmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Byb3BlcnR5Y2hhbmdlZCcsIHsgJ2RldGFpbCc6IHsgJ3Byb3BlcnR5JzogdGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZFByb3BlcnRpZXNbaWR4XSwgJ29sZFZhbHVlJzogb2xkVmFsdWUsICduZXdWYWx1ZSc6IHZhbHVlIH0gfSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogdXBkYXRlVGVtcGxhdGUoKVxuXHQgKiBJbmZvcm0gdGhlIHRlbXBsYXRlIG9mIGNoYW5nZXMgdG8gcHJvcGVydGllcyBieSB0ZWxsaW5nIGl0IHRvIHVwZGF0ZVxuXHQgKiB1c2VzIGxpdC1odG1sIHRvIGFjdGl2ZWx5IHJlbmRlciBhIERPTSB0ZW1wbGF0ZSBhbmQgb25seSBjaGFuZ2Ugc3R1ZmYgdGhhdCBuZWVkcyBjaGFuZ2luZyFcblx0ICovXG5cdHN0YXRpYyB1cGRhdGVUZW1wbGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHJldHVybjtcblx0XHRyZW5kZXIodGhpcy50ZW1wbGF0ZSgpLCB0aGlzLnNoYWRvd1Jvb3QgPyB0aGlzLnNoYWRvd1Jvb3QgOiB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KSk7XG5cblx0XHR0aGlzLmRvbSA9IHRoaXMuc2hhZG93Um9vdCA/IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCh0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkgOiB0aGlzLmdldEVsZW1lbnRCeUlkKHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcblx0XHRpZiAodHlwZW9mIHRoaXMudGVtcGxhdGVVcGRhdGVkID09PSAnZnVuY3Rpb24nKSB0aGlzLnRlbXBsYXRlVXBkYXRlZC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RlbXBsYXRldXBkYXRlZCcpKTtcblx0fVxufSIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IEF0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyIH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG4vKipcbiAqIENyZWF0ZXMgUGFydHMgd2hlbiBhIHRlbXBsYXRlIGlzIGluc3RhbnRpYXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5nIGxpdGVyYWxzLiBUaGVyZSBhcmUgYWx3YXlzIGF0IGxlYXN0IHR3byBzdHJpbmdzLFxuICAgICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIGhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbmFtZVswXTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBjb25zdCBjb21pdHRlciA9IG5ldyBQcm9wZXJ0eUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKTtcbiAgICAgICAgICAgIHJldHVybiBjb21pdHRlci5wYXJ0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICAgICAgcmV0dXJuIGNvbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUZhY3RvcnlcbiAgICAgKi9cbiAgICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbCB0aGUgZnVuY3Rpb25cbiAqIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChmKSA9PiAoKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBkID0gZiguLi5hcmdzKTtcbiAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICByZXR1cm4gZDtcbn0pO1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0aXZlID0gKG8pID0+IHR5cGVvZiBvID09PSAnZnVuY3Rpb24nICYmIGRpcmVjdGl2ZXMuaGFzKG8pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrICE9PSB1bmRlZmluZWQ7XG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmVcbiAqIGBiZWZvcmVOb2RlYC4gSWYgYGJlZm9yZU5vZGVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZVxuICogY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsLCBiZWZvcmUgPSBudWxsKSA9PiB7XG4gICAgbGV0IG5vZGUgPSBzdGFydDtcbiAgICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5vZGUsIGJlZm9yZSk7XG4gICAgICAgIG5vZGUgPSBuO1xuICAgIH1cbn07XG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgZnJvbSBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnROb2RlLCBlbmROb2RlID0gbnVsbCkgPT4ge1xuICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgIHdoaWxlIChub2RlICE9PSBlbmROb2RlKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIG5vZGUgPSBuO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb20uanMubWFwIiwiLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBub0NoYW5nZSB9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7IGNyZWF0ZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgQXR0cmlidXRlUGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1tpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgICAqL1xuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJ0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodikgfHwgdHlwZW9mIHYgIT09ICdzdHJpbmcnICYmIHZbU3ltYm9sLml0ZXJhdG9yXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHQgPT09ICdzdHJpbmcnID8gdCA6IFN0cmluZyh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoY29taXR0ZXIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb21taXR0ZXIgPSBjb21pdHRlcjtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSAmJiAoIWlzUHJpbWl0aXZlKHZhbHVlKSB8fCB2YWx1ZSAhPT0gdGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIG5vdCBhIGRpcmVjdGl2ZSwgZGlydHkgdGhlIGNvbW1pdHRlciBzbyB0aGF0IGl0J2xsXG4gICAgICAgICAgICAvLyBjYWxsIHNldEF0dHJpYnV0ZS4gSWYgdGhlIHZhbHVlIGlzIGEgZGlyZWN0aXZlLCBpdCdsbCBkaXJ0eSB0aGVcbiAgICAgICAgICAgIC8vIGNvbW1pdHRlciBpZiBpdCBjYWxscyBzZXRWYWx1ZSgpLlxuICAgICAgICAgICAgaWYgKCFpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG8oY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYmV0d2VlbiBgcmVmYCBhbmQgYHJlZmAncyBuZXh0IHNpYmxpbmcuIEJvdGggYHJlZmAgYW5kXG4gICAgICogaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2RlcyBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyXG4gICAgICogaW4gYSBsaXRlcmFsIHNlY3Rpb24gb2YgYSB0ZW1wbGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGluc2VydEFmdGVyTm9kZShyZWYpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSByZWY7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgYXBwZW5kSW50b1BhcnQocGFydCkge1xuICAgICAgICBwYXJ0Ll9pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHBhcnQuX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGFmdGVyIGByZWZgXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBpbnNlcnRBZnRlclBhcnQocmVmKSB7XG4gICAgICAgIHJlZi5faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICAgICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHByb3BhZ2F0ZSB0aGUgdGVtcGxhdGUgcHJvY2Vzc29yIGZyb20gdGhlIFRlbXBsYXRlUmVzdWx0XG4gICAgICAgICAgICAvLyBzbyB0aGF0IHdlIHVzZSBpdHMgc3ludGF4IGV4dGVuc2lvbiwgZXRjLiBUaGUgdGVtcGxhdGUgZmFjdG9yeSBjb21lc1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9wdGlvbnMgc28gdGhhdCBpdCBjYW4gY29udHJvbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gY2FjaGluZyBhbmQgcHJlcHJvY2Vzc2luZy5cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydC5lbmROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcihzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICByZW1vdmVOb2Rlcyh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlLCBzdGFydE5vZGUubmV4dFNpYmxpbmcsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxufVxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCAhPT0gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICAgIH1cbiAgICBfY3JlYXRlUGFydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2luZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0c1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbn1cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRocmlkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG50cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xufVxuY2F0Y2ggKF9lKSB7XG59XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudE5hbWUsIGV2ZW50Q29udGV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICAgICAgdGhpcy5fYm91bmRIYW5kbGVFdmVudCA9IChlKSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgICAgIG9sZExpc3RlbmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAobmV3TGlzdGVuZXIuY2FwdHVyZSAhPT0gb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09IG9sZExpc3RlbmVyLnBhc3NpdmUpO1xuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9IG51bGwgJiYgKG9sZExpc3RlbmVyID09IG51bGwgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuY2FsbCh0aGlzLmV2ZW50Q29udGV4dCB8fCB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobykgPT4gbyAmJlxuICAgIChldmVudE9wdGlvbnNTdXBwb3J0ZWQgP1xuICAgICAgICB7IGNhcHR1cmU6IG8uY2FwdHVyZSwgcGFzc2l2ZTogby5wYXNzaXZlLCBvbmNlOiBvLm9uY2UgfSA6XG4gICAgICAgIG8uY2FwdHVyZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IE5vZGVQYXJ0IH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBhIFRlbXBsYXRlUmVzdWx0IGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlXG4gKiAgICAgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChyZXN1bHQsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydChPYmplY3QuYXNzaWduKHsgdGVtcGxhdGVGYWN0b3J5IH0sIG9wdGlvbnMpKSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgIH1cbiAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgcGFydC5jb21taXQoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgbWFya2VyLCBUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdCkge1xuICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICAgICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwKCksXG4gICAgICAgICAgICBrZXlTdHJpbmc6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAgIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgICAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtZmFjdG9yeS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBpc0NFUG9seWZpbGwgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUGFydEFjdGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHByb2Nlc3Nvciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Nsb25lKCkge1xuICAgICAgICAvLyBXaGVuIHVzaW5nIHRoZSBDdXN0b20gRWxlbWVudHMgcG9seWZpbGwsIGNsb25lIHRoZSBub2RlLCByYXRoZXIgdGhhblxuICAgICAgICAvLyBpbXBvcnRpbmcgaXQsIHRvIGtlZXAgdGhlIGZyYWdtZW50IGluIHRoZSB0ZW1wbGF0ZSdzIGRvY3VtZW50LiBUaGlzXG4gICAgICAgIC8vIGxlYXZlcyB0aGUgZnJhZ21lbnQgaW5lcnQgc28gY3VzdG9tIGVsZW1lbnRzIHdvbid0IHVwZ3JhZGUgYW5kXG4gICAgICAgIC8vIHBvdGVudGlhbGx5IG1vZGlmeSB0aGVpciBjb250ZW50cyBieSBjcmVhdGluZyBhIHBvbHlmaWxsZWQgU2hhZG93Um9vdFxuICAgICAgICAvLyB3aGlsZSB3ZSB0cmF2ZXJzZSB0aGUgdHJlZS5cbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpc0NFUG9seWZpbGwgP1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIDpcbiAgICAgICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgX3ByZXBhcmVJbnN0YW5jZSA9IChmcmFnbWVudCkgPT4ge1xuICAgICAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgICAgICAgLy8gbnVsbFxuICAgICAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihmcmFnbWVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICAgICAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGggJiYgbm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIENvbnNlY3V0aXZlIFBhcnRzIG1heSBoYXZlIHRoZSBzYW1lIG5vZGUgaW5kZXgsIGluIHRoZSBjYXNlIG9mXG4gICAgICAgICAgICAgICAgLy8gbXVsdGlwbGUgYm91bmQgYXR0cmlidXRlcyBvbiBhbiBlbGVtZW50LiBTbyBlYWNoIGl0ZXJhdGlvbiB3ZSBlaXRoZXJcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIG5vZGVJbmRleCwgaWYgd2UgYXJlbid0IG9uIGEgbm9kZSB3aXRoIGEgcGFydCwgb3IgdGhlXG4gICAgICAgICAgICAgICAgLy8gcGFydEluZGV4IGlmIHdlIGFyZS4gQnkgbm90IGluY3JlbWVudGluZyB0aGUgbm9kZUluZGV4IHdoZW4gd2UgZmluZCBhXG4gICAgICAgICAgICAgICAgLy8gcGFydCwgd2UgYWxsb3cgZm9yIHRoZSBuZXh0IHBhcnQgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgLy8gbm9kZSBpZiBuZWNjZXNzYXNyeS5cbiAgICAgICAgICAgICAgICBpZiAoIWlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVJbmRleCA9PT0gcGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnByb2Nlc3Nvci5oYW5kbGVUZXh0RXhwcmVzc2lvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaCguLi50aGlzLnByb2Nlc3Nvci5oYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhub2RlLCBwYXJ0Lm5hbWUsIHBhcnQuc3RyaW5ncywgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmVwYXJlSW5zdGFuY2Uobm9kZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfcHJlcGFyZUluc3RhbmNlKGZyYWdtZW50KTtcbiAgICAgICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1pbnN0YW5jZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYm91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBUaGUgcmV0dXJuIHR5cGUgb2YgYGh0bWxgLCB3aGljaCBob2xkcyBhIFRlbXBsYXRlIGFuZCB0aGUgdmFsdWVzIGZyb21cbiAqIGludGVycG9sYXRlZCBleHByZXNzaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmdzLCB2YWx1ZXMsIHR5cGUsIHByb2Nlc3Nvcikge1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBodG1sID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIC8vIFRoaXMgcmVwbGFjZSgpIGNhbGwgZG9lcyB0d28gdGhpbmdzOlxuICAgICAgICAgICAgLy8gMSkgQXBwZW5kcyBhIHN1ZmZpeCB0byBhbGwgYm91bmQgYXR0cmlidXRlIG5hbWVzIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbFxuICAgICAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIHBhcnNpbmcgdGhhdCBJRTExIGFuZCBFZGdlIGRvLCBsaWtlIGZvciBzdHlsZSBhbmRcbiAgICAgICAgICAgIC8vIG1hbnkgU1ZHIGF0dHJpYnV0ZXMuIFRoZSBUZW1wbGF0ZSBjbGFzcyBhbHNvIGFwcGVuZHMgdGhlIHNhbWUgc3VmZml4XG4gICAgICAgICAgICAvLyB3aGVuIGxvb2tpbmcgdXAgYXR0cmlidXRlcyB0byBjcmVhdCBQYXJ0cy5cbiAgICAgICAgICAgIC8vIDIpIEFkZHMgYW4gdW5xdW90ZWQtYXR0cmlidXRlLXNhZmUgbWFya2VyIGZvciB0aGUgZmlyc3QgZXhwcmVzc2lvbiBpblxuICAgICAgICAgICAgLy8gYW4gYXR0cmlidXRlLiBTdWJzZXF1ZW50IGF0dHJpYnV0ZSBleHByZXNzaW9ucyB3aWxsIHVzZSBub2RlIG1hcmtlcnMsXG4gICAgICAgICAgICAvLyBhbmQgdGhpcyBpcyBzYWZlIHNpbmNlIGF0dHJpYnV0ZXMgd2l0aCBtdWx0aXBsZSBleHByZXNzaW9ucyBhcmVcbiAgICAgICAgICAgIC8vIGd1YXJhbnRlZWQgdG8gYmUgcXVvdGVkLlxuICAgICAgICAgICAgbGV0IGFkZGVkTWFya2VyID0gZmFsc2U7XG4gICAgICAgICAgICBodG1sICs9IHMucmVwbGFjZShsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCAoX21hdGNoLCB3aGl0ZXNwYWNlLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZGVkTWFya2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2hpdGVzcGFjZSArIG5hbWUgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArIHZhbHVlICsgbWFya2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFkZGVkTWFya2VyKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBub2RlTWFya2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sICsgdGhpcy5zdHJpbmdzW2VuZEluZGV4XTtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNbCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBnZXRIVE1MKCkge1xuICAgICAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtcmVzdWx0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlcywgYW5kXG4gKiBhdHRyaWJ1dGVzIHdpdGggbWFya3VwLWxpa2UgdGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCBub2Rlc1RvUmVtb3ZlID0gW107XG4gICAgICAgIGNvbnN0IF9wcmVwYXJlVGVtcGxhdGUgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgICAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgICAgICAgLy8gbnVsbFxuICAgICAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX1RFWFQgKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIFRoZSBhY3R1YWwgcHJldmlvdXMgbm9kZSwgYWNjb3VudGluZyBmb3IgcmVtb3ZhbHM6IGlmIGEgbm9kZSBpcyByZW1vdmVkXG4gICAgICAgICAgICAvLyBpdCB3aWxsIG5ldmVyIGJlIHRoZSBwcmV2aW91c05vZGUuXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgICAgICAgICAgLy8gVXNlZCB0byBzZXQgcHJldmlvdXNOb2RlIGF0IHRoZSB0b3Agb2YgdGhlIGxvb3AuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGU7XG4gICAgICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjdXJyZW50Tm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OYW1lZE5vZGVNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSByZXR1cm5lZCBpbiBkb2N1bWVudCBvcmRlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhc3N1bWUgYSBjb3JyZXNwb25kYW5jZSBiZXR3ZWVuIHBhcnQgaW5kZXggYW5kIGF0dHJpYnV0ZSBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXS52YWx1ZS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzZWN0aW9uIGxlYWRpbmcgdXAgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSByZXN1bHQuc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzdHJpbmdGb3JQYXJ0KVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbCBib3VuZCBhdHRyaWJ1dGVzIGhhdmUgaGFkIGEgc3VmZml4IGFkZGVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxpbmcuIFRvIGxvb2sgdXAgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB3ZSBhbHNvIG5lZWQgdG8gYWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN1ZmZpeC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgYm91bmRBdHRyaWJ1dGVTdWZmaXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleCwgbmFtZSwgc3RyaW5ncyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmVwYXJlVGVtcGxhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSBub2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVWYWx1ZS5pbmRleE9mKG1hcmtlcikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBub2RlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKChzdHJpbmdzW2ldID09PSAnJykgPyBjcmVhdGVNYXJrZXIoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nc1tpXSksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogaW5kZXgrKyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWFya2VyKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nc1tsYXN0SW5kZXhdKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVmFsdWUgPT09IG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgbmV3IG1hcmtlciBub2RlIHRvIGJlIHRoZSBzdGFydE5vZGUgb2YgdGhlIFBhcnQgaWYgYW55IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICogcHJldmlvdXNTaWJsaW5nIGlzIGJlaW5nIHJlbW92ZWQgKHRodXMgaXQncyBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBgcHJldmlvdXNOb2RlYClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAqIHByZXZpb3VzU2libGluZyBpcyBub3QgYSBUZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBXZSBzaG91bGQgYmUgYWJsZSB0byB1c2UgdGhlIHByZXZpb3VzTm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVyZSBhcyB0aGUgbWFya2VyIG5vZGUgYW5kIHJlZHVjZSB0aGUgbnVtYmVyIG9mIGV4dHJhIG5vZGVzIHdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gYSB0ZW1wbGF0ZS4gU2VlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckxhYnMvbGl0LWh0bWwvaXNzdWVzLzE0N1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8IHByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNOb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6IGluZGV4KysgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcgYWRkIGEgbWFya2VyIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIHRvIGNoZWNrIGlmIHRoZSBuZXh0IG5vZGUgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCBub2RlIHdpbGwgaW5kdWNlIGEgbmV3IG1hcmtlciBpZiBzby5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBwcmV2aW91c05vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLm5vZGVWYWx1ZS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogLTEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF9wcmVwYXJlVGVtcGxhdGUoZWxlbWVudCk7XG4gICAgICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBpc1RlbXBsYXRlUGFydEFjdGl2ZSA9IChwYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcbi8vIEFsbG93cyBgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylgIHRvIGJlIHJlbmFtZWQgZm9yIGFcbi8vIHNtYWxsIG1hbnVhbCBzaXplLXNhdmluZ3MuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4vKipcbiAqIFRoaXMgcmVnZXggZXh0cmFjdHMgdGhlIGF0dHJpYnV0ZSBuYW1lIHByZWNlZGluZyBhbiBhdHRyaWJ1dGUtcG9zaXRpb25cbiAqIGV4cHJlc3Npb24uIEl0IGRvZXMgdGhpcyBieSBtYXRjaGluZyB0aGUgc3ludGF4IGFsbG93ZWQgZm9yIGF0dHJpYnV0ZXNcbiAqIGFnYWluc3QgdGhlIHN0cmluZyBsaXRlcmFsIGRpcmVjdGx5IHByZWNlZGluZyB0aGUgZXhwcmVzc2lvbiwgYXNzdW1pbmcgdGhhdFxuICogdGhlIGV4cHJlc3Npb24gaXMgaW4gYW4gYXR0cmlidXRlLXZhbHVlIHBvc2l0aW9uLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0wXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVyc1xuICpcbiAqIFwiIFxceDA5XFx4MGFcXHgwY1xceDBkXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9pbmZyYXN0cnVjdHVyZS5odG1sI3NwYWNlLWNoYXJhY3RlclxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID0gLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSwgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7IHJlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7IG5vQ2hhbmdlIH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydCB9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7IHBhcnRzLCByZW5kZXIgfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHsgdGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFNWR1RlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ3N2ZycsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXAiLCIvLyBSZWZsZWN0LmNvbnN0cnVjdG9yIHBvbHlmaWxsIGZvciBJRTExIHN1cHBvcnQgb2Ygc3RhbmRhcmQgd2ViIGNvbXBvbmVudHNcbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKCEhd2luZG93LlJlZmxlY3QpIHJldHVybjtcblxuICAgIHdpbmRvdy5SZWZsZWN0ID0ge1xuICAgICAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uICh0YXJnZXQsIGFyZ3MsIG5ld1RhcmdldCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSAobmV3IFdlYWtNYXAoKSkuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaGFuZGxlci5jb25zdHJ1Y3QoaGFuZGxlci50YXJnZXQsIGFyZ3MsIG5ld1RhcmdldCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0YXJnZXQgbXVzdCBiZSBhIGZ1bmN0aW9uOiBcIiArIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdUYXJnZXQgPT09IHVuZGVmaW5lZCB8fCBuZXdUYXJnZXQgPT09IHRhcmdldCkgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkodGFyZ2V0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld1RhcmdldCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwibmV3IHRhcmdldCBtdXN0IGJlIGEgZnVuY3Rpb246IFwiICsgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHZhciBwcm90byA9IG5ld1RhcmdldC5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gKE9iamVjdChwcm90bykgPT09IHByb3RvKSA/IE9iamVjdC5jcmVhdGUocHJvdG8pIDoge307XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChyZXN1bHQpID09PSByZXN1bHQgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpOyJdfQ==
