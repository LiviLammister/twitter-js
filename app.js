/**
 * Modules
 */
const nunjucks = require('nunjucks');
const express = require('express');
const tweetBank = require('./tweetBank.js')
const app = express();

/**
 * Nunjucks stuff
 */
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

/**
 * Welcome message for requesting root URI
 */
app.get('/', (req, res, next) => {
    res.send('Welcome');
    next();
});

app.get('/index', (req, res, next) => {
    const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];
    res.render('index', { title: 'Hall of Fame', people: people });
    
    next();
})

app.get('/tweets/[0-9]', (req, res, next) => {
    let tweetList = tweetBank.list();
    console.log(tweetList[1])
    res.render('tweets', {title: 'a tweet should be here', people: tweetList[1]});
    next();
})

app.use((req, res, next) => {
    process.stdout.write(req.route.stack[0].method.toUpperCase() + ' ' + req.route.path + '\n');
    next();
});

/**
 * Listen on port 3000
 */
app.listen(3000);
console.log('listening on 3000');

let locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
};
nunjucks.configure('views', { noCache: true });
