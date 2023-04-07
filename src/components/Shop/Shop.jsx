import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MapTshirt from '../MapTshirt/MapTshirt';
import Selected from '../SelectedTshirt/SelectedTshirt';
import './Shop.css'

const Shop = () => {
    const tshirts = useLoaderData();
    const [selected, setSelected] = useState([]);
    const [clicked, setClicked] = useState([])
    // console.log(tshirts)
    // console.log(products)
    // let clicked = {};
    const handleAddToCart = (tshirt) => {
        setClicked([...clicked, tshirt])
        const alreadySelected = selected?.find((product) => product?._id === tshirt._id);
        if (alreadySelected) {
            window.alert('already selected')
        }
        else {
            setSelected([...selected, tshirt])
        }

    }
    console.log(clicked)
    return (
        <div className='shop-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map((tshirt, index) => <MapTshirt
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                        key={tshirt._id}
                        clicked={clicked}
                    ></MapTshirt>)
                }
            </div>
            <div className='selected-tshirt'>
                <p>Total Selected {selected.length}</p>
                <Selected
                    selected={selected}
                ></Selected>
            </div>
        </div>
    );
};

export default Shop;