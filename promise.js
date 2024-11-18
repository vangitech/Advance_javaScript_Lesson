const myPromise = new  Promise((resolve, reject) => {
    // code that takes some time to execute
    let success = true;  // assume it's successful for now

    if(success) {
        resolve("Operation resolved");   // resolve the promise with a message

    } else  {
        reject("Operation Failed");   // reject the promise with a message

    }


});

myPromise.then((message) =>{
    console.log(message)
}) .catch ((error) =>{
    console.log(error)
})
