const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const deliveryrestaurantInfo = new Schema({
    title: String,
    img: String,
    rating: String,
    categories:String,
    price: String,
    offer: String,
    time:String
});

const Deliveryrestaurantmodel = mongoose.model('deliveryrestaurant', deliveryrestaurantInfo);
module.exports = Deliveryrestaurantmodel;