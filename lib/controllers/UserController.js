import BaseController from "./BaseController";
import HelloWorld from "../services/HelloWorld";

export default class UserController extends BaseController {
    async index(req) {
        return this.runService(req, new HelloWorld());
    }
}
