// manage cart data in local storage
const addToDb = id => {

    let shoppingCart;
    //! get the shopping cart from the local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    //! add quantity
    // const quantity = localStorage.getItem(id); //id is the key. getItem() gives you the value
    const quantity = shoppingCart[id]; // it gives you the value of id
    if (quantity) {
        const newQuantity = quantity + 1;
        // localStorage.setItem(id, newQuantity);
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFormDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        else {
            alert('Sorry! Add first');
        }
    }
}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { addToDb, removeFormDb, deleteShoppingCart };