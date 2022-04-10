'use strict';




//**------------------------------------------------ DEFAULT PARAMETER FUNCTION ---------------------------------------------*/

/*
const flightBooking = [];

const createBooking = function (flightNumber, numPassenger = 1, price = 199 * numPassenger) {
    
    const booking = {
        flightNumber,
        numPassenger,
        price
    }

    console.log(booking);
    flightBooking.push(booking);

}

createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123', 8);
createBooking('LH123',undefined,800);
console.log(flightBooking);
*/





//**------------------------------------------------ CALLBACK FUNCTION ---------------------------------------------*/

/*
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
 };

const upperFirstWord = function (str) {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
 }; 


 //Higher Order Function

const transform = function (str, fnc) {
    console.log(`Orignal Sentence ${str}`);
    console.log(`Transformed Sentence ${fnc(str)} `);
};
 
transform('Javascript is a programming language',upperFirstWord);
transform('Javascript is a programming language', oneWord);
*/





//**------------------------------------------------ FUNCTION RETURNING FUNCTIONS -------------------------------------------*/
 
/*
const greet = function (greeting) { 
    return function (name) {
        console.log(`${greeting}${name}`);
     }
};

greet('hey')('Jonas');


//Using Arrow Function

const greetArrow = (greeting)=>(name) => console.log(`${greeting}${name}`);
greetArrow('Hi')('Arrow');

*/






//**------------------------------------------------ CALL , APPLY AND BIND METHOD -------------------------------------------*/

/*

const lufthansa = {
    airline:'Lufthansa',
    iataCode:'LH',
    booking: [],
    book(flightnum, name) {
        console.log(`${name} booked a seat on this plane ${this.airline} flight ${this.iataCode}${flightnum}`);
        this.booking.push({ flight: `${this.iataCode}${flightnum}`, name });
    }
    
}

lufthansa.book(737, 'Jonas');
console.log(lufthansa.booking);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: []
}

const bk = lufthansa.book;

//Doesnot Work
// console.log(bk());
// bk(343,'keneth')


//-------------- USE OF CALL--------------------------------

bk.call(eurowings, 747, 'Shekhar');
bk.call(lufthansa, 747, 'karen');
console.log(eurowings.booking);

const swissAir = {
    airline: 'Swiss',
    iataCode: 'SW',
    booking:[]
}

bk.call(swissAir, 777, 'Lehman');



//-------------- USE OF APPLY ---> Apply is similiar to CALL only difference is it takes input parameter as an ARRAY


const arrPara = [737,'James']
bk.apply(swissAir, arrPara);


//APPLY isnt used much as the same can be done using CALL using SPREAD OPERATOR

bk.call(eurowings, ...arrPara);


//-------------- USE OF BIND ---> BIND creates a new function in itself and then which can be passed parameters to call.

const bindLf= bk.bind(lufthansa);
bindLf(777, 'Nicole');

const bindEW = bk.bind(eurowings);
const bindSW = bk.bind(swissAir);


//USE OF BINF method for PARTIAl APPLICATION
const bindSW777 = bk.bind(swissAir, 777);
bindSW777('Anderson');


//More USAGE

const addTax = (rate,value) => value + value * rate;
//Non Partial method
const addVat = addTax.bind(null);
console.log(addVat(0.1, 100));
//Using Pratial method and defaulting the tax rate.
const newAddVat = addTax.bind(null, 0.1);
console.log(newAddVat(100));

*/







//**------------------------------------- IMMEDIATELY INVOKED FUNCTION EXPRESSION  ---------------------------------------*/

(function () {
    console.log(`This is an IIFE without parameter.`);
})();