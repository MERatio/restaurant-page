import './scss/style.scss';
import navMenu from './components/nav/nav.js';
import home from './components/home/home.js';
import menu from './components/menu/menu.js';

const body = document.body;

const content = document.createElement('div');
content.id = 'content';

let navLinks;

const loadNavMenu = () => body.appendChild(navMenu());

const loadContentDiv = () => body.appendChild(content);

const loadHomePage = () => {
  body.classList.add('body-bg');
  content.appendChild(home());
};

const loadMenuPage = () => content.appendChild(menu());

const addActiveNavLinkStyle = (navLinkId, navLinks) => {
  navLinks.forEach((navLink) => {
    navLink.id === navLinkId
      ? navLink.classList.add('active-nav-link')
      : navLink.classList.remove('active-nav-link');
  });
};

const navLinkEvent = (e) => {
  const navLinkId = e.target.id;

  navLinkId === homeLink ? wipeContents('homeLink') : wipeContents();

  addActiveNavLinkStyle(navLinkId, navLinks);

  switch (navLinkId) {
    case 'homeLink':
      loadHomePage();
      break;
    case 'menuLink':
      loadMenuPage();
      break;
    case 'contactLink':
      break;
  }
};

const addEvents = () => {
  navLinks.forEach((navLink) =>
    navLink.addEventListener('click', navLinkEvent)
  );
};

const wipeContents = (isHomeLink = false) => {
  if (!isHomeLink) {
    body.classList.remove('body-bg');
  }
  content.innerHTML = '';
};

const init = () => {
  loadNavMenu();
  navLinks = document.querySelectorAll('.nav-link');
  loadContentDiv();
  loadHomePage();
  addEvents();
};

init();
