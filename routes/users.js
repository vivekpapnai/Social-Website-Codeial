const express = require('express');
const router = express.Router();
const passport = require('passport');

const user_controller = require('../controllers/users_controllers');

const posts_controller = require('../controllers/posts_controllers');

// router.get('/',user_controller.profile);

router.get('/posts', posts_controller.posts);

router.get('/profile', user_controller.profile);

router.get('/sign-up', users_controller.signUp);

router.get('/sign-in', users_controller.signIn);

router.post('/create', user_controller.create);


//  use passport as a middleware to autheticate
router.post('/create-session',passport.autheticate(
    'local',
    {failureRedirect : '/users/sign-in'},
) ,user_controller.createSession);


module.exports = router;