import { NoteBody } from "@/interfaces/noteInterfaces"

import { conflictError, notFoundError } from "@/erros"
import noteRepository from "@/repositories/noteRepository"

const create = async (noteBody: NoteBody, userId: number) => {
	const { title } = noteBody
	const userNotes = await noteRepository.findByTitleAndUserId(title, userId)
	if (userNotes) throw conflictError(`${title} already exists`)
	const noteData = {
		...noteBody,
		userId: userId,
	}
	const note = await noteRepository.create(noteData)
	delete note.userId
	return note
}

const getAll = async (userId: number) => {
	const notes = await noteRepository.getAllByUserId(userId)
	notes.forEach(note => delete note.userId)
	return notes
}

const getByNoteId = async (noteId: number, userId: number) => {
	const note = await noteRepository.getByIdAndUserId(noteId, userId)
	if (!note) throw notFoundError("Note not found")
	delete note.userId
	return note
}

const deleteById = async (noteId: number, userId: number) => {
	const { count } = await noteRepository.deleteById(noteId, userId)
	if (!count) throw notFoundError("Note not found")
}

export default {
	create,
	getAll,
	getByNoteId,
	deleteById,
}
