// Задача 4: Напишите программу, которая принимает на вход три числа и выдаёт максимальное из этих чисел.

// 2, 3, 7 -> 7
// 44 5 78 -> 78
// 22 3 9 -> 22

function calculateMax(num1,num2, num3){
  let maxNum = 0;
  if ( num1 > num2 && num1 > num3 ) maxNum = num1;
  if ( num2 > num3 && num2 > num1)  maxNum = num2;
   else {
    maxNum = num3
   }
  return maxNum
}


console.log(calculateMax(2,3,7));
console.log(calculateMax(44,5,78));
console.log(calculateMax(22,3,9));