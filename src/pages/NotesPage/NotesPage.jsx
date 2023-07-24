import NotesForm from "../NotesForm/NotesForm";

export default function NotesPage(props) {
  return (
    <>
    &nbsp;
          <NotesForm
            notes={props.notes}
            addNotes={props.addNotes}
            user={props.user}
          />
        {props.notes.length == 0 ? (
          <p>No notes yet!</p>
        ) : (
          props.notes.map((note) => <div key={note._id}>{note.text}{console.log(note)}</div>)
        )}
    </>
  );
}
