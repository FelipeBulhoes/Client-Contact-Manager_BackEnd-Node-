
export interface iClientResponse {
    id: string,
    full_name: string,
    email: string,
    phone: number,
    password: string,
    createdAt: Date
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



