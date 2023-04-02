const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nightliferestaurantInfo = new Schema({
    title: String,
    img: String,
    rating: String,
    categories: String,
    price: String,
    time: String,
    location: String
});

const Nightliferestaurantmodel = mongoose.model('nightliferestaurant', nightliferestaurantInfo);
module.exports = Nightliferestaurantmodel;