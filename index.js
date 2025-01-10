const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const { data } = require('./data');

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.ejs file dynamically
app.get('/', (req, res) => {
    res.render('index', data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
