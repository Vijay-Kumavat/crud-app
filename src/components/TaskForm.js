import { useEffect, useState } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      updateTask(editingTask.id, { ...editingTask, title });
    } else {
      addTask(title);
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      ></input>
      <button type="submit" className="btn add-btn">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
      {editingTask && (
        <button
          type="button"
          onClick={() => updateTask(null)}
          className="btn cancel-btn"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;
