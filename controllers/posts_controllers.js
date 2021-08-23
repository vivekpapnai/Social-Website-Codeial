const Post = require('../models/post');


module.exports.posts = function(req,res){

    return res.end('<h1>This is users first post</h1>');
};

module.exports.createPost = function(req,res){

    Post.create({
        content: req.body.content,
        user: req.user._id
        }, function(err, user){
            if (err){console.log("error in creating post",err)}
            return res.redirect('back');
        })

};