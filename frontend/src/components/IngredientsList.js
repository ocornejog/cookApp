import React from 'react';
import '../styles/IngredientsList.css';

const IngredientsList = ({ ingredientsList, amountPeople }) => {
  return (
    <div className="list-container">
      <h2 className="ingredients-title">Ingrédients</h2>
      <h4 className="ingredients-title-2">{`(Pour ${amountPeople} personne(s))`}</h4>
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

//-------------------------------------------------------------------
// Default props for the component
IngredientsList.defaultProps = {
  amountPeople: 1
};