import config from "../config/config.json";
import router from "./router";
import sequelize from "./db";

const app = require("express")();
// Config
global.gConfig = config;
// Sequelize
sequelize.sync({ force: true });

app.use(global.gConfig.apiPrefix, router);

app.listen(global.gConfig.nodePort, () => {
    global.console.log(
        `${global.gConfig.appName} listening on port ${global.gConfig.nodePort}`
    );
});
