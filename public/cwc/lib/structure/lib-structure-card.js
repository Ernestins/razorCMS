import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import CwcIconMaterial from '../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

/**
 * @public @name LibStructureCard
 * @extends CustomHTMLElement
 * @description Application Web Component, adds a saving icon that self hides after X seconds
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
class LibStructureCard extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._windowEvent;
		this._visible = this.hasAttribute('show-on-load') ? true : false;
	}

	/**
	 * @public @static @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    static template() {
        return html`
			<style>
				:host { display: inline-block; height: fit-content; }

				#lib-structure-card { height: fit-content; }
				#lib-structure-card .header { padding: 10px 40px 10px 10px; background-color: rgba(0, 0, 0, 0.20); position: relative; }
				#lib-structure-card .header .card-icon { display: inline-block; width: 20px; height: 20px; position: absolute; top: 10px; right: 10px; }
				#lib-structure-card .header .card-icon.less { display: none; }
				#lib-structure-card[show-on-load] .header .card-icon.more { display: none; }
				#lib-structure-card[show-on-load] .header .card-icon.less { display: inline-block; }
				#lib-structure-card[disabled] .header .card-icon { display: none !important; }
				#lib-structure-card .main { background-color: rgba(255, 255, 255, 0.2); overflow: hidden; transition: height 150ms ease-in-out; height: 0px; }
				#lib-structure-card[show-on-load] .main { height: fit-content; }
				#lib-structure-card .main .main-content { transition: opacity 150ms ease-in-out; opacity: 0; }
				#lib-structure-card[show-on-load] .main .main-content { opacity: 1; }
				#lib-structure-card .footer { padding: 10px; background-color: rgba(0, 0, 0, 0.20); position: relative;	}
			</style>

			<div id="lib-structure-card" ?show-on-load="${this._visible}" ?disabled="${this.hasAttribute('disabled')}">
				<div class="header" @click="${this.toggle.bind(this)}">
					<span id="more" class="card-icon more">${CwcIconMaterial.unfoldMore}</span>
					<span id="less" class="card-icon less">${CwcIconMaterial.unfoldLess}</span>
					<slot name="header"></slot>
				</div>
				<div id="main" class="main">
					<div id="main-content" class="main-content">
						<slot name="main"><slot>
					</div>
				</div>
				<div class="footer" @click="${this.toggle.bind(this)}">
					<slot name="footer"><slot>
				</div>
			</div>
        `;
	}

	/**
	 * @public @name connected
	 * @description Lifecycle hook that gets called when the element is added to DOM
	 */
	connected() {
		this._windowEvent = window.addEventListener('resize', this.updateHeight.bind(this));
	}

	/**
	 * @public @name disconnected
	 * @description Lifecycle hook that gets called when the element is removed from DOM
	 */
	disconnected() {
		window.removeEventListener('resize', this._windowEvent);
	}

	updateHeight() {
		if (!this._visible) return;

		let mainNode = this.shadowRoot.querySelector('#main');
		let mainContentNode = this.shadowRoot.querySelector('#main-content');

		mainNode.style.height = mainContentNode.scrollHeight + 'px';
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	toggle() {
		if (this._visible) this.hide();
		else this.show();
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	show(ev) {
		if (this.hasAttribute('disabled')) return;
		this._visible = true;

		let iconMoreNode = this.shadowRoot.querySelector('#more');
		let iconLessNode = this.shadowRoot.querySelector('#less');
		let mainNode = this.shadowRoot.querySelector('#main');
		let mainContentNode = this.shadowRoot.querySelector('#main-content');

		iconMoreNode.style.display = 'none';
		iconLessNode.style.display = 'inline-block';
		mainNode.style.height = mainContentNode.scrollHeight + 'px';
		setTimeout(() => mainContentNode.style.opacity = 1, 100);

		this.dispatchEvent(new CustomEvent('show'));
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	hide(ev) {
		if (this.hasAttribute('disabled')) return;
		this._visible = false;

		let iconMoreNode = this.shadowRoot.querySelector('#more');
		let iconLessNode = this.shadowRoot.querySelector('#less');
		let mainNode = this.shadowRoot.querySelector('#main');
		let mainContentNode = this.shadowRoot.querySelector('#main-content');

		iconMoreNode.style.display = 'inline-block';
		iconLessNode.style.display = 'none';
		mainNode.style.height = mainContentNode.scrollHeight + 'px';
		mainContentNode.style.opacity = 0
		setTimeout(() => mainNode.style.height = 0 + 'px', 100);

		this.dispatchEvent(new CustomEvent('hide'));
	}
}

// bootstrap the class as a new web component
customElements.define('lib-structure-card', LibStructureCard);
