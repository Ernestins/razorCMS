(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-backdrop {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tz-index: 1002;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: black;\n\t\t\t\t\topacity: 0.2;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tz-index: 1003;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbox-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\theight: 80%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-flow: column;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content .overlay-top-menu {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 50px;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content .overlay-top-menu ul {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-flow: row;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tline-height: 50px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tlist-style-type: none;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-top-menu-item {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tline-height: 50px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tflex: 1 1;\n\t\t\t\t\tbackground-color: #296cb2;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-top-menu-item:hover, #app-dashboard .overlay-top-menu-item[active] { opacity: 0.9; }\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content .router-output {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\toverflow: auto;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .nav-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: top;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tfill: white;\n\t\t\t\t\tpadding: 5px;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tline-height: 50px;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .nav-text {\n\t\t\t\t\tcursor: default;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-top-menu-item-close {\n\t\t\t\t\tflex: 0 1;\n\t\t\t\t\tpadding: 0 10px;\n\t\t\t\t\tbackground-color: #d93a3a;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .nav-icon-close {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tfill: white;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\n\t\t\t\t@media(max-width: 950px) {\n\t\t\t\t\t#app-dashboard .overlay-container .overlay-content {\n\t\t\t\t\t\twidth: 95%;\n\t\t\t\t\t\theight: 95%;\n\t\t\t\t\t}\n\n\t\t\t\t\t#app-dashboard .no-mobile { display: none; }\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="app-dashboard">\n\t\t\t\t<div class="overlay-backdrop"></div>\n\t\t\t\t<div id="container" class="overlay-container" @click="', '">\n\t\t\t\t\t<div class="overlay-content">\n\t\t\t\t\t\t<div class="overlay-top-menu">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Page</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Pages</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Content</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Extension</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">User</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Setting</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item-close" @click="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon-close">', '</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="router-output">\n\t\t\t\t\t\t\t<cwc-resource-router .route="', '" .routes="', '" default="page" not-found="404" @routeloaded="', '"></cwc-resource-router>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        '], ['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-backdrop {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tz-index: 1002;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: black;\n\t\t\t\t\topacity: 0.2;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tz-index: 1003;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbox-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\theight: 80%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-flow: column;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content .overlay-top-menu {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 50px;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content .overlay-top-menu ul {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-flow: row;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tline-height: 50px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tlist-style-type: none;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-top-menu-item {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tline-height: 50px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tflex: 1 1;\n\t\t\t\t\tbackground-color: #296cb2;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-top-menu-item:hover, #app-dashboard .overlay-top-menu-item[active] { opacity: 0.9; }\n\n\t\t\t\t#app-dashboard .overlay-container .overlay-content .router-output {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\toverflow: auto;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .nav-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: top;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tfill: white;\n\t\t\t\t\tpadding: 5px;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tline-height: 50px;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .nav-text {\n\t\t\t\t\tcursor: default;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .overlay-top-menu-item-close {\n\t\t\t\t\tflex: 0 1;\n\t\t\t\t\tpadding: 0 10px;\n\t\t\t\t\tbackground-color: #d93a3a;\n\t\t\t\t}\n\n\t\t\t\t#app-dashboard .nav-icon-close {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tfill: white;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\n\t\t\t\t@media(max-width: 950px) {\n\t\t\t\t\t#app-dashboard .overlay-container .overlay-content {\n\t\t\t\t\t\twidth: 95%;\n\t\t\t\t\t\theight: 95%;\n\t\t\t\t\t}\n\n\t\t\t\t\t#app-dashboard .no-mobile { display: none; }\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="app-dashboard">\n\t\t\t\t<div class="overlay-backdrop"></div>\n\t\t\t\t<div id="container" class="overlay-container" @click="', '">\n\t\t\t\t\t<div class="overlay-content">\n\t\t\t\t\t\t<div class="overlay-top-menu">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Page</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Pages</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Content</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Extension</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">User</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item" @click="', '" ?active="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon">', '</span>\n\t\t\t\t\t\t\t\t\t<span class="nav-text no-mobile">Setting</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="overlay-top-menu-item-close" @click="', '">\n\t\t\t\t\t\t\t\t\t<span class="nav-icon-close">', '</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="router-output">\n\t\t\t\t\t\t\t<cwc-resource-router .route="', '" .routes="', '" default="page" not-found="404" @routeloaded="', '"></cwc-resource-router>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        ']);

var _index = require('../../node_modules/custom-web-component/index.js');

var _libResourceStore = require('../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

var _cwcIconMaterial = require('../../node_modules/custom-web-components/src/icon/cwc-icon-material.js');

var _cwcIconMaterial2 = _interopRequireDefault(_cwcIconMaterial);

require('../../node_modules/custom-web-components/src/resource/cwc-resource-router.js');

require('./page/app-page-current.js');

require('./page/app-page-index.js');

require('./content/app-content-index.js');

require('./extension/app-extension-index.js');

require('./user/app-user-index.js');

require('./setting/app-setting-index.js');

require('./not/app-not-found.js');

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
var AppDashboard = function (_CustomHTMLElement) {
	_inherits(AppDashboard, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppDashboard() {
		_classCallCheck(this, AppDashboard);

		var _this = _possibleConstructorReturn(this, (AppDashboard.__proto__ || Object.getPrototypeOf(AppDashboard)).call(this));

		_this._route;
		_this._routes = [{ component: 'app-page-current', path: 'page', label: 'Page' }, { component: 'app-page-index', path: 'pages', label: 'Pages' }, { component: 'app-content-index', path: 'content', label: 'Content' }, { component: 'app-extension-index', path: 'extension', label: 'Extensions' }, { component: 'app-user-index', path: 'user', label: 'Users' }, { component: 'app-setting-index', path: 'setting', label: 'Settings' }, { component: 'app-not-found', path: '404', label: '404' }];
		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppDashboard, [{
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
			this.style.display = 'block';
			this.style.zIndex = 1001;

			// show it
			setTimeout(function () {
				return _this2.style.opacity = 1;
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
			if (!!ev && ev.target && ev.target.parentNode && ev.target.parentNode.id !== 'app-dashboard') return;

			this.dispatchEvent(new CustomEvent('hide'));

			// add it
			this.style.opacity = 0;

			// show it
			setTimeout(function () {
				_this3.style.display = 'none';
				_this3.style.zIndex = -1;
			}, 250);
		}
	}, {
		key: '_navigate',
		value: function _navigate(path, ev) {
			this._route = path;
			this.updateTemplate();
		}
	}, {
		key: '_routeLoaded',
		value: function _routeLoaded(ev) {
			this._route = ev.target.route;
			this.updateTemplate();
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this.hide.bind(this), this._navigate.bind(this, 'page'), this._route === 'page', _cwcIconMaterial2.default.assignment, this._navigate.bind(this, 'pages'), this._route === 'pages', _cwcIconMaterial2.default.description, this._navigate.bind(this, 'content'), this._route === 'content', _cwcIconMaterial2.default.receipt, this._navigate.bind(this, 'extensions'), this._route === 'extensions', _cwcIconMaterial2.default.extension, this._navigate.bind(this, 'users'), this._route === 'users', _cwcIconMaterial2.default.supervisorAccount, this._navigate.bind(this, 'settings'), this._route === 'settings', _cwcIconMaterial2.default.settings, this.hide.bind(this, null), _cwcIconMaterial2.default.close, this._route, this._routes, this._routeLoaded.bind(this));
		}
	}]);

	return AppDashboard;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-dashboard', AppDashboard);

},{"../../node_modules/custom-web-component/index.js":21,"../../node_modules/custom-web-components/src/icon/cwc-icon-material.js":24,"../../node_modules/custom-web-components/src/resource/cwc-resource-router.js":25,"../lib/resource/lib-resource-store.js":19,"./content/app-content-index.js":4,"./extension/app-extension-index.js":5,"./not/app-not-found.js":6,"./page/app-page-current.js":7,"./page/app-page-index.js":8,"./setting/app-setting-index.js":9,"./user/app-user-index.js":10}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n        \t\t', ' { margin: 0; padding: 5px; position: fixed; top: 3px; left: 3px; z-index: 100; background-color: #fff; border: 1px solid #eee; box-shadow: 0px 0px 12px -2px #444; transform-origin: 12px 12px; -webkit-transition: transform 0.5s ease-in-out; -moz-transition: transform 0.5s ease-in-out; -ms-transition: transform 0.5s ease-in-out; transition: transform 0.5s ease-in-out; }\n\t\t\t\t#app-panel { min-width: 200px; }\n\t\t\t\t#app-panel .dashboard-controls .rotate-icon { cursor: pointer; position: absolute; top: 5px; left: 5px; width: 15px; height: 15px; }\n\t\t\t\t#app-panel .dashboard-controls .details { padding-left: 20px; float: right; text-align: right; }\n\t\t\t\t#app-panel .dashboard-controls .details .name { font-size: 16px; }\n\t\t\t\t#app-panel .dashboard-controls .details .name .profile-icon { display: inline-block; width: 30px; height: 30px; vertical-align: middle; cursor: pointer; }\n\t\t\t\t#app-panel .dashboard-controls .details .last-logged-in .logged-in-date { font-size: 14px; }\n\t\t\t\t#app-panel .dashboard-controls .details .last-logged-in .history-icon { display: inline-block; height: 16px; width: 16px; vertical-align: text-top; }\n\t\t\t\t#app-panel .editor-controls { float: left; width: 100%; }\n\t\t\t\t#app-panel .editor-controls .setting-icon { display: inline-block; width: 32px; height: 32px; cursor: pointer; vertical-align: middle; }\n\t\t\t\t#app-panel .editor-controls .setting-button { vertical-align: middle; float: right; width: auto; margin-left: 7px; }\n\t\t\t\t#app-panel .editor-controls .setting-edit { background-color: green; color: white; }\n\t\t\t\t#app-panel .editor-controls .setting-add { background-color: #0b56b4; color: white; }\n\t\t\t\t#app-panel .editor-controls .setting-copy { background-color: #0b56b4; color: white; }\n\t\t\t</style>\n\n\t\t\t<div id="app-panel">\n\t\t\t\t<div class="dashboard-controls">\n\t\t\t\t\t<span class="rotate-icon" @click="', '">', '</span>\n\t\t\t\t\t<div class="details">\n\t\t\t\t\t\t<div class="name">\n\t\t\t\t\t\t\t<span>', '</span>\n\t\t\t\t\t\t\t<span class="profile-icon" @click="', '">', '</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class="last-logged-in">\n\t\t\t\t\t\t\t<span class="logged-in-date">', '</span>\n\t\t\t\t\t\t\t<span class="history-icon">', '</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="editor-controls" bind-show="checkAccessLevel(private.user.access_level, 5)">\n\t\t\t\t\t<span class="setting-icon" @click="', '">', '</span>\n\t\t\t\t\t<lib-control-button class="setting-button setting-copy" @click="', '">Copy</lib-control-button>\n\t\t\t\t\t<lib-control-button class="setting-button setting-add" @click="', '">Add</lib-control-button>\n\t\t\t\t\t<lib-control-button class="setting-button setting-edit" @click="', '">Edit</lib-control-button>\n\t\t\t\t</div>\n\t\t\t</div>\n        '], ['\n            <style>\n        \t\t', ' { margin: 0; padding: 5px; position: fixed; top: 3px; left: 3px; z-index: 100; background-color: #fff; border: 1px solid #eee; box-shadow: 0px 0px 12px -2px #444; transform-origin: 12px 12px; -webkit-transition: transform 0.5s ease-in-out; -moz-transition: transform 0.5s ease-in-out; -ms-transition: transform 0.5s ease-in-out; transition: transform 0.5s ease-in-out; }\n\t\t\t\t#app-panel { min-width: 200px; }\n\t\t\t\t#app-panel .dashboard-controls .rotate-icon { cursor: pointer; position: absolute; top: 5px; left: 5px; width: 15px; height: 15px; }\n\t\t\t\t#app-panel .dashboard-controls .details { padding-left: 20px; float: right; text-align: right; }\n\t\t\t\t#app-panel .dashboard-controls .details .name { font-size: 16px; }\n\t\t\t\t#app-panel .dashboard-controls .details .name .profile-icon { display: inline-block; width: 30px; height: 30px; vertical-align: middle; cursor: pointer; }\n\t\t\t\t#app-panel .dashboard-controls .details .last-logged-in .logged-in-date { font-size: 14px; }\n\t\t\t\t#app-panel .dashboard-controls .details .last-logged-in .history-icon { display: inline-block; height: 16px; width: 16px; vertical-align: text-top; }\n\t\t\t\t#app-panel .editor-controls { float: left; width: 100%; }\n\t\t\t\t#app-panel .editor-controls .setting-icon { display: inline-block; width: 32px; height: 32px; cursor: pointer; vertical-align: middle; }\n\t\t\t\t#app-panel .editor-controls .setting-button { vertical-align: middle; float: right; width: auto; margin-left: 7px; }\n\t\t\t\t#app-panel .editor-controls .setting-edit { background-color: green; color: white; }\n\t\t\t\t#app-panel .editor-controls .setting-add { background-color: #0b56b4; color: white; }\n\t\t\t\t#app-panel .editor-controls .setting-copy { background-color: #0b56b4; color: white; }\n\t\t\t</style>\n\n\t\t\t<div id="app-panel">\n\t\t\t\t<div class="dashboard-controls">\n\t\t\t\t\t<span class="rotate-icon" @click="', '">', '</span>\n\t\t\t\t\t<div class="details">\n\t\t\t\t\t\t<div class="name">\n\t\t\t\t\t\t\t<span>', '</span>\n\t\t\t\t\t\t\t<span class="profile-icon" @click="', '">', '</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class="last-logged-in">\n\t\t\t\t\t\t\t<span class="logged-in-date">', '</span>\n\t\t\t\t\t\t\t<span class="history-icon">', '</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="editor-controls" bind-show="checkAccessLevel(private.user.access_level, 5)">\n\t\t\t\t\t<span class="setting-icon" @click="', '">', '</span>\n\t\t\t\t\t<lib-control-button class="setting-button setting-copy" @click="', '">Copy</lib-control-button>\n\t\t\t\t\t<lib-control-button class="setting-button setting-add" @click="', '">Add</lib-control-button>\n\t\t\t\t\t<lib-control-button class="setting-button setting-edit" @click="', '">Edit</lib-control-button>\n\t\t\t\t</div>\n\t\t\t</div>\n        ']);

var _index = require('../../node_modules/custom-web-component/index.js');

var _libResourceStore = require('../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

var _cwcIconMaterial = require('../../node_modules/custom-web-components/src/icon/cwc-icon-material.js');

var _cwcIconMaterial2 = _interopRequireDefault(_cwcIconMaterial);

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
var AppPanel = function (_CustomHTMLElement) {
	_inherits(AppPanel, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppPanel() {
		_classCallCheck(this, AppPanel);

		var _this = _possibleConstructorReturn(this, (AppPanel.__proto__ || Object.getPrototypeOf(AppPanel)).call(this));

		_this.route;
		_this.routes = [];

		_this._store = new _libResourceStore2.default();
		_this._user = _this._store.getItem('user');
		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppPanel, [{
		key: 'connected',
		value: function connected() {
			this.style.transform = this._store.getItem('panelRotate') ? 'rotate(180deg)' : '';
		}
	}, {
		key: '_rotatePanel',
		value: function _rotatePanel(ev) {
			this._store.setItem('panelRotate', !this.style.transform ? true : false);
			this.style.transform = !this.style.transform ? 'rotate(180deg)' : '';
		}
	}, {
		key: '_navigate',
		value: function _navigate(path, ev) {
			this.route = path;
			this.dispatchEvent(new CustomEvent('routechange', { detail: path }));
		}
	}, {
		key: '_showDashboard',
		value: function _showDashboard() {
			this.dispatchEvent(new CustomEvent('showdashboard'));
		}
	}, {
		key: '_formatDate',
		value: function _formatDate(timestamp) {
			return new Date(timestamp).toLocaleDateString(navigator.language, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
		}
	}, {
		key: '_pageEdit',
		value: function _pageEdit(ev) {
			console.log('edit');
		}
	}, {
		key: '_pageAdd',
		value: function _pageAdd(ev) {
			console.log('add');
		}
	}, {
		key: '_pageCopy',
		value: function _pageCopy(ev) {
			console.log('copy');
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this._rotatePanel.bind(this), _cwcIconMaterial2.default.cached, this._user.name, this._navigate.bind(this, 'profile'), _cwcIconMaterial2.default.face, this._formatDate(this._user.last_logged_in), _cwcIconMaterial2.default.history, this._showDashboard.bind(this), _cwcIconMaterial2.default.apps, this._pageCopy.bind(this), this._pageAdd.bind(this), this._pageEdit.bind(this));
		}
	}]);

	return AppPanel;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-panel', AppPanel);

},{"../../node_modules/custom-web-component/index.js":21,"../../node_modules/custom-web-components/src/icon/cwc-icon-material.js":24,"../lib/resource/lib-resource-store.js":19}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n\t\t\t\t#app-root .login-box { padding: 20px; background-color: white; width: 200px; }\n\t\t\t\t#app-root .login-box h2 { margin: 0px; font-weight: normal; }\n\t\t\t\t#app-root .login-box .login-inputs { padding: 5px 0px; }\n\t\t\t\t#app-root .login-box .login-inputs .input { display: block; padding: 5px 0px; width: 100%; }\n\t\t\t\t#app-root .login-box .login-buttons .cancel { background-color: red; color: white; }\n\t\t\t\t#app-root .login-box .login-buttons .login { background-color: green; color: white; float: right; }\n            </style>\n\n\t\t\t<div id="app-root" @message="', '">\n\t\t\t\t', '\n\n\t\t\t\t<lib-overlay id="login-overlay">\n\t\t\t\t\t<div class="login-box">\n\t\t\t\t\t\t<h2>Razilo Login</h2>\n\t\t\t\t\t\t<div class="login-inputs">\n\t\t\t\t\t\t\t<lib-control-input id="login-username" class="input" label="Email" type="text" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t\t<lib-control-input id="login-password" class="input" label="Password" type="password" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="login-buttons">\n\t\t\t\t\t\t\t<lib-control-button class="cancel" @click="', '">Cancel</lib-control-button>\n\t\t\t\t\t\t\t<lib-control-button class="login" @click="', '">Log In</lib-control-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</lib-overlay>\n\n\t\t\t\t<lib-overlay-notify id="notify-overlay"></lib-overlay-notify>\n\t\t\t</div>\n        '], ['\n            <style>\n\t\t\t\t#app-root .login-box { padding: 20px; background-color: white; width: 200px; }\n\t\t\t\t#app-root .login-box h2 { margin: 0px; font-weight: normal; }\n\t\t\t\t#app-root .login-box .login-inputs { padding: 5px 0px; }\n\t\t\t\t#app-root .login-box .login-inputs .input { display: block; padding: 5px 0px; width: 100%; }\n\t\t\t\t#app-root .login-box .login-buttons .cancel { background-color: red; color: white; }\n\t\t\t\t#app-root .login-box .login-buttons .login { background-color: green; color: white; float: right; }\n            </style>\n\n\t\t\t<div id="app-root" @message="', '">\n\t\t\t\t', '\n\n\t\t\t\t<lib-overlay id="login-overlay">\n\t\t\t\t\t<div class="login-box">\n\t\t\t\t\t\t<h2>Razilo Login</h2>\n\t\t\t\t\t\t<div class="login-inputs">\n\t\t\t\t\t\t\t<lib-control-input id="login-username" class="input" label="Email" type="text" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t\t<lib-control-input id="login-password" class="input" label="Password" type="password" @keyup="', '"></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="login-buttons">\n\t\t\t\t\t\t\t<lib-control-button class="cancel" @click="', '">Cancel</lib-control-button>\n\t\t\t\t\t\t\t<lib-control-button class="login" @click="', '">Log In</lib-control-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</lib-overlay>\n\n\t\t\t\t<lib-overlay-notify id="notify-overlay"></lib-overlay-notify>\n\t\t\t</div>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\t<app-panel @routechange="', '" @showdashboard="', '"></app-panel>\n\t\t\t\t\t<app-dashboard id="dashboard" .route="', '"></app-dashboard>\n\t\t\t\t'], ['\n\t\t\t\t\t<app-panel @routechange="', '" @showdashboard="', '"></app-panel>\n\t\t\t\t\t<app-dashboard id="dashboard" .route="', '"></app-dashboard>\n\t\t\t\t']);

var _index = require('../../node_modules/custom-web-component/index.js');

var _libResourceRequest = require('../lib/resource/lib-resource-request.js');

var _libResourceRequest2 = _interopRequireDefault(_libResourceRequest);

var _libResourceStore = require('../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

require('../lib/overlay/lib-overlay.js');

require('../lib/overlay/lib-overlay-notify.js');

require('../lib/control/lib-control-input.js');

require('../lib/control/lib-control-button.js');

require('./app-panel.js');

require('./app-dashboard.js');

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
		_this._request.setBaseUrl(_this.getAttribute('api'));

		_this._store = new _libResourceStore2.default();
		_this._store.setItem('api', _this.getAttribute('api'));
		_this._store.setItem('currentPath', _this.getAttribute('current-path'));
		_this._store.setItem('currentPage', _this.getAttribute('current-page'));

		_this._user;

		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppRoot, [{
		key: 'connected',
		value: function connected() {
			var _this2 = this;

			if (window.location.pathname == '/login') setTimeout(function () {
				return _this2.dom().querySelector('#login-overlay').show();
			}, 1000);else this.authenticate();
		}
	}, {
		key: 'login',
		value: function login(ev) {
			var _this3 = this;

			if (ev.type === 'keyup' && ev.detail.keyCode !== 13) return;

			this._request.post('login', { username: this.dom().querySelector('#login-username').value, password: this.dom().querySelector('#login-password').value }).then(function (response) {
				_this3._user = response.data;
				_this3._store.setItem('user', response.data);
				location.href = location.href.replace('/login', '');
			}).catch(function (error) {
				_this3.dom().querySelector('#login-username').value = '';
				_this3.dom().querySelector('#login-password').value = '';
				_this3.dom().querySelector('#notify-overlay').show('error', error.data.message, 'reportProblem');
			});
		}
	}, {
		key: 'logout',
		value: function logout() {
			this._user = undefined;
			this._store.deleteItem('user');
			this._request.deleteToken();
		}
	}, {
		key: 'authenticate',
		value: function authenticate() {
			var _this4 = this;

			this._request.get('ping').then(function (response) {
				_this4._user = _this4._store.getItem('user');
				_this4.updateTemplate();
			}).catch(function (error) {
				_this4.logout();
			});
		}
	}, {
		key: '_navigate',
		value: function _navigate(ev) {
			this._route = ev.target.route;
			this.updateTemplate();
		}
	}, {
		key: '_showDashboard',
		value: function _showDashboard(ev) {
			this.dom().querySelector('#dashboard').show();
		}

		/**
   * @private @name _message
   * @description show a notification message that self clears
      * @param {Event} ev The event that kicked the function
   */

	}, {
		key: '_message',
		value: function _message(ev) {
			console.log(ev);
			this.dom().querySelector('#notify-overlay').show(ev.detail.type, ev.detail.text, ev.detail.icon);
		}
	}, {
		key: 'loginCancel',
		value: function loginCancel(ev) {
			this.dom().querySelector('#login-overlay').hide();
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this._message.bind(this), this._user ? (0, _index.html)(_templateObject2, this._navigate.bind(this), this._showDashboard.bind(this), this._route) : '', this.login.bind(this), this.login.bind(this), this.loginCancel.bind(this), this.login.bind(this));
		}
	}]);

	return AppRoot;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-root', AppRoot);

},{"../../node_modules/custom-web-component/index.js":21,"../lib/control/lib-control-button.js":11,"../lib/control/lib-control-input.js":13,"../lib/overlay/lib-overlay-notify.js":16,"../lib/overlay/lib-overlay.js":17,"../lib/resource/lib-resource-request.js":18,"../lib/resource/lib-resource-store.js":19,"./app-dashboard.js":1,"./app-panel.js":2}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n            </style>\n\n\t\t\t<div id="app-content-index">\n\t\t\t\t<p>Content</p>\n\t\t\t</div>\n        '], ['\n            <style>\n            </style>\n\n\t\t\t<div id="app-content-index">\n\t\t\t\t<p>Content</p>\n\t\t\t</div>\n        ']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libResourceStore = require('../../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

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
var AppContentIndex = function (_CustomHTMLElement) {
	_inherits(AppContentIndex, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppContentIndex() {
		_classCallCheck(this, AppContentIndex);

		return _possibleConstructorReturn(this, (AppContentIndex.__proto__ || Object.getPrototypeOf(AppContentIndex)).call(this));
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppContentIndex, [{
		key: 'connected',
		value: function connected() {}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject);
		}
	}]);

	return AppContentIndex;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-content-index', AppContentIndex);

},{"../../../node_modules/custom-web-component/index.js":21,"../../lib/resource/lib-resource-store.js":19}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n            </style>\n\n\t\t\t<div id="app-extension-index">\n\t\t\t\t<p>Extension</p>\n\t\t\t</div>\n        '], ['\n            <style>\n            </style>\n\n\t\t\t<div id="app-extension-index">\n\t\t\t\t<p>Extension</p>\n\t\t\t</div>\n        ']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libResourceStore = require('../../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

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
var AppExtensionIndex = function (_CustomHTMLElement) {
	_inherits(AppExtensionIndex, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppExtensionIndex() {
		_classCallCheck(this, AppExtensionIndex);

		return _possibleConstructorReturn(this, (AppExtensionIndex.__proto__ || Object.getPrototypeOf(AppExtensionIndex)).call(this));
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppExtensionIndex, [{
		key: 'connected',
		value: function connected() {}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject);
		}
	}]);

	return AppExtensionIndex;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-extension-index', AppExtensionIndex);

},{"../../../node_modules/custom-web-component/index.js":21,"../../lib/resource/lib-resource-store.js":19}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n\t\t\t\t#app-not-found {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t#app-not-found h3 {\n\t\t\t\t\tfont-size: 30px;\n\t\t\t\t}\n\n\t\t\t\t#app-not-found p {\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\n\t\t\t\t#app-not-found .icon-404 {\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\theight: 300px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tfill: #ba4241;\n\t\t\t\t}\n            </style>\n\n\t\t\t<div id="app-not-found">\n\t\t\t\t<h3>404</h3>\n\t\t\t\t<p>Ohh no, nothing to see here...</p>\n\t\t\t\t<span class="icon-404">', '</span>\n\t\t\t</div>\n        '], ['\n            <style>\n\t\t\t\t#app-not-found {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t#app-not-found h3 {\n\t\t\t\t\tfont-size: 30px;\n\t\t\t\t}\n\n\t\t\t\t#app-not-found p {\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\n\t\t\t\t#app-not-found .icon-404 {\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\theight: 300px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tfill: #ba4241;\n\t\t\t\t}\n            </style>\n\n\t\t\t<div id="app-not-found">\n\t\t\t\t<h3>404</h3>\n\t\t\t\t<p>Ohh no, nothing to see here...</p>\n\t\t\t\t<span class="icon-404">', '</span>\n\t\t\t</div>\n        ']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libResourceStore = require('../../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

var _cwcIconMaterial = require('../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js');

var _cwcIconMaterial2 = _interopRequireDefault(_cwcIconMaterial);

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
var AppNotFound = function (_CustomHTMLElement) {
	_inherits(AppNotFound, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppNotFound() {
		_classCallCheck(this, AppNotFound);

		return _possibleConstructorReturn(this, (AppNotFound.__proto__ || Object.getPrototypeOf(AppNotFound)).call(this));
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppNotFound, [{
		key: 'connected',
		value: function connected() {}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, _cwcIconMaterial2.default.report);
		}
	}]);

	return AppNotFound;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-not-found', AppNotFound);

},{"../../../node_modules/custom-web-component/index.js":21,"../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js":24,"../../lib/resource/lib-resource-store.js":19}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' { display: block; width: 100%; }\n\t\t\t\t#app-page-current { display: block; width: 100%; }\n\t\t\t\t#app-page-current .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }\n\t\t\t\t#app-page-current .page-box .page-box-row { display: flex; flex-flow: row wrap; }\n\t\t\t\t#app-page-current .page-box .page-box-col { display: block; flex: 1 1 350px; padding: 10px; box-sizing: border-box; }\n\t\t\t\t#app-page-current .page-box .page-title { font-size: 30px; margin: 0px; padding: 0px; }\n\t\t\t\t#app-page-current .page-box .page-description { height: 150px; }\n\t\t\t\t#app-page-current .page-box .page-save { background-color: green; color: white; float: right; padding: 6px 16px; }\n\t\t\t</style>\n\n\t\t\t<div id="app-page-current">\n\t\t\t\t<div class="page-box">\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<h1 class="page-title">Current Page Detail</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-select class="page-input page-access-level" label="Access Level" @change="', '" .value="', '">\n\t\t\t\t\t\t\t\t<option value="0">Public</option>\n\t\t\t\t\t\t\t\t<option value="1">User Level 1</option>\n\t\t\t\t\t\t\t\t<option value="2">User Level 2</option>\n\t\t\t\t\t\t\t\t<option value="3">User Level 3</option>\n\t\t\t\t\t\t\t\t<option value="4">User Level 4</option>\n\t\t\t\t\t\t\t\t<option value="5">User Level 5</option>\n\t\t\t\t\t\t\t</lib-control-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-checkbox class="page-input page-active" label="Active" checked-message="Page can be seen" unchecked-message="Page is not visible" @change="', '" .value="', '"></lib-control-checkbox>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-name" type="text" label="Name (used in menus)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-title" type="text" label="Title (used by search engines)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-link" type="text" label="Link (to access page from browser)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-keywords" type="text" label="Keywords (used by search engines, comma seperated)" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-description" type="textarea" label="Description (used by search engines)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-theme" type="textarea" label="Theme (used by this page only)" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-button class="page-control page-save" @click="', '">Save</lib-control-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        '], ['\n\t\t\t<style>\n\t\t\t\t', ' { display: block; width: 100%; }\n\t\t\t\t#app-page-current { display: block; width: 100%; }\n\t\t\t\t#app-page-current .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }\n\t\t\t\t#app-page-current .page-box .page-box-row { display: flex; flex-flow: row wrap; }\n\t\t\t\t#app-page-current .page-box .page-box-col { display: block; flex: 1 1 350px; padding: 10px; box-sizing: border-box; }\n\t\t\t\t#app-page-current .page-box .page-title { font-size: 30px; margin: 0px; padding: 0px; }\n\t\t\t\t#app-page-current .page-box .page-description { height: 150px; }\n\t\t\t\t#app-page-current .page-box .page-save { background-color: green; color: white; float: right; padding: 6px 16px; }\n\t\t\t</style>\n\n\t\t\t<div id="app-page-current">\n\t\t\t\t<div class="page-box">\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<h1 class="page-title">Current Page Detail</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-select class="page-input page-access-level" label="Access Level" @change="', '" .value="', '">\n\t\t\t\t\t\t\t\t<option value="0">Public</option>\n\t\t\t\t\t\t\t\t<option value="1">User Level 1</option>\n\t\t\t\t\t\t\t\t<option value="2">User Level 2</option>\n\t\t\t\t\t\t\t\t<option value="3">User Level 3</option>\n\t\t\t\t\t\t\t\t<option value="4">User Level 4</option>\n\t\t\t\t\t\t\t\t<option value="5">User Level 5</option>\n\t\t\t\t\t\t\t</lib-control-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-checkbox class="page-input page-active" label="Active" checked-message="Page can be seen" unchecked-message="Page is not visible" @change="', '" .value="', '"></lib-control-checkbox>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-name" type="text" label="Name (used in menus)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-title" type="text" label="Title (used by search engines)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-link" type="text" label="Link (to access page from browser)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-keywords" type="text" label="Keywords (used by search engines, comma seperated)" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-description" type="textarea" label="Description (used by search engines)" invalid-message="Cannot be empty" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-input class="page-input page-theme" type="textarea" label="Theme (used by this page only)" @input="', '" .value="', '" validate-on-load required></lib-control-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="page-box-row">\n\t\t\t\t\t\t<div class="page-box-col">\n\t\t\t\t\t\t\t<lib-control-button class="page-control page-save" @click="', '">Save</lib-control-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        ']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libResourceRequest = require('../../lib/resource/lib-resource-request.js');

var _libResourceRequest2 = _interopRequireDefault(_libResourceRequest);

var _libResourceStore = require('../../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

require('../../lib/control/lib-control-checkbox.js');

require('../../lib/control/lib-control-input.js');

require('../../lib/control/lib-control-select.js');

require('../../lib/control/lib-control-button.js');

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
var AppPageCurrent = function (_CustomHTMLElement) {
	_inherits(AppPageCurrent, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppPageCurrent() {
		_classCallCheck(this, AppPageCurrent);

		var _this = _possibleConstructorReturn(this, (AppPageCurrent.__proto__ || Object.getPrototypeOf(AppPageCurrent)).call(this));

		_this._page = {};

		_this._store = new _libResourceStore2.default();
		_this._request = new _libResourceRequest2.default();
		_this._request.setBaseUrl(_this._store.getItem('api'));
		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppPageCurrent, [{
		key: 'connected',
		value: function connected() {
			this.getPage();
		}
	}, {
		key: 'getPage',
		value: function getPage() {
			var _this2 = this;

			this._request.get('page', this._store.getItem('currentPage')).then(function (res) {
				_this2._page = res.data.data;
				_this2.updateTemplate();
			}).catch(function (error) {
				_this2.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
			});
		}
	}, {
		key: 'updateObject',
		value: function updateObject(name, key, ev) {
			this[name][key] = typeof ev.target.value !== 'boolean' ? ev.target.value : ev.target.value ? 1 : 0;
			this.updateTemplate();
		}
	}, {
		key: 'saveChanges',
		value: function saveChanges(ev) {
			var _this3 = this;

			this._request.patch('page/' + this._store.getItem('currentPage'), this._page).then(function (res) {
				_this3._page = res.data.data;
				_this3.updateTemplate();
				_this3.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'Page details updated', icon: 'check' } }));
			}).catch(function (error) {
				_this3.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
			});
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this.updateObject.bind(this, '_page', 'access_level'), this._page.access_level, this.updateObject.bind(this, '_page', 'active'), !!this._page.active, this.updateObject.bind(this, '_page', 'name'), this._page.name, this.updateObject.bind(this, '_page', 'title'), this._page.title, this.updateObject.bind(this, '_page', 'link'), this._page.link, this.updateObject.bind(this, '_page', 'keywords'), this._page.keywords, this.updateObject.bind(this, '_page', 'description'), this._page.description, this.updateObject.bind(this, '_page', 'theme'), this._page.theme, this.saveChanges.bind(this));
		}
	}]);

	return AppPageCurrent;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-page-current', AppPageCurrent);

},{"../../../node_modules/custom-web-component/index.js":21,"../../lib/control/lib-control-button.js":11,"../../lib/control/lib-control-checkbox.js":12,"../../lib/control/lib-control-input.js":13,"../../lib/control/lib-control-select.js":14,"../../lib/resource/lib-resource-request.js":18,"../../lib/resource/lib-resource-store.js":19}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' { display: block; width: 100%; }\n\t\t\t\t#app-page-index { display: block; width: 100%; }\n\t\t\t\t#app-page-index .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }\n\t\t\t</style>\n\n\t\t\t<div id="app-page-index">\n\t\t\t\t<div class="page-box">\n\t\t\t\t\t', '\n\t\t\t\t</div>\n\t\t\t</div>\n        '], ['\n\t\t\t<style>\n\t\t\t\t', ' { display: block; width: 100%; }\n\t\t\t\t#app-page-index { display: block; width: 100%; }\n\t\t\t\t#app-page-index .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }\n\t\t\t</style>\n\n\t\t\t<div id="app-page-index">\n\t\t\t\t<div class="page-box">\n\t\t\t\t\t', '\n\t\t\t\t</div>\n\t\t\t</div>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t', '\n\t\t\t\t\t'], ['\n\t\t\t\t\t\t', '\n\t\t\t\t\t']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libResourceRequest = require('../../lib/resource/lib-resource-request.js');

