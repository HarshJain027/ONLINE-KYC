const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post('http://localhost:3000/submit', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Store the data in a database or perform any other operation
    // Here, we're just sending back the received data as a response
    res.json(formData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
