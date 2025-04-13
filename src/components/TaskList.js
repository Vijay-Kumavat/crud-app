import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, setEditingTask, toggleComplete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;