const mongoose = require("mongoose")

const notifySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Notification", notifySchema);