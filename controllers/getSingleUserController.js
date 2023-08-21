const User = require("../models/User");

const getSingleUserController = (req, res) => {
const user = req.user;
console.log(user);
if (user !== undefined) {
    User.findOne({"_id": user._id}).then((value) => {
        console.log(value);
        if (value){
            res.status(200).json({"user": value});
        } else {
            res.status(400).json({"message": "something went wrong"});
        }
    });
} else {
    res.status(400).json({"message": "something went wrong"})
}

}

module.exports = getSingleUserController;