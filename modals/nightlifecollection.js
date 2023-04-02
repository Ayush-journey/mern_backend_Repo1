const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nightlifecollectionInfo = new Schema({
    img: String,
    title: String,
    count: String
});

const Nightlifecollectionmodel = mongoose.model('nightlifecollection', nightlifecollectionInfo);
module.exports = Nightlifecollectionmodel;