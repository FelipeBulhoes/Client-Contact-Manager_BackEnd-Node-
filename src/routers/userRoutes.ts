import { Router } from "express";
import { createClientController } from "../controllers/clientControllers/createClientController";
import { listClientsController } from "../controllers/clientControllers/listClientsController";

const userRouter = Router()

userRouter.post("", createClientController)
userRouter.get("", listClientsController)

export default userRouter