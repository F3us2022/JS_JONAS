'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = function (dateVal) {
  const calDaysPassed = (date1, date2) => { Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)) };
  const daysPassed = calDaysPassed(new Date(), dateVal);
  //console.log(daysPassed);
  const year = dateVal.getFullYear();
  const month = `${dateVal.getMonth() + 1}`.padStart(2, 0);
  const day = `${dateVal.getDate()}`.padStart(2);
  return `${day}/${month}/${year}`;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const dateValue = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(dateValue);
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
      } ${type}</div>
              <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}???</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}???`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}???`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}???`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//Faking the login
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 1; 

//


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //current date and time

    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth()+1}`.padStart(2,0);
    const date = `${now.getDate()}`.padStart(2);
    const hour = now.getHours();
    const minute = now.getMinutes();
    const reformatedDt = `${date}/${month}/${year}, ${hour}:${minute}`;
    labelDate.textContent = reformatedDt;

    
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //ADD TRANSFER DATE

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //ADD TRANSFER DATE

    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//

//

//**------------------------------------------- CONVERTING AND CHECKING NUMBERS ------------------------------------------- */

//

//

/*

console.log(23 === 23.0);

//DECIMAL BASE 10 - 0 TO 9,
//BINARY BASE 2 - 0 & 1,

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);


//-------------------------************* CONVERSION **********************-/

console.log(Number('23'));

//OR

console.log(+('23'));

//--------------------********************* PARSING ***********************-/

console.log(Number.parseInt('30px')); //ONLY WILL WORK WEN STRING STARTS WITH A NUMBER
console.log(Number.parseInt('e40'));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseFloat('    2rem'));
console.log(Number.parseInt('2.5rem'));

//-------------------********************* CHECKING ***********************-/
//
//-----------CHECKING USING isNAN *-/
//
console.log('----- USING Number.isNAN -------');

console.log(`23 :`,Number.isNaN(23));
console.log(`+'23' :`,Number.isNaN(+'23'));
console.log(`'23' :`,Number.isNaN('23'));
console.log(`23/0 :`,Number.isNaN(23/0));

//-----------CHECKING USING isFinite --> BEST WAY to check if STRING is NUMBER or output is a number*-/

console.log('----- USING Number.isFinite -------');

console.log(`23 :`,Number.isFinite(23));
console.log(`+'23' :`,Number.isFinite(+'23'));
console.log(`'23' :`,Number.isFinite('23'));
console.log(`23/0 :`,Number.isFinite(23 / 0));

//-----------CHECKING USING isInteger *-/

console.log('----- USING Number.isInteger -------');

console.log(`23 :`,Number.isInteger(23));
console.log(`+'23' :`,Number.isInteger(+'23'));
console.log(`'23' :`,Number.isInteger('23'));
console.log(`23/0 :`, Number.isInteger(23 / 0));

*/

//

//


//**----------------------------------------------- MATH AND ROUNDING -------------------------------------------------- */

//

//

//
/*

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 7, 22, 54, 6));
console.log(Math.max(5, 18, 7, '22', 54, 6));
console.log(Math.max(5, 18, 7, '22 px', 54, 6));
console.log(Math.min(5, 18, 7, 22, 54, 6));

console.log(Math.trunc(23.4545));
console.log(Math.trunc(Math.random() * 6) + 1);

console.log(Math.round(23.3));
console.log(Math.round(23.7));
console.log(Math.round(-23.3));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.7));

console.log(Math.floor(23.3));
console.log(Math.floor(23.7));
console.log(Math.floor(-23.3));
console.log(Math.floor('23.3'));

//-------------****************** ROUNDING DECIMALS *******************-/

//--toFixed return a STRING VALUE.

console.log((2.27).toFixed(2));
console.log((2.27).toFixed(1));
console.log((2.27989).toFixed(2));
console.log(+(2.27).toFixed(2));

*/
//

//


//**----------------------------------------------- NUMERIC SEPARATOR -------------------------------------------------- */

//

//--Used only to hep code readers a visual identification/Meaning of the value

//

