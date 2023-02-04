const mongoose = require("mongoose");
const crypto = require("crypto");

const menuSchema = new mongoose.Schema({
    breakfast: {
        type: String,
        required: true
    },
    lunch: {
        type: String,
        required: true
    },
    snacks: {
        type: String,
        required: true
    },
    dinner: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Menu", menuSchema);