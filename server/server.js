const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/subscribe', async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).send({ message: 'Invalid email address.' });
  }

  const audienceID = 'c94466f145';
  const apiKey = '37ddb71739dbcbe203b1177263a9c666-us21';
  const server = apiKey.split('-')[1];
  const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceID}/members/`;

  try {
    await axios.post(
      url,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${apiKey}`,
        },
      }
    );
    res.status(200).send({ message: 'You have successfully subscribed!' });
  } catch (error) {
    console.error('Error:', error.response.data); // Log the error data to the console
    const errorMessage = error.response?.data?.detail || 'Error: Unable to subscribe.';
    res.status(500).send({ message: errorMessage });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
