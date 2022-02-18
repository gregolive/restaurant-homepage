import '../css/style.css';
import home from './home.js';
import coffee from './coffee.js';
import contact from './contact.js';

(function() {
  home();

  const homeBtn = document.querySelector('.home-btn'),
        coffeeBtn = document.querySelector('.coffee-btn'),
        contactBtn = document.querySelector('.contact-btn'),
        activeBtn = document.querySelector('.active-btn');


  homeBtn.addEventListener('click', (e) => {
    resetPage();
    home();
    assignActiveTab(e);
  })

  coffeeBtn.addEventListener('click', (e) => {
    resetPage();
    coffee();
    assignActiveTab(e);
  })

  contactBtn.addEventListener('click', (e) => {
    resetPage();
    contact();
    assignActiveTab(e);
  })

  function resetPage() {
    const banner = document.querySelector('.banner'),
          buttons = document.querySelectorAll('.btn');
    
    banner.remove();
    
    buttons.forEach(button => {
      button.className = "";
    });
    return true;
  }

  function assignActiveTab(e) {
    console.log(e.target);
    e.target.classList.add('active-btn');
  }
})();
