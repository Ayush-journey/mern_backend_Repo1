const Nightlifecollection = require('../modals/nightlifecollection');

async function getNightlifecollection(req, res) {
    const nightlifecollections = await Nightlifecollection.find({}, { _id: 0, __v: 0 });
    res.send(nightlifecollections);
}

module.exports = getNightlifecollection;