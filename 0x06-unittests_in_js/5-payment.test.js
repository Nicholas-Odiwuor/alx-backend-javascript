// File: 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" for inputs 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});

