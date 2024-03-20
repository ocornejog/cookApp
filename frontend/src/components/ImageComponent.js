import React from 'react';

const image = process.env.PUBLIC_URL + "/backgroud.png";
const ImageComponent = () => {
    return (
        <div className="image-container">
            <img className='responsive-image' src = {image} alt="Delicious Food"/>
        </div>
    );
}

export default ImageComponent;
