import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    name: { type: String, minLength: 3, maxLength: 100, required: true },
    email: { type: String, required: true },
    password: { type: String, minLength: 8, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("user", user);
export default User;
