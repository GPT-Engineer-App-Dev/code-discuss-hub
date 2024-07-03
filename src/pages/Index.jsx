const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to the Tech Discussions Forum</h1>
      <p>Engage in discussions, share knowledge, and stay updated with the latest in tech.</p>
      <div className="mt-8">
        <h2 className="text-2xl">Categories</h2>
        <ul className="list-disc list-inside">
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Data Science</li>
          <li>DevOps</li>
          <li>AI & Machine Learning</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl">Latest Posts</h2>
        <ul className="list-disc list-inside">
          <li>Understanding React Hooks</li>
          <li>Introduction to Kubernetes</li>
          <li>Getting Started with TensorFlow</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;