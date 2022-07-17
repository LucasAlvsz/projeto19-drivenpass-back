import prisma from "@/db"
import { CardData } from "@/interfaces/cardInterfaces"

const create = async (cardData: CardData) => {
	return await prisma.card.create({ data: cardData })
}

const findByTitleAndUserId = async (title: string, userId: number) => {
	return prisma.card.findFirst({
		where: {
			title: {
				equals: title,
				mode: "insensitive",
			},
			userId,
		},
	})
}

const getAllByUserId = async (userId: number) => {
	return await prisma.card.findMany({ where: { userId } })
}

const getByIdAndUserId = async (cardId: number, userId: number) => {
	return await prisma.card.findFirst({
		where: { id: cardId, userId },
	})
}

const deleteById = async (cardId: number, userId: number) => {
	return await prisma.card.deleteMany({
		where: { id: cardId, userId },
	})
}

export default {
	create,
	findByTitleAndUserId,
	getAllByUserId,
	getByIdAndUserId,
	deleteById,
}
