/*
####Задача 5

Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
Создайте из него новый массив, где останутся лежать только
положительные числа `[1, 2, 3, 7]`. Создайте для этого вспомогательную
функцию `isPositive(-3)`, которая параметром будет принимать число
и возвращать true, если число положительное, и false — если отрицательное.
Данная функция должна обязательно содержать проверку входного параметра,
потому что принимать она может только число.

*Для добавление нового элемента в конец массива используйте метод push*

```js
// Пример использования функции isPositvie()
isPositive(-3) // вернет false
isPositive(3) // вернет true
isPositive('s') // Error: parameter type is not a Number

// Пример использования метода push
var arr = [8];
arr.push(2);
console.log(arr[1]); // выведет число 2
```
*/

'use strict';

function isPositive(a) {
    if (typeof a !== 'number') {
        throw new Error('parameter type is not a Number');
    }
    let result = false;
    if (a > 0) result = true;

    return result;
}

let arr = [1, 2, -4, 3, -9, -1, 7];
let arrResult = [];

for (let i = 0; i < 7; i++) {
    if (isPositive(arr[i])) {
        arrResult.push(arr[i]);
    }
}

console.log('Исходный массив', arr);
console.log('Полученный массив', arrResult);
