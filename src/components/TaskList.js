import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div className="task-list-container">
      {tasks.length ? (
        <ul className="task-list">
          {tasks.map(task => {
            return <TaskListItem task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div>no tasks</div>
      )}
    </div>
  );
};

export default TaskList;
