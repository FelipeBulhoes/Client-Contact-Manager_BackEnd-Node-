import { createClientService, listClientsService } from "../services/clientServices"
import { Request, Response } from "express"
import { iCreateClientReq } from "../interfaces/clients/interfaces"



export const createClientController = async (req: Request, res: Response) => {
    const clientData: iCreateClientReq = req.body
    const newClient = await createClientService(clientData)
    return res.status(201).json(newClient)
}


export const listClientsController = async (req: Request, res: Response) => {
    const clients = await listClientsService()
    return res.status(200).json(clients)
}


export const updateClientController = async (req: Request, res: Response) => {
    
}