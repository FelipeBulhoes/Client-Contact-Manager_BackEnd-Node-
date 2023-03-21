import { v4 } from "uuid"
import { hash } from "bcryptjs"
import { iCreateClientReq, iClientResponse } from "../../interfaces/clients/interfaces"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/clientEntity"


export const createClientService = async (data:iCreateClientReq): Promise<iClientResponse> => {
    const clientRepo = AppDataSource.getRepository(Client)
    const client = clientRepo.create(data)

    await clientRepo.save(client)

    return client
}