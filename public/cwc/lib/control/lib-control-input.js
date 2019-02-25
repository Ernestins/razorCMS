import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';

/**
 * @public @name LibControlInput
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
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

		this.value = this.hasAttribute('value') ? value : undefined;
		this.invalid = this.hasAttribute('invalid') ? true : false;
		this.valTimeout;
	}

	static template() {
		return html`
			<style>
                :host { display: inline-block; width: 100%; height: inherit; min-height: 62px; }
                :host([disabled]) { opacity: 0.6; }
				#lib-control-input { height: 100%; width: 100%; }
				#lib-control-input .input-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }
				#lib-control-input .input-container label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }
				#lib-control-input .input-container input { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }
				#lib-control-input .input-container textarea { padding: 4px; font-size: 14px; box-sizing: border-box; width: 100%; height: 100%; background-color: transparent; display: block; border: 1px solid #aaa; min-height: 30px; }
				#lib-control-input .input-container[invalid] input { border-color: #cd1918 !important; color: #cd1918 !important; }
				#lib-control-input .input-container[invalid] textarea { border-color: #cd1918 !important; color: #cd1918 !important; }
				#lib-control-input .input-container[invalid] label { color: #cd1918 !important; }
				#lib-control-input .input-container .error { display: block; font-size: 11px; line-height: 12px; color: #cd1918; overflow: hidden; position: absolute; bottom: 0; left: 0; opacity: 0; }
				#lib-control-input .input-container[invalid] .error { opacity: 1; }
			</style>

			<div id="lib-control-input">
				<div class="input-container" ?invalid="${this.invalid}">
					<label ?invisible="${!this.hasAttribute('label')}">${this.getAttribute('label')}</label>
					${this.getAttribute('type') === 'textarea' ? html`
						<textarea name="${this.getAttribute('name')}"
							.value="${this.value === undefined ? '' : this.value}"
							@input="${this._event.bind(this)}"
							@keydown="${this._event.bind(this)}"
							@keyup="${this._event.bind(this)}"
							@change="${this._event.bind(this)}"
						>${this.value === undefined ? '' : this.value}</textarea>
					` : html`
						<input name="${this.getAttribute('name')}"
                            type="${this.getAttribute('type')}"
							.value="${this.value === undefined ? '' : this.value}"
							@input="${this._event.bind(this)}"
							@keydown="${this._event.bind(this)}"
							@keyup="${this._event.bind(this)}"
							@change="${this._event.bind(this)}"
						>
					`}
					<span class="error">${this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : (this.hasAttribute('required') ? 'Required' : 'Invalid')}</span>
				</div>
			</div>
		`;
	}

	static get observedProperties() { return ['value'] }

	propertyChanged(property, oldValue, newValue) {
		this._validate(this.value);
		this.updateTemplate();
	}

	static get observedAttributes() { return ['label', 'name', 'type', 'invalid-message', 'required'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}

	connected() {
		if (this.hasAttribute('validate-on-load') && (!this.value || this.value.length < 1)) {
			this._validate(this.value);
			this.updateTemplate();
		}
	}

	_event(ev) {
        ev.stopPropagation();

        if (this.hasAttribute('disabled')) return;

        if (ev.type == 'input') {
			this.value = ev.target.value;
			clearTimeout(this.valTimeout);
			this.valTimeout = setTimeout(() => {
				this._validate(this.value)
				this.updateTemplate();
			}, 250);
		}

		this.dispatchEvent(new CustomEvent(ev.type, { detail: ev }));
	}

	_validate(value) {
		this.invalid = this.hasAttribute('regex') && !((new RegExp(this.getAttribute('regex'))).test(value)) ? true : false;
		this.invalid = this.hasAttribute('required') ? (!value || value.length < 1 ? true : this.invalid) : (!value || value.length < 1 ? false : this.invalid);
        if (this.invalid) this.setAttribute('invalid', '');
        else this.removeAttribute('invalid');
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-input', LibControlInput);
