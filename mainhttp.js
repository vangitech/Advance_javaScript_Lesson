// const { fetchProduct } = require ('./http')

import { fetchProduct } from "./httpexport.js"


fetchProduct().then((data) =>{
    console.log('this is data', data)
}).catch((error)=>{
    console.log('this is error', error)
})