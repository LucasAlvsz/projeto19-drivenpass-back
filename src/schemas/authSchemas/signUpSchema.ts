import { SignUpBody } from "@/interfaces/authInterfaces"
import Joi from "joi"

const bodySchema = Joi.object<SignUpBody>({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(10).required(),
	confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
})
	.required()
	.options({ allowUnknown: false })

const signUpSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signUpSchema
