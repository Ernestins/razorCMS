import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';
import CwcIconMaterial from '../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppNotFound extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    static template() {
        return html`
            <style>
				#app-not-found {
					text-align: center;
				}

				#app-not-found h3 {
					font-size: 30px;
				}

				#app-not-found p {
					font-size: 20px;
				}

				#app-not-found .icon-404 {
					width: 300px;
					height: 300px;
					display: inline-block;
					fill: #ba4241;
				}
            </style>

			<div id="app-not-found">
				<h3>404</h3>
				<p>Ohh no, nothing to see here...</p>
				<span class="icon-404">${CwcIconMaterial.report}</span>
			</div>
        `;
	}

	connected() {

	}
}

// bootstrap the class as a new web component
customElements.define('app-not-found', AppNotFound);
