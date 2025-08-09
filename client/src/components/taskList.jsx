import { api } from '../api';

export default function taskList({ tasks, setTasks }) {
  const toggleTask = async (id) => {
    const { data } = await api.put(`/tasks/${id}`);
    setTasks(tasks.map(t => t._id === id ? data : t));
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <span
            className={task.completed ? 'completed' : ''}
            onClick={() => toggleTask(task._id)}
          >
            {task.title}
          </span>
          <button onClick={() => deleteTask(task._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
