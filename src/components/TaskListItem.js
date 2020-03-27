import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskListItem = ({ task }) => {
  const { removeTask } = useContext(TaskListContext);
  return (
    <li>
      <span>{task.title}</span>
      <div>
        <button onClick={() => removeTask(task.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
