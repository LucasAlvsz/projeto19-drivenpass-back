import { Request, Response } from "express"

import { CardBody } from "@/interfaces/cardInterfaces"
import cardService from "@/services/cardService"

const createCard = async (req: Request, res: Response) => {
	const cardBody: CardBody = req.body
	const userId: number = res.locals.userData.id
	const card = await cardService.create(cardBody, userId)
	res.status(201).send(card)
}

const getCards = async (req: Request, res: Response) => {
	const userId: number = res.locals.userData.id
	const cards = await cardService.getAll(userId)
	res.send(cards)
}

const getCardById = async (req: Request, res: Response) => {
	const cardId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	const card = await cardService.getByCardId(cardId, userId)
	res.send(card)
}

const deleteCard = async (req: Request, res: Response) => {
	const cardId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	await cardService.deleteById(cardId, userId)
	res.sendStatus(200)
}

export { createCard, getCards, getCardById, deleteCard }
