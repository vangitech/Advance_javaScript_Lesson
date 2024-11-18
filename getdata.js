function getData (callback) {
    setTimeout (() => {
        callback ("Data fetched");
    }, 1000)
}
getData((message) =>{
    console.log(message);
});

async function fetchData() {
    const result = await new  Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        },1000);
    });
    console.log(result);

    
}
fetchData();