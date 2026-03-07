import { useDispatch } from "react-redux";
import { deleteNote, deleteItem } from "../app/todoSlice";
import { useState } from "react";
import NoteModal from "./NoteModal";

function NoteCard({ note, onEdit }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col min-h-55 hover:shadow-xl transition">

      <h2 className="text-xl font-medium text-gray-800 mb-1">
        {note.title}
      </h2>

      <p className="text-xs text-gray-500 mb-3">
        {new Date(note.date).toLocaleDateString("en-GB")}
      </p>

      <ul className="flex-1 space-y-1 overflow-y-auto max-h-40 pr-1 text-sm">

        {note.items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-gray-200 py-1"
          >
            <span className="text-gray-700">{item}</span>

            <button
              className="text-red-400 hover:text-red-600 transition"
              onClick={() =>
                dispatch(
                  deleteItem({
                    noteId: note.id,
                    index,
                  })
                )
              }
            >
              ✕
            </button>
          </li>
        ))}

      </ul>

      <div className="flex gap-3 mt-4">

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
          onClick={() => dispatch(deleteNote(note.id))}
        >
          Delete
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition"
          onClick={() => {
            if (onEdit) onEdit();
            else setEdit(true);
          }}
        >
          Edit
        </button>

      </div>

      {edit && <NoteModal note={note} close={() => setEdit(false)} />}
    </div>
  );
}

export default NoteCard;