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
class AppContentIndex extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._contents;

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
				#app-content-index { display: block; width: 100%; }
				#app-content-index .page-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
				#app-content-index .page-box .page-boxes { display: flex; flex-flow: row wrap; }
				#app-content-index .page-box .page-boxes .card { margin: 10px; flex: 1 1 400px; background-color: #1b8888; color: white; fill: white; }
				#app-content-index .page-box .page-boxes .card .card-icon { display: inline-block; width: 18px; height: 18px; vertical-align: text-top; }
				#app-content-index .page-box .page-boxes .card .header .card-icon { margin-right: 5px; }
				#app-content-index .page-box .page-boxes .card .footer .card-icon.id { margin-right: 5px; }
				#app-content-index .page-box .page-boxes .card .footer .card-icon.path { margin-left: 15px; margin-right: 5px; }
			</style>

			<div id="app-content-index">
				<div class="page-box">
					<div class="page-boxes">
						${this._contents ? this._contents.map((content) => html`
							<lib-structure-card class="card">
								<div class="header" slot="header">
									<span class="card-icon" title="${content.used_on_pages.length > 0 ? 'Used on Pages' : 'Not Used Anywhere'}">${content.used_on_pages.length > 0 ? CwcIconMaterial.visibility : CwcIconMaterial.visibilityOff}</span>
									<span>${content.name || 'No Name Specified...'}</span>
								</div>
								<div class="main" slot="main">
									<p>${content.id || 'No Description Specified...'}</p>
									<p>${content.name || 'No Description Specified...'}</p>
									<p>${content.content || 'No Description Specified...'}</p>
									<p>${content.used_on_pages || 'No Description Specified...'}</p>
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
			</div>
        `;
	}

	// {
	// 	"id":"2",
	// 	"name":"Main content - In the beginning",
	// 	"content":"<h3><i class=\"fa fa-leaf\"><\/i> In The Beginning...<\/h3><p>razorCMS began as a databaseless flat file content management system, forked from a project called uCMS. It's structure allowed you to have just the amount of functionality you needed in a flat file CMS solution, adding extensions (blade packs) for further functionality, whilst allowing setup on simple servers with no database.<\/p><p>Starting with a core system install, razorCMS gave you base functionality required to run a website, add the extra functionality as you needed it via the blade pack management system. Everything from WYSIWYG editors to SEF URL was added as extra functionality.<\/p><p>Test<\/p>",
	// 	"used_on_pages":[
	// 		{
	// 			"id":"1",
	// 			"name":"Home",
	// 			"title":"razorCMS Home Page"
	// 		}
	// 	]
	// }

	connected() {
		this.getPages();
	}

	updateObject(name, key, ev) {
		this[name][key] = typeof ev.target.value !== 'boolean' ? ev.target.value : (ev.target.value ? 1 : 0);
		this.updateTemplate();
	}

	getPages() {
		this._request.get('content').then((res) => {
			this._contents = res.data.data;
			console.log(this._contents);
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}

	// saveChanges(ev) {
	// 	this._request.put('content').then((res) => {
	// 		this._page = res.data.data;
	// 		this.updateTemplate();
	// 		this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'New page added', icon: 'check' } }));
	// 	}).catch((error) => {
	// 		this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
	// 	});
	// }
}

// bootstrap the class as a new web component
customElements.define('app-content-index', AppContentIndex);