var _libResourceRequest2 = _interopRequireDefault(_libResourceRequest);

var _libResourceStore = require('../../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

require('../../lib/control/lib-control-checkbox.js');

require('../../lib/control/lib-control-input.js');

require('../../lib/control/lib-control-select.js');

require('../../lib/control/lib-control-button.js');

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
var AppPageIndex = function (_CustomHTMLElement) {
	_inherits(AppPageIndex, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppPageIndex() {
		_classCallCheck(this, AppPageIndex);

		var _this = _possibleConstructorReturn(this, (AppPageIndex.__proto__ || Object.getPrototypeOf(AppPageIndex)).call(this));

		_this._pages;

		_this._store = new _libResourceStore2.default();
		_this._request = new _libResourceRequest2.default();
		_this._request.setBaseUrl(_this._store.getItem('api'));
		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppPageIndex, [{
		key: 'connected',


		// {
		// 	"id":"1",
		// 	"active":"1",
		// 	"theme":"razorcms\/basic-blue-side\/1-column.manifest.json",
		// 	"name":"Home",
		// 	"title":"razorCMS Home Page",
		// 	"link":"",
		// 	"keywords":"razorcms,cms,home,page",
		// 	"description":"Home page for razorCMS version 3",
		// 	"access_level":"0",
		// 	"json_settings":""
		// }

		value: function connected() {
			this.getPages();
		}
	}, {
		key: 'updateObject',
		value: function updateObject(name, key, ev) {
			this[name][key] = typeof ev.target.value !== 'boolean' ? ev.target.value : ev.target.value ? 1 : 0;
			this.updateTemplate();
		}
	}, {
		key: 'getPages',
		value: function getPages() {
			var _this2 = this;

			this._request.get('page').then(function (res) {
				_this2._pages = res.data.data;
				console.log(_this2._pages);
				_this2.updateTemplate();
			}).catch(function (error) {
				_this2.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
			});
		}
	}, {
		key: 'saveChanges',
		value: function saveChanges(ev) {
			var _this3 = this;

			this._request.put('page', this._page).then(function (res) {
				_this3._page = res.data.data;
				_this3.updateTemplate();
				_this3.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'New page added', icon: 'check' } }));
			}).catch(function (error) {
				_this3.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
			});
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this._pages ? this._pages.map(function (page) {
				return (0, _index.html)(_templateObject2, page.name);
			}) : '');
		}
	}]);

	return AppPageIndex;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-page-index', AppPageIndex);

},{"../../../node_modules/custom-web-component/index.js":21,"../../lib/control/lib-control-button.js":11,"../../lib/control/lib-control-checkbox.js":12,"../../lib/control/lib-control-input.js":13,"../../lib/control/lib-control-select.js":14,"../../lib/resource/lib-resource-request.js":18,"../../lib/resource/lib-resource-store.js":19}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n            </style>\n\n\t\t\t<div id="app-setting-index">\n\t\t\t\t<p>Setting</p>\n\t\t\t</div>\n        '], ['\n            <style>\n            </style>\n\n\t\t\t<div id="app-setting-index">\n\t\t\t\t<p>Setting</p>\n\t\t\t</div>\n        ']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libResourceStore = require('../../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

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
var AppSettingIndex = function (_CustomHTMLElement) {
	_inherits(AppSettingIndex, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppSettingIndex() {
		_classCallCheck(this, AppSettingIndex);

		return _possibleConstructorReturn(this, (AppSettingIndex.__proto__ || Object.getPrototypeOf(AppSettingIndex)).call(this));
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppSettingIndex, [{
		key: 'connected',
		value: function connected() {}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject);
		}
	}]);

	return AppSettingIndex;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-setting-index', AppSettingIndex);

},{"../../../node_modules/custom-web-component/index.js":21,"../../lib/resource/lib-resource-store.js":19}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style>\n            </style>\n\n\t\t\t<div id="app-user-index">\n\t\t\t\t<p>User</p>\n\t\t\t</div>\n        '], ['\n            <style>\n            </style>\n\n\t\t\t<div id="app-user-index">\n\t\t\t\t<p>User</p>\n\t\t\t</div>\n        ']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libResourceStore = require('../../lib/resource/lib-resource-store.js');

