import React from 'react';

const image = process.env.PUBLIC_URL + "/_1407d804-e645-4c0e-b2cb-506ab54844ac.jpeg";
const ImageComponent = () => {
    return (
        <div className="image-container">
            <img className='responsive-image' src = {image} alt="Delicious Food"/>
        </div>
    );
}

export default ImageComponent;
