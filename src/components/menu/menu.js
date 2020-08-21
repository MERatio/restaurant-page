const menu = () => {
  const div = document.createElement('section');
  div.classList.add('menu');

  const pageHeader = document.createElement('header');
  pageHeader.classList.add('page-header');
  div.appendChild(pageHeader);

  const pageH1 = document.createElement('h1');
  pageH1.classList.add('page-h1');
  pageH1.textContent = 'Menu';
  pageHeader.appendChild(pageH1);

  return div;
};

export default menu;
