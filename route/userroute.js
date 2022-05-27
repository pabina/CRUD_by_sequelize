import express from "express";
import { mymodel } from "../models/usermodels.js";
let myrouter = express.Router();

myrouter.get("/", (req, res) => {
  res.send("you are in home page");
});
//for create
myrouter.post("/add", async (req, res) => {
  const { name, location } = req.body;
  const data = await mymodel.create({ name: name, location: location });
  res.json(data);
});
//for read
myrouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await mymodel.findByPk({ id });
  res.send(data);
});
//for update
myrouter.post("/update/:id", async (req, res) => {
  const { name, location } = req.body;
  const { id } = req.params;
  const data = await mymodel.update(
    { name: name, location: location },
    {
      where: { id: id },
    }
  );
  res.send(data);
});
//for deleting
myrouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await mymodel.destroy({ where: { id } });
  res.send(data);
});

export default myrouter;
