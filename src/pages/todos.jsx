import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";
import { logout } from "../app/authSlice";
import Avatar from "react-avatar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Todos = () => {
  const notes = useSelector((state) => state.todo.notes);
  const user = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  const filteredNotes = notes.filter((note) => {
    const query = search.toLowerCase();

    const titleMatch = note.title.toLowerCase().includes(query);

    const itemsMatch = note.items.some((item) =>
      item.toLowerCase().includes(query),
    );

    const searchMatch = titleMatch || itemsMatch;

    if (!filter) return searchMatch;

    const noteDate = new Date(note.date).toDateString();
    const selectedDate = filter.toDateString();

    return searchMatch && noteDate === selectedDate;
  });

  return (
    <div className="min-h-dvh bg-gray-100 p-5">
      <div className="flex justify-end p-4">
        <Avatar
          name={user?.name}
          size="40"
          round={true}
          colour="#3A5B22"
          textSizeRatio={2}
          onClick={() => setMenu(!menu)}
          className="cursor-pointer"
        />
        {menu && (
          <div className="absolute right-6 top-16 w-40 shadow-lg rounded-lg border">
            <p className="px-4 py-2 text-sm border-b bg-[#76b14c] rounded-t-xl">
              {user?.name}
            </p>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-b-lg bg-red-500 hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-between mb-10 mt-10">
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
         <div className="flex flex-wrap items-center gap-4 w-full mb-6">
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5B22]"
          />
          <DatePicker
            selected={filter}
            onChange={(date) => setFilter(date)}
            placeholderText="Filter By Date"
            dateFormat="dd/MM/yyyy"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5B22]"
          />
          <button
            onClick={() => setFilter(null)}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg transition"
          >
            Clear Date
          </button>
          </div>
          {filteredNotes.map((note) => (
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
