import { NextFunction, Request, Response } from "express"
import bearerAuthorizationSchema from "@/schemas/AuthorizationSchemas/bearerAuthorizationSchema"
import { validateToken } from "@/utils/JWTUtils"

const validateBearerToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { error } = bearerAuthorizationSchema.validate(req.headers, {
		abortEarly: false,
	})
	if (error)
		return res.status(401).send(error.details.map(({ message }) => message))
	try {
		const token = req.headers.authorization.split(" ")[1]
		const userData = validateToken(token)
		res.locals.userData = userData
		next()
	} catch (err) {
		return res.status(401).send(err.message)
	}
}

export default validateBearerToken
