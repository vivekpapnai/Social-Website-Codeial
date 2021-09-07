const express = require('express');
const router = express.Router();
const passport = require('passport');

const posts_controller = require('../controllers/posts_controllers');


router.post('/create', passport.checkAuthentication ,posts_controller.createPost);
router.get('/destroy/:id', passport.checkAuthentication, posts_controller.destroy);

module.exports = router;