import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul>
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
