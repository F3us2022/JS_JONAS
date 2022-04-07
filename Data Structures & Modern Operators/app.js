'strict mode';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23 , Firenzi,Italy',
    categories: ['Italian', 'Pizerria', 'Organic', 'Vegeterian'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    orderDelivery: function ({ mainIndex, starterIndex, time, address }) { console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered to ${address} at ${time}`) },
    orederPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ingredients ${ing1} , ${ing2} and ${ing3}`)
    },
    orderPizza: function (mainIngredient, ...otherIngredient) { console.log(`Here is your delicious pizza with ingredients ${mainIngredient} , ${otherIngredient}`) }
}

const rest1 = {name:'Capri',numGuest:20};
const rest2 = {name:'La Piazza',owner:'Giovanni Rossi'};



//**------------------------------------------------ DESTRUCTURING ARRAY  ------------------------------*/

/*
//Destructuring array

const arr = [1, 2, 3];
const [a, , b] = arr;
console.log(a, b);

const [dish1, dish2] = restaurant.mainMenu;
console.log(dish1, dish2);


//Destructuring function values

[starterMenu, mainMenu] = restaurant.order(2, 0);
console.log(`Starter Menu : ${starterMenu} and Main Menu : ${mainMenu}`)


//Destructuring nested array

const nestArr = [1, 2, [3, 4]];
const [nest1, , [nest2, nest3]] = nestArr;
console.log(nest1, nest2, nest3);

//Destructuring with default value when the number of values in the array is unknown

const defArry = ['a', 'b'];
const [defVal1, defVal2, defVal3] = defArry;
console.log(defVal1,defVal2,defVal3);

const [defVal1a=1, defVal2a=1, defVal3a=1] = defArry; // to avoid getting the undefined value we assigned aan default value.
console.log(defVal1a,defVal2a,defVal3a);

*/






//**------------------------------------------------- DESTRUCTURING OBJECT  --------------------------------*/


/*

//Destructuring the object

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);


//Destructuring with Alias Name

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);


//Destructuring with default value

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Destructuring nested object

const { thu:{open,close} } = restaurant.openingHours;
console.log(open, close);

//Destructuring Mutated object


let a = 111;
let b = 222;
const mutArrr = { a: 11, b: 22, c: 33 };
// const { m1, m2 } = mutArrr;
// console.log(m1, m2);
({ a, b } = mutArrr)
console.log(a, b);


//Destructuring the function values


const objc = {
    time: '22:30',
    addresss: 'Via del sole',
    mainIndex: 2,
    starterIndex: 2,
    
}
restaurant.orderDelivery(objc);

*/




//**------------------------------------------------- SPREAD OPERATOR (ARRAY)  --------------------------------*/

/*

const arr = [1, 2, 3, 4];
const badNewArr = [8, 9, arr[0], arr[1], arr[2], arr[3]];
console.log(`Not using SPREAD operator : ${badNewArr}`);
const newSpreadArr = [8, 9, ...arr];
console.log(`Using SPREAD operator : ${newSpreadArr}`);

//ITERABLES : array,string,maps,sets. NOT OBJECT

const str = 'Jonas';
console.log(...str);

//SPREAD Using Function

//const ingredients = [prompt('Let\'s make pasta! Ingredient 1: '), prompt('ingredient 2:'), prompt('Ingredient 3:')];
//console.log(ingredients);
//restaurant.orederPasta(...ingredients);


//With ES2016 even OBJECTS can be used under SPREAD

const newRestaurant = { foundedIN: 1908, ...restaurant, founder: 'Gissepe' };
console.log(newRestaurant);

//Since the Spread operator makes a shallow copy,we can change the copy without changing the original

const newRestaurantCopy = {...newRestaurant};
newRestaurantCopy.name = 'Denver Mocha';
console.log(newRestaurant.name);
console.log(newRestaurantCopy.name);

*/





//**------------------------------------------------- REST OPERATOR (ARRAY)  --------------------------------*/

//REST PATTERN basically collects the unsued values in the DESTRUCTURING assignement.
//REST comes on the LEFT SIDE of the assignement and SPREAD on the RIGHT side.


/*

//REST in ARRAYS

const arr = [1, 2, 3, 4, 5, 6];
const [a, b, ...c] = arr;
console.log(a, b, c);

const [Pizza, , Risotto, ...otherElements] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Pizza,Risotto,otherElements);



//REST in OBJECT

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);


//REST with FUNCTIONS

const add = function (...numbers) {
    console.log(numbers);
    let sum=0;
    for (let i = 0; i < numbers.length; i++)
    { 
         sum = sum + numbers[i];
    }
    console.log(`Sum of total number of Values ${numbers.length} is ${sum}`);
}
 
add(1, 2, 3, 4);
add(1, 2)

restaurant.orderPizza('Onion', 'Tomato', 'Chicken Shred', 'Mushroom');
restaurant.orderPizza('chicken');

*/






//**------------------------------------------------- SHORT CIRCUIT && AND ||  --------------------------------*/

//Use ANY data type,RETURN ANY data type,short circuiting

// for OR || the expression short-circuits soon it finds the TRUTHY VALUE.

/*
console.log(0 || 'JONAS'); //0 is a FALSY VALUE
console.log('' || 'JONAS'); //'' is a FALSY Value
console.log(12 || 'JONAS'); //12 is a TRUTHY Value
console.log('' || null); //both FALSY value so the output will be the last evaluated value

// For AND && , its comnplete opposite of || and the expression short ciuits soon it finds the FALSY VALUE

console.log(0 && 'JONAS'); //0 is a FALSY VALUE
console.log('' && 'JONAS'); //'' is a FALSY Value
console.log(12 && 'JONAS'); //Both TRUTHY value so no short circuit and the last value will be the result
console.log('' && null); //both FALSY value and since first is FALSY it will result first value

*/





//**------------------------------------------------- SHORT-CURCUIT NULLISH COALESCING ??  --------------------------------*/
//It works with the idea of nullish value and not the FALSY value. NULLISH values are NULL and undefined.
//SHortcircuit only happens wen value is non-nullish

/*
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

const newGuest = restaurant.numGuest ?? 10;
console.log(newGuest);
*/






//**------------------------------------------------- LOGICAL ASSIGNEMNT OPERATOR  --------------------------------*/

//|| OR Assignment OPERATOR

// rest1.numGuest = rest1.numGuest || 10; //old way
// rest2.numGuest = rest2.numGuest || 10; //old way

/*

rest1.numGuest ||= 10; //NEW way
rest2.numGuest ||= 10; //NEW way

console.log(rest1.numGuest, rest2.numGuest);


//?? NULLISH Assignment OPerator

rest1.numGuest ??= 10; //NEW way
rest2.numGuest ??= 10; //NEW way

console.log(rest1.numGuest, rest2.numGuest);


//AND && Assignment Operator

rest1.numGuest &&= 10; //NEW way
rest2.numGuest &&= 10; //NEW way

console.log(rest1.numGuest, rest2.numGuest);

*/







//**------------------------------------------------- CODING CHALLENGE  --------------------------------*/

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};







//**------------------------------------------------- THE FOR-OF LOOP  --------------------------------*/


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const items of menu) { 
    console.log(items);
}

//To get the index of the element in FOR OF LOOP use 'entries'.

for (const items of menu.entries()) { 
    console.log(items);
}


for (const [i,ele] of menu.entries()) { 
    console.log(`index ${i} and elements ${ele}`);
}