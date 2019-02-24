import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppUserIndex extends CustomHTMLElement {

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
            </style>

			<div id="app-user-index">
				<p>User</p>
			</div>
        `;
	}

	connected() {

	}
}

// bootstrap the class as a new web component
customElements.define('app-user-index', AppUserIndex);