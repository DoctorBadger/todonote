import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";
import plant2 from "../assets/plant2.jpg";

const Dashboard = () => {
  const notes = useSelector((state) => state.todo.notes);
  const navigate = useNavigate();
  const [editNote, setEditNote] = useState(null);

  const lastThree = notes.slice(-3);

  return (
    <div className="relative h-dvh lg:overflow-hidden overflow-y-auto overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url(${plant2})` }}
      />

      <div className="relative min-h-dvh pb-28">
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
