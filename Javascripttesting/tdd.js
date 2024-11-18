/* Mocha is a tools that helps you test code
and Chai is like a helper for mocha, prodiving was to check if things are working
 TDD is test-driven development: it a method you write test first, before write the code*/

 // thanks for signing up AND please login

/* const auth =()=>{
    setTimeout(()=>{
        console.log(`thanks for signing up`)
        } ,5000 )
       
        setInterval(() => {
            console.log("please login ")
        }, 2000);
}
 
 
auth()*/


// import assert from 'assert'
// import { describe, it } from 'mocha'

// describe('Add', function(){
//     it('should return 2 when 1 is added to 1', function(){
//         assert.ok(1 + 1, 2)
//     });
// });

// import assert from  'assert'
// import { describe, it } from 'mocha'

// describe('age of student', function(){
//     it('it should return -1 when the value is not present', function(){
//         assert.equal([25, 30, 42, 55, 70].indexOf(80), -1);
//     });
// });


// describe('Add', function(){
//     it('this is the test for addition of number', function(){
//         assert.ok(2 + 2, 4);
//     })
// })

import assert from  'assert'
import { describe, it } from 'mocha' 
import { riskyOperation } from './errorhandle';   

describe('division',  function(){
    it('this is the test for division of number', function(){
        assert.equal(10 / 2, 5);

    })
})


const add = (a, b) => a + b;
 
describe('Add Function', function() {
  it('should add two numbers', function() {
    assert.equal(add(2, 3), 5);
  });
 
  it('should handle negative numbers', function() {
    assert.equal(add(-2, 3), 1);
  });
});
