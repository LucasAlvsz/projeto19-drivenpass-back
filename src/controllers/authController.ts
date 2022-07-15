import { SignIn, UserData } from "@/interfaces/authInterfaces"
import authService from "@/services/authService"
import { Request, Response } from "express"

const signUp = async (req: Request, res: Response) => {
	const { name, email, password }: UserData = req.body
	await authService.signUp({ name, email, password })
	res.sendStatus(201)
}

const signIn = async (req: Request, res: Response) => {
	const userData: SignIn = req.body
	const token = await authService.signIn(userData)
	res.send(token)
}

export { signUp, signIn }
