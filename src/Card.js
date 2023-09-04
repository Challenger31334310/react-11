// Card.js
import React from 'react';
import './Card.css';

const cardData = [
  {
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  },
  {
    title: 'Card 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  },
  {
    title: 'Card 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  },
  {
    title: 'Card 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  },
  {
    title: 'Card 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  },
  {
    title: 'Card 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  },
];

const Card = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <div className="cobi"></div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <button className="card-button">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
