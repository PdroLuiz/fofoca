import { GET, POST, DELETE } from "./Methods";
import { IGetRandomResponse, ICreateFofocaResponse, IDeleteFromIPResponse } from "../interfaces/FofocaAPI";


export async function getRandom() : Promise<IGetRandomResponse> {
    return await GET('/fofoca/getrandom');
}

export async function createFofoca(text : string) : Promise<ICreateFofocaResponse> {
    return POST(`/fofoca/create/${text}`);
}


export async function deleteFromIp() : Promise<IDeleteFromIPResponse> {
    return DELETE('/fofoca/delete');
}