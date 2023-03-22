import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contactEntity";
import { Client } from "../entities/clientEntity";
import { AppError } from "../errors/appError";
import { iContactReq, iContactRes } from "../interfaces/contacts/interfaces";
import { returnContactSchema } from "../schemas/contactSchemas";
import { Secret } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import 'dotenv/config'

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

export const listClientContactsService = async (contactToken: string): Promise<iContactRes[]> => {
    let clientIdentifier = ""

    contactToken = contactToken.split(" ")[1]

    jwt.verify(contactToken, process.env.SECRET_KEY as Secret, (error, decoded:any) => {
        if (error){
            throw new AppError("Auth error", 401)
        }

        clientIdentifier = decoded.sub
    })
    console.log(clientIdentifier)
    
    /*
    const contactsRepo = AppDataSource.getRepository(Contact)
    const contacts = contactsRepo.findBy({client: !clientIdentifier})

    return contacts*/

    
    const contacts = await AppDataSource
        .createQueryBuilder()
        .select("contact")
        .from(Contact, "contact")
        .where("contact.client = :id", {id: clientIdentifier})
        .getMany()

    return contacts
}
