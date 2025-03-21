import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 

const EditNotes = ({ notes, updateNote }) => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const noteToEdit = notes.find(note => note.id === Number(id));

  // ✅ Local state for input field
  const [text, setText] = useState(noteToEdit?.text || "");

  const handleUpdate = () => {
    updateNote(Number(id), text); // ✅ Note update ho raha hai
    toast.success("Updated successfully!", { theme: "dark" }); // ✅ Success Toast
    navigate("/read"); // ✅ Update ke baad /read pe redirect hoga
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[30rem] max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Note</h2>

        <textarea
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)} // ✅ Input editable ho gaya
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNotes;
