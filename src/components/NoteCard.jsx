import { useDispatch } from "react-redux";
import { deleteNote, deleteItem } from "../app/todoSlice";
import { useState } from "react";
import NoteModal from "./NoteModal";

function NoteCard({ note, onEdit }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  return (
    <div className="bg-white shadow-md p-4 rounded-xl mb-4 h-64">

      <h2 className="text-xl font-semibold">{note.title}</h2>

      <p className="text-sm text-gray-500 mb-3">
        {new Date(note.date).toLocaleDateString("en-GB")}
      </p>

      <ul className="mb-4">
        {note.items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b py-1"
          >
            {item}

            <button
              className="text-red-500 hover"
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

      <div className="flex gap-3">

        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch(deleteNote(note.id))}
        >
          Delete
        </button>

        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
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