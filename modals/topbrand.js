const express = require('mongoose');
const Schema = mongoose.Schema;

const topbrandInfo = new SchemaType({
    image:String,
    restaurant:String,
    time:String
});

const Topbrandmodel = mongoose.model('topbrand', topbrandInfo);
module.exports = Topbrandmodel;