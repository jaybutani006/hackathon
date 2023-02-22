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

// delete user by id
exports.deleteUser = catchAsyncError(async(req, res, next) => {
    console.log(req.params.id);
    const user = await User.findByIdAndDelete(
        req.params.id
    );
    res.status(200).json({
        message: "User deleted successfully",
        success: true,
        user
    });
});

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

// update breakfast yes or no
exports.updateAns = catchAsyncError(async(req, res, next) => {
    const user = await User.findByIdAndUpdate(
        req.body.id, {
            breakfastYes: req.body.breakfastYes,
            lunchYes: req.body.lunchYes,
            snacksYes: req.body.snacksYes,
            dinnerYes: req.body.dinnerYes,
        }, { new: true, runValidators: true, useFindAndModify: false }
    );
    res.status(200).json({
        user,
        success: true,
    });
})

// get all user who yes for breakfast
exports.getUserBreakfastYes = catchAsyncError(async(req, res, next) => {
    const users = await User.find({ breakfastYes: 1 });

    res.status(200).json({
        success: true,
        users,
    });
});

// get all user who yes for lunch
exports.getUserLunchYes = catchAsyncError(async(req, res, next) => {
    const users = await User.find({ lunchYes: 1 });

    res.status(200).json({
        success: true,
        users,
    });
});

// get all user who yes for snacks
exports.getUserSnacksYes = catchAsyncError(async(req, res, next) => {
    const users = await User.find({ snacksYes: 1 });

    res.status(200).json({
        success: true,
        users,
    });
});

// get all user who yes for dinner
exports.getUserDinnerYes = catchAsyncError(async(req, res, next) => {
    const users = await User.find({ dinnerYes: 1 });

    res.status(200).json({
        success: true,
        users,
    });
});

// get all user who submit for ans
exports.getUserSubmit = catchAsyncError(async(req, res, next) => {
    const users = await User.find({ submitans: 1 });

    res.status(200).json({
        success: true,
        users,
    });
});

// get search in breakfast users
exports.searchBreakfastUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find({
        $and: [{ breakfastYes: 1 }],
        $or: [
            { rollNumber: { $regex: req.params.key, $options: "xi" } },
            { email: { $regex: req.params.key, $options: "xi" } },
        ],
    });
    res.status(200).json({
        success: true,
        users,
    });
});

// get search in lunch users
exports.searchLunchUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find({
        $and: [{ lunchYes: 1 }],
        $or: [
            { rollNumber: { $regex: req.params.key, $options: "xi" } },
            { email: { $regex: req.params.key, $options: "xi" } },
        ],
    });
    res.status(200).json({
        success: true,
        users,
    });
});

// get search in snacks users
exports.searchSnacksUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find({
        $and: [{ snacksYes: 1 }],
        $or: [
            { rollNumber: { $regex: req.params.key, $options: "xi" } },
            { email: { $regex: req.params.key, $options: "xi" } },
        ],
    });
    res.status(200).json({
        success: true,
        users,
    });
});

// get search in dinner users
exports.searchDinnerUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find({
        $and: [{ dinnerYes: 1 }],
        $or: [
            { rollNumber: { $regex: req.params.key, $options: "xi" } },
            { email: { $regex: req.params.key, $options: "xi" } },
        ],
    });
    res.status(200).json({
        success: true,
        users,
    });
});

// get search in dinner users
exports.searchSubmitUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find({
        $and: [{ submitans: 1 }],
        $or: [
            { rollNumber: { $regex: req.params.key, $options: "xi" } },
            { email: { $regex: req.params.key, $options: "xi" } },
        ],
    });
    res.status(200).json({
        success: true,
        users,
    });
});

// get search in dinner users
exports.searchUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find({
        $or: [
            { rollNumber: { $regex: req.params.key, $options: "xi" } },
            { email: { $regex: req.params.key, $options: "xi" } },
        ],
    });
    res.status(200).json({
        success: true,
        users,
    });
});

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