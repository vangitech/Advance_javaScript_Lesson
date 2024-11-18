function fetchData (callback) {
    setTimeout(() => {
        callback({ name: 'John', age: 30 });
    }, 1000)
}
fetchData((data) =>{
    console.log('Data:', data);
})