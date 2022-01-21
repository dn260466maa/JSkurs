'use strict';

function arrayLengthAlignment(arr, lengthArray) {
    let j = lengthArray-arr.length;
    for (let i = 0; i < j; i++) {
        arr.unshift(0);
    }
    return arr;
}

function solution(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error('parameters type should be an array');
    }
    let arrResult = [];

    if (a.length < b.length) {
        a = arrayLengthAlignment(a,b.length);
    }
    if (a.length > b.length) {
        b = arrayLengthAlignment(b,a.length);
    }

    let j = 0;
    let k = 0;
    let i = a.length - 1;
    while (i >= 0) {
        j = k + a[i] + b[i];
        k = 0;
        if (j < 10) {
            arrResult.unshift(j);
        } else {
            k = 1;
            arrResult.unshift(j-10);
        }
        i--;
    }
    if (k > 0) arrResult.unshift(k);

    return arrResult;
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
