import { CustomHTMLElement, html } from '../../node_modules/custom-web-component/index.js';
import LibResourceRequest from '../lib/resource/lib-resource-request.js';
import LibResourceStore from '../lib/resource/lib-resource-store.js';
import '../lib/overlay/lib-overlay.js';

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
		this._store = new LibResourceStore();
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    template() {
        return html`
            <style>
				#app-root .modal .inputs { padding: 0 20px; }
            </style>

			<div id="app-root">
				${this.user ? html`
					<razilo-panel user="{{user}}" on-action="doAction"></razilo-panel>
					<razilo-dashboard current-page="{{currentPage}}"></razilo-dashboard>
					<razilo-profile-edit user="{{user}}"></razilo-profile-edit>
					<razilo-page-add></razilo-page-add>
					<razilo-page-copy current-page="{{currentPage}}"></razilo-page-copy>
				` : ''}	
				
				<paper-toast id="toast" color$="{{toastColor}}"></paper-toast>

				<lib-overlay id="login-overlay">
					<paper-dialog id="loginModal" class="modal">
						<h2>Razilo Login</h2>
						<div class="inputs">
							<paper-input id="loginUsername" label="Email" type="text" on-keyup="doLogin"></paper-input>
							<paper-input id="loginPassword" label="Password" type="password" on-keyup="doLogin"></paper-input>
						</div>
						<div class="buttons">
							<paper-button dialog-dismiss>Cancel</paper-button>
							<paper-button dialog-confirm autofocus on-click="doLogin" color="green">Log In</paper-button>
						</div>
					</paper-dialog>
				</lib-overlay-notify>
			</div>
        `;
	}

	templateUpdated() {
		setTimeout(() => {
			this.dom.querySelector('#login-overlay').show();
		}, 1000);
	}
}

// bootstrap the class as a new web component
customElements.define('app-root', AppRoot);