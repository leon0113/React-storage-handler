import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getTotal(cosmetics);
    return (
        <div>
            <h1>Welcome to my Cosmetic store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    Cosmetic={cosmetic}
                    key={cosmetic.id}
                >
                </Cosmetic>)
            }
            < p >Total Money : {total}</p>
        </div >
    );
};

export default Cosmetics;