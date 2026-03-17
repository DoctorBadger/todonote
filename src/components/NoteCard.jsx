import { useDispatch } from "react-redux";
import { deleteNote, deleteItem } from "../app/todoSlice";
import { useState } from "react";
import NoteModal from "./NoteModal";
import DeleteModal from "./DeleteModal";
import { Tooltip } from "react-tooltip";

function NoteCard({ note, onEdit, listeners }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [deleteNoteConfirm, setDeleteNoteConfirm] = useState(false);
  const [deleteItemIndex, setDeleteItemIndex] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const preview =
    deleteItemIndex !== null
      ? note.items[deleteItemIndex].split(" ").slice(0, 3).join(" ")
      : "";

  return (
    <div className="w-80 h-80 perspective">
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >

        <div className="absolute w-full h-full backface-hidden bg-white shadow-md rounded-xl p-5 flex flex-col hover:shadow-xl transition">

          <div {...listeners} className="cursor-grab active:cursor-grabbing">
            <h2 className="text-xl font-medium mb-1">☰ {note.title}</h2>
          </div>

          {note.urgent && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 mb-1 rounded">
              Urgent
            </span>
          )}

          <p className="text-xs text-gray-500 mb-3">
            {new Date(note.date).toLocaleDateString("en-GB")}
          </p>

          <ul className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1 text-sm">
            {note.items.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 px-2 py-1 rounded text-gray-700"
              >
                <span>{item}</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteItemIndex(index);
                  }}
                  className="text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 mt-4 flex-wrap">

            <button
              onClick={(e) => {
                e.stopPropagation();
                setDeleteNoteConfirm(true);
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Delete
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onEdit) onEdit();
                else setEdit(true);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Edit
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(true);
              }}
              className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-md text-sm"
            >
              View
            </button>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 shadow-md rounded-xl p-5 flex flex-col">

          <h2 className="text-xl font-semibold mb-3">{note.title}</h2>

          <ul className="flex flex-col gap-2 flex-1 overflow-y-auto text-sm">
            {note.items.map((item, index) => (
              <li
                key={index}
                className="bg-white px-2 py-1 rounded shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-md text-sm  "
          >
            Back
          </button>
        </div>
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
                data-tooltip-place="right"
              >
                {preview}...
              </span>
              ?
              <Tooltip id="item-tooltip" />
            </>
          }
          onCancel={() => setDeleteItemIndex(null)}
          onConfirm={() => {
            dispatch(
              deleteItem({
                noteId: note.id,
                index: deleteItemIndex,
              })
            );
            setDeleteItemIndex(null);
          }}
        />
      )}
    </div>
  );
}

export default NoteCard;