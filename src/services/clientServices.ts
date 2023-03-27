
import { iCreateClientReq, iClientResponse, iClientUpdate, iMessage } from "../interfaces/clients/interfaces"
import { AppDataSource } from "../data-source"
import { Client } from "../entities/clientEntity"
import AppError from "../errors/appError"
import { returnClientSchema } from "../schemas/clientSchemas"

export const createClientService = async (data:iCreateClientReq): Promise<iClientResponse> => {
    const clientRepo = AppDataSource.getRepository(Client)
    const client = clientRepo.create(data)

    await clientRepo.save(client)

    return client
}


export const listClientsService = async (): Promise<Client[]> => {
    const clientRepo = AppDataSource.getRepository(Client);
    return await clientRepo.find();
}


export const updateClientService = async(clientId: string, clientData:iClientUpdate): Promise<iClientResponse> => {
    const clientRepo = AppDataSource.getRepository(Client)
    const client = await clientRepo.findOneBy({id: clientId})

    if(!client) {
        throw new AppError('Couldnt find client', 404)
    }

    if(clientData.full_name) {
        client.full_name = clientData.full_name
    }
    if(clientData.email) {
        client.email = clientData.email
    }
    if (clientData.password) {
        client.password = clientData.password
    }
    if (clientData.phone) {
        client.phone = clientData.phone
    }

    await clientRepo.save(client)

    const returnedClient = await returnClientSchema.validate(client, {
        stripUnknown: true
    })

    return returnedClient
}


export const deleteClientService = async(clientId: string): Promise<iMessage> => {
    const clientRepo = AppDataSource.getRepository(Client)
    const client = await clientRepo.findOneBy({id: clientId})

    if(!client) {
        throw new AppError('Couldnt find client', 404)
    }

    clientRepo.delete({id: clientId})

    return {message: "Client deleted successfully!"}
}