const Menu = require("../models/menuModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

// get all feedbacks

exports.createMenu = catchAsyncError(async(req, res, next) => {
    //   const feedbacks = await Feedback.find();
    const { breakfast, lunch, snacks, dinner, id } = req.body;
    const menu = await Menu.findByIdAndUpdate(
        id, { breakfast: breakfast, lunch: lunch, snacks: snacks, dinner: dinner }, {
            new: true,
            runValidators: true,
            // useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
        menu,
    });
});