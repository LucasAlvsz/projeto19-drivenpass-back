import { Router } from "express"

import { validateBearerToken, validateSchema } from "@/middlewares"
import {
	createNote,
	deleteNoteById,
	getNoteById,
	getNotes,
} from "@/controllers/noteControlller"
import noteSchema from "@/schemas/noteSchema"

const noteRouter = Router()

noteRouter.use(validateBearerToken)
noteRouter.post("", validateSchema(noteSchema), createNote)
noteRouter.get("", getNotes)
noteRouter.get("/:id", getNoteById)
noteRouter.delete("/:id", deleteNoteById)

export default noteRouter
