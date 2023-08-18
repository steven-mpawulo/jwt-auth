
const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5001;


app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

app.listen(port, () => {
    console.log("Server has started");
});

