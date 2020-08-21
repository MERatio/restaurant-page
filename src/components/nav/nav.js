const navMenu = () => {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const ul = document.createElement('ul');
  ul.classList.add('nav-items');

  nav.appendChild(ul);

  const linkNames = ['Home', 'Menu', 'Contact'];
  for (let linkName of linkNames) {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.id = linkName.toLowerCase() + 'Link';
    link.textContent = linkName;

    li.appendChild(link);
    ul.appendChild(li);
  }

  return nav;
};

export default navMenu;
