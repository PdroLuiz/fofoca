

import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";
import { Application, json, static as staticExpress } from "express";
import { join } from "path";
import routes from "./routes";

const cors = require("cors");


createConnection();

const app : Application = require("express")();


app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
}));
app.use(json());
app.use(routes);



const port = process.env.PORT || 3002;
app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
