/**
 * Modules
 */
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();

/**
 * Welcome message for requesting root URI
 */
app.get('/', (req, res, next) => {
    res.send('Welcome');
    next();
});

app.get('/news', (req, res, next) => {
    res.send('NEWS');
    next();
});

app.use((req, res, next) => {
    process.stdout.write(req.route.stack[0].method.toUpperCase() + ' ' + req.route.path + '\n');
    next();
});

/**
 * Listen on port 3000
 */
app.listen(3000);
console.log('listening on 3000');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});