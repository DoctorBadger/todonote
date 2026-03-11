import { useDispatch } from "react-redux";
import { deleteNote, deleteItem } from "../app/todoSlice";
import { useState } from "react";
import NoteModal from "./NoteModal";
import DeleteModal from "./DeleteModal";
import { Tooltip } from "react-tooltip";

function NoteCard({ note, onEdit }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [deleteNoteConfirm, setDeleteNoteConfirm] = useState(false);
  const [deleteItemIndex, setDeleteItemIndex] = useState(null);

  const preview =
    deleteItemIndex !== null
      ? note.items[deleteItemIndex].split(" ").slice(0, 3).join(" ")
      : "";
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col h-full hover:shadow-xl transition">
      <h2 className="text-xl font-medium mb-1">{note.title}</h2>

      <p className="text-xs text-gray-500 mb-3">
        {new Date(note.date).toLocaleDateString("en-GB")}
      </p>

      <ul className="flex flex-col gap-2 flex-1 overflow-y-auto max-h-9/12 pr-1 text-sm">
        {note.items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-gray-700"
          >
            <span>{item}</span>

            <button
              className="text-red-400 hover:text-red-600 transition"
              onClick={() => setDeleteItemIndex(index)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 mt-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
          onClick={() => setDeleteNoteConfirm(true)}
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

      {deleteNoteConfirm && (
        <DeleteModal
          message={
            <>
              Are you sure you want to delete{" "}
              <span className="font-bold underline">{note.title}</span> note?
            </>
          }
          onCancel={() => setDeleteNoteConfirm(false)}
          onConfirm={() => {
            dispatch(deleteNote(note.id));
            setDeleteNoteConfirm(false);
          }}
        />
      )}

      {deleteItemIndex !== null && (
        <DeleteModal
          message={
            <>
              Are you sure you want to delete the item :{" "}
              <span
                data-tooltip-id="item-tooltip"
                data-tooltip-content={note.items[deleteItemIndex]}
              >
                {preview}...
              </span>
              ?
              <Tooltip id="item-tooltip"/>
            </>
          }
          onCancel={() => setDeleteItemIndex(null)}
          onConfirm={() => {
            dispatch(
              deleteItem({
                noteId: note.id,
                index: deleteItemIndex,
              }),
            );
            setDeleteItemIndex(null);
          }}
        />
      )}
    </div>
  );
}

export default NoteCard;
