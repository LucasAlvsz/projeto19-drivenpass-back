import Joi from "joi"

import { CredentialBody } from "@/interfaces/credentialInterfaces"

const bodySchema = Joi.object<CredentialBody>({
	title: Joi.string().required(),
	url: Joi.string().uri().required(),
	username: Joi.string().required(),
	password: Joi.string().required(),
}).required()

const credentialSchema = Joi.object({
	body: bodySchema,
})
	.required()
	.options({ allowUnknown: true })

export default credentialSchema
