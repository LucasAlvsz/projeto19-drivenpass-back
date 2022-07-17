import bcrypt from "bcrypt"
import Cryptr from "cryptr"
const cryptr = new Cryptr(process.env.SECRET_KEY)

const encryptPassword = (password: string) => {
	return bcrypt.hashSync(password, 10)
}

const comparePasswords = (password: string, comparedPassword: string) => {
	return bcrypt.compareSync(password, comparedPassword)
}

const encrypt = (text: string) => {
	return cryptr.encrypt(text)
}

const decrypt = (text: string) => {
	return cryptr.decrypt(text)
}

export { encryptPassword, comparePasswords, encrypt, decrypt }
