// Задача 6: Напишите программу, которая на вход принимает число и выдаёт, является ли число чётным (делится ли оно на два без остатка).

// 4 -> да
// -3 -> нет
// 7 -> нет


function calculateEvenNum(number){
  if ( number % 2 === 0) {
    return "да"
  } return "нет"
}


console.log(calculateEvenNum(4))
console.log(calculateEvenNum(-3))
console.log(calculateEvenNum(7))