import home from './components/home';
import menu from './components/menu';
import contact from './components/contact';

const contentMain = document.getElementById('content');

function renderInitialContent() {
	for (const content of [home, menu, contact]) {
		contentMain.appendChild(content());
	}
}

export { renderInitialContent };
