import buildHeader from './header.js';
import buildFooter from './footer.js';

const buildContactInfo = () => {
  const section = document.createElement('section'),
        heading = document.createElement('h1'),
        blurb = document.createElement('p'),
        phone = document.createElement('p'),
        email = document.createElement('p');

  section.className = 'contact-section'
  heading.textContent = 'GET IN TOUCH';
  blurb.textContent = 'Hey there! We would love to hear from you. Please give us a call or send us an email.'
  phone.textContent = 'Phone: 01-2345-6789';
  email.textContent = 'Email: info@mindblowncoffee.com';

  section.appendChild(heading);
  section.appendChild(blurb);
  section.appendChild(phone);
  section.appendChild(email);

  return section;
}

const contact = () => {
  const content = document.querySelector('.content'),
        banner = document.createElement('div');

  banner.className = 'banner';
  banner.appendChild(buildHeader());
  banner.appendChild(buildContactInfo());
  banner.appendChild(buildFooter());
  content.appendChild(banner);
};

export default contact;