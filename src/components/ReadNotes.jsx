import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const ReadNotes = ({ notes, deleteNote }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[30rem] max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Your Notes</h2>

        {notes.length === 0 ? (
          <p className="text-center text-gray-400">
            No notes available.{" "}
            <Link to="/create" className="text-blue-400">
              Create one?
            </Link>
          </p>
        ) : (
          <ul className="space-y-3">
            {notes.map((note) => (
              <li key={note.id} className="p-3 bg-gray-700 rounded-lg flex justify-between items-center">
                <span>{note.text}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      deleteNote(note.id);
                      toast.success("Note deleted successfully!", { theme: "dark" });
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition duration-200"
                  >
                    Delete
                  </button>

                  <Link to={`/edit/${note.id}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-lg transition duration-200">
                      Edit
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <Link to="/create">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
              Create Note
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadNotes;
