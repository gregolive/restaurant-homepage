const buildAuthor = () => {
  const author = document.createElement('p'),
        github = document.createElement('a');
  
  author.innerHTML = '&copy;  ';
  github.setAttribute('href', 'https://github.com/gregolive');
  github.textContent = 'gregolive';
  author.appendChild(github);

  return author;
}

const buildAttribution = () => {
  const attribution = document.createElement('p'),
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
  
  return attribution;
}

const buildFooter = () => {
  const footer = document.createElement('footer');
  footer.appendChild(buildAuthor());
  footer.appendChild(buildAttribution());

  return footer;
}

export default buildFooter;