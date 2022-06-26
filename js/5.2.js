"use strict";

//----------------------------------------------------------
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

function Sum(a, b) {
  this.a = a;
  this.b = b;

  this.sumPrompt = function () {
    this.a = parseInt(+prompt("insert a"));
    this.a = parseInt(+prompt("insert a"));
    alert(this.a + this.b);
  };

  this.display = function () {
    alert(this.a + this.b);
  };
}

let sum = new Sum(1, 2);
sum.display();

//-------------------------------------------
//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

//----------------------------------------------------------------
//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
