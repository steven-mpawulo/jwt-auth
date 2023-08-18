const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: "String",
        required: true,

    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
});

module.exports = mongoose.model("Person", userSchema);