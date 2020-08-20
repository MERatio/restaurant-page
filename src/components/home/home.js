const setHomeBg = () => {
  document.body.classList.add('body-bg');
};

const home = () => {
  setHomeBg();

  const div = document.createElement('div');
  div.classList.add('home');

  const p = document.createElement('p');
  p.classList.add('home-text');
  p.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Vivamus semper eleifend nisl at eleifend.`;
  div.appendChild(p);

  return div;
};

export default home;
