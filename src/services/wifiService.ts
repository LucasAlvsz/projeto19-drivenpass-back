import { notFoundError } from "@/erros"
import { WifiBody } from "@/interfaces/wifiInterfaces"
import wifiRepository from "@/repositories/wifiRepository"
import { encrypt, decrypt } from "@/utils/cryptographyUtils"

const create = async (wifiBody: WifiBody, userId: number) => {
	const { password } = wifiBody
	const encryptedPassword = encrypt(password)
	const wifiData = {
		...wifiBody,
		userId: userId,
		password: encryptedPassword,
	}
	const wifi = await wifiRepository.create(wifiData)
	delete wifi.userId
	return { ...wifi, password }
}

const getAll = async (userId: number) => {
	const wifis = await wifiRepository.getAllByUserId(userId)
	return wifis.map(wifi => {
		delete wifi.userId
		return {
			...wifi,
			password: decrypt(wifi.password),
		}
	})
}

const getByWifiId = async (WifiId: number, userId: number) => {
	const wifi = await wifiRepository.getByIdAndUserId(WifiId, userId)
	if (!wifi) throw notFoundError("Wifi not found")
	delete wifi.userId
	return { ...wifi, password: decrypt(wifi.password) }
}

const deleteById = async (WifiId: number, userId: number) => {
	const { count } = await wifiRepository.deleteById(WifiId, userId)
	if (!count) throw notFoundError("Wifi not found")
}

export default {
	create,
	getAll,
	getByWifiId,
	deleteById,
}
