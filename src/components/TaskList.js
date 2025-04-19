/*import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {tasks.map((task,index,category)=>(
        <Task key={index} task={task} category={category} />
      ))}

    </div>
  );
}

export default TaskList;*/

import React from "react";
import Task from "./Task";

/*function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}*/
function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;