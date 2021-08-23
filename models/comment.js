const mongoose = require('mongoose');


const commentScehma = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    //comment belogns to user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},{
    timestamps: true
})

const Comment = mongoose.model('Comment', commentScehma)
module.exports = Comment;