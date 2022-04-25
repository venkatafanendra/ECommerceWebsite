const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KnH2KSI4o76Qx4pnTfmWnQ8nUrEZ4iR06c2fyq7vFvxDgvCtYBgFPADso09L6qn0ThvlAqk9Umgke7K85xvEnW800UI0EwgnJ');

// - App config
const app = express();

// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// - API routes
app.get('/',(request,response)=> response.status(200).send('hello world'));

app.post('/payments/create',async (request,response)=> { 
    const total = request.query.total;
    console.log('Payment Request Recieved for this Amount >> ',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// - Listener
//http://localhost:5001/clone-19886/us-central1/api
exports.api = functions.https.onRequest(app);

