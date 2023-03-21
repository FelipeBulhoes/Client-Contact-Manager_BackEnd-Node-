import { Router } from "express";
import { sessionController } from "../controllers/sessionController";


const sessionRouter = Router()

sessionRouter.post("", sessionController)

export default sessionRouter