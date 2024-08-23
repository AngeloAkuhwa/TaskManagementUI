import React from "react";

const TaskItem = ({ task }) => {
  return (
    <li>
      <div className="task-item">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
        {/* Add other task details and UI elements */}
      </div>
    </li>
  );
};

export default TaskItem;
