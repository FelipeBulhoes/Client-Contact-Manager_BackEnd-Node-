import { Router } from "express";
import { sessionController } from "../controllers/sessionControllers/sessionController";


const sessionRouter = Router()

sessionRouter.post("", sessionController)

export default sessionRouter