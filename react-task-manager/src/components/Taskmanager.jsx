import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() === '') return;
    setTasks([...tasks, { text: taskText.trim(), completed: false }]);
    setTaskText('');
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true :
    filter === 'completed' ? task.completed :
    !task.completed
  );

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">📝 Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
          placeholder="Add new task..."
          className="flex-grow p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        >
          Completed
        </button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded border dark:border-gray-600 ${
              task.completed
                ? 'bg-green-100 dark:bg-green-800 line-through text-gray-500 dark:text-gray-300'
                : 'bg-white dark:bg-gray-800 dark:text-white'
            }`}
          >
            <span>{task.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => toggleComplete(index)}
                className="text-sm text-blue-600 dark:text-blue-300 hover:underline"
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="text-sm text-red-600 dark:text-red-400 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

