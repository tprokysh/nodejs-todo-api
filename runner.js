import App from "./lib/App";
import Server from "./lib/Server";

require("@babel/register");

const app = new App();
const server = new Server();

server.createServer(app.app);
