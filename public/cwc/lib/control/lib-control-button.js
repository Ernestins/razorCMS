import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';

/**
 * @public @name LibControlButton
 * @extends CustomHTMLElement
 * @description Component extention to set some hard styling on button to create a flat button
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
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
					height: 32px;
					box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
					border: 1px solid rgba(0, 0, 0, 0.15);
					opacity: 0.9;
					line-height: 32px;
					padding: 0px 8px;
					box-sizing: border-box;
					cursor: default;
				}

				${this.host(`:hover`)} { opacity: 1; }
				${this.host(`:active`)} { box-shadow: none; }
				${this.host(`[disabled]`)} { opacity: 0.6; box-shadow: none; }

				#lib-control-button {
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
		switch (attribute) {
			case 'disabled': this.style.pointerEvents = newValue !== null ? 'none' : 'auto'; break;
		}
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-button', LibControlButton);
