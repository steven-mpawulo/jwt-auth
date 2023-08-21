const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'].split('')[1]
    console.log(token);

    if (token){
        const tokenVerification = jwt.verify(token, process.env.SECRETKEY)
        res.status(200).json({
            "token verified": tokenVerification,
        });
        next();
    } else {
        res.status(400).json({
            "message": "failed to verify"
        });
    }
}