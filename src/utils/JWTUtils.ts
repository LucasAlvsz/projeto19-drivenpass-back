import jwt from "jsonwebtoken"

const generateToken = (data: object) => {
	return jwt.sign(data, process.env.JWT_SECRET)
}
const validateToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET)
}

export { generateToken, validateToken }
