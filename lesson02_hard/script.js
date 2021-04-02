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