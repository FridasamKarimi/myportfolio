function Project({ title, description, technologies, link }) {
    return (
      <div className="bg-bgDark border border-accent rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold mb-3 text-secondary">{title}</h3>
        <p className="text-textSecondary mb-4">{description}</p>
        <p className="text-textSecondary mb-4"><strong>Technologies:</strong> {technologies}</p>
        <a
          href={link}
          className="inline-block bg-secondary text-bgDark font-medium py-2 px-4 rounded hover:bg-primary transition-colors duration-200"
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
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;