var _libResourceStore2 = _interopRequireDefault(_libResourceStore);

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
var AppUserIndex = function (_CustomHTMLElement) {
	_inherits(AppUserIndex, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function AppUserIndex() {
		_classCallCheck(this, AppUserIndex);

		return _possibleConstructorReturn(this, (AppUserIndex.__proto__ || Object.getPrototypeOf(AppUserIndex)).call(this));
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(AppUserIndex, [{
		key: 'connected',
		value: function connected() {}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject);
		}
	}]);

	return AppUserIndex;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('app-user-index', AppUserIndex);

},{"../../../node_modules/custom-web-component/index.js":21,"../../lib/resource/lib-resource-store.js":19}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\tbackground-color: inherit;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tline-height: 30px;\n\t\t\t\t\tbox-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);\n\t\t\t\t\topacity: 0.9;\n\t\t\t\t\tpadding: 0 8px;\n\t\t\t\t\tcursor: default;\n                    font-size: 14px;\n\t\t\t\t}\n\n\t\t\t\t', ' {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t', ' {\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\n\t\t\t\t', ' {\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t\tcursor: not-allowed;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\n\t\t\t\t#lib-control-button {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\tcursor: default;\n\t\t\t\t\t-webkit-touch-callout: none;\n\t\t\t\t\t-webkit-user-select: none;\n\t\t\t\t\t-khtml-user-select: none;\n\t\t\t\t\t-moz-user-select: none;\n\t\t\t\t\t-ms-user-select: none;\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-button"><slot></slot></div>\n\t\t'], ['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\tbackground-color: inherit;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tline-height: 30px;\n\t\t\t\t\tbox-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);\n\t\t\t\t\topacity: 0.9;\n\t\t\t\t\tpadding: 0 8px;\n\t\t\t\t\tcursor: default;\n                    font-size: 14px;\n\t\t\t\t}\n\n\t\t\t\t', ' {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t', ' {\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\n\t\t\t\t', ' {\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t\tcursor: not-allowed;\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\n\t\t\t\t#lib-control-button {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\tcursor: default;\n\t\t\t\t\t-webkit-touch-callout: none;\n\t\t\t\t\t-webkit-user-select: none;\n\t\t\t\t\t-khtml-user-select: none;\n\t\t\t\t\t-moz-user-select: none;\n\t\t\t\t\t-ms-user-select: none;\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-button"><slot></slot></div>\n\t\t']);

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
 * @copyright 2018 Paul Smith (ulsmith.net)
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
		key: 'attributeChanged',
		value: function attributeChanged(attribute, oldValue, newValue) {
			this.updateTemplate();
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this.host(':hover'), this.host(':active'), this.host('[disabled]'));
		}
	}, {
		key: 'observedAttributes',
		get: function get() {
			return ['disabled'];
		}
	}]);

	return LibControlButton;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-control-button', LibControlButton);

},{"../../../node_modules/custom-web-component/index.js":21}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' { display: inline-block; width: 100%; min-height: 62px; height: inherit; color: #222; fill: #222; }\n                #lib-control-checkbox .checkbox-container { width: inherit; height: inherit; display: flex; flex-flow: column; }\n\t\t\t\t#lib-control-checkbox [invisible] { opacity: 0; }\n\t\t\t\t#lib-control-checkbox label { display: block; color: inherit; font-size: 14px; flex: 1 1; }\n\t\t\t\t#lib-control-checkbox .checkbox-holder { display: block; flex: 50 1; }\n\t\t\t\t#lib-control-checkbox .checkbox-holder .checkbox { float: left; width: 26px; height: 26px; display: inline-block; fill: inherit; }\n\t\t\t\t#lib-control-checkbox .checkbox-holder .check-message { color: inherit; line-height: 30px; padding: 5px; }\n\t\t\t\t#lib-control-checkbox .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; flex: 1 1; }\n\t\t\t\t#lib-control-checkbox .sub-content { display: block; height: fit-content; padding: 4px; box-sizing: border-box; font-size: 14px; font-style: italic; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-checkbox">\n\t\t\t\t<div class="checkbox-container">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t<div class="checkbox-holder">\n\t\t\t\t\t\t<span class="checkbox" @click="', '">', '</span>\n\t\t\t\t\t\t<span class="check-message" @click="', '">', '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="error">', '</span>\n\t\t\t\t\t<div class="sub-content"><slot></slot></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<style>\n\t\t\t\t', ' { display: inline-block; width: 100%; min-height: 62px; height: inherit; color: #222; fill: #222; }\n                #lib-control-checkbox .checkbox-container { width: inherit; height: inherit; display: flex; flex-flow: column; }\n\t\t\t\t#lib-control-checkbox [invisible] { opacity: 0; }\n\t\t\t\t#lib-control-checkbox label { display: block; color: inherit; font-size: 14px; flex: 1 1; }\n\t\t\t\t#lib-control-checkbox .checkbox-holder { display: block; flex: 50 1; }\n\t\t\t\t#lib-control-checkbox .checkbox-holder .checkbox { float: left; width: 26px; height: 26px; display: inline-block; fill: inherit; }\n\t\t\t\t#lib-control-checkbox .checkbox-holder .check-message { color: inherit; line-height: 30px; padding: 5px; }\n\t\t\t\t#lib-control-checkbox .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; flex: 1 1; }\n\t\t\t\t#lib-control-checkbox .sub-content { display: block; height: fit-content; padding: 4px; box-sizing: border-box; font-size: 14px; font-style: italic; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-checkbox">\n\t\t\t\t<div class="checkbox-container">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t<div class="checkbox-holder">\n\t\t\t\t\t\t<span class="checkbox" @click="', '">', '</span>\n\t\t\t\t\t\t<span class="check-message" @click="', '">', '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="error">', '</span>\n\t\t\t\t\t<div class="sub-content"><slot></slot></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libIconMaterialDesign = require('../icon/lib-icon-material-design.js');

