import http from "http";
import App from "./App";

export default class Server {
    constructor() {
        this.app = new App().getApp();
        this.port = process.env.PORT || "3000";
        this.createServer(this.app);
    }

    createServer(app) {
        this.server = http.createServer(app).listen(this.port, () => {
            global.console.log(
                `${global.gConfig.appName} working on ${this.port}...`
            );
        });
    }
}
