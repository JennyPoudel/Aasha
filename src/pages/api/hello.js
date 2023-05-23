//const request = require('request');

const stripeApiKey = 'sk_test_51N6bJuBcKerQbAeJN6LZOzAhce3mQqAs9NpPuDVdBei6uS1NXFuyEYgoQC3npsGOnjNGB186FdAHElGfXZhGoQjC00nksOIwHm';
const productId = 'price_1N6nmsBcKerQbAeJvIqifVc5';

const options = {
  method: 'GET',
  url: `https://api.stripe.com/Aasha/products/${price_1N6nmsBcKerQbAeJvIqifVc5}`,
  headers: {
    'Authorization': `Bearer ${sk_test_51N6bJuBcKerQbAeJN6LZOzAhce3mQqAs9NpPuDVdBei6uS1NXFuyEYgoQC3npsGOnjNGB186FdAHElGfXZhGoQjC00nksOIwHm}`
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
