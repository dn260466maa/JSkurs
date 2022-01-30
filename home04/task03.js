/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у
родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/
'use strict';

function every(arr0, callback) {
    if (!Array.isArray(arr0)) {
        throw new Error('first parameter type should be an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('second parameter type should be an function');
    }

    for (let i = 0; i < arr0.length; i++) {
        if (!callback(arr0[i], i, arr0)) {
            return false;
        }
    }
    return true;
}

const arr = [1,2,3];
let result = every(arr, function(item, i, arr0) {
    return item < 4;
});
console.log(result);
