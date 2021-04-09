'use strict';

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    Data = new Date(),
    day = Data.getDay(),
    body = document.getElementsByTagName('body');


week.forEach(function(item, index) {
  let p = document.createElement('p');

  if (index === day - 1) {
    item = item.bold();
  } else if (item === 'суббота' || item === 'воскресенье') {
    item = item.italics();
  }
  
  p.innerHTML = item;
  document.body.appendChild(p);
});
 