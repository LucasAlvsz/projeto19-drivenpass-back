import express from "express"
import cors from "cors"

import router from "@/routes"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.get("/", (req, res) => res.send("Hello World!"))

app.listen(+process.env.PORT || 5000, () =>
	console.log(`Server running on port ${process.env.PORT || 5000} 🐱‍👤`)
)
