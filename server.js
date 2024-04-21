const express = require('express');
const app = express();

const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        img: 'https://images.pexels.com/photos/5474630/pexels-photo-5474630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        img: 'https://images.pexels.com/photos/4040770/pexels-photo-4040770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        img: 'https://images.pexels.com/photos/18518556/pexels-photo-18518556/free-photo-of-pan-with-rigatoni-pasta-with-tomato-sauce-melted-cheese-and-sprinkled-with-basil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        img: 'https://images.pexels.com/photos/248469/pexels-photo-248469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        img: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
}
  
// Experimenting with adding css files to app
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.render('home.ejs', {
    name: RESTAURANT.name,
    address: RESTAURANT.address,
    phone: RESTAURANT.phone,
    isOpen: RESTAURANT.isOpen
  });
});

app.get('/menu', (req, res) => {
  res.render('menu.ejs', {
    name: RESTAURANT.name,
    address: RESTAURANT.address,
    phone: RESTAURANT.phone,
    isOpen: RESTAURANT.isOpen,
    menu: RESTAURANT.menu
  });
});

app.get('/menu/:category', (req, res) => {
  let category = '';

  if (req.params.category === 'mains') {
    category = 'mains';
  } else if (req.params.category === 'desserts') {
    category = 'desserts';
  } else if (req.params.category === 'sides') {
    category = 'sides';
  }
  
  let menuSorted = RESTAURANT.menu.filter( (item) => item.category === category);

  category = category[0].toUpperCase() + category.slice(1);

  res.render('category.ejs', {
    name: RESTAURANT.name,
    address: RESTAURANT.address,
    phone: RESTAURANT.phone,
    isOpen: RESTAURANT.isOpen,
    menuItems: menuSorted,
    category: category
  });
});

// For loop used to open multiple ports in conjunction with AWS server ports
for (let port = 3000; port < 3011; port++) {
  app.listen(port, () => {
      console.log(`Server running on port ${port}...`);
  });
};
