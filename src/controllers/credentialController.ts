import { Request, Response } from "express"

import { CredentialBody } from "@/interfaces/credentialInterfaces"
import credentialService from "@/services/credentialService"

const createCredential = async (req: Request, res: Response) => {
	const credentialBody: CredentialBody = req.body
	const userId: number = res.locals.userData.id
	const credential = await credentialService.create(credentialBody, userId)
	res.status(201).send(credential)
}

const getCredentials = async (req: Request, res: Response) => {
	const userId: number = res.locals.userData.id
	const credentials = await credentialService.getAll(userId)
	res.send(credentials)
}

const getCredentialById = async (req: Request, res: Response) => {
	const credentialId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	const credential = await credentialService.getByCredentialId(
		credentialId,
		userId
	)
	res.send(credential)
}

const deleteCredential = async (req: Request, res: Response) => {
	const credentialId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	await credentialService.deleteById(credentialId, userId)
	res.sendStatus(200)
}

export { createCredential, getCredentials, getCredentialById, deleteCredential }
