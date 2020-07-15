const userids = [10, 20, 30, 40];
const user = {
    name: 'John Doe',
    age: 25
};
var promise = new Promise((resolve, reject) => {
    if (userids.length) {
        resolve(userids)   
    } else {
        var error = new Error("Failed")
        reject(error)
    }
})

var promise1 = new Promise((resolve, reject) => {
    if (userids.length) {
        resolve(userids)
    } else {
        var error = new Error("Failed")
        reject(error)
    }
})

var promise2 = new Promise((resolve, reject) => {
    resolve(user)
})

promise.then((x) => {
    setTimeout(function () {
        console.log(x);
    }, 3000)
}).then((y) => {
    setTimeout(function (id) {
        console.log(`User ID : ${id} : User name : ${user.name}, User Age: ${user.age}`)
    }, 4000, userids[3]);
}).then((z) => {
    setTimeout(function () {
        console.log(user);
    }, 4000, user.age);
}).catch((rejected) =>{
    console.log(rejected.message)
})