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
    assignActiveTab(e);
    home();
  })

  coffeeBtn.addEventListener('click', (e) => {
    resetPage();
    assignActiveTab(e);
    coffee();
  })

  contactBtn.addEventListener('click', (e) => {
    resetPage();
    assignActiveTab(e);
    contact();
  })

  function resetPage() {
    const content = document.querySelector('.content'),
          buttons = document.querySelectorAll('.btn');
    
    content.textContent = '';
    
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
