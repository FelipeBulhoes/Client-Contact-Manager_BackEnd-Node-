import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clientEntity";

export const listClientsService = async (): Promise<Client[]> => {
    const clientRepo = AppDataSource.getRepository(Client);
    return await clientRepo.find();
};