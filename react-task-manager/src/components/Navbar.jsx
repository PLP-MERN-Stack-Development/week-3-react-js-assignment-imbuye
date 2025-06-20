// src/components/Navbar.jsx
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">🌟 Task Manager</h1>
      <button
        onClick={toggleTheme}
        className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}

