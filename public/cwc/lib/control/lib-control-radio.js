import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

/**
 * @public @name LibControlRadio
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 *
 * @example
 * <lib-control-radio label="Hello" value="1" @change="${this.test.bind(this)}">
 * 		<lib-control-radio-option value="1">One</lib-control-radio-option>
 * 		<lib-control-radio-option value="2">Two</lib-control-radio-option>
 * 	</lib-control-radio>
 */

class LibControlRadioOption extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this.value = this.hasAttribute('value') ? this.getAttribute('value') : this.value;
	}

	static template() {
		return html`
			<style>
                :host { display: inline-block; width: fit-content; line-height: 40px; height: 30px; }
				#lib-control-radio-option { display: inline-block; height: 30px; padding: 0 5px; }
				#lib-control-radio-option .radio-button-icon { display: inline-block; width: 26px; height: 26px; fill: #3157ae; }
				#lib-control-radio-option .radio-button-label { display: inline-block; font-size: 14px; color: #222; position: relative; top: -7px; }
			</style>

			<div id="lib-control-radio-option">
				<span class="radio-button-icon" @click="${this._clickEvent.bind(this)}">${this.hasAttribute('selected') ? LibIconMaterialDesign.radioButtonChecked : LibIconMaterialDesign.radioButtonUnchecked}</span>
				<span class="radio-button-label" @click="${this._clickEvent.bind(this)}"><slot></slot></span>
			</div>
		`;
	}

	static get observedAttributes() { return ['selected'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}

	_clickEvent(ev) {
        if (this.hasAttribute('selected')) return;
        ev.stopPropagation();
		this.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: this }));
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-radio-option', LibControlRadioOption);

class LibControlRadio extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this.value = this.hasAttribute('value') ? this.getAttribute('value') : this.value;
	}

	template() {
		return html`
			<style>
                :host { display: inline-block; width: 100%; height: 62px; }
				#lib-control-radio .radio-container { width: inherit; height: inherit; display: flex; flex-flow: column; }
				#lib-control-radio [invisible] { opacity: 0; }
				#lib-control-radio label { display: block; color: #222; font-size: 14px; flex: 50 1; }
				#lib-control-radio .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; flex: 1 1; }
			</style>

			<div id="lib-control-radio">
				<div class="radio-container">
					<label ?invisible="${!this.hasAttribute('label')}">${this.getAttribute('label')}</label>
					<div id="radio-buttons" class="radio-buttons" @change="${this._changeEvent.bind(this)}">
						<slot></slot>
					</div>
					<span class="error">${this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : (this.hasAttribute('required') ? 'Required' : 'Invalid')}</span>
				</div>
			</div>
		`;
	}

	static get observedProperties() { return ['value'] }

	attributeChanged(property, oldValue, newValue) {
		this.updateTemplate();
	}

	static get observedAttributes() { return ['label', 'invalid-message', 'required'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}

	templateUpdated() {
		for (let key in this.childNodes) {
			if (!this.childNodes[key].value) continue;
			if (this.value === this.childNodes[key].value) this.childNodes[key].setAttribute('selected', '');
			else this.childNodes[key].removeAttribute('selected');
		}
	}

	_changeEvent(ev) {
        if (this.hasAttribute('disabled')) return;

		if (this.value === ev.detail.value) return;

		for (let key in this.childNodes) {
			if (!this.childNodes[key].hasAttribute || !this.childNodes[key].hasAttribute('selected')) continue;
			this.childNodes[key].removeAttribute('selected');
		}

		this.value = ev.detail.value;
		ev.detail.setAttribute('selected', '');

		ev.stopPropagation();
		this.dispatchEvent(new CustomEvent('change', { detail: ev }));
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-radio', LibControlRadio);
