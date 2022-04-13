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

//** */

//**------------------------------------------- CREATING DOM ELEMENTS USING 'FOR EACH'------------------------------------ */

const displayMovements = function (movement, sortMovReq = false) {
  containerMovements.innerHTML = '';

  //-----------------------------------------IMPLEMENTING SORTING USING SORT----------------------------------------
  const movs = sortMovReq
    ? movement.slice().sort(function (a, b) {
        return a < b ? 1 : -1;
      })
    : movement;

  //

  movs.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //  console.log(type);
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    //  console.log(html);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(account1.movements);

//

//

//**------------------------------------------ COMPUTING USERNAME USING MAP FUNCTION ----------------------------------- */

const user = 'Steven Thomas Williams';
const userLower = user.toLowerCase().split(' ');
console.log(userLower);
const initials = userLower.map(function (val) {
  return val[0];
});
const username = initials.join('');
console.log(username);

//
//---------- The above code in a one liner
//

const userName = user
  .toLowerCase()
  .split(' ')
  .map(function (value) {
    return value[0];
  })
  .join('');
console.log(userName);

//
//---------- Using the ARROW FUNCTION
//

const userNameArrow = user
  .toLowerCase()
  .split(' ')
  .map(value => value[0])
  .join('');
console.log(userNameArrow);

//
//---------- Using above logic to create the UserName
//

const createsUsername = function (accnt) {
  accnt.forEach(function (accnOwner) {
    accnOwner.username = accnOwner.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};

createsUsername(accounts);
console.log(accounts);

//

//

//**------------------------------------------ ADDING BALANCE USING THE REDUCE FUNCTION ----------------------------------- */

/*
const calDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance} €`;
};

calDisplayBalance(account1.movements);
*/

const calDisplayBalance = function (accnt) {
  accnt.balance = accnt.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${accnt.balance} €`;
};

//

//

//**------------------------------------------ CALL DISPLAY SUMMARY USING CHAINING ----------------------------------- */

/*
const calDisplaySummary = function (movements) {
  const income = movements
    .filter(function (val) {
      return val > 0;
    })
    .reduce(function (acc, valFil) {
      return acc + valFil;
    }, 0);
  labelSumIn.textContent = `${income}€`;

  const out = movements
    .filter(function (val) {
      return val < 0;
    })
    .reduce(function (acc, valFil) {
      return acc + valFil;
    }, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(function (val) {
      return val > 0;
    })
    .map(function (valFil) {
      return (valFil * 1.2) / 100;
    })
    .filter(function (valMap) {
      return valMap >= 1;
    })
    .reduce(function (acc, valFil2) {
      return acc + valFil2;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calDisplaySummary(account1.movements);

*/

//**************  DOING THE SAME ABOVE LOGIC BUT THIS TIME JUST PASSING THE WHOLE ACCOUNT

const calDisplaySummary = function (accnt) {
  const income = accnt.movements
    .filter(function (val) {
      return val > 0;
    })
    .reduce(function (acc, valFil) {
      return acc + valFil;
    }, 0);
  labelSumIn.textContent = `${income}€`;

  const out = accnt.movements
    .filter(function (val) {
      return val < 0;
    })
    .reduce(function (acc, valFil) {
      return acc + valFil;
    }, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = accnt.movements
    .filter(function (val) {
      return val > 0;
    })
    .map(function (valFil) {
      return (valFil * accnt.interestRate) / 100;
    })
    .filter(function (valMap) {
      return valMap >= 1;
    })
    .reduce(function (acc, valFil2) {
      return acc + valFil2;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};
//

//

//**------------------------------------- EVENT HANDLERS -> IMPLEMENTING LOGIN ------------------------------------------- */

//

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent Form from submitting

  e.preventDefault();
  console.log(inputLoginUsername.value);
  currentAccount = accounts.find(function (accnt) {
    return accnt.username === inputLoginUsername.value.trim('');
  });

  console.log(currentAccount);

  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    console.log('account login');

    //DISPLAY UI AND WELCOME MESSAGE

    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;

    //CLEAR INPUT FIELDS

    inputLoginPin.value = inputLoginUsername.value = ' ';

    /*
    //DISPLAY MOVEMENTS

    displayMovements(currentAccount.movements);

    //DISPLAY BALANCE

    calDisplayBalance(currentAccount);

    //DISPLAY SUMMARY

    calDisplaySummary(currentAccount);
    */

    updateUI(currentAccount);
  }
});

//

//

//**------------------------------------- EVENT HANDLERS -> IMPLEMENTING TRANSFER ---------------------------------------- */

//

btnTransfer.addEventListener('click', function (e) {
  //Prevent Form Refresh

  e.preventDefault();

  //--Get amount and verify amount

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(function (accn) {
    return accn.username === inputTransferTo.value.trim(' ');
  });

  //Verify amount and the user

  if (
    amount > 0 &&
    currentAccount.balance > amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log(receiverAcc);
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }

  inputTransferAmount.value = inputTransferTo.value = ' ';
  updateUI(currentAccount);
});
//

//

//

//**-------------------------- EVENT HANDLERS -> LOAN REQUEST USING SOME METHOD ---------------------------------- */

//

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // Get the amount and check for validation is it is 10% of the deposit

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= amount * 0.1;
    })
  ) {
    //ADD the LOAN AMOUNT

    currentAccount.movements.push(amount);

    //UPDATE the UI

    updateUI(currentAccount);

    //RESET the FIELD

    inputLoanAmount.value = ' ';
  }
});
//

//

//

//**-------------------------- EVENT HANDLERS -> CLOSING ACCOUNT USING FINDINDEX METHOD ---------------------------------- */

//

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //find the index of the account from the ACCOUNTS array and SPLICE it.

  if (
    currentAccount.username === inputCloseUsername.value.trim(' ') &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const accountIndex = accounts.findIndex(function (accn) {
      return accn.username === currentAccount.username;
    });
    console.log(accountIndex);
  }

  //Reset

  inputCloseUsername.value = inputClosePin.value = ' ';

  //Delete Account
  accounts.splice(currentAccount, 1);
});
//

//

//

//**-------------------------------------------- EVENT HANDLERS -> UPDATE UI -------------------------------------------- */

//

//DISPLAY MOVEMENTS
const updateUI = function (currAccnt) {
  displayMovements(currentAccount.movements);

  //DISPLAY BALANCE

  calDisplayBalance(currentAccount);

  //DISPLAY SUMMARY

  calDisplaySummary(currentAccount);
};

//

//

//

//**-------------------------------------------- EVENT HANDLERS -> SORT MOVEMENTS -------------------------------------------- */

//

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  //call the display movement function passing the sort

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//

//

//

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
*/

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

//console.log(accounts);

//** */

//
//
//**--------------------- DATA TRANSFORMATION USING MAP,FILTER,REDUCE,FIND ---------------------------------- */
//

//
/*
//-------------**********************  Using MAP function  *********************

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const usdToEur = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * usdToEur;
});

console.log(movementsUSD);

//-------------Using For Of loop to do the same as MAP function

const arrNew = [];
for (const val of movements) {
  arrNew.push(val * usdToEur);
}
console.log(arrNew);
*/

//

//
//----------------*******************  Using Filter Method  *******************
//

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);

//-------------Using For Of loop to do the same as FILTER function

const arrNew = [];
for (const ele of movements) {
  if (ele > 0) {
    arrNew.push(ele);
  }
}
console.log(arrNew);
*/
//

//
//----------------**********************  Using REDUCE Method  *******************
//

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (acc, val, i) {
  console.log(`Interation ${i}:Accumulator Value ${acc}`);
  return acc + val;
}, 0);
console.log(balance);

//-------------Using For Of loop to do the same as REDUCE function

let balanceNew = 0;
for (const ele of movements) {
  balanceNew += ele;
}
console.log(balanceNew);

//------------ Using REDUCE FUNCTION tocalculate the MAXIMUM VALUE in the ARRAY

const max = movements.reduce(function (acc, val) {
  if (acc > val) return acc;
  else return val;
}, movements[0]);
console.log(max);

*/
//

//
//----------------**********************  Using FIND Method  *******************
//

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(function (val) {
  return val < 0;
});
console.log(firstWithdrawal);

//finding the username using FIND

const accnt = accounts.find(function (accn) {
  return accn.owner == 'Jessica Davis';
});
console.log(accnt);
//

*/

//
//
//**----------------------------------------------------- CHAINING METHODS ----------------------------------------------- */

//

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const totalDepositeUSD = movements
  .filter(function (val) {
    return val > 0;
  })
  .map(function (valFil) {
    return valFil * eurToUsd;
  })
  .reduce(function (acc, valMap) {
    return acc + valMap;
  }, 0);
console.log(totalDepositeUSD);
*/

//

//
//**--------------------------------------------------- SOME and EVERY METHODS -------------------------------------------- */
//

//

/*

//----------------------****************** USING SOME METHOD ******************


// SOME is like INCLUDES method , only difference is INCLUDES gives absolute equality whereas SOME is used to check a condition.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const someDeposit = movements.some(function (val) {
  return val > 0;
});
console.log(someDeposit);

//----------------------****************** USING EVERY METHOD ******************

//Returns only is all values matches

console.log(
  movements.every(function (mov) {
    return mov > 0;
  })
);

//Using callbacks

const deposit = mov => mov > 0;
console.log(movements.some(deposit));

console.log(movements.every(deposit));

console.log(movements.filter(deposit));

* /

//

//

//
//**------------------------------------------------- FLAT and FLATMAP METHODS -------------------------------------------- */
//

//

/*

//Flat is use to flatene an array to any level to create a sigle dimension array.Also Flat isnot a have a higher order function

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const flatArr = arr.flat();
console.log(flatArr);

//now flatening to deeper level

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
const flatArrDeep = arrDeep.flat();
console.log(flatArrDeep);

const flatArrDeepLevel = arrDeep.flat(2);
console.log(flatArrDeepLevel);

//Using the same logic to FLAT and get some of the total movements

// first get the array for movements

const accountMovement = accounts.map(function (mov) {
  return mov.movements;
});
console.log(accountMovement);

const allMovements = accountMovement.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log(overallBalance);

//---------------***************Doing the above into method chaining

const flatChaining = accounts
  .map(function (mov) {
    return mov.movements;
  })
  .flat()
  .reduce(function (acc, mov) {
    return mov + acc;
  }, 0);
console.log(flatChaining);

//--------------------*********************** FLAT MAP ************************

//FLAT MAP is combination of MAP and FLAT.but FLATMAP can only flat the array to single level and not deep level.Also FLATMAP is a higher order function

const flatMapChaining = accounts
  .flatMap(function (mov) {
    return mov.movements;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
console.log(flatMapChaining);

*/

//

//

//
//**------------------------------------------------- SORTING METHODS -------------------------------------------- */
//

//

/*

// SORTING works on string .So when doing using number it considers it also as a STRING thats why we need to pass arguments and do the sorting.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());

//To correct the sorting using the arguments

//**-----**---- For Ascending Order **----**----

// return < 0 A,B (Keep the order) (A<B)
// return > 0 B,A (Switch the order) (A>B)
movements.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

console.log(movements);

//

//**-----**---- For Descending Order **----**----

// return > 0 B,A (SWITCH the order) (A<B)
// return < 0 A,B (KEEP the order) (A>B)
movements.sort(function (a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});

console.log(movements);

//NOTE --> SORT mutate the orignal araay which we wont be needing in the orgnal wys on most cases so etter take a shallow copy using SLICE() method.

// return < 0 A,B (Keep the order) (A<B)
// return > 0 B,A (Switch the order) (A>B)

const shallowSort = movements.slice().sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

console.log(shallowSort);

*/

//

//

//
//**------------------------- CREATING AND FILLING ARRAY USING FILL() and FORM() METHODS -------------------------- */
//

//

//Manual creation of array.

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

//-------------******************** USING FILL *************************

//Programatically creating and filling the array

const arrFill = new Array(7);
console.log(arrFill);
arrFill.fill(1);
console.log(arrFill);

//we can also define the position to fill particular value using fill

arrFill.fill(23, 2, 4);
console.log(arrFill);

//---------------******************** USING FORM **************************

const arrForm = Array.from({ length: 7 }, function (_, i) {
  return i++;
});
console.log(arrForm);
