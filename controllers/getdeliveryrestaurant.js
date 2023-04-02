const Deliveryrestaurant = require('../modals/deliveryrestaurant');

async function getDeliveryrestaurant(req, res) {
    const deliveryrestaurants = await Deliveryrestaurant.find({}, { _id: 0 })
    res.send(deliveryrestaurants);
}

module.exports = getDeliveryrestaurant;