import prisma from "@/db"
import { WifiData } from "@/interfaces/wifiInterfaces"

const create = async (wifiData: WifiData) => {
	return await prisma.wifi.create({ data: wifiData })
}

const getAllByUserId = async (userId: number) => {
	return await prisma.wifi.findMany({ where: { userId } })
}

const getByIdAndUserId = async (wifiId: number, userId: number) => {
	return await prisma.wifi.findFirst({
		where: { id: wifiId, userId },
	})
}

const deleteById = async (wifiId: number, userId: number) => {
	return await prisma.wifi.deleteMany({
		where: { id: wifiId, userId },
	})
}

export default {
	create,
	getAllByUserId,
	getByIdAndUserId,
	deleteById,
}
