import { conflictError, notFoundError, unauthorizedError } from "@/erros"
import { SignInData, SignUpBody } from "@/interfaces/authInterfaces"
import userRepository from "@/repositories/userRepository"
import { comparePasswords, encryptPassword } from "@/utils/cryptographyUtils"
import { generateToken } from "@/utils/JWTUtils"

const signUp = async (userData: SignUpBody) => {
	const user = await userRepository.getByEmail(userData.email)
	if (user) throw conflictError("Email already in use")
	delete userData.confirmPassword
	userData = { ...userData, password: encryptPassword(userData.password) }
	await userRepository.insert(userData)
}

const signIn = async (signInData: SignInData) => {
	const user = await userRepository.getByEmail(signInData.email)
	if (!user) throw notFoundError("Invalid email")
	if (!comparePasswords(signInData.password, user.password))
		throw unauthorizedError("Invalid password")

	const { id, name } = user
	return { token: generateToken({ id, name }) }
}

export default {
	signUp,
	signIn,
}
