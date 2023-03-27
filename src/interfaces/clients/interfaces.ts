import { Client } from "../../entities/clientEntity"

export interface iClientResponse {
    full_name?: string | undefined,
    email?: string | undefined,
    id?: string | undefined ,
    phone?: number | undefined,
    createdAt?: any
    
}

export interface iCreateClientReq {
    full_name: string,
    email: string,
    phone: number,
    password: string,
}

export interface iSessionCredentials {
    email: string,
    password: string
}

export interface iClientUpdate {
    full_name?: string,
    email?: string,
    phone?: number,
    password?: string,
}

export interface iMessage {
    message: string
}

export interface iSessionReturn {
    token: string,
    client: Client
}



