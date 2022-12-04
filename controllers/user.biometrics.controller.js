const User = require("../models/user");
const HeartRate = require("../models/heartRate");
const BloodPressure = require("../models/bloodPressure");
const BodyTemperature = require("../models/bodyTemperature");
const CaloriesBurned = require("../models/caloriesBurned");
const SleepTime = require("../models/sleepTime");
const StepCount = require("../models/stepCount");

const addHeartRate = async (req, res) => {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body",
    });
  }

  const heartRate = new HeartRate(body);
  if (!heartRate) {
    return res.status(400).json({ success: false, error: "Unable to create heartrate data with given body" });
  }
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        heartRate: {
          $each: [heartRate],
          $sort: { timestamp: -1 },
        },
      },
    }
  ).then((user) => {
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          data: body,
          message: "Heart rate data added!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: error,
          message: "Heart rate data not added!",
        });
      });
  });
};

const getHeartRate = async (req, res) => {
  let isLimited = req.query.hasOwnProperty("limit");

  await User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: `User not found` });
      }
      if (isLimited) {
        let limit = Number(req.query.limit);
        return res.status(200).json({ success: true, data: user.heartRate.slice(0, limit) });
      }
      return res.status(200).json({ success: true, data: user.heartRate });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

const addBloodPressure = async (req, res) => {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body",
    });
  }

  const bloodPressure = new BloodPressure(body);
  if (!bloodPressure) {
    return res.status(400).json({ success: false, error: "Unable to create blood pressure data with given body" });
  }
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        bloodPressure: {
          $each: [bloodPressure],
          $sort: { timestamp: -1 },
        },
      },
    }
  ).then((user) => {
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          data: body,
          message: "Blood Pressure data added!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: error,
          message: "Blood Pressure data not added!",
        });
      });
  });
};

const getBloodPressure = async (req, res) => {
  let isLimited = req.query.hasOwnProperty("limit");

  await User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: `User not found` });
      }
      if (isLimited) {
        let limit = Number(req.query.limit);
        return res.status(200).json({ success: true, data: user.bloodPressure.slice(0, limit) });
      }
      return res.status(200).json({ success: true, data: user.bloodPressure });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

const addBodyTemperature = async (req, res) => {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body",
    });
  }

  const bodyTemperature = new BodyTemperature(body);
  if (!bodyTemperature) {
    return res.status(400).json({ success: false, error: "Unable to create body temperature with given body" });
  }
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        bodyTemperature: {
          $each: [bodyTemperature],
          $sort: { timestamp: -1 },
        },
      },
    }
  ).then((user) => {
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          data: body,
          message: "Body temperature data added!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: error,
          message: "Body temperature data not added!",
        });
      });
  });
};

const getBodyTemperature = async (req, res) => {
  let isLimited = req.query.hasOwnProperty("limit");

  await User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: `User not found` });
      }
      if (isLimited) {
        let limit = Number(req.query.limit);
        return res.status(200).json({ success: true, data: user.bodyTemperature.slice(0, limit) });
      }
      return res.status(200).json({ success: true, data: user.bodyTemperature });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

const addCaloriesBurned = async (req, res) => {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body",
    });
  }

  const caloriesBurned = new CaloriesBurned(body);
  if (!caloriesBurned) {
    return res.status(400).json({ success: false, error: "Unable to create calories burned data with given body" });
  }
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        caloriesBurned: {
          $each: [caloriesBurned],
          $sort: { timestamp: -1 },
        },
      },
    }
  ).then((user) => {
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          data: body,
          message: "Calories burned data added!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: error,
          message: "Calories burned data not added!",
        });
      });
  });
};

const getCaloriesBurned = async (req, res) => {
  let isLimited = req.query.hasOwnProperty("limit");

  await User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: `User not found` });
      }
      if (isLimited) {
        let limit = Number(req.query.limit);
        return res.status(200).json({ success: true, data: user.caloriesBurned.slice(0, limit) });
      }
      return res.status(200).json({ success: true, data: user.caloriesBurned });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

const addSleepTime = async (req, res) => {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body",
    });
  }

  const sleepTime = new SleepTime(body);
  if (!sleepTime) {
    return res.status(400).json({ success: false, error: "Unable to create sleep time data with given body" });
  }
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        sleepTime: {
          $each: [sleepTime],
          $sort: { timestamp: -1 },
        },
      },
    }
  ).then((user) => {
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          data: body,
          message: "Sleep time data added!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: error,
          message: "Sleep time data not added!",
        });
      });
  });
};

const getSleepTime = async (req, res) => {
  let isLimited = req.query.hasOwnProperty("limit");

  await User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: `User not found` });
      }
      if (isLimited) {
        let limit = Number(req.query.limit);
        return res.status(200).json({ success: true, data: user.sleepTime.slice(0, limit) });
      }
      return res.status(200).json({ success: true, data: user.sleepTime });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

const addStepCount = async (req, res) => {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body",
    });
  }

  const stepCount = new StepCount(body);
  if (!stepCount) {
    return res.status(400).json({ success: false, error: "Unable to create step count data with given body" });
  }
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        stepCount: {
          $each: [stepCount],
          $sort: { timestamp: -1 },
        },
      },
    }
  ).then((user) => {
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          data: body,
          message: "Step count data added!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: error,
          message: "Step count data not added!",
        });
      });
  });
};

const getStepCount = async (req, res) => {
  let isLimited = req.query.hasOwnProperty("limit");

  await User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: `User not found` });
      }
      if (isLimited) {
        let limit = Number(req.query.limit);
        return res.status(200).json({ success: true, data: user.stepCount.slice(0, limit) });
      }
      return res.status(200).json({ success: true, data: user.stepCount });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

module.exports = {
  addHeartRate,
  getHeartRate,
  addBloodPressure,
  getBloodPressure,
  addBodyTemperature,
  getBodyTemperature,
  addCaloriesBurned,
  getCaloriesBurned,
  addSleepTime,
  getSleepTime,
  addStepCount,
  getStepCount,
};
