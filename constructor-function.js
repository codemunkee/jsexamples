var numLetters = function(letter) {
  return new Function("number", "2 * 3");
};

var bleh = numLetters('a');

console.log(bleh(3));

