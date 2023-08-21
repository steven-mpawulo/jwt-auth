const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    console.log("Am here");
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.SECRETKEY, (err, data) => {
        if (err){
            // res.sendStatus(400);
        } else {
            console.log(data);
            req.user = data;
        }
    });
    next();
}

module.exports = verifyToken;