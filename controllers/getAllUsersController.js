const User = require("../models/User")

const getAllUsersController = async (req, res) => {
    await User.find({}).then((value) => {
        if (value){
            console.log(value);
            res.status(200).json({"users": value});
        } {
            res.status(400).json({"message": "failed to retreive users"})
        }

    });
}

module.exports = getAllUsersController;