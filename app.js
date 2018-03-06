/**
 * Modules
 */
const nunjucks = require('nunjucks');
const express = require('express');
const tweetBank = require('./tweetBank.js')
const routes = require('./routes');
const app = express();

/**
 * Nunjucks stuff
 */
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });


app.use(express.static('public'));
app.use('/', routes);
// // '/tweets/:tweetID' req.params
// app.get('/tweets/:tweetID', (req, res, next) => {
//     let tweetList = tweetBank.list();
//     singletweet = tweetList.req.params.tweetID
//     res.render('index', {title: 'a tweet should be here', people: tweetList});
//     next();
// })

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


/**
 * Old
 * 
 */

 /**
 * Welcome message for requesting root URI
 */
// 
// app.get('/', (req, res, next) => {
//     res.send('Welcome');
//     next();
// });