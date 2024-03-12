import React from 'react';
import '../styles/IngredientsList.css';

const IngredientsList = ({ ingredientsList }) => {
  return (
    <div className="list-container">
      <h2 className="ingredients-title">Ingrédients</h2>
      <ul className="ingredients-list">
        {ingredientsList.map((ingredient, index) => (
          <li key={index}>
            &bull; {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;