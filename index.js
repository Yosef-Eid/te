import express from "express";
import ConnectDb from "./config/db.js";
import auth from "./routers/auth.js";
import user from "./routers/user.js";

const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
``
app.use("/", user);
app.use("/", auth);
ConnectDb();
const PORT = 5000;
app.listen(PORT || 5000, () => {
  console.log("this server is running PORT 5000");
});
