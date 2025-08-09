import './App.css';
import { useState, useEffect } from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import { api } from './api';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const { data } = await api.get('/tasks');
      setTasks(data);
    }
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm onAdd={(task) => setTasks([...tasks, task])} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
