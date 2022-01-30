/*
####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у
родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
*/
'use strict';

function filter(arr0, callback) {
    if (!Array.isArray(arr0)) {
        throw new Error('first parameter type should be an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('second parameter type should be an function');
    }

    let arr1 = [];
    for (let i = 0; i < arr0.length; i++) {
        if (callback(arr0[i], i, arr0)) {
           arr1.push(arr0[i]);
        }
    }
    return arr1;
}

const arr = [1,2,3];
let resultArr = filter(arr, function(item, i, arr0) {
    return item < 3;
});
console.log(resultArr);
