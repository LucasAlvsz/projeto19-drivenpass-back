import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => res.send("Hello World!"))

app.post("/teste", (req, res) => res.send({ token: 20 }))

app.get("/testeget", (req, res) => res.send(req.body))

app.listen(+process.env.PORT || 4000, () =>
	console.log(`Server running on port ${process.env.PORT || 4000} 🐱‍👤`)
)
