const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    campId: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    schoolName: {
        type: String
    },
    pilgrimGroup: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    community: {
        type: String,
        required: true
    },
    addtionalInfo: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);