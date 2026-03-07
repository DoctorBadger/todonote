import { useSelector } from "react-redux";
import { useState } from "react";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";

const Todos = () => {
  const notes = useSelector((state) => state.todo.notes);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>To-Do Lists</h1>
      <button
        className="mt-6 bg-[#3A5B22] text-white px-4 py-2 rounded"
        onClick={() => setOpen(true)}
      >
        Add+
      </button>
      <div>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
      {open && <NoteModal close={() => setOpen(false)} />}
    </div>
  );
};

export default Todos;
