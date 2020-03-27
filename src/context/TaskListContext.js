import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { task: "read the book", id: 1 },
    { task: "wash the car", id: 2 },
    { task: "write some code", id: 3 }
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
