import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { title: "read the book", id: 1 },
    { title: "wash the car", id: 2 },
    { title: "write some code", id: 3 }
  ]);

  const [editItem, setEditItem] = useState(null);

  //add task
  const addTask = title => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  //remove task
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  //clear tasks
  const clearTasks = () => {
    setTasks([]);
  };

  //find task
  const findTask = id => {
    const foundTask = tasks.find(task => task.id === id);
    setEditItem(foundTask);
  };

  //edit task
  const editTask = (title, id) => {
    
  };

  return (
    <TaskListContext.Provider
      value={{ tasks, addTask, removeTask, clearTasks, findTask, editItem }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
