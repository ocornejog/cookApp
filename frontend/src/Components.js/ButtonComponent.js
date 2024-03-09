
import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ type, text, onClick }) => {
  return (
    <button
      className={`button ${type}`} // Ajoutez des styles CSS appropriés pour chaque type (primary, secondary, tertiary)
      onClick={onClick}
    >
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
