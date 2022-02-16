import buildHeader from './header.js';
import buildFooter from './footer.js';

const buildHeading = () => {
  const heading = document.createElement('h1'),
        span = document.createElement('span'),
        linebreak = document.createElement("br");;
  heading.textContent = 'MIND BLOWN';
  span.textContent = 'Coffee Roasters';
  heading.appendChild(linebreak);
  heading.appendChild(span);
  return heading;
}

const buildHomeFooter = () => {
  const footer = buildFooter(),
        attribution = document.createElement('p'),
        imgAuthor = document.createElement('a'),
        span = document.createElement('span'),
        behance = document.createElement('a');

  attribution.textContent = 'Photo by ';
  imgAuthor.setAttribute('href', 'https://www.behance.net/Pm_ghst1992');
  imgAuthor.textContent = 'Pedro Moreno A. França';
  span.textContent = ' on ';
  behance.setAttribute('href', 'https://www.behance.net/');
  behance.textContent = 'Behance';

  attribution.appendChild(imgAuthor);
  attribution.appendChild(span);
  attribution.appendChild(behance);
  footer.appendChild(attribution);
  footer.className = 'home-footer';

  return footer;
}

const home = () => {
  const content = document.querySelector('.content'),
        banner = document.createElement('div');
  banner.className = 'banner';
  banner.appendChild(buildHeader());
  banner.appendChild(buildHeading());
  banner.appendChild(buildHomeFooter());
  content.appendChild(banner);
};

export default home;