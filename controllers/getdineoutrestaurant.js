const Dineoutrestaurant = require('../modals/dineoutrestaurant');

async function getDineoutrestaurant(req, res) {
    const dineoutrestaurants = await Dineoutrestaurant.find({}, { _id: 0 });
    res.send(dineoutrestaurants)
}

module.exports = getDineoutrestaurant;
