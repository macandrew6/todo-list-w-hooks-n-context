import React, { Component } from "react";
import TaskListContextProvider from "../context/TaskListContext";
import TaskList from "./TaskList";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TodoList With Hooks and Context</h2>
          <img
            src="https://am24.mediaite.com/tms/cnt/uploads/2020/01/baby-yoda-big-smile-768x404.jpg"
            alt="loading"
            className="App-logo"
          />
        </div>
        <TaskListContextProvider>
          <TaskList />
        </TaskListContextProvider>
      </div>
    );
  }
}

export default App;
