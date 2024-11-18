// classwork1
// https://jsonplaceholder.typicode.com/posts/1

const { error } = require("console")

fetch ('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data))
.catch((error) =>  console.error(error))



// class work2
// https://randomuser.me/api/
fetch ('https://randomuser.me/api/')
.then(response => response.json())
.then(data => console.log(data))
.catch((error) =>  console.error(error))