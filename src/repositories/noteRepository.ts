import prisma from "@/db"

import { NoteData } from "@/interfaces/noteInterfaces"

const create = async (noteData: NoteData) => {
	return await prisma.note.create({ data: noteData })
}

const findByTitleAndUserId = async (title: string, userId: number) => {
	return prisma.note.findFirst({
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
	create,
	findByTitleAndUserId,
	getAllByUserId,
	getByIdAndUserId,
	deleteById,
}
