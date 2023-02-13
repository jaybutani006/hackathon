const express = require("express");

const {
    register,
    loginUser,
    logout,
    getUserDetails,
    calling,
    updatePoints,
    dailyOneAnswer,
    dailyOneFeedback,
    getAllUsers,
    updateCustomers,
} = require("../controllers/userController");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/customers").post(updateCustomers);
router.route("/logout").get(logout);
router.route("/calling").get(calling);
router.route("/users").get(getAllUsers);
router.route("/points").put(updatePoints);
router.route("/oneanswer").put(dailyOneAnswer);
router.route("/onefeedback").put(dailyOneFeedback);
router.route("/me").get(isAuthenticatedUser, getUserDetails);


module.exports = router;