import react from 'react'
import './photo.css'

const photo = () => {
    return(
        <div className='pere'> 
            <div className='photos'> </div>  
            <ButtonComponent text="Choisir une photo"/>
        </div>

    );
}

const ButtonComponent = ({ type, text, onClick }) => {
    return (
      <button
        className="button secondary" 
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
export default photo;

