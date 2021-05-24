const mongoose = require('mongoose');


const commentsSchema = mongoose.Schema({
    id_Val: mongoose.Schema.Types.ObjectId,
    user: {
        type: String,
        ref: 'Profile'
    },
    post: {
        type: String,
        //ref: 'Post'
    },
    comment: {
        type: String,
        required: true
    },
    created: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model('Comment', commentsSchema);