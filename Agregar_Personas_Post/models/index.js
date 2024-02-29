const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const { nameDb, PasswordDb, userDb, portDb, hostDB } = require("../config/index");

const baseName = path.basename(__filename);
const db = {};
const sequelize = new Sequelize(nameDb, userDb, PasswordDb, {
  dialect: "mysql",
  port: portDb,
  host: hostDB,
  logging: false,
});

const modelFiles = fs.readdirSync(__dirname).filter((file) => {
  return file !== baseName && file.slice(-3) === ".js";
});

modelFiles.forEach((file) => {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
