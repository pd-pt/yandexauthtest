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
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Here, you can process the form data, like storing it in a database or sending an email.
    console.log(`Received registration data: ${name}, ${email}, ${password}`);

    // Redirect the user to a success or error page
    res.redirect('/success'); // Replace with your desired redirect URL
});

app.get('/success', (req, res) => {
    res.send('Registration successful!');
  });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});