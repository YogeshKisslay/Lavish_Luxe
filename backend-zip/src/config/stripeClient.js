const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51Q8bJEKODdllGjjVPXUIXqKtMIOek4EJ0ms2eqhAQvKXG2cGcnFXugYp2nRUOmOgPvBAUvcSAAQQZmzQRXKdrZ8r00LTQo1xmn'); // Replace with your actual Stripe Secret Key
module.exports = stripe;
