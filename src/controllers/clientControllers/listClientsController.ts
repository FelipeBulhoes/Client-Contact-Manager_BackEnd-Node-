import { Request, Response } from "express"
import { listClientsService } from "../../services/clientServices/listClientsService"

export const listClientsController = async (req: Request, res: Response) => {
    const clients = await listClientsService()
    return res.status(200).json(clients)
}