'strict mode';

const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23 , Firenzi,Italy',
    categories:['Italian','Pizerria','Organic','Vegeterian'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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


