const buildHeader = () => {
  const header = document.createElement('header'),
        linkText = ['Home', 'Coffee', 'Contact'];

  for (var i = 0; i < linkText.length; i++) {
    let link = document.createElement('a');
    link.textContent = linkText[i];
    header.appendChild(link);
  }
  return header;
}

export default buildHeader;