const Note = require("../../models/note");

module.exports = {
  findNoteByUser,
  create,
};

async function create(req, res) {
  console.log(req.body);
  let newNote = await Note.create(req.body);
  res.json(newNote);
}

async function findNoteByUser(req, res) {
  let notes = await Note.find(req.body.user);
  res.json(notes);
}
