"use strict";

//----------------------------------------------------------
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator() {
  this.read = function () {
    this.a = +prompt("insert first number");
    this.b = +prompt("insert second number");
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calc = new Calculator();
calc.read();

alert("Sum=" + calc.sum());
alert("Mul=" + calc.mul());


//----------------------------------------------------------
//Напишите функцию-конструктор Accumulator(startingValue).

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("accumulate this -> ");
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(`your number is ${accumulator.value}`);
