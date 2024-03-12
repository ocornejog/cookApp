// delete.js

import React, { useState } from 'react';
import './delete.css'; // Assurez-vous d'ajuster le chemin du fichier CSS

const Delete = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDelete = () => {
    // Mettez ici la logique de suppression définitive
    setPopupVisible(false);
  };

  return (
    <div className="delete-container">
      <img
        src="/trash-outline.svg"
        alt="Trash Icon"
        className="trash-icon"
        onClick={() => setPopupVisible(true)}
      />

      {popupVisible && (
        <div className="popup">
          <p>Voulez-vous supprimer la recette définitivement ?</p>
          <div className="button-container">
            <button onClick={() => setPopupVisible(false)}>Non</button>
            <button onClick={handleDelete}>Oui</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;

