const mongoose = require("mongoose")

const reportSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    title: {
        type: String,
        default: "",
        required: true
    },
    description: {
        type: String,
        default: "",
        required: true
    },
    city: {
        type: String,
        default: "",
        required: true
    },
    address: {
        type: String,
        default: "",
        required: true
    },

    image: {
        type: String,
        default: "",
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("report", reportSchema);