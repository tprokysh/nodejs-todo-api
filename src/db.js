import Sequelize from "sequelize";
import models from "./models/index";
import db from "../config/db.json";

const environment = process.env.NODE_ENV || "development";

global.gDB = db[environment];

const { username, password, database, host, port, dialect } = global.gDB;
const sequelize = new Sequelize(database, username, password, {
    dialect,
    host,
    port
});

Object.values(models).map(model => {
    return model(sequelize, Sequelize);
});

Object.values(models).map(model => {
    return model(sequelize, Sequelize).initRelations();
});

export default sequelize;
