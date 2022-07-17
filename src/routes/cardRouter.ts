import { Router } from "express"

import { validateBearerToken, validateSchema } from "@/middlewares"
import cardSchema from "@/schemas/cardSchema"
import {
	createCard,
	deleteCard,
	getCardById,
	getCards,
} from "@/controllers/cardController"

const cardRouter = Router()

cardRouter.use(validateBearerToken)
cardRouter.post("", validateSchema(cardSchema), createCard)
cardRouter.get("", getCards)
cardRouter.get("/:id", getCardById)
cardRouter.delete("/:id", deleteCard)

export default cardRouter
