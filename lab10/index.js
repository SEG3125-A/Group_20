const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const queryResult = req.body.queryResult;
  const intentName = queryResult.intent.displayName;

  // Handle different intents with custom responses
  switch (intentName) {
    case 'Welcome Intent':
      handleWelcomeIntent(res);
      break;
    case 'Fallback Intent':
      handleFallbackIntent(res);
      break;
    case 'Thank You Intent':
      handleThankYouIntent(res);
      break;
    case 'Service Booking':
      handleServiceBooking(queryResult, res);
      break;
    default:
      res.json({ fulfillmentText: "I'm not sure how to help with that." });
  }
});

// Handlers for each intent
function handleWelcomeIntent(res) {
  const welcomeResponses = [
    "Hello! Welcome to our service. How can I assist you today?",
    "Hi there! Looking to book a service?",
    "Welcome! Let me know what you need."
  ];
  const responseText = welcomeResponses[Math.floor(Math.random() * welcomeResponses.length)];
  res.json({ fulfillmentText: responseText });
}

function handleFallbackIntent(res) {
  const fallbackResponses = [
    "I didn't get that. Can you say it again?",
    "I missed what you said. What was that?",
    // Add up to 7 different responses
  ];
  const responseText = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  res.json({ fulfillmentText: responseText });
}

function handleThankYouIntent(res) {
  const thankYouResponses = [
    "You're welcome!",
    "Happy to help!",
    // Add up to 5 responses
  ];
  const responseText = thankYouResponses[Math.floor(Math.random() * thankYouResponses.length)];
  res.json({ fulfillmentText: responseText });
}

function handleServiceBooking(queryResult, res) {
  const serviceType = queryResult.parameters['ServiceType']; // Assuming 'ServiceType' is a custom entity
  const date = queryResult.parameters['date'];
  const time = queryResult.parameters['time'];

  // Example dynamic response based on the booking details
  const responseText = `You've requested a ${serviceType} service on ${date} at ${time}. We will confirm your appointment shortly.`;
  res.json({ fulfillmentText: responseText });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});