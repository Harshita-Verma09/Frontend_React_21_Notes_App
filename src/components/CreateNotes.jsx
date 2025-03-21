import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateNote = ({ notes, setNotes }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; 

    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text }]);
    setText("");

    // ✅ Pehle success toast show karo
    toast.success('Create successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // ✅ 2 second baad /read route pr navigate karvao
    setTimeout(() => {
      navigate("/read");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[30rem] max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Create Note</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            placeholder="Write your note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px] resize-none"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
