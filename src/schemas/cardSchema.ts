import Joibase from "joi"
import JoiDate from "@joi/date"

import { CardBody } from "@/interfaces/cardInterfaces"

const Joi = Joibase.extend(JoiDate)

const bodySchema: CardBody = Joi.object({
	number: Joi.string().required(),
	title: Joi.string().required(),
	holderName: Joi.string().required(),
	password: Joi.string().required(),
	cvv: Joi.string().length(3).required(),
	expiryDate: Joi.date().format("MM/YY").required(),
	isVirtual: Joi.boolean().strict().required(),
	type: Joi.string().valid("credit", "debit", "credit_debit").required(),
})
	.required()
	.options({ allowUnknown: false })

const cardSchema = Joi.object({
	body: bodySchema,
})
	.required()
	.options({ allowUnknown: true })

export default cardSchema
