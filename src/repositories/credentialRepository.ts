import prisma from "@/db"
import { CredentialData } from "@/interfaces/credentialInterfaces"

const create = async (credentialData: CredentialData) => {
	return await prisma.credential.create({ data: credentialData })
}

const findByTitleAndUserId = async (title: string, userId: number) => {
	return prisma.credential.findFirst({
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
	return await prisma.credential.findMany({ where: { userId } })
}

const getByIdAndUserId = async (credentialId: number, userId: number) => {
	return await prisma.credential.findFirst({
		where: { id: credentialId, userId },
	})
}

const deleteById = async (credentialId: number, userId: number) => {
	return await prisma.credential.deleteMany({
		where: { id: credentialId, userId },
	})
}

export default {
	create,
	findByTitleAndUserId,
	getAllByUserId,
	getByIdAndUserId,
	deleteById,
}
