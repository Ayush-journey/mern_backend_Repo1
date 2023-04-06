const Nightliferestaurant = require('../modals/nightliferestaurant');

async function postNightliferestaurant(req, res) {
    const nightliferestaurant = new Nightliferestaurant({
        title: req.body.title,
        img: req.body.img,
        rating: req.body.rating,
        categories: req.body.categories,
        price: req.body.price,
        time: req.body.time,
        location: req.body.location
    });
    try {
        const result = await nightliferestaurant.save();
        res.send(result);
    } catch {
        (err) => {
            res.send(err);
            console.log('Product added successful');
        }
    }
}

module.exports = postNightliferestaurant;