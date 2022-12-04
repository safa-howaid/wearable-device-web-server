const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

// GET /api/users
router.get("/users", userController.get);

// GET /api/users/:id
router.get("/users/:id", userController.getById);

// POST /api/users
router.post("/users", userController.create);

module.exports = router;
