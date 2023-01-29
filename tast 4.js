// Задача 8: Напишите программу, которая на вход принимает число (N), а на выходе показывает все чётные числа от 1 до N.

// 5 -> 2, 4
// 8 -> 2, 4, 6, 8


function numToEven(N){
    let array = [];
    for(let i = 1; i <= N; i++){
      if(i % 2 === 0){
      array.push(i);
      }
    }
    return array
}

console.log(numToEven(5));
console.log(numToEven(8));