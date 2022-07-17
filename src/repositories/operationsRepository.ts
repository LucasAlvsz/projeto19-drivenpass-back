import prisma from "@/db"

import { Models } from "@/interfaces/operationsInterfaces"


const findByTitleAndUserId = async (
	title: string,
	userId: number,
	model: Models
) => {
	return prisma.`${model}`.findFirst({
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
	return await prisma.note.findMany({ where: { userId } })
}

const getByIdAndUserId = async (noteId: number, userId: number) => {
	return await prisma.note.findFirst({
		where: { id: noteId, userId },
	})
}

const deleteById = async (noteId: number, userId: number) => {
	return await prisma.note.deleteMany({
		where: { id: noteId, userId },
	})
}

export default {
	findByTitleAndUserId,
	getAllByUserId,
	getByIdAndUserId,
	deleteById,
}
