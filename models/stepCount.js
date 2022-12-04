const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StepCount = new Schema(
  {
    timestamp: {
      type: Date,
      set: (d) => {
        if (typeof d == "number") {
          return new Date(parseInt(d) * 1000);
        }
        return d;
      },
    },
    stepCount: { type: Number, required: true },
    // Set record to expire in 30 days to avoid clogging storage
    // expireAt: { type: Date, expires: 2592000, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("stepCount", StepCount);
