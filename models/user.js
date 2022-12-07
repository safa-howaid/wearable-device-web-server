const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BloodPressure = require("./bloodPressure");
const BodyTemperature = require("./bodyTemperature");
const CaloriesBurned = require("./caloriesBurned");
const HeartRate = require("./heartRate");
const SleepTime = require("./sleepTime");
const StepCount = require("./stepCount");
const Device = require("./device");
const GpsLocation = require("./gpsLocation");

const User = new Schema(
  {
    name: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      validate: (gender) => {
        gender == "male" || gender == "female" || gender == "other";
      },
    },
    dateOfBirth: {
      type: String,
      required: true,
      validate: (date) =>
        date.split("-").length == 3 &&
        date.split("-")[0].length == 4 &&
        date.split("-")[1].length == 2 &&
        date.split("-")[2].length == 2,
    },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    device: Device.schema,
    bloodPressure: [BloodPressure.schema],
    bodyTemperature: [BodyTemperature.schema],
    caloriesBurned: [CaloriesBurned.schema],
    heartRate: [HeartRate.schema],
    sleepTime: [SleepTime.schema],
    stepCount: [StepCount.schema],
    gpsLocation: [GpsLocation.schema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", User);
