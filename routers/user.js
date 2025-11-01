import express from "express";
import User from "../model/user.js";
import { validation, validationPost } from "../validations/user.js";
const router = express.Router();

router.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.find();
    if (users.length != 0) res.status(200).json(users);
    else res.status(404).json({ message: "no users now" });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/getUserById/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) res.status(404).json({ message: "this user is not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return "user not found";
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/addUser", async (req, res) => {
  const { error } = validationPost(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await User.create(req.body);
  res.status(200).json(user);
});

router.put("/updateUser/:id", async (req, res) => {
  try {
    const { error } = validation(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // check a user
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).json("this user is not found");

    // update user data
    const update = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // save in
    const data = await update.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const findUser = await User.findById(req.params.id);
    if (!findUser) res.status(404).json("this user is not found");

    const user = await findUser.deleteOne();
    res.json("deleted");
  } catch (error) {}
});

export default router;
