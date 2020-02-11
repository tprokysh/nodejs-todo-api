import express from "express";
import UserController from "../controllers/UserController";

export default class Router {
    constructor(db) {
        this.router = new express.Router();
        this.db = db;
    }

    createRoutes() {
        this.router.get("/", (req, res) => {
            new UserController().run(req, res, "index");
        });

        return this.router;
    }
}
