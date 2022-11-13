// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(someFood){
  if(this.stomach.length < 10) {
    this.stomach.push(someFood);
    return `${this.name} just ate a ${someFood}.`
  } else {return `too much food, gotta poop first`}
}
Person.prototype.poop = function() {
  this.stomach = [];
  return `${this.name} just pooped, and their stomach is empty.`
}
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}
const person1 = new Person('Rohan', 28)
console.log(person1.eat('burger'));
console.log(person1);
console.log(person1.poop());
console.log(person1);
console.log(person1.toString());
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
this.model = model;
this.milesPerGallon = milesPerGallon;
this.tank = 0;
this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
return `I just filled the tank with ${gallons} gallons.`
}

Car.prototype.drive = function(distance) {
  // let iRanOut = 0;
//  for(Car key in car1) {
  if((distance/this.milesPerGallon) >= this.tank) {
    this.odometer += distance;
    this.tank = 0
    return `I ran out of fuel at ${this.odometer} miles!`
  } else {
  this.odometer += distance;
  this.tank -= (distance/this.milesPerGallon);
  //  if(this.tank = 0) {
    // iRanOut += this.odometer
    // }return `I ran out of fuel at ${iRanOut} miles!`
  }}
// }

const car1 = new Car('Ford', 30)
console.log(car1);
console.log(car1.fill(100));
console.log(car1);
console.log(car1.drive(3002));
console.log(car1);
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, props,) {
Person.call(this, name, age);
this.favoriteToy = props.favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
 
const baby1 = new Baby('zeek', 'whe', 'hey', 'hell')

 console.log(baby1);

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global Scope -
  2. Object;s Method -
  3. .call / .apply -
  4. .bind method -
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
