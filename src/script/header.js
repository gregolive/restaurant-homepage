const buildHeader = () => {
  const header = document.createElement('header'),
        linkText = [
          { text: 'Home', class: 'btn home-btn' },
          { text: 'Coffee', class: 'btn coffee-btn' },
          { text: 'Contact', class: 'btn contact-btn' }
        ];

  linkText.forEach(link =>{
    let headerLink = document.createElement('a');
    headerLink.innerHTML = link.text;
    headerLink.className = link.class;
    header.appendChild(headerLink);
  });

  return header;
}

export default buildHeader;