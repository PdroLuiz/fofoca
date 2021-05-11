import { Request, Response } from "express";
import { getRandom as getRandom_, deleteFromIp as deleteFromIp_, create } from "../services/FofocaService";


export async function getRandom(req : Request, res : Response) {
    try {
        const fofoca = (await getRandom_())[0];
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        return res.status(200).send(fofoca);
    } catch(err) {
        return res.status(err.status || 500).send({
            error: {
                message: err.message,
                status: err.status || 500
            }
        });
    }
}

export async function createFofoca(req : Request, res : Response) { 
    try {
        const text : string = req.params.text;
        const userIp : string = req.connection.remoteAddress;       
        const fofoca = await create({text, userIp});
        return res.status(200).send(fofoca);
    } catch(err) {
        return res.status(err.status || 500).send({
            error: {
                message: err.message,
                status: err.status || 500
            }
        });
    }
}


export async function deleteFromIp(req : Request, res : Response) {
    try {
        await deleteFromIp_(req.connection.remoteAddress);
        return res.status(200).send();
    } catch(err) {
        return res.status(err.status || 500).send({
            error: {
                message: err.message,
                status: err.status || 500
            }
        });
    }
    
}