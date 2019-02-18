import { CustomHTMLElement, html } from '../../node_modules/custom-web-component/index.js';
import LibResourceStore from '../lib/resource/lib-resource-store.js';
import CwcIconMaterial from '../../node_modules/custom-web-components/src/icon/cwc-icon-material.js';

import '../../node_modules/custom-web-components/src/resource/cwc-resource-router.js';

import './detail/app-detail-index.js';
import './content/app-content-index.js';
import './page/app-page-index.js';
import './extension/app-extension-index.js';
import './setting/app-setting-index.js';
import './user/app-user-index.js';
import './profile/app-profile-index.js';
import './not/app-not-found.js';

/**
 * @public @name AppMain
 * @extends CustomHTMLElement
 * @description Application Web Component, main application gateway, the root web component that starts the application
 * @author Paul Smith <paul.smith@ulsmith.net>
 * @copyright 2019 Paul Smith (ulsmith.net)
 */
class AppDashboard extends CustomHTMLElement {

	/**
     * @public @constructor @name constructor
	 * @description Process called function triggered when component is instantiated (but not ready or in DOM, must call super() first)
	 */
	constructor() {
		super();

		this._route = 'detail';
		this._routes = [
			{ component: 'app-detail-index', path: 'detail', label: 'Detail' },
			{ component: 'app-page-index', path: 'page', label: 'Page' },
			{ component: 'app-content-index', path: 'content', label: 'Content' },
			{ component: 'app-extension-index', path: 'extension', label: 'Extension' },
			{ component: 'app-setting-index', path: 'setting', label: 'Setting' },
			{ component: 'app-user-index', path: 'user', label: 'User' },
			{ component: 'app-profile-index', path: 'profile', label: 'Profile' },
			{ component: 'app-not-found', path: '404', label: '404' }
		];
	}

	/**
	 * @public @name template
	 * @description Template function to return web component UI
	 * @return {String} HTML template block
	 */
    template() {
		return html`
			<style>
				${this.host()} {
					opacity: 0;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					transition: opacity 200ms ease-in-out;
				}

				#app-dashboard .overlay-backdrop {
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

				#app-dashboard .overlay-container {
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

				#app-dashboard .overlay-container .overlay-content {
					position: relative;
					box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.75);
					background-color: white;
					width: 80%;
					height: 80%;
					display: flex;
					flex-flow: column;
				}

				#app-dashboard .overlay-container .overlay-content .overlay-top-menu {
					display: block;
					width: 100%;
					height: 50px;
					margin: 0;
					padding: 0;
				}

				#app-dashboard .overlay-container .overlay-content .overlay-top-menu ul {
					display: flex;
					flex-flow: row;
					margin: 0;
					padding: 0;
					line-height: 50px;
					text-align: center;
					list-style-type: none;
				}

				#app-dashboard .overlay-top-menu-item {
					display: block;
					margin: 0;
					padding: 0;
					line-height: 50px;
					text-align: center;
					flex: 1 1;
					background-color: #296cb2;
					color: white;
					opacity: 1;
				}

				#app-dashboard .overlay-top-menu-item:hover, #app-dashboard .overlay-top-menu-item[active] { opacity: 0.9; }

				#app-dashboard .overlay-container .overlay-content .router-output {
					display: block;
					padding: 0 20px 20px 20px;
					box-sizing: border-box;
					overflow: auto;
				}

				#app-dashboard .nav-icon {
					display: inline-block;
					vertical-align: top;
					width: 30px;
					height: 30px;
					fill: white;
					padding: 5px;
					box-sizing: border-box;
					line-height: 50px;
				}

				#app-dashboard .nav-text {
					cursor: default;
				}

				#app-dashboard .overlay-top-menu-item-close {
					flex: 0 1;
					padding: 0 10px;
					background-color: #d93a3a;
				}
				
				#app-dashboard .nav-icon-close { 
					display: inline-block;
					width: 30px;
					height: 30px;
					fill: white;
					vertical-align: middle;
				}

				@media(max-width: 950px) {
					#app-dashboard .overlay-container .overlay-content {
						width: 95%;
						height: 95%;
					}

					#app-dashboard .no-mobile { display: none; }
				}
			</style>

			<div id="app-dashboard">
				<div class="overlay-backdrop"></div>
				<div id="container" class="overlay-container" @click="${this.hide.bind(this)}">
					<div class="overlay-content">
						<div class="overlay-top-menu">
							<ul>
								<li class="overlay-top-menu-item" @click="${this._navigate.bind(this, 'detail')}" ?active="${this._route === 'detail'}">
									<span class="nav-icon">${CwcIconMaterial.assignment}</span>
									<span class="nav-text no-mobile">Detail</span>
								</li>
								<li class="overlay-top-menu-item" @click="${this._navigate.bind(this, 'page')}" ?active="${this._route === 'page'}">
									<span class="nav-icon">${CwcIconMaterial.description}</span>
									<span class="nav-text no-mobile">Page</span>
								</li>
								<li class="overlay-top-menu-item" @click="${this._navigate.bind(this, 'content')}" ?active="${this._route === 'content'}">
									<span class="nav-icon">${CwcIconMaterial.receipt}</span>
									<span class="nav-text no-mobile">Content</span>
								</li>
								<li class="overlay-top-menu-item" @click="${this._navigate.bind(this, 'extension')}" ?active="${this._route === 'extension'}">
									<span class="nav-icon">${CwcIconMaterial.extension}</span>
									<span class="nav-text no-mobile">Extension</span>
								</li>
								<li class="overlay-top-menu-item" @click="${this._navigate.bind(this, 'setting')}" ?active="${this._route === 'setting'}">
									<span class="nav-icon">${CwcIconMaterial.settings}</span>
									<span class="nav-text no-mobile">Setting</span>
								</li>
								<li class="overlay-top-menu-item" @click="${this._navigate.bind(this, 'user')}" ?active="${this._route === 'user'}">
									<span class="nav-icon">${CwcIconMaterial.supervisorAccount}</span>
									<span class="nav-text no-mobile">User</span>
								</li>
								<li class="overlay-top-menu-item" @click="${this._navigate.bind(this, 'profile')}" ?active="${this._route === 'profile'}">
									<span class="nav-icon">${CwcIconMaterial.face}</span>
									<span class="nav-text no-mobile">Profile</span>
								</li>
								<li class="overlay-top-menu-item-close" @click="${this.hide.bind(this, null)}">
									<span class="nav-icon-close">${CwcIconMaterial.close}</span>
								</li>
							</ul>
						</div>
						<div class="router-output">
							<cwc-resource-router .route="${this._route}" .routes="${this._routes}" default="detail" not-found="404"></cwc-resource-router>
						</div>
					</div>
				</div>
			</div>
        `;
	}

	connected() {
		this.style.display = 'none';
		this.style.zIndex = -1;
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
		if (!!ev && ev.target && ev.target.parentNode && ev.target.parentNode.id !== 'app-dashboard') return;
		
		this.dispatchEvent(new CustomEvent('hide'));
		
		// add it
		this.style.opacity = 0;
		
		// show it
		setTimeout(() => {
			this.style.display = 'none';
			this.style.zIndex = -1;
		}, 250);
	}

	_navigate(path, ev) {
		this._route = path;
		this.updateTemplate();
		console.log(this._route);
	}
}

// bootstrap the class as a new web component
customElements.define('app-dashboard', AppDashboard);