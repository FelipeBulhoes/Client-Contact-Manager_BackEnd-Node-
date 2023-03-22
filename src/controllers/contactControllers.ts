import { Request, Response } from "express";
import { iContactReq, iContactRes } from "../interfaces/contacts/interfaces";
import { createContactService, listClientContactsService } from "../services/contactServices";


export const createContactController = async(req: Request, res: Response) => {
    const contactData: iContactReq = req.body
    const ownerClient: string = req.params.id
    const newContact = await createContactService(ownerClient, contactData)
    return res.status(201).json(newContact)
}


export const listClientContactsController = async(req: Request, res: Response) => {
    const ownerClient: string = req.headers.authorization!
    const contacts:any = await listClientContactsService(ownerClient)
    return res.status(200).json(contacts)
}