import { conflictError, notFoundError } from "@/erros"
import { CredentialBody } from "@/interfaces/credentialInterfaces"
import credentialRepository from "@/repositories/credentialRepository"
import { decrypt, encrypt } from "@/utils/cryptographyUtils"

const create = async (credentialBody: CredentialBody, userId: number) => {
	const { title, password } = credentialBody
	const userCredentials = await credentialRepository.findByTitleAndUserId(
		title,
		userId
	)
	if (userCredentials) throw conflictError(`${title} already exists`)
	const encryptedPassword = encrypt(credentialBody.password)
	const credentialData = {
		...credentialBody,
		userId: userId,
		password: encryptedPassword,
	}
	const credential = await credentialRepository.create(credentialData)
	delete credential.userId
	return { ...credential, password }
}

const getAll = async (userId: number) => {
	const crendetials = await credentialRepository.getAllByUserId(userId)
	return crendetials.map(credential => {
		delete credential.userId
		return { ...credential, password: decrypt(credential.password) }
	})
}

const getByCredentialId = async (credentialId: number, userId: number) => {
	const crendetials = await credentialRepository.getByIdAndUserId(
		credentialId,
		userId
	)
	if (!crendetials) throw notFoundError("Credential not found")
	delete crendetials.userId
	return { ...crendetials, password: decrypt(crendetials.password) }
}

const deleteById = async (crendetialId: number, userId: number) => {
	const { count } = await credentialRepository.deleteById(
		crendetialId,
		userId
	)
	if (!count) throw notFoundError("Credential not found")
}

export default {
	create,
	getAll,
	getByCredentialId,
	deleteById,
}
