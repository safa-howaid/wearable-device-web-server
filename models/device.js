const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Device = new Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      required: true,
      validate: (status) => {
        status == "online" || status == "offline";
      },
    },
    battery: {
      type: Number,
      required: true,
      minimum: 0,
      maximum: 100,
    },
    lastCharged: {
      type: Date,
      set: (d) => {
        if (typeof d == "number") {
          return new Date(parseInt(d) * 1000);
        }
        return d;
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("device", Device);
