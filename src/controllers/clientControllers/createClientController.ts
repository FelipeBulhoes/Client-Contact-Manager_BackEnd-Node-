import { createClientService } from "../../services/clientServices/createClientService"
import { Request, Response } from "express"
import { iCreateClientReq } from "../../interfaces/clients/interfaces"

export const createClientController = async (req: Request, res: Response) => {
    const clientData: iCreateClientReq = req.body
    const newClient = await createClientService(clientData)
    return res.status(201).json(newClient)
}