import * as notesAPI from "./notes-api";

export async function createNote(text, user) {
  let newNote = { text: text, user: user };
  return notesAPI.create(newNote);
}

export async function getNotes(user) {
  let notes = await notesAPI.getNotes(user);
  return notes;
}
