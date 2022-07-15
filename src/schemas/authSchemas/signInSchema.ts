import Joi from "joi"

const bodySchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
}).required()

const signInSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signInSchema
