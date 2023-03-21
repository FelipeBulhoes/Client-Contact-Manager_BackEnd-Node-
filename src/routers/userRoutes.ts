import { Router } from "express";
import { createClientController, deleteClientController, listClientsController, updateClientController } from "../controllers/clientControllers";
import { createContactController } from "../controllers/contactControllers";

const userRouter = Router()

userRouter.post("", createClientController)
userRouter.get("", listClientsController)
userRouter.patch("/:id", updateClientController)
userRouter.delete("/:id", deleteClientController)

userRouter.post("/contacts/add/:id", createContactController)

export default userRouter