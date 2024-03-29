const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')(
  'sk_test_51KhqsAIshNqosnWhsjswa0KLYW5LXNUzbouTKeHGzOZrkDoa6AThFOR37nCYeqh5Wvc4Xu9g9lUs3abxIdHmNwcc009mTQw3p5'
);

//API
//API config
const app = express();
//API Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment request recieved for this amount >>>', total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: 'usd',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
