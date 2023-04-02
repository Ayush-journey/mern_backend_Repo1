const Topbrand = require('../modals/topbrand');

async function getTopbrand(req, res) {
    const topbrands = await Topbrand.find({}, { _id: 0 })
    res.send(topbrands);
}

module.exports = getTopbrand;