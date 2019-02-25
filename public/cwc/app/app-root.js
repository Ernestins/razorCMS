import { CustomHTMLElement, html } from '../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../lib/resource/lib-resource-request.js';
import LibResourceStore from '../lib/resource/lib-resource-store.js';
import '../lib/overlay/lib-overlay.js';
import '../lib/overlay/lib-overlay-notify.js';
import '../lib/control/lib-control-input.js';
import '../lib/control/lib-control-button.js';

import './app-panel.js';
import './app-dashboard.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppRoot extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		console.log('Powered by CWC');

		this._request = new LibResourceRequest();
		this._request.setBaseUrl(this.getAttribute('api'));

		this._store = new LibResourceStore();
		this._store.setItem('api', this.getAttribute('api'));
		this._store.setItem('baseUrl', this.getAttribute('base-url'));
		this._store.setItem('currentPath', this.getAttribute('current-path'));
		this._store.setItem('currentPage', this.getAttribute('current-page'));

		this._user;

	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    static template() {
        return html`
            <style>
				#app-root .login-box { padding: 20px; background-color: white; width: 200px; }
				#app-root .login-box h2 { margin: 0px; font-weight: normal; }
				#app-root .login-box .login-inputs { padding: 5px 0px; }
				#app-root .login-box .login-inputs .input { display: block; padding: 5px 0px; width: 100%; }
				#app-root .login-box .login-buttons .cancel { background-color: red; color: white; }
				#app-root .login-box .login-buttons .login { background-color: green; color: white; float: right; }
            </style>

			<div id="app-root" @message="${this._message.bind(this)}">
				${this._user ? html`
					<app-panel @routechange="${this._navigate.bind(this)}" @showdashboard="${this._showDashboard.bind(this)}"></app-panel>
					<app-dashboard id="dashboard" .route="${this._route}"></app-dashboard>
				` : ''}

				<lib-overlay id="login-overlay">
					<div class="login-box">
						<h2>Razilo Login</h2>
						<div class="login-inputs">
							<lib-control-input id="login-username" class="input" label="Email" type="text" @keyup="${this.login.bind(this)}"></lib-control-input>
							<lib-control-input id="login-password" class="input" label="Password" type="password" @keyup="${this.login.bind(this)}"></lib-control-input>
						</div>
						<div class="login-buttons">
							<lib-control-button class="cancel" @click="${this.loginCancel.bind(this)}">Cancel</lib-control-button>
							<lib-control-button class="login" @click="${this.login.bind(this)}">Log In</lib-control-button>
						</div>
					</div>
				</lib-overlay>

				<lib-overlay-notify id="notify-overlay"></lib-overlay-notify>
			</div>
        `;
	}

	connected() {
		if (window.location.pathname == '/login') setTimeout(() => this.shadowRoot.querySelector('#login-overlay').show(), 1000);
		else this.authenticate();
	}

	login(ev) {
		if (ev.type === 'keyup' && ev.detail.keyCode !== 13) return;

		this._request.post('login', { username: this.shadowRoot.querySelector('#login-username').value, password: this.shadowRoot.querySelector('#login-password').value }).then((response) => {
			this._user = response.data;
			this._store.setItem('user', response.data);
			location.href = location.href.replace('/login', '?admin');
		}).catch((error) => {
			this.shadowRoot.querySelector('#login-username').value = '';
			this.shadowRoot.querySelector('#login-password').value = '';
			this.shadowRoot.querySelector('#notify-overlay').show('error', error.data.message, 'reportProblem');
		});
	}

	logout() {
		this._user = undefined;
		this._store.deleteItem('user');
		this._request.deleteToken();
	}

	authenticate() {
		this._request.get('ping').then((response) => {
			this._user = this._store.getItem('user');
			this.updateTemplate();
		}).catch((error) => {
			this.logout();
		});
	}

	_navigate(ev) {
		this._route = ev.target.route;
		this.updateTemplate();
	}

	_showDashboard(ev) {
		this.shadowRoot.querySelector('#dashboard').show();
	}

	/**
	 * @private @name _message
	 * @description show a notification message that self clears
     * @param {Event} ev The event that kicked the function
	 */
	_message(ev) {
		console.log(ev);
		this.shadowRoot.querySelector('#notify-overlay').show(ev.detail.type, ev.detail.text, ev.detail.icon);
	}

	loginCancel(ev) {
		this.shadowRoot.querySelector('#login-overlay').hide();
	}
}

// bootstrap the class as a new web component
customElements.define('app-root', AppRoot);
