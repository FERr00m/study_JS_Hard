'use strict';

let num = 266219;
let strOfNum = num.toString();  // Перевожу число в строку 
let arrayOfStr = strOfNum.split('');  // Делаю массив из элементов
let arrayOfNum = [];  // Создаю пустой массив для добавления чисел

// Преобразование строкового элемента массива в число
arrayOfStr.forEach(element => {
  let num = Number(element);
  arrayOfNum.push(num);
});

// Функция перемножения всех элементов массива
let func = (arr) => {
  let total = 1;
  for (num of arr) {
    total *= num; 
  }
  return total;
};

console.log('Произведение цифр числа 266219:', func(arrayOfNum));
console.log('Произведение цифр числа 266219, возведенное в степень 3:', func(arrayOfNum)**3);
console.log('Первые две цифры предыдущего числа:', (func(arrayOfNum)**3).toString().slice(0, 2));

/* По основному все отлично, И сразу - в js итог арифметичиских вычислений не всегда такой, как ожидается, поэтому, стоит как минимум деление уже округлять, посмотри такую инфу)

 По усложненке - тоже все правильно, хорошо) за комменты отдельный респект)) Только, не нужно код раздувать, если видишь, что можно сократить, то сокращай. Например:, вместо 2 строчек можно записать 1 , и т.д.*/