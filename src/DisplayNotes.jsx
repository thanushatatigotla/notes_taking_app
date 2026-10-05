import React, { useContext } from "react";
import { ContextApi } from "./Notecontext";

const DisplayNotes = () => {
  const { task, theme } = useContext(ContextApi);

  return (
    <section className={`displaynotes ${theme}`}>
      <h2>My Notes</h2>

      {task.length === 0 ? (
        <p className="no-notes">No notes added yet.</p>
      ) : (
        <div className="notes-list">
          {task.map((note) => (
            <div className="note-card" key={note.id}>
              <h3>{note.title}</h3>

              <p>{note.description}</p>

              <span className="category">
                {note.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DisplayNotes;