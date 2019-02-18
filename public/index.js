(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n\t\t\t\t#app-root .login-box { padding: 20px; background-color: white; width: 300px; }\n\t\t\t\t#app-root .login-box h2 { margin: 0px; font-weight: normal; }\n\t\t\t\t#app-root .login-box .login-inputs .input { display: block; width: 100%; }\n\t\t\t\t#app-root .login-box .login-buttons .cancel { background-color: red; color: white; }\n\t\t\t\t#app-root .login-box .login-buttons .login { background-color: green; color: white; float: right; }\n            </style>\n\n\t\t\t<div id="app-root">\n\t\t\t\t', '\t\n\t\t\t\t\n\t\t\t\t<paper-toast id="toast" color$="{{toastColor}}"></paper-toast>\n\n\t\t\t\t<lib-overlay id="login-overlay">\n\t\t\t\t\t<div class="login-box">\n\t\t\t\t\t\t<h2>Razilo Login</h2>\n\t\t\t\t\t\t<div class="login-inputs">\n\t\t\t\t\t\t\t<lib-control-input id="login-username" class="input" label="Email" type="text" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t\t<lib-control-input id="login-password" class="input" label="Password" type="password" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="login-buttons">\n\t\t\t\t\t\t\t<lib-control-button class="cancel" @click="', '">Cancel</lib-control-button>\n\t\t\t\t\t\t\t<lib-control-button class="login" @click="', '">Log In</lib-control-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</lib-overlay-notify>\n\t\t\t</div>\n        '], ['\n            <style>\n\t\t\t\t#app-root .login-box { padding: 20px; background-color: white; width: 300px; }\n\t\t\t\t#app-root .login-box h2 { margin: 0px; font-weight: normal; }\n\t\t\t\t#app-root .login-box .login-inputs .input { display: block; width: 100%; }\n\t\t\t\t#app-root .login-box .login-buttons .cancel { background-color: red; color: white; }\n\t\t\t\t#app-root .login-box .login-buttons .login { background-color: green; color: white; float: right; }\n            </style>\n\n\t\t\t<div id="app-root">\n\t\t\t\t', '\t\n\t\t\t\t\n\t\t\t\t<paper-toast id="toast" color$="{{toastColor}}"></paper-toast>\n\n\t\t\t\t<lib-overlay id="login-overlay">\n\t\t\t\t\t<div class="login-box">\n\t\t\t\t\t\t<h2>Razilo Login</h2>\n\t\t\t\t\t\t<div class="login-inputs">\n\t\t\t\t\t\t\t<lib-control-input id="login-username" class="input" label="Email" type="text" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t\t<lib-control-input id="login-password" class="input" label="Password" type="password" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="login-buttons">\n\t\t\t\t\t\t\t<lib-control-button class="cancel" @click="', '">Cancel</lib-control-button>\n\t\t\t\t\t\t\t<lib-control-button class="login" @click="', '">Log In</lib-control-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</lib-overlay-notify>\n\t\t\t</div>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\t<razilo-panel user="{{user}}" on-action="doAction"></razilo-panel>\n\t\t\t\t\t<razilo-dashboard current-page="{{currentPage}}"></razilo-dashboard>\n\t\t\t\t\t<razilo-profile-edit user="{{user}}"></razilo-profile-edit>\n\t\t\t\t\t<razilo-page-add></razilo-page-add>\n\t\t\t\t\t<razilo-page-copy current-page="{{currentPage}}"></razilo-page-copy>\n\t\t\t\t'], ['\n\t\t\t\t\t<razilo-panel user="{{user}}" on-action="doAction"></razilo-panel>\n\t\t\t\t\t<razilo-dashboard current-page="{{currentPage}}"></razilo-dashboard>\n\t\t\t\t\t<razilo-profile-edit user="{{user}}"></razilo-profile-edit>\n\t\t\t\t\t<razilo-page-add></razilo-page-add>\n\t\t\t\t\t<razilo-page-copy current-page="{{currentPage}}"></razilo-page-copy>\n\t\t\t\t']);

var _index = require('../../node_modules/custom-web-component/index.js');

var _libResourceRequest = require('../lib/resource/lib-resource-request.js');

var _libResourceRequest2 = _interopRequireDefault(_libResourceRequest);

var _libResourceStore = require('../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

require('../lib/overlay/lib-overlay.js');

require('../lib/control/lib-control-input.js');

require('../lib/control/lib-control-button.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

		_this._request = new _libResourceRequest2.default();
		_this._store = new _libResourceStore2.default();
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
			return (0, _index.html)(_templateObject, this.user ? (0, _index.html)(_templateObject2) : '', this.login.bind(this), this.login.bind(this), this.loginCancel.bind(this), this.login.bind(this));
		}
	}, {
		key: 'templateUpdated',
		value: function templateUpdated() {
			var _this2 = this;

			setTimeout(function () {
				_this2.dom.querySelector('#login-overlay').show();
				_this2.dom.querySelector('#notify-overlay').show();
			}, 1000);
		}
	}, {
		key: 'login',
		value: function login(ev) {
			console.log(ev);
		}
	}, {
		key: 'loginCancel',
		value: function loginCancel(ev) {
			this.dom.querySelector('#login-overlay').hide();
		}
	}]);

	return AppRoot;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-root', AppRoot);

},{"../../node_modules/custom-web-component/index.js":9,"../lib/control/lib-control-button.js":2,"../lib/control/lib-control-input.js":3,"../lib/overlay/lib-overlay.js":5,"../lib/resource/lib-resource-request.js":6,"../lib/resource/lib-resource-store.js":7}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\tbackground-color: inherit;\n\t\t\t\t\twidth: inherit;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tborder-radius: 50px;\n\t\t\t\t\theight: 32px;\n\t\t\t\t\tbox-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);\n\t\t\t\t\tborder: 1px solid rgba(0, 0, 0, 0.15);\n\t\t\t\t\topacity: 0.9;\n\t\t\t\t\tline-height: 32px;\n\t\t\t\t\tpadding: 0px 8px;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tcursor: default;\n\t\t\t\t}\n\n\t\t\t\t', ' { opacity: 1; }\n\t\t\t\t', ' { box-shadow: none; }\n\t\t\t\t', ' { opacity: 0.6; box-shadow: none; }\n\n\t\t\t\t#lib-control-button {\n\t\t\t\t\t-webkit-touch-callout: none;\n\t\t\t\t\t-webkit-user-select: none;\n\t\t\t\t\t-khtml-user-select: none;\n\t\t\t\t\t-moz-user-select: none;\n\t\t\t\t\t-ms-user-select: none;\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-button"><slot></slot></div>\n\t\t'], ['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\tbackground-color: inherit;\n\t\t\t\t\twidth: inherit;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tborder-radius: 50px;\n\t\t\t\t\theight: 32px;\n\t\t\t\t\tbox-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);\n\t\t\t\t\tborder: 1px solid rgba(0, 0, 0, 0.15);\n\t\t\t\t\topacity: 0.9;\n\t\t\t\t\tline-height: 32px;\n\t\t\t\t\tpadding: 0px 8px;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tcursor: default;\n\t\t\t\t}\n\n\t\t\t\t', ' { opacity: 1; }\n\t\t\t\t', ' { box-shadow: none; }\n\t\t\t\t', ' { opacity: 0.6; box-shadow: none; }\n\n\t\t\t\t#lib-control-button {\n\t\t\t\t\t-webkit-touch-callout: none;\n\t\t\t\t\t-webkit-user-select: none;\n\t\t\t\t\t-khtml-user-select: none;\n\t\t\t\t\t-moz-user-select: none;\n\t\t\t\t\t-ms-user-select: none;\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-button"><slot></slot></div>\n\t\t']);

var _index = require('../../../node_modules/custom-web-component/index.js');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name LibControlButton
 * @extends CustomHTMLElement
 * @description Component extention to set some hard styling on button to create a flat button
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 * 
 * @example
 * <lib-control-button>Button</lib-control-button>
 */
var LibControlButton = function (_CustomHTMLElement) {
	_inherits(LibControlButton, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibControlButton() {
		_classCallCheck(this, LibControlButton);

		return _possibleConstructorReturn(this, (LibControlButton.__proto__ || Object.getPrototypeOf(LibControlButton)).call(this));
	}

	_createClass(LibControlButton, [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this.host(':hover'), this.host(':active'), this.host('[disabled]'));
		}
	}, {
		key: 'attributeChanged',
		value: function attributeChanged(attribute, oldValue, newValue) {
			switch (attribute) {
				case 'disabled':
					this.style.pointerEvents = newValue !== null ? 'none' : 'auto';break;
			}
		}
	}], [{
		key: 'observedAttributes',
		get: function get() {
			return ['disabled'];
		}
	}]);

	return LibControlButton;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-control-button', LibControlButton);

},{"../../../node_modules/custom-web-component/index.js":9}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n                #lib-control-input { display: inline-block; width: 100%; height: inherit; min-height: 62px; }\n\t\t\t\t#lib-control-input .input-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }\n\t\t\t\t#lib-control-input label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }\n\t\t\t\t#lib-control-input input { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input textarea { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input [invalid] { border-color: red; }\n\t\t\t\t#lib-control-input .error { display: block; font-size: 10px; line-height: 12px; color: red; overflow: hidden; position: absolute; bottom: 0; left: 0; }\n\t\t\t\t#lib-control-input [invisible] { opacity: 0; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-input">\n\t\t\t\t<div class="input-container">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t', '\n\t\t\t\t\t<span class="error" ?invisible="', '">', '</span>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<style>\n                #lib-control-input { display: inline-block; width: 100%; height: inherit; min-height: 62px; }\n\t\t\t\t#lib-control-input .input-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }\n\t\t\t\t#lib-control-input label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }\n\t\t\t\t#lib-control-input input { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input textarea { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input [invalid] { border-color: red; }\n\t\t\t\t#lib-control-input .error { display: block; font-size: 10px; line-height: 12px; color: red; overflow: hidden; position: absolute; bottom: 0; left: 0; }\n\t\t\t\t#lib-control-input [invisible] { opacity: 0; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-input">\n\t\t\t\t<div class="input-container">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t', '\n\t\t\t\t\t<span class="error" ?invisible="', '">', '</span>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t<textarea id="', '" name="', '" ?invalid="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>', '</textarea>\n\t\t\t\t\t'], ['\n\t\t\t\t\t\t<textarea id="', '" name="', '" ?invalid="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>', '</textarea>\n\t\t\t\t\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t<input id="', '" name="', '" type="', '" ?invalid="', '"\n\t\t\t\t\t\t\t.value="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>\n\t\t\t\t\t'], ['\n\t\t\t\t\t\t<input id="', '" name="', '" type="', '" ?invalid="', '"\n\t\t\t\t\t\t\t.value="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>\n\t\t\t\t\t']);

var _index = require('../../../node_modules/custom-web-component/index.js');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name LibControlInput
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 * 
 * @example
 * <lib-control-input label="Hello" type="number" regex="^[a-z]+$" invalid-message="This is wrong" @input="${this.testt.bind(this)}"></lib-control-input>
 * <lib-control-input label="Hello" type="textarea" regex="^[a-z]+$" invalid-message="This is wrong" @input="${this.testt.bind(this)}"></lib-control-input>
 */
var LibControlInput = function (_CustomHTMLElement) {
	_inherits(LibControlInput, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibControlInput() {
		_classCallCheck(this, LibControlInput);

		var _this = _possibleConstructorReturn(this, (LibControlInput.__proto__ || Object.getPrototypeOf(LibControlInput)).call(this));

		_this.value;
		_this.invalid;
		_this.valTimeout;

		_this._label;
		_this._name;
		_this._type;
		_this._regex;
		_this._invalidMessage;
		_this._required;
		_this._validateOnLoad;
		return _this;
	}

	_createClass(LibControlInput, [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, !this._label, this._label, this._type === 'textarea' ? (0, _index.html)(_templateObject2, this._id, this._name, this.invalid, this._event.bind(this), this._event.bind(this), this._event.bind(this), this._event.bind(this), this.value === undefined ? '' : this.value) : (0, _index.html)(_templateObject3, this._id, this._name, this._type, this.invalid, this.value === undefined ? '' : this.value, this._event.bind(this), this._event.bind(this), this._event.bind(this), this._event.bind(this)), !this.invalid, this._invalidMessage ? this._invalidMessage : 'Invalid');
		}
	}, {
		key: 'connected',
		value: function connected() {
			this._label = this.hasAttribute('label') ? this.getAttribute('label') : '';
			this._name = this.hasAttribute('name') ? this.getAttribute('name') : '';
			this._type = this.hasAttribute('type') ? this.getAttribute('type') : '';
			this._regex = this.hasAttribute('regex') ? this.getAttribute('regex') : '';
			this._invalidMessage = this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : '';
			this._required = this.hasAttribute('required') ? true : false;
			this._validateOnLoad = this.hasAttribute('validate-on-load') ? true : false;

			if (this._validateOnLoad && (!this.value || this.value.length < 1)) this._validate(this.value);
		}
	}, {
		key: 'propertyChanged',
		value: function propertyChanged(property, oldValue, newValue) {
			if (!this.dom || oldValue === newValue) return;
			this.updateTemplate();
		}
	}, {
		key: 'attributeChanged',
		value: function attributeChanged(attribute, oldValue, newValue) {
			switch (attribute) {
				case 'label':
					this._label = newValue;break;
				case 'name':
					this._name = newValue;break;
				case 'type':
					this._type = newValue;break;
				case 'regex':
					this._regex = newValue;break;
				case 'invalid-message':
					this._invalidMessage = newValue;break;
				case 'required':
					this._required = newValue ? true : undefined;break;
				case 'validate-on-load':
					this._validateOnLoad = newValue ? true : undefined;break;
			}

			this.updateTemplate();
		}
	}, {
		key: '_event',
		value: function _event(ev) {
			var _this2 = this;

			if (ev.type == 'input') {
				this.value = ev.target.value;
				clearTimeout(this.valTimeout);
				this.valTimeout = setTimeout(function () {
					_this2._validate(_this2.value);
					_this2.updateTemplate();
				}, 500);
			}
			ev.stopPropagation();
			this.dispatchEvent(new CustomEvent(ev.type, { detail: ev }));
		}
	}, {
		key: '_validate',
		value: function _validate(value) {
			this.invalid = this._regex && !new RegExp(this._regex).test(value) ? true : false;
			this.invalid = this._required ? !value || value.length < 1 ? true : this.invalid : !value || value.length < 1 ? false : this.invalid;
		}
	}], [{
		key: 'observedProperties',
		get: function get() {
			return ['value', 'invalid'];
		}
	}, {
		key: 'observedAttributes',
		get: function get() {
			return ['label', 'name', 'type', 'regex', 'invalid-message'];
		}
	}]);

	return LibControlInput;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-control-input', LibControlInput);

},{"../../../node_modules/custom-web-component/index.js":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"/></svg>']),
    _templateObject2 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>']),
    _templateObject3 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"/></svg>'], ['<svg viewBox="1 1 22 22"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"/></svg>']),
    _templateObject4 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>']),
    _templateObject5 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>']),
    _templateObject6 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/></svg>']),
    _templateObject7 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>']),
    _templateObject8 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>']),
    _templateObject9 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"/></svg>']),
    _templateObject10 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>']),
    _templateObject11 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>']),
    _templateObject12 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>']),
    _templateObject13 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>']),
    _templateObject14 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>']),
    _templateObject15 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>']),
    _templateObject16 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"/></svg>']),
    _templateObject17 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/></svg>']),
    _templateObject18 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"/></svg>']),
    _templateObject19 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg>']),
    _templateObject20 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></svg>']),
    _templateObject21 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>']),
    _templateObject22 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></svg>']),
    _templateObject23 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>']),
    _templateObject24 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>']),
    _templateObject25 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 10l5 5 5-5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 10l5 5 5-5z"/></svg>']),
    _templateObject26 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"/></svg>']),
    _templateObject27 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 14l5-5 5 5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 14l5-5 5 5z"/></svg>']),
    _templateObject28 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>']),
    _templateObject29 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>']),
    _templateObject30 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></svg>']),
    _templateObject31 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>']),
    _templateObject32 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>']),
    _templateObject33 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/></svg>']),
    _templateObject34 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>']),
    _templateObject35 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"/></svg>']),
    _templateObject36 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"/></svg>']),
    _templateObject37 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>']),
    _templateObject38 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/></svg>']),
    _templateObject39 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>']),
    _templateObject40 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/></svg>']),
    _templateObject41 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>']),
    _templateObject42 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11,6H13V13H11V6M9,20A1,1 0 0,1 8,21H5A1,1 0 0,1 4,20V15L6,6H10V13A1,1 0 0,1 9,14V20M10,5H7V3H10V5M15,20V14A1,1 0 0,1 14,13V6H18L20,15V20A1,1 0 0,1 19,21H16A1,1 0 0,1 15,20M14,5V3H17V5H14Z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11,6H13V13H11V6M9,20A1,1 0 0,1 8,21H5A1,1 0 0,1 4,20V15L6,6H10V13A1,1 0 0,1 9,14V20M10,5H7V3H10V5M15,20V14A1,1 0 0,1 14,13V6H18L20,15V20A1,1 0 0,1 19,21H16A1,1 0 0,1 15,20M14,5V3H17V5H14Z"/></svg>']),
    _templateObject43 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/></svg>']),
    _templateObject44 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>']),
    _templateObject45 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>']),
    _templateObject46 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>']),
    _templateObject47 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>']),
    _templateObject48 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>']),
    _templateObject49 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>']),
    _templateObject50 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"/></svg>']),
    _templateObject51 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>']),
    _templateObject52 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>']),
    _templateObject53 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/></svg>']),
    _templateObject54 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/></svg>']),
    _templateObject55 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/></svg>']),
    _templateObject56 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>']),
    _templateObject57 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>']),
    _templateObject58 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>']),
    _templateObject59 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>']),
    _templateObject60 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>']),
    _templateObject61 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>']),
    _templateObject62 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"/></svg>']),
    _templateObject63 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>']),
    _templateObject64 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>']),
    _templateObject65 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"/></svg>']),
    _templateObject66 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"/></svg>']),
    _templateObject67 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>']),
    _templateObject68 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/></svg>']),
    _templateObject69 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/></svg>']),
    _templateObject70 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>']),
    _templateObject71 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/></svg>']),
    _templateObject72 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>']),
    _templateObject73 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>']),
    _templateObject74 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/></svg>']),
    _templateObject75 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/></svg>']),
    _templateObject76 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>']),
    _templateObject77 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>']),
    _templateObject78 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"/></svg>']),
    _templateObject79 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>']),
    _templateObject80 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>']),
    _templateObject81 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>']),
    _templateObject82 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>']),
    _templateObject83 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>']),
    _templateObject84 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"/></svg>']),
    _templateObject85 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>']),
    _templateObject86 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>']),
    _templateObject87 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>']),
    _templateObject88 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>']),
    _templateObject89 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"/></svg>']),
    _templateObject90 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"/></svg>']),
    _templateObject91 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/></svg>']),
    _templateObject92 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/></svg>']),
    _templateObject93 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>']),
    _templateObject94 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>']),
    _templateObject95 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/></svg>']),
    _templateObject96 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>']),
    _templateObject97 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"/></svg>']),
    _templateObject98 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>']),
    _templateObject99 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>']),
    _templateObject100 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>']),
    _templateObject101 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>']),
    _templateObject102 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>']),
    _templateObject103 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>']),
    _templateObject104 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>']),
    _templateObject105 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>']),
    _templateObject106 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>']),
    _templateObject107 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>']),
    _templateObject108 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>']),
    _templateObject109 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>']),
    _templateObject110 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>']),
    _templateObject111 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"/></svg>']),
    _templateObject112 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/></svg>']),
    _templateObject113 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/></svg>']),
    _templateObject114 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>']),
    _templateObject115 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"/></svg>']),
    _templateObject116 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"/></svg>']),
    _templateObject117 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"/></svg>']),
    _templateObject118 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/></svg>']),
    _templateObject119 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>']),
    _templateObject120 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>']),
    _templateObject121 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/></svg>']),
    _templateObject122 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/></svg>']),
    _templateObject123 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 8V4l8 8-8 8v-4H4V8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 8V4l8 8-8 8v-4H4V8z"/></svg>']),
    _templateObject124 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>']),
    _templateObject125 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>']),
    _templateObject126 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"/></svg>']),
    _templateObject127 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"/></svg>']),
    _templateObject128 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"/></svg>']),
    _templateObject129 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"/></svg>']),
    _templateObject130 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>']),
    _templateObject131 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>']),
    _templateObject132 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>']),
    _templateObject133 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>']),
    _templateObject134 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>']),
    _templateObject135 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>']),
    _templateObject136 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>']),
    _templateObject137 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></svg>']),
    _templateObject138 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></svg>']),
    _templateObject139 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"/></svg>']),
    _templateObject140 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>']),
    _templateObject141 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"/></svg>']),
    _templateObject142 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>']),
    _templateObject143 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>']),
    _templateObject144 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>']),
    _templateObject145 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>']),
    _templateObject146 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"/></svg>']),
    _templateObject147 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/></svg>']),
    _templateObject148 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/></svg>']),
    _templateObject149 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"/></svg>']),
    _templateObject150 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>']),
    _templateObject151 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/></svg>']),
    _templateObject152 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>']),
    _templateObject153 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>']),
    _templateObject154 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"/></svg>']),
    _templateObject155 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/></svg>']),
    _templateObject156 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>']),
    _templateObject157 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>']),
    _templateObject158 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>']),
    _templateObject159 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/></svg>']),
    _templateObject160 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/></svg>']),
    _templateObject161 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"/></svg>']),
    _templateObject162 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>']),
    _templateObject163 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>']),
    _templateObject164 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>']),
    _templateObject165 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>']),
    _templateObject166 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>']),
    _templateObject167 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>']),
    _templateObject168 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"/></svg>']),
    _templateObject169 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>']),
    _templateObject170 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"/></svg>']),
    _templateObject171 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/></svg>']),
    _templateObject172 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"/></svg>']),
    _templateObject173 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>']),
    _templateObject174 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>']),
    _templateObject175 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/></svg>']),
    _templateObject176 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"/></svg>']),
    _templateObject177 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/></svg>']),
    _templateObject178 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>']),
    _templateObject179 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"/></svg>']),
    _templateObject180 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/></svg>']),
    _templateObject181 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>']),
    _templateObject182 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>']),
    _templateObject183 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>']),
    _templateObject184 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/></svg>']),
    _templateObject185 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/></svg>']),
    _templateObject186 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"/></svg>']),
    _templateObject187 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>']),
    _templateObject188 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>'], ['<svg viewBox="1 1 22 22"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>']),
    _templateObject189 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></svg>']),
    _templateObject190 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/></svg>']),
    _templateObject191 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/></svg>']),
    _templateObject192 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"/></svg>']),
    _templateObject193 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>']),
    _templateObject194 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"/></svg>']),
    _templateObject195 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>']),
    _templateObject196 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>']),
    _templateObject197 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>']),
    _templateObject198 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>']),
    _templateObject199 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>']),
    _templateObject200 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>']),
    _templateObject201 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg>']),
    _templateObject202 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><circle cx="9" cy="9" r="4"/><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"/></svg>'], ['<svg viewBox="1 1 22 22"><circle cx="9" cy="9" r="4"/><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"/></svg>']),
    _templateObject203 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>']),
    _templateObject204 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>']),
    _templateObject205 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 13H5v-2h14v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 13H5v-2h14v2z"/></svg>']),
    _templateObject206 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>']),
    _templateObject207 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>']),
    _templateObject208 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/></svg>']),
    _templateObject209 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg>']),
    _templateObject210 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>']),
    _templateObject211 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>']),
    _templateObject212 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>']),
    _templateObject213 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>']),
    _templateObject214 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"/></svg>']),
    _templateObject215 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>']),
    _templateObject216 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"/></svg>']),
    _templateObject217 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"/></svg>']),
    _templateObject218 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>']),
    _templateObject219 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>']),
    _templateObject220 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/></svg>']),
    _templateObject221 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>']),
    _templateObject222 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>']),
    _templateObject223 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"/></svg>']),
    _templateObject224 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>']),
    _templateObject225 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"/></svg>']),
    _templateObject226 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"/></svg>']),
    _templateObject227 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"/></svg>']),
    _templateObject228 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/></svg>']),
    _templateObject229 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"/></svg>']),
    _templateObject230 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"/></svg>']),
    _templateObject231 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"/></svg>']),
    _templateObject232 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>']),
    _templateObject233 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></svg>']),
    _templateObject234 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"/></svg>']),
    _templateObject235 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"/></svg>']),
    _templateObject236 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"/></svg>']),
    _templateObject237 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"/></svg>']),
    _templateObject238 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/></svg>']),
    _templateObject239 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"/></svg>']),
    _templateObject240 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>']),
    _templateObject241 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>']),
    _templateObject242 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>']),
    _templateObject243 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>']),
    _templateObject244 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>']),
    _templateObject245 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"/></svg>']),
    _templateObject246 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"/></svg>']),
    _templateObject247 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"/></svg>']),
    _templateObject248 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>']),
    _templateObject249 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>']),
    _templateObject250 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>']),
    _templateObject251 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>']),
    _templateObject252 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/></svg>']),
    _templateObject253 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"/></svg>']),
    _templateObject254 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/></svg>']),
    _templateObject255 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></svg>']),
    _templateObject256 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>']),
    _templateObject257 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>']),
    _templateObject258 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"/></svg>']),
    _templateObject259 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"/></svg>']),
    _templateObject260 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/></svg>']),
    _templateObject261 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"/></svg>']),
    _templateObject262 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/></svg>']),
    _templateObject263 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>']),
    _templateObject264 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>']),
    _templateObject265 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>']),
    _templateObject266 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>']),
    _templateObject267 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/></svg>']),
    _templateObject268 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/></svg>']),
    _templateObject269 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>']),
    _templateObject270 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>']),
    _templateObject271 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"/></svg>']),
    _templateObject272 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/></svg>']),
    _templateObject273 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"/></svg>']),
    _templateObject274 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>']),
    _templateObject275 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg>']),
    _templateObject276 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M22 12l-4-4v3H3v2h15v3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M22 12l-4-4v3H3v2h15v3z"/></svg>']),
    _templateObject277 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>']),
    _templateObject278 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"/></svg>']),
    _templateObject279 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>']),
    _templateObject280 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"/></svg>']),
    _templateObject281 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>']),
    _templateObject282 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/></svg>']),
    _templateObject283 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>']),
    _templateObject284 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"/></svg>']),
    _templateObject285 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/></svg>']),
    _templateObject286 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/></svg>']),
    _templateObject287 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/></svg>']),
    _templateObject288 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"/></svg>']),
    _templateObject289 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg>']),
    _templateObject290 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>']),
    _templateObject291 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>']),
    _templateObject292 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"/></svg>']),
    _templateObject293 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/></svg>']),
    _templateObject294 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/></svg>']),
    _templateObject295 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>']),
    _templateObject296 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>']),
    _templateObject297 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>']),
    _templateObject298 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"/></svg>']),
    _templateObject299 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>']),
    _templateObject300 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"/></svg>']),
    _templateObject301 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg>']),
    _templateObject302 = _taggedTemplateLiteral(['<svg viewBox="1 1 22 22"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"/></svg>'], ['<svg viewBox="1 1 22 22"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"/></svg>']);

var _index = require('../../../node_modules/custom-web-component/index.js');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * @public @name 
 * @description Common material icon set for whole system to inherit from
 * To add more, go to https://material.io/tools/icons/?icon=tablet&style=baseline and then click on an icon, download, open, copy path and past as new entry
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 */

/**
 * @public @name LibIconMaterialDesign
 * @description SVG Icon Template Result Provider, generates an object containing SVG icons based on material design
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 *
 * @example JS
 * import LibIconMaterialDesign from '...';
 * @example HTML Template
 * <span>${LibIconMaterialDesign.addAlert}</span>;
 */
var LibIconMaterialDesign = {
	rotation3d: (0, _index.html)(_templateObject),
	accessibility: (0, _index.html)(_templateObject2),
	accessible: (0, _index.html)(_templateObject3),
	accountBalance: (0, _index.html)(_templateObject4),
	accountBalanceWallet: (0, _index.html)(_templateObject5),
	accountBox: (0, _index.html)(_templateObject6),
	accountCircle: (0, _index.html)(_templateObject7),
	add: (0, _index.html)(_templateObject8),
	addAlert: (0, _index.html)(_templateObject9),
	addBox: (0, _index.html)(_templateObject10),
	addCircle: (0, _index.html)(_templateObject11),
	addCircleOutline: (0, _index.html)(_templateObject12),
	addShoppingCart: (0, _index.html)(_templateObject13),
	alarm: (0, _index.html)(_templateObject14),
	alarmAdd: (0, _index.html)(_templateObject15),
	alarmOff: (0, _index.html)(_templateObject16),
	alarmOn: (0, _index.html)(_templateObject17),
	allOut: (0, _index.html)(_templateObject18),
	android: (0, _index.html)(_templateObject19),
	announcement: (0, _index.html)(_templateObject20),
	apps: (0, _index.html)(_templateObject21),
	archive: (0, _index.html)(_templateObject22),
	arrowBack: (0, _index.html)(_templateObject23),
	arrowDownward: (0, _index.html)(_templateObject24),
	arrowDropDown: (0, _index.html)(_templateObject25),
	arrowDropDownCircle: (0, _index.html)(_templateObject26),
	arrowDropUp: (0, _index.html)(_templateObject27),
	arrowForward: (0, _index.html)(_templateObject28),
	arrowUpward: (0, _index.html)(_templateObject29),
	aspectRatio: (0, _index.html)(_templateObject30),
	assessment: (0, _index.html)(_templateObject31),
	assignment: (0, _index.html)(_templateObject32),
	assignmentInd: (0, _index.html)(_templateObject33),
	assignmentLate: (0, _index.html)(_templateObject34),
	assignmentReturn: (0, _index.html)(_templateObject35),
	assignmentReturned: (0, _index.html)(_templateObject36),
	assignmentTurnedIn: (0, _index.html)(_templateObject37),
	attachment: (0, _index.html)(_templateObject38),
	autorenew: (0, _index.html)(_templateObject39),
	backspace: (0, _index.html)(_templateObject40),
	backup: (0, _index.html)(_templateObject41),
	binoculars: (0, _index.html)(_templateObject42),
	block: (0, _index.html)(_templateObject43),
	book: (0, _index.html)(_templateObject44),
	bookmark: (0, _index.html)(_templateObject45),
	bookmarkBorder: (0, _index.html)(_templateObject46),
	bugReport: (0, _index.html)(_templateObject47),
	build: (0, _index.html)(_templateObject48),
	cached: (0, _index.html)(_templateObject49),
	cameraEnhance: (0, _index.html)(_templateObject50),
	cancel: (0, _index.html)(_templateObject51),
	cardGiftcard: (0, _index.html)(_templateObject52),
	cardMembership: (0, _index.html)(_templateObject53),
	cardTravel: (0, _index.html)(_templateObject54),
	changeHistory: (0, _index.html)(_templateObject55),
	check: (0, _index.html)(_templateObject56),
	checkBox: (0, _index.html)(_templateObject57),
	checkBoxOutlineBlank: (0, _index.html)(_templateObject58),
	checkCircle: (0, _index.html)(_templateObject59),
	chevronLeft: (0, _index.html)(_templateObject60),
	chevronRight: (0, _index.html)(_templateObject61),
	chromeReaderMode: (0, _index.html)(_templateObject62),
	class: (0, _index.html)(_templateObject44),
	clear: (0, _index.html)(_templateObject63),
	close: (0, _index.html)(_templateObject63),
	cloud: (0, _index.html)(_templateObject64),
	cloudCircle: (0, _index.html)(_templateObject65),
	cloudDone: (0, _index.html)(_templateObject66),
	cloudDownload: (0, _index.html)(_templateObject67),
	cloudOff: (0, _index.html)(_templateObject68),
	cloudQueue: (0, _index.html)(_templateObject69),
	cloudUpload: (0, _index.html)(_templateObject41),
	code: (0, _index.html)(_templateObject70),
	compareArrows: (0, _index.html)(_templateObject71),
	computer: (0, _index.html)(_templateObject72),
	contentCopy: (0, _index.html)(_templateObject73),
	contentCut: (0, _index.html)(_templateObject74),
	contentPaste: (0, _index.html)(_templateObject75),
	copyright: (0, _index.html)(_templateObject76),
	create: (0, _index.html)(_templateObject77),
	createNewFolder: (0, _index.html)(_templateObject78),
	creditCard: (0, _index.html)(_templateObject79),
	dashboard: (0, _index.html)(_templateObject80),
	dateRange: (0, _index.html)(_templateObject81),
	delete: (0, _index.html)(_templateObject82),
	deleteForever: (0, _index.html)(_templateObject83),
	deleteSweep: (0, _index.html)(_templateObject84),
	description: (0, _index.html)(_templateObject85),
	dns: (0, _index.html)(_templateObject86),
	done: (0, _index.html)(_templateObject87),
	doneAll: (0, _index.html)(_templateObject88),
	donutLarge: (0, _index.html)(_templateObject89),
	donutSmall: (0, _index.html)(_templateObject90),
	drafts: (0, _index.html)(_templateObject91),
	eject: (0, _index.html)(_templateObject92),
	error: (0, _index.html)(_templateObject93),
	errorOutline: (0, _index.html)(_templateObject94),
	euroSymbol: (0, _index.html)(_templateObject95),
	event: (0, _index.html)(_templateObject96),
	eventSeat: (0, _index.html)(_templateObject97),
	exitToApp: (0, _index.html)(_templateObject98),
	expandLess: (0, _index.html)(_templateObject99),
	expandMore: (0, _index.html)(_templateObject100),
	explore: (0, _index.html)(_templateObject101),
	extension: (0, _index.html)(_templateObject102),
	face: (0, _index.html)(_templateObject103),
	favorite: (0, _index.html)(_templateObject104),
	favoriteBorder: (0, _index.html)(_templateObject105),
	feedback: (0, _index.html)(_templateObject106),
	fileDownload: (0, _index.html)(_templateObject107),
	fileUpload: (0, _index.html)(_templateObject108),
	filterList: (0, _index.html)(_templateObject109),
	findInPage: (0, _index.html)(_templateObject110),
	findReplace: (0, _index.html)(_templateObject111),
	fingerprint: (0, _index.html)(_templateObject112),
	firstPage: (0, _index.html)(_templateObject113),
	flag: (0, _index.html)(_templateObject114),
	flightLand: (0, _index.html)(_templateObject115),
	flightTakeoff: (0, _index.html)(_templateObject116),
	flipToBack: (0, _index.html)(_templateObject117),
	flipToFront: (0, _index.html)(_templateObject118),
	folder: (0, _index.html)(_templateObject119),
	folderOpen: (0, _index.html)(_templateObject120),
	folderShared: (0, _index.html)(_templateObject121),
	fontDownload: (0, _index.html)(_templateObject122),
	forward: (0, _index.html)(_templateObject123),
	fullscreen: (0, _index.html)(_templateObject124),
	fullscreenExit: (0, _index.html)(_templateObject125),
	gTranslate: (0, _index.html)(_templateObject126),
	gavel: (0, _index.html)(_templateObject127),
	gesture: (0, _index.html)(_templateObject128),
	getApp: (0, _index.html)(_templateObject107),
	gif: (0, _index.html)(_templateObject129),
	grade: (0, _index.html)(_templateObject130),
	groupWork: (0, _index.html)(_templateObject131),
	help: (0, _index.html)(_templateObject132),
	helpOutline: (0, _index.html)(_templateObject133),
	highlightOff: (0, _index.html)(_templateObject134),
	history: (0, _index.html)(_templateObject135),
	home: (0, _index.html)(_templateObject136),
	hourglassEmpty: (0, _index.html)(_templateObject137),
	hourglassFull: (0, _index.html)(_templateObject138),
	http: (0, _index.html)(_templateObject139),
	https: (0, _index.html)(_templateObject140),
	importantDevices: (0, _index.html)(_templateObject141),
	inbox: (0, _index.html)(_templateObject142),
	indeterminateCheckBox: (0, _index.html)(_templateObject143),
	info: (0, _index.html)(_templateObject144),
	infoOutline: (0, _index.html)(_templateObject145),
	input: (0, _index.html)(_templateObject146),
	invertColors: (0, _index.html)(_templateObject147),
	label: (0, _index.html)(_templateObject148),
	labelOutline: (0, _index.html)(_templateObject149),
	language: (0, _index.html)(_templateObject150),
	lastPage: (0, _index.html)(_templateObject151),
	launch: (0, _index.html)(_templateObject152),
	lightbulbOutline: (0, _index.html)(_templateObject153),
	lineStyle: (0, _index.html)(_templateObject154),
	lineWeight: (0, _index.html)(_templateObject155),
	link: (0, _index.html)(_templateObject156),
	list: (0, _index.html)(_templateObject157),
	lock: (0, _index.html)(_templateObject140),
	lockOpen: (0, _index.html)(_templateObject158),
	lockOutline: (0, _index.html)(_templateObject159),
	lowPriority: (0, _index.html)(_templateObject160),
	loyalty: (0, _index.html)(_templateObject161),
	mail: (0, _index.html)(_templateObject162),
	markunread: (0, _index.html)(_templateObject162),
	markunreadMailbox: (0, _index.html)(_templateObject163),
	menu: (0, _index.html)(_templateObject164),
	moreHoriz: (0, _index.html)(_templateObject165),
	moreVert: (0, _index.html)(_templateObject166),
	motorcycle: (0, _index.html)(_templateObject167),
	moveToInbox: (0, _index.html)(_templateObject168),
	next: (0, _index.html)(_templateObject169),
	nextWeek: (0, _index.html)(_templateObject170),
	noteAdd: (0, _index.html)(_templateObject171),
	offlinePin: (0, _index.html)(_templateObject172),
	opacity: (0, _index.html)(_templateObject173),
	openInBrowser: (0, _index.html)(_templateObject174),
	openInNew: (0, _index.html)(_templateObject152),
	openWith: (0, _index.html)(_templateObject175),
	pageview: (0, _index.html)(_templateObject176),
	panTool: (0, _index.html)(_templateObject177),
	payment: (0, _index.html)(_templateObject79),
	people: (0, _index.html)(_templateObject178),
	permCameraMic: (0, _index.html)(_templateObject179),
	permContactCalendar: (0, _index.html)(_templateObject180),
	permDataSetting: (0, _index.html)(_templateObject181),
	permDeviceInformation: (0, _index.html)(_templateObject182),
	permIdentity: (0, _index.html)(_templateObject183),
	permMedia: (0, _index.html)(_templateObject184),
	permPhoneMsg: (0, _index.html)(_templateObject185),
	permScanWifi: (0, _index.html)(_templateObject186),
	person: (0, _index.html)(_templateObject187),
	pets: (0, _index.html)(_templateObject188),
	pictureInPicture: (0, _index.html)(_templateObject189),
	pictureInPictureAlt: (0, _index.html)(_templateObject190),
	playForWork: (0, _index.html)(_templateObject191),
	polymer: (0, _index.html)(_templateObject192),
	powerSettingsNew: (0, _index.html)(_templateObject193),
	pregnantWoman: (0, _index.html)(_templateObject194),
	previous: (0, _index.html)(_templateObject195),
	print: (0, _index.html)(_templateObject196),
	queryBuilder: (0, _index.html)(_templateObject197),
	questionAnswer: (0, _index.html)(_templateObject198),
	radioButtonChecked: (0, _index.html)(_templateObject199),
	radioButtonUnchecked: (0, _index.html)(_templateObject200),
	receipt: (0, _index.html)(_templateObject201),
	recordVoiceOver: (0, _index.html)(_templateObject202),
	redeem: (0, _index.html)(_templateObject52),
	redo: (0, _index.html)(_templateObject203),
	refresh: (0, _index.html)(_templateObject204),
	remove: (0, _index.html)(_templateObject205),
	removeCircle: (0, _index.html)(_templateObject206),
	removeCircleOutline: (0, _index.html)(_templateObject207),
	removeShoppingCart: (0, _index.html)(_templateObject208),
	reorder: (0, _index.html)(_templateObject209),
	reply: (0, _index.html)(_templateObject210),
	replyAll: (0, _index.html)(_templateObject211),
	report: (0, _index.html)(_templateObject212),
	reportProblem: (0, _index.html)(_templateObject213),
	restore: (0, _index.html)(_templateObject135),
	restorePage: (0, _index.html)(_templateObject214),
	room: (0, _index.html)(_templateObject215),
	roundedCorner: (0, _index.html)(_templateObject216),
	rowing: (0, _index.html)(_templateObject217),
	save: (0, _index.html)(_templateObject218),
	schedule: (0, _index.html)(_templateObject197),
	search: (0, _index.html)(_templateObject219),
	selectAll: (0, _index.html)(_templateObject220),
	send: (0, _index.html)(_templateObject221),
	settings: (0, _index.html)(_templateObject222),
	settingsApplications: (0, _index.html)(_templateObject223),
	settingsBackupRestore: (0, _index.html)(_templateObject224),
	settingsBluetooth: (0, _index.html)(_templateObject225),
	settingsBrightness: (0, _index.html)(_templateObject226),
	settingsCell: (0, _index.html)(_templateObject227),
	settingsEthernet: (0, _index.html)(_templateObject228),
	settingsInputAntenna: (0, _index.html)(_templateObject229),
	settingsInputComponent: (0, _index.html)(_templateObject230),
	settingsInputComposite: (0, _index.html)(_templateObject230),
	settingsInputHdmi: (0, _index.html)(_templateObject231),
	settingsInputSvideo: (0, _index.html)(_templateObject232),
	settingsOverscan: (0, _index.html)(_templateObject233),
	settingsPhone: (0, _index.html)(_templateObject234),
	settingsPower: (0, _index.html)(_templateObject235),
	settingsRemote: (0, _index.html)(_templateObject236),
	settingsVoice: (0, _index.html)(_templateObject237),
	shop: (0, _index.html)(_templateObject238),
	shopTwo: (0, _index.html)(_templateObject239),
	shoppingBasket: (0, _index.html)(_templateObject240),
	shoppingCart: (0, _index.html)(_templateObject241),
	shuffle: (0, _index.html)(_templateObject242),
	smartphone: (0, _index.html)(_templateObject243),
	sort: (0, _index.html)(_templateObject244),
	speakerNotes: (0, _index.html)(_templateObject245),
	speakerNotesOff: (0, _index.html)(_templateObject246),
	spellcheck: (0, _index.html)(_templateObject247),
	star: (0, _index.html)(_templateObject130),
	starBorder: (0, _index.html)(_templateObject248),
	starHalf: (0, _index.html)(_templateObject249),
	stars: (0, _index.html)(_templateObject250),
	store: (0, _index.html)(_templateObject251),
	subdirectoryArrowLeft: (0, _index.html)(_templateObject252),
	subdirectoryArrowRight: (0, _index.html)(_templateObject253),
	subject: (0, _index.html)(_templateObject254),
	supervisorAccount: (0, _index.html)(_templateObject255),
	swapHoriz: (0, _index.html)(_templateObject256),
	swapVert: (0, _index.html)(_templateObject257),
	swapVerticalCircle: (0, _index.html)(_templateObject258),
	systemUpdateAlt: (0, _index.html)(_templateObject259),
	tab: (0, _index.html)(_templateObject260),
	tabUnselected: (0, _index.html)(_templateObject261),
	textFormat: (0, _index.html)(_templateObject262),
	theaters: (0, _index.html)(_templateObject263),
	thumbDown: (0, _index.html)(_templateObject264),
	thumbUp: (0, _index.html)(_templateObject265),
	thumbsUpDown: (0, _index.html)(_templateObject266),
	timeline: (0, _index.html)(_templateObject267),
	tablet: (0, _index.html)(_templateObject268),
	toc: (0, _index.html)(_templateObject269),
	today: (0, _index.html)(_templateObject270),
	toll: (0, _index.html)(_templateObject271),
	touchApp: (0, _index.html)(_templateObject272),
	trackChanges: (0, _index.html)(_templateObject273),
	translate: (0, _index.html)(_templateObject274),
	trendingDown: (0, _index.html)(_templateObject275),
	trendingFlat: (0, _index.html)(_templateObject276),
	trendingUp: (0, _index.html)(_templateObject277),
	turnedIn: (0, _index.html)(_templateObject45),
	turnedInNot: (0, _index.html)(_templateObject46),
	unarchive: (0, _index.html)(_templateObject278),
	undo: (0, _index.html)(_templateObject279),
	unfoldLess: (0, _index.html)(_templateObject280),
	unfoldMore: (0, _index.html)(_templateObject281),
	update: (0, _index.html)(_templateObject282),
	verifiedUser: (0, _index.html)(_templateObject283),
	viewAgenda: (0, _index.html)(_templateObject284),
	viewArray: (0, _index.html)(_templateObject285),
	viewCarousel: (0, _index.html)(_templateObject286),
	viewColumn: (0, _index.html)(_templateObject287),
	viewDay: (0, _index.html)(_templateObject288),
	viewHeadline: (0, _index.html)(_templateObject289),
	viewList: (0, _index.html)(_templateObject290),
	viewModule: (0, _index.html)(_templateObject291),
	viewQuilt: (0, _index.html)(_templateObject292),
	viewStream: (0, _index.html)(_templateObject293),
	viewWeek: (0, _index.html)(_templateObject294),
	visibility: (0, _index.html)(_templateObject295),
	visibilityOff: (0, _index.html)(_templateObject296),
	warning: (0, _index.html)(_templateObject213),
	watchLater: (0, _index.html)(_templateObject297),
	weekend: (0, _index.html)(_templateObject298),
	work: (0, _index.html)(_templateObject299),
	youtubeSearchedFor: (0, _index.html)(_templateObject300),
	zoomIn: (0, _index.html)(_templateObject301),
	zoomOut: (0, _index.html)(_templateObject302)
};

exports.default = LibIconMaterialDesign;

},{"../../../node_modules/custom-web-component/index.js":9}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t#lib-overlay {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-backdrop { \n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tz-index: 1002;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: black;\n\t\t\t\t\topacity: 0.2;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tz-index: 1003;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container .overlay-content {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbox-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-overlay">\n\t\t\t\t<div class="overlay-backdrop"></div>\n\t\t\t\t<div id="container" class="overlay-container" @click="', '">\n\t\t\t\t\t<div class="overlay-content"><slot></slot></div>\n\t\t\t\t</div>\n\t\t\t</div>\n        '], ['\n\t\t\t<style>\n\t\t\t\t#lib-overlay {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-backdrop { \n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tz-index: 1002;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: black;\n\t\t\t\t\topacity: 0.2;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tz-index: 1003;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container .overlay-content {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbox-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-overlay">\n\t\t\t\t<div class="overlay-backdrop"></div>\n\t\t\t\t<div id="container" class="overlay-container" @click="', '">\n\t\t\t\t\t<div class="overlay-content"><slot></slot></div>\n\t\t\t\t</div>\n\t\t\t</div>\n        ']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libIconMaterialDesign = require('../icon/lib-icon-material-design.js');

