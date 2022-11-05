import React from 'react';

const Cosmetic = (props) => {
    const { name, price, id } = props.Cosmetic;
    return (
        <div>
            <h2>Buy this : {name}</h2>
            <p>Price at : {price} tk</p>
            <p><small>UID : {id}</small></p>
        </div>
    );
};

export default Cosmetic;