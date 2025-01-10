const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Serve the index.html file when visiting the root route
app.get('/', (req, res) => {
    const mainPagePath = path.join(__dirname, 'public', 'index.html');
    const page1Path = path.join(__dirname, 'public', 'pages', 'page-01.html');
    const page2Path = path.join(__dirname, 'public', 'pages', 'page-02.html');
    const page3Path = path.join(__dirname, 'public', 'pages', 'page-03.html');
    const mainPage = fs.readFileSync(mainPagePath, 'utf-8');
    const page1 = fs.readFileSync(page1Path, 'utf-8');
    const page2 = fs.readFileSync(page2Path, 'utf-8');
    const page3 = fs.readFileSync(page3Path, 'utf-8');
    const modifiedPage = mainPage
        .replace('<!-- page-01-content -->', page1)
        .replace('<!-- page-02-content -->', page2)
        .replace('<!-- page-03-content -->', page3);
    res.send(modifiedPage);
});

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
