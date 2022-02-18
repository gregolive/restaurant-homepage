import '../css/style.css';
import home from './home.js';
import coffee from './coffee.js';
import contact from './contact.js';

home();

const homeBtn = document.querySelector('.home-btn'),
coffeeBtn = document.querySelector('.coffee-btn'),
contactBtn = document.querySelector('.contact-btn');
//activeBtn = document.querySelector('.active-btn');


homeBtn.addEventListener('click', () => {
  resetPage();
  home();
})

coffeeBtn.addEventListener('click', () => {
  resetPage();
  coffee();
})

contactBtn.addEventListener('click', () => {
  resetPage();
  contact();
})

const resetPage = () => {
  let section = document.querySelector('section');
  section.remove();
}
