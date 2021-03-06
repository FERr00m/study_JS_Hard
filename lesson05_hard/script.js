'use strict';

/*
1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
*/

let arr = ['1579523', '25489436', '86984', '35654635', '223974130', '45487410', '23158'];


for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}

/*
2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
— Рядом с каждым числом написать оба делителя данного числа
    Например: “Делители этого числа: 1 и n”
*/

for (let i = 2; i <= 100; i++) {
  let counter = 0;
  for (let j = 1; j <= i; j++) { 
    if (i % j === 0) {
      counter += 1;
    }
    if (counter > 2) {
      break;
    }
  }
  if (counter === 2) {
    console.log(`Делители числа ${i}: 1 и ${i}`);
  }
  
}