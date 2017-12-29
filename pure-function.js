/* not really a javascript thing per se, but pure functions come up
  a lot (e.g. in redux).

  The main qualities that qualify a pure function are:

  (1) They don't rely on state external to the function; they get everything
  they need as arguments.
  (2) They don't modify external state (e.g. if an array is passed in as an   argument, it's not modified and return in the output) 
  (3) They don't have side effects (they don't log to the console or make an  external call, etc)

  https://en.wikipedia.org/wiki/Pure_function

*/

// The simplest pure function example

function sum(a, b) {
  return a + b
}
