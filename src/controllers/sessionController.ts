import { Request, Response } from "express";
import { iSessionCredentials } from "../interfaces/clients/interfaces";
import { sessionService } from "../services/sessionService";

const sessionController = async (req:Request, res:Response) => {
    const credentials: iSessionCredentials = req.body
    const data = await sessionService(credentials)
    return res.json(data)
}

export {sessionController}