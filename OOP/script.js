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

GOOD LUCK ????
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

/*

//WE USE SETTERS AND GETTERS when we want to use/call method/function as a property and not like methods/function

//-------***************** Using GETTER and SETTER on OBJECT **************--/
const account = {
    owner: 'Jonas',
    movement: [200, 530, 120, 300],
    
    get latest() {
        return this.movement.splice(-1).pop();
    },

    set latest(move) {
        this.movement.push(move);
    }
};

console.log(account.latest);
account.latest = 50;
console.log(account)

//--------************** Using GETTER and SETTER and STATIC METHOD on ES6 CLASS ***************--/

class PersonCl { 
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    
    //This gets added to the prototype property
    
    calcAge() {
        console.log(2037 - this.birthYear);
     }

    set fullName(name) {
        if (name.includes(' '))
        { this._fullName = name }
        else { `alert ${name} is not a full Name` };
    }

    get fullName() { return this._fullName }
    
    static hey = function () { console.log('Hey There') };
}
 
const jessica = new PersonCl('Jessica Walter', 1992);
console.log(jessica);
PersonCl.hey();

//NOTE --> STATIC method are not available on the object created ,but are only available to the CLASS.

*/

//

//

//**-------------------------------------------------- OBJECT.CREATE() -------------------------------------------------------/

//

//

/*

const PersonProto = {
    calcAge() { 
        console.log(2037-this.birthYear);
    },

    prop(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;

    }
}

const steven = Object.create(PersonProto);
console.log(steven.prop('steven', 1990));
console.log(steven);
steven.calcAge();

*/

//

//

//**------------------------------------------------- Coding Challenge #2 --------------------------------------------------/

//

//

// 

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK ????
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

*/

//

//

//**-------------------------------INHERIHERITANCE BETWEEN CLASSES - CONSTRUCTOR FUNCTION ----------------------------------/

//

//

//

/*
const Parent = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear
}
 
Parent.prototype.calcAge = function () { console.log(2037 - this.birthYear) }


//----------******** WITHOUT LINKING PARENT-CHILD PROTOTYPE *****---/
// const Child = function (firstName, birthYear, course) {
//     this.course = course;
//     Parent.call(this, firstName, birthYear);
// }
 
// Child.prototype.introduce = function () { console.log(`My name is ${firstName} and I study ${this.course}`) }

// const mike = new Child('Mike', 1990, 'Science');
// console.log(mike);
// mike.calcAge(); // This isnt working yet as CHILD PROTOTYPE isnt INHERITING PARENT PROTOTYPE
//console.log(mike.__proto__);
//console.log(mike.__proto__.__proto__);
//console.log(mike instanceof Child);
//console.log(mike instanceof Parent);
//console.log(mike instanceof Object);

//----------******** LINKING PARENT-CHILD PROTOTYPE *****---/
const Child = function (firstName, birthYear, course) {
    this.course = course;
    Parent.call(this, firstName, birthYear);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.introduce = function () { console.log(`My name is ${firstName} and I study ${this.course}`) }

const mike = new Child('Mike', 1990, 'Science');
console.log(mike);
mike.calcAge(); // This is working now after linking the prototypes (COMPLETE INHERITANCE)

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Child);
console.log(mike instanceof Parent);
console.log(mike instanceof Object);

//---------********* LINKING THE CONSTRUCTOR ********---/

console.log(Child.prototype.constructor);
Child.prototype.constructor = Child;
console.log(Child.prototype.constructor);

*/

//

//

//

//**-------------------------------INHERIHERITANCE BETWEEN CLASSES - ES6 CLASS --------------------------------------------/

//

//

/*

//PARENT METHOD
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there ????');
  }
}

//CHILD METHOD -- Without its own PROPERTIES or METHODS


//class StudentCl extends PersonCl { };

//const mike = new StudentCl('Mike Dean', 1990);
//console.log(mike);
//mike.calcAge();



//CHILD METHOD -- With its own PROPERTIES or METHODS

class StudentCl extends PersonCl { 
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear)
        this.course = course;
    }

    introduce() { console.log(`My name is ${this.fullName} and I study ${this.course}`) };

    calcAge() {console.log(`I am ${2037 - this.birthYear} ears old , but I feel like I am ${2037 - this.birthYear + 10} Years`) }
};

const mike = new StudentCl('Mike Dean', 1990,'Science');
console.log(mike);
mike.calcAge();
mike.introduce();

*/

// 

//

//

//**-------------------------------INHERIHERITANCE BETWEEN CLASSES - OBJECT.CREATE() ---------------------------------------/

//

//

// 

/*

//PARENT

const PersonProto = {
    calcAge() { 
        console.log(2037-this.birthYear);
    },

    prop(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;

    }
}

//CHILD
const stevenProto = Object.create(PersonProto);
stevenProto.prop = function (firstName, birthYear, course) { 
    PersonProto.prop.call(this, firstName, birthYear);
    this.course = course;
}

//Adding method to the CHILD CLASS

stevenProto.introduce = function () {console.log(`My name is ${this.firstName} and i study course ${this.course}`) }
//CHILD-Object
const studentProto = Object.create(stevenProto);
studentProto.prop('Pearl Harbour', 1997, 'Maths');
console.log(studentProto);
studentProto.calcAge();
studentProto.introduce();

*/

// 

//

//

//**--------------------------------------------- ENCAPSULATION AND CHAINING----------------------------------------------/

//

//

// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
