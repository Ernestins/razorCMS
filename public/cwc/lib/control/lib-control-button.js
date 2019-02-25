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

	static template() {
		return html`
			<style>
				:host {
					color: inherit;
					background-color: inherit;
					display: inline-block;
					border-radius: 3px;
					height: 30px;
					line-height: 30px;
					box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
					opacity: 0.9;
					padding: 0 8px;
					cursor: default;
                    font-size: 14px;
				}

				:host(:hover) {
					opacity: 1;
				}

				:host(:active) {
					box-shadow: none;
				}

				:host([disabled]) {
					pointer-events: none;
					cursor: not-allowed;
					opacity: 0.5;
				}

				#lib-control-button {
					display: inline-block;
					color: inherit;
					cursor: default;
					-webkit-touch-callout: none;
					-webkit-user-select: none;
					-khtml-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}
			</style>

			<div id="lib-control-button"><slot></slot></div>
		`;
	}

	static get observedAttributes() { return ['disabled'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-button', LibControlButton);
