const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const feedbackSchema = new mongoose.Schema({
    comment: {
        type: String,
    },
    ratings: {
        type: Number,
        default: 0,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

module.exports = mongoose.model("Feedback", feedbackSchema);