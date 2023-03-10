const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: [true, "Please Enter the roll number"],
        maxLength: [30, "Name cannot exceed 30 charactors"],
        minLength: [4, "Name should hav more than 4 charactors"],
    },
    email: {
        type: String,
        required: [true, "Please Enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please emter your password"],
        minLength: [8, "Password should be greater than 8 charactor"],
        select: false,
    },
    role: {
        type: String,
        default: "user"
    },
    points: {
        type: Number,
        default: 0
    },
    submitans: {
        type: Number,
        default: 0
    },
    submitFeedback: {
        type: Number,
        default: 0
    },
    breakfastYes: {
        type: Number,
        default: 0
    },
    lunchYes: {
        type: Number,
        default: 0
    },
    snacksYes: {
        type: Number,
        default: 0
    },
    dinnerYes: {
        type: Number,
        default: 0
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJWTToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

// comapare password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// genearate password reset token
userSchema.methods.getResetPasswordToken = function() {
    const resetToken = crypto.randomBytes(20).toString("hex");

    // hashing and adding reset password token to user schema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model("User", userSchema)