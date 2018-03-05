const express = require('express');
const app = express();

/**
 * Welcome message for requesting root URI
 */
app.get('/', (req, res) => {
    res.send('Welcome'); 
});

app.get('/news', (req, res) => {
    res.send('NEWS');
});

/**
 * Listen on port 3000
 */
app.listen(3000);
console.log('listening on 3000');