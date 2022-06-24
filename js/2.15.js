"use strict";

//Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(n1, n2) {
  return n1 > n2 ? n2 : n1;
}

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}


