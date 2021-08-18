const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('profile', {
        title: 'User Profile'
    })
};



// render signup page
module.exports.signUp = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user-signUp',{
        title: "Sign UP"
    });
};


// render signin page
module.exports.signIn = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

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