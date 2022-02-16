import buildHeader from './header.js';
import buildFooter from './footer.js';

const buildCoffeeList = () => {
  const coffeeGrid = document.createElement('section'),
        coffees = {
          'YIRGACHEFFE': 'Ethopia'
        };

  for (const [key, value] of Object.entries(coffees)) {
    const article = document.createElement('article');
    
  }
  return coffeeGrid;
}

const coffee = () => {
  const content = document.querySelector('.content'),
        banner = document.createElement('div');
  
  banner.className = 'banner';
  banner.appendChild(buildHeader());
  banner.appendChild(buildCoffeeList());
  banner.appendChild(buildFooter());
  content.appendChild(banner);
}

export default coffee;