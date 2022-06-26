"use strict";

// we need to put a semicolon
let user = {
  name: "Джон",
  go: function () {
    // alert(this.name);
  },
};

user.go();

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};

calculator.read(2, 3);
alert(calculator.sum());
alert(calculator.mul());

// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так: ladder.up().up().down().up().down().showStep();

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};
