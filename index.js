const express = require('express');
const app = express();
const port= 8000;
const expressLayouts = require('express-ejs-layouts');


//use assets folder for styling page
app.use(express.static('./assets'));


// using express layouts
app.use(expressLayouts);


// use express router
app.use('/', require('./routes/'));

// set view engine

app.set('view engine', 'ejs');
app.set('views', './views');



// listening to the port
app.listen(port, function(err){

    // console.log('error ', err); 
    // we can write the same things as below known as interpolation
    if (err){
    console.log(`error while connecting to server: ${err}`);
    }
    console.log(`sucess, server running on the port: ${port}`);
});