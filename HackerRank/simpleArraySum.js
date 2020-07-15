var readlineSync = require('readline-sync');

var arr = [];
function sumarray() {
    var sum = 0;
    var N = readlineSync.question("Enter the length of array: ");
    if (N % 1 == 0) {
        for (let n = 0; n < N; n++) {
            ele(n);
        }
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            sum = Number(sum) + Number(arr[i]);
        }
        console.log(sum);
    }else{
        console.log("Enter the valid number: ")
        sumarray();
    }
}

function ele() {
    var n = readlineSync.question("Enter element: ");
    arr.push(n);
}
sumarray();