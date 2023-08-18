const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const body = req.body;
    if (Object.keys(body).length === 0){
        res.status(400).json({"message": "Please provide registration data"})
    } else {

        const hashedPassword = await bcrypt.hash(body.password, 10)
        const user = new User({
            email: body.email,
            password: hashedPassword,
            firstName: body.firstName,
            lastName: body.lastName,
        });

        user.save().then((value) => {
            console.log(value);
            const token = jwt.sign({_id: value._id}, process.env.SECRETKEY, {
                expiresIn: 60 * 60 *60
            });

            res.status(200).json({"message": "User Created", "user": value, token: token});
        }).catch((e) => {
            console.log(e);
            res.json({"error": e});
        })
    
    }

}

module.exports = signup;