const express = require("express");
const biometricsController = require("../controllers/user.biometrics.controller");

const router = express.Router();

// GET /api/users/:id/biometrics/heart-rate
router.get("/users/:id/biometrics/heart-rate", biometricsController.getHeartRate);

// POST /api/users/:id/biometrics/heart-rate
router.post("/users/:id/biometrics/heart-rate", biometricsController.addHeartRate);

// GET /api/users/:id/biometrics/blood-pressure
router.get("/users/:id/biometrics/blood-pressure", biometricsController.getBloodPressure);

// POST /api/users/:id/biometrics/blood-pressure
router.post("/users/:id/biometrics/blood-pressure", biometricsController.addBloodPressure);

// GET /api/users/:id/biometrics/body-temperature
router.get("/users/:id/biometrics/body-temperature", biometricsController.getBodyTemperature);

// POST /api/users/:id/biometrics/body-temperature
router.post("/users/:id/biometrics/body-temperature", biometricsController.addBodyTemperature);

// GET /api/users/:id/biometrics/step-count
router.get("/users/:id/biometrics/step-count", biometricsController.getStepCount);

// POST /api/users/:id/biometrics/step-count
router.post("/users/:id/biometrics/step-count", biometricsController.addStepCount);

// GET /api/users/:id/biometrics/calories-burned
router.get("/users/:id/biometrics/calories-burned", biometricsController.getCaloriesBurned);

// POST /api/users/:id/biometrics/calories-burned
router.post("/users/:id/biometrics/calories-burned", biometricsController.addCaloriesBurned);

// GET /api/users/:id/biometrics/sleep-time
router.get("/users/:id/biometrics/sleep-time", biometricsController.getSleepTime);

// POST /api/users/:id/biometrics/sleep-time
router.post("/users/:id/biometrics/sleep-time", biometricsController.addSleepTime);

// GET /api/users/:id/biometrics/gps-location
router.get("/users/:id/biometrics/gps-location", biometricsController.getGpsLocation);

// POST /api/users/:id/biometrics/gps-location
router.post("/users/:id/biometrics/gps-location", biometricsController.addGpsLocation);

module.exports = router;
