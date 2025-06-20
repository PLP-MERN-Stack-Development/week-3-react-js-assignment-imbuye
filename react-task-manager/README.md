# React Task Manager 🧠 + Comments Viewer 💬

This is a responsive React application built with **Vite**, **JSX**, and **Tailwind CSS**. It includes:

- 🧩 Reusable components (Button, Card, Navbar, Footer)
- ✅ Task Manager (add, complete, delete, filter tasks)
- 🌐 Comments fetched from a real API (DummyJSON)
- 🔍 Search and pagination for comments
- 🌙 Light/Dark mode toggle with `useContext`
- 💅 Clean responsive UI using Tailwind utility classes

---

## 🚀 Live Demo

🔗 [Click here to view the deployed app]([![Netlify Status](https://api.netlify.com/api/v1/badges/f8126aed-3419-458a-a955-d3dfcaecf36b/deploy-status)](https://app.netlify.com/projects/ivette-react-task-manager/deploys))

---

## 🧪 Features

| Feature         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| ✅ Task Manager | Add, complete, delete, and filter tasks                                     |
| 💬 API Fetching | Fetch readable English comments from DummyJSON                             |
| 🔍 Search       | Search through usernames or comment content                                |
| ➕ Pagination    | Paginate comment list (10 per page)                                         |
| 🌙 Theme Toggle | Switch between Light/Dark mode using context & Tailwind                     |
| 📱 Responsive    | Works smoothly on mobile, tablet, and desktop                              |
| 💻 Built With    | React, Vite, Tailwind CSS, JavaScript, DummyJSON API                       |

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PostList.jsx
│   └── TaskManager.jsx
├── context/
│   └── ThemeContext.jsx
├── layouts/
│   └── Layout.jsx
├── App.jsx
└── main.jsx

