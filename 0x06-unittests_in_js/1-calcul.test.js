const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber with Chai', () => {
  it('should return 4 when passed 1 and 3', () => {
    expect(calculateNumber(1, 3)).to.equal(4);
  });

  it('should return 5 when passed 1 and 3.7', () => {
    expect(calculateNumber(1, 3.7)).to.equal(5);
  });

  it('should return 6 when passed 1.5 and 3.7', () => {
    expect(calculateNumber(1.5, 3.7)).to.equal(6);
  });
});

