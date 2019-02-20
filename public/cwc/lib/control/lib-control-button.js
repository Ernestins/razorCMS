import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';

/**
 * @public @name LibControlButton
 * @extends CustomHTMLElement
 * @description Component extention to set some hard styling on button to create a flat button
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 *
 * @example
 * <lib-control-button>Button</lib-control-button>
 */
class LibControlButton extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();
	}

	template() {
		return html`
			<style>
				${this.host()} {
					color: inherit;
					background-color: inherit;
					width: inherit;
					display: inline-block;
					border-radius: 3px;
					height: 30px;
					line-height: 30px;
					box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);
					opacity: 0.9;
				}

				${this.host(`:hover`)} {
					opacity: 1;
				}

				${this.host(`:active`)} {
					box-shadow: none;
				}

				#lib-control-button button {
					border-style: inherit;
					color: inherit;
					background-color: inherit;
					width: inherit;
					height: inherit;
				    padding: 2px 8px;
				}

				#lib-control-button button:focus { outline:none; }
			</style>

			<div id="lib-control-button">
				<button ?disabled="${this.hasAttribute('disabled')}"><slot></slot></button>
			</div>
		`;
	}

	static get observedAttributes() { return ['disabled'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-button', LibControlButton);
