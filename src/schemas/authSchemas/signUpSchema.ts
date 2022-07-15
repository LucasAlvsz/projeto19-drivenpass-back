import Joi from "joi"

const bodySchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(10).required(),
	confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
}).required()

const signUpSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signUpSchema
