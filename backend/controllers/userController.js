const User = require("../models/userModel");
const Admin = require("../models/adminModel");
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

// get all users
exports.getAllUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});

// get user details
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

// update points
exports.updatePoints = catchAsyncError(async(req, res, next) => {
    const user = await User.findByIdAndUpdate(
        req.body.id, {
            points: req.body.points,
        }, { new: true, runValidators: true, useFindAndModify: false }
    );

    res.status(200).json({
        user,
        success: true,
    });
})

// update feedback given
exports.dailyOneFeedback = catchAsyncError(async(req, res, next) => {
    const user = await User.findByIdAndUpdate(
        req.body.id, {
            submitFeedback: 1,
        }, { new: true, runValidators: true, useFindAndModify: false }
    );

    res.status(200).json({
        user,
        success: true,
    });
})

// update answer given
exports.dailyOneAnswer = catchAsyncError(async(req, res, next) => {
    const user = await User.findByIdAndUpdate(
        req.body.id, {
            submitans: 1,
        }, { new: true, runValidators: true, useFindAndModify: false }
    );

    res.status(200).json({
        user,
        success: true,
    });
})

// update daily feedback and ans given
// exports.updateDaily = catchAsyncError(async(req, res, next) => {
//     const user = await User.findByIdAndUpdate(
//         req.body.id, {
//             submitans: req.body.submitans,
//         }, { new: true, runValidators: true, useFindAndModify: false }
//     );

//     res.status(200).json({
//         user,
//         success: true,
//     });
// })

// update customers
exports.updateCustomers = catchAsyncError(async(req, res, next) => {
    const { userid, rollNumber, userEmail } = req.body;
    const customer = await Admin.create(userid, rollNumber, userEmail);

    res.status(200).json({
        success: true,
        customer,
    });
});


const accountSid = "AC9fa39578a042f6a684b182016fd67999";
const authToken = "3afbc4d5e5f38d08821dc32711be6a47";
const client = require("twilio")(accountSid, authToken);
exports.calling = catchAsyncError(async(req, res) => {
    //   const user = await User.findById(req.user.id);
    // console.log("hi");
    client.messages
        .create({
            body: "Thanks for your response. You got 2pts!",
            from: "+19305291661",
            to: "+918866843153",
        })
        .then((message) => console.log(message.sid));
    console.log("hi");
    res.status(200).json({
        success: true,
    });
});