import { Router } from "express"

import { validateBearerToken, validateSchema } from "@/middlewares"
import wifiSchema from "@/schemas/wifiSchema"
import {
	createWifi,
	deleteWifi,
	getWifiById,
	getWifis,
} from "@/controllers/wifiController"

const wifiRouter = Router()

wifiRouter.use(validateBearerToken)
wifiRouter.post("", validateSchema(wifiSchema), createWifi)
wifiRouter.get("", getWifis)
wifiRouter.get("/:id", getWifiById)
wifiRouter.delete("/:id", deleteWifi)

export default wifiRouter
