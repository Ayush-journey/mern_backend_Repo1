const Inspiration = require('../modals/inspiration');

async function postInspiration(req, res) {
    const inspiration = new Inspiration({
        image: req.body.image,
        dish: req.body.dish
    });
    try {
        const result = await inspiration.save();
        res.send(result);
        console.log(`Product added successfully: ${result}`)
    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the product');
        }
    }
}

module.exports = postInspiration;