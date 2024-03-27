import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import Delete from './delete';
import RecipeCard from './Card';
import '../styles/fiche.css'

// fiche.js

const Fiche = ({ title, image, description }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDelete = () => {
    // Mettez ici la logique de suppression définitive
    setPopupVisible(false);
  };

  return (
    <div className="fiche-container">
      <div className="fiche-content">
        <RecipeCard
          title={title}
          image={image}
          description={description}
        />
        <div className="button-wrapper">
          <ButtonComponent
            type="primary"
            text="Modifier"
            onClick={() => console.log('Bouton Modifier cliqué')}
          />
          <Delete onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Fiche;

