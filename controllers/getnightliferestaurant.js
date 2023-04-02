const Nightliferestaurant = require('../modals/nightliferestaurant');

async function getNightliferestaurant(req, res) {
    const nightliferestaurants = await Nightliferestaurant.find({}, { _id: 0 })
    res.send(nightliferestaurants);
}

module.exports = getNightliferestaurant;