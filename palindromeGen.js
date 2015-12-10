
function palindromeNumberGenerator(number) {
  var reverse = function(number) {
    var reversed = Number(number.toString().split('').reverse().join(''));
    return reversed;
  };

  var steps = 0;
  var currentNumber = number;
  var currentReverse = reverse(number);
  var numberSteps ={};
  if (currentNumber === currentReverse){
    numberSteps.value = currentNumber;
    numberSteps.steps = steps;
    return numberSteps;
  }
  console.log(steps);
  console.log(currentNumber);
  console.log(currentReverse);
  if (currentNumber !== currentReverse) {
    currentNumber+= currentReverse;
    steps++;
    palindromeNumberGenerator(currentNumber);
  }
}

console.log(palindromeNumberGenerator(87));