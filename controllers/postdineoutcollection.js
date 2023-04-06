const Dineoutcollection = require('../modals/dineoutcollection');

async function postDineoutcollection(req, res) {
    const dineoutcollection = new Dineoutcollection({
        img: req.body.img,
        title: req.body.title,
        count: req.body.count
    });
    try {
        const result = await dineoutcollection.save();
        res.send(result);
    } catch {
        (err) => {
            res.send(err);
            console.log('Product added successfully');
        }
    }
}

module.exports = postDineoutcollection;