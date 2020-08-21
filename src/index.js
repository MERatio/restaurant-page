import './scss/style.scss';
import navMenu from './components/nav/nav.js';
import home from './components/home/home.js';

const body = document.body;

const content = document.createElement('div');
content.id = 'content';
body.appendChild(content);

const loadNavMenu = () => content.appendChild(navMenu());

const loadHomePage = () => {
  body.classList.add('body-bg');
  content.appendChild(home());
};

const addActiveNavLinkStyle = (navLinkId) => {
  const navLink = document.getElementById(navLinkId);
  navLink.classList.add('active-nav-link');
};

const addEvents = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((navLink) =>
    navLink.addEventListener('click', navLinkEvent)
  );
};

const navLinkEvent = (e) => {
  wipeContents();

  const navLinkId = e.target.id;

  addActiveNavLinkStyle(navLinkId);

  switch (navLinkId) {
    case 'homeLink':
      loadHomePage();
      break;
    case 'menuLink':
      break;
    case 'contactLink':
      break;
  }
};

const wipeContents = () => {
  body.classList.remove('body-bg');
  content.innerHTML = '';
  loadNavMenu();
  addEvents();
};

const init = () => {
  loadNavMenu();
  loadHomePage();
  addEvents();
};

init();
