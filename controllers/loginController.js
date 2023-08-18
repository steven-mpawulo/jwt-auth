const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const body = req.body;
    if (Object.keys(body).length === 0){
        res.status(400).json({"message": "Please provide registration data"})
    } else {
        User.findOne({email: body.email}).then(async (value) => {
            console.log(value);
            if(value){
                await bcrypt.compare(body.password, value.password, function (err, result) {
                    if (err){
                        res.status(400).json({"error": err});
                    } else if (result) {
                        const token = jwt.sign({_id: value._id}, process.env.SECRETKEY, {
                            expiresIn: 60 * 60 * 60,
                        });
                        res.status(200).json({
                            "user": value,
                            "token": token

                        });
                    }
                });
                
            }
        })
    
    }

}

module.exports = login;