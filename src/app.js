import config from "../config/config.json";
import db from "../config/db.json";
import router from "./router";

const app = require("express")();

const environment = process.env.NODE_ENV || "development";

global.gConfig = config;
global.gDB = db[environment];

app.use(global.gConfig.apiPrefix, router);

app.listen(global.gConfig.nodePort, () => {
    global.console.log(
        `${global.gConfig.appName} listening on port ${global.gConfig.nodePort}`
    );
});
