const Inspiration = require('../modals/inspiration');

async function getInspiration(req, res) {
    const inspirations = await Inspiration.find({}, { _id: 0, __v: 0 })
    res.send(inspirations);
}

module.exports = getInspiration;

