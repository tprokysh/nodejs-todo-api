/* eslint-disable no-underscore-dangle */
import Sequelize from "sequelize";
import models from "./models/index";
import db from "../config/db.json";

export default class DataBase {
    constructor() {
        global.gDB = db[process.env.NODE_ENV || "development"];

        this.connect();
        this.initModels();
        this.initRelations();
    }

    connect() {
        const {
            username,
            password,
            database,
            host,
            port,
            dialect
        } = global.gDB;

        this._databaseConnection = new Sequelize(database, username, password, {
            dialect,
            host,
            port
        });
    }

    _getDatabaseConnection() {
        return this._databaseConnection;
    }

    initModels() {
        Object.values(models).map(model => {
            return model(this._getDatabaseConnection(), Sequelize);
        });
    }

    initRelations() {
        Object.values(models).map(model => {
            return model(
                this._getDatabaseConnection(),
                Sequelize
            ).initRelations();
        });
    }
}
