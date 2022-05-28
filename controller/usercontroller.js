import { mymodel } from "../models/usermodels.js";
class UserController {
  //for adding user
  async createUser(req, res) {
    const { name, location } = req.body;
    const data = await mymodel.create({ name: name, location: location });
    res.json(data);
  }

  //for view by id
  async viewUser(req, res) {
    const { id } = req.params;
    const data = await mymodel.findByPk({ id });
    res.send(data);
  }

  //for updating user
  async updateUser(req, res) {
    const { name, location } = req.body;
    const { id } = req.params;
    const data = await mymodel.update(
      { name: name, location: location },
      {
        where: { id: id },
      }
    );
    res.send(data);
  }
  //for deleting user
  async deleteUser(req, res) {
    const { id } = req.params;
    // const data = await mymodel.destroy({ where: { id } });
    const data = await mymodel.destroy({ where: { id } });
    res.json(data);
  }
}
export default UserController;
