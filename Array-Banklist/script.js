'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//**--------------------------------------------------- SIMPLE ARRAY METHODS ------------------------------------------- */
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//----------SLICE (Doesnt changes the orignal array.Creates a new array with changes)

console.log(arr.slice(1));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //-----------> way of copying as array
console.log([...arr]); //--------------> Another way of copying an array

//---------SPLICE  (Changes the orignal array)

console.log(arr.splice(1));
console.log(arr);

console.log(arr.splice(-2));
console.log(arr);

//--------REVERSE

const arrNew = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arrNew.reverse());

//--------CONCAT

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
console.log(arr1.concat(arr2)); // Concating 2 arrays method 1
console.log([...arr1, ...arr2]); // Concating 2 arrays method 2

//--------JOIN

console.log(arr1.concat(arr2).join('-'));
*/

//**--------------------------------------------------- ARRAY 'AT' METHOD ------------------------------------------- */

/*
const arr = [11, 22, 64, 58];
console.log(arr[0]);
console.log(arr.at(0));

//Getting last array element

console.log(arr[arr.length - 1]); //Method-1
console.log(arr.slice(-1)[0]); //Method-2
console.log(arr.at(-1)); //Method-3
*/

//**---------------------------------------- LOOPING USING FOR EACH METHOD ------------------------------------------- */

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//------USING 'FOR OF'

console.log('---------------------- For Of LOOP--------------------');
for (const move of movements) {
  if (move > 0) {
    console.log(`You have deposited ${move}`);
  } else {
    console.log(`You have withdrawn ${Math.abs(move)}`);
  }
}

//------USING 'FOREACH'
console.log('---------------------- ForEach LOOP--------------------');

movements.forEach(function (move) {
  if (move > 0) {
    console.log(`You have deposited ${move}`);
  } else {
    console.log(`You have withdrawn ${Math.abs(move)}`);
  }
});

//------GETTING THE COUNTER VARIABLE USING 'For Of' and 'ForEach' LOOPS

//------USING 'FOR OF'

console.log('---------------------- For Of LOOP--------------------');
for (const [index, move] of movements.entries()) {
  if (move > 0) {
    console.log(`Movement ${index + 1}: You have deposited ${move}`);
  } else {
    console.log(`Movement ${index + 1}: You have withdrawn ${Math.abs(move)}`);
  }
}

console.log('---------------------- ForEach LOOP--------------------');

movements.forEach(function (move, index, array) {
  if (move > 0) {
    console.log(`Movement ${index + 1}: You have deposited ${move}`);
  } else {
    console.log(`Movement ${index + 1}: You have withdrawn ${Math.abs(move)}`);
  }
});

*/

//**---------------------------------------- 'FOR EACH' LOOP ON MAP AND SET ------------------------------------------- */

/*

//-----ForEach on MAP

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, array) {
  console.log(`${key}: ${value}`);
});

//------ForEach on SET

const currenciesUnique = new Set(['CAD', 'USD', 'CAD', 'INR', 'EUR', 'AED']);

currenciesUnique.forEach(function (value, key, array) {
  //console.log(`${key}:${value}`); // SETS doesnot have indexes so it cant have keys
  console.log(`${value}`);
});

//-----ForEach on OBJECT

const currObg = Object.fromEntries(currencies);
console.log(currObg);
Object.entries(currObg).forEach(function ([keyName, value], key, array) {
  console.log(`${keyName}:${value}`);
});

*/
