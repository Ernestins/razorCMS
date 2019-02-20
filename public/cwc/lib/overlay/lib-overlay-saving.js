import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

/**
 * @public @name LibOverlaySaving
 * @extends CustomHTMLElement
 * @description Application Web Component, adds a saving icon that self hides after X seconds
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 */
class LibOverlaySaving extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._showing;
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
					display: none;
					zIndex: -1;
					opacity: 0;
					position: fixed;
					bottom: 20px;
					right: 20px;
					height: 50px;
					width: 50px;
					transition: opacity 200ms ease-in-out;
				}

				#lib-overlay-saving .progress {
					display: block;
					height: 50px;
					width: 50px;
					border-radius: 50px;
					padding: 10px;
					background-color: #31c231;
					fill: white;
					box-sizing: border-box;
					box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
				}
			</style>

			<div id="lib-overlay-saving">
				<span class="progress" @click="${this.hide.bind(this)}">${LibIconMaterialDesign.check}</span>
			</div>
        `;
	}

	/**
     * @public @static @name properties
	 * @description Properties function to return web components properties
	 * @return Object Web component api properties
	 */
	static get observedAttributes() { return ['timeout'] }

	attributeChanged(attribute, oldValue, newValue) {
		this._timeout = newValue;
	}

	connected() {
		this.style.display = 'none';
		this.style.zIndex = -1;
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	show(ev) {
		this.dispatchEvent(new CustomEvent('show'));

		// auto hide it
		clearTimeout(this._showing);

		// add it
		this.style.display = 'block';
		this.style.zIndex = 901;

		// show it
		setTimeout(() => {
			this.style.opacity = 1;

			this._showing = setTimeout(() => this.hide(ev), parseInt(this.hasAttribute('tiemout') ? this.getAttribute('timeout') : 3000));
		}, 50);
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	hide(ev) {
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
customElements.define('lib-overlay-saving', LibOverlaySaving);
