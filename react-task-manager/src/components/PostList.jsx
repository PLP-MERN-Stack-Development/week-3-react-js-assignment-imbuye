// src/components/PostList.jsx
import { useEffect, useState } from 'react';

export default function PostList() {
  const [comments, setComments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/comments');
        if (!res.ok) throw new Error('Failed to fetch comments');
        const data = await res.json();
        setComments(data.comments);
        setFiltered(data.comments);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  useEffect(() => {
    const result = comments.filter(comment =>
      comment.body.toLowerCase().includes(search.toLowerCase()) ||
      comment.user.username.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
    setPage(1); // Reset to page 1 when searching
  }, [search, comments]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">💬 User Comments</h2>

      <input
        type="text"
        placeholder="Search by username or comment..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 px-3 py-2 border rounded w-full dark:bg-gray-900 dark:text-white dark:border-gray-700"
      />

      {loading && <p className="text-gray-500">⏳ Loading comments...</p>}
      {error && <p className="text-red-500">❌ {error}</p>}

      <ul className="space-y-4">
        {paginated.map(comment => (
          <li key={comment.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-semibold mb-1 text-blue-700 dark:text-blue-400">
              @{comment.user.username}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{comment.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          disabled={page === 1}
        >
          ⬅ Prev
        </button>
        <span className="text-gray-600 dark:text-gray-300">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          disabled={page === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

