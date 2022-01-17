/*
####Задача 2

Перепишите `if..else` с использованием нескольких операторов `?`.

Для читаемости — оформляйте код в несколько строк.

```js
var message;

if (login == 'Pitter') {
    message = 'Hi';
} else if (login == 'Owner') {
    message = 'Hello';
} else if (login == '') {
    message = 'unknown';
} else {
    message = '';
}
*/

'use strict';
const login = 'Owner';
let message;
(login == 'Pitter') ? message = 'Hi'    :
(login == 'Owner')  ? message = 'Hello' :
(login == '')       ? message = 'unknown' :
                      message = '';
console.log('message = ', message);
