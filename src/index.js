import './scss/style.scss';
import navMenu from './components/nav/nav.js';
import home from './components/home/home.js';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

const loadNavMenu = () => content.appendChild(navMenu());

const loadHomePage = () => content.appendChild(home());

const initialLoad = () => {
  loadNavMenu();
  loadHomePage();
};

initialLoad();
