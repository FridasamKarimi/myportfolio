function Project({ title, description, technologies, link }) {
  return (
    <div className="card bg-dark text-white p-4 shadow mb-4">
      <h3 className="card-title mb-3">{title}</h3>
      <p className="card-text mb-4">{description}</p>
      <p className="card-text mb-4"><strong>Technologies:</strong> {technologies}</p>
      <a
        href={link}
        className="btn btn-primary text-white py-2 px-4 rounded hover-bg-dark"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Developed a full-stack e-commerce website with user authentication and payment integration.",
      technologies: "React, Node.js, MongoDB, Stripe",
      link: "https://github.com/fridasam/ecommerce",
    },
    {
      title: "Task Management App",
      description: "Built a collaborative task management tool with real-time updates.",
      technologies: "React, Firebase, Tailwind CSS",
      link: "https://github.com/fridasam/task-app",
    },
    {
      title: "Machine Learning Classifier",
      description: "Created a sentiment analysis model for social media data.",
      technologies: "Python, Scikit-learn, Pandas",
      link: "https://github.com/fridasam/ml-classifier",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container px-4">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;