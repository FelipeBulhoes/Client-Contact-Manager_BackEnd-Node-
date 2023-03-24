import { AppDataSource } from "../data-source";
import { Client } from "../entities/clientEntity";
import { iSessionCredentials } from "../interfaces/clients/interfaces";
import { iSessionReturn } from "../interfaces/clients/interfaces";
import { AppError } from "../errors/appError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config';

export const sessionService = async (credentials:iSessionCredentials): Promise<iSessionReturn> => {
    const clientRepo = AppDataSource.getRepository(Client)

    const client = await clientRepo.findOneBy({
        email: credentials.email
    })

    if(!client) {
        throw new AppError("User or password invalid", 401)
    }

    const passwordAuthenticity = await compare (credentials.password, client.password)

    if (!passwordAuthenticity){
        throw new AppError("User or password invalid", 401)
    }

    const token = jwt.sign(
        {
            email: client.email,
            name: client.full_name,
            phone: client.phone
        },
        process.env.SECRET_KEY as string,
        {
            subject: client.id,
            expiresIn: "24h"
        }
    )

    return {token: token, client: client}
}