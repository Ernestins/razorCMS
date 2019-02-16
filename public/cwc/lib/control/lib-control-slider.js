import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';

/**
 * @public @name LibControlSlider
 * @extends CustomHTMLElement
 * @description Component extention to set some hard styling on button to create a flat button
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 ulsmith.net (ulsmith.net)
 * 
 * @example
 * <lib-control-slider></lib-control-slider>
 */
class LibControlSlider extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._disabled;
		this._minimum = 0;
		this._maximum = 100;
		this._position;
	}

	template() {
		return html`
			<style>

			    :host, lib-control-slider { 
					display: inline-block;
					width: 100%;
					height: 62px;
					background-color: #eee;
				}

				#lib-control-slider {
					width: inherit;
					height: inherit;
					display: block;
				}

				#lib-control-slider [invisible] { opacity: 0; }
				#lib-control-slider label { display: block; height: 20px; color: inherit; font-size: 14px; flex: 1 1; }
				

				#lib-control-slider .slider-box {
					width: inherit;
					height: 28px;
					display: block;
					position: relative;
					/* box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75); */
					border-radius: 100px;
					background-color: #ccc;
				}

				#lib-control-slider .slider-box .slider-blob {
					width: 28px;
					height: 28px;
					display: block;
					background-color: #aaa;
					border-radius: 100px;
				}
			</style>

			<div id="lib-control-slider">
				<label ?invisible="${!this._label}">${this._label}</label>
				<div id="slider-box" class="slider-box">
					<div 
						id="slider-blob"
						class="slider-blob"
						@mousedown="${this._startMove.bind(this)}"
						@mouseup="${this._stopMove.bind(this)}"
						@mousemove="${this._doMove.bind(this)}"
					></div>
				</div>
			</div>
		`;
	}

	static get observedAttributes() { return ['disabled'] }

	attributeChanged(attribute, oldValue, newValue) {
		switch (attribute) {
			case 'disabled': this._disabled = newValue !== null ? true : false; break;
		}

		this.updateTemplate();
	}

	_startMove(ev) {
		console.log(ev);
		// this._position = ev.target.

		// width / (max - min) // steps
	}

	_doMove(ev) {
		console.log(ev);
	}

	_stopMove(ev) {
		console.log(ev);
	}

	// _mouseinEvent(ev) {
	// 	ev.stopPropagation();
	// 	this.dispatchEvent(new CustomEvent('mousein', { detail: ev }));
	// }

	// _mouseoutEvent(ev) {
	// 	ev.stopPropagation();
	// 	this.dispatchEvent(new CustomEvent('mouseout', { detail: ev }));
	// }

	// _mouseoverEvent(ev) {
	// 	ev.stopPropagation();
	// 	this.dispatchEvent(new CustomEvent('mouseover', { detail: ev }));
	// }

	// _clickEvent(ev) {
	// 	ev.stopPropagation();
	// 	this.dispatchEvent(new CustomEvent('click', { detail: ev }));
	// }

	// _touchEvent(ev) {
	// 	ev.stopPropagation();
	// 	this.dispatchEvent(new CustomEvent('touch', { detail: ev }));
	// }
}

// bootstrap the class as a new web component
customElements.define('lib-control-slider', LibControlSlider);
