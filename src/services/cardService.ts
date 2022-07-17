import { conflictError, notFoundError } from "@/erros"
import { CardBody } from "@/interfaces/cardInterfaces"
import cardRepository from "@/repositories/cardRepository"
import { decrypt, encrypt } from "@/utils/cryptographyUtils"

const create = async (cardBody: CardBody, userId: number) => {
	const { title, password, cvv } = cardBody
	const userCard = await cardRepository.findByTitleAndUserId(title, userId)
	if (userCard) throw conflictError(`${title} already exists`)
	const encryptedPassword = encrypt(password)
	const encryptedCvv = encrypt(cvv)
	const cardData = {
		...cardBody,
		userId: userId,
		password: encryptedPassword,
		cvv: encryptedCvv,
	}
	const card = await cardRepository.create(cardData)
	delete card.userId
	return { ...card, password, cvv }
}

const getAll = async (userId: number) => {
	const cards = await cardRepository.getAllByUserId(userId)
	return cards.map(card => {
		delete card.userId
		return {
			...card,
			password: decrypt(card.password),
			cvv: decrypt(card.cvv),
		}
	})
}

const getByCardId = async (cardId: number, userId: number) => {
	const card = await cardRepository.getByIdAndUserId(cardId, userId)
	if (!card) throw notFoundError("Card not found")
	delete card.userId
	return { ...card, password: decrypt(card.password) }
}

const deleteById = async (cardId: number, userId: number) => {
	const { count } = await cardRepository.deleteById(cardId, userId)
	if (!count) throw notFoundError("Card not found")
}

export default {
	create,
	getAll,
	getByCardId,
	deleteById,
}
