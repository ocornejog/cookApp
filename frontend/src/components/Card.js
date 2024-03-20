import React from 'react';
import PropTypes from 'prop-types';

// Card.js

// RecipeCard.js

// RecipeCard.js

// RecipeCard.js

const RecipeCard = ({ title, image, description }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-description">
        <h2>{title}</h2> {/* Titre au-dessus de l'image */}
        <p>{description}</p> {/* Description à droite de l'image */}
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeCard;
