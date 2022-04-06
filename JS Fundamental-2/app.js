//**------------------------------------------- STRICT MODE */

/*
'strict mode'

let hasDriversLicense = false;
const passTest = true;
if (pass) hasDriversLicense = true;
if (hasDriversLicense) console.log('Eligible to Drive');

*/

//**------------------------------------------- Challenege 1 */

/*
let calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

let avgDophin = calcAverage(44, 23, 71);
let avgKoala = calcAverage(65, 54, 49);
console.log(`avgDolphine ${avgDophin} and avgKoala ${avgKoala}`);

let checkWinner = (avgDophin, avgKoala) => {
    if (avgDophin > avgKoala) { console.log(`Dolphin wins by ${avgDophin} vs ${avgKoala} `) }
    else { console.log(`Koala wins by ${avgDophin} vs ${avgKoala} `) };
};

console.log(checkWinner(avgDophin,avgKoala));

*/


//**------------------------------------------- Challenege 2 */

/*
let bills = [125, 555, 44];
let tip = new Array();
let calcTip = (bill) => {

    tip.push((bill > 50 && bill < 300) ? bill * .15 : bill * 0.2);
};

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);
console.log(`Tip array ${tip}`);

let total = new Array;
for (let i = 0; i < tip.length; i++) { 
    total.push(tip[i] + bills[i]);
}
console.log(total);
*/



//**--------------------------------------------- OBJECT */


/*

let jonas = {
    firstName: 'jonas',
    lastName: 'Schmedtmann',
    birthYear:1991,
    job: 'teaching',
    friends: ['Yancy', 'Nicole', 'lupin'],
    hasDriversLicense: true,
    
    // arrow function wont work as it cant have the 'this' operator
    //calcAge: () => {
    //    console.log(this);
    //    return 2037 - this.age;
    //},

    //calcAge: function () {
    //    console.log(this);
    //    return 2037 - this.age;
    //}

    //creating new preperty
    calcAge:function(){
    return this.age = 2037-this.birthYear;
    },

    getSummary: function () { return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} , and he has a ${this.hasDriversLicense ? 'driving license' : 'dont have driver license'}` }

}

console.log(jonas);

//Accessing using Dot notation
console.log(jonas.birthYear);

//Accessing using racket notation
console.log(jonas['birthYear']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

//Adding in object using DOT notation and BRACKET Notation

jonas.location = 'Spain';
jonas['twitter'] = '@jonasSch';

console.log(jonas.calcAge());

console.log(jonas.getSummary());

*/



//**---------------------------------------------------- LOOPING ARRAY / BREAKING / CONTINUING */

/*

let jonas = [
    'jonas',
    'Schmedtmann',
    2037-1991,
    'teaching',
    ['Yancy', 'Nicole', 'lupin'],
    true,
]

const type = new Array();
const strType = [];
for (let i = 0; i < jonas.length; i++) { 
    
    //creating type of array

    type.push(typeof jonas[i]);

    if (typeof jonas[i] !== 'string') continue;
    strType.push(jonas[i]);
}

console.log(type);
console.log(strType);

for (let i = 0; i < jonas.length; i++) { 
    
    if (typeof jonas[i] == 'number') break;
    console.log(jonas[i],typeof jonas[i]);
}

*/


// let dice = Math.trunc(Math.random() * 9)+1;

// console.log(dice);

