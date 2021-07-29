const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/users_controllers');

const posts_controller = require('../controllers/posts_controllers');

router.get('/profile',user_controller.profile);

router.get('/posts', posts_controller.posts);

module.exports = router;