// manage cart data in local storage
const addToDb = id => {
    let shoppingCart = {};

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    console.log(typeof shoppingCart);

    const quantity = localStorage.getItem(id); //id is the key. getItem() gives you the value
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        // localStorage.setItem(id, 1);
    }

}

export { addToDb };