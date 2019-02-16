import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';

/**
 * @public @name LibControlInput
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 * 
 * @example
 * <lib-control-input label="Hello" type="number" regex="^[a-z]+$" invalid-message="This is wrong" @input="${this.testt.bind(this)}"></lib-control-input>
 * <lib-control-input label="Hello" type="textarea" regex="^[a-z]+$" invalid-message="This is wrong" @input="${this.testt.bind(this)}"></lib-control-input>
 */
class LibControlInput extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this.value;
		this.invalid;
		this.valTimeout;

		this._label;
		this._name;
		this._type;
		this._regex;
		this._invalidMessage;
		this._required;
		this._validateOnLoad;
	}

	template() {
		return html`
			<style>
                #lib-control-input { display: inline-block; width: 100%; height: inherit; min-height: 62px; }
				#lib-control-input .input-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }
				#lib-control-input label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }
				#lib-control-input input { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }
				#lib-control-input textarea { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }
				#lib-control-input [invalid] { border-color: red; }
				#lib-control-input .error { display: block; font-size: 10px; line-height: 12px; color: red; overflow: hidden; position: absolute; bottom: 0; left: 0; }
				#lib-control-input [invisible] { opacity: 0; }
			</style>

			<div id="lib-control-input">
				<div class="input-container">
					<label ?invisible="${!this._label}">${this._label}</label>
					${this._type === 'textarea' ? html`
						<textarea id="${this._id}" name="${this._name}" ?invalid="${this.invalid}"
							@input="${this._event.bind(this)}"
							@keydown="${this._event.bind(this)}"
							@keyup="${this._event.bind(this)}"
							@change="${this._event.bind(this)}"
						>${this.value === undefined ? '' : this.value}</textarea>
					` : html`
						<input id="${this._id}" name="${this._name}" type="${this._type}" ?invalid="${this.invalid}"
							.value="${this.value === undefined ? '' : this.value}"
							@input="${this._event.bind(this)}"
							@keydown="${this._event.bind(this)}"
							@keyup="${this._event.bind(this)}"
							@change="${this._event.bind(this)}"
						>
					`}
					<span class="error" ?invisible="${!this.invalid}">${this._invalidMessage ? this._invalidMessage : 'Invalid'}</span>	
				</div>
			</div>
		`;
	}

	static get observedProperties() { return ['value', 'invalid'] }

	static get observedAttributes() { return ['label', 'name', 'type', 'regex', 'invalid-message'] }

	connected() {
		this.style.display = 'inline-block';

		this._label = this.hasAttribute('label') ? this.getAttribute('label') : '';
		this._name = this.hasAttribute('name') ? this.getAttribute('name') : '';
		this._type = this.hasAttribute('type') ? this.getAttribute('type') : '';
		this._regex = this.hasAttribute('regex') ? this.getAttribute('regex') : '';
		this._invalidMessage = this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : '';
		this._required = this.hasAttribute('required') ? true : false;
		this._validateOnLoad = this.hasAttribute('validate-on-load') ? true : false;

		if (this._validateOnLoad && (!this.value || this.value.length < 1)) this._validate(this.value);  
	}

	propertyChanged(property, oldValue, newValue) {
		if (!this.dom || oldValue === newValue) return;
		this.updateTemplate();
	}

	attributeChanged(attribute, oldValue, newValue) {
		switch (attribute) {
			case 'label': this._label = newValue; break;
			case 'name': this._name = newValue; break;
			case 'type': this._type = newValue; break;
			case 'regex': this._regex = newValue; break;
			case 'invalid-message': this._invalidMessage = newValue; break;
			case 'required': this._required = newValue ? true : undefined; break;
			case 'validate-on-load': this._validateOnLoad = newValue ? true : undefined; break;
		} 

		this.updateTemplate();
	}

	_event(ev) {
		if (ev.type == 'input') {
			this.value = ev.target.value;
			clearTimeout(this.valTimeout);
			this.valTimeout = setTimeout(() => {
				this._validate(this.value);
				this.updateTemplate();
			},500);
		}
		ev.stopPropagation();
		this.dispatchEvent(new CustomEvent(ev.type, { detail: ev }));
	}

	_validate(value) {
		this.invalid = this._regex && !((new RegExp(this._regex)).test(value)) ? true : false;
		this.invalid = this._required ? (!value || value.length < 1 ? true : this.invalid) : (!value || value.length < 1 ? false : this.invalid);
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-input', LibControlInput);
