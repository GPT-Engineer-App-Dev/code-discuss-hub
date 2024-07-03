const Categories = () => {
  return (
    <div>
      <h1 className="text-3xl">Categories</h1>
      <ul className="list-disc list-inside mt-4">
        <li>
          <h2 className="text-2xl">Web Development</h2>
          <p>Discussions about HTML, CSS, JavaScript, and more.</p>
          <p>Posts: 120</p>
        </li>
        <li>
          <h2 className="text-2xl">Mobile Development</h2>
          <p>Discussions about iOS, Android, and cross-platform development.</p>
          <p>Posts: 80</p>
        </li>
        <li>
          <h2 className="text-2xl">Data Science</h2>
          <p>Discussions about data analysis, visualization, and tools.</p>
          <p>Posts: 60</p>
        </li>
        <li>
          <h2 className="text-2xl">DevOps</h2>
          <p>Discussions about CI/CD, automation, and infrastructure as code.</p>
          <p>Posts: 50</p>
        </li>
        <li>
          <h2 className="text-2xl">AI & Machine Learning</h2>
          <p>Discussions about algorithms, models, and tools.</p>
          <p>Posts: 70</p>
        </li>
      </ul>
    </div>
  );
};

export default Categories;