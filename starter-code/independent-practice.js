/*
  1. Write a function `lengths` that accepts a single parameter as an argument, namely
  an array of strings. The function should return an array of numbers where each
  number is the length of the corresponding string.
*/

function lengths(Array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(Array[i].length);
  };
  return newArray;
};

   for ( nunumbersArray.length;
}
// your code here

/*
  2. Write a Javascript function called `transmogrifier`
  This function should accept three arguments, which you can assume will be numbers.
  The transmogrified result of three numbers is the product of the first two numbers,
  raised to the power of the third number.
  Your function should return the "transmogrified" result.
*/

function transmogrifier(num1, num2, num3) {
  var Num1AndTwo = num1 * num2;
  var transmogrified = Math.pow(Num1AndTwo, num3);
 return transmogrified;
};

undefined
transmogrifier(1, 2, 3);
8
// your code here

/*
  3. Write a function `wordReverse` that accepts a single argument, a string.
  The method should return a string with the order of the words (not letters) reversed. Don't worry
  about punctuation. I.e. "hello world" should become "world hello".
*/
function wordReverse(String) {
  var words = String.split(' ');
  var reversedWords = words.reverse();
  return reversedWords.join(' ');
};
// your code here
