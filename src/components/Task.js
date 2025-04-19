/*import React from "react";

function Task({task}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;*/

import React from "react";

/*function Task({ text, category }) {
  return (
    <div className="task">
      <p>{text}</p>
      <p className="category">{category}</p>
      <button className="delete">X</button>
    </div>
  );
}*/

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
