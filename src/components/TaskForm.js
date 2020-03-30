import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearTasks, editTask, editItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editItem) {
      editTask(title, editItem.id);
    } else {
      addTask(title);
      setTitle("");
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="...type task here"
          value={title}
          type="text"
          required
        />
        <div className="task-form-button-container">
          <button type="submit">{editItem ? "Edit Task" : "Add Task"}</button>
          <button onClick={clearTasks}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
