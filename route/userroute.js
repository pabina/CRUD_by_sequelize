import express from "express";
import UserController from "../controller/usercontroller.js";
let myrouter = express.Router();
const userController = new UserController();

myrouter.get("/", (req, res) => {
  res.send("you are in home page");
});
//for create
myrouter.post("/add", userController.createUser);

//for read
myrouter.get("/:id", userController.viewUser);
//for update
myrouter.post("/update/:id", userController.updateUser);
//for deleting
myrouter.delete("/:id", userController.deleteUser);

export default myrouter;
