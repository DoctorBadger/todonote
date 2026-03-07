import { useDispatch } from "react-redux";
import { addNote, editNote } from "../app/todoSlice";
import { useState } from "react";
import { toast } from "react-toastify";

function NoteModal({ close, note }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(note?.title || "");
  const [items, setItems] = useState(note?.items || [""]);

  function addItem() {
    setItems([...items, ""]);
  }

  function updateItem(value, index) {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  }

  function removeItem(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  function save() {
    if (!title.trim()) {
      toast.error("Please fill the Title");
      return;
    }

    const filteredItems = items.filter((item) => item.trim() !== "");

    if (filteredItems.length === 0) {
      toast.error("Add at least one item");
      return;
    }

    if (note) {
      dispatch(
        editNote({
          id: note.id,
          title,
          items: filteredItems,
        })
      );
      toast.success("Note updated");
    } else {
      dispatch(addNote(title, filteredItems));
      toast.success("Note added");
    }

    close();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div className="bg-white p-6 rounded-xl w-105 shadow-xl">

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {note ? "Edit Note" : "Add Note"}
        </h2>

        <input
          className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {items.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">

            <input
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="List item"
              value={item}
              onChange={(e) => updateItem(e.target.value, index)}
            />

            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => removeItem(index)}
            >
              ✕
            </button>

          </div>
        ))}

        <button
          onClick={addItem}
          className="text-green-600 text-sm mb-4 hover:underline"
        >
          + Add Item
        </button>

        <div className="flex justify-end gap-3">

          <button
            onClick={close}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={save}
            className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>

        </div>
      </div>

    </div>
  );
}

export default NoteModal;