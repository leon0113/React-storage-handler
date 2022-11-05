const add = (first, second) => {
    return first + second;
}
const multiply = (first, second) => {
    return first * second;
}

// const numbers = [220, 54, 851, 541894, 5, 44];
// const sumReducer = (pervious, current) => pervious + current;
// const total = numbers.reduce(sumReducer, 0)
// console.log(total);

// const items = [
//     { id: 1, name: 'lipstick1', price: 245 },
//     { id: 2, name: 'lipstick2', price: 256 },
//     { id: 3, name: 'lipstick3', price: 255 },
//     { id: 4, name: 'lipstick4', price: 205 },
// ];

// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = cosmetics => {
    const reducer = (previous, current) => previous + current.price;
    const total = cosmetics.reduce(reducer, 0);
    return total;
}


export {
    add,
    multiply,
    getTotalPrice as getTotal
}


