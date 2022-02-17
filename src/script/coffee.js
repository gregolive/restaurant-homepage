import buildHeader from './header.js';
import buildFooter from './footer.js';

import Ethiopia from '../img/Ethiopia.jpg';

const buildCoffeeGrid = () => {
  const coffeeGrid = document.createElement('div'),
        coffees = [
          {name: 'YIRGACHEFFE', country: 'Ethopia', price: '980', image: Ethiopia},
          {name: 'YIRGACHEFFE', country: 'Ethopia', price: '980', image: Ethiopia},
          {name: 'YIRGACHEFFE', country: 'Ethopia', price: '980', image: Ethiopia}
        ];

  coffeeGrid.className = 'coffee-grid';
  
  coffees.forEach(coffee => {
    const article = document.createElement('article'),
          title = document.createElement('h2'),
          description = document.createElement('p'),
          img = document.createElement('img');

    title.textContent = coffee.name;
    description.textContent = `${coffee.country} | ¥${coffee.price}/100g`;
    img.src = coffee.image;
    img.alt = `Coffee beans from ${coffee.country}`;

    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(img);

    coffeeGrid.appendChild(article);
  })

  return coffeeGrid;
}

const buildCoffeeSection = () => {
  const section = document.createElement('section'),
        heading = document.createElement('h1');

  heading.textContent = 'OUR ROASTS';
  section.appendChild(heading);
  section.appendChild(buildCoffeeGrid());

  return section;
}

const coffee = () => {
  const content = document.querySelector('.content'),
        main = document.createElement('main');

  main.className = 'banner repeat';
  main.appendChild(buildHeader());
  main.appendChild(buildCoffeeSection());
  main.appendChild(buildFooter());
  content.appendChild(main);
}

export default coffee;