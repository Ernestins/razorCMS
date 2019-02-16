import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

/**
 * @public @name LibControlCheckbox
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 * 
 * @example
 * <lib-control-checkbox checked-message="I do" unchecked-message="I do not" label="Hello" @change="${this.testt.bind(this)}"></lib-control-checkbox>
 */
class LibControlCheckbox extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this.value = false;

		this._label;
		this._checkedMessage;
		this._uncheckedMessage;
		this._invalidMessage;
	}

	template() {
		return html`
			<style>
				#lib-control-checkbox { display: inline-block; width: 100%; height: 62px; color: #222; fill: #222; }
                #lib-control-checkbox .checkbox-container { width: inherit; height: inherit; display: flex; flex-flow: column; }
				#lib-control-checkbox [invisible] { opacity: 0; }
				#lib-control-checkbox label { display: block; color: inherit; font-size: 14px; flex: 1 1; }
				#lib-control-checkbox .checkbox-holder { display: block; flex: 50 1; }
				#lib-control-checkbox .checkbox-holder .checkbox { float: left; width: 26px; height: 26px; display: inline-block; fill: inherit; }
				#lib-control-checkbox .checkbox-holder .check-message { color: inherit; line-height: 30px; padding: 5px; }
				#lib-control-checkbox .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; flex: 1 1; }
			</style>

			<div id="lib-control-checkbox">
				<div class="checkbox-container">
					<label ?invisible="${!this._label}">${this._label}</label>
					<slot></slot>
					<div class="checkbox-holder">
						<span class="checkbox" @click="${this._changeEvent.bind(this)}">${this.value ? LibIconMaterialDesign.checkBox : LibIconMaterialDesign.checkBoxOutlineBlank}</span>	
						<span class="check-message" @click="${this._changeEvent.bind(this)}">${this.value ? this._checkedMessage : this._uncheckedMessage}</span>
					</div>
					<span class="error">${this._invalidMessage ? this._invalidMessage : 'Invalid'}</span>	
				</div>
			</div>
		`;
	}

	static get observedProperties() { return ['value'] }

	static get observedAttributes() { return ['label', 'checked-message', 'unchecked-message'] }

	connected() {
		this._label = this.hasAttribute('label') ? this.getAttribute('label') : '';
		this._checkedMessage = this.hasAttribute('checked-message') ? this.getAttribute('checked-message') : '';
		this._uncheckedMessage = this.hasAttribute('unchecked-message') ? this.getAttribute('unchecked-message') : '';
		this._invalidMessage = this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : '';
		this._validateOnLoad = this.hasAttribute('validate-on-load') ? true : false;
	}

	propertyChanged(property, oldValue, newValue) {
		if (!this.dom || oldValue === newValue) return;
		this.updateTemplate();
	}

	attributeChanged(attribute, oldValue, newValue) {
		switch (attribute) {
			case 'label': this._label = newValue; break;
			case 'checked-message': this._checkedMessage = newValue; break;
			case 'unchecked-message': this._uncheckedMessage = newValue; break;
			case 'invalid-message': this._invalidMessage = newValue; break;
		}
		this.updateTemplate();
	}

	_changeEvent(ev) {
		this.value = !this.value;
		this.updateTemplate();
		ev.stopPropagation();
		this.dispatchEvent(new CustomEvent('change', { detail: ev }));
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-checkbox', LibControlCheckbox);
