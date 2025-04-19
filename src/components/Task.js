import React from "react";

function Task({ text, category, onDeleteTask }) {
  return (
    <div className="task">
      <p>{text}</p>
      <p className="category">{category}</p>
      <button className="delete" onClick={() => onDeleteTask(text)}>
        X
      </button>
    </div>
  );
}
export default Task;
