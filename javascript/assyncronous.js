//asyncrinous javascript

// ways of which functions execute in javascript

//asycronous
//syncronous

const asychronous = () => {
    //syncronous esecutes one after the other
    let settime =setTimeout(() => console.log(`true`, true), 3000);
    let name = "gideon";
    let length = 2;
    console.log(`name`, name)
    console.log(`length`, length)
};

const callsback = (name, length) => {
    console.log(`name`, name);
    console.log(`length`, length);
};



//using callbacks
const syncronous = (callback) => {
    //syncronous esecutes one after the other
    setTimeout(() => console.log(`true`, true), 3000);

let name = "gideon";
let length = 2;
let time = setTimeout(() => {
    console.log(`true`, true);
    callback(`name`, length);
    }, 3000);
};

// console.log(`syncronous`, syncronous(callback));

//using promises

const promises = (callback) => {

    return new promises((resolve, reject) => {
        let name = "gideon";
        let length = 3;

        let time = setTimeout(() => {
            console.log(`true`, true);
            callback(name, length);
            let error = false;

            if (error) {
                reject("there was error");
            }

            resolve(callback(name, length))

        });
    });

};
//promises(callsback);

//second way of using promises
const promisesTwo = (callback) => {

    return new promises((resolve, reject) => {
        setTimeout(() => {
            let condition = true;
//    (condition
//     ? resolve() :reject("trere was error");
//     : reject("there was an error");
//         }, 3000);
//     };
// promisesTwo(callsback)
// .then((res) => {
//     console.log(`res.data`, res);
// })
// .catch((err) => console.error(err))
// .finally((res) => {
//     console.log(`it has finished`);
// });
        
// async and await

//async function asyncAndAwaits (){}

const asyncAndAwait = async () => {
    let name = await Promise.resolve("gideon");
    let length = await Promise.resolve(4)
    console.log(length);
    console.log(name);
};
asyncAndAwait();