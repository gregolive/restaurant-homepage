import buildHeader from './header.js';
import buildFooter from './footer.js';

const buildHeading = () => {
  const heading = document.createElement('h1'),
        span = document.createElement('span'),
        linebreak = document.createElement("br");

  heading.textContent = 'MIND BLOWN';
  span.textContent = 'Coffee Roasters';
  heading.appendChild(linebreak);
  heading.appendChild(span);

  return heading;
}

const home = () => {
  const content = document.querySelector('.content'),
        banner = document.createElement('div');

  banner.className = 'banner';
  banner.appendChild(buildHeader());
  banner.appendChild(buildHeading());
  banner.appendChild(buildFooter());
  content.appendChild(banner);
};

export default home;