import LibResourceRequest from '../../lib/resource/lib-resource-request.js';
import LibResourceStore from '../../lib/resource/lib-resource-store.js';

import './com-edit-menu-control.js';

/**
 * @public @name ComEditMenuItem
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class ComEditMenuItem extends HTMLLIElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._clickEvent;
		this.selected;

		console.log('menu-item');
	}

	connectedCallback() {
		console.log('menu-item connected');
		this._addControl();
		this._clickEvent = this.addEventListener('click', this._showControl.bind(this));
	}

	disconnectedCallback() {
		console.log('menu-item disconnected');
		this.removeEventListener('click', this._clickEvent);
	}

	_addControl(ev) {
		let deleteControl = document.createElement('com-edit-menu-control');
		this.appendChild(deleteControl);
	}

	_showControl(ev) {
		ev.preventDefault();
		ev.stopPropagation();

		this.selected = false;
		let controlNode = this.querySelector('com-edit-menu-control');
		if (!controlNode.hasAttribute('visible')) {
			this.selected = true;
			controlNode.show();
		}
	}
}

// bootstrap the class as a new web component
customElements.define('com-edit-menu-item', ComEditMenuItem, {extends: 'li'});
