import { CustomHTMLElement, html } from '../../../node_modules/custom-web-component/index.js';
import CwcIconMaterial from '../../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class ComEditMenuControl extends CustomHTMLElement {

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
				:host { display: none; width: 100px; height: 100px; position: absolute; top: 50%; left: 50%; margin-top: -50px; margin-left: -50px; z-index: 10; }
				:host([visible]) { display: block !important; }
				.box { width: 100px; height: 100px; transform: rotate(45deg); box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.75); border-radius: 50px; }
				.box .row { display: flex; width: 100px; height: 50px; }
				.box .row .col { width: 50px; height: 50px; color: white; position: relative; opacity: 0.8; }
				.box .row .col:hover { opacity: 1; }
				
				.top-left { border-radius: 50px 0 0 0; background-color: #444; fill: #ddd; }
				.top-right { border-radius: 0 50px 0 0; background-color: #79c574; fill: #444; }
				.bottom-right { border-radius: 0 0 50px 0; background-color: #ca3030; fill: #ddd; }
				.bottom-left { border-radius: 0 0 0 50px; background-color: #83b9d8; fill: #444; }

				.icon { position: absolute; display: block; width: 20px; height: 20px; transform: rotate(-45deg); }
				.top-left .icon { bottom: 10px; right: 10px; }
				.top-right .icon { bottom: 10px; left: 10px; }
				.bottom-right .icon { top: 10px; left: 10px; }
				.bottom-left .icon { top: 10px; right: 10px; }
            </style>

			<div class="box">
				<div class="row">
					<div class="col top-left" @click="${this.hide.bind(this)}">
						<span class="icon">${CwcIconMaterial.clear}</span>
					</div>
					<div class="col top-right">
						<span class="icon">${CwcIconMaterial.add}</span>
					</div>
				</div>
				<div class="row">
					<div class="col bottom-left">
						<span class="icon">${CwcIconMaterial.link}</span>
					</div>
					<div class="col bottom-right">
						<span class="icon">${CwcIconMaterial.deleteForever}</span>
					</div>
				</div>
			</div>
        `;
	}

	connected() {
		console.log('menu');
	}

	show() {
		let others = this.parentNode.parentNode.querySelectorAll('com-edit-menu-control');
		if (others.length) for (let i = 0; i < others.length; i++) others[i].removeAttribute('visible');
		this.setAttribute('visible', '');
	}

	hide() {
		console.log('hide', this);
		setTimeout(() => this.removeAttribute('visible'), 10);
	}
}

// bootstrap the class as a new web component
customElements.define('com-edit-menu-control', ComEditMenuControl);
