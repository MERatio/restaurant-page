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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/krusty-krab-outside.jpg
const krusty_krab_outside_namespaceObject = __webpack_require__.p + "97349f487fe31dd27b1c.jpg";
;// ./src/js/components/home.js


const home = document.createElement('section');
home.classList.add('content-section', 'content-home');
home.innerHTML = `
    <header>
    <h1 class="text-theme text-center">The Krusty Krab</h1>
    <p class="mt-1">
      The Krusty Krab is a fast food restaurant located in Bikini Bottom,
      founded and owned by Eugene H. Krabs. It is also the most popular and best
      known restaurant in Bikini Bottom and one of the main locations of
      SpongeBob SquarePants. It first appears in the pilot episode "Help
      Wanted."
    </p>
    <p class="mt-1">
      Famous for its Krabby Patty burgers, it is a rival to Plankton's highly
      unpopular across-the-street restaurant called the Chum Bucket. Its
      employees are SpongeBob SquarePants and Squidward Tentacles, respectively
      the fry cook and cashier.
    </p>
  </header>
  <img
    src="${krusty_krab_outside_namespaceObject}"
    alt="View of Krusty Krab from the outside"
  />
`;

/* harmony default export */ const components_home = (home);

;// ./src/js/components/menu.js


const menu = document.createElement('section');
menu.classList.add('content-section');
menu.innerHTML = `
  <h1 class="text-theme text-center">Galley Grub</h1>
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
            <p>w/sea cheese</p>
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
            <p>w/sea cheese</p>
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
            <p>w/sea cheese</p>
            <span class="menu-middle"></span>
            <p>3.25</p>
          </div>
        </li>
      </ul>
      <section class="mt-2">
        <h3 class="fw-400 text-uppercase">Coral Bits</h3>
        <ul class="ml-1">
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
            <p>salty sauce</p>
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
      <section class="seafoam-soda-content mt-1">
        <h3 class="fw-400 text-uppercase text-center">Seafoam Soda</h3>
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

/* harmony default export */ const components_menu = (menu);

;// ./src/js/components/contact.js


const contact = document.createElement('section');
contact.classList.add('content-section');
contact.innerHTML = `
  <h2 class="text-theme text-center">Restaurant Location</h2>
  <iframe
    class="contact-google-maps-iframe mt-1"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64722591.56959051!2d-149.23960340000008!3d-8.065379849999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed042c30f318eb%3A0x8eff14a070876cbc!2sPacific%20Ocean!5e0!3m2!1sen!2sph!4v1758939197753!5m2!1sen!2sph"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
`;

/* harmony default export */ const components_contact = (contact);

;// ./src/js/dom.js




const tabs = document.querySelectorAll('.jsTab');
const contentMain = document.querySelector('.jsContent');
let prevActiveTabName = 'home';

function handleTabClick(e) {
  const activeTabName = e.currentTarget.dataset.tabName;

  if (prevActiveTabName === activeTabName) {
    return;
  } else {
    prevActiveTabName = activeTabName;
  }

  for (const tab of tabs) {
    if (tab.dataset.tabName === activeTabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  }

  let activeContent;
  switch (activeTabName) {
    case 'home':
      activeContent = components_home;
      break;
    case 'menu':
      activeContent = components_menu;
      break;
    case 'contact':
      activeContent = components_contact;
      break;
  }

  contentMain.replaceChildren();
  contentMain.appendChild(activeContent);
}

function attachEventListeners() {
  for (const tab of tabs) {
    tab.addEventListener('click', handleTabClick);
  }
}

function renderInitialContent() {
  contentMain.appendChild(components_home);
}



;// ./src/index.js



attachEventListeners();
renderInitialContent();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map