import React from 'react';
import MenuItemCard from '../components/MenuItemCard';

const Menu = () => {
  
  const menuItems = [
    { 
      name: 'Pizza Margherita', 
      price: '$12', 
      description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil.',
      imageUrl: process.env.PUBLIC_URL + '/menuimages/pizza.jpg'
    },
    { 
      name: 'Pasta Carbonara', 
      price: '$15', 
      description: 'Creamy pasta with crispy pancetta, egg, and grated parmesan cheese.',
      imageUrl: process.env.PUBLIC_URL + '/menuimages/Pasta Carbonara.jpg'
    },
    { 
      name: 'Caesar Salad', 
      price: '$10', 
      description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
      imageUrl: process.env.PUBLIC_URL + '/menuimages/Caesar Salad.jpg'
    },
    { 
      name: 'Grilled Chicken Sandwich', 
      price: '$14', 
      description: 'Juicy grilled chicken breast served with lettuce, tomato, and mayo on a toasted bun.',
       imageUrl: process.env.PUBLIC_URL + '/menuimages/Grilled Chicken Sandwich.jpg'
    },
    { 
      name: 'Shrimp Scampi', 
      price: '$18', 
      description: 'Succulent shrimp sautéed in garlic butter sauce served over linguine pasta.',
      imageUrl: process.env.PUBLIC_URL + '/menuimages/Shrimp Scampi.jpg'    },
    { 
      name: 'Chicken Alfredo', 
      price: '$17', 
      description: 'Grilled chicken breast over fettuccine pasta with creamy Alfredo sauce.',
       imageUrl: process.env.PUBLIC_URL + '/menuimages/Chicken Alfredo.jpg'
    },
    { 
      name: 'Mushroom Risotto', 
      price: '$15', 
      description: 'Creamy risotto cooked with mushrooms, garlic, and white wine.',
       imageUrl: process.env.PUBLIC_URL + '/menuimages/Mushroom Risotto.jpg'
    },
    { 
      name: 'Greek Salad', 
      price: '$9', 
      description: 'Fresh cucumbers, tomatoes, feta cheese, and olives, tossed in a lemon-oregano dressing.',
       imageUrl: process.env.PUBLIC_URL + '/menuimages/Greek Salad.jpg'
    },
    { 
      name: 'Iced Tea', 
      price: '$3.5', 
      description: 'Chilled black tea served with a lemon wedge.',
      imageUrl: process.env.PUBLIC_URL + '/menuimages/Iced Tea.jpg'
    },
    { 
      name: 'Espresso', 
      price: '$5', 
      description: 'Rich and bold espresso shot made with freshly ground coffee beans.',
      imageUrl: process.env.PUBLIC_URL + '/menuimages/Espresso.jpg'
    }
  ];

  // Handler for Buy button click
  const handleBuy = (itemName) => {
    alert(`You have purchased: ${itemName}`);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <MenuItemCard 
            key={index} 
            name={item.name} 
            price={item.price} 
            description={item.description} 
            imageUrl={item.imageUrl} 
            onBuy={() => handleBuy(item.name)} // Pass the buy handler to MenuItemCard
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
