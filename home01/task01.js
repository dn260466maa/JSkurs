/*
####Задача 1

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
var result;
if (a + b < 4) {
    result = true;
} else {
    result = false;
}
*/

'use strict';
const a = 1, b = 3;
let result = (a + b < 4) ? true : false;
console.log('result = ', result);
