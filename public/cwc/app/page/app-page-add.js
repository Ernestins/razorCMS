import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../../lib/resource/lib-resource-request.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';

import '../../lib/control/lib-control-checkbox.js';
import '../../lib/control/lib-control-input.js';
import '../../lib/control/lib-control-select.js';
import '../../lib/control/lib-control-button.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppPageAdd extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this.pageObject = { active: 0, theme: '', name: '', title: '', link: '', keywords: '', description: '', access_level: 0 };
		this._page = Object.assign({}, this.pageObject);

		this._store = new LibResourceStore();
		this._request = new LibResourceRequest();
		this._request.setBaseUrl(this._store.getItem('api'));
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
	static template() {
		return html`
			<style>
				:host { display: block; width: 100%; }
				#app-page-add { display: block; width: 100%; }
				#app-page-add .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
				#app-page-add .page-box .page-box-row { display: flex; flex-flow: row wrap; }
				#app-page-add .page-box .page-box-col { display: block; flex: 1 1 350px; padding: 10px; box-sizing: border-box; }
				#app-page-add .page-box .page-title { font-size: 30px; margin: 0px; padding: 0px; }
				#app-page-add .page-box .page-description { height: 150px; }
				#app-page-add .page-box .page-cancel { background-color: #cd1918; color: white; float: left; padding: 6px 16px; }
				#app-page-add .page-box .page-save { background-color: green; color: white; float: right; padding: 6px 16px; }
			</style>

			<div id="app-page-add">
				<div class="page-box">
					<div class="page-box-row">
						<div class="page-box-col">
							<h1 class="page-title">Add New Page</h1>
						</div>
					</div>
					<div class="page-box-row">
						<div class="page-box-col">
							<lib-control-select class="page-input page-access-level" label="Access Level" @change="${this.updateObject.bind(this, '_page', 'access_level')}" .value="${this._page.access_level}">
								<option value="0">Public</option>
								<option value="1">User Level 1</option>
								<option value="2">User Level 2</option>
								<option value="3">User Level 3</option>
								<option value="4">User Level 4</option>
								<option value="5">User Level 5</option>
							</lib-control-select>
						</div>
						<div class="page-box-col">
							<lib-control-checkbox class="page-input page-active" label="Active" checked-message="Page can be seen" unchecked-message="Page is not visible" @change="${this.updateObject.bind(this, '_page', 'active')}" .value="${!!this._page.active}"></lib-control-checkbox>
						</div>
					</div>
					<div class="page-box-row">
						<div class="page-box-col">
							<lib-control-input class="page-input page-name" type="text" label="Name (used in menus)" invalid-message="Cannot be empty" @input="${this.updateObject.bind(this, '_page', 'name')}" .value="${this._page.name}" validate-on-load required></lib-control-input>
						</div>
						<div class="page-box-col">
							<lib-control-input class="page-input page-title" type="text" label="Title (used by search engines)" invalid-message="Cannot be empty" @input="${this.updateObject.bind(this, '_page', 'title')}" .value="${this._page.title}" validate-on-load required></lib-control-input>
						</div>
					</div>
					<div class="page-box-row">
						<div class="page-box-col">
							<lib-control-input class="page-input page-link" type="text" label="Link (to access page from browser)" invalid-message="Cannot be empty" @input="${this.updateObject.bind(this, '_page', 'link')}" .value="${this._page.link}" validate-on-load></lib-control-input>
						</div>
						<div class="page-box-col">
							<lib-control-input class="page-input page-keywords" type="text" label="Keywords (used by search engines, comma seperated)" @input="${this.updateObject.bind(this, '_page', 'keywords')}" .value="${this._page.keywords}" validate-on-load required></lib-control-input>
						</div>
					</div>
					<div class="page-box-row">
						<div class="page-box-col">
							<lib-control-input class="page-input page-description" type="textarea" label="Description (used by search engines)" invalid-message="Cannot be empty" @input="${this.updateObject.bind(this, '_page', 'description')}" .value="${this._page.description}" validate-on-load required></lib-control-input>
						</div>
					</div>
					<div class="page-box-row">
						<div class="page-box-col">
							<lib-control-button class="page-control page-cancel" @click="${this.cancelChanges.bind(this)}">Cance</lib-control-button>
							<lib-control-button class="page-control page-save" @click="${this.saveChanges.bind(this)}">Save</lib-control-button>
						</div>
					</div>
				</div>
			</div>
        `;
	}

	updateObject(name, key, ev) {
		this[name][key] = typeof ev.target.value !== 'boolean' ? ev.target.value : (ev.target.value ? 1 : 0);
		this.updateTemplate();
	}

	cancelChanges(ev) {
		this._page = Object.assign({}, this.pageObject);
		this.updateTemplate();
	}

	saveChanges(ev) {
		this._request.put('page', this._page).then((res) => {
			this._page = res.data.data;
			this.updateTemplate();
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'New page added', icon: 'check' } }));
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}
}

// bootstrap the class as a new web component
customElements.define('app-page-add', AppPageAdd);
