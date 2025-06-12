const request = require('request');
const chai = require('chai');
const expect = chai.expect;
const baseUrl = 'http://localhost:7865';

describe('Index page', function () {
  it('GET / should return 200 and correct body', function (done) {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function () {
  it('GET /cart/12 should return 200 and correct body', function (done) {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/hello should return 404', function (done) {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('GET /cart/12abc should return 404', function (done) {
    request.get(`${baseUrl}/cart/12abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

