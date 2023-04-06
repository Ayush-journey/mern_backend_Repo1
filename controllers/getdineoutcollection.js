const Dineoutcollection = require('../modals/dineoutcollection');

async function getDineoutcollection(req, res) {
    const dineoutcollections = await Dineoutcollection.find({}, { _id: 0, __v: 0 })
    res.send(dineoutcollections);
}

module.exports = getDineoutcollection;