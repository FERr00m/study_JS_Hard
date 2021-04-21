// eslint-disable-next-line strict
'use strict';

const input = document.getElementById('input'),
  paragraph = document.getElementById('paragraph');

function setText() {
  paragraph.textContent = input.value;
}

function debounce(f, t) {
  return args => {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}

const debouncedLogger = debounce(setText, 300);

input.addEventListener('input', debouncedLogger);
