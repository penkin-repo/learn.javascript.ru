"use strict";

// the last one will lead to 1
let i = 3;

while (i) {
  alert(i--);
}

// the last one will lead to 4
let i = 0;
while (++i < 5) alert(i);

// the last one will lead to 5
let i = 0;
while (++i < 5) alert(i);

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

let num;

do {
  num = prompt("Введите число больше 100", 0);
} while (num <= 100 && num);

//Вывести простые числа
let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert(i);
}