var _libIconMaterialDesign2 = _interopRequireDefault(_libIconMaterialDesign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name LibOverlaySaving
 * @extends CustomHTMLElement
 * @description Application Web Component, adds a saving icon that self hides after X seconds
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 */
var LibOverlay = function (_CustomHTMLElement) {
	_inherits(LibOverlay, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibOverlay() {
		_classCallCheck(this, LibOverlay);

		return _possibleConstructorReturn(this, (LibOverlay.__proto__ || Object.getPrototypeOf(LibOverlay)).call(this));
	}

	/**
  * @public @static @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(LibOverlay, [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.hide.bind(this));
		}
	}, {
		key: 'connected',
		value: function connected() {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}

		/**
      * @public @name show
   * @description Show the saving icon and self remove after X seconds
   */

	}, {
		key: 'toggle',
		value: function toggle() {
			if (this.style.display === 'block') this.hide();else this.show();
		}

		/**
      * @public @name show
   * @description Show the saving icon and self remove after X seconds
   */

	}, {
		key: 'show',
		value: function show() {
			var _this2 = this;

			if (this.style.display === 'block') return;

			this.dispatchEvent(new CustomEvent('show'));

			// add it
			this.dom.style.display = 'block';
			this.dom.style.zIndex = 1001;
			this.style.display = 'block';
			this.style.zIndex = 1001;

			// show it
			setTimeout(function () {
				_this2.dom.style.opacity = 1;
			}, 50);
		}

		/**
      * @public @name show
   * @description Show the saving icon and self remove after X seconds
   */

	}, {
		key: 'hide',
		value: function hide(ev) {
			var _this3 = this;

			if (this.style.display === 'none') return;

			// if we hide from event, make sure its a click to container
			if (!!ev && ev.target && ev.target.parentNode && ev.target.parentNode.id !== 'lib-overlay') return;

			this.dispatchEvent(new CustomEvent('hide'));

			// add it
			this.dom.style.opacity = 0;

			// show it
			setTimeout(function () {
				_this3.dom.style.display = 'none';
				_this3.dom.style.zIndex = -1;
				_this3.style.display = 'none';
				_this3.style.zIndex = -1;
			}, 250);
		}
	}]);

	return LibOverlay;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-overlay', LibOverlay);

},{"../../../node_modules/custom-web-component/index.js":9,"../icon/lib-icon-material-design.js":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @public @name LibResourceRequest
 * @description Common resource element without a template to offer async ajax requests with JWT resolution and auto refresh JWT
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 * @license unrestricted for use by ulsmith.net
 */
var LibResourceRequest = function () {

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibResourceRequest() {
		_classCallCheck(this, LibResourceRequest);

		this.scheme = null;
		this.baseUrl = null;
	}

	/**
  * @public @name ajax
  * @description Perform an ajax request
  * @param {String} type The request type such as GET, POST...
  * @param {String} url The url to make the request to
  * @param {Mixed} data Any payload data to go with the request
  * @param {Objcet} headers Any headers to send
  * @return {Promise} a promies that is resolved when the request is fullfilled
  */


	_createClass(LibResourceRequest, [{
		key: 'ajax',
		value: function ajax(type, url, data, headers) {
			var scope = this;
			type = type.toUpperCase();
			var promise = new Promise(function (resolve, reject) {
				var XHR = XMLHttpRequest || ActiveXObject;
				var xhrRequest = new XHR('MSXML2.XMLHTTP.3.0');
				xhrRequest.open(type, url, true);
				if (typeof headers !== 'undefined') {
					if (scope.getToken()) headers.Authorization = 'Bearer ' + scope.getToken();
					for (var key in headers) {
						xhrRequest.setRequestHeader(key, headers[key]);
					}
				}

				xhrRequest.onreadystatechange = function () {
					if (xhrRequest.readyState === 4) {
						// sort out response, sniff out json and convert
						var output = xhrRequest.responseText;
						if (typeof headers['Content-Type'] !== 'undefined' && headers['Content-Type'].indexOf('json') >= 0) {
							try {
								output = JSON.parse(xhrRequest.responseText);
							} catch (e) {}
						}

						// if authorization save to localStorage to resend back in
						if (xhrRequest.status < 400 && !!this.getResponseHeader('Authorization')) scope.setToken(this.getResponseHeader('Authorization'));

						// resolve or reject
						if (xhrRequest.status >= 200 && xhrRequest.status < 400) resolve({ data: output, response: xhrRequest });else reject({ data: output, response: xhrRequest });
					}
				};
				xhrRequest.send(data);
			});
			return promise;
		}

		/**
   * @public @name get
   * @description Perform a get request
   * @param {String} path The path to perform the request on (adds to scheme + baseUrl)
   * @param {Number} id Any id to append to the path for REST style requests
   * @return {Promise} A promised resolved on completion of request
   */

	}, {
		key: 'get',
		value: function get(path, id) {
			var _headers;

			var headers = (_headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }, _defineProperty(_headers, 'Cache-Control', 'no-store'), _defineProperty(_headers, 'Pragma', 'no-cache'), _defineProperty(_headers, 'Expires', '0'), _headers);
			return this.ajax('GET', this.scheme + this.baseUrl + (!!path ? '/' + path : '') + (typeof id !== 'undefined' && id !== null ? '/' + id : ''), null, headers);
		}

		/**
   * @public @name put
   * @description Perform a put request
   * @param {String} path The path to perform the request on (adds to scheme + baseUrl)
   * @param {Mixed} data Any data to send as the payload for REST style request
   * @return {Promise} A promised resolved on completion of request
   */

	}, {
		key: 'put',
		value: function put(path, data) {
			var _headers2;

			var headers = (_headers2 = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }, _defineProperty(_headers2, 'Cache-Control', 'no-store'), _defineProperty(_headers2, 'Pragma', 'no-cache'), _defineProperty(_headers2, 'Expires', '0'), _headers2);
			try {
				data = JSON.stringify(data);
			} catch (e) {}
			return this.ajax('PUT', this.scheme + this.baseUrl + (!!path ? '/' + path : ''), data, headers);
		}

		/**
   * @public @name patch
   * @description Perform a patch request
   * @param {String} path The path to perform the request on (adds to scheme + baseUrl)
   * @param {Mixed} data Any data to send as the payload for REST style request
   * @return {Promise} A promised resolved on completion of request
   */

	}, {
		key: 'patch',
		value: function patch(path, data) {
			var _headers3;

			var headers = (_headers3 = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }, _defineProperty(_headers3, 'Cache-Control', 'no-store'), _defineProperty(_headers3, 'Pragma', 'no-cache'), _defineProperty(_headers3, 'Expires', '0'), _headers3);
			try {
				data = JSON.stringify(data);
			} catch (e) {}
			return this.ajax('PATCH', this.scheme + this.baseUrl + '/' + path, data, headers);
		}

		/**
   * @public @name post
   * @description Perform a post request
   * @param {String} path The path to perform the request on (adds to scheme + baseUrl)
   * @param {Mixed} data Any data to send as the payload for REST style request
   * @return {Promise} A promised resolved on completion of request
   */

	}, {
		key: 'post',
		value: function post(path, data) {
			var _headers4;

			var headers = (_headers4 = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }, _defineProperty(_headers4, 'Cache-Control', 'no-store'), _defineProperty(_headers4, 'Pragma', 'no-cache'), _defineProperty(_headers4, 'Expires', '0'), _headers4);
			try {
				data = JSON.stringify(data);
			} catch (e) {}
			return this.ajax('POST', this.scheme + this.baseUrl + (!!path ? '/' + path : ''), data, headers);
		}

		/**
   * @public @name upload
   * @description Perform a upload request using post and form data by sending in file list from input[type=file]
   * @param {String} path The path to perform the request on (adds to scheme + baseUrl)
   * @param {Mixed} data Any data to send as the payload for REST style request
   * @return {Promise} A promised resolved on completion of request
   */

	}, {
		key: 'upload',
		value: function upload(path, files, length) {
			var _headers5;

			var formData = new FormData();
			if (files.length > 0) {
				for (var i = 0; i < files.length; i++) {
					formData.append('uploads[]', files[i], files[i].name);
				}
			}

			var headers = (_headers5 = { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }, _defineProperty(_headers5, 'Cache-Control', 'no-store'), _defineProperty(_headers5, 'Pragma', 'no-cache'), _defineProperty(_headers5, 'Expires', '0'), _headers5);
			return this.ajax('POST', this.scheme + this.baseUrl + (!!path ? '/' + path : ''), formData, headers);
		}

		/**
   * @public @name delete
   * @description Perform a delete request
   * @param {String} path The path to perform the request on (adds to scheme + baseUrl)
   * @param {Number} id Any id to append to the path for REST style requests
   * @return {Promise} A promised resolved on completion of request
   */

	}, {
		key: 'delete',
		value: function _delete(path, id) {
			var _headers6;

			var headers = (_headers6 = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }, _defineProperty(_headers6, 'Cache-Control', 'no-store'), _defineProperty(_headers6, 'Pragma', 'no-cache'), _defineProperty(_headers6, 'Expires', '0'), _headers6);
			return this.ajax('DELETE', this.scheme + this.baseUrl + '/' + path + (typeof id !== 'undefined' && id !== null ? '/' + id : ''), null, headers);
		}

		/**
   * @public @name getToken
   * @description Get current JWT token
   * @return {String} The JWT token stored in local storage
   */

	}, {
		key: 'getToken',
		value: function getToken() {
			if (localStorage['authorization'] !== undefined) return localStorage['authorization'];

			return undefined;
		}

		/**
   * @public @name setToken
   * @description Set the JWT token in local storage
   * @param {String} value The path to perform the request on (adds to scheme + baseUrl)
   * @return {String} The JWT token stored in local storage
   */

	}, {
		key: 'setToken',
		value: function setToken(value) {
			if (value === undefined) return false;

			return localStorage['authorization'] = value.replace('Bearer ', '').replace('Refresh ', '');
		}

		/**
   * @public @name deleteToken
   * @description Delete the JWT token from local storage
   */

	}, {
		key: 'deleteToken',
		value: function deleteToken() {
			localStorage['authorization'] = '';
		}

		/**
   * @public @name setBaseUrl
   * @description Set the base url and scheme
   * @param {String} value The path to set as baseUrl and scheme
   */

	}, {
		key: 'setBaseUrl',
		value: function setBaseUrl(value) {
			if (value === undefined || value.length == 0) {
				this.baseUrl = window.location.host;
				this.scheme = 'http://';
			} else if (value.indexOf('https://') == 0) {
				if (value.charAt(value.length - 1) === '/') value = value.substring(0, value.length - 2);
				this.baseUrl = value.replace('https://', '');
				this.scheme = 'https://';
			} else if (value.indexOf('http://') == 0) {
				if (value.charAt(value.length - 1) === '/') value = value.substring(0, value.length - 2);
				this.baseUrl = value.replace('http://', '');
				this.scheme = 'http://';
			} else {
				if (value.charAt(value.length - 1) === '/') value = value.substring(0, value.length - 2);
				this.baseUrl = value;
				this.scheme = 'http://';
			}
		}
	}]);

	return LibResourceRequest;
}();

exports.default = LibResourceRequest;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @public @name LibResourceStore
 * @description Common resource element without a template to resolve conditions on modules
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 * @license unrestricted for use by ulsmith.net
 */
var LibResourceStore = function () {

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibResourceStore() {
		_classCallCheck(this, LibResourceStore);

		this.baseName = 'accro';
	}

	/**
  * @public @name getItem
  * @description Get an thing from local storage, data can be stored as objects with a key and have child objects, you can retrieve them as such too
  * @param {String} key The key for the item to get, can be dot notated to get all children of parent
  * @return {Object} The data object to get
  */


	_createClass(LibResourceStore, [{
		key: 'getItem',
		value: function getItem(key) {
			// blank key
			if (!key || localStorage.length < 1) return undefined;

			// full key exists
			if (localStorage[this.baseName + '.store.' + key] !== undefined) return JSON.parse(localStorage[this.baseName + '.store.' + key]);

			// find all values from this key onwards
			var obj = {};
			for (var name in localStorage) {
				if (name.indexOf(this.baseName + '.store.' + key) !== 0) continue;

				// build up obj
				var temp = void 0,
				    parts = void 0,
				    part = void 0;
				temp = obj;
				parts = name.substring((this.baseName + '.store.' + key).length + 1, name.length).split('.');
				while (parts.length) {
					part = parts.shift();
					if (!temp[part]) temp[part] = {};
					if (parts.length === 0) temp[part] = JSON.parse(localStorage[name]);
					temp = temp[part];
				}
			}

			return Object.keys(obj).length > 0 ? obj : undefined;
		}

		/**
   * @public @name setItem
   * @description Set a value on local storage, you can save pretty much anything and you can save things as an object with child objects
   * @param {String} key The key for the item to get, can be dot notated to get all children of parent
   * @param {Mixed} value the value to store
   * @return {Boolean} Was it successfull or not in sotring
   */

	}, {
		key: 'setItem',
		value: function setItem(key, value) {
			// blank key or value
			if (!key || typeof key !== 'string' || key.charAt(key.length - 1) == '.' || value === undefined) return false;

			// clear out keys and set values
			this.deleteItem(key);
			if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
				for (var name in value) {
					this.setItem(key + '.' + name, value[name]);
				}
			} else {
				// this.deleteItem(key)
				localStorage[this.baseName + '.store.' + key] = JSON.stringify(value);

				// clean up parents if we added or changed a child as parents are objects and shouldn't be present anyway
				var parts = key.split('.');
				var part = '';
				while (parts.length > 1) {
					part += '.' + parts.shift();
					localStorage.removeItem(this.baseName + '.store' + part);
				}
			}

			return true;
		}

		/**
   * @public @name deleteItem
   * @description Delete a value from local storage, you can delete single items or item and children if they have any
   * @param {String} key The key for the item to get, can be dot notated to get all children of parent
   * @return Array Web component api onbservations
   */

	}, {
		key: 'deleteItem',
		value: function deleteItem(key) {
			// blank key or value
			var result = false;
			if (!key || typeof key !== 'string' || key.charAt(key.length - 1) == '.') return result;

			// remove value
			if (localStorage[this.baseName + '.store.' + key]) result = localStorage.removeItem(this.baseName + '.store.' + key);

			// remove children
			for (var name in localStorage) {
				if (name.indexOf(this.baseName + '.store.' + key + '.') !== 0) continue;
				result = localStorage.removeItem(name);
			}

			return result;
		}
	}]);

	return LibResourceStore;
}();

// bootstrap the class as a new web component


exports.default = LibResourceStore;
window.customElements.define('lib-resource-store', LibResourceStore);

},{}],8:[function(require,module,exports){
'use strict';

require('./node_modules/reflect-constructor/reflect-constructor.js');

require('./cwc/app/app-root.js');

},{"./cwc/app/app-root.js":1,"./node_modules/reflect-constructor/reflect-constructor.js":23}],9:[function(require,module,exports){
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

},{"../lit-html/lit-html.js":22,"./src/CustomHTMLElement.js":10}],10:[function(require,module,exports){
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
	}, {
		key: 'host',
		value: function host(options) {
			return !window.ShadyCSS ? ':host' + (options ? '(' + options + ')' : '') : this.localName + (options ? '' + options : '');
		}
	}]);

	return CustomHTMLElement;
}(_CustomElement);

