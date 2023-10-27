import home from './components/home';
import menu from './components/menu';
import contact from './components/contact';

const tabs = document.querySelectorAll('.tab');
const contentMain = document.getElementById('content');

function handleTabClick(e) {
	const activeTabName = e.currentTarget.dataset.tabName;
	let activeContent;

	for (const tab of tabs) {
		if (tab.dataset.tabName === activeTabName) {
			tab.classList.add('active');
		} else {
			tab.classList.remove('active');
		}
	}

	switch (activeTabName) {
		case 'home':
			activeContent = home;
			break;
		case 'menu':
			activeContent = menu;
			break;
		case 'contact':
			activeContent = contact;
			break;
	}
	contentMain.innerHTML = '';
	contentMain.appendChild(activeContent());
}

function renderInitialContent() {
	contentMain.appendChild(home());
}

function attachEventListener() {
	for (const tab of tabs) {
		tab.addEventListener('click', handleTabClick);
	}
}

export { renderInitialContent, attachEventListener };