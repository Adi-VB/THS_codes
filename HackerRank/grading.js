var readlineSync = require('readline-sync');

function gradingStudents(arr) {
    arr.map((grade) => {
        diff = 5 - (grade % 5)
        if (grade > 38 && diff <= 3) {
            grade += diff;
        }
        console.log(grade)
    })
}

gradingStudents([73,38,67])