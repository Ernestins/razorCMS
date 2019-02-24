import { CustomHTMLElement, html, repeat } from '../../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../../lib/resource/lib-resource-request.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';
import CwcIconMaterial from '../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

import '../../lib/control/lib-control-checkbox.js';
import '../../lib/control/lib-control-input.js';
import '../../lib/control/lib-control-select.js';
import '../../lib/control/lib-control-button.js';

import '../../lib/overlay/lib-overlay-confirm.js';

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
		this._pageId = this._store.getItem('currentPage');
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
				#app-page-index [hidden]{ display: none !important; }
				#app-page-index .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
				#app-page-index .page-box .page-boxes { display: flex; flex-flow: row wrap; }
				#app-page-index .page-box .page-boxes .card { margin: 10px; flex: 1 1 400px; background-color: #3288b1; color: white; fill: white; }
				#app-page-index .page-box .page-boxes .card .card-icon { display: inline-block; width: 18px; height: 18px; vertical-align: text-top; }
				#app-page-index .page-box .page-boxes .card .card-icon.button-icon { width: 16px; height: 16px; vertical-align: sub; }
				#app-page-index .page-box .page-boxes .card .header .card-icon { margin-right: 5px; }
				#app-page-index .page-box .page-boxes .card .footer .card-icon.id { margin-right: 5px; }
				#app-page-index .page-box .page-boxes .card .footer .card-icon.path { margin-left: 15px; margin-right: 5px; }
				#app-page-index .page-box .page-boxes .card .main  { background: rgba(255, 255, 255, 0.8); color: #222; }
				#app-page-index .page-box .page-boxes .card .main .card-controls { height: 40px; padding: 5px; }
				#app-page-index .page-box .page-boxes .card .main .card-controls .card-control { height: 30px; text-align: center; line-height: 30px; color: white; margin: 5px; }
				#app-page-index .page-box .page-boxes .card .main .card-controls .card-control.edit-control { background-color: green; }
				#app-page-index .page-box .page-boxes .card .main .card-controls .card-control.delete-control { background-color: red; float: right; }
				#app-page-index .page-box .page-boxes .card .main .card-controls .card-control.home-control { background-color: #444; }
				#app-page-index .page-box .page-boxes .card .main .card-content { padding: 0 10px 10px 10px; }
				#app-page-index .page-box .page-boxes .card .main .card-content .screenshot { border: 1px solid #8fa7bb; height: 400px; overflow: hidden; }
				#app-page-index .page-box .page-boxes .card .main .card-content .preview { border: none; box-sizing: border-box; -ms-zoom: 0.5; -moz-transform: scale(0.5); -moz-transform-origin: 0px 0; -o-transform: scale(0.5); -o-transform-origin: 0 0; -webkit-transform: scale(0.5); -webkit-transform-origin: 0 0; width: 200%; height: 800px; }
				#app-page-index .page-box .page-boxes .card .main .card-content table { border: none; width: 100%; border: 1px solid #96a5b8; margin-top: 10px; border-collapse: collapse; }
				#app-page-index .page-box .page-boxes .card .main .card-content table tr:nth-child(odd) { background-color: #cbd1de; }
				#app-page-index .page-box .page-boxes .card .main .card-content table tr td { padding: 10px; border: 1px solid #96a5b8; }
				#app-page-index .page-box .page-boxes .card .main .card-content table tr td.first { width: 33%; }
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
						${this._pages ? repeat(this._pages, (page) => page.id, (page, index) => html`
							<lib-structure-card class="card">
								<div class="header" slot="header">
									<span class="card-icon" ?hidden="${this._pageId !== page.id}" title="Home Page">${CwcIconMaterial.home}</span>
									<span class="card-icon" title="${page.active == 1 ? 'Active' : 'Not Active'}">${page.active == 1 ? CwcIconMaterial.visibility : CwcIconMaterial.visibilityOff}</span>
									<span>${page.name || 'No Name Specified...'}</span>
								</div>
								<div class="main" slot="main">
									<div class="card-controls">
										<lib-control-button class="card-control home-control" ?disabled="${this._pageId === page.id}" @click="${this._setHomePage.bind(this, index, page.id)}">
											<span class="card-icon button-icon">${CwcIconMaterial.home}</span> Home
										</lib-control-button>
										<lib-control-button class="card-control edit-control" @click="${this._editPage.bind(this, index, page.id)}">
											<span class="card-icon button-icon">${CwcIconMaterial.create}</span> Edit
										</lib-control-button>
										<lib-control-button class="card-control delete-control" @click="${this._deletePage.bind(this, index, page.id)}">
											<span class="card-icon button-icon">${CwcIconMaterial.deleteForever}</span> Delete
										</lib-control-button>
									</div>
									<div class="card-content">
										<div class="screenshot">
											<iframe class="preview" scrolling="no" src="${this._baseUrl + page.link}"></iframe>
										</div>
										<table>
											<tr>
												<td class="first">ID</td>
												<td>${page.id}</td>
											</tr>
											<tr>
												<td class="first">Active</td>
												<td>${page.active == 1 ? 'Yes' : 'No'}</td>
											</tr>
											<tr>
												<td class="first">Access Level</td>
												<td>${page.access_level == 0 ? 'Public' : 'User Level ' + page.access_level}</td>
											</tr>
											<tr>
												<td class="first">Name</td>
												<td>${page.name}</td>
											</tr>
											<tr>
												<td class="first">Title</td>
												<td>${page.title}</td>
											</tr>
											<tr>
												<td class="first">Link</td>
												<td>${page.link}</td>
											</tr>
											<tr>
												<td class="first">Keywords</td>
												<td>${page.keywords}</td>
											</tr>
											<tr>
												<td class="first">Description</td>
												<td>${page.description}</td>
											</tr>
										</table>
									</div>
								</div>
								<div class="footer" slot="footer">
									<span class="card-icon id" title="ID">${CwcIconMaterial.infoOutline}</span>
									<span title="ID">${page.id || ''}</span>
									<span class="card-icon path">${CwcIconMaterial.link}</span>
									<span>${page.link || ''}</span>
								</div>
							</lib-structure-card>
						`) : ''}
					</div>
				</div>

				<lib-overlay-confirm id="confirm" @confirm="${this._confirm.bind(this)}"></lib-overlay-confirm>
			</div>
        `;
	}

	connected() {
		this._getPages();
	}

	_getPages() {
		this._request.get('page').then((res) => {
			this._pages = res.data.data;
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}

	_confirm(ev) {
		this[ev.detail.method](ev.detail.index, ev.detail.id, ev.detail.ev, true);
	}

	_setHomePage(index, id, ev, confirmed) {
		if (!confirmed) {
			this.dom().querySelector('#confirm').show('Are you sure you want to set this as the home page?', { method: '_setHomePage', index: index, id: id, ev: ev});
			return;
		}

		this._request.patch('setting/home_page', { 'value': id }).then((res) => {
			this._pageId = id;
			this.updateTemplate();
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'Home page change', icon: 'check' } }));
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}
	
	_editPage(index, id, ev, confirmed) {
		window.location.href = (this._pages[index].link.length > 0 ? this._pages[index].link : '/') + '?admin';
	}

	_deletePage(index, id, ev, confirmed) {
		if (!confirmed) {
			this.dom().querySelector('#confirm').show('Are you sure you want to delete this page?', { method: '_deletePage', index: index, id: id, ev: ev });
			return;
		}

		this._request.delete('page', id).then((res) => {
			this._pages.splice(index, 1);
			this.updateTemplate();
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'Page deleted', icon: 'check' } }));
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}
}

// bootstrap the class as a new web component
customElements.define('app-page-index', AppPageIndex);
