const User = require("../models/user");

const create = async (req, res) => {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body",
    });
  }

  const user = new User(body);
  if (!user) {
    return res.status(400).json({ success: false, error: "Unable to create user with given body" });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: "User created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
        message: "User not created!",
      });
    });
};

const getById = async (req, res) => {
  await User.findOne({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: `User not found` });
      }

      return res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    });
};

const get = async (req, res) => {
  await User.find({})
    .then((users) => {
      if (!users.length) {
        return res.status(404).json({ success: false, error: `No users created yet` });
      }

      return res.status(200).json({ success: true, data: users });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    });
};

module.exports = {
  create,
  get,
  getById,
};
