/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у
родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/
'use strict';

function forEach(arr0, callback) {
    if (!Array.isArray(arr0)) {
        throw new Error('first parameter type should be an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('second parameter type should be an function');
    }

    for (let i = 0; i < arr0.length; i++) {
        callback(arr0[i], i, arr0);
    }
}

const arr = [1,2,3];
forEach(arr, function(item, i, arr0) {
    console.log(i + ': ' + item + ' (array: ' + arr0 + ')');
});
