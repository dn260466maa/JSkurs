/*
####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у
родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/
'use strict';

function some(arr0, callback) {
    if (!Array.isArray(arr0)) {
        throw new Error('first parameter type should be an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('second parameter type should be an function');
    }

    for (let i = 0; i < arr0.length; i++) {
        if (callback(arr0[i], i, arr0)) {
            return true;
        }
    }
    return false;
}

const arr = [1,2,3];
let result = some(arr, function(item, i, arr0) {
    return item < 4;
});
console.log(result);
