import React from "react";

const TaskListItem = () => {
  return (
    <li>
      <span>Task Title</span>
      <div>
        <button>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
