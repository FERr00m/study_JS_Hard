'use strict';


const declensionOfEndings = function(number, one, two, five) {
  let strNumber = String(number);
  if ('567890'.includes(strNumber.slice(-1)) || 11 <= +(strNumber.slice(-2)) && +(strNumber.slice(-2)) <= 14) {
    return five;
  } else if ('1'.includes(strNumber.slice(-1))) {
    return one;
  } else if ('234'.includes(strNumber.slice(-1))) {
    return two;
  }
};


const checkZero = function(number) {
  let stringNumber = String(number);
  if (stringNumber.length === 1) {
    return ('0' + stringNumber);
  }
  return number;
};


let date = new Date();

const day = ["Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота"];
 
const month = ["января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря"];

const body = document.getElementsByTagName('body');

let caseA = document.createElement('p'), 
    caseB = document.createElement('p');


setInterval(function() {
  date = new Date();
  
  caseA.innerHTML = ('а) Сегодня ' + day[date.getDay()] + ', ' + date.getDate() + ' ' + 
  month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + 
  ' ' + declensionOfEndings(date.getHours(), 'час', 'часа', 'часов') + ' ' + 
  date.getMinutes() + ' ' + declensionOfEndings(date.getMinutes(), 'минута', 'минуты', 'минут') + 
  ' ' + date.getSeconds() + ' ' + declensionOfEndings(date.getSeconds(), 'секунда', 'секунды', 'секунд'));

  caseB.innerHTML = ('б) ' + checkZero(date.getDay()) + '.' + checkZero((date.getMonth() + 1)) +
  '.' + date.getFullYear() + ' - ' + checkZero(date.getHours()) + ':' + 
  checkZero(date.getMinutes()) + ':' + checkZero(date.getSeconds()));

  document.body.appendChild(caseA);
  document.body.appendChild(caseB);
}, 1000); 
 