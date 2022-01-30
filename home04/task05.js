/*
####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у
родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
*/
'use strict';

function reduce(arr0, callback, acc0) {
    if (!Array.isArray(arr0)) {
        throw new Error('first parameter type should be an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('second parameter type should be an function');
    }
    if (typeof acc0 !== 'number' && typeof acc0 !== 'string') {
        throw new Error('third parameter type should be an a number or a string');
    }

    let summ;
    if (typeof acc0 === 'number') {
        summ = 0;
    } else {
        summ = '';
    }
    for (let i = 0; i < arr0.length; i++) {
        summ += callback(acc0, arr0[i], i, arr0);
    }
    return summ + acc0;
}

const arr = [1,2,3];
const acc = 0;
let result = reduce(arr, function(acc0, item, i, arr0) {
    return acc0 + item;
}, acc);
console.log(result);
