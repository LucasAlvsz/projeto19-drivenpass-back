import { Note } from "@prisma/client"

type NoteData = Omit<Note, "id" | "createdAt">
type NoteBody = Omit<NoteData, "userId">
export { NoteData, NoteBody }
