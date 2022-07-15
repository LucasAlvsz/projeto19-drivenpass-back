import bcrypt from "bcrypt"

const encryptPassword = (password: string) => {
	return bcrypt.hashSync(password, 10)
}

const comparePasswords = (password: string, comparedPassword: string) => {
	return bcrypt.compareSync(password, comparedPassword)
}

export { encryptPassword, comparePasswords }
