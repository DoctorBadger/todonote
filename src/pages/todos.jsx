import { useSelector } from "react-redux";
import { useState } from "react";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";

const Todos = () => {
  const notes = useSelector((state) => state.todo.notes);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-gray-100 p-10">
      <div className="flex justify-between mb-10">
        <p></p>
        <h1 className="text-4xl font-semibold text-gray-800">To-Do Lists</h1>

        <button
          className="bg-[#3A5B22] hover:bg-[#2f4a1a] text-white px-5 py-2 rounded-lg shadow transition"
          onClick={() => setOpen(true)}
        >
          + Add Note
        </button>
      </div>

      {notes.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-7xl text-black/30 font-medium">No Notes Yet</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6">
          {notes.map((note) => (
            <div key={note.id} className="w-80">
              <NoteCard note={note} />
            </div>
          ))}
        </div>
      )}

      {open && <NoteModal close={() => setOpen(false)} />}
    </div>
  );
};

export default Todos;
