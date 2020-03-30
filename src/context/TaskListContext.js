import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));
    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        editItem,
        addTask,
        removeTask,
        clearTasks,
        findTask,
        editTask
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
