import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';
import '../overlay/lib-overlay.js';
import '../control/lib-control-input.js';

/**
 * @public @name LibOverlayPickerTime
 * @extends CustomHTMLElement
 * @description Application Web Component, shows a time box with time picker, accepts wordy times too such as morning, now, midnight
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 * @license unrestricted for use by ulsmith.net
 */
class LibOverlayPickerTime extends CustomHTMLElement {
	constructor() {
		super();

		this.content;
		this.name;
		this.duration;
		this.opened = false;
		this.time;

		this.hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
		this.minutes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
		this.seconds = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];

		this.position = { hour: 0, minute: 0, second: 0 };
		this.scrolling = [];

		this.format = this.hasAttribute('format') ? this.getAttribute('format') : 'hh:mm:ss';
		this.label = this.hasAttribute('label') ? this.getAttribute('label') : 'Time'
		this.value;
		this.date;
		this.required = this.hasAttribute('required') ? true : false
		this.disabled = this.hasAttribute('disabled') ? true : false
	}

	/**
	 * @public @static @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    template() {
		return html`
			<style>
				${this.host()} { display: block; }

				#lib-overlay-picker-time .picker-box { position: relative; width: 220px; height: 230px; }

				#lib-overlay-picker-time .inputs {
					width: 100%;
					display: inline-block;
					position: relative;
				}

				#lib-overlay-picker-time .inputs .icon {
					position: absolute;
					top: 50%;
					color: inherit;    
				}

				#lib-overlay-picker-time .inputs .icon.open {
					right: 40px;
				}

				#lib-overlay-picker-time .inputs .icon.clear {
					right: 0px;
				}

				#lib-overlay-picker-time .inputs .input {
					width: 100%;
					display: inline-block;
					padding: 0 80px 0 0;
					box-sizing: border-box;
					z-index: 0;
				}

				#lib-overlay-picker-time .control-box {
					padding: 10px;
					margin: 0;
				    text-align: center;
				}

				#lib-overlay-picker-time .time-box {
					background-color: #444;
					color: white;
					margin: 0px;
					text-align: center;
				}

				#lib-overlay-picker-time .icon {
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

				#lib-overlay-picker-time .icon[disabled] {
					opacity: 0.6;
				}

				#lib-overlay-picker-time .time-box {
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

				#lib-overlay-picker-time .picker-time-box-mask {
					margin: 0;
					padding: 0;
					width: 70px;
					overflow: hidden;
					display: inline-block;
				}

				#lib-overlay-picker-time .picker-time-box {
					display: inline-block;
					margin: 0;
					padding: 10px 0;
					height: 230px;
					width: 110px;
					box-sizing: border-box;
					overflow-y: scroll;
				}

				#lib-overlay-picker-time .hours, #lib-overlay-picker-time .minutes, #lib-overlay-picker-time .seconds {
					margin-top: 70px;
    				margin-bottom: 70px;
					height: fit-content;
				}

				#lib-overlay-picker-time .hours .hour, #lib-overlay-picker-time .minutes .minute, #lib-overlay-picker-time .seconds .second {
					display: block;
					height: 40px;
					line-height: 40px;
					font-size: 40px;
					padding: 15px 0px 15px 13px;
					color: #ddd;

					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none; 
				}

				#lib-overlay-picker-time .arrow {
					margin: 0;
				    position: absolute;
					width: 30px;
					height: 30px;
					padding: 0;
					cursor: pointer;
					color: #444;
				}

				#lib-overlay-picker-time .arrow[up] {
					top: 0px;
				}

				#lib-overlay-picker-time .arrow[down] {
					bottom: 0px;
				}

				#lib-overlay-picker-time .arrow[hour] {
					left: 20px;
				}

				#lib-overlay-picker-time .arrow[minute] {
					left: 50%;
					margin-left: -15px;
				}

				#lib-overlay-picker-time .arrow[second] {
					right: 20px;
				}

				#lib-overlay-picker-time .colon {
					color: white;
					font-size: 50px;
					line-height: 50px;
					display: inline-block;
					padding: 0;
					margin: 0;
					height: 50px;
					width: 13px;
					position: absolute;
					top: 50%;
					margin-top: -33px;

					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none; 
				}

				#lib-overlay-picker-time .colon.hour {
					left: 66px;
				}

				#lib-overlay-picker-time .colon.minute {
					right: 64px;
				}
			</style>

			<div id="lib-overlay-picker-time">
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
					<span class="icon open" @click="${this.open.bind(this)}" ?disabled="${this.disabled}">${LibIconMaterialDesign.schedule}</span>
					<span class="icon clear" @click="${this._delete.bind(this)}" ?disabled="${this.disabled}">${LibIconMaterialDesign.clear}</span>
				</div>

				<lib-overlay id="picker" @hide="${this._closed.bind(this)}">
					<div class="time-box"></div>
					<div class="picker-box">
						<span class="arrow" hour up @click="${this._move.bind(this, 'hour', 'up')}">${LibIconMaterialDesign.arrowDropUp}</span>
						<span class="arrow" hour down @click="${this._move.bind(this, 'hour', 'down')}">${LibIconMaterialDesign.arrowDropDown}</span>
						<span class="arrow" minute up @click="${this._move.bind(this, 'minute', 'up')}">${LibIconMaterialDesign.arrowDropUp}</span>
						<span class="arrow" minute down @click="${this._move.bind(this, 'minute', 'down')}">${LibIconMaterialDesign.arrowDropDown}</span>
						<span class="arrow" second up @click="${this._move.bind(this, 'second', 'up')}">${LibIconMaterialDesign.arrowDropUp}</span>
						<span class="arrow" second down @click="${this._move.bind(this, 'second', 'down')}">${LibIconMaterialDesign.arrowDropDown}</span>
						<span class="colon hour">:</span>
						<span class="colon minute">:</span>
						<div class="picker-time-box-mask">
							<div id="scrollhour" class="picker-time-box" hour @scroll="${this._scrolling.bind(this, 'hour')}">
								<div id="hours" class="hours">
									${this.hours ? this.hours.map((hour) => html`
										<span class="hour">${this._pad(hour)}</span>
									`) : ''}
								</div>
							</div>
						</div>
						<div class="picker-time-box-mask">
							<div id="scrollminute" class="picker-time-box" minute @scroll="${this._scrolling.bind(this, 'minute')}">
								<div id="minutes" class="minutes">
									${this.minutes ? this.minutes.map((minute) => html`
										<span class="minute">${this._pad(minute)}</span>
									`) : ''}
								</div>
							</div>
						</div>
						<div class="picker-time-box-mask">
							<div id="scrollsecond" class="picker-time-box" second @scroll="${this._scrolling.bind(this, 'second')}">
								<div id="seconds" class="seconds">
									${this.seconds ? this.seconds.map((second) => html`
										<span class="second">${this._pad(second)}</span>
									`) : ''}
								</div>
							</div>
						</div>
					</lib-overlay>
				</div>
			</div>
        `;
	}

	/**
     * @public @static @name properties
	 * @description Properties function to return web components properties
	 * @return Object Web component api properties
	 */
	static get observedProperties() { return ['format', 'label', 'value', 'date', 'required', 'disabled'] }

	propertyChanged(property, oldValue, newValue) {
		this.updateTemplate();
	}

	open(ev) {
		if (this.disabled) return;

		this.date = !this.value ? new Date() : this._timeToDate(this.value);
		this.position.hour = this.hours.indexOf(this.date.getHours());
		this.position.minute = this.minutes.indexOf(this.date.getMinutes());
		this.position.second = this.seconds.indexOf(this.date.getSeconds());

		setTimeout(() => {
			this.dom().querySelector('#scrollhour').scrollTop = this.position.hour * 70;
			this.dom().querySelector('#scrollminute').scrollTop = this.position.minute * 70;
			this.dom().querySelector('#scrollsecond').scrollTop = this.position.second * 70;
		}, 10);

		this.opened = true;
		this.dom().querySelector('#picker').show();
	}

	close(ev) {
		this._closed();
		this.dom().querySelector('#picker').hide();
	}

	_closed(ev) {
		this.opened = false;
		this.date.setHours(this.hours[this.position.hour]);
		this.date.setMinutes(this.minutes[this.position.minute]);
		this.date.setSeconds(this.seconds[this.position.second]);
		this.value = this._dateToTime(this.date);

		this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
	}

	_manual(ev) {
		if (ev.detail.keyCode != 13) {
			this.invalid = ev.target.invalid;
			if (this.invalid) this.setAttribute('invalid', '');
			else this.removeAttribute('invalid');
			return;
		}

		this.value = this._dateToTime(this._timeToDate(ev.target.value));
	}

	_pad(num) {
		return num < 10 ? '0' + num : num;
	}

	_move(type, dir, ev) {
		dir = dir == 'down' ? 1 : (dir == 'up' ? -1 : 0);

		// single change
		this.position[type.toLowerCase()] = this.position[type.toLowerCase()] + dir < 0 ? 0 : (this.position[type.toLowerCase()] + dir > this[type.toLowerCase() + 's'].length - 1 ? this[type.toLowerCase() + 's'].length - 1 : this.position[type.toLowerCase()] + dir);
		this.dom().querySelector('#scroll' + type).scrollTop = this.position[type.toLowerCase()] * 70;
	}

	_buildTime() {
		for (let i = 0; i < 24; i++) this.hours.push(i);			
		for (let i = 0; i < 60; i++) this.minutes.push(i);			
		for (let i = 0; i < 60; i++) this.seconds.push(i);			
	}

	_scrolling(type, ev) {
		let scrollNode = ev.target || ev.path[0];

		ev.stopPropagation();
		ev.preventDefault();

		// debounce
		if (this.scrolling[type]) clearTimeout(this.scrolling[type]);

		// scroll to nearest... but need to scroll in direction
		this.scrolling[type] = setTimeout(() => {
			let diff = scrollNode.scrollTop % 70;
			if (diff > 15 && diff < 55) {
				// scrolling change, always choose next in scroll
				let newPos = scrollNode.scrollTop / 70;
				this.position[type.toLowerCase()] = newPos < this.position[type.toLowerCase()] ? Math.floor(scrollNode.scrollTop / 70) : (newPos > this.position[type.toLowerCase()] ? Math.ceil(scrollNode.scrollTop / 70) : this.position[type.toLowerCase()]);
				scrollNode.scrollTop = this.position[type.toLowerCase()] * 70;
			} else {
				// single change, or close to selection, use nearest
				this.position[type.toLowerCase()] = diff < 35 ? Math.floor(scrollNode.scrollTop / 70) : Math.ceil(scrollNode.scrollTop / 70);
				scrollNode.scrollTop = this.position[type.toLowerCase()] * 70;
			}
		}, 100);
	}

	_delete(ev) {
		this.value = undefined;
	}

	_dateToTime(date) {
		if (!date) return '';

		// set format
		let formatted = this.format.toLowerCase().replace('hh', this._formatHour(date, true)).replace('h', this._formatHour(date));
		formatted = formatted.replace('mm', this._formatMinute(date, true)).replace('m', this._formatMinute(date));
		formatted = formatted.replace('ss', this._formatSecond(date, true)).replace('s', this._formatSecond(date));

		return formatted;
	}

	_timeToDate(string) {
		string = this._stringToTime(string);

		let fParts = this.format.toLowerCase().split(':');
		let dParts = string.split(':');

		// get indexes
		let hh = fParts.indexOf('hh');
		let h = fParts.indexOf('h');
		let mm = fParts.indexOf('mm');
		let m = fParts.indexOf('m');
		let ss = fParts.indexOf('ss');
		let s = fParts.indexOf('s');
		
		let date = new Date();
		date.setHours(hh >= 0 ? dParts[hh] : (h >= 0 ? dParts[h] : 0));
		date.setMinutes(mm >= 0 ? dParts[mm] : (m >= 0 ? dParts[m] : 0));
		date.setSeconds(ss >= 0 ? dParts[ss] : (s >= 0 ? dParts[s] : 0));

		return isNaN(date.getTime()) ? new Date() : date;
	}

	_stringToTime(string) {
		let date = new Date();

		switch (string.toLowerCase()) {
			case 'today':
			case 'now':
			case 'current':
				// set format
				return this._dateToTime(new Date());
			break;
			case 'dinner':
			case 'noon':
				date.setHours(12);
				date.setMinutes(0);
				date.setSeconds(0);
				return this._dateToTime(date);
			break;
			case 'early':
				date.setHours(6);
				date.setMinutes(0);
				date.setSeconds(0);
				return this._dateToTime(date);
			break;
			case 'morning':
				date.setHours(8);
				date.setMinutes(0);
				date.setSeconds(0);
				return this._dateToTime(date);
			break;
			case 'afternoon':
				date.setHours(14);
				date.setMinutes(0);
				date.setSeconds(0);
				return this._dateToTime(date);
			break;
			case 'tonight':
			case 'night':
			case 'evening':
				date.setHours(20);
				date.setMinutes(0);
				date.setSeconds(0);
				return this._dateToTime(date);
			break;
			case 'late':
				date.setHours(22);
				date.setMinutes(0);
				date.setSeconds(0);
				return this._dateToTime(date);
			break;
			case 'midnight':
				date.setHours(0);
				date.setMinutes(0);
				date.setSeconds(0);
				return this._dateToTime(date);
			break;
			default: 
				return string;
			break;
		}
	}

	_formatHour(date, pad) {
		return !date ? '' : (!!pad ? (date.getHours().toString().length < 2 ? '0' + date.getHours() : date.getHours()) : date.getHours());
	}

	_formatMinute(date, pad) {
		return !date ? '' : (!!pad ? (date.getMinutes().toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes()) : date.getMinutes());
	}

	_formatSecond(date, pad) {
		return !date ? '' : (!!pad ? (date.getSeconds().toString().length < 2 ? '0' + date.getSeconds() : date.getSeconds()) : date.getSeconds());
	}

	_pattern(format) {
		let parsed = this.format.toLowerCase()
			.replace('hh', '(2[0-3]|1[0-9]|0[0-9])')
			.replace('h', '(2[0-3]|1[0-9]|[0-9])')
			.replace('mm', '[0-5]{1}[0-9]{1}')
			.replace('m', '([0-9]{1}|[0-5]{1}[0-9]{1})')
			.replace('ss', '[0-5]{1}[0-9]{1}')
			.replace('s', '([0-9]{1}|[0-5]{1}[0-9]{1})');

		return '^' + parsed + '$';
	}
}

// bootstrap the class as a new web component
customElements.define('lib-overlay-picker-time', LibOverlayPickerTime);
