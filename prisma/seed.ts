import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const main = async () => {
	const users = [
		{
			name: "Lucax",
			email: "lucax@gmail.com",
			password: "123456",
		},
	]
	const credentials = [
		{
			title: "Driven Hub",
			email: "lucax@gmail.com",
			username: "lucaxxx",
			password: "123456",
			userId: 1,
		},
	]
	const notes = [
		{
			title: "Notas do Lucax",
			content: "segredos do lucax",
			userId: 1,
		},
	]
	const cards = [
		{
			title: "Nubank do Lucax",
			number: "1111 1111 1111 1111",
			holderName: "LUCAX A RODRIUGES",
			expiryDate: "12/20",
			password: "1234",
			cvv: "123",
			isVirtual: false,
			type: "debit" as const,
			userId: 1,
		},
	]
	const wifis = [
		{
			title: "casa do Lucax",
			name: "LucaxWifi",
			password: "123345",
			userId: 1,
		},
	]

	await prisma.user.createMany({ data: users })
	await prisma.credential.createMany({ data: credentials })
	await prisma.note.createMany({ data: notes })
	await prisma.card.createMany({ data: cards })
	await prisma.wifi.createMany({ data: wifis })
}
main()
	.catch(e => {
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
