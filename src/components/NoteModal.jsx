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
          title: title,
          items: filteredItems,
        }),
      );
      toast.success("Note updated");
    } else {
      dispatch(addNote(title, filteredItems));
      toast.success("Note added");
    }

    close();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-lg w-100">
        <h2 className="text-xl font-semibold mb-4">
          {note ? "Edit Note" : "Add Note"}
        </h2>

        {/* TITLE */}
        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* ITEMS */}
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              className="flex-1 border p-2 rounded"
              placeholder="List item"
              value={item}
              onChange={(e) => updateItem(e.target.value, index)}
            />

            <button className="text-red-500" onClick={() => removeItem(index)}>
              ✕
            </button>
          </div>
        ))}

        <button onClick={addItem} className="text-blue-500 text-sm mb-4">
          + Add Item
        </button>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button onClick={close} className="px-3 py-1 border rounded">
            Cancel
          </button>

          <button
            onClick={save}
            className="px-4 py-1 bg-green-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
