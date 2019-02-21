import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';
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

		this.label;
	}

	/**
	 * @public @static @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    static template() {
        return html`
			<style>
				${this.host()} {
					display: inline-block;
				}

				#lib-structure-card {

				}

				#lib-structure-card .header {
					padding: 10px 40px 10px 10px;
				    background-color: rgba(0, 0, 0, 0.20);
					position: relative;
				}

				#lib-structure-card .header .card-icon {
					display: inline-block;
					width: 20px;
					height: 20px;
					position: absolute;
					top: 10px;
					right: 10px;
				}

				#lib-structure-card .main {
					padding: 10px;
				    background-color: rgba(255, 255, 255, 0.2);
				}

				#lib-structure-card .footer {
					padding: 10px 10px 10px 40px;
				    background-color: rgba(0, 0, 0, 0.20);
					position: relative;
				}

				#lib-structure-card .footer .card-icon {
					display: inline-block;
					width: 20px;
					height: 20px;
					position: absolute;
					top: 10px;
					left: 10px;
				}

			</style>

			<div id="lib-structure-card">
				<div class="header">
					<span class="card-icon">${CwcIconMaterial.arrowDropDown}</span>
					<slot name="header"></slot>
				</div>
				<div class="main">
					<slot name="main"><slot>
				</div>
				<div class="footer">
					<span class="card-icon">${CwcIconMaterial.link}</span>
					<slot name="footer"><slot>
				</div>
			</div>
        `;
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	toggle() {
		if (this.style.display === 'block') this.hide();
		else this.show();
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	show() {
		if (this.style.display === 'block') return;

		this.dispatchEvent(new CustomEvent('show'));

		// add it
		this.style.display = 'block';
		this.style.zIndex = 1001;

		// show it
		setTimeout(() => this.style.opacity = 1, 50);
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	hide(ev) {
		if (this.style.display === 'none') return;

		// if we hide from event, make sure its a click to container
		if (!!ev && ev.target && ev.target.parentNode && ev.target.parentNode.id !== 'lib-overlay') return;

		this.dispatchEvent(new CustomEvent('hide'));

		// add it
		this.style.opacity = 0;

		// show it
		setTimeout(() => {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}, 250);
	}
}

// bootstrap the class as a new web component
customElements.define('lib-structure-card', LibStructureCard);
