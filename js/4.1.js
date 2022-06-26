"use strict";

//============================
//Напишите код, выполнив задание из каждого пункта отдельной строкой:

const user = {};
user.name = "Jonh";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

//=====================-======
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}

//=============================
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function getSumObj(obj) {
  let sum = 0;
  for (let key in obj) {
    console.log(key);
    sum += obj[key];
  }
  return sum;
}

//===============================
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
