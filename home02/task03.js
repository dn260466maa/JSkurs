/*
####Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит
на третье. Данная функция должна обязательно содержать проверку входных
параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
*/

'use strict';

let f = function(a,b,c) {
    for (let item of arguments) {
        if (typeof item !== 'number') {
            throw new Error('all parameters type should be a number');
        }
    }
    return (a - b) / c;
}

let result1 = f(9,3,2); // 3
console.log(result1);

let result2 = f('s',9,3) // Error: all parameters type should be a Number
console.log(result2);
