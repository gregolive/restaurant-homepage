const buildFooter = () => {
  const footer = document.createElement('footer'),
        author = document.createElement('p'),
        github = document.createElement('a');

  author.innerHTML = '&copy;  ';
  github.setAttribute('href', 'https://github.com/gregolive');
  github.textContent = 'gregolive';
  author.appendChild(github);
  footer.appendChild(author);

  return footer;
}

export default buildFooter;