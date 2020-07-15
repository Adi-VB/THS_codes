var readlineSync = require('readline-sync');

var arr = [];
function birthdayCakeCandles() {
    var N = readlineSync.question("Enter the length of array: ");
    if (N % 1 == 0) {
        for (let n = 0; n < N; n++) {
            ele(n);
        }
        console.log(arr);
        var a = 0, max;
        for (let i = 0; i < arr.length; i++) {
            if (arr[a] >= arr[i]) {
                max = arr[a];
            } else {
                a++;
            }
        }
        console.log(max);
    } else {
        console.log("Enter the valid number: ")
        birthdayCakeCandles();
    }
}

function ele() {
    var n = readlineSync.question("Enter element: ");
    arr.push(n);
}

birthdayCakeCandles();