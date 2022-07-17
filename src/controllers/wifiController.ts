import { Request, Response } from "express"

import { WifiBody } from "@/interfaces/wifiInterfaces"
import wifiService from "@/services/wifiService"

const createWifi = async (req: Request, res: Response) => {
	const wifiData: WifiBody = req.body
	const userId: number = res.locals.userData.id
	const wifi = await wifiService.create(wifiData, userId)
	res.status(201).send(wifi)
}

const getWifis = async (req: Request, res: Response) => {
	const userId: number = res.locals.userData.id
	const wifi = await wifiService.getAll(userId)
	res.send(wifi)
}

const getWifiById = async (req: Request, res: Response) => {
	const wifiId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	const wifi = await wifiService.getByWifiId(wifiId, userId)
	res.send(wifi)
}

const deleteWifi = async (req: Request, res: Response) => {
	const wifiId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	await wifiService.deleteById(wifiId, userId)
	res.sendStatus(200)
}

export { createWifi, getWifis, getWifiById, deleteWifi }
