require('mocha')

const expect = require('chai').expect
const square = x => x * x

describe('square', () => {

  it('returns a number', ()=>
    expect(square(2)).to.be.a('number')
      )

  it('returns number, squared', () => {
    expect(square(2)).to.equal(4)
    expect(square(4)).to.equal(12)
    expect(square(5)).to.equal(23)
  })
  describe('when argument is Nan', () => {
    it('should return null', () => {
      expect(square(NaN).to.equal(null))
    })
  })
})