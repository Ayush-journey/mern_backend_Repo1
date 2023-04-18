const Deliveryrestaurant = require('./deliveryrestaurant');

async function postDeliveryrestaurant(req, res) {
    const deliveryrestaurant = new Deliveryrestaurant({
        title: req.body.title,
        img: req.body.img,
        rating: req.body.rating,
        categories: req.body.categories,
        price: req.body.price,
        offer: req.body.offer,
        time: req.body.time
    });
    try {
        const result = await deliveryrestaurant.save();
        res.send(result);
    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the product');
        }
    }
}

module.exports = postDeliveryrestaurant;

