'strict mode';

const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23 , Firenzi,Italy',
    categories:['Italian','Pizerria','Organic','Vegeterian'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open:11,
            close:23,
        },
        sat: {
            open:0,
            close:24,
        }
    }
}

console.log(restaurant);



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
