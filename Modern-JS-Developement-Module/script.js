//Importing Module


//**---------------------------------------------METHOD 1 FOR IMPORTING */

/*
import { addToCart, totalPrice, totalQuanty as tq, bt } from './shoppingCart.js';
console.log('Importing Module');
addToCart('Apple', 10);
addToCart('Orange', 9);

const arr = [{ n:1, m:2, c:3}, {a:'a',b:'b',c:'c'}];
console.log(arr);

console.log(`totalPrice ${totalPrice},totalQuantity ${tq},boxedItem ${bt}`);

*/


//**---------------------------------------------METHOD 2 FOR IMPORTING --> PUTTING ALL VALUES UNDER AN OBJECT */

/*
import * as shoppingCartValue from './shoppingCart.js';
console.log(shoppingCartValue);
shoppingCartValue.addToCart('Oranges',10);
*/


//**---------------------------------------------METHOD 3 FOR IMPORTING --> ADDING THE DEFAULT FUNCTION */

// import add, { addToCart, totalPrice, totalQuanty, bt } from './shoppingCart.js';

// add(1,2);



//**---------------------------------------------TOP LEVEL AWAIT ES2022 (Also Blocking effect of top level await when not used with async function)-*/

/*
console.log('Start Fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');
*/


//Tradition use of await with asyn

// const getLastPost = async function () { 
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
    
//     //return data;

//     //to get the last array object value

//     return ({title:data.at(-1).title,text:data.at(-1).body})

// }

// const lastPost2 = await getLastPost();
// console.log(lastPost2);



//**---------------------------------------------USE of NPM and USING MODULE LODASH AS AN EXMAPLE*/
import * as shoppingCartObj from './shoppingCart.js';
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    orgName: 'le alio',
    dos:1991,
    cart: [
        { product: 'pizza', quantity: 10 },
        { product: 'pasta', quantity: 11 },
    ],
    user: { loggedIn: true },
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);


state.orgName = 'Fresco';
state.user.loggedIn = false;


console.log(stateClone);
console.log(stateDeepClone);
console.log(shoppingCartObj);