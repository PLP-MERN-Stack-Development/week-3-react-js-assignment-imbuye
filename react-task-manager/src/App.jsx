import Layout from './layouts/Layout';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';

export default function App() {
  return (
    <Layout>
      <TaskManager />
      <PostList />
    </Layout>
  );
}




