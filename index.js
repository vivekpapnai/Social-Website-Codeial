const express = require('express');
const app = express();
const port= 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//use assets folder for styling page
app.use(express.static('./assets'));

//extract style and scripts from subpages into layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// using express layouts
app.use(expressLayouts);


// use express router
app.use('/', require('./routes/'));

// set view engine

app.set('view engine', 'ejs');
app.set('views', './views');

// express-session setup
app.use(session({
    name:  'codeial',
    // TODO to change the secret before deployment
    secret : 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// listening to the port
app.listen(port, function(err){

    // console.log('error ', err); 
    // we can write the same things as below known as interpolation
    if (err){
    console.log(`error while connecting to server: ${err}`);
    }
    console.log(`sucess, server running on the port: ${port}`);
});