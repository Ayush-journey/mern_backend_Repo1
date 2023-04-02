const Dineoutcollection = require('../modals/dineoutcollection');

async function getDineoutrestaurant(req, res) {
    const dineoutcollections = await Dineoutcollection.find({}, { _id: 0 })
    res.send(dineoutcollections);
}

module.exports = getDineoutcollection;