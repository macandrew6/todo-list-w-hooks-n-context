import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskListItem = ({ task }) => {
  const { removeTask, findTask } = useContext(TaskListContext);
  return (
    <li className="task-list-item">
      <span>{task.title}</span>
      <div>
        <button onClick={() => removeTask(task.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findTask(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
