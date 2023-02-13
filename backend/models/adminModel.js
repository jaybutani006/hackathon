const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("admin", adminSchema);