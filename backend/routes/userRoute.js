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
    updateAns,
    getUserBreakfastYes,
    getUserLunchYes,
    getUserSnacksYes,
    getUserDinnerYes,
    getUserSubmit,
    searchBreakfastUsers,
    searchLunchUsers,
    searchSnacksUsers,
    searchDinnerUsers,
    searchUsers,
    searchSubmitUsers,
    deleteUser,
} = require("../controllers/userController");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/calling").get(calling);
router.route("/breakfast/users/:key").get(searchBreakfastUsers);
router.route("/lunch/users/:key").get(searchLunchUsers);
router.route("/snacks/users/:key").get(searchSnacksUsers);
router.route("/dinner/users/:key").get(searchDinnerUsers);
router.route("/submit/users/:key").get(searchSubmitUsers);
router.route("/users/:key").get(searchUsers);
router.route("/breakfast/users").get(getUserBreakfastYes);
router.route("/lunch/users").get(getUserLunchYes);
router.route("/snacks/users").get(getUserSnacksYes);
router.route("/dinner/users").get(getUserDinnerYes);
router.route("/submit/users").get(getUserSubmit);
router.route("/users").get(getAllUsers);
router.route("/points").put(updatePoints);
router.route("/user/delete/:id").delete(deleteUser);
router.route("/oneanswer").put(dailyOneAnswer);
router.route("/giveans").put(updateAns);
router.route("/onefeedback").put(dailyOneFeedback);
router.route("/me").get(isAuthenticatedUser, getUserDetails);

module.exports = router;