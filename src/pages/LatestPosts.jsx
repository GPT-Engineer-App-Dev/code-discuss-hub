const LatestPosts = () => {
  return (
    <div>
      <h1 className="text-3xl">Latest Posts</h1>
      <ul className="list-disc list-inside mt-4">
        <li>
          <h2 className="text-2xl">Understanding React Hooks</h2>
          <p>Author: John Doe</p>
          <p>Date: 2023-10-01</p>
          <p>React hooks are functions that let you use state and other React features without writing a class...</p>
        </li>
        <li>
          <h2 className="text-2xl">Introduction to Kubernetes</h2>
          <p>Author: Jane Smith</p>
          <p>Date: 2023-09-28</p>
          <p>Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications...</p>
        </li>
        <li>
          <h2 className="text-2xl">Getting Started with TensorFlow</h2>
          <p>Author: Alice Johnson</p>
          <p>Date: 2023-09-25</p>
          <p>TensorFlow is an end-to-end open-source platform for machine learning. It has a comprehensive, flexible ecosystem of tools...</p>
        </li>
      </ul>
    </div>
  );
};

export default LatestPosts;