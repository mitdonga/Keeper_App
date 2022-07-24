import React, { useState } from "react";

export default function InputNote({ submitNote, addNote }) {
  const [noteIteam, setNoteIteam] = useState({
    title: "",
    description: ""
  });

  function inputChange(event) {
    const { name, value } = event.target;

    if (name === "titleInput") {
      setNoteIteam((preValue) => {
        return {
          title: value,
          description: preValue.description
        };
      });
    } else if (name === "desInput") {
      setNoteIteam((preValue) => {
        return {
          title: preValue.title,
          description: value
        };
      });
    }
  }

  function submitNote(event) {
    addNote(noteIteam);
    setNoteIteam({
      title: "",
      description: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          id="titleInput"
          name="titleInput"
          type="text"
          placeholder="Title"
          value={noteIteam.title}
          onChange={inputChange}
        />
        <textarea
          id="desInput"
          name="desInput"
          type="text"
          placeholder="Description"
          value={noteIteam.description}
          onChange={inputChange}
          row="3"
        />
        <button onClick={submitNote}>Add Note</button>
      </form>
    </div>
  );
}
