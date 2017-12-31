/* a useful method for copying the enumerable values of a source
   object to a target object 
   e.g.  Object.assign(target, sourceA, sourceB, etc);
   the later sources take precedence over the former */

const foo = { a: 'bilbo', b: 'baggins' };

const newObject = { a: 'russ', c: 'hobbit' };

Object.assign(newObject, foo);

console.log(newObject);

// returns { a: 'bilbo', c: 'hobbit', b: 'baggins' }
