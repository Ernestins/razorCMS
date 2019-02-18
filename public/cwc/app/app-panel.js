import { CustomHTMLElement, html } from '../../node_modules/custom-web-component/index.js';
import LibResourceStore from '../lib/resource/lib-resource-store.js';
import CwcIconMaterial from '../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppPanel extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this.route;
		this.routes = [];

		this._store = new LibResourceStore();
		this._user = this._store.getItem('user');
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    template() {
        return html`
            <style>
        		${this.host()} { margin: 0; padding: 5px; position: fixed; top: 3px; left: 3px; z-index: 100; background-color: #fff; border: 1px solid #eee; box-shadow: 0px 0px 12px -2px #444; transform-origin: 12px 12px; -webkit-transition: transform 0.5s ease-in-out; -moz-transition: transform 0.5s ease-in-out; -ms-transition: transform 0.5s ease-in-out; transition: transform 0.5s ease-in-out; }
				#app-panel { min-width: 200px; }
				#app-panel .dashboard-controls .rotate-icon { cursor: pointer; position: absolute; top: 5px; left: 5px; width: 15px; height: 15px; }
				#app-panel .dashboard-controls .details { padding-left: 20px; float: right; text-align: right; }
				#app-panel .dashboard-controls .details .name { font-size: 16px; }
				#app-panel .dashboard-controls .details .name .profile-icon { display: inline-block; width: 30px; height: 30px; vertical-align: middle; cursor: pointer; }
				#app-panel .dashboard-controls .details .last-logged-in .logged-in-date { font-size: 14px; }
				#app-panel .dashboard-controls .details .last-logged-in .history-icon { display: inline-block; height: 16px; width: 16px; vertical-align: text-top; }
				#app-panel .editor-controls { float: left; width: 100%; }
				#app-panel .editor-controls .setting-icon { display: inline-block; width: 32px; height: 32px; cursor: pointer; vertical-align: middle; }
				#app-panel .editor-controls .setting-button { vertical-align: middle; float: right; width: auto; margin-left: 7px; }
				#app-panel .editor-controls .setting-edit { background-color: green; color: white; }
				#app-panel .editor-controls .setting-add { background-color: #0b56b4; color: white; }
				#app-panel .editor-controls .setting-copy { background-color: #0b56b4; color: white; }
			</style>

			<div id="app-panel">
				<div class="dashboard-controls">
					<span class="rotate-icon" @click="${this._rotatePanel.bind(this)}">${CwcIconMaterial.cached}</span>
					<div class="details">
						<div class="name">
							<span>${this._user.name}</span>
							<span class="profile-icon" @click="${this._navigate.bind(this, 'profile')}">${CwcIconMaterial.face}</span>
						</div>
						<p class="last-logged-in">
							<span class="logged-in-date">${this._formatDate(this._user.last_logged_in)}</span>
							<span class="history-icon">${CwcIconMaterial.history}</span>
						</p>
					</div>
				</div>

				<div class="editor-controls" bind-show="checkAccessLevel(private.user.access_level, 5)">
					<span class="setting-icon" @click="${this._showDashboard.bind(this)}">${CwcIconMaterial.apps}</span>
					<lib-control-button class="setting-button setting-copy" @click="${this._pageCopy.bind(this)}">Copy</lib-control-button>
					<lib-control-button class="setting-button setting-add" @click="${this._pageAdd.bind(this)}">Add</lib-control-button>
					<lib-control-button class="setting-button setting-edit" @click="${this._pageEdit.bind(this)}">Edit</lib-control-button>
				</div>
			</div>
        `;
	}

	connected() {
		this.style.transform = this._store.getItem('panelRotate') ? 'rotate(180deg)' : '';
	}

	_rotatePanel(ev) {
		this._store.setItem('panelRotate', !this.style.transform ? true : false);
		this.style.transform = !this.style.transform ? 'rotate(180deg)' : '';
	}

	_navigate(path, ev) {
		this.route = path;
		this.dispatchEvent(new CustomEvent('routechange', { detail: path}));
	}

	_showDashboard() {
		this.dispatchEvent(new CustomEvent('showdashboard'));
	}

	_formatDate(timestamp) {
		return new Date(timestamp).toLocaleDateString(navigator.language, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
	}

	_pageEdit(ev) {
		console.log('edit');
	}
	
	_pageAdd(ev) {
		console.log('add');
		
	}
	
	_pageCopy(ev) {
		console.log('copy');

	}
}

// bootstrap the class as a new web component
customElements.define('app-panel', AppPanel);