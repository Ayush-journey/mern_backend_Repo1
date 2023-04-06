const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dineoutrestaurantInfo = new Schema({
    title:String,
    img:String,
    rating:String,
    categories:String,
    price:String,
    time:String,
    location:String
});

const Dineoutrestaurantmodel = mongoose.model('dineoutrestaurant', dineoutrestaurantInfo);
module.exports = Dineoutrestaurantmodel;