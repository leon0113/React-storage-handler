import React from 'react';
import { add, multiply } from '../../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 12;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h2>This is Shoes component</h2>
            <p>Multiply : {result}</p>
            <p>Sum : {sum}</p>
        </div>
    );
};

export default Shoes;