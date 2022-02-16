const buildHeader = () => {
  const header = document.createElement('header'),
        linkText = ['Home', 'Coffee', 'Contact'];

  for (var i = 0; i < 3; i++) {
    let link = document.createElement('a');
    link.textContent = linkText[i];
    header.appendChild(link);
  }
  return header;
}

const buildHeading = () => {
  const heading = document.createElement('h1'),
        span = document.createElement('span'),
        linebreak = document.createElement("br");;
  heading.innerText = 'MIND BLOWN';
  span.innerText = 'Coffee Roasters';
  heading.appendChild(linebreak);
  heading.appendChild(span);
  return heading;
}

const buildFooter = () => {
  const footer = document.createElement('footer'),
        author = document.createElement('p'),
        github = document.createElement('a'),
        attribution = document.createElement('p'),
        imgAuthor = document.createElement('a'),
        span = document.createElement('span'),
        behance = document.createElement('a');

  author.innerHTML = '&copy;  ';
  github.setAttribute('href', 'https://github.com/gregolive');
  github.innerHTML = 'gregolive';
  author.appendChild(github);
  footer.appendChild(author);

  attribution.textContent = 'Photo by ';
  imgAuthor.setAttribute('href', 'https://www.behance.net/Pm_ghst1992');
  imgAuthor.innerHTML = 'Pedro Moreno A. França';
  span.textContent = ' on ';
  behance.setAttribute('href', 'https://www.behance.net/');
  behance.innerHTML = 'Behance';
  attribution.appendChild(imgAuthor);
  attribution.appendChild(span);
  attribution.appendChild(behance);
  footer.appendChild(attribution);
  return footer;
}

const loadHome = () => {
  const content = document.querySelector('.content'),
        banner = document.createElement('div');
  banner.className = 'banner';
  banner.appendChild(buildHeader());
  banner.appendChild(buildHeading());
  banner.appendChild(buildFooter());
  content.appendChild(banner);
};

export default loadHome;