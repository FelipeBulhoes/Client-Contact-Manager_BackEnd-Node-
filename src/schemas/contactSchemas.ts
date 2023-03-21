import * as yup from "yup"
import { ObjectSchema } from "yup"
import { iContactReq, iContactRes } from "../interfaces/contacts/interfaces"


const createContactSchema: ObjectSchema<iContactReq> = yup.object().shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required()
})


const returnContactSchema: ObjectSchema<iContactRes> = yup.object().shape({
    id: yup.string(),
    full_name: yup.string(),
    email: yup.string().email(),
    phone: yup.number(),
    createdAt: yup.string()
})

export {createContactSchema, returnContactSchema}