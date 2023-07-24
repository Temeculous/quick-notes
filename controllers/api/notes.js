const Note = require("../../models/note");

module.exports = {
  index,
  create,
};

async function create(req, res) {
  console.log(req.body);
  let newNote = await Note.create(req.body);
  res.json(newNote);
}

async function index(req, res) {
  let notes = await Note.find(req.body.user);
  res.json(notes);
}
