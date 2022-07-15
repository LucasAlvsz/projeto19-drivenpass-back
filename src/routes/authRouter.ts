import { Router } from "express"

import { signIn, signUp } from "@controllers/authController"
import validateSchema from "@/middlewares/validateSchemaMiddleware"
import { signInSchema, signUpSchema } from "@/schemas/authSchemas/index"

const authRouter = Router()

authRouter.post("/signup", validateSchema(signUpSchema), signUp)
authRouter.post("/signin", validateSchema(signInSchema), signIn)

export default authRouter
