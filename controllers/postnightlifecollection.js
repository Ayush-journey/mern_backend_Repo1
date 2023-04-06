const Nightlifecollection = require('../modals/nightlifecollection');

async function postNightlifecollection(req, res) {
    const nightlifecollection = new Nightlifecollection({
        img: req.body.img,
        title: req.body.img,
        count: req.body.count
    });
    try {
        const result = await nightlifecollection.save();
        res.send(result);
    } catch {
        (err) => {
            res.send(err);
            console.log('Product added successful');
        }
    }
}

module.exports = postNightlifecollection;