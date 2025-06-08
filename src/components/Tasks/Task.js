import { useState } from 'react';
import './Task.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Task() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build CRUD App', completed: false },
    { id: 3, title: 'Deploy Application', completed: false }
  ]);

  const [editingTask, setEditingTask] = useState(null);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updateTask) => {
    setTasks(tasks.map(task => task.id === id ? updateTask : task));
    setEditingTask(null);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  }

  return (
    <div className='app-container'>
      <h1>React CRUD Task Manager</h1>
      <TaskForm 
        addTask={addTask} 
        editingTask={editingTask}
        updateTask={updateTask}
      />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        setEditingTask={setEditingTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default Task;
