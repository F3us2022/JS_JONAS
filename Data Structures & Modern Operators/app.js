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
    orderPasta: function (ing1, ing2, ing3) {
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







//**------------------------------------------------- CODING CHALLENGE #1 --------------------------------*/

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/






//**------------------------------------------------- THE FOR-OF LOOP  --------------------------------*/

/*

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

*/



//**-------------------------------------------------2020 OPTIONAL CHAINING ?.  --------------------------------*/

//OPTIONAL CHAINING works on the concept of TRUTHY/FALSY value.

/*
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);


//Without optional chaining
    //console.log(restaurant.openingHours.mon.open);
//Using OPTIONAL CHAINING doing the same condition as above

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.thu?.open);

//USE CASE

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const ele of days) { 
    const open = restaurant.openingHours[ele]?.open ?? 'closed';
    console.log(`On ${ele},The restaurant opens at ${open}`);
}

//OPTIONAL CHAINING For METHODS

console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
*/







//**------------------------------------------LOOPING OBJECT - KEYS,VALUES and ENTRIES  --------------------------------*/

// PROPERTY NAMES = KEYS

/*

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on these ${properties.length} days :`;

for (const day of properties)
    openStr += `${day},`;
console.log(openStr);


//PROPERTY VALUEs = VALUES

const value = Object.values(restaurant.openingHours);
console.log(value);


//PROPERTY ENTRIES = ENTRIES

const entry = Object.entries(restaurant.openingHours);
console.log(entry);

//USE CASE

for (const [key, { open, close }] of entry) { 
    console.log(`On ${key} we open at ${open} and closes at ${close}`);
}

*/

//**------------------------------------------------- CODING CHALLENGE #2 --------------------------------*/

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






///**------------------------------------------------------ SETS---------------------------------------------*/


//SET is a collection of UNIQUE values.Its not the replacement of array at all.

/*

const orderSet = new Set(['pizza', 'pasta', 'pizza', 'pasta', 'macroni', 'tacos', 'burritos']);
console.log(orderSet);
console.log(new Set('jonas'));

//**------Methods on SET

//SIZE
console.log(orderSet.size);

//HAS
console.log(orderSet.has('pizza'));

//ADD
console.log(orderSet.add('rolls'));

//DELETE
console.log(orderSet.delete('pasta'));
console.log(orderSet);

//CLEAR
//orderSet.clear();
console.log(orderSet);

//USE of loop

for (const ele of orderSet) { console.log(ele) };


//USE CASE --  converting array to set and then back to array with unique values.

const nonUnqArr = ['waiter', 'chef', 'guest', 'manager', 'chef', 'guest', 'receptionist'];
console.log(nonUnqArr);
const unqArrSet = new Set(nonUnqArr); //new set created.
console.log(unqArrSet);
const unqArr = [...unqArrSet];
console.log(unqArr);
console.log(unqArrSet.size);

*/







///**------------------------------------------------------ MAPS ---------------------------------------------*/

//MAPS are basically like OBJECT and contains key/value pairs..Difference is MAPS can have any kind of key where as obejects in general have String type key.

/*

const newMap = new Map([['name', 'Italiano Classico'], ['foundedIn', 1990], [true, 'we are open '], [false, 'We are close'], [1, 'Frenzy,Italy'], ['category', ['Italisan', 'Pizzerria', 'Vegetarian', 'rganic']]]);

newMap.set('open', 11).set('close', 23);
console.log(newMap);

//GET ELEMENTS

console.log(newMap.get(true));

//HAS Property

console.log(newMap.has('foundedIn'));

//DELETE Property

console.log(newMap.delete('category'));
console.log(newMap)

//SIZE Property

console.log(newMap.size);

//Setting up array

const arr = [1, 2];
newMap.set(arr, 'test');
console.log(newMap);
console.log(newMap.get(arr));

//CLEAR

console.log(newMap.clear());

*/





///**------------------------------------------------------ MAPS - ITERATION---------------------------------------------*/

/*

const newMap = new Map([['name', 'Italiano Classico'], ['foundedIn', 1990], [true, 'we are open '], [false, 'We are close'], [1, 'Frenzy,Italy'], ['category', ['Italisan', 'Pizzerria', 'Vegetarian', 'rganic']]]);

for (const [key, value] of newMap) { 
    console.log(`Values for key ${key} is ${value}`)
}


//CONVERT MAP TO ARRAY

console.log([...newMap]);

//CONVERT OBJECT to MAP

const mapObj = new Map(Object.entries(restaurant.openingHours));
console.log(mapObj);

*/




///**-------------------------------------------------------- STRING ---------------------------------------------------*/

//----PART -1 -----
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

*/

//----PART -2 ----

/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);


// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));


// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}


// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/


//-----PART -3 -----

/*

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

*/