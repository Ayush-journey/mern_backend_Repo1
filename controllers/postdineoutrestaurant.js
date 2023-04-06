const Dineoutrestaurant = require('../modals/dineoutrestaurant');

async function postDineoutrestaurant(req, res) {
    const dineoutrestaurant = new Dineoutrestaurant({
        title: req.body.title,
        img: req.body.img,
        rating: req.body.rating,
        categories: req.body.categories,
        price: req.body.price,
        time: req.body.time,
        location: req.body.location
    });

    try {
        const result = await dineoutrestaurant.save();
        res.send(result);
    } catch {
        (err) => {
            res.send(err);
            console.log('Product added succesfully');
        }
    }
}

module.exports = postDineoutrestaurant;