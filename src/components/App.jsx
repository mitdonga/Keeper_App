import React, { useEffect, useState } from "react";
// import notes from "../notes";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import InputNote from "./InputNote";

function App() {
  // let initialNotes;

  // if (localStorage.getItem("Notes") === null) {
  //   initialNotes = [];
  // } else {
  //   // localStorage.setItem("Notes", "");
  //   initialNotes = localStorage.getItem("Notes");
  // }

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.title.length > 5 || newNote.description.length > 5) {
      setNotes([...notes, newNote]);
      console.log("New task added", newNote);
      // localStorage.setItem("Notes", JSON.stringify(notes));
    } else {
      console.log("Title and description must be 5 charactors long");
      alert("Title and description must be 5 charactors long");
    }
  }

  function handleDelete(id) {
    setNotes((preNotes) => preNotes.filter((note, index) => index !== id));
    console.log(`Task ${id} deleted from App`);
  }

  // useEffect(() => {
  //   localStorage.setItem("Notes", JSON.stringify(notes));
  //   // console.log("notes changed");
  // }, [notes]);

  return (
    <div>
      <Header />
      <InputNote addNote={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            description={noteItem.description}
            handleDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
