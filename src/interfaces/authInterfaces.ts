import { User } from "@prisma/client"

export type SignUpData = Omit<User, "id" | "createdAt">

export type SignUpBody = SignUpData & { confirmPassword: string }

export type SignInData = Omit<User, "name" | "id" | "createdAt">
