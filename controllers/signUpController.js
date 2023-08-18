const User = require("../models/User");
const bcrypt = require('bcrypt');

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
            res.status(200).json({"message": "User Created", "user": value,});
        }).catch((e) => {
            console.log(e);
            res.json({"error": e});
        })
    
    }

}

module.exports = signup;