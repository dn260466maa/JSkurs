/*
####Задача 1

Напишите функцию `f`, которая возвращает куб числа.
Число передается параметром. Данная функция должна обязательно
содержать проверку входного параметра, потому что принимать она
может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

'use strict';

let f = function(a) {
    let result;

    if (typeof a === 'number') {
        result = a**3;
    } else {
        throw new Error('parameter type should be a number');
    }

    return result;
}

let result1 = f(2); // 8
console.log(result1);

let result2 = f('Content'); // Error: parameter type is not a Number
console.log(result2);
