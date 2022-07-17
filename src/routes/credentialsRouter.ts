import { Router } from "express"

import { validateSchema, validateBearerToken } from "@/middlewares/index"
import {
	createCredential,
	deleteCredential,
	getCredentialById,
	getCredentials,
} from "@/controllers/credentialController"
import credentialSchema from "@/schemas/credentialSchema"

const credentialRouter = Router()
credentialRouter.use(validateBearerToken)
credentialRouter.post("", validateSchema(credentialSchema), createCredential)
credentialRouter.get("", getCredentials)
credentialRouter.get("/:id", getCredentialById)
credentialRouter.delete("/:id", deleteCredential)

export default credentialRouter
