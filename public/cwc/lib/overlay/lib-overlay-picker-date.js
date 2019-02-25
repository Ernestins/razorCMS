import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';
import '../overlay/lib-overlay.js';
import '../control/lib-control-input.js';

/**
 * @public @name LibOverlayPickerDate
 * @extends CustomHTMLElement
 * @description Application Web Component, shows a time box with time picker, accepts wordy times too such as morning, now, midnight
 * @author Paul Smith <p@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
class LibOverlayPickerDate extends CustomHTMLElement {

	constructor() {
		super();

		this.days = [];
		this.years = [];

		this.fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.abbMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		this.fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.abbDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

		this.mode = 'day';

		this.format = this.hasAttribute('format') ? this.getAttribute('format') : 'dd/mm/yyyy';
		this.label = this.hasAttribute('label') ? this.getAttribute('label') : 'Date';
		this.value = '';
		this.required = false;
		this.disabled = false;
		this.invalid = false;
		this.selected;
		this._open;

		// work out start point for calendar
		this.date = new Date();
		this.date.setDate(1);
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    static template() {
		return html`
			<style>
				:host { display: block; width: 100%; }
				#lib-overlay-picker-date .inputs { width: 100%; display: inline-block; position: relative; }
				#lib-overlay-picker-date .inputs .input { width: 100%; display: inline-block; padding: 0 80px 0 0; box-sizing: border-box; }
				#lib-overlay-picker-date .inputs .icon.open, #lib-overlay-picker-date .inputs .icon.clear { height: 30px; width: 30px; padding: 3px; border-radius: 50px; cursor: pointer; display: inline-block; box-sizing: border-box; color: inherit; position: absolute; top: 50%; margin-top: -12px; background-color: #222; fill: white; padding: 6px; }
				#lib-overlay-picker-date .inputs .icon.open { right: 40px; }
				#lib-overlay-picker-date .inputs .icon.clear { right: 0px; }
				#lib-overlay-picker-date .box { margin: 0; padding: 0; width: 460px; height: 300px; box-sizing: border-box; z-index: 1001; }
				#lib-overlay-picker-date .box .date-box { position: relative; display: block; background-color: #444; color: white; margin: 0px; text-align: center; width: 160px; height: 300px; box-sizing: border-box; float: left; }
				#lib-overlay-picker-date .box .date-box .controls .icon { display: inline-block; fill: #444; background-color: white; border-radius: 50px; width: 40px; height: 40px; padding: 5px; box-sizing: border-box; cursor: pointer; margin: 10px 2px; }
				#lib-overlay-picker-date .box .date-box .controls .icon:hover { background-color: #ddd; }
				#lib-overlay-picker-date .box .date-box .controls .icon.close { fill: red; }
				#lib-overlay-picker-date .box .date-box .full-date { height: 140px; position: absolute; top: 50%; width: 100%; margin-top: -70px; }
				#lib-overlay-picker-date .box .date-box .full-date .day { font-size: 25px; line-height: 30px; display: block; font-weight: lighter; }
				#lib-overlay-picker-date .box .date-box .full-date .date { font-size: 30px; line-height: 80px; display: block; }
				#lib-overlay-picker-date .box .date-box .full-date .year { font-size: 50px; line-height: 50px; display: block; font-weight: lighter; }
				#lib-overlay-picker-date .box .control-box { display: inline-block; padding: 10px; margin: 0; text-align: center; width: 300px; height: 300px; box-sizing: border-box; float: left; }
				#lib-overlay-picker-date .box .control-box .controls { padding: 0px 0px 8px 0px; }
				#lib-overlay-picker-date .box .control-box .controls .month { line-height: 20px; box-shadow: 0 1px 8px 0px #444; padding: 5px 10px; border-radius: 50px; cursor: pointer; display: inline-block; box-sizing: border-box; }
				#lib-overlay-picker-date .box .control-box .controls .icon { height: 30px; width: 30px; box-shadow: 0 1px 8px 0px #444; padding: 2px; border-radius: 50px; cursor: pointer; display: inline-block; box-sizing: border-box; color: #444; }
				#lib-overlay-picker-date .box .control-box .controls .icon[back] { float: left; }
				#lib-overlay-picker-date .box .control-box .controls .icon[forward] { float: right; }
				#lib-overlay-picker-date .box .control-box .days { list-style-type: none; margin: 0; padding: 0; height: 260px; width: 280px; }
				#lib-overlay-picker-date .box .control-box .days li { border-radius: 5px; border: 1px solid #ccc; background-color: #eee; color: #555; box-sizing: border-box; display: inline-block; width: 35px; margin: 2px 0px; cursor: pointer; }
				#lib-overlay-picker-date .box .control-box .days li:nth-child(7n+7), #lib-overlay-picker-date .box .control-box .days li:nth-child(7n+6) { background-color: #ddd; }
				#lib-overlay-picker-date .box .control-box .days li[today] { border: 1px solid #999; background-color: #ccc; color: #333; }
				#lib-overlay-picker-date .box .control-box .days li[selected] { border: 1px solid #075a07; background-color: green; color: white; }
				#lib-overlay-picker-date .box .control-box .days li[disabled] { opacity: 0.6; cursor: not-allowed; }
				#lib-overlay-picker-date .box .control-box .days li .day { margin: 0; padding: 0; display: block; font-size: 10px; line-height: 14px; }
				#lib-overlay-picker-date .box .control-box .days li .date { margin: 0; padding: 0; display: block; font-size: 14px; line-height: 20px; }
				#lib-overlay-picker-date .box .control-box .months { list-style-type: none; margin: 0; padding: 0; height: 260px; width: 280px; }
				#lib-overlay-picker-date .box .control-box .months li { border-radius: 5px; border: 1px solid #ccc; background-color: #eee; color: #555; box-sizing: border-box; display: inline-block; width: 89px; line-height: 54px; margin: 2px 0px; cursor: pointer; font-size: 14px; }
				#lib-overlay-picker-date .box .control-box .years { list-style-type: none; margin: 0; padding: 0; height: 260px; width: 280px; }
				#lib-overlay-picker-date .box .control-box .years li { border-radius: 5px; border: 1px solid #ccc; background-color: #eee; color: #555; box-sizing: border-box; display: inline-block; line-height: 42px; width: 52px; margin: 2px 0px; cursor: pointer; font-size: 14px; }
        		@media (max-width: 550px) {
                    #lib-overlay-picker-date .box { width: 300px; }
					#lib-overlay-picker-date .box .date-box { width: 100%; height: 80px; }
					#lib-overlay-picker-date .box .date-box .full-date { height: fit-content; position: initial; width: 100%; margin-top: 0; }
					#lib-overlay-picker-date .box .date-box .full-date .day, #lib-overlay-picker-date .box .date-box .full-date .year, #lib-overlay-picker-date .box .date-box .full-date .date { font-size: 20px; line-height: 26px; display: inline-block; }
					#lib-overlay-picker-date .box .date-box .controls .icon { margin: 5px 2px; }
				}
			</style>

			<div id="lib-overlay-picker-date">
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
					<span class="icon open" @click="${this.open.bind(this)}" ?disabled="${this.disabled}">${LibIconMaterialDesign.dateRange}</span>
					<span class="icon clear" @click="${this._delete.bind(this)}" ?disabled="${this.disabled}">${LibIconMaterialDesign.clear}</span>
				</div>

				<lib-overlay id="picker" @hide="${this._closed.bind(this)}">
					${this._open ? html`
						<div class="box">
							<div class="date-box">
								<div class="controls">
									<span class="icon clear" @click="${this._clear.bind(this)}">${LibIconMaterialDesign.delete}</span>
									<span class="icon today" @click="${this._today.bind(this)}">${LibIconMaterialDesign.update}</span>
									<span class="icon close" @click="${this.close.bind(this)}">${LibIconMaterialDesign.close}</span>
								</div>
								<div class="full-date">
									<span class="day">${this._formatDate('dddd', this.selected)}</span>
									<span class="date">${this._formatDate('ds mmm', this.selected)}</span>
									<span class="year">${this._formatDate('yyyy', this.selected)}</span>
								</div>
							</div>
							<div class="control-box">
								<div class="controls">
									<span class="icon" back @click="${this._back.bind(this)}">${LibIconMaterialDesign.chevronLeft}</span>
									<span class="month" @click="${this._changeMode.bind(this)}">${this._formatDate('mmmm yyyy', this.date)}</span>
									<span class="icon" forward @click="${this._forward.bind(this)}">${LibIconMaterialDesign.chevronRight}</span>
								</div>
								<ul class="days" ?hidden="${this.mode != 'day'}">
									${this.days ? this.days.map((day, idx) => html`
										<li @click="${this._selectDay.bind(this, idx, day.disabled)}" ?selected="${this._datesEqual(day.date, this.selected)}" ?disabled="${day.disabled}" ?today="${this._datesEqual(day.date, this.today)}">
											<div class="details">
												<span class="day">${this._formatDate('ddd', day.date)}</span>
												<span class="date">${this._formatDate('dd', day.date)}</span>
											</div>
										</li>
									`) : ''}
								</ul>
								<ul class="years" ?hidden="${this.mode != 'year'}">
									${this.years ? this.years.map((year, idx) => html`
										<li @click="${this._selectYear.bind(this, idx)}">
											<div class="details">
												<span class="year">${year}</span>
											</div>
										</li>
									`) : ''}
								</ul>
								<ul class="months" ?hidden="${this.mode != 'month'}">
									${this.fullMonths ? this.fullMonths.map((month, idx) => html`
										<li @click="${this._selectMonth.bind(this, idx)}">
											<div class="details">
												<span class="month">${month}</span>
											</div>
										</li>
									`) : ''}
								</ul>
							</div>
						</div>
					` : ''}
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

	connected() {
		this.today = new Date();
	}

	open(ev) {
		if (this.disabled) return;

		this._open = true;
		this.updateTemplate();

		if (!this.selected && !!this.value) this.selected = this._stringToDate(this.value);

		if (!!this.selected) {
			this.date.setDate(1);
			this.date.setMonth(this.selected.getMonth());
			this.date.setFullYear(this.selected.getFullYear());
			this.date = new Date(this.date);
		}

		this._createMonth();
		this.shadowRoot.querySelector('#picker').show();
	}

	close(ev) {
		this._closed();
		this.shadowRoot.querySelector('#picker').hide();
	}

	_closed() {
		this._open = false;
		this.updateTemplate();

		this.value = this.selected ? this._formatDate(this.format, this.selected) : undefined;
		this.opened = false;
		this.invalid = this.shadowRoot.querySelector('#input').invalid;

		this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
	}

	_manual(ev) {
		if (ev.detail.keyCode != 13) {
			this.invalid = ev.target.invalid;
			if (this.invalid) this.setAttribute('invalid', '');
			else this.removeAttribute('invalid');
			return;
		}

		this.selected = this._stringToDate(ev.target.value);
		this.value = this.selected ? this._formatDate(this.format, this.selected) : undefined;
		this.invalid = ev.target.invalid;
		if (this.invalid) this.setAttribute('invalid', '');
		else this.removeAttribute('invalid');
	}

	_clear(ev) {
		this.selected = null;
	}

	_delete(ev) {
		this.value = null;
		this.invalid = this.shadowRoot.querySelector('#input').invalid;
		if (this.invalid) this.setAttribute('invalid', '');
		else this.removeAttribute('invalid');
	}

	_today(ev) {
		this.date.setDate(1);
		this.date.setMonth(this.today.getMonth());
		this.date.setFullYear(this.today.getFullYear());
		this.date = new Date(this.date);
		this._createMonth();
	}

	_monthSuffix(date) {
		if (!date || typeof date !== 'object') return '';
		let dateNum = date.getDate();
		return [1, 21, 31].indexOf(dateNum) >= 0 ? 'st' : ([2, 22].indexOf(dateNum) >= 0 ? 'nd' : ([3, 23].indexOf(dateNum) >= 0 ? 'rd' : 'th'));
	}

	_datesEqual(date1, date2) {
		return !!date1 && !!date2 && !!date1.toLocaleDateString && !!date2.toLocaleDateString && date1.toLocaleDateString() === date2.toLocaleDateString();
	}

	_formatDate(format, date) {
		if (!date || typeof date !== 'object') return '';

		let formatted = '';
		let parts = format.split(/\s|\\|\/|\-/);
		for (let part of parts) {
			// ddd, dd, d
			formatted += part.toLowerCase() === 'dddd' ? this.fullDays[date.getDay()] : '';
			formatted += part.toLowerCase() === 'ddd' ? this.abbDays[date.getDay()] : '';
			formatted += part.toLowerCase() === 'dds' ? (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + this._monthSuffix(date) : '';
			formatted += part.toLowerCase() === 'dd' ? (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) : '';
			formatted += part.toLowerCase() === 'ds' ? (date.getDate()) + this._monthSuffix(date) : '';
			formatted += part.toLowerCase() === 'd' ? (date.getDate()) : '';
			// mmm, mm, m
			formatted += part.toLowerCase() === 'mmmm' ? this.fullMonths[date.getMonth()] : '';
			formatted += part.toLowerCase() === 'mmm' ? this.abbMonths[date.getMonth()] : '';
			formatted += part.toLowerCase() === 'mm' ? (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth()) : '';
			formatted += part.toLowerCase() === 'm' ? date.getMonth() + 1 : '';
			// mmm, mm, m
			formatted += part.toLowerCase() === 'yyyy' ? date.getFullYear() : '';
			formatted += part.toLowerCase() === 'yy' ? parseInt((date.getYear() / 100 + '').split('.')[1]) : '';
			// spacer
			let pos = format.indexOf(part);
			if (pos + part.length < format.length) formatted += format.substring(pos + part.length, pos + part.length + 1);
		}

		return formatted;
	}

	// Creates and populates all of the days to make up the month
	_createMonth() {
		// chache current place
		let cache = { day: this.date.getDate(), month: this.date.getMonth(), year: this.date.getFullYear() };

		// rewind the date
		let days = [];
		while (this.date.getDay() != 1) this.date.setDate(this.date.getDate() - 1);

		// do the first monday to get past loop
		days.push({
			'id': days.length,
			'date': new Date(this.date),
			'disabled': this.date.getMonth() != cache.month
		});
		this.date.setDate(this.date.getDate() + 1);

		// now loop until we hit the next monday that is not in the month we selected
		while (!(this.date.getDay() == 1 && this.date.getMonth() != cache.month)) {
			days.push({
				'id': days.length,
				'date': new Date(this.date),
				'disabled': this.date.getMonth() != cache.month
			});
			this.date.setDate(this.date.getDate() + 1);
		}
		this.days = days;

		// reset the date object
		this.date.setDate(cache.day);
		this.date.setMonth(cache.month);
		this.date.setFullYear(cache.year);
		this.updateTemplate();
	}

	_internalFormat(date) {
		return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	}

	_selectDay(idx, disabled, ev) {
		// set selected
		if (disabled) return;
		let select = new Date(this.days[parseInt(idx)].date);
		this.selected = this._datesEqual(select, this.selected) ? null : select;
	}

	_selectMonth(idx, ev) {
		var dateObject = new Date();
		dateObject.setDate(this.date.getDate());
		dateObject.setMonth(idx);
		dateObject.setYear(this.date.getFullYear());

		this.date = dateObject;
		this._createMonth();
		this.mode = 'day';
		this.updateTemplate();
	}

	_selectYear(idx, ev) {
		var dateObject = new Date();
		dateObject.setDate(this.date.getDate());
		dateObject.setMonth(this.date.getMonth());
		dateObject.setYear(this.years[idx]);

		this.date = dateObject
		this.mode = 'month';
		this.updateTemplate();
	}

	_changeMode() {
		if (this.mode != 'day') this.mode = 'day';
		else {
			var years = [];
			var start = parseInt(this.date.getFullYear()) - 12;
			for (var i = start; i < start + 25; i++) years.push(i);

			this.years = years;
			this.mode = 'year';
		}
		this.updateTemplate();
	}

	// Clears the calendar and shows the previous month
	_back() {
		if (this.mode == 'day') {
			this.date.setMonth(this.date.getMonth() - 1);
			this.date = new Date(this.date);
			this._createMonth();
		} else if (this.mode == 'year') {
			var start = parseInt(this.years[0]) - 25;
			this.years = [];
			for (var i = start; i < start + 25; i++) this.years.push(i);
		}
		this.updateTemplate();
	}

	// Clears the calendar and shows the next month
	_forward() {
		if (this.mode == 'day') {
			this.date.setMonth(this.date.getMonth() + 1);
			this.date = new Date(this.date);
			this._createMonth();
		} else if (this.mode == 'year') {
			var start = parseInt(this.years[24]) + 1;
			this.years = [];
			for (var i = start; i < start + 25; i++) this.years.push(i);
		}
		this.updateTemplate();
	}

	_stringToDate(string) {
		let newDate = new Date();

		switch (string.toLowerCase()) {
			case 'today': case 'now': case 'current': break;
			case 'tomorrow': newDate.setDate(this.today.getDate() +1); break;
			case 'yesterday': newDate.setDate(this.today.getDate() -1); break;
			case 'next week': newDate.setDate(this.today.getDate() +7); break;
			case 'fortnight': case 'next 2 weeks': newDate.setDate(this.today.getDate() +14); break;
			case 'last week': newDate.setDate(this.today.getDate() -7); break;
			case 'last 2 weeks': newDate.setDate(this.today.getDate() -14); break;
			case 'last month': newDate.setMonth(this.today.getMonth() -1); break;
			case 'next month': newDate.setMonth(this.today.getMonth() +1); break;
			case 'last year': newDate.setFullYear(this.today.getFullYear() -1); break;
			case 'next year': newDate.setFullYear(this.today.getFullYear() +1); break;
			default:
				let fParts = this.format.toLowerCase().split(/\s|\\|\/|\-/);
				let dParts = string.split(/\s|\\|\/|\-/);

				// get indexes
				let dddd = fParts.indexOf('dddd');
				let ddd = fParts.indexOf('ddd');
				let dds = fParts.indexOf('dds');
				let dd = fParts.indexOf('dd');
				let ds = fParts.indexOf('ds');
				let d = fParts.indexOf('d');
				let mmmm = fParts.indexOf('mmmm');
				let mmm = fParts.indexOf('mmm');
				let mm = fParts.indexOf('mm');
				let m = fParts.indexOf('m');
				let yyyy = fParts.indexOf('yyyy');
				let yy = fParts.indexOf('yy');

				if (dd >= 0) newDate.setDate(parseInt(dParts[dd]));
				else if (d >= 0) newDate.setDate(parseInt(dParts[d]));

				if (mm >= 0) newDate.setMonth(parseInt(dParts[mm]) -1);
				else if (m >= 0) newDate.setMonth(parseInt(dParts[m]) -1);

				if (yyyy >= 0) newDate.setFullYear(parseInt(dParts[yyyy]));
				else if (yy >= 0) newDate.setYear(parseInt(dParts[yy]));

				if (isNaN(newDate.getTime())) newDate = new Date();
			break;
		}

		return newDate;
	}

	_pattern(format) {
		let parsed = this.format.toLowerCase()
			.replace('dd', '(3[0-1]|2[0-9]|1[0-9]|0[0-9])')
			.replace('d', '(3[0-1]|2[0-9]|1[0-9]|[0-9])')
			.replace('mmmm', '(january|february|march|april|may|june|july|august|september|october|november|december|January|February|March|April|May|June|July|August|September|October|November|December)')
			.replace('mmm', '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)')
			.replace('mm', '(1[0-2]|0[0-9])')
			.replace('m', '(1[0-2]|[0-9])')
			.replace('yyyy', '[0-9]{4}')
			.replace('yy', '[0-9]{2}');

		return '^' + parsed + '$';
	}
}

// bootstrap the class as a new web component
customElements.define('lib-overlay-picker-date', LibOverlayPickerDate);