var _libIconMaterialDesign2 = _interopRequireDefault(_libIconMaterialDesign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name LibControlCheckbox
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 *
 * @example
 * <lib-control-checkbox checked-message="I do" unchecked-message="I do not" label="Hello" @change="${this.testt.bind(this)}"></lib-control-checkbox>
 */
var LibControlCheckbox = function (_CustomHTMLElement) {
	_inherits(LibControlCheckbox, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibControlCheckbox() {
		_classCallCheck(this, LibControlCheckbox);

		var _this = _possibleConstructorReturn(this, (LibControlCheckbox.__proto__ || Object.getPrototypeOf(LibControlCheckbox)).call(this));

		_this.value = _this.hasAttribute('value') ? true : false;
		return _this;
	}

	_createClass(LibControlCheckbox, [{
		key: 'propertyChanged',
		value: function propertyChanged(property, oldValue, newValue) {
			this.updateTemplate();
		}
	}, {
		key: 'attributeChanged',
		value: function attributeChanged(attribute, oldValue, newValue) {
			this.updateTemplate();
		}
	}, {
		key: '_changeEvent',
		value: function _changeEvent(ev) {
			if (this.hasAttribute('disabled')) return;

			this.value = !this.value;
			this.updateTemplate();
			ev.stopPropagation();
			this.dispatchEvent(new CustomEvent('change', { detail: ev }));
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), !this.hasAttribute('label') || !this.hasAttribute('checked-message') && !this.hasAttribute('unchecked-message'), this.getAttribute('label'), this._changeEvent.bind(this), this.value ? _libIconMaterialDesign2.default.checkBox : _libIconMaterialDesign2.default.checkBoxOutlineBlank, this._changeEvent.bind(this), !this.hasAttribute('checked-message') && !this.hasAttribute('unchecked-message') ? this.getAttribute('label') : this.value ? this.getAttribute('checked-message') : this.getAttribute('unchecked-message'), this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : this.hasAttribute('required') ? 'Required' : 'Invalid');
		}
	}, {
		key: 'observedProperties',
		get: function get() {
			return ['value'];
		}
	}, {
		key: 'observedAttributes',
		get: function get() {
			return ['label', 'checked-message', 'unchecked-message', 'required'];
		}
	}]);

	return LibControlCheckbox;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-control-checkbox', LibControlCheckbox);

},{"../../../node_modules/custom-web-component/index.js":21,"../icon/lib-icon-material-design.js":15}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n                ', ' { display: inline-block; width: 100%; height: inherit; min-height: 62px; }\n                ', ' { opacity: 0.6; }\n\t\t\t\t#lib-control-input { height: 100%; width: 100%; }\n\t\t\t\t#lib-control-input .input-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }\n\t\t\t\t#lib-control-input .input-container label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }\n\t\t\t\t#lib-control-input .input-container input { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input .input-container textarea { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input .input-container[invalid] input { border-color: #cd1918 !important; color: #cd1918 !important; }\n\t\t\t\t#lib-control-input .input-container[invalid] textarea { border-color: #cd1918 !important; color: #cd1918 !important; }\n\t\t\t\t#lib-control-input .input-container[invalid] label { color: #cd1918 !important; }\n\t\t\t\t#lib-control-input .input-container .error { display: block; font-size: 11px; line-height: 12px; color: #cd1918; overflow: hidden; position: absolute; bottom: 0; left: 0; opacity: 0; }\n\t\t\t\t#lib-control-input .input-container[invalid] .error { opacity: 1; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-input">\n\t\t\t\t<div class="input-container" ?invalid="', '">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t', '\n\t\t\t\t\t<span class="error">', '</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<style>\n                ', ' { display: inline-block; width: 100%; height: inherit; min-height: 62px; }\n                ', ' { opacity: 0.6; }\n\t\t\t\t#lib-control-input { height: 100%; width: 100%; }\n\t\t\t\t#lib-control-input .input-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }\n\t\t\t\t#lib-control-input .input-container label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }\n\t\t\t\t#lib-control-input .input-container input { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input .input-container textarea { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }\n\t\t\t\t#lib-control-input .input-container[invalid] input { border-color: #cd1918 !important; color: #cd1918 !important; }\n\t\t\t\t#lib-control-input .input-container[invalid] textarea { border-color: #cd1918 !important; color: #cd1918 !important; }\n\t\t\t\t#lib-control-input .input-container[invalid] label { color: #cd1918 !important; }\n\t\t\t\t#lib-control-input .input-container .error { display: block; font-size: 11px; line-height: 12px; color: #cd1918; overflow: hidden; position: absolute; bottom: 0; left: 0; opacity: 0; }\n\t\t\t\t#lib-control-input .input-container[invalid] .error { opacity: 1; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-input">\n\t\t\t\t<div class="input-container" ?invalid="', '">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t', '\n\t\t\t\t\t<span class="error">', '</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t<textarea name="', '"\n\t\t\t\t\t\t\t.value="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>', '</textarea>\n\t\t\t\t\t'], ['\n\t\t\t\t\t\t<textarea name="', '"\n\t\t\t\t\t\t\t.value="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>', '</textarea>\n\t\t\t\t\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t<input name="', '"\n                            type="', '"\n\t\t\t\t\t\t\t.value="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>\n\t\t\t\t\t'], ['\n\t\t\t\t\t\t<input name="', '"\n                            type="', '"\n\t\t\t\t\t\t\t.value="', '"\n\t\t\t\t\t\t\t@input="', '"\n\t\t\t\t\t\t\t@keydown="', '"\n\t\t\t\t\t\t\t@keyup="', '"\n\t\t\t\t\t\t\t@change="', '"\n\t\t\t\t\t\t>\n\t\t\t\t\t']);

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
 * @copyright 2018 Paul Smith (ulsmith.net)
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

		_this.value = _this.hasAttribute('value') ? value : undefined;
		_this.invalid = _this.hasAttribute('invalid') ? true : false;
		_this.valTimeout;
		return _this;
	}

	_createClass(LibControlInput, [{
		key: 'propertyChanged',
		value: function propertyChanged(property, oldValue, newValue) {
			this._validate(this.value);
			this.updateTemplate();
		}
	}, {
		key: 'attributeChanged',
		value: function attributeChanged(attribute, oldValue, newValue) {
			this.updateTemplate();
		}
	}, {
		key: 'connected',
		value: function connected() {
			if (this.hasAttribute('validate-on-load') && (!this.value || this.value.length < 1)) {
				this._validate(this.value);
				this.updateTemplate();
			}
		}
	}, {
		key: '_event',
		value: function _event(ev) {
			var _this2 = this;

			ev.stopPropagation();

			if (this.hasAttribute('disabled')) return;

			if (ev.type == 'input') {
				this.value = ev.target.value;
				clearTimeout(this.valTimeout);
				this.valTimeout = setTimeout(function () {
					_this2._validate(_this2.value);
					_this2.updateTemplate();
				}, 250);
			}

			this.dispatchEvent(new CustomEvent(ev.type, { detail: ev }));
		}
	}, {
		key: '_validate',
		value: function _validate(value) {
			this.invalid = this.hasAttribute('regex') && !new RegExp(this.getAttribute('regex')).test(value) ? true : false;
			this.invalid = this.hasAttribute('required') ? !value || value.length < 1 ? true : this.invalid : !value || value.length < 1 ? false : this.invalid;
			if (this.invalid) this.setAttribute('invalid', '');else this.removeAttribute('invalid');
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this.host('[disabled]'), this.invalid, !this.hasAttribute('label'), this.getAttribute('label'), this.getAttribute('type') === 'textarea' ? (0, _index.html)(_templateObject2, this.getAttribute('name'), this.value === undefined ? '' : this.value, this._event.bind(this), this._event.bind(this), this._event.bind(this), this._event.bind(this), this.value === undefined ? '' : this.value) : (0, _index.html)(_templateObject3, this.getAttribute('name'), this.getAttribute('type'), this.value === undefined ? '' : this.value, this._event.bind(this), this._event.bind(this), this._event.bind(this), this._event.bind(this)), this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : this.hasAttribute('required') ? 'Required' : 'Invalid');
		}
	}, {
		key: 'observedProperties',
		get: function get() {
			return ['value'];
		}
	}, {
		key: 'observedAttributes',
		get: function get() {
			return ['label', 'name', 'type', 'invalid-message', 'required'];
		}
	}]);

	return LibControlInput;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-control-input', LibControlInput);

},{"../../../node_modules/custom-web-component/index.js":21}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n                ', ' { display: inline-block; width: 100%; height: 62px; }\n\t\t\t\t#lib-control-select { width: inherit; height: inherit; }\n\t\t\t\t#lib-control-select .select-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }\n\t\t\t\t#lib-control-select [invisible] { opacity: 0; }\n\t\t\t\t#lib-control-select label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }\n\t\t\t\t#lib-control-select select { padding: 4px; width: 100%; height: 100%; font-size: 14px; background-color: transparent; display: block; border: 1px solid #aaa; }\n\t\t\t\t#lib-control-select .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; overflow: hidden; position: absolute; bottom: 0; left: 0; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-select">\n\t\t\t\t<div class="select-container">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t<select @change="', '" .value="', '"></select>\n\t\t\t\t\t<span class="error">', '</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<style>\n                ', ' { display: inline-block; width: 100%; height: 62px; }\n\t\t\t\t#lib-control-select { width: inherit; height: inherit; }\n\t\t\t\t#lib-control-select .select-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }\n\t\t\t\t#lib-control-select [invisible] { opacity: 0; }\n\t\t\t\t#lib-control-select label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }\n\t\t\t\t#lib-control-select select { padding: 4px; width: 100%; height: 100%; font-size: 14px; background-color: transparent; display: block; border: 1px solid #aaa; }\n\t\t\t\t#lib-control-select .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; overflow: hidden; position: absolute; bottom: 0; left: 0; }\n\t\t\t</style>\n\n\t\t\t<div id="lib-control-select">\n\t\t\t\t<div class="select-container">\n\t\t\t\t\t<label ?invisible="', '">', '</label>\n\t\t\t\t\t<select @change="', '" .value="', '"></select>\n\t\t\t\t\t<span class="error">', '</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']);

