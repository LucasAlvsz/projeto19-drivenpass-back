import { SignInData, SignUpBody } from "@/interfaces/authInterfaces"
import authService from "@/services/authService"
import { Request, Response } from "express"

const signUp = async (req: Request, res: Response) => {
	const signUpData: SignUpBody = req.body
	await authService.signUp(signUpData)
	res.sendStatus(201)
}

const signIn = async (req: Request, res: Response) => {
	const signInData: SignInData = req.body
	const token = await authService.signIn(signInData)
	res.send(token)
}

export { signUp, signIn }
