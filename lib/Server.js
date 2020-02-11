import http from "http";

export default class Server {
    constructor() {
        this.port = process.env.PORT || "3000";
    }

    createServer(app) {
        this.server = http.createServer(app).listen(this.port, () => {
            global.console.log(
                `${global.gConfig.appName} working on ${this.port}...`
            );
        });
    }
}
