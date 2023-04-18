const UserModal = require("../modals/UserSchema");
const bcrypt = require("bcrypt");

function RegisterUser(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    bcrypt.hash(password, 10, function (err, hash) {
        let userdata = {
            name: name,
            email: email,
            password: hash
        }
        let result = new UserModal(userdata);
        result.save().then((item) => {
            return res.json({
                message: "Registration successfull",
                data: item
            })
        }).catch((err) => {
            console.log(err);
            return res.json({
                message: "Registration failed"
            })
        })
    });

}

module.exports = RegisterUser;

