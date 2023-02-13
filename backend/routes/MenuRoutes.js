const express = require("express");

const {
    createMenu,
    getMenu
} = require("../controllers/menuContoller");

const router = express.Router();

router.route("/admin/createmenu").put(createMenu);
router.route("/getmenu").get(getMenu);

module.exports = router;