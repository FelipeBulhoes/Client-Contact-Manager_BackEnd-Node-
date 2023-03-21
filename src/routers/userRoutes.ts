import { Router } from "express";
import { createClientController, listClientsController } from "../controllers/clientControllers";

const userRouter = Router()

userRouter.post("", createClientController)
userRouter.get("", listClientsController)
//userRouter.patch("/:id", updateClientController)
//userRouter.delete("/:id", deleteClientController)

export default userRouter