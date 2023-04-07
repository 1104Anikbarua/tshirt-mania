import React from 'react';
import './MapTshirt.css';

const MapTshirt = ({ tshirt, handleAddToCart, clicked }) => {
    // console.log(tshirt)
    // console.log(clicked.length)
    const { picture, name, price } = tshirt;
    const checked = clicked.find((item) => item._id === tshirt._id)
    console.log(checked)
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <button className={checked ? 'disabled' : 'enabled'}
                disabled={checked ? true : false} onClick={() => handleAddToCart(tshirt)}
            >Add To Cart</button>
        </div>
    );
};

export default MapTshirt;