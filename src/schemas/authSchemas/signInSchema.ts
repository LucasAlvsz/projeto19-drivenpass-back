import { SignInData } from "@/interfaces/authInterfaces"
import Joi from "joi"

const bodySchema = Joi.object<SignInData>({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
}).required()

const signInSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signInSchema
