import React, { useState } from 'react';
import '../styles/PhotoSelection.css';

const PhotoSelection = (props) => {

  let d = null;

  if (props.photo !== undefined) {
    d = props.photo;
  }

  const [selectedPhoto, setSelectedPhoto] = useState(d);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(URL.createObjectURL(file));
    if (props.callback !== undefined) {
      props.callback(file);
    }

    // Vous pouvez effectuer d'autres actions ici avec le fichier sélectionné
    //console.log('Fichier sélectionné:', file);
  };

  return (
    <div className='pere'> 
      <div className='photos'>
        {/* Affichez la photo sélectionnée si elle existe */}
        {selectedPhoto && (
          <img
              src={selectedPhoto}
              alt="Selected"
              className="selected-photo"
            />
        )}
      </div>  
      <ButtonComponent text={props.text} onChange={handleFileChange} />
    </div>
  );
};

const ButtonComponent = ({ text, onChange }) => {
  return (
    <label className="button-2 secondary-2">
      {text}
      {/* Input de type file caché, activé par le clic sur le texte du bouton */}
      <input type="file" style={{ display: 'none' }} onChange={onChange} />
    </label>
  );
};

export default PhotoSelection;