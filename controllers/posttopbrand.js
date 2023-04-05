const Topbrand = require('../modals/topbrand');

async function postTopbrand(req, res) {
    const topbrand = new Topbrand({
        image: req.body.image,
        restaurant: req.body.restaurant,
        time: req.body.time
    });
    try {
        const result = await topbrand.save();
        res.send(result);
    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the product');
        }
    }
}

module.exports = postTopbrand;
