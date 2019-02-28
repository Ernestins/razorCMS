import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../../lib/resource/lib-resource-request.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';

import '../../lib/control/lib-control-checkbox.js';
import '../../lib/control/lib-control-input.js';
import '../../lib/control/lib-control-button.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppSettingIndex extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._settings = {};

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
				.setting-box { display: block; width: 100%; padding: 10px; box-sizing: border-box; }
				.setting-box .setting-box-row { display: flex; flex-flow: row wrap; }
				.setting-box .setting-box-col { display: block; flex: 1 1 330px; padding: 10px; box-sizing: border-box; }
				.setting-box .setting-title { font-size: 30px; margin: 0px; padding: 0px; }
				.setting-box .setting-textarea { height: 200px; }
				.setting-box .setting-save { background-color: green; color: white; float: right; padding: 6px 16px; }
			</style>

			<div class="setting-box">
				<div class="setting-box-row">
					<div class="setting-box-col">
						<h1 class="setting-title">
							System Settings
							<lib-control-button class="setting-control setting-save" @click="${this.saveChanges.bind(this)}">Save</lib-control-button>
						</h1>
					</div>
				</div>
				${this._settings.name ? html`
					<div class="setting-box-row">
						<div class="setting-box-col">
							<lib-control-input 
								class="setting-input setting-name" 
								type="text" 
								label="Your Website Name" 
								invalid-message="Cannot be empty" 
								validate-on-load 
								required
								@input="${this.updateSetting.bind(this, 'name')}" 
								.value="${this._settings.name.value}" 
							></lib-control-input>
							<lib-control-input
								class="setting-input setting-home"
								type="number"
								label="Your Home Page ID" 
								invalid-message="Cannot be empty" 
								validate-on-load 
								required
								@input="${this.updateSetting.bind(this, 'home_page')}" 
								.value="${this._settings.home_page.value}" 
							></lib-control-input>
						</div>
						<div class="setting-box-col">
							<lib-control-input
								class="setting-input setting-cookie"
								type="text"
								label="Cookie Message"
								@input="${this.updateSetting.bind(this, 'cookie_message')}" 
								.value="${this._settings.cookie_message.value}" 
							></lib-control-input>
							<lib-control-input
								class="setting-input setting-cookie-button"
								type="text"
								label="Cookie Message Button"
								@input="${this.updateSetting.bind(this, 'cookie_message_button')}" 
								.value="${this._settings.cookie_message_button.value}" 
							></lib-control-input>
						</div>
						<div class="setting-box-col">
							<lib-control-checkbox
								class="setting-input setting-registration"
								label="Allow User Registration"
								checked-message="Users can register on your site"
								unchecked-message="Users are unable to register"
								@change="${this.updateSetting.bind(this, 'allow_registration')}" 
								.value="${this._settings.allow_registration.value}" 
							></lib-control-checkbox>
							<lib-control-checkbox
								class="setting-input setting-activation"
								label="Manual User Activation"
								checked-message="Users have to be activated in settings"
								unchecked-message="Users are able to activate from email"
								@change="${this.updateSetting.bind(this, 'manual_activation')}" 
								.value="${this._settings.manual_activation.value}" 
							></lib-control-checkbox>
						</div>
					</div>
					<div class="setting-box-row">
						<div class="setting-box-col">
							<lib-control-input
								class="setting-input setting-google"
								type="text"
								label="Google Analytics Code"
								@input="${this.updateSetting.bind(this, 'google_analytics_code')}" 
								.value="${this._settings.google_analytics_code.value}" 
							></lib-control-input>
						</div>
					</div>
					<div class="setting-box-row">
						<div class="setting-box-col">
							<lib-control-input
								class="setting-textarea setting-activation-email"
								type="textarea"
								label="Activation Email Content"
								@input="${this.updateSetting.bind(this, 'activation_email')}" 
								.value="${this._settings.activation_email.value}" 
							></lib-control-input>
						</div>
					</div>
					<div class="setting-box-row">
						<div class="setting-box-col">
							<lib-control-input
								class="setting-textarea setting-registration-email"
								type="textarea"
								label="Registration Email Content"
								@input="${this.updateSetting.bind(this, 'registration_email')}" 
								.value="${this._settings.registration_email.value}" 
							></lib-control-input>
						</div>
					</div>
					<div class="setting-box-row">
						<div class="setting-box-col">
							<lib-control-input
								class="setting-textarea setting-activate-user-email"
								type="textarea"
								label="Activate User Email Content"
								@input="${this.updateSetting.bind(this, 'activate_user_email')}" 
								.value="${this._settings.activate_user_email.value}" 
							></lib-control-input>
						</div>
					</div>
					<div class="setting-box-row">
						<div class="setting-box-col">
							<lib-control-input
								class="setting-textarea setting-forgot-password-email"
								type="textarea"
								label="Forgot Password Email Content"
								@input="${this.updateSetting.bind(this, 'forgot_password_email')}" 
								.value="${this._settings.forgot_password_email.value}" 
							></lib-control-input>
						</div>
					</div>
					<div class="setting-box-row">
						<div class="setting-box-col">
							<lib-control-button class="setting-control setting-save" @click="${this.saveChanges.bind(this)}">Save</lib-control-button>
						</div>
					</div>
				` : ''}
			</div>
        `;
	}

// 0: { id: "1", name: "name", value: "My Site", type: "string" }
// 1: { id: "2", name: "home_page", value: 1, type: "int" }
// 2: { id: "3", name: "google_analytics_code", value: "", type: "string" }
// 3: { id: "4", name: "allow_registration", value: false, type: "bool" }
// 4: { id: "5", name: "manual_activation", value: false, type: "bool" }
// 5: { id: "6", name: "activation_email", value: "<html><head><title>**server_name** - Activate Acco…on_link**</a><p>**server_name**</p></body></html>", type: "string" }
// 6: { id: "7", name: "registration_email", value: "<html><head><title>**server_name** - Account Regis…stration.</p><p>**server_name**</p></body></html>", type: "string" }
// 7: { id: "8", name: "activate_user_email", value: "<html><head><title>**server_name** - Activate Acco…n is set.</p><p>**server_name**</p></body></html>", type: "string" }
// 8: { id: "9", name: "cookie_message", value: "", type: "string" }
// 9: { id: "10", name: "cookie_message_button", value: "", type: "string" }
// 10: { id: "11", name: "forgot_password_email", value: "<html><head><title>**server_name** - Password Rese…ink**">** forgot_password_link **</a ></body ></html > ", type: "string"}
// 11: { id: "12", name: "icon_position", value: "tl", type: "string" }

	connected() {
		console.log('dsd');
		this.getSetting();
	}

	getSetting() {
		this._request.get('setting').then((res) => {
			for (let i = 0; i < res.data.data.length; i++) this._settings[res.data.data[i].name] = res.data.data[i];
			this.updateTemplate();
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}

	updateSetting(name, ev) {
		this._settings[name].value = this._settings[name].type === 'bool' ? !!ev.target.value : (this._settings[name].type === 'int' ? parseInt(ev.target.value) : ev.target.value);
		this.updateTemplate();
	}

	saveChanges(ev) {
		this._request.patch('setting', Object.values(this._settings)).then((res) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'success', text: 'Settings updated', icon: 'check' } }));
		}).catch((error) => {
			this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { type: 'error', text: error.data.message, icon: 'reportProblem' } }));
		});
	}
}

// bootstrap the class as a new web component
customElements.define('app-setting-index', AppSettingIndex);
