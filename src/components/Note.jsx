import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Note({ title, description, id, handleDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}
