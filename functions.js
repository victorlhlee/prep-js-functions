/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value
 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */

var a = 10;
var b = 5;

 

/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */

function add(n1, n2){

  return n1 + n2;

}

var sum = add(a, b);
console.log(sum);





//option 1: scenic route
/*function add(number1, number2){
  var result = number1 + number2;
  return result;
}
add();

var sum = add(a,b);
console.log('adding a and b = ', sum);*/

//option 2: shorter route
/*function add(number1, number2){
  return number1 + number2;
}
add();

var sum = add(a,b);
console.log('adding a and b = ', sum);*/


/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */

//option 1 scenic route
function subtract(number1, number2){
  var result = number1 = number2;
  return result;
}
subtract();

var difference = subtract(a,b);
console.log('subracting a from b = ', difference);

//option 2 shorter route
function subtract(number1, number2){
  return number1 - number2;
}
subtract();

var difference = subtract(a,b);
console.log('subracting a from b = ', difference);


/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */

//option 1 scenic route
function multiply(number1, number2){
  var result = number1 * number2;
  return result;
}
multiply();

var product = multiply(a,b);
console.log('multiplying a and b = ', product);

//option 2 shorter route
function multiply(number1, number2){
  return number1 * number2;
}
multiply();

var product = multiply(a,b);
console.log('multiplying a and b = ', product);

/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */
//option 1 scenic route
function checkDifference(number){
  var result = "My football team lost " + number + " times this week.";
  return result;

}
checkDifference();
console.log(checkDifference(difference));

//option 2 shorter route
function checkDifference(){
  return "My football team lost " + difference + " times this week.";
}
checkDifference();
console.log(checkDifference());

/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */

//option 1 scenic route
function checkSum(number){
  var result = "I CAN ADDZ " + number + " NUMBERS";
  return result;
}
checkSum();
console.log(checkSum(sum));

//option 2 shorter route
function checkSum(){
  return "I CAN ADDZ " + sum + " NUMBERS";
}
checkSum();
console.log(checkSum());

/**
 *  #7
 *  Function - checkProduct
 *
 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */
//option 1 scenic route
function checkProduct(number1, number2){
  var result = number1 * number2;
  return result;

}
checkProduct();
console.log('product x difference = ', checkProduct(product, difference));

//option 2 shorter route
function checkProduct(){
  return product * difference;
}
checkProduct();

checkProduct();
console.log('product x difference = ', checkProduct());

/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */
var c = 3;
function addThenSubtract(number1, number2, number3){
  var addUp = number1 + number2;
  var minus = addUp - number3;
  return minus;

}
addThenSubtract();
console.log('addThenSubtract 3 numbers = ', addThenSubtract(a, b, c));

//or pass in your own number values:
console.log('addThenSubtract 3 numbers = ', addThenSubtract(88, 7, 3));

/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */

function addThenMultiply(number1, number2, number3){
  var addUp = number1 + number2;
  var multiply = addUp * number3;
  return multiply;
}
addThenMultiply();
var howMany = addThenMultiply(a,b,c);
console.log("howMany", howMany);
//or pass in your own numbers
var howMany = addThenMultiply(1,3,2);
console.log("howMany", howMany);

/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */

function createFullName(firstName, lastName){
  var result = firstName + " " + lastName;
  return result;
}
createFullName();

var myFullName = createFullName("Grace", "Hopper");
console.log("The person who coined the term debugging is", myFullName);
/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */

function verifyDrinkingAge(age){
  if(age >= 21){
    return true;
  }else{
    return false;
  }
}
verifyDrinkingAge();
var canDrinkBeer = verifyDrinkingAge(101);
console.log('Can I have a swig of that drink?', canDrinkBeer);


/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */

//option 1 
function throwParty(drinkUp){
  if(drinkUp === false){
    return "The Party will have tones of Cake!";
  }else{
    return "This party will have an open bar";
  }
}
throwParty();
console.log(throwParty(canDrinkBeer));

//option 2
function throwParty(){
  if(canDrinkBeer === false){
    return "The Party will have tones of Cake!";
  }else{
    return "This party will have an open bar";
  }
}
throwParty();
console.log(throwParty());

/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */
//option 1 scenic route
function eatFood(firstName, lastName, food){
  var person = firstName + " " + lastName;
  var result = person + " loves to eat " + food;
  return result;
}
eatFood();
console.log(eatFood("Biggie", "Smalls", "Spam Musubis"));

//option 2 shorter route
function eatFood(firstName, lastName, food){
  return firstName + " " + lastName + " loves to eat " + food;
}
eatFood();
console.log(eatFood("David", "Ige", "Chicken Katsu"));

/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */

function repeater(number, drinkUp){
  for (var i = 0; i<number; i++){
    if(drinkUp === true){
      console.log("Bacon Pancakes, makin' Bacon Pancakes");
    }else{
      console.log("Let it go... LET IT GOOOOOOoOoOoOo...");
    }
  }
}
repeater(howMany, canDrinkBeer);
