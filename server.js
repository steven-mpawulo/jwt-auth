
const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const port = process.env.PORT || 5001;


app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB connected");
    app.listen(port, () => {
        console.log("Server has started");
    });
} );





