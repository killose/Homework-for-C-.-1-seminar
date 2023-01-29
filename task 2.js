// Задача 2: Напишите программу, которая на вход принимает два числа и выдаёт, какое число большее, а какое меньшее.

// a = 5; b = 7 -> max = 7
// a = 2 b = 10 -> max = 10
// a = -9 b = -3 -> max = -3


function calculateMax(num1,num2){
  let maxNum = 0;
  if ( num1 > num2 ) {
    maxNum = num1;
  } else {
    maxNum = num2
  }
  return maxNum
}

console.log(calculateMax(5,7));
console.log(calculateMax(2,10));
console.log(calculateMax(-9,-3));