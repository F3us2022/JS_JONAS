'use strict';


//

//CLASSES are created using 3 ways:
//1-Constructor function
//2-ES6 Classes
//3-Object.create() 

//**------------------------------------ CONSTRUCTOR FUNCTION AND THE NEW OPERATOR ------------------------------------- */

//

//

/*

//-----******************* CONSTRUCTOR FUNCTION ****************---/

const Person = function (firstName, birthYear) {
    console.log(this)
    this.firstName = firstName;
    this.birthYear = birthYear
    //never do the below
    //this.calAge = function () { console.log(2037 - this.birthYear)}
};

//Person('Jonas',1991);

//CALLING AS A CONSTRUCTOR FUNCTION

const jonas = new Person('Jonas',1991);
console.log(jonas);
console.log(jonas instanceof Person);

//STEP FOLLOW WHEN THE NEW OPERATOR IS CALLED ---->
//
// Step -1 --> New {} is created.
// Step -2 --> function is called, this = {}
// Step -3 --> () linked to the prototype
// Step -4 --> function automatically returns the {}

*/

//

//

//

//**---------------------------------------------------- PROTOTYPE ------------------------------------------------/

//

//

/*

//The constructor function get access to all the methods of the prototype property.
//If we want to declare a function for the constructor function, then rather than declaring inside the function itself one should use the prototype and declare with it as below

const Person = function (firstName, birthYear) {
    console.log(this)
    this.firstName = firstName;
    this.birthYear = birthYear
    //never do the below
    //this.calAge = function () { console.log(2037 - this.birthYear)}
};

//Person('Jonas',1991);

//CALLING AS A CONSTRUCTOR FUNCTION

const jonas = new Person('Jonas',1991);
console.log(jonas);
console.log(jonas instanceof Person);

Person.prototype.calcAge = function () { console.log(2037 - this.birthYear) };
jonas.calcAge();

//properties can also be set to the prototype of the constructor funciton

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.__proto__);
console.log(jonas.prototype);
console.log(Person.__proto__);
console.log(Person.prototype);
console.log(Object.__proto__);
console.log(Object.prototype);



console.log(jonas.hasOwnProperty('firstName')); //---> TRUE --> its inside the Jonas object.
console.log(jonas.hasOwnProperty('species'));  //----> FALSE --> its not the object property but has access to the property as it inherits the prototype property of the constructor function.


//

//

//

//**-------------------------------------- PROTOTYPAL INHERITANCE ON BUILT-IN OBJECT -------------------------------------/

//

//

console.log(jonas.__proto__);           // Prototype property of the Person Constructor Function.
console.log(jonas.__proto__.__proto__); // Prototype property of the Object.
console.log(jonas.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

//doing same with built in object array

const arr = [1, 2, 3, 1, 6];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

//Adding a new property to ARRAY CONSTRUCTOR 

Array.prototype.unique = function () { return [...new Set(this)] };
console.log(arr.unique());

//JUST TRAVERSING THROUGHT PROTOTYPES OF THE H1

const h1 = document.querySelector('h1');
console.dir(h1);


*/

//

//

//

//**--------------------------------------------- CODING CHALLENGE  #1 ----------------------------------------------/

//

//

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

*/

//

//

//**-------------------------------------------------- ES6 CLASSES -------------------------------------------------------/

//

//

/*

//--CLASSES in ES6 can be declared in two ways --/
//-- 1 --> CLASS DECLARATION (We will use this) --/
//-- 2 --> CLASS EXPRESSION --/

//-------------******************** CLASS EXPRESSION ****************** ----/

//const PersonCl = class { };

//-------------******************** CLASS DECLARATION ****************** ----/

class PersonCl { 
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    
    //This gets added to the prototype property
    
    // calcAge() {
    //     console.log(2037 - this.birthYear);
    //  }

    //This gets added to the object itself.

    // calcAge = function () {
    //     return (2037 - this.birthYear);
    // }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
//console.log(jessica.calcAge());

//NOTE 1 --- > CLASSES arenot HOISTED
//NOTE 2 --- > CLASSES are first class citizen (FUNCTION).That means we can pass them into function and and also return them from function.
//NOTE 3 --- > CLASSES are always executed in the STRICT MODE.

*/

//

//

//**---------------------------------------------- SETTERS AND GETTERS ----------------------------------------------------/

//

//

