import { Router } from "express";
import { join } from "path";
import FofocaRouter from "./FofocaRouter";

const routes = Router();

routes.use('/fofoca', FofocaRouter);

export default routes;