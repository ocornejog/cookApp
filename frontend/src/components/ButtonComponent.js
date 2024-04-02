import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ type, text, onClick, fontSize }) => {
  return (
    <button
      className={`button ${type}`}
      onClick={onClick}
      style={{ fontSize: fontSize }} // Définir la taille de la police avec la valeur fournie
    >
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  fontSize: PropTypes.string // Propriété pour définir la taille de la police
};

ButtonComponent.defaultProps = {
  fontSize: '16px' // Taille de la police par défaut si aucune taille n'est fournie
};

export default ButtonComponent;
