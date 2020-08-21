const contact = () => {
  const div = document.createElement('section');
  div.classList.add('contact');

  const pageHeader = document.createElement('header');
  pageHeader.classList.add('page-header');
  div.appendChild(pageHeader);

  const pageH1 = document.createElement('h1');
  pageH1.classList.add('page-h1');
  pageH1.textContent = 'Contact Us';
  pageHeader.appendChild(pageH1);

  return div;
};

export default contact;
