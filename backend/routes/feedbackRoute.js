const express = require("express");

const {
    createFeedback,
    feedback
} = require("../controllers/feedbackController");

const router = express.Router();

router.route("/getfeedbacks").get(feedback);
router.route("/createfeedback").post(createFeedback);

module.exports = router;