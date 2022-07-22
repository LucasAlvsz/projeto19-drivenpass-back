import prisma from "@/db"
import app from "@/app"
import supertest from "supertest"
import { SignUpBody } from "@/interfaces/authInterfaces"

describe("SignUp", () => {
	it("Should create user and return status code 201", async () => {
		const userData = {
			name: "lucaxx2",
			email: "lucaxx2@gmail.com",
			password: "lucaxlucax",
			confirmPassword: "lucaxlucax",
		} as SignUpBody
		const response = await supertest(app).post("/SignUp").send(userData)
		expect(response.status).toEqual(201)
	})
	it("Should not create a user and return status code 422", async () => {
		const userData = {
			name: "lucax",
			email: "lucax@gmail.com",
			password: "lucaxluca",
			confirmPassword: "lucaxluca",
		} as SignUpBody
		const response = await supertest(app).post("/SignUp").send(userData)
		expect(response.status).toEqual(422)
	})
	it("Should identify already registred user and return status code 409", async () => {
		const userData = {
			name: "lucax",
			email: "lucax@gmail.com",
			password: "lucaxlucax",
			confirmPassword: "lucaxlucax",
		} as SignUpBody
		await supertest(app).post("/SignUp").send(userData)
		const response = await supertest(app).post("/SignUp").send(userData)
		expect(response.status).toEqual(409)
	})
})

describe("SignIn", () => {
	it("Should login and return status code 200", async () => {
		const userData = {
			email: "lucax@gmail.com",
			password: "lucaxlucax",
		}
		const response = await supertest(app).post("/SignIn").send(userData)
		expect(response.status).toEqual(200)
	})
	it("Should not login and return status code 401", async () => {
		const userData = {
			email: "lucax@gmail.com",
			password: "invalidPassword",
		}
		const response = await supertest(app).post("/SignIn").send(userData)
		expect(response.status).toEqual(401)
	})
	it("Should not login and return status code 404", async () => {
		const userData = {
			email: "invalidEmail@gmail.com",
			password: "lucaxlucax",
		}
		const response = await supertest(app).post("/SignIn").send(userData)
		expect(response.status).toEqual(404)
	})
})

afterAll(async () => {
	await prisma.$disconnect()
})
