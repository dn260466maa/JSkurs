/*
####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров.
Количество параметров может быть любым. Данная функция должна
обязательно содержать проверку входных параметров, потому что
принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/

'use strict';

let f = function() {
    let result = 0;
    for (let item of arguments) {
        if (typeof item === 'number') {
            result += item;
        } else {
            throw new Error('all parameters type should be a number');
        }
    }
    return result;
}

let result1 = f(1,2,3); // 6
console.log(result1);

let result2 = f(1,1,1,1,1,1,1,1); // 8
console.log(result2);

let result3 = f(1,2,'s',4); // Error: all parameters type should be a Number
console.log(result3);
