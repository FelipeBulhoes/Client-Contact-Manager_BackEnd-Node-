import { Request, Response, NextFunction } from "express"
import { AnySchema } from "yup"

const ensureDataStructureMiddleware = (schema: AnySchema) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        const validation = await schema.validate(req.body, {
            stripUnknown: true,
            abortEarly: false
        })
        return next()
    } catch (error:any) {
        return res.status(400).json({
            message: error.errors
        })
    }
}

export default ensureDataStructureMiddleware