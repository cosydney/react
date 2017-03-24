require('mocha')
const expect = require('chai').expect

const square = x => isNaN(x) ? null : x * x

describe('square', () => {

  it('returns a NUmber', ()=>
    expect(square(2)).to.be.a('number')
      )

  it('returns number, squared', () => {
    expect(square(2)).to.equal(4)
    expect(square(4)).to.equal(16)
    expect(square(5)).to.equal(25)
  })
  describe('when argument is Nan', () => {
    it('should return null',  () => {
      expect(square(NaN)).to.equal(null)
    })
  })
})