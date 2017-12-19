/* Literal Format */

var obj1 = {};
var arr1 = [];
var func1 = function() {};

/* Constructor Format */

// not really recommended in most situations
// * harder to read
// * harder to work with
// * and slower

// BUT apropos Function Constructor - one key advantage over function literal

// * it can Dynamically create a function at runtime

var obj2 = new Object();
var arr2 = new Array();
var func2 = new Function();

// Example of function literal vs function Constructor

var adder1 = function(num1, num2) {
  return num1 + num2;
};

// first two arguments are parameters for the new function, the last is the body
var adder2 = new Function("num1", "num2", "return num1 + num2");

function make(adjective) {
  return new Function('noun', "return noun[0].toUpperCase() + noun.slice(1) + ' is " + adjective + "!'");
}

var isFun = make('fun');

console.log(isFun('biking')); //biking is fun
isFun('climbing'); //climbing is fun
isFun('broccoli'); //broccoli is fun
