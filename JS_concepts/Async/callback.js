//Syncronous programming VS Asyncronous Programming
//Blocking VS non-Blocking

// Sync - One at a time

// function abc() {
//     console.log("ABC")
// }

// function def() {
//     console.log("DEF")
// }

// function fact(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n*fact(n-1);
//     }
// }
// abc()
// def()
// console.log(fact(5))

//Async in 3 ways : 
//Function callback, Promises, Async/await

//function Callbacks

// function serverRequest(query, callback) {
//     var response = query + "full!";
//     callback(response);
// }

// function abc() {
//     console.log("I am Lost")
// }

// serverRequest("The glass is half ", function (results) {
//     console.log("Response from the server: " + results);
// });
// abc();

//////////////////

// function getUser() {
//     setTimeout(() => {
//         const userids = [10, 20, 30, 40];
//         console.log(userids);
//         setTimeout((id) => {
//             const user = {
//                 name: 'John Doe',
//                 age: 25
//             };
//             console.log(`User ID : ${id} : User name : ${user.name}, User Age: ${user.age}`)
//             setTimeout((age) => {
//                 console.log(user);
//             }, 1000, user.age);
//         }, 1000, userids[3]);
//     }, 1500)
// }
// getUser();

/////////////////////////////

// function getUser() {
//     setTimeout(function () {
//         const userids = [10, 20, 30, 40];
//         console.log(userids);
//         setTimeout(function (id) {
//             const user = {
//                 name: 'John Doe',
//                 age: 25
//             };
//             console.log(`User ID : ${id} : User name : ${user.name}, User Age: ${user.age}`)
//             setTimeout(function (age) {
//                 console.log(user);
//             }, 4000, user.age);
//         }, 4000, userids[3]);
//     }, 3000)
// }

// function abc(str, cb) {
//     console.log(str);
//     cb();
// }

// function def() {
//     setTimeout(function () {
//         console.log("I am deaf");
//     }, 5000)
// }
// abc("prash", getUser);
// def();

// Callback Hell and Promises::::::::::::::::::::::::::::::::

// var promise1 = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         resolve('foo')
//     }, 3000)
// })

// promise1.then((value) => {
//     console.log(value)
// })

// function a() {
//     return {b: function() {
//         return {c: function() {
//             console.log('hello')
//             return 'hello'
//         }}
//     }}
// }
// ​
// a().b().c()



// function Sum(x) {
//     return function Sum(y) {
//         var sum = x + y;
//         console.log(sum)
//     }
// }

// Sum(2)(3)

// Promises:::::::::::::::::::

// var isMomHappy = true;
// var promise1 = new Promise((resolve, reject) => {
//     if (isMomHappy) {
//         var phone = {
//             brand: 'oneplus',
//             color: 'Maclaren'
//         }
//         resolve(phone)
//     } else {
//         var error = new Error("Mom's not Happy")
//         reject(error)
//     }
// });

// promise1.then((fullfilled) => {
//     console.log(fullfilled)
// }).catch((err) => {
//     console.log(err.message)
// })

// var promise2 = new Promise((resolve, reject) => {
//     var status = true;
//     if (status) {
//         var message = "The Second promise Data has Started to deliver"
//         resolve(message);
//     } else {
//         var error = new Error("Failed")
//         reject(error)
//     }
// });

// promise1
//     .then(promise2)
//     .then((fullfilled) => {
//         console.log(fullfilled)
//     })
//     .catch((rejected) =>{
//         console.log(rejected.message)
//     })


function getUser() {
    setTimeout(function () {
        const userids = [10, 20, 30, 40];
        console.log(userids);
        setTimeout(function (id) {
            const user = {
                name: 'John Doe',
                age: 25
            };
            console.log(`User ID : ${id} : User name : ${user.name}, User Age: ${user.age}`)
            setTimeout(function (age) {
                console.log(user);
            }, 4000, user.age);
        }, 4000, userids[3]);
    }, 3000)
}

getUser()
// function abc(str, cb) {
//     console.log(str);
//     cb();
// }

// function def() {
//     setTimeout(function () {
//         console.log("I am deaf");
//     }, 5000)
// }
// abc("prash", getUser);
// def();