"use strict";

//
console.log(null || 2 || undefined); // 2
console.log(1 && null && 2); // null
alert(alert(1) && alert(2)); // before 1 and after undefined
alert(null || (2 && 3) || 4); // 3

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
let age = 14;
if (age >= 14 && age <= 90) {
  console.log("includes");
} else {
  console.log("not includes");
}

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
let age = 14;
if (age < 14 && age > 90) {
  console.log("includes");
} else {
  console.log("not includes");
}

let age = 10;
if (!(age >= 14 && age <= 90)) {
  console.log("includes");
} else {
  console.log("not includes");
}


// Какие из перечисленных ниже alert выполнятся?
if (-1 || 0) alert( 'first' ); // выаолнит first
if (-1 && 0) alert( 'second' ); // не выполнит
if (null || -1 && 1) alert( 'third' ); // выполнит third


// Напишите код, который будет спрашивать логин с помощью prompt.
let userName = prompt("Ваш логин?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');
  
    if (pass === 'Я главный') {
      alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
      alert( 'Отменено' );
    } else {
      alert( 'Неверный пароль' );
    }
  
  } else if (userName === '' || userName === null) {
    alert( 'Отменено' );
  } else {
    alert( "Я вас не знаю" );
  }




