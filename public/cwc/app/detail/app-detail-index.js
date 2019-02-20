import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../../lib/resource/lib-resource-request.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';

import '../../lib/control/lib-control-checkbox.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppDetailIndex extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._page;

		this._store = new LibResourceStore();
		this._request = new LibResourceRequest();
		this._request.setBaseUrl(this._store.getItem('api'));
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    template() {
        return this._page ? html`
			<style include="razilo-style-base">
				.save { float: right; }
			</style>

			<div id="app-detail-index">
				<p>${this._page.access_level}</p>
				<p>${this._page.active}</p>
				<p>${this._page.description}</p>
				<p>${this._page.id}</p>
				<p>${this._page.json_settings}</p>
				<p>${this._page.keywords}</p>
				<p>${this._page.link}</p>
				<p>${this._page.name}</p>
				<p>${this._page.theme}</p>
				<p>${this._page.title}</p>
			
				<lib-control-checkbox label="Active" .value="${!!this._page.active}"></lib-control-checkbox>
				<lib-control-input type="text" label="Name (used in menus)" invalid-message="Cannot be empty" .value="${this._page.name}" validate-on-load required></lib-control-input>
				<lib-control-input type="text" label="Title (used by search engines)" invalid-message="Cannot be empty" .value="${this._page.title}" validate-on-load required></lib-control-input>
				<lib-control-input type="text" label="Link (to access page from browser)" invalid-message="Cannot be empty" .value="${this._page.link}" validate-on-load required></lib-control-input>
				<lib-control-input type="text" label="Keywords (used by search engines, comma seperated)" invalid-message="Cannot be empty" .value="${this._page.keywords}" validate-on-load required></lib-control-input>

				<paper-dropdown-menu label="Access Level">
					<paper-listbox slot="dropdown-content" selected="{{page.access_level}}">
						<paper-item value="0">Public</paper-item>
						<paper-item value="1">User Level 1</paper-item>
						<paper-item value="2">User Level 2</paper-item>
						<paper-item value="3">User Level 3</paper-item>
						<paper-item value="4">User Level 4</paper-item>
						<paper-item value="5">User Level 5</paper-item>
					</paper-listbox>
				</paper-dropdown-menu>
				<paper-checkbox checked>Active</paper-checkbox>
				<paper-input label="Name (used in menus)" type="text" value="{{page.name}}" invalid="{{inv.name}}" required auto-validate error-message="Needs some text!"></paper-input>
				<paper-input label="Title (used by search engines)" type="text" value="{{page.title}}" invalid="{{inv.title}}" required auto-validate error-message="Needs some text!"></paper-input>
				<paper-input label="Link (to access page from browser)" type="text" value="{{page.link}}" invalid="{{inv.link}}"></paper-input>
				<paper-input label="Keywords (used by search engines, comma seperated)" type="text" value="{{page.keywords}}" invalid="{{inv.key}}" required auto-validate error-message="Needs some text!"></paper-input>
				<paper-textarea label="Description (used by search engines)" max-rows="2" invalid="{{inv.desc}}" required auto-validate error-message="Needs some text!" value="{{page.description}}"></paper-textarea>
				<paper-button dialog-confirm autofocus class="save" on-click="doSave" color="green" disabled$="{{isInvalid(inv.name, inv.title, inv.link, inv.key, inv.desc)}}">Save</paper-button>
			</div>
        ` : '';
	}

	connected() {
		this.getPage();
	}

	getPage() {
		this._request.get('page', this._store.getItem('currentPage')).then((res) => {
			this._page = res.data.data;
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}

	doSave() {
		this._request.patch('page/' + this._store.getItem('currentPage'), this._page).then((res) => {
			this._page = res.data.data;
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}
}

// bootstrap the class as a new web component
customElements.define('app-detail-index', AppDetailIndex);