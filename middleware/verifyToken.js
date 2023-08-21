const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
    console.log("Am here");
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const tokenVerification = await jwt.verify(token, process.env.SECRETKEY);
    console.log(tokenVerification);
    if (tokenVerification){
        req.user = tokenVerification;
    } else {
        res.sendStatus(400);
    }
    
    // res.status(200).json({
    //     "token verified": tokenVerification,
    // });
    next();
}

module.exports = verifyToken;