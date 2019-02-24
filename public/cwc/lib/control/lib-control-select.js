import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';

/**
 * @public @name LibControlSelect
 * @extends CustomHTMLElement
 * @description Component module drawer settings for adding element attributes to component modules
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 *
 * @example
 * <lib-control-select label="Hello" empty-option="Nothing" @change="${this.testt.bind(this)}">
 * 		<option value="1">One</option>
 * 		<option value="2">Two</option>
 * 	</lib-control-select>
 */
class LibControlSelect extends CustomHTMLElement {

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
                ${this.host()} { display: inline-block; width: 100%; height: 62px; }
				#lib-control-select { width: inherit; height: inherit; }
				#lib-control-select .select-container { width: inherit; height: inherit; display: inline-block; padding: 20px 0 12px 0; box-sizing: border-box; position: relative; }
				#lib-control-select [invisible] { opacity: 0; }
				#lib-control-select label { display: block; height: 20px; color: #222; font-size: 14px; overflow: hidden; position: absolute; top: 0; left: 0; }
				#lib-control-select select { padding: 4px; width: 100%; height: 100%; font-size: 14px; background-color: transparent; display: block; border: 1px solid #aaa; }
				#lib-control-select .error { display: block; opacity: 0; font-size: 10px; line-height: 12px; color: red; overflow: hidden; position: absolute; bottom: 0; left: 0; }
			</style>

			<div id="lib-control-select">
				<div class="select-container">
					<label ?invisible="${!this.hasAttribute('label')}">${this.getAttribute('label')}</label>
					<select @change="${this._changeEvent.bind(this)}" .value="${this.value}"></select>
					<span class="error">${this.hasAttribute('invalid-message') ? this.getAttribute('invalid-message') : (this.hasAttribute('required') ? 'Required' : 'Invalid')}</span>
				</div>
			</div>
		`;
	}

	static get observedProperties() { return ['value'] }

	propertyChanged(property, oldValue, newValue) {
		this.updateTemplate();
	}

	static get observedAttributes() { return ['label', 'invalid-message', 'required'] }

	attributeChanged(attribute, oldValue, newValue) {
		this.updateTemplate();
	}

	templateUpdated() {
		let options = this.innerHTML;

		if (this.hasAttribute('empty-option')) options = '<option value="">' + this.getAttribute('empty-option') + '</option>' + options;

		let select = this.dom().querySelector('select');
		select.innerHTML = options;
		select.value = this.value;
	}

	_changeEvent(ev) {
        if (this.hasAttribute('disabled')) return;

		this.value = ev.target.value;
		ev.stopPropagation();
		this.dispatchEvent(new CustomEvent('change', { detail: ev }));
	}
}

// bootstrap the class as a new web component
customElements.define('lib-control-select', LibControlSelect);