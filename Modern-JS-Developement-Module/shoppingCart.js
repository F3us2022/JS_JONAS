//Exporting Module



console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) { 
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`);
}
console.log(cart);

const totalPrice = 37;
const totalQuanty = 23;
const boxedItem = 31;

export { totalPrice, totalQuanty, boxedItem as bt };
    
    
export default function (num1,num2) { 
    console.log(` added Two Number ${num1 + num2}`);
}

