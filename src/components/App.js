import React, { Component } from "react";
import TaskListContextProvider from "../context/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "../App.css";

class App extends Component {
  render() {
    return (
      <TaskListContextProvider>
        <div className="App">
          <div className="App-header">
            <h2>TodoList With Hooks and Context</h2>
            <img
              src="https://am24.mediaite.com/tms/cnt/uploads/2020/01/baby-yoda-big-smile-768x404.jpg"
              alt="loading"
              className="App-logo"
            />
          </div>
          <TaskForm />
          <TaskList />
        </div>
      </TaskListContextProvider>
    );
  }
}

export default App;
