import { Request, Response } from "express";
import { iContactEdit, iContactReq, iContactRes } from "../interfaces/contacts/interfaces";
import { createContactService, deleteContactService, editClientContactService, listClientContactsService } from "../services/contactServices";


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


export const editContactController = async (req: Request, res: Response) => {
    const contactData: iContactEdit = req.body
    const contactToBePatched: string = req.params.id
    const patchedContact = await editClientContactService(contactToBePatched, contactData)
    return res.status(200).json(patchedContact)
}


export const deleteContactController = async (req:Request, res:Response) => {
    const contactToBeDeleted: string = req.params.id
    const message = await deleteContactService(contactToBeDeleted)
    return res.status(204).json(message)
}