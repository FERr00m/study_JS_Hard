'use strict';


function foo(arg) {
  if (!isNaN(arg)) {
    return alert('Введенные данные не соответствуют типу "строка"');
  } else {
    arg = arg.trim();
    if (arg.length > 30) {
      arg = arg.slice(0, 30) + '...';
      return arg;
    }
    return arg;
  }
}

foo(prompt('Введите данные'));