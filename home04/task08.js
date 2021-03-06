/*
####Задача 8

Напишите функцию `f`. Данная функция принимает один параметр:
одноуровневый или многоуровневый массив. Возвращает данная функция сумму
всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе
всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и
  не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
```
*/
'use strict';

let f = function(arr) {
    let arrFlattend = [];
    (function flat(arr0) {
        arr0.forEach(function(el) {
            if (typeof el !== 'number' && !Array.isArray(el)) {
                throw new Error('incorrect value');
            }
            if (Array.isArray(el)) flat(el);
            else arrFlattend.push(el);
        });
    })(arr);

    let result = 0;
    for (let i = 0; i < arrFlattend.length; i++) {
        result += arrFlattend[i];
    }

    return result;
}

const arr1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr1)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3
