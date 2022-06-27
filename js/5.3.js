"use strict";

//----------------------------------------------------------
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

let newStr = str[0].toUpperCase() + str.slice(1);

//----------------------------------------------------------
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

//----------------------------------------------------------
//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

//------------------------------------------------------------
//Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
  return +str.slice(1);
}
