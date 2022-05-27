import express from "express";
let myserver = express();
import myrouter from "./route/userroute.js";
import { sequelize } from "./models/usermodels.js";
myserver.use(express.json());

myserver.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "you are in home page" });
});
myserver.listen(8000, async () => {
  await sequelize.authenticate();
  sequelize.sync();
  myserver.use("/user", myrouter);

  console.log("server is working");
});
