const Feedback = require("../models/feedBack");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

// get all feedbacks

exports.feedback = catchAsyncError(async(req, res, next) => {
    const feedbacks = await Feedback.find();

    res.status(200).json({
        success: true,
        feedbacks,
    });
});

// post feedback
exports.createFeedback = catchAsyncError(async(req, res, next) => {
    const {
        comment,
        ratings
    } = req.body;

    const feedback = await Feedback.create({
        comment,
        ratings,
    });
    res.status(200).json({
        success: true,
        feedback,
    });
});