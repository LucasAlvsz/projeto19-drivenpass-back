import { User } from "@prisma/client"

type SignUpData = Omit<User, "id" | "createdAt">

type SignUpBody = SignUpData & { confirmPassword: string }

type SignInData = Omit<User, "name" | "id" | "createdAt">

export { SignUpData, SignUpBody, SignInData }
