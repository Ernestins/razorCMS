import { CustomHTMLElement, html, repeat, unsafeHTML } from '../../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../../lib/resource/lib-resource-request.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';
import CwcIconMaterial from '../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

import '../../lib/control/lib-control-button.js';
import '../../lib/control/lib-control-checkbox.js';
import '../../lib/control/lib-control-select.js';

import '../../lib/overlay/lib-overlay-confirm.js';

import '../../lib/structure/lib-structure-card.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppUserIndex extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._users;

		this._store = new LibResourceStore();
		this._pageId = this._store.getItem('currentPage');
		this._userId = this._store.getItem('user.id');
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
				:host { display: block; width: 100%; }
				[hidden]{ display: none !important; }
				.user-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
				.user-boxes { display: flex; flex-flow: row wrap; }
				.card { margin: 10px; flex: 1 1 800px; background-color: #1badad; color: white; fill: white; }
				.card .card-icon { display: inline-block; width: 18px; height: 18px; vertical-align: text-top; }
				.card .card-icon.button-icon { width: 16px; height: 16px; vertical-align: sub; }
				.card .header .card-icon { margin-right: 5px; }
				.card .footer .card-icon.id { margin-right: 5px; }
				.card .footer .card-icon.path { margin-left: 15px; margin-right: 5px; }
				.card .main  { background: rgba(255, 255, 255, 0.8); color: #222; }
				.card .main .card-controls { height: 40px; padding: 5px; }
				.card .main .card-controls .card-control { height: 30px; text-align: center; line-height: 30px; color: white; margin: 5px; }
				.card .main .card-controls .card-control.edit-control { background-color: green; }
				.card .main .card-controls .card-control.delete-control { background-color: red; float: right; }
				.card .main .card-controls .card-control.home-control { background-color: #444; }
				.card .main .card-content { padding: 0 10px 10px 10px; }
				.card .main .card-content .user-box-row { display: flex; flex-flow: row wrap; }
				.card .main .card-content .user-box-col { display: block; flex: 1 1 330px; padding: 10px; box-sizing: border-box; }
			</style>

			<div class="user-box">
				<div class="user-boxes">
					${this._users ? repeat(this._users, (user) => user.id, (user, index) => html`
						<lib-structure-card class="card">
							<div class="header" slot="header">
								<span class="card-icon path" title="${this._userId == user.id ? 'Your Account' : 'Other Account'}">${this._userId == user.id ? CwcIconMaterial.face : CwcIconMaterial.accountCircle}</span>
								<span class="card-icon" title="${user.active == 1 ? 'Active Account' : 'Not Active'}">${user.active == 1 ? CwcIconMaterial.checkCircle : CwcIconMaterial.block}</span>
								<span>${user.name || 'No Name Specified...'}</span>
							</div>
							<div class="main" slot="main">
								<div class="card-controls">
									<lib-control-button class="card-control delete-control" @click="${this._deleteUser.bind(this, index)}">
										<span class="card-icon button-icon">${CwcIconMaterial.deleteForever}</span> Delete
									</lib-control-button>
								</div>
								<div class="card-content">
									<div class="user-box-row">
										<div class="user-box-col">
											<lib-control-input
												class="user-input user-name"
												type="text"
												label="Full Name"
												invalid-message="Cannot be empty"
												validate-on-load
												required
												@input="${this._updateUser.bind(this, index, 'name')}" 
												.value="${user.name}" 
											></lib-control-input>
										</div>
										<div class="user-box-col">
											<lib-control-input
												class="user-input user-email"
												type="text"
												label="Email Address"
												invalid-message="Cannot be empty"
												validate-on-load
												required
												@input="${this._updateUser.bind(this, index, 'email_address')}" 
												.value="${user.email_address}" 
											></lib-control-input>
										</div>
									</div>
									<div class="user-box-row">
										<div class="user-box-col">
											<lib-control-select class="user-input user-access-level" label="Access Level" @change="${this._updateUser.bind(this, 'access_level')}" .value="${user.access_level}">
												<option value="1">User Level 1</option>
												<option value="2">User Level 2</option>
												<option value="3">User Level 3</option>
												<option value="4">User Level 4</option>
												<option value="5">User Level 5</option>
												<option value="6">Admin Level 1</option>
												<option value="7">Admin Level 2</option>
												<option value="8">Admin Level 3</option>
												<option value="9">Admin Level 4</option>
												<option value="10">Admin Level 5</option>
											</lib-control-select>
										</div>
										<div class="user-box-col">
											<lib-control-checkbox
												class="user-input user-registration"
												label="Active User"
												checked-message="User can now log in"
												unchecked-message="User cannot log in"
												@change="${this._updateUser.bind(this, 'active')}" 
												.value="${user.active == 1 ? true : false}" 
											></lib-control-checkbox>
										</div>
									</div>
								</div>
							</div>
							<div class="footer" slot="footer">
								<span class="card-icon id" title="ID">${CwcIconMaterial.infoOutline}</span>
								<span title="ID">${user.id || ''}</span>
								<span class="card-icon path" title="Access Level">${CwcIconMaterial.lock}</span>
								<span title="Access Level">${user.access_level}</span>
							</div>
						</lib-structure-card>
					`) : ''}
				</div>
			</div>

			<lib-overlay-confirm id="confirm" @confirm="${this._confirm.bind(this)}"></lib-overlay-confirm>
        `;
	}

	// {
	// 	"status": "success", 
	// 	"data": [
	// 		{
	// 			 "id": "1", 
	// 			 "name": "razorCMS", 
	// 			 "email_address": "razorcms@razorcms.co.uk", 
	// 			 "active": "1", 
	// 			 "access_level": "10", 
	// 			 "last_logged_in": "1551370798", 
	// 			 "ip_address": "172.19.0.1" 
	// 		}
	// 	]
	// }

	connected() {
		this._getUser();
	}

	_getUser() {
		this._request.get('user').then((res) => {
			this._users = res.data.data;
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}

	_confirm(ev) {
		this[ev.detail.method](ev.detail.index, ev.detail.id, ev.detail.ev, true);
	}

	_deleteUser(index, id, ev, confirmed) {
		// if (!confirmed) {
		// 	this.shadowRoot.querySelector('#confirm').show('Are you sure you want to delete this content?', { method: '_deleteUser', index: index, id: id, ev: ev });
		// 	return;
		// }

		// this._request.delete('content', id).then((res) => {
		// 	this._users.splice(index, 1);
		// 	this.updateTemplate();
		// 	this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'Content deleted', icon: 'check' } }));
		// }).catch((error) => {
		// 	this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		// });
	}

	_updateUser() {

	}
}

// bootstrap the class as a new web component
customElements.define('app-user-index', AppUserIndex);
