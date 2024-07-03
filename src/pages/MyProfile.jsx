const MyProfile = () => {
  return (
    <div>
      <h1 className="text-3xl">My Profile</h1>
      <div className="mt-4">
        <h2 className="text-2xl">Username: techguru</h2>
        <p>Email: techguru@example.com</p>
        <p>Bio: Passionate about technology and sharing knowledge.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl">My Posts</h2>
        <ul className="list-disc list-inside">
          <li>Understanding React Hooks</li>
          <li>Introduction to Kubernetes</li>
          <li>Getting Started with TensorFlow</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;