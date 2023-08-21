const User = require("../models/User")

const getAllUsersController = async (req, res) => {
    const user = req.user;
    if (user !== undefined) {
        await User.find({}).then((value) => {
            console.log(req.user);
            if (value){
                console.log(value);
                res.status(200).json({"users": value});
            } else {
                res.status(400).json({"message": "failed to retreive users"})
            }
    
        });
    } else {
        res.json({"message": "Something went wrong"});
    }
    
}

module.exports = getAllUsersController;