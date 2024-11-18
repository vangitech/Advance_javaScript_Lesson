// Chai uses expect, should, and assert(ok, equal, not equal) Syntax


import chai from 'chai'
import  { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Number', function() {
    it('should be a number', function() {
        expect("40" + "60").to.be.a('number')
    });
});


const target = parseInt('40')
const wallet =  parseInt('60')
const total = target + wallet
console.log(target + wallet)


