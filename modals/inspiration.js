const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inspirationInfo = new Schema({
    image: String,
    dish: String
});

const Inspirationmodel = mongoose.model('inspiration', inspirationInfo)
module.exports = Inspirationmodel;