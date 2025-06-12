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
    request.get(`${baseUrl}/cart/hello`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', function () {
  it('GET /available_payments should return correct JSON response', function (done) {
    request.get(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', function () {
  it('POST /login with userName should return correct welcome message', function (done) {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'Betty' },
      headers: { 'Content-Type': 'application/json' }
    };
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

