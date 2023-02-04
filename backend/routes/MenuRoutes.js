const express = require("express");

const {
    createMenu
} = require("../controllers/menuContoller");

const router = express.Router();

router.route("/admin/createmenu").put(createMenu);

module.exports = router;