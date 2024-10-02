import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
     <h1 style={{ textAlign: 'center', color: '#007bff', fontSize: '36px', fontFamily: 'Arial, sans-serif' }}>
  Welcome
</h1>

      <p>
        Welcome to Apna Restaurant, where culinary artistry meets heartfelt hospitality. Our restaurant is a celebration of flavors, aromas, and traditions, designed to take you on a gastronomic journey like no other. Nestled in a cozy setting with a modern twist, we offer a vibrant menu filled with a variety of dishes inspired by diverse cuisines. Whether you're craving a comforting bowl of pasta, sizzling grills, or a delicate dessert, every bite is crafted to delight your senses. Enjoy a memorable dining experience with us as we serve up not just delicious food, but also moments of joy and togetherness. From family dinners to romantic dates or casual meet-ups with friends, Apna Restaurant is the perfect place to savor life’s special occasions.

      </p>

      {/* Adding images to the Home page */}
      <div className="home-images">
        <img src={process.env.PUBLIC_URL + '/images/home image (1).jpg'} alt="Delicious Dish 1" className="home-image" />
        <img src={process.env.PUBLIC_URL + '/images/home image (2).jpg'} alt="Delicious Dish 1" className="home-image" />
        <img src={process.env.PUBLIC_URL + '/images/home image.jpg'} alt="Delicious Dish 1" className="home-image" />

      </div>
      <p>
        Whether you’re starting your day with a hearty breakfast, enjoying a leisurely lunch, or indulging in a romantic dinner, every meal at Apna Restaurant is an experience worth savoring. From the delicate spices of our signature dishes to the delectable aromas wafting from the kitchen, we invite you to explore a world of taste and texture that will leave a lasting impression. Complement your meal with our handpicked selection of wines, craft cocktails, or freshly brewed teas and coffees — perfect for elevating any dining occasion.
      </p>

      <Link to="/menu">
        <button className="menu-button">View Menu</button>
      </Link>

    </div>
  );
};

export default Home;
