/*
####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
а затем возвращает день недели на русском языке. Данная функция должна
обязательно содержать проверку входного параметра, потому что принимать
она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

'use strict';

let f = function(a) {
    if (typeof a !== 'number') {
        throw new Error('parameter type is not a Number');
    }
    if ( !(a === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 6 || a === 7) ) {
        throw new Error('parameter should be in the range of 1 to 7');
    }

    let result = '';
    switch (a) {
    case 1:
        result = 'Воскресенье';
        break;
    case 2:
        result = 'Понедельник';
        break;
    case 3:
        result = 'Вторник';
        break;
    case 4:
        result = 'Среда';
        break;
    case 5:
        result = 'Четверг';
        break;
    case 6:
        result = 'Пятница';
        break;
    case 7:
        result = 'Суббота';
    }

    return result;
}

let result1 = f(1); // Воскресенье
console.log(result1);

let result2 = f(2); // Понедельник
console.log(result2);

let result3 = f(8); // Error: parameter should be in the range of 1 to 7
console.log(result3);

let result4 = f('1'); // Error: parameter type is not a Number
console.log(result4);
