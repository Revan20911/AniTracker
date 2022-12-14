const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})

const User = mongoose.model('User', UserSchema, process.env.DB_USERS);

module.exports = User;