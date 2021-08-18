const User = require('../models/user');


module.exports.profile = function(req,res){

    if (req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if (user){
                return res.render('profile',{
                    title: "profile",
                    user : user
                });
            }

            return res.redirect('/users/sign-in');
        });

    }else{
        return res.redirect('/users/sign-in');
    }

};


// render signup page
module.exports.signUp = function(req,res){

    return res.render('user-signUp',{
        title: "Sign UP"
    });
};


// render signin page
module.exports.signIn = function(req,res){

    return res.render('user-signIn',{
        title: "Sign In"
    });
};


// get the signup data
module.exports.create = function(req,res){

    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email}, function(err,user){
        if (err){console.log("error in finding user in signing up"); return}

        if (!user){
            User.create(req.body, function(err,user){
                if (err){console.log("error in creating user while signing up"); return}
                console.log('-------------------',user)
                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }


    })

};


//  sign in and create a session for user
module.exports.createSession = function(req,res){
    return res.redirect('/');

};