exports.default = CustomHTMLElement;

},{"./CustomWebComponent.js":11}],11:[function(require,module,exports){
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

},{"../../lit-html/lit-html.js":22}],12:[function(require,module,exports){
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


},{"./parts.js":16}],13:[function(require,module,exports){
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


},{}],14:[function(require,module,exports){
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


},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = exports.noChange = {};


},{}],16:[function(require,module,exports){
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


},{"./directive.js":13,"./dom.js":14,"./part.js":15,"./template-instance.js":19,"./template-result.js":20,"./template.js":21}],17:[function(require,module,exports){
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


},{"./dom.js":14,"./parts.js":16,"./template-factory.js":18}],18:[function(require,module,exports){
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


},{"./template.js":21}],19:[function(require,module,exports){
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


},{"./dom.js":14,"./template.js":21}],20:[function(require,module,exports){
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


},{"./dom.js":14,"./template.js":21}],21:[function(require,module,exports){
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


},{}],22:[function(require,module,exports){
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


},{"./lib/default-template-processor.js":12,"./lib/directive.js":13,"./lib/dom.js":14,"./lib/part.js":15,"./lib/parts.js":16,"./lib/render.js":17,"./lib/template-factory.js":18,"./lib/template-instance.js":19,"./lib/template-result.js":20,"./lib/template.js":21}],23:[function(require,module,exports){
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

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY3djL2FwcC9hcHAtcm9vdC5qcyIsInB1YmxpYy9jd2MvbGliL2NvbnRyb2wvbGliLWNvbnRyb2wtYnV0dG9uLmpzIiwicHVibGljL2N3Yy9saWIvY29udHJvbC9saWItY29udHJvbC1pbnB1dC5qcyIsInB1YmxpYy9jd2MvbGliL2ljb24vbGliLWljb24tbWF0ZXJpYWwtZGVzaWduLmpzIiwicHVibGljL2N3Yy9saWIvb3ZlcmxheS9saWItb3ZlcmxheS5qcyIsInB1YmxpYy9jd2MvbGliL3Jlc291cmNlL2xpYi1yZXNvdXJjZS1yZXF1ZXN0LmpzIiwicHVibGljL2N3Yy9saWIvcmVzb3VyY2UvbGliLXJlc291cmNlLXN0b3JlLmpzIiwicHVibGljL2luZGV4Lm1qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvY3VzdG9tLXdlYi1jb21wb25lbnQvaW5kZXguanMiLCJwdWJsaWMvbm9kZV9tb2R1bGVzL2N1c3RvbS13ZWItY29tcG9uZW50L3NyYy9DdXN0b21IVE1MRWxlbWVudC5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvY3VzdG9tLXdlYi1jb21wb25lbnQvc3JjL0N1c3RvbVdlYkNvbXBvbmVudC5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZGlyZWN0aXZlLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZG9tLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcGFydC5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnRzLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcmVuZGVyLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyIsInB1YmxpYy9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtcmVzdWx0LmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUuanMiLCJwdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzIiwicHVibGljL25vZGVfbW9kdWxlcy9yZWZsZWN0LWNvbnN0cnVjdG9yL3JlZmxlY3QtY29uc3RydWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9NLE87OztBQUVMOzs7O0FBSUEsb0JBQWM7QUFBQTs7QUFBQTs7QUFFYixVQUFRLEdBQVIsQ0FBWSxnQkFBWjs7QUFFQSxRQUFLLFFBQUwsR0FBZ0IsSUFBSSw0QkFBSixFQUFoQjtBQUNBLFFBQUssTUFBTCxHQUFjLElBQUksMEJBQUosRUFBZDtBQUxhO0FBTWI7O0FBRUQ7Ozs7Ozs7Ozs2QkFLYztBQUNQLGNBQU8sV0FBUCxtQkFVRixLQUFLLElBQUwsT0FBWSxXQUFaLHNCQU1FLEVBaEJBLEVBd0J3RixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBeEJ4RixFQXlCK0YsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQixDQXpCL0YsRUE0QjRDLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQTVCNUMsRUE2QjJDLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0E3QjNDO0FBbUNOOzs7b0NBRWlCO0FBQUE7O0FBQ2pCLGNBQVcsWUFBTTtBQUNoQixXQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLGdCQUF2QixFQUF5QyxJQUF6QztBQUNBLFdBQUssR0FBTCxD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LFNBQVMsU0FBVCxDQUFtQixLQUFuQixDQUF5QixJQUF6QixDQUE4QixNQUE5QixFQUFzQyxRQUF0QyxFQUFnRCxJQUFoRCxDQUFiOztBQUVBLHVCQUFPLE9BQU8sTUFBUCxNQUFtQixNQUFuQixHQUE0QixNQUE1QixHQUFxQyxRQUE1QztBQUNIO0FBQ0o7QUFqQlksS0FBakI7QUFtQkgsQ0F4QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCwgaHRtbCB9IGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9jdXN0b20td2ViLWNvbXBvbmVudC9pbmRleC5qcyc7XG5pbXBvcnQgTGliUmVzb3VyY2VSZXF1ZXN0IGZyb20gJy4uL2xpYi9yZXNvdXJjZS9saWItcmVzb3VyY2UtcmVxdWVzdC5qcyc7XG5pbXBvcnQgTGliUmVzb3VyY2VTdG9yZSBmcm9tICcuLi9saWIvcmVzb3VyY2UvbGliLXJlc291cmNlLXN0b3JlLmpzJztcbmltcG9ydCAnLi4vbGliL292ZXJsYXkvbGliLW92ZXJsYXkuanMnO1xuaW1wb3J0ICcuLi9saWIvY29udHJvbC9saWItY29udHJvbC1pbnB1dC5qcyc7XG5pbXBvcnQgJy4uL2xpYi9jb250cm9sL2xpYi1jb250cm9sLWJ1dHRvbi5qcyc7XG5cbi8qKlxuICogQHB1YmxpYyBAbmFtZSBBcHBNYWluXG4gKiBAZXh0ZW5kcyBDdXN0b21IVE1MRWxlbWVudFxuICogQGRlc2NyaXB0aW9uIEFwcGxpY2F0aW9uIFdlYiBDb21wb25lbnQsIG1haW4gYXBwbGljYXRpb24gZ2F0ZXdheSwgdGhlIHJvb3Qgd2ViIGNvbXBvbmVudCB0aGF0IHN0YXJ0cyB0aGUgYXBwbGljYXRpb25cbiAqIEBhdXRob3IgUGF1bCBTbWl0aCA8cGF1bC5zbWl0aEB1bHNtaXRoLm5ldD5cbiAqIEBjb3B5cmlnaHQgMjAxOSBQYXVsIFNtaXRoICh1bHNtaXRoLm5ldClcbiAqL1xuY2xhc3MgQXBwUm9vdCBleHRlbmRzIEN1c3RvbUhUTUxFbGVtZW50IHtcblxuXHQvKipcbiAgICAgKiBAcHVibGljIEBjb25zdHJ1Y3RvciBAbmFtZSBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzY3JpcHRpb24gUHJvY2VzcyBjYWxsZWQgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCAoYnV0IG5vdCByZWFkeSBvciBpbiBET00sIG11c3QgY2FsbCBzdXBlcigpIGZpcnN0KVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zb2xlLmxvZygnUG93ZXJlZCBieSBDV0MnKTtcblxuXHRcdHRoaXMuX3JlcXVlc3QgPSBuZXcgTGliUmVzb3VyY2VSZXF1ZXN0KCk7XG5cdFx0dGhpcy5fc3RvcmUgPSBuZXcgTGliUmVzb3VyY2VTdG9yZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWMgQG5hbWUgdGVtcGxhdGVcblx0ICogQGRlc2NyaXB0aW9uIFRlbXBsYXRlIGZ1bmN0aW9uIHRvIHJldHVybiB3ZWIgY29tcG9uZW50IFVJXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gSFRNTCB0ZW1wbGF0ZSBibG9ja1xuXHQgKi9cbiAgICB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG5cdFx0XHRcdCNhcHAtcm9vdCAubG9naW4tYm94IHsgcGFkZGluZzogMjBweDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IHdpZHRoOiAzMDBweDsgfVxuXHRcdFx0XHQjYXBwLXJvb3QgLmxvZ2luLWJveCBoMiB7IG1hcmdpbjogMHB4OyBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cdFx0XHRcdCNhcHAtcm9vdCAubG9naW4tYm94IC5sb2dpbi1pbnB1dHMgLmlucHV0IHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyB9XG5cdFx0XHRcdCNhcHAtcm9vdCAubG9naW4tYm94IC5sb2dpbi1idXR0b25zIC5jYW5jZWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IGNvbG9yOiB3aGl0ZTsgfVxuXHRcdFx0XHQjYXBwLXJvb3QgLmxvZ2luLWJveCAubG9naW4tYnV0dG9ucyAubG9naW4geyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgY29sb3I6IHdoaXRlOyBmbG9hdDogcmlnaHQ7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cblx0XHRcdDxkaXYgaWQ9XCJhcHAtcm9vdFwiPlxuXHRcdFx0XHQke3RoaXMudXNlciA/IGh0bWxgXG5cdFx0XHRcdFx0PHJhemlsby1wYW5lbCB1c2VyPVwie3t1c2VyfX1cIiBvbi1hY3Rpb249XCJkb0FjdGlvblwiPjwvcmF6aWxvLXBhbmVsPlxuXHRcdFx0XHRcdDxyYXppbG8tZGFzaGJvYXJkIGN1cnJlbnQtcGFnZT1cInt7Y3VycmVudFBhZ2V9fVwiPjwvcmF6aWxvLWRhc2hib2FyZD5cblx0XHRcdFx0XHQ8cmF6aWxvLXByb2ZpbGUtZWRpdCB1c2VyPVwie3t1c2VyfX1cIj48L3Jhemlsby1wcm9maWxlLWVkaXQ+XG5cdFx0XHRcdFx0PHJhemlsby1wYWdlLWFkZD48L3Jhemlsby1wYWdlLWFkZD5cblx0XHRcdFx0XHQ8cmF6aWxvLXBhZ2UtY29weSBjdXJyZW50LXBhZ2U9XCJ7e2N1cnJlbnRQYWdlfX1cIj48L3Jhemlsby1wYWdlLWNvcHk+XG5cdFx0XHRcdGAgOiAnJ31cdFxuXHRcdFx0XHRcblx0XHRcdFx0PHBhcGVyLXRvYXN0IGlkPVwidG9hc3RcIiBjb2xvciQ9XCJ7e3RvYXN0Q29sb3J9fVwiPjwvcGFwZXItdG9hc3Q+XG5cblx0XHRcdFx0PGxpYi1vdmVybGF5IGlkPVwibG9naW4tb3ZlcmxheVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsb2dpbi1ib3hcIj5cblx0XHRcdFx0XHRcdDxoMj5SYXppbG8gTG9naW48L2gyPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxvZ2luLWlucHV0c1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGliLWNvbnRyb2wtaW5wdXQgaWQ9XCJsb2dpbi11c2VybmFtZVwiIGNsYXNzPVwiaW5wdXRcIiBsYWJlbD1cIkVtYWlsXCIgdHlwZT1cInRleHRcIiBAa2V5dXA9XCIke3RoaXMubG9naW4uYmluZCh0aGlzKX1cIj48L2xpYi1jb250cm9sLWlucHV0PlxuXHRcdFx0XHRcdFx0XHQ8bGliLWNvbnRyb2wtaW5wdXQgaWQ9XCJsb2dpbi1wYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIiBsYWJlbD1cIlBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgQGtleXVwPVwiJHt0aGlzLmxvZ2luLmJpbmQodGhpcyl9XCI+PC9saWItY29udHJvbC1pbnB1dD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxvZ2luLWJ1dHRvbnNcIj5cblx0XHRcdFx0XHRcdFx0PGxpYi1jb250cm9sLWJ1dHRvbiBjbGFzcz1cImNhbmNlbFwiIEBjbGljaz1cIiR7dGhpcy5sb2dpbkNhbmNlbC5iaW5kKHRoaXMpfVwiPkNhbmNlbDwvbGliLWNvbnRyb2wtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8bGliLWNvbnRyb2wtYnV0dG9uIGNsYXNzPVwibG9naW5cIiBAY2xpY2s9XCIke3RoaXMubG9naW4uYmluZCh0aGlzKX1cIj5Mb2cgSW48L2xpYi1jb250cm9sLWJ1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2xpYi1vdmVybGF5LW5vdGlmeT5cblx0XHRcdDwvZGl2PlxuICAgICAgICBgO1xuXHR9XG5cblx0dGVtcGxhdGVVcGRhdGVkKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignI2xvZ2luLW92ZXJsYXknKS5zaG93KCk7XG5cdFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcjbm90aWZ5LW92ZXJsYXknKS5zaG93KCk7XG5cdFx0fSwgMTAwMCk7XG5cdH1cblxuXHRsb2dpbihldikge1xuXHRcdGNvbnNvbGUubG9nKGV2KTtcblx0fVxuXHRcblx0bG9naW5DYW5jZWwoZXYpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcjbG9naW4tb3ZlcmxheScpLmhpZGUoKTtcblx0fVxufVxuXG4vLyBib290c3RyYXAgdGhlIGNsYXNzIGFzIGEgbmV3IHdlYiBjb21wb25lbnRcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXJvb3QnLCBBcHBSb290KTsiLCJpbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCwgaHRtbCB9IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdXN0b20td2ViLWNvbXBvbmVudC9pbmRleC5qcyc7XG5cbi8qKlxuICogQHB1YmxpYyBAbmFtZSBMaWJDb250cm9sQnV0dG9uXG4gKiBAZXh0ZW5kcyBDdXN0b21IVE1MRWxlbWVudFxuICogQGRlc2NyaXB0aW9uIENvbXBvbmVudCBleHRlbnRpb24gdG8gc2V0IHNvbWUgaGFyZCBzdHlsaW5nIG9uIGJ1dHRvbiB0byBjcmVhdGUgYSBmbGF0IGJ1dHRvblxuICogQGF1dGhvciBQYXVsIFNtaXRoIDxwYXVsLnNtaXRoQHVsc21pdGgubmV0PlxuICogQGNvcHlyaWdodCAyMDE4IHVsc21pdGgubmV0ICh1bHNtaXRoLm5ldClcbiAqIFxuICogQGV4YW1wbGVcbiAqIDxsaWItY29udHJvbC1idXR0b24+QnV0dG9uPC9saWItY29udHJvbC1idXR0b24+XG4gKi9cbmNsYXNzIExpYkNvbnRyb2xCdXR0b24gZXh0ZW5kcyBDdXN0b21IVE1MRWxlbWVudCB7XG5cblx0LyoqXG4gICAgICogQHB1YmxpYyBAY29uc3RydWN0b3IgQG5hbWUgY29uc3RydWN0b3Jcblx0ICogQGRlc2NyaXB0aW9uIFByb2Nlc3MgY2FsbGVkIGZ1bmN0aW9uIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyBpbnN0YW50aWF0ZWQgKGJ1dCBub3QgcmVhZHkgb3IgaW4gRE9NLCBtdXN0IGNhbGwgc3VwZXIoKSBmaXJzdClcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHR0ZW1wbGF0ZSgpIHtcblx0XHRyZXR1cm4gaHRtbGBcblx0XHRcdDxzdHlsZT5cblx0XHRcdFx0JHt0aGlzLmhvc3QoKX0ge1xuXHRcdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdFx0d2lkdGg6IGluaGVyaXQ7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAzMnB4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdFx0XHRcdFx0b3BhY2l0eTogMC45O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweCA4cHg7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQke3RoaXMuaG9zdChgOmhvdmVyYCl9IHsgb3BhY2l0eTogMTsgfVxuXHRcdFx0XHQke3RoaXMuaG9zdChgOmFjdGl2ZWApfSB7IGJveC1zaGFkb3c6IG5vbmU7IH1cblx0XHRcdFx0JHt0aGlzLmhvc3QoYFtkaXNhYmxlZF1gKX0geyBvcGFjaXR5OiAwLjY7IGJveC1zaGFkb3c6IG5vbmU7IH1cblxuXHRcdFx0XHQjbGliLWNvbnRyb2wtYnV0dG9uIHtcblx0XHRcdFx0XHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG5cdFx0XHRcdFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdDwvc3R5bGU+XG5cblx0XHRcdDxkaXYgaWQ9XCJsaWItY29udHJvbC1idXR0b25cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG5cdFx0YDtcblx0fVxuXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkgeyByZXR1cm4gWydkaXNhYmxlZCddIH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkKGF0dHJpYnV0ZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0c3dpdGNoIChhdHRyaWJ1dGUpIHtcblx0XHRcdGNhc2UgJ2Rpc2FibGVkJzogdGhpcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gbmV3VmFsdWUgIT09IG51bGwgPyAnbm9uZScgOiAnYXV0byc7IGJyZWFrO1xuXHRcdH1cblx0fVxufVxuXG4vLyBib290c3RyYXAgdGhlIGNsYXNzIGFzIGEgbmV3IHdlYiBjb21wb25lbnRcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGliLWNvbnRyb2wtYnV0dG9uJywgTGliQ29udHJvbEJ1dHRvbik7XG4iLCJpbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCwgaHRtbCB9IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdXN0b20td2ViLWNvbXBvbmVudC9pbmRleC5qcyc7XG5cbi8qKlxuICogQHB1YmxpYyBAbmFtZSBMaWJDb250cm9sSW5wdXRcbiAqIEBleHRlbmRzIEN1c3RvbUhUTUxFbGVtZW50XG4gKiBAZGVzY3JpcHRpb24gQ29tcG9uZW50IG1vZHVsZSBkcmF3ZXIgc2V0dGluZ3MgZm9yIGFkZGluZyBlbGVtZW50IGF0dHJpYnV0ZXMgdG8gY29tcG9uZW50IG1vZHVsZXNcbiAqIEBhdXRob3IgUGF1bCBTbWl0aCA8cGF1bC5zbWl0aEB1bHNtaXRoLm5ldD5cbiAqIEBjb3B5cmlnaHQgMjAxOCB1bHNtaXRoLm5ldCAodWxzbWl0aC5uZXQpXG4gKiBcbiAqIEBleGFtcGxlXG4gKiA8bGliLWNvbnRyb2wtaW5wdXQgbGFiZWw9XCJIZWxsb1wiIHR5cGU9XCJudW1iZXJcIiByZWdleD1cIl5bYS16XSskXCIgaW52YWxpZC1tZXNzYWdlPVwiVGhpcyBpcyB3cm9uZ1wiIEBpbnB1dD1cIiR7dGhpcy50ZXN0dC5iaW5kKHRoaXMpfVwiPjwvbGliLWNvbnRyb2wtaW5wdXQ+XG4gKiA8bGliLWNvbnRyb2wtaW5wdXQgbGFiZWw9XCJIZWxsb1wiIHR5cGU9XCJ0ZXh0YXJlYVwiIHJlZ2V4PVwiXlthLXpdKyRcIiBpbnZhbGlkLW1lc3NhZ2U9XCJUaGlzIGlzIHdyb25nXCIgQGlucHV0PVwiJHt0aGlzLnRlc3R0LmJpbmQodGhpcyl9XCI+PC9saWItY29udHJvbC1pbnB1dD5cbiAqL1xuY2xhc3MgTGliQ29udHJvbElucHV0IGV4dGVuZHMgQ3VzdG9tSFRNTEVsZW1lbnQge1xuXG5cdC8qKlxuICAgICAqIEBwdWJsaWMgQGNvbnN0cnVjdG9yIEBuYW1lIGNvbnN0cnVjdG9yXG5cdCAqIEBkZXNjcmlwdGlvbiBQcm9jZXNzIGNhbGxlZCBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkIChidXQgbm90IHJlYWR5IG9yIGluIERPTSwgbXVzdCBjYWxsIHN1cGVyKCkgZmlyc3QpXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy52YWx1ZTtcblx0XHR0aGlzLmludmFsaWQ7XG5cdFx0dGhpcy52YWxUaW1lb3V0O1xuXG5cdFx0dGhpcy5fbGFiZWw7XG5cdFx0dGhpcy5fbmFtZTtcblx0XHR0aGlzLl90eXBlO1xuXHRcdHRoaXMuX3JlZ2V4O1xuXHRcdHRoaXMuX2ludmFsaWRNZXNzYWdlO1xuXHRcdHRoaXMuX3JlcXVpcmVkO1xuXHRcdHRoaXMuX3ZhbGlkYXRlT25Mb2FkO1xuXHR9XG5cblx0dGVtcGxhdGUoKSB7XG5cdFx0cmV0dXJuIGh0bWxgXG5cdFx0XHQ8c3R5bGU+XG4gICAgICAgICAgICAgICAgI2xpYi1jb250cm9sLWlucHV0IHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBpbmhlcml0OyBtaW4taGVpZ2h0OiA2MnB4OyB9XG5cdFx0XHRcdCNsaWItY29udHJvbC1pbnB1dCAuaW5wdXQtY29udGFpbmVyIHsgd2lkdGg6IGluaGVyaXQ7IGhlaWdodDogaW5oZXJpdDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAyMHB4IDAgMTJweCAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblx0XHRcdFx0I2xpYi1jb250cm9sLWlucHV0IGxhYmVsIHsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMjBweDsgY29sb3I6ICMyMjI7IGZvbnQtc2l6ZTogMTRweDsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IH1cblx0XHRcdFx0I2xpYi1jb250cm9sLWlucHV0IGlucHV0IHsgcGFkZGluZzogNHB4OyBmb250LXNpemU6IDE0cHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBkaXNwbGF5OiBibG9jazsgYm9yZGVyOiAxcHggc29saWQgI2FhYTsgbWluLWhlaWdodDogMzBweDsgfVxuXHRcdFx0XHQjbGliLWNvbnRyb2wtaW5wdXQgdGV4dGFyZWEgeyBwYWRkaW5nOiA0cHg7IGZvbnQtc2l6ZTogMTRweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGRpc3BsYXk6IGJsb2NrOyBib3JkZXI6IDFweCBzb2xpZCAjYWFhOyBtaW4taGVpZ2h0OiAzMHB4OyB9XG5cdFx0XHRcdCNsaWItY29udHJvbC1pbnB1dCBbaW52YWxpZF0geyBib3JkZXItY29sb3I6IHJlZDsgfVxuXHRcdFx0XHQjbGliLWNvbnRyb2wtaW5wdXQgLmVycm9yIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTBweDsgbGluZS1oZWlnaHQ6IDEycHg7IGNvbG9yOiByZWQ7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyBsZWZ0OiAwOyB9XG5cdFx0XHRcdCNsaWItY29udHJvbC1pbnB1dCBbaW52aXNpYmxlXSB7IG9wYWNpdHk6IDA7IH1cblx0XHRcdDwvc3R5bGU+XG5cblx0XHRcdDxkaXYgaWQ9XCJsaWItY29udHJvbC1pbnB1dFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGxhYmVsID9pbnZpc2libGU9XCIkeyF0aGlzLl9sYWJlbH1cIj4ke3RoaXMuX2xhYmVsfTwvbGFiZWw+XG5cdFx0XHRcdFx0JHt0aGlzLl90eXBlID09PSAndGV4dGFyZWEnID8gaHRtbGBcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIiR7dGhpcy5faWR9XCIgbmFtZT1cIiR7dGhpcy5fbmFtZX1cIiA/aW52YWxpZD1cIiR7dGhpcy5pbnZhbGlkfVwiXG5cdFx0XHRcdFx0XHRcdEBpbnB1dD1cIiR7dGhpcy5fZXZlbnQuYmluZCh0aGlzKX1cIlxuXHRcdFx0XHRcdFx0XHRAa2V5ZG93bj1cIiR7dGhpcy5fZXZlbnQuYmluZCh0aGlzKX1cIlxuXHRcdFx0XHRcdFx0XHRAa2V5dXA9XCIke3RoaXMuX2V2ZW50LmJpbmQodGhpcyl9XCJcblx0XHRcdFx0XHRcdFx0QGNoYW5nZT1cIiR7dGhpcy5fZXZlbnQuYmluZCh0aGlzKX1cIlxuXHRcdFx0XHRcdFx0PiR7dGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB0aGlzLnZhbHVlfTwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0YCA6IGh0bWxgXG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCIke3RoaXMuX2lkfVwiIG5hbWU9XCIke3RoaXMuX25hbWV9XCIgdHlwZT1cIiR7dGhpcy5fdHlwZX1cIiA/aW52YWxpZD1cIiR7dGhpcy5pbnZhbGlkfVwiXG5cdFx0XHRcdFx0XHRcdC52YWx1ZT1cIiR7dGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB0aGlzLnZhbHVlfVwiXG5cdFx0XHRcdFx0XHRcdEBpbnB1dD1cIiR7dGhpcy5fZXZlbnQuYmluZCh0aGlzKX1cIlxuXHRcdFx0XHRcdFx0XHRAa2V5ZG93bj1cIiR7dGhpcy5fZXZlbnQuYmluZCh0aGlzKX1cIlxuXHRcdFx0XHRcdFx0XHRAa2V5dXA9XCIke3RoaXMuX2V2ZW50LmJpbmQodGhpcyl9XCJcblx0XHRcdFx0XHRcdFx0QGNoYW5nZT1cIiR7dGhpcy5fZXZlbnQuYmluZCh0aGlzKX1cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJlcnJvclwiID9pbnZpc2libGU9XCIkeyF0aGlzLmludmFsaWR9XCI+JHt0aGlzLl9pbnZhbGlkTWVzc2FnZSA/IHRoaXMuX2ludmFsaWRNZXNzYWdlIDogJ0ludmFsaWQnfTwvc3Bhbj5cdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkUHJvcGVydGllcygpIHsgcmV0dXJuIFsndmFsdWUnLCAnaW52YWxpZCddIH1cblxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHsgcmV0dXJuIFsnbGFiZWwnLCAnbmFtZScsICd0eXBlJywgJ3JlZ2V4JywgJ2ludmFsaWQtbWVzc2FnZSddIH1cblxuXHRjb25uZWN0ZWQoKSB7XG5cdFx0dGhpcy5fbGFiZWwgPSB0aGlzLmhhc0F0dHJpYnV0ZSgnbGFiZWwnKSA/IHRoaXMuZ2V0QXR0cmlidXRlKCdsYWJlbCcpIDogJyc7XG5cdFx0dGhpcy5fbmFtZSA9IHRoaXMuaGFzQXR0cmlidXRlKCduYW1lJykgPyB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIDogJyc7XG5cdFx0dGhpcy5fdHlwZSA9IHRoaXMuaGFzQXR0cmlidXRlKCd0eXBlJykgPyB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpIDogJyc7XG5cdFx0dGhpcy5fcmVnZXggPSB0aGlzLmhhc0F0dHJpYnV0ZSgncmVnZXgnKSA/IHRoaXMuZ2V0QXR0cmlidXRlKCdyZWdleCcpIDogJyc7XG5cdFx0dGhpcy5faW52YWxpZE1lc3NhZ2UgPSB0aGlzLmhhc0F0dHJpYnV0ZSgnaW52YWxpZC1tZXNzYWdlJykgPyB0aGlzLmdldEF0dHJpYnV0ZSgnaW52YWxpZC1tZXNzYWdlJykgOiAnJztcblx0XHR0aGlzLl9yZXF1aXJlZCA9IHRoaXMuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHRoaXMuX3ZhbGlkYXRlT25Mb2FkID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ZhbGlkYXRlLW9uLWxvYWQnKSA/IHRydWUgOiBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl92YWxpZGF0ZU9uTG9hZCAmJiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPCAxKSkgdGhpcy5fdmFsaWRhdGUodGhpcy52YWx1ZSk7ICBcblx0fVxuXG5cdHByb3BlcnR5Q2hhbmdlZChwcm9wZXJ0eSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKCF0aGlzLmRvbSB8fCBvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZVRlbXBsYXRlKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkKGF0dHJpYnV0ZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0c3dpdGNoIChhdHRyaWJ1dGUpIHtcblx0XHRcdGNhc2UgJ2xhYmVsJzogdGhpcy5fbGFiZWwgPSBuZXdWYWx1ZTsgYnJlYWs7XG5cdFx0XHRjYXNlICduYW1lJzogdGhpcy5fbmFtZSA9IG5ld1ZhbHVlOyBicmVhaztcblx0XHRcdGNhc2UgJ3R5cGUnOiB0aGlzLl90eXBlID0gbmV3VmFsdWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSAncmVnZXgnOiB0aGlzLl9yZWdleCA9IG5ld1ZhbHVlOyBicmVhaztcblx0XHRcdGNhc2UgJ2ludmFsaWQtbWVzc2FnZSc6IHRoaXMuX2ludmFsaWRNZXNzYWdlID0gbmV3VmFsdWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSAncmVxdWlyZWQnOiB0aGlzLl9yZXF1aXJlZCA9IG5ld1ZhbHVlID8gdHJ1ZSA6IHVuZGVmaW5lZDsgYnJlYWs7XG5cdFx0XHRjYXNlICd2YWxpZGF0ZS1vbi1sb2FkJzogdGhpcy5fdmFsaWRhdGVPbkxvYWQgPSBuZXdWYWx1ZSA/IHRydWUgOiB1bmRlZmluZWQ7IGJyZWFrO1xuXHRcdH0gXG5cblx0XHR0aGlzLnVwZGF0ZVRlbXBsYXRlKCk7XG5cdH1cblxuXHRfZXZlbnQoZXYpIHtcblx0XHRpZiAoZXYudHlwZSA9PSAnaW5wdXQnKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudmFsVGltZW91dCk7XG5cdFx0XHR0aGlzLnZhbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5fdmFsaWRhdGUodGhpcy52YWx1ZSk7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGVtcGxhdGUoKTtcblx0XHRcdH0sNTAwKTtcblx0XHR9XG5cdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldi50eXBlLCB7IGRldGFpbDogZXYgfSkpO1xuXHR9XG5cblx0X3ZhbGlkYXRlKHZhbHVlKSB7XG5cdFx0dGhpcy5pbnZhbGlkID0gdGhpcy5fcmVnZXggJiYgISgobmV3IFJlZ0V4cCh0aGlzLl9yZWdleCkpLnRlc3QodmFsdWUpKSA/IHRydWUgOiBmYWxzZTtcblx0XHR0aGlzLmludmFsaWQgPSB0aGlzLl9yZXF1aXJlZCA/ICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgMSA/IHRydWUgOiB0aGlzLmludmFsaWQpIDogKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPCAxID8gZmFsc2UgOiB0aGlzLmludmFsaWQpO1xuXHR9XG59XG5cbi8vIGJvb3RzdHJhcCB0aGUgY2xhc3MgYXMgYSBuZXcgd2ViIGNvbXBvbmVudFxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsaWItY29udHJvbC1pbnB1dCcsIExpYkNvbnRyb2xJbnB1dCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1c3RvbS13ZWItY29tcG9uZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBAcHVibGljIEBuYW1lIFxuICogQGRlc2NyaXB0aW9uIENvbW1vbiBtYXRlcmlhbCBpY29uIHNldCBmb3Igd2hvbGUgc3lzdGVtIHRvIGluaGVyaXQgZnJvbVxuICogVG8gYWRkIG1vcmUsIGdvIHRvIGh0dHBzOi8vbWF0ZXJpYWwuaW8vdG9vbHMvaWNvbnMvP2ljb249dGFibGV0JnN0eWxlPWJhc2VsaW5lIGFuZCB0aGVuIGNsaWNrIG9uIGFuIGljb24sIGRvd25sb2FkLCBvcGVuLCBjb3B5IHBhdGggYW5kIHBhc3QgYXMgbmV3IGVudHJ5XG4gKiBAYXV0aG9yIFBhdWwgU21pdGggPHBhdWwuc21pdGhAdWxzbWl0aC5uZXQ+XG4gKiBAY29weXJpZ2h0IDIwMTggdWxzbWl0aC5uZXQgKHVsc21pdGgubmV0KVxuICovXG5cbi8qKlxuICogQHB1YmxpYyBAbmFtZSBMaWJJY29uTWF0ZXJpYWxEZXNpZ25cbiAqIEBkZXNjcmlwdGlvbiBTVkcgSWNvbiBUZW1wbGF0ZSBSZXN1bHQgUHJvdmlkZXIsIGdlbmVyYXRlcyBhbiBvYmplY3QgY29udGFpbmluZyBTVkcgaWNvbnMgYmFzZWQgb24gbWF0ZXJpYWwgZGVzaWduXG4gKiBAYXV0aG9yIFBhdWwgU21pdGggPHBhdWwuc21pdGhAdWxzbWl0aC5uZXQ+XG4gKiBAY29weXJpZ2h0IDIwMTggdWxzbWl0aC5uZXQgKHVsc21pdGgubmV0KVxuICpcbiAqIEBleGFtcGxlIEpTXG4gKiBpbXBvcnQgTGliSWNvbk1hdGVyaWFsRGVzaWduIGZyb20gJy4uLic7XG4gKiBAZXhhbXBsZSBIVE1MIFRlbXBsYXRlXG4gKiA8c3Bhbj4ke0xpYkljb25NYXRlcmlhbERlc2lnbi5hZGRBbGVydH08L3NwYW4+O1xuICovXG5jb25zdCBMaWJJY29uTWF0ZXJpYWxEZXNpZ24gPSB7XHQgICAgXG5cdHJvdGF0aW9uM2Q6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk03LjUyIDIxLjQ4QzQuMjUgMTkuOTQgMS45MSAxNi43NiAxLjU1IDEzSC4wNUMuNTYgMTkuMTYgNS43MSAyNCAxMiAyNGwuNjYtLjAzLTMuODEtMy44MS0xLjMzIDEuMzJ6bS44OS02LjUyYy0uMTkgMC0uMzctLjAzLS41Mi0uMDgtLjE2LS4wNi0uMjktLjEzLS40LS4yNC0uMTEtLjEtLjItLjIyLS4yNi0uMzctLjA2LS4xNC0uMDktLjMtLjA5LS40N2gtMS4zYzAgLjM2LjA3LjY4LjIxLjk1LjE0LjI3LjMzLjUuNTYuNjkuMjQuMTguNTEuMzIuODIuNDEuMy4xLjYyLjE1Ljk2LjE1LjM3IDAgLjcyLS4wNSAxLjAzLS4xNS4zMi0uMS42LS4yNS44My0uNDRzLjQyLS40My41NS0uNzJjLjEzLS4yOS4yLS42MS4yLS45NyAwLS4xOS0uMDItLjM4LS4wNy0uNTYtLjA1LS4xOC0uMTItLjM1LS4yMy0uNTEtLjEtLjE2LS4yNC0uMy0uNC0uNDMtLjE3LS4xMy0uMzctLjIzLS42MS0uMzEuMi0uMDkuMzctLjIuNTItLjMzLjE1LS4xMy4yNy0uMjcuMzctLjQyLjEtLjE1LjE3LS4zLjIyLS40Ni4wNS0uMTYuMDctLjMyLjA3LS40OCAwLS4zNi0uMDYtLjY4LS4xOC0uOTYtLjEyLS4yOC0uMjktLjUxLS41MS0uNjktLjItLjE5LS40Ny0uMzMtLjc3LS40M0M5LjEgOC4wNSA4Ljc2IDggOC4zOSA4Yy0uMzYgMC0uNjkuMDUtMSAuMTYtLjMuMTEtLjU3LjI2LS43OS40NS0uMjEuMTktLjM4LjQxLS41MS42Ny0uMTIuMjYtLjE4LjU0LS4xOC44NWgxLjNjMC0uMTcuMDMtLjMyLjA5LS40NXMuMTQtLjI1LjI1LS4zNGMuMTEtLjA5LjIzLS4xNy4zOC0uMjIuMTUtLjA1LjMtLjA4LjQ4LS4wOC40IDAgLjcuMS44OS4zMS4xOS4yLjI5LjQ5LjI5Ljg2IDAgLjE4LS4wMy4zNC0uMDguNDktLjA1LjE1LS4xNC4yNy0uMjUuMzctLjExLjEtLjI1LjE4LS40MS4yNC0uMTYuMDYtLjM2LjA5LS41OC4wOUg3LjV2MS4wM2guNzdjLjIyIDAgLjQyLjAyLjYuMDdzLjMzLjEzLjQ1LjIzYy4xMi4xMS4yMi4yNC4yOS40LjA3LjE2LjEuMzUuMS41NyAwIC40MS0uMTIuNzItLjM1LjkzLS4yMy4yMy0uNTUuMzMtLjk1LjMzem04LjU1LTUuOTJjLS4zMi0uMzMtLjctLjU5LTEuMTQtLjc3LS40My0uMTgtLjkyLS4yNy0xLjQ2LS4yN0gxMnY4aDIuM2MuNTUgMCAxLjA2LS4wOSAxLjUxLS4yNy40NS0uMTguODQtLjQzIDEuMTYtLjc2LjMyLS4zMy41Ny0uNzMuNzQtMS4xOS4xNy0uNDcuMjYtLjk5LjI2LTEuNTd2LS40YzAtLjU4LS4wOS0xLjEtLjI2LTEuNTctLjE4LS40Ny0uNDMtLjg3LS43NS0xLjJ6bS0uMzkgMy4xNmMwIC40Mi0uMDUuNzktLjE0IDEuMTMtLjEuMzMtLjI0LjYyLS40My44NS0uMTkuMjMtLjQzLjQxLS43MS41My0uMjkuMTItLjYyLjE4LS45OS4xOGgtLjkxVjkuMTJoLjk3Yy43MiAwIDEuMjcuMjMgMS42NC42OS4zOC40Ni41NyAxLjEyLjU3IDEuOTl2LjR6TTEyIDBsLS42Ni4wMyAzLjgxIDMuODEgMS4zMy0xLjMzYzMuMjcgMS41NSA1LjYxIDQuNzIgNS45NiA4LjQ4aDEuNUMyMy40NCA0Ljg0IDE4LjI5IDAgMTIgMHpcIi8+PC9zdmc+YCxcblx0YWNjZXNzaWJpbGl0eTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJjMS4xIDAgMiAuOSAyIDJzLS45IDItMiAyLTItLjktMi0yIC45LTIgMi0yem05IDdoLTZ2MTNoLTJ2LTZoLTJ2Nkg5VjlIM1Y3aDE4djJ6XCIvPjwvc3ZnPmAsXG5cdGFjY2Vzc2libGU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCI0XCIgcj1cIjJcIi8+PHBhdGggZD1cIk0xOSAxM3YtMmMtMS41NC4wMi0zLjA5LS43NS00LjA3LTEuODNsLTEuMjktMS40M2MtLjE3LS4xOS0uMzgtLjM0LS42MS0uNDUtLjAxIDAtLjAxLS4wMS0uMDItLjAxSDEzYy0uMzUtLjItLjc1LS4zLTEuMTktLjI2QzEwLjc2IDcuMTEgMTAgOC4wNCAxMCA5LjA5VjE1YzAgMS4xLjkgMiAyIDJoNXY1aDJ2LTUuNWMwLTEuMS0uOS0yLTItMmgtM3YtMy40NWMxLjI5IDEuMDcgMy4yNSAxLjk0IDUgMS45NXptLTYuMTcgNWMtLjQxIDEuMTYtMS41MiAyLTIuODMgMi0xLjY2IDAtMy0xLjM0LTMtMyAwLTEuMzEuODQtMi40MSAyLTIuODNWMTIuMWMtMi4yOC40Ni00IDIuNDgtNCA0LjkgMCAyLjc2IDIuMjQgNSA1IDUgMi40MiAwIDQuNDQtMS43MiA0LjktNGgtMi4wN3pcIi8+PC9zdmc+YCxcblx0YWNjb3VudEJhbGFuY2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk00IDEwdjdoM3YtN0g0em02IDB2N2gzdi03aC0zek0yIDIyaDE5di0zSDJ2M3ptMTQtMTJ2N2gzdi03aC0zem0tNC41LTlMMiA2djJoMTlWNmwtOS41LTV6XCIvPjwvc3ZnPmAsXG5cdGFjY291bnRCYWxhbmNlV2FsbGV0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjEgMTh2MWMwIDEuMS0uOSAyLTIgMkg1Yy0xLjExIDAtMi0uOS0yLTJWNWMwLTEuMS44OS0yIDItMmgxNGMxLjEgMCAyIC45IDIgMnYxaC05Yy0xLjExIDAtMiAuOS0yIDJ2OGMwIDEuMS44OSAyIDIgMmg5em0tOS0yaDEwVjhIMTJ2OHptNC0yLjVjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41elwiLz48L3N2Zz5gLFxuXHRhY2NvdW50Qm94OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMyA1djE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJINWMtMS4xMSAwLTIgLjktMiAyem0xMiA0YzAgMS42Ni0xLjM0IDMtMyAzcy0zLTEuMzQtMy0zIDEuMzQtMyAzLTMgMyAxLjM0IDMgM3ptLTkgOGMwLTIgNC0zLjEgNi0zLjFzNiAxLjEgNiAzLjF2MUg2di0xelwiLz48L3N2Zz5gLFxuXHRhY2NvdW50Q2lyY2xlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptMCAxNC4yYy0yLjUgMC00LjcxLTEuMjgtNi0zLjIyLjAzLTEuOTkgNC0zLjA4IDYtMy4wOCAxLjk5IDAgNS45NyAxLjA5IDYgMy4wOC0xLjI5IDEuOTQtMy41IDMuMjItNiAzLjIyelwiLz48L3N2Zz5gLFxuXHRhZGQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2djJ6XCIvPjwvc3ZnPmAsXG5cdGFkZEFsZXJ0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTAuMDEgMjEuMDFjMCAxLjEuODkgMS45OSAxLjk5IDEuOTlzMS45OS0uODkgMS45OS0xLjk5aC0zLjk4em04Ljg3LTQuMTlWMTFjMC0zLjI1LTIuMjUtNS45Ny01LjI5LTYuNjl2LS43MkMxMy41OSAyLjcxIDEyLjg4IDIgMTIgMnMtMS41OS43MS0xLjU5IDEuNTl2LjcyQzcuMzcgNS4wMyA1LjEyIDcuNzUgNS4xMiAxMXY1LjgyTDMgMTguOTRWMjBoMTh2LTEuMDZsLTIuMTItMi4xMnpNMTYgMTMuMDFoLTN2M2gtMnYtM0g4VjExaDNWOGgydjNoM3YyLjAxelwiLz48L3N2Zz5gLFxuXHRhZGRCb3g6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tMiAxMGgtNHY0aC0ydi00SDd2LTJoNFY3aDJ2NGg0djJ6XCIvPjwvc3ZnPmAsXG5cdGFkZENpcmNsZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFoLTR2NGgtMnYtNEg3di0yaDRWN2gydjRoNHYyelwiLz48L3N2Zz5gLFxuXHRhZGRDaXJjbGVPdXRsaW5lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTMgN2gtMnY0SDd2Mmg0djRoMnYtNGg0di0yaC00Vjd6bS0xLTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elwiLz48L3N2Zz5gLFxuXHRhZGRTaG9wcGluZ0NhcnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMSA5aDJWNmgzVjRoLTNWMWgtMnYzSDh2MmgzdjN6bS00IDljLTEuMSAwLTEuOTkuOS0xLjk5IDJTNS45IDIyIDcgMjJzMi0uOSAyLTItLjktMi0yLTJ6bTEwIDBjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yem0tOS44My0zLjI1bC4wMy0uMTIuOS0xLjYzaDcuNDVjLjc1IDAgMS40MS0uNDEgMS43NS0xLjAzbDMuODYtNy4wMUwxOS40MiA0aC0uMDFsLTEuMSAyLTIuNzYgNUg4LjUzbC0uMTMtLjI3TDYuMTYgNmwtLjk1LTItLjk0LTJIMXYyaDJsMy42IDcuNTktMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDEydi0ySDcuNDJjLS4xMyAwLS4yNS0uMTEtLjI1LS4yNXpcIi8+PC9zdmc+YCxcblx0YWxhcm06IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMiA1LjcybC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNNy44OCAzLjM5TDYuNiAxLjg2IDIgNS43MWwxLjI5IDEuNTMgNC41OS0zLjg1ek0xMi41IDhIMTF2Nmw0Ljc1IDIuODUuNzUtMS4yMy00LTIuMzdWOHpNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMiA5IDkgOWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptMCAxNmMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6XCIvPjwvc3ZnPmAsXG5cdGFsYXJtQWRkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNy44OCAzLjM5TDYuNiAxLjg2IDIgNS43MWwxLjI5IDEuNTMgNC41OS0zLjg1ek0yMiA1LjcybC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMiA5IDkgOWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptMCAxNmMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6bTEtMTFoLTJ2M0g4djJoM3YzaDJ2LTNoM3YtMmgtM1Y5elwiLz48L3N2Zz5gLFxuXHRhbGFybU9mZjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDZjMy44NyAwIDcgMy4xMyA3IDcgMCAuODQtLjE2IDEuNjUtLjQzIDIuNGwxLjUyIDEuNTJjLjU4LTEuMTkuOTEtMi41MS45MS0zLjkyIDAtNC45Ny00LjAzLTktOS05LTEuNDEgMC0yLjczLjMzLTMuOTIuOTFMOS42IDYuNDNDMTAuMzUgNi4xNiAxMS4xNiA2IDEyIDZ6bTEwLS4yOGwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTIuOTIgMi4yOUwxLjY1IDMuNTcgMi45OCA0LjlsLTEuMTEuOTMgMS40MiAxLjQyIDEuMTEtLjk0LjguOEMzLjgzIDguNjkgMyAxMC43NSAzIDEzYzAgNC45NyA0LjAyIDkgOSA5IDIuMjUgMCA0LjMxLS44MyA1Ljg5LTIuMmwyLjIgMi4yIDEuMjctMS4yN0wzLjg5IDMuMjdsLS45Ny0uOTh6bTEzLjU1IDE2LjFDMTUuMjYgMTkuMzkgMTMuNyAyMCAxMiAyMGMtMy44NyAwLTctMy4xMy03LTcgMC0xLjcuNjEtMy4yNiAxLjYxLTQuNDdsOS44NiA5Ljg2ek04LjAyIDMuMjhMNi42IDEuODZsLS44Ni43MSAxLjQyIDEuNDIuODYtLjcxelwiLz48L3N2Zz5gLFxuXHRhbGFybU9uOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjIgNS43MmwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTcuODggMy4zOUw2LjYgMS44NiAyIDUuNzFsMS4yOSAxLjUzIDQuNTktMy44NXpNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMiA5IDkgOWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptMCAxNmMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6bS0xLjQ2LTUuNDdMOC40MSAxMi40bC0xLjA2IDEuMDYgMy4xOCAzLjE4IDYtNi0xLjA2LTEuMDYtNC45MyA0Ljk1elwiLz48L3N2Zz5gLFxuXHRhbGxPdXQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNi4yMSA0LjE2bDQgNHYtNHptNCAxMmwtNCA0aDR6bS0xMiA0bC00LTR2NHptLTQtMTJsNC00aC00em0xMi45NS0uOTVjLTIuNzMtMi43My03LjE3LTIuNzMtOS45IDBzLTIuNzMgNy4xNyAwIDkuOSA3LjE3IDIuNzMgOS45IDAgMi43My03LjE2IDAtOS45em0tMS4xIDguOGMtMi4xMyAyLjEzLTUuNTcgMi4xMy03LjcgMHMtMi4xMy01LjU3IDAtNy43IDUuNTctMi4xMyA3LjcgMCAyLjEzIDUuNTcgMCA3Ljd6XCIvPjwvc3ZnPmAsXG5cdGFuZHJvaWQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk02IDE4YzAgLjU1LjQ1IDEgMSAxaDF2My41YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNVYxOWgydjMuNWMwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjVWMTloMWMuNTUgMCAxLS40NSAxLTFWOEg2djEwek0zLjUgOEMyLjY3IDggMiA4LjY3IDIgOS41djdjMCAuODMuNjcgMS41IDEuNSAxLjVTNSAxNy4zMyA1IDE2LjV2LTdDNSA4LjY3IDQuMzMgOCAzLjUgOHptMTcgMGMtLjgzIDAtMS41LjY3LTEuNSAxLjV2N2MwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjV2LTdjMC0uODMtLjY3LTEuNS0xLjUtMS41em0tNC45Ny01Ljg0bDEuMy0xLjNjLjItLjIuMi0uNTEgMC0uNzEtLjItLjItLjUxLS4yLS43MSAwbC0xLjQ4IDEuNDhDMTMuODUgMS4yMyAxMi45NSAxIDEyIDFjLS45NiAwLTEuODYuMjMtMi42Ni42M0w3Ljg1LjE1Yy0uMi0uMi0uNTEtLjItLjcxIDAtLjIuMi0uMi41MSAwIC43MWwxLjMxIDEuMzFDNi45NyAzLjI2IDYgNS4wMSA2IDdoMTJjMC0xLjk5LS45Ny0zLjc1LTIuNDctNC44NHpNMTAgNUg5VjRoMXYxem01IDBoLTFWNGgxdjF6XCIvPjwvc3ZnPmAsXG5cdGFubm91bmNlbWVudDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwIDJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDIybDQtNGgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNyA5aC0yVjVoMnY2em0wIDRoLTJ2LTJoMnYyelwiLz48L3N2Zz5gLFxuXHRhcHBzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNCA4aDRWNEg0djR6bTYgMTJoNHYtNGgtNHY0em0tNiAwaDR2LTRINHY0em0wLTZoNHYtNEg0djR6bTYgMGg0di00aC00djR6bTYtMTB2NGg0VjRoLTR6bS02IDRoNFY0aC00djR6bTYgNmg0di00aC00djR6bTAgNmg0di00aC00djR6XCIvPjwvc3ZnPmAsXG5cdGFyY2hpdmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMC41NCA1LjIzbC0xLjM5LTEuNjhDMTguODggMy4yMSAxOC40NyAzIDE4IDNINmMtLjQ3IDAtLjg4LjIxLTEuMTYuNTVMMy40NiA1LjIzQzMuMTcgNS41NyAzIDYuMDIgMyA2LjVWMTljMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2LjVjMC0uNDgtLjE3LS45My0uNDYtMS4yN3pNMTIgMTcuNUw2LjUgMTJIMTB2LTJoNHYyaDMuNUwxMiAxNy41ek01LjEyIDVsLjgxLTFoMTJsLjk0IDFINS4xMnpcIi8+PC9zdmc+YCxcblx0YXJyb3dCYWNrOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcIi8+PC9zdmc+YCxcblx0YXJyb3dEb3dud2FyZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwIDEybC0xLjQxLTEuNDFMMTMgMTYuMTdWNGgtMnYxMi4xN2wtNS41OC01LjU5TDQgMTJsOCA4IDgtOHpcIi8+PC9zdmc+YCxcblx0YXJyb3dEcm9wRG93bjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTcgMTBsNSA1IDUtNXpcIi8+PC9zdmc+YCxcblx0YXJyb3dEcm9wRG93bkNpcmNsZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMTJsLTQtNGg4bC00IDR6XCIvPjwvc3ZnPmAsXG5cdGFycm93RHJvcFVwOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNyAxNGw1LTUgNSA1elwiLz48L3N2Zz5gLFxuXHRhcnJvd0ZvcndhcmQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiA0bC0xLjQxIDEuNDFMMTYuMTcgMTFINHYyaDEyLjE3bC01LjU4IDUuNTlMMTIgMjBsOC04elwiLz48L3N2Zz5gLFxuXHRhcnJvd1Vwd2FyZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTQgMTJsMS40MSAxLjQxTDExIDcuODNWMjBoMlY3LjgzbDUuNTggNS41OUwyMCAxMmwtOC04LTggOHpcIi8+PC9zdmc+YCxcblx0YXNwZWN0UmF0aW86IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAxMmgtMnYzaC0zdjJoNXYtNXpNNyA5aDNWN0g1djVoMlY5em0xNC02SDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOTloMTh2MTQuMDJ6XCIvPjwvc3ZnPmAsXG5cdGFzc2Vzc21lbnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAzSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpNOSAxN0g3di03aDJ2N3ptNCAwaC0yVjdoMnYxMHptNCAwaC0ydi00aDJ2NHpcIi8+PC9zdmc+YCxcblx0YXNzaWdubWVudDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0yIDE0SDd2LTJoN3Yyem0zLTRIN3YtMmgxMHYyem0wLTRIN1Y3aDEwdjJ6XCIvPjwvc3ZnPmAsXG5cdGFzc2lnbm1lbnRJbmQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMCA0YzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptNiAxMkg2di0xLjRjMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xVjE5elwiLz48L3N2Zz5gLFxuXHRhc3NpZ25tZW50TGF0ZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTYgMTVoLTJ2LTJoMnYyem0wLTRoLTJWOGgydjZ6bS0xLTljLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXpcIi8+PC9zdmc+YCxcblx0YXNzaWdubWVudFJldHVybjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem00IDEyaC00djNsLTUtNSA1LTV2M2g0djR6XCIvPjwvc3ZnPmAsXG5cdGFzc2lnbm1lbnRSZXR1cm5lZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0wIDE1bC01LTVoM1Y5aDR2NGgzbC01IDV6XCIvPjwvc3ZnPmAsXG5cdGFzc2lnbm1lbnRUdXJuZWRJbjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0tMiAxNGwtNC00IDEuNDEtMS40MUwxMCAxNC4xN2w2LjU5LTYuNTlMMTggOWwtOCA4elwiLz48L3N2Zz5gLFxuXHRhdHRhY2htZW50OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMiAxMi41QzIgOS40NiA0LjQ2IDcgNy41IDdIMThjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDRIOS41QzguMTIgMTUgNyAxMy44OCA3IDEyLjVTOC4xMiAxMCA5LjUgMTBIMTd2Mkg5LjQxYy0uNTUgMC0uNTUgMSAwIDFIMThjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0ySDcuNUM1LjU3IDkgNCAxMC41NyA0IDEyLjVTNS41NyAxNiA3LjUgMTZIMTd2Mkg3LjVDNC40NiAxOCAyIDE1LjU0IDIgMTIuNXpcIi8+PC9zdmc+YCxcblx0YXV0b3JlbmV3OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgNnYzbDQtNC00LTR2M2MtNC40MiAwLTggMy41OC04IDggMCAxLjU3LjQ2IDMuMDMgMS4yNCA0LjI2TDYuNyAxNC44Yy0uNDUtLjgzLS43LTEuNzktLjctMi44IDAtMy4zMSAyLjY5LTYgNi02em02Ljc2IDEuNzRMMTcuMyA5LjJjLjQ0Ljg0LjcgMS43OS43IDIuOCAwIDMuMzEtMi42OSA2LTYgNnYtM2wtNCA0IDQgNHYtM2M0LjQyIDAgOC0zLjU4IDgtOCAwLTEuNTctLjQ2LTMuMDMtMS4yNC00LjI2elwiLz48L3N2Zz5gLFxuXHRiYWNrc3BhY2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMiAzSDdjLS42OSAwLTEuMjMuMzUtMS41OS44OEwwIDEybDUuNDEgOC4xMWMuMzYuNTMuOS44OSAxLjU5Ljg5aDE1YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0zIDEyLjU5TDE3LjU5IDE3IDE0IDEzLjQxIDEwLjQxIDE3IDkgMTUuNTkgMTIuNTkgMTIgOSA4LjQxIDEwLjQxIDcgMTQgMTAuNTkgMTcuNTkgNyAxOSA4LjQxIDE1LjQxIDEyIDE5IDE1LjU5elwiLz48L3N2Zz5gLFxuXHRiYWNrdXA6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE0IDEzdjRoLTR2LTRIN2w1LTUgNSA1aC0zelwiLz48L3N2Zz5gLFxuXHRiaW5vY3VsYXJzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEsNkgxM1YxM0gxMVY2TTksMjBBMSwxIDAgMCwxIDgsMjFINUExLDEgMCAwLDEgNCwyMFYxNUw2LDZIMTBWMTNBMSwxIDAgMCwxIDksMTRWMjBNMTAsNUg3VjNIMTBWNU0xNSwyMFYxNEExLDEgMCAwLDEgMTQsMTNWNkgxOEwyMCwxNVYyMEExLDEgMCAwLDEgMTksMjFIMTZBMSwxIDAgMCwxIDE1LDIwTTE0LDVWM0gxN1Y1SDE0WlwiLz48L3N2Zz5gLFxuXHRibG9jazogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTQgMTJjMC00LjQyIDMuNTgtOCA4LTggMS44NSAwIDMuNTUuNjMgNC45IDEuNjlMNS42OSAxNi45QzQuNjMgMTUuNTUgNCAxMy44NSA0IDEyem04IDhjLTEuODUgMC0zLjU1LS42My00LjktMS42OUwxOC4zMSA3LjFDMTkuMzcgOC40NSAyMCAxMC4xNSAyMCAxMmMwIDQuNDItMy41OCA4LTggOHpcIi8+PC9zdmc+YCxcblx0Ym9vazogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE4IDJINmMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yek02IDRoNXY4bC0yLjUtMS41TDYgMTJWNHpcIi8+PC9zdmc+YCxcblx0Ym9va21hcms6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6XCIvPjwvc3ZnPmAsXG5cdGJvb2ttYXJrQm9yZGVyOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yem0wIDE1bC01LTIuMThMNyAxOFY1aDEwdjEzelwiLz48L3N2Zz5gLFxuXHRidWdSZXBvcnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCA4aC0yLjgxYy0uNDUtLjc4LTEuMDctMS40NS0xLjgyLTEuOTZMMTcgNC40MSAxNS41OSAzbC0yLjE3IDIuMTdDMTIuOTYgNS4wNiAxMi40OSA1IDEyIDVjLS40OSAwLS45Ni4wNi0xLjQxLjE3TDguNDEgMyA3IDQuNDFsMS42MiAxLjYzQzcuODggNi41NSA3LjI2IDcuMjIgNi44MSA4SDR2MmgyLjA5Yy0uMDUuMzMtLjA5LjY2LS4wOSAxdjFINHYyaDJ2MWMwIC4zNC4wNC42Ny4wOSAxSDR2MmgyLjgxYzEuMDQgMS43OSAyLjk3IDMgNS4xOSAzczQuMTUtMS4yMSA1LjE5LTNIMjB2LTJoLTIuMDljLjA1LS4zMy4wOS0uNjYuMDktMXYtMWgydi0yaC0ydi0xYzAtLjM0LS4wNC0uNjctLjA5LTFIMjBWOHptLTYgOGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6XCIvPjwvc3ZnPmAsXG5cdGJ1aWxkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjIuNyAxOWwtOS4xLTkuMWMuOS0yLjMuNC01LTEuNS02LjktMi0yLTUtMi40LTcuNC0xLjNMOSA2IDYgOSAxLjYgNC43Qy40IDcuMS45IDEwLjEgMi45IDEyLjFjMS45IDEuOSA0LjYgMi40IDYuOSAxLjVsOS4xIDkuMWMuNC40IDEgLjQgMS40IDBsMi4zLTIuM2MuNS0uNC41LTEuMS4xLTEuNHpcIi8+PC9zdmc+YCxcblx0Y2FjaGVkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgOGwtNCA0aDNjMCAzLjMxLTIuNjkgNi02IDYtMS4wMSAwLTEuOTctLjI1LTIuOC0uN2wtMS40NiAxLjQ2QzguOTcgMTkuNTQgMTAuNDMgMjAgMTIgMjBjNC40MiAwIDgtMy41OCA4LThoM2wtNC00ek02IDEyYzAtMy4zMSAyLjY5LTYgNi02IDEuMDEgMCAxLjk3LjI1IDIuOC43bDEuNDYtMS40NkMxNS4wMyA0LjQ2IDEzLjU3IDQgMTIgNGMtNC40MiAwLTggMy41OC04IDhIMWw0IDQgNC00SDZ6XCIvPjwvc3ZnPmAsXG5cdGNhbWVyYUVuaGFuY2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk05IDNMNy4xNyA1SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMmgtMy4xN0wxNSAzSDl6bTMgMTVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLTFsMS4yNS0yLjc1TDE2IDEzbC0yLjc1LTEuMjVMMTIgOWwtMS4yNSAyLjc1TDggMTNsMi43NSAxLjI1elwiLz48L3N2Zz5gLFxuXHRjYW5jZWw6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem01IDEzLjU5TDE1LjU5IDE3IDEyIDEzLjQxIDguNDEgMTcgNyAxNS41OSAxMC41OSAxMiA3IDguNDEgOC40MSA3IDEyIDEwLjU5IDE1LjU5IDcgMTcgOC40MSAxMy40MSAxMiAxNyAxNS41OXpcIi8+PC9zdmc+YCxcblx0Y2FyZEdpZnRjYXJkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNmgtMi4xOGMuMTEtLjMxLjE4LS42NS4xOC0xIDAtMS42Ni0xLjM0LTMtMy0zLTEuMDUgMC0xLjk2LjU0LTIuNSAxLjM1bC0uNS42Ny0uNS0uNjhDMTAuOTYgMi41NCAxMC4wNSAyIDkgMiA3LjM0IDIgNiAzLjM0IDYgNWMwIC4zNS4wNy42OS4xOCAxSDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTUtMmMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xek05IDRjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDUuMDhMNyAxMC44MyA4LjYyIDEyIDExIDguNzZsMS0xLjM2IDEgMS4zNkwxNS4zOCAxMiAxNyAxMC44MyAxNC45MiA4SDIwdjZ6XCIvPjwvc3ZnPmAsXG5cdGNhcmRNZW1iZXJzaGlwOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgMkg0Yy0xLjExIDAtMiAuODktMiAydjExYzAgMS4xMS44OSAyIDIgMmg0djVsNC0yIDQgMnYtNWg0YzEuMTEgMCAyLS44OSAyLTJWNGMwLTEuMTEtLjg5LTItMi0yem0wIDEzSDR2LTJoMTZ2MnptMC01SDRWNGgxNnY2elwiLz48L3N2Zz5gLFxuXHRjYXJkVHJhdmVsOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNmgtM1Y0YzAtMS4xMS0uODktMi0yLTJIOWMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0yIC44OS0yIDJ2MTFjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yek05IDRoNnYySDlWNHptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDN2MmgyVjhoNnYyaDJWOGgzdjZ6XCIvPjwvc3ZnPmAsXG5cdGNoYW5nZUhpc3Rvcnk6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiA3Ljc3TDE4LjM5IDE4SDUuNjFMMTIgNy43N00xMiA0TDIgMjBoMjBMMTIgNHpcIi8+PC9zdmc+YCxcblx0Y2hlY2s6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXpcIi8+PC9zdmc+YCxcblx0Y2hlY2tCb3g6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCIvPjwvc3ZnPmAsXG5cdGNoZWNrQm94T3V0bGluZUJsYW5rOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpcIi8+PC9zdmc+YCxcblx0Y2hlY2tDaXJjbGU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elwiLz48L3N2Zz5gLFxuXHRjaGV2cm9uTGVmdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCIvPjwvc3ZnPmAsXG5cdGNoZXZyb25SaWdodDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elwiLz48L3N2Zz5gLFxuXHRjaHJvbWVSZWFkZXJNb2RlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTMgMTJoN3YxLjVoLTd6bTAtMi41aDdWMTFoLTd6bTAgNWg3VjE2aC03ek0yMSA0SDNjLTEuMSAwLTIgLjktMiAydjEzYzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNWgtOVY2aDl2MTN6XCIvPjwvc3ZnPmAsXG5cdGNsYXNzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTggMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTYgNGg1djhsLTIuNS0xLjVMNiAxMlY0elwiLz48L3N2Zz5gLFxuXHRjbGVhcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIi8+PC9zdmc+YCxcblx0Y2xvc2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPjwvc3ZnPmAsXG5cdGNsb3VkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2elwiLz48L3N2Zz5gLFxuXHRjbG91ZENpcmNsZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTQuNSAxNEg4Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zbC4xNC4wMUM4LjU4IDguMjggMTAuMTMgNyAxMiA3YzIuMjEgMCA0IDEuNzkgNCA0aC41YzEuMzggMCAyLjUgMS4xMiAyLjUgMi41UzE3Ljg4IDE2IDE2LjUgMTZ6XCIvPjwvc3ZnPmAsXG5cdGNsb3VkRG9uZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTAgMTdsLTMuNS0zLjUgMS40MS0xLjQxTDEwIDE0LjE3IDE1LjE4IDlsMS40MSAxLjQxTDEwIDE3elwiLz48L3N2Zz5gLFxuXHRjbG91ZERvd25sb2FkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNyAxM2wtNSA1LTUtNWgzVjloNHY0aDN6XCIvPjwvc3ZnPmAsXG5cdGNsb3VkT2ZmOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDRjLTEuNDggMC0yLjg1LjQzLTQuMDEgMS4xN2wxLjQ2IDEuNDZDMTAuMjEgNi4yMyAxMS4wOCA2IDEyIDZjMy4wNCAwIDUuNSAyLjQ2IDUuNSA1LjV2LjVIMTljMS42NiAwIDMgMS4zNCAzIDMgMCAxLjEzLS42NCAyLjExLTEuNTYgMi42MmwxLjQ1IDEuNDVDMjMuMTYgMTguMTYgMjQgMTYuNjggMjQgMTVjMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTMgNS4yN2wyLjc1IDIuNzRDMi41NiA4LjE1IDAgMTAuNzcgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxMS43M2wyIDJMMjEgMjAuNzMgNC4yNyA0IDMgNS4yN3pNNy43MyAxMGw4IDhINmMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNGgxLjczelwiLz48L3N2Zz5gLFxuXHRjbG91ZFF1ZXVlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xOSAxOEg2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00aC43MUM3LjM3IDcuNjkgOS40OCA2IDEyIDZjMy4wNCAwIDUuNSAyLjQ2IDUuNSA1LjV2LjVIMTljMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDN6XCIvPjwvc3ZnPmAsXG5cdGNsb3VkVXBsb2FkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcIi8+PC9zdmc+YCxcblx0Y29kZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XCIvPjwvc3ZnPmAsXG5cdGNvbXBhcmVBcnJvd3M6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk05LjAxIDE0SDJ2Mmg3LjAxdjNMMTMgMTVsLTMuOTktNHYzem01Ljk4LTF2LTNIMjJWOGgtNy4wMVY1TDExIDlsMy45OSA0elwiLz48L3N2Zz5gLFxuXHRjb21wdXRlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwIDE4YzEuMSAwIDEuOTktLjkgMS45OS0yTDIyIDZjMC0xLjEtLjktMi0yLTJINGMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMkgwdjJoMjR2LTJoLTR6TTQgNmgxNnYxMEg0VjZ6XCIvPjwvc3ZnPmAsXG5cdGNvbnRlbnRDb3B5OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTYgMUg0Yy0xLjEgMC0yIC45LTIgMnYxNGgyVjNoMTJWMXptMyA0SDhjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTFjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnptMCAxNkg4VjdoMTF2MTR6XCIvPjwvc3ZnPmAsXG5cdGNvbnRlbnRDdXQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk05LjY0IDcuNjRjLjIzLS41LjM2LTEuMDUuMzYtMS42NCAwLTIuMjEtMS43OS00LTQtNFMyIDMuNzkgMiA2czEuNzkgNCA0IDRjLjU5IDAgMS4xNC0uMTMgMS42NC0uMzZMMTAgMTJsLTIuMzYgMi4zNkM3LjE0IDE0LjEzIDYuNTkgMTQgNiAxNGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00YzAtLjU5LS4xMy0xLjE0LS4zNi0xLjY0TDEyIDE0bDcgN2gzdi0xTDkuNjQgNy42NHpNNiA4Yy0xLjEgMC0yLS44OS0yLTJzLjktMiAyLTIgMiAuODkgMiAyLS45IDItMiAyem0wIDEyYy0xLjEgMC0yLS44OS0yLTJzLjktMiAyLTIgMiAuODkgMiAyLS45IDItMiAyem02LTcuNWMtLjI4IDAtLjUtLjIyLS41LS41cy4yMi0uNS41LS41LjUuMjIuNS41LS4yMi41LS41LjV6TTE5IDNsLTYgNiAyIDIgNy03VjN6XCIvPjwvc3ZnPmAsXG5cdGNvbnRlbnRQYXN0ZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnpcIi8+PC9zdmc+YCxcblx0Y29weXJpZ2h0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTAuMDggMTAuODZjLjA1LS4zMy4xNi0uNjIuMy0uODdzLjM0LS40Ni41OS0uNjJjLjI0LS4xNS41NC0uMjIuOTEtLjIzLjIzLjAxLjQ0LjA1LjYzLjEzLjIuMDkuMzguMjEuNTIuMzZzLjI1LjMzLjM0LjUzLjEzLjQyLjE0LjY0aDEuNzljLS4wMi0uNDctLjExLS45LS4yOC0xLjI5cy0uNC0uNzMtLjctMS4wMS0uNjYtLjUtMS4wOC0uNjYtLjg4LS4yMy0xLjM5LS4yM2MtLjY1IDAtMS4yMi4xMS0xLjcuMzRzLS44OC41My0xLjIuOTItLjU2Ljg0LS43MSAxLjM2UzggMTEuMjkgOCAxMS44N3YuMjdjMCAuNTguMDggMS4xMi4yMyAxLjY0cy4zOS45Ny43MSAxLjM1LjcyLjY5IDEuMi45MSAxLjA1LjM0IDEuNy4zNGMuNDcgMCAuOTEtLjA4IDEuMzItLjIzcy43Ny0uMzYgMS4wOC0uNjMuNTYtLjU4Ljc0LS45NC4yOS0uNzQuMy0xLjE1aC0xLjc5Yy0uMDEuMjEtLjA2LjQtLjE1LjU4cy0uMjEuMzMtLjM2LjQ2LS4zMi4yMy0uNTIuM2MtLjE5LjA3LS4zOS4wOS0uNi4xLS4zNi0uMDEtLjY2LS4wOC0uODktLjIzLS4yNS0uMTYtLjQ1LS4zNy0uNTktLjYycy0uMjUtLjU1LS4zLS44OC0uMDgtLjY3LS4wOC0xdi0uMjdjMC0uMzUuMDMtLjY4LjA4LTEuMDF6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elwiLz48L3N2Zz5gLFxuXHRjcmVhdGU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XCIvPjwvc3ZnPmAsXG5cdGNyZWF0ZU5ld0ZvbGRlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnpcIi8+PC9zdmc+YCxcblx0Y3JlZGl0Q2FyZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwIDRINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmMwLTEuMTEtLjg5LTItMi0yem0wIDE0SDR2LTZoMTZ2NnptMC0xMEg0VjZoMTZ2MnpcIi8+PC9zdmc+YCxcblx0ZGFzaGJvYXJkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMyAxM2g4VjNIM3YxMHptMCA4aDh2LTZIM3Y2em0xMCAwaDhWMTFoLTh2MTB6bTAtMTh2Nmg4VjNoLTh6XCIvPjwvc3ZnPmAsXG5cdGRhdGVSYW5nZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTkgMTFIN3YyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTItN2gtMVYyaC0ydjJIOFYySDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDIwYzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY5aDE0djExelwiLz48L3N2Zz5gLFxuXHRkZWxldGU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6TTE5IDRoLTMuNWwtMS0xaC01bC0xIDFINXYyaDE0VjR6XCIvPjwvc3ZnPmAsXG5cdGRlbGV0ZUZvcmV2ZXI6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6bTIuNDYtNy4xMmwxLjQxLTEuNDFMMTIgMTIuNTlsMi4xMi0yLjEyIDEuNDEgMS40MUwxMy40MSAxNGwyLjEyIDIuMTItMS40MSAxLjQxTDEyIDE1LjQxbC0yLjEyIDIuMTItMS40MS0xLjQxTDEwLjU5IDE0bC0yLjEzLTIuMTJ6TTE1LjUgNGwtMS0xaC01bC0xIDFINXYyaDE0VjR6XCIvPjwvc3ZnPmAsXG5cdGRlbGV0ZVN3ZWVwOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTUgMTZoNHYyaC00em0wLThoN3YyaC03em0wIDRoNnYyaC02ek0zIDE4YzAgMS4xLjkgMiAyIDJoNmMxLjEgMCAyLS45IDItMlY4SDN2MTB6TTE0IDVoLTNsLTEtMUg2TDUgNUgydjJoMTJ6XCIvPjwvc3ZnPmAsXG5cdGRlc2NyaXB0aW9uOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTQgMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjMS4xIDAgMi0uOSAyLTJWOGwtNi02em0yIDE2SDh2LTJoOHYyem0wLTRIOHYtMmg4djJ6bS0zLTVWMy41TDE4LjUgOUgxM3pcIi8+PC9zdmc+YCxcblx0ZG5zOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgMTNINGMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTZjLjU1IDAgMS0uNDUgMS0xdi02YzAtLjU1LS40NS0xLTEtMXpNNyAxOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6TTIwIDNINGMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTZjLjU1IDAgMS0uNDUgMS0xVjRjMC0uNTUtLjQ1LTEtMS0xek03IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelwiLz48L3N2Zz5gLFxuXHRkb25lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yelwiLz48L3N2Zz5gLFxuXHRkb25lQWxsOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTggN2wtMS40MS0xLjQxLTYuMzQgNi4zNCAxLjQxIDEuNDFMMTggN3ptNC4yNC0xLjQxTDExLjY2IDE2LjE3IDcuNDggMTJsLTEuNDEgMS40MUwxMS42NiAxOWwxMi0xMi0xLjQyLTEuNDF6TS40MSAxMy40MUw2IDE5bDEuNDEtMS40MUwxLjgzIDEyIC40MSAxMy40MXpcIi8+PC9zdmc+YCxcblx0ZG9udXRMYXJnZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTExIDUuMDhWMmMtNSAuNS05IDQuODEtOSAxMHM0IDkuNSA5IDEwdi0zLjA4Yy0zLS40OC02LTMuNC02LTYuOTJzMy02LjQ0IDYtNi45MnpNMTguOTcgMTFIMjJjLS40Ny01LTQtOC41My05LTl2My4wOEMxNiA1LjUxIDE4LjU0IDggMTguOTcgMTF6TTEzIDE4LjkyVjIyYzUtLjQ3IDguNTMtNCA5LTloLTMuMDNjLS40MyAzLTIuOTcgNS40OS01Ljk3IDUuOTJ6XCIvPjwvc3ZnPmAsXG5cdGRvbnV0U21hbGw6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMSA5LjE2VjJjLTUgLjUtOSA0Ljc5LTkgMTBzNCA5LjUgOSAxMHYtNy4xNmMtMS0uNDEtMi0xLjUyLTItMi44NHMxLTIuNDMgMi0yLjg0ek0xNC44NiAxMUgyMmMtLjQ4LTQuNzUtNC04LjUzLTktOXY3LjE2YzEgLjMgMS41Mi45OCAxLjg2IDEuODR6TTEzIDE0Ljg0VjIyYzUtLjQ3IDguNTItNC4yNSA5LTloLTcuMTRjLS4zNC44Ni0uODYgMS41NC0xLjg2IDEuODR6XCIvPjwvc3ZnPmAsXG5cdGRyYWZ0czogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIxLjk5IDhjMC0uNzItLjM3LTEuMzUtLjk0LTEuN0wxMiAxIDIuOTUgNi4zQzIuMzggNi42NSAyIDcuMjggMiA4djEwYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJsLS4wMS0xMHpNMTIgMTNMMy43NCA3Ljg0IDEyIDNsOC4yNiA0Ljg0TDEyIDEzelwiLz48L3N2Zz5gLFxuXHRlamVjdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTUgMTdoMTR2Mkg1em03LTEyTDUuMzMgMTVoMTMuMzR6XCIvPjwvc3ZnPmAsXG5cdGVycm9yOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcIi8+PC9zdmc+YCxcblx0ZXJyb3JPdXRsaW5lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEgMTVoMnYyaC0yem0wLThoMnY2aC0yem0uOTktNUM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elwiLz48L3N2Zz5gLFxuXHRldXJvU3ltYm9sOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTUgMTguNWMtMi41MSAwLTQuNjgtMS40Mi01Ljc2LTMuNUgxNXYtMkg4LjU4Yy0uMDUtLjMzLS4wOC0uNjYtLjA4LTFzLjAzLS42Ny4wOC0xSDE1VjlIOS4yNEMxMC4zMiA2LjkyIDEyLjUgNS41IDE1IDUuNWMxLjYxIDAgMy4wOS41OSA0LjIzIDEuNTdMMjEgNS4zQzE5LjQxIDMuODcgMTcuMyAzIDE1IDNjLTMuOTIgMC03LjI0IDIuNTEtOC40OCA2SDN2MmgzLjA2Yy0uMDQuMzMtLjA2LjY2LS4wNiAxIDAgLjM0LjAyLjY3LjA2IDFIM3YyaDMuNTJjMS4yNCAzLjQ5IDQuNTYgNiA4LjQ4IDYgMi4zMSAwIDQuNDEtLjg3IDYtMi4zbC0xLjc4LTEuNzdjLTEuMTMuOTgtMi42IDEuNTctNC4yMiAxLjU3elwiLz48L3N2Zz5gLFxuXHRldmVudDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE3IDEyaC01djVoNXYtNXpNMTYgMXYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yaC0xVjFoLTJ6bTMgMThINVY4aDE0djExelwiLz48L3N2Zz5gLFxuXHRldmVudFNlYXQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk00IDE4djNoM3YtM2gxMHYzaDN2LTZINHptMTUtOGgzdjNoLTN6TTIgMTBoM3YzSDJ6bTE1IDNIN1Y1YzAtMS4xLjktMiAyLTJoNmMxLjEgMCAyIC45IDIgMnY4elwiLz48L3N2Zz5gLFxuXHRleGl0VG9BcHA6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMC4wOSAxNS41OUwxMS41IDE3bDUtNS01LTUtMS40MSAxLjQxTDEyLjY3IDExSDN2Mmg5LjY3bC0yLjU4IDIuNTl6TTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjRoMlY1aDE0djE0SDV2LTRIM3Y0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6XCIvPjwvc3ZnPmAsXG5cdGV4cGFuZExlc3M6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiA4bC02IDYgMS40MSAxLjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNHpcIi8+PC9zdmc+YCxcblx0ZXhwYW5kTW9yZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE2LjU5IDguNTlMMTIgMTMuMTcgNy40MSA4LjU5IDYgMTBsNiA2IDYtNnpcIi8+PC9zdmc+YCxcblx0ZXhwbG9yZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDEwLjljLS42MSAwLTEuMS40OS0xLjEgMS4xcy40OSAxLjEgMS4xIDEuMWMuNjEgMCAxLjEtLjQ5IDEuMS0xLjFzLS40OS0xLjEtMS4xLTEuMXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMi4xOSAxMi4xOUw2IDE4bDMuODEtOC4xOUwxOCA2bC0zLjgxIDguMTl6XCIvPjwvc3ZnPmAsXG5cdGV4dGVuc2lvbjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExelwiLz48L3N2Zz5gLFxuXHRmYWNlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNOSAxMS43NWMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjVzLjU2IDEuMjUgMS4yNSAxLjI1IDEuMjUtLjU2IDEuMjUtMS4yNS0uNTYtMS4yNS0xLjI1LTEuMjV6bTYgMGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjVzLjU2IDEuMjUgMS4yNSAxLjI1IDEuMjUtLjU2IDEuMjUtMS4yNS0uNTYtMS4yNS0xLjI1LTEuMjV6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04IDAtLjI5LjAyLS41OC4wNS0uODYgMi4zNi0xLjA1IDQuMjMtMi45OCA1LjIxLTUuMzdDMTEuMDcgOC4zMyAxNC4wNSAxMCAxNy40MiAxMGMuNzggMCAxLjUzLS4wOSAyLjI1LS4yNi4yMS43MS4zMyAxLjQ3LjMzIDIuMjYgMCA0LjQxLTMuNTkgOC04IDh6XCIvPjwvc3ZnPmAsXG5cdGZhdm9yaXRlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcIi8+PC9zdmc+YCxcblx0ZmF2b3JpdGVCb3JkZXI6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNi41IDNjLTEuNzQgMC0zLjQxLjgxLTQuNSAyLjA5QzEwLjkxIDMuODEgOS4yNCAzIDcuNSAzIDQuNDIgMyAyIDUuNDIgMiA4LjVjMCAzLjc4IDMuNCA2Ljg2IDguNTUgMTEuNTRMMTIgMjEuMzVsMS40NS0xLjMyQzE4LjYgMTUuMzYgMjIgMTIuMjggMjIgOC41IDIyIDUuNDIgMTkuNTggMyAxNi41IDN6bS00LjQgMTUuNTVsLS4xLjEtLjEtLjFDNy4xNCAxNC4yNCA0IDExLjM5IDQgOC41IDQgNi41IDUuNSA1IDcuNSA1YzEuNTQgMCAzLjA0Ljk5IDMuNTcgMi4zNmgxLjg3QzEzLjQ2IDUuOTkgMTQuOTYgNSAxNi41IDVjMiAwIDMuNSAxLjUgMy41IDMuNSAwIDIuODktMy4xNCA1Ljc0LTcuOSAxMC4wNXpcIi8+PC9zdmc+YCxcblx0ZmVlZGJhY2s6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTcgMTJoLTJ2LTJoMnYyem0wLTRoLTJWNmgydjR6XCIvPjwvc3ZnPmAsXG5cdGZpbGVEb3dubG9hZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXpcIi8+PC9zdmc+YCxcblx0ZmlsZVVwbG9hZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1elwiLz48L3N2Zz5gLFxuXHRmaWx0ZXJMaXN0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTAgMThoNHYtMmgtNHYyek0zIDZ2MmgxOFY2SDN6bTMgN2gxMnYtMkg2djJ6XCIvPjwvc3ZnPmAsXG5cdGZpbmRJblBhZ2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCAxOS41OVY4bC02LTZINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4Yy40NSAwIC44NS0uMTUgMS4xOS0uNGwtNC40My00LjQzYy0uOC41Mi0xLjc0LjgzLTIuNzYuODMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1YzAgMS4wMi0uMzEgMS45Ni0uODMgMi43NUwyMCAxOS41OXpNOSAxM2MwIDEuNjYgMS4zNCAzIDMgM3MzLTEuMzQgMy0zLTEuMzQtMy0zLTMtMyAxLjM0LTMgM3pcIi8+PC9zdmc+YCxcblx0ZmluZFJlcGxhY2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMSA2YzEuMzggMCAyLjYzLjU2IDMuNTQgMS40NkwxMiAxMGg2VjRsLTIuMDUgMi4wNUMxNC42OCA0Ljc4IDEyLjkzIDQgMTEgNGMtMy41MyAwLTYuNDMgMi42MS02LjkyIDZINi4xYy40Ni0yLjI4IDIuNDgtNCA0LjktNHptNS42NCA5LjE0Yy42Ni0uOSAxLjEyLTEuOTcgMS4yOC0zLjE0SDE1LjljLS40NiAyLjI4LTIuNDggNC00LjkgNC0xLjM4IDAtMi42My0uNTYtMy41NC0xLjQ2TDEwIDEySDR2NmwyLjA1LTIuMDVDNy4zMiAxNy4yMiA5LjA3IDE4IDExIDE4YzEuNTUgMCAyLjk4LS41MSA0LjE0LTEuMzZMMjAgMjEuNDkgMjEuNDkgMjBsLTQuODUtNC44NnpcIi8+PC9zdmc+YCxcblx0ZmluZ2VycHJpbnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNy44MSA0LjQ3Yy0uMDggMC0uMTYtLjAyLS4yMy0uMDZDMTUuNjYgMy40MiAxNCAzIDEyLjAxIDNjLTEuOTggMC0zLjg2LjQ3LTUuNTcgMS40MS0uMjQuMTMtLjU0LjA0LS42OC0uMi0uMTMtLjI0LS4wNC0uNTUuMi0uNjhDNy44MiAyLjUyIDkuODYgMiAxMi4wMSAyYzIuMTMgMCAzLjk5LjQ3IDYuMDMgMS41Mi4yNS4xMy4zNC40My4yMS42Ny0uMDkuMTgtLjI2LjI4LS40NC4yOHpNMy41IDkuNzJjLS4xIDAtLjItLjAzLS4yOS0uMDktLjIzLS4xNi0uMjgtLjQ3LS4xMi0uNy45OS0xLjQgMi4yNS0yLjUgMy43NS0zLjI3QzkuOTggNC4wNCAxNCA0LjAzIDE3LjE1IDUuNjVjMS41Ljc3IDIuNzYgMS44NiAzLjc1IDMuMjUuMTYuMjIuMTEuNTQtLjEyLjctLjIzLjE2LS41NC4xMS0uNy0uMTItLjktMS4yNi0yLjA0LTIuMjUtMy4zOS0yLjk0LTIuODctMS40Ny02LjU0LTEuNDctOS40LjAxLTEuMzYuNy0yLjUgMS43LTMuNCAyLjk2LS4wOC4xNC0uMjMuMjEtLjM5LjIxem02LjI1IDEyLjA3Yy0uMTMgMC0uMjYtLjA1LS4zNS0uMTUtLjg3LS44Ny0xLjM0LTEuNDMtMi4wMS0yLjY0LS42OS0xLjIzLTEuMDUtMi43My0xLjA1LTQuMzQgMC0yLjk3IDIuNTQtNS4zOSA1LjY2LTUuMzlzNS42NiAyLjQyIDUuNjYgNS4zOWMwIC4yOC0uMjIuNS0uNS41cy0uNS0uMjItLjUtLjVjMC0yLjQyLTIuMDktNC4zOS00LjY2LTQuMzktMi41NyAwLTQuNjYgMS45Ny00LjY2IDQuMzkgMCAxLjQ0LjMyIDIuNzcuOTMgMy44NS42NCAxLjE1IDEuMDggMS42NCAxLjg1IDIuNDIuMTkuMi4xOS41MSAwIC43MS0uMTEuMS0uMjQuMTUtLjM3LjE1em03LjE3LTEuODVjLTEuMTkgMC0yLjI0LS4zLTMuMS0uODktMS40OS0xLjAxLTIuMzgtMi42NS0yLjM4LTQuMzkgMC0uMjguMjItLjUuNS0uNXMuNS4yMi41LjVjMCAxLjQxLjcyIDIuNzQgMS45NCAzLjU2LjcxLjQ4IDEuNTQuNzEgMi41NC43MS4yNCAwIC42NC0uMDMgMS4wNC0uMS4yNy0uMDUuNTMuMTMuNTguNDEuMDUuMjctLjEzLjUzLS40MS41OC0uNTcuMTEtMS4wNy4xMi0xLjIxLjEyek0xNC45MSAyMmMtLjA0IDAtLjA5LS4wMS0uMTMtLjAyLTEuNTktLjQ0LTIuNjMtMS4wMy0zLjcyLTIuMS0xLjQtMS4zOS0yLjE3LTMuMjQtMi4xNy01LjIyIDAtMS42MiAxLjM4LTIuOTQgMy4wOC0yLjk0IDEuNyAwIDMuMDggMS4zMiAzLjA4IDIuOTQgMCAxLjA3LjkzIDEuOTQgMi4wOCAxLjk0czIuMDgtLjg3IDIuMDgtMS45NGMwLTMuNzctMy4yNS02LjgzLTcuMjUtNi44My0yLjg0IDAtNS40NCAxLjU4LTYuNjEgNC4wMy0uMzkuODEtLjU5IDEuNzYtLjU5IDIuOCAwIC43OC4wNyAyLjAxLjY3IDMuNjEuMS4yNi0uMDMuNTUtLjI5LjY0LS4yNi4xLS41NS0uMDQtLjY0LS4yOS0uNDktMS4zMS0uNzMtMi42MS0uNzMtMy45NiAwLTEuMi4yMy0yLjI5LjY4LTMuMjQgMS4zMy0yLjc5IDQuMjgtNC42IDcuNTEtNC42IDQuNTUgMCA4LjI1IDMuNTEgOC4yNSA3LjgzIDAgMS42Mi0xLjM4IDIuOTQtMy4wOCAyLjk0cy0zLjA4LTEuMzItMy4wOC0yLjk0YzAtMS4wNy0uOTMtMS45NC0yLjA4LTEuOTRzLTIuMDguODctMi4wOCAxLjk0YzAgMS43MS42NiAzLjMxIDEuODcgNC41MS45NS45NCAxLjg2IDEuNDYgMy4yNyAxLjg1LjI3LjA3LjQyLjM1LjM1LjYxLS4wNS4yMy0uMjYuMzgtLjQ3LjM4elwiLz48L3N2Zz5gLFxuXHRmaXJzdFBhZ2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOC40MSAxNi41OUwxMy44MiAxMmw0LjU5LTQuNTlMMTcgNmwtNiA2IDYgNnpNNiA2aDJ2MTJINnpcIi8+PC9zdmc+YCxcblx0ZmxhZzogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE0LjQgNkwxNCA0SDV2MTdoMnYtN2g1LjZsLjQgMmg3VjZ6XCIvPjwvc3ZnPmAsXG5cdGZsaWdodExhbmQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yLjUgMTloMTl2MmgtMTl6bTcuMTgtNS43M2w0LjM1IDEuMTYgNS4zMSAxLjQyYy44LjIxIDEuNjItLjI2IDEuODQtMS4wNi4yMS0uOC0uMjYtMS42Mi0xLjA2LTEuODRsLTUuMzEtMS40Mi0yLjc2LTkuMDJMMTAuMTIgMnY4LjI4TDUuMTUgOC45NWwtLjkzLTIuMzItMS40NS0uMzl2NS4xN2wxLjYuNDMgNS4zMSAxLjQzelwiLz48L3N2Zz5gLFxuXHRmbGlnaHRUYWtlb2ZmOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMi41IDE5aDE5djJoLTE5em0xOS41Ny05LjM2Yy0uMjEtLjgtMS4wNC0xLjI4LTEuODQtMS4wNkwxNC45MiAxMGwtNi45LTYuNDMtMS45My41MSA0LjE0IDcuMTctNC45NyAxLjMzLTEuOTctMS41NC0xLjQ1LjM5IDEuODIgMy4xNi43NyAxLjMzIDEuNi0uNDMgNS4zMS0xLjQyIDQuMzUtMS4xNkwyMSAxMS40OWMuODEtLjIzIDEuMjgtMS4wNSAxLjA3LTEuODV6XCIvPjwvc3ZnPmAsXG5cdGZsaXBUb0JhY2s6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk05IDdIN3YyaDJWN3ptMCA0SDd2Mmgydi0yem0wLThjLTEuMTEgMC0yIC45LTIgMmgyVjN6bTQgMTJoLTJ2Mmgydi0yem02LTEydjJoMmMwLTEuMS0uOS0yLTItMnptLTYgMGgtMnYyaDJWM3pNOSAxN3YtMkg3YzAgMS4xLjg5IDIgMiAyem0xMC00aDJ2LTJoLTJ2MnptMC00aDJWN2gtMnYyem0wIDhjMS4xIDAgMi0uOSAyLTJoLTJ2MnpNNSA3SDN2MTJjMCAxLjEuODkgMiAyIDJoMTJ2LTJINVY3em0xMC0yaDJWM2gtMnYyem0wIDEyaDJ2LTJoLTJ2MnpcIi8+PC9zdmc+YCxcblx0ZmxpcFRvRnJvbnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0zIDEzaDJ2LTJIM3Yyem0wIDRoMnYtMkgzdjJ6bTIgNHYtMkgzYzAgMS4xLjg5IDIgMiAyek0zIDloMlY3SDN2MnptMTIgMTJoMnYtMmgtMnYyem00LTE4SDljLTEuMTEgMC0yIC45LTIgMnYxMGMwIDEuMS44OSAyIDIgMmgxMGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDEySDlWNWgxMHYxMHptLTggNmgydi0yaC0ydjJ6bS00IDBoMnYtMkg3djJ6XCIvPjwvc3ZnPmAsXG5cdGZvbGRlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMmgtOGwtMi0yelwiLz48L3N2Zz5gLFxuXHRmb2xkZXJPcGVuOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNmgtOGwtMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bTAgMTJINFY4aDE2djEwelwiLz48L3N2Zz5gLFxuXHRmb2xkZXJTaGFyZWQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCA2aC04bC0yLTJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnptLTUgM2MxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6bTQgOGgtOHYtMWMwLTEuMzMgMi42Ny0yIDQtMnM0IC42NyA0IDJ2MXpcIi8+PC9zdmc+YCxcblx0Zm9udERvd25sb2FkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNOS45MyAxMy41aDQuMTRMMTIgNy45OHpNMjAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS00LjA1IDE2LjVsLTEuMTQtM0g5LjE3bC0xLjEyIDNINS45Nmw1LjExLTEzaDEuODZsNS4xMSAxM2gtMi4wOXpcIi8+PC9zdmc+YCxcblx0Zm9yd2FyZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDhWNGw4IDgtOCA4di00SDRWOHpcIi8+PC9zdmc+YCxcblx0ZnVsbHNjcmVlbjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTcgMTRINXY1aDV2LTJIN3YtM3ptLTItNGgyVjdoM1Y1SDV2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTQgNXYyaDN2M2gyVjVoLTV6XCIvPjwvc3ZnPmAsXG5cdGZ1bGxzY3JlZW5FeGl0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNSAxNmgzdjNoMnYtNUg1djJ6bTMtOEg1djJoNVY1SDh2M3ptNiAxMWgydi0zaDN2LTJoLTV2NXptMi0xMVY1aC0ydjVoNVY4aC0zelwiLz48L3N2Zz5gLFxuXHRnVHJhbnNsYXRlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNWgtOS4xMkwxMCAySDRjLTEuMSAwLTIgLjktMiAydjEzYzAgMS4xLjkgMiAyIDJoN2wxIDNoOGMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yek03LjE3IDE0LjU5Yy0yLjI1IDAtNC4wOS0xLjgzLTQuMDktNC4wOXMxLjgzLTQuMDkgNC4wOS00LjA5YzEuMDQgMCAxLjk5LjM3IDIuNzQgMS4wN2wuMDcuMDYtMS4yMyAxLjE4LS4wNi0uMDVjLS4yOS0uMjctLjc4LS41OS0xLjUyLS41OS0xLjMxIDAtMi4zOCAxLjA5LTIuMzggMi40MnMxLjA3IDIuNDIgMi4zOCAyLjQyYzEuMzcgMCAxLjk2LS44NyAyLjEyLTEuNDZINy4wOFY5LjkxaDMuOTVsLjAxLjA3Yy4wNC4yMS4wNS40LjA1LjYxIDAgMi4zNS0xLjYxIDQtMy45MiA0em02LjAzLTEuNzFjLjMzLjYuNzQgMS4xOCAxLjE5IDEuN2wtLjU0LjUzLS42NS0yLjIzem0uNzctLjc2aC0uOTlsLS4zMS0xLjA0aDMuOTlzLS4zNCAxLjMxLTEuNTYgMi43NGMtLjUyLS42Mi0uODktMS4yMy0xLjEzLTEuN3pNMjEgMjBjMCAuNTUtLjQ1IDEtMSAxaC03bDItMi0uODEtMi43Ny45Mi0uOTJMMTcuNzkgMThsLjczLS43My0yLjcxLTIuNjhjLjktMS4wMyAxLjYtMi4yNSAxLjkyLTMuNTFIMTl2LTEuMDRoLTMuNjRWOWgtMS4wNHYxLjA0aC0xLjk2TDExLjE4IDZIMjBjLjU1IDAgMSAuNDUgMSAxdjEzelwiLz48L3N2Zz5gLFxuXHRnYXZlbDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEgMjFoMTJ2Mkgxek01LjI0NSA4LjA3bDIuODMtMi44MjcgMTQuMTQgMTQuMTQyLTIuODI4IDIuODI4ek0xMi4zMTcgMWw1LjY1NyA1LjY1Ni0yLjgzIDIuODMtNS42NTQtNS42NnpNMy44MjUgOS40ODVsNS42NTcgNS42NTctMi44MjggMi44MjgtNS42NTctNS42NTd6XCIvPjwvc3ZnPmAsXG5cdGdlc3R1cmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk00LjU5IDYuODljLjctLjcxIDEuNC0xLjM1IDEuNzEtMS4yMi41LjIgMCAxLjAzLS4zIDEuNTItLjI1LjQyLTIuODYgMy44OS0yLjg2IDYuMzEgMCAxLjI4LjQ4IDIuMzQgMS4zNCAyLjk4Ljc1LjU2IDEuNzQuNzMgMi42NC40NiAxLjA3LS4zMSAxLjk1LTEuNCAzLjA2LTIuNzcgMS4yMS0xLjQ5IDIuODMtMy40NCA0LjA4LTMuNDQgMS42MyAwIDEuNjUgMS4wMSAxLjc2IDEuNzktMy43OC42NC01LjM4IDMuNjctNS4zOCA1LjM3IDAgMS43IDEuNDQgMy4wOSAzLjIxIDMuMDkgMS42MyAwIDQuMjktMS4zMyA0LjY5LTYuMUgyMXYtMi41aC0yLjQ3Yy0uMTUtMS42NS0xLjA5LTQuMi00LjAzLTQuMi0yLjI1IDAtNC4xOCAxLjkxLTQuOTQgMi44NC0uNTguNzMtMi4wNiAyLjQ4LTIuMjkgMi43Mi0uMjUuMy0uNjguODQtMS4xMS44NC0uNDUgMC0uNzItLjgzLS4zNi0xLjkyLjM1LTEuMDkgMS40LTIuODYgMS44NS0zLjUyLjc4LTEuMTQgMS4zLTEuOTIgMS4zLTMuMjhDOC45NSAzLjY5IDcuMzEgMyA2LjQ0IDMgNS4xMiAzIDMuOTcgNCAzLjcyIDQuMjVjLS4zNi4zNi0uNjYuNjYtLjg4LjkzbDEuNzUgMS43MXptOS4yOSAxMS42NmMtLjMxIDAtLjc0LS4yNi0uNzQtLjcyIDAtLjYuNzMtMi4yIDIuODctMi43Ni0uMyAyLjY5LTEuNDMgMy40OC0yLjEzIDMuNDh6XCIvPjwvc3ZnPmAsXG5cdGdldEFwcDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXpcIi8+PC9zdmc+YCxcblx0Z2lmOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEuNSA5SDEzdjZoLTEuNXpNOSA5SDZjLS42IDAtMSAuNS0xIDF2NGMwIC41LjQgMSAxIDFoM2MuNiAwIDEtLjUgMS0xdi0ySDguNXYxLjVoLTJ2LTNIMTBWMTBjMC0uNS0uNC0xLTEtMXptMTAgMS41VjloLTQuNXY2SDE2di0yaDJ2LTEuNWgtMnYtMXpcIi8+PC9zdmc+YCxcblx0Z3JhZGU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcIi8+PC9zdmc+YCxcblx0Z3JvdXBXb3JrOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnpNOCAxNy41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpNOS41IDhjMC0xLjM4IDEuMTItMi41IDIuNS0yLjVzMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41UzkuNSA5LjM4IDkuNSA4em02LjUgOS41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpcIi8+PC9zdmc+YCxcblx0aGVscDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTdoLTJ2LTJoMnYyem0yLjA3LTcuNzVsLS45LjkyQzEzLjQ1IDEyLjkgMTMgMTMuNSAxMyAxNWgtMnYtLjVjMC0xLjEuNDUtMi4xIDEuMTctMi44M2wxLjI0LTEuMjZjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJIOGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgLjg4LS4zNiAxLjY4LS45MyAyLjI1elwiLz48L3N2Zz5gLFxuXHRoZWxwT3V0bGluZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTExIDE4aDJ2LTJoLTJ2MnptMS0xNkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTAtMTRjLTIuMjEgMC00IDEuNzktNCA0aDJjMC0xLjEuOS0yIDItMnMyIC45IDIgMmMwIDItMyAxLjc1LTMgNWgyYzAtMi4yNSAzLTIuNSAzLTUgMC0yLjIxLTEuNzktNC00LTR6XCIvPjwvc3ZnPmAsXG5cdGhpZ2hsaWdodE9mZjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE0LjU5IDhMMTIgMTAuNTkgOS40MSA4IDggOS40MSAxMC41OSAxMiA4IDE0LjU5IDkuNDEgMTYgMTIgMTMuNDEgMTQuNTkgMTYgMTYgMTQuNTkgMTMuNDEgMTIgMTYgOS40MSAxNC41OSA4ek0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcIi8+PC9zdmc+YCxcblx0aGlzdG9yeTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnpcIi8+PC9zdmc+YCxcblx0aG9tZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEwIDIwdi02aDR2Nmg1di04aDNMMTIgMyAyIDEyaDN2OHpcIi8+PC9zdmc+YCxcblx0aG91cmdsYXNzRW1wdHk6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk02IDJ2NmguMDFMNiA4LjAxIDEwIDEybC00IDQgLjAxLjAxSDZWMjJoMTJ2LTUuOTloLS4wMUwxOCAxNmwtNC00IDQtMy45OS0uMDEtLjAxSDE4VjJINnptMTAgMTQuNVYyMEg4di0zLjVsNC00IDQgNHptLTQtNWwtNC00VjRoOHYzLjVsLTQgNHpcIi8+PC9zdmc+YCxcblx0aG91cmdsYXNzRnVsbDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTYgMnY2aC4wMUw2IDguMDEgMTAgMTJsLTQgNCAuMDEuMDFINlYyMmgxMnYtNS45OWgtLjAxTDE4IDE2bC00LTQgNC0zLjk5LS4wMS0uMDFIMThWMkg2elwiLz48L3N2Zz5gLFxuXHRodHRwOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNC41IDExaC0yVjlIMXY2aDEuNXYtMi41aDJWMTVINlY5SDQuNXYyem0yLjUtLjVoMS41VjE1SDEwdi00LjVoMS41VjlIN3YxLjV6bTUuNSAwSDE0VjE1aDEuNXYtNC41SDE3VjloLTQuNXYxLjV6bTktMS41SDE4djZoMS41di0yaDJjLjggMCAxLjUtLjcgMS41LTEuNXYtMWMwLS44LS43LTEuNS0xLjUtMS41em0wIDIuNWgtMnYtMWgydjF6XCIvPjwvc3ZnPmAsXG5cdGh0dHBzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZ2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yem0tNiA5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnptMy4xLTlIOC45VjZjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjEgMS43MSAwIDMuMSAxLjM5IDMuMSAzLjF2MnpcIi8+PC9zdmc+YCxcblx0aW1wb3J0YW50RGV2aWNlczogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIzIDExLjAxTDE4IDExYy0uNTUgMC0xIC40NS0xIDF2OWMwIC41NS40NSAxIDEgMWg1Yy41NSAwIDEtLjQ1IDEtMXYtOWMwLS41NS0uNDUtLjk5LTEtLjk5ek0yMyAyMGgtNXYtN2g1djd6TTIwIDJIMkMuODkgMiAwIDIuODkgMCA0djEyYzAgMS4xLjg5IDIgMiAyaDd2Mkg3djJoOHYtMmgtMnYtMmgydi0ySDJWNGgxOHY1aDJWNGMwLTEuMTEtLjktMi0yLTJ6bS04LjAzIDdMMTEgNmwtLjk3IDNIN2wyLjQ3IDEuNzYtLjk0IDIuOTEgMi40Ny0xLjggMi40NyAxLjgtLjk0LTIuOTFMMTUgOWgtMy4wM3pcIi8+PC9zdmc+YCxcblx0aW5ib3g6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAzSDQuOTljLTEuMTEgMC0xLjk4Ljg5LTEuOTggMkwzIDE5YzAgMS4xLjg4IDIgMS45OSAySDE5YzEuMSAwIDItLjkgMi0yVjVjMC0xLjExLS45LTItMi0yem0wIDEyaC00YzAgMS42Ni0xLjM1IDMtMyAzcy0zLTEuMzQtMy0zSDQuOTlWNUgxOXYxMHpcIi8+PC9zdmc+YCxcblx0aW5kZXRlcm1pbmF0ZUNoZWNrQm94OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0yIDEwSDd2LTJoMTB2MnpcIi8+PC9zdmc+YCxcblx0aW5mbzogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTZoMnY2em0wLThoLTJWN2gydjJ6XCIvPjwvc3ZnPmAsXG5cdGluZm9PdXRsaW5lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEgMTdoMnYtNmgtMnY2em0xLTE1QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpNMTEgOWgyVjdoLTJ2MnpcIi8+PC9zdmc+YCxcblx0aW5wdXQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMSAzLjAxSDNjLTEuMSAwLTIgLjktMiAyVjloMlY0Ljk5aDE4djE0LjAzSDNWMTVIMXY0LjAxYzAgMS4xLjkgMS45OCAyIDEuOThoMThjMS4xIDAgMi0uODggMi0xLjk4di0xNGMwLTEuMTEtLjktMi0yLTJ6TTExIDE2bDQtNC00LTR2M0gxdjJoMTB2M3pcIi8+PC9zdmc+YCxcblx0aW52ZXJ0Q29sb3JzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTcuNjYgNy45M0wxMiAyLjI3IDYuMzQgNy45M2MtMy4xMiAzLjEyLTMuMTIgOC4xOSAwIDExLjMxQzcuOSAyMC44IDkuOTUgMjEuNTggMTIgMjEuNThjMi4wNSAwIDQuMS0uNzggNS42Ni0yLjM0IDMuMTItMy4xMiAzLjEyLTguMTkgMC0xMS4zMXpNMTIgMTkuNTljLTEuNiAwLTMuMTEtLjYyLTQuMjQtMS43NkM2LjYyIDE2LjY5IDYgMTUuMTkgNiAxMy41OXMuNjItMy4xMSAxLjc2LTQuMjRMMTIgNS4xdjE0LjQ5elwiLz48L3N2Zz5gLFxuXHRsYWJlbDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE3LjYzIDUuODRDMTcuMjcgNS4zMyAxNi42NyA1IDE2IDVMNSA1LjAxQzMuOSA1LjAxIDMgNS45IDMgN3YxMGMwIDEuMS45IDEuOTkgMiAxLjk5TDE2IDE5Yy42NyAwIDEuMjctLjMzIDEuNjMtLjg0TDIyIDEybC00LjM3LTYuMTZ6XCIvPjwvc3ZnPmAsXG5cdGxhYmVsT3V0bGluZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE3LjYzIDUuODRDMTcuMjcgNS4zMyAxNi42NyA1IDE2IDVMNSA1LjAxQzMuOSA1LjAxIDMgNS45IDMgN3YxMGMwIDEuMS45IDEuOTkgMiAxLjk5TDE2IDE5Yy42NyAwIDEuMjctLjMzIDEuNjMtLjg0TDIyIDEybC00LjM3LTYuMTZ6TTE2IDE3SDVWN2gxMWwzLjU1IDVMMTYgMTd6XCIvPjwvc3ZnPmAsXG5cdGxhbmd1YWdlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnptNi45MyA2aC0yLjk1Yy0uMzItMS4yNS0uNzgtMi40NS0xLjM4LTMuNTYgMS44NC42MyAzLjM3IDEuOTEgNC4zMyAzLjU2ek0xMiA0LjA0Yy44MyAxLjIgMS40OCAyLjUzIDEuOTEgMy45NmgtMy44MmMuNDMtMS40MyAxLjA4LTIuNzYgMS45MS0zLjk2ek00LjI2IDE0QzQuMSAxMy4zNiA0IDEyLjY5IDQgMTJzLjEtMS4zNi4yNi0yaDMuMzhjLS4wOC42Ni0uMTQgMS4zMi0uMTQgMiAwIC42OC4wNiAxLjM0LjE0IDJINC4yNnptLjgyIDJoMi45NWMuMzIgMS4yNS43OCAyLjQ1IDEuMzggMy41Ni0xLjg0LS42My0zLjM3LTEuOS00LjMzLTMuNTZ6bTIuOTUtOEg1LjA4Yy45Ni0xLjY2IDIuNDktMi45MyA0LjMzLTMuNTZDOC44MSA1LjU1IDguMzUgNi43NSA4LjAzIDh6TTEyIDE5Ljk2Yy0uODMtMS4yLTEuNDgtMi41My0xLjkxLTMuOTZoMy44MmMtLjQzIDEuNDMtMS4wOCAyLjc2LTEuOTEgMy45NnpNMTQuMzQgMTRIOS42NmMtLjA5LS42Ni0uMTYtMS4zMi0uMTYtMiAwLS42OC4wNy0xLjM1LjE2LTJoNC42OGMuMDkuNjUuMTYgMS4zMi4xNiAyIDAgLjY4LS4wNyAxLjM0LS4xNiAyem0uMjUgNS41NmMuNi0xLjExIDEuMDYtMi4zMSAxLjM4LTMuNTZoMi45NWMtLjk2IDEuNjUtMi40OSAyLjkzLTQuMzMgMy41NnpNMTYuMzYgMTRjLjA4LS42Ni4xNC0xLjMyLjE0LTIgMC0uNjgtLjA2LTEuMzQtLjE0LTJoMy4zOGMuMTYuNjQuMjYgMS4zMS4yNiAycy0uMSAxLjM2LS4yNiAyaC0zLjM4elwiLz48L3N2Zz5gLFxuXHRsYXN0UGFnZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTUuNTkgNy40MUwxMC4xOCAxMmwtNC41OSA0LjU5TDcgMThsNi02LTYtNnpNMTYgNmgydjEyaC0yelwiLz48L3N2Zz5gLFxuXHRsYXVuY2g6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAxOUg1VjVoN1YzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3pcIi8+PC9zdmc+YCxcblx0bGlnaHRidWxiT3V0bGluZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTkgMjFjMCAuNTUuNDUgMSAxIDFoNGMuNTUgMCAxLS40NSAxLTF2LTFIOXYxem0zLTE5QzguMTQgMiA1IDUuMTQgNSA5YzAgMi4zOCAxLjE5IDQuNDcgMyA1Ljc0VjE3YzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xdi0yLjI2YzEuODEtMS4yNyAzLTMuMzYgMy01Ljc0IDAtMy44Ni0zLjE0LTctNy03em0yLjg1IDExLjFsLS44NS42VjE2aC00di0yLjNsLS44NS0uNkM3LjggMTIuMTYgNyAxMC42MyA3IDljMC0yLjc2IDIuMjQtNSA1LTVzNSAyLjI0IDUgNWMwIDEuNjMtLjggMy4xNi0yLjE1IDQuMXpcIi8+PC9zdmc+YCxcblx0bGluZVN0eWxlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMyAxNmg1di0ySDN2MnptNi41IDBoNXYtMmgtNXYyem02LjUgMGg1di0yaC01djJ6TTMgMjBoMnYtMkgzdjJ6bTQgMGgydi0ySDd2MnptNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnpNMyAxMmg4di0ySDN2MnptMTAgMGg4di0yaC04djJ6TTMgNHY0aDE4VjRIM3pcIi8+PC9zdmc+YCxcblx0bGluZVdlaWdodDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTMgMTdoMTh2LTJIM3Yyem0wIDNoMTh2LTFIM3Yxem0wLTdoMTh2LTNIM3Yzem0wLTl2NGgxOFY0SDN6XCIvPjwvc3ZnPmAsXG5cdGxpbms6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0zLjkgMTJjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFoNFY3SDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDVoNHYtMS45SDdjLTEuNzEgMC0zLjEtMS4zOS0zLjEtMy4xek04IDEzaDh2LTJIOHYyem05LTZoLTR2MS45aDRjMS43MSAwIDMuMSAxLjM5IDMuMSAzLjFzLTEuMzkgMy4xLTMuMSAzLjFoLTRWMTdoNGMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNXpcIi8+PC9zdmc+YCxcblx0bGlzdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTMgMTNoMnYtMkgzdjJ6bTAgNGgydi0ySDN2MnptMC04aDJWN0gzdjJ6bTQgNGgxNHYtMkg3djJ6bTAgNGgxNHYtMkg3djJ6TTcgN3YyaDE0VjdIN3pcIi8+PC9zdmc+YCxcblx0bG9jazogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE4IDhoLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnptLTYgOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTMuMS05SDguOVY2YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xIDEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xdjJ6XCIvPjwvc3ZnPmAsXG5cdGxvY2tPcGVuOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMTdjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem02LTloLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2aDEuOWMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMSAxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bTAgMTJINlYxMGgxMnYxMHpcIi8+PC9zdmc+YCxcblx0bG9ja091dGxpbmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiAxN2MxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTYtOWgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZ2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yek04LjkgNmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMXMzLjEgMS4zOSAzLjEgMy4xdjJIOC45VjZ6TTE4IDIwSDZWMTBoMTJ2MTB6XCIvPjwvc3ZnPmAsXG5cdGxvd1ByaW9yaXR5OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTQgNWg4djJoLTh6bTAgNS41aDh2MmgtOHptMCA1LjVoOHYyaC04ek0yIDExLjVDMiAxNS4wOCA0LjkyIDE4IDguNSAxOEg5djJsMy0zLTMtM3YyaC0uNUM2LjAyIDE2IDQgMTMuOTggNCAxMS41UzYuMDIgNyA4LjUgN0gxMlY1SDguNUM0LjkyIDUgMiA3LjkyIDIgMTEuNXpcIi8+PC9zdmc+YCxcblx0bG95YWx0eTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIxLjQxIDExLjU4bC05LTlDMTIuMDUgMi4yMiAxMS41NSAyIDExIDJINGMtMS4xIDAtMiAuOS0yIDJ2N2MwIC41NS4yMiAxLjA1LjU5IDEuNDJsOSA5Yy4zNi4zNi44Ni41OCAxLjQxLjU4LjU1IDAgMS4wNS0uMjIgMS40MS0uNTlsNy03Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0uNTUtLjIzLTEuMDYtLjU5LTEuNDJ6TTUuNSA3QzQuNjcgNyA0IDYuMzMgNCA1LjVTNC42NyA0IDUuNSA0IDcgNC42NyA3IDUuNSA2LjMzIDcgNS41IDd6bTExLjc3IDguMjdMMTMgMTkuNTRsLTQuMjctNC4yN0M4LjI4IDE0LjgxIDggMTQuMTkgOCAxMy41YzAtMS4zOCAxLjEyLTIuNSAyLjUtMi41LjY5IDAgMS4zMi4yOCAxLjc3Ljc0bC43My43Mi43My0uNzNjLjQ1LS40NSAxLjA4LS43MyAxLjc3LS43MyAxLjM4IDAgMi41IDEuMTIgMi41IDIuNSAwIC42OS0uMjggMS4zMi0uNzMgMS43N3pcIi8+PC9zdmc+YCxcblx0bWFpbDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCA0bC04IDUtOC01VjZsOCA1IDgtNXYyelwiLz48L3N2Zz5gLFxuXHRtYXJrdW5yZWFkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XCIvPjwvc3ZnPmAsXG5cdG1hcmt1bnJlYWRNYWlsYm94OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNkgxMHY2SDhWNGg2VjBINnY2SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnpcIi8+PC9zdmc+YCxcblx0bWVudTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIvPjwvc3ZnPmAsXG5cdG1vcmVIb3JpejogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTYgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0xMiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptLTYgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6XCIvPjwvc3ZnPmAsXG5cdG1vcmVWZXJ0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgOGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTAgMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6XCIvPjwvc3ZnPmAsXG5cdG1vdG9yY3ljbGU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOS40NCA5LjAzTDE1LjQxIDVIMTF2MmgzLjU5bDIgMkg1Yy0yLjggMC01IDIuMi01IDVzMi4yIDUgNSA1YzIuNDYgMCA0LjQ1LTEuNjkgNC45LTRoMS42NWwyLjc3LTIuNzdjLS4yMS41NC0uMzIgMS4xNC0uMzIgMS43NyAwIDIuOCAyLjIgNSA1IDVzNS0yLjIgNS01YzAtMi42NS0xLjk3LTQuNzctNC41Ni00Ljk3ek03LjgyIDE1QzcuNCAxNi4xNSA2LjI4IDE3IDUgMTdjLTEuNjMgMC0zLTEuMzctMy0zczEuMzctMyAzLTNjMS4yOCAwIDIuNC44NSAyLjgyIDJINXYyaDIuODJ6TTE5IDE3Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3pcIi8+PC9zdmc+YCxcblx0bW92ZVRvSW5ib3g6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAzSDQuOTljLTEuMTEgMC0xLjk4LjktMS45OCAyTDMgMTljMCAxLjEuODggMiAxLjk5IDJIMTljMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxMmgtNGMwIDEuNjYtMS4zNSAzLTMgM3MtMy0xLjM0LTMtM0g0Ljk5VjVIMTl2MTB6bS0zLTVoLTJWN2gtNHYzSDhsNCA0IDQtNHpcIi8+PC9zdmc+YCxcblx0bmV4dDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnpcIi8+PC9zdmc+YCxcblx0bmV4dFdlZWs6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCA3aC00VjVjMC0uNTUtLjIyLTEuMDUtLjU5LTEuNDFDMTUuMDUgMy4yMiAxNC41NSAzIDE0IDNoLTRjLTEuMSAwLTIgLjktMiAydjJINGMtMS4xIDAtMiAuOS0yIDJ2MTFjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY5YzAtMS4xLS45LTItMi0yek0xMCA1aDR2MmgtNFY1em0xIDEzLjVsLTEtMSAzLTMtMy0zIDEtMSA0IDQtNCA0elwiLz48L3N2Zz5gLFxuXHRub3RlQWRkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTQgMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjMS4xIDAgMi0uOSAyLTJWOGwtNi02em0yIDE0aC0zdjNoLTJ2LTNIOHYtMmgzdi0zaDJ2M2gzdjJ6bS0zLTdWMy41TDE4LjUgOUgxM3pcIi8+PC9zdmc+YCxcblx0b2ZmbGluZVBpbjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMnM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwUzE3LjUgMiAxMiAyem01IDE2SDd2LTJoMTB2MnptLTYuNy00TDcgMTAuN2wxLjQtMS40IDEuOSAxLjkgNS4zLTUuM0wxNyA3LjMgMTAuMyAxNHpcIi8+PC9zdmc+YCxcblx0b3BhY2l0eTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE3LjY2IDhMMTIgMi4zNSA2LjM0IDhDNC43OCA5LjU2IDQgMTEuNjQgNCAxMy42NHMuNzggNC4xMSAyLjM0IDUuNjcgMy42MSAyLjM1IDUuNjYgMi4zNSA0LjEtLjc5IDUuNjYtMi4zNVMyMCAxNS42NCAyMCAxMy42NCAxOS4yMiA5LjU2IDE3LjY2IDh6TTYgMTRjLjAxLTIgLjYyLTMuMjcgMS43Ni00LjRMMTIgNS4yN2w0LjI0IDQuMzhDMTcuMzggMTAuNzcgMTcuOTkgMTIgMTggMTRINnpcIi8+PC9zdmc+YCxcblx0b3BlbkluQnJvd3NlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDRINWMtMS4xMSAwLTIgLjktMiAydjEyYzAgMS4xLjg5IDIgMiAyaDR2LTJINVY4aDE0djEwaC00djJoNGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS44OS0yLTItMnptLTcgNmwtNCA0aDN2Nmgydi02aDNsLTQtNHpcIi8+PC9zdmc+YCxcblx0b3BlbkluTmV3OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgMTlINVY1aDdWM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ2LTdoLTJ2N3pNMTQgM3YyaDMuNTlsLTkuODMgOS44MyAxLjQxIDEuNDFMMTkgNi40MVYxMGgyVjNoLTd6XCIvPjwvc3ZnPmAsXG5cdG9wZW5XaXRoOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTAgOWg0VjZoM2wtNS01LTUgNWgzdjN6bS0xIDFINlY3bC01IDUgNSA1di0zaDN2LTR6bTE0IDJsLTUtNXYzaC0zdjRoM3YzbDUtNXptLTkgM2gtNHYzSDdsNSA1IDUtNWgtM3YtM3pcIi8+PC9zdmc+YCxcblx0cGFnZXZpZXc6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMS41IDlDMTAuMTIgOSA5IDEwLjEyIDkgMTEuNXMxLjEyIDIuNSAyLjUgMi41IDIuNS0xLjEyIDIuNS0yLjVTMTIuODggOSAxMS41IDl6TTIwIDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tMy4yMSAxNC4yMWwtMi45MS0yLjkxYy0uNjkuNDQtMS41MS43LTIuMzkuN0M5LjAxIDE2IDcgMTMuOTkgNyAxMS41UzkuMDEgNyAxMS41IDcgMTYgOS4wMSAxNiAxMS41YzAgLjg4LS4yNiAxLjY5LS43IDIuMzlsMi45MSAyLjktMS40MiAxLjQyelwiLz48L3N2Zz5gLFxuXHRwYW5Ub29sOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjMgNS41VjIwYzAgMi4yLTEuOCA0LTQgNGgtNy4zYy0xLjA4IDAtMi4xLS40My0yLjg1LTEuMTlMMSAxNC44M3MxLjI2LTEuMjMgMS4zLTEuMjVjLjIyLS4xOS40OS0uMjkuNzktLjI5LjIyIDAgLjQyLjA2LjYuMTYuMDQuMDEgNC4zMSAyLjQ2IDQuMzEgMi40NlY0YzAtLjgzLjY3LTEuNSAxLjUtMS41UzExIDMuMTcgMTEgNHY3aDFWMS41YzAtLjgzLjY3LTEuNSAxLjUtMS41UzE1IC42NyAxNSAxLjVWMTFoMVYyLjVjMC0uODMuNjctMS41IDEuNS0xLjVzMS41LjY3IDEuNSAxLjVWMTFoMVY1LjVjMC0uODMuNjctMS41IDEuNS0xLjVzMS41LjY3IDEuNSAxLjV6XCIvPjwvc3ZnPmAsXG5cdHBheW1lbnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCA0SDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE4YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjZjMC0xLjExLS44OS0yLTItMnptMCAxNEg0di02aDE2djZ6bTAtMTBINFY2aDE2djJ6XCIvPjwvc3ZnPmAsXG5cdHBlb3BsZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE2IDExYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzE3LjY2IDUgMTYgNWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM3ptLTggMGMxLjY2IDAgMi45OS0xLjM0IDIuOTktM1M5LjY2IDUgOCA1QzYuMzQgNSA1IDYuMzQgNSA4czEuMzQgMyAzIDN6bTAgMmMtMi4zMyAwLTcgMS4xNy03IDMuNVYxOWgxNHYtMi41YzAtMi4zMy00LjY3LTMuNS03LTMuNXptOCAwYy0uMjkgMC0uNjIuMDItLjk3LjA1IDEuMTYuODQgMS45NyAxLjk3IDEuOTcgMy40NVYxOWg2di0yLjVjMC0yLjMzLTQuNjctMy41LTctMy41elwiLz48L3N2Zz5gLFxuXHRwZXJtQ2FtZXJhTWljOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNWgtMy4xN0wxNSAzSDlMNy4xNyA1SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoN3YtMi4wOWMtMi44My0uNDgtNS0yLjk0LTUtNS45MWgyYzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTRoMmMwIDIuOTctMi4xNyA1LjQzLTUgNS45MVYyMWg3YzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bS02IDhjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yVjljMC0xLjEuOS0yIDItMnMyIC45IDIgMnY0elwiLz48L3N2Zz5gLFxuXHRwZXJtQ29udGFjdENhbGVuZGFyOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgM2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTYgMTJINnYtMWMwLTIgNC0zLjEgNi0zLjFzNiAxLjEgNiAzLjF2MXpcIi8+PC9zdmc+YCxcblx0cGVybURhdGFTZXR0aW5nOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTguOTkgMTEuNWMuMzQgMCAuNjcuMDMgMSAuMDdMMjAgMCAwIDIwaDExLjU2Yy0uMDQtLjMzLS4wNy0uNjYtLjA3LTEgMC00LjE0IDMuMzYtNy41IDcuNS03LjV6bTMuNzEgNy45OWMuMDItLjE2LjA0LS4zMi4wNC0uNDkgMC0uMTctLjAxLS4zMy0uMDQtLjQ5bDEuMDYtLjgzYy4wOS0uMDguMTItLjIxLjA2LS4zMmwtMS0xLjczYy0uMDYtLjExLS4xOS0uMTUtLjMxLS4xMWwtMS4yNC41Yy0uMjYtLjItLjU0LS4zNy0uODUtLjQ5bC0uMTktMS4zMmMtLjAxLS4xMi0uMTItLjIxLS4yNC0uMjFoLTJjLS4xMiAwLS4yMy4wOS0uMjUuMjFsLS4xOSAxLjMyYy0uMy4xMy0uNTkuMjktLjg1LjQ5bC0xLjI0LS41Yy0uMTEtLjA0LS4yNCAwLS4zMS4xMWwtMSAxLjczYy0uMDYuMTEtLjA0LjI0LjA2LjMybDEuMDYuODNjLS4wMi4xNi0uMDMuMzItLjAzLjQ5IDAgLjE3LjAxLjMzLjAzLjQ5bC0xLjA2LjgzYy0uMDkuMDgtLjEyLjIxLS4wNi4zMmwxIDEuNzNjLjA2LjExLjE5LjE1LjMxLjExbDEuMjQtLjVjLjI2LjIuNTQuMzcuODUuNDlsLjE5IDEuMzJjLjAyLjEyLjEyLjIxLjI1LjIxaDJjLjEyIDAgLjIzLS4wOS4yNS0uMjFsLjE5LTEuMzJjLjMtLjEzLjU5LS4yOS44NC0uNDlsMS4yNS41Yy4xMS4wNC4yNCAwIC4zMS0uMTFsMS0xLjczYy4wNi0uMTEuMDMtLjI0LS4wNi0uMzJsLTEuMDctLjgzem0tMy43MSAxLjAxYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcIi8+PC9zdmc+YCxcblx0cGVybURldmljZUluZm9ybWF0aW9uOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTMgN2gtMnYyaDJWN3ptMCA0aC0ydjZoMnYtNnptNC05Ljk5TDcgMWMtMS4xIDAtMiAuOS0yIDJ2MThjMCAxLjEuOSAyIDIgMmgxMGMxLjEgMCAyLS45IDItMlYzYzAtMS4xLS45LTEuOTktMi0xLjk5ek0xNyAxOUg3VjVoMTB2MTR6XCIvPjwvc3ZnPmAsXG5cdHBlcm1JZGVudGl0eTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDUuOWMxLjE2IDAgMi4xLjk0IDIuMSAyLjFzLS45NCAyLjEtMi4xIDIuMVM5LjkgOS4xNiA5LjkgOHMuOTQtMi4xIDIuMS0yLjFtMCA5YzIuOTcgMCA2LjEgMS40NiA2LjEgMi4xdjEuMUg1LjlWMTdjMC0uNjQgMy4xMy0yLjEgNi4xLTIuMU0xMiA0QzkuNzkgNCA4IDUuNzkgOCA4czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wIDljLTIuNjcgMC04IDEuMzQtOCA0djNoMTZ2LTNjMC0yLjY2LTUuMzMtNC04LTR6XCIvPjwvc3ZnPmAsXG5cdHBlcm1NZWRpYTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIgNkgwdjVoLjAxTDAgMjBjMCAxLjEuOSAyIDIgMmgxOHYtMkgyVjZ6bTIwLTJoLThsLTItMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMTZjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yek03IDE1bDQuNS02IDMuNSA0LjUxIDIuNS0zLjAxTDIxIDE1SDd6XCIvPjwvc3ZnPmAsXG5cdHBlcm1QaG9uZU1zZzogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIwIDE1LjVjLTEuMjUgMC0yLjQ1LS4yLTMuNTctLjU3LS4zNS0uMTEtLjc0LS4wMy0xLjAyLjI0bC0yLjIgMi4yYy0yLjgzLTEuNDQtNS4xNS0zLjc1LTYuNTktNi41OGwyLjItMi4yMWMuMjgtLjI3LjM2LS42Ni4yNS0xLjAxQzguNyA2LjQ1IDguNSA1LjI1IDguNSA0YzAtLjU1LS40NS0xLTEtMUg0Yy0uNTUgMC0xIC40NS0xIDEgMCA5LjM5IDcuNjEgMTcgMTcgMTcgLjU1IDAgMS0uNDUgMS0xdi0zLjVjMC0uNTUtLjQ1LTEtMS0xek0xMiAzdjEwbDMtM2g2VjNoLTl6XCIvPjwvc3ZnPmAsXG5cdHBlcm1TY2FuV2lmaTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDNDNi45NSAzIDMuMTUgNC44NSAwIDcuMjNMMTIgMjIgMjQgNy4yNUMyMC44NSA0Ljg3IDE3LjA1IDMgMTIgM3ptMSAxM2gtMnYtNmgydjZ6bS0yLThWNmgydjJoLTJ6XCIvPjwvc3ZnPmAsXG5cdHBlcnNvbjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDEyYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCAyYy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00elwiLz48L3N2Zz5gLFxuXHRwZXRzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjkuNVwiIHI9XCIyLjVcIi8+PGNpcmNsZSBjeD1cIjlcIiBjeT1cIjUuNVwiIHI9XCIyLjVcIi8+PGNpcmNsZSBjeD1cIjE1XCIgY3k9XCI1LjVcIiByPVwiMi41XCIvPjxjaXJjbGUgY3g9XCIxOS41XCIgY3k9XCI5LjVcIiByPVwiMi41XCIvPjxwYXRoIGQ9XCJNMTcuMzQgMTQuODZjLS44Ny0xLjAyLTEuNi0xLjg5LTIuNDgtMi45MS0uNDYtLjU0LTEuMDUtMS4wOC0xLjc1LTEuMzItLjExLS4wNC0uMjItLjA3LS4zMy0uMDktLjI1LS4wNC0uNTItLjA0LS43OC0uMDRzLS41MyAwLS43OS4wNWMtLjExLjAyLS4yMi4wNS0uMzMuMDktLjcuMjQtMS4yOC43OC0xLjc1IDEuMzItLjg3IDEuMDItMS42IDEuODktMi40OCAyLjkxLTEuMzEgMS4zMS0yLjkyIDIuNzYtMi42MiA0Ljc5LjI5IDEuMDIgMS4wMiAyLjAzIDIuMzMgMi4zMi43My4xNSAzLjA2LS40NCA1LjU0LS40NGguMThjMi40OCAwIDQuODEuNTggNS41NC40NCAxLjMxLS4yOSAyLjA0LTEuMzEgMi4zMy0yLjMyLjMxLTIuMDQtMS4zLTMuNDktMi42MS00Ljh6XCIvPjwvc3ZnPmAsXG5cdHBpY3R1cmVJblBpY3R1cmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSA3aC04djZoOFY3em0yLTRIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAxLjk4IDIgMS45OGgxOGMxLjEgMCAyLS44OCAyLTEuOThWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOThoMTh2MTQuMDN6XCIvPjwvc3ZnPmAsXG5cdHBpY3R1cmVJblBpY3R1cmVBbHQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAxMWgtOHY2aDh2LTZ6bTQgOFY0Ljk4QzIzIDMuODggMjIuMSAzIDIxIDNIM2MtMS4xIDAtMiAuODgtMiAxLjk4VjE5YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJ6bS0yIC4wMkgzVjQuOTdoMTh2MTQuMDV6XCIvPjwvc3ZnPmAsXG5cdHBsYXlGb3JXb3JrOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEgNXY1LjU5SDcuNWw0LjUgNC41IDQuNS00LjVIMTNWNWgtMnptLTUgOWMwIDMuMzEgMi42OSA2IDYgNnM2LTIuNjkgNi02aC0yYzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00SDZ6XCIvPjwvc3ZnPmAsXG5cdHBvbHltZXI6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSA0aC00TDcuMTEgMTYuNjMgNC41IDEyIDkgNEg1TC41IDEyIDUgMjBoNGw3Ljg5LTEyLjYzTDE5LjUgMTIgMTUgMjBoNGw0LjUtOHpcIi8+PC9zdmc+YCxcblx0cG93ZXJTZXR0aW5nc05ldzogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEzIDNoLTJ2MTBoMlYzem00LjgzIDIuMTdsLTEuNDIgMS40MkMxNy45OSA3Ljg2IDE5IDkuODEgMTkgMTJjMCAzLjg3LTMuMTMgNy03IDdzLTctMy4xMy03LTdjMC0yLjE5IDEuMDEtNC4xNCAyLjU4LTUuNDJMNi4xNyA1LjE3QzQuMjMgNi44MiAzIDkuMjYgMyAxMmMwIDQuOTcgNC4wMyA5IDkgOXM5LTQuMDMgOS05YzAtMi43NC0xLjIzLTUuMTgtMy4xNy02LjgzelwiLz48L3N2Zz5gLFxuXHRwcmVnbmFudFdvbWFuOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNOSA0YzAtMS4xMS44OS0yIDItMnMyIC44OSAyIDItLjg5IDItMiAyLTItLjg5LTItMnptNyA5Yy0uMDEtMS4zNC0uODMtMi41MS0yLTMgMC0xLjY2LTEuMzQtMy0zLTNzLTMgMS4zNC0zIDN2N2gydjVoM3YtNWgzdi00elwiLz48L3N2Zz5gLFxuXHRwcmV2aW91czogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTYgNmgydjEySDZ6bTMuNSA2bDguNSA2VjZ6XCIvPjwvc3ZnPmAsXG5cdHByaW50OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgOEg1Yy0xLjY2IDAtMyAxLjM0LTMgM3Y2aDR2NGgxMnYtNGg0di02YzAtMS42Ni0xLjM0LTMtMy0zem0tMyAxMUg4di01aDh2NXptMy03Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6bS0xLTlINnY0aDEyVjN6XCIvPjwvc3ZnPmAsXG5cdHF1ZXJ5QnVpbGRlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHptLjUtMTNIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3pcIi8+PC9zdmc+YCxcblx0cXVlc3Rpb25BbnN3ZXI6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMSA2aC0ydjlINnYyYzAgLjU1LjQ1IDEgMSAxaDExbDQgNFY3YzAtLjU1LS40NS0xLTEtMXptLTQgNlYzYzAtLjU1LS40NS0xLTEtMUgzYy0uNTUgMC0xIC40NS0xIDF2MTRsNC00aDEwYy41NSAwIDEtLjQ1IDEtMXpcIi8+PC9zdmc+YCxcblx0cmFkaW9CdXR0b25DaGVja2VkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6bTAtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCIvPjwvc3ZnPmAsXG5cdHJhZGlvQnV0dG9uVW5jaGVja2VkOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCIvPjwvc3ZnPmAsXG5cdHJlY2VpcHQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOCAxN0g2di0yaDEydjJ6bTAtNEg2di0yaDEydjJ6bTAtNEg2VjdoMTJ2MnpNMyAyMmwxLjUtMS41TDYgMjJsMS41LTEuNUw5IDIybDEuNS0xLjVMMTIgMjJsMS41LTEuNUwxNSAyMmwxLjUtMS41TDE4IDIybDEuNS0xLjVMMjEgMjJWMmwtMS41IDEuNUwxOCAybC0xLjUgMS41TDE1IDJsLTEuNSAxLjVMMTIgMmwtMS41IDEuNUw5IDIgNy41IDMuNSA2IDIgNC41IDMuNSAzIDJ2MjB6XCIvPjwvc3ZnPmAsXG5cdHJlY29yZFZvaWNlT3ZlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48Y2lyY2xlIGN4PVwiOVwiIGN5PVwiOVwiIHI9XCI0XCIvPjxwYXRoIGQ9XCJNOSAxNWMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHptNy43Ni05LjY0bC0xLjY4IDEuNjljLjg0IDEuMTguODQgMi43MSAwIDMuODlsMS42OCAxLjY5YzIuMDItMi4wMiAyLjAyLTUuMDcgMC03LjI3ek0yMC4wNyAybC0xLjYzIDEuNjNjMi43NyAzLjAyIDIuNzcgNy41NiAwIDEwLjc0TDIwLjA3IDE2YzMuOS0zLjg5IDMuOTEtOS45NSAwLTE0elwiLz48L3N2Zz5gLFxuXHRyZWRlZW06IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCA2aC0yLjE4Yy4xMS0uMzEuMTgtLjY1LjE4LTEgMC0xLjY2LTEuMzQtMy0zLTMtMS4wNSAwLTEuOTYuNTQtMi41IDEuMzVsLS41LjY3LS41LS42OEMxMC45NiAyLjU0IDEwLjA1IDIgOSAyIDcuMzQgMiA2IDMuMzQgNiA1YzAgLjM1LjA3LjY5LjE4IDFINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMTljMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yem0tNS0yYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6TTkgNGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0xMSAxNUg0di0yaDE2djJ6bTAtNUg0VjhoNS4wOEw3IDEwLjgzIDguNjIgMTIgMTEgOC43NmwxLTEuMzYgMSAxLjM2TDE1LjM4IDEyIDE3IDEwLjgzIDE0LjkyIDhIMjB2NnpcIi8+PC9zdmc+YCxcblx0cmVkbzogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnpcIi8+PC9zdmc+YCxcblx0cmVmcmVzaDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE3LjY1IDYuMzVDMTYuMiA0LjkgMTQuMjEgNCAxMiA0Yy00LjQyIDAtNy45OSAzLjU4LTcuOTkgOHMzLjU3IDggNy45OSA4YzMuNzMgMCA2Ljg0LTIuNTUgNy43My02aC0yLjA4Yy0uODIgMi4zMy0zLjA0IDQtNS42NSA0LTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTZjMS42NiAwIDMuMTQuNjkgNC4yMiAxLjc4TDEzIDExaDdWNGwtMi4zNSAyLjM1elwiLz48L3N2Zz5gLFxuXHRyZW1vdmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xOSAxM0g1di0yaDE0djJ6XCIvPjwvc3ZnPmAsXG5cdHJlbW92ZUNpcmNsZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFIN3YtMmgxMHYyelwiLz48L3N2Zz5gLFxuXHRyZW1vdmVDaXJjbGVPdXRsaW5lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNyAxMXYyaDEwdi0ySDd6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XCIvPjwvc3ZnPmAsXG5cdHJlbW92ZVNob3BwaW5nQ2FydDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIyLjczIDIyLjczTDIuNzcgMi43NyAyIDJsLS43My0uNzNMMCAyLjU0bDQuMzkgNC4zOSAyLjIxIDQuNjYtMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDcuNDZsMS4zOCAxLjM4Yy0uNS4zNi0uODMuOTUtLjgzIDEuNjIgMCAxLjEuODkgMiAxLjk5IDIgLjY3IDAgMS4yNi0uMzMgMS42Mi0uODRMMjEuNDYgMjRsMS4yNy0xLjI3ek03LjQyIDE1Yy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoMi4zNmwyIDJINy40MnptOC4xMy0yYy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjU4LTYuNDljLjA4LS4xNC4xMi0uMzEuMTItLjQ4IDAtLjU1LS40NS0xLTEtMUg2LjU0bDkuMDEgOXpNNyAxOGMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMnpcIi8+PC9zdmc+YCxcblx0cmVvcmRlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTMgMTVoMTh2LTJIM3Yyem0wIDRoMTh2LTJIM3Yyem0wLThoMThWOUgzdjJ6bTAtNnYyaDE4VjVIM3pcIi8+PC9zdmc+YCxcblx0cmVwbHk6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMCA5VjVsLTcgNyA3IDd2LTQuMWM1IDAgOC41IDEuNiAxMSA1LjEtMS01LTQtMTAtMTEtMTF6XCIvPjwvc3ZnPmAsXG5cdHJlcGx5QWxsOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNyA4VjVsLTcgNyA3IDd2LTNsLTQtNCA0LTR6bTYgMVY1bC03IDcgNyA3di00LjFjNSAwIDguNSAxLjYgMTEgNS4xLTEtNS00LTEwLTExLTExelwiLz48L3N2Zz5gLFxuXHRyZXBvcnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNS43MyAzSDguMjdMMyA4LjI3djcuNDZMOC4yNyAyMWg3LjQ2TDIxIDE1LjczVjguMjdMMTUuNzMgM3pNMTIgMTcuM2MtLjcyIDAtMS4zLS41OC0xLjMtMS4zIDAtLjcyLjU4LTEuMyAxLjMtMS4zLjcyIDAgMS4zLjU4IDEuMyAxLjMgMCAuNzItLjU4IDEuMy0xLjMgMS4zem0xLTQuM2gtMlY3aDJ2NnpcIi8+PC9zdmc+YCxcblx0cmVwb3J0UHJvYmxlbTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHpcIi8+PC9zdmc+YCxcblx0cmVzdG9yZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnpcIi8+PC9zdmc+YCxcblx0cmVzdG9yZVBhZ2U6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNCAySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMxLjEgMCAyLS45IDItMlY4bC02LTZ6bS0yIDE2Yy0yLjA1IDAtMy44MS0xLjI0LTQuNTgtM2gxLjcxYy42My45IDEuNjggMS41IDIuODcgMS41IDEuOTMgMCAzLjUtMS41NyAzLjUtMy41UzEzLjkzIDkuNSAxMiA5LjVjLTEuMzUgMC0yLjUyLjc4LTMuMSAxLjlsMS42IDEuNmgtNFY5bDEuMyAxLjNDOC42OSA4LjkyIDEwLjIzIDggMTIgOGMyLjc2IDAgNSAyLjI0IDUgNXMtMi4yNCA1LTUgNXpcIi8+PC9zdmc+YCxcblx0cm9vbTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41elwiLz48L3N2Zz5gLFxuXHRyb3VuZGVkQ29ybmVyOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgMTloMnYyaC0ydi0yem0wLTJoMnYtMmgtMnYyek0zIDEzaDJ2LTJIM3Yyem0wIDRoMnYtMkgzdjJ6bTAtOGgyVjdIM3Yyem0wLTRoMlYzSDN2MnptNCAwaDJWM0g3djJ6bTggMTZoMnYtMmgtMnYyem0tNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptLTggMGgydi0ySDd2MnptLTQgMGgydi0ySDN2MnpNMjEgOGMwLTIuNzYtMi4yNC01LTUtNWgtNXYyaDVjMS42NSAwIDMgMS4zNSAzIDN2NWgyVjh6XCIvPjwvc3ZnPmAsXG5cdHJvd2luZzogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTguNSAxNC41TDQgMTlsMS41IDEuNUw5IDE3aDJsLTIuNS0yLjV6TTE1IDFjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem02IDIwLjAxTDE4IDI0bC0yLjk5LTMuMDFWMTkuNWwtNy4xLTcuMDljLS4zMS4wNS0uNjEuMDctLjkxLjA3di0yLjE2YzEuNjYuMDMgMy42MS0uODcgNC42Ny0yLjA0bDEuNC0xLjU1Yy4xOS0uMjEuNDMtLjM4LjY5LS41LjI5LS4xNC42Mi0uMjMuOTYtLjIzaC4wM0MxNS45OSA2LjAxIDE3IDcuMDIgMTcgOC4yNnY1Ljc1YzAgLjg0LS4zNSAxLjYxLS45MiAyLjE2bC0zLjU4LTMuNTh2LTIuMjdjLS42My41Mi0xLjQzIDEuMDItMi4yOSAxLjM5TDE2LjUgMThIMThsMyAzLjAxelwiLz48L3N2Zz5gLFxuXHRzYXZlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTcgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2wtNC00em0tNSAxNmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6bTMtMTBINVY1aDEwdjR6XCIvPjwvc3ZnPmAsXG5cdHNjaGVkdWxlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4em0uNS0xM0gxMXY2bDUuMjUgMy4xNS43NS0xLjIzLTQuNS0yLjY3elwiLz48L3N2Zz5gLFxuXHRzZWFyY2g6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLz48L3N2Zz5gLFxuXHRzZWxlY3RBbGw6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0zIDVoMlYzYy0xLjEgMC0yIC45LTIgMnptMCA4aDJ2LTJIM3Yyem00IDhoMnYtMkg3djJ6TTMgOWgyVjdIM3Yyem0xMC02aC0ydjJoMlYzem02IDB2MmgyYzAtMS4xLS45LTItMi0yek01IDIxdi0ySDNjMCAxLjEuOSAyIDIgMnptLTItNGgydi0ySDN2MnpNOSAzSDd2MmgyVjN6bTIgMThoMnYtMmgtMnYyem04LThoMnYtMmgtMnYyem0wIDhjMS4xIDAgMi0uOSAyLTJoLTJ2MnptMC0xMmgyVjdoLTJ2MnptMCA4aDJ2LTJoLTJ2MnptLTQgNGgydi0yaC0ydjJ6bTAtMTZoMlYzaC0ydjJ6TTcgMTdoMTBWN0g3djEwem0yLThoNnY2SDlWOXpcIi8+PC9zdmc+YCxcblx0c2VuZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIuMDEgMjFMMjMgMTIgMi4wMSAzIDIgMTBsMTUgMi0xNSAyelwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nczogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5LjQzIDEyLjk4Yy4wNC0uMzIuMDctLjY0LjA3LS45OHMtLjAzLS42Ni0uMDctLjk4bDIuMTEtMS42NWMuMTktLjE1LjI0LS40Mi4xMi0uNjRsLTItMy40NmMtLjEyLS4yMi0uMzktLjMtLjYxLS4yMmwtMi40OSAxYy0uNTItLjQtMS4wOC0uNzMtMS42OS0uOThsLS4zOC0yLjY1QzE0LjQ2IDIuMTggMTQuMjUgMiAxNCAyaC00Yy0uMjUgMC0uNDYuMTgtLjQ5LjQybC0uMzggMi42NWMtLjYxLjI1LTEuMTcuNTktMS42OS45OGwtMi40OS0xYy0uMjMtLjA5LS40OSAwLS42MS4yMmwtMiAzLjQ2Yy0uMTMuMjItLjA3LjQ5LjEyLjY0bDIuMTEgMS42NWMtLjA0LjMyLS4wNy42NS0uMDcuOThzLjAzLjY2LjA3Ljk4bC0yLjExIDEuNjVjLS4xOS4xNS0uMjQuNDItLjEyLjY0bDIgMy40NmMuMTIuMjIuMzkuMy42MS4yMmwyLjQ5LTFjLjUyLjQgMS4wOC43MyAxLjY5Ljk4bC4zOCAyLjY1Yy4wMy4yNC4yNC40Mi40OS40Mmg0Yy4yNSAwIC40Ni0uMTguNDktLjQybC4zOC0yLjY1Yy42MS0uMjUgMS4xNy0uNTkgMS42OS0uOThsMi40OSAxYy4yMy4wOS40OSAwIC42MS0uMjJsMi0zLjQ2Yy4xMi0uMjIuMDctLjQ5LS4xMi0uNjRsLTIuMTEtMS42NXpNMTIgMTUuNWMtMS45MyAwLTMuNS0xLjU3LTMuNS0zLjVzMS41Ny0zLjUgMy41LTMuNSAzLjUgMS41NyAzLjUgMy41LTEuNTcgMy41LTMuNSAzLjV6XCIvPjwvc3ZnPmAsXG5cdHNldHRpbmdzQXBwbGljYXRpb25zOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem03LTdINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmMtLjA5LS4xNS0uMDUtLjM0LjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmMtLjEzLS4xMS0uMTctLjMtLjA4LS40NWwxLjQtMi40MmMuMDktLjE1LjI3LS4yMS40My0uMTVsMS43NC43Yy4zNi0uMjguNzYtLjUxIDEuMTgtLjY5bC4yNi0xLjg1Yy4wMy0uMTcuMTgtLjMuMzUtLjNoMi44Yy4xNyAwIC4zMi4xMy4zNS4yOWwuMjYgMS44NWMuNDMuMTguODIuNDEgMS4xOC42OWwxLjc0LS43Yy4xNi0uMDYuMzQgMCAuNDMuMTVsMS40IDIuNDJjLjA5LjE1LjA1LjM0LS4wOC40NWwtMS40OCAxLjE2Yy4wMy4yMy4wNS40Ni4wNS42OXpcIi8+PC9zdmc+YCxcblx0c2V0dGluZ3NCYWNrdXBSZXN0b3JlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTQgMTJjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yem0tMi05Yy00Ljk3IDAtOSA0LjAzLTkgOUgwbDQgNCA0LTRINWMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuNTEgMC0yLjkxLS40OS00LjA2LTEuM2wtMS40MiAxLjQ0QzguMDQgMjAuMyA5Ljk0IDIxIDEyIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05elwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nc0JsdWV0b290aDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTExIDI0aDJ2LTJoLTJ2MnptLTQgMGgydi0ySDd2MnptOCAwaDJ2LTJoLTJ2MnptMi43MS0xOC4yOUwxMiAwaC0xdjcuNTlMNi40MSAzIDUgNC40MSAxMC41OSAxMCA1IDE1LjU5IDYuNDEgMTcgMTEgMTIuNDFWMjBoMWw1LjcxLTUuNzEtNC4zLTQuMjkgNC4zLTQuMjl6TTEzIDMuODNsMS44OCAxLjg4TDEzIDcuNTlWMy44M3ptMS44OCAxMC40NkwxMyAxNi4xN3YtMy43NmwxLjg4IDEuODh6XCIvPjwvc3ZnPmAsXG5cdHNldHRpbmdzQnJpZ2h0bmVzczogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OWgxOHYxNC4wMnpNOCAxNmgyLjVsMS41IDEuNSAxLjUtMS41SDE2di0yLjVsMS41LTEuNS0xLjUtMS41VjhoLTIuNUwxMiA2LjUgMTAuNSA4SDh2Mi41TDYuNSAxMiA4IDEzLjVWMTZ6bTQtN2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgM1Y5elwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nc0NlbGw6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk03IDI0aDJ2LTJIN3Yyem00IDBoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyek0xNiAuMDFMOCAwQzYuOSAwIDYgLjkgNiAydjE2YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlYyYzAtMS4xLS45LTEuOTktMi0xLjk5ek0xNiAxNkg4VjRoOHYxMnpcIi8+PC9zdmc+YCxcblx0c2V0dGluZ3NFdGhlcm5ldDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTcuNzcgNi43Nkw2LjIzIDUuNDguODIgMTJsNS40MSA2LjUyIDEuNTQtMS4yOEwzLjQyIDEybDQuMzUtNS4yNHpNNyAxM2gydi0ySDd2MnptMTAtMmgtMnYyaDJ2LTJ6bS02IDJoMnYtMmgtMnYyem02Ljc3LTcuNTJsLTEuNTQgMS4yOEwyMC41OCAxMmwtNC4zNSA1LjI0IDEuNTQgMS4yOEwyMy4xOCAxMmwtNS40MS02LjUyelwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nc0lucHV0QW50ZW5uYTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDVjLTMuODcgMC03IDMuMTMtNyA3aDJjMC0yLjc2IDIuMjQtNSA1LTVzNSAyLjI0IDUgNWgyYzAtMy44Ny0zLjEzLTctNy03em0xIDkuMjljLjg4LS4zOSAxLjUtMS4yNiAxLjUtMi4yOSAwLTEuMzgtMS4xMi0yLjUtMi41LTIuNVM5LjUgMTAuNjIgOS41IDEyYzAgMS4wMi42MiAxLjkgMS41IDIuMjl2My4zTDcuNTkgMjEgOSAyMi40MWwzLTMgMyAzTDE2LjQxIDIxIDEzIDE3LjU5di0zLjN6TTEyIDFDNS45MyAxIDEgNS45MyAxIDEyaDJjMC00Ljk3IDQuMDMtOSA5LTlzOSA0LjAzIDkgOWgyYzAtNi4wNy00LjkzLTExLTExLTExelwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nc0lucHV0Q29tcG9uZW50OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNSAyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIMXY2aDZWNkg1VjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJIOXYyem0tOCAwYzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOEM2LjE2IDE4LjQgNyAxNy4zIDcgMTZ2LTJIMXYyek0yMSA2VjJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NGgtMnY2aDZWNmgtMnptLTgtNGMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDl2Nmg2VjZoLTJWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMmgtNnYyelwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nc0lucHV0Q29tcG9zaXRlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNSAyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIMXY2aDZWNkg1VjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJIOXYyem0tOCAwYzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOEM2LjE2IDE4LjQgNyAxNy4zIDcgMTZ2LTJIMXYyek0yMSA2VjJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NGgtMnY2aDZWNmgtMnptLTgtNGMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDl2Nmg2VjZoLTJWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMmgtNnYyelwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nc0lucHV0SGRtaTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE4IDdWNGMwLTEuMS0uOS0yLTItMkg4Yy0xLjEgMC0yIC45LTIgMnYzSDV2NmwzIDZ2M2g4di0zbDMtNlY3aC0xek04IDRoOHYzaC0yVjVoLTF2MmgtMlY1aC0xdjJIOFY0elwiLz48L3N2Zz5gLFxuXHRzZXR0aW5nc0lucHV0U3ZpZGVvOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNOCAxMS41YzAtLjgzLS42Ny0xLjUtMS41LTEuNVM1IDEwLjY3IDUgMTEuNSA1LjY3IDEzIDYuNSAxMyA4IDEyLjMzIDggMTEuNXptNy01YzAtLjgzLS42Ny0xLjUtMS41LTEuNWgtM0M5LjY3IDUgOSA1LjY3IDkgNi41UzkuNjcgOCAxMC41IDhoM2MuODMgMCAxLjUtLjY3IDEuNS0xLjV6TTguNSAxNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVTNy42NyAxOCA4LjUgMThzMS41LS42NyAxLjUtMS41UzkuMzMgMTUgOC41IDE1ek0xMiAxQzUuOTMgMSAxIDUuOTMgMSAxMnM0LjkzIDExIDExIDExIDExLTQuOTMgMTEtMTFTMTguMDcgMSAxMiAxem0wIDIwYy00Ljk2IDAtOS00LjA0LTktOXM0LjA0LTkgOS05IDkgNC4wNCA5IDktNC4wNCA5LTkgOXptNS41LTExYy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXptLTIgNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6XCIvPjwvc3ZnPmAsXG5cdHNldHRpbmdzT3ZlcnNjYW46IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMi4wMSA1LjVMMTAgOGg0bC0xLjk5LTIuNXpNMTggMTB2NGwyLjUtMS45OUwxOCAxMHpNNiAxMGwtMi41IDIuMDFMNiAxNHYtNHptOCA2aC00bDIuMDEgMi41TDE0IDE2em03LTEzSDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOTloMTh2MTQuMDJ6XCIvPjwvc3ZnPmAsXG5cdHNldHRpbmdzUGhvbmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMyA5aC0ydjJoMlY5em00IDBoLTJ2MmgyVjl6bTMgNi41Yy0xLjI1IDAtMi40NS0uMi0zLjU3LS41Ny0uMzUtLjExLS43NC0uMDMtMS4wMi4yNGwtMi4yIDIuMmMtMi44My0xLjQ0LTUuMTUtMy43NS02LjU5LTYuNThsMi4yLTIuMjFjLjI4LS4yNy4zNi0uNjYuMjUtMS4wMUM4LjcgNi40NSA4LjUgNS4yNSA4LjUgNGMwLS41NS0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxIDAgOS4zOSA3LjYxIDE3IDE3IDE3IC41NSAwIDEtLjQ1IDEtMXYtMy41YzAtLjU1LS40NS0xLTEtMXpNMTkgOXYyaDJWOWgtMnpcIi8+PC9zdmc+YCxcblx0c2V0dGluZ3NQb3dlcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTcgMjRoMnYtMkg3djJ6bTQgMGgydi0yaC0ydjJ6bTItMjJoLTJ2MTBoMlYyem0zLjU2IDIuNDRsLTEuNDUgMS40NUMxNi44NCA2Ljk0IDE4IDguODMgMTggMTFjMCAzLjMxLTIuNjkgNi02IDZzLTYtMi42OS02LTZjMC0yLjE3IDEuMTYtNC4wNiAyLjg4LTUuMTJMNy40NCA0LjQ0QzUuMzYgNS44OCA0IDguMjggNCAxMWMwIDQuNDIgMy41OCA4IDggOHM4LTMuNTggOC04YzAtMi43Mi0xLjM2LTUuMTItMy40NC02LjU2ek0xNSAyNGgydi0yaC0ydjJ6XCIvPjwvc3ZnPmAsXG5cdHNldHRpbmdzUmVtb3RlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTUgOUg5Yy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoNmMuNTUgMCAxLS40NSAxLTFWMTBjMC0uNTUtLjQ1LTEtMS0xem0tMyA2Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpNNy4wNSA2LjA1bDEuNDEgMS40MUM5LjM3IDYuNTYgMTAuNjIgNiAxMiA2czIuNjMuNTYgMy41NCAxLjQ2bDEuNDEtMS40MUMxNS42OCA0Ljc4IDEzLjkzIDQgMTIgNHMtMy42OC43OC00Ljk1IDIuMDV6TTEyIDBDOC45NiAwIDYuMjEgMS4yMyA0LjIyIDMuMjJsMS40MSAxLjQxQzcuMjYgMy4wMSA5LjUxIDIgMTIgMnM0Ljc0IDEuMDEgNi4zNiAyLjY0bDEuNDEtMS40MUMxNy43OSAxLjIzIDE1LjA0IDAgMTIgMHpcIi8+PC9zdmc+YCxcblx0c2V0dGluZ3NWb2ljZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTcgMjRoMnYtMkg3djJ6bTUtMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNGMwLTEuNjYtMS4zNC0zLTMtM1M5IDIuMzQgOSA0djZjMCAxLjY2IDEuMzQgMyAzIDN6bS0xIDExaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptNC0xNGgtMS43YzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxMyA2LjcgMTBINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMGgydi0zLjI4YzMuMjgtLjQ5IDYtMy4zMSA2LTYuNzJ6XCIvPjwvc3ZnPmAsXG5cdHNob3A6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNiA2VjRjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDJ2MTNjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmgtNnptLTYtMmg0djJoLTRWNHpNOSAxOFY5bDcuNSA0TDkgMTh6XCIvPjwvc3ZnPmAsXG5cdHNob3BUd286IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0zIDlIMXYxMWMwIDEuMTEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjg5IDItMkgzVjl6bTE1LTRWM2MwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINXYxMWMwIDEuMTEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjg5IDItMlY1aC01em0tNi0yaDR2MmgtNFYzem0wIDEyVjhsNS41IDMtNS41IDR6XCIvPjwvc3ZnPmAsXG5cdHNob3BwaW5nQmFza2V0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTcuMjEgOWwtNC4zOC02LjU2Yy0uMTktLjI4LS41MS0uNDItLjgzLS40Mi0uMzIgMC0uNjQuMTQtLjgzLjQzTDYuNzkgOUgyYy0uNTUgMC0xIC40NS0xIDEgMCAuMDkuMDEuMTguMDQuMjdsMi41NCA5LjI3Yy4yMy44NCAxIDEuNDYgMS45MiAxLjQ2aDEzYy45MiAwIDEuNjktLjYyIDEuOTMtMS40NmwyLjU0LTkuMjdMMjMgMTBjMC0uNTUtLjQ1LTEtMS0xaC00Ljc5ek05IDlsMy00LjRMMTUgOUg5em0zIDhjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelwiLz48L3N2Zz5gLFxuXHRzaG9wcGluZ0NhcnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yek0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJIMXptMTYgMTZjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yelwiLz48L3N2Zz5gLFxuXHRzaHVmZmxlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTAuNTkgOS4xN0w1LjQxIDQgNCA1LjQxbDUuMTcgNS4xNyAxLjQyLTEuNDF6TTE0LjUgNGwyLjA0IDIuMDRMNCAxOC41OSA1LjQxIDIwIDE3Ljk2IDcuNDYgMjAgOS41VjRoLTUuNXptLjMzIDkuNDFsLTEuNDEgMS40MSAzLjEzIDMuMTNMMTQuNSAyMEgyMHYtNS41bC0yLjA0IDIuMDQtMy4xMy0zLjEzelwiLz48L3N2Zz5gLFxuXHRzbWFydHBob25lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTcgMS4wMUw3IDFjLTEuMSAwLTIgLjktMiAydjE4YzAgMS4xLjkgMiAyIDJoMTBjMS4xIDAgMi0uOSAyLTJWM2MwLTEuMS0uOS0xLjk5LTItMS45OXpNMTcgMTlIN1Y1aDEwdjE0elwiLz48L3N2Zz5gLFxuXHRzb3J0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMyAxOGg2di0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTJ2LTJIM3YyelwiLz48L3N2Zz5gLFxuXHRzcGVha2VyTm90ZXM6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNOCAxNEg2di0yaDJ2MnptMC0zSDZWOWgydjJ6bTAtM0g2VjZoMnYyem03IDZoLTV2LTJoNXYyem0zLTNoLThWOWg4djJ6bTAtM2gtOFY2aDh2MnpcIi8+PC9zdmc+YCxcblx0c3BlYWtlck5vdGVzT2ZmOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTAuNTQgMTFsLS41NC0uNTRMNy41NCA4IDYgNi40NiAyLjM4IDIuODQgMS4yNyAxLjczIDAgM2wyLjAxIDIuMDFMMiAyMmw0LTRoOWw1LjczIDUuNzNMMjIgMjIuNDYgMTcuNTQgMThsLTctN3pNOCAxNEg2di0yaDJ2MnptLTItM1Y5bDIgMkg2em0xNC05SDQuMDhMMTAgNy45MlY2aDh2MmgtNy45MmwxIDFIMTh2MmgtNC45Mmw2Ljk5IDYuOTlDMjEuMTQgMTcuOTUgMjIgMTcuMDggMjIgMTZWNGMwLTEuMS0uOS0yLTItMnpcIi8+PC9zdmc+YCxcblx0c3BlbGxjaGVjazogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyLjQ1IDE2aDIuMDlMOS40MyAzSDcuNTdMMi40NiAxNmgyLjA5bDEuMTItM2g1LjY0bDEuMTQgM3ptLTYuMDItNUw4LjUgNS40OCAxMC41NyAxMUg2LjQzem0xNS4xNi41OWwtOC4wOSA4LjA5TDkuODMgMTZsLTEuNDEgMS40MSA1LjA5IDUuMDlMMjMgMTNsLTEuNDEtMS40MXpcIi8+PC9zdmc+YCxcblx0c3RhcjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelwiLz48L3N2Zz5gLFxuXHRzdGFyQm9yZGVyOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcIi8+PC9zdmc+YCxcblx0c3RhckhhbGY6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40VjYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XCIvPjwvc3ZnPmAsXG5cdHN0YXJzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnptNC4yNCAxNkwxMiAxNS40NSA3Ljc3IDE4bDEuMTItNC44MS0zLjczLTMuMjMgNC45Mi0uNDJMMTIgNWwxLjkyIDQuNTMgNC45Mi40Mi0zLjczIDMuMjNMMTYuMjMgMTh6XCIvPjwvc3ZnPmAsXG5cdHN0b3JlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjAgNEg0djJoMTZWNHptMSAxMHYtMmwtMS01SDRsLTEgNXYyaDF2NmgxMHYtNmg0djZoMnYtNmgxem0tOSA0SDZ2LTRoNnY0elwiLz48L3N2Zz5gLFxuXHRzdWJkaXJlY3RvcnlBcnJvd0xlZnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMSA5bDEuNDIgMS40Mkw4LjgzIDE0SDE4VjRoMnYxMkg4LjgzbDMuNTkgMy41OEwxMSAyMWwtNi02IDYtNnpcIi8+PC9zdmc+YCxcblx0c3ViZGlyZWN0b3J5QXJyb3dSaWdodDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5IDE1bC02IDYtMS40Mi0xLjQyTDE1LjE3IDE2SDRWNGgydjEwaDkuMTdsLTMuNTktMy41OEwxMyA5bDYgNnpcIi8+PC9zdmc+YCxcblx0c3ViamVjdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE0IDE3SDR2MmgxMHYtMnptNi04SDR2MmgxNlY5ek00IDE1aDE2di0ySDR2MnpNNCA1djJoMTZWNUg0elwiLz48L3N2Zz5gLFxuXHRzdXBlcnZpc29yQWNjb3VudDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE2LjUgMTJjMS4zOCAwIDIuNDktMS4xMiAyLjQ5LTIuNVMxNy44OCA3IDE2LjUgN0MxNS4xMiA3IDE0IDguMTIgMTQgOS41czEuMTIgMi41IDIuNSAyLjV6TTkgMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTMTAuNjYgNSA5IDVDNy4zNCA1IDYgNi4zNCA2IDhzMS4zNCAzIDMgM3ptNy41IDNjLTEuODMgMC01LjUuOTItNS41IDIuNzVWMTloMTF2LTIuMjVjMC0xLjgzLTMuNjctMi43NS01LjUtMi43NXpNOSAxM2MtMi4zMyAwLTcgMS4xNy03IDMuNVYxOWg3di0yLjI1YzAtLjg1LjMzLTIuMzQgMi4zNy0zLjQ3QzEwLjUgMTMuMSA5LjY2IDEzIDkgMTN6XCIvPjwvc3ZnPmAsXG5cdHN3YXBIb3JpejogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTYuOTkgMTFMMyAxNWwzLjk5IDR2LTNIMTR2LTJINi45OXYtM3pNMjEgOWwtMy45OS00djNIMTB2Mmg3LjAxdjNMMjEgOXpcIi8+PC9zdmc+YCxcblx0c3dhcFZlcnQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNiAxNy4wMVYxMGgtMnY3LjAxaC0zTDE1IDIxbDQtMy45OWgtM3pNOSAzTDUgNi45OWgzVjE0aDJWNi45OWgzTDkgM3pcIi8+PC9zdmc+YCxcblx0c3dhcFZlcnRpY2FsQ2lyY2xlOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnpNNi41IDlMMTAgNS41IDEzLjUgOUgxMXY0SDlWOUg2LjV6bTExIDZMMTQgMTguNSAxMC41IDE1SDEzdi00aDJ2NGgyLjV6XCIvPjwvc3ZnPmAsXG5cdHN5c3RlbVVwZGF0ZUFsdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDE2LjVsNC00aC0zdi05aC0ydjlIOGw0IDR6bTktMTNoLTZ2MS45OWg2djE0LjAzSDNWNS40OWg2VjMuNUgzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0ydi0xNGMwLTEuMS0uOS0yLTItMnpcIi8+PC9zdmc+YCxcblx0dGFiOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjEgM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZIM1Y1aDEwdjRoOHYxMHpcIi8+PC9zdmc+YCxcblx0dGFiVW5zZWxlY3RlZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEgOWgyVjdIMXYyem0wIDRoMnYtMkgxdjJ6bTAtOGgyVjNjLTEuMSAwLTIgLjktMiAyem04IDE2aDJ2LTJIOXYyem0tOC00aDJ2LTJIMXYyem0yIDR2LTJIMWMwIDEuMS45IDIgMiAyek0yMSAzaC04djZoMTBWNWMwLTEuMS0uOS0yLTItMnptMCAxNGgydi0yaC0ydjJ6TTkgNWgyVjNIOXYyek01IDIxaDJ2LTJINXYyek01IDVoMlYzSDV2MnptMTYgMTZjMS4xIDAgMi0uOSAyLTJoLTJ2MnptMC04aDJ2LTJoLTJ2MnptLTggOGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6XCIvPjwvc3ZnPmAsXG5cdHRleHRGb3JtYXQ6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk01IDE3djJoMTR2LTJINXptNC41LTQuMmg1bC45IDIuMmgyLjFMMTIuNzUgNGgtMS41TDYuNSAxNWgyLjFsLjktMi4yek0xMiA1Ljk4TDEzLjg3IDExaC0zLjc0TDEyIDUuOTh6XCIvPjwvc3ZnPmAsXG5cdHRoZWF0ZXJzOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTggM3YyaC0yVjNIOHYySDZWM0g0djE4aDJ2LTJoMnYyaDh2LTJoMnYyaDJWM2gtMnpNOCAxN0g2di0yaDJ2MnptMC00SDZ2LTJoMnYyem0wLTRINlY3aDJ2MnptMTAgOGgtMnYtMmgydjJ6bTAtNGgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2MnpcIi8+PC9zdmc+YCxcblx0dGh1bWJEb3duOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTUgM0g2Yy0uODMgMC0xLjU0LjUtMS44NCAxLjIybC0zLjAyIDcuMDVjLS4wOS4yMy0uMTQuNDctLjE0LjczdjEuOTFsLjAxLjAxTDEgMTRjMCAxLjEuOSAyIDIgMmg2LjMxbC0uOTUgNC41Ny0uMDMuMzJjMCAuNDEuMTcuNzkuNDQgMS4wNkw5LjgzIDIzbDYuNTktNi41OWMuMzYtLjM2LjU4LS44Ni41OC0xLjQxVjVjMC0xLjEtLjktMi0yLTJ6bTQgMHYxMmg0VjNoLTR6XCIvPjwvc3ZnPmAsXG5cdHRodW1iVXA6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xIDIxaDRWOUgxdjEyem0yMi0xMWMwLTEuMS0uOS0yLTItMmgtNi4zMWwuOTUtNC41Ny4wMy0uMzJjMC0uNDEtLjE3LS43OS0uNDQtMS4wNkwxNC4xNyAxIDcuNTkgNy41OUM3LjIyIDcuOTUgNyA4LjQ1IDcgOXYxMGMwIDEuMS45IDIgMiAyaDljLjgzIDAgMS41NC0uNSAxLjg0LTEuMjJsMy4wMi03LjA1Yy4wOS0uMjMuMTQtLjQ3LjE0LS43M3YtMS45MWwtLjAxLS4wMUwyMyAxMHpcIi8+PC9zdmc+YCxcblx0dGh1bWJzVXBEb3duOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgNmMwLS41NS0uNDUtMS0xLTFINS44MmwuNjYtMy4xOC4wMi0uMjNjMC0uMzEtLjEzLS41OS0uMzMtLjhMNS4zOCAwIC40NCA0Ljk0Qy4xNyA1LjIxIDAgNS41OSAwIDZ2Ni41YzAgLjgzLjY3IDEuNSAxLjUgMS41aDYuNzVjLjYyIDAgMS4xNS0uMzggMS4zOC0uOTFsMi4yNi01LjI5Yy4wNy0uMTcuMTEtLjM2LjExLS41NVY2em0xMC41IDRoLTYuNzVjLS42MiAwLTEuMTUuMzgtMS4zOC45MWwtMi4yNiA1LjI5Yy0uMDcuMTctLjExLjM2LS4xMS41NVYxOGMwIC41NS40NSAxIDEgMWg1LjE4bC0uNjYgMy4xOC0uMDIuMjRjMCAuMzEuMTMuNTkuMzMuOGwuNzkuNzggNC45NC00Ljk0Yy4yNy0uMjcuNDQtLjY1LjQ0LTEuMDZ2LTYuNWMwLS44My0uNjctMS41LTEuNS0xLjV6XCIvPjwvc3ZnPmAsXG5cdHRpbWVsaW5lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMjMgOGMwIDEuMS0uOSAyLTIgMi0uMTggMC0uMzUtLjAyLS41MS0uMDdsLTMuNTYgMy41NWMuMDUuMTYuMDcuMzQuMDcuNTIgMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yYzAtLjE4LjAyLS4zNi4wNy0uNTJsLTIuNTUtMi41NWMtLjE2LjA1LS4zNC4wNy0uNTIuMDdzLS4zNi0uMDItLjUyLS4wN2wtNC41NSA0LjU2Yy4wNS4xNi4wNy4zMy4wNy41MSAwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTJjLjE4IDAgLjM1LjAyLjUxLjA3bDQuNTYtNC41NUM4LjAyIDkuMzYgOCA5LjE4IDggOWMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgLjE4LS4wMi4zNi0uMDcuNTJsMi41NSAyLjU1Yy4xNi0uMDUuMzQtLjA3LjUyLS4wN3MuMzYuMDIuNTIuMDdsMy41NS0zLjU2QzE5LjAyIDguMzUgMTkgOC4xOCAxOSA4YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJ6XCIvPjwvc3ZnPmAsXG5cdHRhYmxldDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIxIDRIM2MtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAxLjk5LS45IDEuOTktMkwyMyA2YzAtMS4xLS45LTItMi0yem0tMiAxNEg1VjZoMTR2MTJ6XCIvPjwvc3ZnPmAsXG5cdHRvYzogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTMgOWgxNFY3SDN2MnptMCA0aDE0di0ySDN2MnptMCA0aDE0di0ySDN2MnptMTYgMGgydi0yaC0ydjJ6bTAtMTB2MmgyVjdoLTJ6bTAgNmgydi0yaC0ydjJ6XCIvPjwvc3ZnPmAsXG5cdHRvZGF5OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3elwiLz48L3N2Zz5gLFxuXHR0b2xsOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTUgNGMtNC40MiAwLTggMy41OC04IDhzMy41OCA4IDggOCA4LTMuNTggOC04LTMuNTgtOC04LTh6bTAgMTRjLTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTYgNiAyLjY5IDYgNi0yLjY5IDYtNiA2ek0zIDEyYzAtMi42MSAxLjY3LTQuODMgNC01LjY1VjQuMjZDMy41NSA1LjE1IDEgOC4yNyAxIDEyczIuNTUgNi44NSA2IDcuNzR2LTIuMDljLTIuMzMtLjgyLTQtMy4wNC00LTUuNjV6XCIvPjwvc3ZnPmAsXG5cdHRvdWNoQXBwOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNOSAxMS4yNFY3LjVDOSA2LjEyIDEwLjEyIDUgMTEuNSA1UzE0IDYuMTIgMTQgNy41djMuNzRjMS4yMS0uODEgMi0yLjE4IDItMy43NEMxNiA1LjAxIDEzLjk5IDMgMTEuNSAzUzcgNS4wMSA3IDcuNWMwIDEuNTYuNzkgMi45MyAyIDMuNzR6bTkuODQgNC42M2wtNC41NC0yLjI2Yy0uMTctLjA3LS4zNS0uMTEtLjU0LS4xMUgxM3YtNmMwLS44My0uNjctMS41LTEuNS0xLjVTMTAgNi42NyAxMCA3LjV2MTAuNzRsLTMuNDMtLjcyYy0uMDgtLjAxLS4xNS0uMDMtLjI0LS4wMy0uMzEgMC0uNTkuMTMtLjc5LjMzbC0uNzkuOCA0Ljk0IDQuOTRjLjI3LjI3LjY1LjQ0IDEuMDYuNDRoNi43OWMuNzUgMCAxLjMzLS41NSAxLjQ0LTEuMjhsLjc1LTUuMjdjLjAxLS4wNy4wMi0uMTQuMDItLjIgMC0uNjItLjM4LTEuMTYtLjkxLTEuMzh6XCIvPjwvc3ZnPmAsXG5cdHRyYWNrQ2hhbmdlczogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE5LjA3IDQuOTNsLTEuNDEgMS40MUMxOS4xIDcuNzkgMjAgOS43OSAyMCAxMmMwIDQuNDItMy41OCA4LTggOHMtOC0zLjU4LTgtOGMwLTQuMDggMy4wNS03LjQ0IDctNy45M3YyLjAyQzguMTYgNi41NyA2IDkuMDMgNiAxMmMwIDMuMzEgMi42OSA2IDYgNnM2LTIuNjkgNi02YzAtMS42Ni0uNjctMy4xNi0xLjc2LTQuMjRsLTEuNDEgMS40MUMxNS41NSA5LjkgMTYgMTAuOSAxNiAxMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNGMwLTEuODYgMS4yOC0zLjQxIDMtMy44NnYyLjE0Yy0uNi4zNS0xIC45OC0xIDEuNzIgMCAxLjEuOSAyIDIgMnMyLS45IDItMmMwLS43NC0uNC0xLjM4LTEtMS43MlYyaC0xQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBjMC0yLjc2LTEuMTItNS4yNi0yLjkzLTcuMDd6XCIvPjwvc3ZnPmAsXG5cdHRyYW5zbGF0ZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyLjg3IDE1LjA3bC0yLjU0LTIuNTEuMDMtLjAzYzEuNzQtMS45NCAyLjk4LTQuMTcgMy43MS02LjUzSDE3VjRoLTdWMkg4djJIMXYxLjk5aDExLjE3QzExLjUgNy45MiAxMC40NCA5Ljc1IDkgMTEuMzUgOC4wNyAxMC4zMiA3LjMgOS4xOSA2LjY5IDhoLTJjLjczIDEuNjMgMS43MyAzLjE3IDIuOTggNC41NmwtNS4wOSA1LjAyTDQgMTlsNS01IDMuMTEgMy4xMS43Ni0yLjA0ek0xOC41IDEwaC0yTDEyIDIyaDJsMS4xMi0zaDQuNzVMMjEgMjJoMmwtNC41LTEyem0tMi42MiA3bDEuNjItNC4zM0wxOS4xMiAxN2gtMy4yNHpcIi8+PC9zdmc+YCxcblx0dHJlbmRpbmdEb3duOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTYgMThsMi4yOS0yLjI5LTQuODgtNC44OC00IDRMMiA3LjQxIDMuNDEgNmw2IDYgNC00IDYuMyA2LjI5TDIyIDEydjZ6XCIvPjwvc3ZnPmAsXG5cdHRyZW5kaW5nRmxhdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIyIDEybC00LTR2M0gzdjJoMTV2M3pcIi8+PC9zdmc+YCxcblx0dHJlbmRpbmdVcDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTE2IDZsMi4yOSAyLjI5LTQuODggNC44OC00LTRMMiAxNi41OSAzLjQxIDE4bDYtNiA0IDQgNi4zLTYuMjlMMjIgMTJWNnpcIi8+PC9zdmc+YCxcblx0dHVybmVkSW46IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6XCIvPjwvc3ZnPmAsXG5cdHR1cm5lZEluTm90OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yem0wIDE1bC01LTIuMThMNyAxOFY1aDEwdjEzelwiLz48L3N2Zz5gLFxuXHR1bmFyY2hpdmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMC41NSA1LjIybC0xLjM5LTEuNjhDMTguODggMy4yMSAxOC40NyAzIDE4IDNINmMtLjQ3IDAtLjg4LjIxLTEuMTUuNTVMMy40NiA1LjIyQzMuMTcgNS41NyAzIDYuMDEgMyA2LjVWMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNi41YzAtLjQ5LS4xNy0uOTMtLjQ1LTEuMjh6TTEyIDkuNWw1LjUgNS41SDE0djJoLTR2LTJINi41TDEyIDkuNXpNNS4xMiA1bC44Mi0xaDEybC45MyAxSDUuMTJ6XCIvPjwvc3ZnPmAsXG5cdHVuZG86IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMi41IDhjLTIuNjUgMC01LjA1Ljk5LTYuOSAyLjZMMiA3djloOWwtMy42Mi0zLjYyYzEuMzktMS4xNiAzLjE2LTEuODggNS4xMi0xLjg4IDMuNTQgMCA2LjU1IDIuMzEgNy42IDUuNWwyLjM3LS43OEMyMS4wOCAxMS4wMyAxNy4xNSA4IDEyLjUgOHpcIi8+PC9zdmc+YCxcblx0dW5mb2xkTGVzczogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTcuNDEgMTguNTlMOC44MyAyMCAxMiAxNi44MyAxNS4xNyAyMGwxLjQxLTEuNDFMMTIgMTRsLTQuNTkgNC41OXptOS4xOC0xMy4xOEwxNS4xNyA0IDEyIDcuMTcgOC44MyA0IDcuNDEgNS40MSAxMiAxMGw0LjU5LTQuNTl6XCIvPjwvc3ZnPmAsXG5cdHVuZm9sZE1vcmU6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xMiA1LjgzTDE1LjE3IDlsMS40MS0xLjQxTDEyIDMgNy40MSA3LjU5IDguODMgOSAxMiA1Ljgzem0wIDEyLjM0TDguODMgMTVsLTEuNDEgMS40MUwxMiAyMWw0LjU5LTQuNTlMMTUuMTcgMTUgMTIgMTguMTd6XCIvPjwvc3ZnPmAsXG5cdHVwZGF0ZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIxIDEwLjEyaC02Ljc4bDIuNzQtMi44MmMtMi43My0yLjctNy4xNS0yLjgtOS44OC0uMS0yLjczIDIuNzEtMi43MyA3LjA4IDAgOS43OSAyLjczIDIuNzEgNy4xNSAyLjcxIDkuODggMEMxOC4zMiAxNS42NSAxOSAxNC4wOCAxOSAxMi4xaDJjMCAxLjk4LS44OCA0LjU1LTIuNjQgNi4yOS0zLjUxIDMuNDgtOS4yMSAzLjQ4LTEyLjcyIDAtMy41LTMuNDctMy41My05LjExLS4wMi0xMi41OCAzLjUxLTMuNDcgOS4xNC0zLjQ3IDEyLjY1IDBMMjEgM3Y3LjEyek0xMi41IDh2NC4yNWwzLjUgMi4wOC0uNzIgMS4yMUwxMSAxM1Y4aDEuNXpcIi8+PC9zdmc+YCxcblx0dmVyaWZpZWRVc2VyOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMUwzIDV2NmMwIDUuNTUgMy44NCAxMC43NCA5IDEyIDUuMTYtMS4yNiA5LTYuNDUgOS0xMlY1bC05LTR6bS0yIDE2bC00LTQgMS40MS0xLjQxTDEwIDE0LjE3bDYuNTktNi41OUwxOCA5bC04IDh6XCIvPjwvc3ZnPmAsXG5cdHZpZXdBZ2VuZGE6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCAxM0gzYy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxN2MuNTUgMCAxLS40NSAxLTF2LTZjMC0uNTUtLjQ1LTEtMS0xem0wLTEwSDNjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE3Yy41NSAwIDEtLjQ1IDEtMVY0YzAtLjU1LS40NS0xLTEtMXpcIi8+PC9zdmc+YCxcblx0dmlld0FycmF5OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNCAxOGgzVjVINHYxM3pNMTggNXYxM2gzVjVoLTN6TTggMThoOVY1SDh2MTN6XCIvPjwvc3ZnPmAsXG5cdHZpZXdDYXJvdXNlbDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTcgMTloMTBWNEg3djE1em0tNS0yaDRWNkgydjExek0xOCA2djExaDRWNmgtNHpcIi8+PC9zdmc+YCxcblx0dmlld0NvbHVtbjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEwIDE4aDVWNWgtNXYxM3ptLTYgMGg1VjVINHYxM3pNMTYgNXYxM2g1VjVoLTV6XCIvPjwvc3ZnPmAsXG5cdHZpZXdEYXk6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yIDIxaDE5di0zSDJ2M3pNMjAgOEgzYy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxN2MuNTUgMCAxLS40NSAxLTFWOWMwLS41NS0uNDUtMS0xLTF6TTIgM3YzaDE5VjNIMnpcIi8+PC9zdmc+YCxcblx0dmlld0hlYWRsaW5lOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNCAxNWgxNnYtMkg0djJ6bTAgNGgxNnYtMkg0djJ6bTAtOGgxNlY5SDR2MnptMC02djJoMTZWNUg0elwiLz48L3N2Zz5gLFxuXHR2aWV3TGlzdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTQgMTRoNHYtNEg0djR6bTAgNWg0di00SDR2NHpNNCA5aDRWNUg0djR6bTUgNWgxMnYtNEg5djR6bTAgNWgxMnYtNEg5djR6TTkgNXY0aDEyVjVIOXpcIi8+PC9zdmc+YCxcblx0dmlld01vZHVsZTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTQgMTFoNVY1SDR2NnptMCA3aDV2LTZINHY2em02IDBoNXYtNmgtNXY2em02IDBoNXYtNmgtNXY2em0tNi03aDVWNWgtNXY2em02LTZ2Nmg1VjVoLTV6XCIvPjwvc3ZnPmAsXG5cdHZpZXdRdWlsdDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEwIDE4aDV2LTZoLTV2NnptLTYgMGg1VjVINHYxM3ptMTIgMGg1di02aC01djZ6TTEwIDV2NmgxMVY1SDEwelwiLz48L3N2Zz5gLFxuXHR2aWV3U3RyZWFtOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNNCAxOGgxN3YtNkg0djZ6TTQgNXY2aDE3VjVINHpcIi8+PC9zdmc+YCxcblx0dmlld1dlZWs6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk02IDVIM2MtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xem0xNCAwaC0zYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6bS03IDBoLTNjLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXpcIi8+PC9zdmc+YCxcblx0dmlzaWJpbGl0eTogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDQuNUM3IDQuNSAyLjczIDcuNjEgMSAxMmMxLjczIDQuMzkgNiA3LjUgMTEgNy41czkuMjctMy4xMSAxMS03LjVjLTEuNzMtNC4zOS02LTcuNS0xMS03LjV6TTEyIDE3Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXptMC04Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzIDMtMS4zNCAzLTMtMS4zNC0zLTMtM3pcIi8+PC9zdmc+YCxcblx0dmlzaWJpbGl0eU9mZjogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTEyIDdjMi43NiAwIDUgMi4yNCA1IDUgMCAuNjUtLjEzIDEuMjYtLjM2IDEuODNsMi45MiAyLjkyYzEuNTEtMS4yNiAyLjctMi44OSAzLjQzLTQuNzUtMS43My00LjM5LTYtNy41LTExLTcuNS0xLjQgMC0yLjc0LjI1LTMuOTguN2wyLjE2IDIuMTZDMTAuNzQgNy4xMyAxMS4zNSA3IDEyIDd6TTIgNC4yN2wyLjI4IDIuMjguNDYuNDZDMy4wOCA4LjMgMS43OCAxMC4wMiAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjUgMS41NSAwIDMuMDMtLjMgNC4zOC0uODRsLjQyLjQyTDE5LjczIDIyIDIxIDIwLjczIDMuMjcgMyAyIDQuMjd6TTcuNTMgOS44bDEuNTUgMS41NWMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjY2IDEuMzQgMyAzIDMgLjIyIDAgLjQ0LS4wMy42NS0uMDhsMS41NSAxLjU1Yy0uNjcuMzMtMS40MS41My0yLjIuNTMtMi43NiAwLTUtMi4yNC01LTUgMC0uNzkuMi0xLjUzLjUzLTIuMnptNC4zMS0uNzhsMy4xNSAzLjE1LjAyLS4xNmMwLTEuNjYtMS4zNC0zLTMtM2wtLjE3LjAxelwiLz48L3N2Zz5gLFxuXHR3YXJuaW5nOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elwiLz48L3N2Zz5gLFxuXHR3YXRjaExhdGVyOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTBTMTcuNSAyIDEyIDJ6bTQuMiAxNC4yTDExIDEzVjdoMS41djUuMmw0LjUgMi43LS44IDEuM3pcIi8+PC9zdmc+YCxcblx0d2Vla2VuZDogaHRtbGA8c3ZnIHZpZXdCb3g9XCIxIDEgMjIgMjJcIj48cGF0aCBkPVwiTTIxIDEwYy0xLjEgMC0yIC45LTIgMnYzSDV2LTNjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAydjVjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtNWMwLTEuMS0uOS0yLTItMnptLTMtNUg2Yy0xLjEgMC0yIC45LTIgMnYyLjE1YzEuMTYuNDEgMiAxLjUxIDIgMi44MlYxNGgxMnYtMi4wM2MwLTEuMy44NC0yLjQgMi0yLjgyVjdjMC0xLjEtLjktMi0yLTJ6XCIvPjwvc3ZnPmAsXG5cdHdvcms6IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0yMCA2aC00VjRjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTYgMGgtNFY0aDR2MnpcIi8+PC9zdmc+YCxcblx0eW91dHViZVNlYXJjaGVkRm9yOiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTcuMDEgMTRoLS44bC0uMjctLjI3Yy45OC0xLjE0IDEuNTctMi42MSAxLjU3LTQuMjMgMC0zLjU5LTIuOTEtNi41LTYuNS02LjVzLTYuNSAzLTYuNSA2LjVIMmwzLjg0IDQgNC4xNi00SDYuNTFDNi41MSA3IDguNTMgNSAxMS4wMSA1czQuNSAyLjAxIDQuNSA0LjVjMCAyLjQ4LTIuMDIgNC41LTQuNSA0LjUtLjY1IDAtMS4yNi0uMTQtMS44Mi0uMzhMNy43MSAxNS4xYy45Ny41NyAyLjA5LjkgMy4zLjkgMS42MSAwIDMuMDgtLjU5IDQuMjItMS41N2wuMjcuMjd2Ljc5bDUuMDEgNC45OUwyMiAxOWwtNC45OS01elwiLz48L3N2Zz5gLFxuXHR6b29tSW46IGh0bWxgPHN2ZyB2aWV3Qm94PVwiMSAxIDIyIDIyXCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0em0yLjUtNGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxelwiLz48L3N2Zz5gLFxuXHR6b29tT3V0OiBodG1sYDxzdmcgdmlld0JveD1cIjEgMSAyMiAyMlwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpNNyA5aDV2MUg3elwiLz48L3N2Zz5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpYkljb25NYXRlcmlhbERlc2lnbjsiLCJpbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCwgaHRtbCB9IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdXN0b20td2ViLWNvbXBvbmVudC9pbmRleC5qcyc7XG5pbXBvcnQgTGliSWNvbk1hdGVyaWFsRGVzaWduIGZyb20gJy4uL2ljb24vbGliLWljb24tbWF0ZXJpYWwtZGVzaWduLmpzJztcblxuLyoqXG4gKiBAcHVibGljIEBuYW1lIExpYk92ZXJsYXlTYXZpbmdcbiAqIEBleHRlbmRzIEN1c3RvbUhUTUxFbGVtZW50XG4gKiBAZGVzY3JpcHRpb24gQXBwbGljYXRpb24gV2ViIENvbXBvbmVudCwgYWRkcyBhIHNhdmluZyBpY29uIHRoYXQgc2VsZiBoaWRlcyBhZnRlciBYIHNlY29uZHNcbiAqIEBleGFtcGxlIFVzZSBieSBkaXNwYXRjaGluZyB0byBjdXN0b20gZXZlbnQgJ21lc3NhZ2UnIGZyb20gd2l0aGluIHRoZSBhcHAgYXMgYW4gaW5mbywgZXJyb3IsIHdhcm5pbmcgb3IgZG9uZSBtZXNzYWdlIGUuZy4gYHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ21lc3NhZ2UnLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlLCBkZXRhaWw6IHsgdGV4dDogJ2Jvb20gY2FudmFzIHNlbGVjdG9yIGxvYWRlZCcsIHR5cGU6ICdpbmZvJywgc2Vjb25kczogMiB9IH0pKTtgXG4gKiBAYXV0aG9yIFBhdWwgU21pdGggPHBhdWwuc21pdGhAdWxzbWl0aC5uZXQ+XG4gKiBAY29weXJpZ2h0IDIwMTggdWxzbWl0aC5uZXQgKHVsc21pdGgubmV0KVxuICovXG5jbGFzcyBMaWJPdmVybGF5IGV4dGVuZHMgQ3VzdG9tSFRNTEVsZW1lbnQge1xuXG5cdC8qKlxuICAgICAqIEBwdWJsaWMgQGNvbnN0cnVjdG9yIEBuYW1lIGNvbnN0cnVjdG9yXG5cdCAqIEBkZXNjcmlwdGlvbiBQcm9jZXNzIGNhbGxlZCBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkIChidXQgbm90IHJlYWR5IG9yIGluIERPTSwgbXVzdCBjYWxsIHN1cGVyKCkgZmlyc3QpXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWMgQHN0YXRpYyBAbmFtZSB0ZW1wbGF0ZVxuXHQgKiBAZGVzY3JpcHRpb24gVGVtcGxhdGUgZnVuY3Rpb24gdG8gcmV0dXJuIHdlYiBjb21wb25lbnQgVUlcblx0ICogQHJldHVybiB7U3RyaW5nfSBIVE1MIHRlbXBsYXRlIGJsb2NrXG5cdCAqL1xuICAgIHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcblx0XHRcdDxzdHlsZT5cblx0XHRcdFx0I2xpYi1vdmVybGF5IHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCNsaWItb3ZlcmxheSAub3ZlcmxheS1iYWNrZHJvcCB7IFxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHotaW5kZXg6IDEwMDI7XG5cdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQjbGliLW92ZXJsYXkgLm92ZXJsYXktY29udGFpbmVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0ei1pbmRleDogMTAwMztcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0I2xpYi1vdmVybGF5IC5vdmVybGF5LWNvbnRhaW5lciAub3ZlcmxheS1jb250ZW50IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAyNXB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcblx0XHRcdFx0fVxuXHRcdFx0PC9zdHlsZT5cblxuXHRcdFx0PGRpdiBpZD1cImxpYi1vdmVybGF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvdmVybGF5LWJhY2tkcm9wXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzcz1cIm92ZXJsYXktY29udGFpbmVyXCIgQGNsaWNrPVwiJHt0aGlzLmhpZGUuYmluZCh0aGlzKX1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3ZlcmxheS1jb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuICAgICAgICBgO1xuXHR9XG5cblx0Y29ubmVjdGVkKCkge1xuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR0aGlzLnN0eWxlLnpJbmRleCA9IC0xO1xuXHR9XG5cblx0LyoqXG4gICAgICogQHB1YmxpYyBAbmFtZSBzaG93XG5cdCAqIEBkZXNjcmlwdGlvbiBTaG93IHRoZSBzYXZpbmcgaWNvbiBhbmQgc2VsZiByZW1vdmUgYWZ0ZXIgWCBzZWNvbmRzXG5cdCAqL1xuXHR0b2dnbGUoKSB7XG5cdFx0aWYgKHRoaXMuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykgdGhpcy5oaWRlKCk7XG5cdFx0ZWxzZSB0aGlzLnNob3coKTtcblx0fVxuXG5cdC8qKlxuICAgICAqIEBwdWJsaWMgQG5hbWUgc2hvd1xuXHQgKiBAZGVzY3JpcHRpb24gU2hvdyB0aGUgc2F2aW5nIGljb24gYW5kIHNlbGYgcmVtb3ZlIGFmdGVyIFggc2Vjb25kc1xuXHQgKi9cblx0c2hvdygpIHtcblx0XHRpZiAodGhpcy5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSByZXR1cm47XG5cblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzaG93JykpO1xuXG5cdFx0Ly8gYWRkIGl0XG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0dGhpcy5kb20uc3R5bGUuekluZGV4ID0gMTAwMTtcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHRoaXMuc3R5bGUuekluZGV4ID0gMTAwMTtcblxuXHRcdC8vIHNob3cgaXRcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuZG9tLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdH0sIDUwKTtcblx0fVxuXG5cdC8qKlxuICAgICAqIEBwdWJsaWMgQG5hbWUgc2hvd1xuXHQgKiBAZGVzY3JpcHRpb24gU2hvdyB0aGUgc2F2aW5nIGljb24gYW5kIHNlbGYgcmVtb3ZlIGFmdGVyIFggc2Vjb25kc1xuXHQgKi9cblx0aGlkZShldikge1xuXHRcdGlmICh0aGlzLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgcmV0dXJuO1xuXHRcdFxuXHRcdC8vIGlmIHdlIGhpZGUgZnJvbSBldmVudCwgbWFrZSBzdXJlIGl0cyBhIGNsaWNrIHRvIGNvbnRhaW5lclxuXHRcdGlmICghIWV2ICYmIGV2LnRhcmdldCAmJiBldi50YXJnZXQucGFyZW50Tm9kZSAmJiBldi50YXJnZXQucGFyZW50Tm9kZS5pZCAhPT0gJ2xpYi1vdmVybGF5JykgcmV0dXJuO1xuXHRcdFxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2hpZGUnKSk7XG5cblx0XHQvLyBhZGQgaXRcblx0XHR0aGlzLmRvbS5zdHlsZS5vcGFjaXR5ID0gMDtcblx0XHRcblx0XHQvLyBzaG93IGl0XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5kb20uc3R5bGUuekluZGV4ID0gLTE7XG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLnN0eWxlLnpJbmRleCA9IC0xO1xuXHRcdH0sIDI1MCk7XG5cdH1cbn1cblxuLy8gYm9vdHN0cmFwIHRoZSBjbGFzcyBhcyBhIG5ldyB3ZWIgY29tcG9uZW50XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xpYi1vdmVybGF5JywgTGliT3ZlcmxheSk7XG4iLCIvKipcbiAqIEBwdWJsaWMgQG5hbWUgTGliUmVzb3VyY2VSZXF1ZXN0XG4gKiBAZGVzY3JpcHRpb24gQ29tbW9uIHJlc291cmNlIGVsZW1lbnQgd2l0aG91dCBhIHRlbXBsYXRlIHRvIG9mZmVyIGFzeW5jIGFqYXggcmVxdWVzdHMgd2l0aCBKV1QgcmVzb2x1dGlvbiBhbmQgYXV0byByZWZyZXNoIEpXVFxuICogQGF1dGhvciBQYXVsIFNtaXRoIDxwQHVsc21pdGgubmV0PlxuICogQGNvcHlyaWdodCAyMDE4IFBhdWwgU21pdGggKHVsc21pdGgubmV0KVxuICogQGxpY2Vuc2UgdW5yZXN0cmljdGVkIGZvciB1c2UgYnkgdWxzbWl0aC5uZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGliUmVzb3VyY2VSZXF1ZXN0IHtcblxuXHQvKipcbiAgICAgKiBAcHVibGljIEBjb25zdHJ1Y3RvciBAbmFtZSBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzY3JpcHRpb24gUHJvY2VzcyBjYWxsZWQgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCAoYnV0IG5vdCByZWFkeSBvciBpbiBET00sIG11c3QgY2FsbCBzdXBlcigpIGZpcnN0KVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zY2hlbWUgPSBudWxsO1xuXHRcdHRoaXMuYmFzZVVybCA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpYyBAbmFtZSBhamF4XG5cdCAqIEBkZXNjcmlwdGlvbiBQZXJmb3JtIGFuIGFqYXggcmVxdWVzdFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgcmVxdWVzdCB0eXBlIHN1Y2ggYXMgR0VULCBQT1NULi4uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIHRoZSByZXF1ZXN0IHRvXG5cdCAqIEBwYXJhbSB7TWl4ZWR9IGRhdGEgQW55IHBheWxvYWQgZGF0YSB0byBnbyB3aXRoIHRoZSByZXF1ZXN0XG5cdCAqIEBwYXJhbSB7T2JqY2V0fSBoZWFkZXJzIEFueSBoZWFkZXJzIHRvIHNlbmRcblx0ICogQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taWVzIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgcmVxdWVzdCBpcyBmdWxsZmlsbGVkXG5cdCAqL1xuXHRhamF4KHR5cGUsIHVybCwgZGF0YSwgaGVhZGVycykge1xuXHRcdHZhciBzY29wZSA9IHRoaXM7XG5cdFx0dHlwZSA9IHR5cGUudG9VcHBlckNhc2UoKTtcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciBYSFIgPSBYTUxIdHRwUmVxdWVzdCB8fCBBY3RpdmVYT2JqZWN0O1xuXHRcdFx0dmFyIHhoclJlcXVlc3QgPSBuZXcgWEhSKCdNU1hNTDIuWE1MSFRUUC4zLjAnKTtcblx0XHRcdHhoclJlcXVlc3Qub3Blbih0eXBlLCB1cmwsIHRydWUpO1xuXHRcdFx0aWYgKHR5cGVvZiBoZWFkZXJzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRpZiAoc2NvcGUuZ2V0VG9rZW4oKSkgaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgc2NvcGUuZ2V0VG9rZW4oKTtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHhoclJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSk7XG5cdFx0XHR9XG5cblx0XHRcdHhoclJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoeGhyUmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG5cdFx0XHRcdFx0Ly8gc29ydCBvdXQgcmVzcG9uc2UsIHNuaWZmIG91dCBqc29uIGFuZCBjb252ZXJ0XG5cdFx0XHRcdFx0dmFyIG91dHB1dCA9IHhoclJlcXVlc3QucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gIT09ICd1bmRlZmluZWQnICYmIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddLmluZGV4T2YoJ2pzb24nKSA+PSAwKSB7XG5cdFx0XHRcdFx0XHR0cnkgeyBvdXRwdXQgPSBKU09OLnBhcnNlKHhoclJlcXVlc3QucmVzcG9uc2VUZXh0KTsgfVxuXHRcdFx0XHRcdFx0Y2F0Y2ggKGUpIHsgfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGlmIGF1dGhvcml6YXRpb24gc2F2ZSB0byBsb2NhbFN0b3JhZ2UgdG8gcmVzZW5kIGJhY2sgaW5cblx0XHRcdFx0XHRpZiAoeGhyUmVxdWVzdC5zdGF0dXMgPCA0MDAgJiYgISF0aGlzLmdldFJlc3BvbnNlSGVhZGVyKCdBdXRob3JpemF0aW9uJykpIHNjb3BlLnNldFRva2VuKHRoaXMuZ2V0UmVzcG9uc2VIZWFkZXIoJ0F1dGhvcml6YXRpb24nKSk7XG5cblx0XHRcdFx0XHQvLyByZXNvbHZlIG9yIHJlamVjdFxuXHRcdFx0XHRcdGlmICh4aHJSZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgeGhyUmVxdWVzdC5zdGF0dXMgPCA0MDApIHJlc29sdmUoeyBkYXRhOiBvdXRwdXQsIHJlc3BvbnNlOiB4aHJSZXF1ZXN0IH0pO1xuXHRcdFx0XHRcdGVsc2UgcmVqZWN0KHsgZGF0YTogb3V0cHV0LCByZXNwb25zZTogeGhyUmVxdWVzdCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHhoclJlcXVlc3Quc2VuZChkYXRhKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljIEBuYW1lIGdldFxuXHQgKiBAZGVzY3JpcHRpb24gUGVyZm9ybSBhIGdldCByZXF1ZXN0XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3Qgb24gKGFkZHMgdG8gc2NoZW1lICsgYmFzZVVybClcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGlkIEFueSBpZCB0byBhcHBlbmQgdG8gdGhlIHBhdGggZm9yIFJFU1Qgc3R5bGUgcmVxdWVzdHNcblx0ICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlZCByZXNvbHZlZCBvbiBjb21wbGV0aW9uIG9mIHJlcXVlc3Rcblx0ICovXG5cdGdldChwYXRoLCBpZCkge1xuXHRcdHZhciBoZWFkZXJzID0geyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsICdDYWNoZS1Db250cm9sJzogJ25vLXN0b3JlJywgJ1ByYWdtYSc6ICduby1jYWNoZScsICdFeHBpcmVzJzogJzAnfTtcblx0XHRyZXR1cm4gdGhpcy5hamF4KCdHRVQnLCB0aGlzLnNjaGVtZSArIHRoaXMuYmFzZVVybCArICghIXBhdGggPyAnLycgKyBwYXRoIDogJycpICsgKHR5cGVvZiBpZCAhPT0gJ3VuZGVmaW5lZCcgJiYgaWQgIT09IG51bGwgPyAnLycgKyBpZCA6ICcnKSwgbnVsbCwgaGVhZGVycyk7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpYyBAbmFtZSBwdXRcblx0ICogQGRlc2NyaXB0aW9uIFBlcmZvcm0gYSBwdXQgcmVxdWVzdFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBwZXJmb3JtIHRoZSByZXF1ZXN0IG9uIChhZGRzIHRvIHNjaGVtZSArIGJhc2VVcmwpXG5cdCAqIEBwYXJhbSB7TWl4ZWR9IGRhdGEgQW55IGRhdGEgdG8gc2VuZCBhcyB0aGUgcGF5bG9hZCBmb3IgUkVTVCBzdHlsZSByZXF1ZXN0XG5cdCAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZWQgcmVzb2x2ZWQgb24gY29tcGxldGlvbiBvZiByZXF1ZXN0XG5cdCAqL1xuXHRwdXQocGF0aCwgZGF0YSkge1xuXHRcdHZhciBoZWFkZXJzID0geyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsICdDYWNoZS1Db250cm9sJzogJ25vLXN0b3JlJywgJ1ByYWdtYSc6ICduby1jYWNoZScsICdFeHBpcmVzJzogJzAnIH07XG5cdFx0dHJ5IHsgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpOyB9XG5cdFx0Y2F0Y2ggKGUpIHsgfVxuXHRcdHJldHVybiB0aGlzLmFqYXgoJ1BVVCcsIHRoaXMuc2NoZW1lICsgdGhpcy5iYXNlVXJsICsgKCEhcGF0aCA/ICcvJyArIHBhdGggOiAnJyksIGRhdGEsIGhlYWRlcnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWMgQG5hbWUgcGF0Y2hcblx0ICogQGRlc2NyaXB0aW9uIFBlcmZvcm0gYSBwYXRjaCByZXF1ZXN0XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3Qgb24gKGFkZHMgdG8gc2NoZW1lICsgYmFzZVVybClcblx0ICogQHBhcmFtIHtNaXhlZH0gZGF0YSBBbnkgZGF0YSB0byBzZW5kIGFzIHRoZSBwYXlsb2FkIGZvciBSRVNUIHN0eWxlIHJlcXVlc3Rcblx0ICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlZCByZXNvbHZlZCBvbiBjb21wbGV0aW9uIG9mIHJlcXVlc3Rcblx0ICovXG5cdHBhdGNoKHBhdGgsIGRhdGEpIHtcblx0XHR2YXIgaGVhZGVycyA9IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLCAnQ2FjaGUtQ29udHJvbCc6ICduby1zdG9yZScsICdQcmFnbWEnOiAnbm8tY2FjaGUnLCAnRXhwaXJlcyc6ICcwJyB9O1xuXHRcdHRyeSB7IGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTsgfVxuXHRcdGNhdGNoIChlKSB7IH1cblx0XHRyZXR1cm4gdGhpcy5hamF4KCdQQVRDSCcsIHRoaXMuc2NoZW1lICsgdGhpcy5iYXNlVXJsICsgJy8nICsgcGF0aCwgZGF0YSwgaGVhZGVycyk7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpYyBAbmFtZSBwb3N0XG5cdCAqIEBkZXNjcmlwdGlvbiBQZXJmb3JtIGEgcG9zdCByZXF1ZXN0XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3Qgb24gKGFkZHMgdG8gc2NoZW1lICsgYmFzZVVybClcblx0ICogQHBhcmFtIHtNaXhlZH0gZGF0YSBBbnkgZGF0YSB0byBzZW5kIGFzIHRoZSBwYXlsb2FkIGZvciBSRVNUIHN0eWxlIHJlcXVlc3Rcblx0ICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlZCByZXNvbHZlZCBvbiBjb21wbGV0aW9uIG9mIHJlcXVlc3Rcblx0ICovXG5cdHBvc3QocGF0aCwgZGF0YSkge1xuXHRcdHZhciBoZWFkZXJzID0geyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsICdDYWNoZS1Db250cm9sJzogJ25vLXN0b3JlJywgJ1ByYWdtYSc6ICduby1jYWNoZScsICdFeHBpcmVzJzogJzAnIH07XG5cdFx0dHJ5IHsgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpOyB9XG5cdFx0Y2F0Y2ggKGUpIHsgfVxuXHRcdHJldHVybiB0aGlzLmFqYXgoJ1BPU1QnLCB0aGlzLnNjaGVtZSArIHRoaXMuYmFzZVVybCArICghIXBhdGggPyAnLycgKyBwYXRoIDogJycpLCBkYXRhLCBoZWFkZXJzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljIEBuYW1lIHVwbG9hZFxuXHQgKiBAZGVzY3JpcHRpb24gUGVyZm9ybSBhIHVwbG9hZCByZXF1ZXN0IHVzaW5nIHBvc3QgYW5kIGZvcm0gZGF0YSBieSBzZW5kaW5nIGluIGZpbGUgbGlzdCBmcm9tIGlucHV0W3R5cGU9ZmlsZV1cblx0ICogQHBhcmFtIHtTdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gcGVyZm9ybSB0aGUgcmVxdWVzdCBvbiAoYWRkcyB0byBzY2hlbWUgKyBiYXNlVXJsKVxuXHQgKiBAcGFyYW0ge01peGVkfSBkYXRhIEFueSBkYXRhIHRvIHNlbmQgYXMgdGhlIHBheWxvYWQgZm9yIFJFU1Qgc3R5bGUgcmVxdWVzdFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2VkIHJlc29sdmVkIG9uIGNvbXBsZXRpb24gb2YgcmVxdWVzdFxuXHQgKi9cblx0dXBsb2FkKHBhdGgsIGZpbGVzLCBsZW5ndGgpIHtcblx0XHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZHNbXScsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0dmFyIGhlYWRlcnMgPSB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJywgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tc3RvcmUnLCAnUHJhZ21hJzogJ25vLWNhY2hlJywgJ0V4cGlyZXMnOiAnMCcgfTtcblx0XHRyZXR1cm4gdGhpcy5hamF4KCdQT1NUJywgdGhpcy5zY2hlbWUgKyB0aGlzLmJhc2VVcmwgKyAoISFwYXRoID8gJy8nICsgcGF0aCA6ICcnKSwgZm9ybURhdGEsIGhlYWRlcnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWMgQG5hbWUgZGVsZXRlXG5cdCAqIEBkZXNjcmlwdGlvbiBQZXJmb3JtIGEgZGVsZXRlIHJlcXVlc3Rcblx0ICogQHBhcmFtIHtTdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gcGVyZm9ybSB0aGUgcmVxdWVzdCBvbiAoYWRkcyB0byBzY2hlbWUgKyBiYXNlVXJsKVxuXHQgKiBAcGFyYW0ge051bWJlcn0gaWQgQW55IGlkIHRvIGFwcGVuZCB0byB0aGUgcGF0aCBmb3IgUkVTVCBzdHlsZSByZXF1ZXN0c1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2VkIHJlc29sdmVkIG9uIGNvbXBsZXRpb24gb2YgcmVxdWVzdFxuXHQgKi9cblx0ZGVsZXRlKHBhdGgsIGlkKSB7XG5cdFx0dmFyIGhlYWRlcnMgPSB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJywgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tc3RvcmUnLCAnUHJhZ21hJzogJ25vLWNhY2hlJywgJ0V4cGlyZXMnOiAnMCcgfTtcblx0XHRyZXR1cm4gdGhpcy5hamF4KCdERUxFVEUnLCB0aGlzLnNjaGVtZSArIHRoaXMuYmFzZVVybCArICcvJyArIHBhdGggKyAodHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJyAmJiBpZCAhPT0gbnVsbCA/ICcvJyArIGlkIDogJycpLCBudWxsLCBoZWFkZXJzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljIEBuYW1lIGdldFRva2VuXG5cdCAqIEBkZXNjcmlwdGlvbiBHZXQgY3VycmVudCBKV1QgdG9rZW5cblx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgSldUIHRva2VuIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlXG5cdCAqL1xuXHRnZXRUb2tlbigpIHtcblx0XHRpZiAobG9jYWxTdG9yYWdlWydhdXRob3JpemF0aW9uJ10gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGxvY2FsU3RvcmFnZVsnYXV0aG9yaXphdGlvbiddO1xuXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljIEBuYW1lIHNldFRva2VuXG5cdCAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIEpXVCB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgcGF0aCB0byBwZXJmb3JtIHRoZSByZXF1ZXN0IG9uIChhZGRzIHRvIHNjaGVtZSArIGJhc2VVcmwpXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIEpXVCB0b2tlbiBzdG9yZWQgaW4gbG9jYWwgc3RvcmFnZVxuXHQgKi9cblx0c2V0VG9rZW4odmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZVsnYXV0aG9yaXphdGlvbiddID0gdmFsdWUucmVwbGFjZSgnQmVhcmVyICcsICcnKS5yZXBsYWNlKCdSZWZyZXNoICcsICcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljIEBuYW1lIGRlbGV0ZVRva2VuXG5cdCAqIEBkZXNjcmlwdGlvbiBEZWxldGUgdGhlIEpXVCB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2Vcblx0ICovXG5cdGRlbGV0ZVRva2VuKCkge1xuXHRcdGxvY2FsU3RvcmFnZVsnYXV0aG9yaXphdGlvbiddID0gJyc7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpYyBAbmFtZSBzZXRCYXNlVXJsXG5cdCAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGJhc2UgdXJsIGFuZCBzY2hlbWVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBwYXRoIHRvIHNldCBhcyBiYXNlVXJsIGFuZCBzY2hlbWVcblx0ICovXG5cdHNldEJhc2VVcmwodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5iYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG5cdFx0XHR0aGlzLnNjaGVtZSA9ICdodHRwOi8vJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ2h0dHBzOi8vJykgPT0gMCkge1xuXHRcdFx0aWYgKHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSA9PT0gJy8nKSB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCB2YWx1ZS5sZW5ndGggLSAyKTtcblx0XHRcdHRoaXMuYmFzZVVybCA9IHZhbHVlLnJlcGxhY2UoJ2h0dHBzOi8vJywgJycpO1xuXHRcdFx0dGhpcy5zY2hlbWUgPSAnaHR0cHM6Ly8nO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignaHR0cDovLycpID09IDApIHtcblx0XHRcdGlmICh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgPT09ICcvJykgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmFsdWUubGVuZ3RoIC0gMik7XG5cdFx0XHR0aGlzLmJhc2VVcmwgPSB2YWx1ZS5yZXBsYWNlKCdodHRwOi8vJywgJycpO1xuXHRcdFx0dGhpcy5zY2hlbWUgPSAnaHR0cDovLyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgPT09ICcvJykgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmFsdWUubGVuZ3RoIC0gMik7XG5cdFx0XHR0aGlzLmJhc2VVcmwgPSB2YWx1ZTtcblx0XHRcdHRoaXMuc2NoZW1lID0gJ2h0dHA6Ly8nO1xuXHRcdH1cblx0fVxufSIsIi8qKlxuICogQHB1YmxpYyBAbmFtZSBMaWJSZXNvdXJjZVN0b3JlXG4gKiBAZGVzY3JpcHRpb24gQ29tbW9uIHJlc291cmNlIGVsZW1lbnQgd2l0aG91dCBhIHRlbXBsYXRlIHRvIHJlc29sdmUgY29uZGl0aW9ucyBvbiBtb2R1bGVzXG4gKiBAYXV0aG9yIFBhdWwgU21pdGggPHBAdWxzbWl0aC5uZXQ+XG4gKiBAY29weXJpZ2h0IDIwMTggUGF1bCBTbWl0aCAodWxzbWl0aC5uZXQpXG4gKiBAbGljZW5zZSB1bnJlc3RyaWN0ZWQgZm9yIHVzZSBieSB1bHNtaXRoLm5ldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJSZXNvdXJjZVN0b3JlIHtcblxuXHQvKipcbiAgICAgKiBAcHVibGljIEBjb25zdHJ1Y3RvciBAbmFtZSBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzY3JpcHRpb24gUHJvY2VzcyBjYWxsZWQgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCAoYnV0IG5vdCByZWFkeSBvciBpbiBET00sIG11c3QgY2FsbCBzdXBlcigpIGZpcnN0KVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iYXNlTmFtZSA9ICdhY2Nybyc7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpYyBAbmFtZSBnZXRJdGVtXG5cdCAqIEBkZXNjcmlwdGlvbiBHZXQgYW4gdGhpbmcgZnJvbSBsb2NhbCBzdG9yYWdlLCBkYXRhIGNhbiBiZSBzdG9yZWQgYXMgb2JqZWN0cyB3aXRoIGEga2V5IGFuZCBoYXZlIGNoaWxkIG9iamVjdHMsIHlvdSBjYW4gcmV0cmlldmUgdGhlbSBhcyBzdWNoIHRvb1xuXHQgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBpdGVtIHRvIGdldCwgY2FuIGJlIGRvdCBub3RhdGVkIHRvIGdldCBhbGwgY2hpbGRyZW4gb2YgcGFyZW50XG5cdCAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0IHRvIGdldFxuXHQgKi9cblx0Z2V0SXRlbShrZXkpIHtcblx0XHQvLyBibGFuayBrZXlcblx0XHRpZiAoIWtleSB8fCBsb2NhbFN0b3JhZ2UubGVuZ3RoIDwgMSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuXHRcdC8vIGZ1bGwga2V5IGV4aXN0c1xuXHRcdGlmIChsb2NhbFN0b3JhZ2VbdGhpcy5iYXNlTmFtZSArICcuc3RvcmUuJyArIGtleV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW3RoaXMuYmFzZU5hbWUgKyAnLnN0b3JlLicgKyBrZXldKTtcblxuXHRcdC8vIGZpbmQgYWxsIHZhbHVlcyBmcm9tIHRoaXMga2V5IG9ud2FyZHNcblx0XHR2YXIgb2JqID0ge307XG5cdFx0Zm9yIChsZXQgbmFtZSBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRcdGlmIChuYW1lLmluZGV4T2YodGhpcy5iYXNlTmFtZSArICcuc3RvcmUuJyArIGtleSkgIT09IDApIGNvbnRpbnVlO1xuXG5cdFx0XHQvLyBidWlsZCB1cCBvYmpcblx0XHRcdGxldCB0ZW1wLCBwYXJ0cywgcGFydDtcblx0XHRcdHRlbXAgPSBvYmo7XG5cdFx0XHRwYXJ0cyA9IG5hbWUuc3Vic3RyaW5nKCh0aGlzLmJhc2VOYW1lICsgJy5zdG9yZS4nICsga2V5KS5sZW5ndGggKyAxLCBuYW1lLmxlbmd0aCkuc3BsaXQoJy4nKTtcblx0XHRcdHdoaWxlIChwYXJ0cy5sZW5ndGgpIHtcblx0XHRcdFx0cGFydCA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0XHRcdGlmICghdGVtcFtwYXJ0XSkgdGVtcFtwYXJ0XSA9IHt9O1xuXHRcdFx0XHRpZiAocGFydHMubGVuZ3RoID09PSAwKSB0ZW1wW3BhcnRdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbbmFtZV0pO1xuXHRcdFx0XHR0ZW1wID0gdGVtcFtwYXJ0XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPiAwID8gb2JqIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWMgQG5hbWUgc2V0SXRlbVxuXHQgKiBAZGVzY3JpcHRpb24gU2V0IGEgdmFsdWUgb24gbG9jYWwgc3RvcmFnZSwgeW91IGNhbiBzYXZlIHByZXR0eSBtdWNoIGFueXRoaW5nIGFuZCB5b3UgY2FuIHNhdmUgdGhpbmdzIGFzIGFuIG9iamVjdCB3aXRoIGNoaWxkIG9iamVjdHNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgaXRlbSB0byBnZXQsIGNhbiBiZSBkb3Qgbm90YXRlZCB0byBnZXQgYWxsIGNoaWxkcmVuIG9mIHBhcmVudFxuXHQgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSB0aGUgdmFsdWUgdG8gc3RvcmVcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gV2FzIGl0IHN1Y2Nlc3NmdWxsIG9yIG5vdCBpbiBzb3RyaW5nXG5cdCAqL1xuXHRzZXRJdGVtKGtleSwgdmFsdWUpIHtcblx0XHQvLyBibGFuayBrZXkgb3IgdmFsdWVcblx0XHRpZiAoIWtleSB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyB8fCBrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PSAnLicgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Ly8gY2xlYXIgb3V0IGtleXMgYW5kIHNldCB2YWx1ZXNcblx0XHR0aGlzLmRlbGV0ZUl0ZW0oa2V5KTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiB2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnNldEl0ZW0oa2V5ICsgJy4nICsgbmFtZSwgdmFsdWVbbmFtZV0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGlzLmRlbGV0ZUl0ZW0oa2V5KVxuXHRcdFx0bG9jYWxTdG9yYWdlW3RoaXMuYmFzZU5hbWUgKyAnLnN0b3JlLicgKyBrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG5cdFx0XHQvLyBjbGVhbiB1cCBwYXJlbnRzIGlmIHdlIGFkZGVkIG9yIGNoYW5nZWQgYSBjaGlsZCBhcyBwYXJlbnRzIGFyZSBvYmplY3RzIGFuZCBzaG91bGRuJ3QgYmUgcHJlc2VudCBhbnl3YXlcblx0XHRcdHZhciBwYXJ0cyA9IGtleS5zcGxpdCgnLicpO1xuXHRcdFx0dmFyIHBhcnQgPSAnJztcblx0XHRcdHdoaWxlIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHBhcnQgKz0gJy4nICsgcGFydHMuc2hpZnQoKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5iYXNlTmFtZSArICcuc3RvcmUnICsgcGFydCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpYyBAbmFtZSBkZWxldGVJdGVtXG5cdCAqIEBkZXNjcmlwdGlvbiBEZWxldGUgYSB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHlvdSBjYW4gZGVsZXRlIHNpbmdsZSBpdGVtcyBvciBpdGVtIGFuZCBjaGlsZHJlbiBpZiB0aGV5IGhhdmUgYW55XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGl0ZW0gdG8gZ2V0LCBjYW4gYmUgZG90IG5vdGF0ZWQgdG8gZ2V0IGFsbCBjaGlsZHJlbiBvZiBwYXJlbnRcblx0ICogQHJldHVybiBBcnJheSBXZWIgY29tcG9uZW50IGFwaSBvbmJzZXJ2YXRpb25zXG5cdCAqL1xuXHRkZWxldGVJdGVtKGtleSkge1xuXHRcdC8vIGJsYW5rIGtleSBvciB2YWx1ZVxuXHRcdHZhciByZXN1bHQgPSBmYWxzZTtcblx0XHRpZiAoIWtleSB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyB8fCBrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PSAnLicpIHJldHVybiByZXN1bHQ7XG5cblx0XHQvLyByZW1vdmUgdmFsdWVcblx0XHRpZiAobG9jYWxTdG9yYWdlW3RoaXMuYmFzZU5hbWUgKyAnLnN0b3JlLicgKyBrZXldKSByZXN1bHQgPSBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmJhc2VOYW1lICsgJy5zdG9yZS4nICsga2V5KTtcblxuXHRcdC8vIHJlbW92ZSBjaGlsZHJlblxuXHRcdGZvciAobGV0IG5hbWUgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0XHRpZiAobmFtZS5pbmRleE9mKHRoaXMuYmFzZU5hbWUgKyAnLnN0b3JlLicgKyBrZXkgKyAnLicpICE9PSAwKSBjb250aW51ZTtcblx0XHRcdHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuLy8gYm9vdHN0cmFwIHRoZSBjbGFzcyBhcyBhIG5ldyB3ZWIgY29tcG9uZW50XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsaWItcmVzb3VyY2Utc3RvcmUnLCBMaWJSZXNvdXJjZVN0b3JlKTsiLCJpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL3JlZmxlY3QtY29uc3RydWN0b3IvcmVmbGVjdC1jb25zdHJ1Y3Rvci5qcyc7XG5pbXBvcnQgJy4vY3djL2FwcC9hcHAtcm9vdC5qcyc7XG5cbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJyk7IiwiaW1wb3J0IEN1c3RvbUhUTUxFbGVtZW50IGZyb20gJy4vc3JjL0N1c3RvbUhUTUxFbGVtZW50LmpzJ1xuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vbGl0LWh0bWwvbGl0LWh0bWwuanMnO1xuXG5leHBvcnQge1xuICAgIEN1c3RvbUhUTUxFbGVtZW50IGFzIEN1c3RvbUhUTUxFbGVtZW50LFxuICAgIGh0bWwgYXMgaHRtbFxufSIsImltcG9ydCBDdXN0b21XZWJDb21wb25lbnQgZnJvbSAnLi9DdXN0b21XZWJDb21wb25lbnQuanMnO1xuXG4vKipcbiAqIEN1c3RvbUhUTUxFbGVtZW50XG4gKiBBIHNhbXBsZSBleHRlbnNpb24gdG8gdGhlIGJhc2ljIEhUTUwgRWxlbWVudCBjbGFzcywgcHJvdmlkaW5nIHRlbXBsYXRpbmcgZm9yIHdlYiBjb21wb25lbnRzIHRocm91Z2ggdGhlIGxpdC1odG1sIGxpYnJhcnlcbiAqIEJ1aWxkIG9uIFdlYiBTdGFuZGFyZHMsIHBvbHlmaWxsZWQgZm9yIGxlZ2FjeSBicm93c2VycywgdXNpbmcgYSBzaW1wbGUgY2xlYW4gbGl0ZSBIVE1MIHRlbXBsYXRlIHJlbmRlcmluZyBjYWxsZWQgbGl0LWh0bWxcbiAqIEV4dGVuZCB0aGlzIGNsYXNzIHRvIGNyZWF0ZSBhIHNpbXBsZSBIVE1MIEN1c3RvbWUgRWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21IVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBcdC8qKlxuXHQgKiBjb25zdHJ1Y3RvcigpXG5cdCAqIENyZWF0ZSBhIHNpbXBsZSBIVE1MIGVsZW1lbnQgYW5kIG9ic2VydmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudXBkYXRlVGltZW91dDtcblx0XHRDdXN0b21XZWJDb21wb25lbnQuYmluZFByb3BlcnRpZXMuY2FsbCh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBkZWZhdWx0IG1ldGhvZHMgaW5oZXJpdGVkIGZyb20gQ3VzdG9tIFdlYiBDb21wb25lbnRcblx0ICogY29ubmVjdGVkQ2FsbGJhY2soKSwgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSwgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCksIHVwZGF0ZVRlbXBsYXRlKCkuLi5cblx0ICogQm9vdHN0cmFwIHN0YXRpYyBtZXRob2RzIGZvciBkZWZhdWx0IGN1c3RvbSB3ZWIgZnVuY3Rpb25hbGl0eVxuXHQgKi9cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7IEN1c3RvbVdlYkNvbXBvbmVudC5jb25uZWN0ZWRDYWxsYmFjay5jYWxsKHRoaXMpIH1cblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7IEN1c3RvbVdlYkNvbXBvbmVudC5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKHRoaXMpIH1cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHByb3BlcnR5LCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHsgQ3VzdG9tV2ViQ29tcG9uZW50LmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKHRoaXMsIHByb3BlcnR5LCBvbGRWYWx1ZSwgbmV3VmFsdWUpIH1cblx0XG5cdHVwZGF0ZVRlbXBsYXRlKCkge1xuXHRcdC8vIGRlYm91bmNlIHVwZGF0ZXNcblx0XHRjbGVhclRpbWVvdXQodGhpcy51cGRhdGVUaW1lb3V0KTtcblx0XHR0aGlzLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IEN1c3RvbVdlYkNvbXBvbmVudC51cGRhdGVUZW1wbGF0ZS5jYWxsKHRoaXMpLCAxKTtcblx0fVxuXG5cdGhvc3Qob3B0aW9ucykge1xuXHRcdHJldHVybiAhd2luZG93LlNoYWR5Q1NTID8gKCc6aG9zdCcgKyAob3B0aW9ucyA/IGAoJHtvcHRpb25zfSlgIDogJycpKSA6IHRoaXMubG9jYWxOYW1lICsgKG9wdGlvbnMgPyBgJHtvcHRpb25zfWAgOiAnJyk7XG5cdH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uLy4uL2xpdC1odG1sL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBDdXN0b21IVE1MRWxlbWVudFxuICogQSBzYW1wbGUgZXh0ZW5zaW9uIHRvIHRoZSBiYXNpYyBIVE1MIEVsZW1lbnQgY2xhc3MsIHByb3ZpZGluZyB0ZW1wbGF0aW5nIGZvciB3ZWIgY29tcG9uZW50cyB0aHJvdWdoIHRoZSBsaXQtaHRtbCBsaWJyYXJ5XG4gKiBCdWlsZCBvbiBXZWIgU3RhbmRhcmRzLCBwb2x5ZmlsbGVkIGZvciBsZWdhY3kgYnJvd3NlcnMsIHVzaW5nIGEgc2ltcGxlIGNsZWFuIGxpdGUgSFRNTCB0ZW1wbGF0ZSByZW5kZXJpbmcgY2FsbGVkIGxpdC1odG1sXG4gKiBFeHRlbmQgdGhpcyBjbGFzcyB0byBjcmVhdGUgYSBzaW1wbGUgSFRNTCBDdXN0b21lIEVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tV2ViQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqIGNvbm5lY3RlZENhbGxiYWNrKClcblx0ICogQ2F0Y2ggdGhlIHN0YW5kYXJkIGNvbm5lY3RlZCBjYWxsYmFjaywgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZSBvbiBpbnN0YW50aWF0aW9uXG5cdCAqIGZvbGxvd3MgdXAgYnkgYnViYmxpbmcgdGhlIGNhbGxiYWNrIHVwIHRvIGNvbm5lY3RlZCgpIG9uIGNoaWxkXG5cdCAqL1xuXHRzdGF0aWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm47XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmNvbm5lY3RlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5jb25uZWN0ZWQuY2FsbCh0aGlzKTtcblx0XHRpZiAodHlwZW9mIHRoaXMudXBkYXRlVGVtcGxhdGUgPT09ICdmdW5jdGlvbicpIEN1c3RvbVdlYkNvbXBvbmVudC51cGRhdGVUZW1wbGF0ZS5jYWxsKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIGRpc2Nvbm5lY3RlZENhbGxiYWNrKClcblx0ICogQ2F0Y2ggdGhlIHN0YW5kYXJkIGRpc2Nvbm5lY3RlZCBjYWxsYmFja1xuXHQgKiBmb2xsb3dzIHVwIGJ5IGJ1YmJsaW5nIHRoZSBjYWxsYmFjayB1cCB0byBkaXNjb25uZWN0ZWQoKSBvbiBjaGlsZFxuXHQgKi9cblx0c3RhdGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdGlmICh0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm47XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRpc2Nvbm5lY3RlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5kaXNjb25uZWN0ZWQuY2FsbCh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKVxuXHQgKiBDYXRjaCB0aGUgc3RhbmRhcmQgYXR0cmlidXRlQ2hhbmdlZCBjYWxsYmFja1xuXHQgKiBmb2xsb3dzIHVwIGJ5IGJ1YmJsaW5nIHRoZSBjYWxsYmFjayB1cCB0byBhdHRyaWJ1dGVDaGFuZ2VkKCkgb24gY2hpbGQgZm9yIGF0dHJpYnV0ZXMgc3Vic2NyaWJlZCB0b29cblx0ICovXG5cdHN0YXRpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMuYXR0cmlidXRlQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkLmNhbGwodGhpcywgYXR0cmlidXRlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIF9fYmluZFByb3BlcnRpZXMoKVxuXHQgKiBJbnRlcm5hbCBtZXRob2QgdG8gYmluZCBwcm9wZXJ0aWVzIGFuZCBjcmVhdGUgYSBwcm9wZXJ0eUNoYW5nZWQgY2FsbGJhY2ssIGFsc28gZXhwb3NpbmcgYW4gZXZlbnQgb2YgdGhlIHNhbWUgbmFtZVxuXHQgKiB1c2UgdGhpcyBjYWxsYmFjayBvciB3YXRjaCB0aGUgZXZlbnQgdG8gYmUgbm90aWZpZWQgb2YgcHJvcGVydHkgY2hhbmdlcyB0aGF0IGFyZSBzdWJzY3JpYmVkIHRvb1xuXHQgKi9cblx0c3RhdGljIGJpbmRQcm9wZXJ0aWVzKCkge1xuXHRcdGlmICghdGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZFByb3BlcnRpZXMgfHwgIXRoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzLmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5fX3Byb3BlcnRpZXMgPSB7fTtcblxuXHRcdGZvciAoY29uc3QgaWR4IGluIHRoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZFByb3BlcnRpZXNbaWR4XSwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX19wcm9wZXJ0aWVzW3RoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzW2lkeF1dOyB9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdGxldCBvbGRWYWx1ZSA9IHRoaXMuX19wcm9wZXJ0aWVzW3RoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzW2lkeF1dO1xuXHRcdFx0XHRcdHRoaXMuX19wcm9wZXJ0aWVzW3RoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRQcm9wZXJ0aWVzW2lkeF1dID0gdmFsdWU7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BlcnR5Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5wcm9wZXJ0eUNoYW5nZWQuY2FsbCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLm9ic2VydmVkUHJvcGVydGllc1tpZHhdLCBvbGRWYWx1ZSwgdmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Byb3BlcnR5Y2hhbmdlZCcsIHsgJ2RldGFpbCc6IHsgJ3Byb3BlcnR5JzogdGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZFByb3BlcnRpZXNbaWR4XSwgJ29sZFZhbHVlJzogb2xkVmFsdWUsICduZXdWYWx1ZSc6IHZhbHVlIH0gfSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogdXBkYXRlVGVtcGxhdGUoKVxuXHQgKiBJbmZvcm0gdGhlIHRlbXBsYXRlIG9mIGNoYW5nZXMgdG8gcHJvcGVydGllcyBieSB0ZWxsaW5nIGl0IHRvIHVwZGF0ZVxuXHQgKiB1c2VzIGxpdC1odG1sIHRvIGFjdGl2ZWx5IHJlbmRlciBhIERPTSB0ZW1wbGF0ZSBhbmQgb25seSBjaGFuZ2Ugc3R1ZmYgdGhhdCBuZWVkcyBjaGFuZ2luZyFcblx0ICovXG5cdHN0YXRpYyB1cGRhdGVUZW1wbGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHJldHVybjtcblx0XHRyZW5kZXIodGhpcy50ZW1wbGF0ZSgpLCB0aGlzLnNoYWRvd1Jvb3QgPyB0aGlzLnNoYWRvd1Jvb3QgOiB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KSk7XG5cblx0XHR0aGlzLmRvbSA9IHRoaXMuc2hhZG93Um9vdCA/IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCh0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkgOiB0aGlzLmdldEVsZW1lbnRCeUlkKHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcblx0XHRpZiAodHlwZW9mIHRoaXMudGVtcGxhdGVVcGRhdGVkID09PSAnZnVuY3Rpb24nKSB0aGlzLnRlbXBsYXRlVXBkYXRlZC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RlbXBsYXRldXBkYXRlZCcpKTtcblx0fVxufSIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IEF0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyIH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG4vKipcbiAqIENyZWF0ZXMgUGFydHMgd2hlbiBhIHRlbXBsYXRlIGlzIGluc3RhbnRpYXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5nIGxpdGVyYWxzLiBUaGVyZSBhcmUgYWx3YXlzIGF0IGxlYXN0IHR3byBzdHJpbmdzLFxuICAgICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIGhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbmFtZVswXTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBjb25zdCBjb21pdHRlciA9IG5ldyBQcm9wZXJ0eUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKTtcbiAgICAgICAgICAgIHJldHVybiBjb21pdHRlci5wYXJ0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICAgICAgcmV0dXJuIGNvbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUZhY3RvcnlcbiAgICAgKi9cbiAgICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbCB0aGUgZnVuY3Rpb25cbiAqIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChmKSA9PiAoKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBkID0gZiguLi5hcmdzKTtcbiAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICByZXR1cm4gZDtcbn0pO1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0aXZlID0gKG8pID0+IHR5cGVvZiBvID09PSAnZnVuY3Rpb24nICYmIGRpcmVjdGl2ZXMuaGFzKG8pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrICE9PSB1bmRlZmluZWQ7XG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmVcbiAqIGBiZWZvcmVOb2RlYC4gSWYgYGJlZm9yZU5vZGVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZVxuICogY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsLCBiZWZvcmUgPSBudWxsKSA9PiB7XG4gICAgbGV0IG5vZGUgPSBzdGFydDtcbiAgICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5vZGUsIGJlZm9yZSk7XG4gICAgICAgIG5vZGUgPSBuO1xuICAgIH1cbn07XG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgZnJvbSBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnROb2RlLCBlbmROb2RlID0gbnVsbCkgPT4ge1xuICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgIHdoaWxlIChub2RlICE9PSBlbmROb2RlKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIG5vZGUgPSBuO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb20uanMubWFwIiwiLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBub0NoYW5nZSB9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7IGNyZWF0ZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgQXR0cmlidXRlUGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1tpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgICAqL1xuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJ0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodikgfHwgdHlwZW9mIHYgIT09ICdzdHJpbmcnICYmIHZbU3ltYm9sLml0ZXJhdG9yXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHQgPT09ICdzdHJpbmcnID8gdCA6IFN0cmluZyh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoY29taXR0ZXIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb21taXR0ZXIgPSBjb21pdHRlcjtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSAmJiAoIWlzUHJpbWl0aXZlKHZhbHVlKSB8fCB2YWx1ZSAhPT0gdGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIG5vdCBhIGRpcmVjdGl2ZSwgZGlydHkgdGhlIGNvbW1pdHRlciBzbyB0aGF0IGl0J2xsXG4gICAgICAgICAgICAvLyBjYWxsIHNldEF0dHJpYnV0ZS4gSWYgdGhlIHZhbHVlIGlzIGEgZGlyZWN0aXZlLCBpdCdsbCBkaXJ0eSB0aGVcbiAgICAgICAgICAgIC8vIGNvbW1pdHRlciBpZiBpdCBjYWxscyBzZXRWYWx1ZSgpLlxuICAgICAgICAgICAgaWYgKCFpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG8oY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYmV0d2VlbiBgcmVmYCBhbmQgYHJlZmAncyBuZXh0IHNpYmxpbmcuIEJvdGggYHJlZmAgYW5kXG4gICAgICogaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2RlcyBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyXG4gICAgICogaW4gYSBsaXRlcmFsIHNlY3Rpb24gb2YgYSB0ZW1wbGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGluc2VydEFmdGVyTm9kZShyZWYpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSByZWY7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgYXBwZW5kSW50b1BhcnQocGFydCkge1xuICAgICAgICBwYXJ0Ll9pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHBhcnQuX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGFmdGVyIGByZWZgXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBpbnNlcnRBZnRlclBhcnQocmVmKSB7XG4gICAgICAgIHJlZi5faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICAgICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHByb3BhZ2F0ZSB0aGUgdGVtcGxhdGUgcHJvY2Vzc29yIGZyb20gdGhlIFRlbXBsYXRlUmVzdWx0XG4gICAgICAgICAgICAvLyBzbyB0aGF0IHdlIHVzZSBpdHMgc3ludGF4IGV4dGVuc2lvbiwgZXRjLiBUaGUgdGVtcGxhdGUgZmFjdG9yeSBjb21lc1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9wdGlvbnMgc28gdGhhdCBpdCBjYW4gY29udHJvbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gY2FjaGluZyBhbmQgcHJlcHJvY2Vzc2luZy5cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydC5lbmROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcihzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICByZW1vdmVOb2Rlcyh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlLCBzdGFydE5vZGUubmV4dFNpYmxpbmcsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxufVxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCAhPT0gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICAgIH1cbiAgICBfY3JlYXRlUGFydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2luZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0c1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbn1cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRocmlkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG50cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xufVxuY2F0Y2ggKF9lKSB7XG59XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudE5hbWUsIGV2ZW50Q29udGV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICAgICAgdGhpcy5fYm91bmRIYW5kbGVFdmVudCA9IChlKSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgICAgIG9sZExpc3RlbmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAobmV3TGlzdGVuZXIuY2FwdHVyZSAhPT0gb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09IG9sZExpc3RlbmVyLnBhc3NpdmUpO1xuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9IG51bGwgJiYgKG9sZExpc3RlbmVyID09IG51bGwgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuY2FsbCh0aGlzLmV2ZW50Q29udGV4dCB8fCB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobykgPT4gbyAmJlxuICAgIChldmVudE9wdGlvbnNTdXBwb3J0ZWQgP1xuICAgICAgICB7IGNhcHR1cmU6IG8uY2FwdHVyZSwgcGFzc2l2ZTogby5wYXNzaXZlLCBvbmNlOiBvLm9uY2UgfSA6XG4gICAgICAgIG8uY2FwdHVyZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IE5vZGVQYXJ0IH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBhIFRlbXBsYXRlUmVzdWx0IGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlXG4gKiAgICAgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChyZXN1bHQsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydChPYmplY3QuYXNzaWduKHsgdGVtcGxhdGVGYWN0b3J5IH0sIG9wdGlvbnMpKSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgIH1cbiAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgcGFydC5jb21taXQoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgbWFya2VyLCBUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdCkge1xuICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICAgICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwKCksXG4gICAgICAgICAgICBrZXlTdHJpbmc6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAgIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgICAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtZmFjdG9yeS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBpc0NFUG9seWZpbGwgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUGFydEFjdGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHByb2Nlc3Nvciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Nsb25lKCkge1xuICAgICAgICAvLyBXaGVuIHVzaW5nIHRoZSBDdXN0b20gRWxlbWVudHMgcG9seWZpbGwsIGNsb25lIHRoZSBub2RlLCByYXRoZXIgdGhhblxuICAgICAgICAvLyBpbXBvcnRpbmcgaXQsIHRvIGtlZXAgdGhlIGZyYWdtZW50IGluIHRoZSB0ZW1wbGF0ZSdzIGRvY3VtZW50LiBUaGlzXG4gICAgICAgIC8vIGxlYXZlcyB0aGUgZnJhZ21lbnQgaW5lcnQgc28gY3VzdG9tIGVsZW1lbnRzIHdvbid0IHVwZ3JhZGUgYW5kXG4gICAgICAgIC8vIHBvdGVudGlhbGx5IG1vZGlmeSB0aGVpciBjb250ZW50cyBieSBjcmVhdGluZyBhIHBvbHlmaWxsZWQgU2hhZG93Um9vdFxuICAgICAgICAvLyB3aGlsZSB3ZSB0cmF2ZXJzZSB0aGUgdHJlZS5cbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpc0NFUG9seWZpbGwgP1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIDpcbiAgICAgICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgX3ByZXBhcmVJbnN0YW5jZSA9IChmcmFnbWVudCkgPT4ge1xuICAgICAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgICAgICAgLy8gbnVsbFxuICAgICAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihmcmFnbWVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICAgICAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGggJiYgbm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIENvbnNlY3V0aXZlIFBhcnRzIG1heSBoYXZlIHRoZSBzYW1lIG5vZGUgaW5kZXgsIGluIHRoZSBjYXNlIG9mXG4gICAgICAgICAgICAgICAgLy8gbXVsdGlwbGUgYm91bmQgYXR0cmlidXRlcyBvbiBhbiBlbGVtZW50LiBTbyBlYWNoIGl0ZXJhdGlvbiB3ZSBlaXRoZXJcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIG5vZGVJbmRleCwgaWYgd2UgYXJlbid0IG9uIGEgbm9kZSB3aXRoIGEgcGFydCwgb3IgdGhlXG4gICAgICAgICAgICAgICAgLy8gcGFydEluZGV4IGlmIHdlIGFyZS4gQnkgbm90IGluY3JlbWVudGluZyB0aGUgbm9kZUluZGV4IHdoZW4gd2UgZmluZCBhXG4gICAgICAgICAgICAgICAgLy8gcGFydCwgd2UgYWxsb3cgZm9yIHRoZSBuZXh0IHBhcnQgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgLy8gbm9kZSBpZiBuZWNjZXNzYXNyeS5cbiAgICAgICAgICAgICAgICBpZiAoIWlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVJbmRleCA9PT0gcGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnByb2Nlc3Nvci5oYW5kbGVUZXh0RXhwcmVzc2lvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaCguLi50aGlzLnByb2Nlc3Nvci5oYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhub2RlLCBwYXJ0Lm5hbWUsIHBhcnQuc3RyaW5ncywgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmVwYXJlSW5zdGFuY2Uobm9kZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfcHJlcGFyZUluc3RhbmNlKGZyYWdtZW50KTtcbiAgICAgICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1pbnN0YW5jZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYm91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBUaGUgcmV0dXJuIHR5cGUgb2YgYGh0bWxgLCB3aGljaCBob2xkcyBhIFRlbXBsYXRlIGFuZCB0aGUgdmFsdWVzIGZyb21cbiAqIGludGVycG9sYXRlZCBleHByZXNzaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmdzLCB2YWx1ZXMsIHR5cGUsIHByb2Nlc3Nvcikge1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBodG1sID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIC8vIFRoaXMgcmVwbGFjZSgpIGNhbGwgZG9lcyB0d28gdGhpbmdzOlxuICAgICAgICAgICAgLy8gMSkgQXBwZW5kcyBhIHN1ZmZpeCB0byBhbGwgYm91bmQgYXR0cmlidXRlIG5hbWVzIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbFxuICAgICAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIHBhcnNpbmcgdGhhdCBJRTExIGFuZCBFZGdlIGRvLCBsaWtlIGZvciBzdHlsZSBhbmRcbiAgICAgICAgICAgIC8vIG1hbnkgU1ZHIGF0dHJpYnV0ZXMuIFRoZSBUZW1wbGF0ZSBjbGFzcyBhbHNvIGFwcGVuZHMgdGhlIHNhbWUgc3VmZml4XG4gICAgICAgICAgICAvLyB3aGVuIGxvb2tpbmcgdXAgYXR0cmlidXRlcyB0byBjcmVhdCBQYXJ0cy5cbiAgICAgICAgICAgIC8vIDIpIEFkZHMgYW4gdW5xdW90ZWQtYXR0cmlidXRlLXNhZmUgbWFya2VyIGZvciB0aGUgZmlyc3QgZXhwcmVzc2lvbiBpblxuICAgICAgICAgICAgLy8gYW4gYXR0cmlidXRlLiBTdWJzZXF1ZW50IGF0dHJpYnV0ZSBleHByZXNzaW9ucyB3aWxsIHVzZSBub2RlIG1hcmtlcnMsXG4gICAgICAgICAgICAvLyBhbmQgdGhpcyBpcyBzYWZlIHNpbmNlIGF0dHJpYnV0ZXMgd2l0aCBtdWx0aXBsZSBleHByZXNzaW9ucyBhcmVcbiAgICAgICAgICAgIC8vIGd1YXJhbnRlZWQgdG8gYmUgcXVvdGVkLlxuICAgICAgICAgICAgbGV0IGFkZGVkTWFya2VyID0gZmFsc2U7XG4gICAgICAgICAgICBodG1sICs9IHMucmVwbGFjZShsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCAoX21hdGNoLCB3aGl0ZXNwYWNlLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZGVkTWFya2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2hpdGVzcGFjZSArIG5hbWUgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArIHZhbHVlICsgbWFya2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFkZGVkTWFya2VyKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBub2RlTWFya2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sICsgdGhpcy5zdHJpbmdzW2VuZEluZGV4XTtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNbCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBnZXRIVE1MKCkge1xuICAgICAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtcmVzdWx0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlcywgYW5kXG4gKiBhdHRyaWJ1dGVzIHdpdGggbWFya3VwLWxpa2UgdGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCBub2Rlc1RvUmVtb3ZlID0gW107XG4gICAgICAgIGNvbnN0IF9wcmVwYXJlVGVtcGxhdGUgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgICAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgICAgICAgLy8gbnVsbFxuICAgICAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX1RFWFQgKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIFRoZSBhY3R1YWwgcHJldmlvdXMgbm9kZSwgYWNjb3VudGluZyBmb3IgcmVtb3ZhbHM6IGlmIGEgbm9kZSBpcyByZW1vdmVkXG4gICAgICAgICAgICAvLyBpdCB3aWxsIG5ldmVyIGJlIHRoZSBwcmV2aW91c05vZGUuXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgICAgICAgICAgLy8gVXNlZCB0byBzZXQgcHJldmlvdXNOb2RlIGF0IHRoZSB0b3Agb2YgdGhlIGxvb3AuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGU7XG4gICAgICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjdXJyZW50Tm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OYW1lZE5vZGVNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSByZXR1cm5lZCBpbiBkb2N1bWVudCBvcmRlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhc3N1bWUgYSBjb3JyZXNwb25kYW5jZSBiZXR3ZWVuIHBhcnQgaW5kZXggYW5kIGF0dHJpYnV0ZSBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXS52YWx1ZS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzZWN0aW9uIGxlYWRpbmcgdXAgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSByZXN1bHQuc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzdHJpbmdGb3JQYXJ0KVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbCBib3VuZCBhdHRyaWJ1dGVzIGhhdmUgaGFkIGEgc3VmZml4IGFkZGVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxpbmcuIFRvIGxvb2sgdXAgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB3ZSBhbHNvIG5lZWQgdG8gYWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN1ZmZpeC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgYm91bmRBdHRyaWJ1dGVTdWZmaXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleCwgbmFtZSwgc3RyaW5ncyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmVwYXJlVGVtcGxhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSBub2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVWYWx1ZS5pbmRleE9mKG1hcmtlcikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBub2RlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKChzdHJpbmdzW2ldID09PSAnJykgPyBjcmVhdGVNYXJrZXIoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nc1tpXSksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogaW5kZXgrKyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWFya2VyKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nc1tsYXN0SW5kZXhdKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVmFsdWUgPT09IG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgbmV3IG1hcmtlciBub2RlIHRvIGJlIHRoZSBzdGFydE5vZGUgb2YgdGhlIFBhcnQgaWYgYW55IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICogcHJldmlvdXNTaWJsaW5nIGlzIGJlaW5nIHJlbW92ZWQgKHRodXMgaXQncyBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBgcHJldmlvdXNOb2RlYClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAqIHByZXZpb3VzU2libGluZyBpcyBub3QgYSBUZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBXZSBzaG91bGQgYmUgYWJsZSB0byB1c2UgdGhlIHByZXZpb3VzTm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVyZSBhcyB0aGUgbWFya2VyIG5vZGUgYW5kIHJlZHVjZSB0aGUgbnVtYmVyIG9mIGV4dHJhIG5vZGVzIHdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gYSB0ZW1wbGF0ZS4gU2VlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckxhYnMvbGl0LWh0bWwvaXNzdWVzLzE0N1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8IHByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNOb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6IGluZGV4KysgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcgYWRkIGEgbWFya2VyIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIHRvIGNoZWNrIGlmIHRoZSBuZXh0IG5vZGUgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCBub2RlIHdpbGwgaW5kdWNlIGEgbmV3IG1hcmtlciBpZiBzby5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBwcmV2aW91c05vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLm5vZGVWYWx1ZS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogLTEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF9wcmVwYXJlVGVtcGxhdGUoZWxlbWVudCk7XG4gICAgICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBpc1RlbXBsYXRlUGFydEFjdGl2ZSA9IChwYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcbi8vIEFsbG93cyBgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylgIHRvIGJlIHJlbmFtZWQgZm9yIGFcbi8vIHNtYWxsIG1hbnVhbCBzaXplLXNhdmluZ3MuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4vKipcbiAqIFRoaXMgcmVnZXggZXh0cmFjdHMgdGhlIGF0dHJpYnV0ZSBuYW1lIHByZWNlZGluZyBhbiBhdHRyaWJ1dGUtcG9zaXRpb25cbiAqIGV4cHJlc3Npb24uIEl0IGRvZXMgdGhpcyBieSBtYXRjaGluZyB0aGUgc3ludGF4IGFsbG93ZWQgZm9yIGF0dHJpYnV0ZXNcbiAqIGFnYWluc3QgdGhlIHN0cmluZyBsaXRlcmFsIGRpcmVjdGx5IHByZWNlZGluZyB0aGUgZXhwcmVzc2lvbiwgYXNzdW1pbmcgdGhhdFxuICogdGhlIGV4cHJlc3Npb24gaXMgaW4gYW4gYXR0cmlidXRlLXZhbHVlIHBvc2l0aW9uLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0wXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVyc1xuICpcbiAqIFwiIFxceDA5XFx4MGFcXHgwY1xceDBkXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9pbmZyYXN0cnVjdHVyZS5odG1sI3NwYWNlLWNoYXJhY3RlclxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID0gLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSwgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7IHJlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7IG5vQ2hhbmdlIH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydCB9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7IHBhcnRzLCByZW5kZXIgfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHsgdGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFNWR1RlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ3N2ZycsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXAiLCIvLyBSZWZsZWN0LmNvbnN0cnVjdG9yIHBvbHlmaWxsIGZvciBJRTExIHN1cHBvcnQgb2Ygc3RhbmRhcmQgd2ViIGNvbXBvbmVudHNcbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKCEhd2luZG93LlJlZmxlY3QpIHJldHVybjtcblxuICAgIHdpbmRvdy5SZWZsZWN0ID0ge1xuICAgICAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uICh0YXJnZXQsIGFyZ3MsIG5ld1RhcmdldCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSAobmV3IFdlYWtNYXAoKSkuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaGFuZGxlci5jb25zdHJ1Y3QoaGFuZGxlci50YXJnZXQsIGFyZ3MsIG5ld1RhcmdldCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0YXJnZXQgbXVzdCBiZSBhIGZ1bmN0aW9uOiBcIiArIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdUYXJnZXQgPT09IHVuZGVmaW5lZCB8fCBuZXdUYXJnZXQgPT09IHRhcmdldCkgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkodGFyZ2V0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld1RhcmdldCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwibmV3IHRhcmdldCBtdXN0IGJlIGEgZnVuY3Rpb246IFwiICsgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHZhciBwcm90byA9IG5ld1RhcmdldC5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gKE9iamVjdChwcm90bykgPT09IHByb3RvKSA/IE9iamVjdC5jcmVhdGUocHJvdG8pIDoge307XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChyZXN1bHQpID09PSByZXN1bHQgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpOyJdfQ==
