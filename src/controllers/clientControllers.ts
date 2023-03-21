import { createClientService, deleteClientService, listClientsService, updateClientService } from "../services/clientServices"
import { Request, Response } from "express"
import { iClientUpdate, iCreateClientReq } from "../interfaces/clients/interfaces"



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
    const clientData: iClientUpdate = req.body
    const clientToBePatched: string = req.params.id
    const patchedUser = await updateClientService(clientToBePatched ,clientData)
    return res.status(200).json(patchedUser)
}


export const deleteClientController = async (req:Request, res:Response) => {
    const userToBeDeleted: string = req.params.id
    const message = await deleteClientService(userToBeDeleted)
    return res.status(204).json(message)
}