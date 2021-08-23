const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controllers'); 

console.log("router loaded");
router.get('/', homecontroller.home);

// router for users
router.use('/users',require('./users'));

router.use('/posts', require('./posts'));         

//for any further routes access from here
// router.use('/routerName', require('./routerFile'));


module.exports = router;
