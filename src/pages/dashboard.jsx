import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../app/authSlice";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";
import bg from "../assets/bg.jpg";
import Avatar from "react-avatar";

const Dashboard = () => {
  const [editNote, setEditNote] = useState(null);
  const [menu, setMenu] = useState(false);
  const notes = useSelector((state) => state.todo.notes);
  const user = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lastThree = notes.slice(-3);

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <div className="relative h-dvh lg:overflow-hidden overflow-y-auto overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="relative min-h-dvh pb-28">
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
        <p className="text-6xl font-medium text-center text-black/70 mb-10 mt-10 drop-shadow-6xl">
          Dashboard
        </p>

      {lastThree.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-7xl font-medium text-black/30 text-center">
              No Notes Yet
          </p>
        </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch ml-5 mr-5">
            {lastThree.map((note) => (
              <div key={note.id}>
                <NoteCard note={note} onEdit={() => setEditNote(note)} />
              </div>
            ))}
          </div>
        )}

        <div className="flex absolute bottom-14 right-6">
          <button
            onClick={() => navigate("/todos")}
            className="bg-[#3A5B22] hover:bg-[#2f4a1a] text-white px-5 py-2 rounded-lg transition"
          >
            See All
          </button>
        </div>
      </div>

      {editNote && (
        <NoteModal note={editNote} close={() => setEditNote(null)} />
      )}
    </div>
  );
};

export default Dashboard;
