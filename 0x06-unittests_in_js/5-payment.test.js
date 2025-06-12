// File: 5-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" once when called with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithExactly('The total is: 120'));
  });

  it('should log "The total is: 20" once when called with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithExactly('The total is: 20'));
  });
});

