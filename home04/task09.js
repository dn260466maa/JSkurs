/*
####Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными
значениями. Первым параметром функция принимает значение, которым заполнять
массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект,
  массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/
'use strict';

function arrayFill(a, b) {
    if (typeof a !== 'number' && typeof a !== 'string'
     && typeof a !== 'object' && !Array.isArray(a)) {
        throw new Error('first parameter is incorrect');
    }
    if (typeof b !== 'number') {
        throw new Error('second parameter type should be an a number');
    }
    let resultArr = [];
    for (let i = 0; i < b; i++) {
        resultArr.push(a);
    }
    return resultArr;
}

console.log(arrayFill('x',5)); // [x,x,x,x,x]
