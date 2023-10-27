/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/krusty-krab-outside.jpg
const krusty_krab_outside_namespaceObject = __webpack_require__.p + "97349f487fe31dd27b1c.jpg";
;// CONCATENATED MODULE: ./src/js/components/home.js



function home() {
	const homeSection = document.createElement('section');
	homeSection.classList.add('content-section', 'content-home');
	homeSection.innerHTML = `
			<header>
				<h1 class="text-theme text-uppercase">The Krusty Krab</h1>
				<p class="mt-2">
					The Krusty Krab is a fast food restaurant located in Bikini Bottom,
					founded and owned by Eugene H. Krabs. It is also the most popular
					and best known restaurant in Bikini Bottom and one of the main
					locations of SpongeBob SquarePants. It first appears in the pilot
					episode "Help Wanted."
				</p>
				<p class="mt-1">
					Famous for its Krabby Patty burgers, it is a rival to Plankton's
					highly unpopular across-the-street restaurant called the Chum
					Bucket. Its employees are SpongeBob SquarePants and Squidward
					Tentacles, respectively the fry cook and cashier.
				</p>
			</header>
			<div class="content-home-right">
				<img
					src="${krusty_krab_outside_namespaceObject}"
					alt="View of Krusty Krab from the outside"
				/>
			</div>
	`;
	return homeSection;
}

/* harmony default export */ const components_home = (home);

;// CONCATENATED MODULE: ./src/js/components/menu.js


function menu() {
	const menuSection = document.createElement('section');
	menuSection.classList.add('content-section');
	menuSection.innerHTML = `
		<h2 class="text-theme text-uppercase text-center">Galley Grub</h2>
		<div class="menu-items mt-2">
			<div>
				<ul>
					<li>
						<div class="menu-line">
							<p class="text-uppercase">Krabby Patty</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">w/sea cheese</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</div>
					</li>
					<li class="mt-1">
						<div class="menu-line">
							<p class="text-uppercase">Double Krabby Patty</p>
							<span class="menu-middle"></span>
							<p>2.00</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">w/sea cheese</p>
							<span class="menu-middle"></span>
							<p>2.25</p>
						</div>
					</li>
					<li class="mt-1">
						<div class="menu-line">
							<p class="text-uppercase">Triple Krabby Patty</p>
							<span class="menu-middle"></span>
							<p>3.00</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">w/sea cheese</p>
							<span class="menu-middle"></span>
							<p>3.25</p>
						</div>
					</li>
				</ul>
				<section class="mt-2">
					<h3 class="fw-400 text-uppercase">Coral Bits</h3>
					<ul>
						<li class="menu-line mt-1">
							<p>Small</p>
							<span class="menu-middle"></span>
							<p>1.00</p>
						</li>
						<li class="menu-line">
							<p>Medium</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</li>
						<li class="menu-line">
							<p>Large</p>
							<span class="menu-middle"></span>
							<p>1.50</p>
						</li>
					</ul>
				</section>
				<ul class="mt-2">
					<li>
						<div class="menu-line">
							<p class="text-uppercase">Kelp Rings</p>
							<span class="menu-middle"></span>
							<p>1.50</p>
						</div>
						<div class="menu-line ml-2">
							<p class="menu-add-on">salty sauce</p>
							<span class="menu-middle"></span>
							<p>.50</p>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li class="menu-line">
						<p class="text-uppercase">Krabby Meal</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">3.50</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Double Krabby M</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">3.75</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Triple Krabby Me</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">4.00</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Salty Sea Dog</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">1.25</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Footlong</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">2.00</p>
					</li>
					<li class="menu-line">
						<p class="text-uppercase">Sailors Surprise</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">3.00</p>
					</li>
					<li class="menu-line ml-1">
						<p class="text-uppercase">Golden Loaf</p>
						<div class="menu-middle"></div>
						<p class="menu-item-price">2.00</p>
					</li>
					<li class="menu-line ml-2">
						<p>w/sauce</p>
						<div class="menu-middle"></div>
						<p>2.50</p>
					</li>
					<li class="mt-2">
						<div class="menu-line">
							<p class="text-uppercase">Kelp Shake</p>
							<div class="menu-middle"></div>
							<p class="menu-item-price">2.00</p>
						</div>
					</li>
				</ul>
				<section class="seaform-soda-content mt-1">
					<h3 class="fw-400 text-uppercase text-center">Seaform Soda</h3>
					<ul class="mt-1">
						<li class="menu-line">
							<p>Small</p>
							<span class="menu-middle"></span>
							<p>1.00</p>
						</li>
						<li class="menu-line">
							<p>Medium</p>
							<span class="menu-middle"></span>
							<p>1.25</p>
						</li>
						<li class="menu-line">
							<p>Large</p>
							<span class="menu-middle"></span>
							<p>1.50</p>
						</li>
					</ul>
				</section>
			</div>
		</div>
	`;
	return menuSection;
}

/* harmony default export */ const components_menu = (menu);

;// CONCATENATED MODULE: ./src/js/components/contact.js


function contact() {
	const contactSection = document.createElement('section');
	contactSection.classList.add('content-section');
	contactSection.innerHTML = `
		<h2 class="text-theme text-uppercase text-center">
			Restaurant Location
		</h2>
		<iframe
			class="contact-google-maps-iframe mt-2"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64722591.56959051!2d-149.23960340000002!3d-8.065379849999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed042c30f318eb%3A0x8eff14a070876cbc!2sPacific%20Ocean!5e0!3m2!1sen!2sph!4v1698379316314!5m2!1sen!2sph"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	`;
	return contactSection;
}

/* harmony default export */ const components_contact = (contact);

;// CONCATENATED MODULE: ./src/js/dom.js




const contentMain = document.getElementById('content');

function renderInitialContent() {
	for (const content of [components_home, components_menu, components_contact]) {
		contentMain.appendChild(content());
	}
}



;// CONCATENATED MODULE: ./src/index.js




renderInitialContent();

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map