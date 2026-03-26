import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../app/authSlice";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";
import bg from "../assets/bg.jpg";
import UserMenu from "../components/UserMenu";

const Dashboard = () => {
  const [editNote, setEditNote] = useState(null);
  const notes = useSelector((state) => state.todo.notes);
  const user = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lastThree = notes.slice(-3);

  function handleLogout() {
    dispatch(logout());
    navigate("/");
    return;
  }

  function naviAdmin() {
    navigate("/admin");
  }

  return (
    <div className="relative h-dvh lg:overflow-hidden overflow-y-auto overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="relative min-h-dvh mt-4 pb-28">
        <div className="flex justify-end p-4">
          <UserMenu
            user={user}
            onLogout={handleLogout}
            onNavigateAdmin={naviAdmin}
          />
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
            className="p font-bold px-8 py-3 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer"
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