import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.Cosmetic;

    const addToCart = (id) => {
        addToDb(id)
    }

    // const addToCartWithPara = () => addToCart(name);

    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>Price at : {price} tk</p>
            <p><small><i>UID : {id}</i></small></p>
            {/* <button onClick={addToCartWithPara}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;