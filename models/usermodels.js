import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("day9database", "root", "pabina1234", {
  host: "localhost",
  dialect: "mysql",
});

const mymodel = sequelize.define("mytable", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export { mymodel, sequelize };
