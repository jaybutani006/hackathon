const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const crypto = require('crypto');

// Register a user

exports.register = catchAsyncError(async(req, res, next) => {
    const { rollNumber, email, password } = req.body
    const user = await User.create({
        rollNumber,
        email,
        password
    })
    sendToken(user, 201, res);
})


// login user

exports.loginUser = catchAsyncError(async(req, res, next) => {
    const { email, password } = req.body;

    // checking if user given password and email

    if (!email || !password) {
        return next(new ErrorHandler("Please Email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    sendToken(user, 200, res);
});

exports.getUserDetails = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});
// logout

exports.logout = catchAsyncError(async(req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
})

const accountSid = "AC9fa39578a042f6a684b182016fd67999";
const authToken = "732af79756326ad810b3119a999c0fc7";
const client = require("twilio")(accountSid, authToken);
exports.calling = catchAsyncError(async(req, res) => {
    //   const user = await User.findById(req.user.id);
    // console.log("hi");
    client.messages
        .create({
            body: "Thanks for your response. You got 2pts!",
            from: "+19305291661",
            to: "+917359536153",
        })
        .then((message) => console.log(message.sid));
    console.log("hi");
    res.status(200).json({
        success: true,
    });
});