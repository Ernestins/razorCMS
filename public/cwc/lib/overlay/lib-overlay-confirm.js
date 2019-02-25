import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

import '../control/lib-control-button.js';

/**
 * @public @name LibOverlayConfirmSaving
 * @extends CustomHTMLElement
 * @description Application Web Component, adds a saving icon that self hides after X seconds
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
class LibOverlayConfirm extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._message = this.hasAttribute('message') ? this.getAttribute('message') : undefined;
		this._payload = this.hasAttribute('payload') ? this.getAttribute('payload') : undefined;
	}

	/**
	 * @public @static @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
	static template() {
		return html`
			<style>
				:host {
					display: none;
					z-index: -1;
					opacity: 0;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					transition: opacity 200ms ease-in-out;
				}

				#lib-overlay-confirm .overlay-backdrop {
					display: block;
					z-index: 1002;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: black;
					opacity: 0.2;
				}

				#lib-overlay-confirm .overlay-container {
					display: flex;
					align-items: center;
					justify-content: center;
					z-index: 1003;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

				#lib-overlay-confirm .overlay-container .overlay-content {
					position: relative;
					background-color: white;
					box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);
				}

				#lib-overlay-confirm .overlay-container .overlay-content .message { padding: 10px; }

				#lib-overlay-confirm .overlay-container .overlay-content .confirm-controls { height: 50px; display: flex; flex-flow: row; padding: 5px; }

				#lib-overlay-confirm .overlay-container .overlay-content .confirm-controls .confirm-control { height: 40px; flex: 1 1; text-align: center; line-height: 40px; color: white; margin: 5px; }		
				#lib-overlay-confirm .overlay-container .overlay-content .confirm-controls .confirm-yes { background-color: green; }		
				#lib-overlay-confirm .overlay-container .overlay-content .confirm-controls .confirm-no { background-color: red; }

				#lib-overlay-confirm .overlay-container .overlay-content .confirm-controls .confirm-icon {
					display: block;
					width: 40px;
					height: 40px;
					padding: 7px;
					box-sizing: border-box;
					fill: white;
				}
			</style>

			<div id="lib-overlay-confirm">
				<div class="overlay-backdrop"></div>
				<div id="container" class="overlay-container" @click="${this.hide.bind(this)}">
					<div class="overlay-content">
						<p class="message">${this._message}</p>
						<div class="confirm-controls">
							<lib-control-button class="confirm-control confirm-no" @click="${this._no.bind(this)}">
								<span class="confirm-icon">${LibIconMaterialDesign.clear}</span>
							</lib-control-button>
							<lib-control-button class="confirm-control confirm-yes" @click="${this._yes.bind(this)}">
								<span class="confirm-icon">${LibIconMaterialDesign.check}</span>
							</lib-control-button>
						</div>
					</div>
				</div>
			</div>
        `;
	}

	/**
     * @public @static @name properties
	 * @description Properties function to return web components properties
	 * @return Object Web component api properties
	 */
	static get observedAttributes() { return ['message', 'method', 'payload'] }

	attributeChanged(attribute, oldValue, newValue) {
		switch (attribute) {
			case 'message': this._message = newValue; break;
			case 'payload': this._payload = newValue; break;
		}

		this.updateTemplate();
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	toggle() {
		if (this.style.display === 'block') this.hide();
		else this.show();
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	show(message, payload) {
		if (this.style.display === 'block') return;

		if (message || method || payload) {
			this._message = message;
			this._payload = payload;
			this.updateTemplate();
		}

		this.dispatchEvent(new CustomEvent('show'));

		// add it
		this.style.display = 'block';
		this.style.zIndex = 1001;

		// show it
		setTimeout(() => this.style.opacity = 1, 50);
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	hide(ev) {
		if (this.style.display === 'none') return;

		// if we hide from event, make sure its a click to container
		if (!!ev && ev.target && ev.target.parentNode && ev.target.parentNode.id !== 'lib-overlay-confirm') return;

		this.dispatchEvent(new CustomEvent('hide'));

		// add it
		this.style.opacity = 0;

		// show it
		setTimeout(() => {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}, 250);
	}

	_yes(ev) {
		this.dispatchEvent(new CustomEvent('confirm', { detail: this._payload }));
		this.hide();
	}
	
	_no(ev) {
		this.hide();
	}
}

// bootstrap the class as a new web component
customElements.define('lib-overlay-confirm', LibOverlayConfirm);
