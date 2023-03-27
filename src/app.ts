import express from "express"
import handleError from "./errors/handleError"
import sessionRouter from "./routers/sessionRouter"
import userRouter from "./routers/userRoutes"
require('express-async-errors')

//CORS
const cors = require("cors")


const app = express()

app.use(cors())
app.use(express.json())

app.use("/clients", userRouter)
app.use("/login", sessionRouter)

app.use(handleError)

export default app