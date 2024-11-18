// async
// set timeout
setTimeout(() =>{
    console.log('This is answer', 5+3)
}, 3000);

setTimeout(() => {
    console.log ("Async Task")
}, 2000);
// set interval
setInterval(() => {
    console.log("i am a developer")
}, 4000)
// setImmediate
setImmediate(() => {
    console.log("This is setImmediate")
})
// process.nextTick
