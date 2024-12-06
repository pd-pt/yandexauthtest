const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle the form submission

app.get('/token', (req, res) => {
    res.send('Registration successful!', JSON.stringify(req.requery));
  });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
