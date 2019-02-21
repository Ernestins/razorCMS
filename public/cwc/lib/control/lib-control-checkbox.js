import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

/**
 * @public @name LibControlCheckbox
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
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

		this.value = this.hasAttribute('value') ? true : false;
	}

	static template() {
		return html`
			<style>
				${this.host()} { display: inline-block; width: 100%; min-height: 62px; height: inherit; color: #222; fill: #222; }
                #lib-control-checkbox .checkbox-container { width: inherit; height: inherit; display: flex; flex-flow: column; }
				#lib-control-checkbox [invisible] { opacity: 0; }
				#lib-control-checkbox label { display: block; color: inherit; font-size: 14px; flex: 1 1; }
				#lib-control-checkbox .checkbox-holder { display: block; flex: 50 1; }
				#lib-control-checkbox .checkbox-holder .checkbox { float: left; width: 26px; height: 26px; display: inline-block; fill: inherit; }
				#lib-control-checkbox .checkbox-holder .check-message { color: inherit; line-height: 30px; padding: 5px; }
				#lib-control-checkbox .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; flex: 1 1; }
				#lib-control-checkbox .sub-content { display: block; height: fit-content; padding: 4px; box-sizing: border-box; font-size: 14px; font-style: italic; }
			</style>

			<div id="lib-control-checkbox">
				<div class="checkbox-container">
					<label ?invisible="${!this.hasAttribute('label') || (!this.hasAttribute('checked-message') && !this.hasAttribute('unchecked-message'))}">${this.getAttribute('label')}</label>
					<div class="checkbox-holder">
						<span class="checkbox" @click="${this._changeEvent.bind(this)}">${this.value ? LibIconMaterialDesign.checkBox : LibIconMaterialDesign.checkBoxOutlineBlank}</span>
						<span class="check-message" @click="${this._changeEvent.bind(this)}">${!this.hasAttribute('checked-message') && !this.hasAttribute('unchecked-message') ? this.getAttribute('label') : (this.value ? this.getAttribute('checked-message') : this.getAttribute('unchecked-message'))}</span>
					</div>
					<span class="error">${this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : (this.hasAttribute('required') ? 'Required' : 'Invalid')}</span>
					<div class="sub-content"><slot></slot></div>
				</div>
			</div>
		`;
	}

	static get observedProperties() { return ['value'] }

	propertyChanged(property, oldValue, newValue) {
		this.updateTemplate();
	}

	static get observedAttributes() { return ['label', 'checked-message', 'unchecked-message', 'required'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}

	_changeEvent(ev) {
        if (this.hasAttribute('disabled')) return;

		this.value = !this.value;
		this.updateTemplate();
		ev.stopPropagation();
		this.dispatchEvent(new CustomEvent('change', { detail: ev }));
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-checkbox', LibControlCheckbox);
