import Joi from "joi"

const bodySchema = Joi.object({
	url: Joi.string().uri().required(),
	username: Joi.string().required(),
	title: Joi.string().required(),
	password: Joi.string().required(),
}).required()

const credentialSchema = Joi.object({
	body: bodySchema,
})
	.required()
	.options({ allowUnknown: true })

export default credentialSchema
