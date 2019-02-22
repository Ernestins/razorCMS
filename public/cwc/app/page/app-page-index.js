import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../../lib/resource/lib-resource-request.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';
import CwcIconMaterial from '../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

import '../../lib/control/lib-control-checkbox.js';
import '../../lib/control/lib-control-input.js';
import '../../lib/control/lib-control-select.js';
import '../../lib/control/lib-control-button.js';

import '../../lib/structure/lib-structure-card.js';

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
	static template() {
		return html`
			<style>
				${this.host()} { display: block; width: 100%; }
				#app-page-index { display: block; width: 100%; }
				#app-page-index .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
				#app-page-index .page-box .page-boxes { display: flex; flex-flow: row wrap; }
				#app-page-index .page-box .page-boxes .card { margin: 10px; flex: 1 1 400px; background-color: #3288b1; color: white; fill: white; }
				#app-page-index .page-box .page-boxes .card .visibility-icon { margin-right: 5px; display: inline-block; width: 18px; height: 18px; vertical-align: text-top; }
			</style>

			<div id="app-page-index">
				<div class="page-box">
					<div class="page-boxes">
						${this._pages ? this._pages.map((page) => html`
							<lib-structure-card class="card">
								<div class="header" slot="header">
									<span class="visibility-icon" title="${page.active == 1 ? 'Active' : 'Not Active'}">${page.active == 1 ? CwcIconMaterial.visibility : CwcIconMaterial.visibilityOff}</span>
									<span>${page.name || 'No Name Specified...'}</span>
								</div>
								<div class="header" slot="main">
									<p>${page.id || 'No Description Specified...'}</p>
									<p>${page.theme || 'No Description Specified...'}</p>
									<p>${page.title || 'No Description Specified...'}</p>
									<p>${page.link || 'No Description Specified...'}</p>
									<p>${page.keywords || 'No Description Specified...'}</p>
									<p>${page.description || 'No Description Specified...'}</p>
									<p>${page.access_level || 'No Description Specified...'}</p>
								</div>
								<div class="header" slot="footer">
									<span>${page.path || 'No Path Specified...'}</span>
								</div>
							</lib-structure-card>
						`) : ''}
					</div>
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
