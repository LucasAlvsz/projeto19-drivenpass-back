import { conflictError, notFoundError, unauthorizedError } from "@/erros"
import { SignIn, UserData } from "@/interfaces/authInterfaces"
import userRepository from "@/repositories/userRepository"
import { comparePasswords, encryptPassword } from "@/utils/cryptographyUtils"
import { generateToken } from "@/utils/JWTUtils"

const signUp = async (userData: UserData) => {
	const user = await userRepository.getByEmail(userData.email)
	if (user) throw conflictError("Email already in use")
	userData = { ...userData, password: encryptPassword(userData.password) }
	await userRepository.insert(userData)
}

const signIn = async (signInData: SignIn) => {
	const user = await userRepository.getByEmail(signInData.email)
	if (!user) throw notFoundError("Invalid email")
	if (!comparePasswords(signInData.password, user.password))
		throw unauthorizedError("Invalid password")
	return { token: generateToken(user) }
}

export default {
	signUp,
	signIn,
}