var _index = require('../../../node_modules/custom-web-component/index.js');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name LibControlSelect
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 *
 * @example
 * <lib-control-select label="Hello" empty-option="Nothing" @change="${this.testt.bind(this)}">
 * 		<option value="1">One</option>
 * 		<option value="2">Two</option>
 * 	</lib-control-select>
 */
var LibControlSelect = function (_CustomHTMLElement) {
	_inherits(LibControlSelect, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibControlSelect() {
		_classCallCheck(this, LibControlSelect);

		var _this = _possibleConstructorReturn(this, (LibControlSelect.__proto__ || Object.getPrototypeOf(LibControlSelect)).call(this));

		_this.value = _this.hasAttribute('value') ? _this.getAttribute('value') : _this.value;
		return _this;
	}

	_createClass(LibControlSelect, [{
		key: 'propertyChanged',
		value: function propertyChanged(property, oldValue, newValue) {
			this.updateTemplate();
		}
	}, {
		key: 'attributeChanged',
		value: function attributeChanged(attribute, oldValue, newValue) {
			this.updateTemplate();
		}
	}, {
		key: 'templateUpdated',
		value: function templateUpdated() {
			var options = this.innerHTML;

			if (this.hasAttribute('empty-option')) options = '<option value="">' + this.getAttribute('empty-option') + '</option>' + options;

			var select = this.dom().querySelector('select');
			select.innerHTML = options;
			select.value = this.value;
		}
	}, {
		key: '_changeEvent',
		value: function _changeEvent(ev) {
			if (this.hasAttribute('disabled')) return;

			this.value = ev.target.value;
			ev.stopPropagation();
			this.dispatchEvent(new CustomEvent('change', { detail: ev }));
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), !this.hasAttribute('label'), this.getAttribute('label'), this._changeEvent.bind(this), this.value, this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : this.hasAttribute('required') ? 'Required' : 'Invalid');
		}
	}, {
		key: 'observedProperties',
		get: function get() {
			return ['value'];
		}
	}, {
		key: 'observedAttributes',
		get: function get() {
			return ['label', 'invalid-message', 'required'];
		}
	}]);

	return LibControlSelect;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-control-select', LibControlSelect);

},{"../../../node_modules/custom-web-component/index.js":21}],15:[function(require,module,exports){
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
 * @copyright 2018 Paul Smith (ulsmith.net)
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

},{"../../../node_modules/custom-web-component/index.js":21}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\topacity: 0;\n\n\t\t\t\t\tmargin-left: 20px;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbottom: 20px;\n\t\t\t\t\tright: 20px;\n\t\t\t\t\tmin-height: 50px;\n\t\t\t\t\tmax-height: 500px;\n\t\t\t\t\tmin-width: 50px;\n\t\t\t\t\tmax-width: 500px;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\theight: fit-content;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmin-height: 50px;\n\t\t\t\t\tmax-height: 500px;\n\t\t\t\t\tmin-width: 50px;\n\t\t\t\t\tmax-width: 500px;\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\theight: fit-content;\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\tpadding: 15px;\n\t\t\t\t\tbackground-color: #444;\n\t\t\t\t\tfill: white;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tbox-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="done"], #lib-overlay-notify .notify-message[type="success"] {\n\t\t\t\t\tbackground-color: #31c231;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="danger"], #lib-overlay-notify .notify-message[type="error"] {\n\t\t\t\t\tbackground-color: #ff3737;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="warning"], #lib-overlay-notify .notify-message[type="exception"] {\n\t\t\t\t\tbackground-color: #ed851a;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="info"], #lib-overlay-notify .notify-message[type="notice"] {\n\t\t\t\t\tbackground-color: #1a78ed;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message .notify-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-overlay-notify">\n\t\t\t\t<div class="notify-message" type="', '" @click="', '">\n\t\t\t\t\t', '\n\t\t\t\t\t<span class="notify-text">', '</span>\n\t\t\t\t</div>\n\t\t\t</div>\n        '], ['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\topacity: 0;\n\n\t\t\t\t\tmargin-left: 20px;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbottom: 20px;\n\t\t\t\t\tright: 20px;\n\t\t\t\t\tmin-height: 50px;\n\t\t\t\t\tmax-height: 500px;\n\t\t\t\t\tmin-width: 50px;\n\t\t\t\t\tmax-width: 500px;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\theight: fit-content;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmin-height: 50px;\n\t\t\t\t\tmax-height: 500px;\n\t\t\t\t\tmin-width: 50px;\n\t\t\t\t\tmax-width: 500px;\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\theight: fit-content;\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\tpadding: 15px;\n\t\t\t\t\tbackground-color: #444;\n\t\t\t\t\tfill: white;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tbox-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="done"], #lib-overlay-notify .notify-message[type="success"] {\n\t\t\t\t\tbackground-color: #31c231;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="danger"], #lib-overlay-notify .notify-message[type="error"] {\n\t\t\t\t\tbackground-color: #ff3737;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="warning"], #lib-overlay-notify .notify-message[type="exception"] {\n\t\t\t\t\tbackground-color: #ed851a;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message[type="info"], #lib-overlay-notify .notify-message[type="notice"] {\n\t\t\t\t\tbackground-color: #1a78ed;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay-notify .notify-message .notify-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-overlay-notify">\n\t\t\t\t<div class="notify-message" type="', '" @click="', '">\n\t\t\t\t\t', '\n\t\t\t\t\t<span class="notify-text">', '</span>\n\t\t\t\t</div>\n\t\t\t</div>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['<span class="notify-icon">', '</span>'], ['<span class="notify-icon">', '</span>']);

var _index = require('../../../node_modules/custom-web-component/index.js');

var _libIconMaterialDesign = require('../icon/lib-icon-material-design.js');

var _libIconMaterialDesign2 = _interopRequireDefault(_libIconMaterialDesign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
var LibOverlayNotify = function (_CustomHTMLElement) {
	_inherits(LibOverlayNotify, _CustomHTMLElement);

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibOverlayNotify() {
		_classCallCheck(this, LibOverlayNotify);

		var _this = _possibleConstructorReturn(this, (LibOverlayNotify.__proto__ || Object.getPrototypeOf(LibOverlayNotify)).call(this));

		_this._showing;
		_this._type = _this.hasAttribute('type') ? _this.getAttribute('type') : undefined;
		_this._text = _this.hasAttribute('text') ? _this.getAttribute('text') : undefined;
		_this._icon = _this.hasAttribute('icon') ? _this.getAttribute('icon') : undefined;
		_this._timeout = _this.hasAttribute('timeout') ? _this.getAttribute('timeout') : 3000;
		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  * @return {String} HTML template block
  */


	_createClass(LibOverlayNotify, [{
		key: 'connected',
		value: function connected() {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}
	}, {
		key: 'attributeChanged',
		value: function attributeChanged(attribute, oldValue, newValue) {
			switch (attribute) {
				case 'type':
					this._type = newValue;break;
				case 'text':
					this._text = newValue;break;
				case 'icon':
					this._icon = newValue;break;
				case 'timeout':
					this._timeout = newValue !== null ? parseInt(newValue) : undefined;break;
			}

			this.updateTemplate();
		}

		/**
      * @public @name show
   * @description Show the saving icon and self remove after X seconds
   */

	}, {
		key: 'show',
		value: function show(type, text, icon, timeout) {
			var _this2 = this;

			// auto hide it
			clearTimeout(this._showing);

			if (type || text || icon) {
				this._type = type;
				this._text = text;
				this._icon = icon;
				this.updateTemplate();
			}

			this.dispatchEvent(new CustomEvent('show'));

			// add it
			this.style.display = 'block';
			this.style.zIndex = 1051;

			// show it
			setTimeout(function () {
				_this2.style.opacity = 1;

				if (!timeout && !_this2._timeout) return;

				_this2._showing = setTimeout(function () {
					return _this2.hide();
				}, parseInt(timeout || _this2._timeout));
			}, 50);
		}

		/**
      * @public @name show
   * @description Show the saving icon and self remove after X seconds
   */

	}, {
		key: 'hide',
		value: function hide() {
			var _this3 = this;

			if (this.style.display === 'none') return;

			this.dispatchEvent(new CustomEvent('hide'));

			// add it
			this.style.opacity = 0;

			// show it
			setTimeout(function () {
				_this3.style.display = 'none';
				_this3.style.zIndex = -1;
			}, 250);
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this._type, this.hide.bind(this), this._icon ? (0, _index.html)(_templateObject2, _libIconMaterialDesign2.default[this._icon]) : '', this._text);
		}

		/**
      * @public @static @name properties
   * @description Properties function to return web components properties
   * @return Object Web component api properties
   */

	}, {
		key: 'observedAttributes',
		get: function get() {
			return ['type', 'timeout'];
		}
	}]);

	return LibOverlayNotify;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-overlay-notify', LibOverlayNotify);

},{"../../../node_modules/custom-web-component/index.js":21,"../icon/lib-icon-material-design.js":15}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\tz-index: -1;\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-backdrop {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tz-index: 1002;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: black;\n\t\t\t\t\topacity: 0.2;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tz-index: 1003;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container .overlay-content {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tbox-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-overlay">\n\t\t\t\t<div class="overlay-backdrop"></div>\n\t\t\t\t<div id="container" class="overlay-container" @click="', '">\n\t\t\t\t\t<div class="overlay-content"><slot></slot></div>\n\t\t\t\t</div>\n\t\t\t</div>\n        '], ['\n\t\t\t<style>\n\t\t\t\t', ' {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\tz-index: -1;\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttransition: opacity 200ms ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-backdrop {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tz-index: 1002;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: black;\n\t\t\t\t\topacity: 0.2;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tz-index: 1003;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\t#lib-overlay .overlay-container .overlay-content {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tbox-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);\n\t\t\t\t}\n\t\t\t</style>\n\n\t\t\t<div id="lib-overlay">\n\t\t\t\t<div class="overlay-backdrop"></div>\n\t\t\t\t<div id="container" class="overlay-container" @click="', '">\n\t\t\t\t\t<div class="overlay-content"><slot></slot></div>\n\t\t\t\t</div>\n\t\t\t</div>\n        ']);

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
 * @copyright 2018 Paul Smith (ulsmith.net)
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
		key: 'toggle',


		/**
      * @public @name show
   * @description Show the saving icon and self remove after X seconds
   */
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
			this.style.display = 'block';
			this.style.zIndex = 1001;

			// show it
			setTimeout(function () {
				return _this2.style.opacity = 1;
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
			this.style.opacity = 0;

			// show it
			setTimeout(function () {
				_this3.style.display = 'none';
				_this3.style.zIndex = -1;
			}, 250);
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject, this.host(), this.hide.bind(this));
		}
	}]);

	return LibOverlay;
}(_index.CustomHTMLElement);

