import { NoteBody } from "@/interfaces/noteInterfaces"
import noteService from "@/services/noteService"
import { Request, Response } from "express"

const createNote = async (req: Request, res: Response) => {
	const noteData: NoteBody = req.body
	const userId: number = res.locals.userData.id
	const note = await noteService.create(noteData, userId)
	res.status(201).send(note)
}

const getNotes = async (req: Request, res: Response) => {
	const userId: number = res.locals.userData.id
	const notes = await noteService.getAll(userId)
	res.send(notes)
}

const getNoteById = async (req: Request, res: Response) => {
	const noteId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	const note = await noteService.getByNoteId(noteId, userId)
	res.send(note)
}

const deleteNoteById = async (req: Request, res: Response) => {
	const noteId = Number(req.params.id)
	const userId: number = res.locals.userData.id
	await noteService.deleteById(noteId, userId)
	res.sendStatus(200)
}

export { createNote, getNotes, getNoteById, deleteNoteById }
