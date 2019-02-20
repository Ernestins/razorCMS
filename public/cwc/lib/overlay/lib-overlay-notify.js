import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
class LibOverlayNotify extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._showing;
		this._type = this.hasAttribute('type') ? this.getAttribute('type') : undefined;
		this._text = this.hasAttribute('text') ? this.getAttribute('text') : undefined;
		this._icon = this.hasAttribute('icon') ? this.getAttribute('icon') : undefined;
		this._timeout = this.hasAttribute('timeout') ? this.getAttribute('timeout') : 3000;
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    template() {
		return html`
			<style>
				${this.host()} {
					opacity: 0;

					margin-left: 20px;
					position: fixed;
					bottom: 20px;
					right: 20px;
					min-height: 50px;
					max-height: 500px;
					min-width: 50px;
					max-width: 500px;
					transition: opacity 200ms ease-in-out;

					width: fit-content;
					height: fit-content;
				}

				#lib-overlay-notify .notify-message {
					display: block;
					min-height: 50px;
					max-height: 500px;
					min-width: 50px;
					max-width: 500px;
					width: fit-content;
					height: fit-content;
					border-radius: 5px;
					padding: 15px;
					background-color: #444;
					fill: white;
					color: white;
					box-sizing: border-box;
					box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
				}

				#lib-overlay-notify .notify-message[type="done"], #lib-overlay-notify .notify-message[type="success"] {
					background-color: #31c231;
				}

				#lib-overlay-notify .notify-message[type="danger"], #lib-overlay-notify .notify-message[type="error"] {
					background-color: #ff3737;
				}

				#lib-overlay-notify .notify-message[type="warning"], #lib-overlay-notify .notify-message[type="exception"] {
					background-color: #ed851a;
				}

				#lib-overlay-notify .notify-message[type="info"], #lib-overlay-notify .notify-message[type="notice"] {
					background-color: #1a78ed;
				}

				#lib-overlay-notify .notify-message .notify-icon {
					display: inline-block;
					width: 20px;
					height: 20px;
					vertical-align: middle;
				}
			</style>

			<div id="lib-overlay-notify">
				<div class="notify-message" type="${this._type}" @click="${this.hide.bind(this)}">
					${this._icon ? html`<span class="notify-icon">${LibIconMaterialDesign[this._icon]}</span>` : ''}
					<span class="notify-text">${this._text}</span>
				</div>
			</div>
        `;
	}

	/**
     * @public @static @name properties
	 * @description Properties function to return web components properties
	 * @return Object Web component api properties
	 */
	static get observedAttributes() { return ['type', 'timeout'] }

	connected() {
		this.style.display = 'none';
		this.style.zIndex = -1;
	}

	attributeChanged(attribute, oldValue, newValue) {
		switch (attribute) {
			case 'type': this._type = newValue; break;
			case 'text': this._text = newValue; break;
			case 'icon': this._icon = newValue; break;
			case 'timeout': this._timeout = newValue !== null ? parseInt(newValue) : undefined; break;
		}

		this.updateTemplate();
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	show(type, text, icon, timeout) {
		// auto hide it
		clearTimeout(this._showing);

		if (type || text || icon) {
			this._type = type;
			this._text = text;
			this._icon = icon;
			this.updateTemplate();
		}

		this.dispatchEvent(new CustomEvent('show'));

		// add it
		this.style.display = 'block';
		this.style.zIndex = 1051;

		// show it
		setTimeout(() => {
			this.style.opacity = 1;

			if (!timeout && !this._timeout) return;

			this._showing = setTimeout(() => this.hide(), parseInt(timeout || this._timeout));
		}, 50);
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	hide() {
		if (this.style.display === 'none') return;

		this.dispatchEvent(new CustomEvent('hide'));

		// add it
		this.style.opacity = 0;

		// show it
		setTimeout(() => {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}, 250);
	}
}

// bootstrap the class as a new web component
customElements.define('lib-overlay-notify', LibOverlayNotify);