// bootstrap the class as a new web component


customElements.define('lib-overlay', LibOverlay);

},{"../../../node_modules/custom-web-component/index.js":21,"../icon/lib-icon-material-design.js":15}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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
 */
var LibResourceStore = function () {

	/**
     * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function LibResourceStore() {
		_classCallCheck(this, LibResourceStore);

		this.baseName = 'ulsmith';
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

},{}],20:[function(require,module,exports){
'use strict';

require('./node_modules/reflect-constructor/reflect-constructor.js');

require('./cwc/app/app-root.js');

},{"./cwc/app/app-root.js":3,"./node_modules/reflect-constructor/reflect-constructor.js":37}],21:[function(require,module,exports){
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

},{"../lit-html/lit-html.js":36,"./src/CustomHTMLElement.js":22}],22:[function(require,module,exports){
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
			if (oldValue !== newValue) _CustomWebComponent2.default.attributeChangedCallback.call(this, property, oldValue, newValue);
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
	}, {
		key: 'dom',
		value: function dom() {
			return this.shadowRoot ? this.shadowRoot : this;
		}
	}]);

	return CustomHTMLElement;
}(_CustomElement);

exports.default = CustomHTMLElement;

},{"./CustomWebComponent.js":23}],23:[function(require,module,exports){
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
			if (!!this.template) throw 'Ensure template is a static function for ' + this.localName;
			if (typeof this.constructor.template === 'function') CustomWebComponent.updateTemplate.call(this);
			if (typeof this.connected === 'function') this.connected.call(this);
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
						if (this.isConnected && typeof this.propertyChanged === 'function') if (oldValue !== value) this.propertyChanged.call(this, this.constructor.observedProperties[idx], oldValue, value);
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
			(0, _litHtml.render)(this.constructor.template.call(this), this.shadowRoot ? this.shadowRoot : this.attachShadow({ mode: 'open' }));

			if (typeof this.templateUpdated === 'function') this.templateUpdated.call(this);
		}
	}]);

	return CustomWebComponent;
}();

exports.default = CustomWebComponent;

},{"../../lit-html/lit-html.js":36}],24:[function(require,module,exports){
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

var _index = require('../../../custom-web-component/index.js');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * @public @name CWCIconMaterial
 * @description SVG Icon Template Result Provider, generates an object containing SVG icons based on material design
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 * @license MIT
 *
 * @example JS
 * import CWCIconMaterial from '...';
 * @example HTML Template
 * <span>${CWCIconMaterial.addAlert}</span>;
 */
var CWCIconMaterial = {
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

exports.default = CWCIconMaterial;

},{"../../../custom-web-component/index.js":21}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<div id="cwc-resource-router"></div>'], ['<div id="cwc-resource-router"></div>']);

var _index = require('../../../custom-web-component/index.js');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @public @name CWCResourceRouter
 * @extends CustomHTMLElement
 * @description Custom Web Component, adds dynamic lazy routing (deactivated) via push state URL or hashtag
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 * @license MIT
 *
 * @property {String} route The route to set as 'one', 'one/two'
 * @property {Array} routes The routes to use as array of objects [{src: '../../app/test/app-test-index.js', component: 'app-test-index', route: 'test' },...]
 *
 * @attribute default The default route to use for no route (index page)
 * @attribute not-found The route to use when no route found (404)
 * @attribute push-state Flag to tell the router if it's using push-state (fallback is hashtag)
 * @attribute redirect Flag to tell the system to redirect the default page to it's actual route
 *
 * @example HTML
 * <cwc-resource-router .route="${this.route}" .routes="${this.routes}" default="test" not-found="404" push-state redirect></cwc-resource-router>
 */
var CWCResourceRouter = function (_CustomHTMLElement) {
	_inherits(CWCResourceRouter, _CustomHTMLElement);

	/**
  * @public @constructor @name constructor
  * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
  */
	function CWCResourceRouter() {
		_classCallCheck(this, CWCResourceRouter);

		// properties
		var _this = _possibleConstructorReturn(this, (CWCResourceRouter.__proto__ || Object.getPrototypeOf(CWCResourceRouter)).call(this));

		_this.route;
		_this.routes;

		// private
		_this._windowEvent;
		_this._selected;
		return _this;
	}

	/**
  * @public @name template
  * @description Template function to return web component UI
  *
  * @return {String} HTML template block
  *
  * @example JS
  * this.updateTemplate(); // updates the template and topically re-renders changes
  */


	_createClass(CWCResourceRouter, [{
		key: 'connected',


		/**
   * @public @name connected
   * @description Lifecycle hook that gets called when the element is added to DOM
   */
		value: function connected() {
			this._windowEvent = window.addEventListener('popstate', this.updateRoute.bind(this));
		}

		/**
   * @public @name disconnected
   * @description Lifecycle hook that gets called when the element is removed from DOM
   */

	}, {
		key: 'disconnected',
		value: function disconnected() {
			window.removeEventListener('popstate', this._windowEvent);
		}

		/**
   * @public @name propertyChanged
   * @description Lifecycle hook that gets called when the elements observed properties change
      *
   * @param {String} property Name of the property changed
      * @param {Mixed} oldValue Value before the change
      * @param {Mixed} newValue Value after the change
   */

	}, {
		key: 'propertyChanged',
		value: function propertyChanged(property, oldValue, newValue) {
			if (property === 'route' && this.routes) this.updateRoute(newValue);
		}

		/**
   * @public @name templateUpdated
   * @description Lifecycle hook that gets called when the elements template is updated on DOM
   */

	}, {
		key: 'templateUpdated',
		value: function templateUpdated() {
			this.updateRoute();
		}

		/**
   * @public @name updateRoute
   * @description Update the router with a new route
      *
   * @param {Mixed} data The new route as a route object ({component: 'some-thing', route: 'one'}), or a route string 'one'
   */

	}, {
		key: 'updateRoute',
		value: function updateRoute(data) {
			var path = void 0;

			// empty route or popstate event, work out route from url | route passed in as route | route passed as string path string
			if (!data || data.type === 'popstate') path = this.hasAttribute('push-state') ? window.location.pathname.replace(/^\/|\/$/g, '') : window.location.hash.replace(/^\#|\#$/g, '');else if (data.path !== undefined) path = data.path.replace(/^\/|\/$/g, '');else if (data.length) path = data.replace(/^\/|\/$/g, '');

			// resolve from path
			var route = this._getRouteFromPath(path);
			var routeDefault = this._getRouteFromPath(this.getAttribute('default'));
			var routeNotFound = this._getRouteFromPath(this.getAttribute('not-found'));

			// not set, load default, set then load, else 404
			if (!path) this._loadRoute(routeDefault);else if (route) this._loadRoute(route);else this._loadRoute(routeNotFound);
		}

		/**
   * @public @name _getRouteFromPath
   * @description Get the router object from the list of routes using the path to search
      *
   * @param {String} path The path to search for in the routes array
   *
   * @return {Object} The route object
   */

	}, {
		key: '_getRouteFromPath',
		value: function _getRouteFromPath(path) {
			return this.routes.filter(function (selected) {
				return selected.path === path;
			})[0] || undefined;
		}

		/**
   * @public @name _loadRoute
   * @description Load the route from the selected route object. Dynamic lazy imports is deactivated
      *
   * @param {Object} selected The route object to load the route from
   */

	}, {
		key: '_loadRoute',
		value: function _loadRoute(selected) {
			// any route?
			if (!selected) throw 'No route found, default route could not be loaded, please ensure default route is set';

			// should we load route, is it empty or has it changed
			if (this._selected && this._selected.component == selected.component) return;

			if (!customElements.get(selected.component)) {
				// this is for when modules importing is universally excepted
				// import(selected.src).then(() => this._paintRoute(selected.component));
			} else this._paintRoute(selected.component);

			// set route
			this._selected = selected;
			this.route = selected.path;

			// persist history/location
			if (this.hasAttribute('push-state')) {
				// should we redirect default to path
				var path = this._selected.path !== this.getAttribute('default') ? this._selected.path : this.hasAttribute('redirect') ? this._selected.path : '';
				history.pushState({ 'route': path }, '', path);
			} else window.location.hash = this._selected.path;

			this.dispatchEvent(new CustomEvent('routeloaded'));
		}

		/**
   * @public @name _paintRoute
   * @description Paint the loaded component to screen, omits event once complete
      *
   * @param {String} component The component tag name (lowercase, hyphoned)
   */

	}, {
		key: '_paintRoute',
		value: function _paintRoute(component) {
			this.dom().innerHTML = '<' + component + '></' + component + '>';
		}
	}], [{
		key: 'template',
		value: function template() {
			return (0, _index.html)(_templateObject);
		}

		/**
   * @public @static @get @name observedProperties
   * @description Lifecycle hook that sets properties to observe on the element
   *
   * @return {Array} An array of string property names (camelcase)
   */

	}, {
		key: 'observedProperties',
		get: function get() {
			return ['route', 'routes'];
		}

		/**
   * @public @static @get @name observedAttributes
   * @description Lifecycle hook that sets attributes to observe on the element
   *
   * @return {Array} An array of string attribute names (hyphoned)
   */

	}, {
		key: 'observedAttributes',
		get: function get() {
			return ['default', 'not-found', 'push-state', 'redirect'];
		}
	}]);

	return CWCResourceRouter;
}(_index.CustomHTMLElement);

// define the new custom element


customElements.define('cwc-resource-router', CWCResourceRouter);

},{"../../../custom-web-component/index.js":21}],26:[function(require,module,exports){
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


},{"./parts.js":30}],27:[function(require,module,exports){
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


},{}],28:[function(require,module,exports){
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


},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = exports.noChange = {};


},{}],30:[function(require,module,exports){
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


},{"./directive.js":27,"./dom.js":28,"./part.js":29,"./template-instance.js":33,"./template-result.js":34,"./template.js":35}],31:[function(require,module,exports){
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


},{"./dom.js":28,"./parts.js":30,"./template-factory.js":32}],32:[function(require,module,exports){
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


},{"./template.js":35}],33:[function(require,module,exports){
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


},{"./dom.js":28,"./template.js":35}],34:[function(require,module,exports){
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


},{"./dom.js":28,"./template.js":35}],35:[function(require,module,exports){
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


},{}],36:[function(require,module,exports){
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


},{"./lib/default-template-processor.js":26,"./lib/directive.js":27,"./lib/dom.js":28,"./lib/part.js":29,"./lib/parts.js":30,"./lib/render.js":31,"./lib/template-factory.js":32,"./lib/template-instance.js":33,"./lib/template-result.js":34,"./lib/template.js":35}],37:[function(require,module,exports){
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

},{}]},{},[20])