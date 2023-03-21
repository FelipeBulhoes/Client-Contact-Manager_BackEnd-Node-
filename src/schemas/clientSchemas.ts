import * as yup from 'yup'
import { ObjectSchema } from 'yup'
import { iCreateClientReq, iClientResponse } from '../interfaces/clients/interfaces'

const createClientSchema: ObjectSchema<iCreateClientReq> = yup.object().shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.number().required()
})


const returnClientSchema: ObjectSchema<iClientResponse> = yup.object().shape({
    id: yup.string(),
    full_name: yup.string(),
    email: yup.string().email(),
    phone: yup.number(),
    createdAt: yup.string()
})

export {createClientSchema, returnClientSchema}
