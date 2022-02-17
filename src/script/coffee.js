import buildHeader from './header.js';
import buildFooter from './footer.js';

import Ethiopia from '../img/Ethiopia.jpg';
import Kenya from '../img/Kenya.jpg';
import Colombia from '../img/Colombia.jpg';
import Brazil from '../img/Brazil.jpg';
import ElSalvador from '../img/El-Salvador.jpg';
import Guatemala from '../img/Guatemala.jpg';

function Coffee(name, country, price, image) { 
  this.name = name; 
  this.country = country; 
  this.price = price;
  this.image = image;
}

const buildCoffeeGrid = () => {
  const coffeeGrid = document.createElement('div'),
        coffees = [
          new Coffee('YIRGACHEFFE', 'Ethopia', '1,160', Ethiopia),
          new Coffee('PB KAMWANGI', 'Kenya', '980', Kenya),
          new Coffee('FRUTA MERCADAO', 'Brazil', '950', Brazil),
          new Coffee('HUILA', 'Colombia', '890', Colombia),
          new Coffee('DON JAMIE', 'El Salvador', '1,020', ElSalvador),
          new Coffee('EL INJERTO BOURBON', 'Guatemala', '1,100', Guatemala)
        ];

  coffeeGrid.className = 'coffee-grid';
  
  coffees.forEach(coffee => {
    const gridItem = document.createElement('a'),
          title = document.createElement('h2'),
          description = document.createElement('p'),
          img = document.createElement('img');

    title.textContent = coffee.name;
    description.textContent = `${coffee.country} | ¥${coffee.price}/100g`;
    img.src = coffee.image;
    img.alt = `Coffee beans from ${coffee.country}`;

    gridItem.className = 'grid-item';
    gridItem.appendChild(title);
    gridItem.appendChild(description);
    gridItem.appendChild(img);

    coffeeGrid.appendChild(gridItem);
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