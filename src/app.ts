import express from "express"
import sessionRouter from "./routers/sessionRouter"
import userRouter from "./routers/userRoutes"

const app = express()

app.use(express.json())

app.use("/clients", userRouter)
app.use("/login", sessionRouter)

export default app