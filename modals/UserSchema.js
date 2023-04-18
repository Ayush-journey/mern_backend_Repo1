const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userinfo = new Schema({
    name: String,
    email: String,
    password: String
})

const UserModal = mongoose.model('User', Userinfo);

module.exports = UserModal;