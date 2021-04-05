'use strict';

// Задание №1
let lang = prompt('Введите язык ru/en').toLowerCase();
console.log('lang: ', lang);
let arrRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let arrEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// a
if (lang === 'ru') {
  console.log(arrRu);
} else if (lang === 'en') {
  console.log(arrEn);
} else {
  console.log('Введено неверное значение языка');
}

// b
switch (lang) {
  case 'ru':
    console.log(arrRu);
    break;
  case 'en':
    console.log(arrEn);
    break;
  default:
    console.log('Введено неверное значение языка');
    break;
}

// c
let lang1 = +prompt('Введите 0, если язык ru или 1, если язык en');
let langueges = [
  ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
];
console.log(langueges[lang1]);


// Задание №2
let namePerson = prompt('Введите ваше имя');

console.log((namePerson === 'Артем') ? 'директор' :
  (namePerson === 'Максим') ? 'преподаватель' :
  'студент');