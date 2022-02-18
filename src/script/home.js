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
  if (!document.querySelector('.content')) {
    const content = document.createElement('div'),
          banner = document.createElement('div');

    content.className = 'content';
    banner.className = 'banner';
    document.body.appendChild(content);
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