import { Request, Response } from "express";
import { iContactReq } from "../interfaces/contacts/interfaces";
import { createContactService } from "../services/contactServices";

export const createContactController = async(req: Request, res: Response) => {
    const contactData: iContactReq = req.body
    const ownerClient: string = req.params.id
    const newContact = await createContactService(ownerClient, contactData)
    return res.status(201).json(newContact)
}