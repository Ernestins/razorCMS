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

		this._baseUrl = this._store.getItem('baseUrl');
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
				#app-page-index .page-box .page-boxes .card .card-icon { display: inline-block; width: 18px; height: 18px; vertical-align: text-top; }
				#app-page-index .page-box .page-boxes .card .header .card-icon { margin-right: 5px; }
				#app-page-index .page-box .page-boxes .card .footer .card-icon.id { margin-right: 5px; }
				#app-page-index .page-box .page-boxes .card .footer .card-icon.path { margin-left: 15px; margin-right: 5px; }
				#app-page-index .page-box .page-boxes .card .main  { background: rgba(255, 255, 255, 0.8); color: #222; }
				#app-page-index .page-box .page-boxes .card .main .card-controls { height: 40px; display: flex; flex-flow: row; padding: 5px; }
				#app-page-index .page-box .page-boxes .card .main .card-controls .card-control { height: 40px; flex: 1 1; text-align: center; line-height: 40px; color: white; margin: 5px; }
				#app-page-index .page-box .page-boxes .card .main .card-controls .card-control.edit-control { background-color: green; }
				#app-page-index .page-box .page-boxes .card .main .card-controls .card-control.delete-control { background-color: red; }
				#app-page-index .page-box .page-boxes .card .main .card-content { padding: 10px; }
				#app-page-index .page-box .page-boxes .card .main .card-content .screenshot { height: 400px; overflow: hidden; }
				#app-page-index .page-box .page-boxes .card .main .card-content .preview { border: 10px solid #486c8b; box-sizing: border-box; -ms-zoom: 0.5; -moz-transform: scale(0.5); -moz-transform-origin: 0px 0; -o-transform: scale(0.5); -o-transform-origin: 0 0; -webkit-transform: scale(0.5); -webkit-transform-origin: 0 0; width: 200%; height: 800px; }
				@media (max-width: 600px) { 
					#app-page-index .page-box .page-boxes .card .main .card-content .screenshot { height: 300px; }
					#app-page-index .page-box .page-boxes .card .main .card-content .preview { height: 600px; } 
				}
				@media (max-width: 400px) { 
					#app-page-index .page-box .page-boxes .card .main .card-content .screenshot { height: 200px; }
					#app-page-index .page-box .page-boxes .card .main .card-content .preview { height: 400px; } 
				}
			</style>

			<div id="app-page-index">
				<div class="page-box">
					<div class="page-boxes">
						${this._pages ? this._pages.map((page) => html`
							<lib-structure-card class="card">
								<div class="header" slot="header">
									<span class="card-icon" title="${page.active == 1 ? 'Active' : 'Not Active'}">${page.active == 1 ? CwcIconMaterial.visibility : CwcIconMaterial.visibilityOff}</span>
									<span>${page.name || 'No Name Specified...'}</span>
								</div>
								<div class="main" slot="main">
									<div class="card-controls">
										<lib-control-button class="card-control edit-control">Edit</lib-control-button>
										<lib-control-button class="card-control delete-control">Delete</lib-control-button>
									</div>
									<div class="card-content">
										<lib-control-checkbox class="card-control delete-control" label="Make Home Page" checked-message="Being used as home page" unchecked-message="Not using this as home page"></lib-control-checkbox>
										<div class="screenshot">
											<iframe class="preview" src="${this._baseUrl + page.link}"></iframe>
										</div>
										<p>${page.theme || 'No Description Specified...'}</p>
										<p>${page.title || 'No Description Specified...'}</p>
										<p>${page.link || 'No Description Specified...'}</p>
										<p>${page.keywords || 'No Description Specified...'}</p>
										<p>${page.description || 'No Description Specified...'}</p>
										<p>${page.access_level || 'No Description Specified...'}</p>
									</div>
								</div>
								<div class="footer" slot="footer">
									<span class="card-icon id" title="ID">${CwcIconMaterial.infoOutline}</span>
									<span title="ID">${page.id || ''}</span>
								</div>
							</lib-structure-card>
						`) : ''}
					</div>
				</div>
			</div>
        `;
	}

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

	// saveChanges(ev) {
	// 	this._request.put('page', this._page).then((res) => {
	// 		this._page = res.data.data;
	// 		this.updateTemplate();
	// 		this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'New page added', icon: 'check' } }));
	// 	}).catch((error) => {
	// 		this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
	// 	});
	// }
}

// bootstrap the class as a new web component
customElements.define('app-page-index', AppPageIndex);
