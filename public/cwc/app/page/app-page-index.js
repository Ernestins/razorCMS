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
class AppPageIndex extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._pages;

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
		return html`
			<style>
				${this.host()} { display: block; width: 100%; }
				#app-page-index { display: block; width: 100%; }
				#app-page-index .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
			</style>

			<div id="app-page-index">
				<div class="page-box">
					${this._pages ? this._pages.map((page) => html`
						${page.name}
					`) : ''}
				</div>
			</div>
        `;
	}

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

	connected() {
		this.getPages();
	}

	updateObject(name, key, ev) {
		this[name][key] = typeof ev.target.value !== 'boolean' ? ev.target.value : (ev.target.value ? 1 : 0);
		this.updateTemplate();
	}

	getPages() {
		this._request.get('page').then((res) => {
			this._pages = res.data.data;
			console.log(this._pages);
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
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
customElements.define('app-page-index', AppPageIndex);
