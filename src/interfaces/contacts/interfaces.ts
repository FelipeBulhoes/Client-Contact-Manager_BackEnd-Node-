import { Client } from "../../entities/clientEntity";

interface iContactReq {
    full_name: string,
    email: string,
    phone: number,
}

interface iContactRes {
    id?: string | undefined,
    full_name?: string | undefined,
    email?: string | undefined,
    phone?: number | undefined,
    createdAt?: string | undefined | Date
}

export {iContactReq, iContactRes}