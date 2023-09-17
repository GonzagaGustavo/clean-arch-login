import http from "node:http";
import dotenv from "dotenv";
import app from "../app/config/app";

dotenv.config();
const server = http.createServer(app);

server.listen(3001, () => console.log("> Server listening on port: 3001"));
