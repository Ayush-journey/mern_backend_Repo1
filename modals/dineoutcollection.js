const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dineoutcollectionInfo = new Schema({
    img:String,
    title:String,
    count:String
});

const Dineoutcollectionmodel = mongoose.model('dineoutcollection', dineoutcollectionInfo);
module.exports = Dineoutcollectionmodel;