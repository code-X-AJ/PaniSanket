const mongoose = require("mongoose");

const ResponseSchema = mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    // users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    report: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reports",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Response", ResponseSchema);
