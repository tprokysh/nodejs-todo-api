import express from "express";
import Router from "./router/router";
import DataBase from "./Database";
import config from "../config/config.json";

export default class App {
    constructor() {
        global.gConfig = config;
        this.db = new DataBase();
        this.app = express();
        this.router = new Router(this.db);
        this.app.use(global.gConfig.apiPrefix, this.router.createRoutes());
    }
}
