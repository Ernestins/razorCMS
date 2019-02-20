import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibIconMaterialDesign from '../icon/lib-icon-material-design.js';

/**
 * @public @name LibOverlayLoading
 * @extends CustomHTMLElement
 * @description Application Web Component, adds a saving icon that self hides after X seconds
 * @example Use by dispatching to custom event 'message' from within the app as an info, error, warning or done message e.g. `this.dispatchEvent(new CustomEvent('message', { bubbles: true, composed: true, detail: { text: 'boom canvas selector loaded', type: 'info', seconds: 2 } }));`
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2018 Paul Smith (ulsmith.net)
 */
class LibOverlayLoading extends CustomHTMLElement {
	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    template() {
        return html`
			<style>
				${this.host()} {
					display: block;
					z-index: 1011;
					opacity: 1;
					position: fixed;
					top: 50%;
					left: 50%;
					margin-top: -60px;
					margin-left: -60px;
					width: 120px;
					height: 120px;
					z-index: 1000;
					box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
					border-radius: 80px;
					padding: 10px;
					box-sizing: border-box;
					background-color: rgba(255, 255, 255, 0.8);
					animation-name: loading;
					animation-duration: 750ms;
					animation-iteration-count: infinite;
					animation-timing-function: ease-in-out;
					transition: opacity 200ms ease-in-out;
				}

				#lib-overlay-loading img {
					width: 100%;
					height: 100%;
				}

				@keyframes loading {
					0% { transform:rotate(0deg); }
					10% { transform:rotate(5deg); }
					90% { transform:rotate(355deg); }
					100% { transform:rotate(360deg); }
				}
			</style>

			<div id="lib-overlay-loading">
				<img class="loading" src="${this.getAttribute('src')}">
			</div>
        `;
	}

	connected() {
		if (this.hasAttribute('show-on-load')) {
			this.style.display = 'block';
			this.style.zIndex = 1011;
		} else {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	show(ev) {
		this.dispatchEvent(new CustomEvent('show'));

		// add it
		this.style.display = 'block';
		this.style.zIndex = 1011;

		// show it
		setTimeout(() => this.style.opacity = 1, 50);
	}

	/**
     * @public @name show
	 * @description Show the saving icon and self remove after X seconds
	 */
	hide(ev) {
		if (this.style.display === 'none') return;

		this.dispatchEvent(new CustomEvent('hide'));

		// add it
		this.style.opacity = 0;

		// show it
		setTimeout(() => {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}, 500);
	}
}

// bootstrap the class as a new web component
customElements.define('lib-overlay-loading', LibOverlayLoading);
