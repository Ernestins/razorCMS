import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';
import '../overlay/lib-overlay.js';
import '../control/lib-control-input.js';

/**
 * @public @name LibOverlayPickerYear
 * @extends CustomHTMLElement
 * @description Application Web Component, shows a time box with year picker, accepts wordy times too such as morning, now, midnight
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
class LibOverlayPickerYear extends CustomHTMLElement {

	constructor() {
		super();

		this.years = [];
		this.position = 0;
		this.opened = false;
		this.today = new Date();
		this.scrolling;

		this.format = this.hasAttribute('format') ? this.getAttribute('format') : 'yyyy';
		this.label = this.hasAttribute('label') ? this.getAttribute('label') : 'Year';
		this.value;
		this.date;
		this.limit = this.hasAttribute('limit') ? parseInt(this.getAttribute('limit')) : '400';
		this.required = false;
		this.disabled = false;
		this.invalid = false;
		this.selected;

		this._buildYears();
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    static template() {
		return html`
			<style>
				${this.host()} { display: block; }

				#lib-overlay-picker-year .picker-box { position: relative; width: 190px; height: 230px; }

				#lib-overlay-picker-year .inputs {
					width: 100%;
					display: inline-block;
					position: relative;
				}

				#lib-overlay-picker-year .inputs .icon {
					position: absolute;
					top: 50%;
					color: inherit;
				}

				#lib-overlay-picker-year .inputs .icon.open {
					right: 40px;
				}

				#lib-overlay-picker-year .inputs .icon.clear {
					right: 0px;
				}

				#lib-overlay-picker-year .inputs .input {
					width: 100%;
					display: inline-block;
					padding: 0 80px 0 0;
					box-sizing: border-box;
					z-index: 0;
				}

				#lib-overlay-picker-year .year-box {
					position: absolute;
					top: 80px;
					z-index: 0;
					background-color: #444;
					padding: 0;
					margin: 0px;
					height: 70px;
					width: 100%;
    				box-sizing: border-box;
				}

				#lib-overlay-picker-year .picker-year-box-mask {
					margin: 0;
					padding: 0;
					width: 190px;
					overflow: hidden;
				}

				#lib-overlay-picker-year .picker-year-box {
					margin: 0;
					padding: 10px 0;
					height: 230px;
					width: 250px;
					box-sizing: border-box;
					overflow-y: scroll;
				}

				#lib-overlay-picker-year .years {
					margin-top: 70px;
    				margin-bottom: 70px;
					height: fit-content;
				}

				#lib-overlay-picker-year .years .year {
					display: block;
					height: 40px;
					line-height: 40px;
					font-size: 40px;
					padding: 15px 0px 15px 50px;
					color: #ddd;

					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}

				#lib-overlay-picker-year .icon {
					height: 30px;
					width: 30px;
					padding: 3px;
					border-radius: 50px;
					cursor: pointer;
					display: inline-block;
					box-sizing: border-box;
					color: inherit;
					position: absolute;
					top: 50%;
					margin-top: -12px;
					background-color: #222;
					fill: white;
					padding: 6px;
				}

				#lib-overlay-picker-year .icon[disabled] {
					opacity: 0.6;
				}

				#lib-overlay-picker-year .arrow {
				    position: absolute;
					width: 30px;
					height: 30px;
					left: 50%;
					margin: 0 0 0 -15px;
					padding: 0;
					cursor: pointer;
					color: #444;
				}

				#lib-overlay-picker-year .arrow[up] {
					top: 0px;
				}

				#lib-overlay-picker-year .arrow[down] {
					bottom: 0px;
				}
			</style>


			<div id="lib-overlay-picker-year">
				<div class="inputs">
					<lib-control-input
						type="text"
						id="input"
						class="input"
						label="${this.label} ${this.format}"
						pattern="${this._pattern(this.format)}"
						invalid-message="${this.format}"
						?disabled="${this.disabled}"
						?required="${this.required}"
						@keyup="${this._manual.bind(this)}"
						.value="${this.value}"
					></lib-control-input>
					<span class="icon open" @click="${this.open.bind(this)}" ?disabled="${this.disabled}">${LibIconMaterialDesign.event}</span>
					<span class="icon clear" @click="${this._delete.bind(this)}" ?disabled="${this.disabled}">${LibIconMaterialDesign.clear}</span>
				</div>

				<lib-overlay id="picker" @hide="${this._closed.bind(this)}">
					<div class="year-box"></div>
					<div class="picker-box">
						<span class="arrow" up @click="${this._move.bind(this, 'up')}">${LibIconMaterialDesign.arrowDropUp}</span>
						<span class="arrow" down @click="${this._move.bind(this, 'down')}">${LibIconMaterialDesign.arrowDropDown}</span>
						<div class="picker-year-box-mask">
							<div id="scroll" class="picker-year-box" @scroll="${this._scrolling.bind(this)}">
								<div id="years" class="years">
									${this.years ? this.years.map((year) => html`
										<span class="year">${year}</span>
									`) : ''}
								</div>
							</div>
						</div>
					</div>
				</lib-overlay>
			</div>
        `;
	}

	/**
     * @public @static @name properties
	 * @description Properties function to return web components properties
	 * @return Object Web component api properties
	 */
	static get observedProperties() { return ['format', 'label', 'value', 'required', 'disabled', 'invalid', 'selected'] }

	propertyChanged(property, oldValue, newValue) {
		this.updateTemplate();
	}

	open(ev) {
		if (this.disabled) return;

		// this.date = !this.value ? new Date() : this._timeToDate(this.value);
		this.opened = true;
		this.dom().querySelector('#picker').show();
		setTimeout(() => {
			let cur = this.value ? this.value : this.today.getFullYear();
			this.dom().querySelector('#scroll').scrollTop = this.years.indexOf(cur) * 70;
		}, 1);
	}

	close(ev) {
		this._closed();
		this.dom().querySelector('#picker').hide();
	}

	_closed(ev) {
		this.opened = false;
		this.value = this.years[this.position];

		this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
	}

	_manual(ev) {
		if (ev.detail.keyCode != 13) {
			this.invalid = ev.target.invalid;
			if (this.invalid) this.setAttribute('invalid', '');
			else this.removeAttribute('invalid');
			return;
		}

		this.value = this._formatYear(this.format, this._stringToDate(ev.target.value));
	}

	_buildYears() {
		if (!this.limit || this.years.length == this.limit) return;

		// set today
		let date = new Date(this.today);
		date.setFullYear(date.getFullYear() - (Math.floor(this.limit / 2) + 1));
		this.years = [];

		// build years from limit
		for (let i = 0; i <= this.limit; i++) {
			date.setFullYear(date.getFullYear() + 1);
			this.years.push(date.getFullYear());
		}

		// set position to the center
		this.position = (Math.floor(this.limit / 2) + 1);
	}

	_move(dir, ev) {
		dir = dir == 'down' ? 1 : (dir == 'up' ? -1 : 0);

		// single change
		this.position = this.position + dir < 0 ? 0 : (this.position + dir > this.years.length - 1 ? this.years.length - 1 : this.position + dir);
		this.dom().querySelector('#scroll').scrollTop = this.position * 70;
	}

	_delete(ev) {
		this.value = undefined;
	}

	_scrolling(ev) {
		let scrollNode = ev.target || ev.path[0];

		ev.stopPropagation();
		ev.preventDefault();

		// debounce
		if (this.scrolling) clearTimeout(this.scrolling);

		// scroll to nearest... but need to scroll in direction
		this.scrolling = setTimeout(() => {
			let diff = scrollNode.scrollTop % 70;
			if (diff > 15 && diff < 55) {
				// scrolling change, always choose next in scroll
				let newPos = scrollNode.scrollTop / 70;
				this.position = newPos < this.position ? Math.floor(scrollNode.scrollTop / 70) : (newPos > this.position ? Math.ceil(scrollNode.scrollTop / 70) : this.position);
				scrollNode.scrollTop = this.position * 70;
			} else {
				// single change, or close to selection, use nearest
				this.position = diff < 35 ? Math.floor(scrollNode.scrollTop / 70) : Math.ceil(scrollNode.scrollTop / 70);
				scrollNode.scrollTop = this.position * 70;
			}
		}, 100);
	}

	_stringToDate(string) {
		let date = new Date();

		switch (string.toLowerCase()) {
			case 'today': case 'now': case 'current': break;
			case '+1': case 'next year': date.setFullYear(date.getFullYear() + 1); break;
			case '-1': case 'last year': date.setFullYear(date.getFullYear() - 1); break;
			case '+2': date.setFullYear(date.getFullYear() + 2); break;
			case '-2': date.setFullYear(date.getFullYear() - 2); break;
			case '+3': date.setFullYear(date.getFullYear() + 3); break;
			case '-3': date.setFullYear(date.getFullYear() - 3); break;
			case '+4': date.setFullYear(date.getFullYear() + 4); break;
			case '-4': date.setFullYear(date.getFullYear() - 4); break;
			case '+5': date.setFullYear(date.getFullYear() + 5); break;
			case '-5': date.setFullYear(date.getFullYear() - 5); break;
			case '+6': date.setFullYear(date.getFullYear() + 6); break;
			case '-6': date.setFullYear(date.getFullYear() - 6); break;
			case '+7': date.setFullYear(date.getFullYear() + 7); break;
			case '-7': date.setFullYear(date.getFullYear() - 7); break;
			case '+8': date.setFullYear(date.getFullYear() + 8); break;
			case '-8': date.setFullYear(date.getFullYear() - 8); break;
			case '+9': date.setFullYear(date.getFullYear() + 9); break;
			case '-9': date.setFullYear(date.getFullYear() - 9); break;
			case '+10': case 'next decade': date.setFullYear(date.getFullYear() + 10); break;
			case '-10': case 'last decade': date.setFullYear(date.getFullYear() - 10); break;
			default:
				// try to work it out
				if (string.length == 4) date.setFullYear(string);
				else if (string.length == 2) date.setYear(string);
				else date.setFullYear(Date.parse(string));

				// choose today
				if (date.toString() == 'Invalid Date') date = new Date();
			break;
		}

		return date;
	}

	_formatYear(format, date) {
		if (!date || typeof date !== 'object') return '';

		return format.toLowerCase() == 'yy' ? date.getYear() : date.getFullYear();
	}

	_pattern(format) {
		let parsed = format.toLowerCase()
			.replace('yyyy', '[0-9]{4}')
			.replace('yy', '[0-9]{2}');

		return '^' + parsed + '$';
	}
}

// bootstrap the class as a new web component
customElements.define('lib-overlay-picker-year', LibOverlayPickerYear);
