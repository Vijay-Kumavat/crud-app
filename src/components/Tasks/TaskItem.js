import React from 'react';

function TaskItem({ task, deleteTask, setEditingTask, toggleComplete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="task-checkbox"
        />
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-actions">
        <button 
          onClick={() => setEditingTask(task)} 
          className="btn edit-btn"
          disabled={task.completed}
        >
          Edit
        </button>
        <button 
          onClick={() => deleteTask(task.id)} 
          className="btn delete-btn"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;