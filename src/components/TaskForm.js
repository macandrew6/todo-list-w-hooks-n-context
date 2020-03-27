import React, { useState, useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearTasks } = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="...type task here"
        value={title}
        type="text"
        required
      />
      <div className="form-button-container">
        <button type="submit">Add Task</button>
        <button onClick={clearTasks}>Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
