import buildHeader from './header.js';
import buildFooter from './footer.js';

const buildSection = () => {
  const section = document.createElement('section'),
        heading = document.createElement('h1'),
        span = document.createElement('span'),
        linebreak = document.createElement("br");

  heading.textContent = 'MIND BLOWN';
  span.textContent = 'Coffee Roasters';
  heading.appendChild(linebreak);
  heading.appendChild(span);
  section.appendChild(heading);

  return section;
}

const home = () => {
  if (!document.querySelector('header')) {
    const content = document.querySelector('.content'),
          banner = document.createElement('div');

    banner.className = 'banner';
    banner.appendChild(buildHeader());
    banner.appendChild(buildSection());
    banner.appendChild(buildFooter());
    content.appendChild(banner);
  } else {
    const banner = document.querySelector('.banner'),
          footer = document.querySelector('footer');

    banner.className = 'banner';
    banner.insertBefore(buildSection(), footer);
  }
};

export default home;