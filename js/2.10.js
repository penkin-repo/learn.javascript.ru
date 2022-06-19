"use strict";

// Задача 1
if ("0") {
  // alert( 'Привет' );
  console.log("hello");
}
// выведется hello

// Задача 2
let answer = prompt("Какое «официальное» название JavaScript?");

if (answer == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// Задача 3
let value = prompt("Введите число");

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

// Задача 4
result = a + b < 4 ? "Мало" : "Много";

// Задача 5
let login = "Директор";
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
