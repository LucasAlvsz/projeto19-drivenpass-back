import { SignUpData } from "@/interfaces/authInterfaces"
import prisma from "@db/index"

const insert = async (user: SignUpData) => {
	return prisma.user.create({ data: user })
}

const getByEmail = async (email: string) => {
	return prisma.user.findUnique({ where: { email } })
}

export default {
	insert,
	getByEmail,
}
