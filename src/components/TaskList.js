import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul>
        {tasks.map(task => {
          return <TaskListItem />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;