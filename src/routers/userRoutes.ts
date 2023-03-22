import { Router } from "express";
import { createClientController, deleteClientController, listClientsController, updateClientController } from "../controllers/clientControllers";
import { createContactController, listClientContactsController } from "../controllers/contactControllers";
import { ensureAuth } from "../middlewares/ensureAuth";
import ensureDataStructureMiddleware from "../middlewares/ensureDataStructure";
import {createClientSchema} from "../schemas/clientSchemas"
import { createContactSchema } from "../schemas/contactSchemas";

const userRouter = Router()

userRouter.post("", ensureDataStructureMiddleware(createClientSchema), createClientController)
userRouter.get("", ensureAuth, listClientsController)
userRouter.patch("/:id", ensureAuth, updateClientController)
userRouter.delete("/:id", ensureAuth, deleteClientController)

userRouter.post("/contacts/add/:id", ensureAuth, ensureDataStructureMiddleware(createContactSchema), createContactController)
userRouter.get("/contacts", ensureAuth, listClientContactsController)


export default userRouter