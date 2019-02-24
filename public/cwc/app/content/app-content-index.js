import { CustomHTMLElement, html, repeat, unsafeHTML } from '../../../node_modules/custom-web-component/index.js';
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
class AppContentIndex extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._content;

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
				#app-content-index { display: block; width: 100%; }
				#app-content-index [hidden]{ display: none !important; }
				#app-content-index .content-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
				#app-content-index .content-box .content-boxes { display: flex; flex-flow: row wrap; }
				#app-content-index .content-box .content-boxes .card { margin: 10px; flex: 1 1 400px; background-color: #1badad; color: white; fill: white; }
				#app-content-index .content-box .content-boxes .card .card-icon { display: inline-block; width: 18px; height: 18px; vertical-align: text-top; }
				#app-content-index .content-box .content-boxes .card .card-icon.button-icon { width: 16px; height: 16px; vertical-align: sub; }
				#app-content-index .content-box .content-boxes .card .header .card-icon { margin-right: 5px; }
				#app-content-index .content-box .content-boxes .card .footer .card-icon.id { margin-right: 5px; }
				#app-content-index .content-box .content-boxes .card .footer .card-icon.path { margin-left: 15px; margin-right: 5px; }
				#app-content-index .content-box .content-boxes .card .main  { background: rgba(255, 255, 255, 0.8); color: #222; }
				#app-content-index .content-box .content-boxes .card .main .card-controls { height: 40px; padding: 5px; }
				#app-content-index .content-box .content-boxes .card .main .card-controls .card-control { height: 30px; text-align: center; line-height: 30px; color: white; margin: 5px; }
				#app-content-index .content-box .content-boxes .card .main .card-controls .card-control.edit-control { background-color: green; }
				#app-content-index .content-box .content-boxes .card .main .card-controls .card-control.delete-control { background-color: red; float: right; }
				#app-content-index .content-box .content-boxes .card .main .card-controls .card-control.home-control { background-color: #444; }
				#app-content-index .content-box .content-boxes .card .main .card-content { padding: 0 10px 10px 10px; }
				#app-content-index .content-box .content-boxes .card .main .card-content .preview { border: 1px solid #8fa7bb; padding: 10px; }
				#app-content-index .content-box .content-boxes .card .main .card-content table { border: none; width: 100%; border: 1px solid #96a5b8; margin-top: 10px; border-collapse: collapse; }
				#app-content-index .content-box .content-boxes .card .main .card-content table tr:nth-child(odd) { background-color: #cbd1de; }
				#app-content-index .content-box .content-boxes .card .main .card-content table tr td { padding: 10px; border: 1px solid #96a5b8; }
				#app-content-index .content-box .content-boxes .card .main .card-content table tr td.first { width: 33%; }
				@media (max-width: 600px) { 
					#app-content-index .content-box .content-boxes .card .main .card-content .screenshot { height: 300px; }
					#app-content-index .content-box .content-boxes .card .main .card-content .preview { height: 600px; } 
				}
				@media (max-width: 400px) { 
					#app-content-index .content-box .content-boxes .card .main .card-content .screenshot { height: 200px; }
					#app-content-index .content-box .content-boxes .card .main .card-content .preview { height: 400px; } 
				}
			</style>

			<div id="app-content-index">
				<div class="content-box">
					<div class="content-boxes">
						${this._content ? repeat(this._content, (content) => content.id, (content, index) => html`
							<lib-structure-card class="card">
								<div class="header" slot="header">
									<span class="card-icon" title="${content.used_on_pages.length > 0 ? 'Used on Pages' : 'Not Used Anywhere'}">${content.used_on_pages.length > 0 ? CwcIconMaterial.visibility : CwcIconMaterial.visibilityOff}</span>
									<span>${content.name || 'No Name Specified...'}</span>
								</div>
								<div class="main" slot="main">
									<div class="card-controls">
										<lib-control-button class="card-control delete-control" @click="${this._deleteContent.bind(this, index, content.id)}">
											<span class="card-icon button-icon">${CwcIconMaterial.deleteForever}</span> Delete
										</lib-control-button>
									</div>
									<div class="card-content">
										<div class="preview">${unsafeHTML(content.content)}</div>
										<table>
											<tr>
												<td class="first">ID</td>
												<td>${content.id}</td>
											</tr>
											<tr>
												<td class="first">Name</td>
												<td>${content.name}</td>
											</tr>
											<tr>
												<td class="first">Used On Pages</td>
												<td>${content.used_on_pages}</td>
											</tr>
										</table>
									</div>
								</div>
								<div class="footer" slot="footer">
									<span class="card-icon id" title="ID">${CwcIconMaterial.infoOutline}</span>
									<span title="ID">${content.id || ''}</span>
									<span class="card-icon path" title="Page Coverage">${CwcIconMaterial.contentCopy}</span>
									<span title="Page Coverage">${content.used_on_pages.length}</span>
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
		this._getContent();
	}

	_getContent() {
		this._request.get('content').then((res) => {
			this._content = res.data.data;
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}

	_confirm(ev) {
		this[ev.detail.method](ev.detail.index, ev.detail.id, ev.detail.ev, true);
	}

	_deleteContent(index, id, ev, confirmed) {
		if (!confirmed) {
			this.dom().querySelector('#confirm').show('Are you sure you want to delete this content?', { method: '_deleteContent', index: index, id: id, ev: ev });
			return;
		}

		this._request.delete('content', id).then((res) => {
			this._content.splice(index, 1);
			this.updateTemplate();
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'Content deleted', icon: 'check' } }));
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}
}

// bootstrap the class as a new web component
customElements.define('app-content-index', AppContentIndex);
