import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

let savedNotes = [];

try {
  savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
} catch {
  savedNotes = [];
}

const initialState = {
  notes: savedNotes,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
      },
      prepare: (title, items) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            items: items,
            date: Date.now(),
          },
        };
      },
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const note = state.notes.find((n) => n.id === action.payload.id);
      if (note) {
        note.title = action.payload.title;
        note.items = action.payload.items;
        note.updated = Date.now();
      }
    },
    deleteItem: (state, action) => {
      const note = state.notes.find((n) => n.id === action.payload.noteId);
      if (note) note.items.splice(action.payload.index, 1);
    },
  },
});

export const { addNote, deleteNote, editNote, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
