import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';

/**
 * @public @name LibControlSwitch
 * @extends CustomHTMLElement
 * @description Component extention to set some hard styling on button to create a flat button
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 *
 * @example
 * <lib-control-switch>Button</lib-control-switch>
 */
class LibControlSwitch extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this.value = this.hasAttribute('value') ? true : false;
	}

	template() {
		return html`
			<style>
			    ${this.host()} {
					display: inline-block;
					width: 100%;
					height: 62px;
				}

				#lib-control-switch {
					width: inherit;
					height: inherit;
					display: block;
				}

				#lib-control-switch [invisible] { opacity: 0; }
				#lib-control-switch label { display: block; height: 20px; color: inherit; font-size: 14px; flex: 1 1; }

				#lib-control-switch .switch-box {
					margin: 1px;
					width: 78px;
					height: 28px;
					display: block;
					position: relative;
					border: 1px solid #222;
					box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);
				}

				#lib-control-switch .switch-box[disabled] {
					opacity: 0.6;
					cursor: not-allowed;
				}

				#lib-control-switch .switch-box .switch-blob {
					display: block;
					height: 26px;
				    width: 36px;
					color: #fac0c0;
					background-color: #222;
					position: absolute;
					left: 1px;
					top: 1px;
					text-align: center;
					font-size: 12px;
					line-height: 26px;
					transition: left 0.1s ease-in-out;
					cursor: default;
				}

				#lib-control-switch .switch-box[disabled] .switch-blob { cursor: not-allowed; }

				#lib-control-switch .switch-box .switch-blob[on] { left: 41px; color: #83fa83; }
			</style>

			<div id="lib-control-switch">
				<label ?invisible="${!this.hasAttribute('label')}">${this.getAttribute('label')}</label>
				<div class="switch-box" @click="${this._changeEvent.bind(this)}" ?disabled="${this.hasAttribute('disabled')}">
					<div class="switch-blob" ?on="${this.value}">${this.value ? 'ON' : 'OFF'}</div>
				</div>
			</div>
		`;
	}

	static get observedProperties() { return ['value'] }

    propertyChanged(property, oldValue, newValue) {
        this.updateTemplate();
    }

	static get observedAttributes() { return ['disabled', 'label'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}

	_changeEvent(ev) {
        if (this.hasAttribute('disabled')) return;

		this.value = !this.value;
		this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-switch', LibControlSwitch);
