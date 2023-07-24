import NotesForm from "../NotesForm/NotesForm";

export default function NotesPage(props) {
  return (
    <>
        {props.notes.length == 0 ? (
          <p>No notes yet!</p>
        ) : (
          props.notes.map((note) => <div key={note.id}>{note.content}</div>)
        )}
      <NotesForm
        notes={props.notes}
        setNotes={props.setNotes}
        user={props.user}
      />
    </>
  );
}
