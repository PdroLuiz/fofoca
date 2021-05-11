import { Router } from "express";
import { getRandom, deleteFromIp, createFofoca } from "../controllers/FofocaController";

const FofocaRouter = Router();

FofocaRouter.get('/getrandom', getRandom);

FofocaRouter.post('/create/:text', createFofoca);

FofocaRouter.delete('/delete', deleteFromIp);


export default FofocaRouter;