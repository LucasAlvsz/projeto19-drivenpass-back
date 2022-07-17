import Joi from "joi"

import { WifiBody } from "@/interfaces/wifiInterfaces"

const bodySchema = Joi.object<WifiBody>({
	title: Joi.string().required(),
	name: Joi.string().required(),
	password: Joi.string().required(),
})
	.required()
	.options({ allowUnknown: false })

const wifiSchema = Joi.object({
	body: bodySchema,
})
	.required()
	.options({ allowUnknown: true })

export default wifiSchema
