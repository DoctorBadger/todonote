import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.unshift(action.payload);
      },
      prepare: (title, items, urgent = "false") => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            items: items,
            date: Date.now(),
            urgent,
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
        note.urgent = action.payload.urgent;
      }
    },
    deleteItem: (state, action) => {
      const note = state.notes.find((n) => n.id === action.payload.noteId);
      if (note) note.items.splice(action.payload.index, 1);
    },
    reorderNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { addNote, deleteNote, editNote, deleteItem, reorderNotes } = todoSlice.actions;

export default todoSlice.reducer;
