import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contactEntity";
import { Client } from "../entities/clientEntity";
import { AppError } from "../errors/appError";
import { iContactReq, iContactRes } from "../interfaces/contacts/interfaces";
import { returnContactSchema } from "../schemas/contactSchemas";


export const createContactService = async (ownerClient:string, clientData:iContactReq): Promise<iContactRes> => {
    const clientRepo = AppDataSource.getRepository(Client)
    const contactRepo = AppDataSource.getRepository(Contact)

    const client = await clientRepo.findOneBy({id: ownerClient})

    if (!client) {
        throw new AppError('Couldnt find client', 404)
    }

    const newContact = new Contact()
    newContact.full_name = clientData.full_name
    newContact.email     = clientData.email
    newContact.phone     = clientData.phone
    newContact.client    = client

    await contactRepo.save(newContact)

    const returnedContact = await returnContactSchema.validate(newContact, {
        stripUnknown: true
    })

    return returnedContact
}

/* FAZER MIDDLEWARE DE AUTH PARA PEGAR USER DO TOKEN
export listClientContactsService = async (): Promise<iContactRes[]> => {
    const contactRepo = AppDataSource.getRepository(Contact)

}*/
