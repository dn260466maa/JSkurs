/*
####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве
параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
*/
'use strict';

function reverse(arr0) {
    if (!Array.isArray(arr0)) {
        throw new Error('parameter type should be an array');
    }
    if (arr0.length <= 0) {
        throw new Error("parameter can't be an empty");
    }

    let resultArr = [];
    for (let i = arr0.length-1; i >=0; i--) {
        resultArr.push(arr0[i]);
    }
    return resultArr;
}

const arr = [3,2,1];
console.log(reverse(arr)); // [1,2,3]
