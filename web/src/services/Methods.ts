import "dotenv/config";

function base_url() {
    const base_url = process.env.REACT_APP_API_URL || 'http://localhost:3002';
    console.log(`process.env.REACT_APP_API_URL = ${process.env.REACT_APP_API_URL}`)
    return base_url;
}

function getHeaders() {
    const headers = new Headers();
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    return headers;
}

export async function POST(path : string, body = {}) {
    const options : RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
    };
    const url = base_url() + path;
    
    const response = await fetch(url, options);
    try {
        const retorno = await response.json();    
        retorno.status = response.status;
        return retorno;
    } catch (error) {
        return response;
    }
}


export async function PUT(path : string, body = {}) {
    const options : RequestInit  = {
        method: 'PUT',
        body: JSON.stringify(body),
    };
    const url = base_url() + path;
    const response = await fetch(url, options);
    try {
        const retorno = await response.json();    
        retorno.status = response.status;
        return retorno;
    } catch (error) {
        return response;
    }
}



export async function GET(path : string) {
    const options : RequestInit  = {
        method: 'GET',
    };
    const url = base_url() + path;
    const response = await fetch(url, options);
    try {
    
        const retorno = await response.json(); 
        retorno.status = response.status;
        return retorno;
    } catch (error) {
        return response;
    }
}


export async function DELETE(path : string, body = {}) {
    const options : RequestInit  = {
        method: 'DELETE',
        body: JSON.stringify(body),
    };
    const url = base_url() + path;
    const response = await fetch(url, options);
    try {
        const retorno = await response.json();    
        retorno.status = response.status;
        return retorno;
    } catch (error) {
        return response;
    }
}