import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteApp from "./components/NoteApp";
import CreateNote from "./components/CreateNotes";
import EditNote from "./components/EditNotes";
import ReadNotes from "./components/ReadNotes";
import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]); // ✅ Notes ko yahan store kiya

  // ✅ Ye function note delete karega
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };
  const updateNote = (id, newText) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, text: newText } : note)));
  };

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoteApp />} /> {/* ✅ Home Route */}
        <Route path="/create" element={<CreateNote notes={notes} setNotes={setNotes} />} />
        <Route path="/edit/:id" element={<EditNote notes={notes} updateNote={updateNote} />} />
        <Route path="/read" element={<ReadNotes notes={notes} deleteNote={deleteNote} />} />
      </Routes>
    </Router>
  );
}

export default App;
