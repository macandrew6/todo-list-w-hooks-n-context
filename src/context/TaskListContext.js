import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { title: "read the book", id: 1 },
    { title: "wash the car", id: 2 },
    { title: "write some code", id: 3 }
  ]);

  //add task
  const addTask = title => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
