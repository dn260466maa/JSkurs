/*
####Задача 6

Сделайте функцию `isEven()`, которая параметром принимает целое число и
проверяет: чётное оно или нет. Если чётное — функция возвращает `true`,
если нечётное — `false`. Данная функция должна обязательно содержать
проверку входного параметра, потому что принимать она может только число.

*Чётные числа могут делится на 2 без остатка.*

```js
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number
```
*/

'use strict';

function isEven(a) {
    if (typeof a !== 'number') {
        throw new Error('parameter type is not a Number');
    }
    let result = false;
    if (a%2 === 0) result = true;

    return result;
}

let result1 = isEven(3); // false
console.log(result1);

let result2 = isEven(4); // true
console.log(result2);

let result3 = isEven('Content'); // Error: parameter type is not a Number
console.log(result3);
