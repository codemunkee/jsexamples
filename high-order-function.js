/* a functional programming construct that comes up quite a bit in
   javascript 

   just a function that takes another function as an argument.

   map, filter, reduce are the common examples */

 function square(integer) {
     return integer * integer
 }

const array = [0, 1, 2, 3, 4, 5, 6];

const squared = array.map(square);

console.log(squared);
