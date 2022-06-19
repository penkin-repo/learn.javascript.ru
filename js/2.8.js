"use strict";
// Задача 1
let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1

// Задача 2
let a = 2;
let x = 1 + (a *= 2);

// x = 5, a = 4

// Задача 3
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $9
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); //  -9  5
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

// Задача 4
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
let a = "1";
let b = "2";
console.log(+a + b); // тут добавляем +

alert(a + b); // результат теперь 3
