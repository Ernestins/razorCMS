import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

/**
 * @public @name LibOverlaySaving
 * @extends CustomHTMLElement
 * @description Application Web Component, adds a saving icon that self hides after X seconds
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
class LibOverlay extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();
	}

	/**
	 * @public @static @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    static template() {
        return html`
			<style>
				:host {
					display: none;
					z-index: -1;
					opacity: 0;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					transition: opacity 200ms ease-in-out;
				}

				#lib-overlay .overlay-backdrop {
					display: block;
					z-index: 1002;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: black;
					opacity: 0.2;
				}

				#lib-overlay .overlay-container {
					display: flex;
					align-items: center;
					justify-content: center;
					z-index: 1003;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

				#lib-overlay .overlay-container .overlay-content {
					position: relative;
					background-color: white;
					box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);
				}
			</style>

			<div id="lib-overlay">
				<div class="overlay-backdrop"></div>
				<div id="container" class="overlay-container" @click="${this.hide.bind(this)}">
					<div class="overlay-content"><slot></slot></div>
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
customElements.define('lib-overlay', LibOverlay);
