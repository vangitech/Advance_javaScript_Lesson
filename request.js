// HTTP REQUESTS
// https://fakestoreapi.com/products/1

fetch ('https://fakestoreapi.com/products/')
.then((result) => result.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));
 
// POST Request
(async () => {
    const fetch = (await import ('node-fetch')).default;

    fetch("https://jsonplaceholder.typicode.com/posts", {
       method: 'POST',
       body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
       }),
       headers: {
        'Content-Type': 'application/json',
       }
     }) 

})