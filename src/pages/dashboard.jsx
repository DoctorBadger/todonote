import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
    <div className="relative h-dvh overflow-hidden p-10">

      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url(${plant2})` }}
      />

      <div className="relative z-10 h-dvh">

        <h1 className="text-4xl font-medium text-center mb-10">
          Dashboard
        </h1>

        {lastThree.length === 0 ? (
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-7xl font-medium text-black/30 text-center">
              No Notes Yet
            </p>
          </div>
        ) : (
          <div className="flex gap-6 justify-center">

            {lastThree.map((note) => (
              <div key={note.id} className="w-72">
                <NoteCard
                  note={note}
                  onEdit={() => setEditNote(note)}
                />
              </div>
            ))}

          </div>
        )}

        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/todos")}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
          >
            See All
          </button>
        </div>

      </div>

      {editNote && (
        <NoteModal
          note={editNote}
          close={() => setEditNote(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;