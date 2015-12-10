  var steps = 0;

function palindromeNumberGenerator(number) {
  var currentNumber = number;
  var currentReverse = Number(number.toString().split('').reverse().join(''));
  if (currentNumber === currentReverse) {
    var palindrome = {};
    palindrome.value = currentNumber;
    palindrome.steps = steps;
    return palindrome;
  }
  if (currentNumber !== currentReverse){
    currentNumber+= currentReverse;
    steps++;
    return palindromeNumberGenerator(currentNumber);
  }
}

console.log(palindromeNumberGenerator(87));