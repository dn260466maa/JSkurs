/*
#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]

**Внимание**!
- Не разрашается использовать специальные методы массивов.
*/

'use strict';
let arr = [6,5,4,3,2,1];
let flag = true;

console.log('исходный массив:');
for (let i = 0; i < 6; i++) {
    console.log(arr[i]);
}

for (let j = 1; j <= 6-1; j++) {
    flag = true;
    for (let i = 0; i <= 6-1-j; i++) {
        if (arr[i] > arr[i+1]) {
            let tmp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = tmp;
            flag = false;
        }
    }
    if (flag) break;
}

console.log('');
console.log('отсортированный массив:');
for (let i = 0; i < 6; i++) {
    console.log(arr[i]);
}
