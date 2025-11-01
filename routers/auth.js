import express from "express";
import User from "../model/user.js";
import bcrypt from "bcryptjs";
import { validation, validationLogin } from "../validations/user.js";
const router = express.Router();

// router.get("/app", (req, res) => {
//   res.json("welcome");
// });

// router.post("/api/register", async (req, res) => {
//   try {
//     const { error } = validation(req.body)
//     if (error) return res.status(400).json({ message: error.message })

//     let user = await User.findOne({ email: req.body.email })
//     if (user) return res.status(400).json({ message: 'login' })

//     const salt = await bcrypt.genSalt(10)
//     req.body.password = await bcrypt.hash(req.body.password, salt)

//     const result = await User.create({ ...req.body })
//     // const result = await user.save()

//     const token = ''
//     const { password, ...other } = result._doc

//     res.status(201).json({ ...other, token })

//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// });


// router.post('/api/login', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email })
//     if (!user) return res.status(400).json({ message: 'error' })

//     const checkPassword = await bcrypt.compare(req.body.password, user.password)
//     if (!checkPassword) return res.status(400).json({ message: 'error' })

//     const token = ''
//     const { password, ...other } = user._doc
//     res.status(201).json({ ...other, token })

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })


router.post('/api/register', async (req, res) => {

  try {
    const { error } = validation(req.body)
    if (error) return res.status(400).json({ message: error.message })

    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).json({ message: 'this email is already find' })

    // const result = await User.create({...req.body})
    const salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(req.body.password, salt)

    user = new User({ ...req.body })
    const result = await user.save()

    const token = ''
    const { password, ...other } = result._doc
    res.status(201).json({ ...other, token })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/api/login', async (req, res) => {
  try {
    const { error } = validationLogin(req.body)
    if (error) return res.status(400).json({ message: error.message })

    let user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).json({ message: 'error' })

    const checkPassword = await bcrypt.compare(req.body.password, user.password)
    if (!checkPassword) return res.status(400).json({ message: 'error' })

    const token = ''
    const { password, ...other } = user._doc
    res.status(201).json({ ...other, token })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})






export default router;
