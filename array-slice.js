// given an array of some length, return a section of it
// first argument is the starting position (0 indexed). 
// second optional argument is the element to end at (exclusive)

const array = ['r', 'u', 's', 's', 'e', 'l', 'l'];

console.log(array.slice(2)); // returns ['s', 's', 'e', 'l', 'l']
console.log(array.slice(0, 2)); // returns ['r', 'u']
console.log(array.slice(1, 2)); // returns ['r']

