import React from 'react';


const MenuItemCard = ({ name, price, description, imageUrl, onBuy }) => {
  return (
    <div className="menu-item-card">
      <img src={imageUrl} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="menu-item-price">{price}</span>
        <button className="buy-button" onClick={onBuy}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