/*
const numSep = 234_124_000;
console.log(numSep);

const numSep2 = 21_31_391;
console.log(numSep2);

//Before BIGINT the range of number JAVASCRIPT could have processed.

console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3); //same o/p
console.log(2 ** 53 + 4); //same o/p
console.log(2 ** 53 + 5); //same o/p

//USING BIGINT we can process the number beyond the MAX_SAFE_INTEGER

console.log(483843024834204382340839483948320);
//using the BIGINT transforming the above number

console.log(483843024834204382340839483948320n);

//ALL the mathematical operations works as usual on BIGINT like the normal INT

console.log(20n * 30n);
console.log(10n / 3n);
console.log(10 / 3);

*/

//

//


//**----------------------------------------------- CREATING DATES -------------------------------------------------- */

//


/*

//There are 4 ways to create DATES

// Method -1

const now = new Date();
console.log(now);

// Method - 2 (Using String Declaration)

const dt = new Date('nov 24 2022 18:04:01');
console.log(dt);
console.log(new Date(account1.movementsDates[0]));

//Method - 3 (Passing the year,month,date,hour,minute,seconds)

console.log(new Date(2022, 1, 15, 18, 2, 44));

//Method - 4 (unix date)

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//
//-----------------************** Methods in DATES ******************--/

const futurDate = new Date(2022, 10, 19, 3, 1, 15);
console.log(futurDate);
console.log(futurDate.getFullYear());
console.log(futurDate.getMonth());
console.log(futurDate.getDate());
console.log(futurDate.getDay());
console.log(futurDate.getDate());
console.log(futurDate.getMinutes());
console.log(futurDate.getSeconds());
console.log(futurDate.toISOString());
console.log(futurDate.getTime());
console.log(new Date(1668844875000));
console.log(Date.now());

//

//

//

*/

//**------------------------------------------ INTERNATIONALISATION WITH DATES --------------------------------------------- */

//

//

/*

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day:'numeric',
  month:'long',
  year:'numeric',
  weekday:'long'
}

const intlDay = new Intl.DateTimeFormat('en-us', options).format(now);
console.log(intlDay);

const locale = navigator.language;
console.log(locale);

const intlDayLocale = new Intl.DateTimeFormat(locale, options).format(now);
console.log(intlDay);



//

//

*/

//**------------------------------------------ INTERNATIONALISATION WITH NUMBER ------------------------------------------ */

//

//

/*

const num = 13201293.123;
const intlNumUS = new Intl.NumberFormat('en-us').format(num);
console.log(intlNumUS);

const intlNumInd = new Intl.NumberFormat('en-in').format(num);
console.log(intlNumInd);


const intlNumGBP = new Intl.NumberFormat('en-gb').format(num);
console.log(intlNumGBP);

const option = {
  style:'currency',
  unit:'celsius',
  currency:'EUR',

}

const numEUR = 13201293.123;
const intlNumEUR = new Intl.NumberFormat('en-us',option).format(num);
console.log(intlNumEUR);


const optionDegree = {
  style:'percent',
  unit:'celsius',
  currency:'EUR',

}

const numTemp = 93.123;
const intlNumTemp = new Intl.NumberFormat('en-us',optionDegree).format(num);
console.log(intlNumTemp);

*/

//

//

//**------------------------------------------ TIMER - SETTIMEOUT & SETINTERVAL ------------------------------------------ */

//

//
/*
//--------------**************** SET TIMEOUT AND CANCELLING THE SET TIME OUT ****************--/

const pizzaTimerOne = setTimeout( (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 4000, 'chicken', 'spinach' );

const ingredient = ['spinach','mushroom']
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 4000, ...ingredient);
console.log('waiting.......');
// CANCELLING the TIME_OUT

if (ingredient.includes('spinach')) { 
  clearTimeout(pizzaTimer);
}

setTimeout(function() { console.log('Hello') },2000);

//-----------***************** SET INTERVAL ******************--/

const timeInterval = setInterval(function () {
  const now = new Date();
  console.log(now)
}, 1000);
*/